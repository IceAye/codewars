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

const arr = [];
console.log(uniquePush(arr, { name: 'bob', phoneNumber: 1234 }), true);
console.log(uniquePush(arr, { name: 'joe', phoneNumber: 12345 }), true);
console.log(uniquePush(arr, { name: 'bob', phoneNumber: 1234 }), false);
uniquePush(arr, { name: 'joe', phoneNumber: 12345 });
uniquePush(arr, { name: 'joe', phoneNumber: 12345 });
console.log(uniquePush(arr, { name: 'bad' }), false);
