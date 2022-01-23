/** Tipos imutaveis: Faz cópia do dado e aloca o mesmo dado em outro lugar na memória.
 * String
 * Number
 * boolean
 * undefined
 * null (bigint, symbol)
 */

// String
let a = "A";
let b = a; // copia
console.log(a, b);
a = "C";

console.log(a, b);

/*-----------------------------------------------------------------------*/
/** Tipos mutaveis: Não faz uma "cópia" dos dados e aloca em outro lugar na memória, simplesmente só faz o apontamento para o mesmo lugar de onde ta pegado o dado.
 * Array, Object, function (mutaveis / referência)
 */

let a = [1, 2, 3];
let b = a;
let b = [...a]; //Faz uma cópia dos dados da váriavel a, nisso se mexermos na variavel b, não afetará a variavel a.

b.pop(); //Remove o ultimo

console.log(a, b);
