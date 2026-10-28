// data/antiepileptics.js
export const antiepileptics = [
  {
    "id": "sodium-valproate",
    "categoryId": "antiepileptics",
    "genericName": "Sodium Valproate (Valproic Acid)",
    "brandNames": "Epival, Dapakan, Epirate, Epilim, Epimed, Divarex",
    "description": "Broad-spectrum AED with multiple mechanisms: enhances GABA activity, blocks sodium channels, and modulates glutamate activity. Effective against many seizure types and also used for migraine prophylaxis and bipolar disorder.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Epilepsy (all seizure types)",
    "specialField": {
      "label": "Mechanism",
      "value": "Multiple (GABA, Na+ channels, glutamate)"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE (Initial)",
        "value": "10-15 mg/kg/day in 2-3 divided doses",
        "sub": "Max: 60 mg/kg/day"
      },
      {
        "label": "USUAL MAINTENANCE DOSE",
        "value": "1,000-2,000 mg/day in divided doses",
        "sub": "Usual: 750 mg/day initial"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "Oral: 1-4 hours onset",
        "sub": "9-16 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Epilepsy (all types), migraine prophylaxis, bipolar disorder (acute mania)",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Epival",
        "form": "Syrup, CR Tablet, Injection",
        "strengths": "250 mg/5 mL, 500 mg/5 mL, 500 mg",
        "manufacturer": "Abbott Laboratories (Pakistan) Limited",
        "region": "Pakistan"
      },
      {
        "name": "Dapakan",
        "form": "Syrup, Tablet",
        "strengths": "250 mg/5 mL, 250 mg",
        "manufacturer": "Platinum Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Epirate",
        "form": "Tablet",
        "strengths": "250 mg, 500 mg",
        "manufacturer": "Wilsons Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Epilim",
        "form": "Tablet",
        "strengths": "250 mg, 500 mg",
        "manufacturer": "Sanofi",
        "region": "Pakistan"
      },
      {
        "name": "Epimed",
        "form": "Tablet",
        "strengths": "250 mg, 500 mg",
        "manufacturer": "Mediate Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Divarex",
        "form": "Tablet",
        "strengths": "250 mg, 500 mg",
        "manufacturer": "Medera Pharmaceuticals",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Carbamazepine",
        "effect": "Decreased valproate levels; increased carbamazepine-epoxide levels.",
        "severity": "Major"
      },
      {
        "drugClass": "Lamotrigine",
        "effect": "Valproate doubles lamotrigine half-life; increased risk of SJS/TEN. Reduce lamotrigine dose by 50%.",
        "severity": "Major"
      },
      {
        "drugClass": "Phenytoin",
        "effect": "Displaces phenytoin from protein binding; increased free phenytoin levels.",
        "severity": "Major"
      },
      {
        "drugClass": "Phenobarbital",
        "effect": "Increased phenobarbital levels; sedation risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Aspirin / NSAIDs",
        "effect": "Displaces valproate from protein binding; increased valproate toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Warfarin",
        "effect": "Increased anticoagulant effect; monitor INR closely.",
        "severity": "Major"
      }
    ],
    "warning": "BLACK BOX WARNING: Hepatotoxicity (especially in children <2 years on polytherapy) and teratogenicity (neural tube defects). Monitor LFTs and ammonia levels. Avoid in pregnancy unless absolutely necessary. Pancreatitis risk. Weight gain, tremor, hair loss common.",
    "subCategoryId": "antiepileptics"
  },
  {
    "id": "carbamazepine",
    "categoryId": "antiepileptics",
    "genericName": "Carbamazepine",
    "brandNames": "Seizunil, Tegral, Epicar, Teril, Xepil, Leptic",
    "description": "A first-line AED for focal (partial) and generalized tonic-clonic seizures. Also effective for trigeminal neuralgia. Sodium channel blocker.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Focal and Generalized Tonic-Clonic Seizures",
    "specialField": {
      "label": "Additional Use",
      "value": "Trigeminal neuralgia"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE (Initial)",
        "value": "100-200 mg BID (twice daily)",
        "sub": "Max: 1,600 mg/day"
      },
      {
        "label": "USUAL MAINTENANCE DOSE",
        "value": "800-1,200 mg/day in 2-4 divided doses",
        "sub": "Trigeminal neuralgia: 400-800 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "4-8 hours onset (oral)",
        "sub": "25-65 hours (initial); 8-20 hours (chronic)"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Epilepsy (focal, generalized tonic-clonic), trigeminal neuralgia, bipolar disorder",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Seizunil",
        "form": "Tablet, Syrup/Suspension",
        "strengths": "200 mg, 100 mg/5 mL",
        "manufacturer": "Platinum Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Tegral",
        "form": "Tablet, Syrup/Suspension",
        "strengths": "200 mg, 400 mg, 5 mL",
        "manufacturer": "Novartis",
        "region": "Pakistan"
      },
      {
        "name": "Epicar",
        "form": "Syrup/Suspension",
        "strengths": "100 mg/5 mL",
        "manufacturer": "Adamjee Pharmaceuticals (Pvt) Ltd",
        "region": "Pakistan"
      },
      {
        "name": "Teril",
        "form": "Tablet",
        "strengths": "200 mg",
        "manufacturer": "Merck",
        "region": "Pakistan"
      },
      {
        "name": "Xepil",
        "form": "Tablet",
        "strengths": "200 mg, 400 mg",
        "manufacturer": "Shaigan Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Leptic",
        "form": "Tablet",
        "strengths": "200 mg, 400 mg",
        "manufacturer": "Biolab",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Valproate",
        "effect": "Increased carbamazepine-epoxide (toxic metabolite); decreased valproate levels.",
        "severity": "Major"
      },
      {
        "drugClass": "Phenytoin",
        "effect": "Bidirectional enzyme induction; complex interactions, both levels affected.",
        "severity": "Major"
      },
      {
        "drugClass": "Lamotrigine",
        "effect": "Induces lamotrigine metabolism; requires higher lamotrigine dosing.",
        "severity": "Major"
      },
      {
        "drugClass": "Warfarin / Oral Contraceptives",
        "effect": "Reduced warfarin/contraceptive efficacy due to CYP3A4 induction.",
        "severity": "Major"
      },
      {
        "drugClass": "SSRIs (Fluoxetine, Fluvoxamine)",
        "effect": "Increased carbamazepine levels via CYP3A4 inhibition.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Macrolide Antibiotics (Erythromycin, Clarithromycin)",
        "effect": "Increased carbamazepine levels; risk of toxicity.",
        "severity": "Major"
      }
    ],
    "warning": "BLACK BOX WARNING: Aplastic anemia and agranulocytosis risk. HLA-B*1502 screening required in Asian populations (including Pakistani) before initiation due to SJS/TEN risk. Induces its own metabolism. Monitor CBC, LFTs, electrolytes. Avoid grapefruit juice.",
    "subCategoryId": "antiepileptics"
  },
  {
    "id": "phenytoin",
    "categoryId": "antiepileptics",
    "genericName": "Phenytoin",
    "brandNames": "Dilantin, Epinat, Epitoin, Epilantin, Di-Hydin",
    "description": "A sodium channel blocker used primarily for generalized tonic-clonic seizures, complex partial seizures, and in emergency settings for status epilepticus. Narrow therapeutic index with non-linear pharmacokinetics.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Generalized Tonic-Clonic and Complex Partial Seizures",
    "specialField": {
      "label": "Therapeutic Range",
      "value": "10-20 mcg/mL"
    },
    "stats": [
      {
        "label": "STANDARD ADULT MAINTENANCE",
        "value": "100 mg TID (three times daily)",
        "sub": "300-400 mg/day in 1-3 divided doses"
      },
      {
        "label": "STATUS EPILEPTICUS LOADING",
        "value": "15-20 mg/kg IV",
        "sub": "Max infusion: 50 mg/min"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "IV: rapid onset; Oral: 2-4 hours",
        "sub": "7-42 hours (dose-dependent, zero-order kinetics)"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Epilepsy (focal, generalized tonic-clonic), status epilepticus, seizure prophylaxis (head injury)",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Dilantin",
        "form": "Capsule, Syrup/Suspension",
        "strengths": "100 mg, 30 mg/5 mL",
        "manufacturer": "Pfizer",
        "region": "Pakistan"
      },
      {
        "name": "Epinat",
        "form": "Syrup/Suspension, Tablet/Capsule",
        "strengths": "30 mg/5 mL, 100 mg",
        "manufacturer": "Siza International",
        "region": "Pakistan"
      },
      {
        "name": "Epitoin",
        "form": "Tablet, Syrup/Suspension",
        "strengths": "100 mg, 125 mg/mL",
        "manufacturer": "Adamjee Pharmaceutical (PVT) LTD",
        "region": "Pakistan"
      },
      {
        "name": "Epilantin",
        "form": "Tablet/Capsule, Syrup/Suspension",
        "strengths": "100 mg, 30 mg/5 mL",
        "manufacturer": "Pharmedic",
        "region": "Pakistan"
      },
      {
        "name": "Di-Hydin",
        "form": "Tablet/Capsule",
        "strengths": "100 mg",
        "manufacturer": "French Pharmaceutical",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Carbamazepine",
        "effect": "Bidirectional enzyme induction; altered levels of both drugs.",
        "severity": "Major"
      },
      {
        "drugClass": "Valproate",
        "effect": "Displaces phenytoin from protein binding; increased free phenytoin levels and toxicity.",
        "severity": "Major"
      },
      {
        "drugClass": "Warfarin",
        "effect": "Increased warfarin metabolism initially, then decreased metabolism; unpredictable INR.",
        "severity": "Major"
      },
      {
        "drugClass": "Oral Contraceptives",
        "effect": "Reduced contraceptive efficacy via CYP3A4 induction.",
        "severity": "Major"
      },
      {
        "drugClass": "Fluconazole / Sulfonamides",
        "effect": "Increased phenytoin levels via CYP2C9 inhibition; toxicity risk.",
        "severity": "Major"
      },
      {
        "drugClass": "PPIs (Omeprazole)",
        "effect": "Increased phenytoin levels via CYP2C19 inhibition.",
        "severity": "Moderate"
      }
    ],
    "warning": "Narrow therapeutic index (10-20 mcg/mL). Zero-order kinetics means small dose increases cause disproportionate level rises. Monitor free phenytoin levels in renal impairment. Gingival hyperplasia, hirsutism, nystagmus, ataxia, megaloblastic anemia, osteomalacia with long-term use. Purple glove syndrome with IV.",
    "subCategoryId": "antiepileptics"
  },
  {
    "id": "levetiracetam",
    "categoryId": "antiepileptics",
    "genericName": "Levetiracetam",
    "brandNames": "Leveget, Tamlev, Levot, Levipil",
    "description": "A broad-spectrum AED with a favorable side effect profile and minimal drug interactions. Binds to synaptic vesicle protein 2A (SV2A), modulating neurotransmitter release. Effective for focal, generalized, and myoclonic seizures. Most prescribed AED in Karachi.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Focal, Generalized and Myoclonic Seizures",
    "specialField": {
      "label": "Key Advantage",
      "value": "Minimal drug interactions"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "500 mg BID (twice daily)",
        "sub": "Max: 3,000 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "Oral: ~1 hour onset",
        "sub": "6-8 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Epilepsy (focal, generalized, myoclonic), status epilepticus (IV)",
        "sub": null
      },
      {
        "label": "TITRATION SCHEDULE",
        "value": "Week 1: 250 mg BID; Week 2: 500 mg BID",
        "sub": "Adjust based on response"
      }
    ],
    "brandTable": [
      {
        "name": "Leveget",
        "form": "Film-Coated Tablet",
        "strengths": "750 mg",
        "manufacturer": "Getz Pharma Pvt. Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Tamlev",
        "form": "Syrup/Suspension",
        "strengths": "100 mg/mL",
        "manufacturer": "Medisure Laboratories Pakistan (Pvt)",
        "region": "Pakistan"
      },
      {
        "name": "Levot",
        "form": "Tablet",
        "strengths": "250 mg",
        "manufacturer": "Platinum Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Levetiracetam",
        "form": "Syrup/Suspension, Tablet",
        "strengths": "100 mg/mL, 500 mg",
        "manufacturer": "PharmEvo (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Levipil",
        "form": "Tablet",
        "strengths": "250 mg, 500 mg",
        "manufacturer": "Sun Pharma Laboratories Ltd.",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Carbamazepine",
        "effect": "No significant pharmacokinetic interaction.",
        "severity": "Minor"
      },
      {
        "drugClass": "Valproate",
        "effect": "No significant interaction; can be used together for refractory epilepsy.",
        "severity": "Minor"
      },
      {
        "drugClass": "Other AEDs",
        "effect": "Minimal interactions due to renal excretion and lack of CYP metabolism.",
        "severity": "Minor"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate possible.",
        "severity": "Moderate"
      },
      {
        "drugClass": "High-dose Trimethoprim/Sulfamethoxazole",
        "effect": "May increase levetiracetam levels due to competition for renal secretion.",
        "severity": "Moderate"
      }
    ],
    "warning": "Psychiatric side effects: hostility, agitation, depression, suicidal ideation. Monitoring for behavioral changes required. Dizziness, somnolence common. Reduce dose in renal impairment (CrCl <80 mL/min). Do not discontinue abruptly.",
    "subCategoryId": "antiepileptics"
  },
  {
    "id": "lamotrigine",
    "categoryId": "antiepileptics",
    "genericName": "Lamotrigine",
    "brandNames": "Lamictal, Lamtor, Lagintal, Lamnet",
    "description": "A broad-spectrum AED with dual sodium channel blockade and anti-glutamatergic effects. Particularly useful for focal and generalized seizures with mood-stabilizing properties. Complex titration required.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Focal and Generalized Seizures",
    "specialField": {
      "label": "Caution",
      "value": "Complex titration required"
    },
    "stats": [
      {
        "label": "MAX DOSE (With Inducers)",
        "value": "Up to 700 mg/day",
        "sub": "Regimen A: with carbamazepine, phenytoin, phenobarbital"
      },
      {
        "label": "MAX DOSE (With Valproate)",
        "value": "Up to 200 mg/day",
        "sub": "Regimen B: valproate doubles lamotrigine half-life"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-3 hours onset (oral)",
        "sub": "15-35 hours (monotherapy); 70 hours (with valproate)"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Epilepsy (focal, generalized tonic-clonic, Lennox-Gastaut), bipolar disorder (mood stabilization)",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Lamictal",
        "form": "Tablet",
        "strengths": "25 mg, 50 mg, 100 mg",
        "manufacturer": "GlaxoSmithKline",
        "region": "Pakistan"
      },
      {
        "name": "Lamtor",
        "form": "Dispersible Tablet",
        "strengths": "25 mg",
        "manufacturer": "Torrent Pharmaceuticals Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Lagintal",
        "form": "Tablet",
        "strengths": "50 mg",
        "manufacturer": "Adamjee Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Lamnet",
        "form": "Tablet",
        "strengths": "25 mg, 100 mg",
        "manufacturer": "Searle Pakistan (Pvt) Ltd.",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Valproate",
        "effect": "Doubles lamotrigine half-life; dramatically increased SJS/TEN risk. Reduce lamotrigine dose by 50%.",
        "severity": "Major"
      },
      {
        "drugClass": "Carbamazepine / Phenytoin / Phenobarbital",
        "effect": "Induces lamotrigine metabolism; requires higher doses (up to 700 mg/day).",
        "severity": "Major"
      },
      {
        "drugClass": "Oral Contraceptives",
        "effect": "Reduced lamotrigine levels by ~50%; may require dose adjustment.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Rifampin",
        "effect": "Significantly increases lamotrigine clearance; reduced efficacy.",
        "severity": "Major"
      },
      {
        "drugClass": "SSRIs (Sertraline)",
        "effect": "May increase lamotrigine levels slightly.",
        "severity": "Minor"
      }
    ],
    "warning": "BLACK BOX WARNING: Risk of Stevens-Johnson Syndrome (SJS) and toxic epidermal necrolysis (TEN). Slow titration is mandatory to minimize SJS risk. Discontinue at first sign of rash. Risk highest in first 2-8 weeks. Do not restart if rash was due to lamotrigine.",
    "subCategoryId": "antiepileptics"
  },
  {
    "id": "topiramate",
    "categoryId": "antiepileptics",
    "genericName": "Topiramate",
    "brandNames": "Topmate, Tomax, Topet, Neuto",
    "description": "An AED with multiple mechanisms of action including sodium channel blockade, GABA enhancement, and carbonic anhydrase inhibition. Effective for focal and generalized tonic-clonic seizures, Lennox-Gastaut syndrome, and migraine prophylaxis.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Focal and Generalized Tonic-Clonic Seizures",
    "specialField": {
      "label": "Additional Use",
      "value": "Migraine prophylaxis"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE (Initial)",
        "value": "25-50 mg/day at bedtime",
        "sub": "Max: 600 mg/day"
      },
      {
        "label": "USUAL MAINTENANCE DOSE",
        "value": "200-400 mg/day in 2 divided doses",
        "sub": "Migraine: 100 mg/day in 2 divided doses"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-3 hours onset",
        "sub": "19-25 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Epilepsy (focal, generalized tonic-clonic, Lennox-Gastaut), migraine prophylaxis, weight loss (off-label)",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Topmate",
        "form": "Tablet",
        "strengths": "25 mg, 50 mg",
        "manufacturer": "Maple Pharmaceutical Pvt. Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Tomax",
        "form": "Tablet",
        "strengths": "25 mg, 50 mg, 100 mg",
        "manufacturer": "Schazoo",
        "region": "Pakistan"
      },
      {
        "name": "Topet",
        "form": "Tablet",
        "strengths": "200 mg",
        "manufacturer": "Jupiter Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Neuto",
        "form": "Tablet",
        "strengths": "25 mg",
        "manufacturer": "Nabigasim Industries (Pvt) Ltd.",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Phenytoin / Carbamazepine",
        "effect": "Decreased topiramate levels by ~40-50% due to enzyme induction.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Valproate",
        "effect": "Increased risk of hyperammonemia and encephalopathy.",
        "severity": "Major"
      },
      {
        "drugClass": "Oral Contraceptives",
        "effect": "Reduced contraceptive efficacy at doses >200 mg/day.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Metformin",
        "effect": "Increased metformin levels; monitor for lactic acidosis.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium levels possible.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Carbonic Anhydrase Inhibitors (Acetazolamide)",
        "effect": "Increased risk of metabolic acidosis and nephrolithiasis.",
        "severity": "Moderate"
      }
    ],
    "warning": "Nephrolithiasis risk (calcium phosphate stones) - maintain adequate hydration. Metabolic acidosis, acute angle-closure glaucoma, oligohidrosis/hyperthermia in children. Cognitive side effects: word-finding difficulty, confusion, psychomotor slowing. Weight loss common. Teratogenic (cleft palate).",
    "subCategoryId": "antiepileptics"
  },
  {
    "id": "clonazepam",
    "categoryId": "antiepileptics",
    "genericName": "Clonazepam",
    "brandNames": "Naze, CLEEP, Clonatril, Azepam",
    "description": "A benzodiazepine that enhances GABA inhibitory activity in the CNS. Used for atonic seizures, myoclonic seizures, Lennox-Gastaut syndrome, and panic disorder.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Myoclonic, Akinetic and Atonic Seizures",
    "specialField": {
      "label": "Class",
      "value": "Benzodiazepine (GABA enhancer)"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE (Initial)",
        "value": "0.5 mg TID (three times daily)",
        "sub": "Max: 20 mg/day"
      },
      {
        "label": "USUAL MAINTENANCE DOSE",
        "value": "1-4 mg/day in 2-3 divided doses",
        "sub": "Panic disorder: 0.25 mg BID, up to 4 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset (oral)",
        "sub": "18-50 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Myoclonic, akinetic, atonic seizures, Lennox-Gastaut syndrome, panic disorder, REM sleep behavior disorder",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Naze",
        "form": "Tablet",
        "strengths": "0.5 mg",
        "manufacturer": "Schazoo",
        "region": "Pakistan"
      },
      {
        "name": "CLEEP",
        "form": "Tablet",
        "strengths": "0.5 mg, 2 mg",
        "manufacturer": "Medizan Laboratories (Pvt) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Clonatril",
        "form": "Tablet, Oral Drops",
        "strengths": "0.5 mg, 2 mg",
        "manufacturer": "Mascon Pharmaceuticals (PVT.) LTD.",
        "region": "Pakistan"
      },
      {
        "name": "Azepam",
        "form": "Tablet",
        "strengths": "2 mg",
        "manufacturer": "Perfect Pharma Pvt Ltd.",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Other CNS Depressants (Alcohol, Barbiturates, Opioids)",
        "effect": "Additive sedation and respiratory depression risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Valproate",
        "effect": "Increased risk of absence seizures; monitor for breakthrough seizures.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Phenytoin",
        "effect": "May alter phenytoin levels; monitor.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Carbamazepine",
        "effect": "Increases clonazepam metabolism; reduced efficacy.",
        "severity": "Moderate"
      },
      {
        "drugClass": "CYP3A4 Inhibitors (Ketoconazole, Ritonavir)",
        "effect": "Increased clonazepam levels; sedation risk.",
        "severity": "Moderate"
      }
    ],
    "warning": "Tolerance and dependence develop with prolonged use. Do not discontinue abruptly (withdrawal seizures, status epilepticus). Respiratory depression risk, especially with other CNS depressants. Avoid in severe hepatic impairment. Sedation, ataxia, behavioral disinhibition common. Not recommended in infants <6 months.",
    "subCategoryId": "antiepileptics"
  },
  {
    "id": "phenobarbital",
    "categoryId": "antiepileptics",
    "genericName": "Phenobarbital",
    "brandNames": "Debritone, Lenton, Phenomed, Phenobarb",
    "description": "A barbiturate AED that enhances inhibitory GABA activity in the CNS. A traditional AED still used in resource-limited settings and for neonatal seizures. Also used for status epilepticus.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Generalized Tonic-Clonic and Status Epilepticus",
    "specialField": {
      "label": "Use",
      "value": "Neonatal seizures"
    },
    "stats": [
      {
        "label": "STATUS EPILEPTICUS LOADING",
        "value": "15-20 mg/kg IV",
        "sub": "Max: 50-100 mg/min infusion rate"
      },
      {
        "label": "NEONATAL SEIZURES",
        "value": "20-25 mg/kg IV loading",
        "sub": "Maintenance: 4-6 mg/kg/day in 1-2 divided doses (start 24h after loading)"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "IV: 5-10 min; Oral: 30-60 min",
        "sub": "53-140 hours (very long half-life)"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Generalized tonic-clonic seizures, focal seizures, status epilepticus, neonatal seizures",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Debritone",
        "form": "Elixir",
        "strengths": "20 mg/mL",
        "manufacturer": "Xenon Pharmaceutical (PVT) Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Lenton",
        "form": "Tablet",
        "strengths": "30 mg",
        "manufacturer": "Valor/Al-Hameed",
        "region": "Pakistan"
      },
      {
        "name": "Phenomed",
        "form": "Elixir, Tablet/Capsule",
        "strengths": "20 mg/mL, 30 mg",
        "manufacturer": "Medicraft Pharmaceuticals Pvt Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "Phenobarb",
        "form": "Injection",
        "strengths": "100 mg/mL, 200 mg/mL",
        "manufacturer": "Atco Laboratories",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Valproate",
        "effect": "Increased phenobarbital levels by 30-50%; severe sedation risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Carbamazepine / Phenytoin",
        "effect": "Induces metabolism of both; complex enzyme induction interactions.",
        "severity": "Major"
      },
      {
        "drugClass": "Warfarin",
        "effect": "Significantly reduced warfarin efficacy via CYP induction.",
        "severity": "Major"
      },
      {
        "drugClass": "Oral Contraceptives",
        "effect": "Reduced contraceptive efficacy.",
        "severity": "Major"
      },
      {
        "drugClass": "Alcohol / Benzodiazepines / Opioids",
        "effect": "Additive CNS and respiratory depression; potentially fatal.",
        "severity": "Major"
      },
      {
        "drugClass": "Corticosteroids / Theophylline",
        "effect": "Increased clearance of these drugs; reduced efficacy.",
        "severity": "Moderate"
      }
    ],
    "warning": "High potential for tolerance, dependence, and abuse. Do not discontinue abruptly (withdrawal seizures, status epilepticus). Respiratory depression risk - monitor closely. Sedation, cognitive impairment in children, paradoxical excitement in elderly. Osteomalacia with long-term use. Pregnancy: neonatal hemorrhage risk (give vitamin K).",
    "subCategoryId": "antiepileptics"
  },
  {
    "id": "oxcarbazepine",
    "categoryId": "antiepileptics",
    "genericName": "Oxcarbazepine",
    "brandNames": "Telox, Trioptal, Oxaze, OXZEPIN",
    "description": "A newer AED derivative of carbamazepine with generally better tolerability. Blocks voltage-gated sodium channels. Effective for focal and generalized tonic-clonic seizures. Specifically indicated for partial seizures.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Focal (Partial) Seizures",
    "specialField": {
      "label": "Versus Carbamazepine",
      "value": "Better tolerated, fewer interactions"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE (Initial)",
        "value": "300 mg BID (twice daily)",
        "sub": "Monotherapy: 600 mg BID maintenance"
      },
      {
        "label": "MAX DAILY DOSE",
        "value": "Up to 2,400 mg/day",
        "sub": "Adjunctive therapy: 600-900 mg BID"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-3 hours onset (oral)",
        "sub": "1-5 hours (parent); 7-9 hours (active metabolite MHD)"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Focal (partial) seizures, generalized tonic-clonic seizures, trigeminal neuralgia (off-label)",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Telox",
        "form": "Tablet, Oral Suspension",
        "strengths": "150 mg, 300 mg/mL",
        "manufacturer": "Platinum Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Trioptal",
        "form": "Tablet",
        "strengths": "150 mg, 300 mg, 600 mg",
        "manufacturer": "Novartis",
        "region": "Pakistan"
      },
      {
        "name": "Oxaze",
        "form": "Tablet",
        "strengths": "150 mg",
        "manufacturer": "Shroog Pharmaceutical Ltd.",
        "region": "Pakistan"
      },
      {
        "name": "OXZEPIN",
        "form": "Tablet",
        "strengths": "150 mg",
        "manufacturer": "Nabigasim Industries (Pvt) Ltd.",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Carbamazepine",
        "effect": "Reduced oxcarbazepine metabolite levels; not typically used together.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Oral Contraceptives",
        "effect": "Reduced contraceptive efficacy (less than carbamazepine but still significant).",
        "severity": "Major"
      },
      {
        "drugClass": "Phenytoin",
        "effect": "Increased phenytoin levels by up to 40%; monitor phenytoin levels.",
        "severity": "Major"
      },
      {
        "drugClass": "Valproate",
        "effect": "Reduced valproate levels; monitor.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Calcium Channel Blockers (Felodipine, Verapamil)",
        "effect": "Reduced CCB efficacy via CYP3A4/5 induction.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics (Hydrochlorothiazide)",
        "effect": "Increased risk of hyponatremia (additive effect).",
        "severity": "Moderate"
      }
    ],
    "warning": "Hyponatremia risk (especially in elderly, with diuretics or SIADH) - monitor serum sodium. HLA-B*1502 screening recommended in Asian populations (though lower risk than carbamazepine). Dizziness, diplopia, ataxia common with rapid titration. Hypersensitivity reactions possible. Cross-sensitivity with carbamazepine in 25% of patients.",
    "subCategoryId": "antiepileptics"
  }
];
