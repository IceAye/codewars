let findAverage = function (nums) {
    return nums.reduce((sum, current) => sum + current) / nums.length
}