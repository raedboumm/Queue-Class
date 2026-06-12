class PrinterQueue {
    constructor() {
        this.printerQueue = new Queue();
    }

    // Add a job
    addJob(name, pages) {
        const job = { name, pages };
        this.printerQueue.enqueue(job);
        console.log(`Job added: ${name} (${pages} pages)`);
    }

    // Process all jobs in the order received
    processJobs() {
        console.log("\n--- Starting Print Job Processing ---");
        while (!this.printerQueue.isEmpty()) {
            const currentJob = this.printerQueue.dequeue();
            console.log(`Printing: ${currentJob.name} with ${currentJob.pages} pages... Done.`);
        }
        console.log("All jobs finished.\n");
    }

    // Display current queue status
    showQueue() {
        this.printerQueue.printQueue();
    }
}
