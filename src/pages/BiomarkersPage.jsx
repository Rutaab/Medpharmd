import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { biomarkerCategories } from '../data/markers';

const BiomarkersPage = () => {
  const [activeCategory, setActiveCategory] = useState('cardiac');

  const currentCategory = biomarkerCategories[activeCategory];

  const elevationFields = (biomarker) => {
    const fields = [];
    if (biomarker.riseTime) fields.push({ label: 'Rise Time', value: biomarker.riseTime, key: 'riseTime' });
    if (biomarker.peakTime) fields.push({ label: 'Peak Time', value: biomarker.peakTime, key: 'peak' });
    if (biomarker.returnToNormal) fields.push({ label: 'Return to Normal', value: biomarker.returnToNormal, key: 'normal' });
    return fields;
  };

  const levelFields = (biomarker) => {
    const levels = [];
    if (biomarker.mildElevation) levels.push({ label: 'Mild', value: biomarker.mildElevation });
    if (biomarker.moderateElevation) levels.push({ label: 'Moderate', value: biomarker.moderateElevation });
    if (biomarker.severeElevation) levels.push({ label: 'Severe', value: biomarker.severeElevation });
    if (biomarker.mildHypoalbuminemia) levels.push({ label: 'Mild', value: biomarker.mildHypoalbuminemia });
    if (biomarker.moderateHypoalbuminemia) levels.push({ label: 'Moderate', value: biomarker.moderateHypoalbuminemia });
    if (biomarker.severeHypoalbuminemia) levels.push({ label: 'Severe', value: biomarker.severeHypoalbuminemia });
    if (biomarker.mildProlongation) levels.push({ label: 'Mild', value: biomarker.mildProlongation });
    if (biomarker.moderateProlongation) levels.push({ label: 'Moderate', value: biomarker.moderateProlongation });
    if (biomarker.severeProlongation) levels.push({ label: 'Severe', value: biomarker.severeProlongation });
    if (biomarker.mildAnemia) levels.push({ label: 'Mild Anemia', value: biomarker.mildAnemia });
    if (biomarker.moderateAnemia) levels.push({ label: 'Moderate Anemia', value: biomarker.moderateAnemia });
    if (biomarker.severeAnemia) levels.push({ label: 'Severe Anemia', value: biomarker.severeAnemia });
    if (biomarker.mildHyponatremia) levels.push({ label: 'Mild Hyponatremia', value: biomarker.mildHyponatremia });
    if (biomarker.moderateHyponatremia) levels.push({ label: 'Moderate Hyponatremia', value: biomarker.moderateHyponatremia });
    if (biomarker.severeHyponatremia) levels.push({ label: 'Severe Hyponatremia', value: biomarker.severeHyponatremia });
    if (biomarker.mildHyperkalemia) levels.push({ label: 'Mild Hyperkalemia', value: biomarker.mildHyperkalemia });
    if (biomarker.moderateHyperkalemia) levels.push({ label: 'Moderate Hyperkalemia', value: biomarker.moderateHyperkalemia });
    if (biomarker.severeHyperkalemia) levels.push({ label: 'Severe Hyperkalemia', value: biomarker.severeHyperkalemia });
    if (biomarker.mildlyReduced) levels.push({ label: 'Mildly Reduced', value: biomarker.mildlyReduced });
    if (biomarker.moderatelyReduced) levels.push({ label: 'Moderately Reduced', value: biomarker.moderatelyReduced });
    if (biomarker.severelyReduced) levels.push({ label: 'Severely Reduced', value: biomarker.severelyReduced });
    if (biomarker.kidneyFailure) levels.push({ label: 'Kidney Failure', value: biomarker.kidneyFailure });
    if (biomarker.prediabetes) levels.push({ label: 'Prediabetes', value: biomarker.prediabetes });
    if (biomarker.diabetes) levels.push({ label: 'Diabetes', value: biomarker.diabetes });
    if (biomarker.wellControlled) levels.push({ label: 'Well Controlled', value: biomarker.wellControlled });
    if (biomarker.elevated) levels.push({ label: 'Elevated', value: biomarker.elevated });
    if (biomarker.suppressed) levels.push({ label: 'Suppressed', value: biomarker.suppressed });
    if (biomarker.impaired) levels.push({ label: 'Impaired', value: biomarker.impaired });
    if (biomarker.diabetic) levels.push({ label: 'Diabetic', value: biomarker.diabetic });
    if (biomarker.leukocytosis) levels.push({ label: 'Leukocytosis', value: biomarker.leukocytosis });
    if (biomarker.leukopenia) levels.push({ label: 'Leukopenia', value: biomarker.leukopenia });
    if (biomarker.thrombocytopenia) levels.push({ label: 'Thrombocytopenia', value: biomarker.thrombocytopenia });
    if (biomarker.severeThrombocytopenia) levels.push({ label: 'Severe Thrombocytopenia', value: biomarker.severeThrombocytopenia });
    if (biomarker.thrombocytosis) levels.push({ label: 'Thrombocytosis', value: biomarker.thrombocytosis });
    return levels;
  };

  return (
    <div className="min-h-screen bg-surface pt-8 pb-24 px-4">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Link to="/" className="text-secondary hover:text-primary transition-colors">
            <span className="material-symbols-outlined">home</span>
          </Link>
          <span className="text-on-surface-variant">/</span>
          <span className="font-body-md text-on-surface-variant">Biomarkers</span>
        </div>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Comprehensive guide to clinical biomarkers across cardiac, pulmonary, liver, renal, hematology, and endocrine systems
        </p>
      </div>

      <div className="max-w-7xl mx-auto mb-8 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 border-b border-outline-variant pb-4 min-w-max">
          {Object.entries(biomarkerCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`font-body-lg text-body-lg pb-2 px-4 border-b-2 transition-all whitespace-nowrap ${
                activeCategory === key
                  ? 'text-primary border-primary'
                  : 'text-on-surface-variant border-transparent hover:text-primary'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="font-body-md text-body-md text-on-surface-variant">{currentCategory.description}</p>
        </div>

        <div className="space-y-6">
          {currentCategory.biomarkers.map((biomarker, idx) => (
            <div key={idx} className="bg-surface-container border border-outline-variant rounded-lg overflow-hidden hover:border-primary/30 transition-all">
              <div className="bg-surface-container-high p-6 border-b border-outline-variant">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-headline-md text-headline-md text-primary mb-1">{biomarker.name}</h3>
                    <p className="font-body-sm text-body-sm text-secondary">{biomarker.type}</p>
                  </div>
                  <span className="material-symbols-outlined text-primary">science</span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-surface-container p-4 rounded border border-outline-variant">
                    <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">Normal Range</p>
                    <p className="font-body-lg text-body-lg text-primary">{biomarker.normalRange}</p>
                  </div>
                  {elevationFields(biomarker).map((field) => (
                    <div key={field.key} className="bg-surface-container p-4 rounded border border-outline-variant">
                      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">{field.label}</p>
                      <p className="font-body-lg text-body-lg text-primary">{field.value}</p>
                    </div>
                  ))}
                </div>

                {levelFields(biomarker).length > 0 && (
                  <div>
                    <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-3">Elevation / Severity Levels</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {levelFields(biomarker).map((level, i) => (
                        <div key={i} className="bg-surface-container p-3 rounded border border-outline-variant">
                          <p className="font-label-caps text-label-caps text-secondary uppercase mb-1">{level.label}</p>
                          <p className="font-body-md text-body-md text-on-surface">{level.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-3">Clinical Significance</h4>
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">{biomarker.clinicalSignificance}</p>
                </div>

                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-3">Clinical Uses</h4>
                  <ul className="space-y-2">
                    {biomarker.uses.map((use, i) => (
                      <li key={i} className="flex gap-3 font-body-md text-body-md text-on-surface">
                        <span className="text-secondary mt-1">▸</span>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {biomarker.diseases && biomarker.diseases.length > 0 && (
                  <div>
                    <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-3">Associated Conditions</h4>
                    <div className="flex flex-wrap gap-2">
                      {biomarker.diseases.map((disease, i) => (
                        <span key={i} className="bg-secondary-container/20 text-secondary font-body-sm text-body-sm px-3 py-1 rounded-full border border-secondary/20">
                          {disease}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-secondary-container/10 border border-secondary/30 rounded-lg p-4">
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    <span className="font-body-lg text-secondary">Note: </span>
                    {biomarker.notes}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16">
        <div className="bg-surface-container border border-outline-variant rounded-lg p-8">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Interpretation Guidelines</h2>
          <div className="space-y-4 font-body-md text-body-md text-on-surface">
            <p>
              <span className="text-primary font-body-lg">Serial Measurements:</span> Single biomarker values should be interpreted with clinical context. Serial measurements often more valuable than isolated results.
            </p>
            <p>
              <span className="text-primary font-body-lg">Cutoff Variability:</span> Reference ranges vary by laboratory, assay, and institution. Always refer to your laboratory's specific reference ranges.
            </p>
            <p>
              <span className="text-primary font-body-lg">Clinical Correlation:</span> Biomarker results should always be correlated with patient presentation, symptoms, and other clinical findings.
            </p>
            <p>
              <span className="text-primary font-body-lg">Age and Demographics:</span> Age-adjusted cutoffs should be used for some biomarkers. Demographics and comorbidities influence interpretation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiomarkersPage;
