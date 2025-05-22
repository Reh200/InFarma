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
        opcoes: ["Losartana", "Captopril", "Enalapril", "Anlodipino"],
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
        opcoes: ["Lisinopril", "Losartana", "Enalapril", "Anlodipino"],
        corretas: ["Lisinopril"]
    }
];

let currentIndex = 0;
const erros = [];

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startFormulaGame() {
  currentIndex = 0;
  erros.length = 0;

  // Embaralhar as opções para cada fórmula
  formulas.forEach(formula => {
    formula.opcoes = embaralharArray([...formula.opcoes]);
  });

  // Esconder instruções e botão iniciar
  const instrucoesSection = document.querySelector(".instrucoes");
  if (instrucoesSection) instrucoesSection.style.display = "none";

  const startBtn = document.getElementById("start-button");
  if (startBtn) startBtn.style.display = "none";

  const restartBtn = document.getElementById("restart-button");
  if (restartBtn) restartBtn.style.display = "none";

  const container = document.getElementById("formula-container");
  if (container) container.innerHTML = "";

  mostrarPerguntas();
}

function mostrarPerguntas() {
  const container = document.getElementById("formula-container");
  container.innerHTML = "";

  if (currentIndex >= formulas.length) {
    mostrarResultadoFinal();
    return;
  }

  const formula = formulas[currentIndex];

  const perguntaDiv = document.createElement("div");
  perguntaDiv.classList.add("pergunta");

  // Número da pergunta
  const numeroPergunta = document.createElement("p");
  numeroPergunta.textContent = `Pergunta ${currentIndex + 1} de ${formulas.length}`;
  numeroPergunta.style.fontWeight = "bold";
  perguntaDiv.appendChild(numeroPergunta);

  const titulo = document.createElement("h2");
  titulo.textContent = `💊 Medicamento: ${formula.medicamento}`;
  perguntaDiv.appendChild(titulo);

  const form = document.createElement("form");

  formula.opcoes.forEach(opcao => {
    const label = document.createElement("label");
    label.style.display = "block";
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
  botaoConfirmar.classList.add("btn-confirmar");
  botaoConfirmar.onclick = () => verificarResposta(formula, form);

  form.appendChild(botaoConfirmar);
  perguntaDiv.appendChild(form);
  container.appendChild(perguntaDiv);
}

function verificarResposta(formulaAtual, form) {
  const selecionados = Array.from(form.querySelectorAll("input[name='principio']:checked"))
    .map(input => input.value);

  if (selecionados.length === 0) {
    alert("⚠️ Selecione pelo menos uma opção antes de confirmar.");
    return;
  }

  const corretas = [...formulaAtual.corretas].sort();
  const escolhidas = [...selecionados].sort();

  const isCorreto = JSON.stringify(corretas) === JSON.stringify(escolhidas);

  if (!isCorreto) {
    erros.push({
      medicamento: formulaAtual.medicamento,
      corretas: corretas
    });
  }

  currentIndex++;
  mostrarPerguntas();
}

function mostrarResultadoFinal() {
  const container = document.getElementById("formula-container");
  container.innerHTML = `<h3>🎉 Fim do jogo!</h3>`;

  const total = formulas.length;
  const errosCount = erros.length;
  const certasCount = total - errosCount;

  container.innerHTML += `<p>✅ Você acertou <strong>${certasCount}</strong> medicamentos.</p>`;

  if (errosCount > 0) {
    container.innerHTML += `<p>❌ Você errou os seguintes medicamentos:</p>`;
    const listaErros = document.createElement("ul");
    erros.forEach(erro => {
      const item = document.createElement("li");
      item.textContent = `${erro.medicamento} → Correto: ${erro.corretas.join(", ")}`;
      listaErros.appendChild(item);
    });
    container.appendChild(listaErros);
  }

  // Medicamentos certos (todos que não estão em erros)
  const medicamentosErrados = erros.map(e => e.medicamento);
  const certos = formulas
    .filter(f => !medicamentosErrados.includes(f.medicamento))
    .map(f => f.medicamento);

  if (certos.length > 0) {
    container.innerHTML += `<p>✅ Medicamentos acertados:</p>`;
    const listaCertos = document.createElement("ul");
    certos.forEach(nome => {
      const item = document.createElement("li");
      item.textContent = nome;
      listaCertos.appendChild(item);
    });
    container.appendChild(listaCertos);
  }

  const restartBtn = document.getElementById("restart-button");
  if (restartBtn) restartBtn.style.display = "inline-block";
}

function restartFormulaGame() {
  startFormulaGame();
}