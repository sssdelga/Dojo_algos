// Add a method contains(value) to your SLL class, which is given a value as a parameter. 
// Return a boolean (true/false); true, if the list possesses a node that contains the 
// provided value.


class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SLL {
    // constructor, other methods, removed for brevity
    constructor() {
        this.head = null;
    }
    
    add(node) {
        var newNode = node;
        newNode.next = null;
        return newNode;
    }

    contains(value) {
    	// is "value" to be found anywhere in this list?
    }
}

//test
a = new Node('test');
console.log(a);
firstSll = new SLL();
firstSll.add(a);
console.log(firstSll);
b = new Node('second');
firstSll.add(b);
console.log(firstSll);
