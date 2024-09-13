const prompt = require("prompt-sync")()

var ano_de_fabricação = Number(prompt("Ano de fabricação: "))
var preço_carro = Number(prompt("Preço do carro : R$"))

if (ano_de_fabricação < 1990) {
    var valor_total = (preço_carro + (preço_carro * 0.001))
    console.log("O valor total do carro é de R$" + valor_total.toFixed(2))
} else if (ano_de_fabricação > 1990) {
    var valor_total = (preço_carro + (preço_carro * 0.015))
    console.log("O valor total do carro é de R$" + valor_total.toFixed(2))
}else{
    var valor_total = (preço_carro + (preço_carro * 0.015))
}
