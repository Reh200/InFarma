// game-dosagem2.js

// 24 situações de dosagem mais abrangentes (adultos, crianças e animais)
const situacoes = [
    { pergunta: "Uma criança de 20kg precisa tomar Dipirona. A dosagem recomendada é de 10mg por kg de peso. Quantas gotas de Dipirona (20mg por gota) ela deve tomar?", resposta: 10 },
    { pergunta: "Um adulto de 70kg precisa tomar Paracetamol. A dosagem recomendada é de 15mg por kg de peso. Quantos miligramas de Paracetamol ele deve tomar?", resposta: 1050 },
    { pergunta: "Você tem um cão de 5kg. O veterinário recomendou Ibuprofeno a 10mg por kg. Quantos miligramas de Ibuprofeno ele deve tomar?", resposta: 50 },
    { pergunta: "Uma criança de 15kg precisa tomar Amoxicilina. A dosagem recomendada é de 20mg por kg. Quantos miligramas ela deve tomar?", resposta: 300 },
    { pergunta: "Um gato de 3kg precisa de Dipirona. A dosagem recomendada é de 5mg por kg de peso. Quantos miligramas ele deve tomar?", resposta: 15 },
    { pergunta: "Você tem um cavalo de 400kg. O veterinário prescreveu Paracetamol com a dosagem de 10mg por kg de peso. Quantos miligramas de Paracetamol ele deve tomar?", resposta: 4000 },
    { pergunta: "Uma criança de 25kg deve tomar Ibuprofeno. A dosagem recomendada é de 10mg por kg. Quantos miligramas ela deve tomar?", resposta: 250 },
    { pergunta: "Você tem um cachorro de 12kg. A dosagem recomendada de Amoxicilina para ele é de 20mg por kg. Quantos miligramas ele deve tomar?", resposta: 240 },
    { pergunta: "Um adulto de 60kg vai tomar Dipirona. A dosagem recomendada é de 10mg por kg. Quantas gotas de Dipirona (20mg por gota) ele deve tomar?", resposta: 30 },
    { pergunta: "Uma criança de 10kg precisa tomar Paracetamol. A dosagem recomendada é de 15mg por kg. Quantos miligramas ela deve tomar?", resposta: 150 },
    { pergunta: "Você tem um cachorro de 8kg. O veterinário prescreveu Ibuprofeno com a dosagem de 10mg por kg. Quantos miligramas ele deve tomar?", resposta: 80 },
    { pergunta: "Um animal de 15kg precisa tomar Amoxicilina, com a dosagem recomendada de 20mg por kg. Quantos miligramas ele deve tomar?", resposta: 300 },
    { pergunta: "Um adulto de 80kg vai tomar Dipirona. A dosagem recomendada é de 10mg por kg. Quantas gotas de Dipirona (20mg por gota) ele deve tomar?", resposta: 40 },
    { pergunta: "Você tem um cavalo de 350kg. O veterinário recomendou Paracetamol a 10mg por kg. Quantos miligramas ele deve tomar?", resposta: 3500 },
    { pergunta: "Uma criança de 8kg precisa tomar Ibuprofeno. A dosagem recomendada é de 10mg por kg. Quantos miligramas ela deve tomar?", resposta: 80 },
    { pergunta: "Você tem um gato de 4kg. O veterinário prescreveu Amoxicilina a 20mg por kg. Quantos miligramas ele deve tomar?", resposta: 80 },
    { pergunta: "Uma criança de 12kg precisa tomar Dipirona. A dosagem recomendada é de 10mg por kg. Quantas gotas de Dipirona (20mg por gota) ela deve tomar?", resposta: 6 },
    { pergunta: "Você tem um cavalo de 500kg. O veterinário prescreveu Paracetamol a 10mg por kg. Quantos miligramas ele deve tomar?", resposta: 5000 },
    { pergunta: "Uma criança de 18kg precisa de Ibuprofeno. A dosagem recomendada é de 10mg por kg. Quantos miligramas ela deve tomar?", resposta: 180 },
    { pergunta: "Você tem um cão de 10kg. O veterinário prescreveu Amoxicilina com a dosagem recomendada de 20mg por kg. Quantos miligramas ele deve tomar?", resposta: 200 },
    { pergunta: "Uma criança de 30kg vai tomar Dipirona. A dosagem recomendada é de 10mg por kg. Quantas gotas de Dipirona (20mg por gota) ela deve tomar?", resposta: 15 },
    { pergunta: "Você tem um gato de 5kg. O veterinário prescreveu Paracetamol com a dosagem de 15mg por kg. Quantos miligramas ele deve tomar?", resposta: 75 },
    { pergunta: "Uma criança de 16kg precisa tomar Ibuprofeno. A dosagem recomendada é de 10mg por kg. Quantos miligramas ela deve tomar?", resposta: 160 },
    { pergunta: "Você tem um cavalo de 200kg. O veterinário prescreveu Amoxicilina com a dosagem recomendada de 20mg por kg. Quantos miligramas ele deve tomar?", resposta: 4000 },
    { pergunta: "Uma criança de 9kg vai tomar Dipirona. A dosagem recomendada é de 10mg por kg. Quantas gotas de Dipirona (20mg por gota) ela deve tomar?", resposta: 5 },
    { pergunta: "Você tem um cachorro de 7kg. O veterinário prescreveu Paracetamol com a dosagem de 15mg por kg. Quantos miligramas ele deve tomar?", resposta: 105 },
    { pergunta: "Uma criança de 11kg precisa tomar Ibuprofeno. A dosagem recomendada é de 10mg por kg. Quantos miligramas ela deve tomar?", resposta: 110 },
    { pergunta: "Você tem um gato de 6kg. O veterinário recomendou Amoxicilina com a dosagem de 20mg por kg. Quantos miligramas ele deve tomar?", resposta: 120 }
];

