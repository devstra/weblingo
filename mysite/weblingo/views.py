# Create your views here.
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse ####

def index(request):
    return HttpResponse("Hello, world. You're at the weblingo index.")


# pip install googletrans==3.1.0a0
import googletrans
from googletrans import *
translator = googletrans.Translator()

# Language specified by user
target_lang = "french"  # Input from javascript?

# http://127.0.0.1:8000/weblingo/learn_to_en/?text="bon"&lang="french"
def learn_to_en(request):
    text = request.GET.get('text', None)
    lang = request.GET.get('lang', None)

    print('text:', text)
    print('lang:', lang)

    t =  translator.translate(text, src=lang, dest="english")
    print(t.text)

    data = {
        'translation': t.text,
    }

    print('json-data to be sent: ', data)

    return JsonResponse(data)

def en_to_learn(request):
    t =  translator.translate(text, src="english", dest=language)
    print(t.text)
    return HttpResponse(t.text)
