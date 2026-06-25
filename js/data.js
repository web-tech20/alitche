// ============================================
// ALITCHÉ - Données du test de personnalité
// ============================================

// Les 15 questions du test optimisé
const QUESTIONS = [
  {
    id: 1,
    dimension: "Analyse & Logique",
    text: "Quand tu dois résoudre un problème compliqué, tu préfères :",
    options: [
      { text: "Analyser les données et trouver la solution logique", dimension: "Analyse & Logique", points: 20 },
      { text: "Demander l'avis des autres", dimension: "Empathie & Collaboration", points: 20 },
      { text: "Essayer différentes approches créatives", dimension: "Créativité & Innovation", points: 20 },
      { text: "Agir rapidement sans trop réfléchir", dimension: "Ambition & Entrepreneuriat", points: 20 }
    ]
  },
  {
    id: 2,
    dimension: "Analyse & Logique",
    text: "Tes amis te décrivent comme quelqu'un qui :",
    options: [
      { text: "Comprend facilement les concepts complexes", dimension: "Analyse & Logique", points: 20 },
      { text: "Est toujours prêt à aider", dimension: "Empathie & Collaboration", points: 20 },
      { text: "Pense différemment et propose des idées originales", dimension: "Créativité & Innovation", points: 20 },
      { text: "Fonce et prend des risques", dimension: "Ambition & Entrepreneuriat", points: 20 }
    ]
  },
  {
    id: 3,
    dimension: "Analyse & Logique",
    text: "Dans tes études, tu excelles surtout en :",
    options: [
      { text: "Mathématiques, sciences, informatique", dimension: "Analyse & Logique", points: 20 },
      { text: "Littérature, langues, histoire", dimension: "Communication & Leadership", points: 20 },
      { text: "Arts, musique, design", dimension: "Créativité & Innovation", points: 20 },
      { text: "Sports, leadership, projets", dimension: "Ambition & Entrepreneuriat", points: 20 }
    ]
  },
  {
    id: 4,
    dimension: "Créativité & Innovation",
    text: "Quand on te propose un projet, tu aimes :",
    options: [
      { text: "Suivre les instructions exactement", dimension: "Analyse & Logique", points: 20 },
      { text: "Proposer une approche complètement nouvelle", dimension: "Créativité & Innovation", points: 20 },
      { text: "Collaborer avec d'autres pour trouver la meilleure solution", dimension: "Empathie & Collaboration", points: 20 },
      { text: "Prendre le leadership et diriger le projet", dimension: "Communication & Leadership", points: 20 }
    ]
  },
  {
    id: 5,
    dimension: "Créativité & Innovation",
    text: "Ta façon de penser est plutôt :",
    options: [
      { text: "Logique et structurée", dimension: "Analyse & Logique", points: 20 },
      { text: "Créative et imaginative", dimension: "Créativité & Innovation", points: 20 },
      { text: "Empathique et intuitive", dimension: "Empathie & Collaboration", points: 20 },
      { text: "Ambitieuse et compétitive", dimension: "Ambition & Entrepreneuriat", points: 20 }
    ]
  },
  {
    id: 6,
    dimension: "Créativité & Innovation",
    text: "Ton environnement idéal de travail serait :",
    options: [
      { text: "Un bureau calme où je peux me concentrer", dimension: "Analyse & Logique", points: 20 },
      { text: "Un espace créatif avec des gens innovants", dimension: "Créativité & Innovation", points: 20 },
      { text: "Un environnement collaboratif et bienveillant", dimension: "Empathie & Collaboration", points: 20 },
      { text: "Un environnement dynamique et compétitif", dimension: "Ambition & Entrepreneuriat", points: 20 }
    ]
  },
  {
    id: 7,
    dimension: "Communication & Leadership",
    text: "En groupe, tu aimes naturellement :",
    options: [
      { text: "Analyser les données et proposer des solutions", dimension: "Analyse & Logique", points: 20 },
      { text: "Proposer des idées créatives", dimension: "Créativité & Innovation", points: 20 },
      { text: "Prendre la parole et diriger", dimension: "Communication & Leadership", points: 20 },
      { text: "Écouter et soutenir les autres", dimension: "Empathie & Collaboration", points: 20 }
    ]
  },
  {
    id: 8,
    dimension: "Communication & Leadership",
    text: "Quand il y a un désaccord, tu :",
    options: [
      { text: "Présentes les faits objectivement", dimension: "Analyse & Logique", points: 20 },
      { text: "Cherches une solution créative", dimension: "Créativité & Innovation", points: 20 },
      { text: "Écoutes les deux côtés et cherches un compromis", dimension: "Empathie & Collaboration", points: 20 },
      { text: "Prends une décision rapide et avances", dimension: "Communication & Leadership", points: 20 }
    ]
  },
  {
    id: 9,
    dimension: "Communication & Leadership",
    text: "Tes collègues te voient comme :",
    options: [
      { text: "La personne fiable et organisée", dimension: "Analyse & Logique", points: 20 },
      { text: "La personne créative et originale", dimension: "Créativité & Innovation", points: 20 },
      { text: "Le leader naturel", dimension: "Communication & Leadership", points: 20 },
      { text: "La personne empathique et supportive", dimension: "Empathie & Collaboration", points: 20 }
    ]
  },
  {
    id: 10,
    dimension: "Empathie & Collaboration",
    text: "Quand un ami a un problème, tu :",
    options: [
      { text: "Proposes une solution logique", dimension: "Analyse & Logique", points: 20 },
      { text: "L'écoutes vraiment et le soutiens", dimension: "Empathie & Collaboration", points: 20 },
      { text: "Essaies de le motiver et le pousser à agir", dimension: "Ambition & Entrepreneuriat", points: 20 },
      { text: "Partages une expérience similaire", dimension: "Communication & Leadership", points: 20 }
    ]
  },
  {
    id: 11,
    dimension: "Empathie & Collaboration",
    text: "Tu aimes travailler :",
    options: [
      { text: "Seul sur des projets individuels", dimension: "Analyse & Logique", points: 20 },
      { text: "En équipe où chacun apporte ses talents", dimension: "Empathie & Collaboration", points: 20 },
      { text: "Avec des gens que tu peux inspirer", dimension: "Communication & Leadership", points: 20 },
      { text: "Avec des gens créatifs et innovants", dimension: "Créativité & Innovation", points: 20 }
    ]
  },
  {
    id: 12,
    dimension: "Empathie & Collaboration",
    text: "Ce qui te motive le plus au travail est :",
    options: [
      { text: "Résoudre des problèmes complexes", dimension: "Analyse & Logique", points: 20 },
      { text: "Aider les gens et faire une différence", dimension: "Empathie & Collaboration", points: 20 },
      { text: "Créer quelque chose de nouveau", dimension: "Créativité & Innovation", points: 20 },
      { text: "Réussir et progresser rapidement", dimension: "Ambition & Entrepreneuriat", points: 20 }
    ]
  },
  {
    id: 13,
    dimension: "Ambition & Entrepreneuriat",
    text: "Ton rêve de carrière est plutôt :",
    options: [
      { text: "Devenir expert dans ton domaine", dimension: "Analyse & Logique", points: 20 },
      { text: "Créer ta propre entreprise", dimension: "Ambition & Entrepreneuriat", points: 20 },
      { text: "Aider les gens à travers ton travail", dimension: "Empathie & Collaboration", points: 20 },
      { text: "Innover et changer les choses", dimension: "Créativité & Innovation", points: 20 }
    ]
  },
  {
    id: 14,
    dimension: "Ambition & Entrepreneuriat",
    text: "Face à un risque, tu :",
    options: [
      { text: "Analyses les conséquences avant de décider", dimension: "Analyse & Logique", points: 20 },
      { text: "Fonces si tu crois au projet", dimension: "Ambition & Entrepreneuriat", points: 20 },
      { text: "Cherches le conseil des autres", dimension: "Empathie & Collaboration", points: 20 },
      { text: "Cherches une approche créative pour minimiser le risque", dimension: "Créativité & Innovation", points: 20 }
    ]
  },
  {
    id: 15,
    dimension: "Ambition & Entrepreneuriat",
    text: "Dans 5 ans, tu te vois :",
    options: [
      { text: "Expert reconnu dans ton domaine", dimension: "Analyse & Logique", points: 20 },
      { text: "Entrepreneur avec ta propre business", dimension: "Ambition & Entrepreneuriat", points: 20 },
      { text: "Leader d'une équipe ou organisation", dimension: "Communication & Leadership", points: 20 },
      { text: "Créateur/innovateur dans ton secteur", dimension: "Créativité & Innovation", points: 20 }
    ]
  }
];

