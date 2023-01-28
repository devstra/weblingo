import duolingo
import getpass

user = "smartfella6" #input("Username: ") 
pwd = "snack-overflow" #getpass.getpass()
lingo  = duolingo.Duolingo(user, pwd)

# Supported language:
supp_langs = ['fr','ru']
#print(lingo.get_languages(abbreviations=True))
language_abbr = 'fr'
#print(lingo.get_languages(abbreviations=True))

#print(lingo.get_known_topics('ru')) # For future dev, if the user has many learnt topics
#get_unknown_topics
#get_golden_topics
#get_reviewable_topics

print(lingo.get_known_words(language_abbr))
print()
print(lingo.get_vocabulary(language_abbr))

# THESE DO NOT WORK
#print(lingo.get_related_words("famille"))
#print(lingo.get_translations(['mon'], source='fr', target='en'))


#print(lingo.get_audio_url('bonjour'))




