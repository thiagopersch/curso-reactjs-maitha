/**
 * Função alert()
 *
 * Função irá retornar uma janela de alerta no navegador.
 */

alert("Olá mundo");

/**
 * Função confirm()
 *
 * Função irá retornar uma janela com os botões de "Ok" e "Cancel", escolhendo qualquer um retorna um valor boolean.
 */

confirm("Deseja ver o mundo?");

/**
 * Função prompt()
 *
 * Função irá retornar uma janela com um input para digitar e printar o console.
 *
 * Função Number(), transforma qualquer valor string em numero.
 */

prompt("Digite seu nome?");

const num1 = prompt("Digite o primeiro numero");
const num2 = prompt("Digite o segundo numero");
const resultado = Number(num1) + Number(num2);

console.log(resultado);
