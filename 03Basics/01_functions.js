function addTwoNumbers(a, b) {
    return a + b;
}

addTwoNumbers(3, 5); // Returns 8

const result = addTwoNumbers(10, 15);
console.log(result); // Outputs 25

function loginUSerMessage(username = "Sam") {
    if (!username){
        return "Please enter a valid username.";
    }
    return `${username} just logged in.`;
}

console.log(loginUSerMessage("Sujeet"));
