// Functions with objects and array in javascript

function calcualteCartPrice(...num1) {
  // rest and spread operator
  return num1;
}
// console.log(calcualteCartPrice(222,100,225,445))

function calcualteCartPrice1(val1, val2, ...num2) {
  return num2;
}
//console.log(calcualteCartPrice1(100,200,300,400)) // val1->100, val2-->200 and remaining store in spread/rest operator

/* function with Object */
const user = {
  username: "roshan",
  prices: 599, 
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
};

//handleObject(user);   Also this way works

handleObject({
    username:"Ram",
    price: 566
})


// Function with Array !!

const MyNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(MyNewArray));
console.log(returnSecondValue([200,400,100,600]));


