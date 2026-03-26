NOW WE ARE GOING TO START WITH THE DICTIONARIES IN PYTHON!

Dictionaries are a powerful data structure in Python that allow you to store and manage data in key-value pairs. Think of it like a real dictionary — you look up a **word (key)** to find its **meaning (value)**. They are unordered, mutable, and can contain elements of different types. Let's explore the key features and operations you can perform with dictionaries.

### Creating a Dictionary

You can create a dictionary by enclosing key-value pairs in curly braces `{}`, with a colon `:` separating each key from its value. For example:

```python
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}
```
### Accessing Dictionary Values

You can access the values in a dictionary using their corresponding keys:

```python
print(person["name"])  # Output: Alice
print(person["age"])   # Output: 30
```

#### Using the `get()` Method

```python
print(person.get("city"))  # Output: New York
```

**What's the difference between `[]` and `get()`?**

The main difference is how they handle missing keys:
- Using square brackets `[]` on a key that doesn't exist raises a `KeyError`
- The `get()` method allows you to provide a default value to return if the key is not found

```python
print(person.get("country", "Not Found"))  # Output: Not Found
```
### Iterating through a Dictionary

You can iterate through the keys, values, or key-value pairs in a dictionary using loops. Here are some examples:

#### 1. Iterating through keys

By default, looping through a dictionary gives you its keys:

```python
for key in person:
    print(key)
```

#### 2. Iterating through values

Use `.values()` to loop through only the values:

```python
for value in person.values():
    print(value)
```

#### 3. Iterating through key-value pairs

Use `.items()` to get both the key and value together:

```python
for key, value in person.items():
    print(key, ":", value)
```
### Modifying a Dictionary

You can modify a dictionary by adding, updating, or removing key-value pairs.

#### 1. Adding or Updating a Key-Value Pair

If the key already exists, it updates the value. If not, it adds a new key-value pair:

```python
person["email"] = "alice@example.com"  # Add a new key-value pair
person["age"] = 31                       # Update an existing key-value pair
```

#### 2. Removing a Key-Value Pair

You can remove items using `del` or `.pop()`:

```python
del person["city"]                       # Remove a key-value pair
person.pop("email")                      # Remove a key-value pair and return its value
```

### Conditional Statements with Dictionaries

Use the `in` keyword to check if a key exists. To check for a value, use `.values()`:

```python
if "name" in person:
    print("Name:", person["name"])

if 30 in person.values():
    print("Age 30 is present.")
```

#### Adding a New Key-Value Pair

```python
person["country"] = "USA"
print(person)  # Output: {'name': 'Alice', 'age': 31, 'country': 'USA'}
```

### The `pop()` Method

The `pop()` method removes a key-value pair from the dictionary and returns the value associated with the key. If the key is not found, it raises a `KeyError` unless a default value is provided.

```python
email = person.pop("email", "Not Found")
print(email)  # Output: alice@example.com
```

### Nested Dictionaries

Dictionaries can contain other dictionaries as values. This is useful for storing related data together (like multiple people's info):

```python
nested_dict = {
    "person1": {
        "name": "Alice",
        "age": 30
    },
    "person2": {
        "name": "Bob",
        "age": 25
    }
}
```

To access nested values, chain the keys: `nested_dict["person1"]["name"]` gives `"Alice"`.

### Dictionary Comprehensions

A short way to create dictionaries in one line. The format is `{key: value for item in iterable}`:

```python
squared_nums = {x: x**2 for x in range(1, 6)}
print(squared_nums)  # Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

### The `clear()` Method

Empties the dictionary completely:

```python
squared_nums.clear()
print(squared_nums)  # Output: {}
```

### The `fromkeys()` Method

Creates a new dictionary where all keys share the same value. Useful when you want to initialize multiple keys with a default:

```python
keys = ["masala", "ginger", "lemon"]
default_value = "Delicious"

new_dict = dict.fromkeys(keys, default_value)
print(new_dict)  # Output: {'masala': 'Delicious', 'ginger': 'Delicious', 'lemon': 'Delicious'}
```

### Creating a Dictionary from Two Lists Using `zip()`

So how do we create a dictionary with the keys and values list together?

`zip()` pairs up items from two lists — first with first, second with second, and so on. Wrap it with `dict()` to create a dictionary:

```python
keys = ["masala", "ginger", "lemon"]
values = ["spicy", "warming", "citrusy"]

combined_dict = dict(zip(keys, values))
print(combined_dict)  # Output: {'masala': 'spicy', 'ginger': 'warming', 'lemon': 'citrusy'}
```

#### What if the keys and values lists are of different lengths?

If the keys and values lists are of different lengths, the `zip()` function will pair elements until the shorter list is exhausted. Extra elements from the longer list will be ignored.

```python
keys = ["masala", "ginger", "lemon"]
values = ["spicy", "warming"]

combined_dict = dict(zip(keys, values))
print(combined_dict)  # Output: {'masala': 'spicy', 'ginger': 'warming'}
```