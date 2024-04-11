[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

RESOURCES USED: Originally coded in python and used ai to convert to js where function takes in array and sorts using mergesort. Below is python code I made to sort array:

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

The breakdown of the original array into subarrays uses a divide and conquer principle, resulting in a logarithmic time complexity, $\theta$(log n).  

This can potentially resemble insertion sort in a bad case, traversing through n elements n times, resulting in n^2. Consequently, the worst-case time complexity is $\theta$(n^2 * log n).
