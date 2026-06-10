// stack memory is used in primitive datatype  -- duplicate
// heap memory is used in Non-primitive datatype -- reference

let myYoutubeName = "JennyXyt"
let anotherName = myYoutubeName
anotherName = "SteveYt"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "Jenny7@gmail.com",
    upi : "Jenny@ybl"
}
let userTwo = userOne
userTwo.email = "sujeet7@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

