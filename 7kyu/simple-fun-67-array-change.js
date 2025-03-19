function arrayChange(arr) {
    let count = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] >= arr[i]) {
            for (let j = 0; ; j++) {
                if (arr[i - 1] >= arr[i]) {
                    arr[i]++;
                    count++;
                } else {
                    break;
                }
            }
        }
    }

    return count;
}