const prompt = require("prompt-sync")()
var maça_quantidade = Number(prompt("Quantidade de maça: "))

if(maça_quantidade <= 5) {
    var valor_maça = 0.40 * maça_quantidade 
    console.log(`A quantidade de maças compradas foi de ${maça_quantidade} e o  valor da maça é de R$ + ${valor_maça.toFixed(2)}`)
} 
else if(maça_quantidade >= 12) {
    var valor_maça = 0.35 * maça_quantidade
    console.log(`A quantidade de maças compradas foi de ${maça_quantidade} e o  valor da maça é de R$ + ${valor_maça.toFixed(2)}`)
}else{	
 var valor_maça = 0.40 * maça_quantidade
console.log(`A quantidade de maças compradas foi de ${maça_quantidade} e o  valor da maça é de R$ + ${valor_maça.toFixed(2)}`)

}