# pip install googletrans==3.1.0a0
import googletrans
from googletrans import *
translator = googletrans.Translator()

# JS to python
import json
from flask import request
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    print("Hello World")
    return render_template('index.html')

@app.route('/test', methods=['POST'])
def test():
    output = request.get_json()
    print(output) # This is the output that was stored in the JSON within the browser
    print(type(output))
    result = json.loads(output) #this converts the json output to a python dictionary
    print(result) # Printing the new dictionary
    print(type(result))#this shows the json converted as a python dictionary
    return result





# Language specified by user
target_lang = "french"  # Input from javascript?

# text      - input from website
# language  - language being learnt 
def learn_to_en(text, language):
    t = translator.translate("Hello sir", dest="french")
    print(t.text)
