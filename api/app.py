from flask import Flask, request, jsonify
import db_con
import logging
import json
import json_schemas
import sql_queries
import json_responses as jsn_resp
import datetime
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


# This api endpoint authorizes logins to the website by cross checking with the database and returning an appropriate response
# -- user type:
# 0 -> customer
# 1 -> employee
# -- Assumptions
# 1. This api endpoint assumes there are no employees and customers with the same username and password. If this assumption is broken
# the customer will be authorized, not the employee
# 2. This api assumes all customer and employee usernames and passwords are unique. To safegaurd, only the first record will be returned
@app.route("/sign_in", methods=["GET"]) # data points: username and password ADD EMAIL checking also
def sign_in_post(): 
    try:
        # default values
        usert_type = -1 # this is the user type, init for failure    
        user_record = '[]' # data of user returned if successfull
        auth_status = False # assume false
        try:
            input_json = request.get_json(force=True)
            # get data from request
            if input_json is None:
                return jsn_resp.sign_in_auth_response("403", "No data received",False, user_type=usert_type)
            user_login_json = input_json.get('data', None)

            # check format correct
            if user_login_json is None or 'username' not in user_login_json or 'password' not in user_login_json:
                return jsn_resp.sign_in_auth_response("403", 'Data received but not proper format, please use {"data": {"username": <username>, "password": <password>}}',False, user_type=usert_type)
        

        except Exception as e: # no input or data failed to recieve

            logging.warning(e)
            dictToReturn = jsn_resp.sign_in_auth_response("400", "data not recieved",False,user_type=usert_type)

        else:

            con = db_con.create_connection()

            if con == False: # db con failed
                dictToReturn = jsn_resp.sign_in_auth_response("400", "data recieved but connection to db failed",False,user_type=usert_type)


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
                        usert_type = 1
                        auth_status = True
                        user_record = results_employee



                cursor.close()
                db_con.destroy_connection(con)
            # successfully pulled from database 1. auth success 2. auth unsuccessfull
            dictToReturn = jsn_resp.sign_in_auth_response("200", "successfully queried database",auth_status,user_record,usert_type)
        return dictToReturn
    except Exception as e:
        return jsonify({"error": str(e)})

        



