/**
 * Source unique de verite pour tout le contenu du portfolio.
 * Aucune donnee n'est inventee ici : chaque entree provient d'une information
 * fournie explicitement. Les manques sont marques par un commentaire TODO.
 */

export const site = {
  name: 'Raphaël Attias',
  role: 'Consultant indépendant en cybersécurité, infrastructure et automatisation par IA',
  company: 'Stormsecurity',
  location: 'Marseille, France',
  email: 'raphaelattias13@gmail.com',
  url: 'https://raphaelattias.fr', // TODO: remplacer par le domaine final si différent
} as const;

export const links = {
  github: 'https://github.com/raphael-attias',
  linkedin: 'https://www.linkedin.com/in/raphael-attias-b3090b298/',
  medium: 'https://medium.com/@rapatt_81344',
  stormSecurity: 'https://www.stormsecurity.fr/',
  freenigma: 'https://freenigma.stormsecurity.fr/',
  ekkhoo: 'https://ekkhoo.com/',
} as const;

/** `primary` : entrées affichées dans la barre de navigation sur grand écran.
 *  Le menu déroulant, lui, affiche la liste complète. */
export const navItems = [
  { href: '#a-propos', label: 'À propos', primary: true },
  { href: '#experience', label: 'Expérience', primary: true },
  { href: '#projets', label: 'Projets', primary: true },
  { href: '#missions', label: 'Missions', primary: false },
  { href: '#storm-security', label: 'Stormsecurity', primary: false },
  { href: '#homelab', label: 'Homelab', primary: true },
  { href: '#conferences', label: 'Conférences', primary: false },
  { href: '#recherche', label: 'Recherche', primary: true },
  { href: '#competences', label: 'Compétences', primary: false },
  { href: '#formation', label: 'Formation', primary: false },
  { href: '#contact', label: 'Contact', primary: true },
] as const;

/* ------------------------------------------------------------------ */
/* Expérience professionnelle                                          */
/* ------------------------------------------------------------------ */

export type ExperienceAchievement = {
  title: string;
  body: string;
};

export type ExperienceLink = {
  label: string;
  href: string;
};

export type ExperienceContinuity = {
  summary: string;
  href: string;
  linkLabel: string;
};

export type Experience = {
  role: string;
  company: string;
  /** Absent pour l'entrée de continuité Stormsecurity, qui n'a pas de type de contrat. */
  contract?: string;
  period?: string;
  location?: string;
  /** Poste occupé actuellement. */
  current?: boolean;
  achievements: ExperienceAchievement[];
  skills: string[];
  /** Liens vers l'entreprise ou un partenaire cité dans les réalisations. */
  links?: ExperienceLink[];
  /** Présent uniquement pour une entrée de continuité pointant vers une
   *  section dédiée déjà présente ailleurs sur la page (ex. Stormsecurity),
   *  plutôt que de dupliquer son contenu dans la timeline. */
  continuity?: ExperienceContinuity;
};

