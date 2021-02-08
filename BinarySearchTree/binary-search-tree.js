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

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//   .insert(15)
//   .insert(20)
//   .insert(10)
//   .insert(12);
// binarySearchTree.findRecursively(20)
module.exports = BinarySearchTree;
