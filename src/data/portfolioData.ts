import {
  ProjectItem,
  SkillItem,
  ExperienceItem,
  EducationItem,
  SpecializedDomain,
} from '../types';

import stockTradingImg from '../assets/images/stock_trading_terminal_1788685213853.jpg';
import financialDashboardImg from '../assets/images/financial_portfolio_dashboard_1788685234765.jpg';
import apiBackendImg from '../assets/images/api_backend_development_1788685793691.jpg';
import frontendDashboardImg from '../assets/images/connected_frontend_dashboard_1788685810432.jpg';
import apiDev3dScreenImg from '../assets/images/api_dev_3d_screen_1788685983207.jpg';
import apiFlow3dScreenImg from '../assets/images/api_flow_3d_screen_1788686000917.jpg';
import salaryosDashboardImg from '../assets/images/salaryos_dashboard_1788686403086.jpg';
import salaryosAnalyticsImg from '../assets/images/salaryos_analytics_1788686420582.jpg';
import salaryosCommandCenterImg from '../assets/images/salaryos_command_center_1788686685851.jpg';
import typingTestMainImg from '../assets/images/typing_test_main_1788686855877.jpg';
import typingTestHeatmapImg from '../assets/images/typing_test_heatmap_1788686875692.jpg';
import typingTestHistoryImg from '../assets/images/typing_test_history_1788686890882.jpg';
import stockmentorLearningPathImg from '../assets/images/stockmentor_learning_path_1788686981081.jpg';
import microskillArcadeDashboardImg from '../assets/images/microskill_arcade_dashboard_1788687163167.jpg';

// Live Project Logos & Authentic Web/App UI Visuals
import scaleupLogo from '../assets/images/scaleup_logo.png';
import loveandringLogo from '../assets/images/loveandring_logo.png';
import cybotLogo from '../assets/images/cybot_logo.png';
import cybotMac from '../assets/images/cybot_mac.png';
import cybotMsoc from '../assets/images/cybot_msoc.jpg';

// Matrimony Platform Web & App UI Screenshots (No couple stock photos)
import loveandringStep1 from '../assets/images/loveandring_step1.png'; // Sign-in & OTP Authentication
import loveandringStep2 from '../assets/images/loveandring_step2.png'; // Matches directory & partner search (desktop & mobile)
import loveandringStep3 from '../assets/images/loveandring_step3.png'; // Socket.IO real-time chat interface
import loveandringServicesUi from '../assets/images/loveandring_services_ui.png'; // Curated wedding services portal

export const PERSONAL_INFO = {
  name: 'Aswin AK',
  firstName: 'aswin',
  title: 'Full Stack Developer',
  email: 'aswinak1212@gmail.com',
  phone: '8921650561',
  location: 'Calicut, Kerala',
  linkedinUrl: 'https://linkedin.com/in/aswinak1212',
  linkedinLabel: 'linkedin.com/in/aswinak1212',
  githubUrl: 'https://github.com/AswinAK1',
  githubLabel: 'github.com/AswinAK1',
  summary:
    'Full Stack Developer with experience building secure, scalable web applications. Skilled in React.js, Next.js, Node.js, Nest.js, Express, MongoDB and real-time systems using Socket.IO. Strong in API development, debugging, automation workflows and cloud deployment in AWS and other platforms, with proven ability to deliver solutions across cybersecurity, CRM, Matrimony, Medical AI domains and Custom softwares.',
};

export const MARQUEE_IMAGES = [
  salaryosDashboardImg,
  loveandringStep2,
  cybotMsoc,
  apiDev3dScreenImg,
  scaleupLogo,
  salaryosCommandCenterImg,
  loveandringStep3,
  cybotMac,
  'api-dev-3d-screen',
  salaryosAnalyticsImg,
  loveandringServicesUi,
  apiFlow3dScreenImg,
  cybotLogo,
  loveandringStep1,
  loveandringLogo,
  apiBackendImg,
  typingTestMainImg,
  microskillArcadeDashboardImg,
  financialDashboardImg,
  stockTradingImg,
  typingTestHeatmapImg,
];

