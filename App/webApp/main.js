var screen = document.querySelector('span');
var screenresult = document.querySelector('.screen');
var curnum = ''
var opr = ''
var result = null;
var lastel = screen.innerText.slice(-1);
var div = document.createElement('div')
div.setAttribute("class", "result");
var er = false;
var r = false

document.querySelector('.ac').addEventListener('click', function(){
    screen.innerText = '';
    curnum = ''
    opr = ''
    result = null;
})


document.querySelector('.hi').addEventListener('click', function () {
    screen.innerText = 'Really, you test a calulator'
    r = true
})
document.querySelector('.delete').addEventListener('click', function () {
    if(result != null ){
        screen.innerText = '';
    }else{
        e = screen.innerText 
        console.log(e)
        screen.innerText = e.substring(0, e.length - 1)
    }
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
            er = false;

            screen.appendChild(txt); 
        } else if ( result != null && ['+', '-', 'x', '/'].includes(lastel)){
            result = null;
            er = false;

            curnum = curnum + button.innerText;
            var txt = document.createTextNode(button.innerText);
            screen.appendChild(txt);
        }
        }

    })});
document.querySelectorAll('.operations-buttons button').forEach(function (button) {
    button.addEventListener('click', function () {
        if (er || r){
            screen.innerText = '';
            er = false;
            r = false;
        } else{
            var opr = document.createTextNode(' '+button.innerText+' ');
            var lastel = screen.innerText.slice(-1);
            if (!['+', '-', 'x', '/'].includes(lastel)){
                if (result != null) {
                    console.log('hi')
                    screen.innerText = result
                }
                screen.appendChild(opr)
                div.remove()
            }
        }
        result = null
        curnum = ''
    })    
    
})

document.querySelector('.equal').addEventListener('click', function () {
    if (screen.innerText.includes('x')){
        var t = screen.innerText.replace('x', '*');
        try {
            result = eval(t)
            div.innerText = `${result}`;
            screen.appendChild(div)
        } catch (error) {
            screen.innerText = 'Error';
            er = true;
        }
        
    }else {
        try {
            result = eval(screen.innerText)
            if (result == 'Infinity') {
                screen.innerText  = 'Error dividing by zero';
            } else{
                div.innerText = `${result}`;
                screen.appendChild(div)
                //screen.innerText = div.innerText
            }            
        } catch (error) {
            screen.innerText = 'Error';
            er = true;
        }
    }
    curnum = ''
});