/* ===== PORTFOLIO DATA ===== */
/* Update this file to change your portfolio content */

export const personalInfo = {
  name: {
    first: 'Faizan',
    last: 'Ismail',
  },
  title: 'Backend Developer & AI/ML Engineer',
  roles: [
    'Backend Developer',
    'AI/ML Engineer',
    'AI Application Developer',
    'Software Developer',
  ],
  location: 'Greater Noida, India',
  email: 'faizanismail013@gmail.com',
  phone: '+91 9508962220',
  linkedin: 'https://www.linkedin.com/in/faizan-ismail-/',
  github: 'https://github.com/faizan-ismail',
  heroIntro:
    'I build intelligent applications and reliable backend systems, combining software engineering with AI and machine learning to solve real-world problems.',
};

export const aboutData = {
  summary: [
    'I am a Computer Science and Engineering undergraduate with experience in machine learning, deep learning architectures, and full-stack AI application development.',
    'My work includes training machine learning models, developing generative AI pipelines, building backend services, and deploying web applications.',
    'I enjoy solving complex problems through data-driven engineering and building reliable, scalable software solutions.',
  ],
  details: {
    name: 'Faizan Ismail',
    location: 'Greater Noida, India',
    focus: 'Backend Engineering & AI/ML',
    education: 'B.Tech in Computer Science & Engineering',
  },
};

export const experienceData = [
  {
    id: 1,
    role: 'Backend Developer',
    company: 'PPR Smart Systems',
    period: '2026 – Present',
    type: 'Full-time',
    technologies: ['Python', 'Flask', 'REST APIs', 'Databases', 'Git', 'GitHub'],
    responsibilities: [
      'Develop and maintain backend services and RESTful APIs using Python and Flask.',
      'Design and integrate APIs for frontend applications and business workflows.',
      'Work with databases for data storage, retrieval, and management.',
      'Implement backend logic, validation, authentication, and error handling.',
      'Debug backend issues and improve API performance and system reliability.',
      'Collaborate with frontend developers to deliver scalable application features.',
      'Use Git and GitHub for version control and collaborative development.',
    ],
  },
  {
    id: 2,
    role: 'AI Fintech Platform',
    company: 'Inspolio',
    period: 'February 2026 – August 2026',
    type: 'Project',
    technologies: ['Python', 'React', 'FastAPI', 'LangChain', 'PyTorch'],
    responsibilities: [
      'Architected an AI-powered fintech web platform for automated financial insights and tiered subscription management.',
      'Integrated Retrieval-Augmented Generation (RAG) pipelines using LangChain and Hugging Face models.',
      'Optimized vector search retrieval and caching, reducing API latency by 25%.',
    ],
  },
];

export const projectsData = [
  {
    id: 1,
    number: '01',
    title: 'Inspolio AI Fintech Platform',
    description:
      'An AI-powered fintech platform designed to provide automated financial insights and subscription-based functionality.',
    technologies: ['Python', 'React', 'FastAPI', 'LangChain', 'PyTorch', 'Hugging Face'],
    highlight: 'RAG-based AI workflows and backend retrieval optimization, with a reported 25% reduction in API latency.',
    url: null,
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: '#4361ee',
  },
  {
    id: 2,
    number: '02',
    title: 'Backend API Development',
    description:
      'Backend services and RESTful APIs built with Python and Flask to support application functionality, data management, validation, authentication, and frontend integration.',
    technologies: ['Python', 'Flask', 'REST APIs', 'Databases', 'Git', 'GitHub'],
    highlight: null,
    url: null,
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b2e 50%, #1a1a2e 100%)',
    accent: '#9b59b6',
  },
  {
    id: 3,
    number: '03',
    title: 'Machine Learning Projects',
    description:
      'A dedicated showcase for machine learning experiments and applications involving model training, data preprocessing, predictive modeling, and evaluation.',
    technologies: ['Python', 'Scikit-learn', 'PyTorch', 'Keras', 'Pandas', 'OpenCV'],
    highlight: null,
    url: null,
    gradient: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1a2332 100%)',
    accent: '#58a6ff',
  },
];

export const skillsData = {
  'Programming Languages': ['Python', 'C++', 'SQL', 'JavaScript', 'HTML', 'CSS'],
  'AI & Machine Learning': ['PyTorch', 'Keras', 'Scikit-learn', 'LangChain', 'Hugging Face', 'OpenCV'],
  'Web & Backend': ['React', 'Node.js', 'FastAPI', 'RESTful APIs', 'Flask', 'Streamlit'],
  'Tools & Infrastructure': ['Git', 'GitHub', 'Docker', 'VS Code', 'Google Cloud Platform'],
  'Core CS': [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Automata Theory',
    'Operating Systems',
  ],
};

export const educationData = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science & Engineering',
  institution: 'Galgotias University',
  location: 'Greater Noida, Uttar Pradesh, India',
  coursework: [
    'Data Structures & Algorithms',
    'Automata Theory',
    'Machine Learning',
    'Database Management Systems',
    'Computer Networks',
    'Software Engineering',
  ],
};

export const certificationsData = [
  {
    id: 1,
    title: 'IBM AI Engineering Professional Certificate',
    issuer: 'Coursera',
    url: null,
  },
  {
    id: 2,
    title: 'Complete Generative AI Course with LangChain & Hugging Face',
    issuer: 'Udemy',
    url: null,
  },
  {
    id: 3,
    title: 'Prime 2.0: AI/ML Program',
    issuer: 'Apna College',
    url: null,
  },
];

export const navItems = [
  { number: '01', label: 'About', href: '#about' },
  { number: '02', label: 'Experience', href: '#experience' },
  { number: '03', label: 'Projects', href: '#projects' },
  { number: '04', label: 'Skills', href: '#skills' },
  { number: '05', label: 'Education', href: '#education' },
  { number: '06', label: 'Certifications', href: '#certifications' },
  { number: '07', label: 'Contact', href: '#contact' },
];
