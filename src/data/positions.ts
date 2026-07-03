export type PositionItem = {
  period: string;
  role: string;
  institution: string;
  location: string;
  description?: string;
};

// Add professional roles here to extend the experience timeline on the home page.
export const positions: PositionItem[] = [
  {
    period: "2023-Present",
    role: "Research Engineer",
    institution: "CIMNE - International Centre for Numerical Methods in Engineering",
    location: "Barcelona, Spain",
    description:
      "Research and software development for multiphysics simulation of subsurface engineering problems."
  },
  {
    period: "2022-2023",
    role: "Ph.D. researcher",
    institution: "Tecgraf Institute, Multiphysics Simulation and Modeling Group",
    location: "Rio de Janeiro, Brazil",
    description:
      "Research on computational mechanics formulations and finite element implementation."
  }
];
