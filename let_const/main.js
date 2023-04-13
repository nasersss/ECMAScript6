/*
  let, const

  var
  - Function Scope.
  - Can be redeclare.
  - Undefined When access a Variable Before it is not declare.
  - Create Properties in the Window object.

  let
- Block Scope
- Can not be redeclare.
- ReferencesError When access a Variable Before it is not declare.
- Does not Create Properties in the Window object.


  const
  - Block Scope
  - Can not be redeclare
  - ReferencesError When access a Variable Before it is not declare.
  - Does not Create Properties in the Window object.


*/

// var 

function testVar() {
    var x = 1;
    if(true){
        var x = 2;
        console.log(x);
    }
    console.log(x);

    return 'done' //for not return undefine
}

// console.log(testVar())

var x = 5;
var x = 6;

// console.log(m); //return undefined 
// var m = 2;

var var1 = "Ahmed";
console.log(window.var1) //or console.log(this.ali) return Ahmed 
console.log(window)



//let

function testLet() {
    let x = 1;
    if(true){
        let x = 2;
        console.log(x);
    }
    console.log(x);

    return 'done' //for not return undefine
}
// console.log(testLet())

// let y = 5;
// let y = 7;//syntaxError: Identifier 'y' has already been declared 

// console.log(c);
// let c = 2;//rferenceError: :cannot access 'c' before initialization


// let name = "Saleh";
// console.log(window.name)  //return empty or undefined
// console.log(window)

const COLOR = [];
COLOR.push("red","yellow"); 
// COLOR = ["RED"] //return ERROR
// console.log(COLOR)

const PERSON = {
    'name': 'Ali',
    'age': 25
}
PERSON.name = "Saleh"
console.log(PERSON)
Object.freeze(PERSON)
PERSON.name = "Hammoud"

console.log(PERSON)