// Les 5 dimensions
const DIMENSIONS = [
  {
    key: "Analyse & Logique",
    short: "Analyse",
    color: "#5B2FE0",
    bgColor: "#EFEAFB",
    icon: "🧠",
    description: "Capacité à résoudre des problèmes, analyser des données et penser de manière structurée."
  },
  {
    key: "Créativité & Innovation",
    short: "Créativité",
    color: "#1452C8",
    bgColor: "#EFF6FF",
    icon: "✨",
    description: "Capacité à générer des idées, innover et penser différemment."
  },
  {
    key: "Communication & Leadership",
    short: "Leadership",
    color: "#F2A93B",
    bgColor: "#FFF6E1",
    icon: "📢",
    description: "Capacité à communiquer, influencer, diriger et inspirer les autres."
  },
  {
    key: "Empathie & Collaboration",
    short: "Empathie",
    color: "#E5525C",
    bgColor: "#FDECEC",
    icon: "🤝",
    description: "Capacité à travailler en équipe, comprendre les autres et collaborer."
  },
  {
    key: "Ambition & Entrepreneuriat",
    short: "Ambition",
    color: "#7C3AED",
    bgColor: "#F3E8FF",
    icon: "🚀",
    description: "Capacité à prendre des risques, créer, entreprendre et viser haut."
  }
];

