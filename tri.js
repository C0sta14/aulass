const prompt = require("prompt-sync")()

var area_triangulo = Number(prompt("Area do triangulo: "))
var base_triangulo = Number(prompt("Base do triangulo: "))

var area_triangulo = (base_triangulo * area_triangulo) / 2

console.log("Area do triangulo: " + area_triangulo )