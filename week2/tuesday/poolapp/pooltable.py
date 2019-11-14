class PoolTable():
  def __init__(self, table_number):
    self.table_number = table_number
    self.status = 'NOT OCCUPIED'
    self.start_time = None
    self.end_time = None

  def get_total_time_played(self):
      time_delta = self.end_time - self.start_time
      return time_delta
