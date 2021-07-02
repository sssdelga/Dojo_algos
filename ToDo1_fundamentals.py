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

# 6. You Say It's Your Birthday
# If 2 given numbers represent your birth month and day in either order, 
# log "How did you know?", else log "Just another day...."




# 7. Leap Year
# Write a function that determines whether a given year is a leap year. 
# If a year is divisible by four, it is a leap year, unless it is divisible by 100. 
# However, if it is divisible by 400, then it is.

def is_leapyear(x):
    if x%4 == 0:
        if x%100 == 0:
            if x%400 == 0:
                return True
            return False
        return True

test1 = 16
print(is_leapyear(test1))
test2 = 100
print(is_leapyear(test2))
test3 = 400
print(is_leapyear(test3))

# 8. Print and Count
# Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

ct = 0
for i in range(512,4096):
    if i%5 ==0:
        print(i)
        ct = ct +1

print(ct)

# 9. Multiples of Six
# Print multiples of 6 up to 60,000, using a WHILE.

y = 0
while y<60001:
    if y%6==0:
        print(y)
    y+=1

# 10. Counting the Dojo Way
# Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

for i in range(100):
    if i%5==0:
        print('coding')
        if i%10==0:
            print(' dojo')
    else:
        print(i)

# 11. What Do You Know?
# Your function will be given an input parameter incoming. Please console.log this value.

def print_it(x):
    print(x)

print_it('what it do')

# 12. Whoa That Suckers Huge
# Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

int_ct = 0
for i in range(-30,30):
    if i%2!=0:
        int_ct+=i
print(int_ct)

# 13. Countdown by Fours
# Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

i = 2016
while i>0:
    print(i)
    i-=4

# 14. Flexible Countdown
# Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from 
# highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).



# 15. The Final Countdown
# This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is 
# essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), 
# print the multiples of param1, starting at param2 and extending to param3. 
# One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. 
# Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).