// pages/CategoriesPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const CategoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Search Section */}
      <section className="mb-8">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
            search
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-surface-container-high border border-outline-variant rounded-xl py-4 pl-12 pr-4 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary transition-all text-on-surface"
            placeholder="Search pharmacological classes..."
          />
        </div>
      </section>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="bg-surface-container-low border border-white/5 rounded-xl p-6 hover:bg-surface-container-high transition-all cursor-pointer group active:scale-[0.98] duration-100 block"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="bg-surface-variant p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-surface-dim transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {category.icon}
                </span>
              </div>
              <span className="font-label-caps text-label-caps text-secondary bg-secondary-container/20 px-2 py-1 rounded">
                {category.drugCount} Drugs
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">{category.name}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {category.description}
            </p>
            <div className="mt-6 flex gap-2">
              {category.exampleDrugs.map((drug, idx) => (
                <span key={idx} className="font-label-caps text-[10px] text-on-surface-variant border border-outline-variant px-2 py-0.5 rounded uppercase">
                  {drug}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Resource */}
      <section className="mt-12">
        <h2 className="font-headline-md text-headline-md text-primary mb-4">Pharmacology Guide</h2>
        <div className="relative overflow-hidden rounded-xl h-48 bg-surface-container-highest group">
          <img
            alt="Laboratory glassware"
            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=400&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dim to-transparent p-8 flex flex-col justify-center">
            <span className="text-secondary font-label-caps text-label-caps mb-2">CLINICAL RESOURCE</span>
            <h3 className="text-primary font-display text-display max-w-md">Mechanism of Action Deep Dive</h3>
            <p className="text-on-surface-variant font-body-md text-body-md mt-2">New whitepaper on enzyme inhibition pathways.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesPage;