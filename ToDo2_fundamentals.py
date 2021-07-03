# 1. Countdown
# Create a function that accepts a number as an input. 
# Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) 
# down to 0 (as the last element). How long is this array?

def make_arr(x):
    arr = []
    for i in range(x,0,-1):
        arr.append(i)
    return arr

a=make_arr(5)
print(a, len(a))

# 2. Print and Return
# Your function will receive an array with two numbers. Print the first value, and return the second.

def arr_vals(arr):
    print(arr[0])
    return arr[1]

arr2 = [5,3]
print(arr_vals(arr2))

# 3. First Plus Length
# Given an array, return the sum of the first value in the array, plus the array’s length. 
# What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

def first_plus_length(arr):
    if type(arr[0]) is int:
        sum = arr[0] + len(arr)
    else:
        a = len(arr[0])
        sum = a + len(arr)
    return sum

arr3 = [5,6,4,2,9]
print(first_plus_length(arr3))
arr3_a = ['hello',6,3]
print(first_plus_length(arr3_a))

# 4. Values Greater than Second
# For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

def greater_than_second(arr):
    test_val = arr[1]
    gts_ct = 0
    for i in range(len(arr)):
        if arr[i] > test_val:
            print(arr[i])
            gts_ct+=1
    return gts_ct

print('#4')
arr4 = [1,3,5,7,9,13]
print(greater_than_second(arr4))

# 5. Values Greater than Second, Generalized
# Write a function that accepts any array, and returns a new array with the array values that are greater 
# than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

def greater_than_second_gen(arr):
    test_val = arr[1]
    gts_ct = 0
    gts_arr = []
    for i in range(len(arr)):
        if arr[i] > test_val:
            gts_arr.append(arr[i])
            gts_ct+=1
    print(gts_ct)
    return gts_arr

arr5 = [1,3,5,7,9,13]
print(greater_than_second_gen(arr5))

# 6. This Length, That Value
# Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

def len_val(num1, num2):
    if num1==num2:
        print('Jinx!')
    else:
        arr = []
        for i in range(num1):
            arr.append(num2)
        return arr

print(len_val(3,2))
len_val(2,2)

# 7. Fit the First Value
# Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; 
# if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

def fit_the_first(arr):
    test_val = arr[0]
    if test_val > len(arr):
        print('Too big!')
    elif test_val < len(arr):
        print('Too small!')
    else:
        print('Just right!')

arr7 = [4,6,5,3]
fit_the_first(arr7)
arr7_a = [5,6,4]
fit_the_first(arr7_a)

# 8. Fahrenheit to Celsius
# Kelvin wants to convert between temperature scales. 
# Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns 
# the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

def fahrenheit_to_celsius(x):
    temp_c = ((x-32)*5)/9
    return temp_c

print(fahrenheit_to_celsius(32))
print(fahrenheit_to_celsius(-40))
print(fahrenheit_to_celsius(50))

# 9. Celsius to Fahrenheit
# Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent 
# temperature expressed in Fahrenheit degrees.

def celsius_to_fahrenheit(x):
    temp_f = ((x*9)/5)+32
    return temp_f

print(celsius_to_fahrenheit(0))
print(celsius_to_fahrenheit(-40))
print(celsius_to_fahrenheit(43))