// when click on div diplat message 
// when click on button display message

document.querySelectorAll('.numbers-buttons button').forEach(function(button) {
    button.addEventListener('click', function() {
        // append number to the span
        document.querySelector('span').appendChild(document.createTextNode(button.innerText));
    });
});

document.querySelectorAll('.operations-buttons button').forEach(function(button) {
    button.addEventListener('click', function() {
        // append operation to the span
        const span = document.querySelector('span');
        const lastChar = span.innerText.slice(-1);
        if (!['+', '-', '/', 'x'].includes(lastChar)) {
            span.appendChild(document.createTextNode(button.innerText));
        }
    });
});
