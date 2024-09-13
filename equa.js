const prompt = require("prompt-sync")()


var a = Number(prompt("a: "))
var b = Number(prompt("b: "))
var c = Number(prompt("c: "))   



var delta = (b * b) - (4 * a * c)

if (delta < 0) {
    console.log("esta equação não possui raizes reais")
}else if (delta == 0) {
    var raiz = (-b + Math.sqrt(delta)) / (2 * a)
    console.log("a raiz desta equação é: " + raiz)
}else {
    var raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
    var raiz2 = (-b - Math.sqrt(delta)) / (2 * a)
    console.log("as raizes da equação sao: " + raiz1 + " e " + raiz2.toFixed(2))
}