import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

const pageId = 'toxicology';

const subcategories = [
  {
    id: 'tdm',
    title: 'Therapeutic Drug Monitoring',
    icon: 'medication',
    color: 'from-amber-600 to-amber-400',
    description: 'TDM optimizes drug dosing by measuring serum concentrations to ensure efficacy while minimizing toxicity. Critical for drugs with narrow therapeutic indices.',
    tests: [
      {
        name: 'Vancomycin Trough',
        normalRange: 'Trough: 10-20 mcg/mL (MSSA/MRSA), 15-20 mcg/mL (complicated infections)',
        clinicalSignificance: 'Glycopeptide antibiotic with narrow therapeutic index. Trough monitoring essential to ensure AUC/MIC >400 and avoid nephrotoxicity.',
        interpretation: 'Subtherapeutic (<10): risk of treatment failure and resistance. Supra-therapeutic (>20): increased nephrotoxicity risk, especially with concomitant aminoglycosides.',
        method: 'Chemiluminescence immunoassay (CLIA) or particle-enhanced turbidimetric inhibition immunoassay (PETINIA)',
      },
      {
        name: 'Gentamicin/Tobramycin (Peak & Trough)',
        normalRange: 'Trough: <2 mcg/mL conventional, <1 mcg/mL once-daily. Peak: 5-10 mcg/mL',
        clinicalSignificance: 'Aminoglycoside antibiotics with concentration-dependent killing. Peak/MIC ratio of 8-10 predicts efficacy.',
        interpretation: 'Elevated trough: accumulation, nephrotoxicity risk, ototoxicity. Subtherapeutic peak: inadequate dosing for Gram-negative coverage.',
        method: 'Chemiluminescence immunoassay (CLIA) on automated chemistry analyzer',
      },
      {
        name: 'Amikacin (Peak & Trough)',
        normalRange: 'Trough: <8 mcg/mL. Peak: 20-35 mcg/mL (conventional)',
        clinicalSignificance: 'Reserve aminoglycoside for multi-drug resistant Gram-negative infections. Extended-interval dosing preferred.',
        interpretation: 'Elevated trough (>8): renal accumulation, increased nephrotoxicity. Subtherapeutic peak (<20): inadequate AUC/MIC for resistant organisms.',
        method: 'Chemiluminescence immunoassay (CLIA) on automated chemistry analyzer',
      },
      {
        name: 'Digoxin',
        normalRange: '0.5-1.0 ng/mL (CHF), 0.8-2.0 ng/mL (AFib)',
        clinicalSignificance: 'Cardiac glycoside with narrow TI. Positive inotrope and AV nodal blocker. Toxicity can be life-threatening.',
        interpretation: 'Toxic (>2.0): arrhythmias (PVCs, atrial tachycardia with block, bidirectional VT), GI symptoms, visual disturbances. Low (<0.5): reduced efficacy in CHF. Hypokalemia potentiates toxicity.',
        method: 'Chemiluminescence immunoassay (CLIA) with digoxin-specific antibody',
      },
      {
        name: 'Lithium',
        normalRange: '0.6-1.2 mEq/L (acute mania), 0.4-0.8 mEq/L (maintenance)',
        clinicalSignificance: 'Mood stabilizer for bipolar disorder. Narrow TI monitoring essential due to renal excretion and volume status dependence.',
        interpretation: 'Toxic (>1.5): tremor, ataxia, confusion, seizure, coma, renal failure. Chronic toxicity >2.0, acute >3.0. Dehydration, NSAIDs, ACEi increase levels.',
        method: 'Ion-selective electrode (ISE) or colorimetric method on automated chemistry analyzer',
      },
      {
        name: 'Valproic Acid',
        normalRange: '50-100 mcg/mL (total), free: 6-20 mcg/mL',
        clinicalSignificance: 'Antiepileptic and mood stabilizer. Highly protein-bound; hypoalbuminemia requires free level monitoring.',
        interpretation: 'Toxic (>100): sedation, ataxia, tremor, thrombocytopenia, hyperammonemia, hepatotoxicity. Subtherapeutic (<50): breakthrough seizures or mood episodes.',
        method: 'Chemiluminescence immunoassay (CLIA) or enzyme multiplied immunoassay technique (EMIT)',
      },
      {
        name: 'Phenytoin (Total & Free)',
        normalRange: 'Total: 10-20 mcg/mL. Free: 1-2 mcg/mL',
        clinicalSignificance: 'Narrow TI antiepileptic with saturable (Michaelis-Menten) kinetics. Small dose changes cause disproportionate level changes at higher doses.',
        interpretation: 'Toxic (>20): nystagmus, ataxia, dysarthria, lethargy. Very high (>40): coma, seizures (paradoxical). Subtherapeutic (<10): inadequate seizure control. Free level indicated when hypoalbuminemia or uremia.',
        method: 'Chemiluminescence immunoassay (CLIA) with ultrafiltration for free phenytoin',
      },
      {
        name: 'Carbamazepine',
        normalRange: '4-12 mcg/mL',
        clinicalSignificance: 'Antiepileptic and mood stabilizer. Auto-inducer of its own metabolism; levels may drop after 2-4 weeks requiring dose adjustment.',
        interpretation: 'Toxic (>12): diplopia, blurred vision, ataxia, dizziness, hyponatremia, arrhythmia. Subtherapeutic (<4): breakthrough seizures. Induces OCP and warfarin metabolism.',
        method: 'Enzyme multiplied immunoassay technique (EMIT) or chemiluminescence immunoassay (CLIA)',
      },
      {
        name: 'Phenobarbital',
        normalRange: '10-40 mcg/mL',
        clinicalSignificance: 'Barbiturate antiepileptic with long half-life (2-6 days). Strong CYP450 inducer affecting many co-medications.',
        interpretation: 'Toxic (>40): sedation, ataxia, respiratory depression, nystagmus, hypotension. Severe >60: coma, respiratory arrest. Subtherapeutic: breakthrough seizures.',
        method: 'Enzyme multiplied immunoassay technique (EMIT) or gas chromatography (GC)',
      },
      {
        name: 'Cyclosporine (C0 Trough)',
        normalRange: '100-400 ng/mL (varies by transplant type and time post-transplant)',
        clinicalSignificance: 'Calcineurin inhibitor immunosuppressant used in solid organ and bone marrow transplant. Narrow TI with significant PK variability.',
        interpretation: 'Subtherapeutic: risk of graft rejection. Supratherapeutic: nephrotoxicity, hypertension, neurotoxicity, tremor, hirsutism, gingival hyperplasia. Drug interactions with azoles, macrolides, CCBs.',
        method: 'Chemiluminescence immunoassay (CLIA) or liquid chromatography-tandem mass spectrometry (LC-MS/MS) on whole blood',
      },
      {
        name: 'Tacrolimus (C0 Trough)',
        normalRange: '5-15 ng/mL (varies by transplant type and time post-transplant)',
        clinicalSignificance: 'Calcineurin inhibitor, backbone immunosuppressant in most modern transplant protocols. More potent than cyclosporine.',
        interpretation: 'Subtherapeutic (<5): acute rejection risk. Supratherapeutic (>15): nephrotoxicity, neurotoxicity (tremor, headache, seizure), post-transplant diabetes, hypertension.',
        method: 'Chemiluminescence immunoassay (CLIA) or LC-MS/MS on whole blood',
      },
      {
        name: 'Sirolimus',
        normalRange: '5-15 ng/mL (varies by indication and co-immunosuppression)',
        clinicalSignificance: 'mTOR inhibitor immunosuppressant. Used in renal transplant and LAM. Half-life ~60 hours.',
        interpretation: 'Supratherapeutic: thrombocytopenia, leukopenia, hyperlipidemia, oral ulcers, interstitial pneumonitis. Subtherapeutic: rejection risk. Levels affected by CYP3A4/5 interactions.',
        method: 'LC-MS/MS or chemiluminescence immunoassay (CLIA) on whole blood',
      },
      {
        name: 'Everolimus',
        normalRange: '3-8 ng/mL (transplant), varies by indication',
        clinicalSignificance: 'mTOR inhibitor, analog of sirolimus with shorter half-life (~30h). Used in transplant, breast cancer, and TSC.',
        interpretation: 'Supratherapeutic: stomatitis, rash, fatigue, hyperglycemia, hyperlipidemia, interstitial lung disease. Subtherapeutic: graft rejection or reduced anti-tumor efficacy.',
        method: 'LC-MS/MS on whole blood',
      },
      {
        name: 'Methotrexate (High-Dose Monitoring)',
        normalRange: '<0.1 mcmol/L at 72h (rescue achieved). Therapeutic varies.',
        clinicalSignificance: 'DHFR inhibitor used in high-dose protocols for leukemia, lymphoma, and osteosarcoma. Leucovorin rescue guided by timed levels.',
        interpretation: 'Delayed clearance: hepatotoxicity, nephrotoxicity, mucositis, myelosuppression. 72h level >0.1 mcmol/L: continue leucovorin rescue. Elevated Cr and urine pH <7.0 impair clearance.',
        method: 'Fluorescence polarization immunoassay (FPIA) or LC-MS/MS',
      },
      {
        name: 'Theophylline',
        normalRange: '10-20 mcg/mL',
        clinicalSignificance: 'Methylxanthine bronchodilator for COPD and asthma. Narrow TI with significant toxicity at levels just above therapeutic.',
        interpretation: 'Toxic (>20): nausea, vomiting, tachycardia, insomnia, tremor. Severe (>40): seizures, supraventricular arrhythmias. Toxicity exacerbated by fever, liver disease, heart failure.',
        method: 'Chemiluminescence immunoassay (CLIA) or enzyme multiplied immunoassay technique (EMIT)',
      },
      {
        name: 'Caffeine (Neonatal Apnea)',
        normalRange: '8-20 mcg/mL',
        clinicalSignificance: 'Methylxanthine used for apnea of prematurity. Long half-life in neonates (40-230h).',
        interpretation: 'Supratherapeutic (>20): tachycardia, feeding intolerance, jitteriness, CNS excitation. Subtherapeutic (<8): recurrence of apneic episodes. Half-life decreases with postnatal age.',
        method: 'Chemiluminescence immunoassay (CLIA) or LC-MS/MS on serum or plasma',
      },
    ]
  },
  {
    id: 'drug-screen',
    title: 'Drug Screening',
    icon: 'warning',
    color: 'from-red-600 to-red-400',
    description: 'Qualitative and quantitative drug screening for clinical toxicology, substance abuse monitoring, and medico-legal purposes. Includes immunoassay and confirmatory methods.',
    tests: [
      {
        name: 'Urine Drug Screen (Immunoassay) - Amphetamines',
        normalRange: 'Negative (<500 ng/mL cutoff for amphetamine/methamphetamine)',
        clinicalSignificance: 'Screening immunoassay for amphetamine-type stimulants including amphetamine, methamphetamine, MDMA, and MDA.',
        interpretation: 'Positive screen: requires confirmatory testing (LC-MS/MS) to distinguish true positives from cross-reactivity. Pseudoephedrine, bupropion, and some antidepressants may cause false positives.',
        method: 'CEDIA or EMIT homogeneous enzyme immunoassay on automated urine toxicology analyzer',
      },
      {
        name: 'Urine Drug Screen - Barbiturates',
        normalRange: 'Negative (<200 ng/mL cutoff)',
        clinicalSignificance: 'Screening for phenobarbital, secobarbital, butalbital, and other barbiturates. Used in seizure management, coma workup, and sedation monitoring.',
        interpretation: 'Positive: iatrogenic (therapeutic use), overdose evaluation, substance abuse. Semi-quantitative results guide management. Confirm with GC-MS if cause uncertain.',
        method: 'CEDIA or EMIT homogeneous enzyme immunoassay on automated urine toxicology analyzer',
      },
      {
        name: 'Urine Drug Screen - Benzodiazepines',
        normalRange: 'Negative (<200 ng/mL cutoff as nordiazepam equivalents)',
        clinicalSignificance: 'Screens for benzodiazepines including diazepam, alprazolam, lorazepam, clonazepam, and metabolites.',
        interpretation: 'Positive: therapeutic use, overdose, substance abuse. Variable cross-reactivity; some agents (lorazepam, clonazepam) may be missed. Confirm with LC-MS/MS for specific identification.',
        method: 'CEDIA or EMIT homogeneous enzyme immunoassay targeting benzodiazepine metabolite (nordiazepam equivalent)',
      },
      {
        name: 'Urine Drug Screen - Cannabinoids (THC)',
        normalRange: 'Negative (<50 ng/mL cutoff for 11-nor-delta-9-THC-COOH)',
        clinicalSignificance: 'Detects delta-9-tetrahydrocannabinol metabolite. Most commonly abused illicit substance; used in employment, legal, and clinical settings.',
        interpretation: 'Positive: recent cannabis use (hours to weeks depending on chronicity). Chronic users may test positive for 30+ days after cessation. Synthetic cannabinoids not detected.',
        method: 'CEDIA or EMIT homogeneous enzyme immunoassay targeting THC-COOH metabolite',
      },
      {
        name: 'Urine Drug Screen - Cocaine Metabolite',
        normalRange: 'Negative (<150 ng/mL cutoff for benzoylecgonine)',
        clinicalSignificance: 'Detects benzoylecgonine, the major urinary metabolite of cocaine. Detects use within 2-4 days.',
        interpretation: 'Positive: cocaine use within past 2-4 days. Benzoylecgonine detectable longer than parent cocaine. Cross-reactivity unlikely. Topical use during ENT procedures may cause positive.',
        method: 'CEDIA or EMIT homogeneous enzyme immunoassay targeting benzoylecgonine',
      },
      {
        name: 'Urine Drug Screen - Opiates',
        normalRange: 'Negative (<300 ng/mL cutoff for morphine)',
        clinicalSignificance: 'Screens for natural opiates including morphine, codeine, and heroin metabolite (6-MAM). Distinct from semi-synthetic/synthetic opioids.',
        interpretation: 'Positive: heroin use (6-MAM confirms), codeine metabolism to morphine, poppy seed ingestion. May NOT detect oxycodone, fentanyl, methadone, or buprenorphine without expanded panel.',
        method: 'CEDIA or EMIT homogeneous enzyme immunoassay targeting free morphine and glucuronide metabolites',
      },
      {
        name: 'Urine Drug Screen - Methadone',
        normalRange: 'Negative (<300 ng/mL cutoff)',
        clinicalSignificance: 'Synthetic opioid used in MAT (Medication-Assisted Treatment) for opioid use disorder. Monitoring compliance and detecting diversion.',
        interpretation: 'Positive confirms methadone use/compliance. Negative in a prescribed patient may indicate non-compliance or diversion. Does NOT cross-react with other opioids.',
        method: 'CEDIA or EMIT homogeneous enzyme immunoassay specific for methadone and EDDP (major metabolite)',
      },
      {
        name: 'Urine Drug Screen - PCP',
        normalRange: 'Negative (<25 ng/mL cutoff)',
        clinicalSignificance: 'Screening for phencyclidine (PCP), a dissociative anesthetic with hallucinogenic properties. Uncommon but associated with violent behavior.',
        interpretation: 'Positive: PCP use or occasionally dextromethorphan/ketamine cross-reactivity. Confirm with GC-MS. Clinical correlation with agitation, nystagmus, hypertension required.',
        method: 'CEDIA or EMIT homogeneous enzyme immunoassay targeting PCP',
      },
      {
        name: 'Expanded Urine Drug Screen (LC-MS/MS Confirmation)',
        normalRange: 'Negative (no drugs detected above established cutoffs)',
        clinicalSignificance: 'Definitive confirmatory method for all positive immunoassay screens. Essential for medico-legal, workplace testing, and complex polypharmacy cases.',
        interpretation: 'Confirms true positive, rules out false positive (cross-reactivity). Reports exact drug/metabolite and concentration. Required for legal defensibility.',
        method: 'Liquid chromatography-tandem mass spectrometry (LC-MS/MS) with multiple reaction monitoring (MRM)',
      },
      {
        name: 'Hair Drug Testing',
        normalRange: 'Negative (no drugs detected in hair shaft)',
        clinicalSignificance: 'Long-term retrospective drug use detection (up to 90 days depending on hair length). Used in employment screening, custody cases, and monitoring.',
        interpretation: 'Positive: chronic use over months. Cannot detect very recent use (1-2 week lag). Susceptible to cosmetic treatments (bleaching, dyeing). Segmental analysis can estimate timing.',
        method: 'LC-MS/MS after hair decontamination, digestion, and solid-phase extraction',
      },
      {
        name: 'Meconium Drug Testing',
        normalRange: 'Negative (no drugs detected)',
        clinicalSignificance: 'Detects in-utero drug exposure during 2nd and 3rd trimesters. Preferred matrix for neonatal drug screening.',
        interpretation: 'Positive: maternal drug use during pregnancy. Can detect heroin, cocaine, THC, amphetamines, and metabolites. Fentanyl analogs increasingly detected.',
        method: 'LC-MS/MS after meconium homogenization, enzymatic hydrolysis, and solid-phase extraction',
      },
      {
        name: 'Synthetic Cannabinoids Screen',
        normalRange: 'Negative',
        clinicalSignificance: 'Detects synthetic cannabinoid receptor agonists ("K2", "Spice"). Not detected by routine THC immunoassays. Associated with severe toxicity including seizures and kidney injury.',
        interpretation: 'Positive: use of designer cannabinoids. Clinically correlate with agitation, tachycardia, hypertension, and psychosis. New analogs constantly emerge challenging detection.',
        method: 'LC-MS/MS targeting common synthetic cannabinoid metabolites (JWH, UR-144, XLR-11, AB-PINACA, ADB-FUBINACA)',
      },
      {
        name: 'Bath Salts (Synthetic Cathinones) Screen',
        normalRange: 'Negative',
        clinicalSignificance: 'Detects synthetic cathinones (MDPV, methylone, mephedrone, alpha-PVP). Designer stimulants associated with severe agitation, hyperthermia, and excited delirium.',
        interpretation: 'Positive: use of bath salt compounds. Clinical: severe sympathomimetic toxidrome, paranoia, violent behavior, hyponatremia (MDMA-like). Confirm specific analog by MS.',
        method: 'LC-MS/MS targeting synthetic cathinone parent compounds and metabolites',
      },
      {
        name: 'Fentanyl Screen',
        normalRange: 'Negative (<1 ng/mL cutoff)',
        clinicalSignificance: 'Potent synthetic opioid 50-100x morphine potency. Leading cause of opioid overdose deaths. Routine opiate immunoassays do NOT detect fentanyl.',
        interpretation: 'Positive: fentanyl use (illicit or iatrogenic). Carfentanil (10,000x morphine) may cross-react. Very low concentrations can be lethal in opioid-naive individuals.',
        method: 'Specific fentanyl immunoassay or LC-MS/MS for fentanyl and norfentanyl (metabolite)',
      },
      {
        name: 'Alcohol Biomarkers (EtG, EtS, CDT)',
        normalRange: 'EtG <500 ng/mL, EtS <100 ng/mL, CDT <1.7%',
        clinicalSignificance: 'Combined biomarkers for alcohol use detection with extended detection windows. EtG/EtS in urine detects use up to 80h, CDT reflects chronic heavy consumption (2+ weeks).',
        interpretation: 'Elevated EtG/EtS: recent alcohol use. CDT elevated (>1.7%): chronic heavy intake (>60g ethanol/day for 2+ weeks). False positive EtG from hand sanitizer (rare at cutoff used).',
        method: 'LC-MS/MS for EtG/EtS; capillary electrophoresis or HPLC for CDT (% of transferrin isoforms)',
      },
    ]
  },
  {
    id: 'heavy-metals',
    title: 'Heavy Metals & Trace Elements',
    icon: 'hazard',
    color: 'from-purple-600 to-purple-400',
    description: 'Assessment of heavy metal exposure, toxicity, and nutritional trace element status. Essential for occupational medicine, environmental exposure, and malnutrition evaluation.',
    tests: [
      {
        name: 'Lead (Blood)',
        normalRange: '<5 mcg/dL (children), <10 mcg/dL (adults). Intervention: >3.5 mcg/dL children',
        clinicalSignificance: 'Neurotoxic heavy metal. Children most vulnerable: cognitive impairment at low levels. Occupational exposure in battery, construction, and smelting industries.',
        interpretation: 'Elevated: environmental exposure, pica (lead paint), occupational, retained bullet fragments. Chelation indicated: adult >70 mcg/dL symptomatic, child >45 mcg/dL.',
        method: 'Graphite furnace atomic absorption spectrometry (GFAAS) or inductively coupled plasma mass spectrometry (ICP-MS)',
      },
      {
        name: 'Lead (Capillary/Venous)',
        normalRange: '<3.5 mcg/dL (action level per CDC)',
        clinicalSignificance: 'Screening for lead exposure. Capillary (fingerstick) used for initial screen; venous required for confirmation.',
        interpretation: 'Capillary elevated: confirm with venous sample (contamination risk from surface lead). Venous elevated: environmental investigation, chelation therapy consideration, neurodevelopmental monitoring.',
        method: 'Anodic stripping voltammetry (ASV) for point-of-care; ICP-MS for confirmatory venous',
      },
      {
        name: 'Mercury (Blood)',
        normalRange: '<10 mcg/L (unexposed). Occupational: <15 mcg/L',
        clinicalSignificance: 'Organic mercury (methylmercury) from fish consumption; inorganic from dental amalgam and occupational exposure. Neurotoxic and nephrotoxic.',
        interpretation: 'Elevated: high fish consumption (tuna, swordfish, shark), occupational (dental, mining, chloralkali), or accidental exposure. Chronic: neuropathy, tremor, cognitive decline, acrodynia (children).',
        method: 'Cold vapor atomic absorption spectrometry (CV-AAS) or ICP-MS',
      },
      {
        name: 'Mercury (Urine - 24h)',
        normalRange: '<20 mcg/L or <10 mcg/g creatinine',
        clinicalSignificance: 'Reflects inorganic mercury exposure and body burden. Used for occupational monitoring and evaluating chronic exposure.',
        interpretation: 'Elevated: inorganic mercury exposure (dental amalgam filling, occupational). Elemental mercury vapor also excreted in urine. Does NOT reflect methylmercury (fish-derived) body burden.',
        method: 'Cold vapor atomic absorption spectrometry (CV-AAS) on acid-digested 24-hour urine collection',
      },
      {
        name: 'Arsenic (Urine - 24h)',
        normalRange: '<50 mcg/L (total). Organic (fish): <100 mcg/L',
        clinicalSignificance: 'Total arsenic includes toxic inorganic and non-toxic organic forms (arsenobetaine from seafood). Speciation needed to differentiate.',
        interpretation: 'Elevated inorganic: drinking water contamination, occupational (wood preservation, semiconductors), chronic exposure. Chronic effects: skin keratosis, hyperpigmentation, peripheral neuropathy, cancers.',
        method: 'Hydride generation atomic absorption spectrometry (HG-AAS) or ICP-MS with speciation (HPLC-ICP-MS)',
      },
      {
        name: 'Cadmium (Blood/Urine)',
        normalRange: 'Blood: <5 mcg/L, Urine: <3 mcg/g creatinine',
        clinicalSignificance: 'Nephrotoxic and carcinogenic heavy metal. Half-life >10 years. Smoking is major non-occupational source. Occupational: battery, pigment, welding.',
        interpretation: 'Elevated: chronic smoking, occupational exposure (battery manufacturing, metal plating, welding). Chronic: proximal renal tubular damage (beta-2-microglobulinuria), osteomalacia (Itai-Itai disease).',
        method: 'Graphite furnace atomic absorption spectrometry (GFAAS) or ICP-MS',
      },
      {
        name: 'Chromium (Blood/Urine)',
        normalRange: 'Blood: <1.0 mcg/L, Urine: <10 mcg/g creatinine',
        clinicalSignificance: 'Essential trace element (Cr3+) vs toxic hexavalent form (Cr6+). Occupational lung carcinogen. Used in metal alloys and leather tanning.',
        interpretation: 'Elevated: occupational exposure (welding, chrome plating, leather tanning), metal-on-metal hip implants. Cr6+ is pulmonary carcinogen and irritant; Cr3+ is relatively benign.',
        method: 'Graphite furnace atomic absorption spectrometry (GFAAS) or ICP-MS',
      },
      {
        name: 'Nickel (Serum/Urine)',
        normalRange: 'Serum: <1.0 mcg/L, Urine: <10 mcg/L',
        clinicalSignificance: 'Transition metal used in alloys. Major sensitizer causing contact dermatitis. Occupational exposure in metal refining, plating, and battery manufacturing.',
        interpretation: 'Elevated: occupational exposure (smelting, electroplating, nickel-cadmium batteries), metal-on-metal prostheses, nickel allergy with systemic contact dermatitis. Carcinogen (nasal, lung).',
        method: 'Graphite furnace atomic absorption spectrometry (GFAAS) or ICP-MS',
      },
      {
        name: 'Manganese (Blood)',
        normalRange: '4-15 mcg/L',
        clinicalSignificance: 'Essential trace element, cofactor for enzymes. Neurotoxic at high levels. Occupational exposure in welding and mining.',
        interpretation: 'Elevated: occupational (welding, mining, steel production), parenteral nutrition, liver disease (impaired biliary excretion). Chronic: manganism (Parkinson-like syndrome with dystonia, psychiatric changes).',
        method: 'Graphite furnace atomic absorption spectrometry (GFAAS) or ICP-MS',
      },
      {
        name: 'Copper (Serum)',
        normalRange: '70-140 mcg/dL (varies by age and sex)',
        clinicalSignificance: 'Essential trace element for iron metabolism, neurotransmitter synthesis, and antioxidant defense. Ceruloplasmin carrier protein.',
        interpretation: 'Decreased: Wilson disease (low ceruloplasmin, high free copper), Menkes disease, malnutrition, malabsorption. Elevated: inflammation (acute phase), OCP use, pregnancy, cholestasis, copper toxicity.',
        method: 'Atomic absorption spectrometry (AAS) or colorimetric method using bathocuproine reagent',
      },
      {
        name: 'Zinc (Serum)',
        normalRange: '70-120 mcg/dL',
        clinicalSignificance: 'Essential trace element, cofactor for >300 enzymes. Critical for immune function, wound healing, growth, and DNA synthesis.',
        interpretation: 'Decreased: malnutrition, malabsorption, acrodermatitis enteropathica, chronic disease, alcoholism, sickle cell disease. Severe deficiency: dermatitis, diarrhea, growth retardation, immune dysfunction.',
        method: 'Atomic absorption spectrometry (AAS) or colorimetric method with nitro-PAPS reagent',
      },
      {
        name: 'Selenium (Serum)',
        normalRange: '70-150 mcg/L',
        clinicalSignificance: 'Essential trace element, component of selenoproteins (glutathione peroxidase, iodothyronine deiodinases). Antioxidant defense and thyroid function.',
        interpretation: 'Decreased: Keshan disease (cardiomyopathy), Kashin-Beck (osteoarthropathy), parenteral nutrition, malabsorption, HIV, critical illness. Toxic (selenosis): garlic breath, hair loss, nail brittleness.',
        method: 'Hydride generation atomic absorption spectrometry (HG-AAS) or ICP-MS',
      },
      {
        name: 'Thallium (Urine)',
        normalRange: '<5 mcg/L (unexposed)',
        clinicalSignificance: 'Highly toxic heavy metal. Used in rat poisons and former radioactive imaging. Accidental and intentional poisoning occurs.',
        interpretation: 'Elevated: acute or chronic poisoning (contaminated food, criminal poisoning). Classic triad: painful ascending neuropathy, alopecia (2-4 weeks after exposure), GI symptoms. Prussian blue is antidote.',
        method: 'Graphite furnace atomic absorption spectrometry (GFAAS) or ICP-MS',
      },
      {
        name: 'Aluminum (Serum)',
        normalRange: '<10 mcg/L (normal), <60 mcg/L acceptable in dialysis patients',
        clinicalSignificance: 'Neurotoxic metal. Accumulation in renal failure causes dialysis encephalopathy, osteomalacia, and microcytic anemia.',
        interpretation: 'Elevated: chronic renal failure (impaired excretion), aluminum-containing phosphate binders and dialysate water contamination. Deferoxamine chelation may be needed. Associated with Alzheimer disease (controversial).',
        method: 'Graphite furnace atomic absorption spectrometry (GFAAS) on serum with strict contamination control',
      },
      {
        name: 'Heavy Metal Screen (Panel)',
        normalRange: 'All individual metals within reference ranges',
        clinicalSignificance: 'Comprehensive panel including lead, mercury, cadmium, arsenic, and often chromium, nickel, and thallium. Used for environmental exposure assessment and unexplained neuro/renal symptoms.',
        interpretation: 'Individual analytes interpreted per their specific reference ranges. Pattern of elevation suggests source (occupational, environmental, dietary). Speciation recommended for arsenic.',
        method: 'Inductively coupled plasma mass spectrometry (ICP-MS) for multi-element analysis in blood or urine',
      },
    ]
  },
  {
    id: 'alcohol',
    title: 'Alcohol & Substance Abuse Biomarkers',
    icon: 'local_bar',
    color: 'from-orange-600 to-orange-400',
    description: 'Comprehensive panel for acute and chronic alcohol use detection, toxic alcohol poisoning, and common medication overdoses in the emergency setting.',
    tests: [
      {
        name: 'Blood Alcohol Concentration (BAC)',
        normalRange: '<10 mg/dL (no measurable alcohol). Legal limit: 80 mg/dL (0.08% w/v)',
        clinicalSignificance: 'Direct measure of ethanol concentration in whole blood or plasma. Used for legal, medical, and occupational purposes.',
        interpretation: '20-50 mg/dL: mild euphoria, impaired judgment. 80-150 mg/dL: legal intoxication, ataxia, dysarthria. >300 mg/dL: severe intoxication, coma, respiratory depression. >500 mg/dL: potentially lethal.',
        method: 'Headspace gas chromatography with flame ionization detection (HS-GC-FID)',
      },
      {
        name: 'Urine Ethanol',
        normalRange: '<10 mg/dL',
        clinicalSignificance: 'Detects ethanol in urine. Detection window 6-12 hours after consumption. Less invasive alternative when venipuncture difficult.',
        interpretation: 'Positive: recent alcohol ingestion within past 12h. In vitro production possible in diabetic patients with glycosuria and yeast colonization (false positive). Correlation with BAC preferred.',
        method: 'Headspace gas chromatography with flame ionization detection (HS-GC-FID) or alcohol oxidase enzymatic assay',
      },
      {
        name: 'Carbohydrate-Deficient Transferrin (%CDT)',
        normalRange: '<1.7% of total transferrin',
        clinicalSignificance: 'Transferrin isoform lacking sialic acid residues. Most specific biomarker for chronic heavy alcohol consumption (>60g/day for 2+ weeks). Half-life ~2 weeks.',
        interpretation: 'Elevated (>1.7%): chronic heavy alcohol use, primary biliary cholangitis (false positive), rare genetic variants. Normalizes after 2-3 weeks abstinence. Used for driver license reinstatement and transplant evaluation.',
        method: 'Capillary electrophoresis or HPLC separating transferrin sialo-isoforms with CDT immunoassay',
      },
      {
        name: 'Ethyl Glucuronide (EtG - Urine)',
        normalRange: '<500 ng/mL (standard cutoff), <100 ng/mL (HS cutoff)',
        clinicalSignificance: 'Minor ethanol metabolite conjugated with glucuronic acid. Detection window up to 80 hours. Highly sensitive even for low-level alcohol exposure.',
        interpretation: 'Positive: recent ethanol ingestion within 1-4 days. 500 ng/mL cutoff reduces false positives from environmental exposure (hand sanitizer, mouthwash). Used in transplant monitoring and abstinence programs.',
        method: 'LC-MS/MS or LC-MS-MS with deuterated internal standard after solid-phase extraction',
      },
      {
        name: 'Ethyl Sulfate (EtS - Urine)',
        normalRange: '<100 ng/mL',
        clinicalSignificance: 'Minor ethanol metabolite via sulfation. Longer detection window than ethanol but shorter than EtG. Often measured concurrently with EtG for confirmation.',
        interpretation: 'Positive indicates recent alcohol consumption. Used as confirmatory marker alongside EtG; both should be positive for certainty. False positives less common than EtG.',
        method: 'LC-MS/MS with deuterated internal standard after solid-phase extraction',
      },
      {
        name: 'Phosphatidylethanol (PEth - Blood)',
        normalRange: '<20 ng/mL (abstinence), 20-200 ng/mL (moderate), >200 ng/mL (heavy)',
        clinicalSignificance: 'Abnormal phospholipid formed by phospholipase D in presence of ethanol in RBC membranes. Detection window 2-4 weeks. Most sensitive and specific blood biomarker.',
        interpretation: '>20 ng/mL: any alcohol consumption within past 2-4 weeks. >200 ng/mL: chronic heavy consumption. Not affected by acute ingestion timing. Preferred for zero-tolerance abstinence monitoring.',
        method: 'LC-MS/MS quantifying PEth 16:0/18:1 and 16:0/18:2 homologs from whole blood',
      },
      {
        name: 'Methanol',
        normalRange: '<6 mg/dL (endogenous). Toxic: >20 mg/dL',
        clinicalSignificance: 'Toxic alcohol found in windshield washer fluid, solvents, and contaminated beverages. Metabolized by ADH to formaldehyde then formic acid (metabolic acidosis, ocular toxicity).',
        interpretation: 'Elevated: methanol ingestion (accidental or intentional). Toxic effects: visual disturbances (retinal toxicity), severe metabolic acidosis, anion gap, osmolal gap. Treatment: fomepizole or ethanol, hemodialysis if severe.',
        method: 'Headspace gas chromatography with flame ionization detection (HS-GC-FID)',
      },
      {
        name: 'Ethylene Glycol',
        normalRange: '<5 mg/dL (endogenous). Toxic: >20 mg/dL',
        clinicalSignificance: 'Found in antifreeze, coolants, and brake fluid. Metabolized by ADH to glycolic acid then oxalic acid causing metabolic acidosis and calcium oxalate crystals.',
        interpretation: 'Elevated: ethylene glycol ingestion. Triad: osmolal gap -> anion gap metabolic acidosis -> acute kidney injury (calcium oxalate crystals in urine). Fluorescein under Wood lamp (antifreeze additive).',
        method: 'Headspace gas chromatography with flame ionization detection (HS-GC-FID)',
      },
      {
        name: 'Isopropanol',
        normalRange: '<1 mg/dL. Toxic: >20 mg/dL',
        clinicalSignificance: 'Common ingredient in rubbing alcohol, hand sanitizers, and cleaning products. Metabolized by ADH to acetone causing ketosis without acidosis.',
        interpretation: 'Elevated: ingestion (accidental, intentional) or dermal absorption. Distinct from methanol/ethylene glycol: ketosis without significant metabolic acidosis (acetone is neutral). CNS depression, gastritis, hemorrhagic cystitis.',
        method: 'Headspace gas chromatography with flame ionization detection (HS-GC-FID)',
      },
      {
        name: 'Acetone',
        normalRange: '<2 mg/dL',
        clinicalSignificance: 'Ketone body produced in fasting, DKA, and isopropanol metabolism. Also measured as part of volatile screen.',
        interpretation: 'Elevated: diabetic ketoacidosis, starvation, alcoholic ketoacidosis, isopropanol ingestion. Unlike other ketones (acetoacetate, beta-hydroxybutyrate), acetone does NOT cause metabolic acidosis.',
        method: 'Headspace gas chromatography with flame ionization detection (HS-GC-FID)',
      },
      {
        name: 'Osmolar Gap Calculation',
        normalRange: '<10 mOsm/kg',
        clinicalSignificance: 'Difference between measured osmolality and calculated osmolality. Screening tool for toxic alcohol ingestion (methanol, ethylene glycol, isopropanol, ethanol).',
        interpretation: 'Elevated gap: presence of unmeasured osmoles (methanol, ethylene glycol, isopropanol, ethanol, mannitol, propylene glycol). Absence of gap does NOT rule out late presentation (after metabolism to acids).',
        method: 'Measured osmolality (freezing point depression) minus calculated: 2(Na) + glucose/18 + BUN/2.8 + ethanol/4.6',
      },
      {
        name: 'Anion Gap Metabolic Acidosis Workup',
        normalRange: 'Anion gap: 8-12 mEq/L',
        clinicalSignificance: 'AG = Na - (Cl + HCO3). High anion gap metabolic acidosis (HAGMA) differential includes MUDPILES: methanol, uremia, DKA, propylene glycol, iron/isoniazid, lactic acidosis, ethylene glycol, salicylates.',
        interpretation: 'Elevated gap: evaluate for toxic alcohol, DKA, lactic acidosis, renal failure, salicylate overdose. Delta-delta ratio helps identify mixed acid-base disorders. Osmolal gap should be calculated concurrently.',
        method: 'Calculated from basic metabolic panel electrolytes; osmolar gap, ketones, lactate, and toxic alcohol levels used to identify cause',
      },
      {
        name: 'Salicylate Level',
        normalRange: 'Therapeutic: 15-30 mg/dL (anti-inflammatory). Toxic: >40 mg/dL',
        clinicalSignificance: 'Aspirin overdose causes mixed acid-base disorder (respiratory alkalosis + high anion gap metabolic acidosis). Enteric-coated tablets delay peak levels.',
        interpretation: 'Mild (>40): tinnitus, hyperventilation, nausea. Moderate (>70): fever, agitation, respiratory alkalosis + metabolic acidosis. Severe (>100): coma, seizures, pulmonary edema, cerebral edema. Done nomogram for acute single ingestion.',
        method: 'Colorimetric assay using Trinder reagent (ferric chloride) or enzymatic assay on automated chemistry analyzer',
      },
      {
        name: 'Acetaminophen (Paracetamol) Level',
        normalRange: 'Therapeutic: 10-30 mcg/mL. Toxic: >150 mcg/mL at 4h',
        clinicalSignificance: 'Most common overdose agent in the US. Causes dose-dependent hepatotoxicity via NAPQI metabolite when glutathione depleted. Hepatic necrosis occurs 2-4 days post-ingestion.',
        interpretation: 'Rumack-Matthew nomogram applied to levels 4-24h post-ingestion. Level >150 mcg/mL at 4h: high risk, start N-acetylcysteine. Extended-release formulations require follow-up levels. LFTs may be normal initially.',
        method: 'Enzymatic assay using aryl acylamidase hydrolysis or colorimetric method on automated chemistry analyzer',
      },
      {
        name: 'Toxic Alcohol Screen (Volatiles Panel)',
        normalRange: 'All negative (<assay specific cutoffs)',
        clinicalSignificance: 'Comprehensive panel including methanol, ethylene glycol, isopropanol, acetone, and ethanol. Essential for unexplained metabolic acidosis and suspected toxic alcohol ingestion.',
        interpretation: 'Positive for specific alcohol(s) guides treatment. Watch for co-ingestion (multiple alcohols). Consider osmolal and anion gaps. Negative does not rule out ingestion if metabolized (late presentation).',
        method: 'Headspace gas chromatography with flame ionization detection (HS-GC-FID) on a polar column for volatile separation',
      },
    ]
  },
  {
    id: 'environmental',
    title: 'Environmental & Occupational Toxicology',
    icon: 'air',
    color: 'from-green-600 to-green-400',
    description: 'Evaluation of exposure to environmental toxins, occupational hazards, industrial chemicals, and chemical warfare agents affecting public health.',
    tests: [
      {
        name: 'Carbon Monoxide (COHb - Carboxyhemoglobin)',
        normalRange: 'Non-smoker: <2%, Smoker: <9%, Symptomatic toxicity: >15%',
        clinicalSignificance: 'CO binds hemoglobin 250x stronger than O2, reducing oxygen-carrying capacity. Leading cause of poisoning death in the US. Sources: fires, faulty heaters, car exhaust, generators.',
        interpretation: '10-20%: headache, confusion. 20-40%: disorientation, syncope, chest pain. >40%: seizure, coma, potentially fatal. >60%: rapidly fatal. Delayed neuropsychiatric sequelae (DNS) weeks later. Pulse oximetry falsely normal.',
        method: 'CO-oximetry (multi-wavelength spectrophotometry) on arterial or venous blood gas sample',
      },
      {
        name: 'Methemoglobin (MetHb)',
        normalRange: '<1.5% of total hemoglobin',
        clinicalSignificance: 'Oxidized hemoglobin unable to bind oxygen. Acquired MetHb from oxidizing drugs (dapsone, nitrites, benzocaine, antimalarials). Congenital: cytochrome b5 reductase deficiency.',
        interpretation: '10-20%: cyanosis (chocolate-brown blood), asymptomatic. 20-40%: dyspnea, headache, fatigue. >50%: coma, seizures, arrhythmias. >70%: lethal. Methylene blue is treatment (contraindicated in G6PD deficiency).',
        method: 'CO-oximetry (multi-wavelength spectrophotometry) on arterial or venous blood gas sample',
      },
      {
        name: 'Cholinesterase (Plasma/Red Cell - Organophosphate Exposure)',
        normalRange: 'Plasma (pseudocholinesterase): 8-18 U/mL. RBC (acetylcholinesterase): 10-15 U/mL',
        clinicalSignificance: 'Biomarker of organophosphate and carbamate insecticide exposure. RBC cholinesterase better reflects synaptic enzyme activity; plasma is more sensitive to recent exposure.',
        interpretation: 'Decreased >30% from baseline: significant exposure. >50% inhibition: requires treatment (atropine + pralidoxime). RBC 70-100% inhibition: severe poisoning. Recovery of RBC enzyme: 1-3 months (irreversible OP binding).',
        method: 'Ellman colorimetric kinetic method using acetylthiocholine substrate and DTNB (Ellman reagent) chromophore',
      },
      {
        name: 'Cyanide (Blood)',
        normalRange: '<0.5 mcg/mL (non-smokers), <1.0 mcg/mL (smokers). Lethal: >3.0 mcg/mL',
        clinicalSignificance: 'Mitochondrial poison inhibiting cytochrome c oxidase (Complex IV), blocking aerobic metabolism. Sources: smoke inhalation (fires), industrial exposure, nitroprusside, ingestion (bitter almonds, cassava).',
        interpretation: 'Mild: headache, confusion, tachypnea. Severe: rapidly progressive coma, seizures, severe lactic acidosis, bright red venous blood. Smoke inhalation victims: suspect if severe acidosis and altered mental status.',
        method: 'Microdiffusion colorimetric method or GC-MS with headspace analysis',
      },
      {
        name: 'Hydrogen Sulfide',
        normalRange: 'Not normally detectable in blood',
        clinicalSignificance: 'Highly toxic gas (rotten egg odor). Inhibits cytochrome c oxidase. Rapidly fatal at high concentrations. Sources: sewage, oil fields, manure pits, pulp mills, hot springs.',
        interpretation: 'Exposure: sudden collapse ("knockdown"), CNS depression, pulmonary edema, severe lactic acidosis. Olfactory fatigue at high concentrations removes warning odor. Treatment: nitrites (induces MetHb that binds H2S).',
        method: 'Spectrophotometric or HPLC with fluorescence detection of sulfide in blood (limited clinical availability)',
      },
      {
        name: 'Ethylene Glycol (repeat)',
        normalRange: '<5 mg/dL. Toxic: >20 mg/dL',
        clinicalSignificance: 'Found in antifreeze, de-icers. ADH metabolism produces glycolic acid (anion gap) and oxalic acid (calcium oxalate crystals in urine, AKI).',
        interpretation: 'Triphasic: (1) CNS depression/osmolal gap, (2) anion gap acidosis/calcium oxalate crystals, (3) acute kidney injury. Fluorescein from antifreeze may cause glowing urine. Fomepizole is preferred ADH inhibitor.',
        method: 'Headspace gas chromatography with flame ionization detection (HS-GC-FID) or enzymatic assay (Glycerol Dehydrogenase)',
      },
      {
        name: 'Nitrites/Nitrates (Methemoglobin Inducers)',
        normalRange: 'Nitrite: <0.1 mg/dL. MetHb <1.5% (assessed via CO-oximetry)',
        clinicalSignificance: 'Oxidizing agents that convert hemoglobin Fe2+ to Fe3+ (methemoglobin). Sources: nitrites/nitrates food preservatives, amyl nitrite (poppers), well water contamination, burns (NO from smoke).',
        interpretation: 'Elevated MetHb with known nitrite/nitrate exposure: treat with methylene blue (1-2 mg/kg IV). Nitrites also used therapeutically for cyanide poisoning (induce 15-20% MetHb to bind cyanide).',
        method: 'CO-oximetry for MetHb; nitrites/nitrates by colorimetric Griess reaction in plasma',
      },
      {
        name: 'Pesticide Screen (Organochlorines, Organophosphates)',
        normalRange: 'Negative (no detectable levels)',
        clinicalSignificance: 'Comprehensive screening for chlorinated hydrocarbons (DDT, lindane, chlordane) and organophosphates (parathion, malathion, chlorpyrifos). OP inhibits cholinesterase as primary mechanism.',
        interpretation: 'Organochlorines (DDT): neurotoxicity, tremor, seizures, bioaccumulate in fat. Organophosphates: cholinergic crisis (SLUDGE syndrome: salivation, lacrimation, urination, defecation, GI upset, emesis).',
        method: 'GC-MS or GC-ECD (electron capture detector) for organochlorines; GC-NPD for organophosphates in serum or adipose',
      },
      {
        name: 'Polychlorinated Biphenyls (PCBs)',
        normalRange: '<5 mcg/L (serum). Background level varies by age and region',
        clinicalSignificance: 'Persistent organic pollutants (POPs) used in electrical transformers, plasticizers, and coolants. Bioaccumulate in adipose tissue. Banned in 1979 but environmentally persistent.',
        interpretation: 'Elevated: occupational exposure (decommissioning, waste management), consumption of contaminated fish. Chronic: hepatotoxicity, neurodevelopmental effects, endocrine disruption, dermal effects (chloracne).',
        method: 'Gas chromatography with electron capture detection (GC-ECD) or GC-MS after lipid extraction and cleanup',
      },
      {
        name: 'Dioxins/Furans Panel',
        normalRange: 'Varies by congener. TCDD: <5 pg/g lipid',
        clinicalSignificance: 'Highly toxic POPs from combustion, herbicide manufacturing (Agent Orange), and industrial processes. TCDD most toxic dioxin, classified as Group 1 carcinogen.',
        interpretation: 'Elevated: occupational exposure (chemical manufacturing, incineration), contaminated food (animal fat). Chronic: chloracne, hepatotoxicity, immunotoxicity, endocrine disruption, increased cancer risk. Half-life: 7-11 years.',
        method: 'High-resolution gas chromatography-mass spectrometry (HRGC-HRMS) with toxic equivalency factor (TEF) calculations',
      },
      {
        name: 'Volatile Organic Compounds (VOCs) Panel',
        normalRange: 'Individual VOCs below detection limits',
        clinicalSignificance: 'Screens for benzene, toluene, ethylbenzene, xylene (BTEX), styrene, chloroform, and other industrial solvents. Neurotoxic and carcinogenic potential.',
        interpretation: 'Elevated BTEX: occupational (paint, petroleum, chemical industry), gasoline exposure, glues. Toluene: encephalopathy, peripheral neuropathy, renal tubular acidosis. Benzene: leukemogenic (AML, MDS).',
        method: 'Headspace GC-MS on whole blood or urine with mass spectral library identification of each compound',
      },
    ]
  },
];

