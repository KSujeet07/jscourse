//Array
const myArr = [0,1,2,3,4,5]
const myHeros = ["Shaktiman","Naagraaj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);
// console.log(myArr2);
// console.log(myHeros);

//ARRAY METHODS
myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.pop()
myArr.pop()

// console.log(myArr);

myArr.unshift(9)
myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.includes(3));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//SLICE & SPLICE
console.log("A",myArr);
const myN1 =myArr.slice(1,3)
console.log(myN1);
console.log("B", myArr);

const myN2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myN2);








