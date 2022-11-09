
SQL_AUTH_LOGIN_CUSTOMER = """
SELECT * FROM dbo.Customer
WHERE Username = '{username}' AND Password = '{password}'"""


SQL_AUTH_LOGIN_EMPLOYEE = """
SELECT * FROM dbo.Employee
WHERE Username = '{username}' AND Password = '{password}'"""

