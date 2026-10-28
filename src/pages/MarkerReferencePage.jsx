import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { markers, categoryIcons, categoryColors } from '../data/markerReference';

const categories = [
  { key: 'all', label: 'All Markers' },
  { key: 'cardiac', label: 'Cardiac' },
  { key: 'inflammatory', label: 'Inflammatory' },
  { key: 'liver', label: 'Liver' },
  { key: 'renal', label: 'Renal' },
  { key: 'hematology', label: 'Hematology' },
  { key: 'endocrinology', label: 'Endocrinology' }
];

const MarkerReferencePage = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const filteredMarkers = useMemo(() => {
    const q = search.toLowerCase();
    return markers.filter(m => {
      const matchesCategory = activeCategory === 'all' || m.category === activeCategory;
      const matchesSearch = !q ||
        m.name.toLowerCase().includes(q) ||
        m.clinicalUse.toLowerCase().includes(q) ||
        m.conditions.some(c => c.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-surface pt-8 pb-24 px-4">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Link to="/" className="text-secondary hover:text-primary transition-colors">
            <span className="material-symbols-outlined">home</span>
          </Link>
          <span className="text-on-surface-variant">/</span>
          <span className="font-body-md text-on-surface-variant">Marker Reference</span>
        </div>
        <h1 className="font-display text-display text-primary mb-2">Marker Reference</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Comprehensive laboratory biomarker reference with normal ranges, timing, and clinical interpretation
        </p>
      </div>

      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
          <div className="relative w-full sm:w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input
              type="text"
              placeholder="Search markers by name, condition, or use..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-surface-container border border-outline-variant rounded-lg pl-10 pr-4 py-2.5 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(cat => {
            const isActive = activeCategory === cat.key;
            const colors = cat.key === 'all'
              ? { badge: isActive ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant hover:text-primary' }
              : categoryColors[cat.key];
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full font-body-sm text-body-sm border transition-all ${
                  isActive
                    ? cat.key === 'all'
                      ? 'bg-primary text-on-primary border-primary'
                      : `${colors.badge} border-current`
                    : 'bg-surface-container border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary/50'
                }`}
              >
                {cat.key !== 'all' && (
                  <span className="material-symbols-outlined text-sm">{categoryIcons[cat.key]}</span>
                )}
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {filteredMarkers.length === 0 ? (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">search_off</span>
              <p className="font-body-lg text-body-lg text-on-surface-variant">No markers found matching your search.</p>
            </div>
          ) : filteredMarkers.map(marker => {
            const colors = categoryColors[marker.category] || categoryColors.cardiac;
            const isExpanded = expandedId === marker.id;

            return (
              <div
                key={marker.id}
                className="bg-surface-container border border-outline-variant rounded-lg overflow-hidden hover:border-primary/30 transition-all"
              >
                <div className="bg-surface-container-high p-5 border-b border-outline-variant">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                        <span className={`material-symbols-outlined ${colors.text}`}>{categoryIcons[marker.category]}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-headline-md text-headline-md text-primary mb-1">{marker.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-0.5 rounded-full font-body-sm text-body-sm ${colors.badge}`}>
                            {marker.category}
                          </span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant">{marker.clinicalUse}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : marker.id)}
                      className="text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined">
                        {isExpanded ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="p-5 space-y-5">
                  <div className="bg-surface-container rounded-lg border border-outline-variant p-4">
                    <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Normal Range</p>
                    <p className="font-body-lg text-body-lg text-primary font-semibold">{marker.normalRange}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 rounded-lg bg-surface-container border border-outline-variant">
                      <span className="material-symbols-outlined text-secondary mb-1 text-xl">trending_up</span>
                      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-0.5">Rise</p>
                      <p className="font-body-sm text-body-sm text-on-surface">{marker.riseTime}</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-surface-container border border-outline-variant">
                      <span className="material-symbols-outlined text-secondary mb-1 text-xl">stat_3</span>
                      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-0.5">Peak</p>
                      <p className="font-body-sm text-body-sm text-on-surface">{marker.peakTime}</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-surface-container border border-outline-variant">
                      <span className="material-symbols-outlined text-secondary mb-1 text-xl">trending_down</span>
                      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-0.5">Return</p>
                      <p className="font-body-sm text-body-sm text-on-surface">{marker.returnTime}</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">Associated Conditions</p>
                    <div className="flex flex-wrap gap-2">
                      {marker.conditions.map((condition, i) => (
                        <span key={i} className="bg-secondary-container/20 text-secondary font-body-sm text-body-sm px-3 py-1 rounded-full border border-secondary/20">
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="bg-surface-container rounded-lg border border-outline-variant p-4 animate-fadeIn">
                      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">Full Details</p>
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed">{marker.details}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12">
        <div className="bg-surface-container border border-outline-variant rounded-lg p-6">
          <h2 className="font-headline-md text-headline-md text-primary mb-3">Interpretation Notes</h2>
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            Laboratory reference ranges vary by institution, assay method, and patient demographics. Always interpret results in clinical context. Serial measurements are often more valuable than isolated values. Age, gender, renal function, and medications can affect biomarker levels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarkerReferencePage;
