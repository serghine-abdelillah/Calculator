// when click on div diplat message 
// when click on button display message

document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function() {
        alert('button clicked');
    });
});