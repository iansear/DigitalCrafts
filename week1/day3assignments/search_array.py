def search_array(array):
  user_input = input("Enter search: ")
  for item in array:
    if str(user_input) == str(item):
      return True
      break
  return False

test_array = [23, "Jerry", 54, 1, 77, "bob", "Tom", 5.53, 333, "Rick James"]
print(search_array(test_array))
