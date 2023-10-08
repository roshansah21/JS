// stack and Heap memory in javascript

// stack(premitive)-->sending copies, heap(Non-premitive)--reference

let myYouTubeName = "Mythvine"
let anotherName = "Roshan"

console.log(myYouTubeName)
console.log(anotherName)

const userOne={
    name : "Roshan",
    age : 22,
    ctc : '6.8L'
}
// console.log(userOne)

let userTwo = userOne
userTwo.name = "sah"

console.log(userOne.name)
console.log(userTwo.name)


// https://excalidraw.com/