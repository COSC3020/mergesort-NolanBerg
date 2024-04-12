[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

RESOURCES USED: Originally coded in python and used ai to convert to js where function takes in array and sorts using mergesort. I also used google for runtime analysis. Below is python code I made to sort array:

mergesort code:

def merge(a, l, m, r):

n1 = m - l + 1
   
n2 = r - m
    
L = [0] * n1
    
R = [0] * n2
    
for i in range(0, n1):
        
L[i] = a[l + i]
    
for i in range(0, n2):
        
R[i] = a[m + i + 1]

i, j, k = 0, 0, l
    
while i < n1 and j < n2:
        
if L[i] <= R[j]:
            
a[k] = L[i]
            
i += 1
        
else:
            
a[k] = R[j]
            
j += 1
        
k += 1

while i < n1:
        
a[k] = L[i]
        
i += 1
        
k += 1

while j < n2:
        
a[k] = R[j]
        
j += 1
        
k += 1


def merge_sort(arr):
    
width = 1
    
n = len(arr)
    
while width < n:
        
l = 0
        
while l < n:
            
r = min(l + (width * 2 - 1), n - 1)
            
m = min(l + width - 1, n - 1)
            
merge(arr, l, m, r)
            
l += width * 2
        
width *= 2
    
return arr

.


merge sort test code:

from mergesortiterative import merge_sort

def test_merge_sort():

input_array = [3, 0, 2, 5, -1, 4, 1]

expected_output = [-1, 0, 1, 2, 3, 4, 5]

result = merge_sort(input_array)

assert result == expected_output, f"Test Case Failed: Expected {expected_output}, Got {result}"

print("Test case passed!")

test_merge_sort()




## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Outer Loop (curr_size): The outer loop iterates log n times, n being the number of elements in the array. curr_size doubles in each iteration until larger than the size of the array. Therefore, the outer loop is $\Theta(log n)$.

Inner Loop (left_start): The inner loop iterates over array, but the number of iterations is not fixed like n. The inner loop depends on the size of the subarrays. The number of iterations in each iteration of the outer loop is at most $\frac{n}{\text{currsize}}$. Therefore, the inner loop is $\Theta(n)$.

Merge Function: The merge function performs the merging of two sorted subarrays. In the worst case, it may have to move every element of the second subarray to its correct position in the first. This operation takes $\Theta(n)$ time.

The overall time complexity is $\Theta(n log n)$ in the average and best cases. During the worst case when the merge operation acts similar to an insertion sort, the time complexity becomes $\Theta(n^2 log n)$. The worst case happens when the array is close to being in reverse order, causing the merge operation to work harder each iteration, leading to  $\Theta(n^2 log n)$.


