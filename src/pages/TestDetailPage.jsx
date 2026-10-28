import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { findTest } from '../data/testRegistry';

const TestDetailPage = () => {
  const { category, testSlug } = useParams();
  const test = findTest(category, testSlug);

  if (!test) {
    return (
      <div className="min-h-screen bg-surface pt-8 pb-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-display text-primary mb-4">Test Not Found</h1>
          <Link to="/tests" className="text-secondary hover:text-primary transition-colors font-body-md text-body-md">
            Return to Tests
          </Link>
        </div>
      </div>
    );
  }

  const backLink = `/tests/${category}`;

  return (
    <div className="min-h-screen bg-surface pt-8 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-6">
          <Link to="/" className="text-secondary hover:text-primary transition-colors">
            <span className="material-symbols-outlined">home</span>
          </Link>
          <span className="text-on-surface-variant">/</span>
          <Link to="/tests" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Tests</Link>
          <span className="text-on-surface-variant">/</span>
          <Link to={backLink} className="font-body-md text-on-surface-variant hover:text-primary transition-colors">{test.categoryName}</Link>
          <span className="text-on-surface-variant">/</span>
          <span className="font-body-md text-primary">{test.name}</span>
        </div>

        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 flex-wrap mb-3">
            <h1 className="font-display text-display text-primary">{test.name}</h1>
            <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-caps text-label-caps uppercase tracking-wider whitespace-nowrap">
              {test.subcategoryTitle}
            </span>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            {test.clinicalSignificance}
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-surface-container p-5 rounded-lg border border-outline-variant">
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">Normal Range</p>
            <p className="font-body-lg text-body-lg text-primary">{test.normalRange}</p>
          </div>
          <div className="bg-surface-container p-5 rounded-lg border border-outline-variant">
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">Method</p>
            <p className="font-body-md text-body-md text-on-surface">{test.method}</p>
          </div>
          <div className="bg-surface-container p-5 rounded-lg border border-outline-variant md:col-span-2">
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">Interpretation</p>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed">{test.interpretation}</p>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="space-y-6 mb-12">
          <h2 className="font-headline-md text-headline-md text-primary">Detailed Analysis</h2>

          <div className="bg-surface-container border border-outline-variant rounded-lg overflow-hidden">
            <div className="bg-surface-container-high p-6 border-b border-outline-variant">
              <h3 className="font-headline-md text-headline-md text-primary">Normal Range & Reference Values</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-surface-container p-4 rounded border border-outline-variant">
                <p className="font-body-lg text-body-lg text-primary">{test.normalRange}</p>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Reference ranges may vary between laboratories based on methodology, instrumentation, and population demographics. Always consult your laboratory's specific reference ranges for clinical decision-making.
              </p>
            </div>
          </div>

          <div className="bg-surface-container border border-outline-variant rounded-lg overflow-hidden">
            <div className="bg-surface-container-high p-6 border-b border-outline-variant">
              <h3 className="font-headline-md text-headline-md text-primary">Clinical Interpretation</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-surface-container p-4 rounded border border-outline-variant">
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">{test.interpretation}</p>
              </div>
            </div>
          </div>

          <div className="bg-surface-container border border-outline-variant rounded-lg overflow-hidden">
            <div className="bg-surface-container-high p-6 border-b border-outline-variant">
              <h3 className="font-headline-md text-headline-md text-primary">Methodology</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-surface-container p-4 rounded border border-outline-variant">
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">{test.method}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-surface-container border border-outline-variant rounded-lg p-6 mb-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-1">{test.categoryName}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{test.subcategoryTitle}</p>
            </div>
            <Link
              to={backLink}
              className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-secondary-fixed transition-colors"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              View All {test.categoryName} Tests
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-secondary-container/10 border border-secondary/30 rounded-lg p-4">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            <span className="font-body-lg text-secondary">Note: </span>
            This test reference is designed for healthcare professionals. Reference ranges may vary between laboratories based on methodology, instrumentation, and population demographics. Always correlate laboratory findings with clinical presentation and consult laboratory-specific reference ranges before making clinical decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestDetailPage;
