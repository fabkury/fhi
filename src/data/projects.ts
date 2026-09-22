// Public projects. Source of truth: fhi-private/portfolio/projects.md.
export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const healthProjects: Project[] = [
  {
    name: 'phea',
    blurb:
      'An R package for electronic phenotyping. You write formulas over long-form patient-event tables and phea generates the SQL, including for values that change over time.',
    tags: ['R', 'SQL', 'Phenotyping'],
    links: [
      { label: 'Docs', href: 'https://fabkury.github.io/phea/' },
      { label: 'GitHub', href: 'https://github.com/fabkury/phea' },
      { label: 'Video', href: 'https://www.youtube.com/watch?v=10GFtQREC0A' },
    ],
  },
  {
    name: 'atcd',
    blurb: 'Scrapes the full WHO ATC/DDD index into an analysis-ready table. My most-used open-source tool.',
    tags: ['R', 'Python', 'Terminologies'],
    links: [{ label: 'GitHub', href: 'https://github.com/fabkury/atcd' }],
  },
  {
    name: 'n2c / ndc_map',
    blurb:
      'Maps FDA National Drug Codes to ATC classes (plus VA classes, MeSH and SNOMED) via RxNorm. It began as an AMIA 2017 paper.',
    tags: ['Python', 'R', 'RxNorm'],
    links: [
      { label: 'n2c', href: 'https://github.com/fabkury/n2c' },
      { label: 'ndc_map', href: 'https://github.com/fabkury/ndc_map' },
    ],
  },
  {
    name: 'Medicaid spending maps',
    blurb:
      'Interactive county maps of Medicaid provider spending by HCPCS code and by drug class, 2018–2024, built from 238M claim rows.',
    tags: ['Python', 'MapLibre', 'Claims'],
    links: [
      { label: 'HCPCS map', href: 'https://fabkury.github.io/medicaid-spending-map/' },
      { label: 'Drug map', href: 'https://fabkury.github.io/medicaid-ndc-spending-map/' },
    ],
  },
  {
    name: 'VRDC research code',
    blurb:
      'An ETL from the CMS VRDC to the OHDSI CDM, plus SAS study code on Medicare Shared Savings, opioid use, and drugs and dementia risk in the elderly.',
    tags: ['SAS', 'VRDC', 'OMOP'],
    links: [
      { label: 'cms_vrdc_etl', href: 'https://github.com/fabkury/cms_vrdc_etl' },
      { label: 'cisa', href: 'https://github.com/fabkury/cisa' },
      { label: 'opod', href: 'https://github.com/fabkury/opod' },
      { label: 'rxad', href: 'https://github.com/fabkury/rxad' },
      { label: 'ccsd', href: 'https://github.com/fabkury/ccsd' },
    ],
  },
];

export const makerProjects: Project[] = [
  {
    name: 'Makapix Club',
    blurb:
      'A pixel-art social network built around physical displays, with a web app, an iOS/Android app with an offline editor, and real-time delivery to devices over MQTT. Built solo.',
    tags: ['FastAPI', 'Next.js', 'Flutter', 'Rust'],
    links: [
      { label: 'makapix.club', href: 'https://makapix.club' },
      { label: 'GitHub', href: 'https://github.com/fabkury/makapix' },
    ],
  },
  {
    name: 'p3a',
    blurb:
      'A 4-inch touchscreen pixel-art player on the ESP32-P4. It plays Makapix, museum collections and PICO-8, and was featured in Make: magazine.',
    tags: ['ESP32', 'C/C++', 'Embedded'],
    links: [
      { label: 'GitHub', href: 'https://github.com/fabkury/p3a' },
      { label: 'Make:', href: 'https://makezine.com/projects/desktop-pixel-art-player-p3a/' },
    ],
  },
  {
    name: 'p64',
    blurb: 'A 64×64 RGB LED desk display in a 3D-printed shell, showing pixel art, a clock and the weather.',
    tags: ['ESP32-S3', 'C++', 'OpenSCAD'],
    links: [{ label: 'GitHub', href: 'https://github.com/fabkury/p64' }],
  },
];
