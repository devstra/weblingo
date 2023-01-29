# weblingo
QHacks 2023 project

## Setting up the backend server:
1. In the `/mysite` root directory, run `python manage.py startapp weblingo`
2. run `python manage.py runserver 8000` to start the server (with port 8000, could be anything)
3. You can now use REST api call to get JSONs
- Examples:
  - Language you're learning to english:
    - `http://127.0.0.1:8000/weblingo/learn_to_en/?text=bon&lang=french`
  - From english to the language you're learning:
    - `http://127.0.0.1:8000/weblingo/en_to_learn/?text=amazing&lang=french`
  - Verifying an answer you gave in the language you're trying to learn:
    - `http://127.0.0.1:8000/weblingo/verify_ans_from_learn/?attempt=bon&question=well&lang=french`
  - Verifying an answer you gave in english for the language you're trying to learn:
    - `http://127.0.0.1:8000/weblingo/verify_ans_from_en/?attempt=well&question=bon&lang=french`
  
