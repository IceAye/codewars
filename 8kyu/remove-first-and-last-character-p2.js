/*
❓ DESCRIPTION:
You are given a string containing a sequence of character sequences separated by commas.
Write a function which returns a new string containing the same character sequences
    except the first and the last ones separated by spaces.
If the input string is empty or the removal of the first and last items would cause the resulting string to be empty,
    return an empty value (represented as a generic value NULL in the examples below).

📌 EXAMPLES:
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"
""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/

// ✅ SOLUTION:
function array(string) {
    return string.split(',').slice(1,-1).join(' ') || null
}

console.log('array-1: ', array("1,2,3" ))
console.log('array-2: ', array("" ))