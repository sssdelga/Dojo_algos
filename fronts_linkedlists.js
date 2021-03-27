class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    // 1. Write a method that accepts a value and creates a new node, 
    // assign it to the list head, and return a pointer to the new head node.
    addFront(value) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    // 2. Write a method to remove the head node and return the new list head node. 
    // If the list is empty, return null.
    removeFront() {
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            return null;
        }
    }

    // 3. Write a method to return the value (not the node) at the head of the list. 
    // If the list is empty, return null.
    front(){
        if (this.head) {
            return this.head.val;
        } else {
            return null;
        }
    }
}

var myLinkedList = new SLL();
myLinkedList.//method name(new Node(//node value));
console.log(myLinkedList);

// while loops are useful for linked lists since you cannot find the length
// check out visualgo.net for visualized algorithm stuff

// research "Javascript garbage collection"