let text = document.getElementById('box')
text.textContent = "Awaiting to click button"
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')

function nameInBox(name) {
    switch(name){
        case 1:
            btn1.style.background = "red";
            text.textContent = "Max"
            break;
        case 2:
            btn2.style.background = "green";
            text.textContent = "Miguel"
            break;
        case 3:
            btn3.style.background = "yellow";
            text.textContent = "Ines"
            break;
        case 4:
            btn4.style.background = "blue";
            text.textContent = "Joao"
            break;

        default:
            text.textContent = "Awaiting to click button"
 }

}