# This Api endpoint will allow db record creation in the database for the customer table. Mandatory fields listed below
# Assumptions: 
#   -this api always requires user to send json object or will return 400 bad request
#   -this api assumes that all the types are correct, ie typechecking in the frontend
# COMMUNICATE TO FE TEAM THAT : even if a nullable field has null in it please include it in the input json for stability.
# -- Mandatory fields
@app.route("/sign_up", methods=["POST"])
def sign_up_post():
    # get data
    try:
    # getting and verifying proper data format
        input_json = request.get_json(force=True)

        if input_json == None: # no data recieved
             return jsn_resp.customer_sign_up_response(403,"data format not right", raw_error="no data recieved response")
        
        create_customer_full_json = input_json.get('data', None)

        # We are checking if user_input json has the correct keys by cross checking against schema. 
        if type(create_customer_full_json) != type({"data": "data"}):
             return jsn_resp.customer_sign_up_response(403,"data format not right", raw_error="no keys provided, please follow " + json.dumps({"data":json_schemas.customer_sign_up_json_resp}))
        
        try:
            create_customer_json = create_customer_full_json.get('customer', None)
            create_customer_address_json = create_customer_full_json.get('address', None)
        except:
            return jsn_resp.customer_sign_up_response(403,"data format not right", raw_error=json.dumps({'keys not like':{"data":json_schemas.customer_sign_up_json_resp}}))

        if json_schemas.customer_sign_up_json_resp.keys() != create_customer_full_json.keys() or create_customer_address_json.keys() != json_schemas.customer_sign_up_json_resp['address'].keys()  or create_customer_json.keys() != json_schemas.customer_sign_up_json_resp['customer'].keys():
            return jsn_resp.customer_sign_up_response(403,"data format not right", raw_error=json.dumps({'keys not like':{"data":json_schemas.customer_sign_up_json_resp}}))
            
        # verified data flows below.
        # INSERT TO DB
        # create database connection
        
        con = db_con.create_connection()

        if con == False: # db con failed
            return jsn_resp.customer_sign_up_response("400", "data recieved but connection to db failed")


        else: # db con successfull open cursor
            cursor = con.cursor()


            # first we add the address
            # get the addresses into a tuple
            request_address_list = [create_customer_address_json.get('Street_Address'), create_customer_address_json.get('City'),create_customer_address_json.get('Zipcode'),create_customer_address_json.get('State')]
            request_address_tuple = tuple(request_address_list)
            
            # get the sql query
            address_query = sql_queries.SQL_ADDRESS
            #try to execute with the db connection
            try:
                cursor.execute(address_query, request_address_tuple)
                    # dont forget to commit the changes you made... Caused me a lot of headaches
                con.commit()
                
                # pull the address primary key as it is auto incremented
                customer_address_db_record_query = sql_queries.SQL_LAST_INSERTED_PK.format(tablename='dbo.Address',columnname='Address_ID')
                cursor.execute(customer_address_db_record_query)
                customer_address_db_record_query_results = cursor.fetchall()

                customer_address_db_record_query_results = pyodbc_row_to_dic(cursor,customer_address_db_record_query_results)
               

            except Exception as e:
                db_con.destroy_connection(con) # remember to close the connection even if the execution doesnt work
                return jsn_resp.customer_sign_up_response(403, "problem with customer address record insertion and selection",raw_error=str(e))


            # now that we have pulled the primary key lets link it to the customer entity during creation
            request_customer_attributes_list = [create_customer_json.get('Username'),create_customer_json.get('Password'), create_customer_json.get('Phone_Number'),create_customer_json.get('Email'), create_customer_json.get('First_Name'), create_customer_json.get('Last_Name'),create_customer_json.get('Sex'),dict(customer_address_db_record_query_results).get('Address_ID')]
            request_customer_attributes_tuple = tuple(request_customer_attributes_list)
            # get the sql query
            customer_query = sql_queries.SQL_CUSTOMER_SIGNUP
            #try to execute with the db connection
            try:
                cursor.execute(customer_query, request_customer_attributes_tuple)
                # dont forget to commit the changes you made... Caused me a lot of headaches
                con.commit()
                # pull the address primary key as it is auto incremented
                customer_db_record_query = sql_queries.SQL_LAST_INSERTED_PK.format(tablename='dbo.Customer',columnname='CustomerID')
                cursor.execute(customer_db_record_query)
                customer_db_record_query_results = cursor.fetchall()

            except Exception as error:
                db_con.destroy_connection(con) # remember to close the connection even if the execution doesnt work
                return jsn_resp.customer_sign_up_response(403, "problem with customer record insertion and selection",raw_error=str(error))
            

            db_con.destroy_connection(con)

        return jsn_resp.customer_sign_up_response(200,"success", data={"customer_address_record":customer_address_db_record_query_results, "customer_record": jsn_resp.sign_up_customer_response(customer_db_record_query_results[0])},user_type=0)
    except Exception as e:
        return jsn_resp.customer_sign_up_response(403,"data format not right", raw_error=str(e))

    


