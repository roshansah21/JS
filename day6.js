// DataType conversion confusion
let score = '60abc'  //true,'roshan', undefined,null
console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)   //NaN --> not a number


/*
"60" --60
"60abc" => NaN
true=1,flase=0
*/

let isLoggedIn = "Roshan"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
1-->true,0-->false
"" empty-->false
"Roshan"-->true
*/



let someNumber = 60
let stringNumber = String(someNumber)
console.log(someNumber)
console.log(typeof stringNumber)