def palindrome():
  reversed_input = ""
  user_input = input("Enter a word: ")
  for i in range(len(user_input) - 1, -1, -1):
    reversed_input += user_input[i]
  if user_input.lower() == reversed_input.lower():
    return f"{user_input} is a palindrome."
  else:
    return f"{user_input} is not a palindrome. {user_input} <> {reversed_input}"

print(palindrome())
