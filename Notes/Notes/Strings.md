LETS LEARN ABOUT STRINGS IN PYTHON NOW!
A string is a sequence of characters enclosed in either single quotes (' ') or double quotes (" "). For example:

```python
my_string = "Hello, World!"
print(my_string)
```Output:
```Hello, World!
```     
You can also use single quotes to create a string:

```python
my_string = 'Hello, World!'
print(my_string)
```Output:
```Hello, World!
```

there are also triple quotes (''' ''' or """ """) that can be used to create multi-line strings:

```python 
my_string = """This is a multi-line string.
It can span multiple lines."""

print(my_string)
```Output:
```This is a multi-line string.
It can span multiple lines.
```
there are also triple backticks ``` ``` that can be used to create multi-line strings as well:

```python # this is not a valid string in python but it is used in markdown to create code blocks
my_string = ```This is a multi-line string. 
It can span multiple lines.```



here are the list of topics we will cover in this section:
1. String Concatenation
2. String Formatting
3. String Methods
4. String Slicing

1. lets start with slicing!

```python
my_string = "Hello, World!"
print(my_string[0:5])  # Output: Hello, it means that we are slicing the string from index 0 to index 5 (not including index 5)
print(my_string[7:12])  # Output: World, it means that we are slicing the string from index 7 to index 12 (not including index 12)
print(my_string[:5])  # Output: Hello, it means that we are slicing the string from the beginning to index 5 (not including index 5)
print(my_string[7:])  # Output: World!, it means that we are slicing the string from index 7 to the end of the string
print(my_string[-6:])  # Output: World!, it means that we are slicing the string from index -6(which means 6 characters from the end) 

#hopping characters
print(my_string[0:12:2])  # Output: Hlo ol, it means that we are slicing the string from index 0 to index 12 (not including index 12) and hopping every 2 characters

#reversing a string
print(my_string[::-1])  # Output: !dlroW ,olleH
```
2. methods in strings
```python
my_string = "Hello, World!"
print(my_string.upper())  # Output: HELLO, WORLD!, it converts all characters in the string to uppercase
print(my_string.lower())  # Output: hello, world!, it converts all characters in the string to lowercase
print(my_string.replace("Hello", "Hi"))  # Output: Hi, World!, it replaces the substring "Hello" with "Hi"
print(my_string.split(", "))  # Output: ['Hello', 'World!'], it splits the string into a list of substrings based on the delimiter ", "
print(my_string.strip("")) # Output: Hello, World!, it removes any leading and trailing whitespace from the string IMPORTANT
```
3. convert string to a list
#example 1
```python
chai = "Lemon, Ginger, Cardamom, masala, mint"
my_list = chai.split(", ")
print(my_list)  # Output: ['Lemon', 'Ginger', 'Cardamom', 'masala', 'mint']

#explanation character by character, the split() method takes the string "Lemon, Ginger, Cardamom, masala, mint" and splits it into a list of substrings based on the delimiter ", ". The resulting list is ['Lemon', 'Ginger', 'Cardamom', 'masala', 'mint'].
#example 2
```python
my_string = "Hello, World!"
my_list = list(my_string)
print(my_list)  # Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']

#explanation character by character, the list() function takes the string "Hello, World!" and converts it into a list of individual characters. The resulting list is ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!'].
```

Now suppose you have a text like this:- "he said, "I am going to places"" 
how will you print this text in python?

says = "he said, "I am going to places""
can't write like this , so what is the solution to this problem?
either use single quotes to enclose the string or use escape characters to escape the double quotes inside the string.

example 1
```python
says = 'he said, "I am going to places"'
print(says)  # Output: he said, "I am going to places"

example 2
```python
says = "he said, \"I am going to places\""
print(says)  # Output: he said, "I am going to places"      
```

now suppose you have a file path like this:- "C:\Users\etc\"
how will you print this file path in python?
file_path = "C:\Users\etc\"
can't write like this , so what is the solution to this problem?
either use raw strings by prefixing the string with 'r' or use escape characters to escape the backslashes in the file path.
example 1
```python
file_path = r"C:\Users\etc\"
print(file_path)  # Output: C:\Users\etc\

what are escape characters?
escape characters are special characters that are used to represent certain characters in a string that would otherwise be difficult to include. They are denoted by a backslash (\) followed by a specific character. Some common escape characters include:
- `\n`: Represents a newline character, which creates a new line in the string.
- `\t`: Represents a tab character, which adds a horizontal tab space in the string.
- `\\`: Represents a backslash character, which allows you to include a literal backslash in the string.

```
best to use raw strings.
like this:
```python
file_path = r"C:\Users\etc\"
print(file_path)  # Output: C:\Users\etc\
```

containing questions:

chai = "Lemon, Ginger, Cardamom, masala, mint"
print("Lemon" in chai)  # Output: True, it checks if the substring "Lemon" is present in the string "chai"
print("Lemon" not in chai)  # Output: False, it checks if the substring "Lemon" is not present in the string "chai"
