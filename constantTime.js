class Stack {
  constructor() {
    this.stack = [];
    this.maxStack = [];
  }

  push(value) {
    this.stack.push(value);
    if (this.maxStack.length === 0 || value >= this.getMax()) {
      this.maxStack.push(value);
    }
  }

  pop() {
    if (this.stack.length === 0) return null;
    let popped = this.stack.pop();
    if (popped === this.getMax()) {
      this.maxStack.pop();
    }
    return popped;
  }

  getMax() {
    return this.maxStack.length > 0
      ? this.maxStack[this.maxStack.length - 1]
      : null;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(3);
stack.push(9);
stack.push(25);
stack.push(23);
// console.log(stack.getMax());
stack.pop();
// console.log(stack.getMax());
stack.pop();
// console.log(stack.getMax());

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    this.queue.shift();
  }

  read() {
    return this.queue[0];
  }
}

const queue = new Queue();

queue.enqueue(3);
queue.enqueue(9);
queue.enqueue(5);
queue.enqueue(15);
queue.enqueue(10);
queue.dequeue();
