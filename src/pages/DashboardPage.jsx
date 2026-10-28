import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const menuItems = [
    {
      id: 'drugs',
      title: 'Drugs & Medications',
      description: 'Comprehensive drug reference with detailed information on NSAIDs, analgesics, antibiotics, antivirals, and more.',
      icon: 'medication',
      path: '/drugs',
      stats: { count: '500+', label: 'Medications' },
      color: 'from-blue-600 to-blue-400'
    },
    {
      id: 'diseases',
      title: 'Diseases & Conditions',
      description: 'Detailed clinical protocols for disease management including treatment pathways, diagnostic criteria, and maintenance therapy guidelines.',
      icon: 'stethoscope',
      path: '/diseases',
      stats: { count: '20+', label: 'Conditions' },
      color: 'from-cyan-600 to-cyan-400'
    },
    {
      id: 'biomarkers',
      title: 'Clinical Biomarkers',
      description: 'Essential biomarkers for cardiac assessment, pulmonary function, renal markers, and metabolic profiling.',
      icon: 'science',
      path: '/biomarkers',
      stats: { count: '100+', label: 'Biomarkers' },
      color: 'from-green-600 to-green-400'
    },
    {
      id: 'tests',
      title: 'Laboratory Tests',
      description: 'Complete laboratory testing guide with reference ranges, interpretation, and clinical significance.',
      icon: 'assignment',
      path: '/tests',
      stats: { count: '150+', label: 'Tests' },
      color: 'from-purple-600 to-purple-400'
    },
    {
      id: 'interactions',
      title: 'Drug Interactions',
      description: 'Advanced drug-drug interaction checker with severity levels and clinical management recommendations.',
      icon: 'hub',
      path: '/interactions',
      stats: { count: '1000+', label: 'Interactions' },
      color: 'from-red-600 to-red-400'
    },
    {
      id: 'guidelines',
      title: 'Clinical Guidelines',
      description: 'Evidence-based clinical guidelines for disease management, treatment protocols, and best practices.',
      icon: 'description',
      path: '/guidelines',
      stats: { count: '50+', label: 'Guidelines' },
      color: 'from-yellow-600 to-yellow-400'
    },
    {
      id: 'calculator',
      title: 'Clinical Calculators',
      description: 'Useful medical calculators for dosing, renal function, BMI, and other clinical parameters.',
      icon: 'calculate',
      path: '/calculators',
      stats: { count: '30+', label: 'Tools' },
      color: 'from-pink-600 to-pink-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface via-surface-container to-surface-dim pt-8 pb-12">
      {/* Header Section */}
      <section className="px-4 mb-12 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Your comprehensive platform for drug information, biomarkers, clinical guidelines, and medical decision support
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-surface-container p-4 rounded-lg border border-outline-variant text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Total Medications</p>
            <p className="font-headline-md text-headline-md text-primary">500+</p>
          </div>
          <div className="bg-surface-container p-4 rounded-lg border border-outline-variant text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Biomarkers</p>
            <p className="font-headline-md text-headline-md text-primary">100+</p>
          </div>
          <div className="bg-surface-container p-4 rounded-lg border border-outline-variant text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Drug Interactions</p>
            <p className="font-headline-md text-headline-md text-primary">1000+</p>
          </div>
          <div className="bg-surface-container p-4 rounded-lg border border-outline-variant text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Clinical Tools</p>
            <p className="font-headline-md text-headline-md text-primary">30+</p>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="px-4 max-w-7xl mx-auto">
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Main Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="group bg-surface-container border border-outline-variant rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 active:scale-[0.98]"
            >
              {/* Gradient Background */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 h-1"></div>

              {/* Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <div className="bg-surface-container-high px-3 py-1 rounded-full">
                    <p className="font-label-caps text-label-caps text-secondary text-xs">{item.stats.count}</p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-2 group-hover:text-on-surface transition-colors">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-xs">
                    {item.stats.label}
                  </span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform text-sm">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Info Section */}
      <section className="px-4 mt-16 max-w-7xl mx-auto">
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Featured Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* NSAID Safety Alert */}
          <div className="bg-error-container/10 border border-error/40 rounded-xl p-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-error text-2xl flex-shrink-0">warning</span>
              <div>
                <h3 className="font-headline-sm text-headline-md text-error mb-2">NSAID Safety Alert</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Prolonged NSAID use increases risk of GI bleeding, cardiovascular events, and renal impairment. Always use the lowest effective dose for the shortest duration.
                </p>
              </div>
            </div>
          </div>

          {/* Drug Interaction Warning */}
          <div className="bg-secondary-container/10 border border-secondary/40 rounded-xl p-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl flex-shrink-0">info</span>
              <div>
                <h3 className="font-headline-sm text-headline-md text-secondary mb-2">Check Interactions</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Before prescribing or dispensing any medication, always verify for potential drug-drug interactions using our comprehensive interaction database.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="px-4 mt-16 max-w-7xl mx-auto border-t border-outline-variant pt-8">
        <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
          This clinical reference tool is designed for healthcare professionals and should not replace professional medical judgment. Always consult current clinical guidelines and patient-specific factors when making treatment decisions.
        </p>
      </section>
    </div>
  );
};

export default DashboardPage;
