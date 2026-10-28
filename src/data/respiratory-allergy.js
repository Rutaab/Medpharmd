// data/respiratory-allergy.js
export const respiratoryAllergy = [
  {
    "id": "salbutamol",
    "categoryId": "respiratory-allergy",
    "genericName": "Salbutamol (Albuterol)",
    "brandNames": "Ventolin, Venex, Zaftolin, Salbo HFA, Bretheez",
    "description": "Short-acting beta-2 agonist (SABA); rapid-acting bronchodilator for asthma and COPD.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Asthma and COPD",
    "dosageForm": "Inhaler/Nebulizer/Oral",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE (MDI)",
        "value": "2 puffs q4-6h as needed",
        "sub": "Max: 12 puffs/day"
      },
      {
        "label": "NEBULIZER DOSE",
        "value": "2.5-5 mg up to QID",
        "sub": "Dilute in 2.5-3 mL NS"
      },
      {
        "label": "ORAL DOSE",
        "value": "4 mg TID/QID",
        "sub": "Max: 16 mg/day"
      },
      {
        "label": "ONSET / DURATION",
        "value": "5-15 min onset (inhaled)",
        "sub": "3-6 hours duration"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Asthma exacerbation, COPD, exercise-induced bronchospasm, hyperkalemia",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Ventolin",
        "form": "MDI, Nebules, Syrup, Rotacaps",
        "strengths": "100 mcg/puff MDI; 2.5 mg/3 mL neb; 2 mg/5 mL syrup; 200 mcg rotacap",
        "manufacturer": "GSK",
        "region": "USA, UK, Europe, Global"
      },
      {
        "name": "Venex",
        "form": "MDI, Nebules, Tablets, Syrup",
        "strengths": "100 mcg/puff MDI; 2.5 mg neb; 4 mg tab; 2 mg/5 mL syrup",
        "manufacturer": "Sami Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Zaftolin",
        "form": "MDI, Nebules, Syrup",
        "strengths": "100 mcg/puff; 2.5 mg neb; 2 mg/5 mL syrup",
        "manufacturer": "Zafa Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Salbo HFA",
        "form": "MDI",
        "strengths": "100 mcg/puff HFA",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, Asia"
      },
      {
        "name": "Bretheez",
        "form": "MDI, Nebules",
        "strengths": "100 mcg/puff; 2.5 mg neb",
        "manufacturer": "PharmEvo",
        "region": "Pakistan"
      },
      {
        "name": "Buventol",
        "form": "MDI, Nebules, Syrup",
        "strengths": "100 mcg/puff; 2.5 mg neb; 2 mg/5 mL syrup",
        "manufacturer": "Bosch Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Salbulin",
        "form": "MDI, Rotacaps",
        "strengths": "100 mcg/puff; 200 mcg rotacap",
        "manufacturer": "Cipla",
        "region": "Pakistan, India"
      },
      {
        "name": "Asthavent",
        "form": "MDI, Nebules",
        "strengths": "100 mcg/puff; 2.5 mg neb",
        "manufacturer": "Hilton Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Aerolin",
        "form": "MDI, Nebules, Syrup",
        "strengths": "100 mcg/puff; 2.5 mg neb; 2 mg/5 mL syrup",
        "manufacturer": "GlaxoSmithKline Pakistan",
        "region": "Pakistan"
      },
      {
        "name": "Salamax",
        "form": "MDI, Nebules",
        "strengths": "100 mcg/puff; 2.5 mg neb",
        "manufacturer": "Maxitech Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Broncolin",
        "form": "Syrup",
        "strengths": "2 mg/5 mL",
        "manufacturer": "Barrett Hodgson Pakistan",
        "region": "Pakistan"
      },
      {
        "name": "Aerodyl",
        "form": "MDI, Nebules",
        "strengths": "100 mcg/puff; 2.5 mg neb",
        "manufacturer": "Ferozsons",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Beta-Blockers (Propranolol, Atenolol)",
        "effect": "Antagonism of bronchodilator effect; may provoke bronchospasm.",
        "severity": "Major"
      },
      {
        "drugClass": "Other Beta-Agonists",
        "effect": "Additive sympathetic stimulation, increased risk of tachycardia and hypokalemia.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methylxanthines (Theophylline)",
        "effect": "Increased risk of hypokalemia and cardiac arrhythmias.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics (Loop, Thiazide)",
        "effect": "Potentiation of hypokalemia, especially with high doses.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Digoxin",
        "effect": "Hypokalemia-induced digoxin toxicity risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "MAOIs and Tricyclic Antidepressants",
        "effect": "Increased cardiovascular effects of salbutamol (tachycardia, hypertension).",
        "severity": "Moderate"
      }
    ],
    "warning": "Excessive use may indicate worsening asthma. Warn patients not to exceed prescribed frequency. Seek medical attention if relief lasts <3 hours or >1 canister/month. Caution in hyperthyroidism, CVD, and diabetes. May cause fine tremor and tachycardia.",
    "subCategoryId": "bronchodilators"
  },
  {
    "id": "chlorpheniramine",
    "categoryId": "respiratory-allergy",
    "genericName": "Chlorpheniramine",
    "brandNames": "Piriton, Allergycare, Glomin, Histagic, Allergex, Xyphen",
    "description": "Antihistamine (H1 blocker); for allergic rhinitis, urticaria, common cold symptoms. Sedating.",
    "status": "OTC + Rx",
    "isCommonlyPrescribed": true,
    "isOTCAndRx": true,
    "primaryIndication": "Allergic Rhinitis and Urticaria",
    "dosageForm": "Oral/IM/IV/SC",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "4 mg q4-6h",
        "sub": "Max: 24 mg/day"
      },
      {
        "label": "SEVERE ALLERGY (Parenteral)",
        "value": "10-20 mg IM/IV/SC",
        "sub": "Single dose, may repeat"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "12-15 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Allergic rhinitis, urticaria, angioedema, anaphylaxis (adjunct), common cold symptoms, pruritus",
        "sub": null
      },
      {
        "label": "PEDIATRIC DOSE",
        "value": "1-2 mg q4-6h (6-12 yrs)",
        "sub": "Max: 12 mg/day"
      }
    ],
    "brandTable": [
      {
        "name": "Piriton",
        "form": "Tablets, Syrup, Injection",
        "strengths": "4 mg tablets; 2 mg/5 mL syrup; 10 mg/mL injection",
        "manufacturer": "GSK",
        "region": "UK, Europe, Pakistan, Global"
      },
      {
        "name": "Allergycare",
        "form": "Tablets",
        "strengths": "4 mg",
        "manufacturer": "Various (Generic)",
        "region": "USA, UK"
      },
      {
        "name": "Glomin",
        "form": "Tablets, Syrup",
        "strengths": "4 mg; 2 mg/5 mL syrup",
        "manufacturer": "Zafa Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Histagic",
        "form": "Tablets, Syrup, Injection",
        "strengths": "4 mg; 2 mg/5 mL; 10 mg/mL IM/IV",
        "manufacturer": "Sami Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Allergex",
        "form": "Tablets, Syrup",
        "strengths": "4 mg; 2 mg/5 mL syrup",
        "manufacturer": "Hilton Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Xyphen",
        "form": "Tablets, Syrup",
        "strengths": "4 mg; 2 mg/5 mL syrup",
        "manufacturer": "PharmEvo",
        "region": "Pakistan"
      },
      {
        "name": "Triton",
        "form": "Tablet, Syrup",
        "strengths": "4 mg; 2 mg/5 mL",
        "manufacturer": "Wilson's Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Practin",
        "form": "Tablet, Syrup",
        "strengths": "4 mg; 2 mg/5 mL",
        "manufacturer": "Efroze Chemical Industries",
        "region": "Pakistan"
      },
      {
        "name": "C-Phen",
        "form": "Tablet, Syrup",
        "strengths": "4 mg; 2 mg/5 mL",
        "manufacturer": "Platinum Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Alergin",
        "form": "Tablet, Syrup",
        "strengths": "4 mg; 2 mg/5 mL",
        "manufacturer": "Barrett Hodgson Pakistan",
        "region": "Pakistan"
      },
      {
        "name": "Nistamin",
        "form": "Tablet, Syrup",
        "strengths": "4 mg; 2 mg/5 mL",
        "manufacturer": "Polyfine",
        "region": "Pakistan"
      },
      {
        "name": "Alkram",
        "form": "Tablet, Syrup",
        "strengths": "4 mg; 2 mg/5 mL",
        "manufacturer": "Ray Pharma",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "CNS Depressants (Alcohol, Benzodiazepines, Opioids)",
        "effect": "Additive sedation and CNS depression.",
        "severity": "Moderate"
      },
      {
        "drugClass": "MAOIs",
        "effect": "Increased anticholinergic effects; risk of severe hypotension and urinary retention.",
        "severity": "Major"
      },
      {
        "drugClass": "Anticholinergics (Atropine, TCAs)",
        "effect": "Additive anticholinergic effects (dry mouth, urinary retention, blurred vision).",
        "severity": "Moderate"
      },
      {
        "drugClass": "Phenytoin",
        "effect": "Chlorpheniramine may inhibit phenytoin metabolism, increasing phenytoin levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Epinephrine",
        "effect": "Chlorpheniramine may block or reverse the pressor effect of epinephrine.",
        "severity": "Moderate"
      }
    ],
    "warning": "Causes significant sedation - caution when driving or operating machinery. Avoid alcohol. Elderly patients more susceptible to confusion, urinary retention, and falls. Contraindicated in narrow-angle glaucoma, BPH, and during MAOI therapy. First-generation antihistamine; second-generation preferred for chronic use.",
    "subCategoryId": "antihistamines"
  },
  {
    "id": "prednisolone",
    "categoryId": "respiratory-allergy",
    "genericName": "Prednisolone",
    "brandNames": "Deltacortril, Fortipred, Neupred, Prednisolone (Pfizer), Predsol-25",
    "description": "Systemic glucocorticoid; potent anti-inflammatory and immunosuppressant.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Acute Asthma and Inflammation",
    "dosageForm": "Oral/IV/IM",
    "stats": [
      {
        "label": "ACUTE ASTHMA DOSE",
        "value": "40-50 mg once daily",
        "sub": "5-7 day course, no taper needed"
      },
      {
        "label": "MODERATE INFLAMMATORY DOSE",
        "value": "5-60 mg once daily",
        "sub": "Titrate to lowest effective dose"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset (oral)",
        "sub": "18-36 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Acute asthma exacerbation, COPD exacerbation, allergic reactions, RA, SLE, IBD, nephrotic syndrome, organ transplantation",
        "sub": null
      },
      {
        "label": "PEDIATRIC DOSE",
        "value": "1-2 mg/kg/day",
        "sub": "Max: 60 mg/day"
      }
    ],
    "brandTable": [
      {
        "name": "Deltacortril",
        "form": "Tablets, Oral Solution",
        "strengths": "5 mg, 25 mg; 5 mg/5 mL oral solution",
        "manufacturer": "Pfizer",
        "region": "UK, Europe, Asia, Pakistan"
      },
      {
        "name": "Fortipred",
        "form": "Tablets",
        "strengths": "5 mg, 10 mg, 20 mg",
        "manufacturer": "Sami Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Neupred",
        "form": "Tablets",
        "strengths": "5 mg, 10 mg, 20 mg, 25 mg",
        "manufacturer": "Neutro Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Prednisolone (Pfizer)",
        "form": "Tablets",
        "strengths": "5 mg, 25 mg",
        "manufacturer": "Pfizer",
        "region": "Pakistan, Global"
      },
      {
        "name": "Predsol-25",
        "form": "Tablets",
        "strengths": "25 mg",
        "manufacturer": "Grays Inn (PGI)",
        "region": "Pakistan"
      },
      {
        "name": "Predcap",
        "form": "Capsule, Tablet, Syrup",
        "strengths": "5 mg, 10 mg, 20 mg; 5 mg/5 mL syrup",
        "manufacturer": "Optimus Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Predfort",
        "form": "Tablet",
        "strengths": "5 mg, 10 mg, 20 mg",
        "manufacturer": "PharmEvo",
        "region": "Pakistan"
      },
      {
        "name": "Prednil",
        "form": "Tablet, Syrup",
        "strengths": "5 mg; 5 mg/5 mL",
        "manufacturer": "Bosch Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Preges",
        "form": "Tablet, Syrup",
        "strengths": "5 mg, 10 mg, 20 mg; 5 mg/5 mL",
        "manufacturer": "Hilton Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Predo",
        "form": "Tablet, Syrup",
        "strengths": "5 mg, 20 mg; 5 mg/5 mL",
        "manufacturer": "Wise Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Solipred",
        "form": "Tablet, Injection",
        "strengths": "5 mg, 20 mg, 25 mg; 25 mg/mL injection",
        "manufacturer": "Efroze Chemical Industries",
        "region": "Pakistan"
      },
      {
        "name": "Cortal",
        "form": "Tablet, Syrup",
        "strengths": "5 mg; 5 mg/5 mL",
        "manufacturer": "Ray Pharma",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "NSAIDs (Ibuprofen, Aspirin)",
        "effect": "Increased risk of GI ulceration and bleeding.",
        "severity": "Major"
      },
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Prednisolone may alter anticoagulant effect; monitor INR closely.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Antidiabetic Agents",
        "effect": "Hyperglycemic effect of prednisolone reduces glycemic control; may need dose adjustment.",
        "severity": "Moderate"
      },
      {
        "drugClass": "CYP3A4 Inducers (Rifampicin, Phenytoin)",
        "effect": "Increased prednisolone clearance, reduced efficacy.",
        "severity": "Moderate"
      },
      {
        "drugClass": "CYP3A4 Inhibitors (Ketoconazole, Ritonavir)",
        "effect": "Increased prednisolone levels, risk of adrenal suppression.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Vaccines (Live Attenuated)",
        "effect": "Immunosuppression may increase risk of disseminated infection with live vaccines.",
        "severity": "Major"
      }
    ],
    "warning": "Long-term use: adrenal suppression, osteoporosis, hyperglycemia, weight gain, cataracts, glaucoma, increased infection risk. Do not stop abruptly after prolonged therapy - taper gradually. Short courses (5-7 days) for acute asthma generally do not require taper. Avoid live vaccines during therapy.",
    "subCategoryId": "corticosteroids"
  }
];