export const SKILLS: SkillItem[] = [
  {
    id: 'frontend-development',
    number: '01',
    title: 'Frontend Development',
    description:
      'Architecting responsive, high-performance web applications and intuitive interfaces. Expert in modern React workflows, Next.js SSR/SSG, modular component architecture, and polished styling systems.',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Material UI',
      'Tailwind CSS',
    ],
  },
  {
    id: 'backend-development',
    number: '02',
    title: 'Backend Development & REST APIs',
    description:
      'Engineering high-concurrency microservices, multi-tenant application backends, and robust RESTful APIs with strict authentication, OTP verification, and efficient business logic flow.',
    tags: [
      'Node.js',
      'Express.js',
      'Nest.js',
      'MongoDB',
      'REST APIs',
      'Socket.io',
      'Multer',
      'JWT / Auth',
    ],
  },
  {
    id: 'database-cloud',
    number: '03',
    title: 'Database & Cloud Architecture',
    description:
      'Designing optimized database schemas, document indexing, scalable object storage, and managed cloud databases for enterprise SaaS and customer-facing platforms.',
    tags: ['MongoDB', 'Firebase', 'AWS', 'Supabase', 'Cloud Storage'],
  },
  {
    id: 'devops-deployment',
    number: '04',
    title: 'DevOps & Production Deployment',
    description:
      'Deploying and maintaining production server environments on AWS with Nginx reverse proxying, PM2 process management, SSL configuration, container orchestration, and CI/CD pipelines.',
    tags: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'Nginx', 'PM2', 'Linux', 'AWS EC2', 'AWS S3', 'SSL'],
  },
  {
    id: 'realtime-systems',
    number: '05',
    title: 'Real-Time Communication & Media',
    description:
      'Specialized in event-driven real-time architectures, bi-directional chat applications, and interactive audio/video conferencing solutions with sub-second synchronization.',
    tags: ['Socket.IO', 'ZEGOCLOUD', 'WebSockets', 'Real-Time Chat', 'Audio/Video Calling', 'Live Events'],
  },
  {
    id: 'tools-technologies',
    number: '06',
    title: 'Tools, Automation & AI Workflows',
    description:
      'Streamlining development cycles and business processes with intelligent workflow automation, comprehensive API testing, state management, and OpenAI integration.',
    tags: ['Redux Toolkit', 'Postman', 'VS Code', 'n8n', 'Figma', 'Claude', 'OpenAI APIs'],
  },
];

export const SERVICES = SKILLS;

