export type EducationItem = {
  period: string;
  degree: string;
  institution: string;
  thesis: string;
  language?: string;
  supervisors?: string;
  distinction?: string;
  resources?: {
    label: string;
    href: string;
  }[];
};

// Add a new degree here to extend the education timeline on the home page.
export const education: EducationItem[] = [
  {
    period: "2026",
    degree: "Dual-award Ph.D. in Civil Engineering / Structural Analysis",
    institution: "PUC-Rio and UPC",
    thesis:
      "Finite Element Method with Embedded Strong Discontinuities for Coupled Hydro-Mechanical Problems",
    language: "English",
    supervisors: "Deane Roehl, Luiz Fernando Martha, Ignasi de Pouplana",
    distinction: "Cum Laude",
    resources: [
      {
        label: "Ph.D. thesis PDF",
        href: "/pdfs/theses/PhDThesis_DaniloCavalcanti.pdf"
      }
    ]
  },
  {
    period: "2022",
    degree: "M.Sc. in Structural Analysis",
    institution: "Federal University of Goias, Goiania, Brazil",
    thesis: "Topology optimization of structures with nonlinear elastic behavior",
    language: "Portuguese",
    supervisors: "Daniel de Lima Araujo and Sylvia Regina de Almeida",
    resources: [
      {
        label: "M.Sc. thesis PDF",
        href: "/pdfs/theses/MsThesis_DaniloCavalcanti.pdf"
      },
      {
        label: "M.Sc. defense slides PDF",
        href: "/pdfs/theses/MsThesisDefense_DaniloCavalcanti.pdf"
      }
    ]
  },
  {
    period: "2021",
    degree: "B.Sc. in Civil Engineering",
    institution: "Federal University of Goias, Goiania, Brazil",
    thesis:
      "A hybrid topology optimization formulation for identifying force paths in reinforced concrete structures",
    language: "Portuguese",
    supervisors: "Sylvia Regina de Almeida"
  }
];
