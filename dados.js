// Array que contém informações sobre diferentes tipos de robôs
let robos = [
  {
      nome: "Robôs Industriais",
      descricao: "Robôs usados em fábricas para montagem, soldagem, pintura, e outras tarefas repetitivas que exigem precisão.",
      imagem: "imgs/Rôbo Industrial.png" // Caminho para a imagem do robô industrial
  },
  {
      nome: "Robôs de Serviço",
      descricao: "Robôs que realizam tarefas de atendimento ao cliente, limpeza, entrega, e mais, em ambientes públicos e privados.",
      imagem: "imgs/Rôbo de Serviço 2.webp" // Caminho para a imagem do robô de serviço
  },
  {
      nome: "Robôs de Exploração",
      descricao: "Utilizados para explorar ambientes extremos, como o espaço e o fundo do mar, onde o acesso humano é limitado.",
      imagem: "imgs/Rôbo de exploração espacial.jpeg" // Caminho para a imagem do robô de exploração
  },
  {
      nome: "Robôs Educacionais",
      descricao: "Kits e plataformas de robótica que ajudam no ensino de programação, eletrônica e mecânica em escolas e universidades.",
      imagem: "imgs/Rôbo Educacional.jpg" // Caminho para a imagem do robô educacional
  },
  {
      nome: "Robôs Médicos",
      descricao: "Robôs avançados usados em cirurgias e para apoiar médicos em diagnósticos e tratamentos, aumentando a precisão e a segurança.",
      imagem: "imgs/Rôbo Medicinal.jpg" // Caminho para a imagem do robô médico
  }
];

// Array que contém informações sobre diferentes artigos relacionados a robôs
let artigos = [
  {
      titulo: "Robôs Industriais",
      imagem: "imgs/Rôbo Industrial.png",
      descricao: "A revolução industrial 4.0 trouxe consigo uma nova era de automação, onde os robôs industriais se tornaram protagonistas. Essas máquinas programáveis são amplamente utilizadas em fábricas para realizar uma variedade de tarefas, desde a simples montagem de componentes até processos mais complexos como soldagem, pintura e inspeção de qualidade. Sua precisão, velocidade e capacidade de operar 24 horas por dia, 7 dias por semana, os tornam ferramentas indispensáveis para aumentar a produtividade, reduzir custos e melhorar a qualidade dos produtos. Além disso, os robôs industriais podem ser facilmente programados para realizar diferentes tarefas, adaptando-se rapidamente às mudanças nas demandas do mercado.",
      link: "https://blog.kalatec.com.br/robos-industriais/",
      tags: "Industria, Automação, Manufatura, Robótica Avançada, Produção, Eficiência"
  },
  {
      titulo: "Robôs de Serviço",
      imagem: "imgs/Rôbo de Serviço 2.webp",
      descricao: "Os robôs de serviço estão transformando a forma como interagimos com a tecnologia em nosso dia a dia. Além de atender clientes e realizar tarefas de limpeza, esses robôs estão sendo utilizados em hospitais para auxiliar no cuidado com os pacientes, em hotéis para entregar itens aos hóspedes e até mesmo em casas para cuidar de idosos e pessoas com deficiência. A versatilidade dos robôs de serviço é limitada apenas pela nossa imaginação, abrindo um leque de possibilidades para a automação de serviços em diversos setores.",
      link: "https://tt-hardware.com/pt/noticias/como-os-robos-de-servico-transformarao-as-empresas/",
      tags: "Entrega, Atendimento ao Cliente, Assistência, Tecnologia Doméstica, Limpeza, Inovação"
  },
  {
      titulo: "Robôs de Exploração",
      imagem: "imgs/Rôbo de exploração espacial.jpeg",
      descricao: "Os robôs de exploração são verdadeiros pioneiros, adentrando lugares onde os humanos não podem chegar. Além do espaço e do fundo do mar, esses robôs são utilizados em vulcões ativos, cavernas profundas e até mesmo em reatores nucleares. Equipados com sensores e instrumentos de alta precisão, eles coletam dados cruciais sobre a geologia, a biologia e a química desses ambientes extremos, contribuindo para o avanço da ciência em diversas áreas.",
      link: "https://niood.com/pt/o-papel-da-rob%C3%B3tica-em-miss%C3%B5es-espaciais/",
      tags: "Oceano, Pesquisa, Ciência, Tecnologia Espacial, Exploração Subaquática, Aventura"
  },
  {
      titulo: "Robôs Educacionais",
      imagem: "imgs/Rôbo Educacional.jpg",
      descricao: "Os robôs educacionais são ferramentas poderosas que vão além do ensino de programação, eletrônica e mecânica. Ao construir e programar seus próprios robôs, os estudantes desenvolvem habilidades essenciais para o século XXI, como pensamento crítico, resolução de problemas, trabalho em equipe e criatividade. Além disso, a robótica educacional desperta o interesse por STEM (Ciência, Tecnologia, Engenharia e Matemática), áreas fundamentais para o desenvolvimento tecnológico e econômico do país.",
      link: "https://www.scielo.br/j/ciedu/a/TmYj4XSjZ7RQdJm4V6Cwd9v/",
      tags: "Aprendizado, Programação, Robótica Infantil, STEM, Educação Interativa"
  },
  {
      titulo: "Robôs Médicos",
      imagem: "imgs/Rôbo Medicinal.jpg",
      descricao: "Os robôs médicos estão revolucionando a área da saúde, proporcionando maior precisão e menor trauma aos pacientes. Em cirurgias, os robôs permitem movimentos mais precisos e incisões menores, resultando em recuperação mais rápida e menos complicações. Além disso, a visão em 3D e os instrumentos microcirúrgicos controlados por robôs possibilitam a realização de procedimentos complexos com maior segurança e eficiência.",
      link: "https://www.neuralmed.ai/blog/robotica-na-medicina",
      tags: "Cirurgia Robótica, Tecnologia Médica, Cuidados de Saúde, Precisão Cirúrgica, Inovação na Saúde"
  }
];

