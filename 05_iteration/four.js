const myObject = {
    js : 'JavaScript',
    php: 'PHP',
    rb : 'Ruby' 
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const map  = new Map()
map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');  

for( const key in map){
    console.log(key);
    
}