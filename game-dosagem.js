const casos = [
    {
      texto: "Paciente: Criança de 18 kg. Prescrição: Dipirona 1g a cada 6h.",
      correta: false,
      explicacao: "Dose máxima é 270 mg por dose. 1g é muito alto."
    },
    {
      texto: "Paciente: Adulto de 70 kg. Prescrição: Amoxicilina 500 mg a cada 8h.",
      correta: true,
      explicacao: "Dentro da faixa terapêutica para infecções leves."
    },
    {
      texto: "Paciente: Idoso, 60 kg, com insuficiência renal. Prescrição: Gentamicina 160 mg a cada 8h.",
      correta: false,
      explicacao: "Gentamicina requer ajuste renal para evitar toxicidade."
    },
    {
      texto: "Paciente: Criança de 30 kg. Prescrição: Paracetamol 1 g a cada 6h.",
      correta: false,
      explicacao: "Dose segura é 10-15 mg/kg/dose → 450 mg. 1g excede o dobro."
    },
    {
      texto: "Paciente: Adulto 80 kg. Prescrição: Ibuprofeno 400 mg a cada 6h.",
      correta: true,
      explicacao: "Dose diária total 1600 mg, dentro do limite de 2400 mg."
    }
  ];
  
  let atual = 0;
  
  function atualizarCaso() {
    const casoElem = document.getElementById("caso");
    const feedbackElem = document.getElementById("feedback");
    casoElem.innerText = casos[atual].texto;
    feedbackElem.innerText = "";
  }
  
  function responder(escolha) {
    const certo = escolha === casos[atual].correta;
    const feedbackElem = document.getElementById("feedback");
  
    feedbackElem.innerText = (certo ? "✅ Correto! " : "❌ Incorreto! ") + casos[atual].explicacao;
  
    // Avança para o próximo caso após 2 segundos
    setTimeout(() => {
      atual = (atual + 1) % casos.length;
      atualizarCaso();
    }, 2000);
  }
  
  // Inicializa o jogo ao carregar a página
  window.onload = atualizarCaso;
  