const ToxicologyPage = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface via-surface-container to-surface-dim pt-8 pb-12">
      {/* Header Section */}
      <section className="px-4 mb-12 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-display text-display text-primary mb-2">Toxicology & TDM</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Comprehensive toxicology and therapeutic drug monitoring reference covering drug screening, TDM, heavy metals, alcohol biomarkers, and environmental/occupational toxicology with full clinical interpretation.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-surface-container p-4 rounded-lg border border-outline-variant text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Test Categories</p>
            <p className="font-headline-md text-headline-md text-primary">{subcategories.length}</p>
          </div>
          <div className="bg-surface-container p-4 rounded-lg border border-outline-variant text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Total Tests</p>
            <p className="font-headline-md text-headline-md text-primary">{subcategories.reduce((a, c) => a + c.tests.length, 0)}+</p>
          </div>
          <div className="bg-surface-container p-4 rounded-lg border border-outline-variant text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Reference Ranges</p>
            <p className="font-headline-md text-headline-md text-primary">{subcategories.reduce((a, c) => a + c.tests.length, 0)}+</p>
          </div>
          <div className="bg-surface-container p-4 rounded-lg border border-outline-variant text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Sub-specialties</p>
            <p className="font-headline-md text-headline-md text-primary">5</p>
          </div>
        </div>
      </section>

      {/* Subcategory Accordion */}
      <section className="px-4 max-w-7xl mx-auto">
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Toxicology Test Categories</h2>
        <div className="space-y-4">
          {subcategories.map((cat) => {
            const isOpen = expanded === cat.id;
            return (
              <div
                key={cat.id}
                className="bg-surface-container border border-outline-variant rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggle(cat.id)}
                  className="w-full flex items-center justify-between p-6 hover:bg-surface-variant/30 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="material-symbols-outlined text-white">{cat.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-headline-md text-headline-md text-primary">{cat.title}</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{cat.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-on-surface-variant font-label-caps text-label-caps">{cat.tests.length} tests</span>
                    <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </div>
                </button>

                {/* Tests Table */}
                {isOpen && (
                  <div className="border-t border-outline-variant overflow-x-auto">
                    <table className="w-full clinical-table">
                      <thead>
                        <tr>
                          <th className="w-1/5">Test Name</th>
                          <th className="w-1/5">Normal Range</th>
                          <th className="w-1/5">Clinical Significance</th>
                          <th className="w-1/5">Interpretation</th>
                          <th className="w-1/5">Method / Procedure</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cat.tests.map((test, idx) => (
                          <tr key={idx} className="hover:bg-surface-variant/20 transition-colors">
                            <td className="font-label-md text-label-md text-on-surface font-semibold"><Link to={`/test/${pageId}/${slugify(test.name)}`} className="hover:text-secondary transition-colors">{test.name}</Link></td>
                            <td className="font-body-sm text-body-sm text-on-surface-variant">{test.normalRange}</td>
                            <td className="font-body-sm text-body-sm text-on-surface-variant">{test.clinicalSignificance}</td>
                            <td className="font-body-sm text-body-sm text-on-surface-variant">{test.interpretation}</td>
                            <td className="font-body-sm text-body-sm text-on-surface-variant">{test.method}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Info Section */}
      <section className="px-4 mt-16 max-w-7xl mx-auto">
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Toxicology Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-error-container/10 border border-error/40 rounded-xl p-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-error text-2xl flex-shrink-0">warning</span>
              <div>
                <h3 className="font-headline-sm text-headline-md text-error mb-2">Critical Values</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Lithium &gt;2.0 mEq/L, Digoxin &gt;2.0 ng/mL, Salicylate &gt;40 mg/dL, Acetaminophen &gt;150 mcg/mL at 4h, COHb &gt;15%, MetHb &gt;20%, Methanol/Ethylene Glycol &gt;20 mg/dL are critical values requiring immediate clinical intervention. Always confirm with clinical presentation and repeat levels as appropriate.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-secondary-container/10 border border-secondary/40 rounded-xl p-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl flex-shrink-0">info</span>
              <div>
                <h3 className="font-headline-sm text-headline-md text-secondary mb-2">Pre-analytical Considerations</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Proper collection tube (gray top for ethanol, royal blue for trace metals), correct timing (trough for TDM, peak/trough for aminoglycosides), and rapid transport to lab are critical. Hemolysis, improper storage, and delayed processing affect results. Heavy metal testing requires trace element-free collection tubes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="px-4 mt-16 max-w-7xl mx-auto border-t border-outline-variant pt-8">
        <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
          This toxicology & TDM reference is designed for healthcare professionals. Reference ranges may vary between laboratories. Always correlate laboratory findings with clinical presentation and consult a medical toxicologist for complex poisonings.
        </p>
      </section>
    </div>
  );
};

export { subcategories };
export default ToxicologyPage;
