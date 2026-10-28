import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { drugs } from '../data/drugs';
import { diseases } from '../data/diseases';
import { categories } from '../data/categories';
import { biomarkerCategories } from '../data/markers';
import { registry } from '../data/testRegistry';
import { interactionsData } from '../data/interactionsData';

const SearchOverlay = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return {};
    const q = query.toLowerCase();

    const drugResults = drugs.filter(d =>
      d.genericName.toLowerCase().includes(q) ||
      d.brandNames?.toLowerCase().includes(q) ||
      d.description?.toLowerCase().includes(q) ||
      d.primaryIndication?.toLowerCase().includes(q)
    ).slice(0, 8);

    const diseaseResults = diseases.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.description?.toLowerCase().includes(q) ||
      d.symptoms?.some(s => s.toLowerCase().includes(q))
    ).slice(0, 8);

    const categoryResults = categories.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.description?.toLowerCase().includes(q)
    ).slice(0, 5);

    const biomarkerResults = [];
    for (const key of Object.keys(biomarkerCategories)) {
      for (const b of biomarkerCategories[key].biomarkers) {
        if (b.name.toLowerCase().includes(q)) {
          biomarkerResults.push({ ...b, category: biomarkerCategories[key].title });
          if (biomarkerResults.length >= 5) break;
        }
      }
      if (biomarkerResults.length >= 5) break;
    }

    const testResults = [];
    for (const [catKey, catVal] of Object.entries(registry)) {
      for (const sub of catVal.subcategories) {
        for (const t of sub.tests) {
          if (t.name.toLowerCase().includes(q) || t.clinicalSignificance?.toLowerCase().includes(q)) {
            testResults.push({ ...t, categoryName: catVal.title, testSlug: t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''), categoryId: catKey });
            if (testResults.length >= 5) break;
          }
        }
        if (testResults.length >= 5) break;
      }
      if (testResults.length >= 5) break;
    }

    const interactionDrugs = Object.keys(interactionsData).filter(name =>
      name.toLowerCase().includes(q)
    ).slice(0, 5);

    return { drugResults, diseaseResults, categoryResults, biomarkerResults, testResults, interactionDrugs };
  }, [query]);

  const hasResults = Object.values(results).some(arr => arr.length > 0);

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-24" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative w-full max-w-2xl mx-4 bg-surface-container border border-outline-variant rounded-2xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-3 p-4 border-b border-outline-variant">
          <span className="material-symbols-outlined text-on-surface-variant">search</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search drugs, diseases, biomarkers, tests..."
            className="flex-1 bg-transparent font-body-lg text-body-lg text-on-surface outline-none placeholder:text-on-surface-variant"
          />
          <button onClick={onClose} className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors p-1 rounded-full">close</button>
        </div>

        {query.trim() && (
          <div className="max-h-[60vh] overflow-y-auto no-scrollbar p-4 space-y-6">
            {!hasResults && (
              <p className="text-center font-body-md text-body-md text-on-surface-variant py-8">No results found for "{query}"</p>
            )}

            {results.drugResults.length > 0 && (
              <Section title="Drugs" icon="medication">
                {results.drugResults.map(d => (
                  <ResultItem key={d.id} to={`/drug/${d.id}`} label={d.genericName} sub={d.brandNames} />
                ))}
              </Section>
            )}

            {results.diseaseResults.length > 0 && (
              <Section title="Diseases" icon="stethoscope">
                {results.diseaseResults.map(d => (
                  <ResultItem key={d.id} to={`/disease/${d.id}`} label={d.name} sub={d.category} />
                ))}
              </Section>
            )}

            {results.categoryResults.length > 0 && (
              <Section title="Drug Categories" icon="category">
                {results.categoryResults.map(c => (
                  <ResultItem key={c.id} to={`/category/${c.id}`} label={c.name} sub={`${c.drugCount} drugs`} />
                ))}
              </Section>
            )}

            {results.biomarkerResults.length > 0 && (
              <Section title="Biomarkers" icon="science">
                {results.biomarkerResults.map((b, i) => (
                  <ResultItem key={i} to="/biomarkers" label={b.name} sub={b.category} />
                ))}
              </Section>
            )}

            {results.testResults.length > 0 && (
              <Section title="Laboratory Tests" icon="assignment">
                {results.testResults.map((t, i) => (
                  <ResultItem key={i} to={`/test/${t.categoryId}/${t.testSlug}`} label={t.name} sub={t.categoryName} />
                ))}
              </Section>
            )}

            {results.interactionDrugs.length > 0 && (
              <Section title="Drug Interactions" icon="hub">
                {results.interactionDrugs.map((name, i) => (
                  <ResultItem key={i} to="/interactions" label={name} sub="Drug interaction data available" />
                ))}
              </Section>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Section = ({ title, icon, children }) => (
  <div>
    <h3 className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">
      <span className="material-symbols-outlined text-lg">{icon}</span>
      {title}
    </h3>
    <div className="space-y-1">{children}</div>
  </div>
);

const ResultItem = ({ to, label, sub }) => (
  <Link
    to={to}
    className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-higher transition-colors group"
  >
    <div>
      <p className="font-body-md text-body-md text-primary group-hover:text-secondary transition-colors">{label}</p>
      {sub && <p className="font-body-sm text-body-sm text-on-surface-variant">{sub}</p>}
    </div>
    <span className="material-symbols-outlined text-on-surface-variant text-sm group-hover:text-primary transition-colors">arrow_forward</span>
  </Link>
);

export default SearchOverlay;
