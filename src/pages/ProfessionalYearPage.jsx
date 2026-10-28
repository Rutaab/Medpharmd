import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { syllabus } from '../data/syllabusData';

const yearDescriptions = {
  '1st-professional': 'Foundation year covering organic chemistry, biochemistry, physical pharmacy, human physiology, anatomy, and pharmaceutical mathematics — building the scientific bedrock for pharmaceutical sciences.',
  '2nd-professional': 'Applied pharmaceutical sciences including dosage form design, pharmacology fundamentals, pharmacognosy of medicinal plants, and pharmaceutical microbiology.',
  '3rd-professional': 'Advanced topics in pathology, systemic pharmacology, phytochemistry, dispensing practice, and pharmaceutical instrumentation.',
  '4th-professional': 'Clinical and industrial pharmacy practice — hospital pharmacy, clinical pharmacy, industrial manufacturing, biopharmaceutics, and quality management.',
  '5th-professional': 'Final year integrating medicinal chemistry, advanced clinical pharmacy, pharmaceutical technology, forensic pharmacy, management, and computer applications.',
  'semester-1': 'Foundation semester covering physical pharmacy, organic chemistry, biochemistry, human physiology, and functional English for pharmaceutical sciences.',
  'semester-2': 'Advanced physical pharmacy, organic chemistry, biochemistry, anatomy & histology, physiology, and Islamic studies.',
  'semester-3': 'Drug delivery systems, pharmacology & therapeutics, basic pharmacognosy, pathology, and pharmaceutical microbiology.',
  'semester-4': 'Advanced drug delivery, applied microbiology, AI in pharmacology, pharmacognosy basics, Pakistan studies, and Fehm-e-Quran.',
  'semester-5': 'Applied pharmacognosy, pharmaceutical analysis, pharmacology-III, hospital and community pharmacy, quantitative reasoning, and Pakistan ideology.',
  'semester-6': 'Advanced pharmacognosy, dispensing practice, pharmaceutical analysis-II, pharmacology-IV, ICT in pharmacy, and biostatistics.',
  'semester-7': 'Industrial pharmacy, biopharmaceutics, clinical pharmacy, quality management, expository writing, and entrepreneurship.',
  'semester-8': 'Advanced industrial pharmacy, pharmacokinetics-II, clinical pharmacy-II, quality control, management and marketing, and community engagement.',
  'semester-9': 'Pharmaceutical technology, regulatory science, medicinal chemistry, advanced clinical pharmacy, and clinical pharmacology.',
  'semester-10': 'Pharmaceutical technology-II, regulatory science-II, medicinal chemistry-II, advanced clinical pharmacy-II, bioethics, and capstone project.',
};

const ProfessionalYearPage = () => {
  const { yearId } = useParams();
  const year = syllabus[yearId];

  if (!year) {
    return (
      <div className="min-h-screen bg-surface pt-8 pb-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-display text-primary mb-4">Year Not Found</h1>
          <Link to="/" className="text-secondary hover:text-primary transition-colors font-body-md text-body-md">Return to Home</Link>
        </div>
      </div>
    );
  }

  const yearIcons = { '1st-professional': 'looks_one', '2nd-professional': 'looks_two', '3rd-professional': 'looks_3', '4th-professional': 'looks_4', '5th-professional': 'looks_5', 'semester-1': 'looks_one', 'semester-2': 'looks_two', 'semester-3': 'looks_3', 'semester-4': 'looks_4', 'semester-5': 'looks_5', 'semester-6': 'looks_6', 'semester-7': 'biotech', 'semester-8': 'stethoscope', 'semester-9': 'auto_stories', 'semester-10': 'school' };

  const yearColors = {
    '1st-professional': 'bg-blue-600',
    '2nd-professional': 'bg-cyan-600',
    '3rd-professional': 'bg-violet-600',
    '4th-professional': 'bg-amber-600',
    '5th-professional': 'bg-green-600',
    'semester-1': 'bg-rose-600',
    'semester-2': 'bg-amber-500',
    'semester-3': 'bg-emerald-600',
    'semester-4': 'bg-sky-500',
    'semester-5': 'bg-violet-600',
    'semester-6': 'bg-cyan-600',
    'semester-7': 'bg-orange-600',
    'semester-8': 'bg-teal-600',
    'semester-9': 'bg-fuchsia-600',
    'semester-10': 'bg-indigo-600',
  };

  return (
    <div className="min-h-screen bg-surface pt-8 pb-12">
      <section className="mb-16">
        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${yearColors[yearId] || 'bg-primary'} mb-4`}>
            <span className="material-symbols-outlined text-3xl text-white">{yearIcons[yearId] || 'school'}</span>
          </div>
          <h1 className="font-display text-display text-primary mb-2">{year.title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {yearDescriptions[yearId] || 'Comprehensive curriculum for pharmaceutical education.'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-3xl mx-auto">
          {year.subjects.map(s => (
            <Link
              key={s.id}
              to={`/${yearId}/${s.id}`}
              className="bg-surface-container-low border border-white/5 rounded-xl p-3 text-center hover:bg-surface-container-high transition-all group"
            >
              <div className={`p-2 rounded-lg bg-gradient-to-br ${year.color} text-white inline-flex mb-2`}>
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
              <p className="font-label-caps text-label-caps text-primary">{s.title.split('(')[0].trim()}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {year.subjects.map(subject => (
            <Link
              key={subject.id}
              to={`/${yearId}/${subject.id}`}
              className="group bg-surface-container border border-outline-variant rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 active:scale-[0.98]"
            >
              <div className={`bg-gradient-to-r ${subject.color} h-1.5`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${subject.color} text-white`}>
                    <span className="material-symbols-outlined">{subject.icon}</span>
                  </div>
                  <span className="font-label-caps text-label-caps text-xs text-on-surface-variant bg-surface-container-high px-2.5 py-1 rounded-full">{subject.chapters.length} chapters</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">{subject.title}</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed line-clamp-2">{subject.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {subject.chapters.slice(0, 6).map(ch => (
                    <span key={ch.title} className="font-label-caps text-[10px] text-on-surface-variant border border-outline-variant px-1.5 py-0.5 rounded">{ch.title}</span>
                  ))}
                  {subject.chapters.length > 6 && (
                    <span className="font-label-caps text-[10px] text-secondary border border-secondary/30 px-1.5 py-0.5 rounded">+{subject.chapters.length - 6} more</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-16 border-t border-outline-variant pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <span className="material-symbols-outlined text-3xl text-primary mb-2">menu_book</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Curriculum Aligned</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Mapped to the official PharmD syllabus for structured learning</p>
          </div>
          <div>
            <span className="material-symbols-outlined text-3xl text-primary mb-2">topic</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Chapter-wise Topics</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Every subject broken down into chapters with detailed topic lists</p>
          </div>
          <div>
            <span className="material-symbols-outlined text-3xl text-primary mb-2">school</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Professional Years</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Comprehensive coverage from 1st to Final Professional year</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalYearPage;
