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
      'Frontend & Backend Developer',
    ],
    fr: [
      'Développeuse Full Stack Web & Mobile',
      'Développeuse Flutter',
      'Développeuse Spring Boot',
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
    en: 'I am a Full Stack Web & Mobile Developer based in Lebanon, currently working at a software company on a Flutter mobile product while pursuing Master 1 in Technology and Science of Information Systems at the Lebanese University - Faculty of Technology. I focus on building practical, elegant, and scalable digital solutions across web and mobile platforms, with experience in frontend development, backend APIs, database integration, and real-world client and internship projects.',
    fr: "Je suis une développeuse Full Stack Web & Mobile basée au Liban, travaillant actuellement dans une société de logiciels sur un produit mobile Flutter, tout en poursuivant un Master 1 en Technologie et Sciences des Systèmes d'Information à l'Université Libanaise - Faculté de Technologie. Je me concentre sur la création de solutions digitales pratiques, élégantes et évolutives pour le web et le mobile, avec une expérience en développement frontend, APIs backend, intégration de bases de données, projets clients et stages réels.",
  },
  stats: [
    { value: '5+', label: { en: 'Projects', fr: 'Projets' } },
    { value: '2', label: { en: 'Internships', fr: 'Stages' } },
    { value: '1', label: { en: 'Client Project', fr: 'Projet Client' } },
    { value: '⚡', label: { en: 'Web & Mobile Focus', fr: 'Focus Web & Mobile' } },
  ],
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
      en: "Currently employed at a software company, working with the team on the company's mobile product — a Flutter application backed by Java Spring Boot and PostgreSQL. The company and project names remain confidential.",
      fr: "Actuellement employée dans une société de logiciels, où je travaille avec l'équipe sur le produit mobile de l'entreprise — une application Flutter avec un backend Java Spring Boot et PostgreSQL. Les noms de la société et du projet restent confidentiels.",
    },
    badge: 'confidential',
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
    organization: 'Dr. George Lebbos',
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
    id: 'confidential',
    name: { en: 'Company Mobile App — Confidential', fr: "Application Mobile d'Entreprise — Confidentielle" },
    type: { en: 'Company Project', fr: "Projet d'Entreprise" },
    status: { en: 'In Progress', fr: 'En cours' },
    workType: { en: 'Company Team', fr: "Équipe d'entreprise" },
    technologies: ['Flutter', 'Java Spring Boot', 'PostgreSQL', 'Git / GitHub'],
    description: {
      en: 'A cross-platform mobile application I am currently building as part of my role at a software company, using Flutter with a Java Spring Boot and PostgreSQL backend. The company and product details remain confidential.',
      fr: "Application mobile multiplateforme que je développe actuellement dans le cadre de mon poste dans une société de logiciels, avec Flutter et un backend Java Spring Boot / PostgreSQL. Les détails de la société et du produit restent confidentiels.",
    },
    features: {
      en: ['Confidential'],
      fr: ['Confidentiel'],
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
    id: 'unify',
    name: { en: 'Unify — University Mobile App', fr: 'Unify — Application Mobile Universitaire' },
    type: { en: 'University Project', fr: 'Projet Universitaire' },
    year: '2024',
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
    id: 'master',
    degree: { en: 'Master 1', fr: 'Master 1' },
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
  privateCode: { en: 'Private client project', fr: 'Projet client privé' },
}
