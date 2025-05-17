const formulas = [
    {
        medicamento: "Dramin®",
        opcoes: ["Dimenidrinato", "Metoclopramida", "Ondansetrona", "Bromoprida"],
        corretas: ["Dimenidrinato"]
    },
    {
        medicamento: "Dorflex®",
        opcoes: ["Dipirona", "Cafeína", "Citrato de Orfenadrina", "Paracetamol"],
        corretas: ["Dipirona", "Citrato de Orfenadrina", "Cafeína"]
    },
    {
        medicamento: "Neosoro®",
        opcoes: ["Cloreto de Sódio", "Cloreto de Benzalcônio", "Dipirona", "Cafeína"],
        corretas: ["Cloreto de Sódio", "Cloreto de Benzalcônio"]
    },
    {
        medicamento: "Ibuprofeno®",
        opcoes: ["Ibuprofeno", "Paracetamol", "Dipirona", "Diclofenaco"],
        corretas: ["Ibuprofeno"]
    },
    {
        medicamento: "AAS®",
        opcoes: ["Ácido Acetilsalicílico", "Ibuprofeno", "Paracetamol", "Dipirona"],
        corretas: ["Ácido Acetilsalicílico"]
    },
    {
        medicamento: "Glifage®",
        opcoes: ["Metformina", "Glibenclamida", "Insulina", "Dapagliflozina"],
        corretas: ["Metformina"]
    },
    {
        medicamento: "Pantoprazol®",
        opcoes: ["Pantoprazol", "Omeprazol", "Cimetidina", "Ranitidina"],
        corretas: ["Pantoprazol"]
    },
    {
        medicamento: "Losartana®",
        opcoes: ["Losartana", "Captopril", "Enalapril", "Amlodipino"],
        corretas: ["Losartana"]
    },
    {
        medicamento: "Loratadina®",
        opcoes: ["Loratadina", "Dipirona", "Cetirizina", "Ranitidina"],
        corretas: ["Loratadina"]
    },
    {
        medicamento: "Depakote®",
        opcoes: ["Valproato de sódio", "Carbamazepina", "Lamotrigina", "Diazepam"],
        corretas: ["Valproato de sódio"]
    },
{
        medicamento: "Naproxeno®",
        opcoes: ["Naproxeno", "Ibuprofeno", "Paracetamol", "AAS"],
        corretas: ["Naproxeno"]
    },
    {
        medicamento: "Omeprazol®",
        opcoes: ["Omeprazol", "Pantoprazol", "Cimetidina", "Ranitidina"],
        corretas: ["Omeprazol"]
    },
    {
        medicamento: "Metrondiazol®",
        opcoes: ["Metronidazol", "Clindamicina", "Amoxicilina", "Cefalexina"],
        corretas: ["Metronidazol"]
    },
    {
        medicamento: "Cataflam®",
        opcoes: ["Diclofenaco", "Ibuprofeno", "Paracetamol", "AAS"],
        corretas: ["Diclofenaco"]
    },
    {
        medicamento: "Cefalexina®",
        opcoes: ["Cefalexina", "Amoxicilina", "Clavulanato de Potássio", "Azitromicina"],
        corretas: ["Cefalexina"]
    },
    {
        medicamento: "Ciprofloxacino®",
        opcoes: ["Ciprofloxacino", "Azitromicina", "Amoxicilina", "Levofloxacino"],
        corretas: ["Ciprofloxacino"]
    },
    {
        medicamento: "Cloridrato de Sertralina®",
        opcoes: ["Sertralina", "Fluoxetina", "Duloxetina", "Paroxetina"],
        corretas: ["Sertralina"]
    },
    {
        medicamento: "Torsilax®",
        opcoes: ["Carisoprodol", "Diclofenaco", "Cafeína", "Paracetamol"],
        corretas: ["Carisoprodol", "Diclofenaco"]
    },
    {
        medicamento: "Amitriptilina®",
        opcoes: ["Amitriptilina", "Cloridrato de Sertralina", "Fluoxetina", "Duloxetina"],
        corretas: ["Amitriptilina"]
    },
    {
        medicamento: "Tramadol®",
        opcoes: ["Tramadol", "Morfina", "Codeína", "Fentanil"],
        corretas: ["Tramadol"]
    },
    {
        medicamento: "Sildenafil®",
        opcoes: ["Sildenafil", "Tadalafila", "Vardenafila", "Fentolamina"],
        corretas: ["Sildenafil"]
    },
    {
        medicamento: "Simvastatina®",
        opcoes: ["Simvastatina", "Atorvastatina", "Rosuvastatina", "Pravastatina"],
        corretas: ["Simvastatina"]
    },
    {
        medicamento: "Cipro®",
        opcoes: ["Ciprofloxacino", "Amoxicilina", "Azitromicina", "Levofloxacino"],
        corretas: ["Ciprofloxacino"]
    },
    {
        medicamento: "Lisinopril®",
        opcoes: ["Lisinopril", "Losartana", "Enalapril", "Amlodipino"],
        corretas: ["Lisinopril"]
    }
];

