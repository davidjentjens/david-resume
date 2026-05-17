'use client';

export default function Profile() {
  return (
    <div className="section animate-fade-in">
      <div className="section-title">Profile</div>
      <div className="text-gray-600 leading-relaxed space-y-3">
        <p>
          Senior Frontend Lead with 7+ years building enterprise-scale web applications.
          Currently leading frontend development of GSPT (Global Seed Planning Tool) at
          PepsiCo — a React/TypeScript application used across multiple global markets for
          potato seed supply chain optimization.
        </p>
        <p>
          My work spans scalable UI architecture, design system implementation, REST API
          integration, and cross-functional collaboration with distributed teams across the
          US and India. I also have solid backend experience with Node.js, and I&apos;m
          comfortable owning full-stack concerns when the project calls for it.
        </p>
        <p>
          Previously led development teams at Intelltech building software for major mining
          industry clients including Vale, Usiminas, and Anglo American. Scope included CI/CD
          pipeline architecture and a GitLab-to-GitHub Enterprise Cloud migration across ~60
          repositories.
        </p>
        <p>
          CS degree from PUC-Rio. Certifications in Machine Learning and UX from Udacity.
          Fluent in German, English, and Portuguese.
        </p>
      </div>
    </div>
  );
}