export const SPECIALIZED_DOMAINS: SpecializedDomain[] = [
  {
    id: 'crm-saas',
    title: 'CRM & Multi-Tenant SaaS',
    badge: 'Enterprise Platform',
    description:
      'End-to-end multi-tenant SaaS architecture, lead management pipelines, dynamic analytics reporting, and automated business operations.',
    skills: ['Next.js', 'NestJS', 'Multi-Tenancy', 'Sales Pipelines', 'Reporting'],
    icon: 'Building2',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Threat Monitoring',
    badge: 'Security Intelligence',
    description:
      'Centralized threat dashboards, active vulnerability analytics, security incident triage, and real-time alert dispatching.',
    skills: ['Cybersecurity', 'Threat Monitoring', 'Analytics', 'Incident Triage'],
    icon: 'ShieldCheck',
  },
  {
    id: 'matrimony-media',
    title: 'Matrimony & Real-Time Communication',
    badge: 'Media & Real-Time',
    description:
      'Audio/video conferencing, real-time messaging, secure user profile verification, and SMS-based OTP authentication.',
    skills: ['ZEGOCLOUD', 'Socket.IO', 'Audio/Video Calling', 'OTP Verification'],
    icon: 'HeartHandshake',
  },
  {
    id: 'medical-ai-custom',
    title: 'Medical AI & Custom Softwares',
    badge: 'AI & Custom Systems',
    description:
      'Domain-tailored full-stack platforms integrating OpenAI models, automated workflows, and high-reliability data processing.',
    skills: ['Medical AI', 'OpenAI APIs', 'n8n Automation', 'Custom Engineering'],
    icon: 'Cpu',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'luzid-craft',
    role: 'Full Stack Developer',
    company: 'Luzid Craft Business Solutions LLP',
    period: 'Dec 2024 - Present',
    location: 'Calicut, Kerala',
    highlights: [
      'Architected scalable full-stack applications using React.js, Next.js, NestJS, Node.js, and TypeScript, delivering robust capabilities across front-end and back-end layers.',
      'Designed RESTful APIs, managing MongoDB databases, and implementing multi-tenant application architecture for scalable SaaS environments.',
      'Developed CRM modules, including lead management, sales pipelines, reporting dashboards, and workflow automation to streamline business processes.',
      'Integrated third-party services, real-time communication using Socket.IO, and AI-powered features using OpenAI APIs to enhance functionality and user experience.',
      'Managed cloud deployments using AWS EC2, S3, Nginx, PM2, SSL configuration, and production server environments to ensure high availability and security.',
    ],
    skills: [
      'React.js',
      'Next.js',
      'NestJS',
      'Node.js',
      'TypeScript',
      'MongoDB',
      'Socket.IO',
      'OpenAI APIs',
      'AWS EC2',
      'AWS S3',
      'Nginx',
      'PM2',
      'SSL',
    ],
  },
  {
    id: 'levelx',
    role: 'Full stack Intern',
    company: 'LevelX',
    period: 'Jan 2024 - Nov 2024',
    location: 'Calicut, Kerala',
    highlights: [
      'Architected responsive web applications using React.js, Node.js, Express.js, and MongoDB, achieving scalable UI and data flow.',
      'Delivered RESTful APIs with authentication and backend functionalities, enabling robust database operations.',
      'Spearheaded work on E-commerce, Food Delivery, Video Player, and Real-Time Chat applications to meet project scope.',
      'Implemented integration of third-party APIs, file uploads using Multer, and OTP-based authentication to enhance security and functionality.',
      'Collaborated with the development team to debug issues, test features, and deliver project requirements.',
    ],
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Multer',
      'OTP Auth',
      'Socket.IO',
      'E-commerce',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'mba',
    degree: 'MBA',
    field: 'Marketing Management',
    institution: 'IGNOU',
    period: 'Jan 2023 - Present',
  },
  {
    id: 'bba',
    degree: "Bachelor's Degree",
    field: 'Business Administration (BBA)',
    institution: 'MES Arts and Science College',
    location: 'Chathamangalam',
    period: 'Jan 2019 - Jan 2022',
  },
];

