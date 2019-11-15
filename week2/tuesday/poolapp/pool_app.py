import pooltable as pt
import poolhall as ph
import datetime
import mail

def setup():
  #Getting 12 Pool Tables
  print('Initializing 12 pool tables')
  pool_table_list = [pt.PoolTable(i) for i in range(1,13)]

  #Checking time - Not sure why it's offset by 18hrs....
  zero_time_delta = datetime.timedelta(0, 0, 0)
  result = datetime.datetime.fromtimestamp(zero_time_delta.total_seconds())
#  print(f'{zero_time_delta} vs {result}')
  zero_time = datetime.time(0, 0, 0)
  zero_datetime = datetime.datetime.combine(result.date(), zero_time)
  seconds_offset = (result - zero_datetime).total_seconds()
#  print(f'Off by {seconds_offset} seconds')

  #Populating pool hall
  print('Creating and populating Poolhall')
  rate = 30
  my_pool_hall = ph.PoolHall(pool_table_list, rate, seconds_offset)

  menu(my_pool_hall)

def cont():
    ans = 'n'
    while ans != 'y':
      ans = input('Continue (y/n): ')

def format_seconds(time, seconds_offset):
  formated_time = datetime.datetime.fromtimestamp(time.total_seconds() - seconds_offset).strftime('%H:%M:%S')
  return formated_time

def time_and_duration(table, seconds_offset):
  formated_time = table.start_time.strftime('%H:%M:%S')
  current_time = datetime.datetime.now()
  duration = current_time - table.start_time
  formated_duration = format_seconds(duration, seconds_offset)
  print(f'Start Time: {formated_time}')
  print(f'Duration: {formated_duration}')

def get_all_tables(my_pool_hall):
  print('')
  print('All Tables')
  for table in my_pool_hall.tables:
    print(f'Table: {table.table_number} Status: {table.status}')
    if table.start_time != None:
      time_and_duration(table, my_pool_hall.seconds_offset)
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
      formated_time = format_seconds(time, my_pool_hall.seconds_offset)
      print(f'Game time: {formated_time}')
      print(f'Balance: ${cost}')
    cont()

  elif option == 3:
    print('')
    print('Available Tables')
    free_tables = my_pool_hall.get_tables('NOT OCCUPIED')
    for table in free_tables:
      print(f'Table: {table.table_number}')
    cont()

  elif option == 4:
    print('')
    print('Used Tables')
    used_tables = my_pool_hall.get_tables('OCCUPIED')
    for table in used_tables:
      print(f'Table: {table.table_number}')
      if table.start_time != None:
        time_and_duration(table, my_pool_hall.seconds_offset)
      print('')
    cont()

  elif option == 5:
    date = datetime.date.today().strftime('%m-%d-%Y')
    filename = f'logs/{date}.txt'
    mail.send_log(filename)

def menu(my_pool_hall):
  while True:
    get_all_tables(my_pool_hall)
    print('Welcome')
    print('1 - Check-Out Table')
    print('2 - Check-In Table')
    print('3 - View Available Tables')
    print('4 - View Used Tables')
    print('5 - Email Log')
    print('0 - Quit')
    try:
      option = int(input('Select: '))
      if option in [0, 1, 2, 3, 4, 5]:
        if option == 0:
            break
        options(option, my_pool_hall)
      else:
        print('Invalid option, try again...')
    except ValueError:
      print('Not an integer, try again..')
    except:
      print('Unknown error...')

setup()
