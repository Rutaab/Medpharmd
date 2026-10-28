// pages/DrugDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { drugs } from '../data/drugs';
import { interactionsData } from '../data/interactionsData';

const DrugDetailPage = () => {
  const { drugId } = useParams();
  const drug = drugs.find(d => d.id === drugId);

  if (!drug) {
    return <div className="text-center text-on-surface-variant">Drug not found</div>;
  }

  const allInteractions = interactionsData[drug.genericName] || drug.interactions;

  return (
    <>
      {/* Header Section */}
      <section className="mb-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-display md:text-display text-primary">{drug.genericName}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
            {drug.description}
          </p>
          <div className="mt-2">
            <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-caps text-label-caps uppercase tracking-wider">
              {drug.status}
            </span>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {drug.stats.map((stat, idx) => (
          <div key={idx} className="bg-surface-container-high p-5 rounded-lg border border-white/5 transition-all hover:border-white/10">
            <p className="font-label-caps text-label-caps text-on-surface-variant mb-3 uppercase opacity-70">{stat.label}</p>
            <p className="font-body-lg text-body-lg text-primary mb-1">{stat.value}</p>
            {stat.sub && <p className="font-body-sm text-body-sm text-on-surface-variant">{stat.sub}</p>}
          </div>
        ))}
      </section>

      {/* Brand Information Table */}
      {drug.brandTable && (
        <section className="mb-12 overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              {drug.brandTable.length} BRAND NAMES — DOSAGE FORMS, STRENGTHS, MANUFACTURERS
            </h3>
          </div>
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full clinical-table min-w-[900px]">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Brand Name</th>
                  <th>Dosage Form(s)</th>
                  <th>Available Strengths</th>
                  <th>Manufacturer</th>
                  <th>Country / Region</th>
                </tr>
              </thead>
              <tbody className="font-body-sm text-body-sm text-on-surface">
                {drug.brandTable.map((brand, idx) => (
                  <tr key={idx} className="hover:bg-surface-container-highest/30 transition-colors">
                    <td className="text-on-surface-variant">{idx + 1}</td>
                    <td className="font-body-lg text-primary">{brand.name}</td>
                    <td>{brand.form}</td>
                    <td>{brand.strengths}</td>
                    <td>{brand.manufacturer}</td>
                    <td>{brand.region}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Clinical Interactions Section */}
      {allInteractions && allInteractions.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              CLINICAL INTERACTIONS — DRUG-DRUG INTERACTION MATRIX ({allInteractions.length})
            </h3>
          </div>
          <div className="bg-surface-container rounded-lg border border-white/5 overflow-hidden">
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full clinical-table min-w-[700px]">
                <thead>
                  <tr>
                    <th className="w-1/3">Drug Class / Agent</th>
                    <th className="w-1/2">Interaction Effect & Mechanism</th>
                    <th className="w-24 text-center">Severity</th>
                  </tr>
                </thead>
                <tbody className="font-body-sm text-body-sm text-on-surface">
                  {allInteractions.map((interaction, idx) => (
                    <tr key={idx} className="hover:bg-surface-container-highest/30 transition-colors">
                      <td className="font-body-lg text-primary">{interaction.drugClass}</td>
                      <td>{interaction.effect}</td>
                      <td className="text-center">
                        <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded font-label-caps text-[10px] uppercase font-bold border ${
                          interaction.severity === 'Major' 
                            ? 'bg-error-container text-on-error-container border-error/20'
                            : interaction.severity === 'Moderate'
                            ? 'bg-secondary-container text-on-secondary-container border-secondary/20'
                            : 'bg-surface-container-highest text-on-surface-variant border-outline/20'
                        }`}>
                          {interaction.severity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Warning Banner */}
      <div className="bg-secondary-container/10 border border-secondary-container rounded-lg p-4 flex gap-3 items-start md:items-center">
        <span className="material-symbols-outlined text-secondary-fixed shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
        <p className="font-body-md text-body-md text-secondary-fixed leading-tight">
          {drug.warning}
        </p>
      </div>
    </>
  );
};

export default DrugDetailPage;