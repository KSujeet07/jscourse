const userEmail = "S@Sujeet.ai"
const userEmail1 = []

// if(userEmail){
//     console.log("Got the user Email");
//     console.log(userEmail);
    
// } else {
//     console.log("No email found");
// }

// Truthy and Falsy values in JavaScript

// Falsy values 
// false, 0, "", null, undefined, NaN, -0, BigInt 0n,

// Everything else is Truthy value
// "0", 'false', " [], {}, function () {}

// if(userEmail1.length === 0){  // Truthy check
//     console.log("Array is Empty");            
// } 

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){  // Truthy check
//     console.log("Object is Empty");            
// }

// =============Nullish Coalescing Operator (??)=============
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// let val1 ; 
// val1 = 5 ?? 10;  // returns 5
// val1 = null ?? 10;  // returns 10
// val1 = undefined ?? 10;  // returns 10
// val1 = null ?? 10 ?? 25;  // returns 10

// console.log(val1);

// =================Ternary Operator=================
// condition ? true statement : false statement

const age = 19;
age >= 18 ? console.log("User can vote") : console.log("User cannot vote");