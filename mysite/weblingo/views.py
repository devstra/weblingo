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

# http://127.0.0.1:8000/weblingo/learn_to_en/?text=bon&lang=french
def learn_to_en(request):
    text = request.GET.get('text', None)
    lang = request.GET.get('lang', None)

    t =  translator.translate(text, src=lang, dest="english")

    data = {
        'translation': t.text,
    }

    return JsonResponse(data)

# http://127.0.0.1:8000/weblingo/en_to_learn/?text=amazing&lang=french
def en_to_learn(request):
    text = request.GET.get('text', None)
    lang = request.GET.get('lang', None)

    t =  translator.translate(text, src="english", dest=lang)

    data = {
        'translation': t.text,
    }

    return JsonResponse(data)

# http://127.0.0.1:8000/weblingo/verify_ans_from_learn/?attempt=bon&question=well&lang=french
def verify_ans_from_learn(request):
    attempt = request.GET.get('attempt', None)
    question = request.GET.get('question', None)
    lang = request.GET.get('lang', None)

    transl_att = translator.translate(attempt, src=lang, dest="english")
    result = "Failed"
    if question == transl_att:
        result = "Success!"
    
    correct_ans = translator.translate(question, src="english", dest=lang)

    data = {
        'result' : result,
        'correct_ans' : correct_ans.text,
    }

    return JsonResponse(data)

# http://127.0.0.1:8000/weblingo/verify_ans_from_en/?attempt=well&question=bon&lang=french
def verify_ans_from_en(request):
    attempt = request.GET.get('attempt', None)
    question = request.GET.get('question', None)
    lang = request.GET.get('lang', None)

    transl_att = translator.translate(question, src="english", dest=lang)
    result = "Failed"
    if question == transl_att:
        result = "Success!"
    
    correct_ans = translator.translate(attempt, src=lang, dest="english")

    data = {
        'result' : result,
        'correct_ans' : correct_ans.text,
    }

    return JsonResponse(data)

