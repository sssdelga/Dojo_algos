// Set up

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
    // 1. Create the max () method to return the largest value in the list.
    max() {
        var runner = this.head;
        var max = runner.val;
        while(runner!=null){
            //console.log('*while looping*');
            //console.log(runner.val, max);
            if(runner.val > max){
                //console.log('**entered if**');
                max = runner.val;
            }
            runner = runner.next;
        }
        return max;
    }
    // 2. Create min (node) to return the smallest value in the list.
    min() {
        var runner = this.head;
        var min = runner.val;
        while(runner!=null){
            if(runner.val < min){
                min = runner.val;
            }
            runner = runner.next;
        }
        return min;
    }
    // 3. Create average () to return the average value.
    average() {
        var runner = this.head;
        var sum = 0;
        var ct = 0;
        while(runner!=null){
            sum = sum + runner.val;
            ct++;
            runner = runner.next;
        }
        var avg = sum/ct;
        return avg;
    }
}

a = new Node(2);
b = new Node(5);
c = new Node(55);
d = new Node(77);
e = new Node(4);
f = new Node(25);

statSll = new SLL();
statSll.addEnd(a);
statSll.addEnd(b);
statSll.addEnd(c);
statSll.addEnd(d);
statSll.addEnd(e);
statSll.addEnd(f);

console.log(statSll.display());
console.log(statSll.max());
console.log(statSll.min());
console.log(statSll.average());