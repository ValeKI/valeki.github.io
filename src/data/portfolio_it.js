export const experiences_it = [
  {
    company: "Wakala",
    role: "Fullstack Developer",
    period: "03/2026 – In corso",
    description: "Sviluppo del portale istituzionale di un comune metropolitano per la gestione di pratiche e servizi municipali.",
    projects: [
      {
        name: "Pubblica Amministrazione",
        description: "Sviluppo fullstack di nuove funzionalità per il cittadino.",
        details: [
          "Architettura: Microfrontend (Angular 18) e Microservizi (Spring Boot).",
          "Data Layer: Ibrido (PostgreSQL e MongoDB)."
        ],
        tech: ["Angular 18", "Microfrontend", "Java", "Spring Boot", "PostgreSQL", "MongoDB"]
      }
    ]
  },
  {
    company: "Pixeltek",
    role: "Fullstack Developer",
    period: "03/2021 – 03/2026",
    description: "Sviluppo prevalentemente frontend verso sistemi backend complessi e attività di Quality Assurance in vari ambiti.",
    projects: [
      {
        name: "Gaming Online",
        description: "Migrazione e sviluppo di sistemi enterprise per il settore dei giochi a premi, con refactoring e potenziamento dell’architettura backend basata su Java e Oracle.",
        details: [
          "Containerizzazione dei servizi tramite Docker e orchestrazione su Kubernetes per ottimizzare scalabilità, affidabilità e gestione deployment in cloud."
        ],
        tech: ["Java", "Oracle PLSQL", "Postgres", "Spring Boot", "Java EJB", "Kubernetes", "RabbitMQ"]
      },
      {
        name: "Fashion, Luxury and Retail",
        description: "Sviluppo di personalizzazioni su prodotto interno per tracciabilità e gestione logistica di capi di alta moda sfruttando tecnologie RFID e barcode.",
        details: [
          "Sviluppo delle app mobile iOS e Android con React Native, del front-end web in Angular e del back-end con Spring Boot."
        ],
        tech: ["Java", "EJB", "Quartz", "Maven", "AWS", "AngularJS", "React", "React-Native", "Apache Camel", "Postgres", "WildFly", "RabbitMQ", "Agile", "RFID"]
      },
      {
        name: "Gestione Librerie Multimediali",
        description: "Sistema di gestione librerie multimediali con frontend PHP, backend distribuito Node.js/PHP e middleware Elasticsearch.",
        details: [
          "Analisi funzionale, stesura test plan e automazione test con Selenium e Java 11.",
          "Gestione script Jenkins integrati con Zephyr per collegare automaticamente i test a Jira."
        ],
        tech: ["Node.js", "Java", "Selenium", "Gerkin", "Cucumber", "PHP", "IntelliJ", "Jenkins", "Git", "Docker", "Maven", "Elasticsearch", "Groovy", "Zephyr"]
      },
      {
        name: "E-commerce in ambito Retail e Distribuzione",
        description: "Sviluppo di siti web e-commerce collegati a sistemi gestionali aziendali (plugins/temi Wordpress PHP).",
        details: [
          "Sviluppo su piattaforma VTEX (React) con funzionalità aggiuntive per la personalizzazione grafica e miglioramento UX.",
          "Sviluppo sito aeroportuale tramite Liferay (FE) e Java (BE) gestendo voli in tempo reale, bandi, notizie ecc."
        ],
        tech: ["React", "TypeScript", "Node.js", "PHP", "JavaScript", "jQuery", "Angular", "Jenkins", "Git", "Docker"]
      }
    ]
  }
];

export const skills_it = [
  { title: 'Backend', skills: ['Java', 'Spring Boot', 'Node.js', 'Python', 'PHP'], color: 'green' },
  { title: 'Frontend', skills: ['React', 'Angular', 'TypeScript', 'Tailwind', 'SCSS'], color: 'blue' },
  { title: 'Database', skills: ['PostgreSQL', 'Oracle', 'MongoDB', 'MySQL'], color: 'yellow' },
  { title: 'DevOps & Tools', skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'], color: 'pink' }
];

export const certifications_it = [
  {
    title: "Certified Scrum Fundamentals",
    details: "ID: 861800",
    date: "08/2021"
  },
  {
    title: "Academy Android Developer",
    details: "Experis",
    date: "2020"
  },
  {
    title: "OLS English B1",
    details: "Livello d'inglese",
    date: "2019"
  }
];

export const awards_it = [
  {
    title: "Migliori Studenti del II Anno 2018/2019",
    issuer: "Università della Calabria",
    date: "Dic 2019",
    assoc: "Associazione con Università della Calabria",
    desc: "Premio assegnato agli studenti del corso di Informatica che soddisfano specifici requisiti di merito accademico (media voti ed esami superati)."
  },
  {
    title: "Earring for Life – Primo Posto",
    issuer: "Innovazione EXPO Milano 2015",
    date: "Gen 2015",
    assoc: "Associazione con ITC Pezzullo Cosenza",
    desc: "Ho partecipato a questo progetto per la ricerca di un'idea innovativa con la mia classe delle scuole superiori. La nostra proposta è stata un orecchino che, se toccato, inviava un segnale d'allarme a dei numeri di telefono preselezionati."
  }
];

export const education_it = {
  degree: {
    period: "2017 – 2021",
    title: "Laurea Triennale in Informatica",
    issuer: "Università degli Studi",
    desc: "Durante il percorso universitario ho sviluppato una solida base nelle scienze computazionali e nello sviluppo software, con particolare attenzione alla programmazione (C++, Java, Python), comprese le tecniche di programmazione parallela, alle reti di calcolatori, all’intelligenza artificiale e alla ricerca operativa.",
    thesis: "Piattaforma per l’analisi sintattica e la gestione di programmi ASP (Answer Set Programming). Il sistema integra un backend in Python e un frontend in React/Ionic con Redux, consentendo la scrittura, l’esecuzione e l’analisi di programmi logici, con funzionalità di regressione, misurazione dei tempi e gestione dei file.",
    thesisTitle: "Tesi: AspIde"
  },
  erasmus: {
    period: "2020",
    title: "Erasmus+",
    issuer: "Universidad de Málaga",
    desc: "Ambiti di studio: Reti e Telecomunicazioni, Inferenza Statistica, Sistemi Paralleli (Java multithreading), Sistemi Dinamici per AI."
  },
  highschool: {
    period: "Precedente",
    title: "Diploma in Sistemi Informativi Aziendali",
    issuer: ""
  }
};
