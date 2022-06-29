from flask import Flask, render_template, request
from flask_cors import CORS
import numpy as np
import joblib
import json
import os


digits_dict = {
    0 : "Zero",
    1 : "One",
    2 : "Two",
    3 : "Three",
    4 : "Four",
    5 : "Five",
    6 : "Six",
    7 : "Seven",
    8 : "Eight",
    9 : "Nine"

}


app = Flask(__name__)
CORS(app)

cwd = os.getcwd()
model_address = cwd + "\server\model.sav"
model = joblib.load(model_address)

@app.route("/", methods=['POST'])
def predictor():
    data = (request.get_json()["data"])
    array = data[1:len(data)-1].split(",")
    X = [int(x) for x in array]
    X = np.array(X)
    X = X.reshape(14, 14)
    X = np.transpose(X)
    X_scaled_2x = np.kron(X, np.ones((2,2)))
    
    to_predict = X_scaled_2x.reshape((-1, 28*28))
    
    prediction  = model.predict(to_predict)
    to_send = digits_dict[prediction[0]]
    return to_send

if __name__=="__main__" :
    app.run(debug=True)