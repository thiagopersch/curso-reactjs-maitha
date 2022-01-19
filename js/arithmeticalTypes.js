/**
 * Tipo aritiméticos
 * Mais: + (o Tipo Mais(+) ele soma e concatena)
 * Menos: -
 * Vezes: *
 * Divisão: /
 * Potenciação: **
 * Porcentagem: % (resto)
 *
 * Valor de incremento: var++
 */

const a = 5;
const b = 2;
const y = "B";
const z = a ** b;
const zz = a % b;

let c = (a * b) / (a * b);

console.log(a + y); /*Vai concatenar o número com a letra */
console.log(a + b); /*Vai somar os valores numericos */
console.log(z); /* Printa a potenciação */
console.log(zz); /* Printa o resto da divisão */

/***************************** */
let a = 2;
a++; /*Incrementa valor na variavel*/
a--; /*Desincrementa valor da variavel*/
a += 2; /*Adiciona valor na variavel */
a -= 2; /*remove valor na variavel */
a /= 2; /*Divida valor na variavel */
a *= 2; /*Multiplca valor na variavel */
console.log(a);

let b = "j";
let c = a * b;

console.log(c);
/* irá retornar NaN Not a Number, retorna quando tenta realizar alguma operação de numero com letra */
/*Se colocar numero dentro de string, o javascript faz a operação normalmente, devido ao Javascript não ser uma linguagem formente tipada */
