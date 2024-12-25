// when click on div diplat message 
// when click on button display message

document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function() {
        // parse html element
        var message = button.innerText;
        alert(message);
    });
});