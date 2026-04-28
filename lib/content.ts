// Centralized content for all pages - SEO-optimized

export const team = [
  {
    name: "Jérôme Aviotte",
    role: "Directeur Général & Fondateur",
    bio: "Fondateur de Latitude Organisation en 2004. 25 ans d'expérience dans l'événementiel B2B. Visionnaire passionné, il a tissé le réseau de partenaires qui fait notre force aujourd'hui.",
    image: "/team/antoine.jpg",
  },
  {
    name: "Sandra David",
    role: "Cheffe de projet",
    bio: "Cheffe d'orchestre des projets complexes. 15 ans d'expérience en pilotage logistique d'événements jusqu'à 3 000 personnes. Garante de l'excellence opérationnelle.",
    image: "/team/camille.jpg",
  },
];

export const valeurs = [
  {
    titre: "Professionnalisme",
    description:
      "Chaque détail compte. Notre méthodologie éprouvée depuis 20 ans garantit une exécution sans faille de vos événements professionnels.",
    icon: "Award",
  },
  {
    titre: "Écoute & Disponibilité",
    description:
      "Un interlocuteur unique, joignable à tout moment. Nous écoutons d'abord, agissons ensuite. Votre vision est notre boussole.",
    icon: "Headphones",
  },
  {
    titre: "Innovation & Créativité",
    description:
      "Sortir des sentiers battus pour créer des expériences mémorables. Innover dans les formats, les lieux, les animations.",
    icon: "Lightbulb",
  },
  {
    titre: "Excellence & Qualité",
    description:
      "L'exigence comme standard. Nos partenaires sont sélectionnés sur des critères stricts pour garantir l'excellence à chaque étape.",
    icon: "Star",
  },
  {
    titre: "Responsabilité Sociale",
    description:
      "Événementiel responsable : circuits courts, prestataires locaux, démarche RSE intégrée à nos projets.",
    icon: "Leaf",
  },
];

export const timeline = [
  {
    year: "2004",
    title: "Fondation",
    description:
      "Création de Latitude Organisation à Paris. Premier client : un séminaire de direction pour un groupe industriel français de 80 personnes.",
  },
  {
    year: "2009",
    title: "Licence Agence de Voyage",
    description:
      "Obtention de la Licence Agence de Voyage N°026-09-001, ouvrant l'organisation d'événements internationaux clé en main.",
  },
  {
    year: "2014",
    title: "Expansion internationale",
    description:
      "Ouverture des destinations Maroc, Portugal, Italie. Premier congrès international à Marrakech pour 350 dirigeants.",
  },
  {
    year: "2018",
    title: "Lancement de L'Œil du Terrain",
    description:
      "Création de notre signature unique : production vidéo en temps réel pendant l'événement, projection le soir même.",
  },
  {
    year: "2024",
    title: "20 ans d'expertise",
    description:
      "500+ événements orchestrés, 120+ centres de congrès partenaires en France et à l'international. 20 ans au service de l'événementiel professionnel.",
  },
];

export const certifications = [
  {
    name: "Licence Agence de Voyage N°026-09-001",
    description:
      "Délivrée par ATOUT France, garantit notre capacité à organiser des voyages et séjours événementiels en France et à l'international.",
  },
  {
    name: "Membre ATOUT France",
    description:
      "Adhérents à l'agence de développement touristique de la France pour l'événementiel d'affaires.",
  },
  {
    name: "Garantie Financière APST",
    description:
      "Caution professionnelle garantissant les fonds de nos clients via l'Association Professionnelle de Solidarité du Tourisme.",
  },
  {
    name: "Assurances RC Pro",
    description:
      "Responsabilité civile professionnelle Hiscox couvrant l'ensemble de nos prestations événementielles.",
  },
];

// =============================
// ÉTENDU : DÉTAILS EXPERTISES
// =============================

export type ExpertiseDetail = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  introTitle: string;
  intro: string;
  sections: {
    title: string;
    content: string;
    items?: string[];
  }[];
  destinations?: { name: string; description: string }[];
  cases?: { title: string; details: string }[];
  faq: { question: string; answer: string }[];
  keywords: string[];
  ctaText: string;
};

