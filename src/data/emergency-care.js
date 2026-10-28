// data/emergency-care.js
export const emergencyCare = [
  {
    "id": "adrenaline",
    "categoryId": "emergency-care",
    "genericName": "Adrenaline (Epinephrine)",
    "brandNames": "Epibabs, Esphrine, Maxiphrine, EPINOR, Adrenol",
    "description": "Sympathomimetic; acts on alpha and beta receptors. Used for anaphylaxis, cardiac arrest, severe asthma.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Anaphylaxis and Cardiac Arrest",
    "dosageForm": "Injection (IM/IV)",
    "stats": [
      {
        "label": "ANAPHYLAXIS DOSE",
        "value": "0.3-0.5 mg IM (anterolateral thigh)",
        "sub": "Repeat q5-15 min if no response"
      },
      {
        "label": "CARDIAC ARREST DOSE",
        "value": "1 mg IV q3-5 min",
        "sub": "Follow ACLS guidelines"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "Immediate (IV); 5-10 min (IM)",
        "sub": "~2 min half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Anaphylaxis, cardiac arrest, severe asthma, croup, septic shock",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Epibabs",
        "form": "Injection (Ampoule, Prefilled Syringe)",
        "strengths": "1 mg/mL (1:1000)",
        "manufacturer": "Babsons Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Esphrine",
        "form": "Injection",
        "strengths": "1 mg/mL (1:1000)",
        "manufacturer": "Wise Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Maxiphrine",
        "form": "Injection",
        "strengths": "1 mg/mL (1:1000)",
        "manufacturer": "Maxitech Pharma",
        "region": "Pakistan"
      },
      {
        "name": "EPINOR",
        "form": "Injection",
        "strengths": "1 mg/mL (1:1000)",
        "manufacturer": "Ferozsons Labs",
        "region": "Pakistan"
      },
      {
        "name": "Adrenol",
        "form": "Injection",
        "strengths": "1 mg/mL (1:1000)",
        "manufacturer": "Sami Pharma",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Beta-Blockers (Propranolol, Metoprolol)",
        "effect": "Blunted beta-adrenergic response; unopposed alpha effect may cause severe hypertension.",
        "severity": "Major"
      },
      {
        "drugClass": "MAO Inhibitors",
        "effect": "Potentiation of pressor effects; risk of hypertensive crisis.",
        "severity": "Major"
      },
      {
        "drugClass": "Tricyclic Antidepressants (Amitriptyline)",
        "effect": "Enhanced cardiovascular effects; increased risk of arrhythmias.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Digoxin",
        "effect": "Increased risk of arrhythmias with concurrent use.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Halogenated Anesthetics (Halothane)",
        "effect": "Increased risk of ventricular arrhythmias.",
        "severity": "Major"
      }
    ],
    "warning": "Extravasation risk: causes tissue necrosis. Monitor BP, HR, and ECG continuously during IV infusion. Use cautiously in elderly, hyperthyroidism, and CV disease. Do not inject into digits, nose, or genitals.",
    "subCategoryId": "emergency-care"
  },
  {
    "id": "atropine",
    "categoryId": "emergency-care",
    "genericName": "Atropine",
    "brandNames": "Atrovent, Atropine Sulphate (Lahore Chemical), Opta Atropine (eye drops)",
    "description": "Anticholinergic (muscarinic antagonist); increases HR, reduces secretions. Used for bradycardia and organophosphate poisoning.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Bradycardia and Organophosphate Poisoning",
    "dosageForm": "Injection (IV/IM), Ophthalmic",
    "stats": [
      {
        "label": "BRADYCARDIA DOSE",
        "value": "0.5 mg IV q3-5 min",
        "sub": "Max: 3 mg total"
      },
      {
        "label": "ORGANOPHOSPHATE POISONING",
        "value": "2-20 mg IV (titrated)",
        "sub": "Until atropinization achieved"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "Immediate (IV); 3-5 min (IM)",
        "sub": "2-4 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Symptomatic bradycardia, organophosphate/nerve agent poisoning, pre-anesthesia, mydriasis",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Atropine Sulphate",
        "form": "Injection",
        "strengths": "0.6 mg/mL, 1 mg/mL",
        "manufacturer": "Lahore Chemical",
        "region": "Pakistan"
      },
      {
        "name": "Atrovent",
        "form": "Injection",
        "strengths": "0.6 mg/mL",
        "manufacturer": "Various (Import)",
        "region": "Pakistan, Global"
      },
      {
        "name": "Opta Atropine",
        "form": "Ophthalmic Drops",
        "strengths": "1% eye drops",
        "manufacturer": "Opta Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Atropine Sulphate",
        "form": "Injection",
        "strengths": "0.6 mg/mL",
        "manufacturer": "Sanofi-Aventis",
        "region": "Pakistan"
      },
      {
        "name": "Atropine",
        "form": "Injection",
        "strengths": "0.6 mg/mL, 1 mg/mL",
        "manufacturer": "Ferozsons Labs",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticholinergics (Antihistamines, TCAs)",
        "effect": "Additive anticholinergic effects; risk of ileus, urinary retention, hyperthermia.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Pilocarpine and Other Cholinomimetics",
        "effect": "Antagonistic effect; reduces efficacy of glaucoma medications.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Haloperidol and Phenothiazines",
        "effect": "Increased risk of anticholinergic side effects and tardive dyskinesia.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Potassium Supplements",
        "effect": "Risk of GI ulceration due to decreased GI motility.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Pramlintide",
        "effect": "Increased risk of ileus due to additive slowing of GI motility.",
        "severity": "Moderate"
      }
    ],
    "warning": "May cause blurred vision, photophobia, dry mouth, urinary retention, constipation, and hyperthermia. Use cautiously in glaucoma, prostatic hyperplasia, and tachyarrhythmias. Large doses may cause CNS stimulation.",
    "subCategoryId": "emergency-care"
  },
  {
    "id": "furosemide",
    "categoryId": "emergency-care",
    "genericName": "Furosemide",
    "brandNames": "Lasix, Lasoride, Frusemide",
    "description": "Loop diuretic; inhibits Na-K-2Cl cotransporter in ascending loop of Henle. Used for edema, HTN, acute pulmonary edema.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Edema and Hypertension",
    "dosageForm": "Oral/IV/IM",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE (Edema)",
        "value": "20-80 mg once daily",
        "sub": "Max: 600 mg/day"
      },
      {
        "label": "STANDARD ADULT DOSE (HTN)",
        "value": "40 mg BID",
        "sub": "Adjust based on response"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min (oral); 5 min (IV)",
        "sub": "1-2 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Pulmonary edema, CHF, renal edema, hepatic cirrhosis, hypertension, hypercalcemia",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Lasix",
        "form": "Tablets, Injection",
        "strengths": "40 mg, 80 mg; 10 mg/mL injection",
        "manufacturer": "Sanofi-Aventis",
        "region": "Pakistan, Global"
      },
      {
        "name": "Lasoride",
        "form": "Tablets",
        "strengths": "40 mg",
        "manufacturer": "Getz Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Frusemide",
        "form": "Tablets, Injection",
        "strengths": "40 mg; 10 mg/mL injection",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Lasix",
        "form": "Tablet, Injection",
        "strengths": "40 mg, 500 mg; 10 mg/mL, 20 mg/2 mL",
        "manufacturer": "Sanofi Pakistan Ltd",
        "region": "Pakistan"
      },
      {
        "name": "Frusemide",
        "form": "Tablet, Injection",
        "strengths": "40 mg; 10 mg/mL",
        "manufacturer": "Ferozsons Labs",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Aminoglycosides (Gentamicin, Amikacin)",
        "effect": "Increased ototoxicity risk, especially in renal impairment.",
        "severity": "Major"
      },
      {
        "drugClass": "Corticosteroids and Amphotericin B",
        "effect": "Increased risk of hypokalemia.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors/ARBs",
        "effect": "Excessive hypotension risk, especially with first dose.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Reduced lithium clearance; increased lithium toxicity risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "NSAIDs (Ibuprofen, Diclofenac)",
        "effect": "Reduced diuretic and antihypertensive efficacy; increased nephrotoxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Digoxin",
        "effect": "Hypokalemia increases digoxin toxicity risk.",
        "severity": "Moderate"
      }
    ],
    "warning": "Monitor electrolytes (K+, Na+, Mg2+, Ca2+) and renal function regularly. Can cause severe dehydration and hypotension. Ototoxicity risk with rapid IV administration or high doses. Sulfonamide allergy cross-reactivity possible.",
    "subCategoryId": "emergency-care"
  },
  {
    "id": "digoxin",
    "categoryId": "emergency-care",
    "genericName": "Digoxin",
    "brandNames": "Lanoxin, Digox, Digitek, Doxin Liquid",
    "description": "Cardiac glycoside; inhibits Na/K-ATPase, increases myocardial contractility. Used for HFrEF and atrial fibrillation rate control.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "HFrEF and Atrial Fibrillation",
    "dosageForm": "Oral/IV",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE (HFrEF)",
        "value": "0.125-0.25 mg once daily",
        "sub": "Adjust for renal function"
      },
      {
        "label": "STANDARD ADULT DOSE (AF)",
        "value": "0.125-0.375 mg once daily",
        "sub": "Rate control: target HR < 110 bpm"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours (oral); 15-30 min (IV)",
        "sub": "36-48 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "HFrEF (NYHA II-IV), atrial fibrillation, atrial flutter",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Lanoxin",
        "form": "Tablets, Injection, Elixir",
        "strengths": "0.0625 mg, 0.125 mg, 0.25 mg; 0.25 mg/mL injection; 0.05 mg/mL elixir",
        "manufacturer": "GSK (now Covis Pharma)",
        "region": "Pakistan, Global"
      },
      {
        "name": "Digox",
        "form": "Tablets",
        "strengths": "0.125 mg, 0.25 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Digitek",
        "form": "Tablets",
        "strengths": "0.125 mg, 0.25 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Doxin Liquid",
        "form": "Oral Solution",
        "strengths": "0.05 mg/mL",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, Asia"
      },
      {
        "name": "Lanoxin",
        "form": "Tablet, Injection",
        "strengths": "0.125 mg, 0.25 mg; 0.25 mg/mL",
        "manufacturer": "GSK Pakistan Ltd",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Amiodarone",
        "effect": "Increased digoxin levels (50-70%); reduce digoxin dose by 50%.",
        "severity": "Major"
      },
      {
        "drugClass": "Verapamil and Calcium Channel Blockers",
        "effect": "Increased digoxin levels; risk of bradycardia and heart block.",
        "severity": "Major"
      },
      {
        "drugClass": "Diuretics (Furosemide, Thiazides)",
        "effect": "Hypokalemia and hypomagnesemia increase digoxin toxicity risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Quinidine",
        "effect": "Doubles digoxin levels by reducing renal clearance and tissue binding.",
        "severity": "Major"
      },
      {
        "drugClass": "Clarithromycin, Erythromycin (Macrolides)",
        "effect": "Increased digoxin absorption and levels via gut flora suppression.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Spironolactone",
        "effect": "May interfere with digoxin assay; increased toxicity risk.",
        "severity": "Moderate"
      }
    ],
    "warning": "Narrow therapeutic index (0.5-2.0 ng/mL). Monitor serum levels. Toxicity signs: nausea, vomiting, arrhythmias, visual disturbances (yellow-green halos). Correct hypokalemia, hypomagnesemia, and hypercalcemia. Reduce dose in renal impairment.",
    "subCategoryId": "emergency-care"
  },
  {
    "id": "dobutamine",
    "categoryId": "emergency-care",
    "genericName": "Dobutamine",
    "brandNames": "Dobutrex, Dobelite, Cordion, Dobutine, Dobex",
    "description": "Synthetic catecholamine; selective beta-1 agonist for acute heart failure and cardiogenic shock. Increases myocardial contractility with minimal chronotropic effect.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Acute Heart Failure and Cardiogenic Shock",
    "dosageForm": "IV Infusion",
    "stats": [
      {
        "label": "STANDARD IV INFUSION",
        "value": "2-20 mcg/kg/min",
        "sub": "Titrate to hemodynamic response"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 min onset",
        "sub": "~2 min half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Acute decompensated HF, cardiogenic shock, low cardiac output, cardiac stress testing",
        "sub": null
      },
      {
        "label": "MAX DOSE",
        "value": "40 mcg/kg/min",
        "sub": "Higher doses increase tachycardia risk"
      }
    ],
    "brandTable": [
      {
        "name": "Dobutrex",
        "form": "IV Infusion Vial",
        "strengths": "250 mg/20 mL (12.5 mg/mL)",
        "manufacturer": "Eli Lilly",
        "region": "Pakistan, Global"
      },
      {
        "name": "Dobelite",
        "form": "IV Infusion",
        "strengths": "250 mg/20 mL",
        "manufacturer": "Getz Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Cordion",
        "form": "IV Infusion",
        "strengths": "250 mg/20 mL",
        "manufacturer": "Hilton Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Dobutine",
        "form": "IV Infusion",
        "strengths": "250 mg/20 mL",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, Asia"
      },
      {
        "name": "Dobex",
        "form": "IV Infusion",
        "strengths": "250 mg/20 mL",
        "manufacturer": "Ferozsons Labs",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Beta-Blockers (Metoprolol, Atenolol)",
        "effect": "Antagonistic effect; reduced inotropic efficacy of dobutamine.",
        "severity": "Major"
      },
      {
        "drugClass": "MAO Inhibitors",
        "effect": "Prolonged and enhanced hypertensive effect.",
        "severity": "Major"
      },
      {
        "drugClass": "TCAs (Amitriptyline, Nortriptyline)",
        "effect": "Enhanced CV effects; increased risk of hypertension and arrhythmias.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Halogenated Anesthetics",
        "effect": "Increased risk of ventricular arrhythmias.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Cocaine",
        "effect": "Synergistic sympathomimetic effects; risk of severe hypertension and arrhythmias.",
        "severity": "Major"
      }
    ],
    "warning": "Continuous ECG and BP monitoring required. May cause tachycardia, hypertension, and ventricular ectopy. Tolerance may develop after 48-72 hours of continuous infusion. Correct hypovolemia before use.",
    "subCategoryId": "emergency-care"
  },
  {
    "id": "dopamine",
    "categoryId": "emergency-care",
    "genericName": "Dopamine",
    "brandNames": "Dopabas, Dopamine (Lahore Chemical), Dopacin",
    "description": "Naturally occurring catecholamine; dose-dependent effects: low dose (dopaminergic), moderate dose (beta-1), high dose (alpha-1). Used for hemodynamic support.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hemodynamic Support in Shock",
    "dosageForm": "IV Infusion",
    "stats": [
      {
        "label": "STANDARD IV INFUSION",
        "value": "2-5 mcg/kg/min initial",
        "sub": "Titrate to BP and perfusion"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "2-5 min onset",
        "sub": "~2 min half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Cardiogenic shock, septic shock, hypotension, bradycardia (temporizing measure)",
        "sub": null
      },
      {
        "label": "DOSE-RESPONSE",
        "value": "1-5 mcg: dopaminergic; 5-15 mcg: beta-1; >15 mcg: alpha-1",
        "sub": "Increasing doses cause vasoconstriction"
      }
    ],
    "brandTable": [
      {
        "name": "Dopabas",
        "form": "IV Infusion",
        "strengths": "200 mg/5 mL (40 mg/mL)",
        "manufacturer": "Babsons Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Dopamine",
        "form": "IV Infusion",
        "strengths": "200 mg/5 mL",
        "manufacturer": "Lahore Chemical",
        "region": "Pakistan"
      },
      {
        "name": "Dopacin",
        "form": "IV Infusion",
        "strengths": "200 mg/5 mL",
        "manufacturer": "Getz Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Dopamine HCl",
        "form": "IV Infusion",
        "strengths": "200 mg/5 mL, 400 mg/5 mL",
        "manufacturer": "Hospira (Pfizer)",
        "region": "Pakistan, Global"
      },
      {
        "name": "Dopamine",
        "form": "IV Infusion",
        "strengths": "200 mg/5 mL",
        "manufacturer": "Ferozsons Labs",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "MAO Inhibitors",
        "effect": "Severe hypertensive crisis due to reduced dopamine metabolism.",
        "severity": "Major"
      },
      {
        "drugClass": "Beta-Blockers (Propranolol)",
        "effect": "Unopposed alpha effect; risk of severe hypertension.",
        "severity": "Major"
      },
      {
        "drugClass": "Phenytoin",
        "effect": "Synergistic hypotension and bradycardia risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "TCAs (Amitriptyline)",
        "effect": "Enhanced CV effects; increased risk of hypertension and arrhythmias.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Ergot Alkaloids (Ergotamine)",
        "effect": "Extreme vasoconstriction; risk of gangrene.",
        "severity": "Major"
      }
    ],
    "warning": "Extravasation risk: causes tissue necrosis; treat with phentolamine infiltration. Correct hypovolemia before use. Monitor ECG, BP, and urine output. Taper gradually to avoid hypotension. Alkaline solutions inactivate dopamine.",
    "subCategoryId": "emergency-care"
  },
  {
    "id": "metoclopramide",
    "categoryId": "emergency-care",
    "genericName": "Metoclopramide",
    "brandNames": "Maxolon, Metocion, Freclomide, Metowil, Elpomide",
    "description": "Dopamine D2 antagonist; prokinetic and antiemetic. Enhances GI motility and gastric emptying. Used for nausea/vomiting and gastroparesis.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Nausea and Vomiting",
    "dosageForm": "Oral/IV/IM",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "10 mg 1-3 times daily",
        "sub": "Max: 30 mg/day (short-term)"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min (oral); 1-3 min (IV)",
        "sub": "5-6 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Nausea/vomiting (post-op, chemo), gastroparesis, GERD, migraine, lactation induction",
        "sub": null
      },
      {
        "label": "MAX DURATION",
        "value": "12 weeks max (tardive dyskinesia risk)",
        "sub": "Avoid long-term use"
      }
    ],
    "brandTable": [
      {
        "name": "Maxolon",
        "form": "Tablets, Injection, Syrup",
        "strengths": "10 mg; 5 mg/mL injection; 5 mg/5 mL syrup",
        "manufacturer": "Sanofi-Aventis",
        "region": "Pakistan, Global"
      },
      {
        "name": "Metocion",
        "form": "Tablets, Injection",
        "strengths": "10 mg; 5 mg/mL injection",
        "manufacturer": "Getz Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Freclomide",
        "form": "Tablets, Injection",
        "strengths": "10 mg; 5 mg/mL injection",
        "manufacturer": "Ferozsons Labs",
        "region": "Pakistan"
      },
      {
        "name": "Metowil",
        "form": "Tablets, Syrup",
        "strengths": "10 mg; 5 mg/5 mL syrup",
        "manufacturer": "Wise Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Elpomide",
        "form": "Tablets, Injection",
        "strengths": "10 mg; 5 mg/mL injection",
        "manufacturer": "Bosch Pharma",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Antipsychotics (Haloperidol, Chlorpromazine)",
        "effect": "Increased risk of extrapyramidal side effects and tardive dyskinesia.",
        "severity": "Major"
      },
      {
        "drugClass": "SSRIs and MAO Inhibitors",
        "effect": "Increased risk of serotonin syndrome.",
        "severity": "Major"
      },
      {
        "drugClass": "Anticholinergics (Atropine, Hyoscine)",
        "effect": "Antagonistic prokinetic effect; reduced gastric emptying.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Digoxin",
        "effect": "Reduced digoxin absorption due to accelerated GI transit.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Cyclosporine",
        "effect": "Increased cyclosporine absorption due to accelerated gastric emptying.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Paracetamol (Acetaminophen)",
        "effect": "Increased rate of paracetamol absorption; earlier peak levels.",
        "severity": "Minor"
      }
    ],
    "warning": "BLACK BOX: Tardive dyskinesia risk with prolonged use (especially in elderly). Discontinue if involuntary movements occur. Avoid in GI obstruction, pheochromocytoma, and seizure disorders. May cause sedation and EPS reactions.",
    "subCategoryId": "emergency-care"
  }
];
