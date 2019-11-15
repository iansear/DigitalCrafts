ten_array = [1, 2, 3, 4, 5, 7, 8, 9, 10]
missing_num = 0

for num in range(1, 11):
  if num not in ten_array:
    missing_num = num
print('This array,')
for num in ten_array:
  print(num)
print(f'is missing number: {missing_num}')
