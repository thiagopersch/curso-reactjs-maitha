/**
 * Operadores Lógicos
 *
 * &&: AND (E)
 * ||: OR (OU)
 *  !: NOT (NEGAÇÃO)
 * */

// Operador &&
const value1 = 1;
const value2 = 6;

const soma = value1 + value2;
const mult = value1 * value2;

const result = soma > mult;
const result2 = soma > mult;

const result3 = result && result2;

console.log(result3);

// Operador ||
const value1 = 1;
const value2 = 6;

const soma = value1 + value2;
const mult = value1 * value2;

const result = soma > mult;
const result2 = soma > mult;

const result3 = result || result2;

console.log(result3);

// Operador ! -> NOT
const value1 = 1;
const value2 = 6;

const soma = value1 + value2;
const mult = value1 * value2;

const result = soma > mult;
const result2 = soma > mult;

const result3 = !result || !result2;

console.log(result3);