// Array que contém informações sobre inovações e tendências
let tendencias = [
  {
      titulo: "Automação de Processos com IA",
      descricao: "A integração de Inteligência Artificial com processos automatizados está transformando a forma como as empresas operam, proporcionando eficiência e inovação.",
      link: "https://holmes.app/blog/aplicando-intelig%C3%AAncia-artificial-na-automa%C3%A7%C3%A3o-de-processos"
  },
  {
      titulo: "Robótica Colaborativa",
      descricao: "Robôs projetados para trabalhar ao lado de humanos em ambientes compartilhados, melhorando a produtividade e a segurança no local de trabalho.",
      link: "https://rabbot.co/blog/robotica-colaborativa/"
  },
  {
      titulo: "Impressão 3D em Robótica",
      descricao: "A impressão 3D está permitindo a criação rápida e personalizada de componentes robóticos, reduzindo custos e acelerando o desenvolvimento.",
      link: "https://maha3d.com/o-papel-da-impressao-3d-na-robotica/#:~:text=O%20que%20%C3%A9%20Impress%C3%A3o%203D%3F%20Tamb%C3%A9m%20conhecida%20pelos,se%20ligam%20dando%20origem%20a%20um%20novo%20produto."
  },
  {
      titulo: "Robótica Soft",
      descricao: "A robótica soft utiliza materiais flexíveis para criar robôs que podem interagir de maneira mais segura e adaptável com o ambiente e os humanos.",
      link: "https://escolalbk.com.br/glossario/o-que-e-soft-robotics/"
  }
];

// Array que contém informações sobre eventos e webinars
let eventos = [
  {
      titulo: "Webinar sobre Robótica Avançada",
      descricao: "Uma discussão detalhada sobre as últimas inovações em robótica avançada, incluindo novos desenvolvimentos e aplicações práticas.",
      data: "15 de Outubro, 2024",
      link: "https://webinar-robotica-avancada.com"
  },
  {
      titulo: "Conferência de Inovação Tecnológica",
      descricao: "Conferência anual destacando as mais recentes tendências em tecnologia e inovação, com palestrantes renomados da indústria.",
      data: "30 de Novembro, 2024",
      link: "https://conferencia-tecnologia.com"
  },
  {
      titulo: "Workshop de Robótica Educacional",
      descricao: "Workshop prático para educadores interessados em implementar robótica e programação em suas aulas.",
      data: "20 de Novembro, 2024",
      link: "https://workshop-robotica-educacional.com"
  },
  {
      titulo: "Fórum sobre Robótica Médica",
      descricao: "Fórum que reúne especialistas e profissionais da saúde para discutir as últimas inovações e desafios na robótica médica.",
      data: "5 de Dezembro, 2024",
      link: "https://forum-robotica-medica.com"
  }
];
