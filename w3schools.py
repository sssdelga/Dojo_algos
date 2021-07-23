# stuff from w3 schools

# random
import random
print(random.randrange(1,200))

# global parameter
def global_fun():
    global x
    x = 72

global_fun()
print(x)

# variable types
str #text
#numeric
int         #20
float       #20.5
complex     #1j
#sequence
list        #['apple', 'orange']
tuple       #('apple', 'orange')
range
#mapping
dict        # {'key': 'value', 'key2': 'value2'}
#set
set         # {'apple', 'banana'}
frozenset   # ({'apple', 'banana'})
#boolean
bool        # True / False
#binary
bytes
bytearray
memoryview