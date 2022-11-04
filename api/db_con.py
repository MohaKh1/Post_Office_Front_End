import pyodbc 
from decouple import config
import logging
from datetime import datetime

now = datetime.now()
# logname = 'api/local_logs/db_con_'+str(now).replace(' ', '_')+'.Log'
# f = open(logname, "x")
# logging.basicConfig(filename=logname,
#                     filemode='a',
#                     format='%(asctime)s,%(msecs)d %(name)s %(levelname)s %(message)s',
#                     datefmt='%H:%M:%S',
#                     level=logging.DEBUG,
#                     force=True)


def create_connection():
    try:
        # connect to Database using python connection string
        server = 'tcp:'+str(config('host')) 
        database = str(config('dbname'))
        username = str(config('user'))
        password = str(config('password'))
        # ENCRYPT defaults to yes starting in ODBC Driver 18. It's good to always specify ENCRYPT=yes on the client side to avoid MITM attacks.
        cnxn = pyodbc.connect('DRIVER={ODBC Driver 18 for SQL Server};SERVER='+server+';DATABASE='+database+';ENCRYPT=yes;UID='+username+';PWD='+ password)
        logging.info(f'successfully connected to {str(config("dbname"))}')

    except Exception as e:
        logging.warning(e)
        logging.info('connection to db failed')
        print(e)
        return False
    else:
        print(f'successfully connected to {str(config("dbname"))}')
        return cnxn


def destroy_connection(CONNECTION):
    try:
        CONNECTION.close()
        logging.info('successfully closed db connection')
        print('successfully closed db connection')
    except Exception as e:
        logging.warning(e)
        print(e)
    
