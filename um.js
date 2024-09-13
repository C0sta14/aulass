const prompt = require("prompt-sync")()

var numero = Number(prompt("Numero: "))

if (numero >= 0) {
    var soma = numero * 3
    console.log("O Triplo do seu numero positivo é: " + soma)
}else {
    var soma = numero * 2
    console.log("O Dobro do seu numero negativo é: " + soma)
}
