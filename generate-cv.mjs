import {
  Document, Packer, Paragraph, TextRun,
  AlignmentType, BorderStyle, Table, TableRow, TableCell,
  WidthType, VerticalAlign
} from 'docx'
import fs from 'fs'

// ── Palette ───────────────────────────────────────────────────────────────────
const GOLD  = 'B8860B'
const BLACK = '141210'
const GRAY  = '4A4540'
const MUTED = '8A8480'
const LINE  = 'E2D8C0'
const FONT  = 'Calibri'

// ── Data ──────────────────────────────────────────────────────────────────────
const experiences = [
  {
    title: 'Client E-commerce Project',
    role: 'Full Stack Developer · Solo',
    date: '2026',
    tech: 'Next.js · Java Spring Boot',
    desc: 'Built a professional e-commerce web app: product listing, admin dashboard, categories, search, filters and responsive design.',
  },
  {
    title: 'Ongoing Confidential Full-Stack Project',
    role: 'Full Stack Developer',
    date: 'In Progress',
    tech: 'Flutter · Spring Boot · PostgreSQL · GitHub',
    desc: 'Collaborating on a private full-stack project (details confidential), gaining real-world development experience.',
  },
  {
    title: 'Full Stack Web Internship — NutriBite',
    role: 'Full Stack Web Intern · Laptop',
    date: 'May–Jul 2025',
    tech: 'React · Node.js · PostgreSQL · Tailwind CSS',
    desc: 'Developed NutriBite independently: a multi-role food platform for users, kitchens, delivery drivers and admins.',
  },
  {
    title: 'Full Stack Internship — Hobby Sphere',
    role: 'Full Stack Intern · Dr. George Lebbos',
    date: 'Apr–Jun 2025',
    tech: 'React Native · Spring Boot · PostgreSQL · GitHub',
    desc: 'Team project — focused on React Native mobile screens, Spring Boot APIs and payment integration.',
  },
]

const education = [
  { degree: 'Master 1', field: 'Technology and Science of Information Systems', institution: 'Lebanese University — Faculty of Technology', year: 'Current' },
  { degree: 'Bachelor', field: 'Business Computer / Informatique de Gestion', institution: 'Lebanese University — Faculty of Technology', year: '2025' },
]

const skills = [
  { label: 'Frontend', items: 'HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Bootstrap' },
  { label: 'Mobile', items: 'React Native, Flutter, Android Java' },
  { label: 'Backend', items: 'Java Spring Boot, Node.js, REST APIs' },
  { label: 'Databases', items: 'PostgreSQL, SQLite, Firebase, MySQL' },
  { label: 'Tools', items: 'Git, GitHub, Postman, VS Code, Android Studio, IntelliJ, Figma' },
  { label: 'Languages', items: 'Arabic (Native), French (Good), English (Intermediate)' },
]

const projects = [
  { name: 'Client E-commerce', year: '2026', tech: 'Next.js · Spring Boot', desc: 'E-commerce app with admin dashboard, search & filters.' },
  { name: 'Hobby Sphere', year: '2025', tech: 'React Native · Spring Boot', desc: 'Mobile app for activity discovery, booking & reviews.' },
  { name: 'NutriBite', year: '2025', tech: 'React · Node.js · PostgreSQL', desc: 'Multi-role food platform: users, kitchens, delivery, admin.' },
  { name: 'Unify — University App', year: '2024', tech: 'Android Java · Firebase', desc: 'University app with chat, notifications and courses.' },
  { name: 'Confidential Project', year: '2025–26', tech: 'Flutter · Spring Boot', desc: 'Ongoing private full-stack development project.' },
]

// ── Helper builders ───────────────────────────────────────────────────────────
const r = (text, { color = BLACK, size = 18, bold = false, italic = false } = {}) =>
  new TextRun({ text, color, size, bold, italic, font: FONT })

const noB = { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }
const noTableB = { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideH: { style: BorderStyle.NONE }, insideV: { style: BorderStyle.NONE } }

const cell = (children, widthPct, opts = {}) => new TableCell({
  width: { size: widthPct, type: WidthType.PERCENTAGE },
  borders: noB,
  verticalAlign: opts.align ?? VerticalAlign.TOP,
  children,
})

const twoCol = (leftChildren, rightChildren, leftPct = 60) => new Table({
  width: { size: 100, type: WidthType.PERCENTAGE },
  borders: noTableB,
  rows: [new TableRow({ children: [cell(leftChildren, leftPct), cell(rightChildren, 100 - leftPct)] })],
})

const para = (runs, { before = 0, after = 0, alignment } = {}) =>
  new Paragraph({ spacing: { before, after }, alignment, children: Array.isArray(runs) ? runs : [runs] })

const divider = (color = LINE, size = 4, before = 80, after = 0) =>
  new Paragraph({ spacing: { before, after }, border: { bottom: { color, size, style: BorderStyle.SINGLE } }, children: [] })

const sectionHead = (label) => [
  new Paragraph({
    spacing: { before: 130, after: 50 },
    border: { bottom: { color: GOLD, size: 6, style: BorderStyle.SINGLE } },
    keepNext: true,
    children: [r(label.toUpperCase(), { color: GOLD, size: 16, bold: true })],
  }),
]

