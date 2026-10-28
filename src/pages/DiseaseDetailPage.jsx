import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { diseases } from '../data/diseases';

const DiseaseDetailPage = () => {
  const { diseaseId } = useParams();
  const disease = diseases.find(d => d.id === diseaseId);

  if (!disease) {
    return <div className="text-center text-on-surface-variant">Disease not found</div>;
  }

  const getSeverityColor = (severity) => {
    if (severity === 'Emergency') return 'bg-error/20 text-error';
    if (severity === 'Acute') return 'bg-warning/20 text-warning';
    return 'bg-primary/10 text-primary';
  };

  return (
    <>
      {/* Header */}
      <section className="mb-8 p-6 bg-surface-container rounded-lg border border-white/5">
        <div className="flex items-center gap-3 mb-3">
          <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{disease.icon}</span>
          <div>
            <span className={`font-label-caps text-[10px] px-2 py-0.5 rounded uppercase ${getSeverityColor(disease.severity)}`}>
              {disease.severity}
            </span>
            <span className="font-label-caps text-label-caps text-secondary uppercase ml-2">{disease.category}</span>
          </div>
        </div>
        <h2 className="font-display-mobile md:font-display text-display-mobile md:text-display text-primary mb-2">{disease.name}</h2>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{disease.description}</p>
      </section>

      {/* Symptoms + Diagnostic Markers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-surface-container-high p-4 rounded-lg border border-white/5">
          <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">symptoms</span> Key Symptoms
          </h3>
          <ul className="space-y-1.5">
            {disease.symptoms.map((s, i) => (
              <li key={i} className="font-body-sm text-body-sm text-on-surface flex items-start gap-2">
                <span className="text-secondary mt-0.5">•</span> {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-surface-container-high p-4 rounded-lg border border-white/5">
          <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">lab_research</span> Diagnostic Markers
          </h3>
          <ul className="space-y-1.5">
            {disease.diagnosticMarkers.map((m, i) => (
              <li key={i} className="font-body-sm text-body-sm text-on-surface flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span> {m}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Treatment Protocol */}
      <section className="mb-8">
        <h3 className="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined">stethoscope</span> Treatment Protocol
        </h3>
        <div className="space-y-3">
          {disease.treatmentProtocols.map((step, i) => (
            <div key={i} className="bg-surface-container-low border border-white/5 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="bg-secondary/20 text-secondary font-label-caps text-[11px] w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  {step.step}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body-md text-body-md text-on-surface mb-1">{step.action}</p>
                  <div className="flex flex-wrap gap-3 text-xs">
                    {step.drug && <span className="text-on-surface-variant"><span className="text-secondary">Drug:</span> {step.drug}</span>}
                    {step.dose && <span className="text-on-surface-variant"><span className="text-secondary">Dose:</span> {step.dose}</span>}
                    {step.route && <span className="text-on-surface-variant"><span className="text-secondary">Route:</span> {step.route}</span>}
                    {step.note && <span className="text-on-surface-variant italic">— {step.note}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Maintenance Therapy */}
      {disease.maintenanceTherapy.length > 0 && (
        <section className="mb-8">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">repeat</span> Maintenance / Long-Term Therapy
          </h3>
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full clinical-table min-w-[500px]">
              <thead>
                <tr>
                  <th>Drug</th>
                  <th>Dose</th>
                  <th>Frequency</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {disease.maintenanceTherapy.map((m, i) => (
                  <tr key={i}>
                    <td className="font-body-md text-body-md text-on-surface">
                      {m.drugId ? (
                        <Link to={`/drug/${m.drugId}`} className="text-secondary hover:text-secondary/80 transition-colors">{m.drug}</Link>
                      ) : m.drug}
                    </td>
                    <td className="font-body-sm text-body-sm text-on-surface-variant">{m.dose}</td>
                    <td className="font-body-sm text-body-sm text-on-surface-variant">{m.frequency}</td>
                    <td className="font-body-sm text-body-sm text-on-surface-variant">{m.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Related Drugs */}
      {disease.relevantDrugs.length > 0 && (
        <section>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined">medication</span> Related Medications
          </h3>
          <div className="flex flex-wrap gap-2">
            {disease.relevantDrugs.map(drugId => (
              <Link
                key={drugId}
                to={`/drug/${drugId}`}
                className="font-label-caps text-[11px] text-primary bg-primary/10 hover:bg-primary/20 px-2.5 py-1.5 rounded uppercase tracking-wider transition-colors"
              >
                {drugId.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default DiseaseDetailPage;
