class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }
    add(element){
        var node = new Node(element)
        var current;

        if(this.head == null){
            this.head = node;
        }
        else{
            current = this.head;

            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    inserAt(element, index){
        if(index < 0  || index > this.size){
            return console.log('plese enter valid input')
        }
        else{
            var node = new Node(element)
            var curr , prev;
            curr = this.head
            if(index == 0){
                node.next = this.head;
                this.head = node
            }
            else{
                var i = 0;
                while(i < index){
                    prev = curr;
                    curr = prev.next;
                    i++;
                }
                node.next = curr;
                prev.next = node
            }
            this.size++
        }
    }

    removeElement(element){
        var curr = this.head;
        var prev = null;

        while(curr != null){
            if(curr.element == element){
                if(prev == null){
                    this.head = curr.next
                }
                else{
                    prev.next = curr.next
                }
                this.size --;
                return curr.element
            }
            prev = curr;
            curr = prev.next
        }
        return -1
    }

    removeIndexElement(index){
        var curr = this.head;
        var prev = null;
        var i = 0;
        if(index < 0 || index >= this.size){
            return console.log('plese enter valid input')
        }
        if(index == 0){
            this.head = curr.next
        }
        else{
            while(i <= index){
                if( i == index){
                    console.log( 'condition match')
                    prev.next = curr.next;
                    return curr.element
                }
                i++;
                prev = curr;
                curr = prev.next
            }
            
        }
        this.size--;
    }

    printList(){
        console.log(this.head, this.size)
        var curr = this.head;
        var str = ''
        while(curr){
            str += curr.element + ' ';
            curr = curr.next
        }
        console.log(str)
    }
    findElement(index){
        var curr = this.head;
        var i = 0;

        while(curr != null){
            if(i == index){
                console.log(curr.element)
                return curr.element
            }
            i++;
            curr = curr.next
        }
    }

    converBinaryToDecimal(){
        var curr = this.head;
        var size = this.size -1;
        var decimal = 0;
        while(curr != null){
            var element = curr.element;
            if(element == 1){
                decimal += Math.pow(2,size)
            }
            size--;
            curr = curr.next
        }
        console.log('decimal', decimal)
        return decimal;
    }
}

var LL = new LinkedList();

LL.add(0);
LL.add(1);
LL.add(0);
LL.add(0);
//LL.add(0)
LL.add(1)
LL.add(1)

LL.converBinaryToDecimal()
//LL.inserAt(20,1)
LL.printList();
LL.findElement(3)
LL.removeIndexElement(1)
LL.printList();
LL.removeElement(10)
LL.printList();
console.log(LL.head)
