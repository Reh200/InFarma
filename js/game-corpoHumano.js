const challenges = {
  "Sistema Nervoso": [
    {
      text: "Qual neurotransmissor está associado ao controle do humor e é alvo de antidepressivos como os ISRS?",
      options: [
        { text: "Dopamina", correct: false },
        { text: "Serotonina", correct: true },
        { text: "Acetilcolina", correct: false },
      ],
      feedback: "A serotonina influencia o humor, ansiedade e felicidade, sendo alvo dos inibidores seletivos da recaptação da serotonina (ISRS)."
    },
    {
      text: "Qual animal foi fundamental para a descoberta da morfina e outros opioides?",
      options: [
        { text: "Pomba", correct: false },
        { text: "Papoula", correct: false },
        { text: "Coelho", correct: false },
        { text: "Rato", correct: true },
      ],
      feedback: "Ratos foram usados em pesquisas para isolar a morfina da papoula e estudar seus efeitos analgésicos."
    },
    {
      text: "Qual doença neurodegenerativa é tratada com levodopa para aumentar dopamina no cérebro?",
      options: [
        { text: "Esclerose múltipla", correct: false },
        { text: "Mal de Parkinson", correct: true },
        { text: "Alzheimer", correct: false },
      ],
      feedback: "A doença de Parkinson é causada pela perda de neurônios dopaminérgicos, tratada com levodopa para repor dopamina."
    },
    {
      text: "O que significa que um medicamento cruza a barreira hematoencefálica?",
      options: [
        { text: "Ele atinge o cérebro", correct: true },
        { text: "Ele atua no fígado", correct: false },
        { text: "Ele é metabolizado nos rins", correct: false },
      ],
      feedback: "A barreira hematoencefálica protege o cérebro, mas alguns fármacos conseguem atravessá-la para agir no sistema nervoso."
    },
    {
      text: "Qual é o efeito adverso comum dos antipsicóticos no sistema nervoso motor?",
      options: [
        { text: "Parkinsonismo", correct: true },
        { text: "Convulsões", correct: false },
        { text: "Alucinações", correct: false },
      ],
      feedback: "Antipsicóticos podem causar sintomas extrapiramidais, como o parkinsonismo."
    },
    {
      text: "Em que animal o sistema nervoso foi fundamentalmente estudado para entender a sinapse química?",
      options: [
        { text: "Polvo", correct: true },
        { text: "Cachorro", correct: false },
        { text: "Gato", correct: false },
      ],
      feedback: "O polvo gigante foi usado por Hodgkin e Huxley para entender a transmissão nervosa e as sinapses."
    },
  ],

  "Sistema Respiratório": [
    {
      text: "Qual medicamento é utilizado como broncodilatador para crises de asma?",
      options: [
        { text: "Salbutamol", correct: true },
        { text: "Paracetamol", correct: false },
        { text: "Ibuprofeno", correct: false },
      ],
      feedback: "Salbutamol é um broncodilatador que relaxa os músculos das vias aéreas, facilitando a respiração."
    },
    {
      text: "O que causou a pandemia de gripe em 1918, que afetou milhões mundialmente?",
      options: [
        { text: "H1N1", correct: true },
        { text: "H5N1", correct: false },
        { text: "SARS-CoV-2", correct: false },
      ],
      feedback: "O vírus H1N1 causou a pandemia de gripe espanhola em 1918."
    },
    {
      text: "Qual animal é usado para testar vacinas respiratórias por sua similaridade com humanos?",
      options: [
        { text: "Porco", correct: true },
        { text: "Galinha", correct: false },
        { text: "Cachorro", correct: false },
      ],
      feedback: "Porcos possuem sistema respiratório semelhante ao humano e são usados em pesquisas."
    },
    {
      text: "Qual doença pulmonar crônica é causada principalmente pelo tabagismo?",
      options: [
        { text: "Asma", correct: false },
        { text: "Doença Pulmonar Obstrutiva Crônica (DPOC)", correct: true },
        { text: "Pneumonia", correct: false },
      ],
      feedback: "A DPOC é uma doença pulmonar obstrutiva causada principalmente pelo tabagismo."
    },
    {
      text: "Qual é o papel dos corticosteroides inalados no tratamento respiratório?",
      options: [
        { text: "Reduzir inflamação", correct: true },
        { text: "Dilatar brônquios", correct: false },
        { text: "Eliminar infecções", correct: false },
      ],
      feedback: "Corticosteroides inalados reduzem a inflamação nas vias aéreas, controlando sintomas."
    },
    {
      text: "Qual animal produz o veneno usado em pesquisas para tratar doenças respiratórias?",
      options: [
        { text: "Aranha", correct: false },
        { text: "Escorpião", correct: true },
        { text: "Cobras", correct: false },
      ],
      feedback: "O veneno de escorpião tem peptídeos que são estudados para tratar doenças respiratórias."
    },
  ],

  "Sistema Circulatório": [
    {
      text: "Qual medicamento é usado para afinar o sangue e prevenir trombose?",
      options: [
        { text: "Varfarina", correct: true },
        { text: "Amoxicilina", correct: false },
        { text: "Paracetamol", correct: false },
      ],
      feedback: "Varfarina é um anticoagulante usado para prevenir coágulos sanguíneos."
    },
    {
      text: "Qual animal tem um coração simples, usado para estudar arritmias?",
      options: [
        { text: "Peixe-zebra", correct: true },
        { text: "Rato", correct: false },
        { text: "Cavalo", correct: false },
      ],
      feedback: "Peixe-zebra é usado em pesquisas cardiovasculares pela simplicidade do seu coração."
    },
    {
      text: "Qual evento histórico foi marcado pelo uso do medicamento digitalina?",
      options: [
        { text: "Tratamento de insuficiência cardíaca no século XVIII", correct: true },
        { text: "Vacinação contra a varíola", correct: false },
        { text: "Descoberta da penicilina", correct: false },
      ],
      feedback: "A digitalina, extraída da planta Dedaleira, foi usada desde o século XVIII para insuficiência cardíaca."
    },
    {
      text: "Qual é o principal efeito dos beta-bloqueadores no sistema circulatório?",
      options: [
        { text: "Reduzir pressão arterial", correct: true },
        { text: "Aumentar frequência cardíaca", correct: false },
        { text: "Dilatar vasos sanguíneos", correct: false },
      ],
      feedback: "Beta-bloqueadores diminuem a frequência cardíaca e a pressão arterial."
    },
    {
      text: "O que significa o termo 'infarto do miocárdio'?",
      options: [
        { text: "Ataque cardíaco causado por obstrução das artérias", correct: true },
        { text: "Inflamação do coração", correct: false },
        { text: "Insuficiência cardíaca", correct: false },
      ],
      feedback: "Infarto do miocárdio ocorre quando uma artéria coronária é bloqueada, causando morte do tecido cardíaco."
    },
    {
      text: "Qual animal tem um sistema circulatório aberto, diferente dos humanos?",
      options: [
        { text: "Insetos", correct: true },
        { text: "Cães", correct: false },
        { text: "Aves", correct: false },
      ],
      feedback: "Insetos possuem sistema circulatório aberto, onde o sangue não circula por vasos fechados."
    },
  ],

  "Sistema Digestivo": [
    {
      text: "Qual enzima é responsável por iniciar a digestão de proteínas no estômago?",
      options: [
        { text: "Pepsina", correct: true },
        { text: "Amilase", correct: false },
        { text: "Lipase", correct: false },
      ],
      feedback: "A pepsina quebra proteínas em peptídeos menores no ambiente ácido do estômago."
    },
    {
      text: "Qual animal tem um sistema digestivo com quatro estômagos para digestão de celulose?",
      options: [
        { text: "Vaca", correct: true },
        { text: "Cavalo", correct: false },
        { text: "Porco", correct: false },
      ],
      feedback: "As vacas são ruminantes, com estômagos especializados para digerir celulose."
    },
    {
      text: "Qual medicamento é usado para tratar úlcera gástrica reduzindo acidez?",
      options: [
        { text: "Omeprazol", correct: true },
        { text: "Paracetamol", correct: false },
        { text: "Ibuprofeno", correct: false },
      ],
      feedback: "Omeprazol é um inibidor da bomba de prótons que reduz a produção de ácido no estômago."
    },
    {
      text: "Qual órgão produz a bile, importante para digestão de gorduras?",
      options: [
        { text: "Fígado", correct: true },
        { text: "Pâncreas", correct: false },
        { text: "Estômago", correct: false },
      ],
      feedback: "O fígado produz bile, que emulsifica gorduras para facilitar a digestão."
    },
    {
      text: "Qual é a função do intestino delgado?",
      options: [
        { text: "Absorver nutrientes", correct: true },
        { text: "Produzir enzimas", correct: false },
        { text: "Armazenar gordura", correct: false },
      ],
      feedback: "O intestino delgado é o principal local de absorção dos nutrientes da alimentação."
    },
    {
      text: "Qual animal é usado em pesquisas para estudar a microbiota intestinal humana?",
      options: [
        { text: "Camundongo", correct: true },
        { text: "Galinha", correct: false },
        { text: "Porco", correct: false },
      ],
      feedback: "Camundongos são usados como modelos para estudo da microbiota intestinal humana."
    },
  ],

  "Sistema Urinário": [
    {
      text: "Qual órgão é responsável pela filtração do sangue para formar a urina?",
      options: [
        { text: "Rim", correct: true },
        { text: "Bexiga", correct: false },
        { text: "Ureter", correct: false },
      ],
      feedback: "Os rins filtram o sangue para eliminar resíduos através da urina."
    },
    {
      text: "Qual é a função da bexiga?",
      options: [
        { text: "Armazenar urina", correct: true },
        { text: "Filtrar toxinas", correct: false },
        { text: "Produzir urina", correct: false },
      ],
      feedback: "A bexiga armazena a urina até que seja eliminada."
    },
    {
      text: "Qual medicamento é usado para tratar infecção urinária?",
      options: [
        { text: "Nitrofurantoína", correct: true },
        { text: "Amoxicilina", correct: false },
        { text: "Ibuprofeno", correct: false },
      ],
      feedback: "Nitrofurantoína é um antibiótico usado para tratar infecções do trato urinário."
    },
    {
      text: "Qual animal tem rins adaptados para conservar água em ambientes desérticos?",
      options: [
        { text: "Camelo", correct: true },
        { text: "Rato", correct: false },
        { text: "Cavalo", correct: false },
      ],
      feedback: "Camelo possui rins que concentram urina para economizar água."
    },
    {
      text: "O que é diurese?",
      options: [
        { text: "Formação de urina", correct: true },
        { text: "Contração da bexiga", correct: false },
        { text: "Absorção de nutrientes", correct: false },
      ],
      feedback: "Diurese é o processo de formação da urina nos rins."
    },
    {
      text: "Qual hormônio regula a retenção de água nos rins?",
      options: [
        { text: "ADH (hormônio antidiurético)", correct: true },
        { text: "Insulina", correct: false },
        { text: "Adrenalina", correct: false },
      ],
      feedback: "O ADH aumenta a reabsorção de água nos rins para conservar líquidos."
    },
  ],

  "Sistema Endócrino": [
    {
      text: "Qual glândula é conhecida como 'glândula mestre' por controlar outras glândulas?",
      options: [
        { text: "Hipófise", correct: true },
        { text: "Tireoide", correct: false },
        { text: "Adrenal", correct: false },
      ],
      feedback: "A hipófise regula outras glândulas endócrinas através da liberação de hormônios."
    },
    {
      text: "Qual hormônio regula os níveis de açúcar no sangue?",
      options: [
        { text: "Insulina", correct: true },
        { text: "Cortisol", correct: false },
        { text: "Adrenalina", correct: false },
      ],
      feedback: "A insulina facilita a entrada de glicose nas células, reduzindo o açúcar no sangue."
    },
    {
      text: "Qual animal tem um sistema endócrino usado para estudar diabetes?",
      options: [
        { text: "Camundongo", correct: true },
        { text: "Cachorro", correct: false },
        { text: "Coelho", correct: false },
      ],
      feedback: "Camundongos são modelos comuns para pesquisa em diabetes e sistema endócrino."
    },
    {
      text: "Qual hormônio é liberado pela glândula adrenal em resposta ao estresse?",
      options: [
        { text: "Cortisol", correct: true },
        { text: "Testosterona", correct: false },
        { text: "Progesterona", correct: false },
      ],
      feedback: "O cortisol é o hormônio do estresse, liberado pelas glândulas adrenais."
    },
    {
      text: "Qual doença é causada por deficiência de hormônio da tireoide na infância?",
      options: [
        { text: "Hipotireoidismo congênito", correct: true },
        { text: "Diabetes tipo 1", correct: false },
        { text: "Doença de Addison", correct: false },
      ],
      feedback: "Hipotireoidismo congênito causa atraso no desenvolvimento e problemas cognitivos se não tratado."
    },
    {
      text: "Qual hormônio regula o ciclo menstrual no sistema reprodutor feminino?",
      options: [
        { text: "Estrogênio", correct: true },
        { text: "Testosterona", correct: false },
        { text: "Insulina", correct: false },
      ],
      feedback: "O estrogênio é fundamental para o desenvolvimento e regulação do ciclo menstrual."
    },
  ],

  "Sistema Reprodutor": [
    {
      text: "Qual hormônio é fundamental para a produção de espermatozoides nos homens?",
      options: [
        { text: "Testosterona", correct: true },
        { text: "Estrogênio", correct: false },
        { text: "Progesterona", correct: false },
      ],
      feedback: "A testosterona estimula a produção de espermatozoides e características sexuais masculinas."
    },
    {
      text: "Qual método contraceptivo age inibindo a ovulação?",
      options: [
        { text: "Pílula anticoncepcional", correct: true },
        { text: "Preservativo", correct: false },
        { text: "DIU de cobre", correct: false },
      ],
      feedback: "A pílula anticoncepcional contém hormônios que inibem a ovulação."
    },
    {
      text: "Qual animal é usado em pesquisas para entender o ciclo menstrual humano?",
      options: [
        { text: "Macaco", correct: true },
        { text: "Cavalo", correct: false },
        { text: "Cachorro", correct: false },
      ],
      feedback: "Macacos compartilham ciclos menstruais semelhantes aos humanos, usados em pesquisas."
    },
    {
      text: "Qual hormônio é responsável pelo desenvolvimento das características femininas?",
      options: [
        { text: "Estrogênio", correct: true },
        { text: "Testosterona", correct: false },
        { text: "Progesterona", correct: false },
      ],
      feedback: "O estrogênio promove o desenvolvimento das características sexuais femininas."
    },
    {
      text: "O que é a gravidez ectópica?",
      options: [
        { text: "Implantação do embrião fora do útero", correct: true },
        { text: "Gravidez múltipla", correct: false },
        { text: "Aborto espontâneo", correct: false },
      ],
      feedback: "Gravidez ectópica ocorre quando o embrião se implanta fora do útero, geralmente na trompa."
    },
    {
      text: "Qual medicamento é utilizado para induzir o trabalho de parto?",
      options: [
        { text: "Ocitocina", correct: true },
        { text: "Progestágeno", correct: false },
        { text: "Estrogênio", correct: false },
      ],
      feedback: "A ocitocina estimula contrações uterinas para induzir o parto."
    },
  ],

  "Sistema Muscular": [
    {
      text: "Qual tipo de músculo é responsável pelos movimentos voluntários do corpo?",
      options: [
        { text: "Músculo esquelético", correct: true },
        { text: "Músculo liso", correct: false },
        { text: "Músculo cardíaco", correct: false },
      ],
      feedback: "O músculo esquelético é controlado voluntariamente para movimentos conscientes."
    },
    {
      text: "Qual medicamento é usado para relaxar músculos em casos de espasmos?",
      options: [
        { text: "Baclofeno", correct: true },
        { text: "Ibuprofeno", correct: false },
        { text: "Paracetamol", correct: false },
      ],
      feedback: "Baclofeno atua como relaxante muscular para tratar espasmos."
    },
    {
      text: "Qual animal é usado para estudar regeneração muscular?",
      options: [
        { text: "Salmão", correct: false },
        { text: "Axolote", correct: true },
        { text: "Gato", correct: false },
      ],
      feedback: "Axolotes são estudados pela capacidade de regenerar músculos e tecidos."
    },
    {
      text: "Qual é a proteína principal responsável pela contração muscular?",
      options: [
        { text: "Actina e miosina", correct: true },
        { text: "Colágeno", correct: false },
        { text: "Elastina", correct: false },
      ],
      feedback: "Actina e miosina são proteínas essenciais para a contração muscular."
    },
    {
      text: "Qual doença muscular hereditária causa fraqueza progressiva?",
      options: [
        { text: "Distrofia muscular de Duchenne", correct: true },
        { text: "Esclerose lateral amiotrófica", correct: false },
        { text: "Artrite reumatoide", correct: false },
      ],
      feedback: "A distrofia muscular de Duchenne é uma doença genética que causa fraqueza muscular."
    },
    {
      text: "Qual vitamina é essencial para a função muscular adequada?",
      options: [
        { text: "Vitamina D", correct: true },
        { text: "Vitamina C", correct: false },
        { text: "Vitamina B12", correct: false },
      ],
      feedback: "A vitamina D é importante para a saúde muscular e funcionamento dos nervos."
    },
  ],

  "Sistema Esquelético": [
    {
      text: "Qual mineral é fundamental para a formação dos ossos?",
      options: [
        { text: "Cálcio", correct: true },
        { text: "Ferro", correct: false },
        { text: "Potássio", correct: false },
      ],
      feedback: "O cálcio é essencial para a estrutura e resistência dos ossos."
    },
    {
      text: "Qual vitamina auxilia na absorção do cálcio?",
      options: [
        { text: "Vitamina D", correct: true },
        { text: "Vitamina A", correct: false },
        { text: "Vitamina C", correct: false },
      ],
      feedback: "A vitamina D facilita a absorção do cálcio no intestino."
    },
    {
      text: "Qual é a doença caracterizada pela perda da densidade óssea?",
      options: [
        { text: "Osteoporose", correct: true },
        { text: "Artrite", correct: false },
        { text: "Gota", correct: false },
      ],
      feedback: "Osteoporose deixa os ossos frágeis e propensos a fraturas."
    },
    {
      text: "Qual animal tem o esqueleto interno, como os humanos?",
      options: [
        { text: "Peixe ósseo", correct: true },
        { text: "Inseto", correct: false },
        { text: "Polvo", correct: false },
      ],
      feedback: "Peixes ósseos possuem esqueleto interno semelhante ao dos humanos."
    },
    {
      text: "Qual medicamento é usado para tratar osteoporose?",
      options: [
        { text: "Bifosfonatos", correct: true },
        { text: "Antibióticos", correct: false },
        { text: "Analgesicos", correct: false },
      ],
      feedback: "Bifosfonatos ajudam a prevenir a perda óssea em osteoporose."
    },
    {
      text: "Qual é a função principal do sistema esquelético?",
      options: [
        { text: "Suporte e proteção do corpo", correct: true },
        { text: "Produção de hormônios", correct: false },
        { text: "Contração muscular", correct: false },
      ],
      feedback: "O sistema esquelético dá suporte estrutural e protege órgãos internos."
    },
  ],

  "Sistema Imunológico": [
    {
      text: "Qual célula é a principal responsável pela resposta imune adaptativa?",
      options: [
        { text: "Linfócito T", correct: true },
        { text: "Neutrófilo", correct: false },
        { text: "Eritrócito", correct: false },
      ],
      feedback: "Linfócitos T reconhecem e atacam células infectadas ou estranhas."
    },
    {
      text: "Qual vacina ajudou a erradicar a varíola?",
      options: [
        { text: "Vacina de Jenner", correct: true },
        { text: "Vacina contra gripe", correct: false },
        { text: "Vacina de poliomielite", correct: false },
      ],
      feedback: "Edward Jenner desenvolveu a primeira vacina eficaz contra varíola."
    },
    {
      text: "Qual animal foi usado por Jenner para criar a vacina da varíola?",
      options: [
        { text: "Vaca", correct: true },
        { text: "Cavalo", correct: false },
        { text: "Porco", correct: false },
      ],
      feedback: "Jenner usou vírus da varíola bovina (vaca) para imunizar humanos contra varíola."
    },
    {
      text: "O que é imunidade passiva?",
      options: [
        { text: "Receber anticorpos prontos", correct: true },
        { text: "Produzir anticorpos após vacinação", correct: false },
        { text: "Infecção natural", correct: false },
      ],
      feedback: "Imunidade passiva ocorre quando anticorpos são fornecidos externamente, como soro."
    },
    {
      text: "Qual tipo de célula produz anticorpos?",
      options: [
        { text: "Plasmócitos", correct: true },
        { text: "Macrófagos", correct: false },
        { text: "Neutrófilos", correct: false },
      ],
      feedback: "Plasmócitos são células derivadas dos linfócitos B que produzem anticorpos."
    },
    {
      text: "Qual é o efeito da vacina no sistema imunológico?",
      options: [
        { text: "Estimular a memória imunológica", correct: true },
        { text: "Destruir linfócitos", correct: false },
        { text: "Inibir produção de anticorpos", correct: false },
      ],
      feedback: "Vacinas treinam o sistema imunológico para reconhecer e responder a patógenos."
    },
  ]
};

