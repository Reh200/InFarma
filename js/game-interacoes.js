const perguntas = [
  { combinacao: ["Paracetamol", "Ibuprofeno"], resposta: "Seguros" },
  { combinacao: ["Aspirina", "Varfarina"], resposta: "Interagem" },
  { combinacao: ["Omeprazol", "Clopidogrel"], resposta: "Interagem" },
  { combinacao: ["Dipirona", "Paracetamol"], resposta: "Seguros" },
  { combinacao: ["Amoxicilina", "Paracetamol"], resposta: "Seguros" },
  { combinacao: ["Captopril", "Ibuprofeno"], resposta: "Interagem" },
  { combinacao: ["Losartana", "Diurético"], resposta: "Seguros" },
  { combinacao: ["Sertralina", "Tramadol"], resposta: "Interagem" },
  { combinacao: ["Cetirizina", "Paracetamol"], resposta: "Seguros" },
  { combinacao: ["Ranitidina", "Omeprazol"], resposta: "Interagem" },
  { combinacao: ["Metformina", "Insulina"], resposta: "Seguros" },
  { combinacao: ["Warfarina", "Amoxicilina"], resposta: "Interagem" },
  { combinacao: ["Diazepam", "Álcool"], resposta: "Interagem" },
  { combinacao: ["Simvastatina", "Suco de Toranja"], resposta: "Interagem" },
  { combinacao: ["Ibuprofeno", "Ácido acetilsalicílico"], resposta: "Interagem" },
  { combinacao: ["Paracetamol", "Codeína"], resposta: "Seguros" },
  { combinacao: ["Fluoxetina", "Amitriptilina"], resposta: "Interagem" },
  { combinacao: ["Lorazepam", "Paracetamol"], resposta: "Seguros" },
  { combinacao: ["Clonazepam", "Sertralina"], resposta: "Interagem" },
  { combinacao: ["Dipirona", "Cetirizina"], resposta: "Seguros" }
];

let atual = 0;
let pontos = 0;
let respostas = [];

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

embaralhar(perguntas);

function mostrarInteracao() {
  const p = perguntas[atual];
  document.getElementById("pergunta").innerText =
    `Esses medicamentos interagem?\n${p.combinacao.join(" + ")}`;

  const opcoes = document.getElementById("opcoes");
  opcoes.innerHTML = "";

  ["Interagem", "Seguros"].forEach((resp) => {
    const btn = document.createElement("button");
    btn.innerText = resp;
    btn.onclick = () => responder(resp);
    opcoes.appendChild(btn);
  });

  document.getElementById("contador").innerText = `${atual}/${perguntas.length} respondida(s)`;
}

function responder(resp) {
  const correta = perguntas[atual].resposta;

  respostas.push({
    pergunta: perguntas[atual].combinacao.join(" + "),
    respostaJogador: resp,
    correta: correta,
    acertou: resp === correta
  });

  if (resp === correta) {
    pontos++;
  }

  atual++;

  if (atual < perguntas.length) {
    mostrarInteracao();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  // Limpa a interface da pergunta
  document.getElementById("pergunta").innerText = "";
  document.getElementById("opcoes").innerHTML = "";
  document.getElementById("contador").innerText = "";

  const totalRespondidas = respostas.length;
  const resultado = document.getElementById("resultado");
  resultado.innerText = `🎉 Fim! Você acertou ${pontos} de ${totalRespondidas} pergunta(s).`;

  const relatorio = document.createElement("div");
  relatorio.innerHTML = "<h2>Relatório de Respostas</h2>";

  respostas.forEach((resp, index) => {
    const status = resp.acertou
      ? "✅ Acertou"
      : `❌ Errou (Resposta correta: ${resp.correta})`;
    relatorio.innerHTML += `
      <p><strong>Pergunta ${index + 1}:</strong> ${resp.pergunta}</p>
      <p><strong>Sua resposta:</strong> ${resp.respostaJogador}</p>
      <p><strong>Status:</strong> ${status}</p><hr>
    `;
  });

  resultado.appendChild(relatorio);

  document.getElementById("finalizarBtn").style.display = "none";
  document.getElementById("reiniciarBtn").style.display = "inline-block";
}

function reiniciar() {
  pontos = 0;
  atual = 0;
  respostas = [];

  document.getElementById("resultado").innerText = "";
  document.getElementById("reiniciarBtn").style.display = "none";
  document.getElementById("finalizarBtn").style.display = "inline-block";

  embaralhar(perguntas);
  mostrarInteracao();
}

function finalizar() {
  mostrarResultado();
}

function iniciar() {
  document.getElementById("instrucoes").style.display = "none";
  document.getElementById("iniciarBtn").style.display = "none";
  document.getElementById("finalizarBtn").style.display = "inline-block";
  document.getElementById("reiniciarBtn").style.display = "none";

  mostrarInteracao();

  document.getElementById("finalizarBtn").onclick = finalizar;
  document.getElementById("reiniciarBtn").onclick = reiniciar;
}

document.getElementById("iniciarBtn").onclick = iniciar;