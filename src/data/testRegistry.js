import { slugify } from '../utils/slugify';
import { subcategories as hematology } from '../pages/HematologyPage';
import { subcategories as clinicalChemistry } from '../pages/ClinicalChemistryPage';
import { subcategories as endocrinology } from '../pages/EndocrinologyPage';
import { subcategories as microbiology } from '../pages/MicrobiologyPage';
import { subcategories as immunology } from '../pages/ImmunologyPage';
import { subcategories as toxicology } from '../pages/ToxicologyPage';
import { subcategories as urinalysis } from '../pages/UrinalysisPage';

const registry = {
  'hematology': { subcategories: hematology, title: 'Hematology' },
  'clinical-chemistry': { subcategories: clinicalChemistry, title: 'Clinical Chemistry' },
  'endocrinology': { subcategories: endocrinology, title: 'Endocrinology' },
  'microbiology': { subcategories: microbiology, title: 'Microbiology & Serology' },
  'immunology': { subcategories: immunology, title: 'Immunology' },
  'toxicology': { subcategories: toxicology, title: 'Toxicology & TDM' },
  'urinalysis': { subcategories: urinalysis, title: 'Urinalysis & Body Fluids' },
};

export function findTest(category, testSlug) {
  const entry = registry[category];
  if (!entry) return null;
  for (const sub of entry.subcategories) {
    for (const test of sub.tests) {
      if (slugify(test.name) === testSlug) {
        return { ...test, categoryName: entry.title, categoryId: category, subcategoryTitle: sub.title };
      }
    }
  }
  return null;
}

export function getCategoryTests(category) {
  const entry = registry[category];
  if (!entry) return [];
  return entry.subcategories.flatMap(sub => sub.tests);
}

export { registry };
