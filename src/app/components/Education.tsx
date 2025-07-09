'use client';

export default function Education() {
  const educationData = [
    {
      institution: "PUC-RIO, 2018-2021",
      degree: "BA Computer Science"
    },
    {
      institution: "UDACITY - 2020-2021",
      degree: "Artificial Intelligence Nanodegree with Python and TensorFlow"
    },
    {
      institution: "UFRJ - 2017 - 2018",
      degree: "BA Computer Science, transferred to PUC-Rio via scholarship in 2018"
    }
  ];

  return (
    <div className="section animate-fade-in">
      <div className="section-title">Education</div>
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <div key={index} className="item">
            <div className="font-bold text-red-700 mb-1">{edu.institution}</div>
            <div className="text-gray-600 text-sm">{edu.degree}</div>
          </div>
        ))}
      </div>
    </div>
  );
}