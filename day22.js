// Scope level and mini hoisting in javascript

/* Nested scope */

function one() {                     // Parent cannot access
    const username = "Roshan"

    function two() {
        const website = "youtube";    // child can access their parent
       //  console.log(username);
    }
    //console.log(website)
    two()
}
one()



// USE IF statement
if (true) {
    const username = "Roshan's";

    if (username === "Roshan's") {
        const website = " YouTube";
    //    console.log(username + website);
         
    }
    //console.log(website);
    
}
// console.log(username);



//   INteresting fact !


console.log(addone(5));
function addone (num) {
    return num + 1
}



addtwo(5)                      // Hoisting in js
const addtwo = function (num) {
    return num + 2
    
}









