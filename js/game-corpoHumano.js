const challenges = {
  "Fígado": [
    {
      text: "Qual é a principal função do fígado?",
      options: [
        { text: "Metabolizar substâncias e produzir bile", correct: true },
        { text: "Filtrar o sangue dos pulmões", correct: false },
        { text: "Bombear sangue para o corpo", correct: false },
        { text: "Produzir insulina", correct: false }
      ],
      feedback: "O fígado tem múltiplas funções, incluindo metabolismo e produção de bile."
    },
    {
      text: "Qual dessas condições é causada por acúmulo de gordura no fígado?",
      options: [
        { text: "Esteatose hepática", correct: true },
        { text: "Hepatite viral", correct: false },
        { text: "Cirrose", correct: false },
        { text: "Pancreatite", correct: false }
      ],
      feedback: "Esteatose é o acúmulo de gordura que pode prejudicar a função hepática."
    },
    {
      text: "Qual substância o fígado produz para ajudar na digestão das gorduras?",
      options: [
        { text: "Bile", correct: true },
        { text: "Insulina", correct: false },
        { text: "Pepsina", correct: false },
        { text: "Glucagon", correct: false }
      ],
      feedback: "A bile emulsifica gorduras para facilitar a digestão."
    },
    {
      text: "O que é cirrose hepática?",
      options: [
        { text: "Cicatrização e perda da função do fígado", correct: true },
        { text: "Infecção viral", correct: false },
        { text: "Inflamação do pâncreas", correct: false },
        { text: "Doença renal", correct: false }
      ],
      feedback: "Cirrose é uma condição grave que afeta a estrutura e função do fígado."
    },
    {
      text: "Qual dessas funções o fígado NÃO realiza?",
      options: [
        { text: "Produção de hormônios sexuais", correct: true },
        { text: "Armazenamento de glicose", correct: false },
        { text: "Desintoxicação do sangue", correct: false },
        { text: "Síntese de proteínas plasmáticas", correct: false }
      ],
      feedback: "O fígado não produz hormônios sexuais, função de outras glândulas."
    },
    {
      text: "Qual é o papel da bile?",
      options: [
        { text: "Auxiliar na digestão de gorduras", correct: true },
        { text: "Regular o açúcar no sangue", correct: false },
        { text: "Transportar oxigênio", correct: false },
        { text: "Filtrar toxinas", correct: false }
      ],
      feedback: "A bile emulsifica gorduras para facilitar a absorção intestinal."
    },
    {
      text: "Onde o fígado armazena glicose?",
      options: [
        { text: "Na forma de glicogênio", correct: true },
        { text: "Na forma de insulina", correct: false },
        { text: "Na forma de gordura", correct: false },
        { text: "Na forma de pepsina", correct: false }
      ],
      feedback: "O fígado converte glicose em glicogênio para armazenamento."
    },
    {
      text: "Qual dessas doenças é causada por vírus e afeta o fígado?",
      options: [
        { text: "Hepatite", correct: true },
        { text: "Diabetes", correct: false },
        { text: "Asma", correct: false },
        { text: "Gripe", correct: false }
      ],
      feedback: "Hepatite é uma inflamação do fígado causada por vírus."
    },
    {
      text: "O que o fígado faz com substâncias tóxicas?",
      options: [
        { text: "Desintoxica e transforma em compostos elimináveis", correct: true },
        { text: "Armazena para uso futuro", correct: false },
        { text: "Produz toxinas", correct: false },
        { text: "Ignora e deixa circular", correct: false }
      ],
      feedback: "O fígado é fundamental na eliminação de toxinas do corpo."
    },
    {
      text: "Qual a importância do fígado na coagulação sanguínea?",
      options: [
        { text: "Produz proteínas essenciais para coagulação", correct: true },
        { text: "Armazena glóbulos vermelhos", correct: false },
        { text: "Filtra bactérias", correct: false },
        { text: "Controla a pressão arterial", correct: false }
      ],
      feedback: "O fígado sintetiza fatores de coagulação essenciais."
    }
  ]
};

// Variáveis de controle
let currentCategory = null;
let currentQuestionIndex = 0;
let userAnswers = [];

