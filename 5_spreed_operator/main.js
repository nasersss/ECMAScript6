/*
     Spreed Operator
*/

let array1 = [1, 2, 3],
    array2 = [5, 6];
 // console.log(array1.concat(array2))
let all = [...array1, ...array2];
// console.log(all);

// console.log("**********************");

let sum = (x, y, z) =>  x + y + z ;
// console.log("sum : " + sum(2,2,2));
// console.log("sum array with out spreed : " + sum(array1));
// console.log("sum array with  spreed : " + sum(...array1));
// console.log("sum array with  apply : " + sum.apply(void 0, array1));

// console.log("*************************");

// console.log(array1);
// console.log(...array1);

let customArray = [10, 20, 30,...array2, 50, 60];

// console.log(customArray)

// push element to array 

let array3 = array1;
// array3.push(500);

// console.log(array1) //  [1, 2, 3, 500]
// console.log(array3) //  [1, 2, 3, 500]

let array4 = [...array1];//old solution  let array4 = [].coact(array1)

array4.push(1500);

console.log(array1) // [1, 2, 3]
console.log(array4) // [1, 2, 3, 1500]

console.log(Math.min(array1))//NaN
console.log(Math.min(...array1))//1
console.log(Math.min.apply(Math,array1))//1