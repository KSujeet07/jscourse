const mysym = Symbol("key1")

const JsUser = {
    name : "JENNY",
    age : 22 ,
    location : "PATNA",
    [mysym] : "mykey1",
    "FullName" : "SUJEET KUMAR",
    email : "JENNY7@GMAIL.COM",
    isLoggedIn : false,
    LastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["FullName"]);
// console.log(JsUser[mysym]);

// JsUser.email = "JENNY7@chatgpt.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)
// JsUser.email = "JENNY@MICROSOFT.COM"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");

}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);

}

console.log(JsUser.greetingTwo());


console.log(JsUser)








