const casos = [
  {
    texto: "Paciente: Adulto 70 kg com dor neuropática. Prescrição: Amitriptilina 75 mg à noite.",
    correta: true,
    explicacao: "Dose inicial comum para dor crônica neuropática. Efeitos colaterais devem ser monitorados."
  },
  {
    texto: "Paciente: Criança de 20 kg. Prescrição: Cefalexina 1 g a cada 6h.",
    correta: false,
    explicacao: "Dose pediátrica típica é 25-50 mg/kg/dia. 1 g por dose é excessivo para 20 kg."
  },
  {
    texto: "Paciente: Adulto 90 kg com depressão. Prescrição: Sertralina 200 mg/dia.",
    correta: true,
    explicacao: "200 mg/dia é o limite superior da dose terapêutica para adultos. Deve-se iniciar com dose menor."
  },
  {
    texto: "Paciente: Idoso com fibrilação atrial. Prescrição: Varfarina 10 mg/dia.",
    correta: false,
    explicacao: "Dose inicial deve ser menor (2-5 mg/dia), especialmente em idosos. Risco de sangramento elevado."
  },
  {
    texto: "Paciente: Criança de 25 kg. Prescrição: Albendazol 400 mg dose única.",
    correta: true,
    explicacao: "Dose única de 400 mg é apropriada para crianças acima de 2 anos para verminoses comuns."
  },
  {
    texto: "Paciente: Adulto com enxaqueca. Prescrição: Sumatriptana 100 mg ao início da crise.",
    correta: true,
    explicacao: "Dose usual de sumatriptana para enxaqueca aguda. Pode ser repetida após 2h, se necessário."
  },
  {
    texto: "Paciente: Adolescente 60 kg com acne grave. Prescrição: Isotretinoína 80 mg/dia.",
    correta: false,
    explicacao: "Dose máxima recomendada gira em torno de 0,5–1 mg/kg/dia. 80 mg excede essa faixa para 60 kg."
  },
  {
    texto: "Paciente: Adulto com infecção por H. pylori. Prescrição: Omeprazol 20 mg 2x/dia.",
    correta: true,
    explicacao: "Faz parte do esquema clássico de erradicação com antibióticos."
  },
  {
    texto: "Paciente: Criança de 18 kg com febre. Prescrição: Dipirona 180 mg a cada 6h.",
    correta: true,
    explicacao: "Dose recomendada é de 10-20 mg/kg/dose → 180 a 360 mg. Dentro do intervalo."
  },
  {
    texto: "Paciente: Adulto com dor muscular. Prescrição: Codeína 60 mg a cada 4h.",
    correta: false,
    explicacao: "Dose máxima por dose é 30-60 mg, mas não deve ser repetida a cada 4h por risco de sedação e dependência."
  },
  {
    "texto": "Paciente: Adulto de 80 kg com dor crônica nas costas. Prescrição: Ibuprofeno 400 mg a cada 6h.",
    "correta": true,
    "explicacao": "Ibuprofeno 400 mg a cada 6h é uma dose comum para dor moderada. No entanto, é importante monitorar os efeitos gastrointestinais e renais em uso prolongado."
  },
  {
    "texto": "Paciente: Criança de 10 kg com infecção bacteriana. Prescrição: Amoxicilina 1 g a cada 12h.",
    "correta": false,
    "explicacao": "A dose recomendada de amoxicilina para crianças é de 25-50 mg/kg/dia. Para uma criança de 10 kg, a dose seria de 250-500 mg a cada 12h, não 1 g."
  },
  {
    "texto": "Paciente: Idoso com insuficiência renal leve. Prescrição: Metformina 1000 mg/dia.",
    "correta": false,
    "explicacao": "Em pacientes com insuficiência renal, a dose de metformina deve ser reduzida devido ao risco aumentado de acidose láctica. A dose inicial recomendada é geralmente de 500 mg/dia."
  },
  {
    "texto": "Paciente: Adolescente de 55 kg com ansiedade. Prescrição: Alprazolam 2 mg/dia.",
    "correta": true,
    "explicacao": "A dose de 2 mg/dia é adequada para tratamento de ansiedade em adolescentes, mas deve ser monitorada para evitar dependência. O uso prolongado não é recomendado."
  },
  {
    "texto": "Paciente: Adulto com hipertensão controlada. Prescrição: Losartana 50 mg/dia.",
    "correta": true,
    "explicacao": "Losartana 50 mg/dia é uma dose comum para hipertensão. Pode ser ajustada com base no controle da pressão arterial e nas condições do paciente."
  },
  {
    "texto": "Paciente: Criança de 30 kg com dor de garganta. Prescrição: Paracetamol 500 mg a cada 4h.",
    "correta": false,
    "explicacao": "A dose de paracetamol para crianças é de 10-15 mg/kg por dose. Para uma criança de 30 kg, a dose recomendada seria de 300-450 mg, não 500 mg."
  },
  {
    "texto": "Paciente: Adulto com infecção urinária. Prescrição: Ciprofloxacino 500 mg a cada 12h.",
    "correta": true,
    "explicacao": "Ciprofloxacino 500 mg a cada 12h é uma dosagem comum para tratar infecções urinárias. Deve-se considerar a função renal ao ajustar a dose."
  },
  {
    "texto": "Paciente: Idoso de 75 anos com dor neuropática. Prescrição: Amitriptilina 25 mg à noite.",
    "correta": true,
    "explicacao": "A dose inicial de amitriptilina para dor neuropática em idosos é geralmente de 25 mg à noite. A dosagem pode ser aumentada conforme a resposta e tolerância."
  },
  {
    "texto": "Paciente: Criança de 40 kg com asma. Prescrição: Salbutamol 10 mg a cada 6h.",
    "correta": false,
    "explicacao": "A dose usual de salbutamol para crianças é de 100-200 mcg por dose, podendo ser repetida a cada 4-6 horas. A dosagem de 10 mg por dose é excessiva e pode levar a efeitos colaterais graves."
  },
  {
    "texto": "Paciente: Adulto com dor intensa pós-cirúrgica. Prescrição: Morfina 10 mg a cada 4h.",
    "correta": true,
    "explicacao": "Morfina 10 mg a cada 4h pode ser indicada para dor intensa pós-cirúrgica, mas deve ser monitorada de perto para evitar efeitos adversos como sedação excessiva e depressão respiratória."
  }  
];

