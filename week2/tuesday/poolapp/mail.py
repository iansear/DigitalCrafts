'''
import yagmail

def send_log():
  receiver = 'ian.sear.dev@gmail.com'
  body = "Hello there from Yagmail"
  filename = "log.txt"

  yag = yagmail.SMTP("ian.sear.dev@gmail.com")
  yag.send(
    to=receiver,
    subject="Yagmail test with attachment",
    contents=body,
    attachments=filename,
    )
'''
