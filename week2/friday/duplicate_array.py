sngl_array = [3, 6, 50, -113, 48, -24, 404, -1080]
dbl_array = []

for i in range(0, 2):
  for el in sngl_array:
    dbl_array.append(el)

print('Single Array')
for el in sngl_array:
  print(el)
print('')
print('Doubled Array')
for el in dbl_array:
  print(el)
