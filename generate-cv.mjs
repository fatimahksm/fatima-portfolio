import {
  Document, Packer, Paragraph, TextRun, HeadingLevel,
  AlignmentType, BorderStyle, Table, TableRow, TableCell,
  WidthType, VerticalAlign, ShadingType, TabStopPosition,
  TabStopType, UnderlineType
} from 'docx'
import fs from 'fs'

// ── Data ──────────────────────────────────────────────────────────────────────

const name = 'FATIMA KASSEM'
const title = 'Full Stack Web & Mobile Developer'
const contact = {
  email: 'kassemf96@gmail.com',
  phone: '+961 81 639 234',
  location: 'Lebanon',
  linkedin: 'linkedin.com/in/fatima-kassem-4711382b0',
}

const profile = 'Full Stack Web & Mobile Developer based in Lebanon, currently pursuing Master 1 in Technology and Science of Information Systems at the Lebanese University - Faculty of Technology. Focused on building practical, elegant, and scalable digital solutions across web and mobile platforms, with experience in frontend development, backend APIs, database integration, and real-world client and internship projects.'

const experiences = [
  {
    title: 'Client E-commerce Project',
    role: 'Full Stack Developer',
    org: 'Solo',
    date: '2026',
    status: 'Completed Client Project',
    tech: ['Next.js', 'Java Spring Boot'],
    desc: 'Independently developed a professional e-commerce web application focused on product browsing, product details, categories, admin dashboard, search, filters, and responsive design.',
  },
  {
    title: 'Ongoing Confidential Full-Stack Project',
    role: 'Full Stack Developer',
    org: '',
    date: 'Confidential — In Progress',
    status: 'Confidential',
    tech: ['Flutter', 'Java Spring Boot', 'PostgreSQL', 'Git / GitHub'],
    desc: 'Currently collaborating on a private software development project. Project details remain confidential, while the work reflects real-world full-stack development experience.',
  },
  {
    title: 'Full Stack Web Internship — NutriBite',
    role: 'Full Stack Web Intern',
    org: 'Laptop',
    date: 'May 15, 2025 – July 1, 2025',
    status: 'Completed',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    desc: 'Designed and developed NutriBite independently as a full-stack web platform, covering frontend, backend, database integration, and multi-role system features.',
  },
  {
    title: 'Full Stack Software Development Internship — Hobby Sphere',
    role: 'Full Stack Software Development Intern',
    org: 'Dr. George Lebbos',
    date: 'April 1, 2025 – June 30, 2025',
    status: 'Completed',
    tech: ['React Native', 'Java Spring Boot', 'PostgreSQL', 'Git / GitHub'],
    desc: 'Contributed as part of a development team, focusing on React Native mobile development, Spring Boot backend APIs, and payment integration features.',
  },
]

const education = [
  {
    degree: 'Master 1',
    field: 'Technology and Science of Information Systems',
    institution: 'Lebanese University — Faculty of Technology',
    year: 'Current (2025–2026)',
  },
  {
    degree: 'Bachelor Degree',
    field: 'Business Computer / Informatique de Gestion',
    institution: 'Lebanese University — Faculty of Technology',
    year: 'Graduated 2025',
  },
]

const skills = [
  { label: 'Frontend', items: 'HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Bootstrap' },
  { label: 'Mobile', items: 'React Native, Flutter, Android Java' },
  { label: 'Backend', items: 'Java Spring Boot, Node.js, REST APIs' },
  { label: 'Databases', items: 'PostgreSQL, SQLite, Firebase, MySQL' },
  { label: 'Tools', items: 'Git, GitHub, Postman, VS Code, Android Studio, IntelliJ IDEA, Figma' },
  { label: 'Languages', items: 'Arabic (Native), French (Good), English (Intermediate)' },
]