# This Api endpoint will allow db record creation in the database for the employee table. Mandatory fields listed below
# Assumptions: 
#   -this api always requires user to send json object or will return 400 bad request
#   -this api assumes that all the types are correct, ie typechecking in the frontend
# COMMUNICATE TO FE TEAM THAT : even if a nullable field has null in it please include it in the input json for stability.
# -- Mandatory fields
@app.route("/emp_sign_up", methods=["POST"])
def employee_sign_up():
    # get data
    try:
    # getting and verifying proper data format
        input_json = request.get_json()

        if input_json == None: # no data recieved
             return jsn_resp.employee_sign_up_response(403,"data format not right", raw_error="no data recieved response")
        
        create_employee_full_json = input_json.get('data', None)

        # We are checking if user_input json has the correct keys by cross checking against schema. 
        if type(create_employee_full_json) != type({"data": "data"}):
             return jsn_resp.employee_sign_up_response(403,"data format not right, use this", raw_error={"data":json_schemas.employee_sign_up_json_resp})
        
        try:
            create_employee_json = create_employee_full_json.get('employee', None)
            create_employee_address_json = create_employee_full_json.get('address', None)
        except:
            return jsn_resp.employee_sign_up_response(403,"data format not right", raw_error={'keys not like':{"data":json_schemas.employee_sign_up_json_resp}})

        if json_schemas.employee_sign_up_json_resp.keys() != create_employee_full_json.keys() or create_employee_address_json.keys() != json_schemas.employee_sign_up_json_resp['address'].keys()  or create_employee_json.keys() != json_schemas.employee_sign_up_json_resp['employee'].keys():
            return jsn_resp.employee_sign_up_response(403,"data format not right", raw_error={'keys not like':{"data":json_schemas.employee_sign_up_json_resp}})
            
        # verified data flows below.
        # INSERT TO DB
        # create database connection
        
        con = db_con.create_connection()

        if con == False: # db con failed
            return jsn_resp.employee_sign_up_response("400", "data recieved but connection to db failed")


        else: # db con successfull open cursor
            cursor = con.cursor()


            # first we add the address
            # get the addresses into a tuple
            request_address_list = [create_employee_address_json.get('Street_Address'), create_employee_address_json.get('City'),create_employee_address_json.get('Zipcode'),create_employee_address_json.get('State')]
            request_address_tuple = tuple(request_address_list)
            
            # get the sql query
            address_query = sql_queries.SQL_ADDRESS
            #try to execute with the db connection
            try:
                cursor.execute(address_query, request_address_tuple)
                    # dont forget to commit the changes you made... Caused me a lot of headaches
                con.commit()
                
                # pull the address primary key as it is auto incremented
                employee_address_db_record_query = sql_queries.SQL_LAST_INSERTED_PK.format(tablename='dbo.Address',columnname='Address_ID')
                cursor.execute(employee_address_db_record_query)
                employee_address_db_record_query_results = cursor.fetchall()

                employee_address_db_record_query_results = pyodbc_row_to_dic(cursor,employee_address_db_record_query_results)
               

            except Exception as e:
                db_con.destroy_connection(con) # remember to close the connection even if the execution doesnt work
                return jsn_resp.employee_sign_up_response(403, "problem with employee address record insertion and selection",raw_error=str(e))

            # now that we have pulled the primary key lets link it to the employee entity during creation
            

            employee_type = 0  # basic employee
            request_employee_attributes_list = [employee_type,create_employee_json.get('Username'),create_employee_json.get('Password'), create_employee_json.get('Phone_Number'),create_employee_json.get('Email'), create_employee_json.get('First_Name'), create_employee_json.get('Last_Name'),create_employee_json.get('Sex'),dict(employee_address_db_record_query_results).get('Address_ID')]
            request_employee_attributes_tuple = tuple(request_employee_attributes_list)
            # get the sql query
            employee_query = sql_queries.SQL_EMPLOYEE_SIGNUP
            #try to execute with the db connection
            try:
                cursor.execute(employee_query, request_employee_attributes_tuple)
                # dont forget to commit the changes you made... Caused me a lot of headaches
                con.commit()
                # pull the address primary key as it is auto incremented
                employee_db_record_query = sql_queries.SQL_LAST_INSERTED_PK.format(tablename='dbo.Employee',columnname="EmployeeID")
                cursor.execute(employee_db_record_query)
                employee_db_record_query_results = cursor.fetchall()
            except Exception as error:
                db_con.destroy_connection(con) # remember to close the connection even if the execution doesnt work
                return jsn_resp.employee_sign_up_response(403, "problem with employee record insertion and selection",raw_error=str(error))
            

            db_con.destroy_connection(con)
        try:
            return jsn_resp.employee_sign_up_response(200,"success", data={"employee_address_record":employee_address_db_record_query_results, "employee_record": jsn_resp.sign_up_employee_response(employee_db_record_query_results[0])},user_type=1)
        except Exception as e:
            return jsn_resp.employee_sign_up_response(403,"data format not right", raw_error=str(e))
    except Exception as e:
        return jsn_resp.employee_sign_up_response(403,"api base catch all error", raw_error=str(e))



    