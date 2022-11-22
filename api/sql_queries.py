
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