// Profils types
const PROFILES = [
  {
    name: "L'Analyste",
    primaryDimension: "Analyse & Logique",
    threshold: 60,
    description: "Tu es une personne analytique et logique. Tu excelles dans la résolution de problèmes complexes et la compréhension des concepts abstraits. Ton esprit structuré te permet de voir des patterns là où d'autres voient du chaos.",
    strengths: ["Esprit logique", "Résolution de problèmes", "Capacité d'analyse", "Rigueur intellectuelle"],
    toDevelop: ["Communication", "Créativité", "Travail en équipe"]
  },
  {
    name: "Le Créatif",
    primaryDimension: "Créativité & Innovation",
    threshold: 60,
    description: "Tu es une personne créative et innovante. Tu penses différemment et proposes des idées originales. Tu excelles dans les environnements qui valorisent l'imagination et l'innovation.",
    strengths: ["Imagination", "Pensée originale", "Innovation", "Sens artistique"],
    toDevelop: ["Structure", "Organisation", "Réalisme"]
  },
  {
    name: "Le Leader",
    primaryDimension: "Communication & Leadership",
    threshold: 60,
    description: "Tu es un leader naturel. Tu communiques avec aisance, tu sais diriger une équipe et inspirer les autres. Tu excelles dans les rôles qui demandent de prendre des décisions et de motiver un groupe.",
    strengths: ["Leadership", "Communication", "Capacité de décision", "Influence"],
    toDevelop: ["Écoute", "Patience", "Empathie"]
  },
  {
    name: "L'Empathique",
    primaryDimension: "Empathie & Collaboration",
    threshold: 60,
    description: "Tu es une personne empathique et collaborative. Tu comprends les autres, tu sais travailler en équipe et tu crées un environnement bienveillant. Tu excelles dans les métiers de relation humaine.",
    strengths: ["Empathie", "Travail en équipe", "Écoute", "Bienveillance"],
    toDevelop: ["Affirmation de soi", "Prise de décision", "Leadership"]
  },
  {
    name: "L'Entrepreneur",
    primaryDimension: "Ambition & Entrepreneuriat",
    threshold: 60,
    description: "Tu es une personne ambitieuse et entrepreneante. Tu aimes prendre des risques calculés, créer et innover. Tu excelles dans les environnements dynamiques où tu peux donner vie à tes idées.",
    strengths: ["Ambition", "Esprit d'initiative", "Capacité de risque", "Détermination"],
    toDevelop: ["Patience", "Planification", "Écoute des autres"]
  }
];

