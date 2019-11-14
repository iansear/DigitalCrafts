import datetime

class PoolHall():
  def __init__(self, tables, rate):
    self.tables = tables
    self.rate = rate

  def get_tables(self, status):
    tables = [tb for tb in self.tables if tb.status == status]
    return tables

  def validate_table(self, message, tables):
    table_numbers = [tb.table_number for tb in tables]
    while True:
      print(message)
      if len(table_numbers) == 0:
          print('No tables.')
          return None
      for num in table_numbers:
        print(f'Table: {num}')
      try:
        table_number = int(input('Select Table: '))
        if table_number in table_numbers:
          for table in tables:
            if table_number == table.table_number:
              return table
        elif table_number in range(1,13):
          print(f'Table {table_number} is unavailable.')
        else:
          print('Invalid table, try again...')
      except ValueError:
        print('Not an integer, try again...')

  def check_out_table(self):
    message = 'Tables Available:'
    free_tables = self.get_tables('NOT OCCUPIED')
    table = self.validate_table(message, free_tables)
    if table != None:
      table.status = 'OCCUPIED'
      table.start_time = datetime.datetime.now()
      formated_time = table.start_time.strftime('%H:%M:%S')
      return table, formated_time
    else:
      return None, None

  def check_in_table(self):
    message = 'Tables In Use:'
    used_tables = self.get_tables('OCCUPIED')
    table = self.validate_table(message, used_tables)
    if table != None:
      table.end_time = datetime.datetime.now()
      formated_end_time = table.end_time.strftime('%H:%M:%S')
      cost, time = self.get_playtime_cost(table)
      self.log_session(table, time, cost)
      table.status = 'NOT OCCUPIED'
      table.start_time = None
      table.end_time = None
      return cost, time, formated_end_time, table
    else:
      return None, None, None, None

  def get_playtime_cost(self, table):
    time = table.get_total_time_played()
    cost = format(self.rate * 1/3600 * time.total_seconds(), '.2f')
    return cost, time

  def log_session(self, table, time, cost):
    date = datetime.date.today().strftime('%m-%d-%Y')
    with open(f'{date}.txt', 'a') as log:
      log.write(f'Table: {table.table_number} \r')
      log.write(f'Start Time: {table.start_time}\r')
      log.write(f'End Time: {table.end_time}\r')
      log.write(f'Duration: {time}\r')
      log.write(f'Cost: ${cost}\r')
      log.write('\r')