const projects = [
  { name: 'Client E-commerce Project', type: 'Client · Solo', year: '2026', tech: 'Next.js · Java Spring Boot', desc: 'Professional e-commerce app with product browsing, admin dashboard, search and filters.' },
  { name: 'Hobby Sphere', type: 'Team Internship', year: '2025', tech: 'React Native · Spring Boot · PostgreSQL', desc: 'Full-stack mobile app for activity discovery, booking, reviews, and maps.' },
  { name: 'NutriBite', type: 'Solo Internship', year: '2025', tech: 'React · Node.js · PostgreSQL · Tailwind', desc: 'Multi-role food e-commerce platform: users, kitchens, delivery, admin.' },
  { name: 'Unify — University App', type: 'University Project', year: '2024', tech: 'Android Java · SQLite · Firebase', desc: 'University mobile app with chat, notifications, courses, and admin panel.' },
  { name: 'Confidential Full-Stack Project', type: 'Private · In Progress', year: '2025–2026', tech: 'Flutter · Spring Boot · PostgreSQL', desc: 'Ongoing private project reflecting real-world full-stack development experience.' },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

const GOLD = 'B8860B'
const BLACK = '141210'
const GRAY = '4A4540'
const LIGHT_GRAY = '8A8480'
const FONT = 'Calibri'

function gold(text, size = 20, bold = false) {
  return new TextRun({ text, color: GOLD, size, bold, font: FONT })
}

function ink(text, size = 20, bold = false, italic = false) {
  return new TextRun({ text, color: BLACK, size, bold, italic, font: FONT })
}

function gray(text, size = 18) {
  return new TextRun({ text, color: GRAY, size, font: FONT })
}

function muted(text, size = 17) {
  return new TextRun({ text, color: LIGHT_GRAY, size, font: FONT })
}

function sectionTitle(label) {
  return [
    new Paragraph({
      spacing: { before: 260, after: 40 },
      border: { bottom: { color: GOLD, size: 8, style: BorderStyle.SINGLE } },
      children: [
        new TextRun({
          text: label.toUpperCase(),
          color: GOLD,
          size: 18,
          bold: true,
          font: FONT,
          characterSpacing: 60,
        }),
      ],
    }),
  ]
}

function spacer(before = 100) {
  return new Paragraph({ spacing: { before }, children: [new TextRun('')] })
}

// ── Build Document ────────────────────────────────────────────────────────────

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: FONT, size: 20, color: BLACK },
      },
    },
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 720, bottom: 720, left: 900, right: 900 },
      },
    },
    children: [

      // ── HEADER ──────────────────────────────────────────────────────────────
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideH: { style: BorderStyle.NONE }, insideV: { style: BorderStyle.NONE } },
        rows: [
          new TableRow({
            children: [
              // Left: Name + title
              new TableCell({
                width: { size: 58, type: WidthType.PERCENTAGE },
                verticalAlign: VerticalAlign.CENTER,
                borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                children: [
                  new Paragraph({
                    spacing: { after: 40 },
                    children: [new TextRun({ text: name, color: BLACK, size: 52, bold: true, font: FONT })],
                  }),
                  new Paragraph({
                    children: [gold(title, 22, false)],
                  }),
                ],
              }),
              // Right: Contact
              new TableCell({
                width: { size: 42, type: WidthType.PERCENTAGE },
                verticalAlign: VerticalAlign.CENTER,
                borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                children: [
                  new Paragraph({ alignment: AlignmentType.RIGHT, children: [gray(`✉  ${contact.email}`, 18)] }),
                  new Paragraph({ alignment: AlignmentType.RIGHT, children: [gray(`☎  ${contact.phone}`, 18)] }),
                  new Paragraph({ alignment: AlignmentType.RIGHT, children: [gray(`📍  ${contact.location}`, 18)] }),
                  new Paragraph({ alignment: AlignmentType.RIGHT, children: [gray(`🔗  ${contact.linkedin}`, 18)] }),
                ],
              }),
            ],
          }),
        ],
      }),

      // Gold divider
      new Paragraph({
        spacing: { before: 160, after: 0 },
        border: { bottom: { color: GOLD, size: 16, style: BorderStyle.SINGLE } },
        children: [],
      }),

      // ── PROFILE ─────────────────────────────────────────────────────────────
      ...sectionTitle('Profile'),
      new Paragraph({
        spacing: { before: 80, after: 0 },
        children: [gray(profile, 19)],
      }),

      // ── EXPERIENCE ──────────────────────────────────────────────────────────
      ...sectionTitle('Experience'),

      ...experiences.flatMap((exp, i) => [
        // Title + date row
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideH: { style: BorderStyle.NONE }, insideV: { style: BorderStyle.NONE } },
          rows: [new TableRow({
            children: [
              new TableCell({
                width: { size: 75, type: WidthType.PERCENTAGE },
                borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                children: [new Paragraph({ spacing: { before: i === 0 ? 80 : 140, after: 20 }, children: [ink(exp.title, 22, true)] })],
              }),
              new TableCell({
                width: { size: 25, type: WidthType.PERCENTAGE },
                borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                children: [new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: i === 0 ? 80 : 140, after: 20 }, children: [muted(exp.date, 18)] })],
              }),
            ],
          })],
        }),
        new Paragraph({
          spacing: { before: 0, after: 60 },
          children: [gold(`${exp.role}${exp.org ? ' · ' + exp.org : ''}`, 19, true)],
        }),
        new Paragraph({
          spacing: { before: 0, after: 80 },
          children: [gray(exp.desc, 19)],
        }),
        new Paragraph({
          spacing: { before: 0, after: i < experiences.length - 1 ? 100 : 0 },
          children: [new TextRun({ text: exp.tech.join('  ·  '), color: LIGHT_GRAY, size: 17, font: FONT })],
        }),
        ...(i < experiences.length - 1 ? [
          new Paragraph({
            spacing: { before: 0, after: 0 },
            border: { bottom: { color: 'E8DFC8', size: 4, style: BorderStyle.SINGLE } },
            children: [],
          }),
        ] : []),
      ]),

      // ── EDUCATION ───────────────────────────────────────────────────────────
      ...sectionTitle('Education'),

      ...education.flatMap((ed, i) => [
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideH: { style: BorderStyle.NONE }, insideV: { style: BorderStyle.NONE } },
          rows: [new TableRow({
            children: [
              new TableCell({
                borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                children: [
                  new Paragraph({ spacing: { before: i === 0 ? 80 : 120, after: 20 }, children: [ink(ed.degree, 21, true), gold('  ·  ' + ed.year, 19)] }),
                  new Paragraph({ spacing: { before: 0, after: 20 }, children: [ink(ed.institution, 20, false)] }),
                  new Paragraph({ spacing: { before: 0, after: 0 }, children: [gray(ed.field, 18)] }),
                ],
              }),
            ],
          })],
        }),
      ]),

      // ── SKILLS ──────────────────────────────────────────────────────────────
      ...sectionTitle('Skills'),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideH: { style: BorderStyle.NONE }, insideV: { style: BorderStyle.NONE } },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: { size: 50, type: WidthType.PERCENTAGE },
                borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                children: skills.slice(0, 3).map((s, i) =>
                  new Paragraph({
                    spacing: { before: i === 0 ? 80 : 80, after: 20 },
                    children: [ink(s.label + ': ', 19, true), gray(s.items, 19)],
                  })
                ),
              }),
              new TableCell({
                width: { size: 50, type: WidthType.PERCENTAGE },
                borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                children: skills.slice(3).map((s, i) =>
                  new Paragraph({
                    spacing: { before: i === 0 ? 80 : 80, after: 20 },
                    children: [ink(s.label + ': ', 19, true), gray(s.items, 19)],
                  })
                ),
              }),
            ],
          }),
        ],
      }),

      // ── PROJECTS ────────────────────────────────────────────────────────────
      ...sectionTitle('Projects'),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideH: { style: BorderStyle.NONE }, insideV: { style: BorderStyle.NONE } },
        rows: [
          new TableRow({
            children: [
              // Left column
              new TableCell({
                width: { size: 50, type: WidthType.PERCENTAGE },
                borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                children: projects.slice(0, 3).flatMap((p, i) => [
                  new Paragraph({ spacing: { before: i === 0 ? 80 : 120, after: 20 }, children: [ink(p.name, 20, true), muted('  ' + p.year, 17)] }),
                  new Paragraph({ spacing: { before: 0, after: 20 }, children: [gray(p.desc, 18)] }),
                  new Paragraph({ spacing: { before: 0, after: 0 }, children: [gold(p.tech, 17)] }),
                ]),
              }),
              // Right column
              new TableCell({
                width: { size: 50, type: WidthType.PERCENTAGE },
                borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                children: projects.slice(3).flatMap((p, i) => [
                  new Paragraph({ spacing: { before: i === 0 ? 80 : 120, after: 20 }, children: [ink(p.name, 20, true), muted('  ' + p.year, 17)] }),
                  new Paragraph({ spacing: { before: 0, after: 20 }, children: [gray(p.desc, 18)] }),
                  new Paragraph({ spacing: { before: 0, after: 0 }, children: [gold(p.tech, 17)] }),
                ]),
              }),
            ],
          }),
        ],
      }),

      // ── FOOTER ──────────────────────────────────────────────────────────────
      new Paragraph({
        spacing: { before: 280 },
        alignment: AlignmentType.CENTER,
        border: { top: { color: 'E8DFC8', size: 6, style: BorderStyle.SINGLE } },
        children: [muted('Fatima Kassem — Curriculum Vitae — 2026', 16)],
      }),
    ],
  }],
})

// ── Write file ────────────────────────────────────────────────────────────────

const buffer = await Packer.toBuffer(doc)
fs.writeFileSync('/home/user/Fatima_Kassem_CV.docx', buffer)
console.log('CV generated: /home/user/Fatima_Kassem_CV.docx')
