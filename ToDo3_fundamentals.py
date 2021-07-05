# 1. Biggie Size
# Given an array, write a function that changes all positive numbers in the array to “big”. 
# Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

def make_it_big(arr):
    for i in range(len(arr)):
        if arr[i] > 0:
            arr[i] = 'big'
    return arr

arr1 = [-1, 3, 5, -5]
print(make_it_big(arr1))

# 2. Print Low, Return High
# Create a function that takes an array of numbers. The function should print the lowest value in the array, 
# and return the highest value in the array.

def low_and_high(arr):
    lo = arr[0]
    hi = arr[0]
    for i in range(len(arr)):
        if arr[i] > hi:
            hi = arr[i]
        if arr[i] < lo:
            lo = arr[i]
    print(lo)
    return hi

arr2 = [3,6,1,8,2,6]
print(low_and_high(arr2))

# 3. Print One, Return Another
# Build a function that takes an array of numbers. The function should print the second-to-last value in the array, 
# and return first odd value in the array.

print('#3')
def print_and_ret(arr):
    print(arr[len(arr)-2])
    first_odd = None
    for i in range(len(arr)):
        if arr[i]%2!=0:
            if first_odd is None:
                first_odd = arr[i]
            else:
                continue
    if first_odd is None:
        first_odd = 'no odd values'
    return first_odd

arr3 = [2,3,5]
print(print_and_ret(arr3))
arr3_a = [2,4,6,8]
print(print_and_ret(arr3_a))
arr3_b = [1,4,4,8,6]
print(print_and_ret(arr3_b))

# 4. Double Vision
# Given an array, create a function to return a new array where each value in the original has been doubled. 
# Calling double([1,2,3]) should return [2,4,6] without changing original.

def double_vision(arr):
    for i in range(len(arr)):
        arr[i] = arr[i]*2
    return arr

arr4 = [1,2,3]
print(double_vision(arr4))

# 5. Count Positives
# Given an array of numbers, create a function to replace last value with the number of positive values. Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

def count_pos(arr):
    pos_ct=0
    for i in range(len(arr)):
        if arr[i]>0:
            pos_ct+=1
    arr[len(arr)-1]=pos_ct
    return arr

arr5=[-1,1,1,1]
print(count_pos(arr5))

# 6. Evens and Odds
# Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

def evens_and_odds(arr):
    even_ct = 0
    odd_ct = 0
    for i in range(len(arr)):
        if arr[i]%2==0:
            even_ct+=1
            odd_ct=0
            if even_ct>=3:
                print('Even more so!')
        else:
            odd_ct+=1
            even_ct=0
            if odd_ct>=3:
                print("That's odd!")

arr6 = [1,3,5,4,6,3,2]
evens_and_odds(arr6)
arr6_a = [2,4,4,4,5,2,8,12, 3,3,3,3]
evens_and_odds(arr6_a)

# 7. Increment the Seconds
# Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

def increment_odds(arr):
    for i in range(len(arr)):
        print(arr[i])
        if arr[i]%2!=0:
            arr[i]+=1
    return arr

print(increment_odds(arr6))

# 8. Previous Lengths
# You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.

def str_length(arr):
    for i in range(len(arr)):
        if type(arr[i]) is str:
            arr[i] = len(arr[i])
    return arr

arr8 = ['hello', 7, 'computer']
print(str_length(arr8))

# 9. Add Seven to Most
# Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

def add_seven(arr):
    new_arr = []
    for i in range(1,len(arr)):
        new_arr.append(arr[i]+7)
    return new_arr

arr9 = [1,1,1,3,3,3]
print(add_seven(arr9))

# 10. Reverse Array
# Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

def reverse_arr(arr):
    for i in range(int(len(arr)/2)):
        temp = arr[i]
        arr[i] = arr[len(arr)-(1+i)]
        arr[len(arr)-(1+i)]=temp
    return arr

arr10 = [3,1,6,4,2]
print(reverse_arr(arr10))

# 11. Outlook: Negative
# Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

def neg_arr(arr):
    new_arr = []
    for i in range(len(arr)):
        if arr[i]>0:
            new_arr.append(arr[i]*-1)
        else:
            new_arr.append(arr[i])
    return new_arr

arr11 = [1, -3, 5]
print(neg_arr(arr11))

# 12. Always Hungry
# Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.

def always_hungry(arr):
    food_ct = 0
    for i in range(len(arr)):
        if arr[i] == 'food':
            food_ct+=1
            print('yummy')
    if food_ct == 0:
        print("I'm hungry")

arr12 = ['food', 'bugs', 'water', 'food']
arr12_a = ['tent', 'shoes']
always_hungry(arr12)
always_hungry(arr12_a)

# 13. Swap Toward the Center
# Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

def swap_odds(arr):
    for i in range(int(len(arr)/2)):
        if i%2==0:
            temp = arr[i]
            arr[i] = arr[len(arr)-(1+i)]
            arr[len(arr)-(1+i)] = temp
    return arr

arr13 = [1,2,3,4,5,6]
arr13_a = [True,42,"Ada",2,"pizza"]
print(swap_odds(arr13))
print(swap_odds(arr13_a))

# 14. Scale the Array
# Given array arr and number num, multiply each arr value by num, and return the changed arr.

def scale_arr(arr, num):
    for i in range(len(arr)):
        arr[i] = arr[i]*num
    return arr

arr14 = [2,3,5,1]
print(scale_arr(arr14, 5))