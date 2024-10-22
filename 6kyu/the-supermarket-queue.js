// ❓ DESCRIPTION:
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
//
// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.
//
// ✅ SOLUTION:
function queueTime(customers, n) {
    let queue = customers.slice(0,n)
    for (let i = n ; i < customers.length; i++) {
        let min = Math.min(...queue);
        queue[queue.indexOf(min)] += customers[i]
    }
    return queue.length ? Math.max(...queue) : 0
}

// 📌 TESTCASE:
console.log(queueTime([], 1)) // 0
console.log(queueTime([5,3,4], 1)) // 12
console.log(queueTime([10,2,3,3], 2)) // 10
console.log(queueTime([2,3,10,2], 2)) // 12
console.log(queueTime([100, 50, 90, 90, 60], 2)) // 200
console.log(queueTime([100, 90, 90, 60, 50], 2)) // 210
console.log(queueTime([100, 50, 90, 90, 60], 3)) // 150
