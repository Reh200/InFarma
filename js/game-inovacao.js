const desafios = [
    {
        problema: "Resfriado comum",
        ingredientes: [
            "Vitamina C",
            "Antiviral",
            "Descongestionante",
            "Analgésico",
            "Anti-histamínico",
            "Hidratação",
            "Repouso",
            "Inalação de vapor",
            "Mel",
            "Gengibre"
        ],
        combosEficazes: [
            ["Vitamina C", "Antiviral"],
            ["Descongestionante", "Analgésico"],
            ["Anti-histamínico", "Hidratação"],
            ["Repouso", "Hidratação"],
            ["Inalação de vapor", "Descongestionante"],
            ["Mel", "Gengibre"],
            ["Repouso", "Mel"],
            ["Vitamina C", "Hidratação"]
        ],
        explicacoes: {
            "Vitamina C+Antiviral": "Vitamina C e antiviral fortalecem o sistema imunológico e combatem o vírus, ideal para o início do resfriado.",
            "Descongestionante+Analgésico": "Descongestionante alivia o nariz entupido e analgésico reduz dores e febre.",
            "Anti-histamínico+Hidratação": "Anti-histamínico ajuda com alergias e hidratação mantém o corpo equilibrado.",
            "Repouso+Hidratação": "Descanso e hidratação são fundamentais para recuperação.",
            "Inalação de vapor+Descongestionante": "Alivia a congestão nasal facilitando a respiração.",
            "Mel+Gengibre": "Mel acalma a garganta e gengibre tem ação anti-inflamatória natural.",
            "Repouso+Mel": "Descanso com mel ajuda no alívio da tosse e melhora do sono.",
            "Vitamina C+Hidratação": "Vitamina C auxilia o sistema imunológico enquanto a hidratação mantém o corpo equilibrado."
        }
    },
    {
        problema: "Dor de cabeça",
        ingredientes: [
            "Analgésico",
            "Anti-inflamatório",
            "Aromaterapia",
            "Hidratação",
            "Descanso",
            "Compressa fria",
            "Exercícios leves",
            "Massagem",
            "Cafeína moderada"
        ],
        combosEficazes: [
            ["Analgésico", "Anti-inflamatório"],
            ["Aromaterapia", "Descanso"],
            ["Hidratação", "Compressa fria"],
            ["Exercícios leves", "Hidratação"],
            ["Massagem", "Aromaterapia"],
            ["Cafeína moderada", "Analgésico"],
            ["Descanso", "Massagem"]
        ],
        explicacoes: {
            "Analgésico+Anti-inflamatório": "Combinação eficaz para dor de cabeça que reduz inflamação e alivia a dor rapidamente.",
            "Aromaterapia+Descanso": "Método natural que relaxa e reduz o estresse, ajudando na dor de cabeça.",
            "Hidratação+Compressa fria": "Ajuda a diminuir a dor e a sensação de calor.",
            "Exercícios leves+Hidratação": "Atividade física moderada com boa hidratação pode aliviar a dor.",
            "Massagem+Aromaterapia": "Relaxamento muscular e mental que alivia tensões causadoras da dor.",
            "Cafeína moderada+Analgésico": "A cafeína potencializa o efeito do analgésico, acelerando o alívio.",
            "Descanso+Massagem": "Descansar com massagem relaxa corpo e mente."
        }
    },
    {
        problema: "Infecção bacteriana leve",
        ingredientes: [
            "Antibiótico",
            "Anti-inflamatório",
            "Analgésico",
            "Hidratação",
            "Repouso",
            "Compressa quente",
            "Alimentação equilibrada"
        ],
        combosEficazes: [
            ["Antibiótico", "Anti-inflamatório"],
            ["Analgésico", "Repouso"],
            ["Antibiótico", "Compressa quente"],
            ["Repouso", "Hidratação"],
            ["Alimentação equilibrada", "Repouso"],
            ["Antibiótico", "Hidratação"]
        ],
        explicacoes: {
            "Antibiótico+Anti-inflamatório": "O antibiótico combate a bactéria e o anti-inflamatório reduz a inflamação local.",
            "Analgésico+Repouso": "Alívio da dor com analgésico e descanso para acelerar a recuperação.",
            "Antibiótico+Compressa quente": "Compressa ajuda a aumentar a circulação local facilitando ação do antibiótico.",
            "Repouso+Hidratação": "Descanso e hidratação são essenciais para o sistema imunológico funcionar melhor.",
            "Alimentação equilibrada+Repouso": "Nutrientes certos aceleram a recuperação durante o descanso.",
            "Antibiótico+Hidratação": "Hidratação auxilia a eliminação das toxinas produzidas pela infecção."
        }
    },
    {
        problema: "Alergia leve",
        ingredientes: [
            "Anti-histamínico",
            "Corticosteroide tópico",
            "Hidratação",
            "Evitar alérgenos",
            "Compressa fria",
            "Banho calmante",
            "Roupas leves"
        ],
        combosEficazes: [
            ["Anti-histamínico", "Corticosteroide tópico"],
            ["Hidratação", "Compressa fria"],
            ["Evitar alérgenos", "Banho calmante"],
            ["Roupas leves", "Evitar alérgenos"],
            ["Anti-histamínico", "Banho calmante"]
        ],
        explicacoes: {
            "Anti-histamínico+Corticosteroide tópico": "Reduz os sintomas da alergia, controlando a reação alérgica na pele e no corpo.",
            "Hidratação+Compressa fria": "Alivia a coceira e reduz o inchaço de forma natural.",
            "Evitar alérgenos+Banho calmante": "Minimiza contato com alérgenos e acalma a pele irritada.",
            "Roupas leves+Evitar alérgenos": "Roupas frescas evitam irritação da pele e reduzem contato com alérgenos.",
            "Anti-histamínico+Banho calmante": "Combinação para diminuir sintomas cutâneos e desconforto."
        }
    },
    {
        problema: "Coceira intensa em cachorro",
        ingredientes: [
            "Anti-histamínico",
            "Shampoo medicamentoso",
            "Corticosteroide tópico",
            "Omega-3",
            "Repouso",
            "Banho com aveia",
            "Suplementos vitamínicos"
        ],
        combosEficazes: [
            ["Anti-histamínico", "Shampoo medicamentoso"],
            ["Corticosteroide tópico", "Omega-3"],
            ["Banho com aveia", "Repouso"],
            ["Suplementos vitamínicos", "Omega-3"],
            ["Shampoo medicamentoso", "Repouso"]
        ],
        explicacoes: {
            "Anti-histamínico+Shampoo medicamentoso": "Combate alergias e limpa a pele, aliviando a coceira rapidamente.",
            "Corticosteroide tópico+Omega-3": "Reduz inflamação local e ajuda na recuperação da pele.",
            "Banho com aveia+Repouso": "Banho calmante combinado com descanso reduz irritação e coceira.",
            "Suplementos vitamínicos+Omega-3": "Fortalece a pele e melhora a imunidade para prevenir novas crises.",
            "Shampoo medicamentoso+Repouso": "Limpeza eficaz com descanso para acelerar a recuperação."
        }
    },
    {
        problema: "Infecção urinária em gato",
        ingredientes: [
            "Antibiótico específico",
            "Aumento da hidratação",
            "Probióticos",
            "Dieta balanceada",
            "Repouso",
            "Redução de estresse",
            "Suplementos urinários"
        ],
        combosEficazes: [
            ["Antibiótico específico", "Aumento da hidratação"],
            ["Probióticos", "Dieta balanceada"],
            ["Repouso", "Redução de estresse"],
            ["Suplementos urinários", "Dieta balanceada"],
            ["Antibiótico específico", "Repouso"]
        ],
        explicacoes: {
            "Antibiótico específico+Aumento da hidratação": "Combate a bactéria causadora da infecção e ajuda a eliminar toxinas pela urina.",
            "Probióticos+Dieta balanceada": "Auxilia no equilíbrio da flora intestinal e fortalece o sistema imune.",
            "Repouso+Redução de estresse": "O descanso e ambiente tranquilo aceleram a recuperação.",
            "Suplementos urinários+Dieta balanceada": "Melhora a saúde do trato urinário prevenindo futuras infecções.",
            "Antibiótico específico+Repouso": "Combate a infecção com descanso adequado para recuperação."
        }
    },
    {
        problema: "Diarreia em coelho",
        ingredientes: [
            "Probióticos",
            "Hidratação oral",
            "Alimentação rica em fibras",
            "Antibiótico suave",
            "Isolamento",
            "Controle da temperatura ambiente",
            "Suplementos vitamínicos"
        ],
        combosEficazes: [
            ["Probióticos", "Hidratação oral"],
            ["Alimentação rica em fibras", "Isolamento"],
            ["Controle da temperatura ambiente", "Hidratação oral"],
            ["Suplementos vitamínicos", "Alimentação rica em fibras"],
            ["Antibiótico suave", "Repouso"]
        ],
        explicacoes: {
            "Probióticos+Hidratação oral": "Restaura a flora intestinal e previne desidratação.",
            "Alimentação rica em fibras+Isolamento": "Ajuda a regular o intestino e evita contágio.",
            "Controle da temperatura ambiente+Hidratação oral": "Mantém o coelho confortável e previne piora dos sintomas.",
            "Suplementos vitamínicos+Alimentação rica em fibras": "Fortalece o sistema imunológico e melhora a saúde intestinal.",
            "Antibiótico suave+Repouso": "Combate infecções leves com descanso para recuperação."
        }
    },
    {
        problema: "Inflamação nas patas do cão",
        ingredientes: [
            "Anti-inflamatório tópico",
            "Analgésico oral",
            "Banho com ervas",
            "Curativo protetor",
            "Repouso",
            "Compressa fria",
            "Fisioterapia leve"
        ],
        combosEficazes: [
            ["Anti-inflamatório tópico", "Analgésico oral"],
            ["Banho com ervas", "Curativo protetor"],
            ["Repouso", "Compressa fria"],
            ["Fisioterapia leve", "Analgésico oral"],
            ["Anti-inflamatório tópico", "Fisioterapia leve"]
        ],
        explicacoes: {
            "Anti-inflamatório tópico+Analgésico oral": "Reduz dor e inflamação para uma recuperação mais rápida.",
            "Banho com ervas+Curativo protetor": "Alivia a área afetada e protege contra infecções.",
            "Repouso+Compressa fria": "Descanso e frio diminuem o inchaço e dor.",
            "Fisioterapia leve+Analgésico oral": "Estimula a recuperação muscular e alivia a dor.",
            "Anti-inflamatório tópico+Fisioterapia leve": "Reduz inflamação enquanto melhora a mobilidade."
        }
    }
];