// Métiers recommandés (50 métiers pour le Bénin)
const CAREERS = [
  // TECHNOLOGIE & INFORMATIQUE
  {
    name: "Développeur Web/Mobile",
    category: "Technologie & Informatique",
    salary: "250 000 - 500 000 FCFA/mois",
    demand: "Très élevée",
    demandGrowth: "40%/an",
    skills: ["Analyse & Logique", "Créativité & Innovation", "Communication & Leadership"],
    fields: ["Informatique", "Génie Logiciel"],
    schools: ["EPAC", "UNSTIM", "ENSI"]
  },
  {
    name: "Data Scientist / Analyste de Données",
    category: "Technologie & Informatique",
    salary: "300 000 - 600 000 FCFA/mois",
    demand: "Très élevée",
    demandGrowth: "50%/an",
    skills: ["Analyse & Logique", "Créativité & Innovation"],
    fields: ["Informatique", "Mathématiques", "Statistiques"],
    schools: ["UNSTIM", "ENSI", "Université d'Abomey-Calavi"]
  },
  {
    name: "Ingénieur IA / Machine Learning",
    category: "Technologie & Informatique",
    salary: "400 000 - 800 000 FCFA/mois",
    demand: "Très élevée",
    demandGrowth: "60%/an",
    skills: ["Analyse & Logique", "Créativité & Innovation", "Ambition & Entrepreneuriat"],
    fields: ["Informatique", "Génie Logiciel", "Mathématiques"],
    schools: ["UNSTIM", "ENSI"]
  },
  {
    name: "Administrateur Réseau/Système",
    category: "Technologie & Informatique",
    salary: "200 000 - 400 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "25%/an",
    skills: ["Analyse & Logique", "Communication & Leadership"],
    fields: ["Informatique", "Réseaux"],
    schools: ["EPAC", "UNSTIM"]
  },
  {
    name: "Développeur Full Stack",
    category: "Technologie & Informatique",
    salary: "280 000 - 550 000 FCFA/mois",
    demand: "Très élevée",
    demandGrowth: "45%/an",
    skills: ["Analyse & Logique", "Créativité & Innovation", "Ambition & Entrepreneuriat"],
    fields: ["Informatique", "Génie Logiciel"],
    schools: ["EPAC", "UNSTIM", "ENSI"]
  },
  {
    name: "Consultant IT",
    category: "Technologie & Informatique",
    salary: "350 000 - 700 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "30%/an",
    skills: ["Analyse & Logique", "Communication & Leadership", "Ambition & Entrepreneuriat"],
    fields: ["Informatique", "Gestion"],
    schools: ["UNSTIM", "Université d'Abomey-Calavi"]
  },
  {
    name: "Spécialiste Cybersécurité",
    category: "Technologie & Informatique",
    salary: "350 000 - 700 000 FCFA/mois",
    demand: "Très élevée",
    demandGrowth: "55%/an",
    skills: ["Analyse & Logique", "Ambition & Entrepreneuriat"],
    fields: ["Informatique", "Cybersécurité"],
    schools: ["UNSTIM", "ENSI"]
  },
  {
    name: "Développeur Jeux Vidéo",
    category: "Technologie & Informatique",
    salary: "200 000 - 450 000 FCFA/mois",
    demand: "Moyenne",
    demandGrowth: "20%/an",
    skills: ["Créativité & Innovation", "Analyse & Logique", "Ambition & Entrepreneuriat"],
    fields: ["Informatique", "Design Graphique"],
    schools: ["EPAC", "UNSTIM"]
  },
  {
    name: "Architecte Logiciel",
    category: "Technologie & Informatique",
    salary: "400 000 - 800 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "35%/an",
    skills: ["Analyse & Logique", "Communication & Leadership", "Ambition & Entrepreneuriat"],
    fields: ["Informatique", "Génie Logiciel"],
    schools: ["UNSTIM", "ENSI"]
  },
  {
    name: "Spécialiste Cloud Computing",
    category: "Technologie & Informatique",
    salary: "300 000 - 600 000 FCFA/mois",
    demand: "Très élevée",
    demandGrowth: "50%/an",
    skills: ["Analyse & Logique", "Communication & Leadership"],
    fields: ["Informatique", "Réseaux"],
    schools: ["UNSTIM", "ENSI"]
  },

  // DONNÉES & STATISTIQUES
  {
    name: "Statisticien",
    category: "Données & Statistiques",
    salary: "250 000 - 500 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "30%/an",
    skills: ["Analyse & Logique", "Communication & Leadership"],
    fields: ["Mathématiques", "Statistiques"],
    schools: ["Université d'Abomey-Calavi", "Université de Parakou"]
  },
  {
    name: "Analyste Financier",
    category: "Données & Statistiques",
    salary: "300 000 - 600 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "25%/an",
    skills: ["Analyse & Logique", "Ambition & Entrepreneuriat"],
    fields: ["Finance", "Économie", "Mathématiques"],
    schools: ["Université d'Abomey-Calavi", "ENEAM"]
  },
  {
    name: "Économiste",
    category: "Données & Statistiques",
    salary: "250 000 - 500 000 FCFA/mois",
    demand: "Moyenne",
    demandGrowth: "15%/an",
    skills: ["Analyse & Logique", "Communication & Leadership"],
    fields: ["Économie", "Gestion"],
    schools: ["Université d'Abomey-Calavi", "Université de Parakou"]
  },
  {
    name: "Actuaire",
    category: "Données & Statistiques",
    salary: "350 000 - 700 000 FCFA/mois",
    demand: "Moyenne",
    demandGrowth: "20%/an",
    skills: ["Analyse & Logique", "Ambition & Entrepreneuriat"],
    fields: ["Mathématiques", "Actuariat"],
    schools: ["Université d'Abomey-Calavi"]
  },
  {
    name: "Chercheur en Mathématiques",
    category: "Données & Statistiques",
    salary: "200 000 - 400 000 FCFA/mois",
    demand: "Faible",
    demandGrowth: "10%/an",
    skills: ["Analyse & Logique", "Créativité & Innovation"],
    fields: ["Mathématiques", "Recherche"],
    schools: ["Université d'Abomey-Calavi", "UNSTIM"]
  },

  // INGÉNIERIE & CONSTRUCTION
  {
    name: "Ingénieur Civil",
    category: "Ingénierie & Construction",
    salary: "250 000 - 500 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "25%/an",
    skills: ["Analyse & Logique", "Communication & Leadership", "Ambition & Entrepreneuriat"],
    fields: ["Génie Civil", "Construction"],
    schools: ["EPAC", "UNSTIM", "Université d'Abomey-Calavi"]
  },
  {
    name: "Ingénieur Électricien",
    category: "Ingénierie & Construction",
    salary: "250 000 - 500 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "20%/an",
    skills: ["Analyse & Logique", "Communication & Leadership"],
    fields: ["Génie Électrique", "Électronique"],
    schools: ["EPAC", "UNSTIM"]
  },
  {
    name: "Ingénieur Mécanique",
    category: "Ingénierie & Construction",
    salary: "250 000 - 500 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "22%/an",
    skills: ["Analyse & Logique", "Créativité & Innovation"],
    fields: ["Génie Mécanique", "Automatisation"],
    schools: ["EPAC", "UNSTIM"]
  },
  {
    name: "Architecte",
    category: "Ingénierie & Construction",
    salary: "300 000 - 600 000 FCFA/mois",
    demand: "Moyenne",
    demandGrowth: "18%/an",
    skills: ["Créativité & Innovation", "Communication & Leadership", "Ambition & Entrepreneuriat"],
    fields: ["Architecture", "Design"],
    schools: ["EPAC", "Université d'Abomey-Calavi"]
  },
  {
    name: "Ingénieur Environnement",
    category: "Ingénierie & Construction",
    salary: "220 000 - 450 000 FCFA/mois",
    demand: "Moyenne",
    demandGrowth: "20%/an",
    skills: ["Analyse & Logique", "Empathie & Collaboration", "Communication & Leadership"],
    fields: ["Génie Environnemental", "Développement Durable"],
    schools: ["UNSTIM", "Université d'Abomey-Calavi"]
  },
  {
    name: "Ingénieur Agronome",
    category: "Ingénierie & Construction",
    salary: "180 000 - 400 000 FCFA/mois",
    demand: "Moyenne",
    demandGrowth: "15%/an",
    skills: ["Analyse & Logique", "Empathie & Collaboration", "Communication & Leadership"],
    fields: ["Agronomie", "Agriculture"],
    schools: ["Université de Parakou", "Université d'Abomey-Calavi"]
  },
  {
    name: "Ingénieur Télécommunications",
    category: "Ingénierie & Construction",
    salary: "280 000 - 550 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "30%/an",
    skills: ["Analyse & Logique", "Communication & Leadership"],
    fields: ["Télécommunications", "Réseaux"],
    schools: ["UNSTIM", "EPAC"]
  },
  {
    name: "Ingénieur Énergies Renouvelables",
    category: "Ingénierie & Construction",
    salary: "250 000 - 500 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "40%/an",
    skills: ["Analyse & Logique", "Ambition & Entrepreneuriat", "Empathie & Collaboration"],
    fields: ["Génie Énergétique", "Énergies Renouvelables"],
    schools: ["UNSTIM", "Université d'Abomey-Calavi"]
  },

  // SANTÉ & SCIENCES
  {
    name: "Médecin",
    category: "Santé & Sciences",
    salary: "300 000 - 600 000 FCFA/mois",
    demand: "Très élevée",
    demandGrowth: "25%/an",
    skills: ["Analyse & Logique", "Empathie & Collaboration", "Communication & Leadership"],
    fields: ["Médecine"],
    schools: ["Université d'Abomey-Calavi", "Université de Parakou"]
  },
  {
    name: "Infirmier",
    category: "Santé & Sciences",
    salary: "150 000 - 300 000 FCFA/mois",
    demand: "Très élevée",
    demandGrowth: "30%/an",
    skills: ["Empathie & Collaboration", "Communication & Leadership", "Ambition & Entrepreneuriat"],
    fields: ["Infirmerie", "Santé"],
    schools: ["Écoles d'Infirmerie", "Université d'Abomey-Calavi"]
  },
  {
    name: "Pharmacien",
    category: "Santé & Sciences",
    salary: "250 000 - 500 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "20%/an",
    skills: ["Analyse & Logique", "Communication & Leadership", "Empathie & Collaboration"],
    fields: ["Pharmacie"],
    schools: ["Université d'Abomey-Calavi"]
  },
  {
    name: "Biologiste / Chercheur",
    category: "Santé & Sciences",
    salary: "200 000 - 400 000 FCFA/mois",
    demand: "Moyenne",
    demandGrowth: "15%/an",
    skills: ["Analyse & Logique", "Créativité & Innovation"],
    fields: ["Biologie", "Sciences"],
    schools: ["Université d'Abomey-Calavi", "Université de Parakou"]
  },
  {
    name: "Psychologue",
    category: "Santé & Sciences",
    salary: "180 000 - 350 000 FCFA/mois",
    demand: "Moyenne",
    demandGrowth: "18%/an",
    skills: ["Empathie & Collaboration", "Communication & Leadership", "Analyse & Logique"],
    fields: ["Psychologie"],
    schools: ["Université d'Abomey-Calavi"]
  },
  {
    name: "Vétérinaire",
    category: "Santé & Sciences",
    salary: "200 000 - 400 000 FCFA/mois",
    demand: "Moyenne",
    demandGrowth: "15%/an",
    skills: ["Analyse & Logique", "Empathie & Collaboration", "Communication & Leadership"],
    fields: ["Médecine Vétérinaire"],
    schools: ["Université de Parakou"]
  },
  {
    name: "Chimiste",
    category: "Santé & Sciences",
    salary: "200 000 - 400 000 FCFA/mois",
    demand: "Moyenne",
    demandGrowth: "18%/an",
    skills: ["Analyse & Logique", "Créativité & Innovation"],
    fields: ["Chimie", "Sciences"],
    schools: ["Université d'Abomey-Calavi", "Université de Parakou"]
  },

  // BUSINESS & ENTREPRENEURIAT
  {
    name: "Entrepreneur / Créateur d'Entreprise",
    category: "Business & Entrepreneuriat",
    salary: "Variable (200 000 - 1 000 000+ FCFA/mois)",
    demand: "Très élevée",
    demandGrowth: "50%/an",
    skills: ["Ambition & Entrepreneuriat", "Créativité & Innovation", "Communication & Leadership"],
    fields: ["Gestion", "Entrepreneuriat"],
    schools: ["ENEAM", "Université d'Abomey-Calavi"]
  },
  {
    name: "Manager / Directeur Général",
    category: "Business & Entrepreneuriat",
    salary: "400 000 - 800 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "20%/an",
    skills: ["Communication & Leadership", "Ambition & Entrepreneuriat", "Analyse & Logique"],
    fields: ["Gestion", "Management"],
    schools: ["ENEAM", "Université d'Abomey-Calavi"]
  },
  {
    name: "Consultant en Gestion",
    category: "Business & Entrepreneuriat",
    salary: "350 000 - 700 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "25%/an",
    skills: ["Analyse & Logique", "Communication & Leadership", "Ambition & Entrepreneuriat"],
    fields: ["Gestion", "Consulting"],
    schools: ["ENEAM", "Université d'Abomey-Calavi"]
  },
  {
    name: "Responsable Marketing",
    category: "Business & Entrepreneuriat",
    salary: "250 000 - 500 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "30%/an",
    skills: ["Créativité & Innovation", "Communication & Leadership", "Ambition & Entrepreneuriat"],
    fields: ["Marketing", "Communication"],
    schools: ["ENEAM", "Université d'Abomey-Calavi"]
  },
  {
    name: "Responsable Ressources Humaines",
    category: "Business & Entrepreneuriat",
    salary: "250 000 - 500 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "25%/an",
    skills: ["Empathie & Collaboration", "Communication & Leadership", "Ambition & Entrepreneuriat"],
    fields: ["Gestion", "RH"],
    schools: ["ENEAM", "Université d'Abomey-Calavi"]
  },
  {
    name: "Responsable Ventes",
    category: "Business & Entrepreneuriat",
    salary: "200 000 - 450 000 FCFA/mois + commissions",
    demand: "Très élevée",
    demandGrowth: "35%/an",
    skills: ["Communication & Leadership", "Ambition & Entrepreneuriat", "Empathie & Collaboration"],
    fields: ["Ventes", "Commerce"],
    schools: ["ENEAM", "Université d'Abomey-Calavi"]
  },
  {
    name: "Comptable / Auditeur",
    category: "Business & Entrepreneuriat",
    salary: "250 000 - 500 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "20%/an",
    skills: ["Analyse & Logique", "Communication & Leadership"],
    fields: ["Comptabilité", "Finance"],
    schools: ["ENEAM", "Université d'Abomey-Calavi"]
  },
  {
    name: "Responsable Supply Chain",
    category: "Business & Entrepreneuriat",
    salary: "280 000 - 550 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "25%/an",
    skills: ["Analyse & Logique", "Communication & Leadership", "Ambition & Entrepreneuriat"],
    fields: ["Logistique", "Gestion"],
    schools: ["ENEAM", "Université d'Abomey-Calavi"]
  },

  // ÉDUCATION & FORMATION
  {
    name: "Professeur / Enseignant",
    category: "Éducation & Formation",
    salary: "150 000 - 300 000 FCFA/mois",
    demand: "Très élevée",
    demandGrowth: "20%/an",
    skills: ["Communication & Leadership", "Empathie & Collaboration", "Ambition & Entrepreneuriat"],
    fields: ["Éducation", "Pédagogie"],
    schools: ["Écoles Normales", "Université d'Abomey-Calavi"]
  },
  {
    name: "Formateur Professionnel",
    category: "Éducation & Formation",
    salary: "200 000 - 400 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "25%/an",
    skills: ["Communication & Leadership", "Empathie & Collaboration", "Créativité & Innovation"],
    fields: ["Formation", "Pédagogie"],
    schools: ["Centres de Formation", "Université d'Abomey-Calavi"]
  },
  {
    name: "Conseiller d'Orientation",
    category: "Éducation & Formation",
    salary: "180 000 - 350 000 FCFA/mois",
    demand: "Moyenne",
    demandGrowth: "20%/an",
    skills: ["Empathie & Collaboration", "Communication & Leadership", "Analyse & Logique"],
    fields: ["Psychologie", "Éducation"],
    schools: ["Université d'Abomey-Calavi"]
  },
  {
    name: "Directeur d'Établissement Scolaire",
    category: "Éducation & Formation",
    salary: "300 000 - 600 000 FCFA/mois",
    demand: "Moyenne",
    demandGrowth: "15%/an",
    skills: ["Communication & Leadership", "Ambition & Entrepreneuriat", "Analyse & Logique"],
    fields: ["Gestion", "Éducation"],
    schools: ["Université d'Abomey-Calavi"]
  },
  {
    name: "Concepteur Pédagogique",
    category: "Éducation & Formation",
    salary: "220 000 - 450 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "30%/an",
    skills: ["Créativité & Innovation", "Communication & Leadership", "Analyse & Logique"],
    fields: ["Éducation", "Design Pédagogique"],
    schools: ["Université d'Abomey-Calavi"]
  },

  // ARTS & DESIGN
  {
    name: "Designer Graphique",
    category: "Arts & Design",
    salary: "180 000 - 350 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "35%/an",
    skills: ["Créativité & Innovation", "Communication & Leadership"],
    fields: ["Design Graphique", "Arts"],
    schools: ["EPAC", "Université d'Abomey-Calavi"]
  },
  {
    name: "Photographe / Vidéographe",
    category: "Arts & Design",
    salary: "150 000 - 300 000 FCFA/mois",
    demand: "Moyenne",
    demandGrowth: "25%/an",
    skills: ["Créativité & Innovation", "Communication & Leadership"],
    fields: ["Photographie", "Audiovisuel"],
    schools: ["Écoles d'Arts", "EPAC"]
  },
  {
    name: "Musicien / Compositeur",
    category: "Arts & Design",
    salary: "100 000 - 250 000 FCFA/mois",
    demand: "Faible",
    demandGrowth: "10%/an",
    skills: ["Créativité & Innovation", "Communication & Leadership"],
    fields: ["Musique", "Arts"],
    schools: ["Conservatoires", "Université d'Abomey-Calavi"]
  },
  {
    name: "Illustrateur / Animateur",
    category: "Arts & Design",
    salary: "180 000 - 350 000 FCFA/mois",
    demand: "Moyenne",
    demandGrowth: "20%/an",
    skills: ["Créativité & Innovation", "Ambition & Entrepreneuriat"],
    fields: ["Animation", "Arts"],
    schools: ["EPAC", "Écoles d'Arts"]
  },
  {
    name: "Maquettiste / Infographiste",
    category: "Arts & Design",
    salary: "200 000 - 400 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "30%/an",
    skills: ["Créativité & Innovation", "Analyse & Logique"],
    fields: ["Design", "Infographie"],
    schools: ["EPAC", "Université d'Abomey-Calavi"]
  },

  // MÉDIAS & COMMUNICATION
  {
    name: "Journaliste",
    category: "Médias & Communication",
    salary: "180 000 - 350 000 FCFA/mois",
    demand: "Moyenne",
    demandGrowth: "15%/an",
    skills: ["Communication & Leadership", "Créativité & Innovation", "Ambition & Entrepreneuriat"],
    fields: ["Journalisme", "Communication"],
    schools: ["Université d'Abomey-Calavi", "Écoles de Médias"]
  },
  {
    name: "Responsable Communication",
    category: "Médias & Communication",
    salary: "250 000 - 500 000 FCFA/mois",
    demand: "Élevée",
    demandGrowth: "25%/an",
    skills: ["Communication & Leadership", "Créativité & Innovation", "Ambition & Entrepreneuriat"],
    fields: ["Communication", "Marketing"],
    schools: ["Université d'Abomey-Calavi", "ENEAM"]
  }
];

