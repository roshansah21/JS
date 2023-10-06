/* dataTypes of javaScript summary
generally two type of datatypes
1.Premitive :-  7 (call by value)
string,Number,Boolean, null, undefined, Symbol(making unique value), BigINT



const score = 100 //number/integer
const scoreValue = 100.2
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)

const bigNumber = 354103121545354554
console.log(bigNumber)

*/



/*
2.Non-premitive -Reference 
Array,Objects,Function
*/
const MyVegi = ['carrot','cauliflower','cabbage'];
//console.log(MyVegi)---->Array

const Mine={
    name:'Roshan',
    age : 22,
    CTC : '6.8L'
};
//console.log(Mine)--->Object


const MyFunction=function(){
    console.log("hello funtion")
}

// console.log(MyFunction)---> function






