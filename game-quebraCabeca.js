const medicamentos = [
  {
    nome: "Adesivo",
    imagem: "img/formas-med/adesivo.png",
    descricao: "Adesivos medicinais aplicados na pele liberam o princípio ativo lentamente.",
    pista: "Você cola na pele para liberar o remédio devagar."
  },
  {
    nome: "Cápsula",
    imagem: "img/formas-med/capsula.png",
    descricao: "Medicamento em cápsula facilita a ingestão e pode liberar o princípio ativo gradualmente.",
    pista: "É uma 'bolinha' que você engole com água."
  },
  {
    nome: "Comprimido",
    imagem: "img/formas-med/comprimido.jpg",
    descricao: "Comprimidos são doses sólidas e geralmente ingeridas com água.",
    pista: "Um pequeno disco sólido que você toma para curar."
  },
  // Adicione mais medicamentos conforme necessário
];

let current = 0;
let timer;
let isGameActive = false;
const grid = document.getElementById("puzzle");
const pistaElement = document.getElementById("pista");
const descricao = document.getElementById("descricao");
const nomeElemento = document.getElementById("med-nome");

let peçaEmMovimento = null;

function carregarNovoPuzzle() {
  grid.innerHTML = "";
  descricao.style.display = "none";  // Esconde a descrição
  pistaElement.textContent = medicamentos[current].pista;
  nomeElemento.textContent = medicamentos[current].nome;

  const imgUrl = medicamentos[current].imagem;
  const peças = [];

  // Dividir a imagem em 9 peças e embaralhá-las
  for (let i = 0; i < 9; i++) {
    const peça = document.createElement("div");
    const row = Math.floor(i / 3);
    const col = i % 3;
    peça.style.backgroundImage = `url(${imgUrl})`;
    peça.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
    peça.dataset.index = i;

    peça.setAttribute("draggable", true);
    peça.addEventListener("dragstart", dragStart);
    peça.addEventListener("dragend", dragEnd);
    peça.addEventListener("dragover", dragOver);
    peça.addEventListener("drop", drop);

    peças.push(peça);
  }

  shuffle(peças);
  peças.forEach(peça => grid.appendChild(peça));

  // Mudar para o próximo puzzle
  current = (current + 1) % medicamentos.length;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function verificaCompleto() {
  return [...grid.children].every((el, idx) => parseInt(el.dataset.index) === idx);
}

function dragStart(e) {
  peçaEmMovimento = e.target;
}

function dragEnd(e) {
  peçaEmMovimento = null;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  const peçaAlvo = e.target;
  if (peçaEmMovimento !== peçaAlvo) {
    const indexMovimento = parseInt(peçaEmMovimento.dataset.index);
    const indexAlvo = parseInt(peçaAlvo.dataset.index);

    // Trocar os índices das peças
    peçaAlvo.dataset.index = indexMovimento;
    peçaEmMovimento.dataset.index = indexAlvo;

    // Trocar o fundo da peça
    const tempStyle = peçaAlvo.style.backgroundPosition;
    peçaAlvo.style.backgroundPosition = peçaEmMovimento.style.backgroundPosition;
    peçaEmMovimento.style.backgroundPosition = tempStyle;

    if (verificaCompleto()) {
      descricao.style.display = "block";
      descricao.textContent = medicamentos[current].descricao;
    }
  }
}

function reiniciarJogo() {
  current = 0;
  carregarNovoPuzzle();
}

document.addEventListener("DOMContentLoaded", carregarNovoPuzzle);
