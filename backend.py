import duolingo
import getpass

user = input("Username: ") 
pwd = getpass.getpass()
lingo  = duolingo.Duolingo(user, pwd)

print(lingo.get_user_info())    # Test, don't print this plz

