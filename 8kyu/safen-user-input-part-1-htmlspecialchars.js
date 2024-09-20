// ❓ DESCRIPTION:
// Your mission is to implement a function that converts the following potentially harmful characters:
//
// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;
//
// ✅ SOLUTION:
function htmlspecialchars(formData) {
    const stack = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    return formData.replace(/[<>"&]/g, char => stack[char]);
}

console.log(htmlspecialchars("Hello, how would you & I fare?"));
console.log(htmlspecialchars('How was "The Matrix"?  Did you like it?'));
