// THIS and arrow function in js

const user = {
    username: "Roshan",
    age: 22,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Rohan"
// user.welcomeMessage()


// console.log(this);



// function rosh(){
//     let username = "roshan"
//     console.log(this.username);
// }
// rosh()



// const rosh=function(){
//         let username = "roshan"
//         console.log(this.username);
//     }
    
    const rosh = function(){
        let username = "roshan"
        console.log(this);
    }

   // rosh()



//     const addTwo = (num1 , num2) =>{    // Arrow function
//     return num1 + num2
//    }
// console.log(addTwo(4,8));



// const addTwo = (num1 , num2) => num1 + num2
// const addTwo = (num1 , num2) => (num1 + num2)
// console.log(addTwo(4,8));


const addTwo = (num1, num2) => {username: "roshan"}
console.log(addTwo(4,8));



const myArray = [2, 5, 3, 7, 8]
myArray.forEach()



