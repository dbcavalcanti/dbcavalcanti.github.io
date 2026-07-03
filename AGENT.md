Create a clean, professional, modular academic personal website for GitHub Pages.

Goal:
The site is an academic portfolio / interactive curriculum for Danilo Borges Cavalcanti, Ph.D., intended to be suitable for inclusion as a public link in an academic job application such as Serra Húnter. The visual style must be clean, restrained, professional, and easy to navigate. Avoid flashy effects, heavy animations, or childish design. It should look like a modern academic/research profile.

Technology:
- Use Astro.
- Use TypeScript where useful.
- Use Markdown or structured data files for content.
- Use simple CSS modules or global CSS; no large UI framework unless strictly necessary.
- The site must be static and deployable to GitHub Pages.
- Include a GitHub Actions workflow for deployment.
- Organize the project so that I can easily add new publications, courses, PDFs, software entries, and notes without editing many files.

Pages:
1. Home
2. Research
3. Teaching
4. Teaching course detail pages
5. Software
6. Personal study notes

Design requirements:
- Responsive layout.
- Clean navigation bar.
- Footer with contact links.
- Academic color palette: white/off-white background, dark text, one muted accent color.
- Use cards, timelines, badges, and compact sections.
- Avoid clutter.
- Use accessible HTML: semantic headings, good contrast, alt text placeholders.
- Add comments in the code explaining how I can extend each section.

Content architecture:
Use data-driven content. Create files such as:
- src/data/profile.ts
- src/data/education.ts
- src/data/positions.ts
- src/data/projects.ts
- src/data/publications.ts
- src/data/courses.ts
- src/data/software.ts
- src/data/notes.ts

PDF assets should be stored in:
- public/pdfs/theses/
- public/pdfs/teaching/
- public/pdfs/notes/

Home page:
Include:
- Hero section with name, title, short research identity, and buttons/links for CV, ORCID, GitHub, email.
- About me section.
- Education section as a timeline. Each degree should optionally include a link to the thesis/final project PDF.
- Professional experience section.
- Projects section, with compact cards for R&D projects.
- A short “research interests” tag list.

Home content to use:
Danilo Borges Cavalcanti is a computational geomechanics researcher working on finite element formulations for coupled processes in fractured porous media. His research combines numerical method development and scientific code implementation, with focus on embedded strong discontinuities, fractures, faults, hydro-mechanical coupling, and subsurface engineering applications.

Education:
- 2026: Dual-award Ph.D. in Civil Engineering / Structural Analysis, PUC-Rio and UPC. Thesis: “Finite Element Method with Embedded Strong Discontinuities for Coupled Hydro-Mechanical Problems”. Supervisors: Deane Roehl, Luiz Fernando Martha, Ignasi de Pouplana. Distinction: Cum Laude. Include placeholder link to /pdfs/theses/phd-thesis.pdf.
- 2022: M.Sc. in Structural Analysis, Federal University of Goiás. Thesis: “Topology optimization of structures with nonlinear elastic behavior”. Include placeholder link to /pdfs/theses/msc-thesis.pdf.
- 2021: B.Sc. in Civil Engineering, Federal University of Goiás. Final Project: “A hybrid topology optimization formulation for identifying force paths in reinforced concrete structures”. Include placeholder link to /pdfs/theses/bsc-final-project.pdf.

Professional experience:
- 2023–Present: Research Engineer, CIMNE – International Centre for Numerical Methods in Engineering, Barcelona, Spain.
- 2022–2023: Ph.D. researcher, Tecgraf Institute, Multiphysics Simulation and Modeling Group, Rio de Janeiro, Brazil.

Projects:
- Assessment of geological fault reactivation risk by CO2 injection processes in geological deposits. Funding entity: ExxonMobil. Period: 07/2023–01/2027.
- SECCO2: Open-source software for the digitalization of the CO2 storage process. Funding entity: Spanish Ministry of Science, Innovation and Universities. Period: 12/2022–11/2024.

