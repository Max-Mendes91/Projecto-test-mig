const box = document.getElementById('box')
const buttonNumber = undefined

function changeColorOfBox(buttonNumber) {

    switch (buttonNumber) {
        case 1:
            box.style.backgroundColor = "red"
            break;
        case 2:
            box.style.backgroundColor = "purple"
            break;
        case 3:
            box.style.backgroundColor = "green"
            break;
        case 4:
            box.style.backgroundColor = "blue"
            break;
        default:
            box.style.backgroundColor = "black"
    }
}





