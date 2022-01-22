const num1 = 1;
const num2 = 2.4;
const num3 = 25.45615674896423189;
const resultado = num1.toString() + num2.toString();
const resultadoNaN = num1 * "Olá Mundo";

/**
 * toString(): Converte número em string
 */
console.log(num1.toString() + num2.toString());

/**
 * typeof: mostra qual o tipo do valor
 */
console.log(typeof resultado);

/**
 * toString(2): Mostra a representação binaria da váriavel
 */
console.log(resultado.toString(2));

/**
 * toFixed(2): arredonda para a quantidade de casas decimais informada dentro da função, contudo, ele nao está alterando o valor que está salvo na memória e sim só visual
 */
console.log(num3.toFixed(2));

/**
 * isInteger: Retorna como resultado um valor booleano.
 */
console.log(num3.isInteger(num3));

/**
 * isNaN: Retorna como resultado um valor que não número.
 * NaN: NOT A NUMBER
 */
console.log(num3.isNaN(resultadoNaN));

/**
 * parseInt(): Transforma números em números flutuantes em inteiros
 */
console.log(parseInt(num3));

/**
 * parseFloat(): Transforma strings em números flutuantes
 */
console.log(parseFloat(num3));

/**
 * Infinity: Retorna um valor infinito
 */
console.log(Infinity);

/**
 * isFinite: retornar um valor booleano se é finito ou não
 */
console.log(isFinite(num3));

/**
 * MAX_VALUE: mostra o maior número que o javascript suporta
 */
console.log(Number.MAX_VALUE);

/**
 * MAX_VALUE: mostra o menor número que o javascript suporta
 */
console.log(Number.MIN_VALUE);
