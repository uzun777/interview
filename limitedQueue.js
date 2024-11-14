class LimitedQueue {
    queue = []

    constructor(queueSize) {
        this.queueSize = queueSize
    }

    enqueue(item) {
        if(this.queue.length >= this.queueSize) {
            this.queue.shift()
        }

        this.queue.push(item)

    }

    dequeue() {
        return  this.queue.shift()
    }

    front() {
        return this.queue[0]
    }

    isEmpty() {
       return  this.queue.length === 0
    }
}

const limitedQueue = new LimitedQueue(3)
limitedQueue.enqueue(1)
limitedQueue.enqueue(2)
limitedQueue.enqueue(3)
limitedQueue.enqueue(4)

console.log('queue', limitedQueue.queue)
console.log(limitedQueue.dequeue());
console.log(limitedQueue.front());