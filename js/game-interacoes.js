const perguntas = [
    {
      combinacao: ["Omeprazol", "Clopidogrel"],
      resposta: "Interagem"
    },
    {
      combinacao: ["Paracetamol", "Amoxicilina"],
      resposta: "Seguros"
    },
    {
      combinacao: ["Warfarina", "AAS"],
      resposta: "Interagem"
    },
    {
      combinacao: ["Dipirona", "Ibuprofeno"],
      resposta: "Seguros"
    }
  ];
  
  let atual = 0;
  let pontos = 0;
  
  function mostrarInteracao() {
    const p = perguntas[atual];
    document.getElementById("pergunta").innerText =
      `Esses medicamentos interagem?\n${p.combinacao.join(" + ")}`;
  
    const opcoes = document.getElementById("opcoes");
    opcoes.innerHTML = "";
  
    ["Interagem", "Seguros"].forEach(resp => {
      const btn = document.createElement("button");
      btn.innerText = resp;
      btn.onclick = () => responder(resp);
      opcoes.appendChild(btn);
    });
  }
  
  function responder(resp) {
    const correta = perguntas[atual].resposta;
    const resultado = document.getElementById("resultado");
  
    if (resp === correta) {
      resultado.innerText = "✅ Correto!";
      pontos++;
    } else {
      resultado.innerText = `❌ Errado! Correto: ${correta}`;
    }
  
    atual++;
    if (atual < perguntas.length) {
      setTimeout(() => {
        resultado.innerText = "";
        mostrarInteracao();
      }, 1500);
    } else {
      resultado.innerText = `🎉 Fim! Pontuação: ${pontos}/${perguntas.length}`;
    }
  }
  
  mostrarInteracao();
  