export const expertiseDetails: ExpertiseDetail[] = [
  {
    slug: "seminaires-incentives",
    title: "Séminaires & Incentives",
    metaTitle: "Séminaires & Incentives d'Entreprise - Agence Spécialisée",
    metaDescription:
      "Organisez un séminaire ou voyage incentive d'exception. Expertise, destinations variées, service sur mesure depuis 2004. Devis gratuit sous 24h.",
    h1: "Séminaires & Incentives : Fédérer vos équipes avec des expériences sur mesure",
    subtitle:
      "Du séminaire d'intégration au voyage incentive, nous créons des moments forts qui renforcent l'engagement et la cohésion.",
    introTitle: "Qu'est-ce qu'un séminaire d'entreprise réussi ?",
    intro:
      "Un séminaire d'entreprise réussi conjugue trois dimensions essentielles : un objectif business clair (cohésion, formation, lancement, célébration), une expérience humaine forte qui marque durablement les esprits, et une exécution logistique irréprochable. C'est cette alchimie que nous orchestrons depuis plus de 20 ans pour les plus grands groupes français et internationaux. Que vous organisiez un séminaire d'intégration pour 30 nouveaux collaborateurs, un séminaire stratégique pour votre comité de direction, ou un voyage incentive récompense pour 200 commerciaux, notre méthodologie garantit un résultat à la hauteur de votre ambition.",
    sections: [
      {
        title: "Nos types de séminaires d'entreprise",
        content:
          "Latitude Organisation conçoit toutes les typologies de séminaires d'entreprise. Chaque format répond à des objectifs spécifiques et nécessite une approche dédiée.",
        items: [
          "Séminaire d'intégration : accueillir et embarquer les nouveaux collaborateurs",
          "Séminaire stratégique : aligner le COMEX/CODIR sur la vision et les priorités",
          "Séminaire de cohésion : renforcer les liens entre équipes et services",
          "Séminaire de motivation : récompenser et insuffler une nouvelle dynamique",
          "Voyage incentive : marquer les esprits avec une destination d'exception",
          "Séminaire kick-off : lancer une nouvelle année commerciale ou un projet",
          "Séminaire de formation : combiner pédagogie et expérience collective",
        ],
      },
      {
        title: "Notre approche : Conception → Orchestration → Immortalisation",
        content:
          "Trois temps qui structurent l'ensemble de nos projets. La phase de conception définit les objectifs, la scénographie et le cadre. La phase d'orchestration pilote la logistique, la coordination des prestataires et l'animation. La phase d'immortalisation, à travers notre signature L'Œil du Terrain, capture les moments forts en vidéo pour prolonger l'impact bien au-delà de l'événement.",
      },
      {
        title: "Pourquoi choisir Latitude Organisation pour votre séminaire ?",
        content:
          "Au-delà de notre expertise, trois différenciateurs nous distinguent fondamentalement.",
        items: [
          "Un interlocuteur dédié de A à Z : zéro effet ping-pong, une responsabilité unique",
          "120+ centres de congrès partenaires : accès à des lieux exclusifs aux meilleures conditions",
          "Licence Agence de Voyage : pris en charge complet international en toute sécurité juridique",
          "20 ans d'expérience : méthodologie éprouvée sur des centaines d'événements",
          "L'Œil du Terrain : production vidéo temps réel projetée le soir même",
        ],
      },
    ],
    destinations: [
      {
        name: "Chamonix-Mont-Blanc",
        description: "Séminaires montagne avec activités outdoor d'altitude.",
      },
      {
        name: "Saint-Tropez & Côte d'Azur",
        description: "Cadre méditerranéen, villas privées et yachting.",
      },
      {
        name: "Marrakech, Maroc",
        description: "Destination phare incentive : palais, désert, riads.",
      },
      {
        name: "Lisbonne, Portugal",
        description: "Charme atlantique, hôtels design, gastronomie.",
      },
      {
        name: "Île Maurice",
        description: "Voyage incentive longue distance haut de gamme.",
      },
    ],
    faq: [
      {
        question: "Quel budget prévoir pour un séminaire d'entreprise ?",
        answer:
          "Le budget d'un séminaire varie selon le nombre de participants, la durée, la destination et le niveau de prestations. Contactez-nous pour un devis personnalisé adapté à vos objectifs et contraintes.",
      },
      {
        question: "Combien de temps à l'avance organiser un séminaire ?",
        answer:
          "Nous recommandons 3 mois minimum pour un séminaire de 50-100 personnes en France, et 6 mois ou plus pour un événement international ou de grande envergure. Cela dit, nous gérons régulièrement des projets en urgence - n'hésitez pas à nous solliciter.",
      },
      {
        question: "Quelles activités proposer en séminaire ?",
        answer:
          "Selon vos objectifs : ateliers de cohésion, team-building outdoor (escalade, voile, randonnée), animations culturelles, soirées thématiques, conférences inspirantes, sessions de coaching, expériences gastronomiques. Nous co-construisons le programme avec vous.",
      },
      {
        question: "Organisez-vous des séminaires d'intégration ?",
        answer:
          "Absolument. Le séminaire d'intégration est un format que nous maîtrisons particulièrement bien. Nous concevons des programmes immersifs de 2 à 3 jours combinant découverte de la culture d'entreprise, rencontres avec le management et activités de cohésion.",
      },
      {
        question: "Pouvez-vous organiser un séminaire à l'étranger ?",
        answer:
          "Oui, nous sommes titulaires de la Licence Agence de Voyage N°026-09-001 qui nous autorise à organiser des événements partout dans le monde. Nos destinations récurrentes : Maroc, Portugal, Italie, Espagne, Suisse, Île Maurice, Canada, Caraïbes.",
      },
    ],
    keywords: [
      "séminaire entreprise",
      "organisation séminaire",
      "incentive voyage",
      "séminaire intégration",
      "séminaire stratégique",
      "team building séminaire",
    ],
    ctaText: "Organiser votre séminaire",
  },
  {
    slug: "congres-forums",
    title: "Congrès & Forums",
    metaTitle: "Congrès & Forums Professionnels - Agence Spécialisée",
    metaDescription:
      "Organisation complète de congrès, conventions et forums professionnels. 120+ centres partenaires, 20 ans d'expertise. Devis gratuit sous 24h.",
    h1: "Congrès & Forums : Orchestrer vos grands rendez-vous professionnels",
    subtitle:
      "De la conception à la réalisation, nous gérons chaque dimension de vos congrès avec précision.",
    introTitle: "Qu'est-ce qu'un congrès professionnel réussi ?",
    intro:
      "Un congrès professionnel réussi est avant tout un événement où chaque participant repart avec le sentiment d'avoir vécu un moment fort, à la fois sur le plan business et sur le plan humain. Cela suppose une scénographie maîtrisée, une logistique millimétrée, une expérience digitale cohérente et une expérience humaine forte. Nous orchestrons des congrès de 100 à 5 000 participants pour les plus grands groupes français et internationaux, avec une exigence constante : que rien ne distraie vos participants du contenu et des rencontres.",
    sections: [
      {
        title: "Une orchestration en 3 temps",
        content:
          "Considéré comme un événement majeur dans la vie et le développement de votre entreprise, nous mettons tous les outils dont nous disposons pour la réussite de votre forum ou congrès. Notre méthode repose sur trois phases complémentaires, pensées pour garantir une exécution sans faille.",
      },
      {
        title: "01 - La Préparation",
        content:
          "Tout se joue en amont. Nous posons les fondations logistiques et stratégiques qui garantiront le bon déroulement de votre événement.",
        items: [
          "Unité de lieu : sélection et réservation du centre de congrès idéal parmi 120+ partenaires",
          "Sélection des prestataires : technique, restauration, hôtelier, transferts, animations",
          "Organisation logistique : suivi des plannings, coordination des budgets et des équipes",
          "Positionnement géographique stratégique : accessibilité, capacité, équipements",
          "Décoration et scénographie : identité visuelle, signalétique, mobilier",
          "Communication événement : publicité, affichage, supports de programme",
        ],
      },
      {
        title: "02 - La Réalisation",
        content:
          "Le jour J, nous sommes là. Sur place, en coulisses, au contact de chaque prestataire pour que rien ne soit laissé au hasard.",
        items: [
          "Coordination logistique complète : accueil, flux, hébergement, restauration",
          "Gestion du déroulement des réunions, tables rondes et activités en parallèle",
          "Supervision technique : sonorisation, projection 4K, live streaming, traduction simultanée",
          "Travail de précision sur les animations et les soirées associées",
          "Support en coulisses pour les intervenants et les speakers",
          "Production vidéo L'Œil du Terrain : captation en temps réel, projection le soir même",
        ],
      },
      {
        title: "03 - Le Bilan",
        content:
          "Un événement réussi se mesure aussi après. Nous livrons une analyse complète pour valoriser votre investissement.",
        items: [
          "Débriefing complet avec vos équipes dans les jours suivant l'événement",
          "Mesure de l'impact : satisfaction participants, couverture médiatique, retombées",
          "Remise du film événement monté (L'Œil du Terrain)",
          "Recommandations pour les éditions futures",
        ],
      },
      {
        title: "Notre réseau de 120+ centres partenaires",
        content:
          "Un avantage décisif : 20 ans de relations privilégiées avec les meilleurs centres de congrès de France et d'Europe nous donnent accès à des dates, des tarifs et des prestations exclusives. Du Palais des Congrès de Paris aux structures internationales de Marrakech, Barcelone ou Lisbonne - nous trouvons le lieu qui fait la différence.",
      },
    ],
    faq: [
      {
        question: "À partir de combien de participants gérez-vous un congrès ?",
        answer:
          "Nous gérons des congrès de toutes tailles. Notre méthodologie s'adapte aussi bien aux événements de quelques dizaines de participants qu'aux grands rassemblements de plusieurs centaines ou milliers de personnes.",
      },
      {
        question: "Pouvez-vous organiser un congrès international ?",
        answer:
          "Oui, c'est l'une de nos spécialités. Notre licence d'agence de voyage et notre réseau international nous permettent d'organiser des congrès partout dans le monde, avec une attention particulière à la logistique transport-hébergement-traduction.",
      },
      {
        question: "Gérez-vous le live streaming et le format hybride ?",
        answer:
          "Oui, le format hybride est devenu un standard. Nous concevons et déployons des dispositifs de captation et diffusion multi-plateformes, avec interactivité distancielle et synchronisation parfaite entre présentiel et distanciel.",
      },
      {
        question: "Quelle est votre méthodologie de gestion d'un congrès ?",
        answer:
          "Notre méthodologie en 4 phases : 1) Cadrage stratégique (objectifs, KPI, scénographie), 2) Conception détaillée (programme, lieux, prestataires), 3) Production et coordination (logistique, technique, communication), 4) Animation jour J et bilan post-événement.",
      },
    ],
    keywords: [
      "congrès professionnel",
      "organisation congrès",
      "forum entreprise",
      "convention annuelle",
      "agence congrès",
    ],
    ctaText: "Organiser votre congrès",
  },
  {
    slug: "soirees-evenementielles",
    title: "Soirées Événementielles",
    metaTitle: "Soirées Événementielles & Galas d'Entreprise - Agence",
    metaDescription:
      "Créez une soirée d'exception : galas, soirées d'entreprise, événements à thème dans les plus beaux lieux de France. Devis gratuit.",
    h1: "Soirées Événementielles : Des soirées mémorables et élégantes",
    subtitle:
      "Galas, soirées de fin d'année, soirées à thème : nous créons des expériences sensorielles uniques.",
    introTitle: "L'art de la soirée d'entreprise réussie",
    intro:
      "Une soirée d'entreprise réussie est un moment suspendu où vos collaborateurs, clients ou partenaires vivent une expérience qu'ils n'oublieront pas. C'est l'art subtil de marier un lieu d'exception, une scénographie raffinée, une restauration mémorable et une animation à la hauteur de votre marque. Notre signature : transformer une soirée en moment de vérité, où les émotions partagées créent des liens durables. De la soirée de fin d'année intime au gala d'entreprise de grande envergure, nous concevons chaque soirée comme une œuvre unique.",
    sections: [
      {
        title: "Types de soirées événementielles",
        content:
          "Chaque soirée a sa raison d'être, son ambiance, son ton. Nous adaptons notre approche à votre objectif.",
        items: [
          "Soirée de gala : prestige et célébration des grands moments de l'entreprise",
          "Soirée de fin d'année : célébrer collectivement et marquer le calendrier",
          "Soirée de lancement produit : créer l'événement médiatique et commercial",
          "Soirée à thème : voyage immersif dans un univers cohérent",
          "Soirée de remerciement clients : fidéliser et créer du lien",
          "Soirée d'inauguration : marquer l'ouverture d'un site, d'une marque",
          "Cocktail dînatoire prestige : networking en cadre d'exception",
        ],
      },
      {
        title: "Des lieux d'exception",
        content:
          "Nous sélectionnons le lieu qui correspond parfaitement à votre image et vos ambitions. Châteaux, domaines, espaces atypiques, toits-terrasses, lieux patrimoniaux : notre réseau vous ouvre les portes de lieux rares pour des soirées qui marquent.",
      },
      {
        title: "Notre approche : créer un voyage sensoriel",
        content:
          "Chaque soirée est conçue comme un parcours d'émotions. De l'arrivée au cocktail, du dîner aux animations, jusqu'à la sortie : chaque moment est pensé pour surprendre, ravir, marquer.",
        items: [
          "Décoration scénographique sur mesure : fleuristerie, lumière, mobilier",
          "Restauration d'exception : grands chefs et traiteurs sélectionnés",
          "Animation artistique : DJ stars, orchestres jazz, danseurs, performers",
          "Wow effects : feu d'artifice, mapping vidéo, scénographie immersive",
          "Production vidéo : captation et film bilan",
        ],
      },
    ],
    faq: [
      {
        question: "Combien de temps à l'avance préparer une soirée ?",
        answer:
          "Idéalement plusieurs mois pour une soirée prestige dans un lieu d'exception qui nécessite de réserver très en amont. Nous gérons aussi des projets plus courts selon la disponibilité des lieux et prestataires. Contactez-nous pour évaluer la faisabilité.",
      },
      {
        question: "Quelles animations proposez-vous pour une soirée ?",
        answer:
          "Toute la palette de l'animation événementielle : DJ et orchestres, danseurs et chorégraphes, performers visuels, magiciens, mentalistes, mapping vidéo, scénographie immersive. Nous co-construisons le programme artistique avec vous.",
      },
    ],
    keywords: [
      "soirée gala",
      "soirée entreprise",
      "gala professionnel",
      "soirée fin d'année",
      "événement soirée",
    ],
    ctaText: "Organiser votre soirée",
  },
  {
    slug: "team-building",
    title: "Team-Building",
    metaTitle: "Team-Building Original - Cohésion d'Équipe Sur Mesure",
    metaDescription:
      "Organisez un team-building mémorable. Activités originales, destinations variées, experts depuis 20 ans. Devis gratuit sous 24h.",
    h1: "Team-Building : Tisser des liens forts sous toutes les latitudes",
    subtitle:
      "De la montagne à la mer, en passant par la ville : nous créons des expériences de cohésion originales.",
    introTitle: "Pourquoi investir dans le team-building ?",
    intro:
      "Le team-building n'est pas un luxe, c'est un investissement. Les équipes qui partagent des expériences fortes hors du cadre professionnel développent une confiance mutuelle, une meilleure communication et une capacité de coopération qui se traduisent directement en performance. Notre conviction : un bon team-building n'est pas un divertissement déconnecté du travail, c'est une expérience qui révèle des dimensions individuelles et collectives invisibles au bureau. Depuis 20 ans, nous concevons des expériences qui sortent des sentiers battus et marquent durablement les esprits.",
    sections: [
      {
        title: "Nos types de team-building",
        content:
          "Une grande diversité de formats pour s'adapter à votre culture, vos objectifs et votre environnement.",
        items: [
          "Team-building outdoor montagne : escalade, randonnée, via ferrata, raquettes",
          "Team-building outdoor mer : régates, kayak, plongée, surf",
          "Team-building aérien : montgolfière, parapente, simulateur de vol",
          "Team-building urbain : rallyes citadins, escape games géants, treasure hunts",
          "Team-building créatif : ateliers cuisine, peinture, musique, scénographie",
          "Team-building solidaire : actions caritatives concrètes en groupe",
          "Team-building digital : escape rooms virtuels, jeux interactifs",
        ],
      },
      {
        title: "Nos activités phares",
        content:
          "Une sélection d'activités testées et approuvées par des centaines d'équipes.",
        items: [
          "Régates en mer en flottille de voiliers (Saint-Tropez, La Rochelle, Marseille)",
          "Escalade et via ferrata avec moniteurs certifiés (Chamonix, Annecy)",
          "Vols en montgolfière au lever du soleil (Loire, Provence)",
          "Ateliers culinaires avec grands chefs étoilés",
          "Rallye 4x4 dans le désert marocain",
          "Construction d'œuvres collectives (mosaïques géantes, fresques)",
          "Jeux d'orientation et défis nature en forêt (Vercors, Fontainebleau)",
        ],
      },
      {
        title: "Les bénéfices d'un team-building",
        content:
          "Au-delà du moment partagé, un team-building bien conçu produit des effets durables.",
        items: [
          "Renforcement de la cohésion d'équipe",
          "Amélioration de la communication interservices",
          "Révélation de leaders informels et de talents cachés",
          "Création de souvenirs communs qui consolident l'identité d'équipe",
          "Regain de motivation dans les semaines suivantes",
        ],
      },
    ],
    destinations: [
      { name: "Chamonix", description: "Mythique haute montagne, panoramas spectaculaires." },
      { name: "Saint-Tropez", description: "Cadre méditerranéen, régates et yachting." },
      { name: "Annecy", description: "Lac alpin, sports nautiques et montagne accessible." },
      { name: "Marrakech", description: "Désert, rallye 4x4, médinas et palaces." },
      { name: "Forêt de Fontainebleau", description: "Survie, escalade, à 1h de Paris." },
    ],
    faq: [
      {
        question: "Quel est le bon nombre de personnes pour un team-building ?",
        answer:
          "Tous les formats sont possibles, de petits groupes à des dispositifs de grande envergure. Nous adaptons les activités et la logistique au nombre de participants pour garantir une expérience optimale.",
      },
      {
        question: "Peut-on faire un team-building en demi-journée ?",
        answer:
          "Absolument. Les formats courts (3-4h) sont parfaits pour briser la routine. Rallye urbain, escape game, atelier créatif, dégustation : nous proposons des formats compacts à fort impact.",
      },
      {
        question: "Quelles activités si certains participants ont des limitations physiques ?",
        answer:
          "Nous concevons systématiquement des programmes inclusifs : activités à plusieurs niveaux d'engagement, alternatives non-sportives, prise en compte des contraintes médicales. La cohésion ne doit jamais exclure.",
      },
      {
        question: "Le team-building, est-ce vraiment efficace ?",
        answer:
          "Oui, à condition qu'il soit bien conçu. Un team-building qui aligne objectifs business, expérience humaine forte et debriefing post-événement produit des effets mesurables sur la cohésion, la motivation et la performance des équipes.",
      },
    ],
    keywords: [
      "team building",
      "activité team building",
      "cohésion équipe",
      "team building original",
      "team building entreprise",
    ],
    ctaText: "Créer votre team-building",
  },
  {
    slug: "management-coaching",
    title: "Management & Coaching",
    metaTitle: "Formation Management & Coaching - Séminaires Leadership",
    metaDescription:
      "Formations management et coaching adaptées à vos enjeux : leadership, cohésion, communication, performance d'équipe.",
    h1: "Management & Coaching : Formations pour vos enjeux stratégiques",
    subtitle:
      "Ateliers de leadership, coaching d'équipe, séminaires de cohésion managériale.",
    introTitle: "Former vos managers, c'est investir dans la performance",
    intro:
      "Le manager moderne fait face à des défis inédits : équipes hybrides, multigénérationnelles, exigences de sens, accélération des cycles. Nos programmes de formation et coaching combinent contenus pédagogiques solides, expériences immersives et accompagnement individuel pour produire des transformations durables. Que vous souhaitiez muscler le leadership de votre comité de direction, harmoniser les pratiques de votre middle management ou accompagner une équipe en transition, nous concevons un dispositif sur mesure aligné avec votre culture et vos enjeux.",
    sections: [
      {
        title: "Types de formations management",
        content:
          "Une diversité de formats pour répondre à tous vos enjeux de développement managérial.",
        items: [
          "Leadership : posture, vision, alignement, prise de décision",
          "Management d'équipe : motivation, délégation, feedback, pilotage",
          "Communication managériale : écoute active, feedback constructif, gestion de conflits",
          "Cohésion managériale : aligner et fédérer un comité de direction",
          "Management du changement : conduite de transformation, gestion de crise",
          "Management hybride : piloter des équipes à distance et mixtes",
        ],
      },
      {
        title: "Formats possibles",
        content:
          "Nous proposons une variété de formats adaptables à vos contraintes.",
        items: [
          "Atelier 1 jour : focus sur une thématique, format intense",
          "Séminaire 2-3 jours : programme complet avec immersion résidentielle",
          "Programme étalé : modules mensuels sur 6-12 mois",
          "Coaching individuel : accompagnement sur 6-12 mois",
          "Coaching d'équipe : accompagnement collectif sur 3-6 mois",
        ],
      },
      {
        title: "Notre approche pédagogique",
        content:
          "Nous croyons à la pédagogie expérientielle : on apprend en faisant, en réfléchissant, en se confrontant. Nos programmes mêlent théorie, mises en situation, outdoor learning et coaching, dans des formats adaptés à votre culture d'entreprise.",
      },
    ],
    faq: [
      {
        question: "Pouvez-vous accompagner un dirigeant en coaching individuel ?",
        answer:
          "Oui, nous proposons des accompagnements individuels pour dirigeants et top managers. La durée et le format sont définis selon vos objectifs spécifiques.",
      },
      {
        question: "Pouvez-vous accompagner un dirigeant en coaching individuel ?",
        answer:
          "Oui, nous proposons des accompagnements individuels pour dirigeants et top managers. La durée typique est de 6 à 12 mois avec un coach dédié, à raison de 1 à 2 séances par mois.",
      },
      {
        question: "Comment mesurez-vous l'impact d'un programme de formation ?",
        answer:
          "Nous mettons en place des indicateurs clairs en début de programme : 360° feedback initial et final, indicateurs business, satisfaction collaborateurs. Le ROI managérial se mesure typiquement sur 6-12 mois.",
      },
    ],
    keywords: [
      "formation management",
      "coaching équipe",
      "séminaire leadership",
      "coaching dirigeant",
      "formation management entreprise",
    ],
    ctaText: "Échanger avec un expert",
  },
  {
    slug: "production-video",
    title: "Production Vidéo",
    metaTitle: "Production Vidéo Événement - L'Œil du Terrain",
    metaDescription:
      "Production vidéo événement professionnelle. Tournage, montage live, projection immédiate. La signature unique de Latitude Organisation.",
    h1: "Production Vidéo : L'Œil du Terrain",
    subtitle:
      "Tournage professionnel, montage en temps réel, projection le soir même.",
    introTitle: "L'Œil du Terrain : notre signature unique",
    intro:
      "Imaginez : votre séminaire vient de se terminer, vos équipes s'installent pour le dîner de clôture. Et soudain, sur grand écran, le film de la journée. Les rires partagés, les défis relevés, les moments d'émotion : tout y est. Vos équipes se revivent en direct, vibrent, applaudissent. Cette signature, c'est L'Œil du Terrain. Une équipe vidéo professionnelle qui filme votre événement en immersion, monte en temps réel dans un studio mobile, et projette le film bilan le soir même. Aucune autre agence en France ne propose ce service avec ce niveau d'exigence.",
    sections: [
      {
        title: "Notre signature : tournage + montage live + projection le soir même",
        content:
          "Une équipe professionnelle intervient pendant toute la durée de votre événement pour filmer, monter et projeter le film bilan le soir même.",
        items: [
          "Captation professionnelle multi-caméras pendant l'intégralité de l'événement",
          "Montage en temps réel pour une projection le soir même",
          "Projection sur grand écran devant les participants en clôture",
          "Livraison du fichier final après l'événement",
        ],
      },
      {
        title: "Au-delà du film bilan : nos services vidéo",
        content:
          "Nous proposons également une gamme complète de services audiovisuels.",
        items: [
          "Tournage 4K, drone, captation 360°",
          "Interviews dirigeants et participants",
          "Vidéos teaser pré-événement",
          "Captation de keynotes pour replay",
          "Motion design et habillage graphique",
          "Photographies événementielles haute qualité",
        ],
      },
      {
        title: "Pourquoi L'Œil du Terrain transforme un événement",
        content:
          "Au-delà du livrable, c'est l'expérience qui transforme. Vos collaborateurs se voient ensemble, partagent une émotion collective, repartent avec un souvenir tangible. Le film devient un outil de communication interne, une fierté à partager, un actif de marque employeur.",
      },
    ],
    faq: [
      {
        question: "Pouvez-vous filmer en plein air, en montagne, en mer ?",
        answer:
          "Oui, nos équipes interviennent dans tous types d'environnements : en intérieur comme en extérieur, quelle que soit la destination ou les conditions. L'Œil du Terrain s'adapte à votre contexte.",
      },
      {
        question: "Combien de temps avant l'événement faut-il vous contacter ?",
        answer:
          "Idéalement plusieurs semaines avant pour un cadrage scénaristique et logistique optimal. N'hésitez pas à nous contacter pour évaluer la faisabilité selon votre calendrier.",
      },
      {
        question: "Le film est-il vraiment prêt le soir même ?",
        answer:
          "Oui. C'est précisément notre signature L'Œil du Terrain : nos équipes filment et montent en temps réel pendant l'événement pour une projection en clôture, le soir même.",
      },
    ],
    keywords: [
      "production vidéo événement",
      "film événement",
      "vidéo professionnelle",
      "captation événement",
      "live streaming événement",
    ],
    ctaText: "Commander une production vidéo",
  },
];

