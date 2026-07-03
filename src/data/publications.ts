export type PublicationType = "journal" | "submitted" | "conference" | "talk";

export type Publication = {
  authors: string;
  year?: string;
  title: string;
  venue: string;
  type: PublicationType;
  link?: {
    label: string;
    href: string;
  };
};

export type PublicationGroup = {
  id: PublicationType;
  title: string;
  description?: string;
  publications: Publication[];
};

// Add new references to the relevant group below. Empty groups remain visible as placeholders.
export const publicationGroups: PublicationGroup[] = [
  {
    id: "journal",
    title: "Peer-reviewed journal articles",
    publications: [
      {
        authors:
          "CAVALCANTI, D., MEJIA, C., SOUZA, C., MENDES, C. A., DE-POUPLANA, I., CASAS, G. & ROEHL, D.",
        year: "2025",
        title:
          "Behavior of Cohesive Stresses in Embedded Finite Elements Based on the Strong Discontinuity Approach",
        venue: "Finite Elements in Analysis and Design, 253, 104485",
        type: "journal",
        link: {
          label: "https://doi.org/10.1016/j.finel.2025.104485",
          href: "https://doi.org/10.1016/j.finel.2025.104485"
        }
      },
      {
        authors:
          "CAVALCANTI, D., MEJIA, C., ROEHL, D., DE-POUPLANA, I., & ONATE, E.",
        year: "2024",
        title:
          "Hydromechanical embedded finite element for conductive and impermeable strong discontinuities in porous media",
        venue: "Computers and Geotechnics, 172, 106427",
        type: "journal",
        link: {
          label: "https://doi.org/10.1016/j.compgeo.2024.106427",
          href: "https://doi.org/10.1016/j.compgeo.2024.106427"
        }
      },
      {
        authors:
          "CAVALCANTI, D., MEJIA, C., ROEHL, D., DE-POUPLANA, I., CASAS, G., & MARTHA, L. F.",
        year: "2024",
        title:
          "Embedded Finite Element formulation for fluid flow in fractured porous medium",
        venue: "Computers and Geotechnics, 171, 106384",
        type: "journal",
        link: {
          label: "https://doi.org/10.1016/j.compgeo.2024.106384",
          href: "https://doi.org/10.1016/j.compgeo.2024.106384"
        }
      }
    ]
  },
  {
    id: "submitted",
    title: "Submitted manuscripts",
    publications: [
      {
        authors:
          "CAVALCANTI, D., RANGEL, R. L., MENDES, C. A., OLIVELLA, S., VILARRASA, V., MARTHA, L. F., ROEHL, D., DE-POUPLANA, I., & CASAS, G.",
        title:
          "PorousLab: a modular finite element framework for simulation of fractured porous media models",
        venue: "Manuscript submitted for publication",
        type: "submitted"
      }
    ]
  },
  {
    id: "conference",
    title: "Conference proceedings",
    publications: []
  },
  {
    id: "talk",
    title: "Invited talks",
    publications: []
  }
];
