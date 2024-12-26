// when click on div diplat message 
// when click on button display message

document.querySelectorAll('.numbers-buttons button').forEach(function(button) {
    button.addEventListener('click', function() {
        // parse html element
        document.querySelector('span').appendChild(document.createTextNode(button.innerText));
    });
});