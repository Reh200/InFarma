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
  {
    nome: "Creme",
    imagem: "img/formas-med/creme.png",
    descricao: "Cremes têm base aquosa e são absorvidos rapidamente pela pele.",
    pista: "É suave e você passa na pele."
  },
  {
    nome: "Drágea",
    imagem: "img/formas-med/dragea.png",
    descricao: "Drágeas são comprimidos revestidos para facilitar a deglutição e proteção do princípio ativo.",
    pista: "Parecido com comprimido, mas com uma camada brilhante por fora."
  },
  {
    nome: "Gel",
    imagem: "img/formas-med/gel.jpg",
    descricao: "Géis são usados para aplicação tópica, geralmente com efeito refrescante ou anti-inflamatório.",
    pista: "É transparente e gelatinoso para passar na pele."
  },
  {
    nome: "Injeção",
    imagem: "img/formas-med/injecao.png",
    descricao: "Injeções administram o medicamento diretamente na corrente sanguínea ou tecido.",
    pista: "Aplicado com uma seringa."
  },
  {
    nome: "Pomada",
    imagem: "img/formas-med/pomada.png",
    descricao: "Pomadas são usadas para aplicação tópica, geralmente sobre a pele ou mucosas.",
    pista: "Parecido com creme, mas mais oleoso."
  },
  {
    nome: "Spray",
    imagem: "img/formas-med/spray.png",
    descricao: "Sprays liberam o medicamento em forma de névoa para aplicação local.",
    pista: "Você aperta e sai uma névoa fina."
  },
  {
    nome: "Xarope",
    imagem: "img/formas-med/xarope.png",
    descricao: "Xaropes são líquidos adoçados usados para administração oral, especialmente em crianças.",
    pista: "É doce e vem em líquido."
  }
];


  
  let current = 0;
  const grid = document.getElementById("puzzle");
  const nome = document.getElementById("med-nome");
  const descricao = document.getElementById("descricao");
  
  function carregarNovoPuzzle() {
    grid.innerHTML = "";
    descricao.textContent = "";
    nome.textContent = medicamentos[current].nome;
  
    const imgUrl = medicamentos[current].imagem;
    const peças = [];
  
    for (let i = 0; i < 9; i++) {
      const peça = document.createElement("div");
      const row = Math.floor(i / 3);
      const col = i % 3;
      peça.style.backgroundImage = `url(${imgUrl})`;
      peça.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
      peça.dataset.index = i;
      peças.push(peça);
    }
  
    shuffle(peças);
  
    peças.forEach(peça => {
      peça.draggable = true;
  
      peça.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", peça.dataset.index);
      });
  
      peça.addEventListener("dragover", e => e.preventDefault());
  
      peça.addEventListener("drop", e => {
        e.preventDefault();
        const fromIndex = e.dataTransfer.getData("text");
        const toIndex = peça.dataset.index;
  
        const fromEl = [...grid.children].find(div => div.dataset.index === fromIndex);
        const toEl = [...grid.children].find(div => div.dataset.index === toIndex);
  
        if (fromEl && toEl) {
          const cloneFrom = fromEl.cloneNode(true);
          const cloneTo = toEl.cloneNode(true);
  
          grid.replaceChild(cloneFrom, toEl);
          grid.replaceChild(cloneTo, fromEl);
  
          if (verificaCompleto()) {
            descricao.textContent = medicamentos[current].descricao;
          }
        }
      });
  
      grid.appendChild(peça);
    });
  
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
  
  document.addEventListener("DOMContentLoaded", carregarNovoPuzzle);
  