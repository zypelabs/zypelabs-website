// lib/data.ts
import { Brain, Cpu, Layers, Database, Users, Cloud, Building2, Activity, Heart, ShoppingCart, TrendingUp, Rocket } from 'lucide-react';

export const siteConfig = {
  name: "ZYPELabs Technologies",
  tagline: "Transform Your Enterprise with AI-Powered Intelligence",
  description: "ZYPELabs delivers enterprise-grade AI solutions, automation, and digital transformation services that drive measurable business outcomes.",
  metrics: [
    { value: "500+", label: "Projects Delivered" },
    { value: "150+", label: "Enterprise Clients" },
    { value: "50+", label: "Technology Expertise" },
    { value: "15+", label: "Countries Served" },
  ],
  services: [
    {
      slug: "ai-intelligent-solutions",
      title: "AI & Intelligent Solutions",
      icon: Brain,
      shortDesc: "Custom AI applications, generative AI, and predictive analytics.",
      fullDesc: "We build custom AI engines that transform data into actionable intelligence. From Generative AI chatbots to predictive ML models, our solutions are designed for enterprise scale.",
      features: ["Custom LLM Development", "Predictive Analytics", "Computer Vision", "NLP & Chatbots"]
    },
    {
      slug: "automation-digital-transformation",
      title: "Automation & Digital Transformation",
      icon: Cpu,
      shortDesc: "RPA, workflow automation, and enterprise modernization.",
      fullDesc: "Streamline operations with intelligent automation. We replace manual processes with efficient, error-free digital workflows.",
      features: ["Robotic Process Automation (RPA)", "Workflow Optimization", "Legacy Modernization", "Process Mining"]
    },
    {
      slug: "no-code-low-code",
      title: "No-Code / Low-Code Development",
      icon: Layers,
      shortDesc: "Rapid application development and internal tools.",
      fullDesc: "Accelerate time-to-market with rapid development platforms. We build robust internal tools and MVPs without the bloat.",
      features: ["Internal Dashboards", "Rapid Prototyping", "Business Process Apps", "Citizen Developer Enablement"]
    },
    {
      slug: "enterprise-sap",
      title: "Enterprise Technology & SAP",
      icon: Database,
      shortDesc: "SAP implementation, migration, and managed services.",
      fullDesc: "Expert guidance through complex enterprise landscapes. We ensure your SAP and core systems are optimized, secure, and integrated.",
      features: ["SAP S/4HANA Migration", "ERP Implementation", "System Integration", "Managed Support"]
    },
    {
      slug: "technology-staffing",
      title: "Technology Staffing",
      icon: Users,
      shortDesc: "Dedicated teams, contract staffing, and talent augmentation.",
      fullDesc: "Access top-tier global talent instantly. We provide vetted experts in AI, Cloud, SAP, and Full-Stack development.",
      features: ["Dedicated Remote Teams", "Contract-to-Hire", "Specialized Skill Augmentation", "Global Delivery Centers"]
    },
    {
      slug: "cloud-data-integration",
      title: "Cloud, Data & Integration",
      icon: Cloud,
      shortDesc: "Cloud migration, data engineering, and API integration.",
      fullDesc: "Build a resilient cloud foundation. We handle migration, data warehousing, and seamless API ecosystems.",
      features: ["Cloud Migration (AWS/Azure)", "Data Warehousing", "API Management", "DevOps Automation"]
    },
  ],
  industries: [
    { slug: "real-estate", title: "Real Estate & PropTech", icon: Building2, desc: "Smart buildings, property management AI, and investment analytics." },
    { slug: "manufacturing", title: "Manufacturing", icon: Activity, desc: "Predictive maintenance, supply chain optimization, and IoT integration." },
    { slug: "healthcare", title: "Healthcare", icon: Heart, desc: "Patient data interoperability, diagnostic AI, and telemedicine platforms." },
    { slug: "retail", title: "Retail & E-commerce", icon: ShoppingCart, desc: "Personalized shopping experiences, inventory AI, and omnichannel integration." },
    { slug: "finance", title: "Finance & Banking", icon: TrendingUp, desc: "Fraud detection, algorithmic trading, and regulatory compliance automation." },
    { slug: "startups", title: "Startups & SMEs", icon: Rocket, desc: "MVP development, scalable cloud architecture, and rapid growth strategies." },
  ]
};