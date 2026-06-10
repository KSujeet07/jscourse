// const tinderuser = new object ()
const tinderuser = {}

// console.log(tinderuser);

tinderuser.id = "123abd"
tinderuser.name = "Sanyaa"
tinderuser.isloggedIn = false

// console.log(tinderuser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        username : {
            firstname : "SUJEET",
            lastname : "KUMAR"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);

// combination of object

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj3 = {5:"a" , 6:"b"}

// console.log(obj3);

// const obj4 = {obj1 , obj2}

// const obj4 = Object.assign({}, obj1, obj2 , obj3 )
// console.log(obj4);

// const obj4 = {...obj1,...obj2,...obj3}  //easy way to merge and  display
// console.log(obj4);

// const users =(
//     {id : 1,
//     email:"h@gmail.com"} ,
//     {

//     },
//     {

//     }
// )
// console.log(users[1].email);  // AGAIN READ

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));


// console.log(tinderuser.hasOwnProperty('isloggedIn'));


const course = {
    coursename : "Js in Hindi ",
    price : 999 ,
    courseInstructor: "Hitesh"
}
// const {courseInstructor } = course
const {courseInstructor:instructor} = course
const {price}= course
console.log(instructor);