// ── Document ──────────────────────────────────────────────────────────────────
const doc = new Document({
  styles: { default: { document: { run: { font: FONT, size: 18, color: BLACK } } } },
  sections: [{
    properties: {
      page: { margin: { top: 580, bottom: 500, left: 750, right: 750 } },
    },
    children: [

      // ── HEADER ────────────────────────────────────────────────────────────
      twoCol(
        [
          para(r('FATIMA KASSEM', { color: BLACK, size: 44, bold: true }), { after: 30 }),
          para(r('Full Stack Web & Mobile Developer', { color: GOLD, size: 20 })),
        ],
        [
          para(r('kassemf96@gmail.com', { color: GRAY, size: 17 }), { alignment: AlignmentType.RIGHT }),
          para(r('+961 81 639 234', { color: GRAY, size: 17 }), { alignment: AlignmentType.RIGHT }),
          para(r('Lebanon', { color: GRAY, size: 17 }), { alignment: AlignmentType.RIGHT }),
          para(r('linkedin.com/in/fatima-kassem', { color: GOLD, size: 17 }), { alignment: AlignmentType.RIGHT }),
        ],
        58
      ),

      // gold line
      new Paragraph({
        spacing: { before: 100, after: 0 },
        border: { bottom: { color: GOLD, size: 14, style: BorderStyle.SINGLE } },
        children: [],
      }),

      // ── PROFILE ───────────────────────────────────────────────────────────
      ...sectionHead('Profile'),
      para(r('Full Stack Web & Mobile Developer based in Lebanon, pursuing Master 1 in Technology and Science of Information Systems at Lebanese University. Focused on practical, elegant digital solutions across web and mobile — frontend, backend APIs, database integration, and real-world projects.', { color: GRAY }), { before: 40 }),

      // ── EXPERIENCE ────────────────────────────────────────────────────────
      ...sectionHead('Experience'),

      ...experiences.flatMap((exp, i) => [
        twoCol(
          [para([r(exp.title, { bold: true, size: 19 })], { before: i === 0 ? 50 : 90 })],
          [para(r(exp.date, { color: MUTED, size: 17 }), { before: i === 0 ? 50 : 90, alignment: AlignmentType.RIGHT })],
          78
        ),
        para(r(exp.role, { color: GOLD, size: 17 }), { before: 20, after: 20 }),
        para(r(exp.desc, { color: GRAY, size: 17 }), { after: 25 }),
        para(r(exp.tech, { color: MUTED, size: 16 }), { after: i < experiences.length - 1 ? 0 : 0 }),
        ...(i < experiences.length - 1 ? [divider(LINE, 4, 70)] : []),
      ]),

      // ── EDUCATION + SKILLS side by side ───────────────────────────────────
      ...sectionHead('Education   &   Skills'),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: noTableB,
        rows: [new TableRow({
          children: [
            // Education column
            cell(
              education.flatMap((ed, i) => [
                para([r(ed.degree, { bold: true, size: 18 }), r('  ·  ' + ed.year, { color: GOLD, size: 16 })], { before: i === 0 ? 50 : 90 }),
                para(r(ed.institution, { size: 17, color: GRAY }), { before: 15 }),
                para(r(ed.field, { size: 16, color: MUTED }), { before: 10, after: 0 }),
              ]),
              47
            ),
            // Divider cell
            new TableCell({
              width: { size: 2, type: WidthType.PERCENTAGE },
              borders: { ...noB, right: { color: LINE, size: 4, style: BorderStyle.SINGLE } },
              children: [para(r(''))],
            }),
            // Skills column
            cell(
              skills.map((s, i) =>
                para([r(s.label + ': ', { bold: true, size: 17 }), r(s.items, { color: GRAY, size: 17 })], { before: i === 0 ? 50 : 60 })
              ),
              51
            ),
          ],
        })],
      }),

      // ── PROJECTS ──────────────────────────────────────────────────────────
      ...sectionHead('Projects'),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: noTableB,
        rows: [new TableRow({
          children: [
            cell(
              projects.slice(0, 3).flatMap((p, i) => [
                twoCol(
                  [para(r(p.name, { bold: true, size: 18 }), { before: i === 0 ? 50 : 80 })],
                  [para(r(p.year, { color: MUTED, size: 16 }), { before: i === 0 ? 50 : 80, alignment: AlignmentType.RIGHT })],
                  72
                ),
                para(r(p.desc, { color: GRAY, size: 16 }), { before: 15 }),
                para(r(p.tech, { color: GOLD, size: 15 }), { before: 10 }),
              ]),
              50
            ),
            cell(
              projects.slice(3).flatMap((p, i) => [
                twoCol(
                  [para(r(p.name, { bold: true, size: 18 }), { before: i === 0 ? 50 : 80 })],
                  [para(r(p.year, { color: MUTED, size: 16 }), { before: i === 0 ? 50 : 80, alignment: AlignmentType.RIGHT })],
                  72
                ),
                para(r(p.desc, { color: GRAY, size: 16 }), { before: 15 }),
                para(r(p.tech, { color: GOLD, size: 15 }), { before: 10 }),
              ]),
              50
            ),
          ],
        })],
      }),

      // ── FOOTER ────────────────────────────────────────────────────────────
      new Paragraph({
        spacing: { before: 140 },
        alignment: AlignmentType.CENTER,
        border: { top: { color: LINE, size: 6, style: BorderStyle.SINGLE } },
        children: [r('Fatima Kassem  ·  Curriculum Vitae  ·  2026', { color: MUTED, size: 15 })],
      }),
    ],
  }],
})

const buffer = await Packer.toBuffer(doc)
fs.writeFileSync('/home/user/Fatima_Kassem_CV.docx', buffer)
console.log('Done: /home/user/Fatima_Kassem_CV.docx')
