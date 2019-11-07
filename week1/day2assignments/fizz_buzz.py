def fizz_buzz():
  number = get_input()
  solution = get_solution(number)
  return solution

def get_input():
  number = int(input("Enter an integer: "))
  return number

def get_solution(number):
  if (number % 5 == 0) and (number % 3 == 0):
    return "Fizz Buzz"
  if (number % 3 == 0):
    return "Fizz"
  if (number % 5 == 0):
    return "Buzz"

print(fizz_buzz())
