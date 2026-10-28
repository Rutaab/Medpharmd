import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { diseases } from '../data/diseases';

const DiseasesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(diseases.map(d => d.category))];

  const filtered = diseases.filter(d =>
    (selectedCategory === 'All' || d.category === selectedCategory) &&
    (d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     d.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
     d.symptoms.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <>
      <section className="mb-8">
        <div className="relative w-full mb-4">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-surface-container-high border border-outline-variant rounded-xl py-4 pl-12 pr-4 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary transition-all text-on-surface"
            placeholder="Search diseases, symptoms, categories..."
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-label-caps text-[11px] px-3 py-1.5 rounded uppercase tracking-wider transition-colors ${
                selectedCategory === cat
                  ? 'bg-secondary text-on-secondary'
                  : 'text-primary bg-primary/10 hover:bg-primary/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(disease => (
          <Link
            key={disease.id}
            to={`/disease/${disease.id}`}
            className="bg-surface-container-low border border-white/5 rounded-xl p-5 hover:bg-surface-container-high transition-all cursor-pointer active:scale-[0.98] block"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="bg-surface-variant p-2.5 rounded-lg text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{disease.icon}</span>
              </div>
              <span className={`font-label-caps text-[10px] px-2 py-1 rounded uppercase ${
                disease.severity === 'Emergency'
                  ? 'bg-error/20 text-error'
                  : disease.severity === 'Acute'
                  ? 'bg-warning/20 text-warning'
                  : 'bg-primary/10 text-primary'
              }`}>
                {disease.severity}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">{disease.name}</h3>
            <p className="font-label-caps text-label-caps text-secondary uppercase text-[10px] mb-2">{disease.category}</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">{disease.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {disease.symptoms.slice(0, 3).map((s, i) => (
                <span key={i} className="font-label-caps text-[9px] text-on-surface-variant border border-outline-variant px-1.5 py-0.5 rounded uppercase">{s}</span>
              ))}
              {disease.symptoms.length > 3 && (
                <span className="font-label-caps text-[9px] text-on-surface-variant">+{disease.symptoms.length - 3}</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default DiseasesPage;
