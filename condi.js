var prompt = require("prompt-sync")()

/* var senha 
do{
    senha = Number(prompt("digite sua senha: "))



}while(senha !==  1990)
    console.log("senha correta")
*/



var data_nasc;
var ano_atual;
var sub;
var rep = 1;


do{
    data_nasc=Number(prompt("Informe a data de nascimento: "))
    ano_atual=Number(prompt("Ano atual: "))
    sub = ano_atual - data_nasc

    rep = Number(prompt("Deseja sair? 1-Sim 2-Não: "))
    console.log("Sua idade é: " + sub +  "anos")

}while(rep != 1)



    

