# 1. Setting and Swapping
# Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa

my_number = 42
my_name = 'Samantha'

temp = my_number
my_number = my_name
my_name = temp

print('my_name = ', my_name, 'my_number = ',my_number)

# 2. Print Numbers
# Print integers from -52 to 1066 using a FOR loop.

for i in range(-52,1067,1):
    print(i)

# 3. Don't Worry, Be Happy
# Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

def be_cheerful():
    print('good morning!')


for i in range(1,99,1):
    be_cheerful()

# 4. Multiples of Three - but Not All
# Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for i in range(-300,1,1):
    if i%3==0:
        if i==-3 or i==-6:
            continue
        else:
            print(i)

# 5. Printing Integers with While
# Print integers from 2000 to 5280, using a WHILE.

x = 2000
while x<5281:
    print(x)
    x+=1