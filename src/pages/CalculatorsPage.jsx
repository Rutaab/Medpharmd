// pages/CalculatorsPage.jsx
import React from 'react';

const CalculatorsPage = () => {
  const calculators = [
    {
      id: 1,
      name: 'BMI Calculator',
      description: 'Calculate Body Mass Index',
      icon: 'height',
    },
    {
      id: 2,
      name: 'Creatinine Clearance',
      description: 'Estimate kidney function',
      icon: 'water_drop',
    },
    {
      id: 3,
      name: 'CHADS2 Score',
      description: 'Atrial fibrillation stroke risk',
      icon: 'favorite',
    },
    {
      id: 4,
      name: 'eGFR Calculator',
      description: 'Estimated Glomerular Filtration Rate',
      icon: 'science',
    },
    {
      id: 5,
      name: 'Ideal Body Weight',
      description: 'Calculate ideal weight range',
      icon: 'scale',
    },
    {
      id: 6,
      name: 'TIMI Score',
      description: 'Risk stratification tool',
      icon: 'trending_up',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {calculators.map(calc => (
        <div 
          key={calc.id}
          className="p-4 bg-surface-container rounded-lg border border-white/10 hover:border-primary/30 transition-colors cursor-pointer"
        >
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">{calc.icon}</span>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{calc.name}</h3>
              <p className="text-label-sm text-on-surface-variant">{calc.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalculatorsPage;
