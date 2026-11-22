export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  category: string;
  actionText?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: string;
  iconName: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  boardOrUniversity?: string;
  year?: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  location?: string;
  responsibilities: string[];
}

export const PERSONAL_INFO = {
  name: "RAJ PATIL",
  title: "BCA STUDENT | DATA ANALYTICS & AI/ML",
  location: "Nashik, Maharashtra, India",
  phone: "+91 7498601924",
  email: "adharpatil147@gmail.com",
  linkedin: "https://www.linkedin.com/in/raj-patil-220b8542/",
  existingPortfolio: "https://raj-portfolio-liard.vercel.app/",
  aboutMe:
    "I am a motivated BCA student interested in Data Analytics, Python and Artificial Intelligence. I am seeking opportunities to apply my technical knowledge, gain practical experience and build a successful career in the IT industry."
};

export const PROJECTS: Project[] = [
  {
    id: "bro-ai-assistant",
    title: "BRO AI ASSISTANT",
    subtitle: "Interactive Intelligent Conversational Interface",
    description:
      "Developed an AI assistant interface with interactive features. Focused on responsive user experience and smart assistant functionality.",
    highlights: [
      "Dynamic prompt response system with conversational flow",
      "Sleek futuristic responsive UI built for frictionless voice and text interaction",
      "Optimized query processing logic ensuring instant visual feedback"
    ],
    tags: ["Python", "AI / ML", "UI/UX", "Interactive Assistant"],
    category: "Artificial Intelligence",
    actionText: "View Project Details"
  },
  {
    id: "excel-dashboard",
    title: "Excel Data Analytics Dashboard",
    subtitle: "Interactive HR & Workforce Intelligence Analytics",
    description:
      "An interactive HR and Workforce Intelligence Dashboard built using Excel data, featuring employee analytics, department-wise breakdowns, retention analysis, salary insights, hiring trends and workforce demographics.",
    highlights: [
      "1,000 real employee records across 6 corporate departments and 7 metro cities",
      "Dynamic slicers for Department, City/Location, Status and Employment Type",
      "Executive KPI metrics for Headcount, Attrition, Payroll, Salary, Rating, and Training"
    ],
    tags: ["Excel", "Data Analytics", "Business Intelligence", "Workforce Analytics", "KPIs"],
    category: "Data Analytics | Business Intelligence",
    actionText: "View Dashboard"
  },
  {
    id: "ecommerce-platform",
    title: "E-COMMERCE WEBSITE",
    subtitle: "Modern Online Retail Platform",
    description:
      "Developed a functional e-commerce web platform. Worked on frontend UI/UX design and online shopping workflow.",
    highlights: [
      "Streamlined customer checkout flow and real-time shopping cart state",
      "Interactive product catalog with rich category filters and dynamic previews",
      "Clean, mobile-first design architecture built for high conversion"
    ],
    tags: ["HTML", "CSS", "Frontend UI/UX", "Web Development"],
    category: "Web Development",
    actionText: "View Project Details"
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: "Programming",
    icon: "code",
    color: "#ff6b00",
    skills: ["Python", "HTML", "CSS"]
  },
  {
    category: "Database",
    icon: "database",
    color: "#00d2ff",
    skills: ["MySQL"]
  },
  {
    category: "Data Analytics",
    icon: "bar-chart",
    color: "#ff6b00",
    skills: ["Excel", "Data Cleaning", "Data Visualization"]
  },
  {
    category: "Tools & Collaboration",
    icon: "terminal",
    color: "#00d2ff",
    skills: ["Git", "GitHub", "PowerPoint"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "Advanced Excel",
    issuer: "Simplilearn",
    category: "Analytics & Automation",
    iconName: "file-spreadsheet"
  },
  {
    id: "cert-2",
    title: "Software Development",
    issuer: "Simplilearn",
    category: "Software Engineering",
    iconName: "code-2"
  },
  {
    id: "cert-3",
    title: "AWS Data Analyst 101",
    issuer: "Simplilearn",
    category: "Cloud Data Architecture",
    iconName: "cloud"
  },
  {
    id: "cert-4",
    title: "Power BI",
    issuer: "Simplilearn",
    category: "Business Intelligence",
    iconName: "pie-chart"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-1",
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "K. V. N. Naik College, Nashik",
    boardOrUniversity: "Savitribai Phule Pune University (SPPU)",
    description: "Specializing in Computer Science fundamentals, Object-Oriented Programming, Database Management, and Data Analytics."
  },
  {
    id: "edu-2",
    degree: "12th Grade (HSC)",
    institution: "KSKW College",
    boardOrUniversity: "Maharashtra State Board",
    description: "Completed Higher Secondary Certificate with strong foundation in analytical subjects and computer applications."
  }
];

export const INTERNSHIP: ExperienceItem = {
  id: "intern-1",
  role: "Data Analytics and Data Science Intern",
  company: "Fortune Cloud Technology",
  duration: "6 Months",
  responsibilities: [
    "Worked on real-world datasets for data cleaning, preprocessing and reporting.",
    "Applied Python libraries and visualization techniques to extract key analytical insights."
  ]
};

export const SOFT_SKILLS = [
  { name: "Communication", level: "Advanced", desc: "Clear articulation of data insights & cross-team synergy" },
  { name: "Teamwork", level: "Core", desc: "Collaborative mindset for agile software and analytics workflows" },
  { name: "Analytical Thinking", level: "Advanced", desc: "Structured problem breakdown with mathematical precision" },
  { name: "Problem Solving", level: "Advanced", desc: "Fast debugging and logical pattern discovery" },
  { name: "Time Management", level: "Core", desc: "Efficient milestone delivery with prioritized task execution" },
  { name: "Quick Learning", level: "Advanced", desc: "Rapid adoption of emerging AI/ML and analytics frameworks" },
  { name: "Adaptability", level: "Core", desc: "Thriving across changing tech stacks and dynamic problem sets" }
];

export const LANGUAGES = [
  { name: "Marathi", proficiency: "Native / Bilingual" },
  { name: "Hindi", proficiency: "Professional Working Proficiency" },
  { name: "English", proficiency: "Professional Working Proficiency" }
];

export const AREAS_OF_INTEREST = [
  { name: "Data Analytics", desc: "Extracting actionable business intelligence from complex raw data" },
  { name: "Python Programming", desc: "Building scalable scripts, analytical pipelines, and automation tools" },
  { name: "Artificial Intelligence / ML", desc: "Applying predictive modeling, NLP, and intelligent assistants" },
  { name: "Web Development", desc: "Crafting modern, responsive, and intuitive web user experiences" },
  { name: "Database Management", desc: "Designing structured relational databases and writing performant SQL" }
];
