const medicamentos = [
  {
    nome: "Adesivo Intradérmico",
    imagem: "img/formas-med/adesivo.png",
    descricao: "Adesivos intradérmicos aplicados na pele liberam o princípio ativo lentamente.",
    pista: "Quase invisível, age por horas colado em você."
  },
  {
    nome: "Cápsula",
    imagem: "img/formas-med/capsula.png",
    descricao: "Medicamento em cápsula facilita a ingestão e pode liberar o princípio ativo gradualmente.",
    pista: "Guarda por fora o que cura por dentro."
  },
  {
    nome: "Comprimido",
    imagem: "img/formas-med/comprimido.jpg",
    descricao: "Comprimidos são doses sólidas e geralmente ingeridas com água.",
    pista: "Pequeno e sólido, dissolve-se no corpo e na dor."
  },
  {
    nome: "Creme",
    imagem: "img/formas-med/creme.png",
    descricao: "Forma semissólida aplicada sobre a pele para ação local.",
    pista: "Branco ou claro, espalha-se com facilidade sobre o mal."
  },
  {
    nome: "Drágea",
    imagem: "img/formas-med/dragea.png",
    descricao: "Drágeas têm revestimento duro e colorido, facilitando a ingestão.",
    pista: "Parece doce, mas seu papel é sério."
  },
  {
    nome: "Gel",
    imagem: "img/formas-med/gel.jpg",
    descricao: "Gel é uma preparação tópica de consistência macia e transparente.",
    pista: "Frio ao toque, penetra com precisão onde dói."
  },
  {
    nome: "Injeção",
    imagem: "img/formas-med/injecao.png",
    descricao: "Injeções administram o medicamento diretamente na corrente sanguínea.",
    pista: "Rápido, direto e com agulha — sem rodeios."
  },
  {
    nome: "Pomada",
    imagem: "img/formas-med/pomada.png",
    descricao: "Pomadas são oleosas e usadas para tratamentos tópicos.",
    pista: "Mais espessa que o creme, gruda e age devagar."
  },
  {
    nome: "Spray",
    imagem: "img/formas-med/spray.png",
    descricao: "Sprays são aplicados por pulverização e agem rapidamente.",
    pista: "Basta um apertar e já está no ar."
  },
  {
    nome: "Xarope",
    imagem: "img/formas-med/xarope.png",
    descricao: "Xaropes são soluções líquidas, geralmente doces, usadas por via oral.",
    pista: "Doce e líquido, alivia devagar pela boca."
  }
];

let current = 0;
const GRID_SIZE = 4; // 4x4
const PIECE_SIZE = 70; // tamanho das peças em px
const grid = document.getElementById("puzzle");
const pistaElement = document.getElementById("pista");
const descricao = document.getElementById("descricao");
const nomeElemento = document.getElementById("med-nome");

let peçaEmMovimento = null;
let autoTimer = null;

function carregarNovoPuzzle() {
  clearTimeout(autoTimer);
  grid.innerHTML = "";
  descricao.style.display = "none";
  pistaElement.textContent = medicamentos[current].pista;
  nomeElemento.textContent = "";

  const imgUrl = medicamentos[current].imagem;
  const peças = [];

  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const peça = document.createElement("div");
    const row = Math.floor(i / GRID_SIZE);
    const col = i % GRID_SIZE;

    peça.style.backgroundImage = `url(${imgUrl})`;
    peça.style.backgroundPosition = `-${col * PIECE_SIZE}px -${row * PIECE_SIZE}px`;
    peça.style.width = "100%";
    peça.style.height = "100%";
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

function dragEnd() {
  peçaEmMovimento = null;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const peçaAlvo = e.target;
  if (peçaEmMovimento !== peçaAlvo && peçaAlvo.parentElement === grid) {
    const indexMovimento = parseInt(peçaEmMovimento.dataset.index);
    const indexAlvo = parseInt(peçaAlvo.dataset.index);

    // Troca os indexes
    peçaAlvo.dataset.index = indexMovimento;
    peçaEmMovimento.dataset.index = indexAlvo;

    // Troca backgroundPosition para a peça parecer trocada visualmente
    const tempStyle = peçaAlvo.style.backgroundPosition;
    peçaAlvo.style.backgroundPosition = peçaEmMovimento.style.backgroundPosition;
    peçaEmMovimento.style.backgroundPosition = tempStyle;

    // Se finalizou, mostra descrição e ativa timer para próximo puzzle
    if (verificaCompleto()) {
      clearTimeout(autoTimer);
      descricao.style.display = "block";
      descricao.textContent = medicamentos[current].descricao;
      nomeElemento.textContent = medicamentos[current].nome;

      // Timer para ir para próximo puzzle em 7 segundos
      autoTimer = setTimeout(() => {
        current = (current + 1) % medicamentos.length;
        carregarNovoPuzzle();
      }, 7000);
    }
  }
}

function reiniciarJogo() {
  clearTimeout(autoTimer);
  carregarNovoPuzzle();
}

document.addEventListener("DOMContentLoaded", carregarNovoPuzzle);
