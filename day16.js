// Object in Depth in javaScript

/* Singleton -->literal ki tarah declare karunga toh singleton nahi banta hai,

constructor se singleton banega
Object.create  --> constructor method
*/

// Object literals
const mySymbol = Symbol("interestingFact"); // remember

const JsUser = {
    name : "Roshan",
    "full name" : "Roshan sah",
    [mySymbol] : "interestingFact", // use of symbol
    age : 22,
    gmail : "roshan@google.com",
    isLoggedIn: false,
    lastLoggedIn : ["Monday","saturday"]
}
// console.log(JsUser.gmail)
// console.log(JsUser["gmail"]) // -->> string assume
// console.log(JsUser["full name"]) // no dot found
// console.log(JsUser[mySymbol])

/* suppose take one symbol and add it to the object's key and print it */


JsUser.gmail = "Roshan@chatGpt.com" // changing the value in object
//console.log(JsUser.gmail)

//Object.freeze(JsUser)
JsUser.gmail="roshan@upi.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());