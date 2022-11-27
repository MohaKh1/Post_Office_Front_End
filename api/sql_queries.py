
SQL_AUTH_LOGIN_CUSTOMER = """
SELECT * FROM dbo.Customer
WHERE Username = '{username}' AND Password = '{password}'"""


SQL_AUTH_LOGIN_EMPLOYEE = """
SELECT * FROM dbo.Employee
WHERE Username = '{username}' AND Password = '{password}'"""

# the parametrized sql statement for pyodbc uses ? instead of '%s'
SQL_ADDRESS = """INSERT INTO [dbo].[Address]
           ([Street_Address]
           ,[City]
           ,[Zipcode]
           ,[State])
     VALUES (?,?,?,?)
"""

SQL_CUSTOMER_SIGNUP = """INSERT INTO [dbo].[Customer]
           ([Username]
           ,[Password]
           ,[Phone_Number]
           ,[Email]
           ,[Date_Updated]
           ,[First_Name]
           ,[Last_Name]
           ,[Sex]
           ,[Customer_Address])
     VALUES (?,?,?,?,GETDATE(),?,?,?,?)
"""

SQL_EMPLOYEE_SIGNUP = """INSERT INTO [dbo].[Employee]
           ([Employee_Type]
           ,[Username]
           ,[Password]
           ,[Phone_Number]
           ,[Email]
           ,[First_Name]
           ,[Last_Name]
           ,[Sex]
           ,[Employee_Address])
     VALUES (?,?,?,?,?,?,?,?,?)"""

SQL_CREATE_PACKAGE = """INSERT INTO [dbo].[Mail]
           ([SenderID]
           ,[ReceiverID]
           ,[Special_Care]
           ,[Service_Type]
           ,[Mail_Type]
           ,[Mail_Start_Location]
           ,[Mail_Address])
     VALUES (?,?,?,?,?,?,?)"""

# retreive the last inserted primary key
# used for records that have an auto primary key, in order to return a full record in api endpoints
SQL_LAST_INSERTED_PK = """SELECT TOP 1 * FROM {tablename}  
ORDER BY {columnname} DESC"""

SQL_GET_BY_USERNAME = """SELECT * FROM {tablename} WHERE Username='{Username}'"""

SQL_GET_SUPERVISOR_ID = """SELECT TOP 1 EmployeeID FROM dbo.Employee WHERE Employee_Type = 1 ORDER BY RAND()
"""
SQL_GET_POSTOFFICE_ADDRESS_IDS = """(SELECT floor(RAND()*4) + 1336)"""
SQL_GET_CUSTOMER_ADDRESS_and_ID = """SELECT Customer_Address,CustomerID FROM dbo.Customer WHERE Username='{Username}';"""

SQL_WHERE_query_int = """SELECT * FROM {tablename}  
WHERE {columnname}={filter}"""


SQL_WHERE_query_str = """SELECT * FROM {tablename}  
WHERE {columnname}='{filter}'"""

SQL_POST_OFFICE_LOC = """SELECT * FROM [dbo].[Address] WHERE Address_ID = {number};"""


GET_CUST_PACK = """SELECT TrackingNumber, Sender.First_Name AS Sender_First_Name, Sender.Last_Name AS Sender_Last_Name, Sender.Username as Sender_Username,
Receiver.First_Name AS Receiver_First_Name, Receiver.Last_Name AS Receiver_Last_Name, Receiver.Username as Receiver_Username,
Processor.First_Name AS Processor_First_Name, Processor.Last_Name AS Processor_Last_Name, Processor.Username as Processor_Username,
Deliverer.First_Name AS Deliverer_First_Name, Deliverer.Last_Name AS Deliverer_Last_Name, Deliverer.Username as Deliverer_Username,
Package_Status, Delivery_Date, Total_Cost,
Start_Location.Street_Address AS Mail_Start_Location,
Current_Location.Street_Address AS Mail_Current_Location,
is_next_loc_destination,
Mail_Street_Address.Street_Address AS Mail_Address,
is_delivered
FROM Mail
JOIN Customer AS Sender ON Sender.CustomerID = Mail.SenderID
JOIN Customer AS Receiver ON Receiver.CustomerID = Mail.ReceiverID
JOIN Employee AS Processor ON Processor.EmployeeID = Mail.Processedby_ID
JOIN Employee AS Deliverer ON Deliverer.EmployeeID = Mail.Deliveredby_ID
JOIN Address AS Start_Location ON Start_Location.Address_ID = Mail.Mail_Start_Location
JOIN Address AS Current_Location ON Current_Location.Address_ID = Mail.Mail_Current_Location
JOIN Address AS Mail_Street_Address ON Mail_Street_Address.Address_ID = Mail.Mail_Address
WHERE Sender.CustomerID = {customer_id_one} OR Receiver.CustomerID = {customer_id_one}"""