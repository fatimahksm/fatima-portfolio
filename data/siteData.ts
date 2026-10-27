import type { NavItem, Project, ExperienceItem, SkillCategory, EducationItem } from '@/types'

// ─── Common Links ────────────────────────────────────────────────────────────

export const commonLinks = {
  email: 'kassemf96@gmail.com',
  emailLink: 'mailto:kassemf96@gmail.com',
  linkedin:
    'https://www.linkedin.com/in/fatima-kassem-4711382b0?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  cv: '/Fatima_Kassem_CV.pdf',
  github: null as string | null,
}

// ─── Personal Info ───────────────────────────────────────────────────────────

export const personalInfo = {
  name: 'Fatima Kassem',
  title: { en: 'Full Stack Web & Mobile Developer', fr: 'Développeuse Full Stack Web & Mobile' },
  location: 'Lebanon',
}

// ─── Nav Items ───────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { id: 'home', en: 'Home', fr: 'Accueil' },
  { id: 'about', en: 'About', fr: 'À Propos' },
  { id: 'experience', en: 'Experience', fr: 'Expérience' },
  { id: 'projects', en: 'Projects', fr: 'Projets' },
  { id: 'skills', en: 'Skills', fr: 'Compétences' },
  { id: 'education', en: 'Education', fr: 'Formation' },
  { id: 'contact', en: 'Contact', fr: 'Contact' },
]

// ─── Hero ────────────────────────────────────────────────────────────────────

export const heroContent = {
  heading: {
    en: "Hi, I'm Fatima Kassem — I build modern digital experiences for web and mobile.",
    fr: 'Bonjour, je suis Fatima Kassem — je crée des expériences digitales modernes pour le web et le mobile.',
  },
  typingTexts: {
    en: [
      'Full Stack Web & Mobile Developer',
      'Flutter Developer',
      'Spring Boot Developer',
      'AI & LLM Fine-Tuning',
      'Frontend & Backend Developer',
    ],
    fr: [
      'Développeuse Full Stack Web & Mobile',
      'Développeuse Flutter',
      'Développeuse Spring Boot',
      'IA & Fine-Tuning de LLM',
      'Développeuse Frontend & Backend',
    ],
  },
  buttons: {
    viewProjects: { en: 'View Projects', fr: 'Voir les Projets' },
    contactMe: { en: 'Contact Me', fr: 'Me Contacter' },
    downloadCV: { en: 'Download CV', fr: 'Télécharger CV' },
  },
}

// ─── About ───────────────────────────────────────────────────────────────────

export const aboutContent = {
  text: {
    en: 'I am a Full Stack Web & Mobile Developer based in Lebanon, currently working at a software company on a Flutter mobile product while pursuing Master 2 in Technology and Science of Information Systems at the Lebanese University - Faculty of Technology. My Master 1 research internship took me into applied AI — fine-tuning a multilingual language model and building the retrieval and routing layer around it — and I now work across both worlds. I focus on building practical, elegant, and scalable digital solutions across web, mobile, and AI, with experience in frontend development, backend APIs, database integration, and real-world client and internship projects.',
    fr: "Je suis une développeuse Full Stack Web & Mobile basée au Liban, travaillant actuellement dans une société de logiciels sur un produit mobile Flutter, tout en poursuivant un Master 2 en Technologie et Sciences des Systèmes d'Information à l'Université Libanaise - Faculté de Technologie. Mon stage de recherche de Master 1 m'a menée vers l'IA appliquée — fine-tuning d'un modèle de langage multilingue et construction de la couche de recherche et de routage autour — et je travaille aujourd'hui dans les deux domaines. Je me concentre sur la création de solutions digitales pratiques, élégantes et évolutives pour le web, le mobile et l'IA, avec une expérience en développement frontend, APIs backend, intégration de bases de données, projets clients et stages réels.",
  },
  stats: [
    { value: '8+', label: { en: 'Projects', fr: 'Projets' } },
    { value: '3', label: { en: 'Internships', fr: 'Stages' } },
    { value: '2', label: { en: 'Client Projects', fr: 'Projets Clients' } },
    { icon: 'devices', label: { en: 'Web & Mobile Focus', fr: 'Focus Web & Mobile' } },
  ] as { value?: string; icon?: string; label: { en: string; fr: string } }[],
}

