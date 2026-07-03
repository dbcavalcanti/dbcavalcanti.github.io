export type CourseClass = {
  number: number;
  topic: string;
  materialType: string;
  pdf?: string;
  language: string;
};

export type Course = {
  title: string;
  institution: string;
  academicYear: string;
  level: string;
  languages: string[];
  description: string;
  slug: string;
  classes: CourseClass[];
};

// Add courses here. Each slug automatically generates /teaching/[slug]/.
export const courses: Course[] = [
  {
    title: "Teoria de l'elasticitat",
    institution: "Universitat Politecnica de Catalunya (UPC)",
    academicYear: "2025-2026",
    level: "Undergraduate",
    languages: ["Catalan"],
    description:
      "Teaching materials for elasticity theory, including mathematical preliminaries, kinematics, stresses and equilibrium equations, and an introductory finite element bar formulation.",
    slug: "elasticitat",
    classes: [
      {
        number: 1,
        topic: "Conceptes matematics preliminars",
        materialType: "Slides",
        pdf: "/pdfs/teaching/elasticitat/01-conceptes-matematics-preliminars.pdf",
        language: "Catalan"
      },
      {
        number: 2,
        topic: "Cinematica",
        materialType: "Slides",
        pdf: "/pdfs/teaching/elasticitat/02-cinematica.pdf",
        language: "Catalan"
      },
      {
        number: 3,
        topic: "Tensions i equacions d'equilibri",
        materialType: "Slides",
        pdf: "/pdfs/teaching/elasticitat/03-tensions.pdf",
        language: "Catalan"
      },
      {
        number: 5,
        topic: "Introduccio al Metode dels Elements Finits: elements de barra",
        materialType: "Slides",
        pdf: "/pdfs/teaching/elasticitat/05-intro-mef-barra.pdf",
        language: "Catalan"
      }
    ]
  }
];
