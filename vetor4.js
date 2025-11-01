/*
Digitar 10 números --> soma, média
*/

const prompt = require("prompt-sync")();
let num = [];

for (let i = 0; i < 10; i++) {
    num.push(Number(prompt(`Digite o ${i + 1}º número `)));

}
const soma = num.reduce((a,b)=>a+b,0);
const media = soma/10;
console.log("A soma é igual ",soma, "| Média é igual", media.toFixed(2));