let currentIndex = 0;
let score = 0;

function startFormulaGame() {
    // Estado inicial
    score = 0;
    currentIndex = 0;

    // Ativa modo de jogo
    document.body.classList.add("jogo-ativo");

    // Interface
    document.getElementById("start-button").style.display = "none";
    document.getElementById("restart-button").style.display = "inline-block";
    const scoreDiv = document.getElementById("score");
    scoreDiv.style.display = "block";
    scoreDiv.textContent = `✅ Pontuação: ${score}`;

    mostrarPerguntas();
}

function mostrarPerguntas() {
    const container = document.getElementById("formula-container");
    container.innerHTML = "";

    // Se não houver mais perguntas, termina o jogo
    if (currentIndex >= formulas.length) {
        container.innerHTML = `<h3>🎉 Fim do jogo!</h3><p>Você acertou ${score} de ${formulas.length} medicamentos.</p>`;
        return;
    }

    // Mostrar 4 perguntas por vez
    const perguntasParaExibir = formulas.slice(currentIndex, currentIndex + 4);

    perguntasParaExibir.forEach(formula => {
        const perguntaDiv = document.createElement("div");
        perguntaDiv.classList.add("pergunta");

        const titulo = document.createElement("h2");
        titulo.textContent = `💊 Medicamento: ${formula.medicamento}`;
        perguntaDiv.appendChild(titulo);

        const instrucoes = document.createElement("p");
        instrucoes.textContent = "Selecione os princípios ativos corretos:";
        perguntaDiv.appendChild(instrucoes);

        const form = document.createElement("form");
        form.id = "resposta-form";

        formula.opcoes.forEach(opcao => {
            const label = document.createElement("label");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "principio";
            checkbox.value = opcao;

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(" " + opcao));
            form.appendChild(label);
        });

        const botaoConfirmar = document.createElement("button");
        botaoConfirmar.type = "button";
        botaoConfirmar.textContent = "Confirmar";
        botaoConfirmar.onclick = verificarResposta;

        form.appendChild(botaoConfirmar);
        perguntaDiv.appendChild(form);
        container.appendChild(perguntaDiv);
    });

    currentIndex += 4;
}

function verificarResposta() {
    const selecionados = Array.from(document.querySelectorAll("input[name='principio']:checked"))
        .map(input => input.value);

    const formulaAtual = formulas[currentIndex - 1];  // Verifica a última pergunta
    const corretas = [...formulaAtual.corretas].sort();
    const escolhidas = [...selecionados].sort();

    const isCorreto = JSON.stringify(corretas) === JSON.stringify(escolhidas);

    if (isCorreto) {
        score++;
        alert("✅ Correto!");
    } else {
        alert(`❌ Errado. Correto: ${corretas.join(", ")}`);
    }

    document.getElementById("score").textContent = `✅ Pontuação: ${score}`;

    if (currentIndex >= formulas.length) {
        mostrarPerguntas();  // Finaliza quando todas as perguntas forem mostradas
    }
}

function restartFormulaGame() {
    // Reset modo de jogo
    document.body.classList.remove("jogo-ativo");
    document.getElementById("start-button").style.display = "inline-block";
    document.getElementById("restart-button").style.display = "none";
    document.getElementById("formula-container").innerHTML = "";
    document.getElementById("score").textContent = "";
}
