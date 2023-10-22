// HIGH ORDER ARRAY LOOPS in JS

// for of loop

//["", "", ""]
//[{}, {}, {}]

// const arr = [9,8,7,6,5,4,3]
// for (const num of arr) {
//     console.log(`value is ${num}`);
// }

//const greetings = "Hello world!"
//for (const greet of greetings) {
   // console.log(`Each words is ${greet}`);
//}

/*___________MAPS -->unique value_______________*/

// const map = new Map()
// map.set('NP',"Nepal")
// map.set('IN', "India")
// map.set('JP',"Japan")

//for (const [key, value] of map) {
   // console.log(key,': ',value);
//}
/*

// Now try on object

const myObject = {
    'game1': 'PUBG',
    'game2': 'FREEFIRE'
}
for (const [key, value] of myObject) {
    //console.log(key,': ', value);
}







const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb:"rubby",
    swift: "swift by apple"
}                         // for of loop not working on object use for in loop

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
   
}

// Apply for of loop in an Array

const programming = ["js", "py", "java", "rubby", "cpp", "react"]
for (const key in programming) {
    console.log(programming[key]);
    
}




const map = new Map()
map.set('NP',"Nepal")
map.set('IN', "India")
map.set('JP',"Japan")

for (const key in map) {
   console.log(key);
}

*/

/*____________________FOREACH loop_______________________*/

const coding = ["js", "ruby", "java", "py", "js"]
// coding.forEach( function (items) { //take foreach( function name(){} )
//     console.log(items);
    
// } )

// use arrow function

// coding.forEach( name = () => {} ) // remove name

// coding.forEach( (items) => {
//     console.log(items);
// } )

/*

function printMe(items) {
    console.log(items);
}

coding.forEach(printMe)




coding.forEach( (items, index, arr) => {  // not carry items only
    console.log(items, index, arr);

} )

*/


const programmingName = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    },
]


programmingName.forEach( (items) => { //best concept generally use in data base
console.log(items.languageName);
} )






















