const challenges = {
  "Coração": [
    {
      text: "O paciente tem pressão arterial elevada. Qual é a melhor opção imediata?",
      options: [
        { text: "Beta-bloqueador", correct: true },
        { text: "Antibiótico", correct: false },
        { text: "Diurético leve", correct: false },
        { text: "AAS infantil", correct: false }
      ],
      feedback: "Beta-bloqueadores reduzem a frequência cardíaca e a pressão arterial."
    },
    {
      text: "Qual exame é mais utilizado para avaliar a função cardíaca?",
      options: [
        { text: "Eletrocardiograma", correct: true },
        { text: "Raio-X do pulmão", correct: false },
        { text: "Tomografia abdominal", correct: false },
        { text: "Ultrassom da tireoide", correct: false }
      ],
      feedback: "O eletrocardiograma registra a atividade elétrica do coração."
    },
    {
      text: "Qual desses medicamentos ajuda a reduzir o colesterol?",
      options: [
        { text: "Estatina", correct: true },
        { text: "Anticoagulante", correct: false },
        { text: "Anti-inflamatório", correct: false },
        { text: "Diurético", correct: false }
      ],
      feedback: "Estatinas são usadas para diminuir o colesterol LDL no sangue."
    },
    {
      text: "Qual é a função principal das válvulas cardíacas?",
      options: [
        { text: "Impedir refluxo do sangue", correct: true },
        { text: "Bombear sangue para o cérebro", correct: false },
        { text: "Produzir glóbulos vermelhos", correct: false },
        { text: "Filtrar impurezas do sangue", correct: false }
      ],
      feedback: "As válvulas impedem o refluxo e mantêm o fluxo sanguíneo unidirecional."
    },
    {
      text: "O que significa infarto do miocárdio?",
      options: [
        { text: "Morte de parte do músculo cardíaco", correct: true },
        { text: "Aumento do ritmo cardíaco", correct: false },
        { text: "Inflamação das artérias", correct: false },
        { text: "Diminuição da pressão arterial", correct: false }
      ],
      feedback: "Infarto ocorre quando há morte do músculo cardíaco por falta de oxigênio."
    },
    {
      text: "Qual desses sintomas é comum na insuficiência cardíaca?",
      options: [
        { text: "Falta de ar e inchaço nas pernas", correct: true },
        { text: "Dor abdominal intensa", correct: false },
        { text: "Visão turva", correct: false },
        { text: "Tontura ao se levantar", correct: false }
      ],
      feedback: "Insuficiência cardíaca causa acúmulo de líquido, levando à falta de ar e edema."
    },
    {
      text: "O que faz o sistema de condução do coração?",
      options: [
        { text: "Controla os batimentos cardíacos", correct: true },
        { text: "Filtra toxinas do sangue", correct: false },
        { text: "Produz anticorpos", correct: false },
        { text: "Transporta oxigênio", correct: false }
      ],
      feedback: "O sistema de condução gera e propaga os impulsos elétricos do coração."
    },
    {
      text: "Qual é o papel do átrio esquerdo?",
      options: [
        { text: "Receber sangue oxigenado dos pulmões", correct: true },
        { text: "Bombear sangue para os pulmões", correct: false },
        { text: "Receber sangue venoso do corpo", correct: false },
        { text: "Filtrar impurezas do sangue", correct: false }
      ],
      feedback: "O átrio esquerdo recebe sangue oxigenado que volta dos pulmões."
    },
    {
      text: "Qual artéria é responsável por levar sangue ao coração?",
      options: [
        { text: "Artéria coronária", correct: true },
        { text: "Artéria aorta", correct: false },
        { text: "Artéria pulmonar", correct: false },
        { text: "Veia cava", correct: false }
      ],
      feedback: "As artérias coronárias suprem o músculo cardíaco com sangue."
    },
    {
      text: "O que significa arritmia cardíaca?",
      options: [
        { text: "Batimentos irregulares do coração", correct: true },
        { text: "Aumento da pressão arterial", correct: false },
        { text: "Diminuição do fluxo sanguíneo", correct: false },
        { text: "Inflamação do miocárdio", correct: false }
      ],
      feedback: "Arritmia é quando os batimentos do coração ficam irregulares."
    },
    {
      text: "Qual desses hábitos ajuda a prevenir doenças cardíacas?",
      options: [
        { text: "Praticar exercícios físicos regularmente", correct: true },
        { text: "Fumar", correct: false },
        { text: "Alimentação rica em gorduras saturadas", correct: false },
        { text: "Sedentarismo", correct: false }
      ],
      feedback: "Exercícios ajudam a fortalecer o coração e controlar a pressão."
    },
    {
      text: "O que é pressão arterial sistólica?",
      options: [
        { text: "Pressão durante a contração do coração", correct: true },
        { text: "Pressão durante o relaxamento do coração", correct: false },
        { text: "Pressão nas veias", correct: false },
        { text: "Pressão do sangue nos pulmões", correct: false }
      ],
      feedback: "Sistólica é a pressão quando o coração se contrai para bombear sangue."
    },
    {
      text: "Qual parte do coração recebe sangue pobre em oxigênio?",
      options: [
        { text: "Átrio direito", correct: true },
        { text: "Átrio esquerdo", correct: false },
        { text: "Ventrículo esquerdo", correct: false },
        { text: "Ventrículo direito", correct: false }
      ],
      feedback: "Átrio direito recebe sangue venoso que retorna do corpo."
    },
    {
      text: "Qual é o nome da válvula entre o átrio e o ventrículo esquerdo?",
      options: [
        { text: "Válvula mitral", correct: true },
        { text: "Válvula tricúspide", correct: false },
        { text: "Válvula pulmonar", correct: false },
        { text: "Válvula aórtica", correct: false }
      ],
      feedback: "A válvula mitral separa o átrio esquerdo do ventrículo esquerdo."
    },
    {
      text: "Qual a função do ventrículo esquerdo?",
      options: [
        { text: "Bombear sangue oxigenado para o corpo", correct: true },
        { text: "Receber sangue dos pulmões", correct: false },
        { text: "Bombear sangue para os pulmões", correct: false },
        { text: "Receber sangue venoso do corpo", correct: false }
      ],
      feedback: "Ventrículo esquerdo envia sangue oxigenado para a circulação sistêmica."
    },
    {
      text: "O que é um sopro cardíaco?",
      options: [
        { text: "Som anormal causado pelo fluxo turbulento do sangue", correct: true },
        { text: "Batimento acelerado", correct: false },
        { text: "Inflamação do coração", correct: false },
        { text: "Pressão arterial baixa", correct: false }
      ],
      feedback: "Sopro indica fluxo anormal, muitas vezes por problemas nas válvulas."
    },
    {
      text: "Qual exame visualiza as válvulas do coração em movimento?",
      options: [
        { text: "Ecocardiograma", correct: true },
        { text: "Radiografia torácica", correct: false },
        { text: "Ressonância magnética", correct: false },
        { text: "Eletrocardiograma", correct: false }
      ],
      feedback: "Ecocardiograma usa ultrassom para imagens em tempo real do coração."
    },
    {
      text: "Qual é o principal fator de risco para doenças cardíacas?",
      options: [
        { text: "Hipertensão arterial", correct: true },
        { text: "Resfriado comum", correct: false },
        { text: "Queimaduras", correct: false },
        { text: "Hipotermia", correct: false }
      ],
      feedback: "Pressão alta é um dos principais fatores que levam a problemas cardíacos."
    },
    {
      text: "Qual dessas substâncias pode aumentar o risco de trombose?",
      options: [
        { text: "Colesterol alto", correct: true },
        { text: "Água", correct: false },
        { text: "Oxigênio", correct: false },
        { text: "Vitamina C", correct: false }
      ],
      feedback: "Colesterol alto pode causar placas nas artérias e aumentar trombose."
    },
    {
      text: "Qual é o nome da principal artéria que sai do coração para o corpo?",
      options: [
        { text: "Aorta", correct: true },
        { text: "Veia cava", correct: false },
        { text: "Artéria pulmonar", correct: false },
        { text: "Veia pulmonar", correct: false }
      ],
      feedback: "A aorta distribui sangue oxigenado do coração para todo o corpo."
    }
  ],

  "Pulmões": [
    {
      text: "O paciente está com dificuldade para respirar. Qual é a intervenção mais eficaz?",
      options: [
        { text: "Oxigênio suplementar", correct: false },
        { text: "Broncodilatador", correct: true },
        { text: "Esteroide inalatório", correct: false },
        { text: "Antibiótico", correct: false }
      ],
      feedback: "Broncodilatadores relaxam os músculos das vias aéreas, facilitando a respiração."
    },
    {
      text: "Qual é a principal função dos alvéolos pulmonares?",
      options: [
        { text: "Troca gasosa entre ar e sangue", correct: true },
        { text: "Produção de muco", correct: false },
        { text: "Transporte de oxigênio pelo sangue", correct: false },
        { text: "Filtração do ar inalado", correct: false }
      ],
      feedback: "Alvéolos são onde ocorre a troca de oxigênio e dióxido de carbono."
    },
    {
      text: "Qual músculo é fundamental para a respiração?",
      options: [
        { text: "Diafragma", correct: true },
        { text: "Bíceps", correct: false },
        { text: "Trapezio", correct: false },
        { text: "Quadríceps", correct: false }
      ],
      feedback: "O diafragma se contrai e relaxa para facilitar a entrada e saída de ar."
    },
    {
      text: "Qual dessas doenças é caracterizada pela inflamação crônica dos pulmões?",
      options: [
        { text: "Asma", correct: true },
        { text: "Gripe", correct: false },
        { text: "Câncer de pele", correct: false },
        { text: "Diabetes", correct: false }
      ],
      feedback: "Asma causa inflamação e estreitamento das vias aéreas."
    },
    {
      text: "Qual exame é mais usado para visualizar os pulmões?",
      options: [
        { text: "Radiografia torácica", correct: true },
        { text: "Eletrocardiograma", correct: false },
        { text: "Ultrassom abdominal", correct: false },
        { text: "Ressonância magnética do cérebro", correct: false }
      ],
      feedback: "Raio-X do tórax mostra imagens dos pulmões e estruturas próximas."
    },
    {
      text: "Qual a função da traqueia no sistema respiratório?",
      options: [
        { text: "Conduzir o ar até os pulmões", correct: true },
        { text: "Produzir glóbulos vermelhos", correct: false },
        { text: "Filtrar sangue", correct: false },
        { text: "Bombear sangue", correct: false }
      ],
      feedback: "Traqueia é um tubo que leva o ar da garganta aos pulmões."
    },
    {
      text: "O que causa a pneumonia?",
      options: [
        { text: "Infecção pulmonar", correct: true },
        { text: "Alergia alimentar", correct: false },
        { text: "Exercício físico", correct: false },
        { text: "Estresse", correct: false }
      ],
      feedback: "Pneumonia é uma infecção que inflama os alvéolos pulmonares."
    },
    {
      text: "Qual dessas substâncias pode prejudicar os pulmões?",
      options: [
        { text: "Fumaça do cigarro", correct: true },
        { text: "Água", correct: false },
        { text: "Oxigênio", correct: false },
        { text: "Vitamina C", correct: false }
      ],
      feedback: "Fumar causa danos às vias aéreas e aumenta risco de doenças pulmonares."
    },
    {
      text: "Qual é o nome do processo de entrada de ar nos pulmões?",
      options: [
        { text: "Inspiração", correct: true },
        { text: "Expiração", correct: false },
        { text: "Circulação", correct: false },
        { text: "Difusão", correct: false }
      ],
      feedback: "Inspiração é a entrada de ar nos pulmões durante a respiração."
    },
    {
      text: "O que é bronquite?",
      options: [
        { text: "Inflamação dos brônquios", correct: true },
        { text: "Infecção da pele", correct: false },
        { text: "Dor muscular", correct: false },
        { text: "Problema no coração", correct: false }
      ],
      feedback: "Bronquite causa tosse e dificuldade para respirar por inflamação dos brônquios."
    },
    {
      text: "Qual é o principal gás inalado para o corpo?",
      options: [
        { text: "Oxigênio", correct: true },
        { text: "Dióxido de carbono", correct: false },
        { text: "Nitrogênio", correct: false },
        { text: "Hidrogênio", correct: false }
      ],
      feedback: "O oxigênio é essencial para as células produzirem energia."
    },
    {
      text: "Qual estrutura protege os pulmões de impactos e facilita a respiração?",
      options: [
        { text: "Costelas", correct: true },
        { text: "Fígado", correct: false },
        { text: "Rins", correct: false },
        { text: "Estômago", correct: false }
      ],
      feedback: "As costelas formam a caixa torácica que protege os pulmões."
    },
    {
      text: "O que acontece durante a expiração?",
      options: [
        { text: "O ar é expelido dos pulmões", correct: true },
        { text: "O ar entra nos pulmões", correct: false },
        { text: "O sangue é bombeado", correct: false },
        { text: "Os músculos relaxam", correct: false }
      ],
      feedback: "Expiração é a saída de ar dos pulmões para o ambiente."
    },
    {
      text: "Qual dessas doenças é causada pelo tabagismo?",
      options: [
        { text: "Enfisema pulmonar", correct: true },
        { text: "Gripe", correct: false },
        { text: "Diabetes", correct: false },
        { text: "Hipertensão", correct: false }
      ],
      feedback: "Enfisema destrói os alvéolos e dificulta a respiração."
    },
    {
      text: "O que é a pleura?",
      options: [
        { text: "Membrana que envolve os pulmões", correct: true },
        { text: "Músculo respiratório", correct: false },
        { text: "Parte do coração", correct: false },
        { text: "Válvula pulmonar", correct: false }
      ],
      feedback: "A pleura protege e lubrifica os pulmões para facilitar o movimento."
    },
    {
      text: "Qual é o nome do tubo que conecta a laringe aos pulmões?",
      options: [
        { text: "Traqueia", correct: true },
        { text: "Esôfago", correct: false },
        { text: "Bronquíolo", correct: false },
        { text: "Faringe", correct: false }
      ],
      feedback: "A traqueia transporta o ar da laringe até os pulmões."
    },
    {
      text: "Qual o efeito do dióxido de carbono no corpo?",
      options: [
        { text: "Estimula a respiração para expulsá-lo", correct: true },
        { text: "Transporta oxigênio", correct: false },
        { text: "Produz energia", correct: false },
        { text: "Diminui a frequência cardíaca", correct: false }
      ],
      feedback: "O excesso de CO₂ no sangue faz o corpo respirar mais rápido para eliminá-lo."
    },
    {
      text: "Qual o nome das pequenas ramificações que levam o ar até os alvéolos?",
      options: [
        { text: "Bronquíolos", correct: true },
        { text: "Alvéolos", correct: false },
        { text: "Capilares", correct: false },
        { text: "Vasos linfáticos", correct: false }
      ],
      feedback: "Bronquíolos conduzem o ar até os alvéolos onde ocorre a troca gasosa."
    },
    {
      text: "Qual dessas substâncias pode causar alergia respiratória?",
      options: [
        { text: "Poeira", correct: true },
        { text: "Água", correct: false },
        { text: "Oxigênio", correct: false },
        { text: "Vitamina D", correct: false }
      ],
      feedback: "A poeira pode desencadear crises alérgicas e asma."
    }
  ],
  "Cérebro": [
    {
      text: "Qual é a principal função do córtex cerebral?",
      options: [
        { text: "Processar informações sensoriais", correct: true },
        { text: "Regular a pressão arterial", correct: false },
        { text: "Produzir insulina", correct: false },
        { text: "Controlar os movimentos respiratórios", correct: false }
      ],
      feedback: "O córtex cerebral é responsável pelo processamento complexo de informações."
    },
    {
      text: "Qual dessas áreas está associada à fala?",
      options: [
        { text: "Área de Broca", correct: true },
        { text: "Hipocampo", correct: false },
        { text: "Cerebelo", correct: false },
        { text: "Medula espinhal", correct: false }
      ],
      feedback: "A área de Broca está envolvida na produção da fala."
    },
    {
      text: "O que faz o cerebelo?",
      options: [
        { text: "Coordena os movimentos e equilíbrio", correct: true },
        { text: "Regula a temperatura corporal", correct: false },
        { text: "Controla a respiração", correct: false },
        { text: "Produz hormônios", correct: false }
      ],
      feedback: "O cerebelo é essencial para a coordenação motora e equilíbrio."
    },
    {
      text: "O que é um acidente vascular cerebral (AVC)?",
      options: [
        { text: "Interrupção do fluxo sanguíneo cerebral", correct: true },
        { text: "Inflamação dos pulmões", correct: false },
        { text: "Dano muscular cardíaco", correct: false },
        { text: "Doença renal", correct: false }
      ],
      feedback: "AVC ocorre quando o cérebro fica sem sangue, causando danos."
    },
    {
      text: "Qual parte do cérebro é responsável pela memória?",
      options: [
        { text: "Hipocampo", correct: true },
        { text: "Tálamo", correct: false },
        { text: "Bulbo", correct: false },
        { text: "Ponte", correct: false }
      ],
      feedback: "O hipocampo é fundamental para a formação de novas memórias."
    },
    {
      text: "O que significa neuroplasticidade?",
      options: [
        { text: "Capacidade do cérebro de se reorganizar", correct: true },
        { text: "Perda irreversível de neurônios", correct: false },
        { text: "Produção de neurotransmissores", correct: false },
        { text: "Crescimento de tumores", correct: false }
      ],
      feedback: "Neuroplasticidade permite que o cérebro mude sua estrutura e funções."
    },
    {
      text: "Qual neurotransmissor está relacionado ao prazer?",
      options: [
        { text: "Dopamina", correct: true },
        { text: "GABA", correct: false },
        { text: "Adrenalina", correct: false },
        { text: "Serotonina", correct: false }
      ],
      feedback: "A dopamina é associada a sensações de prazer e recompensa."
    },
    {
      text: "Qual área do cérebro controla funções automáticas como respiração e batimentos cardíacos?",
      options: [
        { text: "Tronco encefálico", correct: true },
        { text: "Córtex pré-frontal", correct: false },
        { text: "Hipocampo", correct: false },
        { text: "Cerebelo", correct: false }
      ],
      feedback: "O tronco encefálico regula funções vitais involuntárias."
    },
    {
      text: "O que é a barreira hematoencefálica?",
      options: [
        { text: "Barreira que protege o cérebro de toxinas", correct: true },
        { text: "Membrana que envolve o coração", correct: false },
        { text: "Revestimento dos pulmões", correct: false },
        { text: "Estrutura do fígado", correct: false }
      ],
      feedback: "Essa barreira impede que substâncias nocivas entrem no cérebro."
    },
    {
      text: "O que causa a doença de Alzheimer?",
      options: [
        { text: "Degeneração progressiva das células cerebrais", correct: true },
        { text: "Inflamação dos pulmões", correct: false },
        { text: "Aumento da pressão arterial", correct: false },
        { text: "Dano renal", correct: false }
      ],
      feedback: "Alzheimer é uma doença neurodegenerativa que afeta a memória e funções cognitivas."
    },
    {
      text: "Qual estrutura cerebral é responsável pelo controle do sono?",
      options: [
        { text: "Hipotálamo", correct: true },
        { text: "Tálamo", correct: false },
        { text: "Cerebelo", correct: false },
        { text: "Medula espinhal", correct: false }
      ],
      feedback: "O hipotálamo regula o ciclo sono-vigília."
    },
    {
      text: "O que é a sinapse?",
      options: [
        { text: "Conexão entre neurônios para transmissão de sinais", correct: true },
        { text: "Célula nervosa", correct: false },
        { text: "Parte do cérebro que controla os movimentos", correct: false },
        { text: "Substância química no sangue", correct: false }
      ],
      feedback: "A sinapse permite que os neurônios comuniquem entre si."
    },
    {
      text: "Qual parte do cérebro processa as emoções?",
      options: [
        { text: "Sistema límbico", correct: true },
        { text: "Córtex occipital", correct: false },
        { text: "Cerebelo", correct: false },
        { text: "Medula espinhal", correct: false }
      ],
      feedback: "O sistema límbico está envolvido no processamento emocional."
    },
    {
      text: "O que significa neurodegeneração?",
      options: [
        { text: "Perda progressiva da função e morte dos neurônios", correct: true },
        { text: "Crescimento de novos neurônios", correct: false },
        { text: "Inflamação temporária do cérebro", correct: false },
        { text: "Estimulação cerebral", correct: false }
      ],
      feedback: "Neurodegeneração está associada a doenças como Parkinson e Alzheimer."
    },
    {
      text: "Qual parte do cérebro controla os movimentos voluntários?",
      options: [
        { text: "Córtex motor", correct: true },
        { text: "Hipocampo", correct: false },
        { text: "Tronco encefálico", correct: false },
        { text: "Sistema límbico", correct: false }
      ],
      feedback: "O córtex motor envia comandos para os músculos se moverem."
    },
    {
      text: "O que é um aneurisma cerebral?",
      options: [
        { text: "Dilatação anormal de uma artéria no cérebro", correct: true },
        { text: "Acúmulo de líquido no cérebro", correct: false },
        { text: "Inflamação do tecido cerebral", correct: false },
        { text: "Bloqueio das vias aéreas", correct: false }
      ],
      feedback: "Aneurismas podem romper e causar hemorragia cerebral."
    },
    {
      text: "Qual é o papel dos neurotransmissores?",
      options: [
        { text: "Transmitir sinais entre neurônios", correct: true },
        { text: "Transportar oxigênio no sangue", correct: false },
        { text: "Produzir hormônios", correct: false },
        { text: "Proteger o cérebro", correct: false }
      ],
      feedback: "Neurotransmissores são moléculas que permitem a comunicação neuronal."
    },
    {
      text: "Qual dessas condições está associada à perda de coordenação motora?",
      options: [
        { text: "Doença de Parkinson", correct: true },
        { text: "Hipertensão arterial", correct: false },
        { text: "Diabetes mellitus", correct: false },
        { text: "Asma", correct: false }
      ],
      feedback: "Parkinson afeta os movimentos e causa tremores e rigidez."
    },
    {
      text: "Qual área cerebral está relacionada à visão?",
      options: [
        { text: "Córtex occipital", correct: true },
        { text: "Córtex frontal", correct: false },
        { text: "Córtex temporal", correct: false },
        { text: "Cerebelo", correct: false }
      ],
      feedback: "O córtex occipital é responsável pelo processamento visual."
    },
    {
      text: "O que é epilepsia?",
      options: [
        { text: "Distúrbio caracterizado por crises elétricas no cérebro", correct: true },
        { text: "Doença cardíaca", correct: false },
        { text: "Infecção pulmonar", correct: false },
        { text: "Problema no fígado", correct: false }
      ],
      feedback: "Epilepsia causa convulsões devido a descargas elétricas anormais."
    }
  ],

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
    },
    {
      text: "Qual dessas substâncias NÃO é produzida pelo fígado?",
      options: [
        { text: "Insulina", correct: true },
        { text: "Albumina", correct: false },
        { text: "Bile", correct: false },
        { text: "Fatores de coagulação", correct: false }
      ],
      feedback: "A insulina é produzida pelo pâncreas, não pelo fígado."
    },
    {
      text: "Qual é o maior órgão interno do corpo humano?",
      options: [
        { text: "Fígado", correct: true },
        { text: "Coração", correct: false },
        { text: "Pulmões", correct: false },
        { text: "Rins", correct: false }
      ],
      feedback: "O fígado é o maior órgão interno do corpo."
    },
    {
      text: "O que é hepatite C?",
      options: [
        { text: "Infecção viral do fígado", correct: true },
        { text: "Doença autoimune dos rins", correct: false },
        { text: "Inflamação do cérebro", correct: false },
        { text: "Problema cardíaco", correct: false }
      ],
      feedback: "Hepatite C é causada por um vírus que afeta o fígado."
    },
    {
      text: "Qual é a função do lobo direito do fígado?",
      options: [
        { text: "Maior parte do fígado, responsável por funções metabólicas", correct: true },
        { text: "Controlar os batimentos cardíacos", correct: false },
        { text: "Filtrar o ar nos pulmões", correct: false },
        { text: "Produzir hormônios sexuais", correct: false }
      ],
      feedback: "O lobo direito é maior e realiza a maior parte das funções do fígado."
    },
    {
      text: "O que é icterícia?",
      options: [
        { text: "Acúmulo de bilirrubina que causa coloração amarelada", correct: true },
        { text: "Dor abdominal intensa", correct: false },
        { text: "Perda de memória", correct: false },
        { text: "Inflamação dos pulmões", correct: false }
      ],
      feedback: "Icterícia deixa a pele e olhos amarelados devido à bilirrubina."
    },
    {
      text: "Qual dessas vitaminas o fígado armazena?",
      options: [
        { text: "Vitamina A", correct: true },
        { text: "Vitamina C", correct: false },
        { text: "Vitamina B12", correct: false },
        { text: "Vitamina D", correct: false }
      ],
      feedback: "O fígado armazena principalmente vitaminas lipossolúveis como a A."
    },
    {
      text: "Qual é o papel do fígado no metabolismo de carboidratos?",
      options: [
        { text: "Regular os níveis de glicose no sangue", correct: true },
        { text: "Produzir insulina", correct: false },
        { text: "Armazenar oxigênio", correct: false },
        { text: "Controlar a pressão arterial", correct: false }
      ],
      feedback: "O fígado armazena glicose em forma de glicogênio e libera conforme necessário."
    },
    {
      text: "Qual dessas doenças está associada ao consumo excessivo de álcool?",
      options: [
        { text: "Cirrose hepática", correct: true },
        { text: "Asma", correct: false },
        { text: "Diabetes", correct: false },
        { text: "Hipertensão", correct: false }
      ],
      feedback: "O álcool em excesso pode causar dano grave ao fígado, incluindo cirrose."
    },
    {
      text: "Qual é o papel do fígado na síntese de proteínas plasmáticas?",
      options: [
        { text: "Produzir albumina e fatores de coagulação", correct: true },
        { text: "Produzir hemoglobina", correct: false },
        { text: "Transportar oxigênio", correct: false },
        { text: "Filtrar toxinas", correct: false }
      ],
      feedback: "O fígado sintetiza proteínas essenciais para o plasma sanguíneo."
    },
    {
      text: "Como o fígado ajuda no controle do colesterol?",
      options: [
        { text: "Produz e elimina colesterol", correct: true },
        { text: "Armazena colesterol para o corpo", correct: false },
        { text: "Não tem papel no colesterol", correct: false },
        { text: "Aumenta o colesterol no sangue", correct: false }
      ],
      feedback: "O fígado regula o colesterol, produzindo e eliminando o excesso."
    }
  ]
};

// Variáveis de controle do jogo
let currentCategory = null;
let currentQuestionIndex = 0;
let userAnswers = []; // Guarda {question, selectedOption, correct, feedback}
const totalQuestions = 20; // Defina o total desejado (ou use o tamanho do array)

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
    "Sistema Tegumentar": "🩹"
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

  // Embaralhar perguntas da categoria
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

// Mostrar resumo final
function showSummary() {
  challengeArea.classList.add("hidden");
  summaryDiv.classList.remove("hidden");
  resultsDiv.innerHTML = "";

  let correctCount = userAnswers.filter(ans => ans.correct).length;

  const scoreParagraph = document.createElement("p");
  scoreParagraph.innerHTML = `<strong>Você acertou ${correctCount} de ${userAnswers.length} perguntas!</strong>`;
  resultsDiv.appendChild(scoreParagraph);

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

// Inicializa botão reiniciar na tela de resumo (botão já incluso no HTML com onclick reload)

// Esconda o resumo inicialmente (certifique-se que o HTML tenha o #summary com classe "hidden")
