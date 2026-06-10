const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of arr) {
    // console.log(`Number is : ${num}`);
    
}

const greeting = "Hello World";

for (const char of greeting){
    // console.log(`Character is : ${char}`);  
}

//MAP

const map  = new Map()
map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');    

// console.log(map);
for (const [key , value] of map) {
    console.log(key , ':-', value);
    
}
