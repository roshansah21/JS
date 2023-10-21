// Control flow in js

// IF statement

const isuserloggedIn = true
const temperature = 38

// if (temperature === 40){
//     console.log("temperature is greater than 38");
// }else{
//     console.log("temperature is less than 38");
// }

//console.log("Execute")

// >,<, <=, ==, !=, ===, !==

 const score = 200

//  if(score > 100){
//     let power = "run"     // var is global scope
//     console.log(`User power: ${power}`);
//  }

//  console.log(`User power: ${power}`);



 const balance = 1000
// if ( balance ) {
//     console.log("test");
// }

// // re-write --> without scope

// if ( balance ) console.log("test2"), console.log("test3"); //Not got practice 


// if ( balance < 100){         // nested if/else condition
//     console.log("less than 100");
// }else if (balance < 1250) {
//     console.log("less than 1250");
// }else if (balance < 1500) {
// }else{
//     console.log("1000");
// }

// AND - OR condition

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2){
   // console.log("Allow to shopping");
}
// OR

if (LoggedInFromGoogle || LoggedInFromEmail){
   // console.log("Allow");
}

/*______________SWITCH_________________________*/

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// const day = 4
// switch(day){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thrusday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Default");
//         break;
// }

// const day = "Monday"
// switch(day){
//     case "Sunday":
//         console.log("Sunday");
//         break;
//     case "Monday":
//         console.log("Monday");
//         break;
//     default:
//         console.log("Default");
//         break;
// }






/*________________ TRUTH JS__________________________*/



const userEmail = "roshan.ds"// " ", [] -->check empty string give false while check empty array give true
if (userEmail) {
    console.log("Got user email");
}else {
    console.log("Don't have user email");
}

/*       falsy value
 false, 0, -0, BigInt 0n, null ,undefined, NaN

truthy values

"0", "false", " ", [], {}, function(){}

string k under hai
*/

if (userEmail.length === 0){
    console.log("Array is empty");
}


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

/* interviews

false == 0 --> (true)
false == '' --> (true)
0 == '' --> (true)

*/


// Nullish coalescing Operator (??) null, undefined
let val1;
// val1 = 5 ?? 10 // (if we call from database and firebase, probability of not getting response(null,undefined), to handle this issue) 
// val1 = null ?? 10
// val1 = undefined ?? 16
val1 = null, 10, 20
// console.log(val1);



/*_______________  Terniary Operator __________________________*/

// condition ? true : false
 const iceCreamPrice = 60
 iceCreamPrice <=20 ? console.log("less than 20") : console.log("more than 20");;









