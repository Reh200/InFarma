const medicamentos = [
  {
    "nome": "Adesivo Intradérmico",
    "imagem": "img/formas-med/adesivo.jpg",
    "descricao": "Adesivos intradérmicos aplicados na pele liberam o princípio ativo lentamente.",
    "pista": "Sem ser visto, sem ser sentido, sua presença muda você aos poucos."
  },
  {
    "nome": "Cápsula",
    "imagem": "img/formas-med/capsula.png",
    "descricao": "Medicamento em cápsula facilita a ingestão e pode liberar o princípio ativo gradualmente.",
    "pista": "Parece uma casca frágil, mas guarda uma solução poderosa."
  },
  {
    "nome": "Comprimido",
    "imagem": "img/formas-med/comprimido.jpg",
    "descricao": "Comprimidos são doses sólidas e geralmente ingeridas com água.",
    "pista": "Minúsculo e firme, dissolve-se sem aviso, libertando seu potencial."
  },
  {
    "nome": "Creme",
    "imagem": "img/formas-med/creme.png",
    "descricao": "Forma semissólida aplicada sobre a pele para ação local.",
    "pista": "Desliza sem esforço, mas carrega um efeito profundo."
  },
  {
    "nome": "Drágea",
    "imagem": "img/formas-med/dragea.png",
    "descricao": "Drágeas têm revestimento duro e colorido, facilitando a ingestão.",
    "pista": "Engana os olhos com sua cor vibrante, mas o que importa está dentro."
  },
  {
    "nome": "Gel",
    "imagem": "img/formas-med/gel.jpg",
    "descricao": "Gel é uma preparação tópica de consistência macia e transparente.",
    "pista": "Leve como o ar, mas atua com precisão onde mais se precisa."
  },
  {
    "nome": "Injeção",
    "imagem": "img/formas-med/injecao.png",
    "descricao": "Injeções administram o medicamento diretamente na corrente sanguínea.",
    "pista": "Sua chegada não é bem-vinda, mas sua ação é indispensável."
  },
  {
    "nome": "Pomada",
    "imagem": "img/formas-med/pomada.png",
    "descricao": "Pomadas são oleosas e usadas para tratamentos tópicos.",
    "pista": "Persistente e densa, luta contra o tempo para restaurar o equilíbrio."
  },
  {
    "nome": "Spray",
    "imagem": "img/formas-med/spray.png",
    "descricao": "Sprays são aplicados por pulverização e agem rapidamente.",
    "pista": "Basta um sopro e já começa sua jornada invisível de alívio."
  },
  {
    "nome": "Xarope",
    "imagem": "img/formas-med/xarope.png",
    "descricao": "Xaropes são soluções líquidas, geralmente doces, usadas por via oral.",
    "pista": "Desce suavemente como um doce, mas trabalha arduamente contra o incômodo."
  }
];

let current = 0;
const GRID_SIZE = 4;
const PIECE_SIZE = 120;
const grid = document.getElementById("puzzle");
const pistaElement = document.getElementById("pista");
const descricao = document.getElementById("descricao");
const nomeElemento = document.getElementById("med-nome");

let peçaEmMovimento = null;
let autoTimer = null;

// Função para embaralhar a lista de medicamentos
function shuffleMedicamentos(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Embaralha a lista de medicamentos ao carregar a página
shuffleMedicamentos(medicamentos);

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
    peça.style.backgroundSize = `${GRID_SIZE * PIECE_SIZE}px ${GRID_SIZE * PIECE_SIZE}px`;
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
  grid.classList.remove("complete");
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function verificaCompleto() {
  const peças = Array.from(grid.children);
  return peças.every((peça, index) => parseInt(peça.dataset.index) === index);
}

function desativarDrag() {
  [...grid.children].forEach(peça => {
    peça.setAttribute("draggable", false);
  });
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
    const indexMovimento = peçaEmMovimento.dataset.index;
    const indexAlvo = peçaAlvo.dataset.index;

    // Trocar os índices
    peçaEmMovimento.dataset.index = indexAlvo;
    peçaAlvo.dataset.index = indexMovimento;

    // Trocar visual
    const posTemp = peçaEmMovimento.style.backgroundPosition;
    peçaEmMovimento.style.backgroundPosition = peçaAlvo.style.backgroundPosition;
    peçaAlvo.style.backgroundPosition = posTemp;

    // Verifica se está completo e ainda não foi marcado como completo
    if (verificaCompleto() && !grid.classList.contains("complete")) {
      grid.classList.add("complete");

      // Exibe a descrição e o nome do medicamento
      descricao.style.display = "block";
      descricao.textContent = medicamentos[current].descricao;
      nomeElemento.textContent = medicamentos[current].nome;

      desativarDrag(); // Impede mais interações após completar

      // Altera a imagem após um tempo (7 segundos)
      autoTimer = setTimeout(() => {
        // Gera um índice aleatório para o próximo medicamento
        current = Math.floor(Math.random() * medicamentos.length);
        carregarNovoPuzzle();
      }, 7000); // Aqui ele aguarda 7 segundos para mudar a imagem
    }
  }
}

function reiniciarJogo() {
  clearTimeout(autoTimer);

  // Gera um índice aleatório para o próximo medicamento
  current = Math.floor(Math.random() * medicamentos.length);

  carregarNovoPuzzle();
}

document.addEventListener("DOMContentLoaded", carregarNovoPuzzle);
