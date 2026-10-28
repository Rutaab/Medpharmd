import React from 'react';
import { Link } from 'react-router-dom';
import { useSystem } from '../context/SystemContext';

const professionalYears = [
  {
    id: '1st',
    title: '1st Professional',
    description: 'Pharmaceutical Chemistry-I (Organic), Pharmaceutical Biochemistry, Pharmaceutics-I (Physical Pharmacy), Physiology & Histology, Anatomy, Pharmaceutical Mathematics & Biostatistics.',
    icon: 'looks_one',
    path: '/1st-professional',
    color: 'bg-blue-600',
    count: '6 subjects',
    items: ['Pharmaceutical Chemistry-I', 'Pharmaceutical Biochemistry', 'Pharmaceutics-I', 'Physiology & Histology', 'Anatomy', 'Pharmaceutical Mathematics & Biostatistics']
  },
  {
    id: '2nd',
    title: '2nd Professional',
    description: 'Pharmaceutics-II (Pharmaceutical Preparations), Pharmacology & Therapeutics-I, Pharmacognosy-I, Pharmaceutical Microbiology, Pakistan Studies & Islamiyat.',
    icon: 'looks_two',
    path: '/2nd-professional',
    color: 'bg-cyan-600',
    count: '5 subjects',
    items: ['Pharmaceutics-II', 'Pharmacology & Therapeutics-I', 'Pharmacognosy-I', 'Pharmaceutical Microbiology', 'Pakistan Studies & Islamiyat']
  },
  {
    id: '3rd',
    title: '3rd Professional',
    description: 'Pathology, Pharmacology & Therapeutics-II, Pharmacognosy-II, Pharmaceutics-III (Dispensing & Community Pharmacy), Pharmaceutical Chemistry-II (Instrumentation).',
    icon: 'looks_3',
    path: '/3rd-professional',
    color: 'bg-violet-600',
    count: '5 subjects',
    items: ['Pathology', 'Pharmacology & Therapeutics-II', 'Pharmacognosy-II', 'Pharmaceutics-III (Dispensing)', 'Pharmaceutical Chemistry-II (Instrumentation)']
  },
  {
    id: '4th',
    title: '4th Professional',
    description: 'Pharmaceutics-IV (Hospital Pharmacy), Pharmaceutics-V (Clinical Pharmacy-I), Pharmaceutics-VI (Industrial Pharmacy), Pharmaceutics-VII (Biopharmaceutics), Pharmaceutics-VIII (Pharmaceutical Quality Management).',
    icon: 'looks_4',
    path: '/4th-professional',
    color: 'bg-amber-600',
    count: '5 subjects',
    items: ['Hospital Pharmacy', 'Clinical Pharmacy-I', 'Industrial Pharmacy', 'Biopharmaceutics', 'Pharmaceutical Quality Management']
  },
  {
    id: '5th',
    title: 'Final Professional',
    description: 'Pharmaceutical Chemistry-III (Medicinal Chemistry), Pharmaceutics-IX (Clinical Pharmacy-II), Pharmaceutical Technology, Forensic Pharmacy, Pharmaceutical Management & Marketing, Computer and its Applications in Pharmacy.',
    icon: 'looks_5',
    path: '/5th-professional',
    color: 'bg-green-600',
    count: '6 subjects',
    items: ['Medicinal Chemistry', 'Clinical Pharmacy-II', 'Pharmaceutical Technology', 'Forensic Pharmacy', 'Pharmaceutical Management & Marketing', 'Computer & its Applications']
  }
];

