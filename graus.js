const prompt = require("prompt-sync")()

var graus_Celsius = Number(prompt("Graus Celsius: "))
var graus_Fahrenheit = Number(prompt("Graus Fahrenheit: "))

var transformado = (graus_Celsius * (9 / 5) + 32)
var trasnformado2 = (graus_Fahrenheit - 32) * 5 / 9

console.log("os graus fahrenheit sao: " + transformado)



console.log("os graus celsius sao: " + trasnformado2)

