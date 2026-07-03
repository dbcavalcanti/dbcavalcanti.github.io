export type NoteItem = {
  topic: string;
  description: string;
  language: string;
  date: string;
  pdf?: string;
};

// Add personal notes here. Keep links under public/pdfs/notes/.
export const notes: NoteItem[] = [
  {
    topic: "Plasticity",
    description:
      "PorousLab theory notes on small-strain rate-independent plasticity.",
    language: "English",
    date: "2025",
    pdf: "/pdfs/notes/plasticity.pdf"
  },
  {
    topic: "Polygonal finite elements",
    description: "Personal notes on polygonal finite element formulation.",
    language: "Portuguese",
    date: "2026",
    pdf: "/pdfs/notes/fem_polygonal_elements.pdf"
  },
  {
    topic: "Coupled hydro-mechanical problems",
    description:
      "Notes on coupled formulations for porous media under mechanical and hydraulic loading.",
    language: "English",
    date: "2026"
  },
  {
    topic: "Embedded finite elements",
    description:
      "Notes on embedded discontinuity concepts and finite element implementation strategies.",
    language: "English",
    date: "2026"
  },
  {
    topic: "Porous media flow",
    description:
      "Study notes on hydraulic flow in porous media and fractured domains.",
    language: "English",
    date: "2026"
  }
];