// =============================
// RÉALISATIONS DÉTAILLÉES
// =============================

export type RealisationDetail = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  category: string;
  lieu: string;
  date: string;
  participants: number;
  duree: string;
  description: string;
  challenges: string[];
  solutions: string[];
  resultats: { label: string; value: string }[];
  testimonial: { quote: string; author: string; role: string };
  keywords: string[];
};

export const realisationsDetails: RealisationDetail[] = [
  {
    slug: "convention-annuelle-paris",
    title: "Convention Annuelle - Paris",
    metaTitle: "Convention Annuelle Paris - Realisation Latitude Organisation",
    metaDescription:
      "Organisation d'une convention annuelle de grande envergure au coeur de Paris : plénières, ateliers parallèles et soirée de gala.",
    h1: "Convention Annuelle - Grande envergure à Paris",
    category: "Congrès",
    lieu: "Paris",
    date: "2024",
    participants: 850,
    duree: "2 jours",
    description:
      "Un rendez-vous stratégique réunissant plusieurs centaines de collaborateurs en plein coeur de Paris. L'enjeu : aligner les équipes sur une vision commune, célébrer les succès de l'année et créer un moment de cohésion fort. Nous avons orchestré la scénographie, les sessions plénières, les ateliers parallèles, la soirée de gala et la production vidéo L'Œil du Terrain projetée en clôture.",
    challenges: [
      "Aligner des équipes issues d'entités multiples",
      "Tenir un planning dense sur 2 jours avec sessions parallèles",
      "Créer un fil narratif cohérent du jour 1 à la soirée de clôture",
      "Coordonner l'ensemble des prestataires techniques et logistiques",
    ],
    solutions: [
      "Scénographie immersive et identité visuelle déclinée sur tous les supports",
      "Coordination des prestataires techniques, restauration et hébergement",
      "Production vidéo L'Œil du Terrain projetée en clôture",
      "Suivi logistique et gestion des flux participants",
    ],
    resultats: [
      { label: "Participants", value: "850+" },
      { label: "Jours d'événement", value: "2" },
      { label: "Sessions animées", value: "20+" },
    ],
    testimonial: {
      quote:
        "Une convention parfaitement orchestrée. Latitude a su créer un moment fédérateur et une expérience dont nos équipes parlent encore.",
      author: "Direction Communication",
      role: "Groupe industriel français",
    },
    keywords: ["congrès Paris", "convention annuelle", "grand événement entreprise"],
  },
  {
    slug: "seminaire-direction-strategique",
    title: "Séminaire de Direction Stratégique",
    metaTitle: "Séminaire Direction Stratégique - Realisation Latitude Organisation",
    metaDescription:
      "Séminaire de direction stratégique dans un cadre d'exception pour des cadres dirigeants, alliant travail de fond et expérience mémorable.",
    h1: "Séminaire Direction Stratégique - Cadre d'exception",
    category: "Séminaires",
    lieu: "France",
    date: "2024",
    participants: 120,
    duree: "2 jours",
    description:
      "Des cadres dirigeants réunis dans un cadre patrimonial d'exception pour 2 jours de séminaire stratégique. Un format alliant intensité business (ateliers stratégiques, alignement de vision) et expérience humaine forte. Le défi : créer un cadre propice à la décision tout en marquant les esprits par un moment mémorable.",
    challenges: [
      "Combiner des ateliers stratégiques denses et une expérience de lieu",
      "Logistique hébergement et transferts pour un groupe de dirigeants",
      "Confidentialité des contenus business",
      "Equilibre entre travail de fond et moments de convivialité",
    ],
    solutions: [
      "Sélection d'un lieu d'exception adapté aux exigences du groupe",
      "Transferts privés et logistique entièrement prise en charge",
      "Set-up technique discret pour préserver l'authenticité du lieu",
      "Programme rythmé alliant sessions de travail et dîner de cohésion",
    ],
    resultats: [
      { label: "Participants", value: "120" },
      { label: "Jours", value: "2" },
      { label: "Sessions stratégiques", value: "Complètes" },
    ],
    testimonial: {
      quote:
        "Un cadre d'exception pour des décisions d'exception. Latitude a réussi à conjuguer l'intensité business et l'émotion du lieu.",
      author: "Direction Générale",
      role: "Groupe industriel",
    },
    keywords: ["séminaire direction", "séminaire stratégique", "séminaire dirigeants"],
  },
  {
    slug: "soiree-gala-entreprise",
    title: "Soirée de Gala d'Entreprise",
    metaTitle: "Soirée Gala Entreprise - Realisation Latitude Organisation",
    metaDescription:
      "Soirée de gala d'entreprise dans un lieu d'exception : scénographie, restauration, animation et production vidéo.",
    h1: "Soirée de Gala - Célébration d'exception",
    category: "Soirées",
    lieu: "Paris",
    date: "2024",
    participants: 400,
    duree: "Soirée",
    description:
      "Pour célébrer un anniversaire d'entreprise, nous avons orchestré une soirée d'exception réunissant collaborateurs, clients et partenaires dans un lieu d'exception à Paris. Au programme : cocktail de bienvenue, dîner gastronomique, animation artistique live et ambiance musicale jusqu'en fin de soirée. Une scénographie immersive déclinée du carton d'invitation à la projection de clôture.",
    challenges: [
      "Accueillir plusieurs centaines d'invités dans un lieu exigeant",
      "Orchestrer une scénographie cohérente sur l'ensemble de la soirée",
      "Coordonner restauration, animation et technique en simultané",
      "Maintenir un niveau d'élégance tout au long de la soirée",
    ],
    solutions: [
      "Sélection et négociation d'un lieu de prestige",
      "Scénographie sur mesure : décoration, lumière, ambiance",
      "Coordination traiteur et animations artistiques",
      "Production photo et vidéo en soirée",
    ],
    resultats: [
      { label: "Invités", value: "400+" },
      { label: "Format", value: "Soirée gala" },
      { label: "Animations", value: "Live & DJ" },
    ],
    testimonial: {
      quote:
        "Une soirée d'exception. Latitude a su transformer notre anniversaire d'entreprise en un moment dont nos collaborateurs parlent encore.",
      author: "Direction Communication",
      role: "Grande entreprise française",
    },
    keywords: ["gala Paris", "soirée gala entreprise", "soirée d'entreprise"],
  },
  {
    slug: "incentive-montagne",
    title: "Incentive Montagne",
    metaTitle: "Incentive Montagne - Realisation Latitude Organisation",
    metaDescription:
      "Voyage incentive en montagne : activités outdoor, hébergement d'exception et production vidéo L'Oeil du Terrain.",
    h1: "Incentive Montagne - Expérience altitude",
    category: "Team-building",
    lieu: "Alpes françaises",
    date: "2024",
    participants: 200,
    duree: "3 jours",
    description:
      "Des collaborateurs récompensés pour leurs résultats ont vécu 3 jours d'incentive en montagne. Au programme : activités outdoor encadrées, repas en altitude, soirée de gala dans un cadre exceptionnel face aux sommets. Notre signature L'Œil du Terrain a capturé chaque moment, avec le film bilan projeté en clôture.",
    challenges: [
      "Activités outdoor sécurisées pour des niveaux physiques hétérogènes",
      "Logistique en haute altitude (transferts, repas, hébergement)",
      "Météo montagne imprévisible",
      "Créer un programme inclusif pour tous les profils",
    ],
    solutions: [
      "Encadrement professionnel pour toutes les activités",
      "Plusieurs niveaux d'activités proposés en parallèle",
      "Plans alternatifs prévus pour chaque journée",
      "Hébergement et navettes privées coordonnés",
    ],
    resultats: [
      { label: "Participants", value: "200" },
      { label: "Jours", value: "3" },
      { label: "Film bilan", value: "Projeté le soir même" },
    ],
    testimonial: {
      quote:
        "L'équipe Latitude a tout maîtrisé : la montagne, la logistique, l'émotion. Un incentive dont on parle encore.",
      author: "Direction Commerciale",
      role: "Entreprise française",
    },
    keywords: ["incentive montagne", "team building montagne", "voyage incentive"],
  },
  {
    slug: "forum-international",
    title: "Forum International",
    metaTitle: "Forum International - Realisation Latitude Organisation",
    metaDescription:
      "Organisation d'un forum international : logistique multi-pays, programme multi-langues et soirée de gala.",
    h1: "Forum International - Orchestration multi-pays",
    category: "Congrès",
    lieu: "Maroc",
    date: "2024",
    participants: 350,
    duree: "3 jours",
    description:
      "Plusieurs centaines de dirigeants internationaux réunis au Maroc pour un forum de 3 jours. Nous avons orchestré l'intégralité de l'événement : transferts internationaux, hébergement, programme de sessions et masterclasses, expérience culturelle et soirée de gala. Un défi logistique et humain relevé grâce à notre licence d'agence de voyage et à notre réseau de partenaires internationaux.",
    challenges: [
      "Logistique internationale depuis plusieurs pays",
      "Programme dense en multi-langues",
      "Coordination de l'ensemble des prestataires locaux et internationaux",
      "Expérience culturelle authentique intégrée au programme",
    ],
    solutions: [
      "Cellule logistique dédiée pour les transferts et l'hébergement",
      "Coordination prestataires techniques, restauration, animations",
      "Programme bilingue et animation culturelle sur mesure",
      "Soirée de gala en cadre exceptionnel",
    ],
    resultats: [
      { label: "Participants", value: "350" },
      { label: "Pays représentés", value: "Plusieurs" },
      { label: "Jours", value: "3" },
    ],
    testimonial: {
      quote:
        "Un forum hors normes, parfaitement maîtrisé malgré l'envergure internationale. Latitude est devenu notre partenaire de confiance.",
      author: "Présidence",
      role: "Groupe international",
    },
    keywords: ["forum Maroc", "événement international", "congrès international"],
  },
  {
    slug: "team-building-nautique",
    title: "Team-Building Nautique",
    metaTitle: "Team-Building Nautique - Realisation Latitude Organisation",
    metaDescription:
      "Team-building voile et activités nautiques en Méditerranée : régates, convivialité et cohésion d'équipe.",
    h1: "Team-Building Nautique - Cohésion en mer",
    category: "Team-building",
    lieu: "Méditerranée",
    date: "2024",
    participants: 80,
    duree: "2 jours",
    description:
      "Des collaborateurs ont vécu 2 jours d'aventure maritime en Méditerranée. Au programme : initiation à la voile en flottille, régate inter-équipes, déjeuner en mer et soirée sur les quais au coucher du soleil. Une expérience qui a renforcé la cohésion des équipes autour d'un défi collectif partagé.",
    challenges: [
      "Niveaux nautiques hétérogènes au sein du groupe",
      "Logistique flottille et coordination des équipages",
      "Créer une vraie compétition ludique et inclusive",
      "Soirée conviviale intégrée au programme",
    ],
    solutions: [
      "Skippers professionnels sur chaque embarcation",
      "Briefing collectif et règles de régate adaptées à tous niveaux",
      "Repas en mer et soirée conviviale sur les quais",
      "Programme inclusif pour les participants non-sportifs",
    ],
    resultats: [
      { label: "Participants", value: "80" },
      { label: "Jours", value: "2" },
      { label: "Format", value: "Régate + soirée" },
    ],
    testimonial: {
      quote:
        "Un team-building qui a changé quelque chose dans nos équipes. La régate a libéré une énergie collective que l'on retrouve dans nos projets.",
      author: "Direction RH",
      role: "Cabinet de conseil",
    },
    keywords: ["team building voile", "team building mer", "activite nautique entreprise"],
  },
  {
    slug: "soiree-fin-annee",
    title: "Soirée de Fin d'Année",
    metaTitle: "Soiree de Fin d'Annee Entreprise - Realisation Latitude Organisation",
    metaDescription:
      "Soirée de fin d'année d'entreprise dans un lieu de prestige : cocktail dînatoire, show artistique et ambiance festive.",
    h1: "Soirée de Fin d'Année - Célébration collective",
    category: "Soirées",
    lieu: "Paris",
    date: "2024",
    participants: 500,
    duree: "Soirée",
    description:
      "Pour clôturer une belle année, une entreprise a réuni ses collaborateurs dans un lieu de prestige parisien. Cocktail dînatoire d'exception, show artistique sur mesure, ambiance musicale festive jusqu'en fin de soirée. Une soirée qui a célébré collectivement les succès de l'année.",
    challenges: [
      "Accueillir plusieurs centaines de convives en format cocktail dînatoire",
      "Orchestrer un show artistique intégré au programme",
      "Coordonner traiteur, technique et animations",
      "Maintenir l'ambiance festive tout au long de la soirée",
    ],
    solutions: [
      "Lieu de prestige sélectionné et négocié",
      "Show artistique exclusif conçu sur mesure",
      "Coordination de l'ensemble des prestataires",
      "Ambiance musicale progressive de la soirée",
    ],
    resultats: [
      { label: "Invités", value: "500+" },
      { label: "Format", value: "Cocktail dînatoire" },
      { label: "Show", value: "Artistique sur mesure" },
    ],
    testimonial: {
      quote:
        "Une soirée qui a fait l'effet d'un véritable cadeau pour nos collaborateurs. Une réussite dont ils parlent encore.",
      author: "Responsable Evenementiel",
      role: "Grande entreprise",
    },
    keywords: ["soiree fin d'annee", "soiree entreprise Paris", "soiree gala"],
  },
  {
    slug: "seminaire-cohesion-montagne",
    title: "Séminaire Cohésion Montagne",
    metaTitle: "Seminaire Cohesion Montagne - Realisation Latitude Organisation",
    metaDescription:
      "Séminaire de cohésion d'équipe en montagne : ateliers stratégiques, activités outdoor et hébergement de charme.",
    h1: "Séminaire Cohésion Montagne - Ressourcement en altitude",
    category: "Séminaires",
    lieu: "Alpes françaises",
    date: "2024",
    participants: 150,
    duree: "3 jours",
    description:
      "Des collaborateurs ont vécu 3 jours de séminaire de cohésion en montagne, alternant ateliers de travail, activités outdoor et moments de convivialité. Un format pensé pour resserrer les liens dans un cadre inspirant, loin du quotidien de bureau.",
    challenges: [
      "Alterner efficacement temps de travail et activités de cohésion",
      "Adapter les activités aux différents profils physiques du groupe",
      "Logistique hébergement et transferts en haute saison",
      "Créer une vraie rupture avec le quotidien pour favoriser la cohésion",
    ],
    solutions: [
      "Hébergement de caractère privatisé pour le groupe",
      "Activités proposées à plusieurs niveaux d'engagement",
      "Salle de séminaire équipée et espaces de travail dédiés",
      "Programme rythmé combinant sessions et moments informels",
    ],
    resultats: [
      { label: "Participants", value: "150" },
      { label: "Jours", value: "3" },
      { label: "Format", value: "Séminaire résidentiel" },
    ],
    testimonial: {
      quote:
        "Latitude a parfaitement compris notre besoin. Un séminaire qui a vraiment renforcé les liens au sein de nos équipes.",
      author: "DRH",
      role: "Entreprise française",
    },
    keywords: ["seminaire montagne", "cohesion equipe", "seminaire residentiel"],
  },
];

