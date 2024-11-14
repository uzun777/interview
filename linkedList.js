class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const node = new Node(value)

        if(!this.head) {
            this.head = node
        }
        else {
            let current = this.head

            while(current.next) {
                current = current.next
            }
            current.next = node
        }

    }

    remove(val) {
        if (!this.head) return;


        let currentNode = this.head
        if (currentNode.value === val) {
            this.head = currentNode.next
        }
        else {
            while(currentNode.next) {

                if(currentNode.next.value === val) {
                    currentNode.next = currentNode.next.next
                    break
                }

                currentNode = currentNode.next
            }
        }
    }

    contains(val) {
        let contains = false
        let currentNode = this.head

        while(currentNode) {
            if(currentNode.value === val) {
                contains = true
                break
            }
            currentNode = currentNode.next
        }

        return contains
    }

    print() {
        let currentNode = this.head
        const resultArr = []
        while(currentNode) {
            resultArr.push(currentNode.value)
            currentNode = currentNode.next
        }

        return resultArr
    }
}

const linkedList = new LinkedList()
linkedList.add(5)
linkedList.add(6)
linkedList.add(7)
linkedList.remove(6)
linkedList.add(8)
linkedList.add(9)
console.log('contains 8', linkedList.contains(8))
console.log('result ', linkedList.print())
