export const personalInfo = {
  name: "Sohaib Abdullah Sadiq",
  title: "Junior System Administrator & Frontend Engineer",
  tagline: "Bridging Enterprise Infrastructure & High-Performance Web Applications",
  location: "Islamabad, Pakistan",
  email: "sohaibabdullah709@gmail.com",
  currentRole: "Junior System Administrator at NTC Data Center",
  status: "Available for Opportunities",
  summary:
    "Junior System Administrator at the National Telecommunication Corporation (NTC) Data Center, Islamabad, with a Computer Science background and hands-on experience in server operations, infrastructure monitoring, backups, and user access management. Brings a strong software engineering foundation in React and Next.js, with prior work on national government digital systems at NITB and production web applications at MFSYS.",
  stats: [
    { label: "Data Center Servers", value: "Windows & Linux", sub: "Enterprise Fleet" },
    { label: "Frontend Stack", value: "React & Next.js", sub: "Production Level" },
    { label: "FYP Award", value: "Best Project", sub: "PAF-IAST 2026" },
    { label: "Infrastructure Uptime", value: "99.9%", sub: "Monitoring & Alerting" }
  ]
};

export const experiences = [
  {
    id: "ntc-admin",
    role: "Junior System Administrator",
    company: "National Telecommunication Corporation (NTC)",
    division: "Data Center Operations, NTC Headquarters, G-5/2",
    location: "Islamabad, Pakistan",
    period: "Jul 2026 - Present",
    type: "Current Role",
    badge: "Infrastructure & Security",
    color: "from-cyan-500 to-blue-600",
    highlights: [
      "Administer and maintain Windows and Linux servers in the NTC Data Center, including installation, configuration, patching, and routine health checks.",
      "Monitor server, storage, and network infrastructure for uptime, performance, and capacity; respond to alerts and escalate critical incidents.",
      "Perform scheduled backups and restore tests to support data integrity and disaster recovery readiness.",
      "Manage user accounts, permissions, and access control in strict compliance with organizational security policies.",
      "Support virtualized environments: provisioning, resource allocation, and lifecycle maintenance of virtual machines.",
      "Troubleshoot hardware, OS, and connectivity issues, and maintain rigorous documentation of configurations, maintenance activities, and incident logs."
    ],
    tech: ["Linux (RHEL/Ubuntu)", "Windows Server", "Virtualization (VMware/KVM)", "Server Monitoring", "Disaster Recovery", "Access Control"]
  },
  {
    id: "mfsys",
    role: "Software Engineer",
    company: "MFSYS Pvt Ltd",
    division: "Frontend Engineering Team",
    location: "Islamabad, Pakistan",
    period: "Jul 2025 - Sep 2025",
    type: "Engineering",
    badge: "Web Applications",
    color: "from-emerald-500 to-teal-600",
    highlights: [
      "Developed responsive front-end applications using React.js with an optimized, reusable component architecture.",
      "Built high-performance Next.js applications leveraging Server-Side Rendering (SSR) and Static Site Generation (SSG) for SEO and latency reduction.",
      "Integrated RESTful APIs and managed complex asynchronous data flow with robust error handling and loading boundaries."
    ],
    tech: ["React.js", "Next.js", "Redux", "RESTful APIs", "JavaScript (ES6+)", "Component Architecture"]
  },
  {
    id: "nitb",
    role: "Web Developer Intern",
    company: "National Information Technology Board (NITB)",
    division: "Government Digital Services",
    location: "Islamabad, Pakistan",
    period: "Jul 2024 - Sep 2024",
    type: "Public Sector",
    badge: "Enterprise Systems",
    color: "from-purple-500 to-indigo-600",
    highlights: [
      "Assisted in the development and maintenance of mission-critical government digital systems and public-facing web applications.",
      "Worked with relational database systems and applied secure software development practices, including robust authentication and authorization.",
      "Supported system testing, debugging, and deployment workflows in high-compliance enterprise environments."
    ],
    tech: ["Web Applications", "Auth & RBAC", "Relational Databases", "Enterprise Testing", "Secure Development"]
  },
  {
    id: "ntc-intern",
    role: "Data Center Intern",
    company: "National Telecommunication Corporation (NTC)",
    division: "Data Center Division",
    location: "Islamabad, Pakistan",
    period: "Jul 2023 - Sep 2023",
    type: "Infrastructure",
    badge: "Data Center",
    color: "from-blue-500 to-cyan-600",
    highlights: [
      "Monitored server infrastructure and network systems around the clock for uptime, traffic spikes, and resource performance.",
      "Gained foundational hands-on exposure to enterprise virtualization and basic system administration within a national-level data center.",
      "Assisted with scheduled backup operations, preventive system maintenance, and audit reviews of network configurations and security protocols."
    ],
    tech: ["Infrastructure Monitoring", "Virtual Machines", "Backup Routines", "Network Protocols", "Security Auditing"]
  }
];

