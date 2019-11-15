import unittest
import pooltable as pt
import poolhall as ph

class PoolHallTests(unittest.TestCase):

  def setUp(self):
    self.pool_tables = []
    self.pool_tables.append(pt.PoolTable(1))
    self.pool_hall = ph.PoolHall(self.pool_tables, 30, 0.0)

  def test_if_pool_hall_not_none(self):
    self.assertIsNotNone(self.pool_hall)

  def test_if_pool_table_is_not_none(self):
    self.assertIsNotNone(self.pool_hall.tables)

  def test_get_tables(self):
    self.assertIsNotNone(self.pool_hall.get_tables('NOT OCCUPIED'))

  def tearDown(self):
    print('cleaning...')

unittest.main()