// ─── Experience ──────────────────────────────────────────────────────────────

export const experiences: ExperienceItem[] = [
  {
    id: 'confidential',
    title: { en: 'Full-Stack Developer — Software Company', fr: 'Développeuse Full Stack — Société de Logiciels' },
    role: { en: 'Full Stack Developer', fr: 'Développeuse Full Stack' },
    status: { en: 'Current Position', fr: 'Poste actuel' },
    workType: { en: 'Company Team', fr: "Équipe d'entreprise" },
    technologies: ['Flutter', 'Java Spring Boot', 'PostgreSQL', 'Git / GitHub'],
    description: {
      en: "Currently employed at a software company, working with the team on the company's multi-tenant mobile product — a Flutter application backed by Java Spring Boot and PostgreSQL. Also supervised around 10 interns across three internal projects (Feb – May 2026), reviewing their code, guiding their development process, and helping them resolve technical problems. The company and project names remain confidential.",
      fr: "Actuellement employée dans une société de logiciels, où je travaille avec l'équipe sur le produit mobile multi-tenant de l'entreprise — une application Flutter avec un backend Java Spring Boot et PostgreSQL. J'ai également encadré une dizaine de stagiaires sur trois projets internes (février – mai 2026) : revue de code, accompagnement du processus de développement et aide à la résolution de problèmes techniques. Les noms de la société et des projets restent confidentiels.",
    },
    badge: 'confidential',
  },
  {
    id: 'ai-research-internship',
    title: { en: 'AI Research Internship — Build4All', fr: 'Stage de Recherche en IA — Build4All' },
    role: { en: 'AI Research & Full Stack Intern', fr: 'Stagiaire Recherche IA & Full Stack' },
    organization: 'Master 1',
    year: '2026',
    project: 'Multilingual AI Layer for a Social Agent Platform',
    status: { en: 'Completed', fr: 'Terminé' },
    workType: { en: 'Research & Engineering', fr: 'Recherche & Ingénierie' },
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'QLoRA', 'mBERT', 'RAG / FAISS', 'Java Spring Boot', 'React'],
    description: {
      en: "Master 1 research internship at Build4All, on the company's Social Agent platform. Benchmarked and fine-tuned an open 4B language model with QLoRA on multilingual data (English, French, Arabic and Lebanese Arabizi), and proposed Adaptive Guarded QLoRA — a training method adding grounding, drift and repetition objectives under a controller. Built the surrounding layer: an mBERT intent classifier, a router, retrieval over a controlled knowledge base, and fact-grounded generation, evaluated with blinded scoring and bootstrap confidence intervals. In parallel, worked as a full-stack developer on the platform itself (Java Spring Boot and React): AI providers, image generation, Instagram and Facebook publishing, analytics, billing and trilingual RTL localisation.",
      fr: "Stage de recherche de Master 1 chez Build4All, sur la plateforme Social Agent de l'entreprise. Évaluation comparative puis fine-tuning d'un modèle de langage ouvert de 4 milliards de paramètres avec QLoRA sur des données multilingues (anglais, français, arabe et arabizi libanais), et proposition d'Adaptive Guarded QLoRA — une méthode d'entraînement ajoutant des objectifs d'ancrage, de dérive et de répétition pilotés par un contrôleur. Construction de la couche autour du modèle : classifieur d'intention mBERT, routeur, recherche sur une base de connaissances contrôlée et génération ancrée dans les faits, évalués en aveugle avec intervalles de confiance bootstrap. En parallèle, développement full stack sur la plateforme (Java Spring Boot et React) : fournisseurs IA, génération d'images, publication Instagram et Facebook, analytics, facturation et localisation trilingue avec mise en page RTL.",
    },
    badge: 'internship',
  },
  {
    id: 'ecommerce-client',
    title: { en: 'Client E-commerce Project', fr: 'Projet E-commerce Client' },
    role: { en: 'Full Stack Developer', fr: 'Développeuse Full Stack' },
    year: '2026',
    status: { en: 'Completed Client Project', fr: 'Projet client terminé' },
    workType: { en: 'Solo', fr: 'Individuel' },
    technologies: ['Next.js', 'Java Spring Boot'],
    description: {
      en: 'Handled a real client engagement end to end as the sole developer — from understanding the requirements and structuring the interface to building the backend APIs and delivering a production-ready result to the client.',
      fr: "Prise en charge complète d'une mission client réelle en tant que seule développeuse — de la compréhension des besoins et la structuration de l'interface jusqu'à la construction des APIs backend et la livraison d'un résultat prêt pour la production.",
    },
    badge: 'client',
  },
  {
    id: 'nutribite-internship',
    title: { en: 'Full Stack Web Internship — NutriBite', fr: 'Stage Full Stack Web — NutriBite' },
    role: { en: 'Full Stack Web Intern', fr: 'Stagiaire Full Stack Web' },
    organization: 'Laptop',
    date: 'May 15, 2025 – July 1, 2025',
    project: 'NutriBite',
    status: { en: 'Completed', fr: 'Terminé' },
    workType: { en: 'Solo', fr: 'Individuel' },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    description: {
      en: 'During my internship at Laptop, I was trusted to build the NutriBite platform on my own — planning the structure, implementing the React frontend and Node.js backend, and delivering a working multi-role platform by the end of the internship.',
      fr: "Durant mon stage chez Laptop, on m'a confié la construction de la plateforme NutriBite en autonomie — de la planification de la structure à l'implémentation du frontend React et du backend Node.js, jusqu'à la livraison d'une plateforme multi-rôles fonctionnelle à la fin du stage.",
    },
    badge: 'internship',
  },
  {
    id: 'hobbysphere-internship',
    title: { en: 'Full Stack Software Development Internship — Hobby Sphere', fr: 'Stage Développement Logiciel Full Stack — Hobby Sphere' },
    role: { en: 'Full Stack Software Development Intern', fr: 'Stagiaire en Développement Logiciel Full Stack' },
    date: 'April 1, 2025 – June 30, 2025',
    project: 'Hobby Sphere',
    status: { en: 'Completed', fr: 'Terminé' },
    workType: { en: 'Team Project', fr: 'Projet en équipe' },
    technologies: ['React Native', 'Java Spring Boot', 'PostgreSQL', 'Git / GitHub'],
    description: {
      en: 'Worked inside a real development team with Git-based collaboration — my main responsibilities were React Native screens, Spring Boot backend endpoints, and the payment integration for the Hobby Sphere app.',
      fr: "Travail au sein d'une véritable équipe de développement avec une collaboration basée sur Git — mes responsabilités principales : les écrans React Native, les endpoints backend Spring Boot et l'intégration des paiements pour l'application Hobby Sphere.",
    },
    badge: 'internship',
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'ai-social-agent',
    name: { en: 'Multilingual AI Layer — Build4All Social Agent', fr: "Couche IA Multilingue — Social Agent de Build4All" },
    type: { en: 'AI Research Project', fr: 'Projet de Recherche IA' },
    year: '2026',
    status: { en: 'Completed', fr: 'Terminé' },
    workType: { en: 'Master 1 Research Internship', fr: 'Stage de recherche Master 1' },
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'QLoRA', 'mBERT', 'RAG / FAISS'],
    description: {
      en: "A self-hosted multilingual AI layer for Build4All's Social Agent platform: an open 4B language model fine-tuned with QLoRA so the product no longer depends only on externally hosted commercial models, with intent routing and retrieval around it.",
      fr: "Une couche IA multilingue auto-hébergée pour la plateforme Social Agent de Build4All : un modèle de langage ouvert de 4 milliards de paramètres affiné avec QLoRA afin que le produit ne dépende plus uniquement de modèles commerciaux externes, avec routage d'intention et recherche documentaire autour.",
    },
    features: {
      en: ['Model benchmarking and selection', 'Multilingual dataset engineering (EN / FR / AR / Arabizi)', 'QLoRA fine-tuning', 'Adaptive Guarded QLoRA training method', 'mBERT intent classification and routing', 'Retrieval over a controlled knowledge base', 'Fact-grounded generation', 'Blinded evaluation with bootstrap confidence intervals'],
      fr: ['Évaluation et sélection de modèles', 'Ingénierie de données multilingues (EN / FR / AR / Arabizi)', 'Fine-tuning QLoRA', "Méthode d'entraînement Adaptive Guarded QLoRA", "Classification d'intention mBERT et routage", 'Recherche sur une base de connaissances contrôlée', 'Génération ancrée dans les faits', 'Évaluation en aveugle avec intervalles bootstrap'],
    },
    role: { en: 'AI Research & Full Stack Developer', fr: 'Chercheuse IA & Développeuse Full Stack' },
    teamInfo: { en: 'Individual research, supervised', fr: 'Recherche individuelle, encadrée' },
    badge: 'solo',
    gradient: 'from-violet-300/45 via-fuchsia-200/25 to-violet-200/35',
    privateCode: true,
  },
  {
    id: 'wedding-qr',
    name: { en: 'Wedding QR — Multi-Tenant SaaS', fr: 'Wedding QR — SaaS Multi-Tenant' },
    type: { en: 'SaaS Product', fr: 'Produit SaaS' },
    year: '2026',
    status: { en: 'Completed', fr: 'Terminé' },
    workType: { en: 'Solo', fr: 'Individuel' },
    technologies: ['Next.js', 'Java Spring Boot', 'PostgreSQL', 'Cloud Storage'],
    description: {
      en: 'A multi-tenant SaaS platform where each wedding gets its own QR code: guests scan it to open the event space and upload their photos, which are stored in cloud storage rather than on the server.',
      fr: "Une plateforme SaaS multi-tenant où chaque mariage reçoit son propre QR code : les invités le scannent pour ouvrir l'espace de l'événement et téléverser leurs photos, stockées dans le cloud plutôt que sur le serveur.",
    },
    features: {
      en: ['Multi-tenant architecture', 'Per-event QR code generation', 'Guest photo upload', 'Cloud media storage', 'Event dashboard', 'Responsive design'],
      fr: ['Architecture multi-tenant', 'Génération de QR code par événement', 'Téléversement de photos par les invités', 'Stockage des médias dans le cloud', "Tableau de bord de l'événement", 'Design responsive'],
    },
    role: { en: 'Full Stack Developer', fr: 'Développeuse Full Stack' },
    teamInfo: { en: 'Solo Project', fr: 'Projet individuel' },
    badge: 'solo',
    gradient: 'from-sky-300/45 via-cyan-200/25 to-sky-200/35',
  },
  {
    id: 'confidential',
    name: { en: 'Company Mobile App — Multi-Tenant', fr: "Application Mobile d'Entreprise — Multi-Tenant" },
    type: { en: 'Company Project', fr: "Projet d'Entreprise" },
    year: '2026',
    status: { en: 'Company Product', fr: "Produit d'entreprise" },
    workType: { en: 'Company Team', fr: "Équipe d'entreprise" },
    technologies: ['Flutter', 'Java Spring Boot', 'PostgreSQL', 'Git / GitHub'],
    description: {
      en: 'A multi-tenant cross-platform mobile application I worked on as part of my role at a software company, built with Flutter on a Java Spring Boot and PostgreSQL backend. The company and product details remain confidential.',
      fr: "Application mobile multiplateforme multi-tenant sur laquelle j'ai travaillé dans le cadre de mon poste dans une société de logiciels, développée avec Flutter sur un backend Java Spring Boot et PostgreSQL. Les détails de la société et du produit restent confidentiels.",
    },
    features: {
      en: ['Multi-tenant architecture', 'Cross-platform mobile app', 'Spring Boot REST APIs', 'PostgreSQL data layer'],
      fr: ['Architecture multi-tenant', 'Application mobile multiplateforme', 'APIs REST Spring Boot', 'Couche de données PostgreSQL'],
    },
    role: { en: 'Full Stack Developer', fr: 'Développeuse Full Stack' },
    teamInfo: { en: 'Company Team', fr: "Équipe d'entreprise" },
    badge: 'confidential',
    gradient: 'from-neutral-300/45 via-gray-200/30 to-zinc-300/40',
    privateCode: true,
  },
  {
    id: 'ecommerce',
    name: { en: 'Client E-commerce Project', fr: 'Projet E-commerce Client' },
    type: { en: 'Client Project', fr: 'Projet Client' },
    year: '2026',
    status: { en: 'Completed', fr: 'Terminé' },
    workType: { en: 'Solo', fr: 'Individuel' },
    technologies: ['Next.js', 'Java Spring Boot'],
    description: {
      en: 'A professional e-commerce web application built with Next.js and Java Spring Boot, focused on product browsing, product details, categories, admin dashboard, search, filters, and responsive design.',
      fr: 'Application web e-commerce professionnelle développée avec Next.js et Java Spring Boot, axée sur la consultation des produits, les détails produits, les catégories, le tableau de bord administrateur, la recherche, les filtres et le design responsive.',
    },
    features: {
      en: ['Product listing', 'Product details page', 'Categories', 'Admin dashboard', 'Search / filters', 'Responsive design'],
      fr: ['Liste des produits', 'Page détails produit', 'Catégories', 'Tableau de bord administrateur', 'Recherche / filtres', 'Design responsive'],
    },
    role: { en: 'Full Stack Developer', fr: 'Développeuse Full Stack' },
    teamInfo: { en: 'Solo Project', fr: 'Projet individuel' },
    badge: 'client',
    gradient: 'from-stone-300/45 via-neutral-200/30 to-stone-200/40',
    privateCode: true,
  },
  {
    id: 'hobbysphere',
    name: { en: 'Hobby Sphere', fr: 'Hobby Sphere' },
    type: { en: 'Team Project', fr: 'Projet en Équipe' },
    year: '2025',
    status: { en: 'Completed', fr: 'Terminé' },
    workType: { en: 'Team Project', fr: 'Projet en équipe' },
    technologies: ['React Native', 'Java Spring Boot', 'PostgreSQL', 'Git / GitHub'],
    description: {
      en: 'Hobby Sphere is a full-stack mobile application for activity discovery, booking, social interaction, business management, and secure user experiences.',
      fr: "Hobby Sphere est une application mobile full stack dédiée à la découverte d'activités, à la réservation, aux interactions sociales, à la gestion des entreprises et à l'expérience utilisateur sécurisée.",
    },
    features: {
      en: ['Authentication', 'Profile management', 'Activity/item management', 'Booking', 'Reviews', 'Notifications', 'Maps / location', 'Multi-language support', 'Theme customization', 'Backend API integration'],
      fr: ['Authentification', 'Gestion du profil', "Gestion des activités/items", 'Réservation', 'Avis', 'Notifications', 'Cartes / localisation', 'Support multilingue', 'Personnalisation du thème', 'Intégration des APIs backend'],
    },
    role: {
      en: 'Contributed as part of a development team, focusing on React Native mobile development, Spring Boot backend APIs, and payment integration features.',
      fr: "Participation au sein d'une équipe de développement, avec une contribution principale au développement mobile React Native, aux APIs backend avec Spring Boot et aux fonctionnalités de paiement.",
    },
    teamInfo: { en: 'Team Project', fr: 'Projet en équipe' },
    badge: 'team',
    gradient: 'from-rose-300/45 via-pink-200/25 to-rose-200/35',
    githubUrl: 'https://github.com/fatimahh0/HobbySphereMobile',
  },
  {
    id: 'nutribite',
    name: { en: 'NutriBite', fr: 'NutriBite' },
    type: { en: 'Solo Internship Project', fr: 'Projet de Stage Individuel' },
    year: '2025',
    status: { en: 'Completed', fr: 'Terminé' },
    workType: { en: 'Solo Project', fr: 'Projet individuel' },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    description: {
      en: 'NutriBite is a multi-role food e-commerce platform that allows users to order meals, kitchens to manage menus, delivery drivers to handle deliveries, and admins to manage the system.',
      fr: "NutriBite est une plateforme e-commerce alimentaire multi-rôles qui permet aux utilisateurs de commander des repas, aux cuisines de gérer leurs menus, aux livreurs de gérer les livraisons, et aux administrateurs de gérer le système.",
    },
    features: {
      en: ['User interface pages', 'Kitchen/business dashboard', 'Super admin dashboard', 'Delivery driver interface', 'Login / register', 'Order management', 'Menu / meals management', 'Database integration', 'API integration', 'Responsive design'],
      fr: ['Interfaces utilisateur', 'Tableau de bord cuisine/business', 'Tableau de bord super administrateur', 'Interface livreur', 'Connexion / inscription', 'Gestion des commandes', 'Gestion des menus / repas', 'Intégration base de données', 'Intégration API', 'Design responsive'],
    },
    role: { en: 'Full Stack Web Developer', fr: 'Développeuse Web Full Stack' },
    teamInfo: { en: 'Solo Project', fr: 'Projet individuel' },
    badge: 'solo',
    gradient: 'from-teal-300/45 via-emerald-200/25 to-teal-200/35',
    githubUrl: 'https://github.com/fatimahksm/nutribite',
  },
  {
    id: 'brain-mri',
    name: { en: 'Brain MRI Tumor Classification', fr: 'Classification de Tumeurs par IRM Cérébrale' },
    type: { en: 'University Project', fr: 'Projet Universitaire' },
    year: '2026',
    status: { en: 'Completed', fr: 'Terminé' },
    workType: { en: 'Team Project', fr: 'Projet en équipe' },
    technologies: ['Python', 'TensorFlow', 'Keras', 'Convolutional Neural Network'],
    description: {
      en: 'A machine-learning project built with a university team, training a convolutional neural network to classify brain MRI scans and flag the presence of a tumor.',
      fr: "Projet de machine learning réalisé avec une équipe universitaire, entraînant un réseau de neurones convolutif pour classifier des IRM cérébrales et détecter la présence d'une tumeur.",
    },
    features: {
      en: ['MRI dataset preparation', 'Image preprocessing', 'CNN model architecture', 'Model training', 'Validation', 'Accuracy evaluation'],
      fr: ['Préparation du jeu de données IRM', 'Prétraitement des images', 'Architecture du modèle CNN', 'Entraînement du modèle', 'Validation', "Évaluation de la précision"],
    },
    role: {
      en: 'Contributed as part of a university team on the data preparation, model training, and evaluation stages.',
      fr: "Contribution au sein d'une équipe universitaire sur la préparation des données, l'entraînement du modèle et l'évaluation.",
    },
    teamInfo: { en: 'University Team Project', fr: 'Projet universitaire en équipe' },
    badge: 'university',
    gradient: 'from-amber-300/45 via-orange-200/25 to-amber-200/35',
  },
  {
    id: 'unify',
    name: { en: 'Unify — University Mobile App', fr: 'Unify — Application Mobile Universitaire' },
    type: { en: 'University Project', fr: 'Projet Universitaire' },
    year: '2026',
    status: { en: 'Completed', fr: 'Terminé' },
    workType: { en: 'University Project', fr: 'Projet universitaire' },
    technologies: ['Android Java', 'SQLite', 'Firebase', 'Online SQL Database', 'AwardSpace Hosting'],
    description: {
      en: 'Unify is a university mobile application developed with Android Java, combining online database connectivity, local SQLite storage, Firebase chat, and notification features.',
      fr: 'Unify est une application mobile universitaire développée avec Android Java, combinant une connexion à une base de données en ligne, le stockage local SQLite, le chat Firebase et les notifications.',
    },
    features: {
      en: ['User login / register', 'Student profile', 'Chat', 'Notifications', 'Courses / university information', 'Admin panel', 'Online database connection', 'Local SQLite storage'],
      fr: ['Connexion / inscription', 'Profil étudiant', 'Chat', 'Notifications', 'Cours / informations universitaires', 'Panneau administrateur', 'Connexion à une base de données en ligne', 'Stockage local SQLite'],
    },
    role: { en: 'Android Java Developer', fr: 'Développeuse Android Java' },
    teamInfo: { en: 'University Project', fr: 'Projet universitaire' },
    badge: 'university',
    gradient: 'from-blue-300/45 via-indigo-200/25 to-blue-200/35',
    githubUrl: 'https://github.com/fatimahksm/Unify',
  },
]

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: { en: 'Frontend', fr: 'Frontend' },
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    id: 'mobile',
    label: { en: 'Mobile', fr: 'Mobile' },
    skills: ['React Native', 'Flutter', 'Android Java'],
  },
  {
    id: 'backend',
    label: { en: 'Backend', fr: 'Backend' },
    skills: ['Java Spring Boot', 'Node.js', 'REST APIs'],
  },
  {
    id: 'ai',
    label: { en: 'AI / Machine Learning', fr: 'IA / Machine Learning' },
    skills: ['Python', 'PyTorch', 'Hugging Face', 'LLM Fine-Tuning (QLoRA)', 'mBERT', 'RAG / FAISS', 'TensorFlow', 'Keras', 'CNN'],
  },
  {
    id: 'databases',
    label: { en: 'Databases', fr: 'Bases de Données' },
    skills: ['PostgreSQL', 'SQLite', 'Firebase', 'MySQL'],
  },
  {
    id: 'tools',
    label: { en: 'Tools', fr: 'Outils' },
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Android Studio', 'IntelliJ IDEA', 'Figma'],
  },
  {
    id: 'languages',
    label: { en: 'Languages', fr: 'Langues' },
    skills: ['Arabic (Native)', 'French (Good)', 'English (Intermediate)'],
  },
]

