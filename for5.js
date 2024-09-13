const prompt = require("prompt-sync")()

var n = Number(prompt("1.Álcool 2.Gasolina 3.Diesel 4.Fim Digite o combustivel desejado: " ))


do{
if(n == 1){ 
    console.log("Gasolina")
}else if(n == 2){   
    console.log("alcool")
}else if(n == 3){
    console.log("diesel")
}else if (n == 4){
    console.log("fim MUITOO BRIGADO")
}
}while(n != 1 && n != 2 && n != 3 && n != 4)
  


