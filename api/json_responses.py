# This module is for defining custom json responses to clean up the codebase
from flask import jsonify


def sign_up_employee_response(userinput):
    json_ = {
        "EmployeeID": userinput[0],
        "Employee_Type": userinput[1],
        "SuperVisorID": userinput[2],
        "Username": userinput[3],
        "Password": userinput[4],
        "Phone_Number": userinput[5],
        "Email": userinput[6],
        "Date_Updated": userinput[7],
        "Date_Created": userinput[8],
        "Packages_Processed": userinput[9],
        "First_Name": userinput[10],
        "Last_Name": userinput[11],
        "Sex": userinput[12],
        "Employee_Address": userinput[13]}
    return json_


def sign_up_customer_response(userinput):
    json_ = {
        "CustomerId": userinput[0],
        "Username": userinput[1],
          "Password": userinput[2],
          "Phone_Number": userinput[3],
          "Email": userinput[4],
          "Date_Updated": userinput[5],
          "Date_Created": userinput[6],
          "Packages_Recieved": userinput[7],
          "Packages_Sent": userinput[8],
          "Balance": userinput[9],
          "First_Name": userinput[10],
          "Last_Name": userinput[11],
          "Sex": userinput[12],
          "Customer_Address": userinput[13]}
    return json_

def sign_in_auth_response(stat_code, verbose_status,auth_stat = False, data = [], user_type = -1):
    return jsonify(
        {
            'status_code': stat_code,
            'status_verbose': verbose_status,
            'user_type': user_type,
            'auth_successful': auth_stat,
            'data': data
        }
    )


def customer_sign_up_response(stat_code, verbose_status, data={"customer_address_record":None, "customer_record": None}, user_type = -1, raw_error=None):
    return jsonify({
        'status_code': stat_code,
        'status_verbose': verbose_status,
        'user_type': user_type,
        'data': data,
        'raw_error': raw_error
    })


def employee_sign_up_response(stat_code, verbose_status, data={"employee_address_record":None, "employee_record": None}, user_type = -1, raw_error=None):
    return jsonify({
        'status_code': stat_code,
        'status_verbose': verbose_status,
        'user_type': user_type,
        'data': data,
        'raw_error': raw_error
    })