function startGame() {
  document.getElementById("start-btn").classList.add("hidden");
  document.getElementById("restart-btn").classList.remove("hidden");
  document.getElementById("instructions").classList.add("hidden");
  document.getElementById("system-selection").classList.remove("hidden");
  document.getElementById("challenge-area").classList.add("hidden");
  clearChallengeArea();
}

function restartGame() {
  document.getElementById("start-btn").classList.remove("hidden");
  document.getElementById("restart-btn").classList.add("hidden");
  document.getElementById("instructions").classList.remove("hidden");
  document.getElementById("system-selection").classList.add("hidden");
  document.getElementById("challenge-area").classList.add("hidden");
  clearChallengeArea();
}

function clearChallengeArea() {
  document.getElementById("feedback").textContent = "";
  document.getElementById("challenge-text").textContent = "";
  document.getElementById("options").innerHTML = "";
}

function startChallenge(system) {
  document.getElementById("system-selection").classList.add("hidden");
  document.getElementById("challenge-area").classList.remove("hidden");
  clearChallengeArea();

  const challenge = challenges[system];

  if (!challenge) {
    document.getElementById("challenge-text").textContent = "Desafio não disponível ainda para este sistema.";
    return;
  }

  document.getElementById("challenge-text").textContent = challenge.text;

  const optionsDiv = document.getElementById("options");
  challenge.options.forEach(opt => {
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
