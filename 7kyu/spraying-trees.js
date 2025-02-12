function task(w, t, c) {
    const weekdays = {
        Monday: 'James',
        Tuesday: 'John',
        Wednesday: 'Robert',
        Thursday: 'Michael',
        Friday: 'William'
    }
    return `It is ${w} today, ${weekdays[w]}, you have to work, you must spray ${t} trees and you need ${t * c} dollars to buy liquid`
}

console.log(task('Wednesday', 10, 2)) // 'It is Wednesday today, Robert, you have to work, you must spray 10 trees and you need 20 dollars to buy liquid'
console.log(task('Monday', 4, 3)) // 'It is Monday today, James, you have to work, you must spray 4 trees and you need 12 dollars to buy liquid'
console.log(task('Friday', 5, 4)) // 'It is Friday today, William, you have to work, you must spray 5 trees and you need 20 dollars to buy liquid'
console.log(task('Tuesday', 6, 1)) // 'It is Tuesday today, John, you have to work, you must spray 6 trees and you need 6 dollars to buy liquid'
console.log(task('Thursday', 5, 3)) // 'It is Thursday today, Michael, you have to work, you must spray 5 trees and you need 15 dollars to buy liquid'