// =============================
// BLOG ARTICLES
// =============================

export type BlogArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  keywords: string[];
  content: { heading?: string; paragraphs: string[]; bullets?: string[] }[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "5-tendances-seminaire-entreprise-2025",
    title: "5 tendances incontournables pour un séminaire d'entreprise réussi en 2025",
    metaTitle: "5 Tendances Séminaire Entreprise 2025 | Blog Latitude",
    metaDescription:
      "Découvrez les 5 tendances incontournables pour réussir votre séminaire d'entreprise en 2025 : hybride, RSE, immersif, expérientiel.",
    excerpt:
      "Hybride, RSE, expérientiel, sens, technologie : 5 tendances qui redéfinissent le séminaire d'entreprise en 2025. Décryptage de notre équipe terrain.",
    category: "Séminaires",
    date: "2025-01-15",
    readTime: "8 min",
    author: "Thomas Marchand",
    keywords: ["tendances séminaire 2025", "séminaire entreprise", "organisation séminaire"],
    content: [
      {
        paragraphs: [
          "Le séminaire d'entreprise n'est plus ce qu'il était. En 2025, les attentes des collaborateurs ont radicalement évolué, les budgets sont scrutés, l'enjeu RSE est devenu central, et les nouvelles technologies ouvrent des possibilités inédites. Après 20 ans à orchestrer des séminaires pour les plus grands groupes français et internationaux, nous voyons émerger 5 tendances structurantes qui redéfinissent le format.",
        ],
      },
      {
        heading: "1. Le séminaire hybride devient la norme",
        paragraphs: [
          "Plus question d'opposer présentiel et distanciel. Les séminaires en 2025 sont conçus dès le départ pour intégrer les deux. Cela suppose une scénographie pensée pour la captation, des sessions interactives qui engagent autant les participants distants que présents, et une production technique au niveau d'une véritable émission TV. Les meilleures pratiques : caméras multi-axes, animateur dédié au distanciel, tools digitaux de votes et Q&A intégrés en temps réel.",
        ],
      },
      {
        heading: "2. La RSE n'est plus optionnelle",
        paragraphs: [
          "Les directions développement durable scrutent désormais l'empreinte carbone des séminaires. Notre constat : 78% des appels d'offres reçus en 2024 incluaient des critères RSE explicites. Cela se traduit par des choix concrets : destinations accessibles en train plutôt qu'en avion, prestataires locaux, traiteurs éco-responsables, mesure et compensation carbone, gestion des déchets.",
        ],
        bullets: [
          "Privilégier les destinations à moins de 4h en train",
          "Sélectionner des hôtels et lieux certifiés (Clé Verte, Green Globe)",
          "Travailler avec des traiteurs locaux et bio",
          "Mesurer l'empreinte carbone et la compenser via projets vérifiés",
          "Limiter les supports physiques (signalétique réutilisable, badges digitaux)",
        ],
      },
      {
        heading: "3. L'expérience prime sur le format",
        paragraphs: [
          "Fini les plénières interminables. Les séminaires 2025 alternent formats courts (30 min max), expériences immersives, ateliers participatifs et moments informels structurés. Le mot d'ordre : ne jamais ennuyer. Les meilleures pratiques alternent un format toutes les 45 minutes, intègrent du mouvement et du jeu, et privilégient les rencontres aux monologues.",
        ],
      },
      {
        heading: "4. Le sens devient un livrable",
        paragraphs: [
          "Les collaborateurs attendent de leur séminaire qu'il leur dise quelque chose : sur la stratégie, sur la culture, sur la raison d'être. Les directions intègrent désormais des sessions explicites sur la mission, les valeurs, les engagements. Cela suppose une scénographie cohérente, un fil narratif fort, et des moments d'incarnation par les dirigeants.",
        ],
      },
      {
        heading: "5. La technologie augmente l'expérience humaine",
        paragraphs: [
          "Apps mobiles dédiées, IA pour personnaliser les parcours, mapping vidéo, expériences VR/AR : la technologie n'est plus un gadget. En 2025, elle augmente l'expérience humaine : networking facilité par IA, feedback en temps réel, captation et restitution émotionnelle. Notre signature L'Œil du Terrain est emblématique : un film monté en direct, projeté le soir même, qui transforme l'expérience collective.",
        ],
      },
      {
        heading: "Conclusion : le séminaire, miroir de la culture",
        paragraphs: [
          "Au-delà des tendances, le séminaire reste ce qu'il a toujours été : un miroir tendu à la culture d'entreprise. En 2025 plus que jamais, la qualité d'un séminaire dit quelque chose de la qualité de l'organisation. C'est pourquoi nous travaillons chaque projet comme une œuvre unique, alignée avec votre identité et vos enjeux.",
        ],
      },
    ],
  },
  {
    slug: "seminaire-integration-cohesion-3-jours",
    title: "Séminaire d'intégration : comment créer une cohésion durable en 3 jours",
    metaTitle: "Séminaire d'Intégration : Cohésion Durable en 3 Jours | Blog Latitude",
    metaDescription:
      "Comment réussir un séminaire d'intégration et créer une cohésion durable. Méthodologie, programme type, conseils d'experts depuis 20 ans.",
    excerpt:
      "Un bon séminaire d'intégration peut accélérer de 6 mois l'intégration de nouveaux collaborateurs. Notre méthodologie en 3 jours.",
    category: "Séminaires",
    date: "2024-12-08",
    readTime: "10 min",
    author: "Camille Lefort",
    keywords: ["séminaire intégration", "cohésion équipe", "onboarding entreprise"],
    content: [
      {
        paragraphs: [
          "Un nouveau collaborateur met en moyenne 6 mois pour atteindre sa pleine productivité. Un bon séminaire d'intégration peut diviser ce délai par deux. C'est ce que démontrent les études de l'IPSOS et nos propres observations terrain. Mais comment construire un séminaire d'intégration qui ait un véritable impact ? Notre méthodologie éprouvée sur des dizaines de projets.",
        ],
      },
      {
        heading: "Pourquoi un séminaire d'intégration est-il crucial ?",
        paragraphs: [
          "L'intégration ne se décrète pas, elle se construit. Un nouveau collaborateur a 3 questions implicites : 'À quoi je sers ?', 'Avec qui je travaille ?', 'Quelle est cette organisation ?'. Le séminaire d'intégration adresse ces 3 questions de manière concentrée et expérientielle.",
        ],
      },
      {
        heading: "Jour 1 : Comprendre l'organisation",
        paragraphs: [
          "Le premier jour est dédié à la découverte de l'organisation, de sa mission, de sa stratégie. Les meilleurs formats alternent rencontres avec les dirigeants (en mode authentique, pas corporate), ateliers de découverte des métiers et des produits, et moments de vie partagés.",
        ],
        bullets: [
          "Matinée : keynote du DG en mode authentique (pas une présentation)",
          "Après-midi : 'speed-meeting' avec les dirigeants des grandes fonctions",
          "Soirée : dîner informel avec les équipes",
        ],
      },
      {
        heading: "Jour 2 : Découvrir les autres",
        paragraphs: [
          "Le deuxième jour se concentre sur la cohésion entre nouveaux collaborateurs et entre nouveaux et anciens. C'est le jour des activités de team-building, des ateliers collaboratifs, et des moments de rencontre informelle.",
        ],
        bullets: [
          "Matinée : team-building outdoor (escape game, rallye, défi sportif)",
          "Après-midi : ateliers de co-construction sur des projets concrets",
          "Soirée : soirée de gala (créer un souvenir commun fort)",
        ],
      },
      {
        heading: "Jour 3 : Se projeter",
        paragraphs: [
          "Le dernier jour permet de transformer l'expérience en intentions concrètes. Chaque participant repart avec un plan d'action personnel, des contacts identifiés, une vision claire de son rôle.",
        ],
      },
      {
        heading: "Les pièges à éviter",
        paragraphs: ["Voici les erreurs les plus fréquentes que nous voyons sur le terrain."],
        bullets: [
          "Trop d'information descendante (présentations PowerPoint qui s'enchaînent)",
          "Pas assez de moments informels et de rencontres spontanées",
          "Promesses non tenues entre le séminaire et la réalité du quotidien",
          "Aucun suivi après le séminaire (effet 'baby blues')",
          "Format identique pour tous (pas de personnalisation)",
        ],
      },
      {
        heading: "Mesurer l'impact d'un séminaire d'intégration",
        paragraphs: [
          "Un bon séminaire d'intégration se mesure : taux de rétention à 12 mois, time-to-productivity, satisfaction collaborateurs, NPS interne. Nos clients constatent en moyenne +25% de rétention à 18 mois sur les cohortes ayant bénéficié d'un séminaire d'intégration structuré.",
        ],
      },
    ],
  },
  {
    slug: "seminaire-strategique-conception-realisation",
    title: "Séminaire stratégique : de la conception à la réalisation, notre approche",
    metaTitle: "Séminaire Stratégique : Conception à Réalisation | Blog Latitude",
    metaDescription:
      "Méthodologie complète pour réussir un séminaire stratégique : objectifs, format, animation, suivi. Approche éprouvée Latitude Organisation.",
    excerpt:
      "Le séminaire stratégique est un moment de vérité pour un comité de direction. Notre méthodologie en 6 étapes pour le réussir.",
    category: "Séminaires",
    date: "2024-11-12",
    readTime: "12 min",
    author: "Antoine Rivière",
    keywords: ["séminaire stratégique", "séminaire COMEX", "séminaire direction"],
    content: [
      {
        paragraphs: [
          "Un séminaire stratégique réussi peut transformer une organisation. Un séminaire stratégique raté est au mieux du temps perdu, au pire un signal négatif envoyé aux équipes. Voici notre méthodologie en 6 étapes, éprouvée sur des centaines de projets.",
        ],
      },
      {
        heading: "Étape 1 : Cadrage des objectifs",
        paragraphs: [
          "Tout commence par une conversation honnête avec le sponsor (souvent le DG). Quels sont les vrais enjeux ? Quels objectifs précis ? Quels livrables attendus ? Sans cette clarté initiale, le séminaire dérive immanquablement.",
        ],
      },
      {
        heading: "Étape 2 : Sélection des participants",
        paragraphs: [
          "Trop de monde dilue, trop peu limite les angles. Le bon nombre dépend du format : 8-12 pour un travail de fond, 20-30 pour un alignement, 50-100 pour une mobilisation. Nous recommandons toujours d'inclure des perspectives externes (clients, partenaires, experts).",
        ],
      },
      {
        heading: "Étape 3 : Choix du lieu",
        paragraphs: [
          "Le lieu doit servir le format. Lieu inspirant pour la créativité, lieu sobre pour le travail de fond, lieu d'exception pour la cohésion symbolique. Notre réseau de 120+ centres partenaires nous permet de toujours trouver le lieu juste.",
        ],
      },
      {
        heading: "Étape 4 : Conception du programme",
        paragraphs: [
          "Le programme alterne moments de divergence (créativité, exploration) et de convergence (synthèse, décision). Il intègre temps formels et informels, plénière et sous-groupes, contenu et expérience.",
        ],
      },
      {
        heading: "Étape 5 : Animation",
        paragraphs: [
          "Un bon facilitateur fait la différence entre un séminaire utile et un séminaire mémorable. Nous travaillons avec un réseau de facilitateurs senior expérimentés en accompagnement de comités de direction.",
        ],
      },
      {
        heading: "Étape 6 : Suivi post-séminaire",
        paragraphs: [
          "Le séminaire ne se termine pas le dimanche soir. Un livrable structuré doit être produit en 5 jours, des plans d'action lancés sous 2 semaines, un point d'avancement programmé à 90 jours. Sans ce suivi, l'impact se dilue.",
        ],
      },
    ],
  },
  {
    slug: "10-cles-organisation-congres-professionnel",
    title: "Organisation d'un congrès professionnel : les 10 clés du succès",
    metaTitle: "10 Clés Organisation Congrès Professionnel | Blog Latitude",
    metaDescription:
      "Les 10 clés pour réussir l'organisation de votre congrès professionnel : logistique, contenu, technique, expérience participant.",
    excerpt:
      "20 ans d'expérience résumés en 10 clés pour réussir votre congrès professionnel, du brief à la clôture.",
    category: "Congrès",
    date: "2024-11-25",
    readTime: "11 min",
    author: "Léa Bertrand",
    keywords: ["organisation congrès", "congrès professionnel", "agence congrès"],
    content: [
      {
        paragraphs: [
          "Organiser un congrès professionnel est une discipline complexe qui mobilise des dizaines de compétences. Voici les 10 clés que nous avons identifiées en 20 ans d'orchestration des plus grands congrès de France et d'Europe.",
        ],
      },
      {
        heading: "1. Définir les objectifs business avant tout",
        paragraphs: [
          "Un congrès n'est pas une fin en soi. C'est un outil au service d'objectifs business clairs : aligner, célébrer, vendre, mobiliser, transformer. Sans cette clarté, le congrès devient un pur exercice de communication interne.",
        ],
      },
      {
        heading: "2. Penser parcours participant",
        paragraphs: [
          "Du moment où le participant reçoit l'invitation au moment où il rentre chez lui, chaque point de contact compte. Penser parcours, c'est ne laisser aucun moment au hasard.",
        ],
      },
      {
        heading: "3. Choisir le bon lieu",
        paragraphs: [
          "Le lieu doit être adapté à la taille, à la nature et à l'ambition du congrès. Un lieu inadapté est un signal qui contamine toute la perception.",
        ],
      },
      {
        heading: "4. Maîtriser la production technique",
        paragraphs: [
          "Audiovisuel défaillant, son inaudible, lumière mal réglée : autant de détails qui peuvent ruiner un congrès. La production technique doit être irréprochable et le matériel testé en répétition générale.",
        ],
      },
      {
        heading: "5. Soigner le contenu",
        paragraphs: [
          "Un bon contenu prime sur une belle scénographie. Investir dans la qualité des intervenants, le coaching des speakers, la cohérence des messages.",
        ],
      },
      {
        heading: "6. Penser hybride dès le départ",
        paragraphs: [
          "En 2025, l'hybride est un standard. Concevoir le congrès pour le distanciel autant que pour le présentiel, avec une expérience digitale de qualité.",
        ],
      },
      {
        heading: "7. Mesurer en temps réel",
        paragraphs: [
          "Application mobile dédiée, votes en direct, mesures d'engagement : disposer de feedback en temps réel pour ajuster.",
        ],
      },
      {
        heading: "8. Gérer les imprévus",
        paragraphs: [
          "Les imprévus sont une certitude. Disposer de plans B pour chaque moment critique, d'une cellule de crise et d'une équipe entraînée.",
        ],
      },
      {
        heading: "9. Capitaliser",
        paragraphs: [
          "Un congrès produit énormément de contenu. Captation vidéo des sessions, photos, posts réseaux sociaux : transformer l'événement en actif communicationnel durable.",
        ],
      },
      {
        heading: "10. Faire le bilan",
        paragraphs: [
          "Sondage post-événement, debrief équipe, mesure ROI : sans bilan structuré, impossible d'apprendre et de progresser.",
        ],
      },
    ],
  },
  {
    slug: "congres-annuel-logistique-scenographie-tech",
    title: "Congrès annuel : logistique, scénographie, tech et expérience client",
    metaTitle: "Congrès Annuel : Logistique, Scénographie, Tech | Blog Latitude",
    metaDescription:
      "Comment orchestrer un congrès annuel de A à Z : logistique, scénographie, technique, expérience participant. Guide complet.",
    excerpt:
      "Le guide complet pour orchestrer un congrès annuel : 4 dimensions à maîtriser pour un succès garanti.",
    category: "Congrès",
    date: "2024-10-30",
    readTime: "10 min",
    author: "Léa Bertrand",
    keywords: ["congrès annuel", "scénographie congrès", "logistique événement"],
    content: [
      {
        paragraphs: [
          "Le congrès annuel est l'un des événements les plus stratégiques d'une organisation. Il rassemble, mobilise, célèbre. Le réussir suppose de maîtriser quatre dimensions complémentaires : logistique, scénographie, technique, expérience client.",
        ],
      },
      {
        heading: "Dimension 1 : Logistique",
        paragraphs: [
          "La logistique est le squelette invisible du congrès. Transport des participants, hébergement, restauration, gestion des accréditations, signalétique : autant de détails qui doivent être millimétrés. Notre méthodologie : checklists exhaustives, double-check systématique, équipe dédiée 24/7 pendant l'événement.",
        ],
      },
      {
        heading: "Dimension 2 : Scénographie",
        paragraphs: [
          "La scénographie crée l'identité visuelle et sensorielle du congrès. Décor de scène, signalétique, parcours visiteur, ambiance lumière et son : tout contribue à raconter une histoire.",
        ],
      },
      {
        heading: "Dimension 3 : Technique",
        paragraphs: [
          "La technique audiovisuelle est devenue critique. Captation 4K, mapping vidéo, son immersif, live streaming, application mobile dédiée : autant de leviers à orchestrer.",
        ],
      },
      {
        heading: "Dimension 4 : Expérience participant",
        paragraphs: [
          "L'expérience participant est le résultat final. Elle se construit dans les détails : accueil personnalisé, transitions fluides, moments de respiration, surprises positives.",
        ],
      },
    ],
  },
  {
    slug: "congres-international-pieges-eviter",
    title: "Congrès international : les pièges à éviter et comment les contourner",
    metaTitle: "Congrès International : Pièges à Éviter | Blog Latitude",
    metaDescription:
      "Les 7 pièges à éviter pour réussir un congrès international. Conseils d'experts pour orchestrer en sécurité.",
    excerpt:
      "Organiser un congrès à l'international multiplie les risques. Notre liste des 7 pièges les plus fréquents et comment les éviter.",
    category: "Congrès",
    date: "2024-09-15",
    readTime: "9 min",
    author: "Léa Bertrand",
    keywords: ["congrès international", "événement international", "agence événementielle internationale"],
    content: [
      {
        paragraphs: [
          "Organiser un congrès à l'international est exaltant mais risqué. Multipliez les frontières, les langues, les cultures, et vous multipliez les opportunités de surprises. Voici les 7 pièges que nous voyons le plus souvent et comment les contourner.",
        ],
      },
      {
        heading: "Piège 1 : Sous-estimer la logistique transport",
        paragraphs: [
          "Aller-retour internationaux pour 350 personnes, c'est une opération de logistique aérienne. Choix des compagnies, gestion des correspondances, accueil aéroport, transferts : un détail négligé peut désorganiser l'arrivée.",
        ],
      },
      {
        heading: "Piège 2 : Négliger les barrières linguistiques",
        paragraphs: [
          "Tous vos participants ne parlent pas anglais avec aisance. Prévoir traduction simultanée multi-langues, supports en plusieurs langues, intervenants briefés sur leur expression.",
        ],
      },
      {
        heading: "Piège 3 : Mal évaluer les contraintes culturelles",
        paragraphs: [
          "Restrictions alimentaires, horaires de prière, codes vestimentaires, conventions culturelles : autant de dimensions à anticiper. Un repas mal pensé peut exclure une partie des participants.",
        ],
      },
      {
        heading: "Piège 4 : Sous-estimer la connectivité",
        paragraphs: [
          "WiFi instable, problèmes de connexion : insupportables en 2025. Toujours prévoir une connectivité dédiée et redondante.",
        ],
      },
      {
        heading: "Piège 5 : Négliger la sécurité",
        paragraphs: [
          "Sécurité physique, gestion sanitaire, contraintes administratives (visas, formalités) : autant de dimensions à orchestrer en amont. Une cellule sécurité dédiée est indispensable.",
        ],
      },
      {
        heading: "Piège 6 : Mal calibrer les coûts",
        paragraphs: [
          "Les coûts d'un congrès international sont 30-40% plus élevés qu'un événement local équivalent. Ne pas sous-estimer pour éviter les arbitrages douloureux en cours.",
        ],
      },
      {
        heading: "Piège 7 : Sous-estimer le décalage horaire",
        paragraphs: [
          "Vos participants arrivent décalés. Adapter le programme : sessions allégées le premier jour, soirée tôt, réveil possible plus tard.",
        ],
      },
    ],
  },
  {
    slug: "team-building-original-au-dela-cliches",
    title: "Team-building original : au-delà des clichés, créer du lien durable",
    metaTitle: "Team-Building Original : Au-delà des Clichés | Blog Latitude",
    metaDescription:
      "Comment dépasser les clichés du team-building et créer du lien durable. Méthodologie et activités originales.",
    excerpt:
      "Karaoké et soirée bowling ne suffisent plus. Comment concevoir un team-building qui produit un lien durable, au-delà des clichés.",
    category: "Team-Building",
    date: "2024-12-15",
    readTime: "10 min",
    author: "Thomas Marchand",
    keywords: ["team building original", "cohésion équipe", "team building entreprise"],
    content: [
      {
        paragraphs: [
          "Un team-building qui ne crée pas de lien durable est un investissement gâché. Pourtant, combien de team-buildings passe-t-on à l'année à coup de bowling, karaoké et escape games ? Voici notre conviction : un bon team-building suppose une vraie réflexion en amont.",
        ],
      },
      {
        heading: "Comprendre l'enjeu de cohésion",
        paragraphs: [
          "Avant de choisir une activité, comprendre l'enjeu : nouvelles équipes ? Conflit interne ? Motivation en baisse ? Chaque enjeu appelle une approche différente.",
        ],
      },
      {
        heading: "Ce qui crée du lien : la vulnérabilité partagée",
        paragraphs: [
          "Les meilleurs team-buildings créent des moments de vulnérabilité partagée : on a peur ensemble (escalade), on rit ensemble (improvisation), on crée ensemble (œuvre collective). Ces moments produisent un lien plus fort que mille apéros.",
        ],
      },
      {
        heading: "10 activités originales testées",
        paragraphs: ["Notre sélection d'activités sortant des sentiers battus."],
        bullets: [
          "Construction d'une œuvre d'art collective avec un artiste reconnu",
          "Survie en pleine nature avec ex-militaires",
          "Cuisine moléculaire avec un chef étoilé",
          "Improvisation théâtrale avec une compagnie professionnelle",
          "Escape rooms géants en lieux d'exception",
          "Régates en flottille avec skippers pros",
          "Vol en montgolfière au lever du soleil",
          "Initiation à l'art de la dégustation (vins, thés, parfums)",
          "Construction d'instruments de musique en équipe + concert final",
          "Rallye 4x4 dans le désert marocain",
        ],
      },
      {
        heading: "Le suivi : ce qui fait la différence",
        paragraphs: [
          "Un team-building sans suivi est un feu de paille. Restituer les apprentissages, ancrer les comportements, mesurer l'impact à 3 et 6 mois : c'est ce qui transforme l'événement en transformation durable.",
        ],
      },
    ],
  },
  {
    slug: "team-building-outdoor-vs-indoor",
    title: "Team-building outdoor vs indoor : lequel choisir selon vos objectifs",
    metaTitle: "Team-Building Outdoor vs Indoor : Comment Choisir | Blog Latitude",
    metaDescription:
      "Outdoor ou indoor pour votre team-building ? Notre guide pour choisir le bon format selon vos objectifs et votre équipe.",
    excerpt:
      "Outdoor ou indoor ? Le choix n'est pas anodin. Notre guide pour aligner format de team-building et objectifs business.",
    category: "Team-Building",
    date: "2024-11-05",
    readTime: "8 min",
    author: "Thomas Marchand",
    keywords: ["team building outdoor", "team building indoor", "team building entreprise"],
    content: [
      {
        paragraphs: [
          "Outdoor ou indoor : le choix n'est pas anodin. Chaque format a ses forces, ses limites, ses enjeux. Voici comment aligner votre choix avec vos objectifs.",
        ],
      },
      {
        heading: "Outdoor : la puissance de l'expérience",
        paragraphs: [
          "L'outdoor crée un terrain d'aventure qui sort radicalement du cadre quotidien. Avantages : intensité émotionnelle, vulnérabilité partagée, souvenirs marquants. Limites : météo, contraintes physiques, logistique plus lourde.",
        ],
      },
      {
        heading: "Indoor : la souplesse et l'inclusivité",
        paragraphs: [
          "L'indoor offre maîtrise et inclusivité. Avantages : pas d'aléa météo, accessible à tous, format souple. Limites : moins d'intensité, risque de banalisation.",
        ],
      },
      {
        heading: "Quand choisir l'outdoor ?",
        paragraphs: ["Plusieurs cas où l'outdoor s'impose."],
        bullets: [
          "Renforcer une cohésion existante par une expérience marquante",
          "Sortir d'une zone de confort collective",
          "Marquer un moment important (anniversaire, lancement, succès)",
          "Profiter d'une saison ou destination spécifique",
        ],
      },
      {
        heading: "Quand choisir l'indoor ?",
        paragraphs: ["Et les cas où l'indoor est préférable."],
        bullets: [
          "Équipe avec contraintes physiques ou médicales",
          "Format court (demi-journée)",
          "Saison défavorable",
          "Lien fort avec un contenu pédagogique (formation associée)",
          "Budget plus serré",
        ],
      },
      {
        heading: "Le mix : la solution gagnante",
        paragraphs: [
          "Souvent, le meilleur format mixe outdoor et indoor : une matinée d'aventure suivie d'un atelier reflexif, par exemple. C'est ce qui produit les expériences les plus complètes.",
        ],
      },
    ],
  },
  {
    slug: "5-activites-team-building-creatif",
    title: "Team-building créatif : 5 activités innovantes pour fédérer vos équipes",
    metaTitle: "5 Activités Team-Building Créatif Innovantes | Blog Latitude",
    metaDescription:
      "5 activités de team-building créatif testées et approuvées : musique, peinture, cuisine, improvisation, fabrication.",
    excerpt:
      "5 activités de team-building créatif pour sortir du lot et créer une expérience véritablement marquante.",
    category: "Team-Building",
    date: "2024-10-18",
    readTime: "7 min",
    author: "Sophie Allard",
    keywords: ["team building créatif", "team building artistique", "atelier créatif entreprise"],
    content: [
      {
        paragraphs: [
          "La créativité collective est un puissant catalyseur de cohésion. Voici 5 activités créatives testées et approuvées qui marchent particulièrement bien en team-building.",
        ],
      },
      {
        heading: "1. Atelier musique collective",
        paragraphs: [
          "Construire un instrument, apprendre une partition, jouer ensemble. Une expérience qui révèle l'écoute, le rythme, la complémentarité. Particulièrement adapté aux équipes en quête d'harmonie.",
        ],
      },
      {
        heading: "2. Fresque collective",
        paragraphs: [
          "Avec un artiste reconnu, votre équipe co-crée une œuvre durable. L'œuvre finale orne ensuite vos bureaux, témoin physique de la cohésion construite.",
        ],
      },
      {
        heading: "3. Cuisine en brigade",
        paragraphs: [
          "Avec un chef étoilé, brigade complète qui prépare le dîner. Découpe, cuisson, dressage, service : chaque rôle compte. Apprentissage du collectif sous pression bienveillante.",
        ],
      },
      {
        heading: "4. Improvisation théâtrale",
        paragraphs: [
          "Avec des comédiens professionnels, votre équipe explore l'écoute, l'acceptation des propositions, le rebond. Une expérience qui révèle des dimensions inattendues.",
        ],
      },
      {
        heading: "5. Mini-films collectifs",
        paragraphs: [
          "En équipes de 6-8, écrire, tourner et monter un court-métrage en une journée. Avec coaching pro à chaque étape. Le visionnage en commun le soir crée une émotion partagée puissante.",
        ],
      },
    ],
  },
  {
    slug: "soiree-evenementielle-ambiance-decoration-animation",
    title: "Soirée événementielle réussie : ambiance, décoration et animation",
    metaTitle: "Soirée Événementielle Réussie : 3 Piliers | Blog Latitude",
    metaDescription:
      "Les 3 piliers d'une soirée événementielle réussie : ambiance, décoration, animation. Conseils d'experts depuis 20 ans.",
    excerpt:
      "Ambiance, décoration, animation : les trois piliers d'une soirée événementielle réussie. Notre méthodologie.",
    category: "Soirées",
    date: "2024-12-20",
    readTime: "8 min",
    author: "Sophie Allard",
    keywords: ["soirée événementielle", "soirée entreprise", "décoration soirée"],
    content: [
      {
        paragraphs: [
          "Une soirée événementielle réussie repose sur trois piliers : l'ambiance créée, la décoration imaginée, l'animation orchestrée. Quand ces trois dimensions s'alignent, c'est la magie. Quand l'une faiblit, l'ensemble vacille.",
        ],
      },
      {
        heading: "Pilier 1 : L'ambiance",
        paragraphs: [
          "L'ambiance se crée dès l'arrivée des invités. Lumière, parfum, musique, accueil : autant de signaux qui placent le ton. Notre conseil : penser l'ambiance comme un voyage. Éveil progressif, climax, retombée maîtrisée.",
        ],
      },
      {
        heading: "Pilier 2 : La décoration",
        paragraphs: [
          "La décoration est le visage de la soirée. Elle doit être cohérente avec le thème, l'identité de marque, la saison. Investir dans la fleuristerie, le mobilier, la lumière scénique.",
        ],
      },
      {
        heading: "Pilier 3 : L'animation",
        paragraphs: [
          "L'animation rythme la soirée. Elle alterne moments forts (show artistique, mapping vidéo, danse) et moments de respiration (cocktail, dîner, conversations). Une bonne animation est invisible quand elle marche bien.",
        ],
      },
      {
        heading: "L'art du timing",
        paragraphs: [
          "Le timing est crucial. Trop d'animation fatigue, trop peu ennuie. Notre méthode : un moment fort toutes les 45-60 minutes, alternance énergie/calme, climax vers minuit.",
        ],
      },
    ],
  },
  {
    slug: "gala-entreprise-experience-inoubliable",
    title: "Gala d'entreprise : créer une expérience inoubliable pour vos clients",
    metaTitle: "Gala d'Entreprise : Expérience Inoubliable | Blog Latitude",
    metaDescription:
      "Comment créer un gala d'entreprise inoubliable. Méthodologie complète : lieu, scénographie, animation, gastronomie.",
    excerpt:
      "Le gala d'entreprise, ultime témoignage de prestige. Notre méthodologie pour créer une expérience véritablement inoubliable.",
    category: "Soirées",
    date: "2024-10-05",
    readTime: "11 min",
    author: "Sophie Allard",
    keywords: ["gala entreprise", "soirée gala", "gala professionnel"],
    content: [
      {
        paragraphs: [
          "Le gala d'entreprise est l'ultime témoignage de prestige. Il rassemble clients, partenaires, dirigeants dans un cadre d'exception. C'est aussi un investissement majeur. Comment garantir un retour à la hauteur ?",
        ],
      },
      {
        heading: "Le choix du lieu : signal majeur",
        paragraphs: [
          "Un gala dans un lieu d'exception (musée, château, palace) place immédiatement la barre haut. Notre réseau de lieux prestigieux : Musée d'Orsay, Hôtel de Crillon, Palais Brongniart, Château de Vaux-le-Vicomte, Bourse de Commerce.",
        ],
      },
      {
        heading: "La scénographie : raconter une histoire",
        paragraphs: [
          "Un gala raconte toujours une histoire. Anniversaire de l'entreprise, célébration d'un succès, lancement d'une nouvelle vision : la scénographie incarne ce récit. Décoration florale, lumière, mapping vidéo : tout est outil narratif.",
        ],
      },
      {
        heading: "La gastronomie : signature mémoire",
        paragraphs: [
          "Le repas est le moment pivot. Travailler avec des chefs étoilés, accorder mets et vins, proposer une expérience gustative singulière. C'est ce qui restera en mémoire.",
        ],
      },
      {
        heading: "L'animation artistique : moment de grâce",
        paragraphs: [
          "Une danseuse étoile, un orchestre symphonique, un chœur gospel, un pianiste virtuose : l'animation artistique de qualité est ce qui fait passer un gala dans une autre dimension.",
        ],
      },
      {
        heading: "L'attention aux détails : ce qui reste",
        paragraphs: [
          "Cadeau de bienvenue raffiné, photographe présent, photobooth élégant, voiturier attentif : ce sont les détails qui marquent durablement.",
        ],
      },
    ],
  },
  {
    slug: "organiser-evenement-marrakech-guide-complet",
    title: "Organiser un événement à Marrakech : guide complet et inspirations",
    metaTitle: "Événement Marrakech : Guide Complet et Inspirations | Blog Latitude",
    metaDescription:
      "Guide complet pour organiser un événement à Marrakech : lieux, climat, activités, logistique. Tous nos conseils experts.",
    excerpt:
      "Marrakech, destination phare de l'événementiel international. Notre guide complet pour y organiser un événement d'exception.",
    category: "Destination",
    date: "2024-09-25",
    readTime: "13 min",
    author: "Antoine Rivière",
    keywords: ["événement Marrakech", "séminaire Marrakech", "incentive Maroc"],
    content: [
      {
        paragraphs: [
          "Marrakech est devenue l'une des destinations phares de l'événementiel international. À 3h30 de Paris en avion, elle offre un dépaysement total, des palaces d'exception, une cuisine raffinée et des paysages contrastés. Voici notre guide complet pour y organiser un événement d'exception.",
        ],
      },
      {
        heading: "Pourquoi choisir Marrakech ?",
        paragraphs: [
          "Trois raisons majeures : un dépaysement immédiat (architecture, sons, parfums), une infrastructure de luxe parmi les meilleures du monde (palaces 5*, riads d'exception), un rapport qualité/prix imbattable comparé aux destinations européennes équivalentes.",
        ],
      },
      {
        heading: "Climat et meilleure période",
        paragraphs: [
          "Mars à juin et septembre à novembre sont les meilleures saisons. Évitez juillet-août (chaleur extrême) et décembre-février (nuits froides). La période idéale : avril-mai et octobre.",
        ],
      },
      {
        heading: "Lieux d'exception",
        paragraphs: ["Marrakech regorge de lieux exceptionnels."],
        bullets: [
          "La Mamounia : palace mythique de la ville",
          "Royal Mansour : palace royal, conçu par le roi du Maroc",
          "Selman Marrakech : élégance contemporaine",
          "Riads privatisables dans la médina",
          "Palmeraie pour les soirées en extérieur",
          "Désert d'Agafay : à 1h, pour les expériences uniques",
        ],
      },
      {
        heading: "Activités phares",
        paragraphs: ["Les expériences à intégrer dans votre programme."],
        bullets: [
          "Rallye 4x4 dans le désert d'Agafay",
          "Vol en montgolfière au lever du soleil",
          "Soirée traditionnelle avec spectacle équestre Fantasia",
          "Visite privée de la Médina avec guide",
          "Atelier cuisine marocaine avec chef local",
          "Hammam traditionnel et spa",
          "Excursion dans l'Atlas",
        ],
      },
      {
        heading: "Logistique",
        paragraphs: [
          "Vols directs depuis Paris (3h30), Lyon, Marseille. Transferts aéroport en 20 minutes (ville) à 1h (Agafay). Réseau de prestataires locaux mature. Hébergement disponible jusqu'à 1 500 chambres simultanément en haut de gamme.",
        ],
      },
      {
        heading: "Budget indicatif",
        paragraphs: [
          "Compter 1 200€ à 3 500€ par participant pour un séminaire de 3 jours en haut de gamme à Marrakech, transport aérien inclus. Le rapport qualité/prix est imbattable comparé à l'équivalent européen.",
        ],
      },
    ],
  },
];

