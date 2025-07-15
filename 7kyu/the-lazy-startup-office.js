function binRota(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        while (arr[i].length) {
            if (i % 2 === 0) {
                result.push(arr[i].shift());
            } else {
                result.push(arr[i].pop());
            }
        }
    }
    return result;
}

console.log(binRota([["Bob","Nora"],["Ruby","Carl"]])) // ["Bob","Nora","Carl","Ruby"]
console.log(binRota([["Billy"]])) // ["Billy"]
console.log(binRota([["Billy", "Nancy"]])) // ["Billy","Nancy"]
console.log(binRota([["Billy"],["Megan"],["Aki"],["Arun"],["Joy"]])) // ["Billy", "Megan", "Aki", "Arun","Joy"]
console.log(binRota([["Sam","Nina","Tim","Helen","Gurpreet","Edward","Holly","Eliza"],["Billy","Megan","Aki","Arun","Joy","Anish","Lee","Maryan"],["Nick","Josh","Pete","Kavita","Daisy","Francesca","Alfie","Macy"]])) // ["Sam","Nina","Tim","Helen", "Gurpreet", "Edward", "Holly", "Eliza","Maryan","Lee","Anish","Joy","Arun","Aki","Megan","Billy","Nick","Josh","Pete","Kavita","Daisy","Francesca","Alfie","Macy"]
console.log(binRota([["Stefan","Raj","Marie"],["Alexa","Amy","Edward"],["Liz","Claire","Juan"],["Dee","Luke","Elle"]])) // ["Stefan","Raj","Marie","Edward","Amy","Alexa","Liz","Claire","Juan","Elle","Luke","Dee"]