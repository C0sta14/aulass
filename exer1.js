const prompt = require("prompt-sync")()

var rep 

do {
    var nota1 = Number(prompt("Nota 1: "))
    var nota2 = Number(prompt("Nota 2: "))
    var media = ((nota1 + nota2) / 2)

    console.log("Sua media foi de: " + media)

if (rep==2){
}
else if (media >= 7) {
console.log("Aprovado")
}else{

console.log("Reprovado")
}
rep = Number(prompt("Deseja calcular outra nota? 1-Sim 2-Não: "))



}while(rep == 1)

