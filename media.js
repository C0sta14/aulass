const prompt = require("prompt-sync")()

var nota1 = Number(prompt("Nota 1: "))
var nota2 = Number(prompt("Nota 2: "))
var nota3 = Number(prompt("Nota 3: "))  

var media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10
console.log("A media e: " + media.toFixed(1))