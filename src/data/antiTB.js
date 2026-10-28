// data/antiTB.js
export const antiTB = [
  {
    "id": "isoniazid",
    "categoryId": "antibiotics",
    "genericName": "Isoniazid",
    "brandNames": "Neopar, Isokin, Isoniazid (AGP), Cox Isoniazid, Medixon",
    "description": "Inhibits synthesis of mycolic acids, essential for the mycobacterial cell wall. Bactericidal against actively replicating M. tuberculosis.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Active TB and Latent TB Infection",
    "specialField": {
      "label": "Mechanism",
      "value": "Mycolic acid synthesis inhibitor"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "5 mg/kg once daily",
        "sub": "Max: 300 mg/day"
      },
      {
        "label": "PEDIATRIC DOSE",
        "value": "10-20 mg/kg once daily",
        "sub": "Max: 300 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "Rapid absorption",
        "sub": "1-4 hours (fast acetylators); 2-5 hours (slow acetylators)"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Active TB (pulmonary and extrapulmonary), LTBI prophylaxis (6-9 months)",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Neopar",
        "form": "Tablet",
        "strengths": "100 mg",
        "manufacturer": "Sami Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Isokin",
        "form": "Tablet",
        "strengths": "100 mg, 300 mg",
        "manufacturer": "Abbott Laboratories",
        "region": "Pakistan"
      },
      {
        "name": "Isoniazid (AGP)",
        "form": "Tablet",
        "strengths": "100 mg, 300 mg",
        "manufacturer": "AGP Limited",
        "region": "Pakistan"
      },
      {
        "name": "Cox Isoniazid",
        "form": "Tablet",
        "strengths": "100 mg",
        "manufacturer": "Cox Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Medixon",
        "form": "Tablet",
        "strengths": "100 mg",
        "manufacturer": "Medicraft Pharmaceuticals",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Rifampicin",
        "effect": "Increased hepatotoxicity risk. Both are first-line anti-TB agents requiring close LFT monitoring.",
        "severity": "Major"
      },
      {
        "drugClass": "Phenytoin",
        "effect": "Isoniazid inhibits CYP2C9 and CYP2C19, increasing phenytoin levels and potential neurotoxicity.",
        "severity": "Major"
      },
      {
        "drugClass": "Carbamazepine",
        "effect": "Increased carbamazepine levels due to CYP3A4 inhibition; monitor levels closely.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Alcohol (Chronic)",
        "effect": "Increased risk of hepatitis. Patients should avoid alcohol during therapy.",
        "severity": "Major"
      },
      {
        "drugClass": "Antacids (Aluminum)",
        "effect": "Reduced isoniazid absorption if taken concurrently. Separate by 1-2 hours.",
        "severity": "Minor"
      },
      {
        "drugClass": "Disulfiram",
        "effect": "Increased risk of CNS effects, ataxia, and behavioral changes.",
        "severity": "Moderate"
      }
    ],
    "warning": "BLACK BOX WARNING: Severe and sometimes fatal hepatitis can occur. Monitor LFTs monthly. Peripheral neuropathy risk mitigated by pyridoxine (Vitamin B6) supplementation 10-50 mg/day. Slow acetylators at higher risk of toxicity. Contraindicated in acute liver disease. Discontinue immediately if signs of hepatic reaction develop.",
    "subCategoryId": "first-line-antiTB"
  },
  {
    "id": "rifampicin",
    "categoryId": "antibiotics",
    "genericName": "Rifampicin",
    "brandNames": "Rimactane, R-cin, A-Cin Paed, Neo Rifampicin, Tubacin",
    "description": "Inhibits DNA-dependent RNA polymerase, blocking RNA transcription. Bactericidal against M. tuberculosis.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Active TB and LTBI",
    "specialField": {
      "label": "Potent Inducer",
      "value": "CYP450 enzyme inducer"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "10 mg/kg once daily",
        "sub": "Max: 600 mg/day"
      },
      {
        "label": "ADULT (< 50 kg)",
        "value": "450 mg once daily",
        "sub": null
      },
      {
        "label": "ADULT (>= 50 kg)",
        "value": "600 mg once daily",
        "sub": null
      },
      {
        "label": "PEDIATRIC DOSE",
        "value": "10-20 mg/kg once daily",
        "sub": "Max: 600 mg/day"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Active TB (pulmonary and extrapulmonary), LTBI, other mycobacterial infections",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Rimactane",
        "form": "Capsule",
        "strengths": "300 mg",
        "manufacturer": "Syngene International",
        "region": "Pakistan, Global"
      },
      {
        "name": "R-cin",
        "form": "Capsule",
        "strengths": "300 mg",
        "manufacturer": "AGP Limited",
        "region": "Pakistan"
      },
      {
        "name": "A-Cin Paed",
        "form": "Powder for Suspension",
        "strengths": "300 mg (5 mL)",
        "manufacturer": "AGP Limited",
        "region": "Pakistan"
      },
      {
        "name": "Neo Rifampicin",
        "form": "Capsule",
        "strengths": "300 mg",
        "manufacturer": "Sami Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Tubacin",
        "form": "Capsule",
        "strengths": "300 mg",
        "manufacturer": "Barrett Hodgson Pakistan",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Oral Contraceptives",
        "effect": "Reduced efficacy due to CYP450 induction. Alternative contraception strongly recommended.",
        "severity": "Major"
      },
      {
        "drugClass": "Warfarin and Anticoagulants",
        "effect": "Dramatically reduced anticoagulant effect through CYP induction. Monitor INR closely.",
        "severity": "Major"
      },
      {
        "drugClass": "Antiretrovirals (Protease Inhibitors, NNRTIs)",
        "effect": "Significantly reduced antiretroviral levels. Dose adjustment or alternative regimens required.",
        "severity": "Major"
      },
      {
        "drugClass": "Methadone",
        "effect": "Reduced methadone levels leading to withdrawal symptoms. May require dose increase.",
        "severity": "Major"
      },
      {
        "drugClass": "Sulfonylureas",
        "effect": "Reduced hypoglycemic effect. Monitor blood glucose and adjust dose.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Reduced steroid efficacy via CYP induction. Double steroid dose if concurrent use.",
        "severity": "Moderate"
      }
    ],
    "warning": "Causes harmless red-orange discoloration of urine, sweat, tears, and contact lenses. Potent CYP450 inducer affecting numerous medications. Hepatotoxicity risk, especially when combined with isoniazid. Monitor LFTs regularly. May cause thrombocytopenia, especially with intermittent therapy. Contraindicated in patients with active liver disease.",
    "subCategoryId": "first-line-antiTB"
  },
  {
    "id": "pyrazinamide",
    "categoryId": "antibiotics",
    "genericName": "Pyrazinamide",
    "brandNames": "Pyzina, PZA, Pyrazinamide (Atco), Pyrazinamide (CCL), Cox Pyrazinamide",
    "description": "Activated by bacterial pyrazinamidase to pyrazinoic acid, which lowers pH and disrupts membrane energetics. Bactericidal, especially in acidic environments.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Intensive Phase of TB Treatment",
    "specialField": {
      "label": "Activity",
      "value": "Bactericidal in acidic pH"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "15-30 mg/kg once daily",
        "sub": "Max: 2 g/day"
      },
      {
        "label": "ADULT (Intermittent)",
        "value": "50-70 mg/kg twice or thrice weekly",
        "sub": null
      },
      {
        "label": "PEDIATRIC DOSE",
        "value": "30-40 mg/kg once daily",
        "sub": "Max: 2 g/day"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Intensive phase of TB (first 2 months), semi-dormant mycobacterial clearance",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Pyzina",
        "form": "Tablet",
        "strengths": "500 mg, 250 mg",
        "manufacturer": "Highnoon Laboratories",
        "region": "Pakistan"
      },
      {
        "name": "PZA",
        "form": "Tablet",
        "strengths": "500 mg",
        "manufacturer": "Ferozsons Laboratories",
        "region": "Pakistan"
      },
      {
        "name": "Pyrazinamide (Atco)",
        "form": "Tablet",
        "strengths": "500 mg",
        "manufacturer": "Atco Laboratories",
        "region": "Pakistan"
      },
      {
        "name": "Pyrazinamide (CCL)",
        "form": "Tablet",
        "strengths": "500 mg",
        "manufacturer": "CCL Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Cox Pyrazinamide",
        "form": "Tablet",
        "strengths": "500 mg",
        "manufacturer": "Cox Pharmaceuticals",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Rifampicin",
        "effect": "Combined hepatotoxicity risk. Both used in intensive phase; monitor LFTs closely.",
        "severity": "Major"
      },
      {
        "drugClass": "Antacids (Aluminum-based)",
        "effect": "Reduced pyrazinamide absorption. Separate administration by 1-2 hours.",
        "severity": "Minor"
      },
      {
        "drugClass": "Uricosuric Agents (Probenecid, Sulfinpyrazone)",
        "effect": "Pyrazinamide inhibits renal urate excretion, reducing uricosuric efficacy and increasing hyperuricemia risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Allopurinol",
        "effect": "Increased risk of hyperuricemia-related adverse effects. Pyrazinamide raises uric acid levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Isoniazid",
        "effect": "Synergistic hepatotoxicity. Both are hepatotoxic; combination requires close monitoring.",
        "severity": "Major"
      },
      {
        "drugClass": "Cyclosporine",
        "effect": "Reduced cyclosporine levels via CYP induction.",
        "severity": "Moderate"
      }
    ],
    "warning": "Most common adverse effect is hyperuricemia causing arthralgia and gout. Hepatotoxicity with prolonged use. Monitor LFTs and serum uric acid. Contraindicated in patients with severe hepatic impairment. May cause photosensitivity and GI upset. Discontinue if signs of hepatic injury or gout flare.",
    "subCategoryId": "first-line-antiTB"
  },
  {
    "id": "ethambutol",
    "categoryId": "antibiotics",
    "genericName": "Ethambutol",
    "brandNames": "Myambutol, Combutol, Ethambutol (AGP), Cox Ethambutol, Ebutol",
    "description": "Inhibits arabinosyl transferases, blocking synthesis of the cell wall component arabinogalactan. Bacteriostatic.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Intensive Phase of TB to Prevent Resistance",
    "specialField": {
      "label": "Mechanism",
      "value": "Cell wall synthesis inhibitor"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "15-25 mg/kg once daily",
        "sub": "First 60 days: 25 mg/kg, then 15 mg/kg"
      },
      {
        "label": "ADULT (Retreatment)",
        "value": "25 mg/kg once daily for first 60 days",
        "sub": null
      },
      {
        "label": "ADULT (Intermittent)",
        "value": "25-30 mg/kg thrice weekly or 50 mg/kg twice weekly",
        "sub": null
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Intensive phase of active TB, prevention of drug resistance",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Myambutol",
        "form": "Tablet",
        "strengths": "200 mg, 400 mg",
        "manufacturer": "Pfizer Pakistan",
        "region": "Pakistan, Global"
      },
      {
        "name": "Combutol",
        "form": "Tablet",
        "strengths": "400 mg",
        "manufacturer": "Highnoon Laboratories",
        "region": "Pakistan"
      },
      {
        "name": "Ethambutol (AGP)",
        "form": "Tablet",
        "strengths": "400 mg",
        "manufacturer": "AGP Limited",
        "region": "Pakistan"
      },
      {
        "name": "Cox Ethambutol",
        "form": "Tablet",
        "strengths": "400 mg",
        "manufacturer": "Cox Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Ebutol",
        "form": "Tablet",
        "strengths": "400 mg",
        "manufacturer": "Sami Pharmaceuticals",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Aluminum-based Antacids",
        "effect": "Reduced ethambutol absorption. Administer ethambutol at least 1-2 hours before antacids.",
        "severity": "Minor"
      },
      {
        "drugClass": "Isoniazid",
        "effect": "Increased risk of peripheral neuropathy and hepatotoxicity when combined.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Rifampicin",
        "effect": "Combined use is standard in intensive phase but increases hepatotoxicity monitoring requirements.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Ethionamide",
        "effect": "Additive optic nerve toxicity risk. Avoid concurrent use if possible.",
        "severity": "Major"
      },
      {
        "drugClass": "Neurotoxic Agents",
        "effect": "Additive neurotoxic effects, particularly peripheral neuropathy.",
        "severity": "Moderate"
      }
    ],
    "warning": "BLACK BOX WARNING: Optic neuritis (dose-dependent) - decreased visual acuity, color blindness (red-green discrimination). Baseline and monthly visual acuity and color vision testing required. Discontinue immediately if visual changes occur. Not recommended in children under 13 years who cannot be monitored for visual acuity. Contraindicated in patients with optic neuritis.",
    "subCategoryId": "first-line-antiTB"
  },
  {
    "id": "levofloxacin",
    "categoryId": "antiTB",
    "genericName": "Levofloxacin",
    "brandNames": "Levoquest, Rumafox, Levomed",
    "description": "A fluoroquinolone antibiotic. Inhibits bacterial DNA gyrase and topoisomerase IV, enzymes essential for DNA replication and repair.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "MDR-TB and Fluoroquinolone-Susceptible TB",
    "specialField": {
      "label": "Class",
      "value": "Fluoroquinolone"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE (MDR-TB)",
        "value": "15-20 mg/kg once daily",
        "sub": "Max: 1,500 mg/day"
      },
      {
        "label": "ADULT (Preventive Therapy)",
        "value": "15-20 mg/kg once daily",
        "sub": "Max: 1,000 mg/day"
      },
      {
        "label": "PEDIATRIC DOSE",
        "value": "15-20 mg/kg once daily",
        "sub": "Max: 1,000 mg/day"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "MDR/XDR-TB, fluoroquinolone-susceptible TB when first-line agents contraindicated",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Levoquest",
        "form": "Tablet",
        "strengths": "500 mg",
        "manufacturer": "Harmann Pharmaceutical Laboratories",
        "region": "Pakistan"
      },
      {
        "name": "Rumafox",
        "form": "Tablet",
        "strengths": "500 mg",
        "manufacturer": "Medisure Laboratories Pakistan",
        "region": "Pakistan"
      },
    ],
    "interactions": [
      {
        "drugClass": "Antacids (Mg, Al, Ca-based)",
        "effect": "Chelation reduces levofloxacin absorption. Separate by 2-4 hours.",
        "severity": "Major"
      },
      {
        "drugClass": "Warfarin",
        "effect": "Increased anticoagulant effect and bleeding risk. Monitor INR closely.",
        "severity": "Major"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Increased CNS stimulation and seizure risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Oral Hypoglycemics",
        "effect": "Fluoroquinolones may cause dysglycemia. Monitor blood glucose closely.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Increased risk of tendon rupture, especially in elderly.",
        "severity": "Major"
      },
      {
        "drugClass": "QT-prolonging Agents",
        "effect": "Additive QT interval prolongation. Avoid combination with other QT-prolonging drugs.",
        "severity": "Major"
      }
    ],
    "warning": "BLACK BOX WARNING: Tendinitis and tendon rupture risk (increased in elderly, renal failure, and with corticosteroids). Exacerbation of myasthenia gravis. Peripheral neuropathy. CNS effects including seizures and dizziness. QT prolongation risk. Avoid in children unless MDR-TB. Dysglycemia including hypoglycemia and hyperglycemia.",
    "subCategoryId": "second-line-antiTB"
  },
  {
    "id": "moxifloxacin",
    "categoryId": "antiTB",
    "genericName": "Moxifloxacin",
    "brandNames": "Xiflox, Barimox, Mofest",
    "description": "A fourth-generation fluoroquinolone with enhanced activity against gram-positive organisms and M. tuberculosis. Inhibits DNA gyrase and topoisomerase IV.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "MDR-TB (Shorter Regimens)",
    "specialField": {
      "label": "Generation",
      "value": "4th-generation fluoroquinolone"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "400 mg once daily",
        "sub": "May use up to 800 mg daily in some MDR-TB regimens"
      },
      {
        "label": "PEDIATRIC DOSE (< 15 yrs)",
        "value": "10-15 mg/kg once daily",
        "sub": "Max: 400 mg/day"
      },
      {
        "label": "PEDIATRIC DOSE (>= 15 yrs)",
        "value": "Use adult dosing (400 mg once daily)",
        "sub": null
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Core component of shorter MDR-TB regimens, fluoroquinolone-susceptible TB",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Xiflox",
        "form": "Tablet",
        "strengths": "400 mg",
        "manufacturer": "Getz Pharma Pvt. Ltd",
        "region": "Pakistan"
      },
      {
        "name": "Barimox",
        "form": "Tablet",
        "strengths": "400 mg",
        "manufacturer": "Barrett Hodgson Pakistan Pvt. Ltd",
        "region": "Pakistan"
      },
      {
        "name": "Mofest",
        "form": "Tablet, IV Infusion",
        "strengths": "400 mg",
        "manufacturer": "Sami Pharmaceuticals",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Antacids and Mineral Supplements",
        "effect": "Chelation significantly reduces absorption. Separate moxifloxacin by at least 4 hours.",
        "severity": "Major"
      },
      {
        "drugClass": "Class IA and III Antiarrhythmics",
        "effect": "Increased risk of QT prolongation and torsades de pointes. Avoid combination.",
        "severity": "Major"
      },
      {
        "drugClass": "Warfarin",
        "effect": "Enhanced anticoagulant effect. Monitor INR frequently.",
        "severity": "Major"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Increased risk of tendon rupture.",
        "severity": "Major"
      },
      {
        "drugClass": "Oral Hypoglycemics",
        "effect": "Risk of both hypoglycemia and hyperglycemia. Monitor glucose levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Increased CNS adverse effects including seizure risk.",
        "severity": "Moderate"
      }
    ],
    "warning": "BLACK BOX WARNING: Increased risk of tendinitis and tendon rupture. Avoid in patients with known QT prolongation or uncorrected electrolyte disturbances. Hepatotoxicity risk including fulminant hepatitis. CNS effects including dizziness and seizures. More potent QT prolongation than levofloxacin. Avoid in pregnancy and breastfeeding unless MDR-TB.",
    "subCategoryId": "second-line-antiTB"
  },
  {
    "id": "clofazimine",
    "categoryId": "antiTB",
    "genericName": "Clofazimine",
    "brandNames": "Lamprene",
    "description": "A riminophenazine dye with both antibacterial and anti-inflammatory properties. May interfere with bacterial DNA replication.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "MDR-TB and XDR-TB",
    "specialField": {
      "label": "Unique Property",
      "value": "Anti-inflammatory + Anti-TB"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "50-100 mg once daily",
        "sub": "Often 100 mg daily in MDR-TB regimens"
      },
      {
        "label": "PEDIATRIC DOSE",
        "value": "2-5 mg/kg once daily",
        "sub": "Max: 100 mg/day"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Core component of all-oral shorter MDR-TB regimens, XDR-TB, leprosy",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Lamprene",
        "form": "Capsule",
        "strengths": "50 mg, 100 mg",
        "manufacturer": "Novartis",
        "region": "Pakistan (limited availability)"
      }
    ],
    "interactions": [
      {
        "drugClass": "QT-prolonging Agents",
        "effect": "Additive QT prolongation risk. Monitor ECG if combined with other QT-prolonging drugs.",
        "severity": "Moderate"
      },
      {
        "drugClass": "CYP3A4 Inhibitors (Ketoconazole, Ritonavir)",
        "effect": "Increased clofazimine plasma levels. Monitor for toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "CYP3A4 Inducers (Rifampicin, Efavirenz)",
        "effect": "Reduced clofazimine levels potentially decreasing efficacy.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Antacids and Iron Supplements",
        "effect": "May reduce clofazimine absorption. Separate administration by 2 hours.",
        "severity": "Minor"
      },
      {
        "drugClass": "Alcohol",
        "effect": "May increase GI adverse effects including abdominal pain.",
        "severity": "Minor"
      }
    ],
    "warning": "Causes harmless red-brown to black discoloration of skin, conjunctiva, cornea, urine, and body fluids. Skin discoloration is reversible but may take months to years to resolve after discontinuation. GI intolerance including abdominal pain and diarrhea. QT prolongation risk. Photosensitivity. May cause ichthyosis and dry skin. Not widely available in Pakistan.",
    "subCategoryId": "second-line-antiTB"
  },
  {
    "id": "cycloserine",
    "categoryId": "antiTB",
    "genericName": "Cycloserine",
    "brandNames": "Ethomid, Enamid, Usemid",
    "description": "Inhibits alanine racemase and D-alanine ligase, enzymes essential for peptidoglycan synthesis and cell wall formation.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "MDR/XDR-TB",
    "specialField": {
      "label": "CNS Penetration",
      "value": "Excellent CSF penetration"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "10-15 mg/kg once daily",
        "sub": "Max: 1,000 mg/day in 2 divided doses"
      },
      {
        "label": "PEDIATRIC DOSE",
        "value": "10-20 mg/kg once daily",
        "sub": "Max: 750 mg/day"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "MDR/XDR-TB regimens when susceptibility demonstrated",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Ethomid",
        "form": "Tablet",
        "strengths": "250 mg",
        "manufacturer": "Schazoo Zaka",
        "region": "Pakistan"
      },
      {
        "name": "Enamid",
        "form": "Tablet",
        "strengths": "250 mg",
        "manufacturer": "Century Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Usemid",
        "form": "Tablet",
        "strengths": "250 mg",
        "manufacturer": "Genix Pharma",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Alcohol",
        "effect": "Increased risk of CNS toxicity including seizures. Avoid alcohol completely.",
        "severity": "Major"
      },
      {
        "drugClass": "Isoniazid",
        "effect": "Additive CNS toxicity including dizziness, drowsiness, and seizure risk. Supplement with pyridoxine.",
        "severity": "Major"
      },
      {
        "drugClass": "Phenytoin",
        "effect": "Cycloserine may increase phenytoin levels and phenytoin may increase cycloserine CNS effects.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Ethionamide",
        "effect": "Additive CNS and neurotoxic effects including psychosis risk.",
        "severity": "Major"
      },
      {
        "drugClass": "MAO Inhibitors",
        "effect": "Increased risk of hypertensive crisis and CNS excitation. Avoid combination.",
        "severity": "Major"
      }
    ],
    "warning": "CNS toxicity is dose-limiting: seizures, psychosis, depression, confusion, and suicidal ideation. Always co-administer with pyridoxine (Vitamin B6) 50-100 mg/day to mitigate neurotoxicity. Monitor serum levels (therapeutic: 20-35 mcg/mL). Contraindicated in epilepsy, severe anxiety, psychosis, and renal impairment. Dose adjustment required in renal failure.",
    "subCategoryId": "second-line-antiTB"
  }
];
