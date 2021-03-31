//Create a new SLL method length() that returns the number of nodes 
//in that list.

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

    addEnd(node) {
        if(this.head==null){
            this.head=node;
        } else {
            var runner = this.head;
            while(runner.val!=null){
                if(runner.next==null){
                    runner.next=node;
                    return node;
                }
                runner=runner.next;
            }
        }
        return node;
    }

    length() {
        // how many nodes are in my list?
        var runner = this.head;
        // console.log('this.head:', this.head);
        var ct = 0;
        while(runner!=null){
            // console.log('****in while loop*****');
            ct++;
            runner = runner.next;
            // console.log(ct,runner);
        }
        return ct;
    }
}

// test
// create SLL
a = new Node('test');
b = new Node('second');
c = new Node('guacamole');

lenSll = new SLL();
lenSll.addEnd(a);
console.log(lenSll);

console.log(lenSll.length());

lenSll.addEnd(b);
lenSll.addEnd(c);
console.log(lenSll);
console.log(lenSll.length());