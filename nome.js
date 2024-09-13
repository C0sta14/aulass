const prompt = require("prompt-sync")()

var preço_produto = Number(prompt("Preço do produto: "))
var quantidade_produto = Number(prompt("Quantidade do produto: "))
var valor_apagar = preço_produto * quantidade_produto

console.log("O valor total a pagar é de R$" + valor_apagar.toFixed(2))