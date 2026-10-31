export type Project = {
  name: string;
  category: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
};

export const profile = {
  name: "Muhammad Naseem Barkat",
  title: "MERN Stack Developer",
  location: "Lahore, Pakistan",
  email: "barkatalinaseem4@gmail.com",
  phone: "+92 301 4456403",
  whatsappUrl: "https://wa.me/923014456403",
  linkedinUrl: "https://www.linkedin.com/in/muhammad-naseem-barkat-0035523a0/",
  githubUrl: "https://github.com/MrDeveloper24",
};

export const skillGroups = [
  {
    title: "Frontend development",
    number: "01",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "React Router", "Responsive Web Design"],
  },
  {
    title: "Backend development",
    number: "02",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    number: "03",
    skills: ["MongoDB"],
  },
  {
    title: "Development tools",
    number: "04",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Browser Developer Tools"],
  },
  {
    title: "QA & software testing",
    number: "05",
    skills: ["Manual Testing", "Functional Testing", "Regression Testing", "Smoke Testing", "Exploratory Testing", "Test Case Creation & Execution", "Bug Reporting & Tracking", "Role & Permission Testing", "Basic API Testing · Postman", "SDLC & STLC", "Jira", "Trello", "Google Sheets", "SQL Basics"],
  },
];

export const experience = [
  {
    role: "MERN Stack Developer & QA Tester Intern",
    company: "Techzoq (Pvt.) Ltd.",
    duration: "June–September 2026 · 3 months",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "JavaScript", "Git", "GitHub"],
    responsibilities: [
      "Worked as a MERN Stack Developer and QA Tester in a real-world environment.",
      "Tested and contributed to three websites: Pakka Ghata, Kissan Market, and AgriFest.",
      "Identified and reported bugs, improved UI/UX, and checked application functionality.",
      "Collaborated with the development team to fix issues and enhance performance.",
    ],
  },
];

export const education = [
  { qualification: "Bachelor of Arts (BA)", institution: "Allama Iqbal Open University (AIOU)", status: "In progress" },
  { qualification: "Intermediate (FA)", institution: "Government Degree College Kasur", status: "Completed" },
];

export const languages = [
  { language: "Urdu", level: "Native" },
  { language: "Roman Urdu", level: "Fluent" },
  { language: "English", level: "Basic" },
];

export const courses = [
  "MERN Stack Development · 1-year course",
  "Web Development · HTML, CSS, JavaScript",
  "Git & GitHub",
];

// Replace empty URLs with verified project links; the page hides buttons while these are blank.
export const projects: Project[] = [
  {
    name: "Brick Management System",
    category: "Business application",
    description: "A full-stack Bhatta (brick kiln) management system for handling brick production, gates, stock, and expenses.",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "Blog App",
    category: "Full-stack application",
    description: "A full-stack blog website with CRUD operations, authentication, and a rich-text editor.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "Simple E-commerce · CodeStore",
    category: "Online store",
    description: "A storefront for premium products aimed at developers and technology enthusiasts.",
    stack: ["Vite"],
    githubUrl: "",
    liveUrl: "https://simple-ecom-wine.vercel.app",
  },
  {
    name: "Todo App",
    category: "Web application",
    description: "A to-do application deployed on Vercel.",
    stack: ["Vite"],
    githubUrl: "",
    liveUrl: "https://todo-app-five-phi-23.vercel.app",
  },
  {
    name: "SaaS Business Dashboard",
    category: "Dashboard concept",
    description: "A business dashboard concept for presenting business information and managing operational workflows through a structured interface.",
    stack: [],
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "Grocery Website / System",
    category: "Full-stack e-commerce",
    description: "An online grocery store with product listings, cart, authentication, and order management.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "Eat and Meet Restaurant",
    category: "Full-stack restaurant website",
    description: "A restaurant website featuring menus, reservations, and online ordering.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "Doctor Appointment",
    category: "Frontend application",
    description: "A doctor appointment booking interface with a user panel.",
    stack: ["React", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "Edemy LMS",
    category: "Frontend application",
    description: "A learning management interface with course listings and a student panel.",
    stack: ["React", "Tailwind CSS", "Vite"],
    githubUrl: "",
    liveUrl: "https://edemy-lms-9bss.vercel.app",
  },
  {
    name: "Restro Website",
    category: "Frontend website",
    description: "A restaurant frontend with menu, gallery, and contact sections, built to demonstrate responsive UI design.",
    stack: ["React", "Vite", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "Forever E-commerce Website",
    category: "E-commerce website",
    description: "An e-commerce website with modern UI and product-management interfaces.",
    stack: ["React", "Tailwind CSS", "Vite"],
    githubUrl: "",
    liveUrl: "https://forever-nu-indol.vercel.app",
  },
];
