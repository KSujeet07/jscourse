function addTwoNumbers(a, b) {
    return a + b;
}

addTwoNumbers(3, 5); // Returns 8

const result = addTwoNumbers(10, 15);
// console.log(result); // Outputs 25

function loginUSerMessage(username = "Sam") {
    if (!username){
        return "Please enter a valid username.";
    }
    return `${username} just logged in.`;
}

// console.log(loginUSerMessage("Sujeet"));


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,100,500,6000));


const Book = {
    name : "THE ALCHMIST",
    price : 199

}

function handleObject(anyobject){
    console.log(`Book name is ${anyobject.name} and price is ${anyobject.price}`);
}

// handleObject(Book);
handleObject({
    name: "Harry Potter",
    price: 299
})

const myNewArray = [1,2,3,4,5,6,7,8,9];

function returnSecondValue(anyarray){
    return anyarray[1];
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,550]));

