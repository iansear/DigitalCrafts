emails_uniq = []
emails_rpeat = []

with open('emails.txt') as doc:
  emails_raw = doc.read()

emails_split = emails_raw.split(',')
emails_striped = [email.strip() for email in emails_split]

for email in emails_striped:
  if email not in emails_uniq:

    emails_uniq.append(email)
  else:
    emails_rpeat.append(email)

print('Unrepeated Emails:')
for email in emails_uniq:
  print(email)
print('')
print('Repeated Emails:')
for email in emails_rpeat:
  print(email)
