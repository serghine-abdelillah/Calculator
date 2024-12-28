// when click on div diplat message 
// when click on button display message
var screen = document.querySelector('span');
var curnum = ''
var prenum = ''
var opr = ''
var result = 0;

document.querySelector('.ac').addEventListener('click', function(){
    screen.innerText = '';
    curnum = ''
    prenum = ''
    opr = ''
})
document.querySelectorAll('.numbers-buttons button ').forEach(function (button) {
    button.addEventListener('click', function(){
        curnum = curnum + button.innerText;
        console.log(curnum)
        var txt = document.createTextNode(button.innerText);
        screen.appendChild(txt);    
    })});

document.querySelectorAll('.operations-buttons button').forEach(function (button) {
    button.addEventListener('click', function () {
        var opr = document.createTextNode(' '+button.innerText+' ');
        var lastel = screen.innerText.slice(-1);
        if (!['+', '-', 'x', '/'].includes(lastel)){
            screen.appendChild(opr)
        }
        result = curnum;
        switch (opr) {
            case '+':
                
                break;
            case '-':
                
                break;
            case 'x':
                
                break;
            case '/':
                
                break;
        
            default:
                break;
        }
        curnum = '';
    })    
    
})
