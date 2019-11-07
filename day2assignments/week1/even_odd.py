def even_odd():
  number = get_input()
  return get_ans(number)

def get_input():
  return int(input("Enter an integer: "))

def get_ans(number):
  if(number % 2 == 0):
    return "Even"
  else:
    return "Odd"

print(even_odd())
