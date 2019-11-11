def menu():
  print("To Do Menu:")
  print("Press 1 to add task")
  print("Press 2 to delete task")
  print("Press 3 to view all tasks")
  print("Press q to quit")
  choice = input("Enter: ")
  return choice

def add_task():
  title = input("Title of task: ")
  priority = input("Priority of task: ")
  task = {
    "title": title,
    "priority": priority
  }
  tasks.append(task)
  print(f"Task {title} added to list.")

def del_task():
  view_tasks()
  choice = int(input("Choose task to DELETE:"))
  del tasks[choice - 1]
  print(f"Task {choice} deleted.")

def view_tasks():
  print("Current tasks:")
  it = 1
  for task in tasks:
    keys = list(task.keys())
    print(f"{it} - {task[keys[0]]} - {task[keys[1]]}")
    print()
    it += 1

tasks = []

while True:
  choice = menu()
  if choice == "q":
    break
  elif choice == "1":
    add_task()
  elif choice == "2":
    del_task()
  elif choice == "3":
    view_tasks()
