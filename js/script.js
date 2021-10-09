const cronoPainel = document.getElementById("cronometro");
let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 10;

let criaMosquitoTempo = 1500;

let nivel = window.location.search;
nivel = nivel.replace("?", "");

if (nivel === "facil") {
  criaMosquitoTempo = 2500;
} else if (nivel === "normal") {
  criaMosquitoTempo = 1500;
} else if (nivel === "dificil") {
  criaMosquitoTempo = 1000;
} else if (nivel === "hardcore") {
  criaMosquitoTempo = 750;
}

function ajustaTamanhoPalco() {
  largura = window.innerWidth;
  altura = window.innerHeight;
}
ajustaTamanhoPalco();

cronoPainel.textContent = tempo;

let cronometro = setInterval(() => {
  tempo--;
  if (tempo < 0) {
   clearInterval(cronometro);
   clearInterval(criaMosquito);
   window.location.href = "vitoria.html";
  } else {
    cronoPainel.textContent = tempo;
  }
}, 1000);

function posicaoRandomica() {
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    if (vidas > 3) {
      window.location.href = "fim-de-jogo.html";
    } else {
      document.getElementById(`v ${vidas}`).src = "./assets/coracao_vazio.png";
      vidas++;
    }
  }

let posicaoX = Math.floor(Math.random() * largura) - 90;
let posicaoY = Math.floor(Math.random() * altura) - 90;

posicaoX = posicaoX < 0 ? 0 : posicaoX;
posicaoY = posicaoY < 0 ? 0 : posicaoY;

let mosquito = document.createElement("img");
  mosquito.src = "./assets/mosquito.svg";
  mosquito.className = `${tamanhoAleatorio()} ${ladoAleatorio()}`;
  mosquito.style.left = `${posicaoX}px`;
  mosquito.style.top = `${posicaoY}px`;
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };
  document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
  const classe = Math.floor(Math.random() * 3);
  switch (classe) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
}

function ladoAleatorio() {
  const classe = Math.floor(Math.random() * 2);
  switch (classe) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
}

const criaMosquito = setInterval(() => {
  posicaoRandomica();
}, criaMosquitoTempo);
