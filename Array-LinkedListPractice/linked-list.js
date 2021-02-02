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
    if (idx >= this.length) return undefined;
    let currentIdx = 0;
    let currentNode = this.head;
    while (currentIdx !== idx) {
      currentNode = currentNode.next;
      currentIdx += 1;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length) return undefined;
    let currentIdx = 0;
    let currentNode = this.head;
    while (currentIdx !== idx) {
      currentNode = currentNode.next;
      currentIdx += 1;
    }
    return currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newestNode = new Node(val);

    // if the linked-list is empty, just add the new node
    if (this.length === 0) {
      this.head = newestNode;
      this.tail = newestNode;
      this.length += 1;
      return this;
    }

    /* if the idx of the insertion is longer than the linked-list,
      add the value to the end of the linked-list */
    if (idx >= this.length) {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newestNode;
      this.tail = newestNode;
      this.length += 1;
      return this;
    }

    /* otherwise, the value is being added somewhere
      in the middle of the linked-list */
    let currentIdx = 0;
    let currentNode = this.head;

    while (currentIdx !== idx - 1) {
      currentNode = currentNode.next;
      currentIdx += 1;
    }

    newestNode.next = currentNode.next
    currentNode.next = newestNode;
    this.tail = currentNode.next;

    this.length += 1;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // if the index is not within the linked-list, return undefined
    if (idx >= this.length) return undefined;

    /* if the list is only 1 node long and that node idx is requested
      for removal, set values to null and 0 */
    if (idx === 0 && this.length <= 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return undefined;
    }

    // special case: removes head value on multi-valued linked-list
    if (idx === 0) {
      this.head = this.head.next;
      this.length -= 1;
      return this;
    }

    // special case: removes tail value on multi-valued linked-list
    if (idx === this.length - 1) {
      let currentNode = this.head;
      let currentIdx = 0;
      while(currentIdx + 1 < idx) {
        currentNode = currentNode.next;
        currentIdx += 1;
      }
      currentNode.next = null;
      this.tail = currentNode;
      this.length -= 1;
      return this;
    }

    // collection of ending nodes
    let currentNode = this.head;
    let currentIdx = 0;
    while(currentIdx < idx) {
      currentNode = currentNode.next;
      currentIdx += 1;
    }
    currentNode.next = currentNode.next.next;
    this.length -= 1;
    return this;
  }

  /** average(): return an average of all values in the list */

  average() {
    /* special case if linked-list is empty return 0 */
    if (this.length === 0) return 0;

    let currentNode = this.head;
    let accumulated = 0;
    let count = 0
    while (count < this.length) {
      accumulated += currentNode.val;
      currentNode = currentNode.next;
      count += 1;
    }
    return accumulated / this.length;
  }
}

module.exports = LinkedList;