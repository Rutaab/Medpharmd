// data/antibiotics.js
export const antibiotics = [
  {
    "id": "amoxicillin",
    "categoryId": "antibiotics",
    "genericName": "Amoxicillin",
    "brandNames": "Amoxil, Trimox, Moxatag, Dispermox, Ospamox, Amoxicot",
    "description": "Broad-spectrum penicillin antibiotic. Most widely prescribed antibiotic globally. Used for respiratory, urinary tract, and skin infections. Often combined with clavulanic acid to overcome beta-lactamase resistance.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Respiratory and UTIs",
    "specialField": { "label": "Spectrum", "value": "Broad-spectrum penicillin" },
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-500 mg TID or 875 mg BID", "sub": "Max: 3 g/day" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 hours peak", "sub": "~1 hour half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Otitis media, sinusitis, bronchitis, UTI, gonorrhea, Lyme disease, H. pylori", "sub": null },
      { "label": "PEDIATRIC", "value": "20-90 mg/kg/day divided", "sub": "Weight-based dosing" }
    ],
    "brandTable": [
      { "name": "Amoxil", "form": "Capsules, Tablets, Suspension", "strengths": "250 mg, 500 mg; 125 mg/5 mL, 250 mg/5 mL susp.", "manufacturer": "GSK", "region": "USA, UK, Europe, Global" },
      { "name": "Trimox", "form": "Capsules, Suspension", "strengths": "250 mg, 500 mg", "manufacturer": "Apothecon (BMS)", "region": "USA" },
      { "name": "Moxatag", "form": "Extended-Release Tablets", "strengths": "775 mg", "manufacturer": "MiddBrook", "region": "USA" },
      { "name": "Ospamox", "form": "Tablets, Suspension, Drops", "strengths": "250 mg, 500 mg, 750 mg, 1000 mg; susp. 125-250 mg/5 mL", "manufacturer": "Sandoz (Novartis)", "region": "Europe, Asia, Pakistan" },
      { "name": "Dispermox", "form": "Dispersible Tablets", "strengths": "125 mg, 250 mg, 500 mg", "manufacturer": "Various", "region": "Pakistan, India" },
      { "name": "Amoxil", "form": "Capsule, Drops, Suspension", "strengths": "125 mg, 250 mg, 500 mg; 100 mg/mL drops", "manufacturer": "GlaxoSmithKline Pakistan Ltd.", "region": "Pakistan" },
      { "name": "Zeemox", "form": "Syrup", "strengths": "125 mg/5 mL, 250 mg/5 mL", "manufacturer": "Searle", "region": "Pakistan" },
      { "name": "Dispermox (ZAFA)", "form": "Dispersible Tablet", "strengths": "250 mg, 500 mg", "manufacturer": "ZAFA Pharmaceuticals", "region": "Pakistan" },
      { "name": "Trimox", "form": "Capsule", "strengths": "250 mg, 500 mg", "manufacturer": "Bristol-Myers Squibb (international)", "region": "Pakistan" },
      { "name": "Moxypen", "form": "Capsule", "strengths": "250 mg, 500 mg", "manufacturer": "Various generic", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" },
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy (rare).", "severity": "Minor" },
      { "drugClass": "Probenecid", "effect": "Increased amoxicillin levels.", "severity": "Minor" },
      { "drugClass": "Allopurinol", "effect": "Increased risk of skin rash.", "severity": "Minor" },
      { "drugClass": "Methotrexate", "effect": "Decreased renal clearance.", "severity": "Moderate" }
    ],
    "warning": "Hypersensitivity reactions common (1-10%). Take with food to reduce GI upset. Complete full course. Monitor for rash, diarrhea. Pseudomembranous colitis possible. Avoid in penicillin allergy.",
    "subCategoryId": "penicillins"
  },
  {
    "id": "amoxicillin-clavulanate",
    "categoryId": "antibiotics",
    "genericName": "Amoxicillin + Clavulanate",
    "brandNames": "Augmentin, Augmentin ES, Clavulin, Co-Amoxiclav, Augmentin XR, Klavocin",
    "description": "Amoxicillin combined with clavulanic acid (beta-lactamase inhibitor). Extended spectrum to include beta-lactamase-producing bacteria. Among the most commonly prescribed antibiotics for respiratory infections.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Respiratory and Sinus Infections",
    "specialField": { "label": "Ratio", "value": "4:1 (250/125) to 16:1 (1000/62.5)" },
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "500/125 mg TID or 875/125 mg BID", "sub": "Max: 1,750/250 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 hours peak", "sub": "~1 hour half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute otitis media, sinusitis, CAP, COPD exacerbations, animal bites, diabetic foot infections", "sub": null },
      { "label": "XR FORMULATION", "value": "2,000/125 mg BID", "sub": "For CAP with resistance" }
    ],
    "brandTable": [
      { "name": "Augmentin", "form": "Tablets, Chewable, Suspension", "strengths": "250/125 mg, 500/125 mg, 875/125 mg; 125-400 mg/5 mL susp.", "manufacturer": "GSK", "region": "USA, UK, Europe, Global" },
      { "name": "Augmentin ES", "form": "Suspension", "strengths": "600/42.9 mg/5 mL", "manufacturer": "GSK", "region": "USA" },
      { "name": "Clavulin", "form": "Tablets, Suspension", "strengths": "250/125 mg, 500/125 mg, 875/125 mg", "manufacturer": "Novartis", "region": "Europe, Asia, Pakistan" },
      { "name": "Klavocin", "form": "Tablets, Suspension, Injection", "strengths": "625 mg, 1,000 mg; 1,000 mg/200 mg IV", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Co-Amoxiclav", "form": "Tablets, Suspension, IV", "strengths": "375 mg, 625 mg, 1,000 mg; IV 1,000/200 mg", "manufacturer": "Various (Generic)", "region": "UK, Europe" },
      { "name": "Augmentin", "form": "Tablet, Suspension, Injection", "strengths": "375 mg, 625 mg, 1 g; susp 156.25-457 mg/5 mL", "manufacturer": "GlaxoSmithKline Pakistan Ltd.", "region": "Pakistan" },
      { "name": "Calamox", "form": "Tablet, Oral Drops, Suspension, Injection", "strengths": "625 mg; drops 62.5 mg/mL; susp; inj 600 mg, 1.2 g", "manufacturer": "Bosch Pharmaceuticals (Pvt.) Ltd.", "region": "Pakistan" },
      { "name": "Zamoclav", "form": "Tablet, Suspension, Injection", "strengths": "625 mg, 1 g; susp; inj 1.2 g", "manufacturer": "ZAFA Pharmaceutical Laboratories (Pvt.) Ltd.", "region": "Pakistan" },
      { "name": "Comoxi", "form": "Suspension, Tablet", "strengths": "156.25 mg/5 mL, 312.5 mg/5 mL; 625 mg", "manufacturer": "Macter International Ltd.", "region": "Pakistan" },
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Major" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Probenecid", "effect": "Increased amoxicillin levels.", "severity": "Minor" },
      { "drugClass": "Allopurinol", "effect": "Increased rash risk.", "severity": "Minor" },
      { "drugClass": "Mycophenolate", "effect": "Reduced mycophenolate levels.", "severity": "Moderate" }
    ],
    "warning": "Higher diarrhoea incidence than amoxicillin alone due to clavulanate. Cholestatic jaundice risk (especially elderly, males). Take with food. Use with caution in hepatic impairment. Monitor LFTs in prolonged therapy.",
    "subCategoryId": "penicillins"
  },
  {
    "id": "ampicillin",
    "categoryId": "antibiotics",
    "genericName": "Ampicillin",
    "brandNames": "Principen, Omnipen, Ampicin, Totacillin, Penbritin, Ampikel",
    "description": "Broad-spectrum penicillin with extended Gram-negative coverage compared to penicillin V. Used for respiratory, GI, and urinary tract infections. Often combined with sulbactam for beta-lactamase coverage.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Respiratory and GI Infections",
    "dosageForm": "Oral/IM/IV",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-500 mg QID (oral)", "sub": "IV: 1-2 g every 4-6 hours" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 hours peak (oral)", "sub": "~1 hour half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Respiratory infections, UTIs, meningitis, endocarditis, salmonellosis, Listeria", "sub": null },
      { "label": "IV DOSING (SEVERE)", "value": "Up to 12 g/day IV", "sub": "For meningitis, endocarditis" }
    ],
    "brandTable": [
      { "name": "Principen", "form": "Capsules, Suspension, Injection", "strengths": "250 mg, 500 mg; 125-250 mg/5 mL susp.; 125-500 mg vials", "manufacturer": "Squibb (BMS)", "region": "USA" },
      { "name": "Omnipen", "form": "Capsules, Injection", "strengths": "250 mg, 500 mg; 125 mg, 250 mg, 500 mg vials", "manufacturer": "Wyeth", "region": "USA" },
      { "name": "Penbritin", "form": "Capsules, Suspension, Injection", "strengths": "250 mg, 500 mg; 125 mg/5 mL; 500 mg, 1 g vials", "manufacturer": "Beecham/GSK", "region": "UK, Europe" },
      { "name": "Ampicin", "form": "Capsules, Injection", "strengths": "250 mg, 500 mg; 500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Ampikel", "form": "Capsules, Injection", "strengths": "250 mg, 500 mg; 500 mg, 1 g IM/IV", "manufacturer": "Various (Generic)", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Probenecid", "effect": "Increased ampicillin levels.", "severity": "Minor" },
      { "drugClass": "Allopurinol", "effect": "Increased rash risk.", "severity": "Minor" },
      { "drugClass": "Aminoglycosides", "effect": "Synergistic bactericidal effect.", "severity": "Beneficial" }
    ],
    "warning": "Frequent skin rash (especially with allopurinol or mononucleosis). Ampicillin rash is common in EBV infection. Use with caution in penicillin allergy. Monitor renal function in high-dose IV therapy.",
    "subCategoryId": "penicillins"
  },
  {
    "id": "penicillin-v",
    "categoryId": "antibiotics",
    "genericName": "Penicillin V Potassium",
    "brandNames": "Pen-Vee K, Veetids, V-Cillin K, Apocillin, Penicillin VK, Fenoxymethylpenicillin",
    "description": "First-line oral penicillin for streptococcal infections. Primary prophylaxis for rheumatic fever. Narrow spectrum primarily against Gram-positive organisms. Drug of choice for strep pharyngitis.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Strep Pharyngitis",
    "dosageForm": "Oral Tablets/Suspension",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-500 mg QID or 500 mg BID", "sub": "Max: 4 g/day" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min peak", "sub": "30-60 min half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Strep pharyngitis, scarlet fever, tonsillitis, rheumatic fever prophylaxis, dental prophylaxis, skin infections", "sub": null },
      { "label": "PEDIATRIC", "value": "25-50 mg/kg/day divided", "sub": "BID-TID dosing" }
    ],
    "brandTable": [
      { "name": "Pen-Vee K", "form": "Tablets, Suspension", "strengths": "125 mg, 250 mg, 500 mg", "manufacturer": "Wyeth (Pfizer)", "region": "USA, Canada" },
      { "name": "Veetids", "form": "Tablets, Solution", "strengths": "125 mg, 250 mg, 500 mg", "manufacturer": "Apothecon (BMS)", "region": "USA" },
      { "name": "V-Cillin K", "form": "Tablets", "strengths": "125 mg, 250 mg, 500 mg", "manufacturer": "Eli Lilly", "region": "USA (discontinued)" },
      { "name": "Penicillin VK", "form": "Tablets", "strengths": "250 mg, 500 mg", "manufacturer": "Various (Generic)", "region": "USA, Europe" },
      { "name": "Fenoxymethylpenicillin", "form": "Tablets, Suspension", "strengths": "125 mg, 250 mg, 500 mg; 125 mg/5 mL, 250 mg/5 mL", "manufacturer": "Various (Generic)", "region": "Europe, Asia, Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Probenecid", "effect": "Increased penicillin levels.", "severity": "Minor" },
      { "drugClass": "Tetracyclines", "effect": "Possible antagonism of bactericidal effect.", "severity": "Minor" },
      { "drugClass": "Neomycin (Oral)", "effect": "Reduced penicillin absorption.", "severity": "Minor" }
    ],
    "warning": "Take on empty stomach (1 hour before or 2 hours after meals). Complete full course even if symptoms improve. Watch for hypersensitivity reactions. Narrow spectrum - use only for susceptible organisms.",
    "subCategoryId": "penicillins"
  },
  {
    "id": "penicillin-g",
    "categoryId": "antibiotics",
    "genericName": "Penicillin G",
    "brandNames": "Pfizerpen, Pentids, Benzylpenicillin, Crystapen, Penicillin G Procaine, Penicillin G Benzathine",
    "description": "Parenteral penicillin for severe infections. Available as aqueous, procaine (repository), and benzathine (long-acting) formulations. First-line for syphilis, and used for severe streptococcal infections.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Severe Streptococcal Infections",
    "dosageForm": "IM/IV Injection",
    "stats": [
      { "label": "AQUEOUS IV DOSE", "value": "2-4 million units q4-6h", "sub": "Max: 24 million units/day" },
      { "label": "BENZATHINE IM DOSE", "value": "1.2 million units once (strep)", "sub": "Syphilis: 2.4 million units weekly" },
      { "label": "CLINICAL INDICATIONS", "value": "Syphilis, strep pharyngitis (severe), scarlet fever, endocarditis, meningitis, gas gangrene, actinomycosis", "sub": null },
      { "label": "PROCAINE IM DOSE", "value": "0.6-1.2 million units daily", "sub": "For moderate infections" }
    ],
    "brandTable": [
      { "name": "Pfizerpen", "form": "IV/IM Injection", "strengths": "5 million unit vials, 20 million unit vials", "manufacturer": "Pfizer", "region": "USA, Global" },
      { "name": "Bicillin L-A", "form": "IM Injection (Benzathine)", "strengths": "600,000 U/mL; 1.2 million U/2 mL; 2.4 million U/4 mL", "manufacturer": "Pfizer", "region": "USA, Global" },
      { "name": "Crystapen", "form": "IV Injection", "strengths": "600 mg (1 million U), 1.2 g vials", "manufacturer": "Various", "region": "UK, Europe" },
      { "name": "Pentids", "form": "IM Injection", "strengths": "1 million U, 5 million U, 10 million U vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Benzathine Penicillin", "form": "IM Injection", "strengths": "1.2 million U, 2.4 million U pre-filled syringes", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Increased and prolonged penicillin levels.", "severity": "Minor" },
      { "drugClass": "Tetracyclines", "effect": "Possible antagonism (bacteriostatic vs. bactericidal).", "severity": "Minor" },
      { "drugClass": "Aminoglycosides", "effect": "Synergistic bactericidal activity.", "severity": "Beneficial" },
      { "drugClass": "Neuromuscular Blockers", "effect": "Prolonged neuromuscular blockade.", "severity": "Minor" }
    ],
    "warning": "IV aqueous: watch for electrolyte load (K+ content). Benzathine: for IM use only, never IV (can cause fatal emboli). Procaine: can cause procaine reactions (CNS/cardiovascular). Jarisch-Herxheimer reaction in syphilis treatment.",
    "subCategoryId": "penicillins"
  },
  {
    "id": "piperacillin-tazobactam",
    "categoryId": "antibiotics",
    "genericName": "Piperacillin + Tazobactam",
    "brandNames": "Zosyn, Tazocin, Pip-Tazo, Zobact, Piperacillin-Tazobactam, Tazact",
    "description": "Extended-spectrum penicillin combined with beta-lactamase inhibitor. Workhorse antipseudomonal antibiotic for hospital-acquired infections and febrile neutropenia. Active against Pseudomonas aeruginosa.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hospital-Acquired Infections",
    "dosageForm": "IV Injection/Infusion",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "3.375 g (3 g + 0.375 g) IV q6h", "sub": "Renal adjustment needed for CrCl <20" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~1 hour half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "HAP/VAP, complicated UTI, complicated IAI, febrile neutropenia, septicemia, diabetic foot infections", "sub": null },
      { "label": "EXTENDED INFUSION", "value": "4.5 g q8h over 4 hours", "sub": "For resistant organisms" }
    ],
    "brandTable": [
      { "name": "Zosyn", "form": "IV Injection, Premix Bags", "strengths": "2.25 g, 3.375 g, 4.5 g vials; 40.5 g pharmacy bulk", "manufacturer": "Pfizer", "region": "USA, Global" },
      { "name": "Tazocin", "form": "IV Injection", "strengths": "2.25 g, 4.5 g vials", "manufacturer": "Pfizer", "region": "Europe, Asia, Pakistan" },
      { "name": "Zobact", "form": "IV Injection", "strengths": "2.25 g, 4.5 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Tazact", "form": "IV Injection", "strengths": "2.25 g, 4.5 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Pip-Tazo", "form": "IV Injection", "strengths": "2.25 g, 3.375 g, 4.5 g", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Major" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" },
      { "drugClass": "Vecuronium/Rocuronium", "effect": "Prolonged neuromuscular blockade.", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Increased piperacillin levels.", "severity": "Minor" },
      { "drugClass": "Aminoglycosides", "effect": "Synergistic effect; avoid physical mixing.", "severity": "Beneficial" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate toxicity.", "severity": "Moderate" }
    ],
    "warning": "Monitor renal function (dose adjustment for CrCl <40). Extended infusion improves outcomes in resistant organisms. High sodium load - caution in heart failure. Can cause bleeding with high doses due to platelet dysfunction. C diff colitis risk.",
    "subCategoryId": "penicillins"
  },
  {
    "id": "flucloxacillin",
    "categoryId": "antibiotics",
    "genericName": "Flucloxacillin",
    "brandNames": "Floxapen, Fluclox, Staphylex, Flupen, Ladipen, Flucloxin",
    "description": "Isoxazolyl penicillin resistant to staphylococcal beta-lactamase. First-line oral anti-staphylococcal penicillin. Used for skin and soft tissue infections caused by penicillinase-producing staphylococci.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Staphylococcal Skin Infections",
    "dosageForm": "Oral Capsules/IV Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-500 mg QID (oral)", "sub": "IV: 500 mg - 2 g q6h" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 hours peak", "sub": "~1 hour half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Impetigo, cellulitis, wound infections, furunculosis, osteomyelitis, endocarditis, surgical prophylaxis", "sub": null },
      { "label": "PEDIATRIC", "value": "25-50 mg/kg/day in 4 divided doses", "sub": "Weight-based for children" }
    ],
    "brandTable": [
      { "name": "Floxapen", "form": "Capsules, Suspension, Injection", "strengths": "250 mg, 500 mg caps; 125 mg/5 mL susp; 250 mg, 500 mg, 1 g vials", "manufacturer": "GSK (Beecham)", "region": "UK, Europe, Asia, Pakistan" },
      { "name": "Staphylex", "form": "Capsules, Injection", "strengths": "250 mg, 500 mg; 250 mg, 500 mg vials", "manufacturer": "Bristol-Myers Squibb", "region": "UK, Europe" },
      { "name": "Flupen", "form": "Capsules, Suspension, Injection", "strengths": "250 mg, 500 mg caps; 250 mg/5 mL; 500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Ladipen", "form": "Capsules, Injection", "strengths": "250 mg, 500 mg; 500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan" },
      { "name": "Flucloxin", "form": "Capsules", "strengths": "250 mg, 500 mg", "manufacturer": "Various (Generic)", "region": "India" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Probenecid", "effect": "Increased flucloxacillin levels.", "severity": "Minor" },
      { "drugClass": "Paracetamol (Acute OD)", "effect": "Reduced glutathione levels, increased hepatotoxicity risk.", "severity": "Minor" },
      { "drugClass": "Antacids/Sucralfate", "effect": "Reduced oral absorption.", "severity": "Minor" }
    ],
    "warning": "Take on empty stomach for optimal absorption. Prolonged use associated with hepatic injury (cholestatic jaundice), especially in elderly and treatment >2 weeks. Monitor LFTs. Avoid in penicillin allergy.",
    "subCategoryId": "penicillins"
  },
  {
    "id": "cloxacillin",
    "categoryId": "antibiotics",
    "genericName": "Cloxacillin",
    "brandNames": "Tegopen, Orbenin, Cloxapen, Klox, Novacloxin, Cloxacap",
    "description": "Isoxazolyl penicillin similar to flucloxacillin. Penicillinase-resistant penicillin for staphylococcal infections. Available in both oral and parenteral forms. Widely used in Pakistan and India.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Staphylococcal Infections",
    "dosageForm": "Oral Capsules/IV/IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-500 mg QID (oral)", "sub": "IV: 500 mg - 2 g q4-6h" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 hours peak", "sub": "~0.5-1 hour half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Cellulitis, abscess, wound infections, osteomyelitis, septic arthritis, endocarditis, pneumonia (staph)", "sub": null },
      { "label": "IV DOSING (SEVERE)", "value": "Up to 12 g/day", "sub": "Divided q4-6h for endocarditis" }
    ],
    "brandTable": [
      { "name": "Tegopen", "form": "Capsules, Suspension", "strengths": "250 mg, 500 mg; 125 mg/5 mL", "manufacturer": "Apothecon (BMS)", "region": "USA" },
      { "name": "Orbenin", "form": "Capsules, Injection", "strengths": "250 mg, 500 mg caps; 250 mg, 500 mg vials", "manufacturer": "GSK (Beecham)", "region": "UK, Europe" },
      { "name": "Klox", "form": "Capsules, Injection", "strengths": "250 mg, 500 mg caps; 500 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Novacloxin", "form": "Capsules, Injection", "strengths": "250 mg, 500 mg; 500 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan" },
      { "name": "Cloxapen", "form": "Capsules", "strengths": "250 mg, 500 mg", "manufacturer": "Various (Generic)", "region": "India, Asia" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Probenecid", "effect": "Increased cloxacillin levels.", "severity": "Minor" },
      { "drugClass": "Cyclosporine", "effect": "Reduced cyclosporine levels.", "severity": "Minor" },
      { "drugClass": "Tacrolimus", "effect": "Reduced tacrolimus levels.", "severity": "Minor" }
    ],
    "warning": "Hepatotoxicity risk with prolonged use. Cholestatic jaundice reported. Take on empty stomach. Avoid in penicillin allergy. Monitor LFTs in prolonged therapy. IV administration may cause phlebitis.",
    "subCategoryId": "penicillins"
  },
  {
    "id": "dicloxacillin",
    "categoryId": "antibiotics",
    "genericName": "Dicloxacillin",
    "brandNames": "Dycill, Dynapen, Pathocil, Diclocil, Diclox, Dicillin",
    "description": "Isoxazolyl penicillin similar to cloxacillin but with greater acid stability and better oral absorption. Used primarily for mild-to-moderate staphylococcal skin and soft tissue infections.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Staphylococcal Skin Infections",
    "dosageForm": "Oral Capsules",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-500 mg QID", "sub": "Max: 4 g/day" },
      { "label": "ONSET / HALF-LIFE", "value": "1-1.5 hours peak", "sub": "~0.5-0.8 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Impetigo, cellulitis, furunculosis, wound infections, mild osteomyelitis, pneumonia (staph)", "sub": null },
      { "label": "PEDIATRIC", "value": "12.5-25 mg/kg/day divided QID", "sub": "Weight-based for children" }
    ],
    "brandTable": [
      { "name": "Dycill", "form": "Capsules", "strengths": "250 mg, 500 mg", "manufacturer": "GSK", "region": "USA" },
      { "name": "Dynapen", "form": "Capsules, Suspension", "strengths": "125 mg, 250 mg, 500 mg; 62.5 mg/5 mL susp.", "manufacturer": "Apothecon (BMS)", "region": "USA" },
      { "name": "Pathocil", "form": "Capsules", "strengths": "250 mg, 500 mg", "manufacturer": "Wyeth", "region": "USA" },
      { "name": "Diclocil", "form": "Capsules", "strengths": "250 mg, 500 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Dicillin", "form": "Capsules", "strengths": "250 mg, 500 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Probenecid", "effect": "Increased dicloxacillin levels.", "severity": "Minor" },
      { "drugClass": "Antacids", "effect": "Reduced oral absorption.", "severity": "Minor" },
      { "drugClass": "Tetracyclines", "effect": "Possible bacteriostatic antagonism.", "severity": "Minor" }
    ],
    "warning": "Take on empty stomach for best absorption. Can cause elevated liver enzymes. Prolonged use may cause hepatotoxicity. Avoid in penicillin allergy. Use with caution in patients with hepatic impairment.",
    "subCategoryId": "penicillins"
  },
  {
    "id": "nafcillin",
    "categoryId": "antibiotics",
    "genericName": "Nafcillin",
    "brandNames": "Nafcil, Unipen, Nallpen, Nafcillin Sodium, Naflex",
    "description": "Penicillinase-resistant penicillin. Preferred anti-staphylococcal penicillin in patients with renal impairment due to minimal renal excretion (primarily biliary). Used for serious staphylococcal infections including endocarditis.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Serious Staph Infections",
    "dosageForm": "IV/IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 g IV q4-6h", "sub": "Max: 12 g/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~0.5-1 hour half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "MRSA(if sensitive), endocarditis, osteomyelitis, septic arthritis, meningitis, severe cellulitis", "sub": null },
      { "label": "RENAL ADVANTAGE", "value": "Primarily biliary elimination", "sub": "Preferred with renal impairment" }
    ],
    "brandTable": [
      { "name": "Unipen", "form": "IV/IM Injection, Oral Capsules", "strengths": "500 mg, 1 g, 2 g vials; 250 mg caps", "manufacturer": "Wyeth (Pfizer)", "region": "USA" },
      { "name": "Nafcil", "form": "IV Injection", "strengths": "1 g, 2 g, 10 g vials", "manufacturer": "Sandoz (Novartis)", "region": "USA" },
      { "name": "Nallpen", "form": "IV Injection", "strengths": "1 g, 2 g vials; 10 g bulk", "manufacturer": "Baxter/APP", "region": "USA" },
      { "name": "Nafcillin", "form": "IV/IM Injection", "strengths": "1 g, 2 g vials", "manufacturer": "Various (Generic)", "region": "USA, Europe" },
      { "name": "Naflex", "form": "IV Injection", "strengths": "500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Decreased warfarin efficacy (CYP induction).", "severity": "Major" },
      { "drugClass": "Cyclosporine", "effect": "Reduced cyclosporine levels.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Moderate" },
      { "drugClass": "Aminoglycosides", "effect": "Synergistic bactericidal effect.", "severity": "Beneficial" },
      { "drugClass": "Probenecid", "effect": "Increased nafcillin levels.", "severity": "Minor" },
      { "drugClass": "Calcium Channel Blockers", "effect": "Reduced CCB levels (CYP3A4).", "severity": "Minor" }
    ],
    "warning": "Causes phlebitis - rotate IV sites or use central line. Dose-related neutropenia after 3+ weeks. Interstitial nephritis reported. High sodium content (2.9 mEq/g). Watch for false-positive urine protein tests.",
    "subCategoryId": "penicillins"
  },
  {
    "id": "cephalexin",
    "categoryId": "antibiotics",
    "genericName": "Cephalexin",
    "brandNames": "Keflex, Ceporex, Keftab, Cephalex, Laxin, Sporidex",
    "description": "First-generation cephalosporin. Most widely prescribed oral cephalosporin. Excellent Gram-positive coverage with some Gram-negative activity. First-line for uncomplicated skin infections.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Skin and Soft Tissue Infections",
    "dosageForm": "Oral Capsules/Suspension",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-500 mg QID or 500 mg BID", "sub": "Max: 4 g/day" },
      { "label": "ONSET / HALF-LIFE", "value": "1 hour peak", "sub": "~0.5-1 hour half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Cellulitis, impetigo, wound infections, UTI, otitis media, pharyngitis, streptococcal infections, osteomyelitis", "sub": null },
      { "label": "PEDIATRIC", "value": "25-50 mg/kg/day divided BID-QID", "sub": "Weight-based for children" }
    ],
    "brandTable": [
      { "name": "Keflex", "form": "Capsules, Tablets, Suspension", "strengths": "250 mg, 500 mg, 750 mg caps; 125 mg/5 mL, 250 mg/5 mL susp.", "manufacturer": "Eli Lilly / Shionogi", "region": "USA, UK, Europe, Global" },
      { "name": "Ceporex", "form": "Capsules, Tablets, Syrup, Injection", "strengths": "250 mg, 500 mg; 125 mg/5 mL, 250 mg/5 mL; 500 mg IM/IV", "manufacturer": "GSK", "region": "UK, Europe, Asia, Pakistan" },
      { "name": "Sporidex", "form": "Capsules, Suspension, Drops", "strengths": "250 mg, 500 mg caps; 125 mg/5 mL, 250 mg/5 mL; 100 mg/mL drops", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Laxin", "form": "Capsules, Suspension", "strengths": "250 mg, 500 mg; 125 mg/5 mL, 250 mg/5 mL susp.", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Cephalex", "form": "Capsules, Syrup, Drops", "strengths": "250 mg, 500 mg; 125 mg/5 mL, 250 mg/5 mL; 100 mg/mL drops", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Keflex", "form": "Capsule", "strengths": "250 mg, 500 mg", "manufacturer": "AGP Limited", "region": "Pakistan" },
      { "name": "Ceporex", "form": "Capsule", "strengths": "250 mg, 500 mg", "manufacturer": "GlaxoSmithKline Pakistan", "region": "Pakistan" },
      { "name": "Cerox", "form": "Capsule, Oral Suspension", "strengths": "250 mg, 500 mg; susp 125 mg/5 mL, 250 mg/5 mL", "manufacturer": "S. & S. Fazal Ellahie", "region": "Pakistan" },
      { "name": "B-lex", "form": "Capsule", "strengths": "500 mg", "manufacturer": "Rasco Pharma", "region": "Pakistan" },
      { "name": "Bactex", "form": "Capsule, Syrup", "strengths": "250 mg, 500 mg; syp 125 mg/5 mL", "manufacturer": "Roryan Pharma", "region": "Pakistan" },
      { "name": "Sporidex (Pak)", "form": "Capsule, Oral Suspension", "strengths": "250 mg, 500 mg; susp 125 mg/5 mL, 250 mg/5 mL", "manufacturer": "Various", "region": "Pakistan" },
      { "name": "Lexcef", "form": "Capsule", "strengths": "250 mg, 500 mg", "manufacturer": "Various", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy (rare).", "severity": "Minor" },
      { "drugClass": "Probenecid", "effect": "Increased cephalexin levels.", "severity": "Minor" },
      { "drugClass": "Metformin", "effect": "Increased metformin levels.", "severity": "Minor" },
      { "drugClass": "Aminoglycosides", "effect": "Synergistic effect but increased nephrotoxicity.", "severity": "Moderate" }
    ],
    "warning": "Cross-sensitivity with other beta-lactams (10% penicillin allergy cross-reactivity). May cause false-positive urine glucose. Take with food to reduce GI upset. C diff colitis risk. Monitor renal function with prolonged therapy.",
    "subCategoryId": "cephalosporins-1"
  },
  {
    "id": "cefadroxil",
    "categoryId": "antibiotics",
    "genericName": "Cefadroxil",
    "brandNames": "Duricef, Ultracef, Cefadrox, Cefrox, Moxacef, Droxil",
    "description": "First-generation cephalosporin with longer half-life allowing once or twice daily dosing. Used for similar indications as cephalexin. Better patient compliance due to less frequent dosing.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Skin and UTIs",
    "dosageForm": "Oral Capsules/Suspension",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "500 mg - 1 g BID or 1-2 g once daily", "sub": "Max: 2 g/day" },
      { "label": "ONSET / HALF-LIFE", "value": "1.5 hours peak", "sub": "~1.5 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Cellulitis, UTI, pharyngitis, tonsillitis, impetigo, streptococcal infections", "sub": null },
      { "label": "PEDIATRIC", "value": "30 mg/kg/day divided BID", "sub": "Weight-based for children" }
    ],
    "brandTable": [
      { "name": "Duricef", "form": "Capsules, Tablets, Suspension", "strengths": "500 mg, 1 g caps; 250 mg/5 mL, 500 mg/5 mL susp.", "manufacturer": "BMS (Apothecon)", "region": "USA, Europe" },
      { "name": "Ultracef", "form": "Capsules", "strengths": "500 mg", "manufacturer": "Bristol-Myers", "region": "USA" },
      { "name": "Cefadrox", "form": "Capsules, Suspension", "strengths": "500 mg caps; 125 mg/5 mL, 250 mg/5 mL susp.", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Moxacef", "form": "Capsules, Suspension", "strengths": "500 mg; 125 mg/5 mL", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Droxil", "form": "Capsules, Suspension", "strengths": "500 mg caps; 125 mg/5 mL, 250 mg/5 mL susp.", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Increased cefadroxil levels.", "severity": "Minor" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Aminoglycosides", "effect": "Additive nephrotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Loop Diuretics", "effect": "Possible increased nephrotoxicity.", "severity": "Minor" }
    ],
    "warning": "Same precautions as cephalexin. Cross-reactivity with penicillin allergy. Extended half-life allows once-daily dosing for uncomplicated infections. Maintain adequate hydration. C diff colitis possible.",
    "subCategoryId": "cephalosporins-1"
  },
  {
    "id": "cefazolin",
    "categoryId": "antibiotics",
    "genericName": "Cefazolin",
    "brandNames": "Ancef, Kefzol, Cefazolin, Zinol, Cefacidal, Cefamezin",
    "description": "First-generation cephalosporin for IV/IM use. Preferred agent for surgical prophylaxis. Excellent Gram-positive coverage. Drug of choice for perioperative prophylaxis in clean-contaminated surgeries.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Surgical Prophylaxis",
    "dosageForm": "IV/IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 g IV q8h", "sub": "Surgical prophylaxis: 2 g IV 30-60 min pre-op" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~1.8 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Surgical prophylaxis, septic arthritis, osteomyelitis, endocarditis, pneumonia, cellulitis (severe), UTIs", "sub": null },
      { "label": "OBESE PATIENTS", "value": "3 g IV for surgical prophylaxis", "sub": "If weight >120 kg" }
    ],
    "brandTable": [
      { "name": "Ancef", "form": "IV/IM Injection, Premix", "strengths": "500 mg, 1 g, 2 g, 10 g, 20 g vials; 1 g/50 mL, 2 g/100 mL premix", "manufacturer": "GSK", "region": "USA, Global" },
      { "name": "Kefzol", "form": "IV/IM Injection", "strengths": "250 mg, 500 mg, 1 g vials", "manufacturer": "Eli Lilly", "region": "USA, Europe" },
      { "name": "Cefacidal", "form": "IV/IM Injection", "strengths": "250 mg, 500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Zinol", "form": "IV/IM Injection", "strengths": "500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Cefamezin", "form": "IV/IM Injection", "strengths": "500 mg, 1 g vials", "manufacturer": "Fujisawa/Astellas", "region": "Japan, Asia" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Increased cefazolin levels.", "severity": "Minor" },
      { "drugClass": "Aminoglycosides", "effect": "Increased nephrotoxicity risk.", "severity": "Major" },
      { "drugClass": "Loop Diuretics", "effect": "Increased nephrotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "No disulfiram reaction (unlike cefoperazone).", "severity": "Minor" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" }
    ],
    "warning": "Most commonly used antibiotic for surgical prophylaxis. Re-dose intraoperatively if procedure >4 hours or major blood loss. Monitor renal function in prolonged therapy. Cross-sensitivity with penicillins (~10%).",
    "subCategoryId": "cephalosporins-1"
  },
  {
    "id": "cefuroxime",
    "categoryId": "antibiotics",
    "genericName": "Cefuroxime",
    "brandNames": "Zinacef (IV), Ceftin (Oral), Zinnat, Cefurox, Cefoxin, Uxim",
    "description": "Second-generation cephalosporin with improved Gram-negative activity and stability against some beta-lactamases. Available in both oral (cefuroxime axetil) and IV formulations. Widely used for respiratory infections.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Respiratory Infections",
    "dosageForm": "Oral Tablets/Suspension + IV Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-500 mg BID (oral); 750 mg-1.5 g IV q8h", "sub": "Max: 6 g/day IV" },
      { "label": "ONSET / HALF-LIFE", "value": "2-3 hours peak (oral)", "sub": "~1.2 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "CAP, acute bronchitis, sinusitis, otitis media, pharyngitis, UTI, cellulitis, Lyme disease, septicemia, surgical prophylaxis", "sub": null },
      { "label": "PEDIATRIC (ORAL)", "value": "30 mg/kg/day divided BID", "sub": "Suspension for children" }
    ],
    "brandTable": [
      { "name": "Ceftin", "form": "Tablets, Suspension", "strengths": "125 mg, 250 mg, 500 mg tabs; 125 mg/5 mL, 250 mg/5 mL susp.", "manufacturer": "GSK", "region": "USA, Global" },
      { "name": "Zinacef", "form": "IV/IM Injection", "strengths": "750 mg, 1.5 g, 7.5 g vials", "manufacturer": "GSK", "region": "USA, UK, Europe, Global" },
      { "name": "Zinnat", "form": "Tablets, Suspension", "strengths": "125 mg, 250 mg, 500 mg; 125 mg/5 mL susp.", "manufacturer": "GSK", "region": "UK, Europe, Asia, Pakistan" },
      { "name": "Cefurox", "form": "Tablets, Injection", "strengths": "250 mg, 500 mg; 750 mg, 1.5 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Uxim", "form": "Tablets, Injection", "strengths": "250 mg, 500 mg; 750 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Increased cefuroxime levels.", "severity": "Minor" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Loop Diuretics", "effect": "Increased nephrotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Gastric Acid Reducers", "effect": "Reduced oral absorption (increased gastric pH).", "severity": "Minor" }
    ],
    "warning": "Oral formulation should be taken with food for optimal absorption. IV can cause phlebitis. Cross-sensitivity with penicillins. Monitor renal function. C diff colitis possible. Oral suspension has bitter aftertaste.",
    "subCategoryId": "cephalosporins-2"
  },
  {
    "id": "cefoxitin",
    "categoryId": "antibiotics",
    "genericName": "Cefoxitin",
    "brandNames": "Mefoxin, Cefoxitin, Foxitin, Cefox, Cenomycin, Mefox",
    "description": "Second-generation cephamycin antibiotic with potent anaerobic coverage (including Bacteroides fragilis). Used for intra-abdominal, pelvic, and gynecologic infections. Unique among cephalosporins for anaerobic activity.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Intra-Abdominal / Pelvic Infections",
    "dosageForm": "IV Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 g IV q6-8h", "sub": "Max: 12 g/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~0.8 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Intra-abdominal infections, pelvic inflammatory disease, endometritis, surgical prophylaxis (colorectal), diabetic foot infections", "sub": null },
      { "label": "PEDIATRIC", "value": "80-160 mg/kg/day divided q6h", "sub": "Max: 12 g/day" }
    ],
    "brandTable": [
      { "name": "Mefoxin", "form": "IV Injection, Premix", "strengths": "1 g, 2 g, 10 g vials; 1 g/50 mL, 2 g/50 mL premix", "manufacturer": "Merck", "region": "USA, UK, Europe, Global" },
      { "name": "Foxitin", "form": "IV Injection", "strengths": "1 g, 2 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Cefox", "form": "IV Injection", "strengths": "1 g, 2 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Cenomycin", "form": "IV Injection", "strengths": "1 g, 2 g vials", "manufacturer": "Merck (MSD)", "region": "Europe, Asia" },
      { "name": "Mefox", "form": "IV Injection", "strengths": "1 g, 2 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Aminoglycosides", "effect": "Increased nephrotoxicity risk.", "severity": "Major" },
      { "drugClass": "Probenecid", "effect": "Increased cefoxitin levels.", "severity": "Minor" },
      { "drugClass": "Loop Diuretics", "effect": "Increased nephrotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Alcohol", "effect": "No disulfiram reaction.", "severity": "Minor" }
    ],
    "warning": "Can cause false-positive urine glucose. Monitor renal function. Cross-sensitivity with penicillins. May cause false elevation of serum creatinine (Jaffe method). Active against Bacteroides fragilis.",
    "subCategoryId": "cephalosporins-2"
  },
  {
    "id": "cefaclor",
    "categoryId": "antibiotics",
    "genericName": "Cefaclor",
    "brandNames": "Ceclor, Raniclor, Distaclor, Cefaclor, Keflor, Ceflor",
    "description": "Second-generation cephalosporin with good activity against respiratory pathogens. Stable in presence of some beta-lactamases. Commonly used for otitis media in children. Note: serum sickness-like reactions reported.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Ottis Media and Respiratory Infections",
    "dosageForm": "Oral Capsules/Suspension/ER Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-500 mg TID", "sub": "ER: 500 mg BID or 750 mg ER once daily" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min peak", "sub": "~0.6-0.9 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Otitis media, sinusitis, bronchitis, CAP, pharyngitis, tonsillitis, UTI, skin infections", "sub": null },
      { "label": "PEDIATRIC", "value": "20-40 mg/kg/day divided TID", "sub": "Suspension 125 mg/5 mL, 250 mg/5 mL" }
    ],
    "brandTable": [
      { "name": "Ceclor", "form": "Capsules, Suspension, ER Tablets", "strengths": "250 mg, 500 mg caps; 125 mg/5 mL, 187 mg/5 mL, 250 mg/5 mL, 375 mg/5 mL susp.", "manufacturer": "Eli Lilly", "region": "USA, UK, Europe, Global" },
      { "name": "Raniclor", "form": "Chewable Tablets", "strengths": "125 mg, 250 mg, 375 mg", "manufacturer": "Ranbaxy", "region": "USA" },
      { "name": "Distaclor", "form": "Capsules, Suspension", "strengths": "250 mg, 500 mg; 125 mg/5 mL, 250 mg/5 mL", "manufacturer": "Dista (Lilly)", "region": "UK, Europe" },
      { "name": "Cefaclor", "form": "Capsules, Syrup, Drops", "strengths": "250 mg, 500 mg caps; 125 mg/5 mL, 250 mg/5 mL syr; 100 mg/mL drops", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Keflor", "form": "Capsules, Suspension", "strengths": "250 mg, 500 mg; 125 mg/5 mL, 250 mg/5 mL", "manufacturer": "Various (Generic)", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Increased cefaclor levels.", "severity": "Minor" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Aminoglycosides", "effect": "Additive nephrotoxicity.", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" },
      { "drugClass": "Antacids", "effect": "Reduced absorption. Separate doses by 2 hours.", "severity": "Minor" }
    ],
    "warning": "Serum sickness-like reactions reported (more common in children). Cross-sensitivity with penicillins. May cause false-positive Coombs test. Take with food to reduce GI upset. Monitor renal function in prolonged use.",
    "subCategoryId": "cephalosporins-2"
  },
  {
    "id": "cefprozil",
    "categoryId": "antibiotics",
    "genericName": "Cefprozil",
    "brandNames": "Cefzil, Procef, Cefproz, Cefzil, Cefril, Prozef",
    "description": "Second-generation cephalosporin with balanced Gram-positive and Gram-negative activity. Once or twice daily dosing. Effective for respiratory infections, skin infections, and otitis media.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Respiratory Infections",
    "dosageForm": "Oral Tablets/Suspension",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-500 mg BID or 500 mg once daily", "sub": "Max: 1 g/day" },
      { "label": "ONSET / HALF-LIFE", "value": "1.5 hours peak", "sub": "~1.3 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Pharyngitis, otitis media, sinusitis, CAP, bronchitis, skin infections, UTI", "sub": null },
      { "label": "PEDIATRIC", "value": "15-30 mg/kg/day divided BID", "sub": "Otitis media: 30 mg/kg/day BID" }
    ],
    "brandTable": [
      { "name": "Cefzil", "form": "Tablets, Suspension", "strengths": "125 mg, 250 mg, 500 mg tabs; 125 mg/5 mL, 250 mg/5 mL susp.", "manufacturer": "BMS (Apothecon)", "region": "USA, Europe" },
      { "name": "Procef", "form": "Tablets, Suspension", "strengths": "250 mg, 500 mg; 125 mg/5 mL, 250 mg/5 mL", "manufacturer": "Bristol-Myers Squibb", "region": "USA" },
      { "name": "Cefproz", "form": "Tablets, Suspension", "strengths": "250 mg, 500 mg; 125 mg/5 mL, 250 mg/5 mL susp.", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Cefril", "form": "Tablets", "strengths": "250 mg, 500 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Prozef", "form": "Tablets, Suspension", "strengths": "250 mg, 500 mg; 125 mg/5 mL", "manufacturer": "Various (Generic)", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Increased cefprozil levels.", "severity": "Minor" },
      { "drugClass": "Aminoglycosides", "effect": "Additive nephrotoxicity.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Loop Diuretics", "effect": "Possible increased nephrotoxicity.", "severity": "Minor" },
      { "drugClass": "Metformin", "effect": "Potential increased metformin levels.", "severity": "Minor" }
    ],
    "warning": "Cross-sensitivity with penicillins (~10%). May cause false-positive glucose in urine tests. C diff colitis possible. Lower incidence of serum sickness compared to cefaclor. Monitor renal function.",
    "subCategoryId": "cephalosporins-2"
  },
  {
    "id": "ceftriaxone",
    "categoryId": "antibiotics",
    "genericName": "Ceftriaxone",
    "brandNames": "Rocephin, Epicephin, Triaxone, Cefaxone, Ceftri, Oframax",
    "description": "Third-generation cephalosporin with extended half-life (once-daily dosing). Broad-spectrum including Gram-negative organisms. Drug of choice for gonorrhea, meningitis, and severe community-acquired infections. Most commonly used IV cephalosporin worldwide.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Severe Bacterial Infections",
    "dosageForm": "IV/IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 g IV/IM once daily", "sub": "Severe infections: 2 g IV q12h" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~6-9 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "CAP, meningitis, gonorrhea, septicemia, Lyme disease, intra-abdominal infections, pyelonephritis, osteomyelitis, febrile neutropenia", "sub": null },
      { "label": "PEDIATRIC", "value": "50-100 mg/kg/day q12-24h", "sub": "Meningitis: 100 mg/kg/day in 1-2 doses" }
    ],
    "brandTable": [
      { "name": "Rocephin", "form": "IV/IM Injection, Premix", "strengths": "250 mg, 500 mg, 1 g, 2 g, 10 g vials; 1 g/50 mL, 2 g/50 mL premix", "manufacturer": "Hoffmann-La Roche", "region": "USA, UK, Europe, Global" },
      { "name": "Epicephin", "form": "IV/IM Injection", "strengths": "250 mg, 500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Ceftri", "form": "IV/IM Injection", "strengths": "250 mg, 500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Triaxone", "form": "IV/IM Injection", "strengths": "250 mg, 500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Oframax", "form": "IV/IM Injection", "strengths": "250 mg, 500 mg, 1 g", "manufacturer": "Sanofi", "region": "Europe, Middle East, Asia" },
      { "name": "Rocephin", "form": "IV/IM Injection", "strengths": "250 mg, 500 mg, 1 g", "manufacturer": "Roche (imported/distributed locally)", "region": "Pakistan" },
      { "name": "Hantox", "form": "IV Injection", "strengths": "1 g", "manufacturer": "Hansel Pharmaceuticals (Pvt.) Ltd.", "region": "Pakistan" },
      { "name": "Avantrax", "form": "Injection", "strengths": "500 mg, 1 g", "manufacturer": "Sanofi Pakistan", "region": "Pakistan" },
      { "name": "Zefiral", "form": "Injection", "strengths": "1 g", "manufacturer": "Bosch Pharmaceuticals (Pvt.) Ltd.", "region": "Pakistan" },
      { "name": "Oxidit", "form": "Injection", "strengths": "500 mg, 1 g", "manufacturer": "SAMI Pharmaceuticals", "region": "Pakistan" },
      { "name": "Getofin", "form": "Injection", "strengths": "250 mg, 500 mg, 1 g", "manufacturer": "Getz Pharma", "region": "Pakistan" },
      { "name": "Trixone", "form": "Injection", "strengths": "500 mg, 1 g", "manufacturer": "Various", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Major" },
      { "drugClass": "Calcium-Containing IV Solutions", "effect": "Risk of fatal Ceftriaxone-calcium precipitation (neonates).", "severity": "Major" },
      { "drugClass": "Loop Diuretics", "effect": "Increased nephrotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Increased ceftriaxone levels.", "severity": "Minor" },
      { "drugClass": "Alcohol", "effect": "Rare disulfiram-like reaction.", "severity": "Minor" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" }
    ],
    "warning": "Do not use with calcium-containing IV fluids in neonates (fatal precipitation). Biliary sludge/pseudolithiasis with prolonged use. Can cause false-positive Coombs test. Once-daily dosing advantageous for OPAT. IM injection very painful - reconstitute with lidocaine.",
    "subCategoryId": "cephalosporins-3"
  },
  {
    "id": "cefixime",
    "categoryId": "antibiotics",
    "genericName": "Cefixime",
    "brandNames": "Suprax, Cefix, Cefspan, Fixcef, Cefim, Zifi",
    "description": "Third-generation oral cephalosporin with broad Gram-negative activity. Once or twice daily dosing. Used for community-acquired infections. First-line oral treatment for uncomplicated gonorrhea and typhoid fever.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Typhoid and Gonorrhea",
    "dosageForm": "Oral Tablets/Suspension/Capsules",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "200 mg BID or 400 mg once daily", "sub": "Uncomplicated gonorrhea: 400 mg single dose" },
      { "label": "ONSET / HALF-LIFE", "value": "2-6 hours peak", "sub": "~3-4 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "CAP, otitis media, pharyngitis, tonsillitis, uncomplicated gonorrhea, typhoid fever, shigellosis, UTI", "sub": null },
      { "label": "PEDIATRIC", "value": "8 mg/kg/day once or BID", "sub": "Suspension 100 mg/5 mL" }
    ],
    "brandTable": [
      { "name": "Suprax", "form": "Tablets, Chewable, Suspension", "strengths": "200 mg, 400 mg tabs; 100 mg/5 mL susp.", "manufacturer": "Lupin / Sanofi", "region": "USA, Europe, Global" },
      { "name": "Cefspan", "form": "Capsules, Suspension, Granules", "strengths": "50 mg, 100 mg, 200 mg caps; 50 mg/5 mL, 100 mg/5 mL susp.", "manufacturer": "Fujisawa (Astellas)", "region": "Japan, Asia" },
      { "name": "Fixcef", "form": "Capsules, Suspension", "strengths": "200 mg, 400 mg caps; 50 mg/5 mL, 100 mg/5 mL", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Cefim", "form": "Capsules, Syrup, Drops", "strengths": "200 mg, 400 mg caps; 50 mg/5 mL syr; 100 mg/mL drops", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Zifi", "form": "Tablets, Suspension, Drops", "strengths": "200 mg, 400 mg; 50 mg/5 mL susp; 100 mg/mL drops", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Suprax", "form": "Tablet, Capsule, Oral Suspension", "strengths": "100 mg, 200 mg, 400 mg; susp 100 mg/5 mL", "manufacturer": "Various", "region": "Pakistan" },
      { "name": "Fixcef", "form": "Granules for Suspension", "strengths": "100 mg/5 mL", "manufacturer": "Bosch Pharmaceuticals (Pvt) Ltd.", "region": "Pakistan" },
      { "name": "Geoxime", "form": "Capsule/Tablet", "strengths": "200 mg, 400 mg", "manufacturer": "Opal Laboratories (Pvt) Ltd.", "region": "Pakistan" },
      { "name": "Cefask", "form": "Capsule", "strengths": "400 mg", "manufacturer": "Citi Pharmaceuticals", "region": "Pakistan" },
      { "name": "Secure", "form": "Capsule", "strengths": "400 mg", "manufacturer": "Wilshire Pharma", "region": "Pakistan" },
      { "name": "Cinklare", "form": "Capsule, Oral Suspension", "strengths": "400 mg; susp 100 mg/5 mL", "manufacturer": "AGP Limited", "region": "Pakistan" },
      { "name": "Ruwin", "form": "Capsule, Oral Suspension", "strengths": "400 mg; susp 100 mg/5 mL", "manufacturer": "Shaigan Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Increased cefixime levels.", "severity": "Minor" },
      { "drugClass": "Carbamazepine", "effect": "Possible increased carbamazepine levels.", "severity": "Minor" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Antacids", "effect": "Reduced absorption. Separate doses by 2 hours.", "severity": "Minor" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" }
    ],
    "warning": "Cross-sensitivity with penicillins. May cause false-positive urine glucose. Avoid in penicillin anaphylaxis. Monitor renal function. C diff colitis possible. Less Gram-positive coverage than first-generation cephalosporins.",
    "subCategoryId": "cephalosporins-3"
  },
  {
    "id": "cefpodoxime",
    "categoryId": "antibiotics",
    "genericName": "Cefpodoxime",
    "brandNames": "Vantin, Cefpodox, Cepodem, Podox, Banan, Cefoxime",
    "description": "Third-generation oral cephalosporin with good respiratory pathogen coverage. Prodrug form (cefpodoxime proxetil). Used for CAP, acute otitis media, sinusitis, and uncomplicated gonorrhea.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Community-Acquired Pneumonia",
    "dosageForm": "Oral Tablets/Suspension",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "100-200 mg BID", "sub": "Max: 400 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "2-3 hours peak", "sub": "~2-3 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "CAP, acute otitis media, sinusitis, pharyngitis, tonsillitis, UTI, gonorrhea, skin infections", "sub": null },
      { "label": "PEDIATRIC", "value": "10 mg/kg/day divided BID", "sub": "Max: 200 mg/dose" }
    ],
    "brandTable": [
      { "name": "Vantin", "form": "Tablets, Suspension", "strengths": "100 mg, 200 mg tabs; 50 mg/5 mL, 100 mg/5 mL susp.", "manufacturer": "Pharmacia (Pfizer)", "region": "USA, Europe" },
      { "name": "Cepodem", "form": "Tablets, Dry Syrup", "strengths": "50 mg, 100 mg, 200 mg tabs; 50 mg/5 mL DS", "manufacturer": "Ranbaxy/Sun Pharma", "region": "India, Asia" },
      { "name": "Cefpodox", "form": "Tablets, Suspension", "strengths": "100 mg, 200 mg; 50 mg/5 mL, 100 mg/5 mL susp.", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Banan", "form": "Tablets, Suspension", "strengths": "100 mg, 200 mg tabs; 50 mg/5 mL, 100 mg/5 mL susp.", "manufacturer": "Sankyo", "region": "Japan, Asia" },
      { "name": "Cefoxime", "form": "Tablets, Suspension", "strengths": "100 mg, 200 mg; 50 mg/5 mL", "manufacturer": "Various (Generic)", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Increased cefpodoxime levels.", "severity": "Minor" },
      { "drugClass": "Antacids/H2 Blockers", "effect": "Reduced absorption (increased pH).", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Aminoglycosides", "effect": "Additive nephrotoxicity.", "severity": "Moderate" },
      { "drugClass": "Loop Diuretics", "effect": "Possible increased nephrotoxicity.", "severity": "Minor" }
    ],
    "warning": "Take with food to enhance absorption. Prodrug activated by intestinal esterases. Cross-sensitivity with penicillins. May cause false-positive Coombs test. C diff colitis possible. Monitor renal function.",
    "subCategoryId": "cephalosporins-3"
  },
  {
    "id": "ceftazidime",
    "categoryId": "antibiotics",
    "genericName": "Ceftazidime",
    "brandNames": "Fortaz, Tazicef, Ceptaz, Ceftaz, Kefadim, Starcef",
    "description": "Third-generation cephalosporin with potent anti-Pseudomonal activity. Workhorse for hospital-acquired infections caused by Pseudomonas aeruginosa. Often used in febrile neutropenia and healthcare-associated pneumonia.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Pseudomonal Infections",
    "dosageForm": "IV/IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 g IV q8h", "sub": "Max: 6 g/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~1.5-2 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "HAP/VAP, febrile neutropenia, Pseudomonas infections, meningitis, complicated UTI, burn infections, cystic fibrosis exacerbations", "sub": null },
      { "label": "PEDIATRIC", "value": "100-150 mg/kg/day divided q8h", "sub": "Cystic fibrosis: up to 200 mg/kg/day" }
    ],
    "brandTable": [
      { "name": "Fortaz", "form": "IV/IM Injection, Premix", "strengths": "500 mg, 1 g, 2 g, 6 g vials; 1 g/50 mL, 2 g/50 mL premix", "manufacturer": "GSK", "region": "USA, UK, Europe, Global" },
      { "name": "Tazicef", "form": "IV/IM Injection", "strengths": "500 mg, 1 g, 2 g vials", "manufacturer": "Hospira (Pfizer)", "region": "USA" },
      { "name": "Kefadim", "form": "IV/IM Injection", "strengths": "250 mg, 500 mg, 1 g, 2 g vials", "manufacturer": "Eli Lilly", "region": "Europe, Asia, Pakistan" },
      { "name": "Ceftaz", "form": "IV/IM Injection", "strengths": "250 mg, 500 mg, 1 g, 2 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Starcef", "form": "IV/IM Injection", "strengths": "250 mg, 500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Aminoglycosides", "effect": "Additive nephrotoxicity and ototoxicity. Synergistic anti-Pseudomonal activity.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Loop Diuretics", "effect": "Increased nephrotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Chloramphenicol", "effect": "Potential antagonism in vitro.", "severity": "Minor" },
      { "drugClass": "Probenecid", "effect": "Increased ceftazidime levels.", "severity": "Minor" },
      { "drugClass": "Alcohol", "effect": "No disulfiram-like reaction.", "severity": "Minor" }
    ],
    "warning": "Dose adjustment required for renal impairment (CrCl <50). Can cause false-positive Coombs test. IM injection is painful. Cross-sensitivity with penicillins. Not stable in sodium bicarbonate solutions. C diff colitis risk.",
    "subCategoryId": "cephalosporins-3"
  },
  {
    "id": "cefdinir",
    "categoryId": "antibiotics",
    "genericName": "Cefdinir",
    "brandNames": "Omnicef, Cefdiel, Cefdin, Cefnil, Diner, Cednir",
    "description": "Third-generation oral cephalosporin with extended half-life. Broad-spectrum activity against Gram-positive and Gram-negative organisms. Widely prescribed oral cephalosporin in the US due to convenient once or twice daily dosing.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "CAP and Sinusitis",
    "dosageForm": "Oral Capsules/Suspension",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "300 mg BID or 600 mg once daily", "sub": "Max: 600 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "2-4 hours peak", "sub": "~1.7 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "CAP, acute sinusitis, acute otitis media, pharyngitis, tonsillitis, skin infections, bronchitis", "sub": null },
      { "label": "PEDIATRIC", "value": "14 mg/kg/day single dose or divided BID", "sub": "Suspension 125 mg/5 mL, 250 mg/5 mL" }
    ],
    "brandTable": [
      { "name": "Omnicef", "form": "Capsules, Suspension", "strengths": "300 mg caps; 125 mg/5 mL, 250 mg/5 mL susp.", "manufacturer": "AbbVie (Abbott)", "region": "USA, Global" },
      { "name": "Cefdiel", "form": "Capsules, Suspension", "strengths": "300 mg caps; 125 mg/5 mL, 250 mg/5 mL susp.", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Cefdin", "form": "Capsules, Suspension", "strengths": "300 mg caps; 125 mg/5 mL susp.", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Cefnil", "form": "Capsules, Dry Syrup", "strengths": "300 mg caps; 125 mg/5 mL, 250 mg/5 mL DS", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Cednir", "form": "Capsules, Suspension", "strengths": "300 mg; 125 mg/5 mL", "manufacturer": "Various (Generic)", "region": "India, Asia" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Increased cefdinir levels.", "severity": "Minor" },
      { "drugClass": "Iron Supplements", "effect": "Reduced cefdinir absorption. Separate by 2 hours.", "severity": "Moderate" },
      { "drugClass": "Antacids (Mg/Al)", "effect": "Reduced absorption. Separate by 2 hours.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" }
    ],
    "warning": "May cause false-positive Coombs test. Reddish stools with iron supplements (non-absorbed complex). Cross-sensitivity with penicillins. C diff colitis possible. Suspension contains sucrose - caution in diabetes.",
    "subCategoryId": "cephalosporins-3"
  },
  {
    "id": "cefoperazone",
    "categoryId": "antibiotics",
    "genericName": "Cefoperazone",
    "brandNames": "Cefobid, Cefoperazone, Cefobine, Sulperazon (w/ sulbactam), Perazone, Cefozone",
    "description": "Third-generation cephalosporin with anti-Pseudomonal activity. Exclusively biliary excretion (no renal adjustment needed). Often combined with sulbactam to extend spectrum against beta-lactamase producers.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Biliary Tract Infections",
    "dosageForm": "IV/IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 g IV q8-12h", "sub": "Max: 12 g/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~2 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Biliary tract infections, peritonitis, intra-abdominal infections, pneumonia, septicemia, febrile neutropenia, UTIs", "sub": null },
      { "label": "COMBINATION", "value": "Cefoperazone-Sulbactam (1:1)", "sub": "Extended beta-lactamase coverage" }
    ],
    "brandTable": [
      { "name": "Cefobid", "form": "IV/IM Injection", "strengths": "1 g, 2 g, 10 g vials", "manufacturer": "Pfizer (Roerig)", "region": "USA, UK, Europe" },
      { "name": "Sulperazon", "form": "IV/IM Injection (w/ Sulbactam)", "strengths": "1 g/0.5 g, 1 g/1 g vials", "manufacturer": "Pfizer", "region": "Europe, Asia, Pakistan, Global" },
      { "name": "Perazone", "form": "IV/IM Injection", "strengths": "500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Cefozone", "form": "IV/IM Injection", "strengths": "1 g vials; also with sulbactam", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Cefoperazone-Sulbactam", "form": "IV/IM Injection (Combination)", "strengths": "1 g/0.5 g, 1 g/1 g vials", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Alcohol", "effect": "SEVERE disulfiram-like reaction (due to NMTT side chain).", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk (also NMTT-related hypoprothrombinemia).", "severity": "Major" },
      { "drugClass": "Aminoglycosides", "effect": "Additive nephrotoxicity.", "severity": "Major" },
      { "drugClass": "Loop Diuretics", "effect": "Increased nephrotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Vitamin K", "effect": "May reverse cefoperazone-induced hypoprothrombinemia.", "severity": "Beneficial" },
      { "drugClass": "Probenecid", "effect": "Increased cefoperazone levels.", "severity": "Minor" }
    ],
    "warning": "Disulfiram-like reaction with alcohol - avoid alcohol during therapy and 5 days after. NMTT side chain causes hypoprothrombinemia - supplement Vitamin K. No renal adjustment needed (biliary excretion). Monitor bleeding time. Cross-sensitivity with penicillins.",
    "subCategoryId": "cephalosporins-3"
  },
  {
    "id": "cefotaxime",
    "categoryId": "antibiotics",
    "genericName": "Cefotaxime",
    "brandNames": "Claforan, Cefotax, Taxim, Cefajet, Cefoxim, Cefotan",
    "description": "Third-generation cephalosporin with broad spectrum including Gram-negative and Gram-positive organisms. Penetrates CSF well. Used for meningitis, septicemia, and hospital-acquired infections.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Meningitis and Sepsis",
    "dosageForm": "IV/IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 g IV q6-8h", "sub": "Max: 12 g/day (meningitis)" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~0.5-1 hour half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Meningitis, septicemia, CAP, HAP, intra-abdominal infections, GU infections, skin infections, surgical prophylaxis", "sub": null },
      { "label": "NEONATAL", "value": "50 mg/kg q6-12h", "sub": "Age and weight-dependent dosing" }
    ],
    "brandTable": [
      { "name": "Claforan", "form": "IV/IM Injection", "strengths": "500 mg, 1 g, 2 g vials; 10 g pharmacy bulk", "manufacturer": "Sanofi-Aventis", "region": "USA, UK, Europe, Global" },
      { "name": "Taxim", "form": "IV/IM Injection", "strengths": "250 mg, 500 mg, 1 g, 2 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Cefotax", "form": "IV/IM Injection", "strengths": "500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Cefajet", "form": "IV/IM Injection", "strengths": "250 mg, 500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan" },
      { "name": "Cefoxim", "form": "IV/IM Injection", "strengths": "500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "India, Asia" }
    ],
    "interactions": [
      { "drugClass": "Aminoglycosides", "effect": "Additive nephrotoxicity; synergistic bacterial killing.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Loop Diuretics", "effect": "Increased nephrotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Increased cefotaxime levels (and active metabolite desacetylcefotaxime).", "severity": "Minor" },
      { "drugClass": "Alcohol", "effect": "No disulfiram-like reaction (no NMTT side chain).", "severity": "Minor" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" }
    ],
    "warning": "Active metabolite (desacetylcefotaxime) contributes to antibacterial activity, especially for Gram-positive. Good CSF penetration. IM injection painful. Cross-sensitivity with penicillins. C diff colitis possible. Monitor renal function.",
    "subCategoryId": "cephalosporins-3"
  },
  {
    "id": "cefepime",
    "categoryId": "antibiotics",
    "genericName": "Cefepime",
    "brandNames": "Maxipime, Cefepime, Cepime, Fepime, Maxcef, Cefapime",
    "description": "Fourth-generation cephalosporin with enhanced activity against Gram-negative organisms including Pseudomonas. Zwitterionic structure allows rapid penetration through bacterial membranes. Used for hospital-acquired infections and febrile neutropenia.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hospital-Acquired Infections",
    "dosageForm": "IV/IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 g IV q8-12h", "sub": "Febrile neutropenia: 2 g IV q8h" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~2 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "HAP, febrile neutropenia, complicated UTI, complicated IAI, septicemia, Pseudomonas infections, meningitis", "sub": null },
      { "label": "RENAL ADJUSTMENT", "value": "CrCl <60: extended interval dosing", "sub": "CrCl <30: 1 g q24h" }
    ],
    "brandTable": [
      { "name": "Maxipime", "form": "IV/IM Injection, Premix", "strengths": "500 mg, 1 g, 2 g vials; 1 g/50 mL, 2 g/50 mL premix", "manufacturer": "Hospira (Pfizer)", "region": "USA, Europe, Global" },
      { "name": "Cepime", "form": "IV/IM Injection", "strengths": "500 mg, 1 g, 2 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Fepime", "form": "IV/IM Injection", "strengths": "500 mg, 1 g, 2 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Maxcef", "form": "IV/IM Injection", "strengths": "1 g, 2 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan" },
      { "name": "Cefapime", "form": "IV/IM Injection", "strengths": "500 mg, 1 g, 2 g vials", "manufacturer": "Various (Generic)", "region": "India, Asia" }
    ],
    "interactions": [
      { "drugClass": "Aminoglycosides", "effect": "Additive nephrotoxicity; synergistic for Pseudomonas.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Loop Diuretics", "effect": "Increased nephrotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Increased cefepime levels.", "severity": "Minor" },
      { "drugClass": "Alcohol", "effect": "No disulfiram-like reaction.", "severity": "Minor" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" }
    ],
    "warning": "Neurotoxicity (seizures, encephalopathy) with renal impairment and high doses. Dose adjustment essential for CrCl <60. Cross-sensitivity with penicillins. C diff colitis possible. Can cause false-positive Coombs test.",
    "subCategoryId": "cephalosporins-4"
  },
  {
    "id": "ceftaroline",
    "categoryId": "antibiotics",
    "genericName": "Ceftaroline",
    "brandNames": "Teflaro, Zinforo, Ceftaroline Fosamil, Cefaroline, Ceftero",
    "description": "Fifth-generation cephalosporin with anti-MRSA activity. Broad spectrum including MRSA, MDRSP, and traditional Gram-negative organisms. Used for complicated skin infections and community-acquired pneumonia.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "MRSA Skin Infections and CAP",
    "dosageForm": "IV Injection/Infusion",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "600 mg IV q12h", "sub": "Infuse over 1 hour" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~2.6 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Complicated SSSI (including MRSA), CAP (including MDRSP), ABSSSI", "sub": null },
      { "label": "RENAL ADJUSTMENT", "value": "CrCl 30-50: 400 mg IV q12h", "sub": "CrCl <30: 300 mg IV q12h" }
    ],
    "brandTable": [
      { "name": "Teflaro", "form": "IV Injection", "strengths": "400 mg, 600 mg single-use vials", "manufacturer": "Allergan (AbbVie)", "region": "USA" },
      { "name": "Zinforo", "form": "IV Injection", "strengths": "400 mg, 600 mg vials", "manufacturer": "Pfizer", "region": "Europe, UK, Middle East" },
      { "name": "Ceftaroline Fosamil", "form": "IV Injection", "strengths": "400 mg, 600 mg vials", "manufacturer": "Various (Generic)", "region": "USA, Europe" },
      { "name": "Ceftero", "form": "IV Injection", "strengths": "600 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Cefaroline", "form": "IV Injection", "strengths": "400 mg, 600 mg vials", "manufacturer": "Various (Generic)", "region": "India, Asia" }
    ],
    "interactions": [
      { "drugClass": "Aminoglycosides", "effect": "Additive nephrotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Increased ceftaroline levels.", "severity": "Minor" },
      { "drugClass": "Loop Diuretics", "effect": "Possible increased nephrotoxicity.", "severity": "Minor" },
      { "drugClass": "Alcohol", "effect": "No disulfiram-like reaction.", "severity": "Minor" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" }
    ],
    "warning": "Prodrug (ceftaroline fosamil) converted in plasma. Cross-sensitivity with penicillins and other cephalosporins. Neutropenia with prolonged therapy. C diff colitis risk. Monitor renal function and adjust dose. Not active against ESBL or AmpC producers.",
    "subCategoryId": "cephalosporins-4"
  },
  {
    "id": "azithromycin",
    "categoryId": "antibiotics",
    "genericName": "Azithromycin",
    "brandNames": "Zithromax, Zmax, AzaSite, Azithrocin, Zitrex, Azro",
    "description": "Macrolide antibiotic with extended half-life and excellent tissue penetration. Broad spectrum including atypical pathogens (Legionella, Mycoplasma, Chlamydia). Short course therapy (3-5 days). Widely used for community-acquired pneumonia and sexually transmitted infections.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Respiratory and STI Infections",
    "dosageForm": "Oral Tablets/Suspension/IV/Ophthalmic",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "500 mg once daily (Z-Pak: 500 mg day 1, then 250 mg days 2-5)", "sub": "STI: 1 g single dose" },
      { "label": "ONSET / HALF-LIFE", "value": "2-3 hours peak", "sub": "~68 hours half-life (tissue)" },
      { "label": "CLINICAL INDICATIONS", "value": "CAP, acute bronchitis, sinusitis, pharyngitis, otitis media, gonorrhea, chlamydia, chancroid, MAC prophylaxis", "sub": null },
      { "label": "PEDIATRIC", "value": "10 mg/kg day 1, then 5 mg/kg days 2-5", "sub": "Otitis media: 30 mg/kg single dose" }
    ],
    "brandTable": [
      { "name": "Zithromax", "form": "Tablets, Suspension, IV", "strengths": "250 mg, 500 mg, 600 mg tabs; 100 mg/5 mL, 200 mg/5 mL susp; 500 mg IV vials", "manufacturer": "Pfizer", "region": "USA, UK, Europe, Global" },
      { "name": "Zmax", "form": "Extended-Release Suspension", "strengths": "2 g single-dose microsphere susp.", "manufacturer": "Pfizer", "region": "USA" },
      { "name": "AzaSite", "form": "Ophthalmic Solution", "strengths": "1% ophthalmic drops", "manufacturer": "Akorn (Merck)", "region": "USA" },
      { "name": "Azithrocin", "form": "Tablets, Suspension, Injection", "strengths": "250 mg, 500 mg tabs; 200 mg/5 mL susp; 500 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Azro", "form": "Tablets, Suspension, Drops", "strengths": "250 mg, 500 mg; 200 mg/5 mL susp; 100 mg/mL drops", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "AZKO", "form": "Tablet/Capsule", "strengths": "500 mg", "manufacturer": "Rasco Pharma Lahore", "region": "Pakistan" },
      { "name": "Azitech", "form": "Tablet", "strengths": "500 mg", "manufacturer": "Derma Tecno", "region": "Pakistan" },
      { "name": "Azomax", "form": "Capsule", "strengths": "250 mg", "manufacturer": "Sandoz (Pakistan)", "region": "Pakistan" },
      { "name": "Azitek", "form": "Tablet, Suspension", "strengths": "250 mg, 500 mg; 200 mg/5 mL", "manufacturer": "Various", "region": "Pakistan" },
      { "name": "Azure", "form": "Tablet/Capsule", "strengths": "500 mg", "manufacturer": "FYNK Pharma Lahore", "region": "Pakistan" },
      { "name": "Azipark", "form": "Tablet/Capsule", "strengths": "500 mg", "manufacturer": "Various", "region": "Pakistan" },
      { "name": "Azithrotech", "form": "Tablet", "strengths": "500 mg", "manufacturer": "Derma Tecno", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Moderate" },
      { "drugClass": "QT-Prolonging Agents (Amiodarone, Sotalol)", "effect": "Increased risk of QTc prolongation and torsades.", "severity": "Major" },
      { "drugClass": "Digoxin", "effect": "Increased digoxin levels (P-glycoprotein).", "severity": "Moderate" },
      { "drugClass": "Antacids (Mg/Al)", "effect": "Reduced absorption. Separate by 2 hours.", "severity": "Moderate" },
      { "drugClass": "Statins (Simvastatin, Atorvastatin)", "effect": "Increased statin levels, rhabdomyolysis risk.", "severity": "Moderate" },
      { "drugClass": "Colchicine", "effect": "Increased colchicine toxicity (P-gp inhibition).", "severity": "Major" }
    ],
    "warning": "QT prolongation risk - caution in pre-existing cardiac conditions, electrolyte disturbances, or concurrent QT-prolonging drugs. Hepatotoxicity reported. Prolonged half-life means drug persists in tissues. Take on empty stomach 1h before or 2h after meals. Hepatic impairment: caution.",
    "subCategoryId": "macrolides"
  },
  {
    "id": "clarithromycin",
    "categoryId": "antibiotics",
    "genericName": "Clarithromycin",
    "brandNames": "Biaxin, Biaxin XL, Klaricid, Claribid, Claritek, Maclar",
    "description": "Macrolide antibiotic with enhanced acid stability and better absorption than erythromycin. Used for respiratory infections, H. pylori eradication, and MAC infection. CYP3A4 inhibitor causing significant drug interactions.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Respiratory and H. pylori Infections",
    "dosageForm": "Oral Tablets/Suspension/IV",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-500 mg BID", "sub": "XL: 1,000 mg once daily" },
      { "label": "ONSET / HALF-LIFE", "value": "2-3 hours peak", "sub": "~3-7 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "CAP, acute bronchitis, sinusitis, pharyngitis, H. pylori (in combination), MAC, pertussis", "sub": null },
      { "label": "PEDIATRIC", "value": "15 mg/kg/day divided BID", "sub": "Suspension 125 mg/5 mL, 250 mg/5 mL" }
    ],
    "brandTable": [
      { "name": "Biaxin", "form": "Tablets, Suspension", "strengths": "250 mg, 500 mg tabs; 125 mg/5 mL, 250 mg/5 mL susp.", "manufacturer": "AbbVie (Abbott)", "region": "USA, Europe, Global" },
      { "name": "Biaxin XL", "form": "Extended-Release Tablets", "strengths": "500 mg, 1,000 mg", "manufacturer": "AbbVie", "region": "USA, Global" },
      { "name": "Klaricid", "form": "Tablets, Suspension, IV", "strengths": "250 mg, 500 mg; 125 mg/5 mL susp; 500 mg IV vials", "manufacturer": "Abbott", "region": "UK, Europe, Asia, Pakistan" },
      { "name": "Claribid", "form": "Tablets, Suspension", "strengths": "250 mg, 500 mg; 125 mg/5 mL, 250 mg/5 mL susp.", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Maclar", "form": "Tablets, Suspension", "strengths": "250 mg, 500 mg; 125 mg/5 mL, 250 mg/5 mL susp.", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Clara", "form": "Suspension, Tablet", "strengths": "125 mg/5 mL; 250 mg, 500 mg", "manufacturer": "Various", "region": "Pakistan" },
      { "name": "Glarith", "form": "Tablet", "strengths": "250 mg, 500 mg", "manufacturer": "Getz Pharma Karachi", "region": "Pakistan" },
      { "name": "Klaricid (Pak)", "form": "Tablet, Suspension, IV Injection", "strengths": "250 mg, 500 mg; 125 mg/5 mL, 250 mg/5 mL; 500 mg IV", "manufacturer": "Abbott Laboratories (Pakistan) Limited", "region": "Pakistan" },
      { "name": "Klaricid XL", "form": "Extended-Release Tablet", "strengths": "500 mg", "manufacturer": "Abbott Laboratories (Pakistan) Limited", "region": "Pakistan" },
      { "name": "Neo-Klar", "form": "Oral Liquid", "strengths": "250 mg/5 mL", "manufacturer": "CCL Pharmaceuticals, Pakistan", "region": "Pakistan" },
      { "name": "Ranker", "form": "Tablet", "strengths": "250 mg", "manufacturer": "Wilshire Pharma Lahore", "region": "Pakistan" },
      { "name": "Westhromycin", "form": "Powder for Oral Suspension", "strengths": "125 mg/mL", "manufacturer": "Alina Combine Pharmaceuticals (Pvt.) Ltd.", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Statins (Simvastatin, Lovastatin, Atorvastatin)", "effect": "Increased statin levels - rhabdomyolysis risk. Avoid simvastatin/lovastatin.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR - bleeding risk.", "severity": "Major" },
      { "drugClass": "QT-Prolonging Agents", "effect": "QTc prolongation and torsades de pointes risk.", "severity": "Major" },
      { "drugClass": "Calcium Channel Blockers (Amlodipine, Nifedipine)", "effect": "Increased CCB levels - hypotension, edema.", "severity": "Major" },
      { "drugClass": "Colchicine", "effect": "Increased colchicine toxicity - fatal in renal impairment.", "severity": "Major" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy (through enzyme effects).", "severity": "Minor" }
    ],
    "warning": "Significant CYP3A4 inhibitor - extensive drug interaction profile. QTc prolongation. Pregnancy category C - avoid (except H. pylori). Metallic taste common (~20%). Contraindicated with ergot alkaloids and midazolam. Hepatotoxicity.",
    "subCategoryId": "macrolides"
  },
  {
    "id": "erythromycin",
    "categoryId": "antibiotics",
    "genericName": "Erythromycin",
    "brandNames": "Ery-Tab, Eryc, E-Mycin, Erythrocin, Ilosone, Erymax",
    "description": "First macrolide antibiotic. Used for respiratory infections, pertussis, and as a prokinetic agent (motilin agonist). Bacteriostatic against most Gram-positive organisms. Significant GI side effects limit tolerability.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Respiratory and Pertussis",
    "dosageForm": "Oral Tablets/Suspension/IV/Ophthalmic/Topical",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-500 mg QID or 500 mg BID (EES)", "sub": "Max: 4 g/day" },
      { "label": "ONSET / HALF-LIFE", "value": "1-4 hours peak", "sub": "~1.5-2 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Pertussis, CAP, Legionella, diphtheria, chlamydia, syphilis (alternate), UGI dysmotility (prokinetic)", "sub": null },
      { "label": "PEDIATRIC", "value": "30-50 mg/kg/day divided TID-QID", "sub": "EES: 40 mg/kg/day divided" }
    ],
    "brandTable": [
      { "name": "Ery-Tab", "form": "EC Tablets", "strengths": "250 mg, 333 mg, 500 mg", "manufacturer": "AbbVie (Abbott)", "region": "USA, Global" },
      { "name": "Eryc", "form": "EC Capsules", "strengths": "250 mg", "manufacturer": "Pfizer (Warner Chilcott)", "region": "USA, UK" },
      { "name": "Erythrocin", "form": "Tablets, Suspension, IV Injection", "strengths": "250 mg, 500 mg; 125 mg/5 mL susp; 500 mg, 1 g IV vials", "manufacturer": "Abbott", "region": "UK, Europe, Asia, Pakistan" },
      { "name": "Ilosone", "form": "Capsules, Suspension, Drops", "strengths": "125 mg, 250 mg caps; 125 mg/5 mL susp; 100 mg/mL drops", "manufacturer": "Dista (Lilly)", "region": "Global" },
      { "name": "Erymax", "form": "Topical Solution", "strengths": "2% solution, ointment", "manufacturer": "Various", "region": "Global" },
      { "name": "Acumen", "form": "Tablet", "strengths": "500 mg", "manufacturer": "Rakaposhi Pharmaceutical (Pvt) Ltd.", "region": "Pakistan" },
      { "name": "Deltacin", "form": "Tablet", "strengths": "500 mg", "manufacturer": "Delta Pharma (Pvt) Ltd.", "region": "Pakistan" },
      { "name": "Emycin", "form": "Tablet", "strengths": "500 mg", "manufacturer": "Lisko Pakistan (Pvt) Ltd", "region": "Pakistan" },
      { "name": "Erycin", "form": "Tablet", "strengths": "50 mg, 250 mg, 500 mg", "manufacturer": "Goodman Laboratories (Pvt) Ltd", "region": "Pakistan" },
      { "name": "Erythrocin (Pak)", "form": "Tablet, Suspension", "strengths": "250 mg, 500 mg; 200 mg/5 mL", "manufacturer": "Indus Pharmaceuticals (Pvt.) Ltd.", "region": "Pakistan" },
      { "name": "Erithrin", "form": "Suspension", "strengths": "200 mg/5 mL", "manufacturer": "Ferozson Laboratories Ltd.", "region": "Pakistan" },
      { "name": "Izacin", "form": "Oral Drops", "strengths": "100 mg (30 mL)", "manufacturer": "Iza Pharma (PVT) LTD", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Statins (Simvastatin, Lovastatin)", "effect": "Increased statin levels - rhabdomyolysis.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR - bleeding.", "severity": "Major" },
      { "drugClass": "QT-Prolonging Agents", "effect": "QTc prolongation - torsades.", "severity": "Major" },
      { "drugClass": "Ergotamine/Dihydroergotamine", "effect": "Ergotism - ischemia. Contraindicated.", "severity": "Major" },
      { "drugClass": "Digoxin", "effect": "Increased digoxin levels.", "severity": "Moderate" },
      { "drugClass": "Carbamazepine", "effect": "Increased carbamazepine toxicity.", "severity": "Major" }
    ],
    "warning": "Significant CYP3A4 inhibitor - many drug interactions. QTc prolongation risk. GI intolerance (nausea, diarrhea) is dose-limiting. Hepatotoxicity with estolate (Ilosone) form. Pregnancy category B. Erythromycin base/estolate/stearate have different absorption.",
    "subCategoryId": "macrolides"
  },
  {
    "id": "roxithromycin",
    "categoryId": "antibiotics",
    "genericName": "Roxithromycin",
    "brandNames": "Rulid, Roxid, Roxi, Roxithro, Birox, Roxibac",
    "description": "Macrolide antibiotic derived from erythromycin with improved acid stability, better bioavailability, and fewer GI side effects. Used for respiratory, skin, and urogenital infections. Widely prescribed in Asia and Europe.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Respiratory Infections",
    "dosageForm": "Oral Tablets/Suspension",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "150 mg BID or 300 mg once daily", "sub": "Max: 300 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "2 hours peak", "sub": "~12 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "CAP, acute bronchitis, sinusitis, pharyngitis, tonsillitis, otitis media, skin infections, non-gonococcal urethritis, dental infections", "sub": null },
      { "label": "PEDIATRIC", "value": "5-8 mg/kg/day divided BID", "sub": "Suspension 50 mg/5 mL" }
    ],
    "brandTable": [
      { "name": "Rulid", "form": "Tablets, Suspension", "strengths": "50 mg, 100 mg, 150 mg, 300 mg; 50 mg/5 mL susp.", "manufacturer": "Sanofi-Aventis", "region": "Europe, Asia, Middle East, Pakistan" },
      { "name": "Roxid", "form": "Tablets, Suspension", "strengths": "150 mg, 300 mg; 50 mg/5 mL susp.", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Roxi", "form": "Tablets, Suspension", "strengths": "150 mg, 300 mg; 50 mg/5 mL", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Roxithro", "form": "Tablets", "strengths": "150 mg, 300 mg", "manufacturer": "Various (Generic)", "region": "Pakistan" },
      { "name": "Roxibac", "form": "Tablets, Suspension", "strengths": "150 mg, 300 mg; 50 mg/5 mL susp.", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Major" },
      { "drugClass": "Statins", "effect": "Increased statin levels - rhabdomyolysis risk.", "severity": "Moderate" },
      { "drugClass": "QT-Prolonging Agents", "effect": "QTc prolongation risk.", "severity": "Moderate" },
      { "drugClass": "Ergot Alkaloids", "effect": "Ergotism risk.", "severity": "Major" },
      { "drugClass": "Digoxin", "effect": "Increased digoxin levels.", "severity": "Moderate" },
      { "drugClass": "Theophylline", "effect": "Increased theophylline levels.", "severity": "Moderate" }
    ],
    "warning": "Less GI side effects than erythromycin. Fewer drug interactions than clarithromycin (weaker CYP3A4 inhibitor). Pregnancy category B. Take 1 hour before or 2 hours after meals. Monitor LFTs with prolonged therapy.",
    "subCategoryId": "macrolides"
  },
  {
    "id": "fidaxomicin",
    "categoryId": "antibiotics",
    "genericName": "Fidaxomicin",
    "brandNames": "Dificid, Fidaxocin, Dificlir, Fidaxo, Dificin",
    "description": "Narrow-spectrum macrolide antibiotic with potent anti-C. difficile activity. Minimal systemic absorption. First-line therapy for C. difficile infection due to lower recurrence rates compared to vancomycin and metronidazole.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "C. Difficile Infection",
    "dosageForm": "Oral Tablets/Suspension",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "200 mg BID for 10 days", "sub": "Extended course: 200 mg once daily for 20-25 days for recurrent CDI" },
      { "label": "ONSET / HALF-LIFE", "value": "Minimal systemic absorption", "sub": "~9-12 hours (systemic)" },
      { "label": "CLINICAL INDICATIONS", "value": "C. difficile infection (initial and recurrent), first episode CDI, recurrent CDI", "sub": null },
      { "label": "EFFICACY", "value": "66-72% cure rate", "sub": "Lower recurrence vs. vancomycin (13% vs. 24%)" }
    ],
    "brandTable": [
      { "name": "Dificid", "form": "Tablets", "strengths": "200 mg", "manufacturer": "Merck (Cubist)", "region": "USA, Global" },
      { "name": "Dificlir", "form": "Tablets, Oral Suspension", "strengths": "200 mg; 40 mg/mL susp.", "manufacturer": "Astellas", "region": "Europe, UK" },
      { "name": "Fidaxocin", "form": "Tablets", "strengths": "200 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Fidaxo", "form": "Tablets", "strengths": "200 mg", "manufacturer": "Various (Generic)", "region": "India, Asia" },
      { "name": "Dificin", "form": "Tablets", "strengths": "200 mg", "manufacturer": "Various (Generic)", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "P-glycoprotein Substrates (Digoxin, Dabigatran)", "effect": "Increased absorption of oral P-gp substrates due to GI P-gp inhibition.", "severity": "Moderate" },
      { "drugClass": "Cyclosporine", "effect": "Increased fidaxomicin levels (P-gp inhibition).", "severity": "Moderate" },
      { "drugClass": "Antacids", "effect": "No significant interaction (minimal systemic absorption).", "severity": "Minor" },
      { "drugClass": "Anticoagulants", "effect": "Minimal interaction risk.", "severity": "Minor" },
      { "drugClass": "CYP3A4 Substrates", "effect": "No significant interaction (not CYP-metabolized).", "severity": "Minor" },
      { "drugClass": "Other CDI Treatments (Vancomycin, Metronidazole)", "effect": "Sequential therapy may be used for recurrent CDI.", "severity": "Minor" }
    ],
    "warning": "Very expensive - reserve for severe/complicated CDI or when standard therapy fails. Minimal systemic absorption - safe for CDI with few systemic side effects. Not active against other infections. Lower recurrence rate vs. vancomycin.",
    "subCategoryId": "macrolides"
  },
  {
    "id": "ciprofloxacin",
    "categoryId": "antibiotics",
    "genericName": "Ciprofloxacin",
    "brandNames": "Cipro, Ciprobay, Ciflox, Ciproquin, Quintor, Ciplox",
    "description": "Broad-spectrum fluoroquinolone antibiotic with potent Gram-negative and anti-Pseudomonal activity. Most commonly prescribed quinolone. Used for complicated UTIs, GI infections, and anthrax.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "UTIs and GI Infections",
    "dosageForm": "Oral Tablets/Suspension/IV/Ophthalmic/Otic",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-750 mg BID (oral)", "sub": "IV: 200-400 mg q12h" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 hours peak (oral)", "sub": "~4 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Complicated UTI, pyelonephritis, prostatitis, GI infections (salmonella, shigella, campylobacter), HAP, osteomyelitis, anthrax, Pseudomonas infections", "sub": null },
      { "label": "XR FORMULATION", "value": "500-1,000 mg once daily (XR)", "sub": "For uncomplicated UTIs" }
    ],
    "brandTable": [
      { "name": "Cipro", "form": "Tablets, Suspension, IV, Ophthalmic, Otic", "strengths": "100 mg, 250 mg, 500 mg, 750 mg tabs; 250 mg/5 mL, 500 mg/5 mL susp; IV: 200 mg, 400 mg", "manufacturer": "Bayer", "region": "USA, UK, Europe, Global" },
      { "name": "Ciprobay", "form": "Tablets, IV", "strengths": "250 mg, 500 mg, 750 mg; IV 200 mg/100 mL, 400 mg/200 mL", "manufacturer": "Bayer", "region": "Europe, Asia, Pakistan" },
      { "name": "Ciflox", "form": "Tablets, Suspension, Injection, Drops", "strengths": "250 mg, 500 mg, 750 mg; 250 mg/5 mL susp; 200 mg IV", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Ciproquin", "form": "Tablets, Eye/Ear Drops", "strengths": "250 mg, 500 mg; 0.3% drops", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Ciplox", "form": "Tablets, Infusion, Eye/Ear Drops", "strengths": "250 mg, 500 mg, 750 mg; 200 mg IV; 0.3% drops", "manufacturer": "Cipla", "region": "Pakistan, India, Asia" },
      { "name": "Cipval", "form": "Tablet", "strengths": "500 mg", "manufacturer": "GSK Pakistan Limited", "region": "Pakistan" },
      { "name": "Novidat", "form": "Tablet, Injection", "strengths": "250 mg, 500 mg, 750 mg; 200 mg/100 mL", "manufacturer": "SAMI Pharmaceuticals (Pvt) Ltd.", "region": "Pakistan" },
      { "name": "Proflox", "form": "Tablet", "strengths": "500 mg", "manufacturer": "Helicon Health Pakistan (Pvt)", "region": "Pakistan" },
      { "name": "Inocquin", "form": "Tablet", "strengths": "250 mg, 500 mg", "manufacturer": "Barrett Hodgson Pakistan (Pvt) Ltd.", "region": "Pakistan" },
      { "name": "Ciprot", "form": "Tablet", "strengths": "250 mg, 500 mg", "manufacturer": "GSK Pakistan Limited", "region": "Pakistan" },
      { "name": "Yokocip", "form": "Injection", "strengths": "200 mg/100 mL", "manufacturer": "Neutro Pharma (Pvt.) Ltd.", "region": "Pakistan" },
      { "name": "Baxolyn", "form": "Injection", "strengths": "200 mg/100 mL", "manufacturer": "Bosch Pharmaceuticals (Pvt.) Ltd.", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR - bleeding risk.", "severity": "Major" },
      { "drugClass": "Tizanidine", "effect": "Severe hypotension, sedation - contraindicated.", "severity": "Major" },
      { "drugClass": "Theophylline", "effect": "Increased theophylline levels - seizures.", "severity": "Major" },
      { "drugClass": "QT-Prolonging Agents", "effect": "QTc prolongation risk.", "severity": "Major" },
      { "drugClass": "Antacids, Sucralfate, Iron, Zinc", "effect": "Markedly reduced absorption. Separate by 6 hours.", "severity": "Major" },
      { "drugClass": "NSAIDs", "effect": "Increased CNS stimulation - seizure risk.", "severity": "Moderate" }
    ],
    "warning": "BLACK BOX: Tendonitis/tendon rupture risk (increased in elderly, renal impairment, on steroids). CNS effects (seizures, confusion). QTc prolongation. Avoid in myasthenia gravis. Peripheral neuropathy. Avoid in children and pregnancy unless anthrax. Separate from divalent cations by 6 hours.",
    "subCategoryId": "fluoroquinolones"
  },
  {
    "id": "levofloxacin",
    "categoryId": "antibiotics",
    "genericName": "Levofloxacin",
    "brandNames": "Levaquin, Tavanic, Levoflox, Leflox, Quinsair, Iquix",
    "description": "Fluoroquinolone with enhanced Gram-positive coverage (including penicillin-resistant S. pneumoniae). Most prescribed quinolone in the US before safety concerns. Once-daily dosing. Used for respiratory and urinary tract infections.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Respiratory and UTI Infections",
    "dosageForm": "Oral Tablets/IV/Ophthalmic",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-750 mg once daily (oral/IV)", "sub": "Max: 750 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 hours peak (oral)", "sub": "~6-8 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "CAP (including MDRSP), acute sinusitis, acute bronchitis, complicated UTI, pyelonephritis, prostatitis, HAP, skin infections, anthrax", "sub": null },
      { "label": "RENAL ADJUSTMENT", "value": "CrCl 20-49: 250 mg q24-48h", "sub": "CrCl <20: 250 mg q48h" }
    ],
    "brandTable": [
      { "name": "Levaquin", "form": "Tablets, IV Premix, Oral Solution", "strengths": "250 mg, 500 mg, 750 mg tabs; 250 mg/50 mL, 500 mg/100 mL, 750 mg/150 mL IV", "manufacturer": "Janssen (J&J)", "region": "USA, Global" },
      { "name": "Tavanic", "form": "Tablets, IV Infusion", "strengths": "250 mg, 500 mg, 750 mg; IV 500 mg/100 mL", "manufacturer": "Sanofi-Aventis", "region": "Europe, Asia, Pakistan" },
      { "name": "Levoflox", "form": "Tablets, Infusion, Eye Drops", "strengths": "250 mg, 500 mg, 750 mg; 500 mg IV; 0.5% eye drops", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Leflox", "form": "Tablets, Infusion", "strengths": "250 mg, 500 mg, 750 mg; 500 mg/100 mL IV", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Quinsair", "form": "Inhalation Solution", "strengths": "240 mg BID (inhaled for CF)", "manufacturer": "Raptor Pharma", "region": "USA, Europe" },
      { "name": "Leflox", "form": "Tablet", "strengths": "250 mg, 500 mg, 750 mg", "manufacturer": "Getz Pharma (Pvt) Ltd.", "region": "Pakistan" },
      { "name": "Levofin", "form": "Tablet", "strengths": "250 mg, 500 mg, 750 mg", "manufacturer": "Various", "region": "Pakistan" },
      { "name": "Effiflox", "form": "Tablet", "strengths": "250 mg, 500 mg, 750 mg", "manufacturer": "Sami Pharmaceuticals (Pvt) Ltd.", "region": "Pakistan" },
      { "name": "Genvox", "form": "Tablet", "strengths": "500 mg", "manufacturer": "Harmann Pharmaceutical Laboratories (PVT) Ltd.", "region": "Pakistan" },
      { "name": "Rumaflox", "form": "Tablet", "strengths": "500 mg", "manufacturer": "Medisure Laboratories Pakistan (Pvt)", "region": "Pakistan" },
      { "name": "Levomed", "form": "Tablet", "strengths": "500 mg", "manufacturer": "Various", "region": "Pakistan" },
      { "name": "Evolat", "form": "Tablet", "strengths": "250 mg", "manufacturer": "Evolution Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR - bleeding risk.", "severity": "Major" },
      { "drugClass": "QT-Prolonging Agents", "effect": "QTc prolongation - torsades risk.", "severity": "Major" },
      { "drugClass": "Antacids, Iron, Sucralfate, Zinc", "effect": "Reduced absorption. Separate by 2 hours.", "severity": "Major" },
      { "drugClass": "NSAIDs", "effect": "Increased CNS effects - seizure risk.", "severity": "Moderate" },
      { "drugClass": "Corticosteroids", "effect": "Significantly increased tendon rupture risk.", "severity": "Major" },
      { "drugClass": "Oral Hypoglycemics", "effect": "Blood glucose fluctuations (both hypo and hyper).", "severity": "Moderate" }
    ],
    "warning": "BLACK BOX: Tendonitis/tendon rupture (especially with steroids). Peripheral neuropathy (irreversible). CNS effects (seizures, dizziness). QTc prolongation. Avoid in myasthenia gravis. Dysglycemia risk in diabetics. Fluoroquinolone class restrictions due to disabling side effects.",
    "subCategoryId": "fluoroquinolones"
  },
  {
    "id": "moxifloxacin",
    "categoryId": "antibiotics",
    "genericName": "Moxifloxacin",
    "brandNames": "Avelox, Moxiflox, Vigamox (ophthalmic), Moxeza, Avalox, Moxacin",
    "description": "Fluoroquinolone with enhanced Gram-positive coverage (including MDRSP) and good anaerobic activity. No renal adjustment needed (hepatic elimination). Not recommended for UTIs due to low renal excretion.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "CAP and Sinusitis",
    "dosageForm": "Oral Tablets/IV/Ophthalmic",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "400 mg once daily (oral/IV)", "sub": "Max: 400 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "1-3 hours peak (oral)", "sub": "~12 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "CAP, acute sinusitis, acute bronchitis (with COPD), complicated IAI (with metronidazole), conjunctivitis (ophthalmic)", "sub": null },
      { "label": "ADVANTAGE", "value": "No renal dose adjustment", "sub": "Primarily hepatic/biliary elimination" }
    ],
    "brandTable": [
      { "name": "Avelox", "form": "Tablets, IV Infusion", "strengths": "400 mg tabs; 400 mg/250 mL IV", "manufacturer": "Bayer", "region": "USA, UK, Europe, Global" },
      { "name": "Moxiflox", "form": "Tablets, Infusion", "strengths": "400 mg; 400 mg/250 mL IV", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Vigamox", "form": "Ophthalmic Solution", "strengths": "0.5% ophthalmic drops", "manufacturer": "Alcon (Novartis)", "region": "USA, Global" },
      { "name": "Moxeza", "form": "Ophthalmic Solution", "strengths": "0.5% (with preservative for multi-dose)", "manufacturer": "Alcon", "region": "USA" },
      { "name": "Moxacin", "form": "Tablets, IV Infusion", "strengths": "400 mg; 400 mg/250 mL IV", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Avelox", "form": "Tablet, IV infusion", "strengths": "400 mg; 400 mg/250 mL IV", "manufacturer": "Bayer", "region": "Pakistan" },
      { "name": "Mofest", "form": "Tablet, IV infusion", "strengths": "400 mg; 400 mg/250 mL IV", "manufacturer": "Sami Pharmaceuticals (Pvt.) Ltd.", "region": "Pakistan" },
      { "name": "Moxiget", "form": "Tablet", "strengths": "400 mg", "manufacturer": "Getz Pharma (Pvt) Ltd.", "region": "Pakistan" },
      { "name": "Moksi", "form": "Tablet", "strengths": "400 mg", "manufacturer": "Abbott Laboratories", "region": "Pakistan" },
      { "name": "Barimox", "form": "Tablet", "strengths": "400 mg", "manufacturer": "Barrett Hodgson Pakistan (Pvt) Ltd.", "region": "Pakistan" },
      { "name": "Xefecta", "form": "Tablet", "strengths": "400 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Xiflox", "form": "Tablet", "strengths": "400 mg", "manufacturer": "Getz Pharma (Pvt) Ltd.", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "QT-Prolonging Agents", "effect": "Highest QTc prolongation risk among quinolones.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR - bleeding risk.", "severity": "Major" },
      { "drugClass": "Antacids, Iron, Sucralfate", "effect": "Reduced absorption. Separate by 4 hours.", "severity": "Major" },
      { "drugClass": "NSAIDs", "effect": "Increased CNS effects - seizure risk.", "severity": "Moderate" },
      { "drugClass": "Corticosteroids", "effect": "Increased tendon rupture risk.", "severity": "Moderate" },
      { "drugClass": "Oral Hypoglycemics", "effect": "Blood glucose fluctuations.", "severity": "Moderate" }
    ],
    "warning": "BLACK BOX: Tendon rupture, peripheral neuropathy, CNS effects. QTc prolongation (most among quinolones - caution in elderly, electrolyte disturbances). Avoid in myasthenia gravis. Hepatotoxicity reported. Not recommended for UTI (poor renal excretion).",
    "subCategoryId": "fluoroquinolones"
  },
  {
    "id": "norfloxacin",
    "categoryId": "antibiotics",
    "genericName": "Norfloxacin",
    "brandNames": "Noroxin, Norflox, Utinor, Floxinor, Bactinor, Uroxin",
    "description": "Fluoroquinolone with excellent Gram-negative coverage. Primarily used for uncomplicated and complicated UTIs. High concentration achieved in urine. Also used for infectious diarrhea.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "UTIs",
    "dosageForm": "Oral Tablets/Ophthalmic",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "400 mg BID", "sub": "Uncomplicated UTI: 400 mg BID for 3 days" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 hours peak", "sub": "~3-4 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Uncomplicated UTI, complicated UTI, prostatitis, gonorrhea (uncomplicated), infectious diarrhea, typhoid fever (alternate)", "sub": null },
      { "label": "OPHTHALMIC", "value": "0.3% solution", "sub": "For conjunctivitis" }
    ],
    "brandTable": [
      { "name": "Noroxin", "form": "Tablets", "strengths": "400 mg", "manufacturer": "Merck (MSD)", "region": "USA, UK, Europe, Global" },
      { "name": "Norflox", "form": "Tablets, Eye Drops", "strengths": "400 mg tabs; 0.3% eye drops", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Utinor", "form": "Tablets", "strengths": "400 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Bactinor", "form": "Tablets, Ophthalmic", "strengths": "400 mg; 0.3% drops", "manufacturer": "Various (Generic)", "region": "Pakistan" },
      { "name": "Uroxin", "form": "Tablets", "strengths": "400 mg", "manufacturer": "Various (Generic)", "region": "India, Asia" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR - bleeding risk.", "severity": "Major" },
      { "drugClass": "Theophylline", "effect": "Increased theophylline levels (less than cipro).", "severity": "Moderate" },
      { "drugClass": "Antacids, Iron, Sucralfate", "effect": "Reduced absorption. Separate by 6 hours.", "severity": "Major" },
      { "drugClass": "QT-Prolonging Agents", "effect": "QTc prolongation risk (lower than other quinolones).", "severity": "Moderate" },
      { "drugClass": "NSAIDs", "effect": "Increased CNS effects - seizure risk.", "severity": "Moderate" },
      { "drugClass": "Nitrofurantoin", "effect": "Antagonism in vitro - avoid combination for UTI.", "severity": "Minor" }
    ],
    "warning": "BLACK BOX: Same fluoroquinolone class warnings (tendonitis, neuropathy, CNS effects). Not for use in children. Avoid in myasthenia gravis. Take 1 hour before or 2 hours after meals. Maintain adequate hydration to prevent crystalluria.",
    "subCategoryId": "fluoroquinolones"
  },
  {
    "id": "ofloxacin",
    "categoryId": "antibiotics",
    "genericName": "Ofloxacin",
    "brandNames": "Floxin, Ocuflox, Tarivid, Oflox, Zanocin, Ofnix",
    "description": "Fluoroquinolone with balanced Gram-positive and Gram-negative activity. Available in multiple formulations including oral, IV, ophthalmic, and otic. Used for UTIs, respiratory infections, and sexually transmitted infections.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "UTIs and STIs",
    "dosageForm": "Oral Tablets/IV/Ophthalmic/Otic",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "200-400 mg BID (oral)", "sub": "Max: 800 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "1-3 hours peak (oral)", "sub": "~5-8 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "CAP, UTIs, prostatitis, PID, gonorrhea, chlamydia, cervicitis, pelvic infections, skin infections, otitis externa (otic), conjunctivitis (ophthalmic)", "sub": null },
      { "label": "OTIC (FLOXIN OTIC)", "value": "0.3% otic solution", "sub": "For otitis externa, chronic suppurative OM" }
    ],
    "brandTable": [
      { "name": "Floxin", "form": "Tablets, IV, Otic Solution", "strengths": "200 mg, 300 mg, 400 mg tabs; 400 mg IV; 0.3% otic drops", "manufacturer": "Ortho-McNeil (J&J)", "region": "USA" },
      { "name": "Ocuflox", "form": "Ophthalmic Solution", "strengths": "0.3% ophthalmic drops", "manufacturer": "Allergan (AbbVie)", "region": "USA, Global" },
      { "name": "Tarivid", "form": "Tablets, IV Infusion, Eye/Ear Drops", "strengths": "200 mg, 400 mg; 200 mg/100 mL IV; 0.3% drops", "manufacturer": "Sanofi-Aventis", "region": "Europe, Asia, Pakistan, Middle East" },
      { "name": "Zanocin", "form": "Tablets, Eye/Ear Drops", "strengths": "200 mg, 400 mg; 0.3% drops", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Oflox", "form": "Tablets, Infusion, Drops", "strengths": "200 mg, 400 mg; 200 mg IV; 0.3% eye/ear drops", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR - bleeding risk.", "severity": "Major" },
      { "drugClass": "Antacids, Iron, Sucralfate", "effect": "Reduced absorption. Separate by 2 hours.", "severity": "Major" },
      { "drugClass": "QT-Prolonging Agents", "effect": "QTc prolongation risk.", "severity": "Moderate" },
      { "drugClass": "NSAIDs", "effect": "Increased CNS effects - seizure risk.", "severity": "Moderate" },
      { "drugClass": "Theophylline", "effect": "Increased theophylline levels (less than ciprofloxacin).", "severity": "Moderate" },
      { "drugClass": "Oral Hypoglycemics", "effect": "Blood glucose fluctuations.", "severity": "Moderate" }
    ],
    "warning": "BLACK BOX: Same fluoroquinolone class warnings. Ofloxacin has lower incidence of CNS side effects than ciprofloxacin but same black box warnings. Avoid in myasthenia gravis. Otic use: not for viral/fungal ear infections.",
    "subCategoryId": "fluoroquinolones"
  },
  {
    "id": "gemifloxacin",
    "categoryId": "antibiotics",
    "genericName": "Gemifloxacin",
    "brandNames": "Factive, Gemiflox, Gemiflox, Gemifloxacin, G-Flox",
    "description": "Respiratory fluoroquinolone with enhanced Gram-positive activity including S. pneumoniae (both penicillin-susceptible and resistant). Primarily used for CAP and acute bronchitis in COPD patients.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "CAP and COPD Exacerbations",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "320 mg once daily", "sub": "Duration: 5-7 days for CAP" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 hours peak", "sub": "~4-12 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "CAP (including MDRSP), acute bronchitis exacerbation (COPD), acute sinusitis", "sub": null },
      { "label": "RENAL ADJUSTMENT", "value": "CrCl <40: 160 mg once daily", "sub": "Hemodialysis: 160 mg once daily" }
    ],
    "brandTable": [
      { "name": "Factive", "form": "Tablets", "strengths": "320 mg", "manufacturer": "LG Life Sciences", "region": "USA, Europe, Global" },
      { "name": "Gemiflox", "form": "Tablets", "strengths": "320 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Gemifloxacin", "form": "Tablets", "strengths": "320 mg", "manufacturer": "Various (Generic)", "region": "Global" },
      { "name": "G-Flox", "form": "Tablets", "strengths": "320 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR - bleeding risk.", "severity": "Major" },
      { "drugClass": "Antacids, Iron, Sucralfate", "effect": "Reduced absorption. Separate by 3 hours.", "severity": "Major" },
      { "drugClass": "QT-Prolonging Agents", "effect": "QTc prolongation risk.", "severity": "Moderate" },
      { "drugClass": "NSAIDs", "effect": "Increased CNS effects.", "severity": "Moderate" },
      { "drugClass": "Corticosteroids", "effect": "Increased tendon rupture risk.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" }
    ],
    "warning": "BLACK BOX: Same fluoroquinolone class warnings. Rash incidence ~3% (higher in women <40). Photosensitivity. Avoid in myasthenia gravis. Less renal excretion than other quinolones - longer tissue half-life. Pregnancy category C.",
    "subCategoryId": "fluoroquinolones"
  },
  {
    "id": "delafloxacin",
    "categoryId": "antibiotics",
    "genericName": "Delafloxacin",
    "brandNames": "Baxdela, Delaflox, Delafoxacin, Quinodella, Floxadel",
    "description": "Next-generation fluoroquinolone with enhanced activity in acidic environments (including abscesses). Active against MRSA. Approved for ABSSSI and CAP. Better tolerability and lower QTc risk than other quinolones.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "ABSSSI and CAP",
    "dosageForm": "Oral Tablets/IV Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "450 mg PO BID or 300 mg IV q12h", "sub": "No adjustment for renal/hepatic" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 hours peak (oral)", "sub": "~3-7 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "ABSSSI (including MRSA), CAP, skin abscesses, cellulitis, wound infections", "sub": null },
      { "label": "ADVANTAGE", "value": "Active in acidic environments", "sub": "Better activity in abscess/pus" }
    ],
    "brandTable": [
      { "name": "Baxdela", "form": "Tablets, IV Injection", "strengths": "450 mg tabs; 300 mg/20 mL single-dose vial", "manufacturer": "Melinta Therapeutics", "region": "USA" },
      { "name": "Delaflox", "form": "Tablets, IV Injection", "strengths": "450 mg; 300 mg IV", "manufacturer": "Various (Generic)", "region": "USA, Europe" },
      { "name": "Delafloxacin", "form": "Tablets, IV", "strengths": "450 mg; 300 mg/20 mL", "manufacturer": "Various (Generic)", "region": "Global" },
      { "name": "Quinodella", "form": "Tablets", "strengths": "450 mg", "manufacturer": "Various (Generic)", "region": "India, Asia" },
      { "name": "Floxadel", "form": "Tablets, IV", "strengths": "450 mg; 300 mg IV", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR (less than other FQs).", "severity": "Moderate" },
      { "drugClass": "Antacids, Iron, Sucralfate", "effect": "Reduced absorption. Separate by 2 hours.", "severity": "Major" },
      { "drugClass": "QT-Prolonging Agents", "effect": "Lower QTc risk than other quinolones but still caution.", "severity": "Moderate" },
      { "drugClass": "NSAIDs", "effect": "Increased CNS effects.", "severity": "Moderate" },
      { "drugClass": "Corticosteroids", "effect": "Increased tendon rupture risk.", "severity": "Moderate" },
      { "drugClass": "Oral Hypoglycemics", "effect": "Blood glucose fluctuations.", "severity": "Moderate" }
    ],
    "warning": "BLACK BOX: Same fluoroquinolone class warnings (tendon, neuropathy, CNS). Improved safety profile vs earlier quinolones (lower QTc). IV form contains sulfobutylether-beta-cyclodextrin - caution in renal impairment. Active at acidic pH - effective in abscesses.",
    "subCategoryId": "fluoroquinolones"
  },
  {
    "id": "doxycycline",
    "categoryId": "antibiotics",
    "genericName": "Doxycycline",
    "brandNames": "Vibramycin, Doryx, Monodox, Periostat, Oracea, Adoxa",
    "description": "Tetracycline antibiotic with broad-spectrum activity including atypical pathogens, rickettsia, spirochetes, and malaria. Highly lipophilic with excellent tissue penetration. Many non-antibiotic uses (acne, rosacea, periodontitis).",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Acne and Atypical Infections",
    "dosageForm": "Oral Capsules/Tablets/Suspension/IV",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "100 mg BID or 200 mg once daily", "sub": "Max: 200 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "1.5-4 hours peak", "sub": "~16-22 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Acne vulgaris, rosacea, CAP (atypical coverage), Lyme disease, RMSF, typhus, leptospirosis, syphilis, chlamydia, gonorrhea, malaria prophylaxis, anthrax, periodontitis", "sub": null },
      { "label": "PEDIATRIC (>8 yrs)", "value": "2-5 mg/kg/day divided BID", "sub": "Weight-based for children >8 years" }
    ],
    "brandTable": [
      { "name": "Vibramycin", "form": "Capsules, Syrup, Suspension", "strengths": "50 mg, 100 mg caps; 50 mg/5 mL syrup; 25 mg/5 mL susp.", "manufacturer": "Pfizer", "region": "USA, UK, Europe, Global" },
      { "name": "Doryx", "form": "EC Tablets, Delayed-Release Capsules", "strengths": "50 mg, 75 mg, 100 mg, 150 mg, 200 mg", "manufacturer": "Warner Chilcott (Allergan)", "region": "USA" },
      { "name": "Monodox", "form": "Capsules", "strengths": "50 mg, 75 mg, 100 mg", "manufacturer": "Oclassen Dermatologics", "region": "USA" },
      { "name": "Oracea", "form": "Capsules (30 mg IR + 10 mg DR)", "strengths": "40 mg (for rosacea)", "manufacturer": "Galderma", "region": "USA, Europe" },
      { "name": "Doxy", "form": "Tablets, Capsules, Dry Syrup, Drops", "strengths": "100 mg caps/tabs; 50 mg/5 mL DS; 100 mg/2 mL injection", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" }
    ],
    "interactions": [
      { "drugClass": "Antacids (Mg/Al/Ca), Iron, Bismuth", "effect": "Reduced absorption. Separate by 2-3 hours.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR (reduced vitamin K metabolism).", "severity": "Major" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Moderate" },
      { "drugClass": "Phenobarbital, Carbamazepine, Phenytoin", "effect": "Reduced doxycycline half-life (CYP induction).", "severity": "Moderate" },
      { "drugClass": "Retinoids (Isotretinoin, Acitretin)", "effect": "Increased risk of pseudotumor cerebri (idiopathic intracranial HTN).", "severity": "Major" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate levels.", "severity": "Moderate" }
    ],
    "warning": "Photosensitivity - severe sunburn risk. Avoid prolonged sun exposure. Esophageal ulceration - take with full glass of water, do not lie down for 30 min. Avoid in children <8 years and pregnancy (teeth discoloration, bone growth suppression). Expired tetracyclines can cause Fanconi syndrome.",
    "subCategoryId": "tetracyclines"
  },
  {
    "id": "minocycline",
    "categoryId": "antibiotics",
    "genericName": "Minocycline",
    "brandNames": "Minocin, Dynacin, Solodyn, Minoderm, Minoz, Aknemin",
    "description": "Tetracycline with highest lipophilicity and best CNS penetration. Used primarily for acne vulgaris and MRSA (as part of combination therapy). Also has anti-inflammatory properties independent of antibacterial activity.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Acne Vulgaris",
    "dosageForm": "Oral Capsules/Tablets/ER Tablets/IV",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "100 mg BID or 50 mg QID", "sub": "Solodyn ER: 45-135 mg once daily" },
      { "label": "ONSET / HALF-LIFE", "value": "1-3 hours peak", "sub": "~11-17 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Acne vulgaris, rosacea, MRSA (in combination), Nocardia, Actinomyces, Rickettsia, Chlamydia, Neisseria meningitidis carrier state", "sub": null },
      { "label": "NON-ANTIBIOTIC USE", "value": "Anti-inflammatory in acne", "sub": "Low-dose formulations for acne vulgaris" }
    ],
    "brandTable": [
      { "name": "Minocin", "form": "Capsules, IV Injection", "strengths": "50 mg, 100 mg caps; 100 mg IV vials", "manufacturer": "Wyeth (Pfizer)", "region": "USA, Europe" },
      { "name": "Dynacin", "form": "Capsules, Tablets", "strengths": "50 mg, 75 mg, 100 mg", "manufacturer": "Medicis (Valeant)", "region": "USA" },
      { "name": "Solodyn", "form": "Extended-Release Tablets", "strengths": "45 mg, 55 mg, 65 mg, 80 mg, 90 mg, 105 mg, 115 mg, 135 mg ER", "manufacturer": "Medicis (Valeant)", "region": "USA" },
      { "name": "Minoz", "form": "Capsules, Tablets", "strengths": "50 mg, 100 mg caps; 50 mg tabs", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Minoderm", "form": "Capsules", "strengths": "50 mg, 100 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Antacids, Iron, Zinc, Calcium", "effect": "Reduced absorption. Separate by 2-3 hours.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR - bleeding risk.", "severity": "Major" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Moderate" },
      { "drugClass": "Retinoids (Isotretinoin)", "effect": "Increased risk of pseudotumor cerebri.", "severity": "Major" },
      { "drugClass": "Penicillins", "effect": "Bacteriostatic antagonism - avoid.", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Reduced minocycline half-life (chronic alcohol use).", "severity": "Minor" }
    ],
    "warning": "Photosensitivity (less than doxycycline). Vestibular toxicity (dizziness, ataxia, vertigo) - more common than other tetracyclines. Pigmentation (skin, teeth, thyroid, nails) with long-term use. Avoid in children <8 years and pregnancy. Drug-induced lupus (rare).",
    "subCategoryId": "tetracyclines"
  },
  {
    "id": "tetracycline",
    "categoryId": "antibiotics",
    "genericName": "Tetracycline",
    "brandNames": "Achromycin, Sumycin, Tetracyn, Panmycin, Terramycin, Tetra-D",
    "description": "Original tetracycline antibiotic. Broad-spectrum but declining use due to resistance and availability of better-tolerated tetracyclines (doxycycline, minocycline). Used primarily for acne, rickettsial infections, and Helicobacter pylori eradication.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Acne and H. pylori",
    "dosageForm": "Oral Capsules/Suspension/Topical",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-500 mg QID", "sub": "Max: 2 g/day" },
      { "label": "ONSET / HALF-LIFE", "value": "2-4 hours peak", "sub": "~6-12 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Acne vulgaris, H. pylori (in combination), rickettsial infections, Rocky Mountain spotted fever, brucellosis, syphilis (alternate), periodontitis", "sub": null },
      { "label": "TOPICAL", "value": "3% ointment", "sub": "For localized infections" }
    ],
    "brandTable": [
      { "name": "Sumycin", "form": "Capsules, Tablets, Suspension", "strengths": "250 mg, 500 mg caps; 125 mg/5 mL susp.", "manufacturer": "Bristol-Myers Squibb", "region": "USA" },
      { "name": "Achromycin", "form": "Capsules, Topical Ointment", "strengths": "250 mg caps; 3% topical", "manufacturer": "Lederle (Pfizer)", "region": "USA, UK, Europe" },
      { "name": "Terramycin", "form": "Capsules, Ophthalmic Ointment", "strengths": "250 mg caps; ophth. ointment", "manufacturer": "Pfizer", "region": "USA, Global" },
      { "name": "Tetracycline", "form": "Capsules, Tablets", "strengths": "250 mg, 500 mg caps", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Tetra-D", "form": "Capsules", "strengths": "250 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Antacids, Iron, Dairy (Ca/Mg)", "effect": "Markedly reduced absorption. Separate by 3-4 hours.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR - bleeding risk.", "severity": "Major" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Moderate" },
      { "drugClass": "Retinoids", "effect": "Pseudotumor cerebri risk.", "severity": "Major" },
      { "drugClass": "Penicillins", "effect": "Bacteriostatic antagonism.", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate levels.", "severity": "Moderate" }
    ],
    "warning": "Take on empty stomach - food/dairy significantly reduce absorption. Hepatotoxic in pregnancy. Avoid in children <8 years and pregnancy. Photosensitivity. Expired tetracycline can cause Fanconi-like syndrome (nephrotoxicity). Outdated tetracycline should not be used.",
    "subCategoryId": "tetracyclines"
  },
  {
    "id": "tigecycline",
    "categoryId": "antibiotics",
    "genericName": "Tigecycline",
    "brandNames": "Tygacil, Tigex, Tigcycline, Tigacil, Glycycline, Tygec",
    "description": "Glycylcycline (tetracycline derivative) antibiotic. Broadest-spectrum tetracycline active against MDR pathogens including MRSA, VRE, and ESBL-producing Enterobacteriaceae. Reserved for complicated skin and intra-abdominal infections.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Complicated MDR Infections",
    "dosageForm": "IV Injection/Infusion",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "100 mg IV load, then 50 mg IV q12h", "sub": "Infuse over 30-60 min" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~27-42 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Complicated SSSI, complicated IAI, CAP (MDR pathogens), MDR infections (ESBL, MRSA, VRE)", "sub": null },
      { "label": "HEPATIC IMPAIRMENT", "value": "Child-Pugh C: 25 mg q12h (after 100 mg load)", "sub": "Reduce dose in severe hepatic impairment" }
    ],
    "brandTable": [
      { "name": "Tygacil", "form": "IV Injection", "strengths": "50 mg vials", "manufacturer": "Pfizer (Wyeth)", "region": "USA, UK, Europe, Global" },
      { "name": "Tigex", "form": "IV Injection", "strengths": "50 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Tigcycline", "form": "IV Injection", "strengths": "50 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Tigacil", "form": "IV Injection", "strengths": "50 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan" },
      { "name": "Glycycline", "form": "IV Injection", "strengths": "50 mg vials", "manufacturer": "Various (Generic)", "region": "India, Asia" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR - bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Moderate" },
      { "drugClass": "Digoxin", "effect": "Possible increased digoxin levels (P-gp).", "severity": "Minor" },
      { "drugClass": "CYP3A4 Substrates", "effect": "No significant CYP interactions.", "severity": "Minor" },
      { "drugClass": "Antacids", "effect": "No significant interaction (IV administration).", "severity": "Minor" },
      { "drugClass": "Retinoids", "effect": "Pseudotumor cerebri risk (class effect).", "severity": "Moderate" }
    ],
    "warning": "BLACK BOX: All-cause mortality increase in trials (especially VAP patients). Not for VAP/HAP. Nausea and vomiting common (dose-related). No renal adjustment needed. Photosensitivity. Avoid in children <8 years (teeth discoloration). Excellent MDR coverage.",
    "subCategoryId": "tetracyclines"
  },
  {
    "id": "demeclocycline",
    "categoryId": "antibiotics",
    "genericName": "Demeclocycline",
    "brandNames": "Declomycin, Demeclocycline, Declostatin, Dimethylchlortetracycline, Ledermycin",
    "description": "Tetracycline antibiotic with unique ADH-antagonizing property (used for SIADH). Antibacterial use limited due to availability of superior tetracyclines. More photosensitizing than other tetracyclines. Rarely used as antibiotic today.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "SIADH (Non-standard) and Acne",
    "dosageForm": "Oral Capsules/Tablets",
    "stats": [
      { "label": "ANTIBIOTIC DOSE", "value": "150-300 mg BID or QID", "sub": "Max: 1.2 g/day" },
      { "label": "SIADH DOSE", "value": "600-1,200 mg/day divided", "sub": "Off-label use for SIADH" },
      { "label": "ONSET / HALF-LIFE", "value": "3-4 hours peak", "sub": "~10-17 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "SIADH (off-label), acne (declining use), rickettsial infections, periodontitis", "sub": null }
    ],
    "brandTable": [
      { "name": "Declomycin", "form": "Capsules, Tablets", "strengths": "150 mg, 300 mg", "manufacturer": "Lederle (Wyeth/Pfizer)", "region": "USA, Europe" },
      { "name": "Ledermycin", "form": "Capsules, Tablets", "strengths": "150 mg, 300 mg", "manufacturer": "Lederle", "region": "Europe, Asia" },
      { "name": "Demeclocycline", "form": "Capsules", "strengths": "150 mg, 300 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Declostatin", "form": "Capsules", "strengths": "150 mg", "manufacturer": "Various (Generic)", "region": "Pakistan" },
      { "name": "Dimethylchlortetracycline", "form": "Capsules", "strengths": "150 mg", "manufacturer": "Various (Generic)", "region": "India" }
    ],
    "interactions": [
      { "drugClass": "Antacids, Iron, Dairy", "effect": "Reduced absorption. Separate by 3 hours.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR - bleeding risk.", "severity": "Major" },
      { "drugClass": "Lithium", "effect": "Increased lithium levels (nephrogenic DI effect).", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Moderate" },
      { "drugClass": "Retinoids", "effect": "Pseudotumor cerebri risk.", "severity": "Major" },
      { "drugClass": "Diuretics", "effect": "May potentiate SIADH treatment effect.", "severity": "Minor" }
    ],
    "warning": "Extreme photosensitivity - most phototoxic tetracycline. Nephrogenic diabetes insipidus (dose-related, used therapeutically for SIADH). Hepatotoxicity. Avoid in children <8 years and pregnancy. Superinfection risk. Limited availability today.",
    "subCategoryId": "tetracyclines"
  },
  {
    "id": "gentamicin",
    "categoryId": "antibiotics",
    "genericName": "Gentamicin",
    "brandNames": "Garamycin, Gentak, Cidomycin, Gentamicin, G-Mycin, Gentin",
    "description": "Aminoglycoside antibiotic with potent Gram-negative activity including Pseudomonas. Concentration-dependent killing with post-antibiotic effect. Once-daily dosing preferred. Used for serious Gram-negative infections, septicemia, and endocarditis (synergy).",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Serious Gram-Negative Infections",
    "dosageForm": "IV/IM Injection/Ophthalmic/Topical",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "5-7 mg/kg IV q24h (once-daily dosing)", "sub": "Multiple daily dosing: 1-2 mg/kg q8h" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~2-4 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Gram-negative septicemia, Pseudomonas infections, HAP, complicated UTI, endocarditis (synergy with penicillin/vancomycin), febrile neutropenia", "sub": null },
      { "label": "MONITORING", "value": "Trough: <1 mcg/mL (once-daily)", "sub": "Peak: 18-26 mcg/mL (once-daily)" }
    ],
    "brandTable": [
      { "name": "Garamycin", "form": "IV/IM Injection, Ophthalmic, Topical", "strengths": "20 mg/2 mL, 40 mg/mL, 60 mg/mL, 80 mg/2 mL vials; 0.3% eye drops/ointment", "manufacturer": "Schering-Plough (Merck)", "region": "USA, UK, Europe, Global" },
      { "name": "Gentak", "form": "Ophthalmic Solution/Ointment", "strengths": "0.3% drops", "manufacturer": "Akorn (Novartis)", "region": "USA" },
      { "name": "Cidomycin", "form": "IV/IM Injection, Eye/Ear Drops", "strengths": "20 mg, 40 mg, 80 mg vials; 0.3% drops", "manufacturer": "Sanofi-Aventis", "region": "UK, Europe, Asia, Pakistan" },
      { "name": "Gentamicin", "form": "IV/IM Injection, Eye/Ear Drops", "strengths": "20 mg, 40 mg, 80 mg IM/IV", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "G-Mycin", "form": "Injection", "strengths": "20 mg, 40 mg, 80 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Other Nephrotoxins (Aminoglycosides, Vancomycin, Amphotericin)", "effect": "Additive nephrotoxicity.", "severity": "Major" },
      { "drugClass": "Loop Diuretics (Furosemide)", "effect": "Increased ototoxicity and nephrotoxicity.", "severity": "Major" },
      { "drugClass": "Neuromuscular Blockers (Succinylcholine, Vecuronium)", "effect": "Prolonged neuromuscular blockade.", "severity": "Major" },
      { "drugClass": "Platinum Agents (Cisplatin)", "effect": "Additive nephrotoxicity and ototoxicity.", "severity": "Major" },
      { "drugClass": "Penicillins", "effect": "Synergistic bactericidal (separate administration).", "severity": "Beneficial" },
      { "drugClass": "Cyclosporine, Tacrolimus", "effect": "Increased nephrotoxicity.", "severity": "Major" }
    ],
    "warning": "BLACK BOX: Nephrotoxicity (monitor SCr) and ototoxicity (vestibular and cochlear, may be irreversible). Neuromuscular blockade risk. Therapeutic drug monitoring essential. Once-daily dosing preferred. Pregnancy category D. Avoid in myasthenia gravis.",
    "subCategoryId": "aminoglycosides"
  },
  {
    "id": "amikacin",
    "categoryId": "antibiotics",
    "genericName": "Amikacin",
    "brandNames": "Amikin, Amikacin, Amika, Amikin, Mikacin, Amicacin",
    "description": "Aminoglycoside with broadest spectrum including significant activity against gentamicin-resistant organisms. Most resistant to aminoglycoside-inactivating enzymes. Used for MDR Gram-negative infections including resistant Pseudomonas and TB.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "MDR Gram-Negative Infections",
    "dosageForm": "IV/IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "15-20 mg/kg IV q24h (once-daily)", "sub": "Multiple daily: 5-7.5 mg/kg q8-12h" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~2-3 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "MDR Gram-negative infections, Pseudomonas, HAP/VAP, complicated UTI, septicemia, TB (second-line), NTM infections, febrile neutropenia", "sub": null },
      { "label": "MONITORING", "value": "Trough: <4-8 mcg/mL (once-daily)", "sub": "Peak: 40-60 mcg/mL" }
    ],
    "brandTable": [
      { "name": "Amikin", "form": "IV/IM Injection", "strengths": "100 mg/2 mL, 500 mg/2 mL, 1 g/4 mL vials", "manufacturer": "Bristol-Myers Squibb", "region": "USA, UK, Europe, Global" },
      { "name": "Amikacin", "form": "IV/IM Injection", "strengths": "100 mg/2 mL, 250 mg/mL, 500 mg/2 mL vials", "manufacturer": "Various (Generic)", "region": "USA, Global" },
      { "name": "Amika", "form": "IV/IM Injection", "strengths": "100 mg, 250 mg, 500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Mikacin", "form": "Injection", "strengths": "100 mg, 250 mg, 500 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Amicacin", "form": "IV/IM Injection", "strengths": "100 mg, 500 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Loop Diuretics (Furosemide)", "effect": "Increased ototoxicity and nephrotoxicity.", "severity": "Major" },
      { "drugClass": "Other Nephrotoxins", "effect": "Additive nephrotoxicity.", "severity": "Major" },
      { "drugClass": "Neuromuscular Blockers", "effect": "Prolonged neuromuscular blockade.", "severity": "Major" },
      { "drugClass": "Beta-Lactams", "effect": "Synergistic effect; physical inactivation if mixed.", "severity": "Beneficial" },
      { "drugClass": "Amphotericin B", "effect": "Additive nephrotoxicity.", "severity": "Major" },
      { "drugClass": "Platinum Agents", "effect": "Additive ototoxicity.", "severity": "Major" }
    ],
    "warning": "BLACK BOX: Nephrotoxicity, ototoxicity (irreversible), neuromuscular blockade. Therapeutic drug monitoring essential. Synergistic with beta-lactams but do not mix in same IV line. Dose adjustment in renal impairment. Longer post-antibiotic effect than gentamicin.",
    "subCategoryId": "aminoglycosides"
  },
  {
    "id": "tobramycin",
    "categoryId": "antibiotics",
    "genericName": "Tobramycin",
    "brandNames": "Tobrex, Nebcin, TOBI, Bethkis, Kitabis, Tobrasol",
    "description": "Aminoglycoside with enhanced anti-Pseudomonal activity compared to gentamicin. Available in IV, ophthalmic, and inhaled formulations. Inhaled tobramycin is first-line for Pseudomonas in cystic fibrosis.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Pseudomonas Infections and CF",
    "dosageForm": "IV/IM Injection/Ophthalmic/Inhaled Solution",
    "stats": [
      { "label": "STANDARD IV DOSE", "value": "5-7 mg/kg IV q24h (once-daily)", "sub": "Multiple daily: 1-2.5 mg/kg q8h" },
      { "label": "INHALED DOSE", "value": "300 mg BID (TOBI) via nebulizer", "sub": "28 days on/28 days off cycle for CF" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~2-3 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Pseudomonas infections, HAP/VAP, complicated UTI, cystic fibrosis (inhaled), ophthalmic infections, septicemia", "sub": null }
    ],
    "brandTable": [
      { "name": "TOBI", "form": "Inhaled Solution", "strengths": "300 mg/5 mL ampules (nebulized)", "manufacturer": "Novartis", "region": "USA, Europe, Global" },
      { "name": "Bethkis", "form": "Inhaled Solution", "strengths": "300 mg/4 mL ampules", "manufacturer": "Chiesi", "region": "USA" },
      { "name": "Nebcin", "form": "IV/IM Injection, Inhaled", "strengths": "20 mg, 40 mg, 80 mg vials", "manufacturer": "Eli Lilly", "region": "USA, UK, Europe, Global" },
      { "name": "Tobrex", "form": "Ophthalmic Solution/Ointment", "strengths": "0.3% drops; 0.3% ointment", "manufacturer": "Alcon (Novartis)", "region": "USA, Global" },
      { "name": "Tobramycin", "form": "IV/IM Injection, Inhaled Solution", "strengths": "20 mg, 40 mg, 80 mg vials; 300 mg inhaled", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Loop Diuretics (Furosemide)", "effect": "Increased ototoxicity risk.", "severity": "Major" },
      { "drugClass": "Other Nephrotoxins", "effect": "Additive nephrotoxicity.", "severity": "Major" },
      { "drugClass": "Neuromuscular Blockers", "effect": "Prolonged neuromuscular blockade.", "severity": "Major" },
      { "drugClass": "Penicillins/Cephalosporins", "effect": "Synergistic (separate IV lines).", "severity": "Beneficial" },
      { "drugClass": "Vancomycin", "effect": "Additive nephrotoxicity and ototoxicity.", "severity": "Major" },
      { "drugClass": "Amphotericin B", "effect": "Additive nephrotoxicity.", "severity": "Major" }
    ],
    "warning": "BLACK BOX: Same aminoglycoside class warnings. Inhaled tobramycin not for systemic infections - localized to airways. Bronchospasm with inhaled form - pre-treat with bronchodilator. Therapeutic drug monitoring for IV form. Pregnancy category D.",
    "subCategoryId": "aminoglycosides"
  },
  {
    "id": "neomycin",
    "categoryId": "antibiotics",
    "genericName": "Neomycin",
    "brandNames": "Neo-fradin, Mycifradin, Neosporin (combination), Neo-Rx, Nivemycin, Neomycin Sulfate",
    "description": "Aminoglycoside too toxic for systemic use. Used topically for skin infections, orally for GI decontamination (hepatic encephalopathy, bowel surgery preparation), and in combination products for wound care.",
    "status": "OTC + Rx",
    "isCommonlyPrescribed": true,
    "isOTCAndRx": true,
    "primaryIndication": "Topical and GI Decontamination",
    "dosageForm": "Oral Tablets/Solution/Topical Ointment/Cream",
    "stats": [
      { "label": "ORAL DOSE (HE)", "value": "1-3 g TID for hepatic encephalopathy", "sub": "Short-term use: 7-14 days" },
      { "label": "ORAL DOSE (BOWEL PREP)", "value": "1 g q1h x 4 doses, then q4h x 5 doses", "sub": "In combination with erythromycin base" },
      { "label": "CLINICAL INDICATIONS", "value": "Hepatic encephalopathy (oral), bowel surgery preparation (oral), superficial skin infections (topical), wound care (topical combination products)", "sub": null },
      { "label": "TOPICAL", "value": "Neomycin/polymyxin/bacitracin", "sub": "OTC triple antibiotic ointment" }
    ],
    "brandTable": [
      { "name": "Neo-fradin", "form": "Oral Tablets, Oral Solution", "strengths": "500 mg tabs; 125 mg/5 mL solution", "manufacturer": "Various", "region": "USA" },
      { "name": "Mycifradin", "form": "Oral Tablets", "strengths": "500 mg", "manufacturer": "Pharmacia (Pfizer)", "region": "USA" },
      { "name": "Neosporin", "form": "Topical Ointment/Cream (Triple)", "strengths": "Neomycin + polymyxin B + bacitracin", "manufacturer": "J&J", "region": "USA, Global" },
      { "name": "Nivemycin", "form": "Oral Tablets, Topical", "strengths": "500 mg tabs; topical cream", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Neomycin Sulfate", "form": "Oral Tablets, Topical Ointment", "strengths": "500 mg tabs; 3.5 mg/g, 5 mg/g ointment", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Other Aminoglycosides (Systemic)", "effect": "Additive systemic toxicity if absorbed (prolonged high-dose oral).", "severity": "Major" },
      { "drugClass": "Neuromuscular Blockers", "effect": "Prolonged neuromuscular blockade (oral and topical).", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR (reduced vitamin K from gut flora).", "severity": "Moderate" },
      { "drugClass": "Loop Diuretics", "effect": "Increased ototoxicity (systemic absorption).", "severity": "Moderate" },
      { "drugClass": "Digoxin", "effect": "Reduced digoxin absorption (oral).", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" }
    ],
    "warning": "Not for systemic injection (severe nephrotoxicity/ototoxicity). Oral use in hepatic encephalopathy: monitor for systemic absorption. Topical: contact dermatitis common (allergic sensitization). Avoid prolonged high-dose oral use. Use caution in renal impairment.",
    "subCategoryId": "aminoglycosides"
  },
  {
    "id": "streptomycin",
    "categoryId": "antibiotics",
    "genericName": "Streptomycin",
    "brandNames": "Streptomycin, Streptomycin Sulfate, Strepto-Fatol, Streptomycin Intramuscular",
    "description": "First aminoglycoside discovered (1943). Used primarily as second-line anti-TB drug and for enterococcal endocarditis (synergy). Declining use due to resistance and availability of better-tolerated aminoglycosides.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "TB (Second-Line) and Endocarditis",
    "dosageForm": "IM Injection",
    "stats": [
      { "label": "TB DOSE", "value": "15 mg/kg IM once daily (max 1 g)", "sub": "May be given 5-7 days/week" },
      { "label": "ENDOCARDITIS DOSE", "value": "7.5 mg/kg IM q12h or 15 mg/kg q24h", "sub": "In combination with penicillin or vancomycin" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 hours peak (IM)", "sub": "~2-3 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "TB (second-line agent), enterococcal endocarditis (synergy), plague, tularemia, brucellosis, TB meningitis", "sub": null }
    ],
    "brandTable": [
      { "name": "Streptomycin Sulfate", "form": "IM Injection", "strengths": "1 g vials", "manufacturer": "Pfizer / Sandoz", "region": "USA, Global" },
      { "name": "Strepto-Fatol", "form": "IM Injection", "strengths": "1 g vials", "manufacturer": "Fatol (Germany)", "region": "Europe" },
      { "name": "Streptomycin", "form": "IM Injection", "strengths": "500 mg, 1 g, 5 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia, Global" },
      { "name": "Streptomycin Sulfate (Pakistan)", "form": "IM Injection", "strengths": "1 g/3 mL vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Loop Diuretics", "effect": "Increased ototoxicity risk.", "severity": "Major" },
      { "drugClass": "Other Nephrotoxins", "effect": "Additive nephrotoxicity.", "severity": "Major" },
      { "drugClass": "Neuromuscular Blockers", "effect": "Prolonged neuromuscular blockade.", "severity": "Major" },
      { "drugClass": "Other Anti-TB Drugs", "effect": "Additive ototoxicity (especially with capreomycin).", "severity": "Major" },
      { "drugClass": "Penicillins", "effect": "Synergistic for enterococcal endocarditis.", "severity": "Beneficial" },
      { "drugClass": "Foscarnet", "effect": "Increased nephrotoxicity.", "severity": "Major" }
    ],
    "warning": "BLACK BOX: Ototoxicity (vestibular > cochlear) - monitor audiometry. Nephrotoxicity. Pregnancy category D - contraindicated. IM use only (not IV). Pain at injection site. Neuromuscular blockade risk. Cross-resistance with other aminoglycosides. Reserve for TB/endocarditis.",
    "subCategoryId": "aminoglycosides"
  },
  {
    "id": "meropenem",
    "categoryId": "antibiotics",
    "genericName": "Meropenem",
    "brandNames": "Merrem, Meronem, Meropen, Merobact, Ronem, Merox",
    "description": "Broad-spectrum carbapenem antibiotic with excellent activity against Gram-positive, Gram-negative, and anaerobic organisms. Used for severe hospital-acquired infections and febrile neutropenia. More stable than imipenem to renal dehydropeptidase (no cilastatin needed).",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Severe Hospital Infections",
    "dosageForm": "IV Injection/Infusion",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "500 mg - 1 g IV q8h", "sub": "Meningitis: 2 g IV q8h" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~1 hour half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "HAP/VAP, complicated IAI, complicated UTI, febrile neutropenia, meningitis, septicemia, ESBL-producing organisms, mixed infections", "sub": null },
      { "label": "RENAL ADJUSTMENT", "value": "CrCl 26-50: q12h; CrCl 10-25: q24h", "sub": "CrCl <10: q48h" }
    ],
    "brandTable": [
      { "name": "Merrem", "form": "IV Injection", "strengths": "500 mg, 1 g vials", "manufacturer": "AstraZeneca", "region": "USA, Global" },
      { "name": "Meronem", "form": "IV Injection/Infusion", "strengths": "500 mg, 1 g vials; 1 g/100 mL infusion", "manufacturer": "AstraZeneca", "region": "UK, Europe, Asia, Pakistan" },
      { "name": "Meropen", "form": "IV Injection", "strengths": "500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Ronem", "form": "IV Injection", "strengths": "500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Merobact", "form": "IV Injection", "strengths": "500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Valproic Acid", "effect": "Markedly reduced valproate levels - loss of seizure control.", "severity": "Major" },
      { "drugClass": "Ganciclovir", "effect": "Increased seizure risk.", "severity": "Major" },
      { "drugClass": "Probenecid", "effect": "Increased meropenem levels.", "severity": "Minor" },
      { "drugClass": "Warfarin", "effect": "Increased INR risk (less than other beta-lactams).", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" }
    ],
    "warning": "Seizure risk (lower than imipenem). C diff colitis risk. Cross-sensitivity with penicillins/cephalosporins. Significant reduction of valproate levels (avoid/use alternative). Extended infusion (3-hour) may improve outcomes for resistant organisms. Monitor renal function.",
    "subCategoryId": "carbapenems"
  },
  {
    "id": "imipenem-cilastatin",
    "categoryId": "antibiotics",
    "genericName": "Imipenem + Cilastatin",
    "brandNames": "Primaxin, Imicil, Tiepenem, Imipenem/Cilastatin, Cilaspen, Imipem",
    "description": "First carbapenem antibiotic. Combined with cilastatin (dehydropeptidase inhibitor) to prevent renal metabolism. Broadest spectrum antibiotic available. Used for severe polymicrobial infections including MDR organisms.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Severe Polymicrobial Infections",
    "dosageForm": "IV Injection/Infusion",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "500 mg IV q6h or 1 g IV q8h", "sub": "Max: 4 g/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~1 hour half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "HAP/VAP, complicated IAI, complicated UTI, septicemia, polymicrobial infections, ESBL-producing organisms, mixed aerobic/anaerobic infections, diabetic foot, osteomyelitis", "sub": null },
      { "label": "SEIZURE RISK", "value": "Higher seizure risk than meropenem", "sub": "Caution in CNS lesions, epilepsy, renal impairment" }
    ],
    "brandTable": [
      { "name": "Primaxin", "form": "IV Injection", "strengths": "250 mg/250 mg, 500 mg/500 mg vials", "manufacturer": "Merck (MSD)", "region": "USA, UK, Europe, Global" },
      { "name": "Imicil", "form": "IV Injection", "strengths": "500 mg/500 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Tiepenem", "form": "IV Injection", "strengths": "500 mg/500 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Cilaspen", "form": "IV Injection", "strengths": "500 mg/500 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan" },
      { "name": "Imipem", "form": "IV Injection", "strengths": "500 mg/500 mg", "manufacturer": "Various (Generic)", "region": "India, Asia" }
    ],
    "interactions": [
      { "drugClass": "Valproic Acid", "effect": "Markedly reduced valproate levels.", "severity": "Major" },
      { "drugClass": "Ganciclovir", "effect": "Increased seizure risk - avoid combination.", "severity": "Major" },
      { "drugClass": "Probenecid", "effect": "Increased imipenem levels.", "severity": "Minor" },
      { "drugClass": "Warfarin", "effect": "Increased INR risk.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" }
    ],
    "warning": "Seizure risk (highest among carbapenems) - especially with high doses, renal impairment, and CNS lesions. Cross-sensitivity with penicillins/cephalosporins. C diff colitis risk. Nausea/vomiting (infusion rate-related). Valproate interaction critical to monitor.",
    "subCategoryId": "carbapenems"
  },
  {
    "id": "ertapenem",
    "categoryId": "antibiotics",
    "genericName": "Ertapenem",
    "brandNames": "Invanz, Ertapenem, Ertapen, Ertabact, Elpen, Ertamax",
    "description": "Carbapenem with once-daily dosing. Excellent activity against Gram-positive, Gram-negative, and anaerobes. Not active against Pseudomonas or Acinetobacter. Used for community-acquired complicated infections requiring IV therapy.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Complicated Community Infections",
    "dosageForm": "IV/IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1 g IV/IM once daily", "sub": "Infuse over 30 min" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~4 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Complicated IAI, complicated SSSI, complicated UTI (including pyelonephritis), CAP, diabetic foot infections without osteomyelitis, pelvic infections, OPAT suitable", "sub": null },
      { "label": "RENAL ADJUSTMENT", "value": "CrCl <30: 500 mg once daily", "sub": "Hemodialysis: 500 mg daily" }
    ],
    "brandTable": [
      { "name": "Invanz", "form": "IV/IM Injection", "strengths": "1 g vials", "manufacturer": "Merck (MSD)", "region": "USA, UK, Europe, Global" },
      { "name": "Ertapen", "form": "IV/IM Injection", "strengths": "1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Ertabact", "form": "IV/IM Injection", "strengths": "1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Elpen", "form": "IV/IM Injection", "strengths": "1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan" },
      { "name": "Ertamax", "form": "IV/IM Injection", "strengths": "1 g vials", "manufacturer": "Various (Generic)", "region": "India, Asia" }
    ],
    "interactions": [
      { "drugClass": "Valproic Acid", "effect": "Reduced valproate levels (less than other carbapenems).", "severity": "Major" },
      { "drugClass": "Probenecid", "effect": "Increased ertapenem levels.", "severity": "Minor" },
      { "drugClass": "Warfarin", "effect": "Increased INR risk.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" },
      { "drugClass": "Ganciclovir", "effect": "Possible seizure risk (less than imipenem).", "severity": "Moderate" }
    ],
    "warning": "Once-daily dosing advantageous for OPAT. Not active against Pseudomonas or Acinetobacter. IM lidocaine-containing formulation reduces injection pain. Lower seizure risk than imipenem. Cross-sensitivity with penicillins. C diff colitis possible.",
    "subCategoryId": "carbapenems"
  },
  {
    "id": "doripenem",
    "categoryId": "antibiotics",
    "genericName": "Doripenem",
    "brandNames": "Doribax, Finibax, Doripen, Dorinem, Dorimax, Doricin",
    "description": "Carbapenem with enhanced anti-Pseudomonal activity. Similar spectrum to meropenem with slightly better Gram-negative coverage. Used for HAP/VAP and complicated infections. Withdrawn from US market (2014) for financial reasons.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "HAP/VAP and Complicated Infections",
    "dosageForm": "IV Infusion",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "500 mg IV q8h (infuse over 1 hour)", "sub": "Extended: 500 mg over 4 hours for Pseudomonas" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~1 hour half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "HAP/VAP, complicated IAI, complicated UTI (including pyelonephritis), Pseudomonas infections, septicemia, febrile neutropenia", "sub": null },
      { "label": "RENAL ADJUSTMENT", "value": "CrCl 30-50: 250 mg q8h", "sub": "CrCl <30: 250 mg q12h" }
    ],
    "brandTable": [
      { "name": "Doribax", "form": "IV Infusion", "strengths": "250 mg, 500 mg vials", "manufacturer": "Johnson & Johnson / Shionogi", "region": "USA (withdrawn), Global" },
      { "name": "Finibax", "form": "IV Infusion", "strengths": "250 mg, 500 mg vials", "manufacturer": "Shionogi", "region": "Japan, Asia" },
      { "name": "Doripen", "form": "IV Infusion", "strengths": "250 mg, 500 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Dorinem", "form": "IV Infusion", "strengths": "500 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Dorimax", "form": "IV Infusion", "strengths": "500 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Valproic Acid", "effect": "Reduced valproate levels.", "severity": "Major" },
      { "drugClass": "Probenecid", "effect": "Increased doripenem levels.", "severity": "Minor" },
      { "drugClass": "Warfarin", "effect": "Increased INR risk.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptives efficacy.", "severity": "Minor" },
      { "drugClass": "Methotrexate", "effect": "Decreased methotrexate clearance.", "severity": "Moderate" },
      { "drugClass": "Ganciclovir", "effect": "Seizure risk (less than imipenem).", "severity": "Moderate" }
    ],
    "warning": "Enhanced anti-Pseudomonal activity - may be preferred for Pseudomonas. Seizure risk (lower than imipenem). Cross-sensitivity with penicillins. Extended infusion recommended for resistant organisms. Withdrawn from US market (non-safety reasons). C diff colitis risk.",
    "subCategoryId": "carbapenems"
  },
  {
    "id": "vancomycin",
    "categoryId": "antibiotics",
    "genericName": "Vancomycin",
    "brandNames": "Vancocin, Vancoled, Firvanq, Vancomycin, Vancogen, Lyphocin",
    "description": "Glycopeptide antibiotic active against Gram-positive organisms including MRSA. First-line for serious MRSA infections. Inhibits cell wall synthesis. Requires therapeutic drug monitoring for efficacy and safety. Oral form for C. difficile colitis.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "MRSA and C. Difficile Infections",
    "dosageForm": "IV Injection/Oral Capsules/Oral Solution",
    "stats": [
      { "label": "STANDARD IV DOSE", "value": "15-20 mg/kg q8-12h (based on actual body weight)", "sub": "Max: 2 g/dose in normal renal function" },
      { "label": "ORAL CDI DOSE", "value": "125 mg QID (oral capsules/solution)", "sub": "Severe CDI: 500 mg QID oral" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~4-8 hours half-life (normal renal)" },
      { "label": "MONITORING", "value": "Trough: 15-20 mcg/mL (serious MRSA)", "sub": "Trough: 10-15 mcg/mL (uncomplicated)" }
    ],
    "brandTable": [
      { "name": "Vancocin", "form": "IV Injection, Oral Capsules", "strengths": "500 mg, 750 mg, 1 g, 10 g vials; 125 mg, 250 mg oral caps", "manufacturer": "ViroPharma (Shire)", "region": "USA, UK, Europe, Global" },
      { "name": "Firvanq", "form": "Oral Solution (Reconstituted)", "strengths": "25 mg/mL, 50 mg/mL oral solution", "manufacturer": "Cutis Pharma", "region": "USA" },
      { "name": "Vancogen", "form": "IV Injection", "strengths": "500 mg, 1 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Vancomycin", "form": "IV Injection, Oral Capsules", "strengths": "500 mg, 1 g vials; 125 mg, 250 mg caps", "manufacturer": "Various (Generic)", "region": "Global" },
      { "name": "Lyphocin", "form": "IV Injection", "strengths": "500 mg, 1 g, 5 g, 10 g vials", "manufacturer": "Various", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "Aminoglycosides (Gentamicin, Tobramycin)", "effect": "Additive nephrotoxicity and ototoxicity.", "severity": "Major" },
      { "drugClass": "Loop Diuretics", "effect": "Increased ototoxicity risk.", "severity": "Major" },
      { "drugClass": "NSAIDs", "effect": "Increased nephrotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Amphotericin B", "effect": "Additive nephrotoxicity.", "severity": "Major" },
      { "drugClass": "Piperacillin-Tazobactam", "effect": "Increased acute kidney injury risk with combination.", "severity": "Major" },
      { "drugClass": "Cyclosporine/Tacrolimus", "effect": "Additive nephrotoxicity.", "severity": "Major" }
    ],
    "warning": "Infusion-related reactions: Red Man Syndrome (histamine release - slow infusion, pre-treat with antihistamines). Nephrotoxicity (monitor SCr). Ototoxicity (tinnitus, high-frequency hearing loss) - especially with high levels. TDM essential. Pregnancy category C.",
    "subCategoryId": "others"
  },
  {
    "id": "metronidazole",
    "categoryId": "antibiotics",
    "genericName": "Metronidazole",
    "brandNames": "Flagyl, MetroGel, Metrogyl, Rozex, Nidazole, Norzol",
    "description": "Nitroimidazole antibiotic with potent anaerobic and antiprotozoal activity. Drug of choice for anaerobic infections (Bacteroides, Clostridium), bacterial vaginosis, trichomoniasis, and amebiasis. Also used for H. pylori (in combination).",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Anaerobic and Protozoal Infections",
    "dosageForm": "Oral Tablets/IV Injection/Topical/Vaginal",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-500 mg TID (oral) or 500 mg IV q8h", "sub": "Max: 4 g/day (short-term)" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 hours peak (oral)", "sub": "~8 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Intra-abdominal infections, bacterial vaginosis, trichomoniasis, amebiasis, giardiasis, H. pylori (combination), anaerobic pneumonia, brain abscess, C. difficile (alternate)", "sub": null },
      { "label": "TOPICAL", "value": "0.75-1% gel/cream", "sub": "Rosacea, BV gel" }
    ],
    "brandTable": [
      { "name": "Flagyl", "form": "Tablets, IV Injection, Capsules", "strengths": "250 mg, 500 mg tabs; 500 mg/100 mL IV; 375 mg caps", "manufacturer": "Pfizer (Pharmacia)", "region": "USA, UK, Europe, Global" },
      { "name": "Metrogyl", "form": "Tablets, IV Infusion, Gel, Suspension", "strengths": "200 mg, 400 mg tabs; 500 mg/100 mL IV; 1% gel; 200 mg/5 mL susp.", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Rozex", "form": "Topical Gel, Cream", "strengths": "0.75% gel, 1% cream", "manufacturer": "Galderma", "region": "Europe, Asia, Pakistan" },
      { "name": "Nidazole", "form": "Tablets, IV Infusion, Suspension", "strengths": "200 mg, 400 mg; IV 500 mg; 200 mg/5 mL susp.", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Norzol", "form": "Tablets, IV, Topical", "strengths": "200 mg, 400 mg tabs; 500 mg IV; 0.5% gel", "manufacturer": "Various (Generic)", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Alcohol", "effect": "SEVERE disulfiram-like reaction (nausea, vomiting, hypotension).", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR - significant bleeding risk.", "severity": "Major" },
      { "drugClass": "Lithium", "effect": "Increased lithium levels.", "severity": "Moderate" },
      { "drugClass": "Phenytoin", "effect": "Increased phenytoin levels.", "severity": "Moderate" },
      { "drugClass": "Phenobarbital", "effect": "Reduced metronidazole levels (CYP induction).", "severity": "Moderate" },
      { "drugClass": "Disulfiram", "effect": "Psychotic reactions - avoid combination.", "severity": "Major" }
    ],
    "warning": "Avoid alcohol during therapy and 48 hours after (disulfiram-like reaction). Metallic taste common. Prolonged use may cause peripheral neuropathy (dose-limiting). Pregnancy category B (avoid in first trimester). Monitor INR with warfarin. Carcinogenic in animal studies (long-term use).",
    "subCategoryId": "others"
  },
  {
    "id": "clindamycin",
    "categoryId": "antibiotics",
    "genericName": "Clindamycin",
    "brandNames": "Cleocin, Dalacin, Clindamax, Clindacin, Daccin, Clinda-T",
    "description": "Lincosamide antibiotic active against Gram-positive cocci and anaerobes. Excellent bone penetration. Used for skin infections, diabetic foot infections, bone/joint infections, and anaerobic infections above the diaphragm.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Anaerobic and Skin Infections",
    "dosageForm": "Oral Capsules/IV Injection/Topical/Vaginal",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "150-450 mg QID (oral) or 600-900 mg IV q8h", "sub": "Max: 2.7 g/day IV" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 hours peak (oral)", "sub": "~2-3 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "ABSSSI, diabetic foot infections, osteomyelitis, septic arthritis, anaerobic lung abscess, aspiration pneumonia, dental infections, malaria (combination), toxoplasmosis (with pyrimethamine), acne (topical), BV (vaginal)", "sub": null },
      { "label": "TOPICAL", "value": "1% gel/lotion/solution", "sub": "Acne vulgaris" }
    ],
    "brandTable": [
      { "name": "Cleocin", "form": "Capsules, IV Injection, Topical, Vaginal", "strengths": "75 mg, 150 mg, 300 mg caps; 900 mg/60 mL, 600 mg/4 mL vials; 1% gel; 2% vaginal cream", "manufacturer": "Pfizer (Pharmacia)", "region": "USA, Global" },
      { "name": "Dalacin", "form": "Capsules, IV Injection, Topical, Vaginal", "strengths": "150 mg, 300 mg caps; 300 mg/2 mL, 600 mg/4 mL vials; 1% gel", "manufacturer": "Pfizer", "region": "Europe, Asia, Pakistan" },
      { "name": "Clindamax", "form": "Capsules, Injection, Topical Gel", "strengths": "150 mg, 300 mg caps; 300 mg, 600 mg vials; 1% gel", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Daccin", "form": "Capsules, Injection", "strengths": "150 mg, 300 mg caps; 600 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Clinda-T", "form": "Topical Gel, Solution", "strengths": "1% gel, 1% solution", "manufacturer": "Various", "region": "USA, Global" }
    ],
    "interactions": [
      { "drugClass": "Neuromuscular Blockers", "effect": "Prolonged neuromuscular blockade.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR - bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Kaolin-Pectin", "effect": "Reduced clindamycin absorption.", "severity": "Moderate" },
      { "drugClass": "Erythromycin", "effect": "Possible antagonism (same ribosomal binding site).", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" },
      { "drugClass": "Cyclosporine", "effect": "Possible reduced cyclosporine levels.", "severity": "Minor" }
    ],
    "warning": "C. difficile colitis risk (highest among antibiotics - all forms including topical). May occur weeks after stopping. Pregnancy category B (vaginal cream avoid in second/third trimester). Rapid IV infusion may cause hypotension/cardiac arrest. No renal adjustment needed.",
    "subCategoryId": "others"
  },
  {
    "id": "daptomycin",
    "categoryId": "antibiotics",
    "genericName": "Daptomycin",
    "brandNames": "Cubicin, Cubicin RF, Daptomycin, Dapcin, Dapto, Mycin-D",
    "description": "Lipopeptide antibiotic with rapid, concentration-dependent bactericidal activity against Gram-positive organisms including MRSA, VRE, and daptomycin-susceptible strains. Unique mechanism - depolarizes bacterial cell membrane. First-line for MRSA bloodstream infections and right-sided endocarditis.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "MRSA Bloodstream and Right-Sided Endocarditis",
    "dosageForm": "IV Injection/Infusion",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "4-6 mg/kg IV q24h", "sub": "Endocarditis/MRSA: 8-10 mg/kg q24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Immediate (IV)", "sub": "~8-9 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Complicated SSSI (MRSA), MRSA bloodstream infections, right-sided S. aureus endocarditis, VRE infections, osteomyelitis (off-label at higher doses)", "sub": null },
      { "label": "MONITORING", "value": "CPK weekly (myopathy risk)", "sub": "Trough: not routinely monitored" }
    ],
    "brandTable": [
      { "name": "Cubicin", "form": "IV Injection", "strengths": "350 mg, 500 mg vials", "manufacturer": "Cubist (Merck)", "region": "USA, UK, Europe, Global" },
      { "name": "Cubicin RF", "form": "IV Injection (Refrigerator-Free)", "strengths": "500 mg vials", "manufacturer": "Merck", "region": "USA" },
      { "name": "Dapcin", "form": "IV Injection", "strengths": "350 mg, 500 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Dapto", "form": "IV Injection", "strengths": "350 mg, 500 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Daptomycin", "form": "IV Injection", "strengths": "350 mg, 500 mg vials", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "HMG-CoA Reductase Inhibitors (Statins)", "effect": "Additive myopathy/skeletal muscle toxicity risk.", "severity": "Major" },
      { "drugClass": "Aminoglycosides", "effect": "Synergistic for enterococci; additive nephrotoxicity.", "severity": "Moderate" },
      { "drugClass": "Warfarin", "effect": "No significant interaction.", "severity": "Minor" },
      { "drugClass": "Tobramycin", "effect": "Synergistic for enterococci; monitoring recommended.", "severity": "Moderate" },
      { "drugClass": "Other Nephrotoxins", "effect": "Additive nephrotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Beta-Lactams", "effect": "Synergistic with certain beta-lactams for MRSA.", "severity": "Beneficial" }
    ],
    "warning": "CPK elevation - monitor weekly (more often if high-dose or on statins). Myopathy/rhabdomyolysis risk. Eosinophilic pneumonia (rare but serious). Not effective for pneumonia (inactivated by pulmonary surfactant). Pregnancy category B. Infuse over 30 min.",
    "subCategoryId": "others"
  },
  {
    "id": "linezolid",
    "categoryId": "antibiotics",
    "genericName": "Linezolid",
    "brandNames": "Zyvox, Zyvoxid, Linospan, Linozolid, Zyrox, Linoz",
    "description": "Oxazolidinone antibiotic effective against Gram-positive organisms including MRSA and VRE. Excellent bioavailability (100% oral). Unique mechanism (protein synthesis inhibition at 50S subunit). First-line for VRE and alternative for MRSA.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "MRSA and VRE Infections",
    "dosageForm": "Oral Tablets/Suspension/IV Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "600 mg q12h (oral or IV)", "sub": "Max: 1,200 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 hours peak (oral)", "sub": "~5-7 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "MRSA pneumonia (HAP/CAP), complicated SSSI (including MRSA), VRE infections, osteomyelitis, diabetic foot infections", "sub": null },
      { "label": "PEDIATRIC", "value": "10 mg/kg TID (neonates-infants)", "sub": "10 mg/kg q8h (children 1-12 yrs)" }
    ],
    "brandTable": [
      { "name": "Zyvox", "form": "Tablets, IV Injection, Oral Suspension", "strengths": "400 mg, 600 mg tabs; 200 mg/100 mL, 400 mg/200 mL, 600 mg/300 mL IV; 100 mg/5 mL susp.", "manufacturer": "Pfizer (Pharmacia)", "region": "USA, UK, Europe, Global" },
      { "name": "Zyvoxid", "form": "Tablets, IV Infusion, Oral Suspension", "strengths": "600 mg tabs; 600 mg/300 mL IV; 100 mg/5 mL susp.", "manufacturer": "Pfizer", "region": "Europe, Asia, Pakistan" },
      { "name": "Linospan", "form": "Tablets, IV Infusion", "strengths": "600 mg tabs; 600 mg/300 mL IV", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Linozolid", "form": "Tablets, IV Infusion", "strengths": "600 mg; 600 mg/300 mL IV", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Zyrox", "form": "Tablets, IV Infusion", "strengths": "600 mg; 600 mg/300 mL IV", "manufacturer": "Various (Generic)", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors (MAOIs)", "effect": "Additive MAO inhibition - hypertensive crisis.", "severity": "Major" },
      { "drugClass": "SSRIs, SNRIs, TCAs, Bupropion", "effect": "Serotonin syndrome risk.", "severity": "Major" },
      { "drugClass": "Sympathomimetics (Pseudoephedrine, Adrenaline)", "effect": "Enhanced pressor response.", "severity": "Moderate" },
      { "drugClass": "Warfarin", "effect": "No significant CYP interaction.", "severity": "Minor" },
      { "drugClass": "Tyramine-Rich Foods (Aged Cheese, Wine, Cured Meats)", "effect": "Increased tyramine pressor response.", "severity": "Moderate" },
      { "drugClass": "Meperidine (Pethidine)", "effect": "Serotonin syndrome risk.", "severity": "Major" }
    ],
    "warning": "Myelosuppression (thrombocytopenia > anemia > leukopenia) - monitor CBC weekly, especially with therapy >2 weeks. Serotonin syndrome risk with serotonergic drugs. Lactic acidosis (prolonged use). Peripheral/optic neuropathy (prolonged use). MAOI activity - avoid tyramine-rich foods. Pregnancy category C.",
    "subCategoryId": "others"
  },
  {
    "id": "nitrofurantoin",
    "categoryId": "antibiotics",
    "genericName": "Nitrofurantoin",
    "brandNames": "Macrobid, Macrodantin, Furadantin, Macrofuran, Nitroplus, Urolisa",
    "description": "Urinary-specific antibiotic. Active only in acidic urine after renal excretion. First-line for uncomplicated UTIs and prophylaxis. Multiple mechanisms of action reduce resistance development. Not for pyelonephritis or tissue infection.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Uncomplicated UTI",
    "dosageForm": "Oral Capsules/Suspension",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "100 mg BID (Macrobid) or 50-100 mg QID (Macrodantin)", "sub": "Prophylaxis: 50-100 mg once daily" },
      { "label": "ONSET / HALF-LIFE", "value": "1-3 hours peak", "sub": "~20-60 min half-life (rapid renal excretion)" },
      { "label": "CLINICAL INDICATIONS", "value": "Uncomplicated UTI (cystitis), UTI prophylaxis (recurrent UTIs)", "sub": null },
      { "label": "RENAL CONTRAINDICATION", "value": "CrCl <30 or <60 (macrocrystal)", "sub": "Ineffective in renal impairment" }
    ],
    "brandTable": [
      { "name": "Macrobid", "form": "Capsules (Monohydrate/Macrocrystals)", "strengths": "100 mg (25 mg + 75 mg)", "manufacturer": "Procter & Gamble / Almatica", "region": "USA, Global" },
      { "name": "Macrodantin", "form": "Capsules (Macrocrystals)", "strengths": "25 mg, 50 mg, 100 mg", "manufacturer": "Procter & Gamble", "region": "USA, Europe" },
      { "name": "Furadantin", "form": "Oral Suspension", "strengths": "25 mg/5 mL suspension", "manufacturer": "Various", "region": "USA, Europe" },
      { "name": "Nitroplus", "form": "Capsules", "strengths": "100 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Urolisa", "form": "Capsules, Suspension", "strengths": "50 mg, 100 mg caps; 25 mg/5 mL susp.", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Antacids (Mg-containing)", "effect": "Reduced nitrofurantoin absorption.", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Reduced renal secretion - increased toxicity risk.", "severity": "Moderate" },
      { "drugClass": "Sulfinpyrazone", "effect": "Reduced renal secretion.", "severity": "Moderate" },
      { "drugClass": "Quinolones", "effect": "In vitro antagonism - avoid combination.", "severity": "Minor" },
      { "drugClass": "Warfarin", "effect": "Possible increased INR.", "severity": "Minor" },
      { "drugClass": "Magnesium Trisilicate", "effect": "Reduced absorption of nitrofurantoin.", "severity": "Moderate" }
    ],
    "warning": "Contraindicated in CrCl <30 mL/min (ineffective, increased neurotoxicity). Pulmonary reactions (acute, subacute, chronic - most serious adverse effect). Hepatotoxicity. Peripheral neuropathy. Haemolytic anaemia in G6PD deficiency. Brown discolouration of urine (harmless). Pregnancy category B (avoid at term).",
    "subCategoryId": "others"
  },
  {
    "id": "trimethoprim-sulfamethoxazole",
    "categoryId": "antibiotics",
    "genericName": "Trimethoprim + Sulfamethoxazole",
    "brandNames": "Bactrim, Septra, Cotrimoxazole, Co-Trimoxazole, Sulfatrim, Septrin",
    "description": "Folate synthesis inhibitor combination (dihydrofolate reductase + dihydropteroate synthetase). Broad-spectrum including MRSA, Pneumocystis jirovecii, and Nocardia. First-line for UTI, PCP, and alternative for MRSA skin infections.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "UTIs and PCP",
    "dosageForm": "Oral Tablets/Suspension/IV Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 DS tabs (160/800 mg) BID", "sub": "PCP: 15-20 mg/kg/day TMP divided q6-8h" },
      { "label": "ONSET / HALF-LIFE", "value": "1-4 hours peak (oral)", "sub": "~8-14 hours half-life (both components)" },
      { "label": "CLINICAL INDICATIONS", "value": "UTI, acute otitis media, acute bronchitis, MRSA SSSI, PCP (treatment and prophylaxis), toxoplasmosis prophylaxis, nocardiosis, Shigella enteritis, travelers diarrhea, Stenotrophomonas, Listeria", "sub": null },
      { "label": "RENAL ADJUSTMENT", "value": "CrCl 15-30: 50% dose", "sub": "CrCl <15: contraindicated" }
    ],
    "brandTable": [
      { "name": "Bactrim", "form": "Tablets, DS Tablets, Suspension, IV", "strengths": "80/400 mg, 160/800 mg (DS) tabs; 40/200 mg/5 mL susp; 80/400 mg/5 mL IV", "manufacturer": "Roche", "region": "USA, UK, Europe, Global" },
      { "name": "Septra", "form": "Tablets, DS Tablets, Suspension, IV", "strengths": "80/400 mg, 160/800 mg tabs; 40/200 mg/5 mL susp.", "manufacturer": "GSK (Burroughs Wellcome)", "region": "USA, UK, Europe" },
      { "name": "Septrin", "form": "Tablets, DS, Suspension, IV", "strengths": "80/400 mg, 160/800 mg; 40/200 mg/5 mL susp.", "manufacturer": "GSK", "region": "UK, Europe, Asia, Pakistan" },
      { "name": "Cotrimoxazole", "form": "Tablets, DS, Suspension, Injection", "strengths": "80/400 mg, 160/800 mg; 40/200 mg/5 mL susp.", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Sulfatrim", "form": "Oral Suspension", "strengths": "40/200 mg/5 mL", "manufacturer": "Various", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Markedly increased INR - bleeding risk.", "severity": "Major" },
      { "drugClass": "ACE Inhibitors", "effect": "Increased risk of hyperkalemia.", "severity": "Major" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate toxicity (folate antagonism).", "severity": "Major" },
      { "drugClass": "Phenytoin", "effect": "Increased phenytoin half-life.", "severity": "Moderate" },
      { "drugClass": "Sulfonylureas", "effect": "Increased hypoglycemic effect.", "severity": "Moderate" },
      { "drugClass": "Thiazide Diuretics", "effect": "Increased thrombocytopenia risk (elderly).", "severity": "Moderate" }
    ],
    "warning": "Severe hypersensitivity reactions (SJS/TEN - especially HIV patients). Hyperkalemia (trimethoprim component inhibits renal K+ excretion). Folate deficiency with prolonged use - supplement with folinic acid. G6PD deficiency: hemolytic anemia. Photosensitivity. Pregnancy category C/D at term.",
    "subCategoryId": "others"
  },
  {
    "id": "chloramphenicol",
    "categoryId": "antibiotics",
    "genericName": "Chloramphenicol",
    "brandNames": "Chloromycetin, Kemicetine, Paraxin, Chloroptic, Chlorsig, Chlorocol",
    "description": "Broad-spectrum antibiotic effective against Gram-positive, Gram-negative, anaerobes, and rickettsia. Rarely used systemically due to dose-dependent bone marrow toxicity. Still widely used in developing countries and as topical ophthalmic preparation.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Ophthalmic and Limited Systemic",
    "dosageForm": "Oral Capsules/IV Injection/Ophthalmic/Topical",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "50-100 mg/kg/day divided q6h (systemic)", "sub": "Max: 4 g/day" },
      { "label": "ONSET / HALF-LIFE", "value": "1-3 hours peak (oral)", "sub": "~1.5-4 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Ophthalmic infections (conjunctivitis, keratitis), typhoid fever (alternate), meningitis (H. influenzae, N. meningitidis), RMSF, anaerobic infections, plague, CSF penetration for brain abscess", "sub": null },
      { "label": "OPHTHALMIC", "value": "0.5% drops, 1% ointment", "sub": "OTC in many countries" }
    ],
    "brandTable": [
      { "name": "Chloromycetin", "form": "Capsules, IV Injection, Ophthalmic", "strengths": "250 mg, 500 mg caps; 1 g vials; 0.5% drops; 1% ointment", "manufacturer": "Parke-Davis (Pfizer)", "region": "USA, Global" },
      { "name": "Kemicetine", "form": "Capsules, IV Injection, Eye Drops", "strengths": "250 mg, 500 mg caps; 1 g IV vials; 0.5% eye drops", "manufacturer": "Carlo Erba", "region": "Europe, Asia, Pakistan" },
      { "name": "Paraxin", "form": "Capsules, Eye Drops, Ear Drops", "strengths": "250 mg caps; 0.5% ophthalmic; 5% otic", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Chloroptic", "form": "Ophthalmic Solution/Ointment", "strengths": "0.5% solution; 1% ointment", "manufacturer": "Allergan", "region": "USA, Europe" },
      { "name": "Chlorsig", "form": "Eye Drops, Ointment", "strengths": "0.5% drops; 1% ointment", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia, Australia" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR - significant bleeding risk (CYP2C9 inhibition).", "severity": "Major" },
      { "drugClass": "CYP3A4 Substrates (Phenytoin, Phenobarbital, Tacrolimus)", "effect": "Increased levels of these drugs (CYP inhibition).", "severity": "Major" },
      { "drugClass": "Rifampin", "effect": "Reduced chloramphenicol levels (CYP induction).", "severity": "Moderate" },
      { "drugClass": "Iron/Vitamin B12", "effect": "Impaired hematopoietic response (marrow toxicity).", "severity": "Moderate" },
      { "drugClass": "Myelosuppressive Agents", "effect": "Additive bone marrow suppression.", "severity": "Major" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy.", "severity": "Minor" }
    ],
    "warning": "BLACK BOX: Dose-dependent reversible bone marrow suppression AND idiosyncratic aplastic anemia (1:25,000-40,000 - fatal). Regular CBC monitoring essential. Gray baby syndrome in neonates (fatal cardiovascular collapse - due to immature hepatic glucuronidation). Pregnancy category C. Systemic use restricted to serious infections with no alternatives.",
    "subCategoryId": "others"
  }
];
