from flask import Flask, jsonify, request
import db_con
import logging
import sql_queries
app = Flask(__name__)

#__functions__________________________________________________________________________________

def pyodbc_row_to_dic(cursor, rows):
    row = rows[0]
    columns = [column[0] for column in cursor.description]
    result = dict(zip(columns, row))
    return result





#____________________________________________________________________________________



@app.route('/')
def index():
    return "index_page"


# user type:
# 0 -> customer
# 1 -> employee

# Assumptions
# 1. This api assumes there are no employees and customers with the same username and password. If this assumption is broken
# the customer will be authorized, not the employee
# 2. This api assumes all customer and employee usernames and passwords are unique. To safegaurd, only the first record will be returned
@app.route("/sign_in", methods=["POST"]) # data points: username and password ADD EMAIL checking also
def sign_in_post(): 
    
    # default values
    usert_type = -1 # this is the user type, init for failure    
    user_record = '[]' # data of user returned if successfull
    auth_status = False # assume false
    try:
        input_json = request.get_json(force=True)
        # get data from request
        if input_json is None:
            return jsonify({
                'status_code': "403",
                'status_verbose': "No data received",
                'user_type': usert_type,
                'auth_successful': False})
        user_login_json = input_json.get('data', None)

        # check format correct
        if user_login_json is None or 'username' not in user_login_json or 'password' not in user_login_json:
            return jsonify({
                'status_code': "403",
                'status_verbose': "Data received but not proper format, please use {'data': {'username': <username>, 'password': <password>}}",
                'user_type': usert_type,
                'auth_successful': False})

    except Exception as e: # no input or data failed to recieve

        logging.warning(e)
        dictToReturn = {
            'status_code': "400",
            'status_verbose': "data not recieved",
                'user_type': usert_type,
                'auth_successful': False}

    else:

        con = db_con.create_connection()

        if con == False: # db con failed
            dictToReturn = {
                'status_code': "403",
                'status_verbose': "data recieved but connection to db failed",
                'user_type': usert_type,
                'auth_successful': False}

        else: # db con successfull open cursor

            cursor = con.cursor()
            
            # AUTH START
            
            # get customer with username.
            cursor.execute(sql_queries.SQL_AUTH_LOGIN_CUSTOMER.format(username=str(user_login_json['username']),password=str(user_login_json['password'])))
            results_cust_base = cursor.fetchall()

            # successfull auth customer
            if results_cust_base:
                results_customer = pyodbc_row_to_dic(cursor,results_cust_base)
                usert_type = 0 
                auth_status = True
                user_record = results_customer

            else:
                 # get employee with username.
                cursor.execute(sql_queries.SQL_AUTH_LOGIN_EMPLOYEE.format(username=str(user_login_json['username']),password=str(user_login_json['password'])))
                results_emp_base = cursor.fetchall()

                # successfull auth customer
                if results_emp_base:
                    results_employee = pyodbc_row_to_dic(cursor, results_emp_base)
                    usert_type = 0 
                    auth_status = True
                    user_record = results_employee



            



            cursor.close()
            db_con.destroy_connection(con)
        dictToReturn = { # successfully pulled from database 1. auth success 2. auth unsuccessfull
                'status_code': "200",
                'status_verbose': "successfully queried database",
                'user_type': usert_type,
                'auth_successful': auth_status,
                'user_record': user_record}
    
    return jsonify(dictToReturn)
        
    

# @app.route("/sign_up") 
# def sign_up_post():
    

    