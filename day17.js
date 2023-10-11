// Object in js Part-2

// const fbUser = new Object(); // --> singleton

const fbUser = {}  // Non-singleton
fbUser.id = "123sdf"
fbUser.name = "roshan"
fbUser.isLoggedIn = false
//console.log(fbUser)

const regularUser = {
    fullname : {
        UserFullName : {
            firstName : "roshan",
            lastName :  "sah",
        }
    }
}

//console.log(regularUser.fullname.UserFullName.firstName)


/* we have combine/merge the array similary in object also we do */

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a", 6:"b"} 
const obj4 = {obj1,obj2,obj3}
// console.log(obj4);

// const obj5 = Object.assign({/* source,target*/},obj1,obj2,obj3)


const obj5 = {...obj1,...obj2,...obj3}
/* 
sprading the value like throwing a class into the ground
*/
console.log(obj5)


/*

For backend : Array of Object

*/

const users = [
    {
        id : 1,
        gmail : "backend@google.com",
    },
    {
        id : 1,
        gmail : "backend@google.com",
    }
]

console.log(fbUser);
console.log(Object.keys(fbUser)); // learn
console.log(Object.values(fbUser)); // learn
console.log(Object.entries(fbUser));









