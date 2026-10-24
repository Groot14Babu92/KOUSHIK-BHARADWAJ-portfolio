import {
  NavItem,
  StatItem,
  ExpertiseCard,
  ExperienceItem,
  ResearchItem,
  SkillCategory,
  ProjectItem,
  EducationItem
} from '../types';

export const PERSONAL_INFO = {
  name: 'Koushik Bharadwaj',
  role: 'Project Engineer',
  organization: 'E&ICT Academy, IIT Guwahati',
  tagline: 'Project Engineer | Program Management | Semiconductor Technology',
  shortDescription:
    'Bridging engineering, technology, and program execution to transform ideas into impactful outcomes.',
  biography:
    'I am Koushik Bharadwaj, an Electronics Engineer with an M.Tech in Signal Processing and VLSI Design. I currently work as a Project Engineer at E&ICT Academy, IIT Guwahati, where I contribute to the planning, coordination, and execution of industry-aligned technical training programs.\n\nMy professional experience includes program management, stakeholder coordination, curriculum development, performance monitoring, quality governance, and collaboration with industry partners. I have also contributed to semiconductor-focused curriculum development and technical initiatives designed to strengthen industry-oriented learning.\n\nI am interested in the intersection of engineering, emerging technologies, program leadership, and operational excellence.',
  email: 'koushikbharadwaj92@gmail.com',
  phone: '+91-6003896248',
  location: 'Guwahati, Assam, India',
  languages: ['English', 'Hindi', 'Assamese'],
  educationSummary: 'M.Tech in Signal Processing & VLSI Design',
  engineeringBackground: 'Electronics & Telecommunication',
  cvPdfPath: '/assets/aistudio/Koushik_cv_for_Upload_1_4e9ec100.pdf',
  profilePhotoPath: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_10.06.49_eb496d5f.jpeg',
  heroBgPath: '/src/assets/images/hero_dark_mountain_landscape_1792816789864.jpg',
  waferBgPath: '/src/assets/images/semiconductor_circuit_wafer_1792816788878.jpg',
  motto: 'Engineering knowledge. Structured execution. Measurable outcomes.',
  footerClosing: 'Engineering. Execution. Impact.'
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const IMPACT_STATS: StatItem[] = [
  {
    id: 'stat-revenue',
    value: '₹1 Cr+',
    label: 'Revenue Generated',
    subtext: 'Through strategic program execution, risk mitigation & delivery excellence'
  },
  {
    id: 'stat-experience',
    value: '4+ Years',
    label: 'Professional Experience',
    subtext: 'In program leadership, stakeholder coordination & quality governance'
  },
  {
    id: 'stat-conferences',
    value: '2 Conferences',
    label: 'Conference Presentations',
    subtext: 'Presented at premier VLSI Design and Embedded Systems conferences'
  },
  {
    id: 'stat-tenure',
    value: '2021–Present',
    label: 'At E&ICT Academy',
    subtext: 'IIT Guwahati project engineering and technical program operations'
  }
];

export const EXPERTISE_CARDS: ExpertiseCard[] = [
  {
    id: 'exp-1',
    number: '01',
    title: 'Program Management',
    iconName: 'Workflow',
    description:
      'Planning and executing industry-aligned programs, coordinating milestones, monitoring progress, and maintaining delivery schedules.',
    skills: ['Program Planning', 'Milestone Tracking', 'Risk Management', 'Performance Monitoring']
  },
  {
    id: 'exp-2',
    number: '02',
    title: 'Semiconductor Technology',
    iconName: 'Cpu',
    description:
      'Academic and research exposure to semiconductor devices, VLSI design, TCAD-based modeling, and semiconductor-focused curriculum development.',
    skills: ['VLSI Design', 'Semiconductor Devices', 'TCAD', 'Technical Curriculum']
  },
  {
    id: 'exp-3',
    number: '03',
    title: 'Industry Collaboration',
    iconName: 'Network',
    description:
      'Coordinating with industry partners, academic teams, and relevant stakeholders to support program delivery and industry-aligned initiatives.',
    skills: ['Stakeholder Management', 'Industry Coordination', 'Partner Engagement', 'Cross-functional Collaboration']
  },
  {
    id: 'exp-4',
    number: '04',
    title: 'Data Analysis & Reporting',
    iconName: 'BarChart3',
    description:
      'Using data analysis, reporting, performance indicators, and structured documentation to support informed decisions and program monitoring.',
    skills: ['Data Analysis', 'MS Excel', 'KPI Monitoring', 'Technical Reporting']
  },
  {
    id: 'exp-5',
    number: '05',
    title: 'Technical Training & Curriculum',
    iconName: 'GraduationCap',
    description:
      'Contributing to technical training initiatives, curriculum development, and the delivery of industry-relevant learning programs.',
    skills: ['Curriculum Development', 'Technical Training', 'Learning Program Coordination', 'Content Quality Monitoring']
  },
  {
    id: 'exp-6',
    number: '06',
    title: 'Quality & Process Improvement',
    iconName: 'CheckCircle2',
    description:
      'Supporting consistent program delivery through quality governance, documentation, risk assessment, and corrective action planning.',
    skills: ['Quality Monitoring', 'Process Documentation', 'SOP Writing', 'Continuous Improvement']
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'eict-iitg',
    role: 'Project Engineer',
    organization: 'E&ICT Academy, IIT Guwahati',
    location: 'Guwahati, Assam, India',
    period: '2021 – Present',
    description:
      'Contributing to the execution of industry-aligned technical programs through structured planning, stakeholder coordination, quality monitoring, and performance management.',
    achievements: [
      'Led end-to-end execution of industry-aligned technical programs, managing scope, timelines, budgets, and delivery milestones.',
      'Directed cross-functional coordination between semiconductor companies, academic teams, and regulatory bodies to ensure program compliance and execution efficiency.',
      'Managed program lifecycle from planning to delivery, ensuring alignment with NCVET standards and stakeholder expectations.',
      'Contributed to generating over ₹1 Crore in revenue through strategic program planning, risk mitigation, and performance monitoring.',
      'Established KPI tracking frameworks and performance dashboards to monitor operational metrics and improve program outcomes.',
      'Implemented risk management and corrective action strategies to address delivery gaps and ensure schedule adherence.',
      'Oversaw partner engagement, vendor coordination, and quality governance to ensure consistent execution excellence.'
    ],
    competencies: [
      'Program Planning & Execution',
      'Cross-functional Team Coordination',
      'Stakeholder Management',
      'Budget & Revenue Management',
      'KPI & Performance Monitoring',
      'Risk Assessment & Mitigation',
      'Timeline & Milestone Tracking',
      'Quality Governance & Compliance',
      'Continuous Improvement'
    ]
  }
];

export const RESEARCH_DATA: ResearchItem = {
  id: 'gan-git-research',
  title: 'GaN-Based Gate Injection Transistors',
  topic: 'Current Collapse Reduction and Breakdown Voltage Improvement',
  description:
    'Research focused on GaN-based Gate Injection Transistors (GaN-based GITs), investigating current collapse reduction and breakdown voltage improvement using TCAD-based device modeling.',
  conferences: [
    {
      name: '32nd Conference on VLSI Design (VLSID)',
      year: '2019'
    },
    {
      name: '18th International Conference on Embedded Systems',
      year: '2019'
    }
  ],
  capabilities: [
    'Semiconductor Device Modeling',
    'TCAD-Based Analysis',
    'VLSI Design',
    'Semiconductor Device Performance',
    'Semiconductor Reliability Analysis'
  ],
  paperLinkPlaceholder: 'Presented at VLSID 2019 & ICES 2019',
  abstract:
    'Gallium Nitride (GaN) Gate Injection Transistors (GITs) provide high-electron-mobility and low ON-resistance suited for high-voltage power applications. This research investigates physical mechanisms causing current collapse phenomena in GaN-based GITs and designs physical gate/drain architecture modifications to elevate breakdown voltage while suppressing dynamic ON-resistance degradation under severe switching stress.',
  tcadDetails:
    'Device simulations utilized advanced 2D/3D numerical physical simulation in TCAD, analyzing electric field distribution, carrier velocity saturation, surface trap state dynamics, and junction capacitance variations.'
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Software & Tools',
    description: 'Engineering tools, programming, and data platforms stated in CV',
    skills: [
      { name: 'Python', proficiency: 'Medium', note: 'Data automation and engineering analysis' },
      { name: 'MS Excel', proficiency: 'Good', note: 'Advanced dashboards, KPI tracking, budget analysis' },
      { name: 'VHDL', proficiency: 'Medium', note: 'Digital logic design & hardware description' },
      { name: 'Cadence / TCAD', proficiency: 'Basic', note: 'Device modeling & semiconductor simulation' },
      { name: 'Linux', proficiency: 'Basic', note: 'Environment navigation & command scripting' },
      { name: 'SQL', proficiency: 'Basic', note: 'Relational database queries & data extraction' }
    ]
  },
  {
    title: 'Engineering & Semiconductor Technology',
    description: 'Foundational electronics engineering and semiconductor specialization',
    skills: [
      { name: 'Semiconductor Device Modeling' },
      { name: 'VLSI Design' },
      { name: 'Signal Processing' },
      { name: 'TCAD Simulation Analysis' },
      { name: 'Semiconductor Reliability Analysis' },
      { name: 'Hardware Description Languages' }
    ]
  },
  {
    title: 'Program & Operational Leadership',
    description: 'Professional competencies proven across academic and industry initiatives',
    skills: [
      { name: 'Program Planning & Execution' },
      { name: 'Cross-functional Team Coordination' },
      { name: 'Stakeholder Management' },
      { name: 'Budget & Revenue Management' },
      { name: 'KPI & Performance Monitoring' },
      { name: 'Risk Assessment & Mitigation' },
      { name: 'Quality Governance & Compliance' },
      { name: 'Process Documentation & SOP Writing' },
      { name: 'Technical Reporting & Presentation' },
      { name: 'Curriculum Development' },
      { name: 'Industry Coordination' }
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Semiconductor Curriculum Development',
    category: 'Curriculum & Industry Alignment',
    description:
      'Industry-oriented curriculum development initiatives involving VLSI and Data Science, with emphasis on technical relevance and alignment with industry requirements.',
    longDescription:
      'Collaborated closely with semiconductor industry professionals and academic domain experts to build structured curricula addressing real-world industry demands. Focused on bridging theoretical graduate education with practical VLSI design flows, device modeling methodologies, and data analysis practices aligned with NCVET guidelines.',
    focus: ['VLSI', 'Semiconductor Technology', 'Curriculum Development', 'Industry Collaboration'],
    outcomes: [
      'Aligned multi-week technical courses with industry qualification packs and NCVET standards',
      'Established practical module rubrics for hands-on electronic design tools',
      'Fostered academic-to-industry training pipelines'
    ],
    tools: ['VLSI Design Principles', 'Curriculum Frameworks', 'NCVET Guidelines'],
    iconName: 'Cpu'
  },
  {
    id: 'proj-2',
    title: 'Technical Training Program Execution',
    category: 'Program Management',
    description:
      'Planning and coordinating technical training initiatives involving program schedules, stakeholders, delivery milestones, and quality monitoring.',
    longDescription:
      'Directed end-to-end operational rollout for national and institutional technical training batches at E&ICT Academy, IIT Guwahati. Coordinated instructor schedules, industry guest lecturers, laboratory setups, and learner progression milestones with strict adherence to timeline and budget constraints.',
    focus: ['Program Execution', 'Stakeholder Coordination', 'Performance Monitoring', 'Quality Governance'],
    outcomes: [
      'Delivered structured programs across multiple batches without schedule slippage',
      'Maintained consistent quality monitoring and participant satisfaction scores',
      'Directly contributed to ₹1 Cr+ generated program revenue'
    ],
    tools: ['Milestone Dashboards', 'SOPs', 'Resource Scheduling', 'Risk Matrix'],
    iconName: 'Layers'
  },
  {
    id: 'proj-3',
    title: 'Performance Monitoring & Reporting Frameworks',
    category: 'Data Analysis & Operations',
    description:
      'Structured tracking of program performance through KPI frameworks, reporting, and dashboards to support program oversight and operational improvement.',
    longDescription:
      'Engineered operational dashboards and analytical reporting routines using MS Excel and structured data metrics. Enabled leadership and cross-functional teams to monitor milestone health, revenue realization, participant attendance, and delivery quality indicators.',
    focus: ['MS Excel', 'Data Analysis', 'KPI Tracking', 'Reporting'],
    outcomes: [
      'Standardized weekly and monthly performance reports across active training cohorts',
      'Provided early risk indicators to trigger corrective actions before milestone breaches',
      'Eliminated operational blind spots in batch execution'
    ],
    tools: ['MS Excel (Advanced)', 'KPI Frameworks', 'Variance Analysis', 'Executive Summaries'],
    iconName: 'BarChart3'
  },
  {
    id: 'proj-4',
    title: 'Semiconductor Device Research on GaN-GITs',
    category: 'Research & Innovation',
    description:
      'Research into GaN-based Gate Injection Transistors, with a focus on current collapse reduction, breakdown voltage improvement, and TCAD-based modeling.',
    longDescription:
      'Conducted in-depth academic research investigating Gallium Nitride (GaN) Gate Injection Transistor structures. Analyzed device breakdown under high electric fields and investigated 2DEG depletion mechanisms that contribute to current collapse in high-frequency power electronics.',
    focus: ['Semiconductor Devices', 'TCAD', 'VLSI', 'Research & Analysis'],
    outcomes: [
      'Presented findings at the 32nd Conference on VLSI Design (2019)',
      'Presented at the 18th International Conference on Embedded Systems (2019)',
      'Demonstrated numerical TCAD device structural improvements to enhance breakdown voltage'
    ],
    tools: ['TCAD Modeling', 'Semiconductor Physics', 'VHDL / VLSI', 'Reliability Analysis'],
    iconName: 'Microscope'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-mtech',
    degree: 'M.Tech — Signal Processing & VLSI Design',
    field: 'Signal Processing & VLSI Design',
    institution: 'Gauhati University (GUIST)',
    period: '2018',
    grade: 'CGPA: 7.44',
    highlights: [
      'Specialized in TCAD semiconductor device modeling and VLSI design architectures',
      'Published and presented research on GaN-based Gate Injection Transistors (BNGIT) at VLSID 2019 & ICES 2019'
    ]
  },
  {
    id: 'edu-be',
    degree: 'B.E. — Electronics & Telecommunication Engineering',
    field: 'Electronics & Telecommunication Engineering',
    institution: 'Gauhati University',
    period: '2014',
    grade: '67.1%',
    highlights: [
      'Comprehensive foundation in electronic circuits, analog & digital communication, signals, and microprocessors'
    ]
  },
  {
    id: 'edu-hs',
    degree: 'Higher Secondary (Science)',
    field: 'Physics, Chemistry, Mathematics',
    institution: 'CBSE',
    period: '2010',
    grade: '66%',
    highlights: ['Rigorous foundation in mathematics and physical sciences']
  },
  {
    id: 'edu-secondary',
    degree: 'Secondary Education',
    field: 'General Sciences & Mathematics',
    institution: 'CBSE',
    period: '2008',
    grade: '77%',
    highlights: ['Distinction in science and mathematics']
  }
];
