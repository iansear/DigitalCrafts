array = [3, 6, 50, -113, 48, -24, 404, -1080]
sorted_array = []

print('Unsorted Array')
for num in array:
  print(num)

while len(array) > 0:
  largest = float('-inf')
  for num in array:
    if largest < num:
      largest = num
  sorted_array.append(largest)
  array.remove(largest)

print('Sorted Array')
for num in sorted_array:
  print(num)
