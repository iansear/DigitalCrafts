def calculator():
  first_num, operator, second_num = get_inputs()
  ans = determine_operation(first_num, operator, second_num)
  return ans

def get_inputs():
  first_num = get_valid_num("Enter first number: ")
  operator = input("Enter operation (+, -, *, /): ")
  second_num = get_valid_num("Enter second number: ")
  return first_num, operator.strip(), second_num

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

def determine_operation(first_num, operator, second_num):
  if(operator == "+"):
    return add_nums(first_num, second_num)
  elif(operator == "-"):
    return subtract_nums(first_num, second_num)
  elif(operator == "*"):
    return multiply_nums(first_num, second_num)
  elif(operator =="/"):
    return divide_nums(first_num, second_num)
  else:
    return f"Invalid operator: {operator}"

def add_nums(first_num, second_num):
  return first_num + second_num

def subtract_nums(first_num, second_num):
  return first_num - second_num

def multiply_nums(first_num, second_num):
  return first_num * second_num

def divide_nums(first_num, second_num):
  return first_num / second_num

print(calculator())
