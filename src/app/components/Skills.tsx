'use client';

export default function Skills() {
  const skillCategories = [
    { category: "Frontend", items: "React, TypeScript, Next.js, HTML, CSS, JavaScript" },
    { category: "Backend", items: "Node.js, C#, Python, REST APIs" },
    { category: "Databases", items: "PostgreSQL, Redis, MongoDB" },
    { category: "DevOps", items: "CI/CD, Git, GitHub Actions, GitLab CI" },
    { category: "Other", items: "Agile, Design Systems, Machine Learning" }
  ];

  const languages = [
    { name: "Portuguese", level: "Native" },
    { name: "German", level: "Fluent" },
    { name: "English", level: "Fluent" },
    { name: "French", level: "Basic" }
  ];

  return (
    <div className="space-y-8">
      <div className="section animate-fade-in">
        <div className="section-title">Technical Skills</div>
        <div className="space-y-3 text-gray-600 leading-relaxed">
          {skillCategories.map((group, index) => (
            <div key={index}>
              <span className="font-semibold text-gray-800">{group.category}: </span>
              <span>{group.items}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section animate-fade-in">
        <div className="section-title">Languages</div>
        <div className="space-y-1 text-gray-600 leading-relaxed">
          {languages.map((lang, index) => (
            <div key={index} className="flex justify-between py-0.5">
              <span>{lang.name}</span>
              <span className="text-gray-600 text-sm">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}