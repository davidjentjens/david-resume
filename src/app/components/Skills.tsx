'use client';

export default function Skills() {
  const skills = [
    { name: "React, TypeScript, Node.js", level: "7 years exp." },
    { name: "HTML, CSS, JavaScript", level: "7 years exp." },
    { name: "Next.js, REST APIs, C#", level: "5 years exp." },
    { name: "DevOps, CI/CD, PostgreSQL", level: "5 years exp." },
    { name: "Python, Machine Learning", level: "3 years exp." },
    { name: "Redis, MongoDB", level: "1 year exp." }
  ];

  const interests = [
    "Enterprise Web Applications",
    "Design Systems",
    "DevOps & CI/CD",
    "REST APIs",
    "Mobile Development"
  ];

  const languages = [
    { name: "Portuguese", level: "Mother tongue" },
    { name: "German", level: "Fluent" },
    { name: "English", level: "Fluent" },
    { name: "French", level: "Basic" }
  ];

  return (
    <div className="space-y-8">
      <div className="section animate-fade-in">
        <div className="section-title">Interests</div>
        <div className="space-y-2 text-gray-600 leading-relaxed">
          {interests.map((interest, index) => (
            <div key={index} className="item">{interest}</div>
          ))}
        </div>
      </div>

      <div className="section animate-fade-in">
        <div className="section-title">Skills</div>
        <div className="space-y-2 text-gray-600 leading-relaxed">
          {skills.map((skill, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-gray-600 text-sm">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section animate-fade-in">
        <div className="section-title">Languages</div>
        <div className="grid grid-cols-1 gap-2 text-gray-600 leading-relaxed">
          {languages.map((lang, index) => (
            <div key={index} className="flex justify-between py-1">
              <span>{lang.name}</span>
              <span className="text-gray-600 text-sm">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}