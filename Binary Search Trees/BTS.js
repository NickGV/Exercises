class Node {
  constructor(data, parent = null) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }
}

class Tree {
  constructor(dataArray) {
    this.root = this.buildTree([...new Set(dataArray.sort((a, b) => a - b))]);
  }

  buildTree(sortedArray) {
    if (sortedArray.length === 0) {
      return null;
    }

    const midIndex = Math.floor(sortedArray.length / 2);
    const root = new Node(sortedArray[midIndex]);

    root.left = this.buildTree(sortedArray.slice(0, midIndex));
    root.right = this.buildTree(sortedArray.slice(midIndex + 1));

    return root;
  }

  prettyPrint(node = this.root) {
    const print = (node, prefix = "", isLeft = true) => {
      if (node === null) {
        return;
      }
      if (node.right !== null) {
        print(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
      }
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
      if (node.left !== null) {
        print(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
      }
    };

    print(node);
  }

  insert(value) {
    this.root = this._insert(this.root, value);
  }

  _insert(node, value, parent = null) {
    if (node === null) {
      return new Node(value, parent);
    }

    if (value < node.data) {
      node.left = this._insert(node.left, value, node);
    } else if (value > node.data) {
      node.right = this._insert(node.right, value, node);
    }

    return node;
  }

  delete(value) {
    this.root = this._delete(this.root, value);
  }

  _delete(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.data) {
      node.left = this._delete(node.left, value);
    } else if (value > node.data) {
      node.right = this._delete(node.right, value);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      node.data = this.findMin(node.right).data;
      node.right = this._delete(node.right, node.data);
    }

    return node;
  }

  find(value) {
    return this._find(this.root, value);
  }

  _find(node, value) {
    if (node === null || node.data === value) {
      return node;
    }

    if (value < node.data) {
      return this._find(node.left, value);
    } else {
      return this._find(node.right, value);
    }
  }

  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  levelOrder(callback) {
    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      callback(currentNode);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }

  inOrder(callback, node = this.root) {
    if (node !== null) {
      this.inOrder(callback, node.left);
      callback(node);
      this.inOrder(callback, node.right);
    }
  }

  preOrder(callback, node = this.root) {
    if (node !== null) {
      callback(node);
      this.preOrder(callback, node.left);
      this.preOrder(callback, node.right);
    }
  }

  postOrder(callback, node = this.root) {
    if (node !== null) {
      this.postOrder(callback, node.left);
      this.postOrder(callback, node.right);
      callback(node);
    }
  }

  height(node = this.root) {
    if (node === null) {
      return -1;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(node = this.root) {
    if (node === null) {
      return -1;
    }

    let depth = 0;

    while (node !== null) {
      depth++;
      node = node.parent;
    }

    return depth - 1;
  }

  isBalanced() {
    return this._isBalanced(this.root);
  }

  _isBalanced(node) {
    if (node === null) {
      return true;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    if (
      Math.abs(leftHeight - rightHeight) <= 1 &&
      this._isBalanced(node.left) &&
      this._isBalanced(node.right)
    ) {
      return true;
    }
    return false;
  }

  rebalance() {
    const nodes = [];
    this.inOrder((node) => nodes.push(node));
    this.root = this.buildTree(nodes.map((node) => node.data));
  }
}

const getRandomNumbers = (count, max) => {
  const numbers = new Set();
  while (numbers.size < count) {
    numbers.add(Math.floor(Math.random() * max));
  }
  return Array.from(numbers);
};

const tree = new Tree(getRandomNumbers(10, 100));

// Test Case 1: Insertion
tree.insert(50);
console.log("Insert 50:");
tree.prettyPrint();

// Test Case 2: Search
const searchResult = tree.find(50);
console.log("\nSearch for 50:");
console.log(
  searchResult !== null ? `Found: ${searchResult.data}` : "Not found"
); // Expected Output: Found: 50

// Test Case 3: Deletion
tree.delete(50);
console.log("\nDelete 50:");
tree.prettyPrint(); // Expected Output: The number 50 has been successfully deleted from the tree.

// Test Case 4: Printing (InOrder)
console.log("\nInOrder Traversal:");
tree.inOrder((node) => console.log(node.data)); // Expected Output: Print the nodes of the tree in ascending order.

// Test Case 5: Tree Height
const treeHeight = tree.height();
console.log("\nTree Height:");
console.log(treeHeight); // Expected Output: 3.

// Test Case 6: Tree Depth
const treeDepth = tree.depth();
console.log("\nTree Depth:");
console.log(treeDepth); // Expected Output: 0

// Test Case 7: Tree Balance
const isBalanced = tree.isBalanced();
console.log("\nTree Balance:");
console.log(`Expected Output: ${isBalanced}`); // Expected Output: Whether the tree is balanced or not.

// Test Case 8: Tree Rebalance
console.log("\nRebalance Tree:");
tree.rebalance();
tree.prettyPrint(); // Expected Output: The tree has been rebalanced, and it should be printed in a balanced structure.

// Test Case 9: Find Minimum
const minNode = tree.findMin(tree.root);
console.log("\nFind Minimum Node:");
console.log(minNode); // Expected Output: The minimum node in the tree.

// Test Case 10: Level Order Traversal
console.log("\nLevel Order Traversal:");
tree.levelOrder((node) => console.log(node.data)); // Expected Output: Print the nodes of the tree in level order.

// Test Case 11: PreOrder Traversal
console.log("\nPreOrder Traversal:");
tree.preOrder((node) => console.log(node.data)); // Expected Output: Print the nodes of the tree in pre-order.

// Test Case 12: PostOrder Traversal
console.log("\nPostOrder Traversal:");
tree.postOrder((node) => console.log(node.data)); // Expected Output: Print the nodes of the tree in post-order.
