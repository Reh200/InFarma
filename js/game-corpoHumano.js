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

function startChallenge(system) {
  document.getElementById("system-selection").classList.add("hidden");
  document.getElementById("challenge-area").classList.remove("hidden");

  const challenge = challenges[system];
  document.getElementById("challenge-text").textContent = challenge.text;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  challenge.options.forEach((opt, index) => {
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
