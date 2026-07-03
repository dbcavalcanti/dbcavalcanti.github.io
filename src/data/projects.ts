export type ProjectItem = {
  title: string;
  funding: string;
  period: string;
  description?: string;
};

// Add research and development projects here; cards on the home page update automatically.
export const projects: ProjectItem[] = [
  {
    title:
      "Assessment of geological fault reactivation risk by CO2 injection processes in geological deposits",
    funding: "ExxonMobil",
    period: "07/2023-01/2027",
    description:
      "Numerical modeling for hydro-mechanical processes associated with CO2 geological storage."
  },
  {
    title:
      "SECCO2: Open-source software for the digitalization of the CO2 storage process",
    funding: "Spanish Ministry of Science, Innovation and Universities",
    period: "12/2022-11/2024",
    description:
      "Open-source scientific software and workflows for CO2 storage simulation."
  }
];
