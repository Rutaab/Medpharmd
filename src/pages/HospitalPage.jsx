import React from 'react';

const chapters = [
  {
    id: 'formulary',
    title: 'Hospital Formulary',
    icon: 'book',
    description: 'Management of drug selection, P&T committee operations, formulary system, and therapeutic interchange.',
    topics: ['P&T Committee', 'Formulary System', 'Therapeutic Interchange', 'Non-Formulary Requests', 'Formulary Budgeting']
  },
  {
    id: 'sterile-compounding',
    title: 'Sterile Compounding',
    icon: 'biotech',
    description: 'Aseptic preparation of IV admixtures, TPN, and hazardous drugs under ISO-classified cleanrooms.',
    topics: ['Laminar Airflow', 'USP 797/800', 'IV Admixtures', 'Hazardous Drug Handling', 'Aseptic Technique', 'Cleanroom Classification']
  },
  {
    id: 'narcotic-control',
    title: 'Narcotic & Controlled Substances',
    icon: 'lock',
    description: 'Regulatory compliance, secure storage, dispensing records, and diversion prevention for controlled drugs.',
    topics: ['DEA Regulations', 'CSA Schedules', 'Controlled Substance Logs', 'Diversion Prevention', 'CDTA Compliance', 'Inventory Audit']
  },
  {
    id: 'unit-dose',
    title: 'Unit Dose System',
    icon: 'table_rows',
    description: 'Patient-specific packaging, cart-fill distribution, and bar-coded medication administration.',
    topics: ['Unit Dose Packaging', 'Cart-Fill Process', 'BCMA', 'Automated Dispensing', '24-Hour Supply', 'Cassette Exchange']
  },
  {
    id: 'clinical-pharmacy',
    title: 'Clinical Pharmacy Services',
    icon: 'stethoscope',
    description: 'Ward round participation, medication reconciliation, TDM, and antimicrobial stewardship.',
    topics: ['Ward Round Participation', 'Medication Reconciliation', 'Therapeutic Drug Monitoring', 'Antimicrobial Stewardship', 'Renal Dose Adjustment', 'Clinical Interventions']
  },
  {
    id: 'tpn',
    title: 'Total Parenteral Nutrition',
    icon: 'syringe',
    description: 'Compounding of TPN formulations, compatibility checking, and stability monitoring.',
    topics: ['TPN Formulation', 'Macronutrient Calculations', 'Electrolyte Additions', 'All-in-One Bags', 'Compatibility Checking', 'Stability Monitoring']
  },
  {
    id: 'drug-information',
    title: 'Drug Information Center',
    icon: 'library_books',
    description: 'Provision of evidence-based drug information to healthcare professionals and patients.',
    topics: ['DI Service Operations', 'Literature Evaluation', 'Formulary Monographs', 'Medication Error Reporting', 'Adverse Drug Reaction Monitoring', 'Poison Information']
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    icon: 'inventory',
    description: 'Scientific inventory control using ABC-VED analysis, expiry tracking, and procurement planning.',
    topics: ['ABC Analysis', 'VED Analysis', 'ABC-VED Matrix', 'Safety Stock', 'EOQ Model', 'Expiry Management']
  },
  {
    id: 'waste-management',
    title: 'Hospital Waste Management',
    icon: 'delete_sweep',
    description: 'Segregation, collection, treatment, and disposal of biomedical and pharmaceutical waste.',
    topics: ['Biomedical Waste Rules', 'Waste Segregation', 'Yellow/Red/Blue Categories', 'Sharp Disposal', 'Pharmaceutical Waste Disposal', 'Effluent Treatment']
  },
  {
    id: 'automation',
    title: 'Pharmacy Automation',
    icon: 'smartphone',
    description: 'ADCs, robotic dispensing, computerized order entry, and hospital information systems.',
    topics: ['Automated Dispensing Cabinets', 'Robotic Dispensing', 'CPOE', 'Barcode Scanning', 'HIS Integration', 'Pyxis/Omnicell Systems']
  }
];

const HospitalPage = () => {
  return (
    <div className="min-h-screen bg-surface pt-4 pb-24">
      <div className="mb-10">
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Core functions and services of hospital pharmacy practice — from formulary management and sterile compounding to clinical pharmacy and automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {chapters.map(ch => (
          <div
            key={ch.id}
            className="bg-surface-container-low border border-white/5 rounded-xl p-6 hover:bg-surface-container-high transition-all cursor-default group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-400 text-white">
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

export default HospitalPage;