// Estado do jogo
let perguntasEmbaralhadas = [];
let atual = 0;
let acertos = 0;
let erros = 0;
let historico = [];

// Função para embaralhar arrays
function shuffleArray(array) {
  for(let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function iniciarJogo() {
  atual = 0;
  acertos = 0;
  erros = 0;
  historico = [];

  perguntasEmbaralhadas = shuffleArray([...desafios]);

  document.getElementById('instrucoes').classList.add('hidden');
  document.getElementById('relatorio').classList.add('hidden');
  document.getElementById('jogo').classList.remove('hidden');
  document.getElementById('feedback').classList.add('hidden');

  carregarPergunta();
}

function carregarPergunta() {
  const desafio = perguntasEmbaralhadas[atual];

  // Atualiza texto problema
  document.getElementById('problema-texto').textContent = desafio.problema;

  // Mostra "Pergunta X de Y"
  document.getElementById('contador').textContent = `Pergunta ${atual + 1} de ${perguntasEmbaralhadas.length}`;

  // Limpa ingredientes e embaralha para mostrar ordem diferente
  const containerIngredientes = document.getElementById('ingredientes');
  containerIngredientes.innerHTML = '<p><strong>Escolha até 5 ingredientes:</strong></p>';

  let ingredientesEmbaralhados = shuffleArray([...desafio.ingredientes]);

  ingredientesEmbaralhados.forEach(ingrediente => {
    const label = document.createElement('label');
    label.innerHTML = `<input type="checkbox" value="${ingrediente}"/> ${ingrediente}`;
    containerIngredientes.appendChild(label);
  });

  // Limpa feedback e habilita botão
  document.getElementById('feedback').classList.add('hidden');
  document.querySelector('#jogo button').disabled = false;
}

function avaliarEscolha() {
  const desafio = perguntasEmbaralhadas[atual];

  // Pega as opções marcadas
  const checkboxes = document.querySelectorAll('#ingredientes input[type=checkbox]');
  let escolhidos = [];
  checkboxes.forEach(cb => {
    if(cb.checked) escolhidos.push(cb.value);
  });

  if (escolhidos.length === 0) {
    alert("Por favor, escolha pelo menos um ingrediente.");
    return;
  }
  if (escolhidos.length > 5) {
    alert("Escolha no máximo 5 ingredientes.");
    return;
  }

  // Ordena para comparação consistente
  let escolhidosOrdenados = escolhidos.slice().sort();

  let pontuacaoAtual = 0;
  let explicacao = "Combinação pouco eficaz para este problema.";

  // Verifica combos eficazes (se contém algum combo completo)
  for(let combo of desafio.combosEficazes) {
    let comboOrdenado = combo.slice().sort();

    let contemTodoCombo = comboOrdenado.every(item => escolhidosOrdenados.includes(item));

    if(contemTodoCombo) {
      pontuacaoAtual = 1;
      let key = comboOrdenado.join("+");
      explicacao = desafio.explicacoes[key] || explicacao;
      break;
    }
  }

  if (pontuacaoAtual === 1) {
    acertos++;
  } else {
    erros++;
  }

  // Salva no histórico para relatório
  historico.push({
    problema: desafio.problema,
    escolhidos,
    pontuacao: pontuacaoAtual,
    explicacao
  });

  atual++;

  if (atual >= perguntasEmbaralhadas.length) {
    mostrarRelatorio();
  } else {
    carregarPergunta();
  }
}

function mostrarRelatorio() {
  document.getElementById('jogo').classList.add('hidden');
  const relatorioDiv = document.getElementById('relatorio');
  relatorioDiv.classList.remove('hidden');

  let textoResumo = `<p>Você respondeu ${perguntasEmbaralhadas.length} desafios.</p>`;
  textoResumo += `<p>Acertos: ${acertos} ✅</p>`;
  textoResumo += `<p>Erros: ${erros} ❌</p>`;
  textoResumo += "<hr><p><strong>Detalhes:</strong></p>";

  historico.forEach((item, i) => {
    textoResumo += `<p><strong>${i+1}. Problema:</strong> ${item.problema}<br>`;
    textoResumo += `<strong>Escolheu:</strong> ${item.escolhidos.join(", ")}<br>`;
    textoResumo += `<strong>Resultado:</strong> ${item.pontuacao === 1 ? "Acertou ✅" : "Erro ❌"}<br>`;
    textoResumo += `<em>${item.explicacao}</em></p>`;
  });

  document.getElementById('resumo').innerHTML = textoResumo;
}

function reiniciarJogo() {
  document.getElementById('relatorio').classList.add('hidden');
  document.getElementById('instrucoes').classList.remove('hidden');
}