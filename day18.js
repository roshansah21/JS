// Object de-structure and JSON API

const course = {
    channelName : "Mythvine",
    Available : "youTube",
    Host : "roshan"
}

//console.log(course);

// course.Host

const {Host : owner} = course

console.log(Host);
console.log(owner);



/*  REACT
 const navbar = ({company}) => {

 } 

navbar(company = "roshan")
*/
