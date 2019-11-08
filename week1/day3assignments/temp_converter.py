def temp_converter():
  temp, scale = get_valid_temp()
  if scale == "f":
    ans = (temp - 32) * 5/9
    return f"{ans}c"
  else:
    ans = temp * 9/5 +32
    return f"{ans}f"

def get_valid_temp():
  is_good = False
  temp = 0
  scale = ""
  while is_good == False:
    user_input = input("Enter temp to convert. (eg. 32f or 0c): ")
    scale = user_input[-1:].lower()
    if (scale == "c") or (scale == "f"):
      try:
        temp = float(user_input[:-1])
        is_good = True
      except ValueError:
        print("Not a number. Try again.")
    else:
      print("Not a tempurature scale. Try again.")
  return temp, scale

print(temp_converter())