// ─── Education ────────────────────────────────────────────────────────────────

export const education: EducationItem[] = [
  {
    id: 'bachelor',
    degree: { en: 'Bachelor Degree', fr: 'Licence' },
    institution: { en: 'Lebanese University - Faculty of Technology', fr: 'Université Libanaise - Faculté de Technologie' },
    field: { en: 'Business Computer / Informatique de Gestion', fr: 'Informatique de Gestion / Business Computer' },
    year: { en: 'Graduated 2025', fr: 'Diplômée en 2025' },
    current: false,
  },
  {
    id: 'master1',
    degree: { en: 'Master 1', fr: 'Master 1' },
    institution: { en: 'Lebanese University - Faculty of Technology', fr: 'Université Libanaise - Faculté de Technologie' },
    field: { en: 'Technology and Science of Information Systems', fr: "Technologie et Sciences des Systèmes d'Information" },
    year: { en: 'Completed 2026', fr: 'Terminé en 2026' },
    current: false,
  },
  {
    id: 'master2',
    degree: { en: 'Master 2', fr: 'Master 2' },
    institution: { en: 'Lebanese University - Faculty of Technology', fr: 'Université Libanaise - Faculté de Technologie' },
    field: { en: 'Technology and Science of Information Systems', fr: "Technologie et Sciences des Systèmes d'Information" },
    year: { en: 'Current', fr: 'Actuellement' },
    current: true,
  },
]

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contactContent = {
  text: {
    en: "I'm currently working full-time as a Full Stack Developer — and open to freelance projects.",
    fr: "Je travaille actuellement à temps plein comme développeuse Full Stack — et je suis ouverte aux projets freelance.",
  },
  heading: {
    en: "Let's Connect",
    fr: 'Connectons-Nous',
  },
  buttons: [
    { key: 'email', en: 'Email', fr: 'Email', href: commonLinks.emailLink },
    { key: 'linkedin', en: 'LinkedIn', fr: 'LinkedIn', href: commonLinks.linkedin },
    { key: 'cv', en: 'Download CV', fr: 'Télécharger CV', href: commonLinks.cv },
  ],
}

// ─── Section Labels ───────────────────────────────────────────────────────────

export const sectionLabels = {
  about: { en: 'About', fr: 'À Propos' },
  experience: { en: 'Experience', fr: 'Expérience' },
  projects: { en: 'Projects', fr: 'Projets' },
  skills: { en: 'Skills', fr: 'Compétences' },
  education: { en: 'Education', fr: 'Formation' },
  contact: { en: 'Contact', fr: 'Contact' },
  viewDetails: { en: 'View Details', fr: 'Voir Détails' },
  close: { en: 'Close', fr: 'Fermer' },
  role: { en: 'My Role', fr: 'Mon Rôle' },
  features: { en: 'Key Features', fr: 'Fonctionnalités Clés' },
  technologies: { en: 'Technologies', fr: 'Technologies' },
  status: { en: 'Status', fr: 'Statut' },
  team: { en: 'Team', fr: 'Équipe' },
  viewCode: { en: 'View Code', fr: 'Voir le Code' },
  privateCode: { en: 'Code not public', fr: 'Code non public' },
}
