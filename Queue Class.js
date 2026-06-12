class Queue {
    constructor() {
        this.items = [];
    }

    // Add item to the back of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove item from the front of the queue
    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    // View the front item without removing it
    peek() {
        return this.isEmpty() ? "Queue is empty" : this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Helper to print current queue state
    printQueue() {
        console.log("Current Print Queue:", this.items);
    }
}
