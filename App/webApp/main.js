// when click on div diplat message 
// when click on button display message
var screen = document.querySelector('span');

document.querySelector('.ac').addEventListener('click', function(){
    screen.innerText = '';
})
document.querySelectorAll('button:not(button.ac)').forEach(function (button) {
    button.addEventListener('click', function(){
        txt = document.createTextNode(button.innerText)
        screen.appendChild(txt)});    
})

