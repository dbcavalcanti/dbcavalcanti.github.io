export type NoteItem = {
  topic: string;
  description: string;
  language: string;
  date: string;
  pdf: string;
};

// Add personal notes here. Keep links under public/pdfs/notes/.
export const notes: NoteItem[] = [
  {
    topic: "Plasticity",
    description: "Informal notes on plasticity theory and computational integration.",
    language: "English",
    date: "2026",
    pdf: "/pdfs/notes/plasticity.pdf"
  },
  {
    topic: "Finite Element Method",
    description: "Study notes on finite element fundamentals and implementation details.",
    language: "English",
    date: "2026",
    pdf: "/pdfs/notes/finite-element-method.pdf"
  },
  {
    topic: "Coupled hydro-mechanical problems",
    description:
      "Notes on coupled formulations for porous media under mechanical and hydraulic loading.",
    language: "English",
    date: "2026",
    pdf: "/pdfs/notes/coupled-hydro-mechanical-problems.pdf"
  },
  {
    topic: "Embedded finite elements",
    description:
      "Notes on embedded discontinuity concepts and finite element implementation strategies.",
    language: "English",
    date: "2026",
    pdf: "/pdfs/notes/embedded-finite-elements.pdf"
  },
  {
    topic: "Porous media flow",
    description:
      "Study notes on hydraulic flow in porous media and fractured domains.",
    language: "English",
    date: "2026",
    pdf: "/pdfs/notes/porous-media-flow.pdf"
  }
];
