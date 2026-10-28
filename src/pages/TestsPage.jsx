import React from 'react';
import { Link } from 'react-router-dom';

const TestsPage = () => {
  const testCategories = [
    {
      id: 'hematology',
      title: 'Hematology',
      description: 'Complete blood count, coagulation profiles, and hematological markers for anemia, infection, and clotting disorders.',
      icon: 'water_drop',
      path: '/tests/hematology',
      stats: { count: '50+', label: 'Tests' },
      color: 'from-red-600 to-red-400'
    },
    {
      id: 'chemistry',
      title: 'Clinical Chemistry',
      description: 'Comprehensive metabolic panels, liver function, renal function, electrolytes, and lipid profiles.',
      icon: 'science',
      path: '/tests/clinical-chemistry',
      stats: { count: '70+', label: 'Tests' },
      color: 'from-blue-600 to-blue-400'
    },
    {
      id: 'endocrinology',
      title: 'Endocrinology',
      description: 'Thyroid function, adrenal hormones, reproductive hormones, and diabetes monitoring panels.',
      icon: 'monitor_heart',
      path: '/tests/endocrinology',
      stats: { count: '50+', label: 'Tests' },
      color: 'from-green-600 to-green-400'
    },
    {
      id: 'microbiology',
      title: 'Microbiology & Serology',
      description: 'Culture sensitivity, serological assays, infectious disease markers, and antimicrobial susceptibility testing.',
      icon: 'biotech',
      path: '/tests/microbiology',
      stats: { count: '62', label: 'Tests' },
      color: 'from-purple-600 to-purple-400'
    },
    {
      id: 'immunology',
      title: 'Immunology',
      description: 'Autoimmune panels, allergy testing, immunoglobulin profiling, and complement system assays.',
      icon: 'shield',
      path: '/tests/immunology',
      stats: { count: '65', label: 'Tests' },
      color: 'from-cyan-600 to-cyan-400'
    },
    {
      id: 'toxicology',
      title: 'Toxicology & TDM',
      description: 'Therapeutic drug monitoring, drug screening, heavy metal analysis, and toxicological panels.',
      icon: 'warning',
      path: '/tests/toxicology',
      stats: { count: '72', label: 'Tests' },
      color: 'from-orange-600 to-orange-400'
    },
    {
      id: 'urinalysis',
      title: 'Urinalysis & Body Fluids',
      description: 'Urine analysis, CSF examination, pleural and peritoneal fluid analysis for diagnostic evaluation.',
      icon: 'inventory_2',
      path: '/tests/urinalysis',
      stats: { count: '83', label: 'Tests' },
      color: 'from-pink-600 to-pink-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface via-surface-container to-surface-dim pt-8 pb-12">
      {/* Header Section */}
      <section className="px-4 mb-12 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Comprehensive laboratory testing reference with normal ranges, clinical interpretation, and diagnostic significance for healthcare professionals
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-surface-container p-4 rounded-lg border border-outline-variant text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Test Categories</p>
            <p className="font-headline-md text-headline-md text-primary">7</p>
          </div>
          <div className="bg-surface-container p-4 rounded-lg border border-outline-variant text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Individual Tests</p>
            <p className="font-headline-md text-headline-md text-primary">450+</p>
          </div>
          <div className="bg-surface-container p-4 rounded-lg border border-outline-variant text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Reference Ranges</p>
            <p className="font-headline-md text-headline-md text-primary">500+</p>
          </div>
          <div className="bg-surface-container p-4 rounded-lg border border-outline-variant text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Interpretations</p>
            <p className="font-headline-md text-headline-md text-primary">300+</p>
          </div>
        </div>
      </section>

      {/* Test Categories Grid */}
      <section className="px-4 max-w-7xl mx-auto">
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Test Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testCategories.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="group bg-surface-container border border-outline-variant rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 active:scale-[0.98]"
            >
              {/* Gradient Background */}
              <div className={`bg-gradient-to-br ${item.color} h-1`}></div>

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
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Important Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pre-analytical Alert */}
          <div className="bg-error-container/10 border border-error/40 rounded-xl p-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-error text-2xl flex-shrink-0">warning</span>
              <div>
                <h3 className="font-headline-sm text-headline-md text-error mb-2">Pre-analytical Variables</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Patient preparation, fasting status, time of collection, and specimen handling significantly affect laboratory results. Always verify collection protocols before interpretation.
                </p>
              </div>
            </div>
          </div>

          {/* Reference Ranges Note */}
          <div className="bg-secondary-container/10 border border-secondary/40 rounded-xl p-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl flex-shrink-0">info</span>
              <div>
                <h3 className="font-headline-sm text-headline-md text-secondary mb-2">Reference Range Variability</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Reference ranges may vary between laboratories due to differences in methodology, instrumentation, and population demographics. Always consult your laboratory's reference ranges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="px-4 mt-16 max-w-7xl mx-auto border-t border-outline-variant pt-8">
        <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
          This laboratory test reference is designed for healthcare professionals and should not replace professional medical judgment. Always verify results with clinical correlation and consult laboratory-specific reference ranges.
        </p>
      </section>
    </div>
  );
};

export default TestsPage;
