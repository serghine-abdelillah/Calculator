// when click on div diplat message 
// when click on button display message
var screen = document.querySelector('span');
var curnum = ''
var opr = ''
var result = null;

var divr = document.createElement('div')
divr.setAttribute("class", "result");


document.querySelector('.ac').addEventListener('click', function(){
    screen.innerText = '';
    curnum = ''
    opr = ''
    result = null;
})
document.querySelectorAll('.numbers-buttons button:not(.equal) ').forEach(function (button) {
    button.addEventListener('click', function(){

        if (curnum.includes('.') && button.innerText.includes('.')) {
            return;
        } else {
            
            var lastel = screen.innerText.slice(-1);
        if (result == null ) {
            curnum = curnum + button.innerText;
            var txt = document.createTextNode(button.innerText);
            screen.appendChild(txt);    
        } else if ( result != null && !['+', '-', 'x', '/'].includes(lastel) ) {
            screen.innerText = '';
            curnum = '';
            curnum = curnum + button.innerText;
            var txt = document.createTextNode(button.innerText);
            result = null;
            screen.appendChild(txt); 
        } else if ( result != null && ['+', '-', 'x', '/'].includes(lastel)){
            result = null;
            curnum = curnum + button.innerText;
            var txt = document.createTextNode(button.innerText);
            screen.appendChild(txt);
        }
            
        }

        
        
    })});
document.querySelectorAll('.operations-buttons button').forEach(function (button) {
    button.addEventListener('click', function () {
        var opr = document.createTextNode(' '+button.innerText+' ');
        var lastel = screen.innerText.slice(-1);
        if (!['+', '-', 'x', '/'].includes(lastel)){
            screen.appendChild(opr)
        }
        
        curnum = ''
    })    
    
})

document.querySelector('.equal').addEventListener('click', function () {
    if (screen.innerText.includes('x')){
        var t = screen.innerText.replace('x', '*');
        try {
            result = eval(t)
            divr.innerText = result;
            screen.appendChild(divr)
        } catch (error) {
            screen.innerText = 'Error';
        }
        
    }else {
        try {
            result = eval(screen.innerText)
            divr.innerText = result;
            screen.appendChild(divr)
            screen.innerText = divr.innerText
        } catch (error) {
            screen.innerText = 'Error';
        }
    }
    curnum = ''
});

