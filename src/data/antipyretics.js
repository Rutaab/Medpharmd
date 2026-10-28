// data/antipyretics.js
export const antipyretics = [
  {
    "id": "acetaminophen",
    "categoryId": "antipyretics",
    "genericName": "Acetaminophen (Paracetamol)",
    "brandNames": "Tylenol, Panadol, Calpol, Paracetamol, Anacin, Feverall, Acephen, Ofirmev",
    "description": "Most widely used antipyretic and analgesic worldwide. First-line for fever and mild-to-moderate pain. Preferentially inhibits COX in the CNS. Minimal anti-inflammatory activity. Safe GI profile. Hepatotoxic at high doses - leading cause of acute liver failure in the US.",
    "status": "OTC + Rx",
    "isCommonlyPrescribed": true,
    "isOTCAndRx": true,
    "primaryIndication": "Fever and Mild Pain",
    "specialField": { "label": "Class", "value": "Para-aminophenol" },
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "325-650 mg q4-6h or 500-1,000 mg q6h", "sub": "Max: 3,000 mg/day (extended release)" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min onset", "sub": "2-3 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Fever, headache, muscle aches, toothache, backache, osteoarthritis, menstrual cramps, cold/flu symptoms", "sub": null },
      { "label": "PEDIATRIC DOSE", "value": "10-15 mg/kg q4-6h", "sub": "Max: 5 doses/day, 75 mg/kg/day" }
    ],
    "brandTable": [
      { "name": "Tylenol", "form": "Tablets, Caplets, Gelcaps, Liquid, Dissolve Pack", "strengths": "325 mg, 500 mg, 650 mg; 160 mg/5 mL liquid; 500 mg dissolve packs", "manufacturer": "Kenvue (J&J)", "region": "USA, Canada, Global" },
      { "name": "Panadol", "form": "Tablets, Caplets, Soluble Tablets, Suspension, Suppositories", "strengths": "500 mg; 120 mg/5 mL, 250 mg/5 mL susp; 125 mg, 250 mg supp", "manufacturer": "GSK/Haleon", "region": "UK, Europe, Asia, Pakistan, Global" },
      { "name": "Calpol", "form": "Oral Suspension, Drops, Suppositories", "strengths": "120 mg/5 mL, 250 mg/5 mL susp; 100 mg/mL drops; 125 mg, 250 mg supp", "manufacturer": "J&J / McNeil", "region": "UK, Europe, Pakistan, India, Asia" },
      { "name": "Ofirmev", "form": "IV Injection", "strengths": "1,000 mg/100 mL vial", "manufacturer": "Mallinckrodt", "region": "USA" },
      { "name": "Feverall", "form": "Suppositories", "strengths": "80 mg, 120 mg, 325 mg, 650 mg", "manufacturer": "Actavis", "region": "USA" },
      { "name": "Acephen", "form": "Suppositories", "strengths": "120 mg, 325 mg, 650 mg", "manufacturer": "Major Pharma", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "Alcohol (Chronic)", "effect": "Increased hepatotoxicity risk with chronic heavy alcohol use at supratherapeutic doses.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR at high doses (>2 g/day) for prolonged periods.", "severity": "Moderate" },
      { "drugClass": "Carbamazepine, Phenytoin, Barbiturates", "effect": "Reduced acetaminophen levels (CYP induction). Increased hepatotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Isoniazid", "effect": "Increased hepatotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced acetaminophen plasma levels.", "severity": "Minor" },
      { "drugClass": "Zidovudine (AZT)", "effect": "Reduced zidovudine levels.", "severity": "Moderate" }
    ],
    "warning": "Acetaminophen hepatotoxicity - leading cause of acute liver failure. Max OTC: 3,000 mg/day (US); 4,000 mg/day (historical). Do not exceed 10 days for pain or 3 days for fever. Avoid with severe hepatic impairment. N-acetylcysteine is antidote for overdose within 8 hours. Many combination cold products contain acetaminophen - check total daily intake.",
    "subCategoryId": "para-aminophenols"
  },
  {
    "id": "acetaminophen-er",
    "categoryId": "antipyretics",
    "genericName": "Acetaminophen Extended-Release",
    "brandNames": "Tylenol ER, Tylenol Arthritis Pain, Panadol Extend, Mapap Arthritis, Acetaminophen ER",
    "description": "Extended-release formulation of acetaminophen providing prolonged duration of action up to 8 hours. Convenient for patients requiring sustained relief from fever and pain, especially for nighttime dosing or chronic conditions.",
    "status": "OTC",
    "isCommonlyPrescribed": true,
    "isOTCAndRx": false,
    "primaryIndication": "Extended Fever/Pain Relief",
    "dosageForm": "Extended-Release Tablets/Caplets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "650-1,300 mg q8h", "sub": "Max: 3,900 mg/day (ER)" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min onset", "sub": "Extended release, 8-hour dosing" },
      { "label": "CLINICAL INDICATIONS", "value": "Arthritis pain, fever, muscle aches, back pain, osteoarthritis requiring prolonged pain/fever relief", "sub": null },
      { "label": "DURATION", "value": "6-8 hours per dose", "sub": "Biphasic release profile" }
    ],
    "brandTable": [
      { "name": "Tylenol Arthritis Pain", "form": "Extended-Release Caplets", "strengths": "650 mg", "manufacturer": "Kenvue (J&J)", "region": "USA, Canada" },
      { "name": "Panadol Extend", "form": "Extended-Release Tablets", "strengths": "665 mg", "manufacturer": "GSK/Haleon", "region": "UK, Europe, Asia, Pakistan" },
      { "name": "Mapap Arthritis Pain", "form": "Extended-Release Caplets", "strengths": "650 mg", "manufacturer": "Major Pharma", "region": "USA" },
      { "name": "Acetaminophen ER", "form": "Extended-Release Tablets", "strengths": "650 mg", "manufacturer": "Various (Generic)", "region": "USA, Europe" },
      { "name": "Tylenol 8-Hour", "form": "Extended-Release Caplets", "strengths": "650 mg", "manufacturer": "J&J", "region": "USA, Canada" }
    ],
    "interactions": [
      { "drugClass": "Alcohol (Chronic)", "effect": "Increased hepatotoxicity risk.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR with prolonged high-dose use.", "severity": "Moderate" },
      { "drugClass": "Anticonvulsants (Phenytoin, Carbamazepine)", "effect": "Increased acetaminophen clearance; hepatotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Isoniazid", "effect": "Increased hepatotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced acetaminophen levels.", "severity": "Minor" },
      { "drugClass": "Cholestyramine", "effect": "Reduced acetaminophen absorption.", "severity": "Minor" }
    ],
    "warning": "Same hepatotoxicity warning as standard acetaminophen. Extended-release formulation requires 650 mg dosing (not 500 mg) - do not substitute with standard tablets. Bioavailability is lower than immediate-release at equivalent total daily doses. Avoid exceeding maximum daily dose from all sources.",
    "subCategoryId": "para-aminophenols"
  },
  {
    "id": "acetaminophen-iv",
    "categoryId": "antipyretics",
    "genericName": "Acetaminophen Intravenous",
    "brandNames": "Ofirmev, Perfalgan, Paracetamol IV, Acetaminophen Inj, Infagen, Paramax IV",
    "description": "Intravenous formulation of acetaminophen for hospital-based management of pain and fever. Provides rapid onset of action. Used for perioperative pain management and febrile patients who cannot tolerate oral medications.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Hospital Fever/Pain Management",
    "dosageForm": "IV Infusion",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1,000 mg IV q6h", "sub": "Max: 4,000 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "5-10 min onset", "sub": "~2.5 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Perioperative pain, fever in hospitalized patients, pain when oral route not available, febrile neutropenia, post-surgical fever", "sub": null },
      { "label": "PEDIATRIC DOSE", "value": "12.5-15 mg/kg IV q6h", "sub": "Max: 75 mg/kg/day" }
    ],
    "brandTable": [
      { "name": "Ofirmev", "form": "IV Injection (Vial)", "strengths": "1,000 mg/100 mL vial", "manufacturer": "Mallinckrodt", "region": "USA, Canada" },
      { "name": "Perfalgan", "form": "IV Infusion (Bottle/Vial)", "strengths": "500 mg/50 mL, 1,000 mg/100 mL", "manufacturer": "Bristol-Myers Squibb", "region": "Europe, UK, Asia, Pakistan" },
      { "name": "Infagen", "form": "IV Infusion", "strengths": "500 mg/50 mL, 1,000 mg/100 mL", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Paramax IV", "form": "IV Injection", "strengths": "500 mg, 1,000 mg vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Acetaminophen IV", "form": "IV Infusion", "strengths": "500 mg/50 mL, 1 g/100 mL premix", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR with high-dose prolonged use.", "severity": "Moderate" },
      { "drugClass": "Hepatotoxic Drugs", "effect": "Additive hepatotoxicity risk.", "severity": "Major" },
      { "drugClass": "CYP Inducers (Phenytoin, Carbamazepine)", "effect": "Reduced acetaminophen levels; increased toxic metabolite.", "severity": "Moderate" },
      { "drugClass": "Oral Anticoagulants", "effect": "Potential increased anticoagulation.", "severity": "Moderate" },
      { "drugClass": "Chloramphenicol", "effect": "Increased chloramphenicol levels.", "severity": "Moderate" },
      { "drugClass": "NSAIDs", "effect": "No interaction; may be used together for multimodal analgesia.", "severity": "Beneficial" }
    ],
    "warning": "Same hepatotoxicity warning as oral acetaminophen. Overdose risk: 1,000 mg max per dose, 4,000 mg/day max. Monitor LFTs with prolonged use. Not interchangeable with oral products on a mg-per-mg basis for conversion (different bioavailability). Contains no preservatives - single-use vials only.",
    "subCategoryId": "para-aminophenols"
  },
  {
    "id": "propacetamol",
    "categoryId": "antipyretics",
    "genericName": "Propacetamol",
    "brandNames": "Pro-Dafalgan, Pro-Infant, Propacet, Propam, Paracetamol Prodrug",
    "description": "Prodrug of acetaminophen (paracetamol) for IV administration. Hydrolyzed by plasma esterases to release active paracetamol. Used for perioperative pain and fever management in hospital settings. Not available in the US.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Hospital Fever/Pain (IV Prodrug)",
    "dosageForm": "IV Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "2 g IV q6h (equivalent to 1 g paracetamol)", "sub": "Max: 8 g/day propacetamol" },
      { "label": "ONSET / HALF-LIFE", "value": "5-15 min (after hydrolysis)", "sub": "~2 hours (active paracetamol)" },
      { "label": "CLINICAL INDICATIONS", "value": "Post-operative pain, perioperative fever, acute pain requiring IV analgesia, fever in hospitalized patients", "sub": null },
      { "label": "CONVERSION", "value": "2 g propacetamol = 1 g paracetamol", "sub": "Hydrolyzed by plasma esterases" }
    ],
    "brandTable": [
      { "name": "Pro-Dafalgan", "form": "IV Injection (Powder)", "strengths": "2 g vials for reconstitution", "manufacturer": "Bristol-Myers Squibb", "region": "Europe, Middle East, Asia" },
      { "name": "Propacet", "form": "IV Injection", "strengths": "1 g, 2 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Propam", "form": "IV Injection", "strengths": "2 g vials", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Paracetamol Prodrug", "form": "IV Injection", "strengths": "500 mg, 1 g paracetamol equivalent", "manufacturer": "Various (Generic)", "region": "Europe, Asia" },
      { "name": "Pro-Infant", "form": "IV Injection (Pediatric)", "strengths": "500 mg vials", "manufacturer": "Various (Generic)", "region": "Europe" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR risk with prolonged use (same as paracetamol).", "severity": "Moderate" },
      { "drugClass": "Hepatotoxic Drugs", "effect": "Additive hepatotoxicity.", "severity": "Major" },
      { "drugClass": "Anticonvulsants", "effect": "Increased toxic metabolite production.", "severity": "Moderate" },
      { "drugClass": "Oral Anticoagulants", "effect": "Enhanced anticoagulant effect.", "severity": "Moderate" },
      { "drugClass": "Chloramphenicol", "effect": "Increased chloramphenicol levels.", "severity": "Moderate" },
      { "drugClass": "NSAIDs", "effect": "Can be combined for multimodal analgesia.", "severity": "Beneficial" }
    ],
    "warning": "Pain at injection site is common (phlebitis). Same hepatotoxicity risk as acetaminophen (1 g paracetamol equivalent). Not approved in the US. Prodrug hydrolysis may be reduced in patients with low plasma esterase activity. Monitor LFTs. Avoid in severe hepatic impairment.",
    "subCategoryId": "para-aminophenols"
  },
  {
    "id": "paracetamol-caffeine",
    "categoryId": "antipyretics",
    "genericName": "Paracetamol + Caffeine",
    "brandNames": "Panadol Extra, Tylenol Ultra, Excedrin Tension Headache, Paracaf, Feminax, Anadin Extra",
    "description": "Fixed-dose combination of paracetamol with caffeine. Caffeine enhances the analgesic effect of paracetamol (adjuvant analgesic) and may provide additional benefit for fever-associated fatigue. Widely used for tension headaches and fever.",
    "status": "OTC",
    "isCommonlyPrescribed": true,
    "isOTCAndRx": true,
    "primaryIndication": "Fever with Headache/Fatigue",
    "dosageForm": "Oral Tablets/Caplets/Soluble Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 tabs (500 mg + 65 mg) q6h", "sub": "Max: 8 tabs/day (4,000 mg/520 mg caffeine)" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min onset", "sub": "Paracetamol: 2-3 hrs; Caffeine: 4-6 hrs" },
      { "label": "CLINICAL INDICATIONS", "value": "Fever with headache, tension headache, migraine, cold/flu with fatigue, menstrual pain with fever", "sub": null },
      { "label": "CAFFEINE ROLE", "value": "Adjuvant analgesia", "sub": "Enhances paracetamol efficacy by 5-10%" }
    ],
    "brandTable": [
      { "name": "Panadol Extra", "form": "Tablets, Caplets, Soluble Tablets", "strengths": "500 mg + 65 mg per tablet", "manufacturer": "GSK/Haleon", "region": "UK, Europe, Asia, Pakistan, Global" },
      { "name": "Tylenol Ultra", "form": "Caplets", "strengths": "500 mg + 65 mg", "manufacturer": "J&J", "region": "USA" },
      { "name": "Excedrin Tension Headache", "form": "Caplets", "strengths": "500 mg + 65 mg", "manufacturer": "GSK/Haleon", "region": "USA" },
      { "name": "Paracaf", "form": "Tablets, Caplets", "strengths": "500 mg + 65 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Anadin Extra", "form": "Tablets, Caplets", "strengths": "500 mg + 65 mg", "manufacturer": "Pfizer", "region": "UK, Europe" }
    ],
    "interactions": [
      { "drugClass": "Alcohol", "effect": "Hepatotoxicity risk (paracetamol).", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR (paracetamol component).", "severity": "Moderate" },
      { "drugClass": "Other Caffeine Sources", "effect": "Additive stimulant effects, insomnia, anxiety.", "severity": "Moderate" },
      { "drugClass": "MAO Inhibitors", "effect": "Severe hypertensive reaction (caffeine).", "severity": "Major" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced caffeine clearance.", "severity": "Minor" },
      { "drugClass": "Anticonvulsants", "effect": "Reduced paracetamol efficacy; hepatotoxicity risk.", "severity": "Moderate" }
    ],
    "warning": "Same hepatotoxicity warning as standard paracetamol. Caffeine component may cause insomnia, anxiety, palpitations. Avoid other caffeine-containing products. Not recommended in patients with anxiety disorders or arrhythmias. Pregnancy category C (limit caffeine to <200 mg/day).",
    "subCategoryId": "para-aminophenols"
  },
  {
    "id": "acetaminophen-suppository",
    "categoryId": "antipyretics",
    "genericName": "Acetaminophen Rectal Suppository",
    "brandNames": "Feverall, Acephen, Panadol Suppository, Calpol Suppository, Paracetamol Supp, Anador",
    "description": "Rectal formulation of acetaminophen for patients unable to take oral medications due to vomiting, nausea, or altered mental status. Essential for pediatric fever management in children who cannot tolerate oral antipyretics.",
    "status": "OTC",
    "isCommonlyPrescribed": true,
    "isOTCAndRx": true,
    "primaryIndication": "Fever (When Oral Route Not Possible)",
    "dosageForm": "Rectal Suppositories",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "325-650 mg q4-6h PR", "sub": "Max: 3,000 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "30-90 min onset (slower than oral)", "sub": "~2.5 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Fever with vomiting, post-operative fever (NPO patients), febrile seizures, infants/children unable to take oral, hospice/palliative care", "sub": null },
      { "label": "PEDIATRIC DOSE", "value": "10-15 mg/kg q4-6h PR", "sub": "Available in 80, 120, 325, 650 mg sizes" }
    ],
    "brandTable": [
      { "name": "Feverall", "form": "Rectal Suppositories", "strengths": "80 mg, 120 mg, 325 mg, 650 mg", "manufacturer": "Actavis/Forest", "region": "USA" },
      { "name": "Acephen", "form": "Rectal Suppositories", "strengths": "120 mg, 325 mg, 650 mg", "manufacturer": "Major Pharma", "region": "USA" },
      { "name": "Panadol Suppository", "form": "Rectal Suppositories", "strengths": "60 mg, 125 mg, 250 mg, 500 mg", "manufacturer": "GSK/Haleon", "region": "UK, Europe, Asia, Pakistan" },
      { "name": "Calpol Suppository", "form": "Rectal Suppositories", "strengths": "125 mg, 250 mg", "manufacturer": "J&J/McNeil", "region": "UK, Europe, Pakistan, India" },
      { "name": "Paracetamol Supp", "form": "Rectal Suppositories", "strengths": "60 mg, 125 mg, 250 mg, 500 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" }
    ],
    "interactions": [
      { "drugClass": "Rectal Irritants (Other Suppositories)", "effect": "May cause local irritation if multiple suppositories used.", "severity": "Minor" },
      { "drugClass": "Warfarin", "effect": "Increased INR (systemic paracetamol effect).", "severity": "Moderate" },
      { "drugClass": "Hepatotoxic Drugs", "effect": "Additive hepatotoxicity risk.", "severity": "Major" },
      { "drugClass": "Anticonvulsants", "effect": "Increased hepatotoxicity (CYP induction).", "severity": "Moderate" },
      { "drugClass": "Cholestyramine", "effect": "No interaction (rectal route bypasses GI absorption).", "severity": "Minor" },
      { "drugClass": "Oral Contraceptives", "effect": "No significant interaction (rectal route).", "severity": "Minor" }
    ],
    "warning": "Same hepatotoxicity warning as oral acetaminophen. Bioavailability of rectal form is approximately 70-80% of oral. Absorption may be inconsistent - use reliable oral route when possible. Ensure proper insertion technique. Do not cut suppositories. Rectal irritation possible with prolonged use.",
    "subCategoryId": "para-aminophenols"
  },
  {
    "id": "metamizole",
    "categoryId": "antipyretics",
    "genericName": "Metamizole (Dipyrone)",
    "brandNames": "Novalgin, Analgin, Dipyrone, Algopyrin, Baralgin, Metamisol, Dipirona, Novaminsulfon",
    "description": "Potent pyrazolone antipyretic and analgesic. Banned in many countries (US, UK, Japan) due to agranulocytosis risk. Still widely used in many European, Latin American, Asian, and African countries. Exceptional antipyretic potency, especially in intravenous form.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Severe Fever and Acute Pain",
    "specialField": { "label": "Global Status", "value": "Banned in US/UK" },
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "500-1,000 mg PO/IM/IV up to QID", "sub": "Max: 4 g/day; IV: infuse slowly" },
      { "label": "ONSET / HALF-LIFE", "value": "15-30 min (oral); 5-10 min (IV)", "sub": "~2-4 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "High fever unresponsive to first-line antipyretics, acute severe pain, post-operative pain, renal colic, tumor pain", "sub": null },
      { "label": "PEDIATRIC DOSE", "value": "10-15 mg/kg/dose q6h (drops)", "sub": "Oral drops: 500 mg/mL (1 drop = 25 mg)" }
    ],
    "brandTable": [
      { "name": "Novalgin", "form": "Tablets, Injection, Oral Drops, Suppositories", "strengths": "500 mg tabs; 1 g/2 mL, 2.5 g/5 mL injection; 500 mg/mL drops", "manufacturer": "Sanofi-Aventis", "region": "Europe, Asia, Pakistan, Latin America" },
      { "name": "Analgin", "form": "Tablets, Injection, Drops", "strengths": "500 mg tabs; 1 g/2 mL, 2.5 g/5 mL IM/IV; 500 mg/mL drops", "manufacturer": "Various (Generic)", "region": "Russia, CIS, Asia, Pakistan" },
      { "name": "Dipyrone", "form": "Tablets, Injection, Drops", "strengths": "500 mg; 1 g, 2.5 g IM/IV", "manufacturer": "Various (Generic)", "region": "Latin America, Asia" },
      { "name": "Algopyrin", "form": "Tablets, Injection, Suppositories", "strengths": "500 mg; 1 g/2 mL injection", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Novaminsulfon", "form": "Oral Drops, Injection, Tablets", "strengths": "500 mg/mL drops; 500 mg tabs; 1 g injection", "manufacturer": "Various (Generic)", "region": "Germany, Europe" }
    ],
    "interactions": [
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate toxicity (reduced clearance).", "severity": "Major" },
      { "drugClass": "Anticoagulants (Warfarin, DOACs)", "effect": "Enhanced anticoagulant effect.", "severity": "Major" },
      { "drugClass": "Cyclosporine", "effect": "Reduced cyclosporine levels.", "severity": "Moderate" },
      { "drugClass": "Chlorpromazine", "effect": "Additive hypothermia risk.", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS depressant effect.", "severity": "Minor" },
      { "drugClass": "ACE Inhibitors", "effect": "Reduced antihypertensive effect.", "severity": "Minor" }
    ],
    "warning": "BLACK BOX: Risk of agranulocytosis (idiosyncratic, potentially fatal). Discontinue immediately if signs of infection (fever, sore throat, mucosal lesions). Not available in US, UK, Japan, Australia. Avoid in G6PD deficiency. Can cause hypotension with rapid IV administration. Pregnancy category C/D (avoid). Children: avoid in infants <3 months.",
    "subCategoryId": "pyrazolone-antipyretics"
  },
  {
    "id": "propyphenazone",
    "categoryId": "antipyretics",
    "genericName": "Propyphenazone",
    "brandNames": "Saridon, Cibalgin, Optalidon, Propyphen, Migränin, Pirex",
    "description": "Pyrazolone antipyretic and analgesic. Often combined with caffeine or paracetamol in fixed-dose combinations for headache and fever. Milder safety profile than metamizole with lower agranulocytosis risk but still restricted in some countries.",
    "status": "OTC + Rx",
    "isCommonlyPrescribed": true,
    "isOTCAndRx": true,
    "primaryIndication": "Headache and Fever",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "200-400 mg up to TID", "sub": "Max: 1,200 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min onset", "sub": "~2-4 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Headache, migraine, fever, toothache, dysmenorrhea, musculoskeletal pain (often in combination products)", "sub": null },
      { "label": "COMBINATION", "value": "Often with caffeine +/- paracetamol", "sub": "Enhanced analgesic effect" }
    ],
    "brandTable": [
      { "name": "Saridon", "form": "Tablets (Propyphenazone + Paracetamol + Caffeine)", "strengths": "150 mg + 250 mg + 50 mg", "manufacturer": "Bayer", "region": "Europe, Asia, Pakistan, India" },
      { "name": "Cibalgin", "form": "Tablets", "strengths": "200 mg + caffeine combinations", "manufacturer": "Novartis", "region": "Europe" },
      { "name": "Optalidon", "form": "Tablets", "strengths": "125 mg + caffeine/butalbital combinations", "manufacturer": "Novartis", "region": "Europe, Latin America" },
      { "name": "Propyphen", "form": "Tablets", "strengths": "200 mg, 300 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Migränin", "form": "Tablets", "strengths": "Propyphenazone + caffeine", "manufacturer": "Various (Generic)", "region": "Europe" }
    ],
    "interactions": [
      { "drugClass": "Anticoagulants (Warfarin)", "effect": "Enhanced anticoagulant effect.", "severity": "Major" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate toxicity.", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Additive CNS depression.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy (minor).", "severity": "Minor" },
      { "drugClass": "Caffeine (Combination Products)", "effect": "Additive stimulant effects, insomnia risk.", "severity": "Minor" },
      { "drugClass": "Chloramphenicol", "effect": "Increased chloramphenicol levels.", "severity": "Moderate" }
    ],
    "warning": "Agranulocytosis risk (lower than metamizole but still present). Avoid in G6PD deficiency. Contraindicated in patients with history of blood dyscrasias. Less widely available due to regulatory restrictions in some countries. Avoid in pregnancy and lactation.",
    "subCategoryId": "pyrazolone-antipyretics"
  },
  {
    "id": "metamizole-pitofenone",
    "categoryId": "antipyretics",
    "genericName": "Metamizole + Pitofenone + Fenpiverinium",
    "brandNames": "Baralgin, Novalgin Compositum, Tanalgin, Spasmolgin, Spasmo-Analgin, Bralgin",
    "description": "Triple combination of metamizole (analgesic/antipyretic), pitofenone (antispasmodic), and fenpiverinium (anticholinergic). Used for fever with visceral spasms, renal colic, and biliary colic. Popular in Pakistan, India, Latin America, and Europe.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Fever with Visceral Spasms",
    "specialField": { "label": "Type", "value": "Antipyretic + Antispasmodic" },
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 tabs TID or 2-5 mL IM/IV", "sub": "Max: 4 tabs/day or 10 mL injection" },
      { "label": "ONSET / HALF-LIFE", "value": "15-30 min (IM/IV); 30-60 min (oral)", "sub": "2-3 hours (metamizole)" },
      { "label": "CLINICAL INDICATIONS", "value": "Renal colic, biliary colic, intestinal spasms, dysmenorrhea with fever, visceral pain, ureteral spasm", "sub": null },
      { "label": "COMBINATION", "value": "Antipyretic + antispasmodic + anticholinergic", "sub": "Multi-mechanism for visceral pain with fever" }
    ],
    "brandTable": [
      { "name": "Baralgin", "form": "Tablets, Injection, Oral Drops", "strengths": "500 mg + 5 mg + 0.1 mg per tab; 2.5 g + 10 mg + 0.2 mg per 5 mL IV/IM", "manufacturer": "Sanofi-Aventis", "region": "Europe, Asia, Pakistan, Latin America" },
      { "name": "Tanalgin", "form": "Tablets, Injection", "strengths": "500 mg + 5 mg + 0.1 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Spasmolgin", "form": "Tablets, Injection", "strengths": "500 mg + 5 mg + 0.1 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Novalgin Compositum", "form": "Tablets, Injection", "strengths": "500 mg + 5 mg + 0.1 mg", "manufacturer": "Sanofi", "region": "Europe, Latin America" },
      { "name": "Bralgin", "form": "Tablets, Injection", "strengths": "500 mg + 5 mg + 0.1 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, Middle East" }
    ],
    "interactions": [
      { "drugClass": "Anticoagulants (Warfarin)", "effect": "Enhanced anticoagulation (metamizole component).", "severity": "Major" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate levels.", "severity": "Major" },
      { "drugClass": "Anticholinergics (Other)", "effect": "Additive anticholinergic effects (dry mouth, blurred vision, urinary retention).", "severity": "Moderate" },
      { "drugClass": "CNS Depressants (Alcohol, Sedatives)", "effect": "Enhanced sedation.", "severity": "Moderate" },
      { "drugClass": "ACE Inhibitors", "effect": "Reduced antihypertensive efficacy.", "severity": "Minor" },
      { "drugClass": "Cyclosporine", "effect": "Reduced cyclosporine levels.", "severity": "Moderate" }
    ],
    "warning": "Same agranulocytosis risk as metamizole. Anticholinergic component causes dry mouth, blurred vision, constipation, urinary retention. Contraindicated in glaucoma, prostatic hypertrophy, and G6PD deficiency. Rapid IV injection may cause hypotension. Pregnancy category C/D (avoid).",
    "subCategoryId": "pyrazolone-antipyretics"
  },
  {
    "id": "nifenazone",
    "categoryId": "antipyretics",
    "genericName": "Nifenazone",
    "brandNames": "Nifan, Nifenazon, Nicopren, Thylin, Apirex, Nifezol",
    "description": "Pyrazolone antipyretic with additional anti-inflammatory properties. Combined with nicotinic acid in some formulations for enhanced peripheral vasodilation effect. Less commonly used than metamizole. Available in select European and Asian markets.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Fever and Mild Inflammation",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-500 mg TID", "sub": "Max: 1,500 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min onset", "sub": "~2-3 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Fever, headache, mild inflammatory conditions, rheumatism (combination products)", "sub": null },
      { "label": "COMBINATION", "value": "Nifenazone + Nicotinic Acid", "sub": "Vasodilation for enhanced effect" }
    ],
    "brandTable": [
      { "name": "Nifan", "form": "Tablets", "strengths": "250 mg, 500 mg", "manufacturer": "Various (Generic)", "region": "Europe, Asia" },
      { "name": "Thylin", "form": "Tablets (with nicotinic acid)", "strengths": "250 mg + nicotinic acid", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Apirex", "form": "Tablets", "strengths": "250 mg, 500 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Nifenazon", "form": "Tablets", "strengths": "250 mg", "manufacturer": "Various (Generic)", "region": "Germany, Europe" },
      { "name": "Nifezol", "form": "Tablets", "strengths": "250 mg", "manufacturer": "Various (Generic)", "region": "India, Asia" }
    ],
    "interactions": [
      { "drugClass": "Anticoagulants (Warfarin)", "effect": "Enhanced anticoagulant effect.", "severity": "Major" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate levels.", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Additive CNS effects.", "severity": "Minor" },
      { "drugClass": "Antidiabetic Agents", "effect": "Enhanced hypoglycemic effect.", "severity": "Moderate" },
      { "drugClass": "Phenytoin", "effect": "Increased phenytoin levels.", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced efficacy.", "severity": "Minor" }
    ],
    "warning": "Pyrazolone blood dyscrasia risk (agranulocytosis). Contraindicated in G6PD deficiency. Nicotinic acid combination may cause flushing, warmth, and tingling (harmless but distressing). Avoid in pregnancy and lactation. Discontinue if signs of infection or blood dyscrasia develop.",
    "subCategoryId": "pyrazolone-antipyretics"
  },
  {
    "id": "paracetamol-phenylephrine-chlorpheniramine",
    "categoryId": "antipyretics",
    "genericName": "Paracetamol + Phenylephrine + Chlorpheniramine",
    "brandNames": "Panadol Cold & Flu, Theraflu, DayQuil, NyQuil, Lemsip Max, Tylenol Cold & Flu, Benylin Cold & Flu",
    "description": "Triple combination for cold and flu symptoms: paracetamol (fever/pain), phenylephrine (nasal decongestant), chlorpheniramine (antihistamine). First-line OTC combination for symptomatic fever management with cold symptoms.",
    "status": "OTC",
    "isCommonlyPrescribed": true,
    "isOTCAndRx": true,
    "primaryIndication": "Fever with Cold/Flu Symptoms",
    "dosageForm": "Oral Tablets/Caplets/Liquid/Powder Sachets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 tabs q4-6h with cold/flu symptoms", "sub": "Max: 4 g/day paracetamol" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min onset", "sub": "Varied per component" },
      { "label": "CLINICAL INDICATIONS", "value": "Fever with nasal congestion, cold/flu with runny nose and fever, allergic rhinitis with fever, sinusitis with fever", "sub": null },
      { "label": "COMPONENTS", "value": "Paracetamol + Phenylephrine + Chlorpheniramine", "sub": "Antipyretic + decongestant + antihistamine" }
    ],
    "brandTable": [
      { "name": "Panadol Cold & Flu", "form": "Tablets, Caplets, Sachets", "strengths": "500 mg + 5 mg + 2 mg per dose", "manufacturer": "GSK/Haleon", "region": "UK, Europe, Asia, Pakistan" },
      { "name": "Theraflu", "form": "Powder Sachets (Hot Drink)", "strengths": "650 mg + 10 mg + 4 mg per sachet", "manufacturer": "GSK/Haleon", "region": "USA, Europe, Global" },
      { "name": "Tylenol Cold & Flu", "form": "Caplets, Liquid", "strengths": "325 mg + 5 mg + 2 mg per caplet", "manufacturer": "J&J/Kenvue", "region": "USA, Canada" },
      { "name": "Lemsip Max", "form": "Powder Sachets, Liquid", "strengths": "1,000 mg + 10 mg + 4 mg per dose", "manufacturer": "Reckitt Benckiser", "region": "UK, Europe" },
      { "name": "Benylin Cold & Flu", "form": "Tablets, Liquid", "strengths": "500 mg + 5 mg + 2 mg", "manufacturer": "J&J/McNeil", "region": "UK, Europe" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "Hypertensive crisis (phenylephrine) - contraindicated.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR (paracetamol component).", "severity": "Moderate" },
      { "drugClass": "CNS Depressants (Alcohol, Benzodiazepines)", "effect": "Enhanced sedation (chlorpheniramine).", "severity": "Major" },
      { "drugClass": "Antihypertensives", "effect": "Reduced BP control (phenylephrine).", "severity": "Moderate" },
      { "drugClass": "TCAs (Amitriptyline, Nortriptyline)", "effect": "Enhanced sympathomimetic effect.", "severity": "Moderate" },
      { "drugClass": "Hepatotoxic Drugs", "effect": "Additive hepatotoxicity.", "severity": "Major" }
    ],
    "warning": "Do not use with MAOIs or within 14 days of stopping. Chlorpheniramine causes drowsiness - avoid driving. Phenylephrine may increase BP - caution in hypertension, hyperthyroidism. Antihistamine anticholinergic effects (dry mouth, urinary retention). Avoid in glaucoma, BPH. Pregnancy category C.",
    "subCategoryId": "combination-products"
  },
  {
    "id": "paracetamol-dextromethorphan-phenylephrine",
    "categoryId": "antipyretics",
    "genericName": "Paracetamol + Dextromethorphan + Phenylephrine",
    "brandNames": "Panadol Cough & Cold, DayQuil Severe, Robitussin Cold & Flu, Tylenol Cough & Cold, Vicks DayQuil, Benylin Multi-Symptom",
    "description": "Triple combination for fever with cough and congestion: paracetamol (antipyretic), dextromethorphan (antitussive), phenylephrine (decongestant). Used for symptomatic relief of cold/flu with productive or dry cough.",
    "status": "OTC",
    "isCommonlyPrescribed": true,
    "isOTCAndRx": true,
    "primaryIndication": "Fever with Cough and Congestion",
    "dosageForm": "Oral Tablets/Caplets/Liquid",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 tabs q6h with cough/cold symptoms", "sub": "Max: 4 g/day paracetamol" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min onset", "sub": "Varied per component" },
      { "label": "CLINICAL INDICATIONS", "value": "Fever with cough (dry/hacking), cold/flu with fever and cough, sinus congestion with cough and fever", "sub": null },
      { "label": "COMPONENTS", "value": "Paracetamol + DXM + Phenylephrine", "sub": "Antipyretic + antitussive + decongestant" }
    ],
    "brandTable": [
      { "name": "DayQuil Severe Cold & Flu", "form": "Caplets, Liquid", "strengths": "325 mg + 10 mg + 5 mg per caplet", "manufacturer": "Procter & Gamble/Vicks", "region": "USA" },
      { "name": "Panadol Cough & Cold", "form": "Tablets, Caplets", "strengths": "500 mg + 7.5 mg + 5 mg", "manufacturer": "GSK/Haleon", "region": "UK, Europe, Asia" },
      { "name": "Tylenol Cough & Cold", "form": "Caplets", "strengths": "325 mg + 10 mg + 5 mg", "manufacturer": "J&J/Kenvue", "region": "USA" },
      { "name": "Robitussin Cold & Flu", "form": "Liquid", "strengths": "325 mg + 10 mg + 5 mg per 10 mL", "manufacturer": "Pfizer/Haleon", "region": "USA, Canada" },
      { "name": "Benylin Multi-Symptom", "form": "Tablets, Liquid", "strengths": "500 mg + 7.5 mg + 5 mg", "manufacturer": "J&J/McNeil", "region": "UK, Europe" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "Hypertensive crisis + serotonin syndrome risk.", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs", "effect": "Serotonin syndrome risk (dextromethorphan).", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR (paracetamol).", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Enhanced sedation and hepatotoxicity.", "severity": "Major" },
      { "drugClass": "Antihypertensives", "effect": "Reduced BP control (phenylephrine).", "severity": "Moderate" },
      { "drugClass": "CNS Depressants", "effect": "Additive sedation.", "severity": "Moderate" }
    ],
    "warning": "Serotonin syndrome risk (dextromethorphan + serotonergic drugs). Do not use with MAOIs. Dextromethorphan may cause dizziness and drowsiness. Avoid in patients with persistent/chronic cough (asthma, COPD). Phenylephrine may raise BP. Maximum: 4 g/day paracetamol from all sources.",
    "subCategoryId": "combination-products"
  },
  {
    "id": "paracetamol-pseudoephedrine",
    "categoryId": "antipyretics",
    "genericName": "Paracetamol + Pseudoephedrine",
    "brandNames": "Sudafed Sinus, Panadol Sinus, Tylenol Sinus, Sinutab, Nurofen Sinus, Benadryl Allergy Sinus",
    "description": "Combination of paracetamol with pseudoephedrine (nasal decongestant) for fever with sinus congestion. Pseudoephedrine is more effective than phenylephrine as a decongestant. Regulated due to pseudoephedrine being a methamphetamine precursor.",
    "status": "OTC + Rx",
    "isCommonlyPrescribed": true,
    "isOTCAndRx": true,
    "primaryIndication": "Fever with Sinus Congestion",
    "dosageForm": "Oral Tablets/Caplets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 tabs q6h (500 mg + 30-60 mg pseudoephedrine)", "sub": "Max: 4 g/day paracetamol" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min onset", "sub": "Paracetamol: 2-3 hrs; Pseudoephedrine: 4-8 hrs" },
      { "label": "CLINICAL INDICATIONS", "value": "Fever with sinus congestion, cold/flu with nasal congestion, sinusitis with fever, allergic rhinitis with fever", "sub": null },
      { "label": "CONTROLLED STATUS", "value": "Behind-the-counter in many countries", "sub": "Methamphetamine precursor regulations" }
    ],
    "brandTable": [
      { "name": "Sudafed Sinus", "form": "Tablets, Caplets", "strengths": "500 mg + 30 mg per tab", "manufacturer": "Pfizer/Haleon", "region": "USA, UK, Global" },
      { "name": "Tylenol Sinus", "form": "Caplets, Gelcaps", "strengths": "325 mg + 30 mg; 500 mg + 60 mg", "manufacturer": "J&J/Kenvue", "region": "USA, Canada" },
      { "name": "Panadol Sinus", "form": "Tablets", "strengths": "500 mg + 30 mg; 500 mg + 60 mg", "manufacturer": "GSK/Haleon", "region": "UK, Europe, Asia, Pakistan" },
      { "name": "Sinutab", "form": "Tablets, Caplets", "strengths": "500 mg + 30 mg; 500 mg + 60 mg", "manufacturer": "Pfizer", "region": "UK, Europe" },
      { "name": "Benadryl Allergy Sinus", "form": "Tablets", "strengths": "500 mg + 30 mg + antihistamine variations", "manufacturer": "J&J/McNeil", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "Hypertensive crisis - contraindicated.", "severity": "Major" },
      { "drugClass": "Antihypertensives (Beta-Blockers)", "effect": "Reduced BP control; possible hypertensive crisis.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR (paracetamol).", "severity": "Moderate" },
      { "drugClass": "TCAs (Amitriptyline)", "effect": "Enhanced sympathomimetic effect.", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Hepatotoxicity risk.", "severity": "Moderate" },
      { "drugClass": "Caffeine", "effect": "Additive CNS stimulation.", "severity": "Minor" }
    ],
    "warning": "Behind-the-counter in many countries due to methamphetamine precursor. Pseudoephedrine is more effective than phenylephrine. Avoid in uncontrolled hypertension, hyperthyroidism, glaucoma, BPH, CAD. Insomnia risk - avoid evening doses. Do not exceed 7 days of use. Pregnancy category C.",
    "subCategoryId": "combination-products"
  },
  {
    "id": "paracetamol-ibuprofen",
    "categoryId": "antipyretics",
    "genericName": "Paracetamol + Ibuprofen",
    "brandNames": "Fevadol, Combiflam (with ibuprofen), Nuromol, Advil Dual Action, Ibupramax, Maxiflu",
    "description": "Fixed-dose combination of paracetamol and ibuprofen for enhanced antipyretic and analgesic effect. Maximizes fever reduction through dual mechanism (COX inhibition in CNS + peripheral COX inhibition). Superior to either agent alone for fever management.",
    "status": "OTC + Rx",
    "isCommonlyPrescribed": true,
    "isOTCAndRx": true,
    "primaryIndication": "Fever (Dual Mechanism)",
    "dosageForm": "Oral Tablets/Caplets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1 tab (500 mg + 200 mg) TID", "sub": "Max: 4 tabs/day (2,000 mg + 800 mg)" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min onset", "sub": "Paracetamol: 2-3 hrs; Ibuprofen: 2-4 hrs" },
      { "label": "CLINICAL INDICATIONS", "value": "High fever, fever with pain, post-operative fever, dental pain with fever, cold/flu with high fever, fever unresponsive to monotherapy", "sub": null },
      { "label": "ALTERNATING THERAPY", "value": "Can alternate solo agents every 3-4 hours", "sub": "Common pediatric practice" }
    ],
    "brandTable": [
      { "name": "Nuromol", "form": "Tablets, Caplets", "strengths": "500 mg + 200 mg", "manufacturer": "Reckitt Benckiser", "region": "UK, Europe, Asia" },
      { "name": "Advil Dual Action", "form": "Caplets", "strengths": "500 mg + 200 mg (ibuprofen + paracetamol)", "manufacturer": "Pfizer/Haleon", "region": "USA, Canada" },
      { "name": "Combiflam", "form": "Tablets, Suspension", "strengths": "325 mg + 400 mg", "manufacturer": "Sanofi/Cipla", "region": "Pakistan, India" },
      { "name": "Fevadol", "form": "Tablets, Suspension", "strengths": "125 mg + 100 mg pediatric susp; 500 mg + 200 mg adult", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Maxiflu", "form": "Tablets, Sachets", "strengths": "500 mg + 200 mg + decongestant variations", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Anticoagulants (Warfarin, DOACs)", "effect": "Increased bleeding risk (ibuprofen) + increased INR (paracetamol).", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Hepatotoxicity + GI bleeding risk.", "severity": "Major" },
      { "drugClass": "Other NSAIDs", "effect": "Additive GI toxicity without added efficacy.", "severity": "Major" },
      { "drugClass": "Corticosteroids", "effect": "Increased GI bleeding risk (ibuprofen).", "severity": "Major" },
      { "drugClass": "ACE Inhibitors/Diuretics", "effect": "Reduced efficacy, increased renal dysfunction.", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate levels.", "severity": "Major" }
    ],
    "warning": "Combined NSAID + acetaminophen hepatotoxicity and GI risks. Max daily: 4,000 mg paracetamol + 1,200 mg ibuprofen. Avoid with other NSAIDs. Use caution in patients with CV disease, renal impairment, or GI bleeding history. Pregnancy avoid (both components). Not for prolonged use.",
    "subCategoryId": "combination-products"
  },
  {
    "id": "paracetamol-diclofenac",
    "categoryId": "antipyretics",
    "genericName": "Paracetamol + Diclofenac",
    "brandNames": "Diclogesic Plus, Cataflam Plus, Voltaren Plus, Panadol Plus Diclofenac, Diclofenac-P, Febridol",
    "description": "Fixed-dose combination for moderate-to-severe fever with inflammatory pain. Diclofenac is one of the most potent NSAIDs. The combination provides rapid fever reduction with potent anti-inflammatory effect. Popular for musculoskeletal and dental conditions with fever.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Fever with Inflammatory Pain",
    "dosageForm": "Oral Tablets/Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1 tab (500 mg + 50 mg) BID-TID", "sub": "Max: 3 tabs/day" },
      { "label": "ONSET / HALF-LIFE", "value": "30-45 min onset", "sub": "Paracetamol: 2-3 hrs; Diclofenac: 1-2 hrs" },
      { "label": "CLINICAL INDICATIONS", "value": "Fever with dental pain, post-operative fever, musculoskeletal injury with fever, RA/OA flare with fever, acute gout with fever", "sub": null },
      { "label": "COMBINATION BENEFIT", "value": "Synergistic antipyretic effect", "sub": "Multi-pathway COX inhibition" }
    ],
    "brandTable": [
      { "name": "Diclogesic Plus", "form": "Tablets, Injection", "strengths": "500 mg + 50 mg tabs; 500 mg + 75 mg IM", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Voltaren Plus", "form": "Tablets", "strengths": "500 mg + 50 mg", "manufacturer": "Novartis", "region": "Europe, Asia, Pakistan" },
      { "name": "Cataflam Plus", "form": "Tablets", "strengths": "500 mg + 50 mg (diclofenac potassium)", "manufacturer": "Novartis", "region": "Europe, Asia" },
      { "name": "Diclofenac-P", "form": "Tablets", "strengths": "500 mg + 50 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Febridol", "form": "Tablets, Injection", "strengths": "500 mg + 50 mg tabs; 500 mg + 75 mg IM/IV", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Anticoagulants (Warfarin)", "effect": "Significantly increased bleeding risk.", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "GI bleeding + hepatotoxicity risk.", "severity": "Major" },
      { "drugClass": "ACE Inhibitors/ARBs", "effect": "Reduced antihypertensive effect + renal risk.", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate toxicity.", "severity": "Major" },
      { "drugClass": "Corticosteroids", "effect": "Additive GI ulceration risk.", "severity": "Major" },
      { "drugClass": "Lithium/Digoxin", "effect": "Increased lithium/digoxin levels.", "severity": "Moderate" }
    ],
    "warning": "Combined NSAID + paracetamol risks. GI bleeding risk (diclofenac). Hepatotoxicity (paracetamol). CV risk with long-term NSAID use. Avoid in active GI bleeding, severe renal or hepatic impairment. Not for third trimester pregnancy. Max 3 days for fever.",
    "subCategoryId": "combination-products"
  },
  {
    "id": "paracetamol-tramadol",
    "categoryId": "antipyretics",
    "genericName": "Paracetamol + Tramadol",
    "brandNames": "Ultracet, Tramadol Plus, Tramacet, Dolcet, Zaldiar, Tramal Plus, Biocetamol",
    "description": "Combination of paracetamol and tramadol (opioid-like analgesic) for moderate-to-severe pain with fever. Tramadol enhances the analgesic effect through mu-opioid receptor agonism and serotonin/norepinephrine reuptake inhibition. Controlled substance in many countries.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Moderate-to-Severe Pain with Fever",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 tabs (325 mg + 37.5 mg) q4-6h", "sub": "Max: 8 tabs/day (2,600 mg + 300 mg)" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min onset", "sub": "Paracetamol: 2-3 hrs; Tramadol: 6-7 hrs" },
      { "label": "CLINICAL INDICATIONS", "value": "Post-operative fever/pain, dental surgery, acute musculoskeletal injury with severe pain, OA flare, acute back pain with fever", "sub": null },
      { "label": "CONTROLLED STATUS", "value": "Schedule IV (US) / CD Sch 3 (UK)", "sub": "Controlled substance due to tramadol" }
    ],
    "brandTable": [
      { "name": "Ultracet", "form": "Tablets", "strengths": "325 mg + 37.5 mg", "manufacturer": "Janssen (J&J)", "region": "USA, Canada" },
      { "name": "Zaldiar", "form": "Tablets, Effervescent Tablets", "strengths": "325 mg + 37.5 mg", "manufacturer": "Grünenthal", "region": "Europe, Asia, Middle East" },
      { "name": "Tramacet", "form": "Tablets", "strengths": "325 mg + 37.5 mg", "manufacturer": "Janssen", "region": "Europe, Asia, Pakistan" },
      { "name": "Dolcet", "form": "Tablets", "strengths": "325 mg + 37.5 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Tramal Plus", "form": "Capsules, Tablets", "strengths": "325 mg + 37.5 mg", "manufacturer": "Grünenthal", "region": "Europe" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "Serotonin syndrome risk - contraindicated.", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs/TCAs", "effect": "Serotonin syndrome risk (tramadol).", "severity": "Major" },
      { "drugClass": "Alcohol, Benzodiazepines, CNS Depressants", "effect": "Additive respiratory depression and sedation.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR (paracetamol component).", "severity": "Moderate" },
      { "drugClass": "Carbamazepine", "effect": "Reduced tramadol efficacy (CYP induction).", "severity": "Moderate" },
      { "drugClass": "Ondansetron", "effect": "Reduced tramadol analgesic efficacy.", "severity": "Moderate" }
    ],
    "warning": "Controlled substance - risk of dependence and addiction. Seizure risk (tramadol), especially with SSRIs, SNRIs, or history of epilepsy. Respiratory depression (dose-related). Serotonin syndrome with serotonergic drugs. Avoid in breastfeeding. Max paracetamol from all sources: 4 g/day.",
    "subCategoryId": "combination-products"
  },
  {
    "id": "co-codamol",
    "categoryId": "antipyretics",
    "genericName": "Paracetamol + Codeine (Co-codamol)",
    "brandNames": "Tylenol #3, Tylenol #4, Panadeine, Co-codamol, Kapake, Solpadeine Plus, Empraset",
    "description": "Combination of paracetamol and codeine (opioid prodrug converted to morphine). Codeine enhances antipyretic effect through CNS opioid activity. Used for moderate pain with fever when simple analgesics are insufficient. Schedule II-III controlled substance.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Moderate Pain with Fever",
    "specialField": { "label": "Schedule", "value": "Schedule II-III Controlled" },
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 tabs (300/500 mg + 8-30 mg) q4-6h", "sub": "Max: 4 g/day paracetamol; 360 mg/day codeine" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min onset", "sub": "Paracetamol: 2-3 hrs; Codeine: 2-4 hrs" },
      { "label": "CLINICAL INDICATIONS", "value": "Post-surgical fever/pain, dental extraction, acute injury, fracture pain, migraine with fever", "sub": null },
      { "label": "VARIATIONS", "value": "Tylenol #3 = 300 + 30 mg; #4 = 300 + 60 mg", "sub": "UK: 500 + 8 mg OTC, 500 + 15-30 mg Rx" }
    ],
    "brandTable": [
      { "name": "Tylenol #3", "form": "Tablets, Capsules", "strengths": "300 mg + 30 mg codeine", "manufacturer": "J&J/Kenvue", "region": "USA, Canada" },
      { "name": "Tylenol #4", "form": "Tablets", "strengths": "300 mg + 60 mg codeine", "manufacturer": "J&J/Kenvue", "region": "USA, Canada" },
      { "name": "Panadeine", "form": "Tablets, Caplets", "strengths": "500 mg + 8 mg (OTC); 500 mg + 15 mg (Rx)", "manufacturer": "GSK/Haleon", "region": "UK, Europe, Asia, Pakistan" },
      { "name": "Kapake", "form": "Tablets, Capsules", "strengths": "500 mg + 15 mg, 500 mg + 30 mg", "manufacturer": "Various (Generic)", "region": "UK, Europe" },
      { "name": "Solpadeine Plus", "form": "Tablets, Soluble Tablets", "strengths": "500 mg + 8 mg + caffeine", "manufacturer": "Omega Pharma", "region": "UK, Europe" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "CNS excitation/hypertension - contraindicated.", "severity": "Major" },
      { "drugClass": "Alcohol, Benzodiazepines, Other CNS Depressants", "effect": "Additive respiratory depression and sedation.", "severity": "Major" },
      { "drugClass": "CYP2D6 Inhibitors (Fluoxetine, Paroxetine, Quinidine)", "effect": "Reduced codeine conversion to morphine - decreased efficacy.", "severity": "Moderate" },
      { "drugClass": "Warfarin", "effect": "Increased INR (paracetamol component).", "severity": "Moderate" },
      { "drugClass": "Opioid Antagonists (Naloxone, Naltrexone)", "effect": "Opioid withdrawal risk.", "severity": "Major" },
      { "drugClass": "CYP3A4 Inducers (Rifampin, Carbamazepine)", "effect": "Reduced codeine levels.", "severity": "Moderate" }
    ],
    "warning": "Controlled substance - dependence, tolerance, addiction risk. Respiratory depression. Codeine is a prodrug - poor metabolizers (CYP2D6) get no analgesia; ultrarapid metabolizers risk toxicity. FDA black box: contraindicated in children <12 for post-tonsillectomy pain. Avoid in breastfeeding (ultrarapid metabolizers).",
    "subCategoryId": "combination-products"
  },
  {
    "id": "paracetamol-orphenadrine",
    "categoryId": "antipyretics",
    "genericName": "Paracetamol + Orphenadrine",
    "brandNames": "Muscle Relief Plus, Myogesic, Norgesic, Norpan Plus, Orphacet, Forphen Plus",
    "description": "Combination of paracetamol (antipyretic/analgesic) and orphenadrine (centrally acting muscle relaxant). Used when muscle spasm accompanies fever-related conditions. Orphenadrine provides additional analgesic and muscle-relaxant effect.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Fever with Muscle Spasm",
    "specialField": { "label": "Type", "value": "Antipyretic + Muscle Relaxant" },
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1 tab (500 mg + 35 mg) BID", "sub": "Max: 2-3 tabs/day" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min onset", "sub": "Paracetamol: 2-3 hrs; Orphenadrine: 14-16 hrs" },
      { "label": "CLINICAL INDICATIONS", "value": "Fever with muscle strain/spasm, low back pain with fever, torticollis with fever, musculoskeletal injury, fibromyalgia", "sub": null },
      { "label": "MECHANISM", "value": "Centrally acting muscle relaxant", "sub": "Orphenadrine = diphenhydramine derivative" }
    ],
    "brandTable": [
      { "name": "Myogesic", "form": "Tablets", "strengths": "500 mg + 35 mg (paracetamol + orphenadrine)", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Norgesic", "form": "Tablets", "strengths": "385 mg + 25 mg + 30 mg caffeine", "manufacturer": "3M Pharma", "region": "USA, Canada, UK" },
      { "name": "Norpan Plus", "form": "Tablets", "strengths": "500 mg + 35 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Orphacet", "form": "Tablets", "strengths": "500 mg + 35 mg", "manufacturer": "Various (Generic)", "region": "Pakistan" },
      { "name": "Forphen Plus", "form": "Tablets", "strengths": "500 mg + 35 mg + 30 mg caffeine", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Alcohol, CNS Depressants", "effect": "Additive sedation and anticholinergic effects.", "severity": "Major" },
      { "drugClass": "Anticholinergics (Other)", "effect": "Additive anticholinergic effects - dry mouth, blurred vision, constipation.", "severity": "Moderate" },
      { "drugClass": "MAO Inhibitors", "effect": "Hypertensive crisis risk.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR (paracetamol).", "severity": "Moderate" },
      { "drugClass": "Antihistamines", "effect": "Additive anticholinergic and sedative effects.", "severity": "Moderate" },
      { "drugClass": "Hepatotoxic Drugs", "effect": "Additive hepatotoxicity.", "severity": "Major" }
    ],
    "warning": "Orphenadrine has significant anticholinergic effects (dry mouth, blurred vision, urinary retention, constipation). Avoid in glaucoma, BPH, myasthenia gravis. Can cause confusion in elderly. May impair ability to drive. Hepatotoxicity risk from paracetamol component. Avoid in alcoholism.",
    "subCategoryId": "combination-products"
  },
  {
    "id": "nimesulide",
    "categoryId": "antipyretics",
    "genericName": "Nimesulide",
    "brandNames": "Nimesil, Sulide, Nise, Nimulid, Nimek, Nilsid, Antiflam",
    "description": "Selective COX-2 inhibitor with potent antipyretic and anti-inflammatory properties. Notable for rapid fever reduction (often within 15-30 minutes). Banned in several countries due to hepatotoxicity concerns. Still widely used in many European, Asian, and Latin American countries.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Acute Fever and Inflammatory Pain",
    "specialField": { "label": "Global Status", "value": "Banned in some countries" },
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "100 mg BID", "sub": "Max: 200 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "15-30 min onset (rapid absorption)", "sub": "~2-5 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute fever, acute pain (dental, musculoskeletal, post-operative), dysmenorrhea, sore throat, OA flares", "sub": null },
      { "label": "PEDIATRIC DOSE", "value": "5 mg/kg/day divided BID", "sub": "Suspension 50 mg/5 mL, 100 mg/5 mL" }
    ],
    "brandTable": [
      { "name": "Nimesil", "form": "Granules (Sachets), Tablets, Suspension", "strengths": "100 mg granules/sachet; 100 mg tabs; 50 mg/5 mL susp.", "manufacturer": "Angelini Pharma", "region": "Europe, Asia, Pakistan, Latin America" },
      { "name": "Nise", "form": "Tablets, Gel, Suspension", "strengths": "100 mg tabs; 1% gel; 50 mg/5 mL susp.", "manufacturer": "Dr. Reddy's Labs", "region": "India, Asia" },
      { "name": "Nimulid", "form": "Tablets, Suspension, Transdermal Gel", "strengths": "100 mg tabs; 50 mg/5 mL susp; 1% gel", "manufacturer": "Panacea Biotec", "region": "India, Asia, Pakistan" },
      { "name": "Sulide", "form": "Tablets, Suspension, Granules", "strengths": "100 mg tabs; 100 mg granules; 50 mg/5 mL susp.", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Antiflam", "form": "Tablets, Gel", "strengths": "100 mg; 1% topical gel", "manufacturer": "Various (Generic)", "region": "Pakistan" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR risk.", "severity": "Major" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate levels.", "severity": "Major" },
      { "drugClass": "ACE Inhibitors/ARBs", "effect": "Reduced antihypertensive efficacy.", "severity": "Moderate" },
      { "drugClass": "Diuretics", "effect": "Reduced diuretic efficacy.", "severity": "Moderate" },
      { "drugClass": "Other NSAIDs/Aspirin", "effect": "Additive GI and hepatic toxicity.", "severity": "Major" },
      { "drugClass": "Corticosteroids", "effect": "Additive GI ulceration risk.", "severity": "Major" }
    ],
    "warning": "BLACK BOX: Hepatotoxicity - possibly severe/fatal. Banned in several countries (Spain, Finland, Belgium, US). Contraindicated in hepatic impairment. Monitor LFTs. Maximum treatment duration: 15 days. Avoid in children <12 years (controversial). Rapid fever reduction effect. GI risks similar to other NSAIDs.",
    "subCategoryId": "other-antipyretics"
  },
  {
    "id": "choline-salicylate",
    "categoryId": "antipyretics",
    "genericName": "Choline Salicylate",
    "brandNames": "Bonjela, Teejel, Choline Salicylate Gel, Salicylic Acid Gel, Diabetol, Mouth Ulcer Gel",
    "description": "Topical salicylate with antipyretic and analgesic properties. Primarily used as oral gel for teething pain, mouth ulcers, and denture irritation. Provides local relief through topical prostaglandin inhibition. Systemic absorption is minimal but can reduce fever.",
    "status": "OTC",
    "isCommonlyPrescribed": true,
    "isOTCAndRx": true,
    "primaryIndication": "Teething and Oral Mucosal Pain",
    "dosageForm": "Topical Oral Gel",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "Apply to affected area q3-4h PRN", "sub": "Max: 6 applications/day" },
      { "label": "ONSET / HALF-LIFE", "value": "2-5 min local onset", "sub": "Minimal systemic absorption" },
      { "label": "CLINICAL INDICATIONS", "value": "Teething pain (infants), mouth ulcers, denture irritation, cold sores, oral inflammation, minor gum irritation", "sub": null },
      { "label": "PEDIATRIC USE", "value": "Commonly used for infant teething", "sub": "Apply with clean finger to gums" }
    ],
    "brandTable": [
      { "name": "Bonjela", "form": "Oral Gel", "strengths": "8.7% choline salicylate + 0.01% cetalkonium chloride", "manufacturer": "Reckitt Benckiser", "region": "UK, Europe, Asia, Pakistan, Australia, Global" },
      { "name": "Teejel", "form": "Oral Gel", "strengths": "8.7% choline salicylate", "manufacturer": "SSL International", "region": "UK, Europe, South Africa" },
      { "name": "Choline Salicylate Gel", "form": "Oral Gel", "strengths": "8.7%", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Mouth Ulcer Gel", "form": "Oral Gel", "strengths": "8.7% + lidocaine variations", "manufacturer": "Various (Generic)", "region": "Global" },
      { "name": "Diabetol", "form": "Oral Gel", "strengths": "8.7% choline salicylate", "manufacturer": "Various (Generic)", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Aspirin/Other Salicylates (Systemic)", "effect": "Additive salicylate effects with excessive use.", "severity": "Moderate" },
      { "drugClass": "Warfarin", "effect": "Minimal interaction (low systemic absorption).", "severity": "Minor" },
      { "drugClass": "Methotrexate", "effect": "Potential decreased methotrexate clearance (theoretical).", "severity": "Minor" },
      { "drugClass": "Other Oral Topical Agents", "effect": "Allow 30 min between applications.", "severity": "Minor" },
      { "drugClass": "Oral Anticoagulants", "effect": "Negligible interaction (topical).", "severity": "Minor" },
      { "drugClass": "NSAIDs (Systemic)", "effect": "Minimal additive effect (low systemic absorption).", "severity": "Minor" }
    ],
    "warning": "Avoid in children <4 months (Reye syndrome theoretical risk). Do not apply to large areas of broken mucosa. Prolonged use may cause mucosal irritation. Contains choline salicylate - avoid in salicylate hypersensitivity. Pregnancy category C (avoid during third trimester).",
    "subCategoryId": "other-antipyretics"
  },
  {
    "id": "flurbiprofen-lozenges",
    "categoryId": "antipyretics",
    "genericName": "Flurbiprofen Lozenges",
    "brandNames": "Strefen, Flurbiprofen Spray, Ansaid, Flurbi, Panafilm, Froben",
    "description": "Flurbiprofen in lozenge/spray form for local treatment of sore throat with fever. NSAID with anti-inflammatory and antipyretic properties delivered directly to pharyngeal mucosa. Reduces both sore throat pain and systemic fever through buccal absorption.",
    "status": "OTC + Rx",
    "isCommonlyPrescribed": false,
    "isOTCAndRx": true,
    "primaryIndication": "Sore Throat with Fever",
    "dosageForm": "Lozenges/Spray",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1 lozenge (8.75 mg) q3-6h PRN", "sub": "Max: 5 lozenges/day" },
      { "label": "ONSET / HALF-LIFE", "value": "5-10 min local onset", "sub": "~4-6 hours half-life (systemic)" },
      { "label": "CLINICAL INDICATIONS", "value": "Sore throat (pharyngitis, tonsillitis), fever with sore throat, post-tonsillectomy pain, oral mucositis", "sub": null },
      { "label": "MECHANISM", "value": "Local COX inhibition + systemic absorption", "sub": "Dual action for sore throat with fever" }
    ],
    "brandTable": [
      { "name": "Strefen", "form": "Lozenges, Spray", "strengths": "8.75 mg lozenges (honey/lemon); 0.25% spray", "manufacturer": "Reckitt Benckiser", "region": "UK, Europe, Asia, Pakistan, Global" },
      { "name": "Flurbi", "form": "Lozenges", "strengths": "8.75 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Ansaid", "form": "Lozenges, Tablets", "strengths": "8.75 mg lozenges; 50 mg, 100 mg systemic tabs", "manufacturer": "Pfizer (Pharmacia)", "region": "Europe, Asia" },
      { "name": "Panafilm", "form": "Lozenges, Spray", "strengths": "8.75 mg; 0.25% oromucosal spray", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Froben", "form": "Lozenges, Tablets", "strengths": "8.75 mg lozenges; 50 mg, 100 mg tabs", "manufacturer": "Abbott", "region": "Europe, Asia" }
    ],
    "interactions": [
      { "drugClass": "Anticoagulants (Warfarin)", "effect": "Increased bleeding risk (systemic NSAID effect).", "severity": "Moderate" },
      { "drugClass": "Other NSAIDs/Aspirin", "effect": "Additive GI toxicity.", "severity": "Moderate" },
      { "drugClass": "ACE Inhibitors", "effect": "Reduced antihypertensive effect.", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate levels.", "severity": "Moderate" },
      { "drugClass": "Corticosteroids", "effect": "Additive GI irritation.", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "GI irritation risk.", "severity": "Moderate" }
    ],
    "warning": "NSAID lozenge - systemic absorption occurs (buccal). Contraindicated in patients with active GI ulceration. Avoid in third trimester pregnancy. Not for use in children <12 years. Do not exceed 5 lozenges/day. Each lozenge: slow dissolve in mouth (do not chew/swallow whole).",
    "subCategoryId": "other-antipyretics"
  },
  {
    "id": "diphenhydramine-paracetamol",
    "categoryId": "antipyretics",
    "genericName": "Diphenhydramine + Paracetamol",
    "brandNames": "Benadryl Plus, NyQuil, Panadol Night, Sominex Plus, Tylenol PM, Acetaminophen PM, Caladryl PM",
    "description": "Combination of paracetamol (antipyretic) and diphenhydramine (sedating antihistamine). Used for nighttime relief of fever and cold symptoms. Diphenhydramine promotes sleep and reduces rhinorrhea while paracetamol addresses fever and pain.",
    "status": "OTC",
    "isCommonlyPrescribed": true,
    "isOTCAndRx": true,
    "primaryIndication": "Nighttime Fever/Cold Relief",
    "specialField": { "label": "Type", "value": "Antipyretic + Sedative Antihistamine" },
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2 tabs (500 mg + 25 mg) at bedtime", "sub": "Max: 2 tabs in 24 hours" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min onset", "sub": "Paracetamol: 2-3 hrs; Diphenhydramine: 4-8 hrs" },
      { "label": "CLINICAL INDICATIONS", "value": "Nighttime cold/flu with fever, insomnia due to cold/fever, allergic rhinitis with fever at night, cough with fever needing nighttime relief", "sub": null },
      { "label": "COMPONENTS", "value": "Paracetamol + Diphenhydramine", "sub": "Antipyretic + sedating antihistamine" }
    ],
    "brandTable": [
      { "name": "Tylenol PM", "form": "Caplets, Tablets, Gelcaps, Liquids", "strengths": "500 mg + 25 mg; 325 mg + 12.5 mg (extra strength)", "manufacturer": "J&J/Kenvue", "region": "USA, Canada, Global" },
      { "name": "NyQuil", "form": "Liquid, LiquiCaps", "strengths": "325 mg + 12.5 mg per 15 mL (also with DXM/doxylamine variants)", "manufacturer": "Procter & Gamble/Vicks", "region": "USA, Global" },
      { "name": "Panadol Night", "form": "Tablets, Caplets", "strengths": "500 mg + 25 mg diphenhydramine", "manufacturer": "GSK/Haleon", "region": "UK, Europe, Asia, Pakistan" },
      { "name": "Benadryl Plus", "form": "Caplets, Liquid", "strengths": "500 mg + 25 mg", "manufacturer": "J&J/McNeil", "region": "UK, Europe, Asia" },
      { "name": "Acetaminophen PM", "form": "Caplets, Gelcaps", "strengths": "500 mg + 25 mg", "manufacturer": "Various (Generic)", "region": "USA, Canada, Global" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "Hypertensive crisis + anticholinergic toxicity.", "severity": "Major" },
      { "drugClass": "Alcohol, Benzodiazepines, CNS Depressants", "effect": "Severe additive sedation and respiratory depression.", "severity": "Major" },
      { "drugClass": "Other Antihistamines/Anticholinergics", "effect": "Additive anticholinergic effects.", "severity": "Moderate" },
      { "drugClass": "Warfarin", "effect": "Increased INR (paracetamol component).", "severity": "Moderate" },
      { "drugClass": "Hepatotoxic Drugs", "effect": "Additive hepatotoxicity.", "severity": "Major" },
      { "drugClass": "Tricyclic Antidepressants", "effect": "Additive anticholinergic and sedative effects.", "severity": "Moderate" }
    ],
    "warning": "For nighttime use only - causes significant drowsiness. Do not drive or operate machinery. Avoid alcohol. Anticholinergic effects: dry mouth, blurred vision, urinary retention, constipation. Avoid in glaucoma, BPH, asthma (may thicken secretions). Pregnancy category C.",
    "subCategoryId": "other-antipyretics"
  }
];
