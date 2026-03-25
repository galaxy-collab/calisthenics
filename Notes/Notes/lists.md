NOW, LETS LEARN ABOUT LISTS IN PYTHON!

Lists are a versatile data structure in Python that allow you to store and manipulate a collection of items. They are ordered, mutable, and can contain elements of different types. Let's explore the key features and operations you can perform with lists.

### Creating a List

You can create a list by enclosing elements in square brackets `[]`, separated by commas. For example:

```python
fruits = ["apple", "banana", "cherry"]
```

### Accessing List Elements

You can access individual elements in a list using their index (position) in the list. Remember that Python uses zero-based indexing:

```python
print(fruits[0])  # Output: apple
print(fruits[1])  # Output: banana
```

### Modifying a List

Lists are mutable, meaning you can change their contents. You can add, remove, or modify elements:

```python
fruits.append("orange")  # Add an element
fruits[1] = "blueberry"   # Modify an element
del fruits[0]             # Remove an element
```

### List Operations

Python provides several built-in functions and methods to work with lists:

- `len(list)`: Returns the number of elements in the list.
- `list.sort()`: Sorts the elements of the list in place.
- `list.reverse()`: Reverses the order of elements in the list.
- `list.index(element)`: Returns the index of the first occurrence of the element.
- `element in list`: Checks if an element is present in the list.

### List Comprehensions

List comprehensions offer a concise way to create lists. They consist of an expression followed by a `for` clause, and can include optional `if` clauses:

```python
squares = [x**2 for x in range(10)]
evens = [x for x in squares if x % 2 == 0]
```

### Conclusion

Lists are a fundamental part of Python programming, enabling you to work with collections of data efficiently. By mastering lists, you'll be well-equipped to handle a wide range of programming tasks. Happy coding!


LETS DEEP DIVE INTO LISTS IN PYTHON!
``` python
tea_types = ["green", "black", "oolong", "white", "herbal"]

# Accessing elements
print(tea_types[0])  # Output: green
print(tea_types[-1])  # Output: herbal, it means that we are accessing the last element of the list

# Modifying elements
    #1. we can modify the element at index 1 (which is "black") to "matcha"
tea_types[1] = "matcha"
print(tea_types)  # Output: ['green', 'matcha', 'oolong', 'white', 'herbal']

    #2. we can modify multiple elements at once by slicing the list.
tea_types[1:4] = ["tom", "dick", "harry"]
print(tea_types)  # Output: ['green', 'tom', 'dick', 'harry', 'herbal']

    #3. but if we try to do like this:
tea_types[1:2] = "matcha" #then the output might not be what we expect
print(tea_types)  # Output: ['green', 'm', 'atcha', 'oolong', 'white', 'herbal']
    #why? when we did this in line 66 it worked properly, why?


# Adding elements
tea_types.append("pu-erh")
print(tea_types)  # Output: ['green', 'tom', 'dick', 'harry', 'herbal', 'pu-erh']

# Adding elements in the middle or at an index
tea_types[3:3] = ["oolong"]
print(tea_types)  # Output: ['green', 'tom', 'dick', 'oolong', 'harry', 'herbal', 'pu-erh']

# Removing elements
tea_types.remove("oolong")
print(tea_types)  # Output: ['green', 'tom', 'dick', 'harry', 'herbal', 'pu-erh']

# Removing elements by index
tea_types[1:1] = []
print(tea_types)  # Output: ['green', 'dick', 'harry', 'herbal', 'pu-erh']


# Looping through a list
print(tea_types) # Output: ['green', 'dick', 'harry', 'herbal', 'pu-erh']

for tea in tea_types:
    print(tea)

#what will be the output of this loop?
# Output:
# green
# dick
# harry
# herbal
# pu-erh

for tea in tea_types:
    print(tea, end=", ")

#conditional statement to check if the tea is herbal

if "oolong" in tea_types:
    print("Oolong tea is available.")
    print("Enjoy your cup of oolong tea!")
elif "herbal" in tea_types:
    print("Herbal tea is available.")
    print("Enjoy your cup of herbal tea!")

#length of the list
print(len(tea_types))  # Output: 5

# Check if the list is empty
if not tea_types:
    print("No tea types available.")
else:
    print("Tea types are available.")

# List operations
# we will come to this when we start working with more complex data structures.

#List comprehensions!

#it is a concise way to create lists in Python.
#simple example
squared_numbers = [x**2 for x in range(10)]
print(squared_numbers)  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

#now with our tea_types

#we want to create a new list that contains only the tea types that have the letter "e" in them.
teas_with_e = [tea for tea in tea_types if "e" in tea]
print(teas_with_e)  # Output: ['green', 'herbal']
