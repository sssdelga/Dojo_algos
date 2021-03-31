// Show
// Create display () that returns a string containing all the values 
// ​​in the list. Create whatever you want console.log (myList) to do !

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

    display() {
        // neatly display nodes in my list
        var runner=this.head;
        var disStr = '';
        while(runner!=null){
            disStr = disStr + runner.val + ','; // improvement: remove last comma
            runner=runner.next;
        }
        return disStr;
    }
}

//test
a = new Node('test');
b = new Node('second');
c = new Node('guacamole');
d = new Node(77);

disSll = new SLL();
disSll.addEnd(a);
disSll.addEnd(b);
disSll.addEnd(c);
disSll.addEnd(d);
console.log(disSll);

console.log(disSll.display());