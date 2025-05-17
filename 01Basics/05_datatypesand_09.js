//alert (3+3) we are using node.js  , not browser

let name = "Jenny"              //STRING DATATYPES
let age = 18                    //INTEGER
let isLoggedIn= false           //BOOLEAN

// number =>2 to power 53
//bigInt
//string  => ""
//boolean =>true/false
// null => standard CSSMathValue
// undefined => undefined
// symbol => unique
//object

console.log(typeof "Jenny");
console.log(typeof age);
console.log(typeof null);
console.log(undefined);

// Primitive datatype => there is 7 type
// 1.string
// 2.Number
// 3.boolean
// 4.null
// 5.undefined
// 6.symbol
// 7.bigInt

// note : number contains both integer and Float.

const score = 100
const scoreValue = 100.3
const isLoggedIn1 = false
const outSideTemp = null
let userEmail;
const id = Symbol('123')
// const anotherId = symbol('123')             // same type of symbol is valid in js
const bigInt = 1452698756325632632n

// NON-PRIMITIVE  DATATYPE
//1.ARRAY
//2.OBJECTS
//3.FUNCTIONS

const heros = ["Shaktiman" , "BATMAN " , "Super-Man"]
console.log(heros);

let myobj = {
    name:"JENNY",
    age:21
}

const myFunction = function (){
    console.log("Hello Jenny");
}

myFunction();
console.log(typeof outSideTemp);


