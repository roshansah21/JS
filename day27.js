// FOR LOOP WITH BREAK AND CONTINUE IN JS

// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
       /// console.log("5 is best number"); // pahila 4tak print tab message then remaining no. 
    }
    //console.log(element);
    
}
//console.log(element); // no acces out of global value


// LOOp in loop

for (let i = 1; i < 10; i++) {
    //console.log(`Outer loop value: ${i}`);
        for (let j = 0; j < 10; j++) {
            //console.log(`Inner loop value: ${j} and inner loop ${i}`);
            //console.log(i + '*' +j + ' = ' +i*j);
        }
    
}

let myArray = ["iornman","thor", "wonda"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
    
}


// Break and continue

// for (let index = 0; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`value of i is ${index}`);
    
// }

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`value of i is ${index}`);
    
}





