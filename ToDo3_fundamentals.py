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



# Evens and Odds
# Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"




# Increment the Seconds
# Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.




# Previous Lengths
# You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.



# Add Seven to Most
# Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.



# Reverse Array
# Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].



# Outlook: Negative
# Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].



# Always Hungry
# Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.



# Swap Toward the Center
# Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].




# Scale the Array
# Given array arr and number num, multiply each arr value by num, and return the changed arr.