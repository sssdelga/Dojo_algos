# Interview question 1

# Given:
arr1 = [1,3,6,4,9,5]
desired_sum = 8

# Find two values in the array that equal the sum

# Initial solution:
def find_sum_solution(arr, sum):
    solutions_available = False
    for i in range(int(len(arr)/2)):
        for j in range(len(arr)):
            if j!=i:
                if arr[i]+arr[j]==sum:
                    solutions_available = True
                    solution_vals = [arr[i], arr[j]]
                    print(solution_vals)
    return solutions_available

print(find_sum_solution(arr1, desired_sum))
arr2 = [2, 3, 4, 9]
print(find_sum_solution(arr2, desired_sum))
