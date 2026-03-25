Numbers in python are very powerful and can be used in a variety of ways. They can be integers, floating-point numbers, or even complex numbers.
if you want to become a data scientist or a machine learning engineer, you need to have a good understanding of numbers and how to work with them in python.

#trivia: did you know that the number 0.1 cannot be represented exactly in binary? This is because it is a repeating decimal in binary, which means that it cannot be represented as a finite number of bits. This is why you may see some unexpected results when working with floating-point numbers in python.

#repr('chai') #output: "'chai'"
#str('chai') #output: 'chai'
#print('chai') #output: chai

in very simple terms, repr() is used to get the string representation of an object that can be used to recreate the object, while str() is used to get a more human-readable string representation of the object. print() is used to display the string representation of an object on the console. but the output looks same right? well, not really. the output of repr() is enclosed in quotes, while the output of str() is not. this is because repr() is meant to be unambiguous and can be used to recreate the object, while str() is meant to be more readable and may not always be unambiguous.

1. lets talk about math library in python.
example code:
```python
import math
print(math.sqrt(16)) #output: 4.0
math.floor(3.7) #output: 3
math.floor(-3.7) #output: -4
math.floor(3.2) #output: 3

math.trunc(3.7) #output: 3 , it takes the integer part of the number and discards the decimal part, regardless of the sign of the number.

math.ceil(3.7) #output: 4
math.ceil(-3.7) #output: -3

math.ceil(3.2) #output: 4
``` 

2. lets see random numbers in python.
```python
import random
print(random.randint(1, 10)) #output: random number between 1 and 10, including both 1 and 10
print(random.random()) #output: random float between 0 and 1
print(random.choice(['apple', 'banana', 'cherry'])) #output: random choice from the list
print(random.shuffle([1, 2, 3, 4, 5])) #output: None, but the list is shuffled in place
```

3. now lets see some decimal issues in python.
```python
print(0.1 + 0.2) #output: 0.30000000000000004
a = 0.1 + 0.1 + 0.1 - 0.3
print(a) #output: 5.551115123125783e-17
```
weird right? to solve this issue, we can use the decimal module in python, which provides a way to work with decimal numbers more accurately.
```python
from decimal import Decimal

print(Decimal('0.1') + Decimal('0.2')) #output: 0.3
a = Decimal('0.1') + Decimal('0.1') + Decimal('0.1') - Decimal('0.3')
print(a) #output: 0.0
```

lets see some sets here, they are also numbers in a way, they are a collection of unique elements.
```python
my_set = {1, 2, 3, 4, 5} #we can perform all the 12th grade math operations on sets, like union, intersection, difference, etc.
print(my_set) #output: {1, 2, 3, 4, 5}
#for union
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1.union(set2)) #output: {1, 2, 3, 4, 5}
#for intersection
print(set1.intersection(set2)) #output: {3}
#for difference
print(set1.difference(set2)) #output: {1, 2}
print(set2.difference(set1)) #output: {4, 5}
```

you might have noticed we used curly braces {} to create a set, but these curly braces can also be used to create a dictionary in python, which is a collection of key-value pairs. so we need to be careful when using curly braces in python, as they can have different meanings depending on the context.


