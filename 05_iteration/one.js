//for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element ==5){
//         console.log("5 is best number");
        
//     }
//     console.log(element);
    
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of : ${i}`);
    
//     for( let j=1; j<=10; j++){
//         // console.log(`inner loop value ${j} and outer loop ${i}`);
//         console.log(i + ' * ' + j + ' = ' + i*j );
        
//     }
    
// }


const myArray = ['html', 'css', 'js', 'react', 'nodejs'];
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


for( let i=1; i<=20; i++){
    if(i==11){
        // console.log("11 is detected ");
        break;
    }
    // console.log(`value is : ${i}`);
}

for( let i=1; i<=20; i++){
    if(i==11){
        console.log("11 is detected ");
        continue;
    }
    console.log(`value is : ${i}`);
}