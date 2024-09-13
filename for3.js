const prompt = require("prompt-sync")()

var numero_tabuada =Number(prompt("Numero da tabuada: "))

var contador = 1

if(numero_tabuada <= 10 && numero_tabuada >= 0){
    for(contador = 1; contador <= 10; contador++){
        var resultado = numero_tabuada * contador
        console.log(numero_tabuada + " x " + contador + " = " + resultado)
    }
        
}else{
    console.log("Numero invalido")
}
