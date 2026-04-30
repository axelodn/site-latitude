// Centralized content for all pages - SEO-optimized

export const team = [
  {
    name: "Jérôme Aviotte",
    role: "Directeur Général & Fondateur",
    bio: "Fondateur de Latitude Organisation en 2004. 25 ans d'expérience dans l'événementiel B2B. Visionnaire passionné, il a tissé le réseau de partenaires qui fait notre force aujourd'hui.",
    image: "/images/jerome-casino.jpg",
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
    year: "2017",
    title: "Soirée au Stade Français Paris",
    description:
      "Organisation d'une soirée de gala pour plus de 500 personnes au sein de l'enceinte du Stade Français Paris — scénographie immersive, animations live et dîner de prestige dans un cadre sportif et emblématique.",
  },
  {
    year: "2019",
    title: "Séminaire Renault Group",
    description:
      "Pilotage du séminaire stratégique annuel de Renault Group : deux jours de plénières, ateliers de cohésion et soirée de gala pour 400 cadres dirigeants. Un événement d'envergure internationale confié à Latitude Organisation de A à Z.",
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
// ACTIVITÉS TEAM-BUILDING
// =============================

export type Activity = {
  slug: string;
  name: string;
  category: "interieur" | "exterieur";
  image?: string;
  images: string[];
  excerpt: string;
  description: string;
  isLatitudeOriginal?: boolean;
  duration?: string;
  participants?: string;
};

export const activities: Activity[] = [
  // ========== INTÉRIEUR ==========
  {
    slug: "sens-et-conscience",
    name: "Sens et conscience",
    category: "interieur",
    image: "/images/sens-conscience-bulle.png",
    images: ["/images/sens-conscience-bulle.png"],
    excerpt: "Une expérience immersive et sensorielle pour développer écoute, confiance et cohésion d'équipe.",
    description: "Sens et conscience est une activité indoor immersive qui plonge vos collaborateurs dans une bulle d'expérience sensorielle. À travers des ateliers de pleine conscience, d'écoute active et de découverte des sens (vue, ouïe, toucher, goût, odorat), vos équipes développent une nouvelle qualité de présence et d'écoute mutuelle. Une activité ressourçante qui renforce la cohésion durablement.",
    duration: "2h à 1/2 journée",
    participants: "10 à 80",
  },
  {
    slug: "energie-c",
    name: "Energie C",
    category: "interieur",
    images: [],
    excerpt: "Un atelier dynamique qui libère l'énergie collective et booste la motivation à travers des défis créatifs.",
    description: "Energie C est conçu pour réveiller la dynamique d'équipe et libérer l'énergie collective. Au programme : défis créatifs, exercices participatifs et challenges à relever ensemble. Une animation indoor pleine de rythme qui remet votre équipe en mouvement et renforce l'esprit collectif.",
    duration: "2h à 3h",
    participants: "10 à 100",
  },
  {
    slug: "atelier-beaux-arts",
    name: "Atelier Beaux Arts",
    category: "interieur",
    images: [],
    excerpt: "Initiez-vous aux beaux-arts en équipe : peinture, dessin, sculpture. Une activité créative qui révèle les talents.",
    description: "Plongez dans l'univers des beaux-arts à travers une activité collective encadrée par un artiste professionnel. Peinture, dessin, sculpture ou techniques mixtes : chaque équipe crée une œuvre qui sera dévoilée en fin de session. Une activité indoor accessible qui révèle les talents cachés et fédère les collaborateurs autour d'une expérience créative.",
    duration: "2h à 1/2 journée",
    participants: "8 à 60",
  },
  {
    slug: "challenge-temps-x",
    name: "Challenge Temps X",
    category: "interieur",
    images: [],
    excerpt: "Un challenge contre la montre où chaque équipe relève des épreuves variées. Coopération, stratégie et adrénaline.",
    description: "Challenge Temps X est une compétition rythmée par le chrono. Vos équipes enchaînent des épreuves variées (logique, manuelle, créative, sportive) avec un temps limité pour chacune. Coordination, prise de décision rapide et coopération sont les clés du succès. Idéal pour insuffler une dynamique de défi et de performance collective.",
    duration: "2h à 1/2 journée",
    participants: "12 à 100",
  },
  {
    slug: "atelier-culinaire",
    name: "Atelier Culinaire",
    category: "interieur",
    images: [],
    excerpt: "Mettez la main à la pâte : un chef vous accompagne pour créer un repas en équipe à déguster ensemble.",
    description: "L'Atelier Culinaire est une activité conviviale qui réunit vos collaborateurs autour d'un projet gourmand. Sous la conduite d'un chef, chaque équipe prépare un plat ou un menu complet, à partager ensuite tous ensemble. Au-delà du simple cours de cuisine, c'est un moment fédérateur, sensoriel et chaleureux qui renforce les liens.",
    duration: "1/2 journée",
    participants: "8 à 50",
  },
  {
    slug: "oeno-academy",
    name: "Oeno Academy",
    category: "interieur",
    image: "/images/cocktail-spirits.jpg",
    images: [
      "/images/cocktail-spirits.jpg",
      "/images/cocktail-bar.jpg",
      "/images/cocktail-setup.jpg",
      "/images/cocktail-workshop.jpg",
    ],
    excerpt: "Initiation à l'œnologie : dégustation à l'aveugle, découverte des cépages, accord mets et vins.",
    description: "Oeno Academy invite vos équipes à explorer le monde du vin avec un sommelier expert. Au programme : dégustation à l'aveugle, reconnaissance des cépages, étude des terroirs et exercices d'accord mets et vins. Une expérience sensorielle, ludique et culturelle qui plaît à tous, néophytes comme amateurs.",
    duration: "2h à 3h",
    participants: "8 à 60",
  },
  {
    slug: "murder-party",
    name: "Murder Party",
    category: "interieur",
    image: "/images/murder-atelier.jpg",
    images: [
      "/images/murder-atelier.jpg",
      "/images/murder-atelier-2.jpg",
      "/images/murder-karim.jpg",
      "/images/murder-sergio.jpg",
    ],
    excerpt: "Plongez dans une enquête grandeur nature : interrogez les suspects, recoupez les indices, démasquez le coupable.",
    description: "Une Murder Party transforme votre événement en véritable scène de crime. Comédiens professionnels, suspects à interroger, indices disséminés et énigmes à résoudre : vos collaborateurs deviennent enquêteurs le temps d'une soirée. Mystère, déduction, frissons et fous rires garantis dans cette expérience théâtrale immersive.",
    duration: "2h à soirée complète",
    participants: "15 à 200",
  },
  {
    slug: "zen-attitude",
    name: "Zen Attitude",
    category: "interieur",
    images: [],
    excerpt: "Une pause bien-être collective : yoga, méditation, sophrologie. Ressourçante et fédératrice.",
    description: "Zen Attitude est une parenthèse de calme et de ressourcement. Yoga, méditation guidée, sophrologie ou ateliers de respiration : vos collaborateurs prennent soin d'eux, ensemble. Une activité indoor douce qui apaise les tensions, recentre l'équipe et installe un climat de bien-être durable.",
    duration: "1h à 1/2 journée",
    participants: "8 à 80",
  },
  {
    slug: "medieval-fantasy",
    name: "Medieval Fantasy",
    category: "interieur",
    images: [],
    excerpt: "Une plongée dans l'univers médiéval-fantastique : costumes, défis épiques, aventure imaginaire.",
    description: "Medieval Fantasy plonge vos équipes dans un univers d'aventure inspiré du Moyen-Âge et des grandes sagas heroic-fantasy. Costumes, défis tactiques, énigmes et combats à l'arme en mousse : un terrain de jeu décalé qui libère l'imaginaire et soude les groupes par l'aventure partagée.",
    duration: "1/2 à journée",
    participants: "12 à 80",
  },
  {
    slug: "compagnons-de-notre-dame",
    name: "Compagnons de Notre-Dame",
    category: "interieur",
    images: [],
    excerpt: "À la manière des bâtisseurs : défis de construction et d'artisanat. Patrimoine et coopération.",
    description: "Inspirés par l'esprit des compagnons bâtisseurs qui ont relevé Notre-Dame, vos équipes affrontent des défis d'artisanat et de construction : taille de pierre miniature, vitrail, charpente, calligraphie. Un team-building patrimonial et exigeant qui valorise le savoir-faire, la patience et la coopération.",
    duration: "1/2 à journée",
    participants: "10 à 60",
  },
  {
    slug: "creation-cocktail",
    name: "Création Cocktail",
    category: "interieur",
    image: "/images/cocktail-bar.jpg",
    images: [
      "/images/cocktail-bar.jpg",
      "/images/cocktail-workshop.jpg",
      "/images/cocktail-setup.jpg",
      "/images/cocktail-spirits.jpg",
    ],
    excerpt: "Créez vos propres cocktails sous la houlette d'un mixologue. Créativité, dégustation, convivialité.",
    description: "Création Cocktail est un atelier mixologie où chaque équipe imagine, compose et présente ses propres créations. Sous la conduite d'un barman expert, vos collaborateurs apprennent les techniques de base puis laissent libre cours à leur créativité. Le tout dans une ambiance conviviale qui clôture parfaitement un séminaire.",
    duration: "2h",
    participants: "8 à 60",
  },
  {
    slug: "enigma",
    name: "Enigma",
    category: "interieur",
    images: [],
    excerpt: "Un escape game grandeur nature : résolvez les énigmes pour vous échapper. Stratégie et communication.",
    description: "Enigma est un escape game collectif où vos équipes doivent résoudre une succession d'énigmes pour s'échapper d'une pièce mystérieuse dans un temps limité. Logique, observation, communication et coopération sont indispensables. Une activité indoor immersive parfaite pour révéler les dynamiques d'équipe.",
    duration: "1h à 2h",
    participants: "8 à 60",
  },
  {
    slug: "les-brocanteurs",
    name: "Les Brocanteurs",
    category: "interieur",
    images: [],
    excerpt: "À la manière de l'émission : chinez et négociez des objets pour reconstituer une collection.",
    description: "Inspiré de la célèbre émission, ce team-building transforme vos équipes en brocanteurs. Mission : chiner, négocier et collecter les objets demandés en respectant un budget. Stratégie, observation, négociation et bonne humeur garantie. Un format original et ludique qui sort des sentiers battus.",
    duration: "1/2 journée",
    participants: "10 à 80",
  },

  {
    slug: "koh-lantable",
    name: "Koh Lantable",
    category: "interieur",
    image: "/images/koh-lantable-ambiance.png",
    images: [
      "/images/koh-lantable-ambiance.png",
      "/images/koh-lantable-degustation.png",
      "/images/koh-lantable-kapla.png",
      "/images/koh-lantable-poteaux.png",
      "/images/koh-lantable-puzzle.png",
    ],
    excerpt: "L'esprit Koh Lanta en version indoor : épreuves de table, dégustation, construction et épreuve des poteaux miniature.",
    description: "Koh Lantable transpose l'univers de Koh Lanta dans un format 100 % indoor. Vos équipes s'affrontent autour de tables dans des épreuves originales : dégustation à l'aveugle, construction Kapla, puzzle géant, jeux d'adresse et la fameuse épreuve des poteaux revisitée. Idéal pour les séminaires en intérieur, Koh Lantable crée une atmosphère de compétition festive et bienveillante.",
    duration: "2h à 1/2 journée",
    participants: "15 à 120",
  },

  // ========== EXTÉRIEUR ==========
  {
    slug: "archimede",
    name: "Archimède",
    category: "exterieur",
    images: [],
    excerpt: "Un défi d'ingénierie collaborative : conception et test de machines, ponts ou systèmes en équipe.",
    description: "Inspirée du célèbre savant, l'activité Archimède propose à vos équipes de relever des défis d'ingénierie en plein air : construction de ponts, de catapultes, de systèmes de levage ou de machines à eau. Conception, prototypage et test grandeur nature. Ingéniosité et coopération sont les clés du succès.",
    duration: "1/2 à journée",
    participants: "12 à 80",
  },
  {
    slug: "projet-h",
    name: "Projet H",
    category: "exterieur",
    image: "/images/projet-fontenille.png",
    images: ["/images/projet-fontenille.png"],
    excerpt: "Une activité de construction collective en pleine nature : vos équipes assemblent une œuvre commune.",
    description: "Projet H est une activité outdoor où vos équipes assemblent ensemble une œuvre collective de grande envergure. Coordination, créativité et persévérance s'unissent pour aboutir à un résultat visible et fédérateur. Une expérience qui laisse une trace concrète et fierté d'avoir construit ensemble.",
    duration: "1/2 à journée",
    participants: "15 à 100",
  },
  {
    slug: "green-concept",
    name: "Green Concept",
    category: "exterieur",
    images: [],
    excerpt: "Un team-building éco-responsable : défis nature, sensibilisation et action concrète sur le terrain.",
    description: "Green Concept allie cohésion d'équipe et engagement environnemental. Vos collaborateurs participent à des actions concrètes en plein air : nettoyage de site, reforestation, défis nature, ateliers de sensibilisation. Un team-building qui a du sens, conjugue plaisir et impact positif.",
    duration: "1/2 à journée",
    participants: "10 à 100",
  },
  {
    slug: "cybertraque",
    name: "Cybertraque",
    category: "exterieur",
    images: [],
    excerpt: "Une chasse à l'homme high-tech en milieu urbain ou naturel. GPS, indices numériques, stratégie.",
    description: "Cybertraque est une chasse à l'homme moderne qui utilise les outils numériques : GPS, smartphones, applications de géolocalisation et indices high-tech. Vos équipes traquent ou échappent à leurs adversaires sur un terrain défini. Stratégie, technologie et adrénaline pour un team-building 21e siècle.",
    duration: "1/2 à journée",
    participants: "16 à 100",
  },
  {
    slug: "c-comme-a-la-montagne",
    name: "C comme à la montagne",
    category: "exterieur",
    image: "/images/igloo-team.png",
    images: [
      "/images/igloo-team.png",
      "/images/ski-geant-team.png",
    ],
    excerpt: "L'ambiance montagnarde sans quitter votre région : igloos, ski géant, raquettes, biathlon.",
    description: "C comme à la montagne recrée l'ambiance des stations de ski près de chez vous. Construction d'igloos, ski géant collectif, raquettes, biathlon laser : une journée 100% montagne, accessible et originale. Idéal pour un séminaire d'hiver dépaysant ou une animation de fin d'année.",
    duration: "1/2 à journée",
    participants: "20 à 150",
  },
  {
    slug: "biathlon",
    name: "Biathlon",
    category: "exterieur",
    images: [],
    excerpt: "Le grand classique outdoor : tir laser et course. Précision, endurance et esprit d'équipe.",
    description: "Le Biathlon team-building reprend les codes du sport olympique avec tir laser et course en relais ou par équipe. Précision, gestion du souffle, endurance et stratégie collective : un défi sportif accessible à tous, ludique et adrénaline garantie.",
    duration: "2h à 1/2 journée",
    participants: "12 à 100",
  },
  {
    slug: "course-d-orientation",
    name: "Course d'orientation",
    category: "exterieur",
    image: "/images/rando-vercors.png",
    images: ["/images/rando-vercors.png"],
    excerpt: "Carte, boussole et balises : à vous de retrouver le chemin. Stratégie, lecture de carte et coopération.",
    description: "La Course d'orientation est un classique inusable du team-building outdoor. Munies d'une carte et d'une boussole, vos équipes doivent retrouver des balises disséminées dans la nature. Lecture de carte, stratégie, prise de décision et endurance s'allient pour relever le défi. Adaptable à tous les niveaux.",
    duration: "1/2 à journée",
    participants: "12 à 150",
  },
  {
    slug: "jeux-du-vin",
    name: "Jeux du vin",
    category: "exterieur",
    images: [],
    excerpt: "Sur le terrain : ateliers viticoles, dégustations et énigmes œnologiques. Approche ludique du vin.",
    description: "Les Jeux du vin emmènent vos équipes au cœur d'un domaine viticole pour une journée alliant découverte et défis. Vendange ludique, dégustation à l'aveugle, énigmes œnologiques, ateliers d'assemblage : une approche conviviale et accessible du monde du vin, dans un cadre champêtre.",
    duration: "1/2 à journée",
    participants: "10 à 80",
  },
  {
    slug: "trophees-du-rugby",
    name: "Trophées du Rugby",
    category: "exterieur",
    images: [],
    excerpt: "Inspirés de l'esprit rugby : défis de passes, mêlées, drop. Activité physique et fédératrice.",
    description: "Les Trophées du Rugby plongent vos équipes dans l'univers du rugby sans contact : défis de passes, mêlées techniques, drop goal, atelier transformation. Encadré par d'anciens joueurs, l'esprit rugby — engagement, solidarité, respect — se vit pleinement. Bonne humeur et cohésion garanties.",
    duration: "1/2 à journée",
    participants: "15 à 80",
  },
  {
    slug: "samba",
    name: "Samba",
    category: "exterieur",
    images: [],
    excerpt: "Une initiation à la samba en équipe : rythme, percussions, danse. Animation festive et solaire.",
    description: "Samba est une animation festive et chaleureuse qui plonge vos équipes dans l'ambiance brésilienne. Initiation aux percussions (surdo, caixa, tamborim), apprentissage de chorégraphies, parade collective : une activité solaire et engageante qui clôture un événement avec énergie et joie.",
    duration: "1h à 2h",
    participants: "15 à 200",
  },
  {
    slug: "agent-secret",
    name: "Agent secret",
    category: "exterieur",
    images: [],
    excerpt: "Mission top secrète en équipe : indices, infiltration, déchiffrement. Une chasse au trésor d'espionnage.",
    description: "Agent secret transforme vos collaborateurs en espions sur le terrain. Mission confidentielle, indices codés, dead drops, déchiffrement et infiltration : une chasse au trésor immersive aux allures de film d'espionnage qui sollicite logique, observation et travail collectif.",
    duration: "1/2 à journée",
    participants: "16 à 100",
  },
  {
    slug: "rallye-des-impressionnistes",
    name: "Rallye des Impressionnistes",
    category: "exterieur",
    image: "/images/impressionnistes-satillieu.png",
    images: [
      "/images/impressionnistes-satillieu.png",
      "/images/impressionnistes-corot.png",
      "/images/impressionnistes-etangs.png",
      "/images/impressionnistes-paillottes.png",
    ],
    excerpt: "Sur les pas des grands maîtres : étapes culturelles, ateliers de peinture, défis créatifs.",
    description: "Le Rallye des Impressionnistes emmène vos équipes sur les pas des grands peintres de la fin du 19e siècle. Étapes culturelles dans des lieux emblématiques, ateliers de peinture en plein air, défis créatifs et énigmes artistiques : une expérience patrimoniale, sensible et fédératrice.",
    duration: "Journée",
    participants: "12 à 80",
  },
  {
    slug: "challenge-a-la-ferme",
    name: "Challenge à la ferme",
    category: "exterieur",
    image: "/images/jeux-ferme.png",
    images: [
      "/images/jeux-ferme.png",
      "/images/jeux-ferme-2.png",
      "/images/jeux-ferme-brouette.png",
    ],
    excerpt: "Animations rurales et défis agricoles : course de brouettes, traite, ateliers fermiers. Authenticité.",
    description: "Le Challenge à la ferme reconnecte vos équipes avec le monde rural à travers une succession d'épreuves agricoles ludiques : course de brouettes, lancer de bottes, traite (modèle d'entraînement), reconnaissance d'animaux, parcours fermier. Authenticité, bonne humeur et dépaysement garantis.",
    duration: "1/2 à journée",
    participants: "15 à 100",
  },
  {
    slug: "so-british",
    name: "So British",
    category: "exterieur",
    image: "/images/so-british-beatles.png",
    images: [
      "/images/so-british-beatles.png",
      "/images/so-british-croquet.png",
      "/images/so-british-karim.jpg",
      "/images/so-british-the.png",
      "/images/so-british-flechettes.jpg",
      "/images/so-british-flechettes-2.jpg",
      "/images/so-british-staff.jpg",
    ],
    excerpt: "Plongez dans l'ambiance anglaise : croquet, tea time, défis Beatles, course de thé. Élégance et humour.",
    description: "So British est un team-building original qui plonge vos équipes dans l'élégance et l'humour anglais. Croquet, tea time animé, défi quiz Beatles, course de plateau de thé, jeu de fléchettes : un parcours dépaysant qui fait sourire autant qu'il fédère. Une création signée Latitude Organisation.",
    isLatitudeOriginal: true,
    duration: "1/2 à journée",
    participants: "15 à 100",
  },
  {
    slug: "koh-lanta",
    name: "Koh Lanta",
    category: "exterieur",
    image: "/images/koh-lanta-groupe.jpg",
    images: [
      "/images/koh-lanta-groupe.jpg",
      "/images/koh-lanta-equilibre.png",
      "/images/koh-lanta-faisanderie.png",
      "/images/koh-lanta-kapla.png",
      "/images/koh-lanta-tir-arc.png",
    ],
    excerpt: "À la manière de l'émission : épreuves d'équilibre, de force, de stratégie et l'incontournable épreuve des poteaux. Le team-building outdoor par excellence.",
    description: "Koh Lanta plonge vos équipes dans l'univers de l'aventure et de la survie. Réparties en tribus, vos équipes s'affrontent sur des épreuves emblématiques inspirées de la célèbre émission : équilibre, force, agilité, tir à l'arc, et bien sûr l'épreuve finale des poteaux. Cohésion, stratégie et bonne humeur sont au rendez-vous pour cette journée d'adrénaline collective.",
    duration: "1/2 à journée",
    participants: "20 à 150",
  },
  {
    slug: "multi-sports",
    name: "Multi sports",
    category: "exterieur",
    images: [],
    excerpt: "Un parcours multi-disciplines : tir à l'arc, sarbacane, frisbee, slack-line. Variété et accessibilité.",
    description: "Multi sports est un parcours collectif qui permet à chaque participant de découvrir plusieurs disciplines en une seule animation : tir à l'arc, sarbacane, ultimate frisbee, slack-line, lancer de hache, et bien d'autres. Format ludique, accessible à tous les niveaux et idéal pour découvrir des sports inattendus.",
    duration: "1/2 à journée",
    participants: "12 à 100",
  },
  {
    slug: "archeo",
    name: "Archéo",
    category: "exterieur",
    image: "/images/archeo-rochefort.jpg",
    images: [
      "/images/archeo-rochefort.jpg",
      "/images/archeo-rochefort-2.jpg",
      "/images/archeo-rochefort-3.jpg",
      "/images/archeo-rochefort-4.jpg",
      "/images/archeo-rochefort-5.jpg",
      "/images/archeo-rochefort-6.jpg",
      "/images/archeo-bilboquet.jpg",
      "/images/archeo-tir-arc.jpg",
      "/images/archeo-famille-2.jpg",
      "/images/archeo-jerome.jpg",
    ],
    excerpt: "Une fouille archéologique en équipe sur un site historique : indices, énigmes patrimoniales, découverte.",
    description: "Archéo plonge vos équipes dans la peau d'archéologues sur un site historique réel. Fouilles minutieuses, identification d'objets, déchiffrement d'inscriptions, énigmes patrimoniales : une activité culturelle et coopérative dans un cadre exceptionnel. Une création originale signée Latitude Organisation.",
    isLatitudeOriginal: true,
    duration: "1/2 à journée",
    participants: "15 à 80",
  },
  {
    slug: "rallye-vis-ma-vie",
    name: "Rallye vis ma vie / Découverte Patrimoine",
    category: "exterieur",
    image: "/images/rallye-2cv.png",
    images: ["/images/rallye-2cv.png"],
    excerpt: "Un rallye-découverte qui plonge vos équipes au cœur du patrimoine local : défis, artisans, énigmes.",
    description: "Le Rallye vis ma vie / Découverte Patrimoine est un rallye unique conçu par Latitude Organisation. À la manière d'un reportage immersif, vos équipes parcourent un territoire à la rencontre de ses artisans, de ses lieux secrets et de ses traditions. Énigmes, défis et expériences authentiques rythment le parcours. Une création originale Latitude.",
    isLatitudeOriginal: true,
    duration: "Journée",
    participants: "12 à 80",
  },
  {
    slug: "rallyes-historiques-drome-ardeche",
    name: "Rallyes Historiques Drôme/Ardèche",
    category: "exterieur",
    images: [],
    excerpt: "Un rallye au cœur des paysages spectaculaires de la Drôme et de l'Ardèche : étapes patrimoniales et défis.",
    description: "Les Rallyes Historiques Drôme/Ardèche emmènent vos équipes au cœur de deux régions au patrimoine d'exception. Étapes dans des villages perchés, châteaux, gorges et grottes, défis culturels et ludiques : une expérience qui marie découverte, beauté des paysages et cohésion. Une création signée Latitude Organisation.",
    isLatitudeOriginal: true,
    duration: "Journée à 2 jours",
    participants: "12 à 60",
  },
  {
    slug: "chasse-au-tresor",
    name: "Chasse au trésor",
    category: "exterieur",
    image: "/images/archeo-bilboquet.jpg",
    images: ["/images/archeo-bilboquet.jpg"],
    excerpt: "Le grand classique revisité : indices, énigmes, course contre la montre pour trouver le trésor.",
    description: "La Chasse au trésor reste un grand classique du team-building, et pour cause : c'est un format universellement fédérateur. Vos équipes suivent des indices, résolvent des énigmes et arpentent un territoire pour découvrir le trésor avant les autres. Adaptable à tous les âges, lieux et thématiques.",
    duration: "1/2 à journée",
    participants: "12 à 150",
  },
  {
    slug: "biengarde",
    name: "Biengardé",
    category: "exterieur",
    images: [],
    excerpt: "Une activité 100% nature centrée sur la garde, l'observation et l'immersion. Approche originale et sensible.",
    description: "Biengardé est un team-building original signé Latitude Organisation, qui plonge vos équipes dans un univers de garde, de surveillance bienveillante et d'observation fine. Une approche sensible et immersive en pleine nature, qui développe la concentration, la coopération discrète et le sens du détail.",
    isLatitudeOriginal: true,
    duration: "1/2 à journée",
    participants: "10 à 60",
  },
  {
    slug: "formule-1-carton",
    name: "Formule 1 Carton",
    category: "exterieur",
    images: [],
    excerpt: "Construisez et pilotez votre propre Formule 1... en carton ! Créativité, défi mécanique et course.",
    description: "Formule 1 Carton est une activité décalée et fédératrice. Chaque équipe conçoit, construit et décore son propre bolide à partir de carton et matériaux fournis. La grande course finale couronne le meilleur design ET la meilleure équipe pilote. Créativité, manuel et fun garanti.",
    duration: "1/2 à journée",
    participants: "12 à 80",
  },
  {
    slug: "tiger-academy",
    name: "Tiger Academy",
    category: "exterieur",
    images: [],
    excerpt: "Un parcours sportif et tactique inspiré de l'entraînement : endurance, communication, dépassement de soi.",
    description: "Tiger Academy est un team-building outdoor exigeant, conçu par Latitude Organisation. Inspiré des parcours d'entraînement militaires et sportifs, il met vos équipes au défi à travers obstacles, épreuves d'endurance, missions tactiques et exercices de communication. Pour les équipes qui veulent se dépasser.",
    isLatitudeOriginal: true,
    duration: "1/2 à journée",
    participants: "15 à 80",
  },
  {
    slug: "trappeurs",
    name: "Trappeurs",
    category: "exterieur",
    image: "/images/groupe-cascade.png",
    images: ["/images/groupe-cascade.png"],
    excerpt: "Une immersion en mode trappeur : feu, abri, orientation, pêche. Reconnexion à la nature et au collectif.",
    description: "Trappeurs est une immersion en pleine nature qui reconnecte vos équipes avec les fondamentaux : allumer un feu sans briquet, construire un abri, s'orienter, pêcher, cuisiner en pleine forêt. Une création originale Latitude Organisation pour les équipes qui veulent vivre une vraie aventure.",
    isLatitudeOriginal: true,
    duration: "Journée",
    participants: "10 à 50",
  },
];

// =============================
// SOIRÉES ÉVÉNEMENTIELLES
// =============================

export type SoireeEvent = {
  slug: string;
  name: string;
  image?: string;
  images: string[];
  excerpt: string;
  description: string;
  duration?: string;
  participants?: string;
};

export const soireeEvents: SoireeEvent[] = [
  {
    slug: "bingo-musical",
    name: "Bingo Musical",
    image: "/images/famille-animation.jpg",
    images: [
      "/images/famille-animation.jpg",
      "/images/famille-animation-2.jpg",
      "/images/animation-soiree-groupe.png",
    ],
    excerpt: "Un bingo revisité autour de la musique : extraits, artistes, décennies. Ambiance garantie.",
    description: "Le Bingo Musical transforme le classique bingo en un jeu musical interactif et festif. Animateur en scène, extraits de chansons à reconnaître, cartons à composter : vos collaborateurs se découvrent une passion commune pour la musique à travers les décennies. Accessible à tous, irrésistiblement convivial, le Bingo Musical est la soirée parfaite pour briser la glace et finir en beauté.",
    duration: "1h à 2h",
    participants: "20 à 500",
  },
  {
    slug: "quiz-karaoke",
    name: "Quiz Karaoké",
    image: "/images/animation-soiree-groupe.png",
    images: [
      "/images/animation-soiree-groupe.png",
      "/images/famille-animation.jpg",
      "/images/famille-animation-2.jpg",
    ],
    excerpt: "Quiz musical et karaoké en équipe : culture générale, devinettes et prestations scéniques.",
    description: "Le Quiz Karaoké mixe le meilleur des deux mondes : la compétition stimulante du quiz musical et la convivialité décomplexée du karaoké. Par équipes, vos collaborateurs répondent à des questions sur la musique, puis montent sur scène pour interpréter les plus grands tubes. Fous rires, révélations vocales et souvenirs mémorables garantis.",
    duration: "2h à 3h",
    participants: "20 à 300",
  },
  {
    slug: "casino-vente-encheres",
    name: "Casino et Vente aux Enchères",
    image: "/images/casino-roulette.png",
    images: [
      "/images/casino-roulette.png",
      "/images/casino.png",
      "/images/jerome-casino.jpg",
    ],
    excerpt: "L'élégance du casino et le frisson des enchères réunis en une soirée sur mesure.",
    description: "Casino et Vente aux Enchères offre à vos convives une soirée alliant le glamour des grandes tables de jeu et l'adrénaline des enchères. Roulette, black jack, poker : des croupiers professionnels animent vos tables. La soirée se clôture par une vente aux enchères d'objets insolites ou de lots premium, animée par un commissaire-priseur comédien. Une formule premium pour une soirée d'entreprise mémorable.",
    duration: "Soirée complète",
    participants: "30 à 400",
  },
  {
    slug: "cabaret",
    name: "Cabaret",
    image: "/images/masque-venitien.jpg",
    images: [
      "/images/masque-venitien.jpg",
      "/images/jerome-peaky.png",
      "/images/jerome-nabil-peaky.jpg",
      "/images/karim-nabil-peaky.png",
    ],
    excerpt: "Plumes, strass et music-hall : une soirée cabaret somptueuse qui transporte vos invités.",
    description: "La Soirée Cabaret plonge vos invités dans l'univers flamboyant du Moulin Rouge et des grandes scènes parisiennes. Danseurs, chanteurs, numéros de music-hall et décors somptueux : un spectacle vivant conçu sur mesure pour éblouir vos collaborateurs et clients. Costume encouragé, ambiance folle assurée.",
    duration: "Soirée complète",
    participants: "30 à 500",
  },
  {
    slug: "spectacle",
    name: "Spectacle",
    image: "/images/presentateurs.jpg",
    images: [
      "/images/presentateurs.jpg",
      "/images/animation-soiree-groupe.png",
    ],
    excerpt: "Un spectacle vivant clé en main : stand-up, danse, cirque ou show thématique sur mesure.",
    description: "La formule Spectacle propose un divertissement vivant conçu et produit sur mesure pour votre événement. Stand-up, danse contemporaine, numéro de cirque, show thématique ou performance artistique : Latitude Organisation sélectionne et coordonne les meilleurs artistes pour un final de soirée mémorable qui marquera durablement vos convives.",
    duration: "45 min à 2h",
    participants: "30 à 1000",
  },
  {
    slug: "magie",
    name: "Magie",
    image: "/images/presentateurs.jpg",
    images: [
      "/images/presentateurs.jpg",
    ],
    excerpt: "Prestidigitation, close-up ou grand illusion : la magie au service de votre soirée d'entreprise.",
    description: "La Magie se décline en plusieurs formules adaptées à votre événement : close-up au cocktail dînatoire (le magicien circule entre les tables), spectacle de scène pour toute la salle, ou grande illusion pour un moment d'exception. Nos artistes sont sélectionnés pour leur niveau d'excellence et leur capacité à adapter leur programme à l'univers de votre entreprise.",
    duration: "30 min à 1h30",
    participants: "10 à 800",
  },
  {
    slug: "caricature",
    name: "Caricature",
    images: [],
    excerpt: "Des caricaturistes professionnels capturent vos invités avec talent. Souvenirs originaux.",
    description: "La Caricature est une animation de cocktail ou dîner où des artistes dessinateurs professionnels réalisent en direct le portrait caricatural de vos invités. Chaque convive repart avec son dessin : un souvenir original et personnalisé de votre événement. Une animation légère, élégante et toujours très appréciée qui installe une ambiance chaleureuse et brise la glace.",
    duration: "2h à soirée complète",
    participants: "20 à 500",
  },
  {
    slug: "au-theatre-ce-soir",
    name: "Au Théâtre Ce Soir",
    image: "/images/jerome-police.jpg",
    images: [
      "/images/jerome-police.jpg",
      "/images/jerome-peaky.png",
      "/images/jerome-nabil-peaky.jpg",
    ],
    excerpt: "Vos collaborateurs deviennent acteurs le temps d'une soirée théâtrale immersive.",
    description: "Au Théâtre Ce Soir transforme vos collaborateurs en comédiens le temps d'une soirée. Guidés par des metteurs en scène professionnels, vos équipes répètent et jouent une scène devant le reste du groupe. Improvisation, saynètes comiques ou théâtre-forum : une expérience ludique qui lève les inhibitions, révèle les personnalités et soude le groupe par le rire et l'émotion partagée.",
    duration: "2h à soirée complète",
    participants: "15 à 200",
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
  heroImage?: string;
  gallery?: { src: string; alt: string }[];
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

export type IncentiveItem = {
  slug: string;
  name: string;
  image?: string;
  images: string[];
  excerpt: string;
  description: string;
  duration?: string;
  participants?: string;
};

export const incentiveItems: IncentiveItem[] = [
  {
    slug: "rallye-2cv",
    name: "Rallye 2CV",
    image: "/images/rallye-2cv.png",
    images: ["/images/rallye-2cv.png"],
    excerpt: "Un rallye inoubliable à bord de la mythique Deux Chevaux : roadbook, défis et découverte du patrimoine local.",
    description: "Le Rallye 2CV est l'une de nos activités signatures. Répartis en équipages à bord de 2CV iconiques, vos collaborateurs parcourent un territoire à travers un roadbook jalonné d'énigmes, de défis photo et d'arrêts patrimoniaux. Stratégie de navigation, complicité entre équipiers et fous rires garantis. Une expérience décalée et conviviale qui marque durablement les esprits.",
    duration: "1/2 à journée",
    participants: "20 à 200",
  },
  {
    slug: "raids-vercors",
    name: "Raids Vercors",
    image: "/images/rando-vercors.png",
    images: ["/images/rando-vercors.png", "/images/groupe-cascade.png"],
    excerpt: "Raids et randonnées dans les gorges sauvages du Vercors — nature, cohésion et dépassement de soi.",
    description: "Le Vercors offre un cadre naturel exceptionnel pour des raids incentive mémorables. Randonnées panoramiques, traversées de gorges, bivouac et vues à couper le souffle : vos équipes se dépassent ensemble dans un environnement qui force le respect. Latitude Organisation conçoit le programme, la logistique et l'encadrement pour une expérience outdoor sûre et inoubliable.",
    duration: "1 à 3 jours",
    participants: "15 à 80",
  },
  {
    slug: "raids-gorges-du-tarn",
    name: "Raids Gorges du Tarn",
    image: "/images/groupe-cascade.png",
    images: ["/images/groupe-cascade.png", "/images/canyoning.jpg"],
    excerpt: "Descente des Gorges du Tarn : kayak, randonnée aquatique et bivouac dans un cadre naturel grandiose.",
    description: "Les Gorges du Tarn constituent l'un des plus beaux terrains d'aventure de France. Vos équipes s'immergent dans des paysages de falaises calcaires et de rivières turquoise : kayak, randonnée aquatique, rappels, bivouac sous les étoiles. Un raid qui mêle effort collectif, émerveillement et dépassement de soi dans l'un des plus beaux sites naturels d'Europe.",
    duration: "2 à 4 jours",
    participants: "10 à 60",
  },
  {
    slug: "canyoning",
    name: "Canyoning",
    image: "/images/canyoning.jpg",
    images: ["/images/canyoning.jpg", "/images/canyoning-2.jpg", "/images/canyoning-3.jpg"],
    excerpt: "Rappels, toboggans naturels et sauts dans les vasques : le canyoning est l'incentive aquatique ultime.",
    description: "Le canyoning plonge vos équipes au cœur des torrents et des gorges pour une expérience aquatique intense. Progression en rappel le long des falaises, glissades naturelles, sauts dans les vasques d'eau turquoise : chaque obstacle se franchit en équipe, dans un esprit de confiance et d'entraide. Encadré par des moniteurs professionnels, accessible à partir d'un bon niveau de condition physique.",
    duration: "1/2 à journée",
    participants: "8 à 50",
  },
  {
    slug: "buggy",
    name: "Buggy",
    images: [],
    excerpt: "Pilotage de buggies tout-terrain en équipage : sensations fortes, piste balisée et compétition bienveillante.",
    description: "Le buggy est l'activité idéale pour les équipes qui veulent des sensations sans prise de risque. Sur une piste sécurisée, vos équipages s'affrontent en chronométrage ou participent à des épreuves de maniabilité. Adrénaline, rires et esprit de compétition festif composent cette animation incontournable des séminaires incentive.",
    duration: "2h à 1/2 journée",
    participants: "10 à 100",
  },
  {
    slug: "quad",
    name: "Quad",
    images: [],
    excerpt: "Balades ou raids en quad sur des parcours nature : liberté, sensations et cohésion au grand air.",
    description: "Le quad offre une liberté de déplacement unique dans des environnements naturels variés. Forêts, pistes de terre, collines : vos équipes partent en convoi ou s'affrontent sur des parcours balisés. Sensation de liberté, communion avec la nature et esprit d'équipage font du quad une activité incentive très appréciée.",
    duration: "2h à journée",
    participants: "8 à 60",
  },
  {
    slug: "jet-ski-en-corse",
    name: "Jet Ski en Corse",
    images: [],
    excerpt: "Randonnée en jet ski le long des côtes corses : criques secrètes, eaux cristallines et adrénaline maritime.",
    description: "La Corse offre un décor de rêve pour une journée incentive en jet ski. Vos équipes partent en convoi guidé longer des falaises de granite rose, découvrir des criques inaccessibles par voie terrestre et plonger dans des eaux d'un bleu irréel. Une expérience maritime d'exception qui combine adrénaline, découverte et émerveillement.",
    duration: "1/2 à journée",
    participants: "8 à 40",
  },
  {
    slug: "char-a-voile-st-malo",
    name: "Char à Voile à St Malo",
    images: [],
    excerpt: "Pilotage de chars à voile sur les plages bretonnes — vitesse, vent et compétition face à l'Atlantique.",
    description: "Sur les grandes plages de Saint-Malo, le char à voile offre des sensations de vitesse incomparables. Propulsés par le vent atlantique, vos équipes apprennent rapidement les bases du pilotage avant de s'affronter en régate ou en slalom. Un sport accessible, intense et convivial qui crée une vraie dynamique de groupe dans un cadre maritime spectaculaire.",
    duration: "2h à 1/2 journée",
    participants: "10 à 80",
  },
  {
    slug: "zodiac-en-sardaigne",
    name: "Zodiac en Sardaigne",
    images: [],
    excerpt: "Navigation en zodiac le long des côtes de Sardaigne : grottes marines, plages secrètes et eaux turquoise.",
    description: "La Sardaigne déroule ses kilomètres de côtes parmi les plus belles du monde. En zodiac, vos équipes explorent des criques inaccessibles autrement, s'engouffrent dans des grottes marines, nagent dans des eaux d'un bleu absolu. Une aventure nautique en petit groupe, encadrée par des guides locaux, qui transforme un séminaire en expérience inoubliable.",
    duration: "Journée",
    participants: "8 à 40",
  },
  {
    slug: "4x4-au-maroc",
    name: "4×4 au Maroc",
    images: ["/images/archeo-rochefort.jpg"],
    excerpt: "Raid en 4×4 dans les pistes du désert marocain : dunes, kasbahs et nuit sous les étoiles.",
    description: "Le Maroc est un terrain de raid 4×4 d'exception. Vos équipes s'élancent sur les pistes de l'Atlas ou du désert à bord de 4×4, guidées par des pilotes locaux experts. Dunes de l'Erg Chebbi, kasbahs de Ouarzazate, bivouac berbère et dîner sous les étoiles : un incentive hors du commun qui confronte vos collaborateurs à des paysages et des cultures radicalement différents.",
    duration: "3 à 5 jours",
    participants: "10 à 60",
  },
  {
    slug: "4x4-en-tunisie",
    name: "4×4 en Tunisie",
    images: [],
    excerpt: "Raid 4×4 à travers les paysages sahariens de Tunisie : chotts, oasis et désert de sel.",
    description: "La Tunisie offre une diversité de paysages saisissante pour un raid 4×4 : chotts (lacs de sel), oasis verdoyants, dunes sahariennes et ksour troglodytes. Vos équipes traversent ces décors lunaires en convoi, s'affrontent sur des épreuves de navigation et partagent la vie des nomades le temps d'un bivouac. Un dépaysement total garanti.",
    duration: "3 à 5 jours",
    participants: "10 à 60",
  },
  {
    slug: "conference-mer-de-glace",
    name: "Conférence sur la Mer de Glace",
    images: ["/images/ski-geant-team.png"],
    excerpt: "Séminaire d'exception face au glacier de la Mer de Glace à Chamonix — altitude, silence et inspiration.",
    description: "Organiser une conférence ou un séminaire face à la Mer de Glace, à plus de 1 900 mètres d'altitude, c'est créer les conditions d'une réflexion hors du commun. L'altitude, le silence glaciaire et le spectacle du Mont-Blanc inspirent une forme de recul rarement accessible en salle classique. Latitude Organisation gère la logistique complète : hébergement, accès, équipement et restauration d'altitude.",
    duration: "1 à 2 jours",
    participants: "10 à 80",
  },
  {
    slug: "motoneige-au-canada",
    name: "Motoneige au Canada",
    images: ["/images/igloo-team.png"],
    excerpt: "Expédition en motoneige dans les forêts enneigées du Québec — grands espaces et adrénaline polaire.",
    description: "Le Québec offre des conditions uniques pour une expédition en motoneige. Des forêts de sapins enneigées aux plaines gelées, vos équipes pilotent en convoi des centaines de kilomètres de sentiers balisés. Cabane en forêt, feu de camp, cuisine traditionnelle québécoise et nuit dans un lodge au cœur des bois complètent cette aventure nordique inoubliable.",
    duration: "4 à 6 jours",
    participants: "8 à 40",
  },
  {
    slug: "chien-de-traineau-canada",
    name: "Chien de Traîneaux au Canada",
    images: ["/images/igloo-team.png"],
    excerpt: "Conduire un attelage de huskies dans les forêts boréales du Québec — liberté, silence et complicité animale.",
    description: "Le chien de traîneaux est l'une des expériences les plus dépaysantes qu'il soit. Après un briefing avec les mushers, vos équipiers prennent les commandes de leur attelage de huskies dans les forêts silencieuses du Québec. La communion avec les chiens, le glissement silencieux sur la neige et les paysages immaculés créent une bulle d'exception qui efface tous les stress du quotidien.",
    duration: "2 à 4 jours",
    participants: "8 à 40",
  },
  {
    slug: "tour-mont-blanc-helicoptere",
    name: "Tour du Mont Blanc en Hélicoptère",
    images: ["/images/rando-vercors.png"],
    excerpt: "Survol du toit de l'Europe en hélicoptère — panoramas glaciaires, Mont Blanc et Alpes à 360°.",
    description: "Le tour du Mont Blanc en hélicoptère est l'expérience incentive ultime pour les équipes de direction. Depuis Chamonix, l'hélicoptère s'élève au-dessus des glaciers, frôle les arêtes de granit et offre une vue à 360° sur les Alpes franco-italo-suisses. Un moment de contemplation partagée qui marque les esprits bien au-delà du séminaire.",
    duration: "1h à 2h",
    participants: "4 à 20",
  },
  {
    slug: "cheval-en-camargue",
    name: "Cheval en Camargue",
    images: ["/images/jeux-ferme.png"],
    excerpt: "Randonnée équestre dans les marais de Camargue — flamants roses, chevaux blancs et liberté sauvage.",
    description: "La Camargue est l'un des territoires les plus sauvages et les plus mystérieux de France. À cheval, vos équipes traversent les étangs, les roselières et les plages désertes en compagnie des gardians et des célèbres chevaux blancs. Une immersion dans la nature brute qui réveille les sens et invite à la contemplation, accessible à tous niveaux équestres.",
    duration: "1/2 à journée",
    participants: "8 à 40",
  },
  {
    slug: "snorkeling-plongee",
    name: "Snorkeling & Plongée",
    images: ["/images/canyoning.jpg"],
    excerpt: "Exploration sous-marine en Méditerranée ou dans les eaux tropicales — faune colorée et découverte des fonds marins.",
    description: "Snorkeling ou plongée bouteille, nos incentives aquatiques sont organisés dans les plus beaux spots méditerranéens ou tropicaux. Corse, Sardaigne, Île Maurice, Antilles : vos équipes découvrent les fonds marins guidées par des moniteurs diplômés. Une expérience sensorielle unique qui replace l'humain face à la beauté fragile des écosystèmes sous-marins.",
    duration: "1/2 à journée",
    participants: "8 à 60",
  },
  {
    slug: "stage-de-pilotage",
    name: "Stage de Pilotage",
    images: ["/images/rallye-2cv.png"],
    excerpt: "Stage de pilotage sur circuit homologué — sensations de F1, conduite sportive et chronos en équipe.",
    description: "Sur un circuit homologué, vos collaborateurs se glissent dans la peau de pilotes professionnels. Conduite sportive en GT, figures de maniabilité, chronométrage et coaching personnalisé : le stage de pilotage mêle adrénaline individuelle et esprit de compétition collective. Une activité premium très appréciée des comités de direction et des équipes commerciales.",
    duration: "1/2 à journée",
    participants: "8 à 60",
  },
  {
    slug: "raids-iles-de-lerins",
    name: "Raids Îles de Lérins",
    images: [],
    excerpt: "Régates et raids nautiques autour des Îles de Lérins face à Cannes — voile, kayak et soleil méditerranéen.",
    description: "Les Îles de Lérins, à quelques miles des côtes cannoises, offrent un cadre méditerranéen exceptionnel pour un raid nautique. Vos équipes s'affrontent en régate de voiliers, en course de kayak ou en challenge multisports sur l'eau bleue de la Méditerranée. Baignade, déjeuner sur l'île Saint-Honorat et retour au coucher du soleil complètent cette journée d'exception.",
    duration: "Journée",
    participants: "10 à 80",
  },
  {
    slug: "montgolfiere",
    name: "Montgolfière",
    images: ["/images/rando-vercors.png"],
    excerpt: "Vol en montgolfière au lever du soleil — silence, sérénité et panorama exceptionnel sur les paysages français.",
    description: "Le vol en montgolfière est une parenthèse de silence et de beauté absolue. Au lever du soleil, vos équipes s'élèvent doucement au-dessus des vignobles de Bourgogne, des châteaux de la Loire ou des gorges du Verdon. Silence, panoramas à 360°, brûleur qui crépite : une heure de vol qui invite au lâcher-prise et à la contemplation partagée.",
    duration: "2h à 3h",
    participants: "4 à 30",
  },
  {
    slug: "nuit-en-tipis",
    name: "Nuit en Tipis",
    images: ["/images/koh-lanta-faisanderie.png"],
    excerpt: "Bivouac en tipis dans la nature — feu de camp, ciel étoilé et immersion dans la vie amérindienne.",
    description: "La nuit en tipis est l'expérience de déconnexion totale par excellence. Dans un camp de tipis authentiques installé en pleine nature, vos équipes vivent au rythme de la nature : feu de camp, cuisine sur braise, veillée sous les étoiles. Une nuit hors du temps qui crée des souvenirs durables et renforce les liens d'une façon que aucune salle de réunion ne peut égaler.",
    duration: "1 nuit à 2 jours",
    participants: "10 à 60",
  },
];

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
    heroImage: "/images/impressionnistes-satillieu.png",
    gallery: [
      { src: "/images/sens-conscience-bulle.png", alt: "Séminaire atypique sous bulle en pleine nature" },
      { src: "/images/projet-fontenille.png", alt: "Activité outdoor incentive au Domaine de Fontenille" },
      { src: "/images/impressionnistes-corot.png", alt: "Team building créatif peinture inspiré de Corot" },
      { src: "/images/impressionnistes-etangs.png", alt: "Activité peinture en plein air aux étangs" },
      { src: "/images/impressionnistes-paillottes.png", alt: "Séminaire en extérieur sous paillottes" },
      { src: "/images/rallye-2cv.png", alt: "Rallye 2CV incentive team building" },
      { src: "/images/archeo-rochefort.jpg", alt: "Activité archéologie en château médiéval de Rochefort" },
      { src: "/images/archeo-rochefort-2.jpg", alt: "Challenge archéologique outdoor en ruines" },
    ],
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
          "Trois temps qui structurent l'ensemble de nos projets. La phase de conception définit les objectifs, la scénographie et le cadre. La phase d'orchestration pilote la logistique, la coordination des prestataires et l'animation. La phase d'immortalisation capture les moments forts pour prolonger l'impact bien au-delà de l'événement.",
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
    heroImage: "/images/animation-soiree-groupe.png",
    gallery: [
      { src: "/images/masque-venitien.jpg", alt: "Soirée à thème vénitien avec masques et décors somptueux" },
      { src: "/images/casino-roulette.png", alt: "Animation casino roulette lors d'une soirée d'entreprise" },
      { src: "/images/casino.png", alt: "Ambiance casino soirée gala entreprise" },
      { src: "/images/presentateurs.jpg", alt: "Animateurs soirée thème Gatsby Great Gatsby" },
      { src: "/images/jerome-peaky.png", alt: "Animation soirée thème Peaky Blinders" },
      { src: "/images/karim-nabil-peaky.png", alt: "Soirée costumée thème Peaky Blinders" },
      { src: "/images/murder-atelier.jpg", alt: "Atelier murder party enquête policière en soirée" },
      { src: "/images/cocktail-spirits.jpg", alt: "Atelier cocktail dégustation spiritueux en soirée" },
      { src: "/images/cocktail-setup.jpg", alt: "Bar à cocktails lors d'une soirée événementielle" },
    ],
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
    heroImage: "/images/groupe.png",
    gallery: [
      { src: "/images/koh-lanta-groupe.jpg", alt: "Koh Lanta team-building groupe en plein air" },
      { src: "/images/koh-lanta-equilibre.png", alt: "Épreuve d'équilibre Koh Lanta team-building" },
      { src: "/images/koh-lantable-kapla.png", alt: "Construction Kapla en équipe team-building" },
      { src: "/images/koh-lanta-tir-arc.png", alt: "Tir à l'arc Koh Lanta team-building" },
      { src: "/images/koh-lantable-poteaux.png", alt: "Épreuve des poteaux Koh Lantable team-building" },
      { src: "/images/koh-lantable-puzzle.png", alt: "Puzzle géant team-building Koh Lantable" },
      { src: "/images/rando-vercors.png", alt: "Randonnée incentive dans le Vercors avec vue panoramique" },
      { src: "/images/groupe-cascade.png", alt: "Team-building randonnée groupe sous une cascade" },
      { src: "/images/canyoning.jpg", alt: "Canyoning rappel en falaise team-building aventure" },
      { src: "/images/speleo.png", alt: "Spéléologie team-building groupe en combinaison rouge" },
      { src: "/images/igloo-team.png", alt: "Construction d'igloos en équipe activité hivernale" },
      { src: "/images/jeux-ferme.png", alt: "Jeux de la ferme team-building en plein air" },
      { src: "/images/so-british-beatles.png", alt: "So British team-building thème Beatles" },
      { src: "/images/so-british-croquet.png", alt: "Croquet anglais So British team-building" },
      { src: "/images/archeo-bilboquet.jpg", alt: "Activité archéologie bilboquet médiéval" },
      { src: "/images/archeo-tir-arc.jpg", alt: "Tir à l'arc médiéval dans un château en ruines" },
    ],
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
