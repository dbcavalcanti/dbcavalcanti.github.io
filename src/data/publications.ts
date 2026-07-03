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
    publications: [
      {
        authors:
          "CAVALCANTI, D.B.; SOUZA, C.; MENDES, C. A.; MEJIA, C.; POUPLANA, I.; CASAS, G.; ROEHL, D.",
        year: "2025",
        title:
          "Three-dimensional hydromechanical simulation of naturally fractured reservoirs using an embedded finite element approach",
        venue:
          "XVIII International Conference on Computational Plasticity (COMPLAS), Barcelona, Spain, September 2-5, 2025",
        type: "conference"
      },
      {
        authors:
          "CAVALCANTI, D.B.; MEJIA, C.; ROEHL, D.M.; MARTHA, L.F.; POUPLANA, I.; CASAS, G.",
        year: "2024",
        title:
          "Assessment of geological fault reactivation using a fully coupled hydromechanical embedded finite element approach",
        venue:
          "Proceedings of the 9th European Congress on Computational Methods in Applied Sciences and Engineering (ECCOMAS 2024), Lisboa, Portugal, June 2024",
        type: "conference"
      },
      {
        authors:
          "CAVALCANTI, D.B.; MEJIA, C.; ROEHL, D.M.; MARTHA, L.F.; POUPLANA, I.; CASAS, G.",
        year: "2023",
        title:
          "An improved embedded finite element formulation for investigating fluid flow behavior in fractured porous media",
        venue:
          "Proceedings of the XLIV Ibero-Latin-American Congress on Computational Methods in Engineering (CILAMCE 2023), ABMEC/FEUP, Porto, Portugal, November 2023. Paper ID: 760, p. 7",
        type: "conference"
      },
      {
        authors:
          "CAVALCANTI, D.B.; MEJIA, C.; ROEHL, D.M.; MARTHA, L.F.",
        year: "2023",
        title:
          "Numerical experiments to assess the behavior of finite elements with embedded strong discontinuities",
        venue:
          "Proceedings of the XVII International Conference on Computational Plasticity: Fundamentals and Applications (COMPLAS 2023), Barcelona, Spain. CIMNE, 2023",
        type: "conference"
      },
      {
        authors: "CAVALCANTI, D.B.; RANGEL, R. L. M.; MARTHA, L. F.",
        year: "2022",
        title:
          "Nonlinear analysis of inelastic frames considering a corotational approach and plasticity by layers: a discussion about computational implementation",
        venue:
          "Nonlinear analysis, stability and structural dynamics (CILAMCE 2022), Foz do Iguacu, Parana. ABMEC, 2022",
        type: "conference"
      },
      {
        authors: "CAVALCANTI, D.B.; RANGEL, R. L. M.; MARTHA, L. F.",
        year: "2022",
        title:
          "Numerical experiments to assess the performance of different formulations and solution algorithms for geometrically nonlinear analysis of two-dimensional frames",
        venue:
          "Nonlinear analysis, stability and structural dynamics (CILAMCE 2022), Foz do Iguacu, Parana. ABMEC, 2022",
        type: "conference"
      },
      {
        authors: "CAVALCANTI, D.B.; ALMEIDA, S. R. M.; ARAUJO, D. L.",
        year: "2021",
        title:
          "Multi-material continuum topology optimization with multiple volume constraints and material nonlinearity",
        venue:
          "Topology optimization of multifunctional materials, fluids and structures (XLII CILAMCE and III PANACM, 2021), Rio de Janeiro, Brazil. ABMEC, 2021",
        type: "conference"
      }
    ]
  },
  {
    id: "talk",
    title: "Invited talks",
    publications: [
      {
        authors: "CAVALCANTI, D.B.",
        year: "2026",
        title:
          "Challenges in the numerical modelling of fractured and faulted geological media",
        venue:
          "Invited speaker, Workshop on the Limits and Promise of Geo-Energies, organized by IMEDEA (CSIC-UIB), Palma de Mallorca, Spain, June 1-2, 2026",
        type: "talk"
      }
    ]
  }
];
