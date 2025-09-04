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