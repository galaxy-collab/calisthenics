MUTABLE AND IMMUTABLE DATA TYPES

1. Mutable and Immutable are not about whether the value of the variable can be changed or not, but about whether the object(the value of the variable in memory) can be changed or not.

2. Mutable data types are those that can be changed after they are created. Examples of mutable data types in Python include lists, dictionaries, and sets.
    here is an example with a diagram:
    ```python
    my_list = [1, 2, 3] # what is happening here is, a variable named my_list is created in memory and it is assigned the address of the list object [1, 2, 3] in memory. So my_list is a reference to the list object in memory. NOTE: my_list does not contain the list itself, but rather it contains the address of the list object in memory.
    my_list[0] = 10
    print(my_list)  # Output: [10, 2, 3]
    ```
    In this example, we created a list `my_list` with the values `[1, 2, 3]`. We then changed the first element of the list to `10`. Since lists are mutable, we were able to modify the contents of the list without creating a new object in memory.
    in simple terms, it means that the list is at the same memory location, but the value at that location has changed from `[1, 2, 3]` to `[10, 2, 3]`(hence, the list is mutable because its content in memory can be changed). but the variable `my_list` still points to the same memory location where the list is stored.

3. Immutable data types are those that cannot be changed after they are created. Examples of immutable data types in Python include integers, floats, strings, and tuples.
    here is an example with a diagram in ascii art:
    ```python
    my_string = "Hello"
    my_string = "Hello world"

    print(my_string) # Output: Hello world
     but we said that strings are immutable, so how is it possible that we can change the value of my_string from "Hello" to "Hello world"?
     the answer is.... that this little maneuver is not actually changing the original string "Hello" which was created in memory, at address lets say 0x1234(this is the actual value stored in the variable my_string, not the string "Hello" itself), but rather it is creating a new string "Hello world" in memory at a different address lets say 0x5678, and then it is changing the value stored in the variable my_string from 0x1234 to 0x5678. so the original string "Hello" is still in memory at address 0x1234, but it is not referenced by any variable anymore, and it will eventually be garbage collected by Python's memory management system. so in this case, we are not changing the original string "Hello", but rather we are creating a new string "Hello world" and changing the reference of my_string to point to the new string in memory. but in the case above with the list, lets say the address of the list [1, 2, 3] is 0x1234, when we change the first element of the list to 10, we are not creating a new list in memory, but rather we are changing the value at the same memory location 0x1234 from [1, 2, 3] to [10, 2, 3]. so the variable my_list still points to the same memory location 0x1234, but the value at that location has changed. this is why lists are mutable and strings are immutable. 
     
     so kids, that's how we finally understand what all this fuss was about mutable and immutable data types in Python.

    ```

3. so just to make everything clear, here is a new code:
    ```python
    variable1 = [1, 2, 3]
    variable2 = variable1 #this does not mean that variable2 is a new list in memory with the same values as variable1, but rather it means that variable2 is now also holding the same address of the list object in memory that variable1 is holding.

    #now lets change the first element of variable1 to 10
    variable1[0] = 10

    #what do you think will be the output of variable2?
    print(variable2) # Output: [10, 2, 3], why? as explained above

    #now let's change the value of variable1 to a new list
    variable1 = [4, 5, 6]

    #what do you think will be the output of variable2?
    print(variable2) # Output: [10, 2, 3], why? because now we did not change the content of the original list in memory, but rather we created a new object in memory at a different address and we changed the reference of variable1 to point to the new list in memory, but variable2 still points to the original list in memory which has the value [10, 2, 3]. so variable2 is not affected by the change we made to variable1 because they are now referencing different objects in memory. this is another example of how mutable and immutable data types work in Python.
    ```
