const accountId = 14255
let accountEmail = "Jenny@gmail.com"
var accountPassword = " 5465252"
accountCity = "Jaipur"
// accountId = 2 not allowed

console.table([accountId , accountEmail , accountPassword]  );

/* prefer not to use var because of issue in block scope and functional scope */

let accountstate;
console.log(accountstate);

// for more learn go on "https://tc39.es/"