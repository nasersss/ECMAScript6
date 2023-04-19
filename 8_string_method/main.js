/*
New string method 
startsWith => startWith(string, Position = 0)
endsWith => endsWith (string, Position = string.length)
includes => includes(string, Position = 0)
repeat 
*/

let text = 'Hello nice Javascript'
console.log(text.startsWith('H'));//true
console.log(text.startsWith('Hello'));///true
console.log(text.startsWith('M')); //false
console.log(text.startsWith('J',6)); //true
console.log(text.endsWith('t')); //true
console.log(text.endsWith('Javascript')); //true



console.log(text.includes('Javascript')); //true
console.log(text.includes('Ali')); //false

console.log(text.repeat(5))
console.log(text.replace('nice', "Harrom"))
