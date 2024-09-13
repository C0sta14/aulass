const prompt = require("prompt-sync")()


var codigo_Gerente = 101
var codigo_Engenheiro = 102
var codigo_Tecnico =103

var salario_Gerente = 4000
var salario_Engenheiro = 5500
var salario_Tecnico = 3000
var salario = 2000

var codigo = Number(prompt("digite o seu cargo: "))

if (codigo == codigo_Gerente) {
    var novo_salario = (salario_Gerente + (salario_Gerente * 0.10))
    console.log("Seu novo salario é de R$" + novo_salario.toFixed(2))
}else if (codigo == codigo_Engenheiro) {
    var novo_salario = (salario_Engenheiro + (salario_Engenheiro * 0.20))
    console.log("Seu novo salario é de R$" + novo_salario.toFixed(2))
}else if (codigo == codigo_Tecnico) {
    var novo_salario = (salario_Tecnico + (salario_Tecnico * 0.30))
    console.log("Seu novo salario é de R$" + novo_salario.toFixed(2))
}
else {
    var outros = salario + (salario * 0.40)
    console.log("O salario dos outros funcionários é R$" + outros.toFixed(2))
}


