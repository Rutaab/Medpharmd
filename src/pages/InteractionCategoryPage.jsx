import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { interactionsData } from '../data/interactionsData';

const categories = {
  cns: {
    title: 'CNS Drugs',
    icon: 'psychology',
    description: 'Antidepressants, antiepileptics, antipsychotics, anxiolytics, antiparkinsonism, antimigraine, and CNS stimulants.',
    drugs: ['Amitriptyline', 'Clomipramine', 'Citalopram', 'Paroxetine', 'Sertraline', 'Fluoxetine', 'Carbamazepine', 'Lamotrigine', 'Phenytoin', 'Valproic Acid', 'Benztropine', 'Levodopa/Carbidopa', 'Trihexyphenidyl', 'Diazepam', 'Ergotamine', 'Sumatriptan', 'Zolmitriptan', 'Amphetamine', 'Modafinil', 'Methylphenidate']
  },
  cvs: {
    title: 'CVS Drugs',
    icon: 'favorite',
    description: 'Beta-blockers, calcium channel blockers, ARBs, cardiac glycosides, and anticoagulants.',
    drugs: ['Propranolol', 'Atenolol', 'Metoprolol', 'Amlodipine', 'Diltiazem', 'Losartan', 'Digoxin', 'Warfarin']
  },
  antidiabetic: {
    title: 'Anti-Diabetic Drugs',
    icon: 'monitor_heart',
    description: 'Biguanides and sulfonylureas for glycemic control.',
    drugs: ['Metformin', 'Glipizide']
  },
  nsaids: {
    title: 'NSAIDs',
    icon: 'healing',
    description: 'Non-steroidal anti-inflammatory drugs for pain, fever, and inflammation.',
    drugs: ['Ibuprofen', 'Diclofenac', 'Aspirin', 'Naproxen']
  },
  git: {
    title: 'GIT Drugs',
    icon: 'medication',
    description: 'Proton pump inhibitors and H2-receptor antagonists for acid-related disorders.',
    drugs: ['Omeprazole', 'Cimetidine']
  },
  respiratory: {
    title: 'Respiratory Drugs',
    icon: 'air',
    description: 'Bronchodilators and xanthine derivatives for respiratory conditions.',
    drugs: ['Theophylline']
  }
};

const InteractionCategoryPage = () => {
  const { categoryId } = useParams();
  const cat = categories[categoryId];
  const [expandedDrug, setExpandedDrug] = useState(null);

  if (!cat) {
    return (
      <div className="min-h-screen bg-surface pt-8 pb-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-display text-primary mb-4">Category Not Found</h1>
          <Link to="/interactions" className="text-secondary hover:text-primary transition-colors font-body-md text-body-md">Return to Interactions</Link>
        </div>
      </div>
    );
  }

  const totalInteractions = cat.drugs.reduce((sum, d) => sum + (interactionsData[d]?.length || 0), 0);
  const majorCount = cat.drugs.reduce((sum, d) => sum + (interactionsData[d]?.filter(i => i.severity === 'Major').length || 0), 0);
  const moderateCount = cat.drugs.reduce((sum, d) => sum + (interactionsData[d]?.filter(i => i.severity === 'Moderate').length || 0), 0);

  return (
    <div className="min-h-screen bg-surface pt-8 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-6">
          <Link to="/" className="text-secondary hover:text-primary transition-colors">
            <span className="material-symbols-outlined">home</span>
          </Link>
          <span className="text-on-surface-variant">/</span>
          <Link to="/interactions" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Interactions</Link>
          <span className="text-on-surface-variant">/</span>
          <span className="font-body-md text-primary">{cat.title}</span>
        </div>

        {/* Header */}
        <div className="flex items-start gap-5 mb-10">
          <div className="p-3.5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary">
            <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
          </div>
          <div className="flex-1">
            <h1 className="font-display text-display text-primary mb-2">{cat.title}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-4">{cat.description}</p>
            <div className="flex flex-wrap gap-3">
              <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-variant px-2.5 py-1 rounded">{cat.drugs.length} drugs</span>
              <span className="font-label-caps text-label-caps bg-error/10 text-error px-2.5 py-1 rounded">{majorCount} major</span>
              <span className="font-label-caps text-label-caps bg-secondary/10 text-secondary px-2.5 py-1 rounded">{moderateCount} moderate</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-variant px-2.5 py-1 rounded">{totalInteractions} total interactions</span>
            </div>
          </div>
        </div>

        {/* Drug List */}
        <div className="space-y-4">
          {cat.drugs.map(drug => {
            const interactions = interactionsData[drug];
            if (!interactions) return null;
            const major = interactions.filter(i => i.severity === 'Major').length;
            const moderate = interactions.filter(i => i.severity === 'Moderate').length;
            const isExpanded = expandedDrug === drug;

            return (
              <div key={drug} className="bg-surface-container border border-outline-variant rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedDrug(isExpanded ? null : drug)}
                  className="w-full flex items-center justify-between p-5 hover:bg-surface-container-high transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className={`material-symbols-outlined transition-transform ${isExpanded ? 'rotate-90' : ''} text-on-surface-variant`}>chevron_right</span>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary">{drug}</h3>
                      <div className="flex gap-2 mt-1">
                        {major > 0 && <span className="font-label-caps text-[10px] bg-error/10 text-error px-1.5 py-0.5 rounded">{major} Major</span>}
                        {moderate > 0 && <span className="font-label-caps text-[10px] bg-secondary/10 text-secondary px-1.5 py-0.5 rounded">{moderate} Moderate</span>}
                        <span className="font-label-caps text-[10px] text-on-surface-variant">{interactions.length} total</span>
                      </div>
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="overflow-x-auto no-scrollbar border-t border-outline-variant">
                    <table className="w-full clinical-table min-w-[700px]">
                      <thead>
                        <tr>
                          <th className="w-1/3">Drug Class / Agent</th>
                          <th className="w-1/2">Interaction Effect & Management</th>
                          <th className="w-24 text-center">Severity</th>
                        </tr>
                      </thead>
                      <tbody className="font-body-sm text-body-sm text-on-surface">
                        {interactions.map((item, idx) => (
                          <tr key={idx} className="hover:bg-surface-container-highest/30 transition-colors">
                            <td className="font-body-lg text-primary">{item.drugClass}</td>
                            <td>{item.effect}</td>
                            <td className="text-center">
                              <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded font-label-caps text-[10px] uppercase font-bold border ${
                                item.severity === 'Major'
                                  ? 'bg-error-container text-on-error-container border-error/20'
                                  : item.severity === 'Moderate'
                                  ? 'bg-secondary-container text-on-secondary-container border-secondary/20'
                                  : 'bg-surface-container-highest text-on-surface-variant border-outline/20'
                              }`}>{item.severity}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Back */}
        <div className="mt-10 text-center">
          <Link
            to="/interactions"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-body-md text-body-md"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to All Interaction Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InteractionCategoryPage;
