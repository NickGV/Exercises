# Linked List Implementation

This is a simple implementation of a linked list in JavaScript, consisting of two classes: `Node` and `LinkedList`.

## Node Class

The `Node` class represents an individual node in the linked list. It has two properties:
- `value`: the value of the node.
- `nextNode`: a reference to the next node in the list.

## LinkedList Class

The `LinkedList` class represents the linked list itself. It has the following methods:

- `append(value)`: Appends a new node with the given value to the end of the list.
- `prepend(value)`: Prepends a new node with the given value to the beginning of the list.
- `size()`: Returns the current size of the list.
- `head()`: Returns the head node of the list.
- `tail()`: Returns the tail node of the list.
- `at(index)`: Returns the node at the specified index.
- `pop()`: Removes and returns the last node in the list.
- `contains(value)`: Checks if the list contains a node with the specified value.
- `find(value)`: Returns the index of the first occurrence of a node with the specified value.
- `toString()`: Converts the linked list to a string representation.
- `insertAt(value, index)`: Inserts a new node with the given value at the specified index.
- `removeAt(index)`: Removes the node at the specified index.

## Usage Example

```javascript
let myList = new LinkedList();

myList.append(1);
myList.append(2);
myList.prepend(0);

console.log("Linked List:", myList.toString());
console.log("Size:", myList.size);
console.log("Head:", myList.head.value);
console.log("Tail:", myList.tail.value);


