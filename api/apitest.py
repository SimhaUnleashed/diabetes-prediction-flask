import requests

base = "http://127.0.0.1:5000"


response = requests.get(base+ "/predict?pregnancies=1&glucose=66&bp=85&insulin=0&bmi=26.6&dpf=0.351&age=31")
print(response.json())