// when click on div diplat message 
// when click on button display message
var screen = document.querySelector('span');
var curnum = ''
var prenum = ''
var opr = ''
var result = null;
var x = false ;



document.querySelector('.ac').addEventListener('click', function(){
    screen.innerText = '';
    curnum = ''
    prenum = ''
    opr = ''
    result = null;
})
document.querySelectorAll('.numbers-buttons button:not(.equal) ').forEach(function (button) {
    button.addEventListener('click', function(){
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
            screen.appendChild(txt); 
        } else if ( result != null && ['+', '-', 'x', '/'].includes(lastel)){
            curnum = curnum + button.innerText;
            var txt = document.createTextNode(button.innerText);
            screen.appendChild(txt);
        }
        
    })});
document.querySelectorAll('.operations-buttons button').forEach(function (button) {
    button.addEventListener('click', function () {
        var opr = document.createTextNode(' '+button.innerText+' ');
        var lastel = screen.innerText.slice(-1);
        if (!['+', '-', 'x', '/'].includes(lastel)){
            screen.appendChild(opr)
        }
        
        if (button.innerText == 'x'){
            curnum += '*';
        } else {
            curnum += button.innerText;
        }
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
    if (opr == 'x'){
        console.log('hi')
    }else{
        curnum = screen.innerText;
        result = eval(curnum)
        screen.innerText = result;
    }
    
});
