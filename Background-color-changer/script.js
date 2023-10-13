const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

// Use some concept about event(like cursor point,tab close,mouse move all are event)

buttons.forEach(function(button){
console.log(button);
button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'red') {
        body.style.backgroundColor = e.target.id;
        
    }
    if (e.target.id === 'white') {
        body.style.backgroundColor = e.target.id;
        
    }
    if (e.target.id === 'blue') {
        body.style.backgroundColor = e.target.id;
        
    }
    if (e.target.id === 'yellow') {
        body.style.backgroundColor = e.target.id;
        
    }
})
})