import { PortfolioConfig } from './types';

// Portfolio Configuration File
// Edit this file to update your portfolio content

export const portfolioConfig: PortfolioConfig = {
  personalInfo: {
    name: "Kishor Kumar Sridhar",
    title: "Data Scientist | Machine Learning | Business Intelligence",
    description: "Data Science",
    email: "kishorkumarsridhar@gmail.com",
    linkedin: "https://www.linkedin.com/in/kishorkumars/",
    github: "https://github.com/kishorkumarsridhar",
    resumeUrl: "/resume.pdf",
    profileImage: "kishor.png",
  },

  aboutInfo: {
    paragraphs: [
      "Data Scientist with 6+ years of industry experience in data science, data analytics, product management, business intelligence, database management and stakeholder engagement. Proven expertise in implementing Machine Learning frameworks using Dataiku Data Science Studio, statistical analysis, handling Big Data, and presenting compelling dashboards for evidence-based decision-making. I have an H1B Visa in the USA and I am looking for a full-time Data Scientist role in the USA."
    ],
    skills: ["Python", "Machine Learning", "Statistical Analysis", "Big Data", "Business Intelligence", "Dataiku DSS"],
  },

  skillsInfo: {
    technicalSkills: [
      { name: "Python (Pandas, NumPy, Scikit-learn)", level: 95 },
      { name: "Machine Learning (XGBoost, PyTorch, TensorFlow)", level: 90 },
      { name: "Dataiku DSS", level: 85 },
      { name: "SQL (MS SQL Server, PostgreSQL, DBT)", level: 90 },
      { name: "BI Tools (Tableau, Power BI, DOMO)", level: 85 },
      { name: "Big Data (BigQuery, Databricks, AWS)", level: 80 },
      { name: "R (tidyverse)", level: 75 },
      { name: "Statistics (A/B Testing, Time Series, NLP)", level: 85 },
      { name: "Git & Version Control", level: 70 },
    ],
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Tamil", level: "Native" },
      { name: "Telugu", level: "Native" },
    ],
  },

  experienceInfo: [
    {
      title: "Data Scientist",
      company: "RDG Planning & Design",
      location: "Des Moines, IA",
      period: "Feb 2024 - Jun 2025",
      description: [
        "Analyzed project timeline data to identify patterns and developed predictive models using XGBoost to forecast project durations.",
        "Implemented GenAI using Amazon Bedrock to generate concise summaries of unstructured project notes from architectural designs.",
        "Created Power BI visualizations to communicate insights and provided actionable recommendations to non-technical stakeholders."
      ],
    },
    {
      title: "Data Scientist – Product",
      company: "Buildertrend",
      location: "Des Moines, IA (Remote)",
      period: "Dec 2021 - Nov 2023",
      description: [
        "Implemented a Random Forest model with high accuracy to predict vendor categories for enhancing group procurement efficiency.",
        "Facilitated A/B testing experimentation for custom cost codes, driving 25% adoption surge through chi-square and ANOVA analyses.",
        "Conducted Customer Survival Analysis using Kaplan-Meier and log-rank tests to identify key retention factors and targeted strategies.",
        "Analyzed historical data and implemented workflows in Dataiku to target appropriate builders for Builders Risk Insurance service.",
        "Utilized OpenAI's text-embedding-ada-002 for NPS topic modeling, cutting issues by 15% and boosting satisfaction scores by 20%.",
        "Transformed data in BigQuery using DBT workflows, boosting data processing speed and accessibility for informed decision-making.",
        "Developed SQL queries for analytical reports and dashboards in Tableau and presented meaningful insights to business stakeholders."
      ],
    },
    {
      title: "Data Analyst",
      company: "AKC Marketing",
      location: "Ames, IA (Remote)",
      period: "May 2021 - Sep 2021",
      description: [
        "Established scalable processes to monitor and maintain data quality focused on data modeling, transformation, and ad-hoc analysis."
      ],
    },
    {
      title: "Data Science Fellow",
      company: "Data Science for Public Good Fellowship",
      location: "Ames, IA (Remote)",
      period: "May 2020 - Aug 2020",
      description: [
        "Led two Data Science projects to implement comprehensive data analysis using statistical modeling and hypothesis testing.",
        "Developed R Shiny dashboards to improve public awareness of Iowa's resources on mental and physical health and education.",
        "Communicated data-driven insights to non-technical stakeholders using R Shiny dashboard to assess community well-being in Iowa.",
        "Implemented time series forecasting to estimate alcohol sales in Iowa and spatially segmented counties under high-risk alcohol use."
      ],
    },
    {
      title: "Data Science Intern",
      company: "Iowa Department of Transportation",
      location: "Ames, IA",
      period: "Jun 2018 - May 2020",
      description: [
        "Implemented predictive models using FB Prophet in Python to estimate customer wait-times for Live display on DOT website.",
        "Applied topic modeling (NLP) using LDA on 10,000 public feedback to identify factors governing highway maintenance in Iowa.",
        "Performed statistical analysis using MLlib in PySpark for identifying correlation between road crashes and weather conditions.",
        "Developed efficient SQL scripts for data cleansing, transformation and data modeling for ad-hoc data analysis and reporting."
      ],
    },
    {
      title: "Data Analyst",
      company: "Torus",
      location: "Chennai, India",
      period: "Aug 2016 - Oct 2017",
      description: [
        "Automated insurance claims processing systems with integrated document management to reduce turn-around time by 30%.",
        "Assisted in planning and implementation of experimental design for A/B testing to improve conversion rate based on various KPIs."
      ],
    },
    {
      title: "Programmer Analyst",
      company: "Infosys",
      location: "Chennai, India",
      period: "Feb 2014 - Jul 2016",
      description: [
        "Performed extensive data governance activities using Enablon EHS tool for a data migration project to modernize legacy systems.",
        "Improved database performance by reducing query execution time by 50% using advanced SQL queries and stored procedures."
      ],
    },
  ],

  projectsInfo: [
    {
      title: "Project Duration Prediction Model",
      description: "Developed predictive models using XGBoost to forecast project durations by analyzing historical project timeline data, enabling better resource planning and client expectations management.",
      tech: ["Python", "XGBoost", "Machine Learning", "Power BI"],
      github: "",
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "GenAI Project Notes Summarizer",
      description: "Implemented Generative AI using Amazon Bedrock to automatically generate concise summaries of unstructured project notes from architectural designs, improving information accessibility.",
      tech: ["Amazon Bedrock", "GenAI", "AWS", "Python"],
      github: "",
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "Vendor Category Prediction System",
      description: "Implemented a Random Forest model with high accuracy to predict vendor categories, enhancing group procurement efficiency and enabling data-driven vendor management decisions.",
      tech: ["Python", "Random Forest", "Scikit-learn", "Machine Learning"],
      github: "",
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "Customer Survival Analysis Dashboard",
      description: "Conducted Customer Survival Analysis using Kaplan-Meier and log-rank tests to identify key retention factors, enabling targeted customer retention strategies.",
      tech: ["Python", "Statistical Analysis", "Survival Analysis", "Dataiku DSS"],
      github: "",
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "NPS Topic Modeling with OpenAI",
      description: "Utilized OpenAI's text-embedding-ada-002 for NPS topic modeling, reducing customer issues by 15% and boosting satisfaction scores by 20% through actionable insights.",
      tech: ["OpenAI API", "NLP", "Python", "Text Embeddings"],
      github: "",
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "Iowa Public Health Dashboard",
      description: "Developed R Shiny dashboards to improve public awareness of Iowa's resources on mental and physical health and education, communicating data-driven insights to non-technical stakeholders.",
      tech: ["R", "R Shiny", "Statistical Modeling", "Data Visualization"],
      github: "",
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "Alcohol Sales Time Series Forecasting",
      description: "Implemented time series forecasting to estimate alcohol sales in Iowa and spatially segmented counties under high-risk alcohol use, supporting public health initiatives.",
      tech: ["R", "Time Series Forecasting", "Spatial Analysis", "Statistics"],
      github: "",
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "Customer Wait-Time Prediction System",
      description: "Implemented predictive models using FB Prophet in Python to estimate customer wait-times for live display on Iowa DOT website, improving customer experience.",
      tech: ["Python", "FB Prophet", "Time Series", "Predictive Modeling"],
      github: "",
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "Highway Maintenance NLP Analysis",
      description: "Applied topic modeling (NLP) using LDA on 10,000 public feedback responses to identify key factors governing highway maintenance in Iowa.",
      tech: ["Python", "NLP", "LDA", "PySpark MLlib"],
      github: "",
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "Road Crash & Weather Correlation Analysis",
      description: "Performed statistical analysis using MLlib in PySpark to identify correlations between road crashes and weather conditions, supporting data-driven safety improvements.",
      tech: ["PySpark", "MLlib", "Statistical Analysis", "Big Data"],
      github: "",
      showGithub: false,
      live: "",
      showLive: false,
    },
  ],

  publicationsInfo: [],

  educationInfo: [
    {
      degree: "Master of Business Administration (MBA)",
      school: "Trine University",
      period: "Jan 2024 - Present",
      gpa: "3.8/4.0",
    },
    {
      degree: "Master of Information Systems (STEM), Minor in Statistics",
      school: "Iowa State University",
      period: "Jan 2018 - Nov 2020",
      gpa: "3.74/4.0",
    },
    {
      degree: "B.E. in Electrical and Electronics Engineering",
      school: "Anna University, India",
      period: "Sep 2009 - May 2013",
      gpa: "7.58/10",
    },
  ],

  testimonialsInfo: [],

  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],

  styling: {
    primaryColor: "indigo-500",
    secondaryColor: "purple-500",
    accentColor: "pink-500",
    gradients: {
      hero: "from-indigo-500 via-purple-500 to-pink-500",
      about: "from-indigo-50 via-white to-purple-50",
      skills: "from-white to-white",
      experience: "from-purple-50 via-white to-blue-50",
      projects: "from-white to-white",
      publications: "from-blue-50 via-white to-indigo-50",
      testimonials: "from-purple-50 to-indigo-50",
      hobbies: "from-white to-white",
      education: "from-blue-50 via-white to-purple-50",
      contact: "from-white to-white",
    },
  },

  features: {
    showHero: true,
    showAbout: true,
    showSkills: true,
    showExperience: true,
    showProjects: true,
    showPublications: false,
    showTestimonials: false,
    showHobbies: false,
    showEducation: true,
    showContact: true,
  },

  ui: {
    hero: {
      contactButton: "Contact Me",
      downloadButton: "Download CV",
    },
    common: {
      viewProject: "View Project",
      viewCode: "View Code",
    },
  },
};

// Export individual sections for backward compatibility while migrating
export const {
  personalInfo,
  aboutInfo,
  skillsInfo,
  experienceInfo,
  projectsInfo,
  publicationsInfo,
  educationInfo,
  testimonialsInfo,
  navLinks,
  styling,
} = portfolioConfig;
