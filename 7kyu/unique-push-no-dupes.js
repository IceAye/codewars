// ❓ DESCRIPTION:
// Write a function that will take an array and a person object as parameters. The function will only push a "person" object onto the end of an array if someone with that phone number doesn't already exist in that array.
// -A "person" is a javascript object with a name and a phoneNumber : {name:'SomeName', phoneNumber:1234567890}
// -A duplicate person object is an object with the same phoneNumber as someone else
// If the person object is unique, push them onto the end of the array, and return true.
// If the person object is NOT unique, don't push them to the array and return false;
// If the person doesn't have a phoneNumber, don't add them to the array and return false.

// ✅ SOLUTION:
function uniquePush(arr, obj) {
    if (!obj.phoneNumber) return false;

    for (const item of arr) {
        if (item.phoneNumber === obj.phoneNumber) {
            return false;
        }
    }

    arr.push(obj);
    return true;
}

// 📌 TESTCASE:
const arr = [];
console.log(uniquePush(arr, { name: 'bob', phoneNumber: 1234 }), true);
console.log(uniquePush(arr, { name: 'joe', phoneNumber: 12345 }), true);
console.log(uniquePush(arr, { name: 'bob', phoneNumber: 1234 }), false);
uniquePush(arr, { name: 'joe', phoneNumber: 12345 });
uniquePush(arr, { name: 'joe', phoneNumber: 12345 });
console.log(uniquePush(arr, { name: 'bad' }), false);