const startBtn = document.getElementById("start-btn");
const instructions = document.getElementById("instructions");
const systemSelection = document.getElementById("system-selection");
const challengeArea = document.getElementById("challenge-area");
const challengeText = document.getElementById("challenge-text");
const optionsDiv = document.getElementById("options");
const feedbackDiv = document.getElementById("feedback");
const summaryDiv = document.getElementById("summary");
const resultsDiv = document.getElementById("results");
const systemButtonsDiv = document.getElementById("system-buttons");

// Função para embaralhar array (Fisher-Yates)
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Inicializa os botões dos sistemas com emojis e nomes
function loadSystemButtons() {
  const emojiMap = {
    "Coração": "❤️",
    "Pulmões": "💨🌬️😤",
    "Sistema Nervoso": "🧠",
    "Sistema Digestivo": "🍽️",
    "Sistema Urinário": "🚽",
    "Sistema Muscular": "💪",
    "Sistema Endócrino": "🧪",
    "Sistema Reprodutor": "👶",
    "Sistema Imunológico": "🛡️",
    "Sistema Tegumentar": "🩹",
    "Fígado": "🫁" // pode mudar o emoji, se quiser
  };
  systemButtonsDiv.innerHTML = '';
  for (const system in challenges) {
    const btn = document.createElement("button");
    btn.textContent = `${emojiMap[system] || ''} ${system}`;
    btn.onclick = () => startChallenge(system);
    systemButtonsDiv.appendChild(btn);
  }
}

// Começa o desafio para o sistema escolhido
function startChallenge(system) {
  currentCategory = system;
  currentQuestionIndex = 0;
  userAnswers = [];

  // Embaralhar perguntas da categoria a cada nova partida
  challenges[system] = shuffle(challenges[system]);

  // Ocultar seleção e mostrar área desafio
  systemSelection.classList.add("hidden");
  challengeArea.classList.remove("hidden");
  summaryDiv.classList.add("hidden");
  feedbackDiv.textContent = "";

  showQuestion();
}

// Exibe pergunta atual com contador
function showQuestion() {
  const questions = challenges[currentCategory];
  const currentQ = questions[currentQuestionIndex];

  challengeText.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}: ${currentQ.text}`;
  optionsDiv.innerHTML = "";
  feedbackDiv.textContent = "";

  currentQ.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.onclick = () => handleAnswer(opt, index);
    optionsDiv.appendChild(btn);
  });
}

// Trata resposta do usuário
function handleAnswer(selectedOption, optionIndex) {
  const questions = challenges[currentCategory];
  const currentQ = questions[currentQuestionIndex];

  // Salvar resposta
  userAnswers.push({
    question: currentQ.text,
    selected: selectedOption.text,
    correct: selectedOption.correct,
    feedback: currentQ.feedback
  });

  // Desabilitar botões para evitar múltiplos cliques
  Array.from(optionsDiv.children).forEach(btn => btn.disabled = true);

  // Mostrar feedback imediato
  feedbackDiv.textContent = selectedOption.correct ? "✅ Correto! " + currentQ.feedback : "❌ Incorreto. " + currentQ.feedback;

  // Esperar 1.5 segundos e ir para próxima pergunta ou resumo
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showSummary();
    }
  }, 1500);
}

// Mostrar resumo final com contagem de erros e acertos
function showSummary() {
  challengeArea.classList.add("hidden");
  summaryDiv.classList.remove("hidden");
  resultsDiv.innerHTML = "";

  const correctCount = userAnswers.filter(ans => ans.correct).length;
  const incorrectCount = userAnswers.length - correctCount;

  // Exibir resumo geral
  const scoreParagraph = document.createElement("p");
  scoreParagraph.innerHTML = `<strong>Você acertou ${correctCount} e errou ${incorrectCount} de ${userAnswers.length} perguntas.</strong>`;
  resultsDiv.appendChild(scoreParagraph);

  // Exibir detalhes de cada pergunta e resposta
  userAnswers.forEach((ans, i) => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>Pergunta ${i + 1}:</strong> ${ans.question}<br>
                   <strong>Sua resposta:</strong> ${ans.selected} — ${ans.correct ? '✅ Correto' : '❌ Incorreto'}<br>
                   <em>Explicação:</em> ${ans.feedback}`;
    resultsDiv.appendChild(p);
  });
}

// Configuração do botão iniciar
startBtn.onclick = () => {
  instructions.classList.add("hidden");
  startBtn.classList.add("hidden");
  systemSelection.classList.remove("hidden");
  summaryDiv.classList.add("hidden");
  loadSystemButtons();
};