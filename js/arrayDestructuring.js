// Váriaveis com valores
let a = "A";
let b = "B";
let c = "C";

// Destruturação e substituindo os valores das variaveis
[a, b, c] = [1, 2, 3];

console.log(a, b, c);

// trocando os valores do array sem mover de lugar as váriaveis
let a = "A";
let b = "B";
let c = "C";

const letras = [b, c, a];

[a, b, c] = letras;

console.log(a, b, c);
