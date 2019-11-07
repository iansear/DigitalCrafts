def even_odd():
  number = get_valid_num("Enter an integer: ")
  return get_ans(number)

def get_valid_num(message):
    is_num = False
    num = 0
    while is_num == False:
      try:
        num = int(input(message))
        is_num = True
      except ValueError:
        print("Not a number, try again...")
    return num

def get_ans(number):
  if(number % 2 == 0):
    return "Even"
  else:
    return "Odd"

print(even_odd())
