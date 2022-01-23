/**
 * Objetos em javascript é uma entidade independente com propriedades e tipos
 *
 * Ex: Xícara, tem largura, altura, profundidade, cor, material usado
 */

/**
 * Modo errado que fica bagunçado e/ou ambiguo
 */

const xicara1Nome = "Nome";
const xicara1Altura = "1,0";
const xicara1Largura = "2,0";
const xicara1Cor = "Branca";

const xicara2Nome = "Nome";
const xicara2Altura = "1,0";
const xicara2Largura = "2,0";
const xicara2Cor = "Branca";

/**
 * Modo correto
 */

const xicara = {
  nome: "nome",
  altura: 1.0,
  largura: 2.0,
  cor: "Branca",
  isCoffe: true,
};
// Para printar o objeto inteiro no console
console.log(xicara);

// Para acessar alguma propriedade dentro do objeto
console.log(xicara.cor);

/**
 * Metodo dentro de objeto
 */
const xicaraWithMethod = {
  nome: "nome",
  altura: 1.0,
  largura: 2.0,
  cor: "Branca",
  isCoffe: true,
  hello: () => {
    console.log("Hello");
  },
};
xicaraWithMethod.hello();

// Função para criar um objeto
function criaXicara(nome, altura, largura) {
  return {
    //Chave: Valor
    nome: nome,
    altura: altura,
    largura: largura,
  };
}

const xicara1 = criaXicara("AAAA", 1.0, 2.0);
const xicara2 = criaXicara("BBBB", 1.0, 2.0);
const xicara3 = criaXicara("CCCC", 1.0, 2.0);

console.log(xicara1);

// Acessar a chave do objeto
console.log(xicara1["largura"]);
