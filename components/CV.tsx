'use client'
import { personalInfo, experiences, projects, skillCategories, education, aboutContent, commonLinks } from '@/data/siteData'
import { Printer, MapPin, Mail, Phone } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'

const G = '#B8860B'       // gold
const INK = '#141210'     // near-black
const INK2 = '#4A4540'    // secondary text
const INK3 = '#8A8480'    // muted text
const LINE = '#E8DFC8'    // divider

function Section({ title }: { title: string }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: G }}>
        {title}
      </p>
      <div style={{ height: '1px', marginTop: '5px', background: `linear-gradient(to right, ${G}60, transparent)` }} />
    </div>
  )
}

export default function CV() {
  return (
    <div style={{ background: '#F5F3EE', minHeight: '100vh' }}>

      {/* Print button — hidden when printing */}
      <div className="print:hidden" style={{ position: 'fixed', top: '24px', right: '24px', zIndex: 50, display: 'flex', gap: '10px' }}>
        <button
          onClick={() => window.print()}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', background: INK, color: '#fff', fontSize: '13px', fontWeight: 500, padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.18)' }}
        >
          <Printer size={14} />
          Download as PDF
        </button>
      </div>

      {/* CV sheet */}
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: '#FFFFFF',
          padding: '52px 60px',
          boxShadow: '0 8px 48px rgba(0,0,0,0.14)',
          minHeight: '1123px',
          fontFamily: 'inherit',
        }}
      >

        {/* ── HEADER ─────────────────────── */}
        <header style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            {/* Name + title */}
            <div>
              <h1 style={{ fontSize: '34px', fontWeight: 800, color: INK, letterSpacing: '-0.02em', lineHeight: 1, margin: 0 }}>
                {personalInfo.name.toUpperCase()}
              </h1>
              <p style={{ fontSize: '13px', color: G, fontWeight: 500, marginTop: '7px', letterSpacing: '0.04em' }}>
                {personalInfo.title.en}
              </p>
            </div>
            {/* Contact */}
            <div style={{ textAlign: 'right', fontSize: '11px', color: INK2, lineHeight: 2.1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'flex-end' }}>
                <span>{commonLinks.email}</span>
                <Mail size={10} color={G} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'flex-end' }}>
                <span>{commonLinks.phone}</span>
                <Phone size={10} color={G} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'flex-end' }}>
                <span>Lebanon</span>
                <MapPin size={10} color={G} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'flex-end' }}>
                <span>linkedin.com/in/fatima-kassem</span>
                <FaLinkedin size={10} color={G} />
              </div>
            </div>
          </div>
          {/* Gold accent line */}
          <div style={{ marginTop: '18px', height: '2px', borderRadius: '9999px', background: `linear-gradient(to right, ${G}, ${G}15)` }} />
        </header>

        {/* ── PROFILE ────────────────────── */}
        <section style={{ marginBottom: '24px' }}>
          <Section title="Profile" />
          <p style={{ fontSize: '11.5px', color: INK2, lineHeight: 1.8 }}>
            {aboutContent.text.en}
          </p>
        </section>

        {/* ── EXPERIENCE ─────────────────── */}
        <section style={{ marginBottom: '24px' }}>
          <Section title="Experience" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                style={{
                  paddingBottom: '14px',
                  marginBottom: '14px',
                  borderBottom: i < experiences.length - 1 ? `1px solid ${LINE}` : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: 700, color: INK, margin: 0 }}>{exp.title.en}</p>
                    <p style={{ fontSize: '10.5px', color: G, fontWeight: 500, margin: '2px 0 0' }}>
                      {exp.role.en}{exp.organization ? ` · ${exp.organization}` : ''}
                    </p>
                  </div>
                  <span style={{ fontSize: '10.5px', color: INK3, whiteSpace: 'nowrap', marginTop: '1px' }}>
                    {exp.date ?? exp.year ?? exp.status.en}
                  </span>
                </div>
                <p style={{ fontSize: '11px', color: INK2, lineHeight: 1.72, margin: '5px 0 7px' }}>
                  {exp.description.en}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {exp.technologies.map(t => (
                    <span
                      key={t}
                      style={{
                        fontSize: '9px',
                        padding: '1.5px 6px',
                        border: `1px solid ${LINE}`,
                        borderRadius: '4px',
                        color: INK3,
                        background: '#FAF9F6',
                      }}
                    >{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION + SKILLS (2 col) ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '24px' }}>

          {/* Education */}
          <section>
            <Section title="Education" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {education.map(item => (
                <div key={item.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontSize: '10.5px', fontWeight: 700, color: G }}>{item.degree.en}</span>
                    <span style={{ fontSize: '10px', color: INK3 }}>{item.year.en}</span>
                  </div>
                  <p style={{ fontSize: '11.5px', fontWeight: 600, color: INK, margin: '2px 0 1px' }}>
                    {item.institution.en}
                  </p>
                  <p style={{ fontSize: '10.5px', color: INK2, margin: 0 }}>{item.field.en}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <Section title="Skills" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {skillCategories.map(cat => (
                <div key={cat.id}>
                  <p style={{ fontSize: '10.5px', fontWeight: 700, color: INK, margin: '0 0 1px' }}>
                    {cat.label.en}
                  </p>
                  <p style={{ fontSize: '10.5px', color: INK2, margin: 0, lineHeight: 1.55 }}>
                    {cat.skills.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── PROJECTS ───────────────────── */}
        <section>
          <Section title="Projects" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 28px' }}>
            {projects.map((proj, i) => (
              <div
                key={proj.id}
                style={{
                  paddingBottom: '10px',
                  borderBottom: `1px solid ${LINE}`,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <p style={{ fontSize: '11.5px', fontWeight: 700, color: INK, margin: 0 }}>{proj.name.en}</p>
                  <span style={{ fontSize: '9.5px', color: INK3 }}>{proj.year ?? proj.status.en}</span>
                </div>
                <p style={{ fontSize: '10px', color: INK3, margin: '1px 0 3px' }}>{proj.workType.en}</p>
                <p style={{
                  fontSize: '10.5px',
                  color: INK2,
                  lineHeight: 1.65,
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                } as React.CSSProperties}>
                  {proj.description.en}
                </p>
                <p style={{ fontSize: '9.5px', color: G, margin: '4px 0 0', fontWeight: 500 }}>
                  {proj.technologies.slice(0, 3).join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div style={{ marginTop: '28px', paddingTop: '14px', borderTop: `1px solid ${LINE}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '9.5px', color: INK3 }}>{personalInfo.name} — Curriculum Vitae</span>
          <span style={{ fontSize: '9.5px', color: INK3 }}>2026</span>
        </div>

      </div>
    </div>
  )
}
