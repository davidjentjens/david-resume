'use client';

export default function Education() {
  const educationData = [
    {
      institution: "PUC-RIO, 2018–2021",
      degree: "Bachelor of Computer Science",
      highlight: true,
      link: "https://diplomas.puc-rio.br/528.528.b376e5de2cd2"
    },
    {
      institution: "UFRJ, 2017–2018",
      degree: "BA Computer Science (transferred to PUC-Rio via scholarship)",
      highlight: false,
      link: null
    }
  ];

  const certifications = [
    {
      title: "User Experience Nanodegree",
      institution: "Udacity",
      year: "2022",
      link: "https://www.udacity.com/certificate/e/17eb15e0-7797-11ec-844f-97d3503d4891"
    },
    {
      title: "Machine Learning Engineer Nanodegree",
      institution: "Udacity",
      year: "2021",
      link: "https://www.udacity.com/certificate/e/413daa32-8b4a-11eb-adfa-2744b3773881"
    },
    {
      title: "Introduction to Machine Learning with TensorFlow",
      institution: "Udacity",
      year: "2020",
      link: "https://www.udacity.com/certificate/e/cd4f56f6-34d8-11eb-9781-27f88f0343e0"
    }
  ];

  return (
    <>
      <div className="section animate-fade-in">
        <div className="section-title">Education</div>
        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <div key={index} className="item">
              <div className="font-bold text-red-700 mb-1">{edu.institution}</div>
              <div className="text-gray-600 text-sm">{edu.degree}</div>
              {edu.link && (
                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 text-sm hover:underline mt-1 inline-block"
                >
                  Verified Digital Diploma ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="section animate-fade-in">
        <div className="section-title">Certifications</div>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="item">
              <div className="font-bold text-red-700 mb-1">{cert.title}</div>
              <div className="text-gray-600 text-sm">{cert.institution}, {cert.year}</div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 text-sm hover:underline"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}