// data/antivirals.js
export const antivirals = [
  {
    "id": "acyclovir",
    "categoryId": "antivirals",
    "genericName": "Acyclovir",
    "brandNames": "Zovirax, Sitavig, Aviral, Acyvir, Cyclovir, Herpid",
    "description": "A guanosine analogue antiviral that inhibits HSV and VZV DNA polymerase after phosphorylation by viral thymidine kinase. First-line for HSV encephalitis, neonatal HSV, and primary varicella in immunocompromised patients.",
    "status": "Rx / OTC (Topical)",
    "isCommonlyPrescribed": true,
    "isRxOnly": false,
    "isOTCAndRx": true,
    "primaryIndication": "HSV/VZV Infections",
    "dosageForm": "IV/PO/Topical",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "200-800 mg PO 5x/day or 5-10 mg/kg IV q8h", "sub": "Max: 4 g/day PO" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 1.5-2h (PO); immediate (IV)", "sub": "Half-life 2.5-3.5h; 20h ESRD" },
      { "label": "CLINICAL INDICATIONS", "value": "HSV encephalitis, neonatal HSV, genital HSV, herpes zoster, varicella, herpes keratitis", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Adjust dose in renal impairment; adequate hydration essential", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Zovirax", "form": "Tablet 200, 400, 800 mg / IV / Cream / Ointment", "strengths": "200, 400, 800 mg", "manufacturer": "GSK", "region": "Global" },
      { "name": "Sitavig", "form": "Buccal Tablet 50 mg", "strengths": "50 mg", "manufacturer": "BioAlliance Pharma", "region": "USA, Europe" },
      { "name": "Aviral", "form": "Tablet 200, 400 mg / Suspension", "strengths": "200, 400 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Acyvir", "form": "Tablet 200, 400, 800 mg / IV", "strengths": "200, 400, 800 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Cyclovir", "form": "Tablet / Cream / IV", "strengths": "200, 400, 800 mg", "manufacturer": "Pacific Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Probenecid", "effect": "Reduced acyclovir clearance; increased plasma levels", "severity": "Moderate" },
      { "drugClass": "Nephrotoxic Drugs (Aminoglycosides, Cyclosporine, NSAIDs)", "effect": "Additive nephrotoxicity risk", "severity": "Moderate" },
      { "drugClass": "Zidovudine", "effect": "Increased neurological effects (lethargy, fatigue)", "severity": "Moderate" },
      { "drugClass": "Mycophenolate", "effect": "Increased acyclovir and mycophenolate levels", "severity": "Minor" },
      { "drugClass": "Interferon", "effect": "Synergistic antiviral effect; monitor renal function", "severity": "Minor" },
      { "drugClass": "Theophylline", "effect": "Increased theophylline levels", "severity": "Minor" }
    ],
    "warning": "Adjust dose in renal impairment (CrCl <10: 200 mg q12h). IV use requires adequate hydration. Thrombotic thrombocytopenic purpura/hemolytic uremic syndrome reported in immunocompromised. Avoid in dehydration. CNS effects (agitation, hallucinations) at high IV doses.",
    "subCategoryId": "anti-herpes"
  },
  {
    "id": "valacyclovir",
    "categoryId": "antivirals",
    "genericName": "Valacyclovir",
    "brandNames": "Valtrex, Valcivir, Valacy, Valtrex, Flomycivin",
    "description": "L-valyl ester prodrug of acyclovir with 3-5x greater oral bioavailability. Converted to acyclovir by first-pass hepatic metabolism. Preferred for herpes zoster and genital HSV suppression due to convenient dosing.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HSV/VZV Infections",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1 g PO TID for zoster; 500 mg PO BID for HSV", "sub": "Max: 3 g/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 1-2h", "sub": "Half-life 2.5-3.5h (as acyclovir)" },
      { "label": "CLINICAL INDICATIONS", "value": "Herpes zoster, genital HSV (treatment and suppression), cold sores, HSV prophylaxis in immunocompromised", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Adjust dose in renal impairment; better PK than acyclovir", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Valtrex", "form": "Tablet 500 mg, 1 g", "strengths": "500 mg, 1 g", "manufacturer": "GSK", "region": "Global" },
      { "name": "Valcivir", "form": "Tablet 500 mg", "strengths": "500 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Valacy", "form": "Tablet 500 mg", "strengths": "500 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Flomycivin", "form": "Tablet 500 mg", "strengths": "500 mg", "manufacturer": "Getz Pharma", "region": "Pakistan" },
      { "name": "Valacyclovir HCl", "form": "Generic Tablet", "strengths": "500 mg, 1 g", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Probenecid", "effect": "Reduced valacyclovir clearance; increased plasma levels", "severity": "Moderate" },
      { "drugClass": "Nephrotoxic Drugs", "effect": "Additive nephrotoxicity risk especially in elderly", "severity": "Moderate" },
      { "drugClass": "Cimetidine", "effect": "Increased acyclovir levels (minor)", "severity": "Minor" },
      { "drugClass": "TDF (Tenofovir Disoproxil)", "effect": "No significant interaction at standard doses", "severity": "Minor" },
      { "drugClass": "Mycophenolate Mofetil", "effect": "Possible increased levels of both drugs", "severity": "Minor" },
      { "drugClass": "NSAIDs", "effect": "Possible increased nephrotoxicity risk at high doses", "severity": "Moderate" }
    ],
    "warning": "Thrombotic thrombocytopenic purpura/hemolytic uremic syndrome reported in immunocompromised and transplant patients at high doses (8 g/day). Adjust dose in renal impairment. Adequate hydration essential. CNS effects (confusion, hallucinations) more common in elderly.",
    "subCategoryId": "anti-herpes"
  },
  {
    "id": "famciclovir",
    "categoryId": "antivirals",
    "genericName": "Famciclovir",
    "brandNames": "Famvir, Famciclovir, Oravir, Famtrex, Virostat",
    "description": "Prodrug of penciclovir with high oral bioavailability. Inhibits HSV and VZV DNA polymerase with a longer intracellular half-life than acyclovir. Effective for herpes zoster and genital HSV with convenient TID dosing.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HSV/VZV Infections",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "500 mg PO TID for zoster; 125-250 mg PO TID for HSV", "sub": "Max: 1.5 g/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 1h (as penciclovir)", "sub": "Half-life 2-2.5h; intracellular 7-20h" },
      { "label": "CLINICAL INDICATIONS", "value": "Herpes zoster, genital HSV (treatment and suppression), HSV prophylaxis, recurrent herpes labialis", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Adjust dose in renal impairment; no dosage adjustment in hepatic impairment", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Famvir", "form": "Tablet 125, 250, 500 mg", "strengths": "125, 250, 500 mg", "manufacturer": "Novartis", "region": "Global" },
      { "name": "Oravir", "form": "Tablet 250, 500 mg", "strengths": "250, 500 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Famtrex", "form": "Tablet 250 mg", "strengths": "250 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Virostat", "form": "Tablet 250, 500 mg", "strengths": "250, 500 mg", "manufacturer": "Pacific Pharma", "region": "Pakistan" },
      { "name": "Famciclovir HCl", "form": "Generic Tablet", "strengths": "125, 250, 500 mg", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Probenecid", "effect": "Reduced penciclovir clearance; increased plasma levels", "severity": "Moderate" },
      { "drugClass": "Cimetidine", "effect": "Increased penciclovir levels", "severity": "Minor" },
      { "drugClass": "Digoxin", "effect": "Minor increase in digoxin levels", "severity": "Minor" },
      { "drugClass": "Nephrotoxic Drugs", "effect": "Additive nephrotoxicity risk at high doses", "severity": "Moderate" },
      { "drugClass": "Macrolide Antibiotics", "effect": "No significant interaction reported", "severity": "Minor" },
      { "drugClass": "Oral Contraceptives", "effect": "No significant interaction", "severity": "Minor" }
    ],
    "warning": "Contraindicated in patients with known famciclovir/penciclovir hypersensitivity. Reduce dose in renal impairment (CrCl <60). Safety in pregnancy not established; use only if benefit outweighs risk. May cause headache, nausea, and diarrhea.",
    "subCategoryId": "anti-herpes"
  },
  {
    "id": "penciclovir",
    "categoryId": "antivirals",
    "genericName": "Penciclovir",
    "brandNames": "Denavir, Fenistil Pencivir, Vectavir, Pencivir, Penciclovir Cream",
    "description": "A topical acyclic guanine nucleoside antiviral active against HSV-1, HSV-2, and VZV. Intracellular half-life of 7-20h is significantly longer than acyclovir. Used primarily for recurrent herpes labialis.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HSV (Topical)",
    "dosageForm": "Topical Cream",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "Apply cream q2h while awake for 4 days", "sub": "Start within 1h of prodrome" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset: within hours of application", "sub": "Intracellular half-life 7-20h" },
      { "label": "CLINICAL INDICATIONS", "value": "Herpes labialis (cold sores), recurrent HSV in immunocompetent patients", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Apply early in prodrome for best results; avoid eyes and mucous membranes", "sub": "Not for genital HSV" }
    ],
    "brandTable": [
      { "name": "Denavir", "form": "Cream 1%", "strengths": "1% (10 mg/g)", "manufacturer": "Novartis", "region": "USA, Europe" },
      { "name": "Fenistil Pencivir", "form": "Cream 1%", "strengths": "1%", "manufacturer": "Novartis Consumer Health", "region": "Europe" },
      { "name": "Vectavir", "form": "Cream 1%", "strengths": "1%", "manufacturer": "Novartis", "region": "UK, Australia" },
      { "name": "Pencivir", "form": "Cream 1%", "strengths": "1%", "manufacturer": "Martin Dow", "region": "Pakistan" },
      { "name": "Penciclovir Cream", "form": "Cream 1%", "strengths": "1%", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Other Topical Agents", "effect": "May alter absorption if applied simultaneously", "severity": "Minor" },
      { "drugClass": "Sun Protection Products", "effect": "No known interaction; may be used together", "severity": "Minor" },
      { "drugClass": "Topical Corticosteroids", "effect": "Not recommended for concurrent use on herpes lesions", "severity": "Moderate" },
      { "drugClass": "Topical Anesthetics", "effect": "Can be used sequentially for pain relief", "severity": "Minor" },
      { "drugClass": "Systemic Antivirals", "effect": "Can be used concomitantly for severe outbreaks", "severity": "Minor" },
      { "drugClass": "Topical Antibiotics", "effect": "May be combined if secondary bacterial infection present", "severity": "Minor" }
    ],
    "warning": "For external use only; avoid contact with eyes and mucous membranes. Do not apply to broken skin or open wounds. Wash hands before and after application. Discontinue if hypersensitivity occurs. Not for treatment of genital HSV or herpes zoster.",
    "subCategoryId": "anti-herpes"
  },
  {
    "id": "docosanol",
    "categoryId": "antivirals",
    "genericName": "Docosanol",
    "brandNames": "Abreva, Herpecid-L, Docosanol Cream, Erazaban, Cold Sore Cream",
    "description": "A saturated fatty alcohol that inhibits HSV fusion with host cell plasma membrane, preventing viral entry and replication. OTC first-line topical for recurrent herpes labialis with a favorable safety profile.",
    "status": "OTC",
    "isCommonlyPrescribed": true,
    "isRxOnly": false,
    "isOTCAndRx": false,
    "primaryIndication": "Herpes Labialis",
    "dosageForm": "Topical Cream",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "Apply 5x daily until healed (up to 10 days)", "sub": "Start at first sign of prodrome" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset: within 24h of application", "sub": "Healing time reduced by 0.5-1 day" },
      { "label": "CLINICAL INDICATIONS", "value": "Recurrent herpes labialis (cold sores) in immunocompetent adults", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Apply with fingertip; wash hands; do not share", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Abreva", "form": "Cream 10%", "strengths": "10%", "manufacturer": "GSK Consumer Health", "region": "USA, Canada" },
      { "name": "Herpecid-L", "form": "Cream 10%", "strengths": "10%", "manufacturer": "PharmEvo", "region": "Pakistan" },
      { "name": "Docosanol Cream", "form": "Cream 10%", "strengths": "10%", "manufacturer": "Various (Generic)", "region": "Global" },
      { "name": "Erazaban", "form": "Cream 10%", "strengths": "10%", "manufacturer": "Sitbo", "region": "Europe" },
      { "name": "Cold Sore Cream", "form": "Cream 10%", "strengths": "10%", "manufacturer": "Various (Store Brand)", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "Topical Acyclovir/Penciclovir", "effect": "Alternate use may be beneficial; no direct interaction", "severity": "Minor" },
      { "drugClass": "Topical Corticosteroids", "effect": "Not recommended for concurrent use on active lesions", "severity": "Moderate" },
      { "drugClass": "Cosmetics / Lip Balms", "effect": "Apply after docosanol absorption", "severity": "Minor" },
      { "drugClass": "Sunscreen", "effect": "Can be used sequentially; no interaction expected", "severity": "Minor" },
      { "drugClass": "Other OTC Topicals", "effect": "No known interactions; avoid multiple products simultaneously", "severity": "Minor" },
      { "drugClass": "Oral Antivirals", "effect": "Can be used concomitantly for severe/prolonged outbreaks", "severity": "Minor" }
    ],
    "warning": "For external use only. Do not apply to open wounds, broken skin, or inside the mouth. Wash hands before and after application. If sores worsen or persist beyond 10 days, seek medical evaluation. Discontinue if local hypersensitivity develops.",
    "subCategoryId": "anti-herpes"
  },
  {
    "id": "oseltamivir",
    "categoryId": "antivirals",
    "genericName": "Oseltamivir",
    "brandNames": "Tamiflu, Oselta, Fluhalt, Fluvir, Influenzatab",
    "description": "A neuraminidase inhibitor prodrug (oseltamivir phosphate) that selectively inhibits influenza A and B neuraminidase, preventing viral release from infected cells. Standard of care for seasonal and pandemic influenza.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Influenza A and B",
    "dosageForm": "Oral Capsules/Suspension",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "75 mg PO BID x 5 days (treatment); 75 mg PO daily x 10 days (prophylaxis)", "sub": "Max: 150 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 1-2h (as oseltamivir carboxylate)", "sub": "Half-life 6-10h" },
      { "label": "CLINICAL INDICATIONS", "value": "Influenza A and B (treatment within 48h), post-exposure prophylaxis, seasonal prophylaxis", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Adjust dose in renal impairment (CrCl <60); start within 48h of symptoms", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Tamiflu", "form": "Capsule 30, 45, 75 mg / Powder for Suspension", "strengths": "30, 45, 75 mg; 6 mg/mL suspension", "manufacturer": "Roche / Genentech", "region": "Global" },
      { "name": "Oselta", "form": "Capsule 75 mg", "strengths": "75 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Fluhalt", "form": "Capsule 75 mg", "strengths": "75 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Fluvir", "form": "Capsule 75 mg", "strengths": "75 mg", "manufacturer": "Getz Pharma", "region": "Pakistan" },
      { "name": "Oseltamivir Phosphate", "form": "Generic Capsule / Suspension", "strengths": "30, 45, 75 mg", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Influenza Vaccine (Live Attenuated)", "effect": "Antiviral may reduce vaccine efficacy; avoid concurrent use", "severity": "Moderate" },
      { "drugClass": "Influenza Vaccine (Inactivated)", "effect": "No interaction; can be given concurrently", "severity": "Minor" },
      { "drugClass": "Probenecid", "effect": "Increased oseltamivir carboxylate levels (2.5x)", "severity": "Minor" },
      { "drugClass": "Warfarin", "effect": "No significant interaction reported", "severity": "Minor" },
      { "drugClass": "Oral Contraceptives", "effect": "No significant interaction", "severity": "Minor" },
      { "drugClass": "Paracetamol / Ibuprofen", "effect": "No significant interaction; commonly used together for fever", "severity": "Minor" }
    ],
    "warning": "Start within 48 hours of symptom onset for maximum benefit. Efficacy beyond 48h in severe illness may still be beneficial. Neuropsychiatric events (delirium, hallucinations) reported primarily in pediatric patients in Japan. Reduce dose in ESRD (75 mg once daily).",
    "subCategoryId": "anti-influenza"
  },
  {
    "id": "zanamivir",
    "categoryId": "antivirals",
    "genericName": "Zanamivir",
    "brandNames": "Relenza, Zanamivir Inhalation, Zantex, Flunase, Respflu",
    "description": "A neuraminidase inhibitor administered via oral inhalation that directly inhibits influenza A and B neuraminidase. Alternative when oseltamivir resistance suspected or for patients unable to take oral medications.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Influenza A and B",
    "dosageForm": "Inhalation Powder",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "10 mg (2 inhalations) BID x 5 days", "sub": "Prophylaxis: 10 mg daily x 10 days" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak: immediate pulmonary deposition", "sub": "Half-life 2.5-5h (inhaled); 20h IV" },
      { "label": "CLINICAL INDICATIONS", "value": "Influenza A and B (treatment within 48h), post-exposure prophylaxis", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Not for patients with asthma/COPD; may cause bronchospasm", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Relenza", "form": "Inhalation Powder 5 mg/blister", "strengths": "5 mg/blister (Rotadisk)", "manufacturer": "GSK", "region": "Global" },
      { "name": "Zantex", "form": "Inhalation Powder 5 mg", "strengths": "5 mg", "manufacturer": "Getz Pharma", "region": "Pakistan" },
      { "name": "Flunase", "form": "Inhalation Powder 5 mg", "strengths": "5 mg", "manufacturer": "Sami Pharma", "region": "Pakistan" },
      { "name": "Respflu", "form": "Inhalation Powder 5 mg", "strengths": "5 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Zanamivir (Generic)", "form": "Inhalation Powder", "strengths": "5 mg/blister", "manufacturer": "Various", "region": "India, Global" }
    ],
    "interactions": [
      { "drugClass": "Influenza Vaccine (Live Attenuated)", "effect": "Antiviral may reduce vaccine efficacy; separate by 48h", "severity": "Moderate" },
      { "drugClass": "Bronchodilators (Short-Acting)", "effect": "Use bronchodilator before zanamivir in COPD/asthma patients", "severity": "Moderate" },
      { "drugClass": "Inhaled Corticosteroids", "effect": "May increase bronchospasm risk; monitor pulmonary function", "severity": "Moderate" },
      { "drugClass": "Warfarin", "effect": "No significant interaction", "severity": "Minor" },
      { "drugClass": "Paracetamol", "effect": "No interaction; commonly used concurrently", "severity": "Minor" },
      { "drugClass": "Influenza Vaccine (Inactivated)", "effect": "No interaction", "severity": "Minor" }
    ],
    "warning": "Contraindicated in patients with asthma or COPD due to risk of severe bronchospasm. Have short-acting bronchodilator available. Not recommended for patients with severe respiratory disease. Start within 48h of symptom onset. Requires patient education on Diskhaler use.",
    "subCategoryId": "anti-influenza"
  },
  {
    "id": "peramivir",
    "categoryId": "antivirals",
    "genericName": "Peramivir",
    "brandNames": "Rapivab, Peramiflu, Alpivab, Peramivir IV, Influ-Vir",
    "description": "A cyclopentane neuraminidase inhibitor administered as a single IV dose for uncomplicated influenza. Active against oseltamivir-resistant strains. Longer plasma half-life allows single-dose treatment.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Influenza A and B",
    "dosageForm": "IV Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "600 mg IV single dose over 15-30 min", "sub": "Max: 600 mg single dose" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak: end of infusion", "sub": "Half-life 20h" },
      { "label": "CLINICAL INDICATIONS", "value": "Uncomplicated influenza A and B when oral therapy not feasible or resistance suspected", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Adjust dose in renal impairment; single-dose convenience", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Rapivab", "form": "IV Solution 10 mg/mL", "strengths": "200 mg/20 mL vial", "manufacturer": "BioCryst Pharmaceuticals", "region": "USA" },
      { "name": "Peramiflu", "form": "IV Infusion", "strengths": "200 mg, 600 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Alpivab", "form": "IV Infusion", "strengths": "600 mg", "manufacturer": "Mundypharma", "region": "Europe" },
      { "name": "Influ-Vir", "form": "IV Infusion", "strengths": "600 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Peramivir (Generic)", "form": "IV Solution", "strengths": "200 mg/20 mL, 600 mg/60 mL", "manufacturer": "Various", "region": "Japan, South Korea" }
    ],
    "interactions": [
      { "drugClass": "Live Attenuated Influenza Vaccine", "effect": "Avoid within 48h of peramivir; reduced vaccine efficacy", "severity": "Moderate" },
      { "drugClass": "Inactivated Influenza Vaccine", "effect": "No interaction", "severity": "Minor" },
      { "drugClass": "Warfarin", "effect": "No significant interaction", "severity": "Minor" },
      { "drugClass": "Oseltamivir", "effect": "Potential additive effect; not studied in combination", "severity": "Minor" },
      { "drugClass": "Nephrotoxic Drugs", "effect": "Monitor renal function; peramivir renally eliminated", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "May increase peramivir levels; clinical significance unknown", "severity": "Minor" }
    ],
    "warning": "Reduce dose in renal impairment: CrCl 30-49: 200 mg; CrCl 10-29: 100 mg; ESRD: not recommended. Serious skin reactions (Stevens-Johnson syndrome) reported rarely. Monitor for neuropsychiatric effects. Single-dose only for uncomplicated influenza.",
    "subCategoryId": "anti-influenza"
  },
  {
    "id": "baloxavir-marboxil",
    "categoryId": "antivirals",
    "genericName": "Baloxavir Marboxil",
    "brandNames": "Xofluza, Baloxavir, Balflu, Influza, Antiviral-80",
    "description": "A cap-dependent endonuclease inhibitor that blocks influenza mRNA transcription. First-in-class with novel mechanism of action. Single oral dose effective against influenza A and B including oseltamivir-resistant strains.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Influenza A and B",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "40 mg PO single dose (80 kg); 80 mg PO single dose (>80 kg)", "sub": "Max: 80 mg single dose" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 4h", "sub": "Half-life 79-93h" },
      { "label": "CLINICAL INDICATIONS", "value": "Uncomplicated influenza A and B (treatment within 48h), post-exposure prophylaxis (single dose)", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Avoid with dairy/calcium-fortified beverages; single-dose convenience", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Xofluza", "form": "Tablet 20, 40, 80 mg", "strengths": "20, 40, 80 mg", "manufacturer": "Roche / Shionogi", "region": "Global" },
      { "name": "Balflu", "form": "Tablet 20, 40 mg", "strengths": "20, 40 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Influza", "form": "Tablet 40, 80 mg", "strengths": "40, 80 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Antiviral-80", "form": "Tablet 80 mg", "strengths": "80 mg", "manufacturer": "Getz Pharma", "region": "Pakistan" },
      { "name": "Baloxavir Marboxil (Generic)", "form": "Tablet", "strengths": "20, 40, 80 mg", "manufacturer": "Various", "region": "Japan, India" }
    ],
    "interactions": [
      { "drugClass": "Dairy Products / Calcium-Fortified Beverages", "effect": "Reduced baloxavir absorption; take without dairy", "severity": "Moderate" },
      { "drugClass": "Antacids (Al/Mg/Ca-based)", "effect": "Reduced baloxavir absorption; separate by 2h", "severity": "Moderate" },
      { "drugClass": "Iron / Zinc / Selenium Supplements", "effect": "Reduced absorption; take at different times", "severity": "Moderate" },
      { "drugClass": "Live Attenuated Influenza Vaccine", "effect": "Wait 48h after baloxavir before vaccination", "severity": "Moderate" },
      { "drugClass": "Oseltamivir", "effect": "No significant interaction; different mechanisms", "severity": "Minor" },
      { "drugClass": "Inactivated Influenza Vaccine", "effect": "No interaction", "severity": "Minor" }
    ],
    "warning": "Avoid coadministration with dairy products, calcium-fortified beverages, or polyvalent cation-containing products (antacids, supplements). Efficacy beyond 48h of symptom onset not established. Resistance via PA/I38T mutation reported. Not for complicated influenza requiring hospitalization.",
    "subCategoryId": "anti-influenza"
  },
  {
    "id": "amantadine",
    "categoryId": "antivirals",
    "genericName": "Amantadine",
    "brandNames": "Symmetrel, Amantrel, Amantadine HCl, Virofral, Mantadix",
    "description": "An adamantane derivative that blocks influenza A M2 ion channel, preventing viral uncoating. Also has antiparkinsonian effects via NMDA receptor antagonism and dopamine release. Limited by widespread resistance.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Influenza A (also Parkinson's)",
    "dosageForm": "Oral Capsules/Tablets/Syrup",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "100 mg PO BID x 5-7 days (influenza)", "sub": "Max: 200 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 2-4h", "sub": "Half-life 10-28h (young); 24-34h (elderly)" },
      { "label": "CLINICAL INDICATIONS", "value": "Influenza A (treatment and prophylaxis), Parkinson's disease, drug-induced extrapyramidal symptoms", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Adjust dose in renal impairment; CNS effects common in elderly", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Symmetrel", "form": "Capsule 100 mg / Syrup 50 mg/5 mL", "strengths": "100 mg", "manufacturer": "Endo Pharmaceuticals", "region": "USA, Canada" },
      { "name": "Amantrel", "form": "Capsule 100 mg", "strengths": "100 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Virofral", "form": "Capsule 100 mg", "strengths": "100 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Mantadix", "form": "Capsule 100 mg", "strengths": "100 mg", "manufacturer": "BMS", "region": "Europe" },
      { "name": "Amantadine HCl", "form": "Generic Capsule / Syrup", "strengths": "100 mg; 50 mg/5 mL", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Anticholinergics", "effect": "Additive anticholinergic effects; confusion, hallucinations", "severity": "Moderate" },
      { "drugClass": "CNS Stimulants", "effect": "Additive CNS stimulation; risk of seizures", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Increased CNS effects; dizziness, confusion", "severity": "Moderate" },
      { "drugClass": "Thiazide Diuretics / Triamterene", "effect": "Reduced amantadine clearance; toxicity risk", "severity": "Moderate" },
      { "drugClass": "Live Influenza Vaccine", "effect": "Wait 48h after stopping amantadine", "severity": "Moderate" },
      { "drugClass": "Antihistamines", "effect": "Additive anticholinergic side effects", "severity": "Moderate" }
    ],
    "warning": "Widespread influenza A resistance limits current use. Reduce dose in renal impairment (CrCl <50). CNS effects: dizziness, confusion, hallucinations, nightmares (especially elderly). Avoid abrupt discontinuation in Parkinson's patients. Risk of QT prolongation. Seizure risk in patients with epilepsy.",
    "subCategoryId": "anti-influenza"
  },
  {
    "id": "tenofovir",
    "categoryId": "antivirals",
    "genericName": "Tenofovir Disoproxil Fumarate",
    "brandNames": "Viread, Tenvir, Tavin, Tenof, Tedir, Tenofovir-300",
    "description": "A nucleotide reverse transcriptase inhibitor (NtRTI) that chain-terminates HIV reverse transcription. First-line NRTI backbone component of ART and standalone therapy for chronic HBV. Prodrug converted to tenofovir diphosphate.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1, HBV",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "300 mg PO daily with food (HIV/HBV)", "sub": "Max: 300 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 1-2h", "sub": "Half-life 17h (intracellular >60h)" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (with other ARVs), chronic HBV, HIV PrEP (with emtricitabine)", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Monitor renal function; bone mineral density monitoring recommended", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Viread", "form": "Tablet 150, 200, 250, 300 mg / Powder", "strengths": "150, 200, 250, 300 mg", "manufacturer": "Gilead Sciences", "region": "Global" },
      { "name": "Tenvir", "form": "Tablet 300 mg", "strengths": "300 mg", "manufacturer": "Cipla", "region": "India, Africa" },
      { "name": "Tavin", "form": "Tablet 300 mg", "strengths": "300 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Tenof", "form": "Tablet 300 mg", "strengths": "300 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Tedir", "form": "Tablet 300 mg", "strengths": "300 mg", "manufacturer": "Pacific Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Didanosine", "effect": "Increased didanosine levels; reduce didanosine dose", "severity": "Moderate" },
      { "drugClass": "Nephrotoxic Drugs (Aminoglycosides, Amphotericin B, Foscarnet, Vancomycin)", "effect": "Additive nephrotoxicity risk", "severity": "Moderate" },
      { "drugClass": "Atazanavir", "effect": "Reduced atazanavir levels; boost with ritonavir", "severity": "Moderate" },
      { "drugClass": "Lopinavir/Ritonavir", "effect": "Increased tenofovir levels; monitor renal function", "severity": "Moderate" },
      { "drugClass": "NSAIDs", "effect": "Increased nephrotoxicity risk, especially with high-dose or chronic use", "severity": "Moderate" },
      { "drugClass": "Protease Inhibitors (Multiple)", "effect": "Variable PK interactions; monitor therapeutic response", "severity": "Moderate" }
    ],
    "warning": "Monitor renal function (CrCl, serum phosphate, urine glucose/protein) before and during therapy. Risk of nephrotoxicity (Fanconi syndrome, acute renal failure). Decrease bone mineral density. Lactic acidosis/hepatomegaly with steatosis reported. Not for CrCl <50 (use TAF instead).",
    "subCategoryId": "anti-hiv-nrti"
  },
  {
    "id": "emtricitabine",
    "categoryId": "antivirals",
    "genericName": "Emtricitabine",
    "brandNames": "Emtriva, Emtri, FTC, Emtricitabine-200, Coviracil",
    "description": "A nucleoside reverse transcriptase inhibitor (NRTI) structurally similar to lamivudine with potent activity against HIV-1. Used as part of NRTI backbone in fixed-dose combinations. Also active against HBV at higher concentrations.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1, HBV",
    "dosageForm": "Oral Capsules/Solution",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "200 mg PO daily or 200 mg PO once daily", "sub": "Max: 200 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 1-2h", "sub": "Half-life 10h; intracellular >39h" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (with other ARVs as NRTI backbone), HIV PrEP (with tenofovir)", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Adjust dose in renal impairment; well tolerated with minimal side effects", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Emtriva", "form": "Capsule 200 mg / Oral Solution 10 mg/mL", "strengths": "200 mg", "manufacturer": "Gilead Sciences", "region": "Global" },
      { "name": "Emtri", "form": "Capsule 200 mg", "strengths": "200 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "FTC", "form": "Capsule 200 mg", "strengths": "200 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Coviracil", "form": "Capsule 200 mg", "strengths": "200 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Emtricitabine (Generic)", "form": "Capsule 200 mg", "strengths": "200 mg", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Lamivudine", "effect": "Do not coadminister (same mechanism, no added benefit)", "severity": "Moderate" },
      { "drugClass": "Tenofovir", "effect": "Synergistic effect; standard NRTI backbone combination", "severity": "Beneficial" },
      { "drugClass": "Nephrotoxic Drugs", "effect": "Additive nephrotoxicity risk (primarily due to tenofovir coadministration)", "severity": "Moderate" },
      { "drugClass": "Sorivudine / Brivudine", "effect": "Increased FTC toxicity; avoid coadministration", "severity": "Moderate" },
      { "drugClass": "Ribavirin", "effect": "Possible antagonism; clinical significance unknown", "severity": "Minor" },
      { "drugClass": "Interferon Alfa", "effect": "No significant interaction", "severity": "Minor" }
    ],
    "warning": "Adjust dose in renal impairment: CrCl 30-49: 200 mg q48h; CrCl 15-29: 200 mg q72h; ESRD on hemodialysis: 200 mg q96h. Lactic acidosis/severe hepatomegaly with steatosis reported (rare). HBV exacerbation may occur upon discontinuation. Minimal CYP450 interactions.",
    "subCategoryId": "anti-hiv-nrti"
  },
  {
    "id": "lamivudine",
    "categoryId": "antivirals",
    "genericName": "Lamivudine",
    "brandNames": "Epivir, Lamivir, Heptovir, Lamivudin, Zeffix, Lami-150",
    "description": "A cytidine analogue NRTI that inhibits HIV reverse transcriptase and HBV DNA polymerase. Long track record as backbone NRTI. Also approved for chronic HBV. Generally well tolerated with minimal mitochondrial toxicity.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1, HBV",
    "dosageForm": "Oral Tablets/Solution",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "150 mg PO BID or 300 mg PO daily (HIV)", "sub": "HBV: 100 mg PO daily" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 1-1.5h", "sub": "Half-life 5-7h; intracellular 15-19h" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (with other ARVs), chronic HBV, HIV PEP/PrEP (with other ARVs)", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Adjust dose in renal impairment; HBV flare on discontinuation possible", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Epivir", "form": "Tablet 150, 300 mg / Oral Solution 10 mg/mL", "strengths": "150, 300 mg", "manufacturer": "GSK / ViiV Healthcare", "region": "Global" },
      { "name": "Lamivir", "form": "Tablet 100, 150 mg", "strengths": "100, 150 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Heptovir", "form": "Tablet 100 mg", "strengths": "100 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Zeffix", "form": "Tablet 100 mg / Oral Solution", "strengths": "100 mg", "manufacturer": "GSK", "region": "Global (HBV)" },
      { "name": "Lami-150", "form": "Tablet 150 mg", "strengths": "150 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Emtricitabine", "effect": "Do not coadminister (same class, no additional benefit)", "severity": "Moderate" },
      { "drugClass": "Zalcitabine (ddC)", "effect": "Intracellular antagonism; avoid coadministration", "severity": "Moderate" },
      { "drugClass": "Trimethoprim/Sulfamethoxazole", "effect": "Increased lamivudine levels (30-40%); no dose adjustment needed", "severity": "Minor" },
      { "drugClass": "Ribavirin", "effect": "Possible intracellular antagonism in HIV/HCV coinfection", "severity": "Moderate" },
      { "drugClass": "Interferon Alfa", "effect": "No significant interaction", "severity": "Minor" },
      { "drugClass": "Sorivudine", "effect": "Increased lamivudine toxicity; avoid coadministration", "severity": "Moderate" }
    ],
    "warning": "Monitor HBV exacerbation upon discontinuation (may be severe). Adjust dose in renal impairment: CrCl 30-49: 150 mg daily; CrCl 15-29: 150 mg first dose then 100 mg daily; CrCl 5-14: 150 mg first dose then 50 mg daily. Lactic acidosis/hepatomegaly reported (rare). Pancreatitis risk in pediatric patients.",
    "subCategoryId": "anti-hiv-nrti"
  },
  {
    "id": "abacavir",
    "categoryId": "antivirals",
    "genericName": "Abacavir",
    "brandNames": "Ziagen, Abavir, Abamune, Abaca, Aba-300, Biovir",
    "description": "A guanosine analogue NRTI with potent activity against HIV-1. Requires intracellular phosphorylation to carbovir triphosphate. Associated with hypersensitivity reaction in HLA-B*5701-positive individuals requiring mandatory screening.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1",
    "dosageForm": "Oral Tablets/Solution",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "300 mg PO BID or 600 mg PO daily", "sub": "Max: 600 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 1.5h", "sub": "Half-life 1.5h; intracellular 12-26h" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (with other ARVs as NRTI backbone), pediatric HIV", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "HLA-B*5701 screening mandatory before initiation; ABC never alone", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Ziagen", "form": "Tablet 300 mg / Oral Solution 20 mg/mL", "strengths": "300 mg", "manufacturer": "GSK / ViiV Healthcare", "region": "Global" },
      { "name": "Abavir", "form": "Tablet 300 mg", "strengths": "300 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Abamune", "form": "Tablet 300 mg", "strengths": "300 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Aba-300", "form": "Tablet 300 mg", "strengths": "300 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Biovir", "form": "Tablet 300 mg (combination)", "strengths": "300 mg", "manufacturer": "Pacific Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Alcohol", "effect": "Increased abacavir levels (41%); clinical significance unknown", "severity": "Moderate" },
      { "drugClass": "Methadone", "effect": "Increased methadone clearance; monitor for withdrawal symptoms", "severity": "Moderate" },
      { "drugClass": "Ribavirin", "effect": "Possible intracellular antagonism in HIV/HCV coinfection", "severity": "Moderate" },
      { "drugClass": "Tipranavir/Ritonavir", "effect": "Reduced abacavir levels (35-40%)", "severity": "Moderate" },
      { "drugClass": "Phenobarbital / Phenytoin", "effect": "Minor induction of ABC metabolism; unlikely clinically significant", "severity": "Minor" },
      { "drugClass": "Other NRTIs", "effect": "No significant additional interactions beyond standard ART", "severity": "Minor" }
    ],
    "warning": "MANDATORY: Screen for HLA-B*5701 before initiation. ABC HSR: fever, rash, GI symptoms, malaise, respiratory symptoms. If HSR suspected, discontinue permanently - NEVER rechallenge (risk of fatal anaphylaxis). Increased MI risk in some studies (controversial, ongoing monitoring). Lactic acidosis/hepatomegaly reported.",
    "subCategoryId": "anti-hiv-nrti"
  },
  {
    "id": "zidovudine",
    "categoryId": "antivirals",
    "genericName": "Zidovudine",
    "brandNames": "Retrovir, Zidovir, Azidothymidine, AZT, Zidovudine-300, Retrovir-AZ",
    "description": "First approved antiretroviral drug. Thymidine analogue NRTI that chain-terminates HIV reverse transcription. Used for prevention of mother-to-child transmission (PMTCT) and occupational PEP. Limited by bone marrow toxicity.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1 (also HIV PrEP)",
    "dosageForm": "Oral Capsules/Tablets/IV Infusion",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "300 mg PO BID or 1 mg/kg IV q4h", "sub": "Max: 600 mg/day PO" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 0.5-1.5h", "sub": "Half-life 0.5-3h; intracellular 3-4h" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (with other ARVs), PMTCT, occupational PEP, HIV-associated dementia", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Hematologic toxicity common; avoid with other marrow-suppressive drugs", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Retrovir", "form": "Capsule 100, 250, 300 mg / IV / Syrup", "strengths": "100, 250, 300 mg; 10 mg/mL IV", "manufacturer": "GSK / ViiV Healthcare", "region": "Global" },
      { "name": "Zidovir", "form": "Tablet 300 mg", "strengths": "300 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "AZT", "form": "Capsule 100, 300 mg / IV", "strengths": "100, 300 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Retrovir-AZ", "form": "Capsule 100, 300 mg", "strengths": "100, 300 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Zidovudine (Generic)", "form": "Capsule / IV Infusion", "strengths": "100, 300 mg", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Stavudine", "effect": "Intracellular antagonism; avoid coadministration", "severity": "Moderate" },
      { "drugClass": "Ribavirin", "effect": "Intracellular antagonism; avoid in HIV/HCV coinfection", "severity": "Moderate" },
      { "drugClass": "Ganciclovir / Valganciclovir", "effect": "Additive myelotoxicity; monitor blood counts closely", "severity": "Moderate" },
      { "drugClass": "Doxorubicin", "effect": "Intracellular antagonism; avoid coadministration", "severity": "Moderate" },
      { "drugClass": "Fluconazole", "effect": "Increased zidovudine levels; monitor for toxicity", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Increased zidovudine levels (glucuronide inhibition)", "severity": "Moderate" }
    ],
    "warning": "Hematologic toxicity: severe anemia (Hb <7.5 g/dL), neutropenia (ANC <750) common. Monitor CBC q2 weeks for first 2 months then monthly. Lactic acidosis/hepatomegaly with steatosis (can be fatal). Myopathy with long-term use. Nail pigmentation. Dose reduction for CrCl <15.",
    "subCategoryId": "anti-hiv-nrti"
  },
  {
    "id": "didanosine",
    "categoryId": "antivirals",
    "genericName": "Didanosine",
    "brandNames": "Videx, Didanosine EC, Videx EC, Dinex, Didanosine-400",
    "description": "A purine analogue NRTI (dideoxyinosine, ddI) active against HIV-1. Converted to dideoxyadenosine triphosphate. Now rarely used due to toxicity profile and availability of better-tolerated NRTIs. Only available as enteric-coated formulation.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1",
    "dosageForm": "Oral Capsules (EC)/Powder",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-400 mg PO daily (weight-based, EC formulation)", "sub": "Max: 400 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 2h (EC)", "sub": "Half-life 1.5h; intracellular 24-48h" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (salvage therapy when other options limited)", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Must be taken on empty stomach; pancreatitis risk; mitochondrial toxicity", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Videx", "form": "EC Capsule 125, 200, 250, 400 mg", "strengths": "125, 200, 250, 400 mg", "manufacturer": "Bristol-Myers Squibb", "region": "Global" },
      { "name": "Videx EC", "form": "EC Capsule", "strengths": "125, 200, 250, 400 mg", "manufacturer": "BMS", "region": "USA" },
      { "name": "Dinex", "form": "EC Capsule 250, 400 mg", "strengths": "250, 400 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Didanosine EC", "form": "Generic EC Capsule", "strengths": "125, 200, 250, 400 mg", "manufacturer": "Various", "region": "Global" },
      { "name": "ddI", "form": "EC Capsule", "strengths": "125, 200, 250, 400 mg", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Tenofovir", "effect": "Increased didanosine levels (40-60%); reduce ddI dose to 250 mg", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Increased pancreatitis risk; avoid alcohol", "severity": "Moderate" },
      { "drugClass": "Ganciclovir / Valganciclovir", "effect": "Increased ddI levels; monitor for toxicity", "severity": "Moderate" },
      { "drugClass": "Allopurinol", "effect": "Increased ddI levels (2-3x); avoid coadministration", "severity": "Moderate" },
      { "drugClass": "Methadone", "effect": "Reduced ddI levels (40%); monitor virologic response", "severity": "Moderate" },
      { "drugClass": "Neurotoxic / Pancreatotoxic Drugs", "effect": "Additive toxicity risk", "severity": "Moderate" }
    ],
    "warning": "Pancreatitis (dose-related, potentially fatal) - discontinue if abdominal pain/nausea/vomiting with elevated amylase/lipase. Lactic acidosis/hepatomegaly (higher risk than other NRTIs). Peripheral neuropathy (dose-related). Non-cirrhotic portal hypertension reported. Retinal changes in children. Take on empty stomach.",
    "subCategoryId": "anti-hiv-nrti"
  },
  {
    "id": "efavirenz",
    "categoryId": "antivirals",
    "genericName": "Efavirenz",
    "brandNames": "Sustiva, Efavir, Efavirenz-600, Stocrin, Efze, Efalen",
    "description": "A non-nucleoside reverse transcriptase inhibitor (NNRTI) with potent HIV-1 activity. Binds allosterically to HIV RT causing conformational change. Pillar of first-line ART for many years. Notable for CNS side effects and teratogenicity.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1",
    "dosageForm": "Oral Capsules/Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "600 mg PO daily on empty stomach at bedtime", "sub": "Max: 600 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 3-5h", "sub": "Half-life 40-55h; reaches steady state 6-10 days" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (with 2 NRTIs as initial ART), HIV PEP", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Take at bedtime to minimize CNS effects; CYP2B6 genetic polymorphism", "sub": "Pregnancy Category D (contraindicated)" }
    ],
    "brandTable": [
      { "name": "Sustiva", "form": "Capsule 50, 100, 200 mg / Tablet 600 mg", "strengths": "50, 100, 200, 600 mg", "manufacturer": "Bristol-Myers Squibb", "region": "Global" },
      { "name": "Stocrin", "form": "Tablet 600 mg", "strengths": "600 mg", "manufacturer": "Merck Sharp & Dohme", "region": "Europe, Global" },
      { "name": "Efavir", "form": "Tablet 600 mg", "strengths": "600 mg", "manufacturer": "Cipla", "region": "India, Africa" },
      { "name": "Efze", "form": "Tablet 600 mg", "strengths": "600 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Efalen", "form": "Tablet 600 mg", "strengths": "600 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "CYP3A4/2B6 Substrates (Many)", "effect": "Mixed inducer/inhibitor; complex interactions with many drugs", "severity": "Moderate" },
      { "drugClass": "Hormonal Contraceptives", "effect": "Reduced contraceptive efficacy; use alternative/barrier method", "severity": "Moderate" },
      { "drugClass": "Methadone", "effect": "Reduced methadone levels; monitor for withdrawal", "severity": "Moderate" },
      { "drugClass": "Warfarin", "effect": "Reduced warfarin levels; monitor INR closely", "severity": "Moderate" },
      { "drugClass": "Carbamazepine / Phenytoin / Phenobarbital", "effect": "Reduced efavirenz levels; avoid or monitor", "severity": "Moderate" },
      { "drugClass": "Rifampin", "effect": "Reduced efavirenz levels (26%); increase EFV to 800 mg", "severity": "Moderate" }
    ],
    "warning": "Contraindicated in pregnancy (first trimester) due to teratogenicity (neural tube defects). CNS side effects: dizziness, insomnia, drowsiness, impaired concentration, abnormal dreams (common but often resolve in 2-4 weeks). Suicidal ideation reported. CYP2B6 slow metabolizers (higher levels, more CNS toxicity). Rash (usually self-limited).",
    "subCategoryId": "anti-hiv-nnrti"
  },
  {
    "id": "nevirapine",
    "categoryId": "antivirals",
    "genericName": "Nevirapine",
    "brandNames": "Viramune, Nevimune, Nevirex, Nevi-200, Viramune XR, Nevigate",
    "description": "First approved NNRTI with potent HIV-1 activity. Binds directly to HIV RT causing allosteric inhibition. Used for PMTCT and as component of ART. Noted for hepatotoxicity and hypersensitivity requiring lead-in dosing.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1",
    "dosageForm": "Oral Tablets/Suspension/XR Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "200 mg PO daily x 14 days (lead-in), then 200 mg PO BID", "sub": "XR: 400 mg PO daily after lead-in" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 4h", "sub": "Half-life 25-30h" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (with 2 NRTIs), PMTCT (single-dose at labor)", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Lead-in dosing required to reduce rash risk; higher hepatotoxicity in women with CD4 >250", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Viramune", "form": "Tablet 200 mg / XR 400 mg / Suspension", "strengths": "200, 400 mg", "manufacturer": "Boehringer Ingelheim", "region": "Global" },
      { "name": "Viramune XR", "form": "XR Tablet 400 mg", "strengths": "400 mg", "manufacturer": "Boehringer Ingelheim", "region": "USA, Europe" },
      { "name": "Nevimune", "form": "Tablet 200 mg", "strengths": "200 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Nevirex", "form": "Tablet 200 mg", "strengths": "200 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Nevigate", "form": "Tablet 200 mg", "strengths": "200 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "CYP3A4/2B6 Inducer", "effect": "Induces its own metabolism (autoinduction) and many other drugs", "severity": "Moderate" },
      { "drugClass": "Hormonal Contraceptives", "effect": "Reduced contraceptive efficacy; use barrier method", "severity": "Moderate" },
      { "drugClass": "Methadone", "effect": "Reduced methadone levels; monitor for withdrawal symptoms", "severity": "Moderate" },
      { "drugClass": "Rifampin", "effect": "Reduced nevirapine levels (20-30%); avoid if possible", "severity": "Moderate" },
      { "drugClass": "Ketoconazole / Itraconazole", "effect": "Reduced azole levels; avoid or monitor", "severity": "Moderate" },
      { "drugClass": "Protease Inhibitors", "effect": "Reduced PI levels; not recommended as standard component", "severity": "Moderate" }
    ],
    "warning": "Severe hepatotoxicity (including fatal): higher risk in women with CD4 >250 and men with CD4 >400. Monitor LFTs q2 weeks x first 2 months then monthly. Severe rash (SJS/TEN): if rash with systemic symptoms/fever/blistering, discontinue permanently. Lead-in dosing mandatory. Do not restart if discontinued >7 days.",
    "subCategoryId": "anti-hiv-nnrti"
  },
  {
    "id": "rilpivirine",
    "categoryId": "antivirals",
    "genericName": "Rilpivirine",
    "brandNames": "Edurant, Rilpivirine-25, Rilpure, Rilvir, Rilpivir, Edurant-25",
    "description": "A second-generation NNRTI with once-daily dosing and improved tolerability. Active against some efavirenz-resistant strains. Requires acidic gastric environment for absorption and lower viral load for initial therapy.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "25 mg PO daily with a meal", "sub": "Max: 25 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 4-5h", "sub": "Half-life 50h" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (with 2 NRTIs) in patients with VL <100,000 copies/mL", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Must take with a meal (not just protein shake); gastric pH dependent", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Edurant", "form": "Tablet 25 mg", "strengths": "25 mg", "manufacturer": "Janssen (Johnson & Johnson)", "region": "Global" },
      { "name": "Rilpure", "form": "Tablet 25 mg", "strengths": "25 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Rilvir", "form": "Tablet 25 mg", "strengths": "25 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Rilpivir", "form": "Tablet 25 mg", "strengths": "25 mg", "manufacturer": "Pacific Pharma", "region": "Pakistan" },
      { "name": "Rilpivirine (Generic)", "form": "Tablet 25 mg", "strengths": "25 mg", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Proton Pump Inhibitors", "effect": "Significantly reduced rilpivirine levels; contraindicated", "severity": "Moderate" },
      { "drugClass": "H2 Receptor Antagonists", "effect": "Reduced rilpivirine levels; separate by 12h", "severity": "Moderate" },
      { "drugClass": "Antacids", "effect": "Reduced rilpivirine levels; separate by 4h", "severity": "Moderate" },
      { "drugClass": "CYP3A4 Inducers (Rifampin, Carbamazepine, Phenytoin, St. John's Wort)", "effect": "Reduced rilpivirine levels; contraindicated", "severity": "Moderate" },
      { "drugClass": "Fluconazole / Ketoconazole", "effect": "Increased rilpivirine levels (CYP3A4 inhibition)", "severity": "Moderate" },
      { "drugClass": "Rifabutin", "effect": "Reduced rilpivirine levels; double RPV dose to 50 mg", "severity": "Moderate" }
    ],
    "warning": "Not recommended for patients with pre-treatment HIV-1 RNA >100,000 copies/mL (higher virologic failure rate). Take with a meal (480-700 kcal) for adequate absorption. QTc prolongation at supratherapeutic doses. Contraindicated with PPIs. Depressive disorders reported. Rash (usually mild). Not for use with most NNRTI-resistant virus.",
    "subCategoryId": "anti-hiv-nnrti"
  },
  {
    "id": "etravirine",
    "categoryId": "antivirals",
    "genericName": "Etravirine",
    "brandNames": "Intelence, Etravirine-200, Etrivan, TMC125, Etravir, Intelence-200",
    "description": "A second-generation NNRTI with activity against most NNRTI-resistant HIV-1 strains. Flexible diarylpyrimidine structure allows binding even with RT mutations. Used primarily in salvage therapy for NNRTI-resistant virus.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "200 mg PO BID after a meal", "sub": "Max: 400 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 2.5-4h", "sub": "Half-life 30-41h" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (treatment-experienced with NNRTI resistance)", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Take after a meal; CYP3A4/2C9/2C19 inducer; low genetic barrier to resistance", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Intelence", "form": "Tablet 100, 200 mg", "strengths": "100, 200 mg", "manufacturer": "Janssen (Johnson & Johnson)", "region": "Global" },
      { "name": "Etrivan", "form": "Tablet 200 mg", "strengths": "200 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Etravir", "form": "Tablet 200 mg", "strengths": "200 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "TMC125", "form": "Tablet 100, 200 mg", "strengths": "100, 200 mg", "manufacturer": "Various (Investigational)", "region": "Global" },
      { "name": "Etravirine (Generic)", "form": "Tablet 100, 200 mg", "strengths": "100, 200 mg", "manufacturer": "Various", "region": "India, Global" }
    ],
    "interactions": [
      { "drugClass": "CYP3A4/2C9/2C19 Inducer", "effect": "Reduced levels of many drugs metabolized by these enzymes", "severity": "Moderate" },
      { "drugClass": "Protease Inhibitors (Multiple)", "effect": "Variable interactions; monitor therapeutic response", "severity": "Moderate" },
      { "drugClass": "Warfarin", "effect": "Reduced warfarin levels (CYP2C9 induction); monitor INR closely", "severity": "Moderate" },
      { "drugClass": "Hormonal Contraceptives", "effect": "Reduced contraceptive efficacy; use additional barrier method", "severity": "Moderate" },
      { "drugClass": "Rifampin / Rifabutin", "effect": "Significantly reduced etravirine levels; avoid or increase dose", "severity": "Moderate" },
      { "drugClass": "Carbamazepine / Phenytoin", "effect": "Reduced etravirine levels; avoid coadministration", "severity": "Moderate" }
    ],
    "warning": "Severe rash (including SJS/TEN) reported; occurs most often in first 4-6 weeks. Monitor for rash, especially with other drugs causing rash. CYP3A4/2C9/2C19 inducer may reduce efficacy of concomitantly administered drugs. Take after a meal for optimal absorption. Not recommended for treatment-naive patients.",
    "subCategoryId": "anti-hiv-nnrti"
  },
  {
    "id": "darunavir",
    "categoryId": "antivirals",
    "genericName": "Darunavir",
    "brandNames": "Prezista, Daruvir, Darun, Darvir, Prezivir, Darunavir-600",
    "description": "A second-generation HIV protease inhibitor with potent activity against wild-type and PI-resistant HIV-1. Requires pharmacokinetic boosting with ritonavir or cobicistat. High genetic barrier to resistance; preferred PI in most guidelines.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1",
    "dosageForm": "Oral Tablets/Suspension",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "600 mg PO BID + ritonavir 100 mg BID (treatment-experienced)", "sub": "800 mg + RTV 100 mg daily (treatment-naive)" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 2.5-4h", "sub": "Half-life 15h (with RTV booster)" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (treatment-naive and experienced, including PI-resistant), HIV PEP", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Always use with RTV or COBI booster; sulfonamide moiety", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Prezista", "form": "Tablet 150, 300, 400, 600, 800 mg / Oral Suspension", "strengths": "150, 300, 400, 600, 800 mg", "manufacturer": "Janssen (Johnson & Johnson)", "region": "Global" },
      { "name": "Daruvir", "form": "Tablet 600 mg", "strengths": "600 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Darun", "form": "Tablet 600 mg", "strengths": "600 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Darvir", "form": "Tablet 600 mg", "strengths": "600 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Prezivir", "form": "Tablet 800 mg", "strengths": "800 mg", "manufacturer": "Pacific Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "CYP3A4 Substrates (Many)", "effect": "DRV/r inhibits CYP3A4; increased levels of many drugs", "severity": "Moderate" },
      { "drugClass": "HMG-CoA Reductase Inhibitors", "effect": "Increased statin levels; use atorvastatin with caution; avoid simvastatin/lovastatin", "severity": "Moderate" },
      { "drugClass": "Rifampin", "effect": "Significantly reduced DRV/r levels; contraindicated", "severity": "Moderate" },
      { "drugClass": "Hormonal Contraceptives", "effect": "Reduced ethinyl estradiol levels; use alternative contraception", "severity": "Moderate" },
      { "drugClass": "Sildenafil/Tadalafil", "effect": "Increased PDE5 levels; max sildenafil 25 mg/48h", "severity": "Moderate" },
      { "drugClass": "Antacids / H2RAs / PPIs", "effect": "No significant interaction with DRV/r", "severity": "Minor" }
    ],
    "warning": "Sulfonamide moiety - use with caution in sulfa allergy. Hepatotoxicity (monitor LFTs). Severe rash (SJS/TEN, DRESS) reported. Pancreatitis. Diabetes/ hyperglycemia. Fat redistribution. Hemophilia patients: increased bleeding risk. Always use with PK booster (RTV 100 mg or COBI 150 mg). Dose adjustment in severe hepatic impairment.",
    "subCategoryId": "anti-hiv-protease"
  },
  {
    "id": "atazanavir",
    "categoryId": "antivirals",
    "genericName": "Atazanavir",
    "brandNames": "Reyataz, Atazor, Atavir, Atazan, Zivavir, Reyataz-300",
    "description": "An HIV protease inhibitor with once-daily dosing and favorable lipid profile compared to other PIs. Unique side effect of unconjugated hyperbilirubinemia (benign). Requires boosting with ritonavir or cobicistat.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1",
    "dosageForm": "Oral Capsules",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "300 mg + ritonavir 100 mg PO daily with food", "sub": "400 mg PO daily (unboosted, rare use)" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 2.5h", "sub": "Half-life 7h (boosted 8-12h)" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (treatment-naive and experienced), HIV PEP", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Food increases absorption; gastric pH dependent; benign hyperbilirubinemia", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Reyataz", "form": "Capsule 150, 200, 300 mg", "strengths": "150, 200, 300 mg", "manufacturer": "Bristol-Myers Squibb", "region": "Global" },
      { "name": "Atazor", "form": "Capsule 300 mg", "strengths": "300 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Atavir", "form": "Capsule 300 mg", "strengths": "300 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Atazan", "form": "Capsule 300 mg", "strengths": "300 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Zivavir", "form": "Capsule 300 mg", "strengths": "300 mg", "manufacturer": "Pacific Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Proton Pump Inhibitors", "effect": "Significantly reduced ATV levels; avoid in boosted regimens; PPIs contraindicated", "severity": "Moderate" },
      { "drugClass": "H2 Receptor Antagonists", "effect": "Reduced ATV levels; separate doses by 12h", "severity": "Moderate" },
      { "drugClass": "Antacids / Buffered Medications", "effect": "Reduced ATV levels; separate by 2h", "severity": "Moderate" },
      { "drugClass": "Tenofovir", "effect": "Reduced ATV levels (25%); use with RTV booster", "severity": "Moderate" },
      { "drugClass": "HMG-CoA Reductase Inhibitors", "effect": "Increased statin levels; avoid simvastatin/lovastatin", "severity": "Moderate" },
      { "drugClass": "Rifampin", "effect": "Significantly reduced ATV levels; contraindicated", "severity": "Moderate" }
    ],
    "warning": "Benign unconjugated hyperbilirubinemia (jaundice/scleral icterus) in up to 40% - does not require discontinuation. Contraindicated with PPIs (unboosted regimens) or with boosted regimens in patients on high-dose PPIs. Nephrolithiasis and cholelithiasis reported. Not recommended for treatment-experienced patients with prior PI failure. Cardiac conduction abnormalities (PR prolongation).",
    "subCategoryId": "anti-hiv-protease"
  },
  {
    "id": "lopinavir",
    "categoryId": "antivirals",
    "genericName": "Lopinavir/Ritonavir",
    "brandNames": "Kaletra, Aluvia, Lopimune, Lopinir, Kaltra, LPV/r",
    "description": "A fixed-dose combination of lopinavir (protease inhibitor) boosted with ritonavir (CYP3A4 inhibitor). High genetic barrier to resistance. Historically a cornerstone of ART. GI intolerance is the main limiting side effect.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1",
    "dosageForm": "Oral Tablets/Solution",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "400/100 mg (2 tablets) PO BID with food", "sub": "Max: 800/200 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 4-6h", "sub": "Half-life 5-6h (lopinavir)" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (treatment-naive and experienced), HIV PEP, pediatric HIV", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Take with food for optimal absorption; GI side effects common; QT prolongation risk", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Kaletra", "form": "Tablet 100/25 mg, 200/50 mg / Oral Solution 80/20 mg/mL", "strengths": "100/25, 200/50 mg", "manufacturer": "AbbVie", "region": "Global" },
      { "name": "Aluvia", "form": "Tablet 100/25, 200/50 mg", "strengths": "100/25, 200/50 mg", "manufacturer": "AbbVie", "region": "Developing countries" },
      { "name": "Lopimune", "form": "Tablet 100/25, 200/50 mg", "strengths": "100/25, 200/50 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Lopinir", "form": "Tablet 200/50 mg", "strengths": "200/50 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Kaltra", "form": "Tablet 200/50 mg", "strengths": "200/50 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "CYP3A4 Substrates (Many)", "effect": "LPV/r inhibits CYP3A4; increased levels of many drugs", "severity": "Moderate" },
      { "drugClass": "HMG-CoA Reductase Inhibitors", "effect": "Increased statin levels; avoid simvastatin/lovastatin; use atorvastatin with caution", "severity": "Moderate" },
      { "drugClass": "Rifampin", "effect": "Significantly reduced LPV/r levels; contraindicated", "severity": "Moderate" },
      { "drugClass": "Hormonal Contraceptives", "effect": "Reduced contraceptive efficacy; use alternative method", "severity": "Moderate" },
      { "drugClass": "Sildenafil/Tadalafil", "effect": "Increased PDE5 levels; max sildenafil 25 mg/48h", "severity": "Moderate" },
      { "drugClass": "Methadone", "effect": "Reduced methadone levels; monitor for withdrawal", "severity": "Moderate" }
    ],
    "warning": "GI intolerance (diarrhea, nausea) common - usually improves over time. Pancreatitis (especially in patients with hypertriglyceridemia). Hepatotoxicity. PR and QT interval prolongation (ECG monitoring recommended in at-risk patients). Diabetes/hyperglycemia. Increased bleeding risk in hemophilia. Fat redistribution. Oral solution contains 42% alcohol.",
    "subCategoryId": "anti-hiv-protease"
  },
  {
    "id": "ritonavir",
    "categoryId": "antivirals",
    "genericName": "Ritonavir",
    "brandNames": "Norvir, Ritovir, Ritonavir-100, R-Cin, Ritonavir Boost",
    "description": "An HIV protease inhibitor used primarily at subtherapeutic doses (100-200 mg) as a pharmacokinetic booster for other PIs and some non-PI ARVs due to potent CYP3A4 inhibition. Full therapeutic dose rarely used due to GI intolerance.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1 (Boosting Agent)",
    "dosageForm": "Oral Tablets/Capsules/Solution",
    "stats": [
      { "label": "STANDARD ADULT DOSE (BOOSTING)", "value": "100-200 mg PO daily or BID (as booster)", "sub": "Max: 600 mg BID (therapeutic)" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 2-4h", "sub": "Half-life 3-5h (dose-dependent)" },
      { "label": "CLINICAL INDICATIONS", "value": "Pharmacokinetic booster for PIs (darunavir, atazanavir, lopinavir), HIV treatment (full dose)", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "CYP3A4 inhibitor (boosting effect); GI intolerance limits full-dose use", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Norvir", "form": "Tablet 100 mg / Capsule 100 mg / Oral Solution 80 mg/mL", "strengths": "100 mg; 80 mg/mL", "manufacturer": "AbbVie", "region": "Global" },
      { "name": "Ritovir", "form": "Tablet 100 mg", "strengths": "100 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Ritonavir-100", "form": "Tablet 100 mg", "strengths": "100 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "R-Cin", "form": "Tablet 100 mg", "strengths": "100 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Ritonavir Boost", "form": "Tablet 100 mg", "strengths": "100 mg", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "CYP3A4 Substrates (Extensive List)", "effect": "Potent CYP3A4 inhibitor; dramatically increases levels of many drugs", "severity": "Moderate" },
      { "drugClass": "HMG-CoA Reductase Inhibitors", "effect": "Contraindicated with simvastatin/lovastatin; atorvastatin dose cap", "severity": "Moderate" },
      { "drugClass": "Antiarrhythmics (Amiodarone, Flecainide, Quinidine)", "effect": "Increased antiarrhythmic levels; potential for serious toxicity", "severity": "Moderate" },
      { "drugClass": "Ergot Derivatives", "effect": "Contraindicated (risk of ergotism)", "severity": "Moderate" },
      { "drugClass": "Midazolam / Triazolam", "effect": "Contraindicated (prolonged sedation, respiratory depression)", "severity": "Moderate" },
      { "drugClass": "Rifampin", "effect": "Reduced ritonavir levels; avoid coadministration", "severity": "Moderate" }
    ],
    "warning": "GI intolerance (nausea, vomiting, diarrhea, taste perversion) at full dose - limit use to boosting dose (100-200 mg/day). Potent CYP3A4 inhibitor - extensive drug interaction profile; always check interaction potential. Hepatotoxicity. Pancreatitis (especially with hypertriglyceridemia). QT/PR prolongation. Fat redistribution. Oral solution contains alcohol.",
    "subCategoryId": "anti-hiv-protease"
  },
  {
    "id": "dolutegravir",
    "categoryId": "antivirals",
    "genericName": "Dolutegravir",
    "brandNames": "Tivicay, Dolutevir, Dolugrav, Dolut, Tivicay-50, DTG-50",
    "description": "A second-generation HIV integrase strand transfer inhibitor (INSTI) with potent activity, once-daily dosing, and a high genetic barrier to resistance. Preferred first-line agent in most international HIV guidelines. Also available as single-tablet regimen.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "50 mg PO daily (treatment-naive)", "sub": "50 mg PO BID (INSTI-resistant)" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 2-3h", "sub": "Half-life 14h" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (first-line ART, switch therapy), HIV PEP/PrEP, pediatric HIV", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Avoid with polyvalent cations; high barrier to resistance; weight gain reported", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Tivicay", "form": "Tablet 10, 25, 50 mg", "strengths": "10, 25, 50 mg", "manufacturer": "GSK / ViiV Healthcare", "region": "Global" },
      { "name": "Dolutevir", "form": "Tablet 50 mg", "strengths": "50 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Dolugrav", "form": "Tablet 50 mg", "strengths": "50 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Dolut", "form": "Tablet 50 mg", "strengths": "50 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "DTG-50", "form": "Tablet 50 mg", "strengths": "50 mg", "manufacturer": "Pacific Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Polyvalent Cation-Containing Products (Antacids, Fe, Ca, Mg, Zn, Suplementos)", "effect": "Reduced DTG absorption; separate by 2h (antacids) or 6h (Fe/Ca/Mg)", "severity": "Moderate" },
      { "drugClass": "Rifampin", "effect": "Reduced DTG levels (54%); increase DTG to 50 mg BID", "severity": "Moderate" },
      { "drugClass": "Efavirenz / Nevirapine", "effect": "Reduced DTG levels; no dose adjustment needed for once-daily", "severity": "Moderate" },
      { "drugClass": "Carbamazepine / Phenytoin / Phenobarbital", "effect": "Reduced DTG levels; use 50 mg BID", "severity": "Moderate" },
      { "drugClass": "Metformin", "effect": "Increased metformin levels; monitor for metformin side effects", "severity": "Moderate" },
      { "drugClass": "Dofetilide", "effect": "Increased dofetilide levels; contraindicated", "severity": "Moderate" }
    ],
    "warning": "Reported neural tube defects with periconceptional DTG exposure (Botswana study); now considered low risk with folate supplementation. Weight gain (particularly in women and certain ethnic groups). Insomnia, headache. Hypersensitivity reactions (rare). Hepatitis/hepatic flare in HBV coinfection. Separate dosing from polyvalent cations.",
    "subCategoryId": "anti-hiv-integrase"
  },
  {
    "id": "raltegravir",
    "categoryId": "antivirals",
    "genericName": "Raltegravir",
    "brandNames": "Isentress, Raltevir, Raltegrav, Ralvir, Isentress-400, RAL-400",
    "description": "First approved HIV integrase strand transfer inhibitor (INSTI). Potent and well-tolerated with minimal drug interactions. Requires twice-daily dosing. Lower genetic barrier to resistance compared to dolutegravir.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1",
    "dosageForm": "Oral Tablets/Chewable/Powder",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "400 mg PO BID", "sub": "Max: 800 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 1.5-2h", "sub": "Half-life 9h" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (treatment-naive and experienced), HIV PEP, pregnancy", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Minimal CYP450 interactions; BID dosing; lower barrier to resistance vs DTG", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Isentress", "form": "Tablet 400 mg / Chewable 100, 25 mg / Powder", "strengths": "400 mg; 100, 25 mg chewable", "manufacturer": "Merck Sharp & Dohme", "region": "Global" },
      { "name": "Raltevir", "form": "Tablet 400 mg", "strengths": "400 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Raltegrav", "form": "Tablet 400 mg", "strengths": "400 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Ralvir", "form": "Tablet 400 mg", "strengths": "400 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "RAL-400", "form": "Tablet 400 mg", "strengths": "400 mg", "manufacturer": "Pacific Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Rifampin", "effect": "Reduced RAL levels (40%); increase RAL to 800 mg BID", "severity": "Moderate" },
      { "drugClass": "Aluminum/Magnesium Antacids", "effect": "Reduced RAL absorption; separate by 2h", "severity": "Moderate" },
      { "drugClass": "Calcium Carbonate", "effect": "Reduced RAL levels; take RAL 2h before or 6h after", "severity": "Moderate" },
      { "drugClass": "Iron Supplements", "effect": "Reduced RAL levels; separate by 2h", "severity": "Moderate" },
      { "drugClass": "Carbamazepine / Phenytoin", "effect": "Reduced RAL levels; use alternative anticonvulsant if possible", "severity": "Moderate" },
      { "drugClass": "Tipranavir/Ritonavir", "effect": "Reduced RAL levels (24%); no dose adjustment needed", "severity": "Minor" }
    ],
    "warning": "Rash (including SJS/TEN) reported; Stevens-Johnson syndrome in early treatment. CPK elevation and myopathy/rhabdomyolysis (rare). Monitor for muscle symptoms. Lower genetic barrier to resistance than dolutegravir - adherence critical. Depression and suicidal ideation reported. BID dosing required. Minimal CYP interactions overall.",
    "subCategoryId": "anti-hiv-integrase"
  },
  {
    "id": "bictegravir",
    "categoryId": "antivirals",
    "genericName": "Bictegravir",
    "brandNames": "Biktarvy (combination), Bictegravir-50, Bicvir, Bictegra, Bic-50",
    "description": "A next-generation HIV integrase strand transfer inhibitor (INSTI) with potent activity, once-daily dosing, and a high genetic barrier to resistance. Available only as part of single-tablet regimen Biktarvy (BIC/FTC/TAF).",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1",
    "dosageForm": "Oral Tablets (STR only)",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "50 mg PO daily (as Biktarvy: BIC 50/FTC 200/TAF 25 mg)", "sub": "Max: 50 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 2-4h", "sub": "Half-life 17h" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (first-line ART as single-tablet regimen)", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Only available as STR with FTC/TAF; avoid with polyvalent cations", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Biktarvy", "form": "Tablet 50/200/25 mg (BIC/FTC/TAF)", "strengths": "50/200/25 mg", "manufacturer": "Gilead Sciences", "region": "Global" },
      { "name": "Bicvir", "form": "Tablet 50 mg (standalone, India)", "strengths": "50 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Bictegra", "form": "Tablet 50 mg", "strengths": "50 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Bic-50", "form": "Tablet 50 mg", "strengths": "50 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Bictegravir (Generic)", "form": "Tablet 50 mg", "strengths": "50 mg", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Polyvalent Cation-Containing Products (Antacids, Suplementos)", "effect": "Reduced BIC absorption; separate by 2h (antacids) or 6h (Fe/Ca/Mg/Zn)", "severity": "Moderate" },
      { "drugClass": "Rifampin", "effect": "Reduced BIC levels (75%); contraindicated", "severity": "Moderate" },
      { "drugClass": "Carbamazepine / Phenytoin / Phenobarbital", "effect": "Reduced BIC levels; contraindicated", "severity": "Moderate" },
      { "drugClass": "Rifabutin", "effect": "Reduced BIC levels (25%); may use standard dose", "severity": "Moderate" },
      { "drugClass": "Dofetilide", "effect": "Increased dofetilide levels; contraindicated", "severity": "Moderate" },
      { "drugClass": "Metformin", "effect": "Increased metformin levels (40%); monitor metformin side effects", "severity": "Moderate" }
    ],
    "warning": "Weight gain reported (less than DTG but more than RAL). Contraindicated with rifampin and carbamazepine due to significant BIC level reduction. Only available as STR with FTC/TAF. Separate dosing from polyvalent cations. Insomnia, headache, diarrhea reported. Monitor renal function (due to TAF component). Lower neuropsychiatric side effects vs DTG.",
    "subCategoryId": "anti-hiv-integrase"
  },
  {
    "id": "sofosbuvir",
    "categoryId": "antivirals",
    "genericName": "Sofosbuvir",
    "brandNames": "Sovaldi, Sofovir, Hepcinat, Sofocure, Sofos-400, Sofalen",
    "description": "A nucleotide analogue NS5B polymerase inhibitor for HCV. Prodrug converted to active triphosphate that chain-terminates HCV RNA replication. Cornerstone of DAA therapy; pan-genotypic activity in combination regimens.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HCV",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "400 mg PO daily (usually with ledipasvir, daclatasvir, or velpatasvir)", "sub": "Duration: 8-24 weeks depending on regimen" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 0.5-2h", "sub": "Half-life 0.4h (parent); 27h (active metabolite GS-331007)" },
      { "label": "CLINICAL INDICATIONS", "value": "HCV genotypes 1-6 (in combination DAA regimens), HCV/HIV coinfection, HCV post-transplant", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Requires combination therapy; check renal function; pregnancy test before therapy", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Sovaldi", "form": "Tablet 200, 400 mg", "strengths": "200, 400 mg", "manufacturer": "Gilead Sciences", "region": "Global" },
      { "name": "Sofovir", "form": "Tablet 400 mg", "strengths": "400 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Hepcinat", "form": "Tablet 400 mg", "strengths": "400 mg", "manufacturer": "Natco Pharma", "region": "India" },
      { "name": "Sofocure", "form": "Tablet 400 mg", "strengths": "400 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Sofalen", "form": "Tablet 400 mg", "strengths": "400 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Amiodarone", "effect": "Severe bradycardia when used with amiodarone + sofosbuvir-based regimen; avoid", "severity": "Moderate" },
      { "drugClass": "Rosuvastatin", "effect": "Increased rosuvastatin levels (2-3x); use lowest effective dose", "severity": "Moderate" },
      { "drugClass": "Rifampin / St. John's Wort", "effect": "Reduced SOF levels; avoid coadministration", "severity": "Moderate" },
      { "drugClass": "Carbamazepine / Phenytoin", "effect": "Reduced SOF levels; avoid coadministration", "severity": "Moderate" },
      { "drugClass": "P-gp Inducers (Multiple)", "effect": "Reduced sofosbuvir levels; avoid or monitor", "severity": "Moderate" },
      { "drugClass": "Hormonal Contraceptives", "effect": "No significant interaction; can be used together", "severity": "Minor" }
    ],
    "warning": "Amiodarone coadministration: risk of severe symptomatic bradycardia and heart block (fatal cases reported). Do not use with amiodarone unless no alternatives. HBV reactivation reported in HBV/HCV coinfection (screen all patients). Renal impairment: safety data limited in ESRD. Pregnancy test required before therapy. Not recommended as monotherapy.",
    "subCategoryId": "anti-hcv"
  },
  {
    "id": "ledipasvir-sofosbuvir",
    "categoryId": "antivirals",
    "genericName": "Ledipasvir/Sofosbuvir",
    "brandNames": "Harvoni, Ledisof, Hepcvir-L, Ledihep, Harvoni-LS, Sofos-L",
    "description": "Fixed-dose combination of ledipasvir (NS5A inhibitor) and sofosbuvir (NS5B polymerase inhibitor) for HCV genotype 1. First all-oral, interferon-free DAA regimen. High SVR rates (>95%) with excellent tolerability.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HCV Genotype 1",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "90/400 mg (1 tablet) PO daily", "sub": "Duration: 8-24 weeks" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 4-4.5h (ledipasvir); 0.5-2h (sofosbuvir)", "sub": "Half-life 47h (LDV); 27h (SOF metabolite)" },
      { "label": "CLINICAL INDICATIONS", "value": "HCV genotype 1 (treatment-naive and experienced), HCV/HIV coinfection, compensated cirrhosis", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Check for NS5A resistance before use in genotype 1a; SVR >95%", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Harvoni", "form": "Tablet 90/400 mg (LDV/SOF)", "strengths": "90/400 mg", "manufacturer": "Gilead Sciences", "region": "Global" },
      { "name": "Ledisof", "form": "Tablet 90/400 mg", "strengths": "90/400 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Hepcvir-L", "form": "Tablet 90/400 mg", "strengths": "90/400 mg", "manufacturer": "Natco Pharma", "region": "India" },
      { "name": "Ledihep", "form": "Tablet 90/400 mg", "strengths": "90/400 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Sofos-L", "form": "Tablet 90/400 mg", "strengths": "90/400 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Amiodarone", "effect": "Severe bradycardia; contraindicated", "severity": "Moderate" },
      { "drugClass": "Rosuvastatin", "effect": "Increased rosuvastatin levels (LDV inhibits OATP1B1/1B3)", "severity": "Moderate" },
      { "drugClass": "P-gp Inducers (Rifampin, Carbamazepine, St. John's Wort)", "effect": "Reduced LDV/SOF levels; avoid", "severity": "Moderate" },
      { "drugClass": "Antacids / PPIs / H2RAs", "effect": "Reduced ledipasvir absorption (pH-dependent); separate doses", "severity": "Moderate" },
      { "drugClass": "Tenofovir (TDF)", "effect": "Increased tenofovir levels (LDV inhibits P-gp); monitor renal function", "severity": "Moderate" },
      { "drugClass": "Hormonal Contraceptives", "effect": "No significant interaction", "severity": "Minor" }
    ],
    "warning": "Antacids/PPIs reduce ledipasvir absorption: separate antacids by 4h; H2RAs can be used concomitantly (with timing) or 12h apart; PPIs (omeprazole 20 mg max) take Harvoni simultaneously with food. Amiodarone: risk of severe bradycardia. HBV reactivation risk. Not for genotype 3 or 4 as first-line (use other DAAs).",
    "subCategoryId": "anti-hcv"
  },
  {
    "id": "daclatasvir",
    "categoryId": "antivirals",
    "genericName": "Daclatasvir",
    "brandNames": "Daklinza, Daclahep, Daclavir, Daclat, Dacinat, DCV-60",
    "description": "An NS5A inhibitor with pan-genotypic activity against HCV. Used in combination with sofosbuvir as an effective pangenotypic regimen. Generally well tolerated with high SVR rates.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HCV",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "60 mg PO daily (with sofosbuvir 400 mg daily)", "sub": "Duration: 12-24 weeks" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 1-2h", "sub": "Half-life 12-15h" },
      { "label": "CLINICAL INDICATIONS", "value": "HCV genotypes 1-6 (with sofosbuvir), HCV/HIV coinfection, compensated/decompensated cirrhosis", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Dose adjustment with strong CYP3A4 inhibitors/inducers; pan-genotypic", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Daklinza", "form": "Tablet 30, 60, 90 mg", "strengths": "30, 60, 90 mg", "manufacturer": "Bristol-Myers Squibb", "region": "Global" },
      { "name": "Daclahep", "form": "Tablet 60 mg", "strengths": "60 mg", "manufacturer": "Natco Pharma", "region": "India" },
      { "name": "Daclavir", "form": "Tablet 60 mg", "strengths": "60 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Daclat", "form": "Tablet 60 mg", "strengths": "60 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Dacinat", "form": "Tablet 60 mg", "strengths": "60 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "CYP3A4 Inducers (Rifampin, Carbamazepine, Phenytoin)", "effect": "Reduced DCV levels (50-90%); avoid", "severity": "Moderate" },
      { "drugClass": "CYP3A4 Inhibitors (Ketoconazole, Clarithromycin, RTV)", "effect": "Increased DCV levels; reduce DCV to 30 mg", "severity": "Moderate" },
      { "drugClass": "Amiodarone", "effect": "Risk of severe bradycardia; avoid", "severity": "Moderate" },
      { "drugClass": "Digoxin", "effect": "Increased digoxin levels (P-gp inhibition); monitor", "severity": "Moderate" },
      { "drugClass": "Statins (Rosuvastatin, Atorvastatin)", "effect": "Increased statin levels; monitor for statin toxicity", "severity": "Moderate" },
      { "drugClass": "P-gp Inducers", "effect": "Reduced DCV levels; monitor virologic response", "severity": "Moderate" }
    ],
    "warning": "Amiodarone coadministration: risk of severe symptomatic bradycardia (fatal cases reported) when used with DCV + SOF. Reduce DCV dose to 30 mg with strong CYP3A4 inhibitors. Increase to 90 mg with mild-moderate CYP3A4 inducers. HBV reactivation risk. Bradycardia risk with beta-blockers (unknown mechanism). Not recommended as monotherapy.",
    "subCategoryId": "anti-hcv"
  },
  {
    "id": "velpatasvir-sofosbuvir",
    "categoryId": "antivirals",
    "genericName": "Velpatasvir/Sofosbuvir",
    "brandNames": "Epclusa, Velpanat, Hepcvir-V, Sofosvel, Velasof, Velpanex",
    "description": "Pan-genotypic fixed-dose combination of velpatasvir (NS5A inhibitor) and sofosbuvir (NS5B polymerase inhibitor). First and only single-tablet regimen approved for all six major HCV genotypes. SVR rates >95% across genotypes.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HCV (Pan-genotypic)",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "100/400 mg (1 tablet) PO daily", "sub": "Duration: 12 weeks (non-cirrhotic); 12-24 weeks (cirrhotic)" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 3h (VEL); 0.5-2h (SOF)", "sub": "Half-life 15h (VEL); 27h (SOF metabolite)" },
      { "label": "CLINICAL INDICATIONS", "value": "HCV genotypes 1-6 (first-line pan-genotypic), HCV/HIV coinfection, compensated cirrhosis, decompensated cirrhosis (+ ribavirin)", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "First pan-genotypic STR; ± ribavirin in decompensated cirrhosis; check for NS5A RAVs", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Epclusa", "form": "Tablet 100/400 mg (VEL/SOF)", "strengths": "100/400 mg", "manufacturer": "Gilead Sciences", "region": "Global" },
      { "name": "Velpanat", "form": "Tablet 100/400 mg", "strengths": "100/400 mg", "manufacturer": "Natco Pharma", "region": "India" },
      { "name": "Hepcvir-V", "form": "Tablet 100/400 mg", "strengths": "100/400 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Sofosvel", "form": "Tablet 100/400 mg", "strengths": "100/400 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Velpanex", "form": "Tablet 100/400 mg", "strengths": "100/400 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Amiodarone", "effect": "Severe bradycardia; contraindicated", "severity": "Moderate" },
      { "drugClass": "Rosuvastatin", "effect": "Increased rosuvastatin levels (VEL inhibits OATP1B1/1B3)", "severity": "Moderate" },
      { "drugClass": "P-gp / CYP Inducers (Rifampin, Carbamazepine, St. John's Wort)", "effect": "Reduced VEL/SOF levels; avoid", "severity": "Moderate" },
      { "drugClass": "PPIs / H2RAs / Antacids", "effect": "Reduced velpatasvir absorption (pH-dependent); separate doses", "severity": "Moderate" },
      { "drugClass": "Tenofovir (TDF)", "effect": "Increased tenofovir levels; monitor renal function", "severity": "Moderate" },
      { "drugClass": "Hormonal Contraceptives", "effect": "No significant interaction; may be used together", "severity": "Minor" }
    ],
    "warning": "Amiodarone coadministration: risk of severe bradycardia and heart block. HBV reactivation reported. Check for NS5A resistance-associated variants in genotype 1a with cirrhosis. Decompensated cirrhosis: add ribavirin 600-1000 mg/day. Antacids: separate by 4h; H2RAs: administer simultaneously or separate by 12h; PPIs: max omeprazole 20 mg.",
    "subCategoryId": "anti-hcv"
  },
  {
    "id": "glecaprevir-pibrentasvir",
    "categoryId": "antivirals",
    "genericName": "Glecaprevir/Pibrentasvir",
    "brandNames": "Mavyret, Maviret, Glecaprevir-Pibrentasvir, G/P, Hepcovex, Glecapib",
    "description": "A pan-genotypic fixed-dose combination of glecaprevir (NS3/4A protease inhibitor) and pibrentasvir (NS5A inhibitor). Short-duration (8-week) regimen for non-cirrhotic treatment-naive patients. High barrier to resistance.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HCV (Pan-genotypic)",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "300/120 mg (3 tablets) PO daily with food", "sub": "Duration: 8 weeks (non-cirrhotic, naive); 12-16 weeks (cirrhotic/experienced)" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 5h (GLE); 5h (PIB)", "sub": "Half-life 6h (GLE); 13h (PIB)" },
      { "label": "CLINICAL INDICATIONS", "value": "HCV genotypes 1-6 (pan-genotypic), treatment-naive and experienced, compensated cirrhosis", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Contraindicated in decompensated cirrhosis; short 8-week option; take with food", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Mavyret", "form": "Tablet 100/40 mg (3 tablets daily)", "strengths": "100/40 mg per tablet", "manufacturer": "AbbVie", "region": "USA" },
      { "name": "Maviret", "form": "Tablet 100/40 mg", "strengths": "100/40 mg", "manufacturer": "AbbVie", "region": "Europe, Canada" },
      { "name": "Hepcovex", "form": "Tablet 100/40 mg", "strengths": "100/40 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Glecapib", "form": "Tablet 100/40 mg", "strengths": "100/40 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "G/P (Generic)", "form": "Tablet 100/40 mg", "strengths": "100/40 mg", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "CYP3A4 Inducers (Rifampin, Carbamazepine, St. John's Wort)", "effect": "Reduced GLE/PIB levels; avoid coadministration", "severity": "Moderate" },
      { "drugClass": "Ethinyl Estradiol (Oral Contraceptives)", "effect": "Increased ALT elevations; contraindicated", "severity": "Moderate" },
      { "drugClass": "Atorvastatin / Rosuvastatin", "effect": "Increased statin levels; use pravastatin or pitavastatin", "severity": "Moderate" },
      { "drugClass": "Carbamazepine / Phenytoin", "effect": "Reduced GLE/PIB levels; avoid", "severity": "Moderate" },
      { "drugClass": "Warfarin", "effect": "No significant interaction; monitor INR as standard", "severity": "Minor" },
      { "drugClass": "Methadone", "effect": "No significant interaction", "severity": "Minor" }
    ],
    "warning": "Contraindicated in decompensated cirrhosis (Child-Pugh B or C). Contraindicated with ethinyl estradiol-containing contraceptives (ALT elevations). HBV reactivation risk. Take with food (3 tablets once daily). Short 8-week duration makes it attractive for treatment-naive patients. Not recommended in patients with prior NS5A/NS3 exposure failure (check resistance).",
    "subCategoryId": "anti-hcv"
  },
  {
    "id": "ganciclovir",
    "categoryId": "antivirals",
    "genericName": "Ganciclovir",
    "brandNames": "Cytovene, Ganciclovir IV, Cymevene, Gancyte, Virgan, Gancic-500",
    "description": "A nucleoside analogue (similar to acyclovir) that inhibits CMV DNA polymerase after phosphorylation by viral UL97 kinase. First-line for CMV disease in immunocompromised (transplant, AIDS). Significant myelotoxicity limits use.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "CMV Infections",
    "dosageForm": "IV Infusion/Intravitreal Implant",
    "stats": [
      { "label": "STANDARD ADULT DOSE (IV)", "value": "5 mg/kg IV q12h x 14-21 days (induction)", "sub": "Maintenance: 5 mg/kg IV daily or 6 mg/kg 5x/week" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak: end of IV infusion", "sub": "Half-life 2.5-5h; >24h ESRD" },
      { "label": "CLINICAL INDICATIONS", "value": "CMV retinitis, CMV colitis/pneumonitis/esophagitis, CMV prophylaxis in transplant, congenital CMV", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Adjust dose in renal impairment; significant myelotoxicity; central line preferred", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Cytovene", "form": "IV Infusion 500 mg/vial", "strengths": "500 mg/vial", "manufacturer": "Roche", "region": "USA, Global" },
      { "name": "Cymevene", "form": "IV Infusion 500 mg", "strengths": "500 mg", "manufacturer": "Roche", "region": "Europe" },
      { "name": "Gancyte", "form": "IV Infusion 500 mg", "strengths": "500 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Gancic-500", "form": "IV Infusion 500 mg", "strengths": "500 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Virgan", "form": "Intravitreal Implant 4.5 mg", "strengths": "4.5 mg implant", "manufacturer": "Bausch & Lomb", "region": "Europe" }
    ],
    "interactions": [
      { "drugClass": "Zidovudine", "effect": "Additive myelotoxicity; avoid if possible", "severity": "Moderate" },
      { "drugClass": "Mycophenolate Mofetil", "effect": "Increased levels of both drugs; monitor for toxicity", "severity": "Moderate" },
      { "drugClass": "Cytotoxic Drugs (Cyclophosphamide, Doxorubicin)", "effect": "Additive myelotoxicity", "severity": "Moderate" },
      { "drugClass": "Nephrotoxic Drugs", "effect": "Additive nephrotoxicity; separate if possible", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Reduced ganciclovir clearance; monitor for toxicity", "severity": "Moderate" },
      { "drugClass": "Didanosine", "effect": "Increased didanosine levels; monitor for ddI toxicity", "severity": "Moderate" }
    ],
    "warning": "Dose-limiting myelotoxicity: neutropenia (ANC <500), thrombocytopenia, anemia. Monitor CBC 2-3x weekly during induction. Adjust dose in renal impairment (CrCl <70). Carcinogenic and teratogenic. May cause infertility. CNS effects (headache, confusion, seizures). Extravasation risk. IV administration only (no IM).",
    "subCategoryId": "anti-cmv"
  },
  {
    "id": "valganciclovir",
    "categoryId": "antivirals",
    "genericName": "Valganciclovir",
    "brandNames": "Valcyte, Valcyt, Valgan, Valvir, Ganciclovir-Val, Valgan-450",
    "description": "L-valyl ester prodrug of ganciclovir with improved oral bioavailability (60%). Converted to ganciclovir by intestinal/hepatic esterases. Used for CMV prophylaxis in transplant and maintenance therapy for CMV retinitis.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "CMV Prophylaxis/Treatment",
    "dosageForm": "Oral Tablets/Powder for Solution",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "900 mg PO BID (induction); 900 mg PO daily (maintenance/prophylaxis)", "sub": "Max: 1800 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 1-3h (as ganciclovir)", "sub": "Half-life 4-5h (ganciclovir)" },
      { "label": "CLINICAL INDICATIONS", "value": "CMV retinitis (maintenance), CMV prophylaxis in solid organ transplant, CMV treatment (mild-moderate)", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Better than IV ganciclovir for prophylaxis; take with food; adjust in renal impairment", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Valcyte", "form": "Tablet 450 mg / Powder for Oral Solution 50 mg/mL", "strengths": "450 mg", "manufacturer": "Roche / Genentech", "region": "Global" },
      { "name": "Valcyt", "form": "Tablet 450 mg", "strengths": "450 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Valgan", "form": "Tablet 450 mg", "strengths": "450 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Valvir", "form": "Tablet 450 mg", "strengths": "450 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Valgan-450", "form": "Tablet 450 mg", "strengths": "450 mg", "manufacturer": "Pacific Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Zidovudine", "effect": "Additive myelotoxicity; avoid if possible", "severity": "Moderate" },
      { "drugClass": "Mycophenolate Mofetil", "effect": "Increased levels; monitor for MMF toxicity", "severity": "Moderate" },
      { "drugClass": "Nephrotoxic Drugs", "effect": "Additive nephrotoxicity risk", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Reduced ganciclovir clearance; increased levels", "severity": "Moderate" },
      { "drugClass": "Didanosine", "effect": "Increased didanosine levels; monitor", "severity": "Moderate" },
      { "drugClass": "Cytotoxic Drugs", "effect": "Additive myelotoxicity; monitor CBC closely", "severity": "Moderate" }
    ],
    "warning": "Same myelotoxicity profile as IV ganciclovir: neutropenia, anemia, thrombocytopenia. Monitor CBC frequently. Adjust dose in renal impairment (all doses). Carcinogenic and teratogenic. Take with food for optimal absorption. Not a substitute for IV ganciclovir in life-threatening CMV disease. Contraindicated if ANC <500 or platelets <25,000.",
    "subCategoryId": "anti-cmv"
  },
  {
    "id": "foscarnet",
    "categoryId": "antivirals",
    "genericName": "Foscarnet",
    "brandNames": "Foscavir, Foscarnet Sodium, Foscarnet IV, Virudin, Foscarnet-6000",
    "description": "An inorganic pyrophosphate analogue that directly inhibits viral DNA polymerase and HIV reverse transcriptase without requiring phosphorylation. Used for CMV retinitis and acyclovir-resistant HSV. Significant nephrotoxicity limits use.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "CMV (Acyclovir-resistant HSV)",
    "dosageForm": "IV Infusion",
    "stats": [
      { "label": "STANDARD ADULT DOSE (CMV)", "value": "60 mg/kg IV q8h or 90 mg/kg IV q12h x 14-21 days", "sub": "Maintenance: 90-120 mg/kg IV daily" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak: end of infusion", "sub": "Half-life 3-6h; 4x longer in ESRD" },
      { "label": "CLINICAL INDICATIONS", "value": "CMV retinitis (especially ganciclovir-resistant), acyclovir-resistant HSV/VZV, HIV (salvage)", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Must monitor renal function and electrolytes; pre-hydration essential; central line preferred", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Foscavir", "form": "IV Infusion 6000 mg/250 mL, 12000 mg/500 mL", "strengths": "24 mg/mL", "manufacturer": "Clinigen / AstraZeneca", "region": "USA, Europe" },
      { "name": "Foscarnet Sodium", "form": "IV Infusion", "strengths": "24 mg/mL", "manufacturer": "Various (Generic)", "region": "Global" },
      { "name": "Virudin", "form": "IV Infusion 6000 mg", "strengths": "6000 mg/250 mL", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Foscarnet IV", "form": "IV Infusion 6000 mg", "strengths": "6000 mg/250 mL", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Foscarnet-6000", "form": "IV Infusion", "strengths": "6000 mg/250 mL", "manufacturer": "Pacific Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Nephrotoxic Drugs (Aminoglycosides, Cyclosporine, Amphotericin B, Tacrolimus)", "effect": "Additive nephrotoxicity; avoid if possible", "severity": "Moderate" },
      { "drugClass": "Pentamidine IV", "effect": "Additive nephrotoxicity and hypocalcemia risk; avoid", "severity": "Moderate" },
      { "drugClass": "QTc-Prolonging Drugs", "effect": "Increased QT prolongation risk due to electrolyte abnormalities", "severity": "Moderate" },
      { "drugClass": "Zidovudine", "effect": "Additive anemia; monitor CBC", "severity": "Moderate" },
      { "drugClass": "IV Ciprofloxacin", "effect": "Increased seizure risk; avoid if possible", "severity": "Moderate" },
      { "drugClass": "Ribavirin", "effect": "Possible additive toxicity; limited data", "severity": "Minor" }
    ],
    "warning": "Nephrotoxicity: monitor CrCl daily, pre-hydrate with 500-1000 mL NS before each dose. Electrolyte disturbances: hypocalcemia, hypokalemia, hypomagnesemia, hypophosphatemia (can cause seizures, tetany, arrhythmias). Genital ulceration (from excreted drug). Anemia. Seizures. Dose adjustment: reduce dose for CrCl <60. Administer via infusion pump only.",
    "subCategoryId": "anti-cmv"
  },
  {
    "id": "cidofovir",
    "categoryId": "antivirals",
    "genericName": "Cidofovir",
    "brandNames": "Vistide, Cidofovir IV, Cidovir, Cidofovir-375, Forvade",
    "description": "A cytidine nucleotide analogue with broad-spectrum DNA virus activity. Resistant to most viral kinase mutations. Used for CMV retinitis in AIDS patients. Prodrug requires intracellular phosphorylation. Highly nephrotoxic with prolonged intracellular half-life.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "CMV Retinitis",
    "dosageForm": "IV Infusion",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "5 mg/kg IV weekly x 2 weeks (induction)", "sub": "Maintenance: 5 mg/kg IV q2 weeks" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak: end of infusion", "sub": "Half-life 2.5h; intracellular >48h (active metabolite)" },
      { "label": "CLINICAL INDICATIONS", "value": "CMV retinitis in AIDS, acyclovir/ganciclovir-resistant HSV/VZV (off-label), BK virus nephropathy (off-label)", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Always give with probenecid and pre-hydration; monitor CrCl before each dose", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Vistide", "form": "IV Infusion 375 mg/5 mL vial", "strengths": "75 mg/mL", "manufacturer": "Gilead Sciences", "region": "USA, Europe" },
      { "name": "Cidovir", "form": "IV Infusion 375 mg", "strengths": "375 mg/5 mL", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Cidofovir IV", "form": "IV Infusion 375 mg", "strengths": "375 mg/5 mL", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Cidofovir-375", "form": "IV Infusion 375 mg", "strengths": "375 mg/5 mL", "manufacturer": "Pacific Pharma", "region": "Pakistan" },
      { "name": "Forvade", "form": "IV Infusion 375 mg", "strengths": "375 mg/5 mL", "manufacturer": "Various (Generic)", "region": "Europe" }
    ],
    "interactions": [
      { "drugClass": "Nephrotoxic Drugs (Aminoglycosides, Amphotericin B, NSAIDs, Foscarnet)", "effect": "Additive nephrotoxicity; avoid or hold during cidofovir therapy", "severity": "Moderate" },
      { "drugClass": "Probenecid", "effect": "Required coadministration to reduce nephrotoxicity; increases cidofovir levels", "severity": "Beneficial" },
      { "drugClass": "Zidovudine", "effect": "Additive myelotoxicity; hold AZT or reduce dose on cidofovir days", "severity": "Moderate" },
      { "drugClass": "QTc-Prolonging Agents", "effect": "Electrolyte disturbances may increase QT risk", "severity": "Moderate" },
      { "drugClass": "Tenofovir", "effect": "Additive nephrotoxicity; avoid coadministration", "severity": "Moderate" },
      { "drugClass": "Foscarnet", "effect": "Additive nephrotoxicity; sequential use with caution", "severity": "Moderate" }
    ],
    "warning": "Dose-dependent nephrotoxicity (proteinuria, elevated Cr, Fanconi syndrome). Contraindicated if Cr >1.5, CrCl <55, or urine protein >100 mg/dL. Must be given with oral probenecid 2g 3h before, 1g 2h and 8h after infusion. Pre-hydrate with 1L NS before and after. Neutropenia. Ocular hypotony. Carcinogenic in animal studies. Monitor: Cr, urine protein, ANC before each dose.",
    "subCategoryId": "anti-cmv"
  },
  {
    "id": "ribavirin",
    "categoryId": "antivirals",
    "genericName": "Ribavirin",
    "brandNames": "Rebetol, Copegus, Ribasphere, Virazole, Riba-200, Ribavin",
    "description": "A guanosine analogue with broad-spectrum in vitro antiviral activity. Used in combination with interferons/DAAs for HCV and as aerosolized therapy for RSV. Multiple mechanisms: IMP dehydrogenase inhibition, immunomodulation, RNA capping interference.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "RSV, HCV (combination)",
    "dosageForm": "Oral Capsules/Tablets/Aerosol/IV",
    "stats": [
      { "label": "STANDARD ADULT DOSE (HCV)", "value": "800-1200 mg/day PO divided BID (weight-based, with SOF/DAA)", "sub": "Max: 1200 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 1.5-2h", "sub": "Half-life 40-50h; multiple phases up to 300h" },
      { "label": "CLINICAL INDICATIONS", "value": "HCV (with DAAs or interferon), RSV (aerosolized), Lassa fever, Hantavirus, SARS-CoV-2 (limited)", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Contraindicated in pregnancy/anemia; hemolytic anemia is dose-limiting", "sub": "Pregnancy Category X (contraindicated)" }
    ],
    "brandTable": [
      { "name": "Rebetol", "form": "Capsule 200 mg / Oral Solution", "strengths": "200 mg", "manufacturer": "Merck Sharp & Dohme", "region": "Global" },
      { "name": "Copegus", "form": "Tablet 200, 400, 600 mg", "strengths": "200, 400, 600 mg", "manufacturer": "Roche", "region": "Global" },
      { "name": "Ribasphere", "form": "Capsule 200 mg", "strengths": "200 mg", "manufacturer": "Three Rivers Pharma", "region": "USA" },
      { "name": "Riba-200", "form": "Capsule 200 mg", "strengths": "200 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Ribavin", "form": "Capsule 200 mg", "strengths": "200 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Zidovudine", "effect": "Intracellular antagonism; avoid in HIV/HCV coinfection", "severity": "Moderate" },
      { "drugClass": "Didanosine", "effect": "Increased risk of mitochondrial toxicity; avoid", "severity": "Moderate" },
      { "drugClass": "Stavudine", "effect": "Intracellular antagonism; avoid coadministration", "severity": "Moderate" },
      { "drugClass": "Abacavir", "effect": "Possible intracellular antagonism", "severity": "Moderate" },
      { "drugClass": "Azathioprine", "effect": "Increased myelotoxicity risk; avoid if possible", "severity": "Moderate" },
      { "drugClass": "Warfarin", "effect": "Reduced warfarin efficacy; monitor INR", "severity": "Moderate" }
    ],
    "warning": "Contraindicated in pregnancy (Category X) and in men whose partners are pregnant. Severe teratogenic effects. Two forms of contraception required during and for 6 months after therapy. Hemolytic anemia (dose-limiting; monitor Hb q2-4 weeks). Hemoglobinopathies: avoid. Pancreatitis. Pulmonary infiltrates. Cardiac disease: monitor for MI/stroke (anemia-related).",
    "subCategoryId": "other-antivirals"
  },
  {
    "id": "favipiravir",
    "categoryId": "antivirals",
    "genericName": "Favipiravir",
    "brandNames": "Avigan, Favipira, Fabiflu, Faviget, Avifav, Reeqonus",
    "description": "A pyrazine carboxamide derivative that selectively inhibits influenza RNA-dependent RNA polymerase after intracellular phosphorylation. Broad-spectrum activity against many RNA viruses. Used investigational for COVID-19 and emerging influenza strains.",
    "status": "Rx Only (Emergency)",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Influenza (COVID-19)",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1600 mg PO BID x 1 day, then 600 mg PO BID x 4 days", "sub": "Max: 3200 mg loading dose" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 0.5-2h", "sub": "Half-life 2-5h (dose-dependent); 20h for active metabolite" },
      { "label": "CLINICAL INDICATIONS", "value": "Influenza (novel/resistant strains, emergency use), COVID-19 (investigational), Ebola (limited), Lassa fever", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Contraindicated in pregnancy; loading dose required; limited clinical data", "sub": "Pregnancy Category X (contraindicated)" }
    ],
    "brandTable": [
      { "name": "Avigan", "form": "Tablet 200 mg", "strengths": "200 mg", "manufacturer": "Fujifilm Toyama Chemical", "region": "Japan" },
      { "name": "Favipira", "form": "Tablet 200, 400 mg", "strengths": "200, 400 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Fabiflu", "form": "Tablet 200 mg", "strengths": "200 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Faviget", "form": "Tablet 200 mg", "strengths": "200 mg", "manufacturer": "Getz Pharma", "region": "Pakistan" },
      { "name": "Reeqonus", "form": "Tablet 200 mg", "strengths": "200 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Pyrazinamide", "effect": "Reduced favipiravir levels; avoid coadministration", "severity": "Moderate" },
      { "drugClass": "Repaglinide", "effect": "Increased repaglinide levels; monitor glucose", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Increased risk of adverse effects; avoid", "severity": "Moderate" },
      { "drugClass": "Theophylline", "effect": "Reduced theophylline levels; monitor", "severity": "Moderate" },
      { "drugClass": "Acetaminophen (Paracetamol)", "effect": "No significant interaction; commonly used concurrently", "severity": "Minor" },
      { "drugClass": "Famotidine", "effect": "Reduced favipiravir levels; clinical significance unknown", "severity": "Minor" }
    ],
    "warning": "Contraindicated in pregnancy and breastfeeding (teratogenic in animal studies). Men should use contraception during and for 3 months after treatment. Hyperuricemia (increased uric acid levels - monitor). Limited clinical efficacy data for COVID-19. No pediatric approval. Monitor LFTs. Loading dose essential for therapeutic levels. Not for seasonal influenza (use oseltamivir).",
    "subCategoryId": "other-antivirals"
  },
  {
    "id": "remdesivir",
    "categoryId": "antivirals",
    "genericName": "Remdesivir",
    "brandNames": "Veklury, Remdesivir IV, Covifor, Remdi, Reme-Vir, Desivir",
    "description": "A nucleotide prodrug that inhibits viral RNA-dependent RNA polymerases. Broad-spectrum activity against filoviruses, coronaviruses, and paramyxoviruses. First FDA-approved treatment for COVID-19. Requires IV administration.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "COVID-19, Ebola",
    "dosageForm": "IV Infusion (Lyophilized Powder)",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "200 mg IV x 1 day (loading), then 100 mg IV daily x 4-9 days", "sub": "Max: 10-day course" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak: end of 30-120 min infusion", "sub": "Half-life 1h (parent); 24-35h (active metabolite GS-441524)" },
      { "label": "CLINICAL INDICATIONS", "value": "COVID-19 (hospitalized, requiring supplemental oxygen), Ebola (investigational)", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Monitor LFTs; eGFR >30 required; not for CrCl <30 unless on ECMO", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "Veklury", "form": "IV Infusion 100 mg/vial (lyophilized)", "strengths": "100 mg/vial", "manufacturer": "Gilead Sciences", "region": "Global" },
      { "name": "Covifor", "form": "IV Infusion 100 mg", "strengths": "100 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Remdi", "form": "IV Infusion 100 mg", "strengths": "100 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Reme-Vir", "form": "IV Infusion 100 mg", "strengths": "100 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Desivir", "form": "IV Infusion 100 mg", "strengths": "100 mg", "manufacturer": "Pacific Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Chloroquine / Hydroxychloroquine", "effect": "Antagonistic effect in vitro; avoid coadministration", "severity": "Moderate" },
      { "drugClass": "Dexamethasone", "effect": "No significant interaction; commonly used together in COVID-19", "severity": "Minor" },
      { "drugClass": "Tocilizumab / Baricitinib", "effect": "No significant interaction; commonly used in combination", "severity": "Minor" },
      { "drugClass": "Heparin / LMWH", "effect": "No significant interaction; monitor for bleeding", "severity": "Minor" },
      { "drugClass": "Antibiotics (Broad-spectrum)", "effect": "No significant CYP interactions", "severity": "Minor" },
      { "drugClass": "Remdesivir is not a substrate for CYP enzymes", "effect": "Minimal drug-drug interaction potential overall", "severity": "Minor" }
    ],
    "warning": "Elevated LFTs (ALT/AST) reported; consider discontinuing if ALT >10x ULN or ALT elevation with hepatitis symptoms. Infusion-related reactions: hypotension, nausea, vomiting, sweating. Hypersensitivity including anaphylaxis. Renal: not recommended if eGFR <30 mL/min (except on ECMO). Monitor LFTs daily, eGFR before each dose. Contraindicated if ALT >5x ULN at baseline.",
    "subCategoryId": "other-antivirals"
  },
  {
    "id": "tecovirimat",
    "categoryId": "antivirals",
    "genericName": "Tecovirimat",
    "brandNames": "TPOXX, Tecovirimat-200, TPOXX-200, Arestvyr, Sigovir, Tecovir",
    "description": "An orthopoxvirus VP37 envelope wrapping protein inhibitor that prevents viral release from infected cells. First-line treatment for smallpox and mpox (monkeypox). Retains activity against variola major and most poxvirus strains.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Smallpox, Mpox",
    "dosageForm": "Oral Capsules/IV Infusion",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "600 mg PO BID x 14 days (oral)", "sub": "Weight-based: >40 kg = 600 mg; <40 kg = 200-400 mg" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 2-6h (with high-fat meal)", "sub": "Half-life 19-24h" },
      { "label": "CLINICAL INDICATIONS", "value": "Smallpox (FDA-approved), mpox (monkeypox) treatment, orthopoxvirus outbreaks", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Take with high-fat meal; limited clinical data (animal rule approval); pregnancy safety limited", "sub": "Pregnancy Category C" }
    ],
    "brandTable": [
      { "name": "TPOXX", "form": "Capsule 200 mg / IV 200 mg/vial", "strengths": "200 mg", "manufacturer": "SIGA Technologies", "region": "USA, Europe" },
      { "name": "Arestvyr", "form": "Capsule 200 mg", "strengths": "200 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Sigovir", "form": "Capsule 200 mg", "strengths": "200 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" },
      { "name": "Tecovir", "form": "Capsule 200 mg", "strengths": "200 mg", "manufacturer": "Pacific Pharma", "region": "Pakistan" },
      { "name": "Tecovirimat (Generic)", "form": "Capsule 200 mg", "strengths": "200 mg", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Repaglinide", "effect": "Increased repaglinide levels (CYP2C8 inhibition); monitor glucose", "severity": "Moderate" },
      { "drugClass": "Midazolam", "effect": "Reduced midazolam levels; monitor sedative effect", "severity": "Moderate" },
      { "drugClass": "CYP3A4 Substrates (Many)", "effect": "Tecovirimat induces CYP3A4; reduced levels of sensitive CYP3A4 substrates", "severity": "Moderate" },
      { "drugClass": "CYP2C8 Substrates", "effect": "Tecovirimat inhibits CYP2C8; increased levels of sensitive substrates", "severity": "Moderate" },
      { "drugClass": "Hormonal Contraceptives", "effect": "Reduced contraceptive efficacy (CYP3A4 induction), use alternative method", "severity": "Moderate" },
      { "drugClass": "Smallpox Vaccine (Live)", "effect": "No known interaction; may be used in outbreak with vaccination", "severity": "Minor" }
    ],
    "warning": "Headache, nausea, abdominal pain, vomiting most common side effects. Take with high-fat meal for optimal absorption (2-3x higher levels). Limited human efficacy data - approved under Animal Rule (efficacy based on animal studies). Monitor glucose with repaglinide. Not studied in severe hepatic/renal impairment. CNS symptoms (visual distortion, lightheadedness) reported rarely. IV formulation available for severe disease.",
    "subCategoryId": "other-antivirals"
  },
  {
    "id": "maraviroc",
    "categoryId": "antivirals",
    "genericName": "Maraviroc",
    "brandNames": "Celsentri, Maraviroc-300, Selzentry, Maravir, Celsentri-300, Maraviroc-S",
    "description": "An HIV entry inhibitor that blocks CCR5 co-receptor binding, preventing HIV-1 cellular entry. Unique mechanism among ARVs. Requires tropism testing before use (CCR5-tropic virus only). No activity against CXCR4-tropic or dual-tropic virus.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "HIV-1 (CCR5-tropic)",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "300 mg PO BID (with CYP3A4 substrates)", "sub": "150 mg BID (with CYP3A4 inhibitors); 600 mg BID (with CYP3A4 inducers)" },
      { "label": "ONSET / HALF-LIFE", "value": "Peak 0.5-4h", "sub": "Half-life 14-18h" },
      { "label": "CLINICAL INDICATIONS", "value": "HIV-1 (CCR5-tropic only, treatment-experienced), HIV PEP (salvage)", "sub": null },
      { "label": "SPECIAL CONSIDERATIONS", "value": "Tropism testing mandatory before initiation; dose adjustment with CYP3A4 modulators", "sub": "Pregnancy Category B" }
    ],
    "brandTable": [
      { "name": "Selzentry", "form": "Tablet 150, 300 mg", "strengths": "150, 300 mg", "manufacturer": "Pfizer / ViiV Healthcare", "region": "USA" },
      { "name": "Celsentri", "form": "Tablet 150, 300 mg", "strengths": "150, 300 mg", "manufacturer": "Pfizer / ViiV Healthcare", "region": "Europe, Global" },
      { "name": "Maravir", "form": "Tablet 300 mg", "strengths": "300 mg", "manufacturer": "Cipla", "region": "India" },
      { "name": "Maraviroc-300", "form": "Tablet 300 mg", "strengths": "300 mg", "manufacturer": "Genix Pharma", "region": "Pakistan" },
      { "name": "Maraviroc-S", "form": "Tablet 300 mg", "strengths": "300 mg", "manufacturer": "Hilton Pharma", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "CYP3A4 Inducers (Rifampin, Carbamazepine, Phenytoin, Efavirenz)", "effect": "Reduced MVC levels (50-70%); increase MVC to 600 mg BID", "severity": "Moderate" },
      { "drugClass": "CYP3A4 Inhibitors (PIs, Ketoconazole, Clarithromycin)", "effect": "Increased MVC levels (2-5x); reduce MVC to 150 mg BID", "severity": "Moderate" },
      { "drugClass": "Rifampin", "effect": "Significantly reduced MVC levels; increase dose to 600 mg BID", "severity": "Moderate" },
      { "drugClass": "Tipranavir/Ritonavir", "effect": "Reduced MVC levels; increase dose to 600 mg BID", "severity": "Moderate" },
      { "drugClass": "Hormonal Contraceptives", "effect": "No significant interaction", "severity": "Minor" },
      { "drugClass": "Methadone", "effect": "No significant interaction", "severity": "Minor" }
    ],
    "warning": "MANDATORY: perform HIV tropism testing before initiation (Trofile assay or equivalent) - only active against CCR5-tropic HIV-1. Hepatotoxicity: monitor LFTs; allergic reactions (DRESS, SJS) reported with hepatitis, rash, eosinophilia. Postural hypotension. Increased cardiovascular events in patients with CVD risk factors. May increase risk of infection/malignancy due to CCR5 blockade (theoretical). Dose adjustment required with CYP3A4 modulators.",
    "subCategoryId": "other-antivirals"
  }
];
