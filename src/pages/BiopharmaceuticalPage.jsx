import React from 'react';

const chapters = [
  {
    id: 'monoclonal-antibodies',
    title: 'Monoclonal Antibodies',
    icon: 'science',
    description: 'Production and therapeutic applications of mAbs including chimeric, humanized, and fully human antibodies.',
    topics: ['Hybridoma Technology', 'Chimeric mAbs', 'Humanized mAbs', 'Fully Human mAbs', 'ADC Technology', 'Bispecific Antibodies']
  },
  {
    id: 'recombinant-proteins',
    title: 'Recombinant Proteins',
    icon: 'biotech',
    description: 'Expression systems and manufacturing of therapeutic proteins including insulin, growth factors, and cytokines.',
    topics: ['E. coli Expression', 'Yeast Expression', 'Mammalian Cell Expression', 'Insulin Manufacture', 'EPO Production', 'Growth Factors']
  },
  {
    id: 'vaccines',
    title: 'Vaccine Technology',
    icon: 'vaccines',
    description: 'Vaccine types, production platforms, adjuvants, and regulatory approval pathways.',
    topics: ['Live Attenuated Vaccines', 'Inactivated Vaccines', 'mRNA Vaccines', 'Viral Vector Vaccines', 'Subunit Vaccines', 'Adjuvant Systems']
  },
  {
    id: 'gene-therapy',
    title: 'Gene Therapy',
    icon: 'dna',
    description: 'Gene delivery vectors, CRISPR-based editing, and manufacturing of gene therapy products.',
    topics: ['AAV Vectors', 'Lentiviral Vectors', 'CRISPR-Cas9', 'CAR-T Gene Editing', 'Ex Vivo Gene Therapy', 'In Vivo Delivery']
  },
  {
    id: 'cell-culture',
    title: 'Cell Culture Technology',
    icon: 'lab_profile',
    description: 'Mammalian and microbial cell culture for large-scale biopharmaceutical production.',
    topics: ['CHO Cell Lines', 'Batch Culture', 'Fed-Batch Culture', 'Perfusion Culture', 'Serum-Free Media', 'Cell Line Development']
  },
  {
    id: 'downstream-processing',
    title: 'Downstream Processing',
    icon: 'filter_alt',
    description: 'Purification trains for biologics including chromatography, filtration, and viral clearance.',
    topics: ['Protein A Chromatography', 'Ion Exchange Chromatography', 'HIC', 'Size Exclusion Chromatography', 'Tangential Flow Filtration', 'Viral Inactivation']
  },
  {
    id: 'bioprocess-engineering',
    title: 'Bioprocess Engineering',
    icon: 'precision_manufacturing',
    description: 'Bioreactor design, fermentation optimization, scale-up, and process analytical technology.',
    topics: ['Stirred Tank Bioreactor', 'Single-Use Bioreactor', 'Fermentation Kinetics', 'Scale-Up Strategies', 'PAT Integration', 'Process Validation']
  },
  {
    id: 'biosimilars',
    title: 'Biosimilars',
    icon: 'compare_arrows',
    description: 'Regulatory pathways, analytical similarity, interchangeability, and manufacturing of biosimilar products.',
    topics: ['Regulatory Pathway', 'Analytical Similarity', 'Clinical Immunogenicity', 'Extrapolation', 'Interchangeability', 'Manufacturing Consistency']
  },
  {
    id: 'tissue-engineering',
    title: 'Tissue Engineering & Regenerative Medicine',
    icon: 'healing',
    description: 'Scaffold design, stem cell therapy, 3D bioprinting, and regulatory classification of ATMPs.',
    topics: ['Scaffold Materials', 'Stem Cell Therapy', '3D Bioprinting', 'Organoids', 'ATMP Classification', 'Clinical Translation']
  },
  {
    id: 'immunotherapy',
    title: 'Immunotherapy & Cell Therapy',
    icon: 'shield',
    description: 'CAR-T cells, checkpoint inhibitors, cytokine therapy, and personalized cancer immunotherapy.',
    topics: ['CAR-T Cell Therapy', 'Checkpoint Inhibitors', 'Cytokine Therapy', 'TCR Engineering', 'Tumor-Infiltrating Lymphocytes', 'Personalized Neoantigen Vaccines']
  }
];

const BiopharmaceuticalPage = () => {
  return (
    <div className="min-h-screen bg-surface pt-4 pb-24">
      <div className="mb-10">
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Biotechnology-based pharmaceutical products — from monoclonal antibodies and recombinant proteins to gene therapy, vaccines, and cell therapy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {chapters.map(ch => (
          <div
            key={ch.id}
            className="bg-surface-container-low border border-white/5 rounded-xl p-6 hover:bg-surface-container-high transition-all cursor-default group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-violet-600 to-violet-400 text-white">
                <span className="material-symbols-outlined">{ch.icon}</span>
              </div>
              <span className="font-label-caps text-[11px] text-on-surface-variant bg-surface-variant px-2 py-1 rounded">{ch.topics.length} topics</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{ch.title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">{ch.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {ch.topics.map(t => (
                <span key={t} className="font-label-caps text-[10px] text-on-surface-variant border border-outline-variant px-1.5 py-0.5 rounded">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiopharmaceuticalPage;