def fizz_buzz():
  number = get_input()
  solution = get_solution(number)
  return solution

def get_input():
  number = get_valid_num("Enter an integer: ")
  return number

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

def get_solution(number):
  if (number % 5 == 0) and (number % 3 == 0):
    return "Fizz Buzz"
  elif (number % 3 == 0):
    return "Fizz"
  elif (number % 5 == 0):
    return "Buzz"

print(fizz_buzz())
