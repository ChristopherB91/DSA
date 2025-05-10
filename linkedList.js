class Node {
  constructor(data) {
    this.data = data;
    this.next_node = null;
  }
}

const node_1 = new Node("Once");
const node_2 = new Node("upon");
const node_3 = new Node("a");
const node_4 = new Node("time");

node_1.next_node = node_2;
node_2.next_node = node_3;
node_3.next_node = node_4;

class LinkedList {
  constructor(firstNode) {
    this.first_node = firstNode;
  }

  read(index) /* Time Complexity(Worst Case) = O(N) */ {
    let currentIndex = 0;
    let currentNode = this.first_node;
    while (currentIndex < index) {
      currentNode = currentNode.next_node;
      currentIndex++;
      if (!currentNode) return null;
    }
    return currentNode.data;
  }

  indexOf(value) /* Time Complexity(Worst Case) = O(N) */ {
    let currentNode = this.first_node;
    let currentIndex = 0;
    // While currentNode has a value
    while (currentNode) {
      // check if currentNode.data matches the value we are looking for if so return the index
      if (currentNode.data === value) return currentIndex;
      // else set currentNode to the next node and increment index by one
      else {
        currentNode = currentNode.next_node;
        currentIndex++;
      }
    }
    // If the while loop has completed and we have not found a match return null
    return null;
  }

  insertAtIndex(index, value) /* Time Complexity(Worst Case) = O(N) */ {
    // Create a new node
    const newNode = new Node(value);

    // If we are inserting at the beginning of the list
    if (index == 0) {
      // We have our new node point to what was the first node
      newNode.next_node = this.first_node;
      // Then set the first node to the newNode
      this.first_node = newNode;
      return "Added node: " + newNode;
    }

    let currentNode = this.first_node;
    let currentIndex = 0;

    // First, we access the node
    // Before where the new node goes
    while (currentIndex < index - 1) {
      currentNode = currentNode.next_node;
      currentIndex++;
    }
    // Set the new node link to the next node
    newNode.next_node = currentNode.next_node;
    // Change the link of the previous node to point to this new one
    currentNode.next_node = newNode;
    return "Added node: " + newNode;
  }

  deleteAtIndex(index) /* Time Complexity(Worst Case) = O(N) */ {
    // Setup for deleting from beginning of linked list
    if (index == 0) {
      this.first_node = this.first_node.next_node;
      return "Node deleted";
    }

    let currentNode = this.first_node;
    let currentIndex = 0;
    while (currentIndex < index - 1) {
      currentNode = currentNode.next_node;
      currentIndex++;
    }

    // Finally we change the next node to the one after it
    currentNode.next_node = currentNode.next_node.next_node;
    return `Node at index ${index} deleted`;
  }
}

const list = new LinkedList(node_1);

console.log(list.read(2), list.indexOf("a"));

// They are extremly helpful when dealing with a long list of data
// With a normal array we would have to shift each element to make up for the extra space
// But with linked list we are able to just switch the nodes next node
