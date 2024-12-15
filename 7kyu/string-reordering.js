function sentence(arrayOfObjects) {
    return arrayOfObjects
        .sort((a, b) => Object.keys(a) - Object.keys(b))
        .map((item) => Object.values(item).toString())
        .join(" ");
}

console.log(sentence([{'1': 'dog' }, {'2': 'took'}, {'4': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}]))
// 'dog took Vatsan for a spin'

console.log(sentence([{'3': 'Jake.'}, {'5': 'Chinatown'}, {'1': 'Forget'},{'4': 'It is'}, {'2': 'it'}]))
//  'Forget it Jake. It is Chinatown'

console.log(sentence([{'3': 'vatsan!'}, {'2': 'love'}, {'1': 'I'}]))
//  'I love vatsan!'

console.log(sentence([{'0': 'Wars'}, {'-1': 'Code'}]))
// 'Code Wars'