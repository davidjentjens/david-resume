'use client';

export default function References() {
  const references = [
    {
      name: "IVAN MATHIAS FILHO",
      title: "PhD Professor and Coordinator, PUC-Rio",
      contact: "ivanmf@puc-rio.br"
    },
    {
      name: "LEONARDO FORERO MENDOZA",
      title: "PhD Professor, UERJ",
      contact: "mendoza@ele.puc-rio.br"
    }
  ];

  return (
    <div className="section animate-fade-in">
      <div className="section-title">References</div>
      <div className="space-y-4">
        {references.map((ref, index) => (
          <div key={index} className="reference-item">
            <div className="font-bold text-red-700 mb-1">{ref.name}</div>
            <div className="text-gray-600 text-sm mb-1">{ref.title}</div>
            <div className="text-gray-600 text-sm">{ref.contact}</div>
          </div>
        ))}
      </div>
    </div>
  );
}