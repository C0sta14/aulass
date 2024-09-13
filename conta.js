var numero_da_conta = 123
var saldo = -100 ;
var debito = 1000  ;
var credito = 1000 ;

var saldo_atual = saldo - debito + credito

if (saldo_atual > 0) {
    console.log("o Saldo positivo é: R$" + saldo_atual)
}else {
    console.log("o Saldo negativo é:" + saldo_atual)
}