'use client';

import Image from 'next/image';

export default function Experience() {
  const experiences = [
    {
      title: "PEPSICO - Feb 2024 - Present",
      company: "Senior Frontend Engineer",
      description: "Lead development of GSPT (Global Supply Planning Tool), managing potato supply & demand optimization for chip manufacturing worldwide. Architect scalable solutions for complex agricultural supply chain logistics.",
      logo: "/pepsico-logo.png",
      website: "https://www.pepsico.com"
    },
    {
      title: "INTELLTECH - Apr 2023 - Feb 2024",
      company: "Tech Manager (QA) & Sr. Full Stack Developer",
      description: "Led development teams & QA processes for mining industry clients. Built front-end libraries, CI/CD pipelines, and comprehensive testing frameworks (unit, integration, e2e). Managed centralized design system.",
      logo: "/intelltech-logo.jpeg",
      website: "https://intelltech.com.br"
    },
    {
      title: "PORTAL SOLAR - Jan 2023 - Apr 2023",
      company: "Full Stack Developer",
      description: "Developed SEO-optimized institutional sites with Next.js & Ruby on Rails backend. Created & maintained Solaris design system for React/React Native apps.",
      logo: "/portal-solar-logo.jpg",
      website: "https://www.portalsolar.com.br"
    },
    {
      title: "TMOV - Mar 2022 - Jan 2023",
      company: "Full Stack Developer (React + Node)",
      description: "Built transportation logistics platform connecting cargo shippers with truckers. Tech stack: React, Node.js, .NET Core, SQL Server.",
      logo: "/tmov-logo.png",
      website: "https://tmov.com.br"
    },
    {
      title: "ICA PUC-RIO - Aug 2018 - Mar 2022",
      company: "Full Stack Developer & Software Engineer Intern",
      description: "Developed React interfaces & AI solutions for enterprise clients including Petrobras & Intel. Full-stack development using React, Node.js, C#, and Python across multiple high-impact projects.",
      logo: "/ica-puc-rio-logo.jpeg",
      website: "https://ica.ele.puc-rio.br/"
    }
  ];

  return (
    <div className="section animate-fade-in">
      <div className="section-title">Work Experience</div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <a 
            key={index} 
            href={exp.website}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex items-start gap-3 cursor-pointer rounded-lg p-3 -m-3"
          >
            <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={96}
                height={96}
                className="w-full h-full object-contain"
                quality={100}
                priority
              />
            </div>
            <div className="flex-1">
              <div className="font-bold text-red-700 mb-1 group-hover:underline">{exp.title}</div>
              <div className="font-bold text-gray-800 mb-1">{exp.company}</div>
              <div className="text-gray-600 text-sm">{exp.description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}