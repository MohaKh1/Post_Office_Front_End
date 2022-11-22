employee_sign_up_json= {
    "employee": {
        "Username": "<username:str(20)>",
        "Password": "<password:str(20)>",
        "Email": "<email:str(100)>",
        "Phone_Number" : "nospaces:str(10)",
        "First_Name": "<first_name:str(20)>",
        "Last_Name": "<Last_name:str(20)>",
        "Sex": "<Sex:str(1)>"
    },
    "address": {
        "Street_Address": "<street_address:str(30)>",
        "City" : "<city>",
        "Zipcode" : "<Zipcode:str>",
        "State" : "<State:str(2)>"
    }
}


customer_sign_up_json = {
    "customer":{
        "Username": "<username>",
        "Password": "<password>",
        "Email": "<email>",
        "Phone_Number" : "nospaces:str",
        "First_Name": "<first_name>",
        "Last_Name": "<Last_name>",
        "Sex": "<Sex>"},
    "address": {
        "Street_Address": "<street_address:str(30)>",
        "City" : "<city>",
        "Zipcode" : "<Zipcode:str>",
        "State" : "<State:str(2)>"
    }
}


mail_json = {
    "mail":{
        "SenderID" : "<CustomerID:int>",
        "RecieverUsername": "<Customer.Username:str",
        "Special_Care": "int:0 or 1",
        "Service_Type": "int: 0 or 1",
        "Mail_Type": "int: 0 or 1",
        "Mail_Start_Location" : "int: one of the post office ids",
    }
}


    
    