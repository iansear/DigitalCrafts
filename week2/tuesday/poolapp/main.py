'''
You have just been hired by University of Houston as a developer. Your first task is to create
a pool table management app which will manage the pool tables in University Center Games Room.

Here are the requested features:

DONE - As an admin you should be able to see all the tables (12) LOOP

DONE - As an admin each table in the list should show, whether the table is OCCUPIED or NOT OCCUPIED.

DONE - As an admin if the table is OCCUPIED then show the start time of the table, number of minutes
played. (Hardmode - If the minutes are > 60 then show them in terms of hours)

DONE - As an admin you can only give out the tables that are NOT OCCUPIED. This means if pool table 8
is occupied and you try to give it out then the app will print a message saying "Pool Table 8 is
currently occupied".

DONE - As an admin whenever I close the table it should write an entry in the text file / json file.
The file should be named in the following format: (11-22-2017.txt or 11-22-2017.json) keeping
track of all the tables. The entry can consists of the following information:

_________________________________________

Pool Table Number INIT

Start Date Time FUNC

End Date Time FUNC

Total Time Played FUNC

Cost (if you are doing the hard mode) FUNC

___________________________________________



HARD MODE - Associate dollar amount for time played on the pool table. $30 per hour.

MORE HARD MODE - Write Unit Tests for your application

EXTREMELY HARD MODE: Add the ability to email the final report (file) to an email address.
'''

import pooltable as pt
import poolhall as ph

#Getting 12 Pool Tables
#print('Getting 12 pool tables')
pool_table_list = [pt.PoolTable(i) for i in range(1,13)]
#for tb in pool_table_list:
  #print(tb.table_number)

#Populating pool hall
#print('Creating and populating Poolhall with tables')
rate = 30
my_pool_hall = ph.PoolHall(pool_table_list, rate)
#for tb in my_pool_hall.tables:
  #print(tb.table_number, tb.status)

#Get list of free tables
#print('Getting list of available tables')
free_tables = my_pool_hall.get_tables('NOT OCCUPIED')
#for table in free_tables:
  #print(table.table_number, table.status)

#Check out table
print('Checking out an available table')
my_pool_hall.check_out_table()
my_pool_hall.check_out_table()
#my_pool_hall.check_out_table()

#Check in table
print('Checking in an occupied table')
my_pool_hall.check_in_table()
my_pool_hall.check_in_table()
