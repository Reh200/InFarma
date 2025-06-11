const challenges = {
  "Pulmões": {
    text: "O paciente está com dificuldade para respirar. Escolha o tratamento correto para melhorar a oxigenação.",
    options: [
      { text: "Oxigênio suplementar", correct: false },
      { text: "Broncodilatador", correct: true },
      { text: "Esteroide inalatório", correct: false }
    ],
    feedback: "O broncodilatador relaxa os músculos das vias aéreas, facilitando a respiração."
  },
  "Coração": {
    text: "O paciente tem pressão arterial elevada. Qual é a melhor opção imediata?",
    options: [
      { text: "Beta-bloqueador", correct: true },
      { text: "Antibiótico", correct: false },
      { text: "Diurético leve", correct: false }
    ],
    feedback: "Beta-bloqueadores ajudam a reduzir a frequência cardíaca e a pressão arterial."
  }
};

const startBtn = document.getElementById("start-btn");
const instructions = document.getElementById("instructions");
const systemSelection = document.getElementById("system-selection");
const challengeArea = document.getElementById("challenge-area");

startBtn.onclick = () => {
  // Mostrar seleção de sistemas
  systemSelection.classList.remove("hidden");
  // Esconder instruções
  instructions.classList.add("hidden");
  // Esconder área de desafio
  challengeArea.classList.add("hidden");
  // Mudar texto do botão para reiniciar
  startBtn.textContent = "Reiniciar";

  // Se o botão reiniciar for clicado, recarrega a página para reiniciar o jogo
  startBtn.onclick = () => location.reload();
};

function startChallenge(system) {
  challengeArea.classList.remove("hidden");
  const challenge = challenges[system];
  if (!challenge) {
    document.getElementById("challenge-text").textContent = "Desafio ainda não disponível para este sistema.";
    document.getElementById("options").innerHTML = "";
    document.getElementById("feedback").textContent = "";
    return;
  }

  document.getElementById("challenge-text").textContent = challenge.text;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  document.getElementById("feedback").textContent = "";

  challenge.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.onclick = () => showFeedback(opt.correct, challenge.feedback);
    optionsDiv.appendChild(btn);
  });
}

function showFeedback(isCorrect, feedback) {
  const msg = isCorrect ? "✅ Correto! " : "❌ Incorreto. ";
  document.getElementById("feedback").textContent = msg + feedback;
}
