export type CourseClass = {
  number: number;
  topic: string;
  materialType: string;
  pdf: string;
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
    title: "Finite Element Method",
    institution: "Course material placeholder",
    academicYear: "2026",
    level: "Graduate / advanced undergraduate",
    languages: ["English"],
    description:
      "Core concepts of the finite element method for structural and continuum mechanics problems.",
    slug: "finite-element-method",
    classes: [
      {
        number: 1,
        topic: "Weak forms and weighted residuals",
        materialType: "Lecture notes",
        pdf: "/pdfs/teaching/finite-element-method/class-01-weak-forms.pdf",
        language: "English"
      },
      {
        number: 2,
        topic: "Element interpolation and numerical integration",
        materialType: "Slides",
        pdf: "/pdfs/teaching/finite-element-method/class-02-interpolation.pdf",
        language: "English"
      },
      {
        number: 3,
        topic: "Assembly, boundary conditions, and solution strategy",
        materialType: "Lecture notes",
        pdf: "/pdfs/teaching/finite-element-method/class-03-assembly.pdf",
        language: "English"
      }
    ]
  },
  {
    title: "Computational Mechanics",
    institution: "Course material placeholder",
    academicYear: "2026",
    level: "Graduate",
    languages: ["English"],
    description:
      "Computational formulations and implementation patterns for mechanics problems.",
    slug: "computational-mechanics",
    classes: [
      {
        number: 1,
        topic: "Modeling pipeline and discretization choices",
        materialType: "Lecture notes",
        pdf: "/pdfs/teaching/computational-mechanics/class-01-modeling.pdf",
        language: "English"
      },
      {
        number: 2,
        topic: "Nonlinear solution procedures",
        materialType: "Slides",
        pdf: "/pdfs/teaching/computational-mechanics/class-02-nonlinear-solvers.pdf",
        language: "English"
      },
      {
        number: 3,
        topic: "Verification and benchmark design",
        materialType: "Exercise sheet",
        pdf: "/pdfs/teaching/computational-mechanics/class-03-verification.pdf",
        language: "English"
      }
    ]
  },
  {
    title: "Plasticity",
    institution: "Course material placeholder",
    academicYear: "2026",
    level: "Graduate",
    languages: ["English"],
    description:
      "Small-strain plasticity concepts, constitutive integration, and computational implementation.",
    slug: "plasticity",
    classes: [
      {
        number: 1,
        topic: "Yield functions and flow rules",
        materialType: "Lecture notes",
        pdf: "/pdfs/teaching/plasticity/class-01-yield-flow.pdf",
        language: "English"
      },
      {
        number: 2,
        topic: "Return mapping algorithms",
        materialType: "Slides",
        pdf: "/pdfs/teaching/plasticity/class-02-return-mapping.pdf",
        language: "English"
      },
      {
        number: 3,
        topic: "Consistent tangent operators",
        materialType: "Exercise sheet",
        pdf: "/pdfs/teaching/plasticity/class-03-consistent-tangent.pdf",
        language: "English"
      }
    ]
  },
  {
    title: "Structural Analysis",
    institution: "Course material placeholder",
    academicYear: "2026",
    level: "Undergraduate",
    languages: ["English"],
    description:
      "Fundamental methods for the analysis of determinate and indeterminate structures.",
    slug: "structural-analysis",
    classes: [
      {
        number: 1,
        topic: "Equilibrium, compatibility, and constitutive assumptions",
        materialType: "Lecture notes",
        pdf: "/pdfs/teaching/structural-analysis/class-01-fundamentals.pdf",
        language: "English"
      },
      {
        number: 2,
        topic: "Frames, trusses, and internal force diagrams",
        materialType: "Slides",
        pdf: "/pdfs/teaching/structural-analysis/class-02-internal-forces.pdf",
        language: "English"
      },
      {
        number: 3,
        topic: "Matrix stiffness method",
        materialType: "Exercise sheet",
        pdf: "/pdfs/teaching/structural-analysis/class-03-stiffness-method.pdf",
        language: "English"
      }
    ]
  }
];
