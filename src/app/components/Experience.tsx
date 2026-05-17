'use client';

import Image from 'next/image';

export default function Experience() {
  const experiences = [
    {
      title: "PEPSICO - Oct 2024 - Present",
      company: "Senior Frontend Lead",
      description: "Lead frontend development of GSPT (Global Supply Planning Tool), a React/TypeScript application used for supply chain optimization across global markets. Architect scalable UI components using PepsiCo's Peacock design system, integrate REST APIs, and coordinate with distributed backend and design teams across the US and India. Deliver features end-to-end in Agile sprints with full QA ownership.",
      logo: "/pepsico-logo.png",
      website: "https://www.pepsico.com"
    },
    {
      title: "INTELLTECH - Mar 2023 - Oct 2024",
      company: "Senior Software Engineer",
      description: "Software development and technical leadership for mining industry clients including Vale, Usiminas, and Anglo American. Scope includes GitLab-to-GitHub Enterprise Cloud migration (~60 repositories), CI/CD pipeline architecture, design system maintenance, DevOps documentation, and delivering strategic technical reports to leadership.",
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