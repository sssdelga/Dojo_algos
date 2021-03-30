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
    // SLL only needs the start point
    constructor() {
        this.head = null;
    }
    
    addEnd(node) {
        if(this.head==null){
            console.log('entered empty head if');
            this.head=node;
        } else {
            var runner = this.head;
            while(runner.val!=null){
                console.log('***addEnd test spot***');
                if(runner.next==null){
                    console.log('entered end of list');
                    runner.next=node;
                    return this.head;
                }
                runner=runner.next;
            }
        }
        return this.head;
    }

    add(node, value) {
        if(this.head==null){
            //console.log('entered first if');
            this.head=node;
        } else {
            var runner=this.head;
            while(runner.next!=null){
                if(runner.val=value){
                    node.next=runner.next;
                    runner.next=node;
                    //abstraction
                    return this.head;
                    }
                }
            }
        return this.head;
    }

    contains(value) {
        var runner=this.head;
        var match=false;
        while(runner.next!=null){
            if(runner.val===value){
                console.log('entered match if');
                match=true;
                break;
            }
            runner=runner.next;
        // is "value" to be found anywhere in this list?
        }
        console.log('exit while');
        if(match==true){
            console.log('A match exists');
        } else {
            console.log('A match does not exist');
        }
    }
}

//test
a = new Node('test');
firstSll = new SLL();
firstSll.add(a);
console.log(firstSll);
// SLL1 = test-null
b = new Node('second');
firstSll.addEnd(b);
console.log(firstSll);
// SLL2 = test-second-null
d = new Node('third');
console.log(d);
firstSll.addEnd(d);
console.log(firstSll);
// SLL3 = test-second-third-null

c = new Node('empty list');
secondSll = new SLL();
secondSll.addEnd(c);
console.log(secondSll);

// test contains
console.log('*******************************');
testVal = 'watermelon';
firstSll.contains(testVal);
testVal2 = 'test';
firstSll.contains(testVal2);