// =============================
// DESTINATIONS DÉTAILLÉES
// =============================

export type DestinationDetail = {
  slug: string;
  name: string;
  country: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  why: string[];
  lieux: string[];
  activites: string[];
  climat: string;
  bestSeason: string;
  cas: string;
  keywords: string[];
};

export const destinationsDetails: DestinationDetail[] = [
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    metaTitle: "Organiser un Événement à Paris - Lieux & Conseils",
    metaDescription:
      "Organiser un séminaire, congrès ou soirée à Paris. Lieux d'exception, conseils logistique. Latitude Organisation.",
    h1: "Organiser un événement à Paris",
    intro:
      "Paris reste la capitale incontournable de l'événementiel B2B. Lieux d'exception, infrastructure parfaite, dimension internationale : la Ville Lumière offre un cadre unique pour vos congrès, séminaires et soirées de prestige.",
    why: [
      "Capitale internationale avec connexion mondiale",
      "Densité de lieux prestigieux unique au monde",
      "Réseau hôtelier 5* le plus dense d'Europe",
      "Gastronomie de référence mondiale",
      "Image de marque immédiate pour vos invités",
    ],
    lieux: [
      "Palais des Congrès, Porte Maillot - congrès jusqu'à 3 700 places",
      "Hôtel de Crillon - soirée prestige place de la Concorde",
      "Musée d'Orsay - privatisations exceptionnelles",
      "Palais Brongniart - ancienne Bourse, lieu emblématique",
      "Bourse de Commerce - art contemporain",
      "Palais Royal - galeries du Conseil d'État",
      "Centre des Congrès Paris-La Défense",
      "Théâtre du Châtelet",
    ],
    activites: [
      "Privatisation de musées (Orsay, Pompidou, Cluny)",
      "Croisière dîner sur la Seine",
      "Rallye urbain dans Paris",
      "Visite privée de la Tour Eiffel",
      "Atelier gastronomique avec chef étoilé",
      "Soirée au Lido ou Moulin Rouge",
      "Visite de l'Opéra Garnier",
    ],
    climat: "Tempéré océanique. Étés doux, hivers frais.",
    bestSeason: "Mai-juin et septembre-octobre.",
    cas: "Convention Annuelle TechCorp - 850 personnes au Palais des Congrès",
    keywords: ["événement Paris", "séminaire Paris", "congrès Paris", "soirée Paris"],
  },
  {
    slug: "lyon",
    name: "Lyon",
    country: "France",
    metaTitle: "Organiser un Événement à Lyon - Lieux & Conseils",
    metaDescription:
      "Organiser séminaire, congrès, soirée à Lyon. Lieux, gastronomie, logistique. Latitude Organisation.",
    h1: "Organiser un événement à Lyon",
    intro:
      "Capitale de la gastronomie et carrefour européen, Lyon est une destination événementielle de premier choix. Patrimoine UNESCO, infrastructure moderne, vie culturelle riche : Lyon offre un excellent rapport qualité/prix face à Paris.",
    why: [
      "Capitale française de la gastronomie",
      "Infrastructure moderne (Centre des Congrès récent)",
      "Patrimoine classé UNESCO",
      "Carrefour européen (TGV, aéroport international)",
      "Coûts inférieurs à Paris à qualité équivalente",
    ],
    lieux: [
      "Centre des Congrès de Lyon",
      "Cité internationale",
      "Palais de la Bourse",
      "Hôtel-Dieu (lieu d'exception)",
      "Musée des Confluences",
      "Domaines viticoles du Beaujolais",
    ],
    activites: [
      "Visite des Bouchons lyonnais avec dégustation",
      "Atelier avec chefs étoilés (Bocuse, Boulud)",
      "Découverte du Vieux-Lyon (UNESCO)",
      "Croisière sur la Saône",
      "Excursion dans le Beaujolais",
    ],
    climat: "Continental. Étés chauds, hivers froids.",
    bestSeason: "Mai-juin et septembre.",
    cas: "Séminaire Bouchons Gastronomiques - 80 dirigeants",
    keywords: ["événement Lyon", "séminaire Lyon", "congrès Lyon"],
  },
  {
    slug: "nice",
    name: "Nice",
    country: "France",
    metaTitle: "Organiser un Événement à Nice - Côte d'Azur",
    metaDescription:
      "Organiser séminaire, congrès à Nice et Côte d'Azur. Cadre méditerranéen, lieux d'exception. Latitude.",
    h1: "Organiser un événement à Nice & Côte d'Azur",
    intro:
      "Nice et la Côte d'Azur offrent un cadre méditerranéen unique pour vos événements professionnels. Soleil, mer, lieux d'exception, vie nocturne : un combo gagnant pour les séminaires et incentives.",
    why: [
      "Cadre méditerranéen exceptionnel",
      "Aéroport international (2ème de France)",
      "Concentration de palaces 5*",
      "Climat doux 9 mois sur 12",
      "Proximité Monaco et Italie",
    ],
    lieux: [
      "Centre des Congrès Acropolis",
      "Hôtels Negresco, Boscolo, Hyatt",
      "Villa Ephrussi de Rothschild (Cap-Ferrat)",
      "Casino de Monte-Carlo (à proximité)",
    ],
    activites: [
      "Croisière en yacht le long de la Côte",
      "Excursion à Monaco / Monte-Carlo",
      "Découverte de la Riviera (Èze, Saint-Paul-de-Vence)",
      "Soirée jazz à Juan-les-Pins",
      "Initiation à la voile",
    ],
    climat: "Méditerranéen. Doux toute l'année.",
    bestSeason: "Mars à octobre.",
    cas: "Séminaire Direction Cap-Ferrat - 120 dirigeants",
    keywords: ["événement Nice", "séminaire Côte d'Azur", "incentive Nice"],
  },
  {
    slug: "chamonix",
    name: "Chamonix",
    country: "France",
    metaTitle: "Organiser un Événement à Chamonix - Mont-Blanc",
    metaDescription:
      "Séminaire, team-building, incentive à Chamonix Mont-Blanc. Cadre haute montagne d'exception.",
    h1: "Organiser un événement à Chamonix",
    intro:
      "Chamonix-Mont-Blanc est la mecque de l'événementiel montagne. Cadre mythique au pied du plus haut sommet d'Europe, ambiance authentique alpine, infrastructure complète : la destination idéale pour vos team-buildings et séminaires hivernaux ou estivaux.",
    why: [
      "Cadre mythique au pied du Mont-Blanc",
      "Activités outdoor uniques (toute l'année)",
      "Infrastructure hôtelière 5* (Hameau Albert 1er, Mont-Blanc)",
      "Accessible (vols Genève + 1h route)",
      "Ambiance authentique alpine",
    ],
    lieux: [
      "Hameau Albert 1er - Relais & Châteaux",
      "Hôtel Mont-Blanc - emblématique de la vallée",
      "Refuges d'altitude pour expériences uniques",
      "Aiguille du Midi - déjeuner à 3 842m",
    ],
    activites: [
      "Escalade et via ferrata accompagnée",
      "Randonnée raquettes",
      "Ski de piste et hors-piste avec moniteurs",
      "Vol en parapente du Brévent",
      "Survol du massif en hélicoptère",
      "Initiation à l'alpinisme",
    ],
    climat: "Montagnard. Hivers neigeux, étés frais.",
    bestSeason: "Décembre-mars (ski) et juin-septembre (été).",
    cas: "Incentive Montagne Novatec - 200 commerciaux",
    keywords: ["événement Chamonix", "séminaire Mont-Blanc", "incentive montagne"],
  },
  {
    slug: "marrakech",
    name: "Marrakech",
    country: "Maroc",
    metaTitle: "Organiser un Événement à Marrakech - Maroc",
    metaDescription:
      "Séminaire, congrès, incentive à Marrakech. Palaces d'exception, désert, expériences uniques.",
    h1: "Organiser un événement à Marrakech",
    intro:
      "Destination phare de l'événementiel international, Marrakech offre dépaysement total, palaces parmi les meilleurs du monde, expériences uniques (désert, palmeraie), à 3h30 de Paris seulement.",
    why: [
      "Dépaysement immédiat à 3h30 de Paris",
      "Palaces d'exception (La Mamounia, Royal Mansour)",
      "Activités uniques (désert, fantasia)",
      "Rapport qualité/prix imbattable",
      "Climat doux d'octobre à mai",
    ],
    lieux: [
      "La Mamounia - palace mythique",
      "Royal Mansour - palace royal",
      "Selman Marrakech - élégance contemporaine",
      "Riads privatisables dans la médina",
      "Palmeraie pour soirées en extérieur",
      "Désert d'Agafay (à 45 min)",
    ],
    activites: [
      "Rallye 4x4 dans le désert d'Agafay",
      "Vol en montgolfière au lever du soleil",
      "Soirée Fantasia avec spectacle équestre",
      "Visite de la médina avec guide privé",
      "Atelier cuisine marocaine",
      "Hammam et spa traditionnel",
      "Excursion dans l'Atlas",
    ],
    climat: "Méditerranéen sec. Étés très chauds, hivers doux.",
    bestSeason: "Mars-juin et septembre-novembre.",
    cas: "Forum Leadership Médiane - 350 dirigeants à La Mamounia",
    keywords: ["événement Marrakech", "incentive Maroc", "séminaire Marrakech"],
  },
  {
    slug: "lisbonne",
    name: "Lisbonne",
    country: "Portugal",
    metaTitle: "Organiser un Événement à Lisbonne - Portugal",
    metaDescription:
      "Séminaire, congrès, incentive à Lisbonne. Charme atlantique, gastronomie, design hôtels.",
    h1: "Organiser un événement à Lisbonne",
    intro:
      "Lisbonne séduit par son authenticité, son climat doux, sa gastronomie et son rapport qualité/prix exceptionnel. Une destination tendance pour les séminaires et incentives européens.",
    why: [
      "Charme atlantique authentique",
      "Climat doux toute l'année",
      "Hôtels design exceptionnels",
      "Gastronomie portugaise sublime",
      "Coûts 30-40% inférieurs à Paris",
    ],
    lieux: [
      "Pestana Palace Lisboa",
      "Four Seasons Ritz Lisbon",
      "Tivoli Avenida Liberdade",
      "Palácio Belmonte (boutique)",
      "Quintas viticoles à proximité",
    ],
    activites: [
      "Tuk-tuk dans Lisbonne",
      "Croisière sur le Tage",
      "Dégustation de Porto et Madère",
      "Visite de Sintra",
      "Surf à Cascais",
      "Atelier pastel de nata",
    ],
    climat: "Méditerranéen océanique. Doux toute l'année.",
    bestSeason: "Avril-juin et septembre-octobre.",
    cas: "Séminaire Marketing Atlantique - 100 collaborateurs",
    keywords: ["événement Lisbonne", "séminaire Portugal", "incentive Lisbonne"],
  },
  {
    slug: "barcelone",
    name: "Barcelone",
    country: "Espagne",
    metaTitle: "Organiser un Événement à Barcelone - Espagne",
    metaDescription:
      "Séminaire, congrès à Barcelone. Architecture, mer, gastronomie. Latitude Organisation.",
    h1: "Organiser un événement à Barcelone",
    intro:
      "Barcelone combine architecture exceptionnelle (Gaudí), bord de mer, gastronomie et infrastructure moderne. Une destination événementielle européenne incontournable.",
    why: [
      "Architecture Gaudí unique au monde",
      "Bord de mer méditerranéen",
      "Centre de congrès parmi les plus grands d'Europe",
      "Gastronomie catalane raffinée",
      "Vol direct 2h depuis Paris",
    ],
    lieux: [
      "Centre de Congrès CCIB",
      "Hôtel Arts Barcelona",
      "W Barcelona",
      "Casa Batlló (privatisations)",
      "Palau de la Música Catalana",
    ],
    activites: [
      "Visite privée de la Sagrada Familia",
      "Atelier tapas avec chef catalan",
      "Voile en Méditerranée",
      "Tour Gaudí (Casa Batlló, Park Güell)",
      "Soirée flamenco",
    ],
    climat: "Méditerranéen. Étés chauds, hivers doux.",
    bestSeason: "Avril-juin et septembre-octobre.",
    cas: "Convention Tech Européenne - 600 participants",
    keywords: ["événement Barcelone", "séminaire Espagne", "congrès Barcelone"],
  },
  {
    slug: "rome",
    name: "Rome",
    country: "Italie",
    metaTitle: "Organiser un Événement à Rome - Italie",
    metaDescription:
      "Séminaire, congrès à Rome. Patrimoine antique, hôtels d'exception, dolce vita.",
    h1: "Organiser un événement à Rome",
    intro:
      "Rome offre un patrimoine antique unique, des hôtels palaces d'exception et une atmosphère 'dolce vita' inimitable. La destination idéale pour des événements de prestige.",
    why: [
      "Patrimoine antique unique au monde",
      "Hôtels palaces historiques",
      "Gastronomie italienne mondialement reconnue",
      "Atmosphère dolce vita inimitable",
      "Vol direct 2h depuis Paris",
    ],
    lieux: [
      "Hassler Roma - vue sur la Trinità dei Monti",
      "Hotel de Russie",
      "Palazzo Manfredi - vue Colisée",
      "Villa Medici",
      "Castel Sant'Angelo (privatisations rares)",
    ],
    activites: [
      "Visite privée du Vatican (Chapelle Sixtine)",
      "Privatisation du Colisée",
      "Atelier cuisine italienne avec mamma",
      "Dégustation de vins toscans",
      "Tour en Vespa de Rome",
    ],
    climat: "Méditerranéen. Étés chauds, hivers doux.",
    bestSeason: "Avril-juin et septembre-octobre.",
    cas: "Soirée Gala 30 ans - 300 invités au Castel Sant'Angelo",
    keywords: ["événement Rome", "séminaire Italie", "soirée Rome"],
  },
  {
    slug: "geneve",
    name: "Genève",
    country: "Suisse",
    metaTitle: "Organiser un Événement à Genève - Suisse",
    metaDescription:
      "Séminaire, congrès à Genève. Lac, Alpes, infrastructure suisse premium.",
    h1: "Organiser un événement à Genève",
    intro:
      "Genève allie qualité suisse, cadre lacustre exceptionnel et proximité des Alpes. Destination prestige pour les événements internationaux et conventions financières.",
    why: [
      "Qualité d'exécution suisse",
      "Cadre lacustre et alpin exceptionnel",
      "Place financière internationale",
      "Hôtels palaces 5* multiples",
      "Aéroport international au cœur de la ville",
    ],
    lieux: [
      "Hôtel des Bergues - palace lacustre",
      "Beau-Rivage - institution genevoise",
      "Mandarin Oriental Geneva",
      "Centre des Congrès CICG",
      "Domaines viticoles du Léman",
    ],
    activites: [
      "Croisière sur le Léman",
      "Excursion à Chamonix (1h)",
      "Dégustation de vins suisses",
      "Visite de l'ONU",
      "Tour en bateau jusqu'à Lausanne",
    ],
    climat: "Continental. Étés doux, hivers froids.",
    bestSeason: "Mai-juin et septembre.",
    cas: "Convention Finance Internationale - 250 participants",
    keywords: ["événement Genève", "séminaire Suisse", "congrès Genève"],
  },
  {
    slug: "montreal",
    name: "Montréal",
    country: "Canada",
    metaTitle: "Organiser un Événement à Montréal - Canada",
    metaDescription:
      "Séminaire, congrès à Montréal. Métropole francophone du Canada, dynamique tech.",
    h1: "Organiser un événement à Montréal",
    intro:
      "Montréal, métropole francophone d'Amérique du Nord, offre une destination unique combinant culture européenne et énergie nord-américaine. Idéale pour les conventions tech et les incentives long-courrier.",
    why: [
      "Métropole francophone d'Amérique du Nord",
      "Écosystème tech dynamique",
      "Mix culturel européen + nord-américain",
      "Vols directs 7h depuis Paris",
      "Saisons marquées (été lumineux, hiver féérique)",
    ],
    lieux: [
      "Palais des Congrès de Montréal",
      "Fairmont Reine Elizabeth",
      "Ritz-Carlton Montréal",
      "Place des Arts",
      "Vieux-Port pour événements estivaux",
    ],
    activites: [
      "Découverte du Vieux-Montréal",
      "Excursion au Mont-Tremblant",
      "Cabane à sucre (saisonnier)",
      "Visite des microbrasseries",
      "Festival de jazz (été)",
    ],
    climat: "Continental humide. Étés chauds, hivers très froids.",
    bestSeason: "Mai-juin et septembre-octobre.",
    cas: "Convention Tech Internationale - 400 participants",
    keywords: ["événement Montréal", "incentive Canada", "congrès Montréal"],
  },
];
