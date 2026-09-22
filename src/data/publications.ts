// Selected publications and talks. Source of truth: fhi-private/profile/publications.md.
export type Publication = {
  authors: string;
  title: string;
  venue: string;
  year: number;
  href?: string;
};

export const publications: Publication[] = [
  {
    authors: 'Kury F, Butler A, Yuan C, Fu LH, Sun Y, Liu H, Sim I, Carini S, Weng C',
    title: 'Chia, a large annotated corpus of clinical trial eligibility criteria',
    venue: 'Scientific Data 7:281',
    year: 2020,
    href: 'https://doi.org/10.1038/s41597-020-00620-0',
  },
  {
    authors: 'Baik SH, Kury FSP, McDonald CJ',
    title:
      "Risk of Alzheimer's disease among senior Medicare beneficiaries treated with androgen deprivation therapy for prostate cancer",
    venue: 'Journal of Clinical Oncology 35(30):3401–3409',
    year: 2017,
    href: 'https://doi.org/10.1200/JCO.2017.72.6109',
  },
  {
    authors: 'Kury FSP, Bodenreider O',
    title: 'Mapping US FDA National Drug Codes to Anatomical-Therapeutic-Chemical classes using RxNorm',
    venue: 'AMIA Annual Symposium Proceedings',
    year: 2017,
  },
  {
    authors: 'Kury FSP, Baik SH, McDonald CJ',
    title:
      'Analysis of healthcare cost and utilization in the first two years of the Medicare Shared Savings Program using big data from the CMS enclave',
    venue: 'AMIA Annual Symposium Proceedings 2016:724–733',
    year: 2016,
    href: 'https://pubmed.ncbi.nlm.nih.gov/28698770/',
  },
  {
    authors: 'Kury F, Huser V',
    title: 'Converting the data in the US CMS Virtual Research Data Center to the OHDSI Common Data Model version 5',
    venue: 'OHDSI Annual Symposium',
    year: 2015,
  },
];

export const talks = [
  { title: 'Electronic phenotyping', venue: 'UAB Informatics Institute PowerTalk', year: 2022 },
  { title: 'phea: Phenotyping Algebra', venue: 'OHDSI Phenotype Development & Evaluation Working Group', year: 2023 },
  { title: 'Lightning talk', venue: 'OHDSI Annual Symposium, Bethesda, MD', year: 2018 },
];
