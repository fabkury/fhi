// Services, in display order. Source of truth: fhi-private/services/.
export type Service = {
  id: string;
  title: string;
  summary: string;
  scope: string[];
  proof: string[];
  href?: string;
};

export const services: Service[] = [
  {
    id: 'dua',
    title: 'CMS VRDC Data Use Agreements',
    summary:
      'I write your CMS Data Use Agreement from start to finish, including the study design, the IRB protocol and the DUA request itself, and see it through to approval by the IRB and the CMS Privacy Board.',
    scope: [
      'Study design and minimum-necessary data scope',
      'IRB protocol and submission (Sterling IRB)',
      'DUA request package and supporting documents',
      'Answering CMS questions through to approval',
    ],
    proof: [
      'Secured the CMS Privacy Board approval that gave Sparx its first VRDC access (May 2026)',
      "Rebuilt Wellvana's DUA to cover files the team was eligible for but had never requested",
    ],
    href: '/services/vrdc-dua/',
  },
  {
    id: 'studies',
    title: 'Medicare studies, program evaluation & RWE',
    summary:
      'Rigorous studies on 100% Medicare claims inside the VRDC, from cohort definition and electronic phenotyping to regression output ready for a manuscript or whitepaper.',
    scope: [
      'Cohort discovery and electronic phenotyping',
      'Program evaluation for value-based care initiatives',
      'Propensity scores, IPTW, doubly robust regression, survival analysis',
      'Cost and utilization outcomes, risk-stratified',
    ],
    proof: [
      'Nationwide study of Annual Wellness Visits: 100% RIF, 26–27M beneficiaries per year-pair',
      'Published in the Journal of Clinical Oncology and AMIA using CMS enclave data',
    ],
  },
  {
    id: 'mapping',
    title: 'Data-model mapping & OMOP ETL',
    summary:
      'Move data from where it lives (FHIR, CCLF, RIF or a homegrown schema) into the model you need, OMOP CDM or your own, with the vocabularies mapped correctly.',
    scope: [
      'Source-to-target mapping specs and ETL (SQL, dbt, Python, Spark)',
      'OMOP CDM v5.x conversion and the OHDSI Data Quality Dashboard',
      'ICD, SNOMED, CPT/HCPCS, LOINC, NDC → RxNorm → ATC',
    ],
    proof: [
      'Built a continuous FHIR → OMOP CDM v5.4 pipeline for a startup, delivering 10,000+ patients',
      'Author of widely used NDC → ATC mapping tools',
    ],
  },
  {
    id: 'reporting',
    title: 'Claims & EHR reporting',
    summary:
      'Recurring or one-off reports and pipelines on Medicare and Medicaid claims (RIF, CCLF) and EHR data, built by someone who knows what the codes mean clinically.',
    scope: [
      'CCLF ingestion and filtering pipelines for ACOs',
      'Utilization, cost and Part B drug reporting',
      'Physician and group comparisons',
    ],
    proof: [
      'Own a production rebates pipeline on partner-ACO CCLF data',
      'Public Medicaid spending maps built from 238M claim rows',
    ],
  },
  {
    id: 'setup',
    title: 'VRDC setup, DUA audits & training',
    summary:
      "Get a new VRDC team productive fast. I set up the workspace, check your DUA's scope against what CMS offers today, and train your team hands-on on RIF data.",
    scope: [
      'Onboarding to the VRDC Databricks and SAS environments',
      'DUA scope audits and amendments',
      'Workshops on Medicare claims, OMOP and OHDSI tools',
    ],
    proof: [
      'VRDC data custodian at NIH (3.5 years) and Wellvana',
      'Taught live OHDSI Atlas and Leaf tutorials at Mount Sinai',
    ],
  },
];
