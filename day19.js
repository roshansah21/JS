// Functions and paraMeter

// console.log('R');
// console.log('O');
// console.log('N');
// console.log('Y');

function SayMyName() {
  console.log("R");
  console.log("O");
  console.log("N");

  console.log("Y");
}

// SayMyName()

function addTwoNumber(num1, num2) {
  //let result = num1 + num2;
 // return result;
 return num1 + num2;
}

const result =addTwoNumber(6, 7);
//console.log(result);



function loginUserMessage(username = "Rahul"){
    if(username === undefined){ // !username
        console.log("Please enter a username");
        return
    };
    return `${username} just logged in`
}
//loginUserMessage('Roshan') //-->function executed huwa hai aur function ne valiue v return kar di BUT YOU HAVENOT TELL TO CONSOLE/PRINT
console.log(loginUserMessage('Roshsan')); // empty string undefined
//console.log(loginUserMessage('Roshan'))


