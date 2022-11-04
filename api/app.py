from flask import Flask, jsonify, request
import db_con
import logging
import sql_queries
app = Flask(__name__)

@app.route("/sign_in", methods=["POST"]) # data points: username and password
def sign_in_post(): 

    try:
        input_json = request.get_json(force=True)
        # get data from request
        user_login_json_auth = input_json.get('data', None)

    except Exception as e: # no input or data failed to recieve

        logging.warning(e)
        dictToReturn = {
            'status_code': "400",
            'status_verbose': "data not recieved"}

    else:

        con = db_con.create_connection()

        if con == False: # db con failed
            dictToReturn = {
                'status_code': "403",
                'status_verbose': "data recieved but connection to db failed"}

        else: # db con successfull open cursor
            cursor = con.cursor()
            
            # AUTH START
            
            # get customer with username.
            cursor.execute(sql_queries.SQL_AUTH_LOGIN_CUSTOMER, user_login_json_auth['username'])
            results = cursor.fetchall()

            print(results)



            cursor.close()
            db_con.destroy_connection(con)
            dictToReturn = {
                'status_code': "200",
                'status_verbose': "success"}
    
    return jsonify(dictToReturn)
        
    

@app.route("/sign_up") 
def sign_up_post():
    
    con = db_con.create_connection()

    if con == False:
        return {'d':"da"}

    cursor = con.cursor()


    sql = """INSERT INTO dbo.Customer
    (Username, Password, Phone_Number, Email, First_Name, Last_Name, Sex)
    VALUES ('TestAdmin1', 'TestAdmin123', '8327216070', 'thegreatMHK200@gmail.com', 'Bob', 'Johnson', 'M')"""
    cursor.execute(sql)
    con.commit()
    cursor.close()
    con.close()
    return {"sd":"ds"}


    