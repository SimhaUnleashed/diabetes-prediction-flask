from flask import Flask, render_template, request,jsonify
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
import numpy as np
import random
import string
import os
import json
import pickle

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
api = Api(app)

@app.route('/predict', methods=['GET'])

def predict_diabetes():
    pregnancies = float(request.args['pregnancies'])
    glucose = float(request.args['glucose'])
    bp = float(request.args['bp'])
    insulin = float(request.args['insulin'])
    bmi = float(request.args['bmi'])
    dpf=float(request.args['dpf'])
    age=float(request.args['age'])
    loaded_model= pickle.load(open('diabetes.pkl','rb'))
    result = loaded_model.predict([[pregnancies,glucose,bp,insulin,bmi,dpf,age]])
    
    if result[0]==1: response= jsonify({"diabetic": '1'})
    else : response= jsonify({"diabetic": "0"})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
   
if __name__ == '__main__':
    
    app.run(debug=True)