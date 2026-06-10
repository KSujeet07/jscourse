let a = 30
var b = 40
const c = 50

if (true){
    let a = 300
    var b = 400
    const c = 500
    // console.log("Inside Block:", a, b, c); // Inside Block: 300 400 500
}

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "Sujeet"
    function two (){
        const website = "youtube.com"
        // console.log(username);
    }
    // console.log(website);  // Error: website is not defined , chhota bada se le skta hai pr bada chhota se nahi
    
    two()
}
one()


if(true){
    const username = "Sujeet"
    if(username === "Sujeet"){
        const website = " youtube.com"
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username); 

// ++++++++++++++++++++++++this is function scope and block scope+++++++++++++++++++++++++++++++
function addone(num){
    return num + 1
}
// console.log(addone(5));

// +++++++++++++++++++++++++++this is function expression+++++++++++++++++++++++++++++++

// console.log(addTwo(5));  // Error: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(5));