Research page:
Show publications only as references, grouped into:
- Peer-reviewed journal articles
- Submitted manuscripts
- Conference proceedings
- Invited talks

Create a reusable PublicationList component. Each publication should support:
- authors
- year
- title
- venue
- doi/link
- type

Use the following initial journal articles:
1. CAVALCANTI, D., MEJIA, C., SOUZA, C., MENDES, C. A., DE-POUPLANA, I., CASAS, G. & ROEHL, D. (2025). Behavior of Cohesive Stresses in Embedded Finite Elements Based on the Strong Discontinuity Approach. Finite Elements in Analysis and Design, 253, 104485. https://doi.org/10.1016/j.finel.2025.104485
2. CAVALCANTI, D., MEJIA, C., ROEHL, D., DE-POUPLANA, I., & OÑATE, E. (2024). Hydromechanical embedded finite element for conductive and impermeable strong discontinuities in porous media. Computers and Geotechnics, 172, 106427. https://doi.org/10.1016/j.compgeo.2024.106427
3. CAVALCANTI, D., MEJIA, C., ROEHL, D., DE-POUPLANA, I., CASAS, G., & MARTHA, L. F. (2024). Embedded Finite Element formulation for fluid flow in fractured porous medium. Computers and Geotechnics, 171, 106384. https://doi.org/10.1016/j.compgeo.2024.106384

Submitted manuscript:
CAVALCANTI, D., RANGEL, R. L., MENDES, C. A., OLIVELLA, S., VILARRASA, V., MARTHA, L. F., ROEHL, D., DE-POUPLANA, I., & CASAS, G. PorousLab: a modular finite element framework for simulation of fractured porous media models. Manuscript submitted for publication.

Teaching page:
Show course cards. Each card links to a course detail page.
Each course should support:
- title
- institution
- academic year
- level
- language of material
- short description
- slug
- classes/topics
- PDF materials

Create placeholder courses:
- Finite Element Method
- Computational Mechanics
- Plasticity
- Structural Analysis

For each course detail page:
- Show title, metadata, language badges, and description.
- Show a table/list of classes:
  - class number
  - topic
  - material type
  - PDF link
  - material language
- Use placeholder PDF links under /pdfs/teaching/course-slug/.

Software page:
Show software entries as cards.
Initial entries:
1. PorousLab
   Role: Creator and main developer.
   Description: Open-source MATLAB-based object-oriented finite element framework for multiphysics simulations in porous and fractured media. It supports rapid prototyping, verification, and extension of numerical formulations, including mechanical, hydraulic, two-phase flow, and coupled hydro-mechanical models, with embedded finite element capabilities for fractures and faults.
   Add placeholder links for GitHub, documentation, paper/preprint.
2. GeMA
   Role: Collaborator / contributor through Tecgraf-related research activities.
   Description: Mention experience collaborating with and working in GeMA, developed at Tecgraf, in the context of multiphysics simulation and computational mechanics. Keep wording careful: do not claim ownership. Add placeholder link.

Personal study notes page:
Use the title “Personal study notes”.
Add a short disclaimer:
“These notes are informal study materials prepared during my own learning and research work. They are shared for transparency and may contain evolving explanations.”
Show note cards with topic, description, language, date, and PDF link.
Initial placeholders:
- Plasticity
- Finite Element Method
- Coupled hydro-mechanical problems
- Embedded finite elements
- Porous media flow

Components to create:
- BaseLayout.astro
- Navbar.astro
- Footer.astro
- Section.astro
- Timeline.astro
- Card.astro
- Tag.astro
- PublicationList.astro
- CourseCard.astro
- SoftwareCard.astro
- PdfResourceList.astro

Important:
- Keep all content easy to edit in src/data files.
- Add a README.md explaining:
  1. how to run locally
  2. how to add a publication
  3. how to add a course
  4. how to add a PDF
  5. how to deploy to GitHub Pages
- Add example commands:
  npm install
  npm run dev
  npm run build
- Ensure the build works.
- Ensure internal links work on GitHub Pages.