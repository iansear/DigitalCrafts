def factorial():
  user_input = get_valid_num("Enter an integer: ")
  factorial = 1
  for i in range(1, user_input + 1):
    factorial *= i
  return factorial

def get_valid_num(message):
    is_num = False
    num = 0
    while is_num == False:
      try:
        num = int(input(message))
        is_num = True
      except ValueError:
        print("Not an integer, try again...")
    return num

print(factorial())
