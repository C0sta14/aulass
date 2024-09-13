const prompt = require("prompt-sync")()

var velocidade = Number(prompt("Velocidade: "))
var velocidade_maxima = 100

if (velocidade > 100 && velocidade <= 110) {
    var multa = 50
    console.log("Multa de R$" + multa.toFixed(2))
}
else if (velocidade >=110  && velocidade <= 130) {
    var multa = 100
    console.log("Multa de R$" + multa.toFixed(2))
}else if (velocidade > 130) {
    var multa = 200
    console.log("Multa de R$" + multa.toFixed(2))
} else {
    console.log("Não foi multado")
}
