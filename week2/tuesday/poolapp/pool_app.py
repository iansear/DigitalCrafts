import pooltable as pt
import poolhall as ph
import datetime
import mail

def setup():
  #Getting 12 Pool Tables
  print('Initializing 12 pool tables')
  pool_table_list = [pt.PoolTable(i) for i in range(1,13)]

  #Populating pool hall
  print('Creating and populating Poolhall')
  rate = 30
  my_pool_hall = ph.PoolHall(pool_table_list, rate)

  menu(my_pool_hall)

def cont():
    ans = 'n'
    while ans != 'y':
      ans = input('Continue (y/n): ')

def time_and_duration(table):
  formated_time = table.start_time.strftime('%H:%M:%S')
  current_time = datetime.datetime.now()
  duration = current_time - table.start_time
  duration_sec = duration.total_seconds()
  formated_duration = datetime.datetime.fromtimestamp(duration_sec - 64800).strftime('%H:%M:%S')
  print(f'Start Time: {formated_time}')
  print(f'Duration: {formated_duration}')

def get_all_tables(my_pool_hall):
  print('All Tables')
  for table in my_pool_hall.tables:
    print(f'Table: {table.table_number} Status: {table.status}')
    if table.start_time != None:
      time_and_duration(table)
    print('')

def options(option, my_pool_hall):
  if option == 1:
    table, formated_time = my_pool_hall.check_out_table()
    if table != None:
      print(f'Checking out table number {table.table_number} at {formated_time}.')
    cont()

  elif option == 2:
    cost, time, formated_end_time, table = my_pool_hall.check_in_table()
    if table != None:
      print(f'Checking in table number {table.table_number} at {formated_end_time}.')
      formated_time = datetime.datetime.fromtimestamp(time.total_seconds() - 64800).strftime('%H:%M:%S')
      print(f'Game time: {formated_time}')
      print(f'You owe: ${cost}')
    cont()

  elif option == 3:
    print('Available Tables')
    free_tables = my_pool_hall.get_tables('NOT OCCUPIED')
    for table in free_tables:
      print(f'Table: {table.table_number}')
    cont()

  elif option == 4:
    print('Used Tables')
    used_tables = my_pool_hall.get_tables('OCCUPIED')
    for table in used_tables:
      print(f'Table: {table.table_number}')
      if table.start_time != None:
        time_and_duration(table)
      print('')
    cont()

def menu(my_pool_hall):
  while True:
    get_all_tables(my_pool_hall)
    print('Welcome')
    print('1 - Check-Out Table')
    print('2 - Check-In Table')
    print('3 - View Available Tables')
    print('4 - View Used Tables')
    print('0 - Quit')
    try:
      option = int(input('Select: '))
      if option in [0, 1, 2, 3, 4]:
        if option == 0:
#            mail.send_log()
            break
        options(option, my_pool_hall)
      else:
        print('Invalid option, try again...')
    except ValueError:
      print('Not an integer, try again..')

setup()
