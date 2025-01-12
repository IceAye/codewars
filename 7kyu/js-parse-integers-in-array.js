/**
 * Function converts array of string to array of integers.
 * @param  {Array} of numbers in form of string
 * @return {Array} of integer numbers
 */

const parseNumbers = function(intStrs) {
    return intStrs.map(el => parseInt(el));
}