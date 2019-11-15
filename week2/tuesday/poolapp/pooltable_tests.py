import unittest
import pooltable as pt

class PoolTableTests(unittest.TestCase):

  def setUp(self):
    self.pool_table = pt.PoolTable(1)

  def test_if_pool_table_not_none(self):
    self.assertIsNotNone(self.pool_table)

  def test_if_table_number_not_none(self):
    self.assertIsNotNone(self.pool_table.table_number)

  def test_if_table_number_is_1(self):
    self.assertEqual(self.pool_table.table_number, 1)

  def test_status_is_there(self):
    self.assertEqual(self.pool_table.status, 'NOT OCCUPIED')

  def test_initial_start_time(self):
    self.assertIsNone(self.pool_table.start_time)

  def test_initial_end_time(self):
    self.assertIsNone(self.pool_table.start_time)

  def tearDown(self):
    print('Cleaning...')

unittest.main()
