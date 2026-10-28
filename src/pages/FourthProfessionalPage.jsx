import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    id: 'clinical',
    title: 'Clinical Reference',
    description: 'Drug information, diseases, biomarkers, lab tests, interactions, guidelines, and calculators for clinical practice.',
    icon: 'stethoscope',
    path: '/4th-professional/clinical-pharmacy-i',
    color: 'from-blue-600 to-blue-400',
    count: '7 modules',
    items: ['Drug Reference', 'Diseases', 'Biomarkers', 'Lab Tests', 'Interactions', 'Guidelines', 'Calculators']
  },
  {
    id: 'industrial',
    title: 'Pharmaceutical Industry',
    description: 'Unit operations and manufacturing processes — milling, mixing, drying, evaporation, filtration, crystallization, and more.',
    icon: 'precision_manufacturing',
    path: '/4th-professional/industrial-pharmacy',
    color: 'from-cyan-600 to-cyan-400',
    count: '12 chapters',
    items: ['Milling', 'Mixing', 'Drying', 'Evaporation', 'Filtration', 'Crystallization', 'Extraction', 'Distillation', 'Comminution', 'Clarification', 'Tablet Compression', 'Coating']
  },
  {
    id: 'biopharmaceutical',
    title: 'Biopharmaceuticals',
    description: 'Monoclonal antibodies, recombinant proteins, vaccines, gene therapy, cell culture, and immunotherapy.',
    icon: 'biotech',
    path: '/4th-professional/biopharmaceutics',
    color: 'from-violet-600 to-violet-400',
    count: '10 chapters',
    items: ['Monoclonal Antibodies', 'Recombinant Proteins', 'Vaccines', 'Gene Therapy', 'Cell Culture', 'Downstream Processing', 'Bioprocess Engineering', 'Biosimilars', 'Tissue Engineering', 'Immunotherapy']
  },
  {
    id: 'quality',
    title: 'Pharmaceutical Quality',
    description: 'ICH guidelines, FDA regulations, GMP, quality risk management, validation, and compliance frameworks.',
    icon: 'verified',
    path: '/4th-professional/pharmaceutical-quality-management',
    color: 'from-amber-600 to-amber-400',
    count: '14 guidelines',
    items: ['ICH Q1–Q13', 'FDA 21 CFR 210/211', 'FDA Part 11', 'GMP', 'Quality Risk Management', 'Pharmaceutical Development', 'Continuous Manufacturing']
  },
  {
    id: 'hospital',
    title: 'Hospital Pharmacy',
    description: 'Formulary management, sterile compounding, narcotic control, clinical pharmacy, TPN, and pharmacy automation.',
    icon: 'local_hospital',
    path: '/4th-professional/hospital-pharmacy',
    color: 'from-emerald-600 to-emerald-400',
    count: '10 chapters',
    items: ['Formulary', 'Sterile Compounding', 'Narcotic Control', 'Unit Dose', 'Clinical Pharmacy', 'TPN', 'Drug Information', 'Inventory', 'Waste Management', 'Automation']
  }
];

const FourthProfessionalPage = () => {
  return (
    <div className="min-h-screen bg-surface pt-8 pb-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-600 mb-4">
            <span className="material-symbols-outlined text-3xl text-white">looks_4</span>
          </div>
          <h1 className="font-display text-display text-primary mb-2">4th Professional</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Comprehensive pharmaceutical reference platform — from clinical practice and drug information to industrial manufacturing, biopharmaceuticals, quality compliance, and hospital pharmacy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-3xl mx-auto">
          {sections.map(s => (
            <Link
              key={s.id}
              to={s.path}
              className="bg-surface-container-low border border-white/5 rounded-xl p-3 text-center hover:bg-surface-container-high transition-all group"
            >
              <div className={`p-2 rounded-lg bg-gradient-to-br ${s.color} text-white inline-flex mb-2`}>
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
              <p className="font-label-caps text-label-caps text-primary">{s.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Section Cards */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map(section => (
            <Link
              key={section.id}
              to={section.path}
              className="group bg-surface-container border border-outline-variant rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 active:scale-[0.98]"
            >
              <div className={`bg-gradient-to-r ${section.color} h-1.5`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${section.color} text-white`}>
                    <span className="material-symbols-outlined">{section.icon}</span>
                  </div>
                  <span className="font-label-caps text-label-caps text-xs text-on-surface-variant bg-surface-container-high px-2.5 py-1 rounded-full">{section.count}</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">{section.title}</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">{section.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {section.items.slice(0, 6).map(item => (
                    <span key={item} className="font-label-caps text-[10px] text-on-surface-variant border border-outline-variant px-1.5 py-0.5 rounded">{item}</span>
                  ))}
                  {section.items.length > 6 && (
                    <span className="font-label-caps text-[10px] text-secondary border border-secondary/30 px-1.5 py-0.5 rounded">+{section.items.length - 6} more</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom Info */}
      <section className="max-w-7xl mx-auto mt-16 border-t border-outline-variant pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <span className="material-symbols-outlined text-3xl text-primary mb-2">school</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">For Professionals</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Designed for pharmacists, clinicians, and pharmaceutical scientists</p>
          </div>
          <div>
            <span className="material-symbols-outlined text-3xl text-primary mb-2">book</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Comprehensive</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Covers clinical, industrial, biopharmaceutical, quality, and hospital domains</p>
          </div>
          <div>
            <span className="material-symbols-outlined text-3xl text-primary mb-2">updated</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Evidence-Based</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">References aligned with WHO, FDA, ICH, and international guidelines</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FourthProfessionalPage;
