// Array in javaScript

const myArr = [0,1,2,3,4,5]
//console.log(myArr)

const SuperHero = ["Wonda","Thor","IronMan"]
//console.log(SuperHero)

const myArr2 = new Array(1,2,2,3,4)
//console.log(myArr2[1])


// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(5) //---> Adding to the zero index of array
myArr.shift()
//console.log(myArr)


// console.log(myArr.includes(7)) // checking boolean value return
// console.log(myArr.indexOf(2))

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)




// slice, splice

console.log("A", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B",myArr)
const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2)





