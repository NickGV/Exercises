class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = null;
  }

  append(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  prepend(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head.value;
  }

  getTail() {
    return this.tail.value;
  }

  at(index) {
    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.nextNode;
      count++;
    }

    return current;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (this.size == 1) {
      poppedNode = this.head;
      this.head == null;
      this.tail == null;
      this.size--;
      return poppedNode;
    }

    let current = this.head;
    let previous = null;

    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = null;
    this.tail = previous;
    this.size--;

    return current;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value == value) {
        return true;
      }

      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let index;

    while (current) {
      if (current.value == value) {
        return index;
      }

      current = current.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let result = "";
    let current = this.head;

    while (current) {
      result += `(${current.value})`;

      if (current.nextNode) {
        result += " -> ";
      }
      current = current.nextNode;
    }

    return (result += " -> null");
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return null;
    }

    if (index == 0) {
      this.prepend(value);
      return;
    }

    if (index == this.size) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let current = this.head;
    let previous = null;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.nextNode;
      count++;
    }

    newNode.nextNode = current;
    previous.nextNode = newNode;
    this.size++;
  }

  removeAt(index) {
    if (index <= 0 || index >= this.size) {
      return null;
    }

    if (index == 0) {
      this.pop();
      return;
    }

    if (index == this.size - 1) {
      this.pop();
      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.nextNode;
      count++;
    }

    previous.nextNode = current.nextNode;
    this.size--;
  }
}

let myList = new LinkedList();

myList.append(1);
myList.append(2);
myList.prepend(0);

console.log("Linked List:", myList.toString()); // Should print: (0) -> (1) -> (2) -> null
console.log("Size:", myList.getSize()); // Should print: 3
console.log("Head:", myList.getHead()); // Should print: 0
console.log("Tail:", myList.getTail()); // Should print: 2
console.log("Element at index 1:", myList.at(1).value); // Should print: 1

console.log("Contains 2:", myList.contains(2)); // Should print: true
console.log("Index of 2:", myList.find(2)); // Should print: 2

myList.insertAt(1.5, 2);
console.log("Linked List after insert:", myList.toString()); // Should print: (0) -> (1) -> (1.5) -> (2) -> null

myList.removeAt(2);
console.log("Linked List after removal:", myList.toString()); // Should print: (0) -> (1) -> (2) -> null
let poppedNode = myList.pop();
console.log("Popped Node:", poppedNode.value); // Should print: 2
console.log("Linked List after pop:", myList.toString()); // Should print: (0) -> (1) -> null
