class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!val) return this;
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    let subject = this.root;
    while (true) {
      if (val < subject.val) {
        if (subject.left === null) {
          subject.left = new Node(val);
          return this;
        }
        subject = subject.left;
      } else if (val > subject.val) {
        if (subject.right === null) {
          subject.right = new Node(val);
          return this;
        } else {
          subject = subject.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!val) return this;
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    function findInsertionLocation(subject) {
      if (val > subject.val) {
        if (subject.right === null) {
          subject.right = new Node(val);
          return;
        } else {
          findInsertionLocation(subject.right);
        }
      }

      if (val < subject.val) {
        if (subject.left === null) {
          subject.left = new Node(val);
          return;
        } else {
          findInsertionLocation(subject.left)
        }
      }
    }
    findInsertionLocation(this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!val) return;
    if (!this.root) return;

    let subject = this.root;
    while (true) {
      if (val === subject.val) return subject;

      if (val > subject.val && subject.right) {
        subject = subject.right;
      } else if (val < subject.val && subject.left) {
        subject = subject.left;
      } else {
        return;
      } 
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (!val) return;
    if (!this.root) return;

    if (node.val === val) {
      return node;
    }
    if (val > node.val && node.right !== null) {
      return this.findRecursively(val, node.right);
    }
    if (val < node.val && node.left !== null) {
      return this.findRecursively(val, node.left);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */
  
  dfsPreOrder(node = this.root, acc = []) {
    if (!this.root) return;

    acc.push(node.val)
    if (node.left) this.dfsPreOrder(node.left, acc);
    if (node.right) this.dfsPreOrder(node.right, acc);
    return acc;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    if (!this.root) return;
    let acc = []

    function traverse(node) {
      if (node.left) traverse(node.left);
      acc.push(node.val)
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return acc;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */
  dfsPostOrder() {
    if (!this.root) return;
    let acc = []

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      acc.push(node.val)
    }

    traverse(this.root);
    return acc;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) return;
    let node = this.root;
    let acc = [];
    let queue = [node];

    while (queue.length) {
      node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      acc.push(node.val);
    }

    return acc;
  }
}

module.exports = BinarySearchTree;
