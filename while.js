const prompt = require("prompt-sync")()

var rep = prompt("Deseja calcular a media? 1-Sim 2-Não: ")

while (rep == 1) {
var Numero1 = Number(prompt("Numero 1: "))
var Numero2 = Number(prompt("Numero 2: "))

var media = (Numero1 + Numero2) / 2
console.log("A media e: " + media)

var rep = prompt("Deseja calcular outra media? 1-Sim 2-Não: ")


} 
if(rep != 1){
    console.log("Fim")
}   
