/**
 * New Array Method
 * Array.of
 * Array.from
 * Array.fill
 */

let oldArray = Array(100);
console.log(oldArray);
console.log(oldArray.length);


let newArray = Array.of(100);
// console.log(newArray);
// console.log(newArray.length);

// Array.from(iterable, Mapfn,This)

let name = 'Nasser';
let arrayOfLettersBySpread = [...name];
let arrayOfLettersByArrayFrom= Array.from(name);

// console.log(arrayOfLettersBySpread);
// console.log(arrayOfLettersByArrayFrom);

let numbers = [10, 20, 30, 40, 50, 60, 70];

let newNumbers = Array.from(numbers, number=> number - 10);
console.log(newNumbers);

// Array.fill(value to fill, start Default 0, End default Array.length)

let arr3 = [10,5,6,9,7];
// console.log(arr3.fill(100));
// console.log(arr3.fill(20,2));
// console.log(arr3.fill(500,1,2));

// Array.find() Not return all values  return first value fid it 

// console.log(arr3);
let el = arr3.find(el => el>=10);
let el2 = arr3.findIndex(el => el>=10);
// console.log(el)
// console.log(el2)

// Array.copyWithin(target, start Default 0, End default Array.length)

let arr4 = ["A", "B", "C","D","E","F","G","H"];

arr4.copyWithin(0,3,6);
console.log(arr4);

