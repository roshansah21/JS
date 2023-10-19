/* Immediately Invoked Function Expressions IIFE in js

(suppose you are writing a function and Immediately if u want to execute,,it may  be a file which might be connected with database)

global scope ke polution se problem hoti hai kai war, toh uss global scope k jo variable hai/wa jo v declearation hai usse hatane ke liye IIFE ka use kiya



function roshan() {
    console.log(`DB CONNECTED`);
}

roshan()


*/
// USE IIFE

(function roshan(){
    //named IIFE
    console.log(`DB CONNECTED`);
})() ;       // error alert                          


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('rohsan')