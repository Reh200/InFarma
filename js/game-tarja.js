// Dados dos medicamentos (corrigidos - use este array) 
const medicamentos = [
    { nome: "Paracetamol 500mg", resposta: "branca" },
    { nome: "Ritalina (Metilfenidato)", resposta: "preta" },
    { nome: "Diazepam", resposta: "preta" },
    { nome: "Fluoxetina 20mg", resposta: "vermelha" },
    { nome: "Cefalexina 500mg", resposta: "vermelha" },
    { nome: "Buprenorfina 0.2mg", resposta: "preta" },
    { nome: "Azitromicina 500mg", resposta: "vermelha" },
    { nome: "Cetoconazol 200mg", resposta: "vermelha" },
    { nome: "Clonazepam", resposta: "preta" },
    { nome: "Methohexital 10mg", resposta: "preta" },
    { nome: "Omeprazol 20mg", resposta: "branca" },
    { nome: "Clonidina 0.1mg", resposta: "preta" },
    { nome: "Captopril 25mg", resposta: "branca" },
    { nome: "Citalopram 20mg", resposta: "vermelha" },
    { nome: "Sildenafil 50mg", resposta: "vermelha" },
    { nome: "Ibuprofeno 600mg", resposta: "branca" },
    { nome: "Prednisona 20mg", resposta: "vermelha" },
    { nome: "Metformina 500mg", resposta: "branca" },
    { nome: "Losartana 50mg", resposta: "branca" },
    { nome: "Tansulosina 0.4mg", resposta: "branca" },
    { nome: "Bromazepam 6mg", resposta: "preta" },
    { nome: "Ranitidina 150mg", resposta: "branca" },
    { nome: "Buprenorfina 0.2mg", resposta: "preta" },
    { nome: "Dipirona Sódica 500mg", resposta: "branca" },
    { nome: "Morfina 10mg", resposta: "preta" },
    { nome: "Anfetamina 10mg", resposta: "preta" },
    { nome: "Fluticasona 50mcg", resposta: "branca" },
    { nome: "Metadona 10mg", resposta: "preta" },
    { nome: "Levodopa 100mg", resposta: "vermelha" },
    { nome: "Sertralina 50mg", resposta: "vermelha" },
    { nome: "Cocaína (uso medicinal controlado)", resposta: "vermelha-retida" },
    { nome: "Aspirina 500mg", resposta: "branca" },
    { nome: "Codeína 30mg", resposta: "vermelha-retida" },
    { nome: "Furosemida 40mg", resposta: "branca" },
    { nome: "Tramadol 50mg", resposta: "vermelha-retida" },
    { nome: "Ibuprofeno 400mg", resposta: "branca" },
    { nome: "Isotretinoína", resposta: "vermelha-retida" }
];

let atual = 0;
let pontos = 0;
let respostasUsuario = [];

const alternativas = [
    { valor: "branca", texto: "⚪ Tarja Branca" },
    { valor: "vermelha", texto: "🔴 Tarja Vermelha" },
    { valor: "vermelha-retida", texto: "🔴📄 Tarja Vermelha (Retida)" },
    { valor: "preta", texto: "⚫ Tarja Preta" }
];

// Função para iniciar o jogo
function iniciarJogo() {
    document.getElementById("btn-iniciar").style.display = "none";
    document.getElementById("btn-reiniciar").style.display = "inline-block";
    document.getElementById("btn-finalizar").style.display = "inline-block";
    document.getElementById("contagem-pergunta").style.display = "block";
    document.getElementById("pergunta").style.display = "block"; // Garante que a pergunta apareça
    mostrarTarja();
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    atual = 0;
    pontos = 0;
    respostasUsuario = [];
    document.getElementById("btn-iniciar").style.display = "inline-block";
    document.getElementById("btn-reiniciar").style.display = "none";
    document.getElementById("btn-finalizar").style.display = "none";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("pergunta").style.display = "block"; // Mostra novamente a pergunta
    mostrarTarja();
}

// Função para finalizar o jogo a qualquer momento
function finalizarJogo() {
    mostrarResultadoFinal();
}

// Função para mostrar a tarja
function mostrarTarja() {
    document.getElementById("pergunta").innerText = `Qual é a tarja de: ${medicamentos[atual].nome}?`;
    document.getElementById("contagem-pergunta").innerText = `Pergunta ${atual + 1} de ${medicamentos.length}`;

    const opcoes = document.getElementById("opcoes");
    opcoes.innerHTML = "";

    alternativas.forEach(op => {
        const btn = document.createElement("button");
        btn.innerText = op.texto;
        btn.onclick = () => responder(op.valor, btn);
        opcoes.appendChild(btn);
    });
}

// Função para responder a pergunta
function responder(escolha, btn) {
    const correta = medicamentos[atual].resposta;

    respostasUsuario.push({
        pergunta: medicamentos[atual].nome,
        escolhaUsuario: escolha,
        respostaCorreta: correta
    });

    const botoes = document.querySelectorAll("#opcoes button");
    botoes.forEach(button => button.disabled = true);

    if (escolha === correta) {
        pontos++;
    }

    atual++;
    if (atual < medicamentos.length) {
        setTimeout(() => {
            mostrarTarja();
        }, 1000);
    } else {
        mostrarResultadoFinal();
    }
}

// Função para mostrar o resultado final com as respostas
function mostrarResultadoFinal() {
    const resultado = document.getElementById("resultado");
    const opcoes = document.getElementById("opcoes");
    const btnFinalizar = document.getElementById("btn-finalizar");

    // Oculta as opções, contagem, pergunta e botão de finalizar
    opcoes.innerHTML = "";
    document.getElementById("contagem-pergunta").style.display = "none";
    btnFinalizar.style.display = "none";
    document.getElementById("pergunta").innerText = ""; // <- Aqui limpa a última pergunta

    // Exibe o resumo e a pontuação
    let htmlResultado = `<h2>🎉 Pontuação Final: ${pontos}/${respostasUsuario.length}</h2>`;
    htmlResultado += `<h3>Resumo das respostas:</h3>`;

    respostasUsuario.forEach((item, index) => {
        const status = item.escolhaUsuario === item.respostaCorreta ? "✅ Correto" : "❌ Errado";
        const textoCorreta = alternativas.find(a => a.valor === item.respostaCorreta).texto;
        const textoUsuario = alternativas.find(a => a.valor === item.escolhaUsuario).texto;

        htmlResultado += `
            <div class="resumo-pergunta">
                <p><strong>${index + 1}. ${item.pergunta}</strong></p>
                <p>Sua resposta: ${textoUsuario}</p>
                <p>Resposta correta: ${textoCorreta} (${status})</p>
                <hr>
            </div>
        `;
    });

    resultado.innerHTML = htmlResultado;
}
