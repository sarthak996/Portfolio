export const personalInfo = {
  name: "Sarthak Sethi",
  title: "Senior Software Engineer",
  location: "Dublin, Ireland",
  email: "sarthaksethi1996@gmail.com",
  phone: "+353 894902325",
  linkedin: "https://linkedin.com/in/sethi-sarthak/",
  github: "https://github.com/sarthak996",
  summary:
    "Results-driven Senior Software Engineer with over 7 years of experience delivering high-impact, scalable software solutions. Specializing in full-stack development with expertise in React, Node.js, Python, and cloud platforms. Proven leader in mentoring teams and fostering collaboration.",
};

export const skills = {
  "Languages & Web": [
    { name: "ReactJS", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "Python", level: 85 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
  ],
  Frameworks: [
    { name: "Next.js", level: 90 },
    { name: "Nest.js", level: 80 },
    { name: "Angular", level: 75 },
    { name: "Express", level: 85 },
  ],
  Databases: [
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Supabase", level: 80 },
    { name: "Redis", level: 75 },
  ],
  "Cloud & DevOps": [
    { name: "AWS", level: 85 },
    { name: "Azure", level: 80 },
    { name: "GCP", level: 70 },
    { name: "Docker", level: 80 },
    { name: "Jenkins", level: 70 },
    { name: "Git", level: 90 },
  ],
  "AI & Data": [
    { name: "LLMs", level: 90 },
    { name: "RAG", level: 85 },
    { name: "AI SDK", level: 85 },
    { name: "Kafka", level: 75 },
    { name: "BullMQ", level: 80 },
  ],
};

export const projects = [
  {
    name: "AskSarkar",
    description:
      "An advanced chatbot that collects data from government websites and provides conversational answers to citizens. Praised by notable dignitaries including the Prime Minister of India.",
    tech: ["React", "Node.js", "Python", "NLP", "Web Scraping"],
    link: "https://asksarkar.com",
  },
  {
    name: "DigiSaathi",
    description:
      "High-traffic digital payments assistance platform for NPCI, serving 1M+ users with 99.9% uptime and robust scalability across multiple channels.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "Azure"],
  },
  {
    name: "AI Video Bot",
    description:
      "An immersive AI-powered video bot delivering seamless conversational user experiences with real-time video interactions and natural language processing.",
    tech: ["React", "Node.js", "WebRTC", "AI/ML"],
  },
  {
    name: "Self-Onboarding Platform",
    description:
      "CoRover's first self-service platform enabling customers to independently create and integrate AI Agents using BharatGPT LLM and RAG models.",
    tech: ["React", "Node.js", "Python", "LLMs", "RAG", "Stripe"],
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Talio.ai",
    location: "Dublin",
    period: "Jul 2025 – Present",
    highlights: [
      "Architected a scalable Food & Beverage datapoint scraping and enrichment system leveraging LLMs to automate collection and normalization of thousands of data points.",
      "Designed and deployed autonomous AI agents using LLMs and the AI SDK to automate internal workflows, reducing manual operational overhead.",
      "Built a RAG pipeline to automate research processes, improving data retrieval accuracy and significantly reducing research time.",
      "Created an AI-powered analytics chatbot enabling natural language queries on enriched datasets, streamlining decision-making.",
      "Optimized LLM API spend through prompt engineering, model selection, and batching strategies via BullMQ.",
    ],
    skills: ["Next.js", "Node.js", "Nest.js", "Supabase", "LLMs", "RAG", "AI SDK", "BullMQ"],
  },
  {
    role: "Senior Software Engineer (Tech Lead)",
    company: "CoRover.ai",
    location: "Remote",
    period: "Sep 2021 – Jul 2025",
    highlights: [
      "Led the development of CoRover's first self-onboarding platform, enabling customers to independently create and integrate AI Agents using BharatGPT LLM and RAG models.",
      "Integrated Stripe for payment processing, push notifications for engagement, and analytics tools for data-driven insights.",
      "Collaborated with UX teams and stakeholders to design intuitive workflows and gather feedback for continuous improvement.",
      "Mentored a team of developers, fostering a culture of continuous learning and professional growth.",
    ],
    skills: ["React", "Node.js", "Python", "LLMs"],
  },
  {
    role: "Senior Software Engineer",
    company: "CoRover.ai",
    location: "Bangalore, IN",
    period: "Jan 2021 – Sep 2021",
    highlights: [
      "Designed and developed an immersive AI Video Bot using React and Node.js, delivering a seamless user experience.",
      "Developed NPCI DigiSaathi, a high-traffic platform serving 1M+ users with 99.9% uptime and robust scalability.",
      "Enhanced the IRCTC Ask Disha chatbot, optimizing for 1M daily users with Redis caching, cutting latency by 30%.",
      "Implemented Kafka for real-time data streaming, accelerating dashboard data processing by 50%.",
      "Contributed to AWS-to-Azure migration, achieving zero downtime.",
    ],
    skills: ["React", "Node.js", "Java", "Postgres", "Kafka", "Redis", "AWS", "Azure"],
  },
  {
    role: "Associate Software Engineer",
    company: "CoRover.ai",
    location: "Bangalore, IN",
    period: "Jul 2019 – Jan 2021",
    highlights: [
      "Led migration of legacy jQuery dashboards to Angular 12+, slashing load times by 35% and reducing technical debt by 40%.",
      "Optimized performance with pagination, lazy loading (RxJS), and Redis caching — cutting API response times by 50% and scaling capacity from 5K to 15K concurrent users.",
      "Built real-time analytics dashboards using D3.js and Chart.js with dynamic visualizations.",
      "Developed customizable widget system and multi-language support, driving 15% increase in user satisfaction.",
    ],
    skills: ["Angular", "JavaScript", "HTML", "CSS", "D3.js", "Chart.js", "Git"],
  },
];

export const achievements = [
  {
    title: "Developer of AskSarkar Chatbot",
    description:
      "Developed AskSarkar, an advanced chatbot collecting data from government websites and providing conversational answers. Praised by notable dignitaries including the Prime Minister of India.",
    link: "https://asksarkar.com",
  },
  {
    title: "Top Performer — Etsy ML University Challenge",
    description:
      "Recognized as a top performer in the Etsy Machine Learning University Challenge, celebrated at Etsy Office, Dublin.",
  },
];

export const education = [
  {
    degree: "Masters in Computing",
    institution: "Dublin City University",
    location: "Dublin, IE",
    period: "Sep 2023 – Jul 2024",
  },
  {
    degree: "Bachelors of Computer Science",
    institution: "University of Petroleum and Energy Studies",
    location: "Dehradun, IN",
    period: "Jun 2015 – Jun 2019",
  },
];
