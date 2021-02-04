/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newInput = new Node(val);
    if (this.size === 0) {
      this.first = newInput;
      this.last = newInput;
      this.size += 1;
      return;
    }
    newInput.next = this.first;
    this.first = newInput;
    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) throw "Stack is empty";
    const popedVal = this.first.val;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size = 0;
      return popedVal;
    }

    this.first = this.first.next;
    this.size -= 1;
    return popedVal;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.size > 0 ? this.first.val : undefined;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size > 0 ? false : true;
  }
}

module.exports = Stack;