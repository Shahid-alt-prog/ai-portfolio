import type {
  Experience,
  Education,
  Skill,
  Achievement,
  Service,
  Project,
  Strength,
} from "@/types";

export const personalInfo = {
  name: "Shahid Ahmed",
  role: "Technical Support Engineer",
  location: "Bangalore, Karnataka",
  email: "shahidahmed542k@gmail.com",
  phone: "+91 9739319213",
  summary:
    "Technical Support Engineer with experience in IT Service Management (ITSM) and enterprise support operations. Skilled in Incident Management, Problem Management, Root Cause Analysis, SLA Compliance, and End-User Support.",
};

export const rotatingRoles = [
  "Technical Support Engineer",
  "Enterprise Support Specialist",
  "IT Service Management Professional",
  "AI Automation Enthusiast",
  "ServiceNow Administrator",
];

export const experience: Experience[] = [
  {
    company: "Unisys Corporation",
    client: "UL Solutions",
    role: "Associate Technical Service Desk",
    duration: "Jan 2026 – Apr 2026",
    location: "Bangalore, India",
    responsibilities: [
      "Provided L1 technical support for enterprise end-users across global operations",
      "Managed ServiceNow incident management lifecycle from creation to resolution",
      "Handled incident categorization, prioritization, and escalation workflows",
      "Ensured SLA compliance and maintained service quality standards",
      "Administered Active Directory: password resets, account unlocks, group management",
      "Troubleshot VPN connectivity issues and client configuration problems",
      "Resolved Outlook and Microsoft Teams technical issues",
      "Provided Citrix virtual desktop support and session troubleshooting",
      "Performed DNS validation and network connectivity diagnostics",
      "Used TeamViewer Tensor for remote support sessions",
      "Coordinated with resolver groups for complex issue escalation",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Sri Siddhartha Institute of Technology",
    duration: "2022 – 2024",
    grade: "CGPA: 9.2",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Seshadripuram Degree College",
    duration: "2018 – 2021",
    grade: "CGPA: 7.8",
  },
];

export const skills: Skill[] = [
  { name: "ServiceNow", category: "itsm" },
  { name: "Active Directory", category: "systems" },
  { name: "VPN", category: "networking" },
  { name: "Citrix", category: "virtualization" },
  { name: "DNS", category: "networking" },
  { name: "TCP/IP", category: "networking" },
  { name: "Networking", category: "networking" },
  { name: "Outlook", category: "microsoft" },
  { name: "Microsoft Teams", category: "microsoft" },
  { name: "Excel", category: "microsoft" },
  { name: "Word", category: "microsoft" },
  { name: "Oracle", category: "database" },
  { name: "TeamViewer Tensor", category: "remote" },
  { name: "Windows 10", category: "systems" },
  { name: "Windows 11", category: "systems" },
  { name: "AI Automation", category: "ai" },
];

export const achievements: Achievement[] = [
  { value: 25, suffix: "+", label: "Daily Incidents Resolved" },
  { value: 99, suffix: "%", label: "SLA Compliance Focus" },
  { value: 100, suffix: "+", label: "Troubleshooting Cases" },
  { value: 10, suffix: "+", label: "Enterprise Technologies" },
];

export const services: Service[] = [
  { title: "IT Support", description: "L1/L2 technical support for enterprise end-users with rapid resolution", icon: "monitor" },
  { title: "Incident Management", description: "Full lifecycle incident management in ServiceNow", icon: "alert" },
  { title: "AI Automation", description: "Building intelligent systems for IT operations and support", icon: "cpu" },
  { title: "Enterprise Troubleshooting", description: "Complex multi-system diagnostics and root cause analysis", icon: "search" },
  { title: "Network Support", description: "VPN, DNS, TCP/IP connectivity troubleshooting", icon: "wifi" },
  { title: "Microsoft 365", description: "Outlook, Teams, and Office suite administration", icon: "mail" },
  { title: "ServiceNow Operations", description: "Incident, problem, and change management workflows", icon: "settings" },
  { title: "Remote Support", description: "TeamViewer Tensor and Citrix remote session management", icon: "remote" },
];

export const projects: Project[] = [
  { title: "AI Support Assistant", description: "Intelligent chatbot for enterprise IT support automation", tags: ["AI", "NLP", "ITSM"] },
  { title: "Smart Ticket Classifier", description: "ML-powered incident categorization and prioritization system", tags: ["ML", "ServiceNow", "Python"] },
  { title: "IT Automation Dashboard", description: "Real-time monitoring and automated incident response platform", tags: ["Dashboard", "Automation", "React"] },
  { title: "AI Monitoring System", description: "Proactive system health monitoring with predictive alerts", tags: ["AI", "Monitoring", "Analytics"] },
  { title: "Resume Recruiter Assistant", description: "AI-powered portfolio chatbot with Groq LLM integration", tags: ["AI", "Groq", "Next.js"] },
];

export const strengths: Strength[] = [
  { title: "Troubleshooting", description: "Systematic approach to diagnosing and resolving complex technical issues" },
  { title: "Root Cause Analysis", description: "Deep investigation methodology to prevent recurring incidents" },
  { title: "High-Volume Handling", description: "Efficiently managing 20-30+ daily incidents while maintaining quality" },
  { title: "Communication", description: "Clear technical communication with both technical and non-technical stakeholders" },
  { title: "Customer Focus", description: "User-centric approach ensuring satisfaction and service excellence" },
  { title: "Quick Learning", description: "Rapid adaptation to new technologies and enterprise environments" },
];

export const dashboardScenarios = [
  { title: "Outlook Sync Issues", status: "resolved", severity: "medium", description: "Diagnosed OST corruption and rebuilt Outlook profile" },
  { title: "VPN Client Failure", status: "resolved", severity: "high", description: "Resolved split-tunnel configuration and credential conflicts" },
  { title: "Teams Auth Error", status: "resolved", severity: "medium", description: "Cleared cached credentials and reset MFA tokens" },
  { title: "Citrix Session Drop", status: "resolved", severity: "high", description: "Fixed session timeout and virtual channel errors" },
  { title: "AD Account Lockout", status: "resolved", severity: "low", description: "Identified rogue service account causing lockouts" },
  { title: "DNS Resolution Fail", status: "resolved", severity: "medium", description: "Corrected DNS forwarder configuration" },
];

export const suggestedPrompts = [
  "Explain Shahid's ServiceNow experience",
  "What networking skills does Shahid have?",
  "Walk through a VPN troubleshooting workflow",
  "Describe enterprise support experience",
  "How does Shahid handle SLA compliance?",
  "Explain Citrix troubleshooting approach",
  "What Active Directory administration skills does Shahid have?",
  "Describe a complex troubleshooting scenario",
];

export const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
