export interface NavItem {
  label: string;
  path: string;
}

export const ownerName = 'BENAMA Tesnim';

export const navItems: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Présentation', path: '/presentation' },
  { label: 'Expériences professionnelles', path: '/projet' },
  { label: 'Tableau de synthèse', path: '/e5' },
  { label: 'Mes compétences', path: '/competences' },
  { label: 'Ma veille', path: '/veille' },
  { label: 'Contact', path: '/contact' }
];

export const homeData = {
  heroTitle: 'Bienvenue sur mon Portfolio',
  heroText: 'Je suis BENAMA Tesnim, étudiant en BTS SIO option SLAM.',
  btsTitle: 'Découvrir le BTS SIO',
  btsText:
    "Le BTS SIO (Services Informatiques aux Organisations) est une formation de deux ans qui prépare les étudiants à devenir des professionnels de l'informatique. Il propose deux spécialités : SLAM (Solutions Logicielles et Applications Métiers) et SISR (Solutions d'Infrastructure, Systèmes et Réseaux). Les étudiants acquièrent des compétences en développement, gestion de projets informatiques, administration de systèmes et réseaux, ainsi que la capacité à répondre aux besoins des entreprises en matière de solutions informatiques.",
  options: [
    {
      title: 'Option SLAM',
      text: "L’option SLAM forme au développement d’applications et de sites web : conception, codage et maintenance, avec des technologies comme HTML, CSS, JavaScript, PHP, JAVA et MySQL."
    },
    {
      title: 'Option SISR',
      text: "L’option SISR forme à l’installation, la configuration et la maintenance des réseaux et systèmes d’entreprise, avec un focus sur la sécurité et la virtualisation."
    }
  ],
  aboutTitle: 'À propos de moi',
  aboutText:
    "Je suis BENAMA Tesnim, étudiant en BTS SIO option SLAM. Je suis également passionné par l'informatique et le développement web. J'aime apprendre de nouvelles technologies et relever des défis techniques. Mon objectif est de devenir un développeur compétent et de contribuer à des projets innovants."
};

export const presentationData = {
  title: 'Présentation',
  subtitle: 'A propos de moi (Parcours scolaire et professionnel)',
  timeline: [
    { years: '2024 - 2026', text: 'BTS SIO - Institut Limayrac', side: 'left' as const },
    { years: '2026 - 2026 (2 mois)', text: "Stage - LAKN SERVICE / Développement d'application", side: 'right' as const},
    { years: '2025 - 2025 (2 mois)', text: "Stage - Limayrac / Développement d'application", side: 'right' as const },
    { years: '2020 - 2024', text: 'Baccalauréat ST2S - Lycée Rive Gauche', side: 'left' as const },
    { years: '2015 - 2019', text: 'Collège - Collège Jean Jaurès', side: 'left' as const },
  ],
  cvText:
    "Vous trouverez ci-dessous un aperçu de mon parcours scolaire et professionnel. Pour plus de détails, n'hésitez pas à consulter mon CV.",
  cvImage: 'assets/img/BENAMA Tesnim CV.png',
  cvPdf: 'assets/pdf/BENAMA Tesnim CV.pdf',
};

export const projectsData = {
  title: 'Expériences professionnelles',
  subtitle: 'Découvrez mes expériences professionnelles.',
  cards: [
    {
      title: 'Site APPFAQ',
      stack: 'HTML, CSS, JavaScript, PHP, MySQL',
      text: 'Site web réalisé pour la Maison des Ligues de Lorraine. (Pour un projet de groupe)',
      link: 'https://github.com/Tesnim16/m2l'
    },
    {
      title: 'APPRESTO',
      stack: 'HTML, CSS, JavaScript, PHP, MySQL, Java',
      text: 'Application web réalisée pour la gestion d\'un restaurant. (Pour un projet de groupe)',
      link: 'https://github.com/dodo-dt/AP-SLAM-SIO2'
    },
    {
      title: 'BOT PROJET',
      stack: 'Python',
      text: 'Bot réalisé pour apprendre à utiliser le langage de programmation Python',
      link: 'https://github.com/Tesnim16/bot'
    },
    {
      title: 'LAKN SERVICE',
      stack: 'Angular, TypeScript, Node.js, Express.js, HTML, CSS',
      text: 'Site web d\'accueil pour LAKN SERVICE.',
      link: 'https://github.com/Tesnim16/LAKNSERVICE'
    }
  ]
};

