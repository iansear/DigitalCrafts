def is_prime():
  number = get_valid_num("Enter an integer: ")
  factors = get_factors(number)
  if (number > 0) and (factors == [1, number]):
    return f"{number} is prime."
  else:
    return f"{number} is not prime."

def get_factors(number):
  factors = []
  for i in range(1, number + 1):
#    print(f"{number}/{i} = " + str(number % i))
    if number % i == 0:
      factors.append(i)
#    print(factors)
  return factors

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

print(is_prime())
