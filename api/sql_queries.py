
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

# retreive the last inserted primary key
# used for records that have an auto primary key, in order to return a full record in api endpoints
SQL_LAST_INSERTED_PK = """SELECT TOP 1 * FROM {tablename}  
ORDER BY {columnname} DESC"""

SQL_GET_CUSTOMER = """SELECT * FROM {tablename} WHERE Username='{Username}'"""