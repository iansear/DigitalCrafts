import mail
import datetime

date = datetime.date.today().strftime('%m-%d-%Y')
filename = f'logs/{date}.txt'
mail.send_log(filename)