const semesters = [
  {
    id: 'sem1',
    title: 'Semester 1',
    description: 'Physical Pharmacy-I, Organic Chemistry-I, Biochemistry-I, Physiology-I, and Functional English for foundational pharmaceutical sciences.',
    icon: 'looks_one',
    path: '/semester-1',
    color: 'from-rose-600 to-rose-600',
    count: '5 subjects',
    items: ['Physical Pharmacy-I', 'Organic Chemistry-I', 'Biochemistry-I', 'Physiology-I', 'Functional English']
  },
  {
    id: 'sem2',
    title: 'Semester 2',
    description: 'Physical Pharmacy-II, Organic Chemistry-II, Biochemistry-II, Anatomy & Histology, Physiology-II, and Islamic Studies.',
    icon: 'looks_two',
    path: '/semester-2',
    color: 'from-amber-500 to-amber-500',
    count: '6 subjects',
    items: ['Physical Pharmacy-II', 'Organic Chemistry-II', 'Biochemistry-II', 'Anatomy & Histology', 'Physiology-II', 'Islamic Studies']
  },
  {
    id: 'sem3',
    title: 'Semester 3',
    description: 'Drug Delivery Systems-I, Pharmacology & Therapeutics-I, Pharmacognosy (Basic-I), Pathology, and Basic Pharmaceutical Microbiology.',
    icon: 'looks_3',
    path: '/semester-3',
    color: 'from-emerald-600 to-emerald-600',
    count: '5 subjects',
    items: ['Drug Delivery Systems-I', 'Pharmacology & Therapeutics-I', 'Pharmacognosy (Basic-I)', 'Pathology', 'Pharmaceutical Microbiology']
  },
  {
    id: 'sem4',
    title: 'Semester 4',
    description: 'Drug Delivery Systems-II, Applied Microbiology & Immunology, AI in Pharmacology, Pharmacognosy (Basic-II), Pakistan Studies, and Fehm-e-Quran I.',
    icon: 'looks_4',
    path: '/semester-4',
    color: 'from-sky-500 to-sky-500',
    count: '6 subjects',
    items: ['Drug Delivery Systems-II', 'Applied Microbiology & Immunology', 'AI in Pharmacology', 'Pharmacognosy (Basic-II)', 'Pakistan Studies', 'Fehm-e-Quran I']
  },
  {
    id: 'sem5',
    title: 'Semester 5',
    description: 'Applied Pharmacognosy, Pharmaceutical Analysis-I, Pharmacology & Therapeutics-III, Hospital & Community Pharmacy, Quantitative Reasoning-I, and Pakistan Studies.',
    icon: 'looks_5',
    path: '/semester-5',
    color: 'from-violet-600 to-violet-600',
    count: '7 subjects',
    items: ['Applied Pharmacognosy', 'Pharmaceutical Analysis-I', 'Pharmacology & Therapeutics-III', 'Hospital & Community Pharmacy', 'Quantitative Reasoning-I', 'Ideology & Constitution of Pakistan', 'Fehm-e-Quran II']
  },
  {
    id: 'sem6',
    title: 'Semester 6',
    description: 'Advanced Pharmacognosy, Dispensing & Social Pharmacy, Pharmaceutical Analysis-II, Pharmacology & Therapeutics-IV, ICT in Pharmacy, and Quantitative Reasoning-II.',
    icon: 'looks_6',
    path: '/semester-6',
    color: 'from-cyan-600 to-cyan-600',
    count: '6 subjects',
    items: ['Advanced Pharmacognosy', 'Dispensing & Social Pharmacy', 'Pharmaceutical Analysis-II', 'Pharmacology & Therapeutics-IV', 'ICT in Pharmacy', 'Quantitative Reasoning-II']
  },
  {
    id: 'sem7',
    title: 'Semester 7',
    description: 'Industrial Pharmacy-I, Biopharmaceutics & Pharmacokinetics-I, Clinical Pharmacy-I, Pharmaceutical Quality Management, Expository Writing, and Entrepreneurship.',
    icon: 'biotech',
    path: '/semester-7',
    color: 'from-orange-600 to-orange-600',
    count: '6 subjects',
    items: ['Industrial Pharmacy-I', 'Biopharmaceutics-I', 'Clinical Pharmacy-I', 'Quality Management', 'Expository Writing', 'Entrepreneurship']
  },
  {
    id: 'sem8',
    title: 'Semester 8',
    description: 'Industrial Pharmacy-II, Biopharmaceutics & Pharmacokinetics-II, Clinical Pharmacy-II, Quality Control, Management & Marketing, and Community Engagement.',
    icon: 'stethoscope',
    path: '/semester-8',
    color: 'from-teal-600 to-teal-600',
    count: '6 subjects',
    items: ['Industrial Pharmacy-II', 'Biopharmaceutics-II', 'Clinical Pharmacy-II', 'Quality Control', 'Management & Marketing', 'Civics & Community Engagement']
  },
  {
    id: 'sem9',
    title: 'Semester 9',
    description: 'Pharmaceutical Technology-I, Regulatory Science-I, Medicinal Chemistry-I, Advanced Clinical Pharmacy-I, and Clinical Pharmacology.',
    icon: 'auto_stories',
    path: '/semester-9',
    color: 'from-fuchsia-600 to-fuchsia-600',
    count: '5 subjects',
    items: ['Pharmaceutical Technology-I', 'Regulatory Science-I', 'Medicinal Chemistry-I', 'Advanced Clinical Pharmacy-I', 'Clinical Pharmacology']
  },
  {
    id: 'sem10',
    title: 'Semester 10',
    description: 'Pharmaceutical Technology-II, Regulatory Science-II, Medicinal Chemistry-II, Advanced Clinical Pharmacy-II, Bioethics, and Capstone Project.',
    icon: 'school',
    path: '/semester-10',
    color: 'from-indigo-600 to-indigo-600',
    count: '6 subjects',
    items: ['Pharmaceutical Technology-II', 'Regulatory Science-II', 'Medicinal Chemistry-II', 'Advanced Clinical Pharmacy-II', 'Bioethics', 'Capstone Project']
  }
];

const HomePage = () => {
  const { system } = useSystem();
  const data = system === 'year' ? professionalYears : semesters;

  return (
    <div className="min-h-screen bg-surface pt-8 pb-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-500 mb-4">
            <span className="material-symbols-outlined text-3xl text-white">local_pharmacy</span>
          </div>
          <h1 className="font-display text-display text-primary mb-2">MedPharma</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {system === 'year'
              ? 'Comprehensive pharmaceutical reference platform — select your professional year to access curated subject material.'
              : 'Comprehensive pharmaceutical reference platform — select your semester to access curated subject material.'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-3xl mx-auto">
          {data.map(s => (
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
          {data.map(section => (
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
                  {section.items.map(item => (
                    <span key={item} className="font-label-caps text-[10px] text-on-surface-variant border border-outline-variant px-1.5 py-0.5 rounded">{item}</span>
                  ))}
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
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Curriculum Aligned</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Content structured according to pharmacy professional program</p>
          </div>
          <div>
            <span className="material-symbols-outlined text-3xl text-primary mb-2">book</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Comprehensive</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Covers all core subjects across the pharmacy curriculum</p>
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

export default HomePage;