export const projects = [
  {
    id: "black-mirage",
    title: "Operation Black Mirage",
    subtitle: "Tactical FPS Simulation Game",
    category: "Game Dev & 3D",
    featured: true,
    award: "Awarded Best Final Year Project",
    stack: ["Unreal Engine 5", "Blueprints", "Niagara VFX", "Landscape Height-Maps"],
    description:
      "A high-fidelity first-person shooter developed in Unreal Engine 5 set on a realistic height-map based Kupwara mountain terrain. Implemented procedural foliage generation, responsive combat mechanics, weapon systems, custom character animations, and tactical UI. Awarded Best Final Year Project at PAF-IAST.",
    metrics: [
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Systems", value: "Blueprints & Niagara" },
      { label: "Recognition", value: "1st Place FYP" }
    ],
    icon: "Gamepad2",
    accent: "from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-400"
  },
  {
    id: "aurum",
    title: "Aurum",
    subtitle: "Modern Web & Mobile Application",
    category: "Full Stack & Web",
    featured: true,
    award: null,
    stack: ["Next.js", "Firebase", "ShadCN UI", "Tailwind CSS"],
    description:
      "A responsive cross-platform web and mobile application crafted with Next.js and Firebase. Features clean ShadCN UI component architecture, real-time data synchronization, secure Firebase authentication, and frictionless user flows.",
    metrics: [
      { label: "Framework", value: "Next.js" },
      { label: "Backend", value: "Firebase Realtime" },
      { label: "UI System", value: "ShadCN Design" }
    ],
    icon: "Layout",
    accent: "from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-400"
  },
  {
    id: "driving-school",
    title: "Skill Driving School",
    subtitle: "Interactive Student & Booking Web Platform",
    category: "Full Stack & Web",
    featured: false,
    award: null,
    stack: ["React.js", "Tailwind CSS", "REST APIs", "Modern State Management"],
    description:
      "A dynamic, mobile-first web application designed for driving school operations. Facilitates student registrations, instructor scheduling, lesson tracking, and responsive course showcases with smooth state handling and client validation.",
    metrics: [
      { label: "Frontend", value: "React.js" },
      { label: "Design", value: "Mobile First" },
      { label: "Integration", value: "RESTful Flow" }
    ],
    icon: "Car",
    accent: "from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400"
  }
];

export const skillCategories = [
  {
    category: "System Administration & Ops",
    icon: "Server",
    color: "cyan",
    skills: [
      { name: "Windows & Linux Servers", level: "Advanced", desc: "Installation, configuration, OS hardening, patching" },
      { name: "Server & Network Monitoring", level: "Advanced", desc: "Uptime tracking, capacity planning, threshold alerting" },
      { name: "Backup & Disaster Recovery", level: "Proficient", desc: "Scheduled backups, restore testing, data integrity" },
      { name: "Patch & Vulnerability Management", level: "Proficient", desc: "CVE patching, updates, compliance verification" },
      { name: "User & Access Management (IAM)", level: "Proficient", desc: "RBAC, permissions, organizational security policies" }
    ]
  },
  {
    category: "Infrastructure & Virtualization",
    icon: "Cpu",
    color: "emerald",
    skills: [
      { name: "Data Center Operations", level: "Advanced", desc: "Rack deployment, cable management, environmental checks" },
      { name: "Virtualization & VMs", level: "Advanced", desc: "VM provisioning, hypervisors, resource allocation" },
      { name: "Hardware & Network Troubleshooting", level: "Proficient", desc: "Connectivity diagnostics, NIC bonding, RAID arrays" },
      { name: "Incident Handling & Escalation", level: "Advanced", desc: "Rapid triage, SLA management, post-mortem logs" },
      { name: "Technical Documentation", level: "Advanced", desc: "Runbooks, network topologies, configuration baselines" }
    ]
  },
  {
    category: "Frontend & Full Stack Development",
    icon: "Code2",
    color: "indigo",
    skills: [
      { name: "React.js & Next.js", level: "Advanced", desc: "SSR, SSG, component lifecycle, hooks, performance" },
      { name: "JavaScript (ES6+) & Modern Web", level: "Advanced", desc: "Async/await, DOM, modular patterns, responsive design" },
      { name: "Redux & State Architecture", level: "Proficient", desc: "Predictable state, slices, middleware, async thunks" },
      { name: "RESTful API Integration", level: "Advanced", desc: "Clean fetch abstraction, error boundaries, data caching" },
      { name: "Firebase Backend", level: "Proficient", desc: "Firestore, Authentication, Storage, security rules" }
    ]
  },
  {
    category: "UI Systems, Tools & 3D",
    icon: "Wrench",
    color: "purple",
    skills: [
      { name: "ShadCN / Tailwind CSS", level: "Advanced", desc: "Accessible headless primitives, design tokens" },
      { name: "Material UI & Chakra UI", level: "Proficient", desc: "Component theming, grid layouts, component libraries" },
      { name: "Git & Version Control", level: "Advanced", desc: "Branching strategies, code reviews, semantic commits" },
      { name: "Turborepo & Monorepos", level: "Proficient", desc: "Build caching, pipeline optimization, workspace sharing" },
      { name: "Unreal Engine 5 (Blueprints/Niagara)", level: "Proficient", desc: "Gameplay logic, particle VFX, landscape shaders" }
    ]
  }
];

export const education = {
  degree: "Bachelor of Computer Science (BS CS)",
  institution: "Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology (PAF-IAST)",
  location: "Haripur, Pakistan",
  period: "2022 - 2026",
  honors: "Awarded Best Final Year Project",
  project: {
    title: "Operation Black Mirage",
    tech: "Unreal Engine 5, Blueprints, Niagara VFX",
    description:
      "Engineered an FPS simulation featuring Kupwara-inspired real height-map terrain, procedural vegetation, realistic ballistic models, custom animation blueprints, and dynamic HUD."
  }
};

