 const name = "Nasser";

 const myArray = [1, 2, 3, 6, 9, 8, 5];

 let sayHello = (name)=> console.log(`Hello ${name}`);

export {
    name,
    myArray,
    sayHello
};

export default function (num1, num2){
    return num1 + num2;
}