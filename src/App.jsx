import React, { useState, useEffect } from 'react';
import { Sun, Moon, Download, ExternalLink, Code2, GraduationCap, Briefcase, Award, Trophy } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import BubbleBackground from './components/BubbleBackground';
import { RetroCard } from './components/ui/RetroCard';
import { experiences, skillsData, certificationsData, awardsData } from './data/portfolioData';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/valeki/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setRepos(data);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <BubbleBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-white/10 dark:bg-black/10 border-b border-gray-200 dark:border-white/10">
        <div className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-[#58D854] via-[#3CBCFC] to-[#F85898] bg-clip-text text-transparent">
          DMV.
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-black/10 dark:bg-white/20 hover:bg-black/20 dark:hover:bg-white/30 transition-colors"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="mb-32 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                portfolio <br />
                <span className="text-[#3CBCFC]">Valentina</span> De Miglio
              </h1>
              <p className="text-xl md:text-2xl opacity-80 mb-8 max-w-2xl">
                Fullstack Developer specializzata in microservizi e architetture moderne.
                Appassionata di codice pulito e soluzioni scalabili.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="/public/cv.pdf" download className="flex items-center gap-2 bg-[#F85898] hover:bg-[#F85898]/80 text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105">
                  <Download size={20} /> Scarica CV
                </a>
                <div className="flex gap-4 items-center">
                  <a href="#" className="p-3 bg-black/5 dark:bg-white/10 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-all"><FaGithub size={24} /></a>
                  <a href="#" className="p-3 bg-black/5 dark:bg-white/10 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-all"><FaLinkedin size={24} /></a>
                </div>
              </div>
            </div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#58D854] to-[#3CBCFC] p-2 relative">
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-black flex items-center justify-center overflow-hidden">
                <span className="text-8xl">🫧</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#F85898] px-4 py-2 rounded-xl font-bold text-white text-sm transform rotate-12 shadow-lg">
                Fullstack Dev
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Code2 size={32} className="text-[#58D854]" />
            <h2 className="text-3xl font-bold">Tecnologie & Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((cat, i) => (
              <RetroCard key={i} color={cat.color}>
                <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(s => <span key={s} className="px-3 py-1 bg-black/10 dark:bg-white/10 rounded-lg text-sm font-medium">{s}</span>)}
                </div>
              </RetroCard>
            ))}
          </div>
        </section>

        {/* Work Experience highlights */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase size={32} className="text-[#3CBCFC]" />
            <h2 className="text-3xl font-bold">Esperienza Recente</h2>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-[#3CBCFC]/30">
                <div className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-[#3CBCFC]" />
                <div className="mb-2 text-sm font-bold text-[#3CBCFC]">{exp.period}</div>
                <h3 className="text-2xl font-bold">{exp.company} – {exp.role}</h3>
                <p className="opacity-80 mt-2 max-w-3xl leading-relaxed">
                  {exp.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {exp.projects.map((proj, pIdx) => (
                    <RetroCard key={pIdx} color="blue" className="!p-5">
                      <h4 className="font-bold text-lg mb-2">{proj.name}</h4>
                      <p className="text-sm opacity-70 mb-3">{proj.description}</p>
                      {proj.details.length > 0 && (
                        <ul className="text-sm opacity-70 list-disc list-inside mb-4 space-y-1">
                          {proj.details.map((d, i) => <li key={i}>{d}</li>)}
                        </ul>
                      )}
                      <div className="flex flex-wrap gap-2 mt-auto pt-4">
                        {proj.tech.map((t, i) => (
                          <span key={i} className="px-2 py-1 bg-[#3CBCFC]/10 text-[#3CBCFC] text-xs rounded-md font-bold">{t}</span>
                        ))}
                      </div>
                    </RetroCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Highlight (Formazione) */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap size={32} className="text-[#3CBCFC]" />
            <h2 className="text-3xl font-bold">Formazione</h2>
          </div>
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-[#3CBCFC]/30">
              <div className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-[#3CBCFC]" />
              <div className="mb-2 text-sm font-bold text-[#3CBCFC]">2017 – 2021</div>
              <h3 className="text-2xl font-bold">Laurea Triennale in Informatica</h3>
              <p className="opacity-80 mt-1 max-w-3xl">Università degli Studi</p>
              
              <div className="mt-4">
                <RetroCard color="blue" className="!p-5">
                  <p className="text-sm opacity-80 mb-3 leading-relaxed">
                    Durante il percorso universitario ho sviluppato una solida base nelle scienze computazionali e nello sviluppo software, con particolare attenzione alla programmazione (C++, Java, Python), comprese le tecniche di programmazione parallela, alle reti di calcolatori, all’intelligenza artificiale e alla ricerca operativa.
                  </p>
                  <p className="text-sm opacity-80 mb-4 leading-relaxed">
                    <strong>Tesi: AspIde</strong> – Piattaforma per l’analisi sintattica e la gestione di programmi ASP (Answer Set Programming). Il sistema integra un backend in Python e un frontend in React/Ionic con Redux, consentendo la scrittura, l’esecuzione e l’analisi di programmi logici, con funzionalità di regressione, misurazione dei tempi e gestione dei file.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["C++", "Java", "Python", "JavaScript", "React", "Ionic", "Node.js", "Flask", "Perl", "SQL", "Git", "Linux/Bash"].map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-[#3CBCFC]/10 text-[#3CBCFC] text-xs rounded-md font-bold">{t}</span>
                    ))}
                  </div>
                </RetroCard>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-[#3CBCFC]/30">
              <div className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-[#3CBCFC]" />
              <div className="mb-2 text-sm font-bold text-[#3CBCFC]">2020</div>
              <h3 className="text-2xl font-bold">Erasmus+</h3>
              <p className="opacity-80 mt-1 max-w-3xl">Universidad de Málaga</p>
              <p className="text-sm opacity-70 mt-3 max-w-3xl">
                Ambiti di studio: Reti e Telecomunicazioni, Inferenza Statistica, Sistemi Paralleli (Java multithreading), Sistemi Dinamici per AI.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-[#3CBCFC]/30">
              <div className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-[#3CBCFC]" />
              <div className="mb-2 text-sm font-bold text-[#3CBCFC]">Precedente</div>
              <h3 className="text-2xl font-bold">Diploma in Sistemi Informativi Aziendali</h3>
            </div>
          </div>
        </section>

        {/* GitHub Projects */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <FaGithub size={32} className="text-[#F85898]" />
            <h2 className="text-3xl font-bold">Progetti GitHub</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <RetroCard color="pink" className="!p-6 h-full flex flex-col hover:-translate-y-1 transition-transform">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg group-hover:text-[#F85898] transition-colors">{repo.name}</h3>
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#F85898]" />
                  </div>
                  <p className="text-sm opacity-60 mb-6 line-clamp-2 h-10">
                    {repo.description || "Nessuna descrizione disponibile."}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono mt-auto">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#3CBCFC]" /> {repo.language || 'JS'}
                    </span>
                    <span className="opacity-40">⭐ {repo.stargazers_count}</span>
                  </div>
                </RetroCard>
              </a>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Award size={32} className="text-[#F8B800]" />
            <h2 className="text-3xl font-bold">Certificazioni e Corsi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificationsData.map((cert, i) => (
              <RetroCard key={i} color="yellow" className="group">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#F8B800] transition-colors">{cert.title}</h3>
                  <p className="text-sm opacity-70">{cert.details}</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="px-3 py-1 bg-[#F8B800]/20 text-[#F8B800] text-sm font-bold rounded-full">
                    {cert.date}
                  </span>
                </div>
              </RetroCard>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Trophy size={32} className="text-[#F85898]" />
            <h2 className="text-3xl font-bold">Riconoscimenti e Premi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awardsData.map((award, i) => (
              <RetroCard key={i} color="pink">
                <div>
                  <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                  <p className="text-sm font-semibold text-[#F85898] mb-1">{award.issuer} • {award.date}</p>
                  <p className="text-xs opacity-60 mb-4">{award.assoc}</p>
                  <p className="text-sm opacity-80 leading-relaxed italic border-l-2 border-[#F85898]/50 pl-3">"{award.desc}"</p>
                </div>
              </RetroCard>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 text-center opacity-50 text-sm border-t border-gray-200 dark:border-white/10">
        <p>© 2026 Valentina De Miglio. Built with React & Bubble Magic.</p>
      </footer>
    </div>
  );
}

export default App;
