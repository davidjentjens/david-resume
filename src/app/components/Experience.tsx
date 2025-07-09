'use client';

import Image from 'next/image';

export default function Experience() {
  const experiences = [
    {
      title: "PEPSICO - February 2024 - Present",
      company: "Senior Frontend Engineer",
      description: "Leading frontend development initiatives",
      logo: "/pepsico-logo.png",
      website: "https://www.pepsico.com"
    },
    {
      title: "INTELLTECH - 2022-2024",
      company: "Senior Front-end Engineer and Manager",
      description: "Leading development and QA processes",
      logo: "/intelltech-logo.jpeg",
      website: "https://intelltech.com.br"
    },
    {
      title: "PORTAL SOLAR - 2022-2023",
      company: "Full Stack Dev - React | Next | Node | RoR",
      description: "Full-stack development with modern technologies",
      logo: "/portal-solar-logo.jpg",
      website: "https://www.portalsolar.com.br"
    },
    {
      title: "TMOV - 2021-2022",
      company: "Senior Full Stack Dev - React | Node | C#",
      description: "Senior development role with diverse tech stack",
      logo: "/tmov-logo.png",
      website: "https://tmov.com.br"
    },
    {
      title: "ICA - PETROBRAS - 2018-2021",
      company: "Full Stack Dev React | Node | C# | Django",
      description: "Full-stack development for enterprise solutions",
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
            className="item flex items-start gap-3 cursor-pointer transition-all duration-200 hover:bg-red-50 hover:scale-[1.02] rounded-lg p-3 -m-3"
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