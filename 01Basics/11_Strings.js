const name = "Sujeet"
const myrepo =50

// console.log(name + "Choudhary" + myrepo);
// console.log(`my name is ${name} and my repo count is ${myrepo}`);

// const gameName =  newstring("ForzenBeast")
const gameName =  "FrozenBeast"
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('z'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   FrozenBeast    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://sujeet.com/sujeet%20Arya"
console.log(url.replace('%20' ,' - '));

console.log(url.includes('sundar'));
const gameName1= "SUJEET-HC-COM"
console.log(gameName1.split('-'));



