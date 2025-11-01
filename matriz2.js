//Crair uma matriz 3x3

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let soma = 0;

for (let i = 0; i < matriz.length; i++) {  //controla linha
    for (let j = 0; j < matriz[i].length; j++) {  //controla coluna
        console.log(`Posção [${i}][${j}] = ${matriz[i][j]}`);
        soma += matriz[i][j];

    }
}
console.log(`Soma dos valores = ${soma}`);