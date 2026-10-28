import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { interactionsData } from '../data/interactionsData';
import { drugs } from '../data/drugs';

const allDrugNames = [...new Set(drugs.map(d => d.genericName))].sort();

const categories = [
  {
    id: 'cns',
    title: 'CNS Drugs',
    icon: 'psychology',
    description: 'Antidepressants, antiepileptics, antipsychotics, anxiolytics, antiparkinsonism, antimigraine, and CNS stimulants.',
    drugs: ['Amitriptyline', 'Clomipramine', 'Citalopram', 'Paroxetine', 'Sertraline', 'Fluoxetine', 'Carbamazepine', 'Lamotrigine', 'Phenytoin', 'Valproic Acid', 'Benztropine', 'Levodopa/Carbidopa', 'Trihexyphenidyl', 'Diazepam', 'Ergotamine', 'Sumatriptan', 'Zolmitriptan', 'Amphetamine', 'Modafinil', 'Methylphenidate'],
    color: 'from-violet-600 to-violet-400'
  },
  {
    id: 'cvs',
    title: 'CVS Drugs',
    icon: 'favorite',
    description: 'Beta-blockers, calcium channel blockers, ARBs, cardiac glycosides, and anticoagulants.',
    drugs: ['Propranolol', 'Atenolol', 'Metoprolol', 'Amlodipine', 'Diltiazem', 'Losartan', 'Digoxin', 'Warfarin'],
    color: 'from-rose-600 to-rose-400'
  },
  {
    id: 'antidiabetic',
    title: 'Anti-Diabetic Drugs',
    icon: 'monitor_heart',
    description: 'Biguanides and sulfonylureas for glycemic control.',
    drugs: ['Metformin', 'Glipizide'],
    color: 'from-emerald-600 to-emerald-400'
  },
  {
    id: 'nsaids',
    title: 'NSAIDs',
    icon: 'healing',
    description: 'Non-steroidal anti-inflammatory drugs for pain, fever, and inflammation.',
    drugs: ['Ibuprofen', 'Diclofenac', 'Aspirin', 'Naproxen'],
    color: 'from-orange-600 to-orange-400'
  },
  {
    id: 'git',
    title: 'GIT Drugs',
    icon: 'medication',
    description: 'Proton pump inhibitors and H2-receptor antagonists for acid-related disorders.',
    drugs: ['Omeprazole', 'Cimetidine'],
    color: 'from-amber-600 to-amber-400'
  },
  {
    id: 'respiratory',
    title: 'Respiratory Drugs',
    icon: 'air',
    description: 'Bronchodilators and xanthine derivatives for respiratory conditions.',
    drugs: ['Theophylline'],
    color: 'from-sky-600 to-sky-400'
  }
];

function normalize(name) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function fuzzyMatch(input, candidates) {
  const norm = normalize(input);
  if (!norm) return [];
  return candidates.filter(c => normalize(c).includes(norm)).slice(0, 8);
}

function findInteraction(drugA, drugB) {
  const entry = interactionsData[drugA];
  if (entry) {
    const match = entry.find(i => normalize(i.drugClass) === normalize(drugB));
    if (match) return { found: true, drug: drugA, interaction: match };
  }
  const entryB = interactionsData[drugB];
  if (entryB) {
    const match = entryB.find(i => normalize(i.drugClass) === normalize(drugA));
    if (match) return { found: true, drug: drugB, interaction: match };
  }
  return { found: false };
}

const InteractionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [checkDrugs, setCheckDrugs] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [checkResults, setCheckResults] = useState(null);

  const filteredCats = categories.filter(cat =>
    cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.drugs.some(d => d.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const suggestions = useMemo(() => {
    const used = new Set(checkDrugs.map(d => d.name));
    return fuzzyMatch(inputValue, allDrugNames).filter(s => !used.has(s));
  }, [inputValue, checkDrugs]);

  const addDrug = (name) => {
    if (!name.trim()) return;
    const used = checkDrugs.map(d => d.name);
    if (used.includes(name)) return;
    setCheckDrugs(prev => [...prev, { name, id: Date.now() + Math.random() }]);
    setInputValue('');
    setShowSuggestions(false);
    setCheckResults(null);
  };

  const removeDrug = (id) => {
    setCheckDrugs(prev => prev.filter(d => d.id !== id));
    setCheckResults(null);
  };

  const runCheck = () => {
    if (checkDrugs.length < 2) return;
    const results = [];
    for (let i = 0; i < checkDrugs.length; i++) {
      for (let j = i + 1; j < checkDrugs.length; j++) {
        const a = checkDrugs[i].name;
        const b = checkDrugs[j].name;
        const result = findInteraction(a, b);
        results.push({ drugA: a, drugB: b, ...result });
      }
    }
    setCheckResults(results);
  };

  return (
    <div className="min-h-screen bg-surface pt-8 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-6">
          <Link to="/" className="text-secondary hover:text-primary transition-colors">
            <span className="material-symbols-outlined">home</span>
          </Link>
          <span className="text-on-surface-variant">/</span>
          <span className="font-body-md text-primary">Interactions</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Browse known drug-drug interactions by therapeutic class, or check interactions between multiple drugs.
          </p>
        </div>

        {/* Search */}
        <section className="mb-8">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search drug classes or individual drugs..."
              className="w-full bg-surface-container-high border border-outline-variant rounded-xl py-4 pl-12 pr-4 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary transition-all text-on-surface"
            />
          </div>
        </section>

        {/* Category Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCats.map(cat => {
              const totalInteractions = cat.drugs.reduce((sum, d) => sum + (interactionsData[d]?.length || 0), 0);
              return (
                <Link
                  key={cat.id}
                  to={`/interactions/${cat.id}`}
                  className="bg-surface-container-low border border-white/5 rounded-xl p-6 hover:bg-surface-container-high transition-all cursor-pointer group active:scale-[0.98] duration-100 block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${cat.color} text-white`}>
                      <span className="material-symbols-outlined">{cat.icon}</span>
                    </div>
                    <span className="font-label-caps text-[11px] text-on-surface-variant bg-surface-variant px-2 py-1 rounded">{totalInteractions} interactions</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1">{cat.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-3 line-clamp-2">{cat.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.drugs.slice(0, 4).map(d => (
                      <span key={d} className="font-label-caps text-[10px] text-on-surface-variant border border-outline-variant px-1.5 py-0.5 rounded">{d}</span>
                    ))}
                    {cat.drugs.length > 4 && (
                      <span className="font-label-caps text-[10px] text-secondary">+{cat.drugs.length - 4}</span>
                    )}
                  </div>
                </Link>
              );
            })}
            {filteredCats.length === 0 && (
              <p className="font-body-md text-on-surface-variant col-span-full text-center py-12">No categories match your search.</p>
            )}
          </div>
        </section>

        {/* Multi-Drug Interaction Checker */}
        <section className="border-t border-outline-variant pt-12 mb-12">
          <h2 className="font-headline-md text-headline-md text-primary mb-2">Check Drug Interactions</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Add two or more drugs to check all pairwise interactions.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="relative flex-1 min-w-[250px]">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value); setShowSuggestions(true); }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                onKeyDown={(e) => { if (e.key === 'Enter') addDrug(inputValue); }}
                placeholder="Type a drug name..."
                className="w-full bg-surface-container-high border border-outline-variant rounded-xl py-3.5 px-4 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary transition-all text-on-surface"
              />
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute z-10 top-full left-0 right-0 mt-1 bg-surface-container-high border border-outline-variant rounded-xl shadow-lg max-h-48 overflow-y-auto no-scrollbar">
                  {suggestions.map(s => (
                    <button
                      key={s}
                      onMouseDown={() => addDrug(s)}
                      className="w-full text-left px-4 py-2.5 font-body-md text-body-md text-on-surface hover:bg-surface-container-higher transition-colors border-b border-outline-variant/50 last:border-b-0"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => addDrug(inputValue)}
              className="bg-surface-container-high border border-outline-variant rounded-xl p-3.5 hover:bg-surface-container-higher transition-colors text-primary"
              title="Add drug"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>

          {checkDrugs.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-5">
              {checkDrugs.map((d, idx) => (
                <React.Fragment key={d.id}>
                  {idx > 0 && <span className="text-on-surface-variant font-body-md text-body-md">+</span>}
                  <span className="inline-flex items-center gap-1.5 bg-surface-container-high border border-outline-variant px-3 py-1.5 rounded-full font-body-md text-body-md text-primary">
                    {d.name}
                    <button onClick={() => removeDrug(d.id)} className="text-on-surface-variant hover:text-error transition-colors">
                      <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                  </span>
                </React.Fragment>
              ))}
            </div>
          )}

          {checkDrugs.length >= 2 && (
            <button
              onClick={runCheck}
              className="bg-secondary text-on-secondary px-6 py-3 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-colors inline-flex items-center gap-2 mb-6"
            >
              <span className="material-symbols-outlined text-sm">list_alt</span>
              Check {checkDrugs.length} Drugs
            </button>
          )}

          {checkResults && (
            <div className="space-y-4">
              {checkResults.map((r, idx) => (
                <div key={idx} className={`rounded-xl border p-5 ${r.found ? 'bg-surface-container border-secondary/30' : 'bg-surface-container border-outline-variant'}`}>
                  {r.found ? (
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-warning shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <span className="font-body-lg text-body-lg text-primary font-semibold">{r.drugA} ↔ {r.drugB}</span>
                          <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded font-label-caps text-[10px] uppercase font-bold border ${
                            r.interaction.severity === 'Major'
                              ? 'bg-error-container text-on-error-container border-error/20'
                              : r.interaction.severity === 'Moderate'
                              ? 'bg-secondary-container text-on-secondary-container border-secondary/20'
                              : 'bg-surface-container-highest text-on-surface-variant border-outline/20'
                          }`}>{r.interaction.severity}</span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface leading-relaxed">{r.interaction.effect}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-success shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <div>
                        <p className="font-body-md text-body-md text-on-surface">
                          <strong>{r.drugA}</strong> and <strong>{r.drugB}</strong>: No documented interaction found in the current reference database.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <div className="bg-secondary-container/10 border border-secondary/30 rounded-lg p-4">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            <span className="font-body-lg text-secondary">Source: </span>
            The Essential Drug-Drug & Drug-Food Interactions (Second Edition, 2018), Faculty of Pharmacy, Al Azhar University, Assiut Branch. Covers 37 drugs with severity ratings and clinical management recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractionsPage;
