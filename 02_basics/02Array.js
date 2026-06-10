const marvel_heros = ["Spiderman", "Iron-Man","Thor"]
const Dc_heros = ["Bat-man", "Flash", "Super-Man"]
// marvel_heros.push(Dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(Dc_heros)  //it works as well as push work
// console.log(all_heros);

const all_new_heros = [...marvel_heros,...Dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,4,[5,6,7],[6,7,[4,5]]]
const real_array = another_array.flat(Infinity)

// console.log(another_array);
// console.log(another_array.flat(Infinity));
// console.log(real_array);
// console.log(Array.isArray("SUJEET"));
// console.log(Array.from("SUJEET"));

// console.log(Array.from({name:"SUJEET"}));
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));







