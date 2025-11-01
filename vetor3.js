/*
Digitar 5 estados e mostrar as posições, 0, 2, 4
*/
const prompt = require("prompt-sync")();

let estados = [];

for (let i = 0; i < 5; i++) {
    estados.push(prompt(`Digite o estado ${i+1}º:`));
    
}
//imprimir todos os estados
console.log("Estados digitados",estados);
