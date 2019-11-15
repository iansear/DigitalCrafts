import email, smtplib, ssl
from getpass import getpass
from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_log(filename):
  port = 465
  smtp_server = 'smtp.gmail.com'
  sender_email = input('Enter sender email: ')
  password = getpass()
  receiver_email = input('Send to: ')
  subject = 'Pool App log file'
  body = 'Sent from Python.'
  message = MIMEMultipart()
  message['From'] = sender_email
  message['To'] = receiver_email
  message['Subject'] = subject
  message.attach(MIMEText(body, 'plain'))
  print(f'Sending log from today, {filename} in logs directory')
  with open(filename, 'rb') as attachment:
    part = MIMEBase('application', 'octet-stream')
    part.set_payload(attachment.read())

  encoders.encode_base64(part)
  part.add_header(
      'Content-Disposition',
      f'attachment; filename= {filename}',
  )

  message.attach(part)
  text = message.as_string()
  context = ssl.create_default_context()
  with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
    server.login(sender_email, password)
    server.sendmail(sender_email, receiver_email, text)
  print('Email Sent')
