import type { NavItem, Project, ExperienceItem, SkillCategory, EducationItem } from '@/types'

// ─── Common Links ────────────────────────────────────────────────────────────

export const commonLinks = {
  email: 'kassemf96@gmail.com',
  emailLink: 'mailto:kassemf96@gmail.com',
  phone: '+961 81 639 234',
  whatsapp: 'https://wa.me/96181639234',
  linkedin:
    'https://www.linkedin.com/in/fatima-kassem-4711382b0?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  cv: '/cv',
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
      'React Native Developer',
      'Spring Boot Developer',
      'Frontend & Backend Developer',
    ],
    fr: [
      'Développeuse Full Stack Web & Mobile',
      'Développeuse React Native',
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
    en: 'I am a Full Stack Web & Mobile Developer based in Lebanon, currently pursuing Master 1 in Technology and Science of Information Systems at the Lebanese University - Faculty of Technology. I focus on building practical, elegant, and scalable digital solutions across web and mobile platforms, with experience in frontend development, backend APIs, database integration, and real-world client and internship projects.',
    fr: "Je suis une développeuse Full Stack Web & Mobile basée au Liban, actuellement en Master 1 en Technologie et Sciences des Systèmes d'Information à l'Université Libanaise - Faculté de Technologie. Je me concentre sur la création de solutions digitales pratiques, élégantes et évolutives pour le web et le mobile, avec une expérience en développement frontend, APIs backend, intégration de bases de données, projets clients et stages réels.",
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
    id: 'ecommerce-client',
    title: { en: 'Client E-commerce Project', fr: 'Projet E-commerce Client' },
    role: { en: 'Full Stack Developer', fr: 'Développeuse Full Stack' },
    year: '2026',
    status: { en: 'Completed Client Project', fr: 'Projet client terminé' },
    workType: { en: 'Solo', fr: 'Individuel' },
    technologies: ['Next.js', 'Java Spring Boot'],
    description: {
      en: 'Independently developed a professional e-commerce web application focused on product browsing, product details, categories, admin dashboard, search, filters, and responsive design.',
      fr: "Développement indépendant d'une application web e-commerce professionnelle axée sur la consultation des produits, les détails produits, les catégories, le tableau de bord administrateur, la recherche, les filtres et le design responsive.",
    },
    badge: 'client',
  },
  {
    id: 'confidential',
    title: { en: 'Ongoing Confidential Full-Stack Project', fr: 'Projet Full Stack Confidentiel en Cours' },
    role: { en: 'Full Stack Developer', fr: 'Développeuse Full Stack' },
    status: { en: 'Confidential — In Progress', fr: 'Confidentiel — En cours' },
    technologies: ['Flutter', 'Java Spring Boot', 'PostgreSQL', 'Git / GitHub'],
    description: {
      en: 'Currently collaborating on a private software development project. Project details remain confidential, while the work reflects real-world full-stack development experience.',
      fr: "Collaboration actuelle sur un projet logiciel privé. Les détails du projet restent confidentiels, tandis que le travail reflète une expérience réelle en développement full stack.",
    },
    badge: 'confidential',
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
      en: 'Designed and developed NutriBite independently as a full-stack web platform, covering frontend, backend, database integration, and multi-role system features.',
      fr: "Conception et développement de NutriBite de manière indépendante en tant que plateforme web full stack, incluant le frontend, le backend, l'intégration de la base de données et les fonctionnalités multi-rôles.",
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
      en: 'Contributed as part of a development team, focusing on React Native mobile development, Spring Boot backend APIs, and payment integration features.',
      fr: "Participation au sein d'une équipe de développement, avec une contribution principale au développement mobile React Native, aux APIs backend avec Spring Boot et aux fonctionnalités de paiement.",
    },
    badge: 'internship',
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
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
    gradient: 'from-amber-400/35 via-yellow-300/20 to-amber-300/30',
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
    gradient: 'from-amber-300/30 via-yellow-200/20 to-orange-200/25',
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
    gradient: 'from-yellow-400/30 via-amber-300/20 to-yellow-300/25',
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
    gradient: 'from-amber-500/30 via-yellow-400/18 to-amber-400/25',
  },
  {
    id: 'confidential',
    name: { en: 'Ongoing Confidential Full-Stack Project', fr: 'Projet Full Stack Confidentiel en Cours' },
    type: { en: 'Confidential Project', fr: 'Projet Confidentiel' },
    status: { en: 'Confidential — In Progress', fr: 'Confidentiel — En cours' },
    workType: { en: 'Private Project', fr: 'Projet privé' },
    technologies: ['Flutter', 'Java Spring Boot', 'PostgreSQL', 'Git / GitHub'],
    description: {
      en: 'Currently collaborating on a private software development project. Project details remain confidential, while the work reflects real-world full-stack development experience.',
      fr: "Collaboration actuelle sur un projet logiciel privé. Les détails du projet restent confidentiels, tandis que le travail reflète une expérience réelle en développement full stack.",
    },
    features: {
      en: ['Confidential'],
      fr: ['Confidentiel'],
    },
    role: { en: 'Full Stack Developer', fr: 'Développeuse Full Stack' },
    teamInfo: { en: 'Private Project', fr: 'Projet privé' },
    badge: 'confidential',
    gradient: 'from-neutral-400/35 via-zinc-300/20 to-neutral-300/30',
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
    en: "I'm open to internships, junior developer roles, freelance projects, and collaboration opportunities.",
    fr: "Je suis ouverte aux stages, aux postes de développeuse junior, aux projets freelance et aux opportunités de collaboration.",
  },
  heading: {
    en: "Let's Connect",
    fr: 'Connectons-Nous',
  },
  buttons: [
    { key: 'email', en: 'Email', fr: 'Email', href: commonLinks.emailLink },
    { key: 'whatsapp', en: 'WhatsApp', fr: 'WhatsApp', href: commonLinks.whatsapp },
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
}
