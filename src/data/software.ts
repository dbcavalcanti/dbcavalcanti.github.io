export type SoftwareLink = {
  label: string;
  href: string;
};

export type SoftwareEntry = {
  name: string;
  role: string;
  description: string;
  links: SoftwareLink[];
};

// Add software projects here; the software page renders each entry as a card.
export const software: SoftwareEntry[] = [
  {
    name: "PorousLab",
    role: "Creator and main developer.",
    description:
      "Open-source MATLAB-based object-oriented finite element framework for multiphysics simulations in porous and fractured media. It supports rapid prototyping, verification, and extension of numerical formulations, including mechanical, hydraulic, two-phase flow, and coupled hydro-mechanical models, with embedded finite element capabilities for fractures and faults.",
    links: [
      { label: "GitHub", href: "https://github.com/dbcavalcanti" },
      { label: "Documentation", href: "#" }
    ]
  },
  {
    name: "GeMA",
    role: "Collaborator / contributor through Tecgraf-related research activities.",
    description:
      "Experience collaborating with and working in GeMA, developed at Tecgraf, in the context of multiphysics simulation and computational mechanics. This entry reflects research use and contribution experience, not software ownership. Additional scientific programming experience includes implementation work with C++, Python, MATLAB, Lua, and Tcl, and numerical frameworks such as GeMA and Kratos.",
    links: [{ label: "Project link", href: "#" }]
  }
];
