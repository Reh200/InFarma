const frasesOriginais = [
  // Frases sobre saúde e medicamentos em geral
  { frase: "Antibiótico cura gripe.", resposta: "MITO" },
  { frase: "Vacinas causam autismo.", resposta: "MITO" },
  { frase: "Paracetamol pode causar hepatite em altas doses.", resposta: "VERDADE" },
  { frase: "Remédios naturais não têm efeitos colaterais.", resposta: "MITO" },
  { frase: "É perigoso misturar álcool com medicamentos.", resposta: "VERDADE" },
  { frase: "Tomar o mesmo remédio que um amigo te indicou é seguro, já que os sintomas são parecidos.", resposta: "MITO" },
  { frase: "Analgésicos comuns, como a dipirona, podem ser usados para aliviar qualquer tipo de dor.", resposta: "MITO" },
  { frase: "É necessário completar todo o tratamento com antibióticos, mesmo que os sintomas desapareçam.", resposta: "VERDADE" },
  { frase: "O uso prolongado de descongestionantes nasais pode causar dependência e dano à mucosa.", resposta: "VERDADE" },
  { frase: "Comprimidos partidos ao meio perdem seu efeito.", resposta: "MITO" },
  { frase: "Repousar em casa sem ir ao médico é a melhor forma de curar qualquer doença viral, como a dengue.", resposta: "MITO" },
  { frase: "Usar protetor solar apenas em dias de sol forte é o suficiente para proteger a pele.", resposta: "MITO" },
  
  // Frases sobre saúde animal
  { frase: "Chocolate é tóxico para cães e pode ser fatal.", resposta: "VERDADE" },
  { frase: "Dar leite a gatos adultos é sempre benéfico para sua saúde.", resposta: "MITO" },
  { frase: "Cães e gatos podem tomar a mesma medicação que humanos, desde que a dose seja ajustada.", resposta: "MITO" },
  { frase: "Apenas cães que saem de casa precisam ser vacinados contra a raiva.", resposta: "MITO" },
  { frase: "É importante vermifugar pets regularmente, mesmo que não apresentem parasitas visíveis.", resposta: "VERDADE" },
  { frase: "Cães e gatos, mesmo os que vivem em apartamentos, podem pegar pulgas e carrapatos.", resposta: "VERDADE" },
  { frase: "É possível saber se um animal está com dor apenas observando-o, sem a necessidade de um veterinário.", resposta: "MITO" },
  { frase: "A castração de animais pode prevenir diversas doenças, como tumores e infecções.", resposta: "VERDADE" }
];

let frases = [];
let index = 0;
let pontos = 0;
let respostasDoUsuario = [];

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const resultadoEl = document.getElementById("resultado");
const contadorEl = document.getElementById("contador-perguntas");
const botaoInicio = document.getElementById("botao-inicio");
const botaoFinalizar = document.getElementById("botao-finalizar");

botaoFinalizar.style.display = "none";

botaoInicio.addEventListener("click", iniciarJogo);
botaoFinalizar.addEventListener("click", finalizarJogo);

function iniciarJogo() {
  frases = embaralharArray([...frasesOriginais]);
  index = 0;
  pontos = 0;
  respostasDoUsuario = [];
  resultadoEl.innerText = "";
  botaoInicio.innerText = "Reiniciar";
  botaoFinalizar.style.display = "inline";
  // O contador começa a ser exibido aqui.
  contadorEl.innerText = `Pergunta ${index + 1} de ${frases.length}`;
  mostrarMito();
}

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function mostrarMito() {
  if (index < frases.length) {
    perguntaEl.innerText = frases[index].frase;
    opcoesEl.innerHTML = "";
    
    // Atualiza o contador para a pergunta atual.
    contadorEl.innerText = `Pergunta ${index + 1} de ${frases.length}`;

    ["MITO", "VERDADE"].forEach(opcao => {
      const btn = document.createElement("button");
      btn.innerText = opcao;
      btn.onclick = () => responder(opcao);
      opcoesEl.appendChild(btn);
    });
  } else {
    finalizarJogo();
  }
}

function responder(resposta) {
  const correta = frases[index].resposta;
  respostasDoUsuario.push({
    frase: frases[index].frase,
    respostaCorreta: correta,
    respostaUsuario: resposta
  });

  if (resposta === correta) {
    pontos++;
  }

  index++;
  mostrarMito();
}

function finalizarJogo() {
  perguntaEl.innerText = "";
  opcoesEl.innerHTML = "";
  botaoFinalizar.style.display = "none";
  contadorEl.innerText = "";

  // O contador final agora usa o número de respostas do usuário
  const totalRespondido = respostasDoUsuario.length;
  let resumo = `🎉 Jogo finalizado! Pontuação: ${pontos}/${totalRespondido}\n\n`;

  respostasDoUsuario.forEach((item, i) => {
    const certo = item.respostaUsuario === item.respostaCorreta;
    const icone = certo ? "✅" : "❌";
    resumo += `${icone} ${i + 1}. ${item.frase}\n`;
    if (!certo) {
      resumo += `  Sua resposta: ${item.respostaUsuario}\n`;
      resumo += `  Correta: ${item.respostaCorreta}\n`;
    }
    resumo += `\n`;
  });

  resultadoEl.innerText = resumo;
}