// Établissements au Bénin
const SCHOOLS = [
  {
    name: "UNSTIM",
    fullName: "Université Nationale des Sciences, Technologies et Ingénierie du Bénin",
    fields: ["Informatique", "Génie Logiciel", "Génie Civil", "Génie Électrique", "Génie Mécanique", "Télécommunications", "Énergies Renouvelables", "Mathématiques"],
    duration: "3-5 ans",
    cost: "500 000 - 1 500 000 FCFA/an"
  },
  {
    name: "EPAC",
    fullName: "École Polytechnique d'Abomey-Calavi",
    fields: ["Génie Civil", "Génie Électrique", "Génie Mécanique", "Architecture", "Informatique", "Génie des Procédés"],
    duration: "3-5 ans",
    cost: "600 000 - 1 800 000 FCFA/an"
  },
  {
    name: "ENSI",
    fullName: "École Nationale Supérieure d'Informatique",
    fields: ["Informatique", "Génie Logiciel", "Cybersécurité", "Cloud Computing"],
    duration: "3-5 ans",
    cost: "700 000 - 1 500 000 FCFA/an"
  },
  {
    name: "UAC",
    fullName: "Université d'Abomey-Calavi",
    fields: ["Médecine", "Pharmacie", "Infirmerie", "Psychologie", "Éducation", "Économie", "Gestion", "Biologie", "Chimie", "Mathématiques", "Droit", "Littérature"],
    duration: "3-6 ans",
    cost: "300 000 - 1 000 000 FCFA/an"
  },
  {
    name: "ENEAM",
    fullName: "École Nationale d'Économie, d'Administration et de Management",
    fields: ["Gestion", "Management", "Finance", "Comptabilité", "Marketing", "RH", "Entrepreneuriat"],
    duration: "3-5 ans",
    cost: "500 000 - 1 200 000 FCFA/an"
  },
  {
    name: "Université de Parakou",
    fullName: "Université de Parakou",
    fields: ["Agronomie", "Agriculture", "Médecine Vétérinaire", "Biologie", "Chimie", "Mathématiques"],
    duration: "3-5 ans",
    cost: "200 000 - 600 000 FCFA/an"
  }
];

// Opportunités de bourses
const SCHOLARSHIPS = [
  { name: "Bourses du Gouvernement Béninois", description: "Basées sur le mérite académique" },
  { name: "Bourses Françaises (Campus France)", description: "Pour études en France" },
  { name: "Bourses Africaines (AAGB, BAD)", description: "Pour études en Afrique" },
  { name: "Bourses Privées", description: "Entreprises, ONG, Fondations" },
  { name: "Crédits Étudiants", description: "Banques locales (BIBE, BOA, Ecobank)" }
];