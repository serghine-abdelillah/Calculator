// when click on div diplat message 
// when click on button display message
var screen = document.querySelector('span');
var curnum = ''
var prenum = ''
var opr = ''
var result = null;
let x = null ;



document.querySelector('.ac').addEventListener('click', function(){
    screen.innerText = '';
    curnum = ''
    prenum = ''
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
        // switch (button.innerText) {
        //     case "+":
        //         var num = parseInt(curnum)
        //         result = result + num ;
        //         console.log(result)
        //         break;
        //     case '-':
                
        //         break;
        //     case 'x':
                
        //         break;
        //     case '/':
                
        //         break;
        
        //     default:
        //         break;
        // }
        // // curnum = '';
    })    
    
})



    

document.querySelector('.equal').addEventListener('click', function () {
    if (screen.innerText.includes('x')){
        console.log('x');
        var t = screen.innerText.replace('x', '*');
        try {
            result = eval(t)
            screen.innerText = result;
        } catch (error) {
            screen.innerText = 'Error';
        }
        
    }else {
        try {
            result = eval(screen.innerText)
            screen.innerText = result;
        } catch (error) {
            screen.innerText = 'Error';
        }
       
    }
    curnum = ''
});