function embaralharPerguntas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

embaralharPerguntas(situacoes);

let pontuacao = 0;
let perguntaAtual = 0;

// Array para guardar respostas dadas pelo usuário
let respostasUsuario = [];

// Iniciar jogo
function iniciarJogo() {
    document.getElementById("instrucoes").style.display = "none";
    document.getElementById("perguntas").style.display = "block";
    document.getElementById("finalizar-btn").style.display = "inline-block";
    exibirPergunta();
    document.getElementById("iniciar-btn").style.display = "none";
}

// Exibe pergunta atual
function exibirPergunta() {
    const perguntaContainer = document.getElementById("pergunta-container");
    const pergunta = situacoes[perguntaAtual];
    perguntaContainer.innerHTML = `
      <p><strong>Pergunta ${perguntaAtual + 1} de ${situacoes.length}</strong></p>
      <p>${pergunta.pergunta}</p>
  `;
}

// Verifica resposta e avança
function verificarResposta() {
    const respostaInput = document.getElementById("resposta");
    const respostaUsuarioNum = parseInt(respostaInput.value);
    const respostaCorreta = situacoes[perguntaAtual].resposta;

    // Registra se acertou
    const acertou = respostaUsuarioNum === respostaCorreta;
    if (acertou) pontuacao++;

    // Guarda resposta no array
    respostasUsuario.push({
        pergunta: situacoes[perguntaAtual].pergunta,
        respostaUsuario: respostaUsuarioNum,
        respostaCorreta: respostaCorreta,
        acertou: acertou
    });

    perguntaAtual++;
    respostaInput.value = "";

    if (perguntaAtual < situacoes.length) {
        exibirPergunta();
    } else {
        mostrarResultado();
    }
}

// Finaliza o jogo a qualquer momento
function finalizarJogo() {
    // Se estiver na última pergunta, não precisa adicionar nada
    if (perguntaAtual < situacoes.length) {
        // Para a pergunta atual sem resposta (não conta como acertada)
        respostasUsuario.push({
            pergunta: situacoes[perguntaAtual].pergunta,
            respostaUsuario: null,
            respostaCorreta: situacoes[perguntaAtual].resposta,
            acertou: false
        });
    }
    mostrarResultado();
}

// Mostra o resultado final, incluindo relatório
function mostrarResultado() {
    document.getElementById("perguntas").style.display = "none";
    document.getElementById("resultado").style.display = "block";

    const totalRespondidas = respostasUsuario.length;
    const pontuacaoTexto = `Você acertou ${pontuacao} de ${totalRespondidas} perguntas respondidas.`;

    let detalhes = "<ul>";
    respostasUsuario.forEach((resp, i) => {
        detalhes += `<li><strong>Pergunta ${i + 1}:</strong> ${resp.pergunta}<br>
      Sua resposta: ${resp.respostaUsuario === null ? "Sem resposta" : resp.respostaUsuario} — 
      ${resp.acertou ? "<span style='color:green;'>Acertou ✅</span>" : `<span style='color:red;'>Errou ❌ (Correto: ${resp.respostaCorreta})</span>`}
    </li><br>`;
    });
    detalhes += "</ul>";

    document.getElementById("pontuacao").innerHTML = pontuacaoTexto + detalhes;

    // Esconder botão finalizar
    document.getElementById("finalizar-btn").style.display = "none";
}
