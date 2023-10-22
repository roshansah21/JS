// Filter Map and Reduce in Javascript

const coding = ["javascript", "c++", "java", "c", "python"]


// should i store this value in variable

// const value = coding.forEach( (items) => {
//     //console.log(items);
//     return items            // foreach not returning any value

// } )

// console.log(value);

/*
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => num > 4 )  // filter returning the
console.log(newNums);


*/


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => {
// return num > 4                       // use return in  while opening the scope{}
// })  // filter returning the
//console.log(newNums);


// const myNums = [1,2,3,45,6]         // this is also a way to use all
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    { title: 'Book one',genre: 'Fiction',publish: 1981, edition: 2004 },
    { title: 'Book two',genre: 'history',publish: 1999, edition: 2004 },
    { title: 'Book three',genre: 'sci-fi',publish: 2011, edition: 2004 },
    { title: 'Book four',genre: 'religion',publish: 2015, edition: 2004 },
    { title: 'Book five',genre: 'karma',publish: 2023, edition: 2004 },
]

const userBooks = books.filter( (bookkey) => bookkey.genre === 'Fiction'  )
console.log(userBooks);






