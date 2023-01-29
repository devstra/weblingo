# pip install googletrans==3.1.0a0
import googletrans
from googletrans import *
translator = googletrans.Translator()

# Language specified by user
target_lang = "french"  # Input from javascript?

# text      - input from website
# language  - language being learnt 
def learn_to_en(text, language=target_lang):
    t =  translator.translate(text, src=language, dest="english")
    #print(t.text)
    return t.text
