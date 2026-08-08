'use client';

export default function Profile() {
  return (
    <div className="section animate-fade-in">
      <div className="section-title">Profile</div>
      <div className="text-gray-600 leading-relaxed space-y-3">
        <p>
          Senior frontend engineer with 7+ years building enterprise-scale web applications.
          Currently working as an independent contractor through my own consultancy, Sharply
          Technologies, delivering frontend and full-stack solutions for international clients
          on long-term engagements.
        </p>
        <p>
          Most recently, I was frontend lead on GSPT at PepsiCo, a React/TypeScript planning
          tool used across global markets for supply chain optimization, where I led the
          migration from MUI to the Peacock design system and optimized data-heavy planning
          screens for performance. Before that, I led development teams at Intelltech building
          software for major mining clients including Vale and Anglo American, with a focus on
          real-time monitoring interfaces for geological data. Scope also included CI/CD
          pipeline architecture and a GitLab to GitHub Enterprise Cloud migration across ~60
          repositories.
        </p>
        <p>
          My work spans scalable UI architecture, design system implementation, and full-stack
          development with Node.js, and I&apos;m comfortable owning full-stack concerns when a
          project calls for it. CS degree from PUC-Rio. Fluent in English, German, and
          Portuguese.
        </p>
      </div>
    </div>
  );
}