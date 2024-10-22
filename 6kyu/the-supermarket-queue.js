function queueTime(customers, n) {
    let queue = customers.slice(0,n)
    for (let i = n ; i < customers.length; i++) {
        let min = Math.min(...queue);
        queue[queue.indexOf(min)] += customers[i]
    }
    return queue.length ? Math.max(...queue) : 0
}


console.log(queueTime([], 1)) // 0
console.log(queueTime([5,3,4], 1)) // 12
console.log(queueTime([10,2,3,3], 2)) // 10
console.log(queueTime([2,3,10,2], 2)) // 12
console.log(queueTime([100, 50, 90, 90, 60], 2)) // 200
console.log(queueTime([100, 90, 90, 60, 50], 2)) // 210
console.log(queueTime([100, 50, 90, 90, 60], 3)) // 150
