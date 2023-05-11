
/**
 *  Destructuring Object
 *  - Object
 *  - Array
 *  -Parameter
 * 
 * 
 * 
 */
//******************************* */
//************* Object ***********
//******************************* */
var user = {
    name: 'Ali',
    gender: "Male",
    age: 25,
    city: 'IBB',
    skills: {
        html: 70,
        css: 80,
        JavaScript:60
    }
}

const {name, gender, age, them = 'default'} = user; 
const {name:theName, gender:theGender, age:theAge, them:theThem = 'default'} = user;
// const { skills} = user; // object
// const { skills: {html, css, python = 80}} = user; // object
const {html, css, JavaScript} = user.skills;

// console.log(`My name is ${name} and my them is ${them}`);
// console.log(`My name is ${theName} and my them is ${theThem}`);
// console.log(`My my skills  in html is ${html} and css is ${css}`);


//******************************* */
//************* Array ***********
//******************************* */

const food = ["Burger", "Pizza", "Chicken","Meet"];
const food2 = ["Burger", "Pizza", "Chicken","Meet" ,["Apple", "Banana", "Mango",["EygOrang", "PakistanOrange"]]];

const [f1, f2, , f4, f5 = 'default'] = food;

const [one, two,three , four,[fr1,Banana ,Mango , [or1, or2] ] ] = food2

// console.log(` one  : ${one} tow ${two} fruit1 ${fr1} orang ${or2}` );

//swapping using destructuring


let a = 20,
    b= 50;

[a, b ] = [b, a];

// console.log(a);
// console.log(b)

//******************************* */
//************* Param ***********
//******************************* */

let showUserInfo =  ({name:theName, gender:theGender, age:theAge, them:theThem = 'default'}) => {
     console.log(`My name is ${name} and my them is ${them}`);
    console.log(`My name is ${theName} and my them is ${theThem}`);
    console.log(`My my skills  in html is ${html} and css is ${css}`);

}

// showUserInfo(user);
const user1 = {

}

// https://dev.to/hebashakeel/differences-between-javascript-map-and-object-821
// https://javascript.info/map-set