export const experiences: Experience[] = [
  {
    role: 'Group Cybersecurity Protection and Defense Intern',
    company: 'CMA CGM',
    contract: 'Stage',
    period: 'Août 2026 à aujourd’hui (2 mois, en cours)',
    location: 'Marseille, Provence-Alpes-Côte d’Azur, France, sur site',
    current: true,
    achievements: [
      {
        title: "Conception et entraînement d'agents IA spécialisés pour le SOC",
        body:
          "Détection de menaces, triage automatisé des alertes, détection de phishing, en étant force de proposition sur les agents à implémenter.",
      },
      {
        title: 'Développement de solutions Cloud (AWS / GCP) pour les outils de sécurité',
        body: "Intégration de logs au SIEM, déploiement sur Vertex AI, optimisation des coûts.",
      },
      {
        title: 'Intégration des agents IA aux processus SOC',
        body:
          "Collaboration avec les équipes SOC pour intégrer les agents IA dans les processus existants, contribution aux pipelines CI/CD (GitLab).",
      },
      {
        title: 'Veille technologique',
        body: "Veille technologique active sur l'IA agentique et la cybersécurité.",
      },
    ],
    skills: [
      'IA agentique',
      'SOC',
      'AWS',
      'GCP',
      'Vertex AI',
      'SIEM',
      'CI/CD GitLab',
      'Détection de menaces',
    ],
  },
  {
    role: 'Head of Security & Infrastructures',
    company: 'Mintera',
    period: 'Août 2025 à aujourd’hui (1 an 2 mois)',
    location: 'France, hybride',
    current: true,
    achievements: [
      {
        title: 'Évolution de Mintera vers l’infrastructure hardware',
        body:
          "À l'origine storage provider Web3 adossé à la blockchain Filecoin, Mintera opère aujourd'hui comme prestataire d'infrastructure hardware pour Impossible Cloud, fournisseur cloud souverain européen (stockage S3 et GPU bare metal), avec un datacenter de plus de 10 PO (pétaoctets) dédié au stockage de données Web3.",
      },
      {
        title: 'Sécurité et infrastructure des micro data centers',
        body:
          "Supervision de la sécurité et de l'infrastructure des micro data centers de Mintera, pour garantir des environnements fiables, sécurisés et performants au service de la résilience et de la croissance de l'entreprise.",
      },
    ],
    skills: [
      'Web3',
      'Infrastructure Hardware',
      'Sécurité des data centers',
      'Blockchain',
      'Stockage distribué',
      'Impossible Cloud',
    ],
    links: [
      { label: 'mintera.co', href: 'https://mintera.co/' },
      { label: 'impossiblecloud.com', href: 'https://www.impossiblecloud.com/' },
    ],
  },
  {
    role: 'Cyber-Entrepreneur / Fondateur',
    company: 'Stormsecurity',
    achievements: [],
    skills: [],
    continuity: {
      summary:
        "Fondateur et dirigeant de Stormsecurity, structure de conseil en cybersécurité présentée en détail dans la section dédiée de cette page.",
      href: '#storm-security',
      linkLabel: 'Voir la section Stormsecurity',
    },
  },
  {
    role: 'IT Security',
    company: 'NeoXam',
    contract: 'Contrat en alternance',
    period: 'août 2024 – juillet 2026',
    location: 'Paris et périphérie, sur site',
    achievements: [
      {
        title: "Durcissement d'un Active Directory de 6 500+ objets",
        body:
          'Migration RC4 → AES-128/256 par GPO déployée progressivement, double rotation automatisée du compte krbtgt via PowerShell pour neutraliser les attaques Golden Ticket, coordination des réinitialisations de mots de passe avec les responsables de service. Résultat : zéro interruption de production, conformité obtenue aux audits annuels de sécurité.',
      },
      {
        title: "Refonte d'une architecture de réception de fichiers financiers clients",
        body:
          "Conception d'une DMZ dédiée pour isoler les flux entrants sensibles, automatisation d'un workflow en 7 étapes (formulaire standardisé, validation RSSI via JIRA/Confluence/SharePoint, transfert SFTP chiffré, cycle de vie automatisé avec expiration RGPD via Automation Portal). Élimination totale des accès non tracés.",
      },
      {
        title: "Gestion d'incidents de sécurité",
        body:
          "Qualification d'une alerte Spearphishing (charge utile PowerShell Base64), isolement du poste compromis, collecte automatisée des logs Windows, analyse forensique ayant confirmé l'extraction de credentials navigateur sans mouvement latéral. Rédaction du rapport officiel et recommandations opérationnelles.",
      },
    ],
    skills: [
      'Active Directory',
      'Kerberos AES',
      'PowerShell',
      'VMware ESXi',
      'DMZ & SFTP',
      'JIRA/Confluence/SharePoint',
      'Microsoft 365 Defender',
      'Incident Response',
      'Orange Cyberdefense SOC',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Projets                                                             */
/* ------------------------------------------------------------------ */

export type Project = {
  title: string;
  tagline: string;
  tags: string[];
  description: string;
  href?: string;
  /** Affiché à la place du lien lorsque le projet n'est pas public. */
  privateLabel?: string;
  /** Largeur de la carte dans la grille bento de 6 colonnes. */
  span: 2 | 3 | 6;
  /** Carte mise en avant : typographie et hauteur augmentées. */
  featured?: boolean;
  /** Lien contextuel vers un autre projet ou produit lié (ex. Otto → Ekkhoo). */
  relatedLink?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    title: 'Pharos IAC',
    span: 3,
    featured: true,
    tagline: "Agent IA de gestion d'infrastructure",
    tags: ['Python', 'Proxmox API', 'Systemd', 'Telegram Bot', 'IA agentique'],
    description:
      "Agent autonome de supervision et gestion d'un cluster Proxmox en production. Routage déterministe (regex/tags, zéro appel LLM pour les actions sensibles), deux workflows figés (déploiement de VM depuis template, patch de groupes de serveurs) avec garde-fous durs, API HTTP interne authentifiée, cron de veille autonome avec notifications Telegram, plus de 250 tests automatisés.",
    privateLabel: 'Projet privé, homelab en production',
  },
  {
    title: 'Otto',
    span: 3,
    featured: true,
    tagline: 'Agent IA de tri et gestion des emails',
    tags: ['Python', 'IMAP/SMTP', 'Classification heuristique', 'Guardrails', 'Daemon'],
    description:
      "Agent de tri automatique des emails entrants pour un SaaS en production (Ekkhoo). Classification en 8 catégories par priorité (RGPD, signalement de vulnérabilité, prospect, support, marketing, commercial...), 9 guardrails de sécurité codés en dur pour interdire tout engagement commercial ou réponse substantielle automatique, daemon IMAP tournant en continu, envoi d'accusés de réception neutres uniquement, validation humaine obligatoire avant toute réponse de fond. Conçu pour ne jamais dépasser son périmètre : aucune action irréversible sans intervention humaine.",
    privateLabel: 'Projet privé, homelab en production',
    relatedLink: { label: 'Voir Ekkhoo', href: links.ekkhoo },
  },
  {
    title: 'Secu-bee',
    span: 2,
    tagline: "Détection d'objets par vision par ordinateur",
    tags: ['Python', 'YOLOv8', 'Computer Vision', 'Data Augmentation'],
    description:
      "Pipeline d'entraînement et d'inférence pour la détection d'objets orientée sécurité, basé sur YOLOv8. Comprend l'augmentation de données d'entraînement, le fine-tuning du modèle et la détection en flux vidéo.",
    href: 'https://github.com/raphael-attias/Secu-bee',
  },
  {
    title: 'Webhook-monitoring',
    span: 2,
    tagline: 'Supervision de services via webhooks',
    tags: ['Monitoring', 'Webhooks', 'Automatisation'],
    description:
      "Service de supervision d'infrastructure exploitant des webhooks pour le suivi d'informations et de mises à jour de services, avec journalisation dédiée.",
    href: 'https://github.com/raphael-attias/Webhook-monitoring',
  },
  {
    title: 'Ekkhoo',
    span: 2,
    tagline: "SaaS de contrôle d'accès événementiel par la voix",
    tags: ['Reconnaissance vocale', 'SaaS', 'Stripe', 'Web temps réel'],
    description:
      "Application web qui identifie les participants d'un événement par la voix (matching fuzzy en temps réel) pour automatiser les émargements. Gestion multi-participants, sessions illimitées, export CSV, facturation via Stripe, hébergement européen chiffré.",
    href: links.ekkhoo,
  },
  {
    title: 'Sanctuaire Hadès',
    span: 3,
    tagline: 'Écosystème de sécurité et de souveraineté numérique',
    tags: ['Sécurité', 'Infrastructure'],
    description:
      "Projet open source lié à l'écosystème de sécurité et de souveraineté numérique développé par l'auteur.",
    href: 'https://github.com/raphael-attias/Sanctuaire-Hades',
  },
  {
    title: 'Freenigma',
    span: 3,
    tagline: 'Infrastructure de souveraineté numérique',
    tags: ['OSINT', 'RGPD', 'GrapheneOS', 'Contre-surveillance'],
    description:
      "Plateforme de conseil en souveraineté numérique organisée en quatre pôles : audit OSINT et score d'exposition, procédures RGPD de droit à l'oubli auprès des data brokers, déploiement de hardware durci (GrapheneOS, puce Titan M2), et formation à la discrétion numérique.",
    href: links.freenigma,
  },
  {
    // Seule carte de la dernière rangée du bento (span 6 = pleine largeur en
    // desktop) depuis que Davy da Touti a été déplacé vers la section
    // Missions & clients, pour éviter de dupliquer son contenu.
    title: 'Suite Hadès (Freenigma)',
    span: 6,
    tagline: 'Audit et cartographie de vulnérabilités informationnelles',
    tags: ['OSINT', 'Audit de vulnérabilité', 'Cyber-intelligence'],
    description:
      "Module technique de la suite Freenigma dédié à l'audit et à la cartographie de vulnérabilités informationnelles.",
    href: 'https://freenigma.stormsecurity.fr/hades',
  },
];

/* ------------------------------------------------------------------ */
/* Missions & clients (via Stormsecurity)                               */
/* ------------------------------------------------------------------ */

export type MissionSection = {
  heading: string;
  items: string[];
};

export type MissionStat = {
  value: number;
  suffix: string;
  label: string;
};

export type Mission = {
  client: string;
  title: string;
  context: string;
  period?: string;
  /** Lien public vers le résultat de la mission, quand le client l'autorise. */
  href?: string;
  sections: MissionSection[];
  /** Encart "Stack technique" (ex. eSIMware). */
  stack?: string[];
  /** Mini-statistiques chiffrées, branchées sur le même compteur animé
   *  que le bandeau de chiffres clés du hero. */
  stats?: MissionStat[];
  /** Note courte non chiffrée, affichée après les stats (ex. mission 2). */
  note?: string;
  /** Livrables listés explicitement (ex. mission 3). */
  deliverables?: string[];
  /** Compétences mobilisées, distinctes des tags courts (ex. mission 3). */
  skillsUsed?: string[];
  tags: string[];
};

export const missions: Mission[] = [
  {
    client: 'eSIMware',
    title: 'Automatisation marketing multi-agents pour eSIMware',
    context:
      "eSIMware propose des cartes eSIM internationales (data uniquement) pour voyageurs, digital nomads, freelances et professionnels en déplacement. Double intervention : automatisation marketing et rédaction éditoriale.",
    sections: [
      {
        heading: 'Réalisations techniques',
        items: [
          'Workflow n8n déclenché via Telegram (texte ou voix) pour lancer des campagnes marketing à la demande.',
          "Architecture multi-agents IA (LangChain) avec rôles spécialisés : Content Strategist (analyse de tendances), LinkedIn Specialist, Instagram Creator, Campaign Initiator.",
          'Mémoire conversationnelle et parsers de contenu pour les agents.',
          "Intégrations API externes : late.dev (publication Twitter/X), StableHorde (génération d'images), Veo3, Kling AI, Pollination AI (génération vidéo/image).",
          'Base Airtable structurée pour le suivi et la planification du contenu multi-plateforme.',
        ],
      },
      {
        heading: 'Volet éditorial',
        items: [
          'Système de prompt « eSIMware Content Generator » pour produire des articles blog/vlog au ton chaleureux et narratif.',
          'Structure éditoriale type : accroche, problème du roaming, présentation de la solution, bénéfices, conseils pratiques, appel à l’action.',
          'Rédaction orientée SEO : meta title, meta description, meta keywords, mots-clés stratégiques (eSIM, connectivité mondiale, digital nomad, roaming, budget voyage).',
        ],
      },
    ],
    stack: ['n8n', 'LangChain', 'Airtable', 'Telegram API', 'late.dev', 'StableHorde', 'Veo3', 'Kling AI', 'Pollination AI'],
    tags: ['IA agentique', 'Marketing automation', 'n8n', 'LangChain', 'SEO'],
  },
  {
    client: 'Cabinet de conseil en finance',
    title: 'Sécurisation des postes et identités : cabinet de conseil en finance',
    context:
      "Audit de sécurité du parc informatique d'un client (cabinet de conseil en finance) de la société de services IT de Raphaël. Constat initial : postes sous Windows Famille incompatibles avec toute gestion centralisée, comptes Entra ID sans stratégie, absence de MFA généralisé, documents sensibles (RIB, pièces d'identité) sans classification ni protection anti-fuite.",
    sections: [
      {
        heading: 'Remédiation en 4 axes, sans interruption de service ni perte de données',
        items: [
          "Migration Windows 11 Pro sur l'intégralité du parc (14 postes).",
          'Microsoft Intune (MDM) : enrôlement complet, profils de configuration standardisés, vérification de conformité avant accès aux ressources.',
          'Entra ID, accès conditionnel et MFA : authentification multifacteur imposée sur tous les accès, blocage automatique des terminaux non gérés.',
          'Microsoft Purview (DLP) : règles de prévention de perte de données sur les documents sensibles, étiquetage automatique, blocage du partage externe.',
          'Microsoft Defender for Endpoint (EDR) : protection nouvelle génération et détection comportementale sur l’ensemble du parc.',
        ],
      },
    ],
    stats: [
      { value: 100, suffix: '%', label: 'Postes migrés vers Windows 11 Pro' },
      { value: 0, suffix: '', label: 'Interruption de service' },
      { value: 0, suffix: '', label: 'Perte de données' },
      { value: 14, suffix: '', label: 'Postes enrôlés et conformes sous Intune' },
      { value: 100, suffix: '%', label: 'Comptes et applications avec MFA actif' },
    ],
    note: 'Documents sensibles protégés par des règles DLP dédiées.',
    tags: ['Microsoft 365', 'Intune', 'Entra ID', 'MFA', 'Purview DLP', 'Defender for Endpoint'],
  },
  {
    client: 'Mutuelle française (secteur santé et prévoyance)',
    title: 'Cyber Threat Intelligence stratégique : secteur santé et prévoyance',
    period: 'Mars à mai 2026',
    context:
      "Intervention CTI stratégique pour une mutuelle française du secteur santé et prévoyance, sur plusieurs jours entre mars et mai 2026. Structuration d'une démarche de veille stratégique cyber.",
    sections: [
      {
        heading: 'Réalisations',
        items: [
          'Formalisation de procédures CTI stratégiques (collecte, qualification, analyse, diffusion).',
          "Création d'un tableau de qualification des types de menace, avec critères de priorisation (impact potentiel, crédibilité, temporalité, lien avec les enjeux métiers).",
          "Identification et qualification de nouvelles sources de threat intelligence (institutionnelles, sectorielles, techniques, médiatiques) pour l'écosystème santé, institutionnel et éducatif.",
        ],
      },
    ],
    deliverables: [
      'Procédures CTI stratégiques',
      'Tableau de qualification des menaces',
      'Catalogue de sources de threat intelligence enrichi',
    ],
    skillsUsed: [
      'CTI stratégique',
      'Veille cyber sectorielle',
      'Analyse de menaces',
      'Rédaction de procédures',
      'Qualification de sources',
      'Communication de risque',
    ],
    tags: ['CTI', 'Threat Intelligence', 'Secteur santé', 'Veille stratégique'],
  },
  {
    client: 'Davy da Touti',
    title: "Site vitrine pour la publication d'un roman : Davy da Touti",
    context:
      "Mission cliente de développement web pour la publication du roman « Sous le ciel d'Alverione » (roman fantastique, enquête policière) de l'auteur Davy da Touti.",
    href: 'https://davydatouti.fr/',
    sections: [
      {
        heading: 'Réalisations',
        items: [
          "Conception et développement du site vitrine complet : présentation de l'œuvre, biographie de l'auteur, module de prise de contact pour la vente directe du livre.",
        ],
      },
    ],
    tags: ['Développement web', 'Édition', 'Site vitrine', 'Client'],
  },
];

/* ------------------------------------------------------------------ */
/* Stormsecurity                                                        */
/* ------------------------------------------------------------------ */

export const stormServices = [
  {
    title: 'Formation & Sensibilisation',
    description: 'Montée en compétence des équipes sur les risques réels et les réflexes à acquérir.',
  },
  {
    title: 'Sécurisation Systèmes & Mobiles',
    description: 'Durcissement des postes, serveurs et terminaux mobiles utilisés au quotidien.',
  },
  {
    title: 'Audit & Analyse',
    description: "Tests d'intrusion et analyse de vulnérabilités sur le périmètre exposé et interne.",
  },
  {
    title: 'Accompagnement Startups & Scalabilité',
    description: 'Sécurité dès la conception, pour des produits qui grandissent sans dette de sécurité.',
  },
  {
    title: 'Interventions Techniques',
    description: "Résolution d'incidents et mise en conformité, sur le terrain.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Homelab : fiche technique                                           */
/* ------------------------------------------------------------------ */
/* TODO: aucun chiffre précis (nombre de nœuds, RAM, stockage) n'a été fourni.
   Les valeurs restent volontairement qualitatives tant qu'elles ne sont pas
   confirmées. */

export const homelabSpecs = [
  { label: 'Virtualisation', value: 'Cluster Proxmox multi-nœuds' },
  { label: 'Segmentation réseau', value: 'VLAN dédiés, dont un VLAN isolé pour les systèmes critiques' },
  { label: 'Services', value: 'Conteneurisation Docker, services auto-hébergés' },
  { label: 'Supervision', value: 'Monitoring et alerting automatisés' },
  { label: 'Agents IA', value: 'Exécution locale, sans dépendance cloud' },
  { label: 'Usage', value: "Terrain d'expérimentation offensive et environnement de production réel" },
] as const;

/* ------------------------------------------------------------------ */
/* Conférences & prises de parole                                      */
/* ------------------------------------------------------------------ */

export type Talk = {
  event: string;
  meta: string;
  items: string[];
  /** Formule de présentation utilisée par l'organisateur ou l'orateur. */
  presentedAs?: string;
  /** Citation courte de l'organisateur, affichée en petit texte, sans lien si aucune URL n'est confirmée. */
  organizerNote?: string;
};

export const talks: Talk[] = [
  {
    event: 'BarbHack 2025',
    meta: 'Toulon, Palais des Congrès Neptune · 30 août 2025',
    items: [
      'Conférence « Le hack d’un ticket de métro » : démonstration d’attaque sur cartes MiFare Ultralight utilisées dans les systèmes de métro, festivals et hôpitaux via Flipper Zero.',
      'Workshop « Wi-Fi, sécurité ou illusion » co-animé avec Ob3ud.',
    ],
  },
  {
    event: 'Afterwork Cyber & IA',
    meta: 'La Plateforme_ x Cybersup',
    items: [
      'Organisation et animation d’un afterwork sur le thème « IA : Ange gardien ou Cheval de Troie ? La cybersécurité à l’épreuve de l’intelligence artificielle ».',
      'Exploration de la détection prédictive, de l’automatisation des réponses et des attaques dopées à l’IA.',
    ],
  },
  {
    // TODO: année du meetup non fournie ; seule la date jour/mois transmise est affichée.
    event: 'Meetup SecParis #28',
    meta: 'Bureaux d’AKUR8, Paris · mardi 27 janvier',
    items: [
      'Talk « Cyber-Physique : quand les ondes deviennent des armes » : démonstration de clonage NFC en direct, manipulation du spectre RF et brouillage RF avec Flipper Zero et HackRF One.',
      'Exploration des vulnérabilités du monde physique et de l’effacement de la frontière entre cyber et physique.',
    ],
    presentedAs: 'Présenté en tant que « RAPATT, cyber-entrepreneur, fondateur de Stormsecurity et hacker ».',
    // TODO: URL de l'organisateur SecParis non fournie ; citation en texte simple, sans lien.
    organizerNote: 'Organisé par SecParis, meetup cybersécurité à Paris.',
  },
];

/* ------------------------------------------------------------------ */
/* Recherche & écriture (Medium)                                       */
/* ------------------------------------------------------------------ */
/* TODO: l'année de publication n'a pas été fournie pour ces articles ;
   seules les dates jour/mois transmises sont affichées. */

export type Article = {
  title: string;
  date: string;
  summary: string;
  href: string;
};

export const articles: Article[] = [
  {
    title: "J'ai cassé root pour tester un EDR… et j'ai dû m'échapper par Docker",
    date: '28 mai',
    summary:
      "Modification d'un compte système critique pour tester la détection d'un EDR, récupération du serveur via Docker.",
    href:
      'https://medium.com/@rapatt_81344/jai-cass%C3%A9-root-pour-tester-un-edr-et-j-ai-d%C3%BB-m-%C3%A9chapper-par-docker-4be75428a77e',
  },
  {
    title: 'Transformer une IA Open Source en expert Cyber Local avec Ollama (Tutoriel)',
    date: '22 janvier',
    summary:
      'Spécialiser Llama 3, Mistral ou Gemma pour un SOC en local, sans envoyer de données dans le cloud.',
    href:
      'https://medium.com/@rapatt_81344/transformer-une-ia-open-source-en-expert-cyber-local-avec-ollama-tutoriel-8f02e02bc476',
  },
  {
    title: "Hack DJI Mini 3 : l'échec de mes attaques Replay et GPS Spoofing",
    date: '7 janvier',
    summary:
      "Pourquoi le piratage d'un drone moderne résiste aux outils SDR standards comme le HackRF One.",
    href:
      'https://medium.com/@rapatt_81344/hack-dji-mini-3-l%C3%A9chec-de-mes-attaques-replay-et-gps-spoofing-1d8a0462cd71',
  },
  {
    title: 'Noël, un Flipper Zero et un robot piraté : replay attack en 30 secondes',
    date: '28 décembre',
    summary: "Clonage de télécommande IR, démonstration live d'une attaque par rejeu.",
    href:
      'https://medium.com/@rapatt_81344/no%C3%ABl-un-flipper-zero-et-un-robot-pirat%C3%A9-replay-attack-en-30-secondes-5642b9c4d5a4',
  },
  {
    title:
      'Quand le routeur de voyage censé sécuriser votre connexion devient lui-même un point faible',
    date: '13 décembre',
    summary:
      "De l'affaire des micros cachés dans les KVM Sipeed à l'audit complet d'un routeur GL.iNet Slate 7.",
    href:
      'https://medium.com/@rapatt_81344/quand-le-routeur-de-voyage-cens%C3%A9-s%C3%A9curiser-votre-vpn-devient-lui-m%C3%AAme-un-point-faible-bf9c85b35f3d',
  },
  {
    title: 'Hacker le GPS : légende IT ou réalité ?',
    date: '2 décembre',
    summary: 'Comment « téléporter » une montre connectée à Paris.',
    href: 'https://medium.com/@rapatt_81344/hacker-le-gps-l%C3%A9gende-it-ou-r%C3%A9alit%C3%A9-fd1779ccda92',
  },
  {
    title: 'Hacking NFC : Flipper Zero, Proxmark3 ou Android ? Le Guide du Red Team',
    date: '25 novembre',
    summary: "Retour d'expérience Red Team avec cas réels (DESFire, Ultralight).",
    href:
      'https://medium.com/@rapatt_81344/hacking-nfc-flipper-zero-proxmark3-ou-android-le-guide-du-red-team-e465d122730a',
  },
  {
    title:
      'Reprendre le contrôle de ses données : mon installation Syncthing ultime (Docker, Nginx & MikroTik)',
    date: '19 novembre',
    summary: 'Architecture complète de sauvegarde décentralisée auto-hébergée.',
    href:
      'https://medium.com/@rapatt_81344/reprendre-le-contr%C3%B4le-de-ses-donn%C3%A9es-mon-installation-syncthing-ultime-docker-nginx-mikrotik-1940806a425b',
  },
];

/* ------------------------------------------------------------------ */
/* Compétences                                                         */
/* ------------------------------------------------------------------ */

export type SkillGroup = {
  domain: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    domain: 'Sécurité offensive',
    items: [
      "Tests d'intrusion",
      'Red team',
      'Hardware & radio',
      'NFC / RFID',
      'GPS spoofing',
      'SDR',
      'EDR evasion',
    ],
  },
  {
    domain: 'Sécurité défensive & entreprise',
    items: [
      'Active Directory',
      'Kerberos',
      'DMZ',
      'Réponse à incident',
      'Forensique',
      'SOC',
    ],
  },
  {
    domain: 'Infrastructure',
    items: ['Proxmox', 'VLAN', 'Docker', 'Réseaux', 'Homelab', 'Linux'],
  },
  {
    domain: 'Développement',
    items: ['Next.js / React', 'TypeScript', 'Python', 'Prisma / SQL'],
  },
  {
    domain: 'IA & automatisation',
    items: [
      'Agents autonomes',
      'Computer vision / YOLOv8',
      'LLM locaux / Ollama',
      "Automatisation d'infrastructure",
      "Automatisation d'emails",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Formation                                                            */
/* ------------------------------------------------------------------ */
/* Section volontairement sobre : le M1 est présenté comme la suite
   logique d'un parcours déjà solide, pas comme un statut en cours mis
   en avant. Voir app/components/Formation.tsx. */

export const education = {
  paragraph:
    "Raphaël Attias est formé à La Plateforme_, avec un parcours construit en administration d'infrastructure sécurisée puis approfondi en expertise cybersécurité : Bachelor Administrateur d'Infrastructures Sécurisées (RNCP 37680), suivi d'un Master Expert en Cybersécurité actuellement en cours (M1).",
  milestones: [
    { label: "Bachelor Administrateur d'Infrastructures Sécurisées", meta: 'RNCP 37680' },
    { label: 'Master Expert en Cybersécurité', meta: 'M1, en cours' },
  ],
} as const;