export const e5Data = {
  title: 'Tableau de synthèse',
  subtitle: 'Voici un tableau récapitulatif de mes compétences acquises.',
  text:
    "L’épreuve E5 du BTS SIO option SLAM (Solutions Logicielles et Applications Métiers) évalue la capacité du candidat à concevoir, développer et maintenir des applications répondant aux besoins d’une organisation. Elle repose sur la présentation et l’analyse de situations professionnelles issues du stage ou de projets réalisés, ainsi que sur l’utilisation d’outils et méthodes de développement. L’examen prend la forme d’un oral où le candidat justifie ses choix techniques et organisationnels.",
  tableImage: 'assets/img/Tableau de synthèse Tesnim BENAMA.png',
  tablePdf: 'assets/pdf/Tableau de synthèse Tesnim BENAMA.xlsx - Tableau de synthèse Épreuve E4.pdf',
  tableText:
    "Vous trouverez ci-dessous un aperçu de mon parcours scolaire et professionnel. Pour plus de détails, n'hésitez pas à consulter mon tableau de synthèse."
};

export const competencesData = {
  title: 'Mes Compétences',
  subtitle: "Voici les différentes compétences que j'ai pu acquérir.",
  text:
    "Au cours de ma formation en BTS SIO option SLAM, j'ai acquis diverses compétences techniques et professionnelles. Voici un aperçu des principales compétences que j'ai développées :",
  skills: [
    { label: 'HTML', icon: 'assets/img/html.svg' },
    { label: 'CSS', icon: 'assets/img/css.svg' },
    { label: 'JavaScript', icon: 'assets/img/javascript.svg' },
    { label: 'PHP', icon: 'assets/img/php.svg' },
    { label: 'GitHub', icon: 'assets/img/github.svg' },
    { label: 'MySQL', icon: 'assets/img/mysql.png' },
    { label: 'Visual Studio Code', icon: 'assets/img/vscode.png' },
    { label: 'Angular', icon: 'assets/img/angular.png' },
    { label: 'Node.js', icon: 'assets/img/nodejs.webp' },
    { label: 'Python', icon: 'assets/img/python.png' },
    { label: 'Java', icon: 'assets/img/java.webp' },
    { label: 'TypeScript', icon: 'assets/img/typescript.png' }
  ]
};

export const competencese5Data = {
  title: 'Compétences pour du bloc 1 de BTS SIO',
  subtitle: "Voici les différentes compétences que j'ai pu acquérir pour le bloc 1 de BTS SIO.",
  text:
    "Au cours de ma formation en BTS SIO option SLAM, j'ai acquis diverses compétences techniques et professionnelles. Voici un aperçu des principales compétences que j'ai développées pour le bloc 1 :",
  skills: [
    { label: 'Gérer le patrimoine informatique', icon: 'assets/img/GérerLePatrimoineInformatique.png' },
    { label: 'Répondre aux incidents et aux demandes d\'assistance et d\'évolution', icon: 'assets/img/Incidents.png' },
    { label: 'Développer la présence en ligne de l\'organisation', icon: 'assets/img/DévelopperLaPrésenceEnLigne.png' },
    { label: 'Travailler en mode projet', icon: 'assets/img/TravaillerEnModeProjet.png' },
    { label: 'Mettre à disposition des utilisateurs un service informatique', icon: 'assets/img/MettreADispositionUnService.png' },
    { label: 'Organiser son développement professionnel', icon: 'assets/img/OrganiserSonDéveloppementPersonnelPortfolio.png' }
  ]
}

export const veilleData = {
  title: 'Ma Veille Technologique',
  subtitle: "Voici quelques articles et ressources que j'ai trouvés intéressants.",
  introTitle: "Qu'est-ce que la veille technologique ?",
  introText:
    "La veille technologique est un processus continu de surveillance et d'analyse des évolutions technologiques, des tendances du marché et des innovations dans un domaine spécifique. Elle permet aux entreprises et aux professionnels de rester informés des nouveautés, d'anticiper les changements et de prendre des décisions éclairées pour leur développement stratégique.",
  tools: [
    {
      title: 'X (anciennement Twitter)',
      type: 'Outil de veille',
      text: "X (anciennement Twitter) est un réseau social, où les gens communiquent de nombreuses informations comme des trends, des actualités journalières et même de nouvelles technologies comme les nouvelles technologies qu'Elon Musk publie.",
      link: 'https://x.com/'
    },
    {
      title: 'LinkedIn',
      type: 'Outil de Veille/Recherche',
      text: "LinkedIn est une réseau social pour professionnel, il permet aux autres de s'informer sur les nouvelles alertes d'emploi, nouvelles technologies et les nouvelles actualités au sein d'entreprise et autres.",
      link: 'https://www.linkedin.com/'
    }
  ]
};