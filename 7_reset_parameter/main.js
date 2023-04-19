// Reset parameters ....
// function sum(x, y) {
//     return x + y ;
// }
// console.log(sum(5,5))

let  addAll = (...params) => {

    let number = 0;

    for(let param of params) number += param;

    return number

}

console.log(addAll(5,6,6,8,-25,-963))