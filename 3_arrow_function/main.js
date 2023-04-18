//Arrow function

let test1 = function () {
return  'Hello' ;
}

let testArrow =  () =>{
    return  'Arrow' ;
 }

 let testArrow2 = () =>  'Arrow 2 '
 let testArrow3 = _ =>  'Arrow 3 '

// console.log(test1());
// console.log(testArrow());
// console.log(testArrow3());


// with parameter 

//One param  
let regularOneParam = function (number) {
    return number *10 ;
}

// Arrow one param
let arrowOneParam = number =>  number * 10 ;

// console.log(regularOneParam(60));
// console.log(arrowOneParam(20))


//Tow param
let regularParam = function (number1, number2) {
    return number1 + number2 ;
}

//Arrow tow param 
let arrowTowParam = (number1, number2) => number1 + number2


// ****************************
// ****************************
// ****************************
// ****************************


let test =  function () {
    document.getElementById('show').innerHTML = this
}


let test2 =   () => document.getElementById('show').innerHTML = this


// window.onload = test

// document.getElementById('btn').addEventListener('click',test)

// window.onload = test2
// document.getElementById('btn').addEventListener('click',test2)


function Person() {

    let that = this
    this.age  = 0


    setInterval(function () {

        this.age++;

        console.log(this.age)

    },1000)

    // setInterval(function () {

    //     that.age++;

    //     console.log(that.age)

    // },1000)

}

function PersonArrow() {

    let that = this
    this.age  = 0


    setInterval(() => {

        this.age++;

        console.log(this.age)

    },1000)

}
// let user = new Person();
// let user2 = new PersonArrow();