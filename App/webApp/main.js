// when click on div diplat message 
// when click on button display message
var screen = document.querySelector('span');
var curnum = ''
var opr = ''
var result = null;
var lastel = screen.innerText.slice(-1);
var div = document.createElement('div')
div.setAttribute("class", "result");
let e = ''
var er = false;


document.querySelector('.ac').addEventListener('click', function(){
    screen.innerText = '';
    curnum = ''
    opr = ''
    result = null;
})

document.querySelector('.delete').addEventListener('click', function () {
    e = screen.innerText
    console.log(e)
    console.log(
    );
    // screen.innerText.slice(-1)
    screen.innerText = e.substring(0, e.length - 1)
})
document.querySelectorAll('.numbers-buttons button:not(.equal) ').forEach(function (button) {
    button.addEventListener('click', function(){

        if (curnum.includes('.') && button.innerText.includes('.')) {
            return;
        } else {
            
            
        if (result == null && er == false) {
            curnum = curnum + button.innerText;
            var txt = document.createTextNode(button.innerText);
            screen.appendChild(txt);    
        } else if (er){
            screen.innerText = '';
            var txt = document.createTextNode(button.innerText);
            screen.appendChild(txt);
            er = false;
        }else if ( result != null && !['+', '-', 'x', '/'].includes(lastel)) {
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
        if (er){
            screen.innerText = '';
            var txt = document.createTextNode(button.innerText);
            screen.appendChild(txt);
            er = false;
        } else{
            var opr = document.createTextNode(' '+button.innerText+' ');
            var lastel = screen.innerText.slice(-1);
            if (!['+', '-', 'x', '/'].includes(lastel)){
                screen.appendChild(opr)
            }
        }
        
        
        curnum = ''
    })    
    
})

document.querySelector('.equal').addEventListener('click', function () {
    if (screen.innerText.includes('x')){
        var t = screen.innerText.replace('x', '*');
        try {
            result = eval(t)
            div.innerText = result;
            screen.appendChild(div)
            screen.innerText = div.innerText
        } catch (error) {
            screen.innerText = 'Error';
            er = true;
        }
        
    }else {
        try {
            result = eval(screen.innerText)
            div.innerText = result;
            screen.appendChild(div)
            screen.innerText = div.innerText
        } catch (error) {
            screen.innerText = 'Error';
            er = true;
        }
    }
    curnum = ''
    result = null;
});

