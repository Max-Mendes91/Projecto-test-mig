//2- clicar nesse botão vai dar o resultado da soma dos dois inputs
const numeroUm = document.getElementById("numeroParaSomarUm")
const numeroDois = document.getElementById("numeroParaSomarDois")


function somaDoisValores() {
    //   console.log(numeroUm)
    //   console.log(numeroDois)

    //   console.log(numeroUm.value)
    //   console.log(numeroDois.value)

    //   console.log(typeof numeroUm.value) // string 
    //   console.log(typeof numeroDois.value) // string 

    //   // nao da para somar strings 

    //   console.log(numeroUm.value + numeroDois.value)

    console.log(Number(numeroUm.value) + Number(numeroDois.value))
}

// const somarModeAvancado = () => { 
//   console.log(Number(document.getElementById("numeroParaSomarUm").value) +      Number(document.getElementById("numeroParaSomarDois").value))
// }



const num1 = document.getElementById("soma1");
const num2 = document.getElementById("soma2");
const button = document.getElementById("btnSoma");

// Function to calculate the sum
function soma() {
    console.log(Number(num1.value) + Number(num2.value));
}

// Function to check inputs and enable/disable the button
function checkInputs() {
    if (num1.value === "" && num2.value === "") {
        button.disabled = true;   // both empty → disable button
    } else {
        button.disabled = false;  // at least one filled → enable button
    }
}

// Listen for typing in both inputs
num1.addEventListener("input", checkInputs);
num2.addEventListener("input", checkInputs);
