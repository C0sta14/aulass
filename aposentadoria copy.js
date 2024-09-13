const prompt = require("prompt-sync")()

var data_nasc = Number(prompt("Informe a data de nascimento: "))    
var anos_servico = Number(prompt("Anos de serviço: "))

var idade = data_nasc - 2024

if (idade >= 65 && anos_servico >= 30) {
console.log(" Você Pode se aposentar")
}else {
console.log(" Você Não pode se aposentar")
}
