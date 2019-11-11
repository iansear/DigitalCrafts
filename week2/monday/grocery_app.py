def menu():
  while True:
    print("Store Inventory Menu:")
    print("1 - Add Store")
    print("2 - View Master List")
    print("3 - Add to Existing Store")
    print("'q' to quit.")
    user_input = input("Enter: ")
    if user_input == "q":
      break
    elif user_input == "1":
      add_list()
    elif user_input == "2":
      view_list()
    elif user_input == "3":
      add_to_list()

def add_list():
  title = input("Enter Store Name: ")
  address = input("Enter Store Address: ")
  a_list = {
    "title": title,
    "address": address,
    "items": []
  }
  master_list.append(a_list)
  index = master_list.index(a_list)
  add_items(index)

def add_items(index):
  a_list = master_list[index]
  fin = ""
  while fin != "n":
    name = input("Item name: ")
    quantity = input("Ammount: ")
    price = input("Price: ")
    item = {
      "name": name,
      "quantity": quantity,
      "price": price
    }
    a_list["items"].append(item)
    fin = input("Add another item (y/n): ")

def view_list():
  print("Master Inventory List:")
  for lst in master_list:
    index = master_list.index(lst) + 1
    title = lst["title"]
    address = lst["address"]
    items = lst["items"]
    print(f"{index} - {title} at {address}")
    for item in items:
      index = items.index(item) + 1
      name = item["name"]
      quantity = item["quantity"]
      price = item["price"]
      print(f"    {index} - {name} Qnt: {quantity} ${price}")

def add_to_list():
  view_list()
  user_input = int(input("Choose list to add: ")) - 1
  add_items(user_input)

master_list = []
menu()
    