export const LANGUAGES = [
  { language: 'Malayalam', proficiency: 'Native' },
  { language: 'English', proficiency: 'Fluent' },
  { language: 'Hindi', proficiency: 'B2 Professional' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'scaleup-crm-saas',
    number: '01',
    title: 'ScaleUp Business Builders',
    category: 'CRM SaaS Platform',
    description:
      'Multi-tenant enterprise CRM SaaS platform featuring comprehensive lead management modules, automated sales pipelines, reporting dashboards, and AI-powered business insights.',
    type: 'Enterprise SaaS',
    tags: [
      'Next.js',
      'React.js',
      'NestJS',
      'Node.js',
      'MongoDB',
      'AI Lead Analysis',
      'Multi-Tenant',
      'AWS EC2',
      'Nginx',
    ],
    col1TopImage: salaryosDashboardImg,
    col1BottomImage: salaryosCommandCenterImg,
    col2Image: salaryosAnalyticsImg,
    logo: scaleupLogo,
    liveUrl: 'https://app.scaleupbusinesssuite.com',
    highlights: [
      'Developed a multi-tenant CRM SaaS platform with enterprise-level application and lead management modules.',
      'Integrated AI-powered lead analysis and automated business insights.',
      'Implemented sales pipelines, reporting dashboards, and company-specific data management.',
      'Architected cloud infrastructure on AWS EC2 & S3 with Nginx reverse proxying, PM2 process management, and SSL encryption.',
    ],
  },
  {
    id: 'love-and-ring',
    number: '02',
    title: 'Love & Ring',
    category: 'Matrimony Platform',
    description:
      'Modern matrimonial platform delivering seamless matchmaking, user & admin portals, real-time video/audio calling via ZEGOCLOUD, instant chat with Socket.IO, and secure SMS-based OTP verification.',
    type: 'Production Platform',
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'ZEGOCLOUD',
      'Socket.IO',
      'SMS OTP Auth',
      'REST APIs',
    ],
    col1TopImage: loveandringStep3,
    col1BottomImage: loveandringServicesUi,
    col2Image: loveandringStep2,
    logo: loveandringLogo,
    liveUrl: 'https://loveandring.com/',
    highlights: [
      'Developed user-facing and admin panels with REST API integration.',
      'Integrated ZEGOCLOUD for real-time audio/video communication and Socket.IO for real-time chat functionality.',
      'Implemented SMS-based OTP verification and third-party service integrations for secure user authentication.',
      'Built responsive matchmaking directories, profile security, and instant notifications.',
    ],
  },
  {
    id: 'cybot-threat-management',
    number: '03',
    title: 'CYBOT Threat Management',
    category: 'Cybersecurity Platform',
    description:
      'Cybersecurity platform for Active Bytes providing real-time threat monitoring, cybersecurity dashboards, vulnerability telemetry, security analytics, and incident triage.',
    type: 'Enterprise Security Solution',
    tags: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Cybersecurity',
      'Threat Monitoring',
      'Security Analytics',
      'REST APIs',
      'Active Bytes',
    ],
    col1TopImage: cybotMsoc,
    col1BottomImage: cybotMac,
    col2Image: apiFlow3dScreenImg,
    logo: cybotLogo,
    liveUrl: 'https://active-bytes.com/',
    highlights: [
      'Developed cybersecurity dashboards and integrated threat monitoring, analytics, and security management features.',
      'Built interactive data visualization for live security events, vulnerability scores, and threat indicators.',
      'Integrated RESTful data streams for security telemetry collection and real-time defense monitoring.',
    ],
  },
  {
    id: 'whatsapp-clone',
    number: '04',
    title: 'WhatsApp Clone',
    category: 'Real-Time Messaging',
    description:
      'High-performance real-time messaging application built with React, Node.js, Express, MongoDB, and Socket.IO. Features event-based communication, persistent chat storage, and room channels.',
    type: 'Full Stack System',
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'WebSockets',
      'Real-Time Chat',
    ],
    col1TopImage: apiBackendImg,
    col1BottomImage: microskillArcadeDashboardImg,
    col2Image: typingTestMainImg,
    githubUrl: 'https://github.com/AswinAK1',
    liveUrl: 'https://github.com/AswinAK1',
    highlights: [
      'Built real-time chat with event-based communication and persistent chat storage.',
      'Engineered event-driven message dispatching, room broadcasts, and online presence indicators.',
      'Architected MongoDB schema models for conversations, messages, user profiles, and media records.',
    ],
  },
];

export const ABOUT_3D_ASSETS = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object3D: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group3D: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
};

export const HERO_PORTRAIT =
  'https://feuohuijuhgiynnn.public.blob.vercel-storage.com/signatures/signature_1794477972954_e8797aa96da35455.png';

export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/aswinak1212',
    label: 'linkedin.com/in/aswinak1212',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/AswinAK1',
    label: 'github.com/AswinAK1',
  },
  {
    name: 'Email',
    url: 'mailto:aswinak1212@gmail.com',
    label: 'aswinak1212@gmail.com',
  },
  {
    name: 'Phone',
    url: 'tel:+918921650561',
    label: '+91 8921650561',
  },
];
