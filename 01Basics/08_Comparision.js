console.log(2>1);
console.log(2>=1);
console.log(2<1);

console.log("2">1);
console.log("02">1);
console.log(null>0);
console.log(null==0);
console.log(null>=0);

/*
the reason is that an equality check == and comparisions <,>,>=,<= work differently.
Comparisions conert null to a number , treating it as 0, that's why [null>=0] is true and [null>0] is false.

strictly check (===) =>this is used to check the both number is equal as well as their datatype is also equal
*/

