const prompt = require("prompt-sync")()

var compra = Number(prompt("Qual o valor da sua compra? "))



if (compra <=100){
     var desconto = compra - (compra * 0.05);
console.log("O valor da sua nova compra é de R$" + desconto.toFixed(2));

}else if (compra > 100 && compra <= 200){
      var desconto = compra - (compra * 0.10);
console.log("O valor da sua nova compra é de R$" + desconto.toFixed(2));

}else { 
   var desconto = compra - (compra * 0.20);
console.log("O valor da sua nova compra é de R$" + desconto.toFixed(2));

}