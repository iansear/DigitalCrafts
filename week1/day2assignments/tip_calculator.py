def tip_calc():
  total = get_valid_num("Enter total: ")
  percent = get_valid_num("Enter tip percent: ")
  return total * percent / 100

def get_valid_num(message):
    is_num = False
    num = 0
    while is_num == False:
      try:
        num = float(input(message))
        is_num = True
      except ValueError:
        print("Not a number, try again...")
    return num

print(tip_calc())
