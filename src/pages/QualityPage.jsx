import React from 'react';

const chapters = [
  {
    id: 'ich-q1',
    title: 'ICH Q1 — Stability Testing',
    icon: 'schedule',
    description: 'WHO/FDA-aligned stability protocols including long-term, accelerated, and stress studies for drug substances and products.',
    topics: ['Long-Term Testing', 'Accelerated Stability', 'Stress Studies', 'Photostability', 'In-Use Stability', 'Stability Zones']
  },
  {
    id: 'ich-q2',
    title: 'ICH Q2 — Analytical Validation',
    icon: 'checklist',
    description: 'Validation parameters for analytical procedures per ICH and FDA guidance — accuracy, precision, specificity, linearity, and robustness.',
    topics: ['Accuracy & Precision', 'Specificity', 'Linearity & Range', 'Detection Limits', 'Robustness', 'System Suitability']
  },
  {
    id: 'ich-q3',
    title: 'ICH Q3 — Impurities',
    icon: 'science',
    description: 'Control of elemental impurities, organic impurities, and residual solvents in pharmaceutical products per ICH Q3C/D and USP <232>.',
    topics: ['Elemental Impurities', 'Organic Impurities', 'Residual Solvents', 'ICH Q3C Limits', 'Leachable & Extractable', 'Degradation Products']
  },
  {
    id: 'ich-q5',
    title: 'ICH Q5 — Biotech Quality',
    icon: 'biotech',
    description: 'Quality aspects of biotechnological products including expression systems, genetic stability, and viral safety.',
    topics: ['Expression Constructs', 'Cell Banking', 'Genetic Stability', 'Viral Safety', 'Immunogenicity Assays', 'Reference Standards']
  },
  {
    id: 'ich-q6',
    title: 'ICH Q6 — Specifications',
    icon: 'fact_check',
    description: 'Setting and justification of acceptance criteria for drug substances and drug products per ICH Q6A and Q6B.',
    topics: ['Drug Substance Specs', 'Drug Product Specs', 'Release Limits', 'Shelf-Life Limits', 'Parametric Release', 'Statistical Sampling']
  },
  {
    id: 'ich-q7',
    title: 'ICH Q7 — GMP',
    icon: 'verified',
    description: 'WHO GMP and ICH Q7 guidelines for active pharmaceutical ingredient manufacturing — facilities, equipment, documentation, and QA.',
    topics: ['Facility & Equipment', 'Documentation', 'Change Control', 'Deviation Management', 'CAPA', 'Audit Readiness']
  },
  {
    id: 'ich-q8',
    title: 'ICH Q8 — Pharmaceutical Development',
    icon: 'engineering',
    description: 'Quality by Design (QbD) principles including design space, risk assessment, and control strategy development.',
    topics: ['Quality Target Product Profile', 'Critical Quality Attributes', 'Design Space', 'Risk Assessment', 'Control Strategy', 'Design of Experiments']
  },
  {
    id: 'ich-q9',
    title: 'ICH Q9 — Quality Risk Management',
    icon: 'gavel',
    description: 'Systematic risk management framework per ICH Q9 and FDA guidance — FMEA, HACCP, and risk ranking.',
    topics: ['FMEA', 'HACCP', 'PHA', 'Risk Ranking', 'Severity Assessment', 'Detectability Analysis']
  },
  {
    id: 'ich-q10',
    title: 'ICH Q10 — Pharmaceutical Quality System',
    icon: 'account_tree',
    description: 'PQS model covering CAPA, change management, management review, and performance monitoring across product lifecycle.',
    topics: ['CAPA System', 'Change Management', 'Management Review', 'Performance Monitoring', 'Quality Metrics', 'PQS Effectiveness']
  },
  {
    id: 'ich-q11',
    title: 'ICH Q11 — Drug Substance Development',
    icon: 'settings',
    description: 'Development and manufacture of drug substances with focus on process validation, starting materials, and regulatory submission.',
    topics: ['Starting Material Selection', 'Process Development', 'Process Validation', 'Control Strategy', 'Regulatory Filing', 'Lifecycle Management']
  },
  {
    id: 'ich-q12',
    title: 'ICH Q12 — Lifecycle Management',
    icon: 'loop',
    description: 'Post-approval change management framework including established conditions, PACMPs, and stability-based approaches.',
    topics: ['Established Conditions', 'PACMPs', 'Reporting Categories', 'Compliance Comparison', 'Change Risk Assessment', 'Regulatory Flexibility']
  },
  {
    id: 'ich-q13',
    title: 'ICH Q13 — Continuous Manufacturing',
    icon: 'manufacturing',
    description: 'Regulatory and quality framework for continuous manufacturing of drug substances and drug products.',
    topics: ['CM Design', 'Real-Time Release', 'Material Traceability', 'Process Dynamics', 'Batch Definition', 'Regulatory Considerations']
  },
  {
    id: 'fda-cfr',
    title: 'FDA 21 CFR 210/211 — cGMP',
    icon: 'gavel',
    description: 'FDA Current Good Manufacturing Practice regulations for finished pharmaceuticals — organization, facilities, production, and QC.',
    topics: ['Organization & Personnel', 'Building & Facilities', 'Equipment Qualification', 'Production Controls', 'Laboratory Controls', 'Records & Reports']
  },
  {
    id: 'fda-part11',
    title: 'FDA 21 CFR Part 11 — Electronic Records',
    icon: 'computer',
    description: 'FDA requirements for electronic records, digital signatures, audit trails, and computer system validation in regulated environments.',
    topics: ['Electronic Signatures', 'Audit Trails', 'System Validation', 'Data Integrity', 'User Access Controls', 'Archival & Retrieval']
  }
];

const QualityPage = () => {
  return (
    <div className="min-h-screen bg-surface pt-4 pb-24">
      <div className="mb-10">
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Quality guidelines and regulatory frameworks from ICH, WHO, and FDA governing pharmaceutical development, GMP, validation, and compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {chapters.map(ch => (
          <div
            key={ch.id}
            className="bg-surface-container-low border border-white/5 rounded-xl p-6 hover:bg-surface-container-high transition-all cursor-default group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-amber-600 to-amber-400 text-white">
                <span className="material-symbols-outlined">{ch.icon}</span>
              </div>
              <span className="font-label-caps text-[11px] text-on-surface-variant bg-surface-variant px-2 py-1 rounded">{ch.topics.length} topics</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{ch.title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">{ch.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {ch.topics.map(t => (
                <span key={t} className="font-label-caps text-[10px] text-on-surface-variant border border-outline-variant px-1.5 py-0.5 rounded">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualityPage;
