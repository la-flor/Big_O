/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function depthCheck(node) {
      if (!node.left && !node.right) return 1;
      if (node.left === null) return depthCheck(node.right) + 1;
      if (node.right === null) return depthCheck(node.left) + 1;

      return (Math.min(depthCheck(node.left), depthCheck(node.right)) + 1);
    }

    return depthCheck(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function depthCheck(node) {
      if (!node.left && !node.right) return 1;
      if (node.left === null) return depthCheck(node.right) + 1;
      if (node.right === null) return depthCheck(node.left) + 1;

      return (Math.max(depthCheck(node.left), depthCheck(node.right)) + 1);
    }

    return depthCheck(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let total = 0;

    function findMax(node) {
      if (node === null) return 0;
      const leftSum = findMax(node.left);
      const rightSum = findMax(node.right);
      total = Math.max(total, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    findMax(this.root);
    return total;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let queue = [this.root];
    let closest = null;

    while (queue.length) {
      let currentNode = queue.shift();
      let currentVal = currentNode.val;
      let largerThanLowerBound = currentVal > lowerBound;
      let lowerThanClosest = currentVal < closest || closest === null;

      if (largerThanLowerBound && lowerThanClosest) {
        closest = currentVal;
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (!this.root) return false;
    let identifiedDepth = null;
    let parent = null;

    function depthCheck(node, targetNode, parentNode) {
      identifiedDepth += 1;
      if (node.val === targetNode.val) {
        parent = parentNode;
        return true;
      }

      if (!node.left && !node.right) {
        identifiedDepth -= 1;
        return false;
      }
      if (node.left === null) return depthCheck(node.right, targetNode, node.val);
      if (node.right === null) return depthCheck(node.left);

      if (depthCheck(node.left, targetNode, node.val, targetNode, node.val) || depthCheck(node.right, targetNode, node.val)) {
        return identifiedDepth;
      }
      identifiedDepth -= 1;
      return false;
    }

    function resetDepthCheckResponseValues() {
      identifiedDepth = 0;
      parent = null;
    }

    const node1Depth = depthCheck(this.root, node1);
    const parent1 = parent;
    resetDepthCheckResponseValues();
    const node2Depth = depthCheck(this.root, node2);
    const parent2 = parent;
    return node1Depth === node2Depth && parent1 !== parent2;
  }
}


module.exports = { BinaryTree, BinaryTreeNode };