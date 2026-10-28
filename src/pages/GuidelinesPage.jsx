// pages/GuidelinesPage.jsx
import React from 'react';

const GuidelinesPage = () => {
  const guidelines = [
    {
      id: 1,
      title: 'Hypertension Management',
      organization: 'ACC/AHA',
      year: 2023,
    },
    {
      id: 2,
      title: 'Type 2 Diabetes Treatment',
      organization: 'ADA',
      year: 2023,
    },
    {
      id: 3,
      title: 'Heart Failure Management',
      organization: 'ACC/AHA',
      year: 2022,
    },
    {
      id: 4,
      title: 'Anticoagulation Therapy',
      organization: 'ACCP',
      year: 2023,
    },
    {
      id: 5,
      title: 'Infection Prevention',
      organization: 'CDC',
      year: 2023,
    },
  ];

  return (
    <div className="space-y-3">
      {guidelines.map(guideline => (
        <div 
          key={guideline.id}
          className="p-4 bg-surface-container rounded-lg border border-white/10 hover:border-primary/30 transition-colors cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{guideline.title}</h3>
              <p className="text-label-sm text-on-surface-variant">{guideline.organization}</p>
            </div>
            <span className="text-label-sm text-on-surface-variant bg-surface px-2 py-1 rounded">{guideline.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuidelinesPage;
