// Capturar evento de submit do formulario
const form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const peso = e.target.querySelector("#peso");
  const altura = e.target.querySelector("#altura");

  const convertPeso = Number(peso.value);
  const convertAltura = Number(altura.value);

  if (!convertPeso) {
    setResult("Peso inválido", false);
    return;
  }
  if (!convertAltura) {
    setResult("Altura inválida", false);
    return;
  }

  const imc = getImc(convertPeso, convertAltura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} e você está ${nivelImc}.`;

  setResult(msg, true);
});

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "peso normal",
    "Sobrepeso",
    "Obesidade grau I",
    "Obesidade grau II",
    "Obesidade grau III",
    "Magrelinho",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc >= 18.5) return nivel[0];
  if (imc < 18.5) return nivel[6];
}

function getImc(convertPeso, convertAltura) {
  const imc = convertPeso / convertAltura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResult(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
