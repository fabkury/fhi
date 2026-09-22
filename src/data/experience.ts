// Selected experience. Source of truth: fhi-private/portfolio/employment-history.md.
export type Role = {
  dates: string;
  role: string;
  org: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    dates: '2025 – present',
    role: 'Data & Analytics Engineer',
    org: 'Sparx',
    highlights: [
      "Wrote and led the CMS DUA that gave the company its first VRDC access. It was approved by the CMS Privacy Board in May 2026. I defined the study, obtained IRB clearance and drafted the DUA request.",
      'Own the rebates pipeline on partner-ACO CCLF claims.',
      'Build Part B drug-utilization and provider-comparison tools, with models run inside the VRDC on RIF data.',
    ],
  },
  {
    dates: '2023 – 2025',
    role: 'Lead Data Scientist, Value-Based Care',
    org: 'Wellvana (via Signify Health → CVS Health)',
    highlights: [
      'Led a nationwide VRDC study of Annual Wellness Visits: 100% RIF, 2017–2023, 26–27M fee-for-service beneficiaries per year-pair, with propensity-score IPTW doubly robust regression. AWVs were associated with $923–$1,271 lower total cost of care per beneficiary the following year (~10–12% of average spend), 0.054–0.062 fewer ED visits and 0.158–0.180 fewer inpatient days (all p < 0.01).',
      "Rebuilt the company's CMS DUA and added MSSP ACO files the team was eligible for but had never requested.",
      'Evaluated post-acute care and chronic care programs for value-based care partners.',
    ],
  },
  {
    dates: '2022',
    role: 'Consultant',
    org: 'Sami Health Data',
    highlights: [
      'Led a small team that built a cloud continuous-ETL system from FHIR endpoints into OMOP CDM v5.4. It delivered 10,000+ patients with ongoing third-party ingestion.',
    ],
  },
  {
    dates: '2021',
    role: 'Clinical Data Strategist, Scientific Computing',
    org: 'Mount Sinai Health System',
    highlights: [
      'Served as the local reference for OMOP and OHDSI. Implemented the OHDSI Data Quality Dashboard and taught live Atlas and Leaf tutorials.',
    ],
  },
  {
    dates: '2019 – 2021',
    role: 'Senior Manager, Clinical Informatics',
    org: 'Regeneron Genetics Center',
    highlights: [
      'Developed electronic phenotypes, both individually and at scale. Appraised new data assets from academic partners and harmonized the in-house ontology with OHDSI.',
    ],
  },
  {
    dates: '2018 – 2019',
    role: 'Postdoctoral Research Scientist',
    org: 'Columbia University, Biomedical Informatics',
    highlights: ['Built Chia, an annotated corpus of clinical trial eligibility criteria, published in Scientific Data.'],
  },
  {
    dates: '2014 – 2018',
    role: 'Postdoctoral Research Fellow',
    org: 'U.S. National Library of Medicine, NIH',
    highlights: [
      'Spent 3.5 years as custodian of CMS VRDC Medicare claims: 87M+ patients, 16+ years of follow-up, billions of rows. Recipient of the NLM Special Act or Service Award (2017).',
    ],
  },
];
