/**
 * Symbols
 * A “symbol” represents a unique identifier.
 * A "symbol" is immutable don't modified
 * 
 */

let s1 = Symbol('Testing');
let s2 = Symbol('Password');
// console.log(typeof s1);
// console.log(s1 === s2 );

let object = {
    username: 'Ali Ahmed',
    website:'goup.net',
    [s2]:"Password is hidden"
}

for (const val of Object.entries(object)) {
    console.log(val)
}

// console.log(Object.getOwnPropertyNames(object));
// console.log(Object.getOwnPropertySymbols(object));

let symbol2 = Symbol.for("Testing")// symbol not exist, Created is
let symbol3 = Symbol.for("Testing")// symbol is exist, return it 

console.log(symbol2 === symbol3);
console.log(symbol3.description)