def tip_calc():
  total = float(input("Enter total: "))
  percent = float(input("Enter tip percent: "))
  tip = total * percent / 100
  return tip

print(tip_calc())
