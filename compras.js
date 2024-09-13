const prompt = require("prompt-sync")()

var nome_cliente = prompt("Nome do cliente: ")
var quant_parafusos = Number(prompt("Quantidade de parafusos: "))
var quant_arruelas = Number(prompt("Quantidade de aruelas: "))
var quant_porcas = Number(prompt("Quantidade de porcas: "))

var preço_parafusos = 1.20
var preco_arruelas = 2.35
var preco_porcas = 3.5    

var valor_total = (quant_parafusos * 1.20) + (quant_arruelas * 2.35) + (quant_porcas * 3.5)

console.log(`O nome do cliente é ${nome_cliente} \n O valor total das parafusos é de R$${quant_parafusos.toFixed(3) * 1.20} \n O valor total das arruelas é de R$${quant_arruelas.toFixed(3) * 2.35} \n O valor total das porcas é de R$${quant_porcas.toFixed(3) * 3.5} \n O valor Total da compra é R$${valor_total.toFixed(2)}`)