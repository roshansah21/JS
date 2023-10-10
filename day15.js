//  Array part 2

const marvel_heros = ["Thor","ironMan","CaptainAmerica"];
const dc_heros = ["Superman","flash","WonderWomen"];
marvel_heros.push(dc_heros);
//console.log(marvel_heros)
//console.log(marvel_heros[3][1])

const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros)

const all_new_heros = [...marvel_heros,...dc_heros] // spreading
//console.log(all_new_heros)


const another_array = [1,2,3,4,[5,6],7,[2,8,[6,9],99]]
const real_another_arr = another_array.flat(Infinity) // flat
//console.log(real_another_arr)


console.log(Array.isArray('Roshan'))
console.log(Array.from('Roshan')) // converting to array
console.log(Array.from({name: 'roshan'}));//will ask, making aray for keys, empty array give





let score1 = 1;
let score2 = 2;
let score3 = 3;
console.log(Array.of(score1,score2,score3))


