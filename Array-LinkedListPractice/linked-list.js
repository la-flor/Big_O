/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newestNode = new Node(val)
    if (this.length === 0) {
      this.head = newestNode;
      this.tail = newestNode;
    } else {
      let currentNode = this.head
      while (currentNode.next) {
        currentNode = this.tail
      }
      currentNode.next = newestNode;
      this.tail = newestNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const firstNode = new Node(val);
    if (this.length === 0) {
      this.head = firstNode;
      this.tail = firstNode;
    } else {
      firstNode.next = this.head;
      this.head = firstNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) return undefined;

    const toBePoped = this.tail.val
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      let toBePoped = this.tail.val;
      while (currentNode.next.val !== toBePoped) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    }

    this.length -= 1;
    return toBePoped;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) return undefined;

    const toBeRemoved = this.head.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length -= 1;
    return toBeRemoved;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;

let lst = new LinkedList();
lst.push(3)
lst.push(5)
lst.pop() 