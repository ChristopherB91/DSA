// 🦍 Prompt: “Team Survival Log”
// (Inspired by the 100 Humans vs Gorilla debate)
// In a simulated survival trial, 100 humans face off against a single gorilla. Each human's status is tracked over time in a singly linked list, where each node contains:

// The human’s ID number
// A boolean indicating whether they are still active (true) or have been eliminated (false)
// ------------------------------------------------------------------------------------------------

// The simulator logs this list in order of enlistment.

// Write a function to return the filtered list of survivors, preserving the original order, by removing all humans marked as eliminated (false) from the list.

// Let's start by making a node class
let id = 0;
class Node {
  constructor() {
    this.id = id++;
    this.isActive = true;
    this.nextNode = null;
  }
}

// Now we create a couple of nodes
const node1 = new Node();
const node2 = new Node();
const node3 = new Node();
const node4 = new Node();
const node5 = new Node();

// Set the nextNode
node1.nextNode = node2;
node2.nextNode = node3;
node3.nextNode = node4;
node4.nextNode = node5;

// Set there active to false for testing
node2.isActive = false;
node3.isActive = false;
node4.isActive = false;

class LinkedList {
  constructor(head) {
    this.head = head; // First node
  }

  listActive() {
    if (this.head == null) return;
    else {
      while (!this.head.isActive) {
        this.head = this.head.nextNode;
      }
    }
    // Start off by initializing the currentNode to the head
    let currentNode = this.head;
    // While currentNode and currentNode.nextNode exist
    while (currentNode && currentNode.nextNode) {
      // Check if the next node is active
      if (!currentNode.nextNode.isActive) {
        // If it is not link currentNode's nextNode to node after the next one
        currentNode.nextNode = currentNode.nextNode.nextNode;
      } else {
        // If not, set currentNode to the next node
        currentNode = currentNode.nextNode;
      }
    }
    return this.head;
  }
}

const list = new LinkedList(node1);

// console.log(list.head);
// console.log(list.listActive());

let id2 = 0;

class Node2 {
  constructor() {
    this.id = id2++;
    this.isActive = true;
    this.previousNode = null;
    this.nextNode = null;
  }
}

class DoublyLinkedList {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }

  insertAtEnd() {
    let newNode = new Node2();

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previousNode = this.tail;
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  removeFromBeginning() {
    if (!this.head) return nuil;

    let removed = this.head;
    this.head = this.head.nextNode;
    this.head.previousNode = null;

    return "Removed " + removed.id;
  }
}

class Queue {
  constructor() {
    this.queue = new DoublyLinkedList();
  }

  enqueue() {
    this.queue.insertAtEnd();
  }

  dequeue() {
    return this.queue.removeFromBeginning();
  }

  read() {
    return this.queue.head;
  }
}
