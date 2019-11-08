def reverse_sort(array):
  reversed_array = []
  for ignore in range(0, len(array)):
    num = float("-inf")
    num_index = 0
    for index in range(0, len(array)):
      if array[index] > num:
        num = array[index]
        num_index = index
    reversed_array.append(num)
    del array[num_index]
  return reversed_array

test_array = [44, 68, -2355532, -4356.345, 234, 464334564, 68, 2, 8, 0]
print(reverse_sort(test_array))
