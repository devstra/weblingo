# pip install googletrans==3.1.0a0
import googletrans
from googletrans import *

translator = googletrans.Translator()
t = translator.translate("Hello sir", dest="french")

print(t.text)