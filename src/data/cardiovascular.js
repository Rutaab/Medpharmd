// data/cardiovascular.js
export const cardiovascular = [
  {
    "id": "propranolol",
    "categoryId": "cardiovascular",
    "genericName": "Propranolol",
    "brandNames": "Inderal, Blockonol, Cara-Prop, Aviocardyl, Bedranol SR",
    "description": "Non-selective beta-blocker widely used for hypertension, anxiety, migraine prophylaxis, and essential tremor. Blocks both beta-1 and beta-2 receptors, making it effective for a broader range of conditions but requiring caution in patients with asthma.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Anxiety, Migraine Prophylaxis",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "40 mg twice daily (hypertension); 10-40 mg TID (anxiety)",
        "sub": "Max: 640 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30 min onset",
        "sub": "3-6 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Hypertension, angina, arrhythmias, essential tremor, migraine prophylaxis, thyrotoxicosis, anxiety/panic",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Inderal",
        "form": "Tablets",
        "strengths": "10 mg, 40 mg, 80 mg, 160 mg",
        "manufacturer": "ICI Pakistan / The Searle Company Ltd.",
        "region": "Pakistan, Global"
      },
      {
        "name": "Blockonol",
        "form": "Tablets",
        "strengths": "10 mg, 40 mg",
        "manufacturer": "Lisko Pakistan (PVT) LTD",
        "region": "Pakistan"
      },
      {
        "name": "Cara-Prop",
        "form": "Tablets",
        "strengths": "10 mg",
        "manufacturer": "Caraway Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Aviocardyl",
        "form": "Tablets",
        "strengths": "10 mg, 40 mg",
        "manufacturer": "Sanofi",
        "region": "Pakistan"
      },
    ],
    "interactions": [
      {
        "drugClass": "Calcium Channel Blockers (Verapamil, Diltiazem)",
        "effect": "Increased risk of bradycardia and AV block.",
        "severity": "Major"
      },
      {
        "drugClass": "Antidiabetic Agents",
        "effect": "Propranolol masks tachycardia of hypoglycemia; may prolong hypoglycemic effect.",
        "severity": "Moderate"
      },
      {
        "drugClass": "CYP1A2 Inhibitors (Cimetidine, Fluvoxamine)",
        "effect": "Increased propranolol plasma concentrations.",
        "severity": "Moderate"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive effect.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Digoxin",
        "effect": "Increased risk of bradycardia.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Epinephrine",
        "effect": "Non-selective beta-blockade may lead to hypertensive crisis.",
        "severity": "Major"
      }
    ],
    "warning": "Never stop abruptly - taper gradually to avoid rebound hypertension, angina worsening, or MI. Caution in asthma/COPD due to non-selective beta-blockade. Contraindicated in sinus bradycardia, heart block, cardiogenic shock, and pheochromocytoma (without alpha-blockade).",
    "subCategoryId": "beta-blockers"
  },
  {
    "id": "metoprolol",
    "categoryId": "cardiovascular",
    "genericName": "Metoprolol",
    "brandNames": "Mepresor, Betaloc ZOK, Merof, Fynkard, Carsef, Embeta",
    "description": "Cardioselective beta-1 blocker commonly used for hypertension, angina, heart failure, and post-MI management. Available in both immediate-release and controlled-release (ZOK) formulations.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Heart Failure, Post-MI",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "50-100 mg once daily (ER); 100-200 mg/day in divided doses (IR)",
        "sub": "Heart failure: 12.5-25 mg once daily, up to 200 mg"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "3-7 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Hypertension, angina, heart failure (stable), arrhythmias, post-MI, migraine prophylaxis",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Mepresor",
        "form": "Tablets, Injection",
        "strengths": "50 mg, 100 mg; 5 mg/5 mL ampoule",
        "manufacturer": "Novartis Pharmaceuticals (PVT.) LTD.",
        "region": "Pakistan"
      },
      {
        "name": "Betaloc ZOK",
        "form": "Controlled Release Tablets",
        "strengths": "25 mg, 50 mg, 100 mg",
        "manufacturer": "Barrett Hodgson Pakistan (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Merof",
        "form": "Tablets",
        "strengths": "25 mg, 50 mg, 100 mg",
        "manufacturer": "Atco Laboratories Limited",
        "region": "Pakistan"
      },
      {
        "name": "Fynkard",
        "form": "Tablets",
        "strengths": "25 mg",
        "manufacturer": "Fynk Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Carsof",
        "form": "Tablets",
        "strengths": "50 mg, 100 mg",
        "manufacturer": "Unimark Pharmaceuticals",
        "region": "Pakistan"
      },
    ],
    "interactions": [
      {
        "drugClass": "Calcium Channel Blockers (Verapamil, Diltiazem)",
        "effect": "Additive negative inotropic and chronotropic effects.",
        "severity": "Major"
      },
      {
        "drugClass": "CYP2D6 Inhibitors (Paroxetine, Fluoxetine, Bupropion)",
        "effect": "Increased metoprolol plasma levels, risk of bradycardia.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Digoxin",
        "effect": "Increased risk of bradycardia and heart block.",
        "severity": "Moderate"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive efficacy.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Antidiabetic Agents",
        "effect": "May mask hypoglycemic symptoms (tachycardia).",
        "severity": "Moderate"
      },
      {
        "drugClass": "MAO Inhibitors",
        "effect": "May cause severe hypertension.",
        "severity": "Major"
      }
    ],
    "warning": "Do not stop abruptly - taper over 1-2 weeks. Contraindicated in sick sinus syndrome, heart block, cardiogenic shock, and severe peripheral arterial disease. Use cautiously in asthma/COPD (cardioselective but not selective at high doses). May mask signs of hyperthyroidism.",
    "subCategoryId": "beta-blockers"
  },
  {
    "id": "atenolol",
    "categoryId": "cardiovascular",
    "genericName": "Atenolol",
    "brandNames": "Tenormin, Zatnol, Normitab, Anselof, Tenolot, Atenomax, Beta-One",
    "description": "Cardioselective beta-1 blocker widely prescribed for hypertension, angina, and post-MI management. Has a longer half-life allowing once-daily dosing with reduced CNS penetration compared to propranolol.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Angina, Post-MI",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "50-100 mg once daily",
        "sub": "Max: 100 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "6-7 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Hypertension, angina, post-MI, arrhythmias, migraine prophylaxis",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Tenormin",
        "form": "Tablets",
        "strengths": "50 mg, 100 mg",
        "manufacturer": "Lucky Core Industries Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Zatnol",
        "form": "Tablets",
        "strengths": "50 mg, 100 mg",
        "manufacturer": "ZAFA Pharmaceutical Laboratories (Pvt.) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Normitab",
        "form": "Tablets",
        "strengths": "50 mg, 100 mg",
        "manufacturer": "Nabiqasim Industries (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Tenolot",
        "form": "Tablets",
        "strengths": "50 mg, 100 mg",
        "manufacturer": "Hilton Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Atenomax",
        "form": "Tablets",
        "strengths": "50 mg, 100 mg",
        "manufacturer": "Vega Pharmaceuticals (Pvt.) Ltd.",
        "region": "Pakistan"
      },
    ],
    "interactions": [
      {
        "drugClass": "Calcium Channel Blockers (Verapamil, Diltiazem)",
        "effect": "Additive negative chronotropic effects.",
        "severity": "Major"
      },
      {
        "drugClass": "Clonidine",
        "effect": "Rebound hypertension risk if clonidine is discontinued.",
        "severity": "Major"
      },
      {
        "drugClass": "Digoxin",
        "effect": "Increased risk of bradycardia.",
        "severity": "Moderate"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive effect.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Antidiabetic Agents",
        "effect": "May mask hypoglycemic symptoms.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Reserpine",
        "effect": "Additive bradycardia and hypotension.",
        "severity": "Moderate"
      }
    ],
    "warning": "Avoid abrupt discontinuation. Reduce dose in renal impairment (CrCl <35 mL/min). Contraindicated in sinus bradycardia, heart block, cardiogenic shock, and decompensated heart failure. Caution in asthma/COPD.",
    "subCategoryId": "beta-blockers"
  },
  {
    "id": "bisoprolol",
    "categoryId": "cardiovascular",
    "genericName": "Bisoprolol",
    "brandNames": "Atbeta, Bisolab, Cardicor, Corbis, Probase",
    "description": "Highly cardioselective beta-1 blocker often used as a first-line agent for heart failure and hypertension. Well-tolerated with once-daily dosing and strong evidence for mortality reduction in heart failure.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Heart Failure, Hypertension",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "5-10 mg once daily (hypertension); Start 1.25 mg, up to 10 mg (heart failure)",
        "sub": "Max: 20 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-3 hours onset",
        "sub": "9-12 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Hypertension, angina, heart failure (stable), arrhythmias",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Atbeta",
        "form": "Film-Coated Tablets",
        "strengths": "2.5 mg, 5 mg, 10 mg",
        "manufacturer": "Atco Laboratories",
        "region": "Pakistan"
      },
      {
        "name": "Bisolab",
        "form": "Film-Coated Tablets",
        "strengths": "2.5 mg, 5 mg, 10 mg",
        "manufacturer": "Medisure Laboratories Pakistan (Pvt.) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Cardicor",
        "form": "Tablets",
        "strengths": "2.5 mg, 5 mg, 10 mg",
        "manufacturer": "Merck Serono",
        "region": "Pakistan"
      },
    ],
    "interactions": [
      {
        "drugClass": "Calcium Channel Blockers (Verapamil, Diltiazem)",
        "effect": "Increased risk of hypotension and bradycardia.",
        "severity": "Major"
      },
      {
        "drugClass": "Antiarrhythmics (Amiodarone, Digoxin)",
        "effect": "Additive negative chronotropic effects.",
        "severity": "Moderate"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive efficacy.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Antidiabetic Agents",
        "effect": "May mask signs of hypoglycemia.",
        "severity": "Moderate"
      },
      {
        "drugClass": "MAO Inhibitors",
        "effect": "May cause severe hypertension.",
        "severity": "Major"
      },
      {
        "drugClass": "Clonidine",
        "effect": "Enhanced rebound hypertension on withdrawal.",
        "severity": "Major"
      }
    ],
    "warning": "Heart failure patients: start low (1.25 mg) and titrate slowly. Never discontinue abruptly. Contraindicated in acute heart failure, cardiogenic shock, severe bradycardia, and sick sinus syndrome. Caution in asthma/COPD and peripheral vascular disease.",
    "subCategoryId": "beta-blockers"
  },
  {
    "id": "carvedilol",
    "categoryId": "cardiovascular",
    "genericName": "Carvedilol",
    "brandNames": "Dilatrend, Carveda, Vedicar, Vadil, Carlov",
    "description": "Non-selective beta-blocker with additional alpha-1 blocking activity leading to vasodilation. Particularly beneficial in chronic heart failure with strong evidence for mortality reduction.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Heart Failure, Hypertension, Post-MI",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "6.25-12.5 mg twice daily (hypertension); Start 3.125 mg twice daily, up to 25 mg (heart failure)",
        "sub": "Max: 50 mg twice daily for >85 kg"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "7-10 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Hypertension, heart failure (stable), post-MI, angina",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Carveda",
        "form": "Tablets",
        "strengths": "6.25 mg, 12.5 mg, 25 mg",
        "manufacturer": "Ferozsons Laboratories Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Vedicar",
        "form": "Tablets",
        "strengths": "3.125 mg, 6.25 mg, 12.5 mg, 25 mg",
        "manufacturer": "Barrett Hodgson Pakistan",
        "region": "Pakistan"
      },
      {
        "name": "Vadil",
        "form": "Tablets",
        "strengths": "6.25 mg, 12.5 mg, 25 mg",
        "manufacturer": "Tabros Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Carvedo",
        "form": "Tablets",
        "strengths": "6.25 mg, 12.5 mg",
        "manufacturer": "Fynk Pharmaceuticals",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Calcium Channel Blockers (Verapamil, Diltiazem)",
        "effect": "Additive negative inotropic and chronotropic effects.",
        "severity": "Major"
      },
      {
        "drugClass": "CYP2D6 Inhibitors",
        "effect": "Increased carvedilol plasma concentrations.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Digoxin",
        "effect": "Increased digoxin levels and risk of bradycardia.",
        "severity": "Moderate"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive effect.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Antidiabetic Agents",
        "effect": "Enhanced hypoglycemic effect; monitor glucose.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Cyclosporine",
        "effect": "Increased cyclosporine levels.",
        "severity": "Moderate"
      }
    ],
    "warning": "Heart failure: start at 3.125 mg twice daily, titrate slowly every 2 weeks. May cause dizziness and orthostatic hypotension (especially during first dose). Contraindicated in decompensated heart failure, asthma, severe bradycardia, and hepatic impairment. Do not stop abruptly.",
    "subCategoryId": "beta-blockers"
  },
  {
    "id": "labetalol",
    "categoryId": "cardiovascular",
    "genericName": "Labetalol",
    "brandNames": "Normodyne, Trandate, Hybloc, Presolol",
    "description": "Alpha and non-selective beta-blocker used both orally and intravenously for hypertension, particularly in hypertensive emergencies and pregnancy-induced hypertension. Combined alpha and beta blockade provides balanced vasodilation.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Hypertension (including emergencies and pregnancy)",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "100 mg twice daily, up to 600-1200 mg/day in 2-3 divided doses",
        "sub": "IV emergency: 20 mg over 2 min, then 40-80 mg q10min up to 300 mg"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "20-30 min (oral); 2-5 min (IV)",
        "sub": "6-8 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Hypertension, hypertensive emergency, pregnancy-induced hypertension, pheochromocytoma",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Labetalol (ZAFA)",
        "form": "Injection",
        "strengths": "50 mg/10 mL",
        "manufacturer": "ZAFA Pharmaceutical Laboratories (Pvt.) Ltd.",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Calcium Channel Blockers",
        "effect": "Enhanced hypotension and bradycardia risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Nitrates",
        "effect": "Additive hypotensive effect.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Cimetidine",
        "effect": "Increased labetalol bioavailability.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Tricyclic Antidepressants",
        "effect": "Increased risk of tremors.",
        "severity": "Minor"
      },
      {
        "drugClass": "Halothane/Inhalational Anesthetics",
        "effect": "Enhanced hypotension.",
        "severity": "Major"
      },
      {
        "drugClass": "Beta-agonists (Salbutamol)",
        "effect": "Antagonized bronchodilator effect.",
        "severity": "Moderate"
      }
    ],
    "warning": "May cause orthostatic hypotension and dizziness. Monitor liver function as rare hepatotoxicity reported. Contraindicated in asthma, COPD, heart block, decompensated heart failure, and bradycardia. Can be used in pregnancy but requires close monitoring. Do not stop abruptly.",
    "subCategoryId": "beta-blockers"
  },
  {
    "id": "amlodipine",
    "categoryId": "cardiovascular",
    "genericName": "Amlodipine",
    "brandNames": "Amlong, Norvasc, Cardipin, Lopicard, Ameddal, Amloc",
    "description": "Third-generation dihydropyridine calcium channel blocker that blocks L-type calcium channels in vascular smooth muscle, causing systemic vasodilation and lowering peripheral resistance. Once-daily dosing with excellent tolerability.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Chronic Stable Angina",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "5-10 mg once daily",
        "sub": "Max: 10 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "6-12 hours onset",
        "sub": "30-50 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Essential hypertension, chronic stable angina, vasospastic (Prinzmetal) angina",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Amlong",
        "form": "Tablets",
        "strengths": "5 mg, 10 mg",
        "manufacturer": "PharmEvo (Pvt.) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Norvasc",
        "form": "Tablets",
        "strengths": "5 mg, 10 mg",
        "manufacturer": "Pfizer (imported/distributed)",
        "region": "Pakistan, Global"
      },
      {
        "name": "Cardipin",
        "form": "Tablets",
        "strengths": "5 mg, 10 mg",
        "manufacturer": "Hilton Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Lopicard",
        "form": "Tablets",
        "strengths": "5 mg, 10 mg",
        "manufacturer": "Getz Pharma (Pvt.) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Ameddal",
        "form": "Tablets",
        "strengths": "5 mg, 10 mg",
        "manufacturer": "Atco Laboratories Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Amloc",
        "form": "Tablets",
        "strengths": "5 mg, 10 mg",
        "manufacturer": "CCL Pharmaceuticals (Pvt.) Ltd.",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "CYP3A4 Inhibitors (Ketoconazole, Clarithromycin, Grapefruit)",
        "effect": "Increased amlodipine plasma levels, risk of hypotension and edema.",
        "severity": "Moderate"
      },
      {
        "drugClass": "CYP3A4 Inducers (Rifampin, Phenytoin)",
        "effect": "Reduced amlodipine efficacy.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Simvastatin",
        "effect": "Increased risk of myopathy/rhabdomyolysis (limit simvastatin to 20 mg).",
        "severity": "Major"
      },
      {
        "drugClass": "Beta-Blockers",
        "effect": "Increased risk of hypotension and heart failure exacerbation.",
        "severity": "Moderate"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive effect.",
        "severity": "Minor"
      },
      {
        "drugClass": "Cyclosporine/Tacrolimus",
        "effect": "Increased immunosuppressant levels.",
        "severity": "Moderate"
      }
    ],
    "warning": "Common side effects: peripheral edema (dose-dependent), headache, flushing, dizziness. Edema is less responsive to diuretics; may require dose reduction or switch. Caution in severe aortic stenosis and hepatic impairment. Not associated with negative inotropy unlike non-dihydropyridine CCBs.",
    "subCategoryId": "calcium-channel-blockers"
  },
  {
    "id": "nifedipine",
    "categoryId": "cardiovascular",
    "genericName": "Nifedipine",
    "brandNames": "Adalat LA, Anifed Retard, Nifeal XT, Nifed",
    "description": "First-generation dihydropyridine CCB producing rapid and potent arterial vasodilation. Only extended-release formulations are used for chronic hypertension and angina; short-acting capsules are avoided due to reflex tachycardia risk.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Chronic Stable Angina",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "30-60 mg once daily (ER/LA/retard)",
        "sub": "Max: 90-120 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min (IR); 2-4 hours (ER)",
        "sub": "2-5 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Hypertension, chronic stable angina, vasospastic angina, Raynaud phenomenon",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Adalat LA",
        "form": "Extended-release Tablets",
        "strengths": "30 mg, 60 mg",
        "manufacturer": "Bayer HealthCare",
        "region": "Pakistan, Global"
      },
      {
        "name": "Anifed Retard",
        "form": "Retard Tablets (ER)",
        "strengths": "20 mg",
        "manufacturer": "Tread Pharmaceuticals Pakistan (PVT) LTD",
        "region": "Pakistan"
      },
      {
        "name": "Nifeal XT",
        "form": "Extended-release Tablets",
        "strengths": "30 mg",
        "manufacturer": "ZAFA Pharmaceutical Laboratories (Pvt.) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Nifed",
        "form": "Capsules, Tablets",
        "strengths": "10 mg, 20 mg",
        "manufacturer": "Siza International (Pvt.) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Nifine CC",
        "form": "Controlled-release Tablets",
        "strengths": "30 mg",
        "manufacturer": "Tread Pharmaceuticals Pakistan",
        "region": "Pakistan"
      },
      {
        "name": "Adipen",
        "form": "Capsules",
        "strengths": "10 mg, 20 mg",
        "manufacturer": "Lisko Pakistan (Pvt) Ltd.",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "CYP3A4 Inhibitors (Clarithromycin, Grapefruit Juice)",
        "effect": "Markedly increased nifedipine levels, risk of severe hypotension.",
        "severity": "Major"
      },
      {
        "drugClass": "Beta-Blockers",
        "effect": "Increased risk of hypotension and heart failure.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Magnesium Sulfate (IV)",
        "effect": "Enhanced neuromuscular blockade and hypotension.",
        "severity": "Major"
      },
      {
        "drugClass": "Phenytoin/Carbamazepine",
        "effect": "Reduced nifedipine efficacy.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Digoxin",
        "effect": "Increased digoxin levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Quinupristin/Dalfopristin",
        "effect": "Increased nifedipine levels.",
        "severity": "Moderate"
      }
    ],
    "warning": "Short-acting nifedipine capsules are contraindicated for chronic hypertension due to increased CV event risk from reflex tachycardia. Only use extended-release formulations. May cause severe hypotension, reflex tachycardia, and peripheral edema. Contraindicated in cardiogenic shock and within 4 weeks of MI.",
    "subCategoryId": "calcium-channel-blockers"
  },
  {
    "id": "diltiazem",
    "categoryId": "cardiovascular",
    "genericName": "Diltiazem",
    "brandNames": "Herbesser, Dilzem, Slozem",
    "description": "Benzothiazepine CCB that slows AV nodal conduction, reduces heart rate, and causes moderate peripheral vasodilation. Used for hypertension, angina, and supraventricular arrhythmias (rate control in atrial fibrillation).",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Angina, Atrial Fibrillation (Rate Control)",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "120-360 mg once daily (SR/ER); 30 mg 4 times daily (IR for arrhythmia)",
        "sub": "Max: 360 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min (IR); 2-4 hours (SR)",
        "sub": "3-4.5 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Hypertension, chronic stable angina, atrial fibrillation/flutter (rate control), PSVT",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Herbesser",
        "form": "Tablets, SR Capsules",
        "strengths": "30 mg, 60 mg (IR); 90 mg, 180 mg (SR)",
        "manufacturer": "Highnoon Laboratories Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Herbesser SR",
        "form": "SR Capsules",
        "strengths": "90 mg",
        "manufacturer": "Highnoon Laboratories Ltd.",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Beta-Blockers",
        "effect": "Increased risk of bradycardia, AV block, and heart failure.",
        "severity": "Major"
      },
      {
        "drugClass": "CYP3A4 Inhibitors",
        "effect": "Increased diltiazem levels and toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Digoxin",
        "effect": "Increased digoxin levels and risk of bradycardia.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Statins (Simvastatin, Atorvastatin)",
        "effect": "Increased statin levels, risk of myopathy.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Cyclosporine/Tacrolimus",
        "effect": "Increased immunosuppressant levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Fentanyl",
        "effect": "Increased risk of severe hypotension.",
        "severity": "Moderate"
      }
    ],
    "warning": "Contraindicated in sick sinus syndrome (without pacemaker), second/third-degree AV block, hypotension, acute MI with pulmonary congestion. Negative inotrope - caution in heart failure with reduced EF. Avoid abrupt withdrawal. Reduce dose in hepatic impairment.",
    "subCategoryId": "calcium-channel-blockers"
  },
  {
    "id": "verapamil",
    "categoryId": "cardiovascular",
    "genericName": "Verapamil",
    "brandNames": "Calan, Isoptin, Zavera",
    "description": "Phenylalkylamine CCB that blocks L-type calcium channels, slowing AV conduction, decreasing heart rate, and reducing myocardial contractility more than dihydropyridines. Used for hypertension, angina, and supraventricular tachyarrhythmias.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Angina, Supraventricular Arrhythmias",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "120-480 mg once daily (SR); 80-120 mg TID (IR)",
        "sub": "Max: 480 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min (IR); 2-4 hours (SR)",
        "sub": "4.5-12 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Hypertension, angina, atrial fibrillation/flutter (rate control), PSVT, migraine prophylaxis (off-label)",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Calan",
        "form": "Tablets, SR Capsules",
        "strengths": "40 mg, 80 mg (IR); 240 mg (SR)",
        "manufacturer": "The Searle Company Ltd.",
        "region": "Pakistan"
      },
    ],
    "interactions": [
      {
        "drugClass": "Beta-Blockers",
        "effect": "Severe bradycardia, AV block, and heart failure risk. Contraindicated combination in LV dysfunction.",
        "severity": "Major"
      },
      {
        "drugClass": "Digoxin",
        "effect": "Markedly increased digoxin levels (50-70%) - reduce digoxin dose by 50%.",
        "severity": "Major"
      },
      {
        "drugClass": "CYP3A4 Inhibitors",
        "effect": "Increased verapamil toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Statins (Simvastatin, Atorvastatin)",
        "effect": "Increased statin levels significantly - limit simvastatin to 10 mg.",
        "severity": "Major"
      },
      {
        "drugClass": "Dofetilide/Ranolazine",
        "effect": "Increased QT prolongation risk. Contraindicated.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased neurotoxicity risk.",
        "severity": "Moderate"
      }
    ],
    "warning": "Contraindicated in severe LV dysfunction (LVEF <40%), cardiogenic shock, sick sinus syndrome, AV block (without pacemaker), and atrial fibrillation with WPW. Strong CYP3A4 inhibitor - check ALL concurrent medications. Constipation is a common side effect. Avoid abrupt withdrawal.",
    "subCategoryId": "calcium-channel-blockers"
  },
  {
    "id": "enalapril",
    "categoryId": "cardiovascular",
    "genericName": "Enalapril",
    "brandNames": "Renitec, Co-Renitec, Cardace, Enace, Zepres",
    "description": "Widely used first-line ACE inhibitor available in single-ingredient and combination (with HCTZ) formulations for managing blood pressure and heart failure. Prodrug converted to active enalaprilat in the liver.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Heart Failure, Diabetic Nephropathy",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "5-20 mg once daily or divided BID",
        "sub": "Heart failure: start 2.5 mg, up to 40 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1 hour onset",
        "sub": "11 hours half-life (enalaprilat)"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Hypertension, heart failure, post-MI (LV dysfunction), diabetic nephropathy, CKD",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Renitec",
        "form": "Tablets",
        "strengths": "5 mg, 10 mg",
        "manufacturer": "GSK / Obs Pakistan",
        "region": "Pakistan"
      },
      {
        "name": "Co-Renitec",
        "form": "Tablets",
        "strengths": "10 mg enalapril / 25 mg HCTZ",
        "manufacturer": "GlaxoSmithKline (GSK) Pakistan",
        "region": "Pakistan"
      },
      {
        "name": "Cardace",
        "form": "Tablets",
        "strengths": "5 mg",
        "manufacturer": "ZAFA Pharmaceutical Lab",
        "region": "Pakistan"
      },
      {
        "name": "Enace",
        "form": "Tablets",
        "strengths": "10 mg",
        "manufacturer": "Atco Laboratories Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Zepres",
        "form": "Tablets",
        "strengths": "10 mg",
        "manufacturer": "Asian Continental Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Maxpril",
        "form": "Tablets",
        "strengths": "10 mg",
        "manufacturer": "Noven Pharma",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Potassium-Sparing Diuretics (Spironolactone, Amiloride)",
        "effect": "Increased risk of hyperkalemia.",
        "severity": "Major"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive efficacy and increased renal impairment risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ARBs/Aliskiren",
        "effect": "Dual RAAS blockade increases risk of hypotension, hyperkalemia, and renal dysfunction.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium levels and toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics (Thiazide, Loop)",
        "effect": "Enhanced hypotensive effect; increased renal impairment risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Antidiabetic Agents",
        "effect": "Enhanced hypoglycemic effect.",
        "severity": "Minor"
      }
    ],
    "warning": "BLACK BOX: Fetal toxicity - discontinue as soon as pregnancy is detected. Contraindicated in history of ACE inhibitor-induced angioedema. Monitor renal function and potassium levels. Persistent dry cough is a common side effect (may switch to ARB). Reduce dose in renal impairment.",
    "subCategoryId": "ace-inhibitors"
  },
  {
    "id": "lisinopril",
    "categoryId": "cardiovascular",
    "genericName": "Lisinopril",
    "brandNames": "Zestril, Lisna, Corace, Noprit, Zestoretic-20",
    "description": "Long-acting, once-daily ACE inhibitor effective for hypertension, heart failure, and post-MI management. Unlike enalapril, it is not a prodrug and does not require hepatic activation.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Heart Failure, Post-MI",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "10-40 mg once daily",
        "sub": "Heart failure: start 5 mg, up to 40 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "2-4 hours onset",
        "sub": "12 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Hypertension, heart failure, post-MI (hemodynamically stable), diabetic nephropathy",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Zestril",
        "form": "Tablets",
        "strengths": "5 mg, 10 mg, 20 mg",
        "manufacturer": "LCI Pakistan Ltd. / ICI",
        "region": "Pakistan"
      },
      {
        "name": "Lisna",
        "form": "Tablets",
        "strengths": "5 mg",
        "manufacturer": "ZAFA Pharmaceuticals (PVT) LTD.",
        "region": "Pakistan"
      },
      {
        "name": "Corace",
        "form": "Tablets",
        "strengths": "5 mg, 10 mg, 20 mg",
        "manufacturer": "PharmEvo / Obs Pakistan",
        "region": "Pakistan"
      },
      {
        "name": "Noprit",
        "form": "Tablets",
        "strengths": "10 mg, 20 mg",
        "manufacturer": "Maxitech Pharma (Pvt.) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Zestoretic-20",
        "form": "Tablets",
        "strengths": "20 mg lisinopril / 12.5 mg HCTZ",
        "manufacturer": "LCI Pakistan Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Ziscar",
        "form": "Tablets",
        "strengths": "5 mg, 10 mg, 20 mg",
        "manufacturer": "Tabros Pharma",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Potassium Supplements / Spironolactone",
        "effect": "Increased risk of hyperkalemia.",
        "severity": "Major"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive effect and increased renal impairment risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ARBs / Aliskiren",
        "effect": "Dual RAAS blockade - increased hypotension, hyperkalemia, and renal failure.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased serum lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics (especially high-dose)",
        "effect": "First-dose hypotension risk. Monitor volume status.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Mammalian Target of Rapamycin (mTOR) Inhibitors",
        "effect": "Increased risk of angioedema.",
        "severity": "Moderate"
      }
    ],
    "warning": "BLACK BOX: Fetal toxicity - discontinue when pregnancy is detected. Contraindicated in angioedema history. May cause dry cough, hyperkalemia, and renal impairment. First-dose hypotension risk in volume-depleted patients. Monitor renal function, potassium, and BP regularly.",
    "subCategoryId": "ace-inhibitors"
  },
  {
    "id": "ramipril",
    "categoryId": "cardiovascular",
    "genericName": "Ramipril",
    "brandNames": "Ramy, Tritace, Ramipace, Ramril",
    "description": "Potent, long-acting ACE inhibitor often used for hypertension and to reduce risk of cardiovascular events in high-risk patients. Prodrug requiring hepatic activation with strong evidence for mortality reduction in CV disease.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Cardiovascular Risk Reduction, Heart Failure",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "2.5-10 mg once daily",
        "sub": "Max: 10 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "13-17 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Hypertension, CV risk reduction, heart failure (post-MI), diabetic nephropathy, stroke prevention",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Ramy",
        "form": "Tablets",
        "strengths": "1.25 mg, 2.5 mg, 10 mg",
        "manufacturer": "Getz Pharma (PVT) LTD.",
        "region": "Pakistan"
      },
      {
        "name": "Tritace",
        "form": "Tablets",
        "strengths": "2.5 mg, 5 mg",
        "manufacturer": "Sanofi Aventis",
        "region": "Pakistan"
      },
      {
        "name": "Ramipace",
        "form": "Tablets",
        "strengths": "5 mg, 10 mg",
        "manufacturer": "PharmEvo",
        "region": "Pakistan"
      },
      {
        "name": "Ramril",
        "form": "Tablets",
        "strengths": "1.25 mg, 2.5 mg, 5 mg",
        "manufacturer": "PharmaSquare",
        "region": "Pakistan"
      },
      {
        "name": "Lipra",
        "form": "Tablets",
        "strengths": "1.25 mg, 2.5 mg",
        "manufacturer": "Wilshire Labs",
        "region": "Pakistan"
      },
      {
        "name": "Prepace",
        "form": "Tablets",
        "strengths": "2.5 mg",
        "manufacturer": "Santicare Pharma",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Potassium-Sparing Diuretics / Potassium Supplements",
        "effect": "Increased risk of hyperkalemia.",
        "severity": "Major"
      },
      {
        "drugClass": "NSAIDs (including COX-2 Inhibitors)",
        "effect": "Reduced antihypertensive efficacy and increased risk of acute renal failure.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ARBs / Aliskiren",
        "effect": "Dual RAAS blockade - increased adverse events without additional benefit.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium levels and potential toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics (Thiazides, Loop)",
        "effect": "Enhanced hypotension, especially first dose. Monitor volume status.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Heparin",
        "effect": "Increased risk of hyperkalemia.",
        "severity": "Moderate"
      }
    ],
    "warning": "BLACK BOX: Fetal toxicity - discontinue immediately if pregnancy occurs. Contraindicated in angioedema history. Titrate dose slowly. Monitor renal function, serum potassium, and BP. Associated with higher cough incidence than some other ACE inhibitors. Reduce dose in renal impairment.",
    "subCategoryId": "ace-inhibitors"
  },
  {
    "id": "captopril",
    "categoryId": "cardiovascular",
    "genericName": "Captopril",
    "brandNames": "Capoten, Caprit, Vasotone, Capace, Valopril",
    "description": "Short-acting ACE inhibitor often dosed multiple times per day due to shorter duration of action. Used for hypertension, heart failure, and diabetic nephropathy. Contains a sulfhydryl group unlike other ACE inhibitors.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Heart Failure, Diabetic Nephropathy",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "25 mg 2-3 times daily",
        "sub": "Max: 450 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "15-30 min onset",
        "sub": "1.7-2 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Hypertension, heart failure, diabetic nephropathy, post-MI (LV dysfunction)",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Capoten",
        "form": "Tablets",
        "strengths": "12.5 mg, 25 mg, 50 mg",
        "manufacturer": "GlaxoSmithKline (GSK) Pakistan Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Caprit",
        "form": "Tablets",
        "strengths": "12.5 mg, 25 mg",
        "manufacturer": "Maple Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Vasotone",
        "form": "Tablets",
        "strengths": "25 mg",
        "manufacturer": "Werrick Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Capace",
        "form": "Tablets",
        "strengths": "12.5 mg",
        "manufacturer": "Atco Laboratories Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Valopril",
        "form": "Tablets",
        "strengths": "25 mg, 50 mg",
        "manufacturer": "Valmed Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Nobeten",
        "form": "Tablets",
        "strengths": "25 mg",
        "manufacturer": "Biotech Pharma",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Potassium-Sparing Diuretics",
        "effect": "Additive hyperkalemia risk.",
        "severity": "Major"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive effect and renal function.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ARBs / Aliskiren",
        "effect": "Dual RAAS blockade increases adverse events.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium toxicity risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Probenecid",
        "effect": "Reduced captopril renal clearance.",
        "severity": "Minor"
      },
      {
        "drugClass": "Antacids",
        "effect": "Reduced captopril bioavailability (separate by 2 hours).",
        "severity": "Minor"
      }
    ],
    "warning": "BLACK BOX: Fetal toxicity - discontinue if pregnancy detected. Contraindicated in angioedema history. May cause rash, taste disturbances (dysgeusia) more than other ACE inhibitors due to sulfhydryl group. Take 1 hour before meals for optimal absorption. Monitor renal function and potassium.",
    "subCategoryId": "ace-inhibitors"
  },
  {
    "id": "perindopril",
    "categoryId": "cardiovascular",
    "genericName": "Perindopril",
    "brandNames": "Coversyl, Hartace, Coversyl Plus, Coversam",
    "description": "Long-acting ACE inhibitor available as single ingredient and in fixed-dose combinations (with indapamide or amlodipine). Primarily used for hypertension and stable coronary artery disease.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Stable Coronary Artery Disease",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "4-8 mg once daily",
        "sub": "Elderly: start 2 mg. Max: 8 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "3-10 hours half-life (perindoprilat: 30-120 hours)"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Hypertension, stable coronary artery disease, heart failure, stroke prevention",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Coversyl",
        "form": "Tablets",
        "strengths": "2 mg, 4 mg, 8 mg",
        "manufacturer": "Servier Research & Pharmaceuticals Pakistan (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Hartace",
        "form": "Tablets",
        "strengths": "4 mg, 8 mg",
        "manufacturer": "Pharmaceuticals-North (Pvt)",
        "region": "Pakistan"
      },
      {
        "name": "Coversyl Plus",
        "form": "Tablets",
        "strengths": "4 mg perindopril / 1.25 mg indapamide",
        "manufacturer": "Servier Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Coversam",
        "form": "Tablets",
        "strengths": "4 mg perindopril / 5 mg amlodipine",
        "manufacturer": "Servier Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Dopril",
        "form": "Tablets",
        "strengths": "2 mg, 4 mg",
        "manufacturer": "NovaMed Pharmaceuticals (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Amper",
        "form": "Tablets",
        "strengths": "4 mg perindopril / 5 mg amlodipine",
        "manufacturer": "NovaMed Pharmaceuticals",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Potassium-Sparing Diuretics / Potassium Salts",
        "effect": "Increased hyperkalemia risk.",
        "severity": "Major"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive effect and increased renal impairment.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ARBs / Aliskiren",
        "effect": "Dual RAAS blockade - increased risk of adverse outcomes.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium levels and toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics",
        "effect": "First-dose hypotension risk. Monitor intravascular volume.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Antidiabetic Agents",
        "effect": "Enhanced hypoglycemic effect.",
        "severity": "Minor"
      }
    ],
    "warning": "BLACK BOX: Fetal toxicity. Contraindicated in angioedema history. Reduce dose in elderly and renal impairment. Monitor potassium and renal function. Cough incidence may be lower than with other ACE inhibitors. Avoid in patients with bilateral renal artery stenosis.",
    "subCategoryId": "ace-inhibitors"
  },
  {
    "id": "losartan",
    "categoryId": "cardiovascular",
    "genericName": "Losartan",
    "brandNames": "Bepsar, Eziday, Tansin-DS, Xavor",
    "description": "The only ARB with a labeled indication for diabetic nephropathy in patients with type 2 diabetes and hypertension. Also reduces stroke risk in hypertensive patients with left ventricular hypertrophy.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Diabetic Nephropathy, Stroke Prevention",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "50-100 mg once daily",
        "sub": "Diabetic nephropathy: 100 mg once daily. Max: 100 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "6-9 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Essential hypertension, diabetic nephropathy (type 2), stroke prevention (LVH), heart failure (HFrEF)",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Bepsar",
        "form": "Tablets",
        "strengths": "50 mg",
        "manufacturer": "Nabiqasim Industries (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Eziday",
        "form": "Tablets",
        "strengths": "50 mg, 100 mg",
        "manufacturer": "Werrick Pharmaceutical (Pakistan) (Pvt)",
        "region": "Pakistan"
      },
      {
        "name": "Tansin-DS",
        "form": "Tablets",
        "strengths": "100 mg",
        "manufacturer": "PharmEvo (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Xavor",
        "form": "Tablets",
        "strengths": "50 mg, 100 mg",
        "manufacturer": "Ferozsons Laboratories Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Xavor-DIU Forte",
        "form": "Tablets",
        "strengths": "100 mg / 25 mg HCTZ",
        "manufacturer": "Ferozsons Laboratories Ltd.",
        "region": "Pakistan"
      },
    ],
    "interactions": [
      {
        "drugClass": "Potassium-Sparing Diuretics / Potassium Supplements",
        "effect": "Increased risk of hyperkalemia.",
        "severity": "Major"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive effect and possible renal impairment.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors / Aliskiren",
        "effect": "Dual RAAS blockade increases adverse events risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium levels and potential toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Fluconazole (CYP2C9 Inhibitor)",
        "effect": "Reduced conversion to active metabolite, decreased efficacy.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Enhanced hypotensive effect; monitor volume status.",
        "severity": "Moderate"
      }
    ],
    "warning": "BLACK BOX: Fetal toxicity - discontinue as soon as pregnancy is detected. Contraindicated in patients with history of angioedema. Monitor renal function and potassium levels. May cause dizziness and orthostatic hypotension. Avoid in bilateral renal artery stenosis. Generally better tolerated than ACE inhibitors (no cough).",
    "subCategoryId": "arbs"
  },
  {
    "id": "valsartan",
    "categoryId": "cardiovascular",
    "genericName": "Valsartan",
    "brandNames": "Cova, Co-Valtec, Nucard, Nuval, Valsar",
    "description": "Well-studied ARB that improves survival and reduces hospitalizations in heart failure and post-MI patients. Used for hypertension, heart failure with reduced ejection fraction, and post-MI with LV dysfunction.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Heart Failure, Post-MI",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "80-320 mg once daily",
        "sub": "Heart failure: 40 mg twice daily, up to 160 mg twice daily"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "2-4 hours onset",
        "sub": "6-9 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Essential hypertension, heart failure (HFrEF), post-MI (LV dysfunction), diabetic nephropathy",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Cova",
        "form": "Tablets",
        "strengths": "80 mg, 160 mg",
        "manufacturer": "Getz Pharma (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Co-Valtec",
        "form": "Tablets",
        "strengths": "80 mg/12.5 mg, 160 mg/12.5 mg HCTZ",
        "manufacturer": "Tabros Pharma (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Nucard",
        "form": "Tablets",
        "strengths": "80 mg, 160 mg",
        "manufacturer": "PharmEvo (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Nuval",
        "form": "Tablets",
        "strengths": "160 mg",
        "manufacturer": "PharmEvo (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Valsar",
        "form": "Tablets",
        "strengths": "80 mg",
        "manufacturer": "Tabros Pharma (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Nuval-D",
        "form": "Tablets",
        "strengths": "160 mg/12.5 mg HCTZ",
        "manufacturer": "PharmEvo (Pvt) Ltd.",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Potassium-Sparing Diuretics / Potassium Supplements",
        "effect": "Hyperkalemia risk increased.",
        "severity": "Major"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive effect and increased renal impairment risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors / Aliskiren",
        "effect": "Dual RAAS blockade increases hypotension, hyperkalemia, and renal dysfunction.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium serum levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Rifampin (CYP inducer)",
        "effect": "Reduced valsartan plasma concentrations.",
        "severity": "Minor"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Enhanced hypotensive effect; monitor volume.",
        "severity": "Moderate"
      }
    ],
    "warning": "BLACK BOX: Fetal toxicity - discontinue when pregnancy detected. Contraindicated in angioedema history and bilateral renal artery stenosis. Monitor renal function, BP, and potassium. May cause dizziness, orthostatic hypotension, and elevated liver enzymes. Lower cough incidence than ACE inhibitors.",
    "subCategoryId": "arbs"
  },
  {
    "id": "candesartan",
    "categoryId": "cardiovascular",
    "genericName": "Candesartan",
    "brandNames": "Advant, Atasart, Treatan",
    "description": "ARB with a well-established role in heart failure and approved for hypertension in children as young as 1 year. High receptor affinity and sustained 24-hour BP control.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Heart Failure",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "8-16 mg once daily; up to 32 mg once daily",
        "sub": "Heart failure: start 4 mg, target 32 mg once daily"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "2-4 hours onset",
        "sub": "9 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Essential hypertension, heart failure (HFrEF, NYHA class I-IV), diabetic nephropathy",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Advant",
        "form": "Tablets",
        "strengths": "8 mg, 16 mg",
        "manufacturer": "Getz Pharma (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Advantec",
        "form": "Tablets",
        "strengths": "16 mg/12.5 mg HCTZ",
        "manufacturer": "Getz Pharma (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Atasart",
        "form": "Tablets",
        "strengths": "8 mg, 16 mg",
        "manufacturer": "Getz Pharma (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Treatan",
        "form": "Tablets",
        "strengths": "4 mg, 8 mg, 16 mg",
        "manufacturer": "PharmEvo (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Treatan-D",
        "form": "Tablets",
        "strengths": "16 mg/12.5 mg HCTZ",
        "manufacturer": "PharmEvo (Pvt) Ltd.",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Potassium-Sparing Diuretics",
        "effect": "Increased hyperkalemia risk.",
        "severity": "Major"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive efficacy and increased renal failure risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors / Aliskiren",
        "effect": "Dual RAAS blockade - increased adverse effects.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Enhanced first-dose hypotension.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Rifampin",
        "effect": "Reduced candesartan levels.",
        "severity": "Minor"
      }
    ],
    "warning": "BLACK BOX: Fetal toxicity. Contraindicated in angioedema. Monitor renal function and potassium levels. May cause hypotension, especially in volume-depleted patients. Approved for pediatric hypertension (age 1+). Heart failure patients: monitor for hypotension and renal impairment during titration.",
    "subCategoryId": "arbs"
  },
  {
    "id": "irbesartan",
    "categoryId": "cardiovascular",
    "genericName": "Irbesartan",
    "brandNames": "Arbi, Co-Aprovel, Irecon",
    "description": "ARB particularly effective for hypertensive patients with type 2 diabetes, slowing the progression of kidney disease. Once-daily dosing with good trough-to-peak ratio for sustained BP control.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Diabetic Nephropathy",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "150-300 mg once daily",
        "sub": "Diabetic nephropathy: 300 mg once daily. Max: 300 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "11-15 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Essential hypertension, diabetic nephropathy (type 2 diabetes with hypertension)",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Arbi",
        "form": "Tablets",
        "strengths": "150 mg, 300 mg",
        "manufacturer": "PharmEvo (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Arbi-D",
        "form": "Tablets",
        "strengths": "150 mg/12.5 mg, 300 mg/12.5 mg HCTZ",
        "manufacturer": "PharmEvo (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Co-Aprovel",
        "form": "Tablets",
        "strengths": "150 mg/12.5 mg, 300 mg/12.5 mg HCTZ",
        "manufacturer": "Sanofi (originator)",
        "region": "Pakistan"
      },
      {
        "name": "Irecon",
        "form": "Tablets",
        "strengths": "75 mg, 150 mg, 300 mg",
        "manufacturer": "Barrett Hodgson Pakistan (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Irecon-H",
        "form": "Tablets",
        "strengths": "150 mg/12.5 mg, 300 mg/12.5 mg HCTZ",
        "manufacturer": "Barrett Hodgson Pakistan (Pvt) Ltd.",
        "region": "Pakistan"
      },
    ],
    "interactions": [
      {
        "drugClass": "Potassium-Sparing Diuretics",
        "effect": "Hyperkalemia risk.",
        "severity": "Major"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive effect and potential renal impairment.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors / Aliskiren",
        "effect": "Dual RAAS blockade - increased adverse events.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium levels and toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Enhanced hypotension risk in volume-depleted patients.",
        "severity": "Moderate"
      },
      {
        "drugClass": "CYP2C9 Inducers",
        "effect": "Reduced irbesartan efficacy.",
        "severity": "Minor"
      }
    ],
    "warning": "BLACK BOX: Fetal toxicity - discontinue when pregnancy detected. Contraindicated in angioedema. Monitor renal function, BP, and potassium. Not recommended in pediatric patients (safety not established). Avoid in bilateral renal artery stenosis. Lower incidence of cough vs ACE inhibitors.",
    "subCategoryId": "arbs"
  },
  {
    "id": "telmisartan",
    "categoryId": "cardiovascular",
    "genericName": "Telmisartan",
    "brandNames": "Normisar, Tasmi, Telmis, Telsan",
    "description": "ARB with the longest half-life among the class (~24 hours), enabling robust once-daily BP control. Often used in patients with metabolic syndrome and for cardiovascular risk reduction.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hypertension, Cardiovascular Risk Reduction",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "40-80 mg once daily",
        "sub": "CV risk reduction: 80 mg once daily. Max: 80 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "~24 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Essential hypertension, cardiovascular risk reduction (high-risk CAD patients), diabetic nephropathy",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Normisar",
        "form": "Tablets",
        "strengths": "20 mg, 40 mg",
        "manufacturer": "Nabiqasim Industries (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Tasmi",
        "form": "Tablets",
        "strengths": "20 mg, 40 mg, 80 mg",
        "manufacturer": "Getz Pharma (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Telmis",
        "form": "Tablets",
        "strengths": "40 mg",
        "manufacturer": "Genix Pharma (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Telsan",
        "form": "Tablets",
        "strengths": "20 mg, 40 mg, 80 mg",
        "manufacturer": "Hilton Pharma (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Telsitan-80",
        "form": "Tablets",
        "strengths": "80 mg",
        "manufacturer": "Macter International Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Theiz-80",
        "form": "Tablets",
        "strengths": "80 mg",
        "manufacturer": "Maple Pharmaceuticals (Pvt) Ltd.",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Potassium-Sparing Diuretics / Potassium Supplements",
        "effect": "Increased hyperkalemia risk.",
        "severity": "Major"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive efficacy and increased renal impairment.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors / Aliskiren",
        "effect": "Dual RAAS blockade - increased adverse effects without additional benefit.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium concentrations.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Digoxin",
        "effect": "Possible increase in digoxin peak and trough levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics",
        "effect": "First-dose hypotension in volume-depleted patients.",
        "severity": "Moderate"
      }
    ],
    "warning": "BLACK BOX: Fetal toxicity. Contraindicated in angioedema history and bilateral renal artery stenosis. Monitor renal function, potassium, and BP. May cause diarrhea. Also a PPAR-gamma agonist (may have metabolic benefits). Avoid in primary aldosteronism. Pediatric safety not established.",
    "subCategoryId": "arbs"
  },
  {
    "id": "olmesartan",
    "categoryId": "cardiovascular",
    "genericName": "Olmesartan",
    "brandNames": "Baritec, Co-Baritec, Olesta",
    "description": "Potent ARB with high receptor affinity, often used as first-line therapy for difficult-to-control hypertension. Available in single and combination formulations with amlodipine and HCTZ.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Hypertension",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "20-40 mg once daily",
        "sub": "Start: 10-20 mg once daily. Max: 40 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "13 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Essential hypertension (alone or in combination therapy)",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Baritec",
        "form": "Tablets",
        "strengths": "20 mg, 40 mg",
        "manufacturer": "Barrett Hodgson Pakistan (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Baritec-A",
        "form": "Tablets",
        "strengths": "20 mg/10 mg amlodipine",
        "manufacturer": "Barrett Hodgson Pakistan (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Co-Baritec",
        "form": "Tablets",
        "strengths": "20 mg/12.5 mg HCTZ",
        "manufacturer": "Barrett Hodgson Pakistan (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Olesta",
        "form": "Tablets",
        "strengths": "20 mg, 40 mg",
        "manufacturer": "Searle Pakistan (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Co-Olesta",
        "form": "Tablets",
        "strengths": "20 mg/12.5 mg HCTZ",
        "manufacturer": "Searle Pakistan (Pvt) Ltd.",
        "region": "Pakistan"
      },
    ],
    "interactions": [
      {
        "drugClass": "Potassium-Sparing Diuretics / Potassium Supplements",
        "effect": "Hyperkalemia risk.",
        "severity": "Major"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive effect, increased renal impairment risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors / Aliskiren",
        "effect": "Dual RAAS blockade increases adverse events.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Colesevelam",
        "effect": "Reduced olmesartan absorption (separate dosing).",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Enhanced hypotensive effect.",
        "severity": "Moderate"
      }
    ],
    "warning": "BLACK BOX: Fetal toxicity. Contraindicated in angioedema. Rare risk of sprue-like enteropathy (severe chronic diarrhea with weight loss) reported with long-term use - discontinue if suspected. Monitor renal function and potassium. Pediatric safety not established.",
    "subCategoryId": "arbs"
  },
  {
    "id": "azilsartan",
    "categoryId": "cardiovascular",
    "genericName": "Azilsartan",
    "brandNames": "AZILTA, Zilsart",
    "description": "The newest ARB offering potent 24-hour blood pressure control with a very low incidence of adverse events. Provides dose-dependent BP reduction with excellent trough-to-peak ratio.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Hypertension",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "40-80 mg once daily",
        "sub": "Start: 40 mg once daily. Max: 80 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "2-4 hours onset",
        "sub": "11 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Essential hypertension (alone or in combination therapy)",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "AZILTA",
        "form": "Tablets",
        "strengths": "80 mg",
        "manufacturer": "WinsFeild Pharmaceutical",
        "region": "Pakistan"
      },
      {
        "name": "Zilsart",
        "form": "Tablets",
        "strengths": "40 mg",
        "manufacturer": "ACME Laboratories Ltd. (import)",
        "region": "Pakistan"
      },
      {
        "name": "Edarbi",
        "form": "Tablets",
        "strengths": "40 mg, 80 mg",
        "manufacturer": "Daiichi Sankyo",
        "region": "International"
      }
    ],
    "interactions": [
      {
        "drugClass": "Potassium-Sparing Diuretics / Potassium Supplements",
        "effect": "Increased risk of hyperkalemia.",
        "severity": "Major"
      },
      {
        "drugClass": "NSAIDs",
        "effect": "Reduced antihypertensive efficacy and potential renal impairment.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors / Aliskiren",
        "effect": "Dual RAAS blockade increases adverse events.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Possible increased lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics (High-dose)",
        "effect": "First-dose hypotension risk in volume-depleted patients.",
        "severity": "Moderate"
      },
      {
        "drugClass": "CYP2C9 Inhibitors/Inducers",
        "effect": "Potential alteration in azilsartan levels.",
        "severity": "Minor"
      }
    ],
    "warning": "BLACK BOX: Fetal toxicity. Contraindicated in angioedema history and bilateral renal artery stenosis. Monitor renal function and potassium levels. May cause dizziness and orthostatic hypotension. Lower incidence of cough and angioedema compared to ACE inhibitors. Pediatric safety not established.",
    "subCategoryId": "arbs"
  }
];
