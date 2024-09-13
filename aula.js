const prompt = require("prompt-sync")()

var cusFabrica = Number(prompt("Custo de fabrica: "))

var porcentagemDistribuidor = 0.28

var porcentagemImpostos = 0.45


var custoConsumidor = (cusFabrica + (cusFabrica * porcentagemDistribuidor / 100) + (cusFabrica * porcentagemImpostos / 100))

console.log("Custo ao consumidor é $" + custoConsumidor)


