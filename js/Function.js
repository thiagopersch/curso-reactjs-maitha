/**
 * Função é um trecho de código para executar outro trecho de código
 */

function Hello() {
  console.log("Hello");
}

Hello();

/**
 * Function com parametro usando crase para concatenação de string
 */

function Hello(nome) {
  console.log(`Hello ${nome}`);
}

Hello("Rafael");

/**
 * Para retornar uma function
 */

function Hello(nome) {
  return `Hello ${nome}`;
}

const variavel = Hello("Rafael");

console.log(variavel);

/**
 * Para somar valores na função
 */

function soma(num1, num2) {
  return num1 + num2;
}
const variavel = soma(1 + 2);
const variavel1 = soma(2 + 2);
const variavel2 = soma(3 + 2);
const variavel3 = soma(4 + 2);

console.log(variavel);
console.log(variavel1);
console.log(variavel2);
console.log(variavel3);

/**
 * Passando valores default nos parametros, caso não seja passado um valor pra variavel
 */

function soma(num1 = 1, num2 = 10) {
  return num1 + num2;
}
const variavel = soma(1 + 2);

console.log(variavel);

/**
 * Arrow Function e Function anonima
 */

// Função anonima sem arrow
const variavel = function () {
  const y = 1;
};

//função anonima, porém arrow function verdadeira
const variavel1 = () => {
  console.log("Aqui é uma arrow function");
};

variavel1();
