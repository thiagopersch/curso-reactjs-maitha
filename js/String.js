/**
 * Dados indexados: cada caracter da string é um número
 */
//0123456789
let umaString = "Uma String";

console.log(umaString[2]);

// função nativa do Javascript para pegar o caracter da string
console.log(umaString.charAt(0));

// Função nativa do Javascript para pegar aonde começa uma string (Esquerda para direita)
console.log(umaString.indexOf("String"));

// Função nativa do Javascript para pegar aonde começa uma string (Direita para direita)
console.log(umaString.lastIndexOf("String"));

// Função nativa do javascript para pegar as palavras de acordo com o pattern(regex)
console.log(umaString.match(/[a-z]/g));

// Função nativa do javascript para pegar o index da palavra. Muito parecido com o indexOf, porém o search aceita expressão regular(regex)
console.log(umaString.search(/i/));

// Função nativa do javascript para substituir digitos. Você pode escolher entre querer usar ou não expressão regular(regex)
console.log(umaString.replace("Uma", "Outra"));

// Função nativa do javascript para retornar o numero de strings
console.log(umaString.length);

// Função nativa do javascript usada para recortar palavras, obs: para retornar a palavra inteira, deve colocar o valor do index um digito a frente da palavra requerida
console.log(umaString.slice(0, 3));

// Função nativa do javascript usada para dividir string
console.log(umaString.split);

// Função nativa do javascript usada para colocar sua string em caixa alta
console.log(umaString.toUpperCase());

// Função nativa do javascript usada para colocar sua string em caixa baixa
console.log(umaString.toLowerCase());