let casosEmbaralhados = [];
let atual = 0;
let respostasUsuario = [];

function embaralharCasos(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
}

function atualizarCaso() {
  const casoElem = document.getElementById("caso");
  const feedbackElem = document.getElementById("feedback");
  const contadorElem = document.getElementById("contador");
  feedbackElem.innerText = "";

  if (atual < casosEmbaralhados.length) {
    casoElem.innerText = casosEmbaralhados[atual].texto;
    contadorElem.innerText = `Pergunta ${atual + 1} de ${casosEmbaralhados.length}`;
  } else {
    exibirResultadoFinal();
  }
}

function responder(escolha) {
  const casoAtual = casosEmbaralhados[atual];
  const correto = escolha === casoAtual.correta;

  respostasUsuario.push({
    texto: casoAtual.texto,
    correta: casoAtual.correta,
    usuarioAcertou: correto,
    explicacao: casoAtual.explicacao
  });

  atual++;
  atualizarCaso();
}

function exibirResultadoFinal() {
  const casoElem = document.getElementById("caso");
  const botoes = document.getElementById("botoes");
  const feedbackElem = document.getElementById("feedback");
  const contadorElem = document.getElementById("contador");

  casoElem.innerText = "✅ Fim dos casos! Veja abaixo os resultados:";
  contadorElem.style.display = "none";

  let resultadoHTML = "<ul>";
  respostasUsuario.forEach((resposta, i) => {
    resultadoHTML += `<li style="margin-bottom: 10px;">
      <strong>Caso ${i + 1}:</strong> ${resposta.texto}<br>
      <span style="color:${resposta.usuarioAcertou ? '#22c55e' : '#ef4444'}">
        ${resposta.usuarioAcertou ? '✔️ Correto' : '❌ Incorreto'}
      </span> – ${resposta.explicacao}
    </li>`;
  });
  resultadoHTML += "</ul>";

  feedbackElem.innerHTML = resultadoHTML;
  botoes.style.display = "none";
}

window.onload = function () {
  casosEmbaralhados = [...casos];
  embaralharCasos(casosEmbaralhados);
  atualizarCaso();
};