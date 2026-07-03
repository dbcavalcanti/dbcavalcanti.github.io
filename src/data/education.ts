export type EducationItem = {
  period: string;
  degree: string;
  institution: string;
  thesis: string;
  supervisors?: string;
  distinction?: string;
  pdf?: string;
};

// Add a new degree here to extend the education timeline on the home page.
export const education: EducationItem[] = [
  {
    period: "2026",
    degree: "Dual-award Ph.D. in Civil Engineering / Structural Analysis",
    institution: "PUC-Rio and UPC",
    thesis:
      "Finite Element Method with Embedded Strong Discontinuities for Coupled Hydro-Mechanical Problems",
    supervisors: "Deane Roehl, Luiz Fernando Martha, Ignasi de Pouplana",
    distinction: "Cum Laude",
    pdf: "/pdfs/theses/phd-thesis.pdf"
  },
  {
    period: "2022",
    degree: "M.Sc. in Structural Analysis",
    institution: "Federal University of Goias",
    thesis: "Topology optimization of structures with nonlinear elastic behavior",
    pdf: "/pdfs/theses/msc-thesis.pdf"
  },
  {
    period: "2021",
    degree: "B.Sc. in Civil Engineering",
    institution: "Federal University of Goias",
    thesis:
      "A hybrid topology optimization formulation for identifying force paths in reinforced concrete structures",
    pdf: "/pdfs/theses/bsc-final-project.pdf"
  }
];
