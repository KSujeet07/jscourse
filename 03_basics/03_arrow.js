// const user = {
//     Username : "SujeetArya",
//     greet : function() {
//         // console.log(`Hello, ${this.Username}`);
//     }
// }
// user.greet(); 
// user.greet.call({    Username : "Alex"});
// user.Username = "Jenny"
// user.greet();

// function chai(){
//     let username = "Sujeet"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "Sujeet"
//     console.log(this.username);
// }
// chai()


// const chai = () => {
//     let username = "Sujeet"
//     console.log(this.username);
// }
// chai()
// +++++++++++++++++++++++++++++++ Arrow Functions +++++++++++++++++++++++++++++++

// const addTwo = (a, b) => {
//     return a + b;
// }
// console.log(addTwo(3, 7)); // Outputs 10

// ++++++++++++++++++++++++++++++++ Implicit Return +++++++++++++++++++++++++++++++
Note : "return are required when using curly braces {} in arrow functions but when not using curly braces, the expression is returned implicitly."

// const addTwo = (a, b) => a + b; // Implicit return
// console.log(addTwo(4, 6)); // Outputs 10

// const addThree = (a, b, c) => (a + b + c); // Implicit return
// console.log(addThree(4, 6, 8)); // Outputs 18


// const username = "Sujeet Arya"
// const greetUser = () => (`Hello, ${username}! Welcome back.`);
// console.log(greetUser()); // Outputs: Hello, Sujeet Arya! Welcome back.

// const username = "Sujeet Arya"
// const greetUser = () => (`Hello, ${this.username}! Welcome back.`);
// console.log(greetUser()); // Outputs: Hello, undefined! Welcome back.
