/**
 * Dados indexados: cada caracter da string é um número
 */
//0123456789
let umaString = "Uma String";

console.log(umaString[2]);

// função nativa do Javascript para pegar o caracter da string
let umaString = "Uma String";
console.log(umaString.charAt(0));

// Função nativa do Javascript para pegar aonde começa uma string (Esquerda para direita)
let umaString = "Uma String";
console.log(umaString.indexOf("String"));

// Função nativa do Javascript para pegar aonde começa uma string (Direita para direita)
let umaString = "Uma String";
console.log(umaString.lastIndexOf("String"));

// Função nativa do javascript para pegar as palavras de acordo com o pattern(regex)
let umaString = "Uma String";
console.log(umaString.match(/[a-z]/g));

// Função nativa do javascript para pegar o index da palavra. Muito parecido com o indexOf, porém o search aceita expressão regular(regex)
let umaString = "Uma String";
console.log(umaString.search(/i/));

// Função nativa do javascript para substituir digitos. Você pode escolher entre querer usar ou não expressão regular(regex)
let umaString = "Uma String";
console.log(umaString.replace("Uma", "Outra"));

// Função nativa do javascript para retornar o numero de strings
let umaString = "Uma String";
console.log(umaString.length);

// Função nativa do javascript usada para recortar palavras, obs: para retornar a palavra inteira, deve colocar o valor do index um digito a frente da palavra requerida
let umaString = "Uma String";
console.log(umaString.slice(0, 3));

// Função nativa do javascript usada para dividir string
let umaString = "Uma String";
console.log(umaString.split);

// Função nativa do javascript usada para colocar sua string em caixa alta
let umaString = "Uma String";
console.log(umaString.toUpperCase());

// Função nativa do javascript usada para colocar sua string em caixa baixa
let umaString = "Uma String";
console.log(umaString.toLowerCase());
