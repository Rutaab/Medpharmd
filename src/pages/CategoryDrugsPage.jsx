// pages/CategoryDrugsPage.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { drugs } from '../data/drugs';

const CategoryDrugsPage = () => {
  const { categoryId } = useParams();
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const category = categories.find(c => c.id === categoryId);
  const categoryDrugs = drugs.filter(drug => drug.categoryId === categoryId);
  const subCategory = selectedSubCategory ? category?.subCategories?.find(s => s.id === selectedSubCategory) : null;
  const filteredDrugs = selectedSubCategory
    ? categoryDrugs.filter(d => d.subCategoryId === selectedSubCategory)
    : categoryDrugs;

  if (!category) {
    return <div className="text-center text-on-surface-variant">Category not found</div>;
  }

  const getTagForDrug = (drug) => {
    if (drug.isCommonlyPrescribed) return { text: 'Commonly Prescribed', variant: 'secondary' };
    if (drug.isOTCAndRx) return { text: 'OTC + Rx', variant: 'surface' };
    if (drug.isRxOnly) return { text: 'Rx Only', variant: 'surface' };
    return null;
  };

  const getSubCategoryIcon = (subId) => {
    const icons = {
      'salicylates': 'science',
      'propionic-acids': 'biotech',
      'acetic-acids': 'local_laboratory',
      'fenamates': 'science',
      'oxicams': 'schedule',
      'coxibs': 'verified',
      'pyrazolones': 'warning_amber',
      'penicillins': 'shield',
      'cephalosporins-1': 'layers',
      'cephalosporins-2': 'layers',
      'cephalosporins-3': 'layers',
      'cephalosporins-4': 'layers',
      'macrolides': 'biotech',
      'fluoroquinolones': 'dna',
      'tetracyclines': 'science',
      'aminoglycosides': 'biotech',
      'carbapenems': 'shield',
      'para-aminophenols': 'thermostat',
      'pyrazolone-antipyretics': 'warning_amber',
      'combination-products': 'pharmacy',
      'other-antipyretics': 'category',
      'opioids-strong': 'medication',
      'opioids-moderate': 'medication',
      'agonist-antagonists': 'balance',
      'opioid-antagonists': 'block',
      'central-analgesics': 'psychiatry',
      'adjuvant-antidepressants': 'sentiment_satisfied',
      'adjuvant-anticonvulsants': 'bolt',
      'topical-analgesics': 'spa',
      'antimigraine': 'lightbulb',
      'combination-analgesics': 'pharmacy',
      'other-analgesics': 'category',
      'anti-herpes': 'healing',
      'anti-influenza': 'flu',
      'anti-hiv-nrti': 'dna',
      'anti-hiv-nnrti': 'dna',
      'anti-hiv-protease': 'science',
      'anti-hiv-integrase': 'integration_instructions',
      'anti-hcv': 'hepatitis',
      'anti-cmv': 'healing',
      'other-antivirals': 'category',
      'others': 'category'
    };
    return icons[subId] || 'medication';
  };

  const renderDrugCard = (drug) => {
    const tag = getTagForDrug(drug);
    return (
      <Link
        key={drug.id}
        to={`/drug/${drug.id}`}
        className="group bg-[#1E1E1E] p-4 rounded-lg border border-white/5 hover:border-secondary/30 transition-all cursor-pointer active:scale-[0.98] block"
      >
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">
              {drug.genericName}
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant italic">{drug.brandNames}</p>
          </div>
          {tag && (
            <span className={`${
              tag.variant === 'secondary' 
                ? 'bg-secondary-container text-on-secondary-container' 
                : 'bg-surface-container-highest text-on-surface-variant'
            } px-3 py-1 rounded-full font-label-caps text-label-caps flex items-center gap-1 text-[11px]`}>
              {tag.variant === 'secondary' && (
                <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              )}
              {tag.text}
            </span>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div>
            <span className="block font-label-caps text-label-caps text-outline uppercase text-[10px] mb-0.5">Primary Indication</span>
            <span className="font-body-sm text-body-sm text-on-surface">{drug.primaryIndication}</span>
          </div>
          <div>
            <span className="block font-label-caps text-label-caps text-outline uppercase text-[10px] mb-0.5">
              {drug.specialField ? drug.specialField.label : 'Dosing Form'}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface">
              {drug.specialField ? drug.specialField.value : drug.dosageForm}
            </span>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <>
      {/* Category Summary Header */}
      <div className="mb-8 p-6 bg-surface-container rounded-lg border border-white/5">
        {subCategory && (
          <button
            onClick={() => setSelectedSubCategory(null)}
            className="inline-flex items-center gap-1 mb-3 font-label-caps text-label-caps text-primary hover:text-secondary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to all {category.name}
          </button>
        )}
        <div className="flex items-center justify-between mb-2">
          <span className="font-label-caps text-label-caps text-secondary uppercase">
            {subCategory ? subCategory.name : 'Pharmacological Class'}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {subCategory ? `${filteredDrugs.length} drugs` : `${category.drugCount} Results`}
          </span>
        </div>
        <h2 className="font-display-mobile md:font-display text-display-mobile md:text-display text-primary mb-2">
          {subCategory ? subCategory.name : category.name}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {subCategory ? subCategory.description : category.description}
        </p>
        {!subCategory && category.subCategories && (
          <div className="flex flex-wrap gap-2 mt-4">
            {category.subCategories.map(sub => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubCategory(sub.id)}
                className="font-label-caps text-[11px] text-primary bg-primary/10 hover:bg-primary/20 px-2.5 py-1.5 rounded uppercase tracking-wider transition-colors"
              >
                {sub.name} ({sub.drugCount})
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Drug List */}
      {selectedSubCategory ? (
        <section className="space-y-3">
          {filteredDrugs.length === 0 ? (
            <p className="text-center text-on-surface-variant py-8">No drugs found in this subcategory.</p>
          ) : (
            filteredDrugs.map(renderDrugCard)
          )}
        </section>
      ) : category.subCategories ? (
        /* Grouped by Subcategory */
        category.subCategories.map(sub => {
          const subDrugs = categoryDrugs.filter(d => d.subCategoryId === sub.id);
          if (subDrugs.length === 0) return null;
          return (
            <section key={sub.id} className="mb-8">
              <button
                onClick={() => setSelectedSubCategory(sub.id)}
                className="flex items-center gap-3 mb-4 group w-full text-left"
              >
                <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-colors">{getSubCategoryIcon(sub.id)}</span>
                <div className="flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">{sub.name}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{sub.description}</p>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-variant px-2 py-1 rounded">{subDrugs.length} drugs</span>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-sm">chevron_right</span>
              </button>
              <div className="space-y-3">
                {subDrugs.map(renderDrugCard)}
              </div>
            </section>
          );
        })
      ) : (
        /* Flat Drug List */
        <section className="space-y-3">
          {filteredDrugs.map(renderDrugCard)}
        </section>
      )}

      {/* Class Warning Banner for NSAIDs */}
      {categoryId === 'nsaids' && (
        <div className="bg-[#2a1d1d] border border-error/40 p-4 rounded-lg flex gap-4 items-start mt-6">
          <span className="material-symbols-outlined text-error">warning</span>
          <div>
            <span className="font-body-lg text-body-lg text-error block mb-1">Class Warning: GI Risk</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              NSAIDs may cause an increased risk of serious gastrointestinal adverse events including bleeding, ulceration, and perforation of the stomach or intestines.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryDrugsPage;