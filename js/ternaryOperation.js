// Operador ternário

const numPontos = 1000;

// operação comum com IF
/* if (numPontos >= 1000) {
  console.log("Usuário VIP");
} else {
  console.log("Usuário não VIP");
}*/

const nivelUsuario = numPontos >= 1000 ? "Usuário VIP" : "Usuario não VIP";
console.log(nivelUsuario);

//Setar valores fallbacks
const corUsuario = "AZULLLLLLLLLLLLLLL";
const corPadrão = corUsuario || "Preto";
console.log(corPadrão);
