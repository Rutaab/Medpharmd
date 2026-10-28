export const diseases = [
  {
    id: 'myocardial-infarction',
    name: 'Myocardial Infarction (Acute Coronary Syndrome)',
    category: 'Cardiology',
    description: 'Acute myocardial ischemia resulting from complete or near-complete occlusion of a coronary artery, typically due to atherosclerotic plaque rupture with superimposed thrombosis.',
    icon: 'favorite_border',
    severity: 'Emergency',
    symptoms: ['Chest pain (crushing, radiating to left arm/jaw)', 'Shortness of breath', 'Diaphoresis', 'Nausea/vomiting', 'Anxiety', 'Lightheadedness'],
    diagnosticMarkers: ['Troponin I/T (elevated)', 'ECG (ST elevation/depression)', 'CK-MB (elevated)'],
    treatmentProtocols: [
      { step: 1, action: 'Aspirin 300 mg chewed PO stat', drug: 'Aspirin', drugId: 'aspirin', dose: '300 mg', route: 'PO', note: 'Chewed or dissolved for rapid absorption' },
      { step: 2, action: 'Clopidogrel 300 mg PO stat', drug: 'Clopidogrel', drugId: 'clopidogrel', dose: '300 mg', route: 'PO', note: 'Loading dose' },
      { step: 3, action: 'Nitroglycerin 0.4 mg SL q5min up to 3 doses', drug: 'Nitroglycerin', drugId: 'nitroglycerin', dose: '0.4 mg', route: 'SL', note: 'If pain persists' },
      { step: 4, action: 'Morphine 5-10 mg IV for pain', drug: 'Morphine', drugId: 'morphine', dose: '5-10 mg', route: 'IV', note: 'SOS for severe pain' },
      { step: 5, action: 'Primary PCI within 90 min, or Streptokinase 1.5 million units IV over 90 min', drug: 'Streptokinase', drugId: 'streptokinase', dose: '1.5 million units', route: 'IV', note: 'If door-to-balloon time > 90 min, for STEMI only' }
    ],
    maintenanceTherapy: [
      { drug: 'Aspirin', drugId: 'aspirin', dose: '75-100 mg', frequency: 'OD', duration: 'Lifelong' },
      { drug: 'Clopidogrel', drugId: 'clopidogrel', dose: '75 mg', frequency: 'OD', duration: '12 months' },
      { drug: 'Atorvastatin', drugId: 'atorvastatin', dose: '40-80 mg', frequency: 'HS', duration: 'Lifelong' },
      { drug: 'Bisoprolol', drugId: 'bisoprolol', dose: '2.5-10 mg', frequency: 'OD', duration: 'Lifelong' },
      { drug: 'Lisinopril', drugId: 'lisinopril', dose: '5-20 mg', frequency: 'OD', duration: 'Lifelong' }
    ],
    relevantDrugs: ['aspirin', 'clopidogrel', 'nitroglycerin', 'morphine', 'streptokinase', 'atorvastatin', 'bisoprolol', 'lisinopril']
  },
  {
    id: 'asthma-exacerbation',
    name: 'Asthma Exacerbation (Acute)',
    category: 'Pulmonology',
    description: 'Acute worsening of asthma symptoms including dyspnea, cough, wheezing, and chest tightness, with progressive decrease in lung function.',
    icon: 'air',
    severity: 'Acute',
    symptoms: ['Wheezing', 'Chest tightness', 'Shortness of breath', 'Cough', 'Tachypnea', 'Use of accessory muscles'],
    diagnosticMarkers: ['Peak expiratory flow (PEF) < 80% predicted', 'SpO2 < 92%', 'Chest X-ray (rule out pneumonia)'],
    treatmentProtocols: [
      { step: 1, action: 'Salbutamol 5 mg nebulized stat', drug: 'Salbutamol', drugId: 'salbutamol', dose: '5 mg', route: 'Nebulized', note: 'Step 1: O2 administration + nebulization' },
      { step: 2, action: 'Hydrocortisone 1-2 mg/kg IV stat', drug: 'Hydrocortisone', drugId: 'hydrocortisone', dose: '1-2 mg/kg', route: 'IV', note: 'Step 2: Systemic steroids' },
      { step: 3, action: 'Salbutamol 5 mg + Ipratropium 0.5 mg nebulized q15min', drug: 'Salbutamol + Ipratropium', dose: '5 mg + 0.5 mg', route: 'Nebulized', note: 'Step 3: Add ipratropium if no improvement' },
      { step: 4, action: 'Magnesium Sulfate 2 g slow IV over 20 min', drug: 'Magnesium Sulfate', dose: '2 g', route: 'IV', note: 'Step 4: If severe and not improving' }
    ],
    maintenanceTherapy: [
      { drug: 'Prednisolone', dose: '40-50 mg', frequency: 'OD', duration: '5 days (taper)' },
      { drug: 'Salbutamol Inhaler', dose: '100-200 mcg', frequency: 'PRN', duration: 'As needed' },
      { drug: 'Fluticasone Inhaler', dose: '50-250 mcg', frequency: 'BD', duration: 'Long-term' }
    ],
    relevantDrugs: ['salbutamol', 'ipratropium', 'hydrocortisone', 'prednisolone', 'fluticasone']
  },
  {
    id: 'status-epilepticus',
    name: 'Status Epilepticus',
    category: 'Neurology',
    description: 'A medical emergency characterized by a seizure lasting more than 5 minutes or multiple seizures without return to baseline consciousness between episodes.',
    icon: 'bolt',
    severity: 'Emergency',
    symptoms: ['Prolonged seizure activity', 'Loss of consciousness', 'Muscle rigidity', 'Jerking movements', 'Post-ictal confusion'],
    diagnosticMarkers: ['EEG (epileptiform activity)', 'Blood glucose (rule out hypoglycemia)', 'Electrolytes', 'CT brain (rule out structural cause)'],
    treatmentProtocols: [
      { step: 1, action: 'Lorazepam 4 mg slow IV at 2 mg/min', drug: 'Lorazepam', drugId: 'lorazepam', dose: '4 mg', route: 'IV', note: 'Step 1: Benzodiazepine first-line' },
      { step: 2, action: 'Midazolam 5 mg IV', drug: 'Midazolam', drugId: 'midazolam', dose: '5 mg', route: 'IV', note: 'Alternative to lorazepam' },
      { step: 3, action: 'Phenytoin 10-20 mg/kg IV loading, then 100 mg PO TDS', drug: 'Phenytoin', drugId: 'phenytoin', dose: '10-20 mg/kg', route: 'IV', note: 'Step 2: If two doses of benzodiazepine fail' },
      { step: 4, action: 'Phenobarbital 15-20 mg/kg IV loading', drug: 'Phenobarbital', drugId: 'phenobarbital', dose: '15-20 mg/kg', route: 'IV', note: 'Step 3: If seizures persist, refer to ICU' }
    ],
    maintenanceTherapy: [
      { drug: 'Phenytoin', drugId: 'phenytoin', dose: '300-400 mg', frequency: 'OD divided', duration: 'Long-term' },
      { drug: 'Levetiracetam', drugId: 'levetiracetam', dose: '1000-3000 mg', frequency: 'BD', duration: 'Long-term' }
    ],
    relevantDrugs: ['lorazepam', 'midazolam', 'phenytoin', 'phenobarbital', 'levetiracetam']
  },
  {
    id: 'diabetic-ketoacidosis',
    name: 'Diabetic Ketoacidosis (DKA)',
    category: 'Endocrinology',
    description: 'A life-threatening complication of diabetes mellitus characterized by hyperglycemia, ketosis, and metabolic acidosis. Most common in Type 1 DM.',
    icon: 'monitor_heart',
    severity: 'Emergency',
    symptoms: ['Polyuria', 'Polydipsia', 'Nausea/vomiting', 'Abdominal pain', 'Kussmaul breathing', 'Fruity breath odor', 'Altered consciousness'],
    diagnosticMarkers: ['BSR > 250 mg/dL', 'pH < 7.3', 'HCO3 < 18 mEq/L', 'Serum ketones positive', 'Anion gap metabolic acidosis'],
    treatmentProtocols: [
      { step: 1, action: 'Normal Saline 1000 mL IV over 30 min (10-15 min if BP < 90)', drug: 'Normal Saline', dose: '1000 mL', route: 'IV', note: 'Fluid replacement - rapid initial bolus' },
      { step: 2, action: 'Normal Saline 1000 mL IV over 1 hour, then 1000 mL over 4 hours', drug: 'Normal Saline', dose: '1000 mL', route: 'IV', note: 'Continue fluids; switch to 5% D/W when BSR < 280 mg/dL' },
      { step: 3, action: 'Insulin infusion 0.1 units/kg/hour IV', drug: 'Regular Insulin', drugId: 'regular-insulin', dose: '0.1 units/kg/hr', route: 'IV', note: 'Humulin R in pediatric chamber' },
      { step: 4, action: 'KCL 40 mmol in 1000 mL N/Saline over 4 hours', drug: 'Potassium Chloride', dose: '40 mmol', route: 'IV', note: 'Potassium replacement' },
      { step: 5, action: 'Ceftriaxone 1 g IV OD (if infection present)', drug: 'Ceftriaxone', drugId: 'ceftriaxone', dose: '1 g', route: 'IV', note: 'Empiric antibiotics if infection suspected' },
      { step: 6, action: 'Enoxaparin 40 mg SC OD (prophylactic)', drug: 'Enoxaparin', drugId: 'enoxaparin', dose: '40 mg', route: 'SC', note: 'Prophylactic anticoagulation' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['regular-insulin', 'ceftriaxone', 'enoxaparin']
  },
  {
    id: 'hypertension-emergency',
    name: 'Hypertensive Emergency',
    category: 'Cardiology',
    description: 'Severely elevated blood pressure (systolic > 180 mmHg or diastolic > 120 mmHg) with acute target organ damage.',
    icon: 'heart_plus',
    severity: 'Emergency',
    symptoms: ['Severe headache', 'Blurred vision', 'Chest pain', 'Dyspnea', 'Neurological deficits', 'Nausea/vomiting'],
    diagnosticMarkers: ['BP > 180/120 mmHg', 'ECG (LVH, ischemia)', 'Creatinine (renal involvement)', 'Urinalysis (proteinuria)'],
    treatmentProtocols: [
      { step: 1, action: 'Captopril 25 mg PO stat', drug: 'Captopril', drugId: 'captopril', dose: '25 mg', route: 'PO', note: 'Measure BP after 30 min' },
      { step: 2, action: 'Furosemide 0.5-1 mg/kg IV over 1-2 min', drug: 'Furosemide', drugId: 'furosemide', dose: '0.5-1 mg/kg', route: 'IV', note: 'If BP not reduced' },
      { step: 3, action: 'Labetalol 20 mg slow IV', drug: 'Labetalol', drugId: 'labetalol', dose: '20 mg', route: 'IV', note: 'If BP still elevated' },
      { step: 4, action: 'Isosorbide Dinitrate infusion at 1 mg/kg/hour IV', drug: 'Isosorbide Dinitrate', dose: '1 mg/kg/hr', route: 'IV', note: 'Arterial and venous vasodilator' }
    ],
    maintenanceTherapy: [
      { drug: 'Amlodipine', drugId: 'amlodipine', dose: '5-10 mg', frequency: 'OD', duration: 'Lifelong' },
      { drug: 'Lisinopril', drugId: 'lisinopril', dose: '5-20 mg', frequency: 'OD', duration: 'Lifelong' },
      { drug: 'Bisoprolol', drugId: 'bisoprolol', dose: '2.5-10 mg', frequency: 'OD', duration: 'Lifelong' },
      { drug: 'Hydrochlorothiazide', dose: '12.5-25 mg', frequency: 'OD', duration: 'Lifelong' }
    ],
    relevantDrugs: ['captopril', 'furosemide', 'labetalol', 'amlodipine', 'lisinopril', 'bisoprolol']
  },
  {
    id: 'community-acquired-pneumonia',
    name: 'Community-Acquired Pneumonia (CAP)',
    category: 'Pulmonology',
    description: 'Acute infection of the lung parenchyma acquired outside of healthcare settings, commonly caused by Streptococcus pneumoniae, H. influenzae, and atypical pathogens.',
    icon: 'pulmonology',
    severity: 'Acute',
    symptoms: ['Cough with sputum', 'Fever', 'Dyspnea', 'Pleuritic chest pain', 'Fatigue', 'Confusion (elderly)'],
    diagnosticMarkers: ['Chest X-ray (consolidation)', 'CBC (leukocytosis)', 'CRP (elevated)', 'Blood cultures', 'Sputum culture'],
    treatmentProtocols: [
      { step: 1, action: 'Amoxicillin 500 mg TDS for 10 days', drug: 'Amoxicillin', drugId: 'amoxicillin', dose: '500 mg', route: 'PO', note: 'Mild CAP, no comorbidities' },
      { step: 2, action: 'Amoxicillin 500 mg TDS + Clarithromycin 500 mg BD for 10 days', drug: 'Amoxicillin + Clarithromycin', dose: '500 mg + 500 mg', route: 'PO', note: 'Comorbidities present (COPD, DM, liver/renal disease)' },
      { step: 3, action: 'Ceftriaxone 1 g IV OD + Azithromycin 500 mg IV OD', drug: 'Ceftriaxone + Azithromycin', dose: '1 g + 500 mg', route: 'IV', note: 'Severe CAP requiring admission' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['amoxicillin', 'clarithromycin', 'azithromycin', 'ceftriaxone', 'moxifloxacin']
  },
  {
    id: 'pulmonary-tuberculosis',
    name: 'Pulmonary Tuberculosis',
    category: 'Infectious Disease',
    description: 'A chronic bacterial infection of the lungs caused by Mycobacterium tuberculosis. Typically treated with a multi-drug regimen over 6 months.',
    icon: 'coronavirus',
    severity: 'Chronic',
    symptoms: ['Chronic cough (> 3 weeks)', 'Hemoptysis', 'Fever (evening rise)', 'Night sweats', 'Weight loss', 'Fatigue', 'Anorexia'],
    diagnosticMarkers: ['Chest X-ray (apical infiltrates)', 'Sputum AFB smear', 'GeneXpert MTB/RIF', 'Culture (gold standard)', 'Mantoux/TST'],
    treatmentProtocols: [
      { step: 1, action: 'Myrin-P (Isoniazid 60 mg + Rifampicin 120 mg + Ethambutol 225 mg + Pyrazinamide 300 mg) OD for 2 months', drug: 'Myrin-P (FDC)', dose: 'Weight-based: 35-45 kg: 2 tabs; 45-60 kg: 3 tabs; > 60 kg: 4 tabs', route: 'PO', note: 'Intensive phase: 2 months of 4 drugs' },
      { step: 2, action: 'Myrin (Isoniazid + Rifampicin) OD for 4 months', drug: 'Myrin (FDC)', dose: 'Based on intensive phase dose', route: 'PO', note: 'Continuation phase: 4 months of 2 drugs' },
      { step: 3, action: 'Pyridoxine (Vitamin B6) 50 mg OD', drug: 'Pyridoxine', dose: '50 mg', route: 'PO', note: 'Prevents isoniazid-induced peripheral neuritis' },
      { step: 4, action: 'Domperidone 10 mg TDS (for nausea)', drug: 'Domperidone', dose: '10 mg', route: 'PO', note: 'PRN for GI side effects' },
      { step: 5, action: 'Omeprazole 20 mg BD', drug: 'Omeprazole', drugId: 'omeprazole', dose: '20 mg', route: 'PO', note: 'Gastric protection' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['isoniazid', 'rifampicin', 'ethambutol', 'pyrazinamide', 'pyridoxine', 'omeprazole']
  },
  {
    id: 'heart-failure',
    name: 'Heart Failure (Chronic)',
    category: 'Cardiology',
    description: 'A complex clinical syndrome where the heart is unable to pump sufficient blood to meet metabolic demands, resulting in fluid congestion and reduced perfusion.',
    icon: 'favorite',
    severity: 'Chronic',
    symptoms: ['Dyspnea on exertion', 'Orthopnea', 'Paroxysmal nocturnal dyspnea', 'Peripheral edema', 'Fatigue', 'Jugular venous distension'],
    diagnosticMarkers: ['BNP > 100 pg/mL', 'NT-proBNP > 125 pg/mL', 'Echocardiography (reduced EF)', 'Chest X-ray (cardiomegaly, pulmonary congestion)'],
    treatmentProtocols: [
      { step: 1, action: 'Lisinopril 5 mg OD (ACE inhibitor)', drug: 'Lisinopril', drugId: 'lisinopril', dose: '5-20 mg', route: 'PO', note: 'Reduces preload and afterload' },
      { step: 2, action: 'Bisoprolol 2.5 mg OD (Beta-blocker)', drug: 'Bisoprolol', drugId: 'bisoprolol', dose: '2.5-10 mg', route: 'PO', note: 'Titrate slowly to target dose' },
      { step: 3, action: 'Furosemide 40 mg OD (for fluid overload)', drug: 'Furosemide', drugId: 'furosemide', dose: '20-80 mg', route: 'PO', note: 'Loop diuretic for congestion' },
      { step: 4, action: 'Spironolactone 25 mg OD', drug: 'Spironolactone', dose: '25 mg', route: 'PO', note: 'MRA for advanced HF' },
      { step: 5, action: 'Sacubitril/Valsartan 24/26 mg BD (if EF reduced)', drug: 'Sacubitril/Valsartan', dose: '24/26 - 97/103 mg', route: 'PO', note: 'ARNI; reduces mortality in CHF with reduced EF' }
    ],
    maintenanceTherapy: [
      { drug: 'Lisinopril', drugId: 'lisinopril', dose: '5-20 mg', frequency: 'OD', duration: 'Lifelong' },
      { drug: 'Bisoprolol', drugId: 'bisoprolol', dose: '2.5-10 mg', frequency: 'OD', duration: 'Lifelong' },
      { drug: 'Furosemide', drugId: 'furosemide', dose: '20-80 mg', frequency: 'OD', duration: 'As needed' },
      { drug: 'Digoxin', drugId: 'digoxin', dose: '0.125-0.25 mg', frequency: 'OD', duration: 'Lifelong' }
    ],
    relevantDrugs: ['lisinopril', 'bisoprolol', 'furosemide', 'digoxin', 'carvedilol', 'sacubitril-valsartan']
  },
  {
    id: 'type-2-diabetes',
    name: 'Type 2 Diabetes Mellitus',
    category: 'Endocrinology',
    description: 'A chronic metabolic disorder characterized by insulin resistance and relative insulin deficiency, leading to hyperglycemia.',
    icon: 'monitor_weight',
    severity: 'Chronic',
    symptoms: ['Polyuria', 'Polydipsia', 'Polyphagia', 'Weight loss', 'Fatigue', 'Blurred vision', 'Slow wound healing'],
    diagnosticMarkers: ['FBS > 126 mg/dL', 'HbA1c > 6.5%', 'RBS > 200 mg/dL', 'OGTT 2h > 200 mg/dL'],
    treatmentProtocols: [
      { step: 1, action: 'Metformin 500 mg BD with meals (tier 1)', drug: 'Metformin', drugId: 'metformin', dose: '500-1000 mg', route: 'PO', note: 'First-line if HbA1c > 7.5%; DOC for overweight Type 2 DM' },
      { step: 2, action: 'Metformin + Glimepiride 1-2 mg OD OR Sitagliptin 50-100 mg OD', drug: 'Metformin + Sulfonylurea/DPP4i', dose: 'Varies', route: 'PO', note: 'Dual therapy if HbA1c remains > 7.5%' },
      { step: 3, action: 'Metformin + Glimepiride + Sitagliptin OR Pioglitazone', drug: 'Triple Therapy', dose: 'Varies', route: 'PO', note: 'Triple therapy if HbA1c > 7.5%' },
      { step: 4, action: 'Insulin therapy (Humulin 70/30 SC BD)', drug: 'Insulin (Humulin 70/30)', dose: '0.5 u/kg/day (Type 1) or 1 u/kg/day (Type 2)', route: 'SC', note: 'Individualized dosing based on BSR' }
    ],
    maintenanceTherapy: [
      { drug: 'Metformin', drugId: 'metformin', dose: '500-1000 mg', frequency: 'BD', duration: 'Lifelong' },
      { drug: 'Glimepiride', drugId: 'glimepiride', dose: '1-4 mg', frequency: 'OD', duration: 'Lifelong' },
      { drug: 'Sitagliptin', drugId: 'sitagliptin', dose: '50-100 mg', frequency: 'OD', duration: 'Lifelong' }
    ],
    relevantDrugs: ['metformin', 'glimepiride', 'sitagliptin', 'pioglitazone', 'repaglinide']
  },
  {
    id: 'gout-acute',
    name: 'Acute Gouty Arthritis',
    category: 'Orthopedics',
    description: 'An inflammatory arthritis caused by deposition of monosodium urate crystals in joints, characterized by sudden onset of severe pain, redness, and swelling.',
    icon: 'footprint',
    severity: 'Acute',
    symptoms: ['Sudden severe joint pain (usually big toe)', 'Redness', 'Swelling', 'Warmth', 'Tenderness', 'Limited range of motion'],
    diagnosticMarkers: ['Serum uric acid > 7 mg/dL', 'Joint aspiration (urate crystals)', 'CRP (elevated)', 'X-ray (soft tissue swelling)'],
    treatmentProtocols: [
      { step: 1, action: 'NSAID (Indomethacin 25-50 mg TDS or Naproxen 500 mg BD)', drug: 'Indomethacin/Naproxen', drugId: 'indomethacin', dose: '25-50 mg TDS', route: 'PO', note: 'First-line acute treatment' },
      { step: 2, action: 'Colchicine 1 mg PO then 0.5 mg after 1 hour', drug: 'Colchicine', dose: '1 mg then 0.5 mg', route: 'PO', note: 'If NSAIDs contraindicated' },
      { step: 3, action: 'Prednisolone 30-40 mg OD for 5-7 days', drug: 'Prednisolone', drugId: 'prednisolone', dose: '30-40 mg', route: 'PO', note: 'If unable to use NSAIDs or colchicine' },
      { step: 4, action: 'Allopurinol 300 mg OD (start after acute attack resolves)', drug: 'Allopurinol', drugId: 'allopurinol', dose: '300 mg', route: 'PO', note: 'Long-term urate-lowering for 3-6 months' }
    ],
    maintenanceTherapy: [
      { drug: 'Allopurinol', drugId: 'allopurinol', dose: '300 mg', frequency: 'OD', duration: 'Long-term' },
      { drug: 'Febuxostat', drugId: 'febuxostat', dose: '40-80 mg', frequency: 'OD', duration: 'Long-term' }
    ],
    relevantDrugs: ['indomethacin', 'naproxen', 'allopurinol', 'febuxostat', 'prednisolone']
  },
  {
    id: 'urinary-tract-infection',
    name: 'Urinary Tract Infection (Uncomplicated)',
    category: 'Infectious Disease',
    description: 'An infection of the urinary tract, most commonly caused by E. coli, affecting the bladder (cystitis) or urethra. More common in females.',
    icon: 'nephrology',
    severity: 'Acute',
    symptoms: ['Dysuria', 'Frequency', 'Urgency', 'Suprapubic pain', 'Cloudy urine', 'Hematuria'],
    diagnosticMarkers: ['Urinalysis (pyuria, bacteriuria)', 'Urine culture and sensitivity', 'Nitrite positive', 'Leukocyte esterase positive'],
    treatmentProtocols: [
      { step: 1, action: 'Nitrofurantoin 50 mg QID for 3 days (female) / 7 days (male)', drug: 'Nitrofurantoin', drugId: 'nitrofurantoin', dose: '50 mg', route: 'PO', note: 'First-line uncomplicated UTI' },
      { step: 2, action: 'Levofloxacin 250 mg BD or 500 mg OD for 3 days', drug: 'Levofloxacin', drugId: 'levofloxacin', dose: '250-500 mg', route: 'PO', note: 'Alternative therapy' },
      { step: 3, action: 'Fosfomycin Trometamol 3 g single dose', drug: 'Fosfomycin', dose: '3 g', route: 'PO', note: 'Single-dose therapy' },
      { step: 4, action: 'Sodium Acid Citrate (Citralka) 10 mL TDS', drug: 'Sodium Acid Citrate', dose: '10 mL', route: 'PO', note: 'Symptomatic relief of burning micturition' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['nitrofurantoin', 'levofloxacin', 'fosfomycin', 'ciprofloxacin']
  },
  {
    id: 'peptic-ulcer-hpylori',
    name: 'H. Pylori Infection / Peptic Ulcer Disease',
    category: 'Gastroenterology',
    description: 'Infection of the gastric mucosa by Helicobacter pylori, a major cause of chronic gastritis, peptic ulcer disease, and gastric cancer.',
    icon: 'gastroenterology',
    severity: 'Chronic',
    symptoms: ['Epigastric pain (burning)', 'Bloating', 'Nausea', 'Early satiety', 'Heartburn', 'Melena (if bleeding)'],
    diagnosticMarkers: ['H. pylori stool antigen', 'Urea breath test', 'Upper GI endoscopy (biopsy)', 'Serology'],
    treatmentProtocols: [
      { step: 1, action: 'Bismuth subsalicylate 1 tab QID + Metronidazole 400 mg BD + Tetracycline 250 mg QID + Omeprazole 20 mg BD for 14 days', drug: 'Bismuth Quadruple (BMTO)', dose: 'As per regimen', route: 'PO', note: 'BMTO regimen: Bismuth + Metronidazole + Tetracycline + Omeprazole' },
      { step: 2, action: 'Clarithromycin 500 mg BD + Amoxicillin 1 g BD + Omeprazole 20 mg BD for 14 days', drug: 'Clarithromycin Triple (CAO)', dose: 'As per regimen', route: 'PO', note: 'CAO regimen: Clarithromycin + Amoxicillin + Omeprazole' },
      { step: 3, action: 'Metronidazole 400 mg BD + Esomeprazole 20 mg BD + Amoxicillin 1 g BD for 5 days then Levofloxacin 500 mg OD for 5 days', drug: 'Sequential (MEAL) Regimen', dose: 'As per regimen', route: 'PO', note: 'MEAL regimen: Metronidazole + Esomeprazole + Amoxicillin + Levofloxacin' }
    ],
    maintenanceTherapy: [
      { drug: 'Omeprazole', drugId: 'omeprazole', dose: '20-40 mg', frequency: 'OD', duration: '4-8 weeks' },
      { drug: 'Famotidine', dose: '20-40 mg', frequency: 'BD', duration: '4-8 weeks' }
    ],
    relevantDrugs: ['omeprazole', 'esomeprazole', 'pantoprazole', 'clarithromycin', 'amoxicillin', 'metronidazole', 'tetracycline', 'levofloxacin', 'famotidine']
  },
  {
    id: 'rheumatoid-arthritis',
    name: 'Rheumatoid Arthritis',
    category: 'Rheumatology',
    description: 'A chronic autoimmune inflammatory disease primarily affecting synovial joints, leading to progressive joint destruction, deformity, and functional impairment.',
    icon: 'accessibility_new',
    severity: 'Chronic',
    symptoms: ['Morning joint stiffness > 30 min', 'Symmetrical small joint pain/swelling', 'Fatigue', 'Low-grade fever', 'Rheumatoid nodules', 'Weight loss'],
    diagnosticMarkers: ['Rheumatoid factor (positive)', 'Anti-CCP antibodies', 'CRP/ESR (elevated)', 'X-ray (joint erosions, periarticular osteopenia)'],
    treatmentProtocols: [
      { step: 1, action: 'Methotrexate 7.5-15 mg once weekly + Folic acid 5 mg OD (except MTX day)', drug: 'Methotrexate', drugId: 'methotrexate', dose: '7.5-15 mg/week', route: 'PO', note: 'First-line DMARD' },
      { step: 2, action: 'Leflunomide 20 mg OD + Folic acid 5 mg OD', drug: 'Leflunomide', drugId: 'leflunomide', dose: '20 mg', route: 'PO', note: 'Alternative DMARD' },
      { step: 3, action: 'Sulfasalazine 500 mg BD', drug: 'Sulfasalazine', drugId: 'sulfasalazine', dose: '500 mg', route: 'PO', note: 'Second-line DMARD' },
      { step: 4, action: 'Hydroxychloroquine 200 mg BD', drug: 'Hydroxychloroquine', drugId: 'hydroxychloroquine', dose: '200 mg', route: 'PO', note: 'Mild disease' },
      { step: 5, action: 'Prednisolone 5 mg OD (bridge therapy)', drug: 'Prednisolone', drugId: 'prednisolone', dose: '5 mg', route: 'PO', note: 'Low-dose steroid for symptom control' }
    ],
    maintenanceTherapy: [
      { drug: 'Methotrexate', drugId: 'methotrexate', dose: '7.5-15 mg', frequency: 'Weekly', duration: 'Long-term' },
      { drug: 'Folic Acid', dose: '5 mg', frequency: 'OD (except MTX day)', duration: 'Long-term' },
      { drug: 'Hydroxychloroquine', drugId: 'hydroxychloroquine', dose: '200 mg', frequency: 'BD', duration: 'Long-term' }
    ],
    relevantDrugs: ['methotrexate', 'leflunomide', 'sulfasalazine', 'hydroxychloroquine', 'prednisolone', 'diclofenac', 'celecoxib']
  },
  {
    id: 'osteoarthritis',
    name: 'Osteoarthritis',
    category: 'Orthopedics',
    description: 'A degenerative joint disease characterized by progressive loss of articular cartilage, bone remodeling, and synovial inflammation, commonly affecting weight-bearing joints.',
    icon: 'skeleton',
    severity: 'Chronic',
    symptoms: ['Joint pain (worse with activity)', 'Morning stiffness < 30 min', 'Crepitus', 'Joint swelling', 'Decreased range of motion', 'Bony enlargement'],
    diagnosticMarkers: ['X-ray (joint space narrowing, osteophytes, subchondral sclerosis)', 'Normal inflammatory markers'],
    treatmentProtocols: [
      { step: 1, action: 'Paracetamol 500-1000 mg QID PRN', drug: 'Paracetamol', drugId: 'paracetamol', dose: '500-1000 mg', route: 'PO', note: 'First-line analgesic' },
      { step: 2, action: 'NSAID (Ibuprofen 400 mg TDS or Diclofenac 50 mg TDS) + PPI', drug: 'NSAID + PPI', dose: 'Varies', route: 'PO', note: 'Add PPI for GI protection' },
      { step: 3, action: 'Duloxetine 30 mg OD', drug: 'Duloxetine', drugId: 'duloxetine', dose: '30 mg', route: 'PO', note: 'For advanced OA with chronic pain' },
      { step: 4, action: 'Calcium + Vitamin D3 supplementation', drug: 'Calcium + Vitamin D3', dose: '500 mg + 400 IU', route: 'PO', note: 'Bone health maintenance' },
      { step: 5, action: 'Topical NSAID gel (Diclofenac 1% or Piroxicam 0.5%)', drug: 'Topical NSAID', dose: 'Apply TDS', route: 'Topical', note: 'Localized symptom relief' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['paracetamol', 'ibuprofen', 'diclofenac', 'duloxetine', 'celecoxib', 'piroxicam']
  },
  {
    id: 'acute-diarrhea',
    name: 'Acute Diarrhea (Pediatric)',
    category: 'Pediatrics',
    description: 'Passage of three or more loose or watery stools per day in children. Leading cause of dehydration and mortality in children under 5 globally.',
    icon: 'water_drop',
    severity: 'Acute',
    symptoms: ['Loose/watery stools', 'Vomiting', 'Fever', 'Abdominal cramps', 'Dehydration signs (sunken eyes, dry mouth, reduced skin turgor)'],
    diagnosticMarkers: ['Stool examination', 'Electrolytes (if severe)', 'Blood glucose', 'Urine output monitoring'],
    treatmentProtocols: [
      { step: 1, action: 'ORS - Plan A (No Dehydration): Give ORS + Zinc + continue feeding', drug: 'ORS + Zinc', dose: '< 2 yrs: 100 mL after each stool; > 2 yrs: 200 mL after each stool', route: 'PO', note: 'Plan A: No dehydration - home management' },
      { step: 2, action: 'ORS - Plan B (Some Dehydration): ORS 75 mL/kg over 4 hours + Zinc', drug: 'ORS', dose: 'Weight (kg) x 75 mL over 4 hours', route: 'PO', note: 'Plan B: Some dehydration - reassess after 4 hours' },
      { step: 3, action: 'IV Fluids - Plan C (Severe Dehydration): R/L or N/S 100 mL/kg', drug: 'Ringer Lactate / Normal Saline', dose: '100 mL/kg', route: 'IV', note: 'Plan C: Severe dehydration - urgent IV fluids' },
      { step: 4, action: 'Zinc supplements for 14 days', drug: 'Zinc Sulfate', dose: '< 6 mo: 10 mg OD; > 6 mo: 20 mg OD', route: 'PO', note: 'Reduces duration and severity' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['oral-rehydration-salts']
  },
  {
    id: 'snake-bite',
    name: 'Snake Bite Envenomation',
    category: 'Emergency Medicine',
    description: 'A medical emergency caused by venomous snake bite. In Pakistan, Russell\'s Viper (hemotoxic) and Monocled Cobra (neurotoxic) are the most common medically significant species.',
    icon: 'warning',
    severity: 'Emergency',
    symptoms: ['Fang marks', 'Local swelling/pain', 'Bleeding (hemotoxic)', 'Ptosis (neurotoxic)', 'Respiratory paralysis', 'Muscle necrosis (myotoxic)'],
    diagnosticMarkers: ['20-minute Whole Blood Clotting Test (20WBCT)', 'RFTs', 'Myoglobin levels', 'Platelet count', 'INR'],
    treatmentProtocols: [
      { step: 1, action: 'Hydrocortisone 100 mg IV before ASV (prevent allergic reaction)', drug: 'Hydrocortisone', drugId: 'hydrocortisone', dose: '100 mg', route: 'IV', note: 'Steroid premedication before anti-snake venom' },
      { step: 2, action: 'Anti-Snake Venom (ASV) 4-6 vials in 500 mL N/Saline IV over 1 hour', drug: 'Anti-Snake Venom', dose: '4-6 vials (10 mL each)', route: 'IV', note: '4 vials if incoagulable blood, 6 vials if neurotoxic signs' },
      { step: 3, action: 'Omeprazole 40 mg IV', drug: 'Omeprazole', drugId: 'omeprazole', dose: '40 mg', route: 'IV', note: 'PPI for stress ulcer prophylaxis' },
      { step: 4, action: 'Pain killer as needed', drug: 'Analgesic', dose: 'PRN', route: 'IV', note: 'Analgesia' },
      { step: 5, action: 'Augmentin 1.2 g IV BD (if high-risk wound or infection)', drug: 'Co-amoxiclav', drugId: 'co-amoxiclav', dose: '1.2 g', route: 'IV', note: 'Antibiotic prophylaxis only for high-risk wounds' },
      { step: 6, action: 'Neostigmine 1.5 mg IM + Atropine 0.6 mg IV (for neurotoxic symptoms)', drug: 'Neostigmine + Atropine', dose: '1.5 mg + 0.6 mg', route: 'IM + IV', note: 'For neurotoxic envenomation with respiratory weakness' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['hydrocortisone', 'omeprazole', 'co-amoxiclav']
  },
  {
    id: 'genital-herpes',
    name: 'Genital Herpes (HSV)',
    category: 'Infectious Disease',
    description: 'A sexually transmitted infection caused by herpes simplex virus (HSV-2 most commonly, HSV-1 increasingly). Characterized by painful genital ulcers and recurrent episodes.',
    icon: 'wounds_injuries',
    severity: 'Chronic',
    symptoms: ['Painful genital ulcers/vesicles', 'Burning sensation', 'Dysuria', 'Fever', 'Inguinal lymphadenopathy', 'Prodromal tingling'],
    diagnosticMarkers: ['Clinical examination', 'PCR for HSV DNA', 'Viral culture', 'Serology (HSV IgG/IgM)'],
    treatmentProtocols: [
      { step: 1, action: 'Acyclovir 200 mg 5 times daily for 7-10 days (initial episode)', drug: 'Acyclovir', drugId: 'acyclovir', dose: '200 mg 5x/day', route: 'PO', note: 'Initial episode treatment' },
      { step: 2, action: 'Acyclovir 400 mg BD for 1 year (recurrence prophylaxis)', drug: 'Acyclovir', drugId: 'acyclovir', dose: '400 mg', route: 'PO', note: 'Suppressive therapy for frequent recurrences' },
      { step: 3, action: 'Valacyclovir 500 mg BD for 5 days or Famciclovir 250 mg TDS for 5 days', drug: 'Valacyclovir / Famciclovir', dose: '500 mg BD / 250 mg TDS', route: 'PO', note: 'Alternative agents with better bioavailability' }
    ],
    maintenanceTherapy: [
      { drug: 'Acyclovir', drugId: 'acyclovir', dose: '400 mg', frequency: 'BD', duration: '1 year' }
    ],
    relevantDrugs: ['acyclovir', 'valacyclovir', 'famciclovir']
  },
  {
    id: 'acute-pain-management',
    name: 'Acute Pain Management',
    category: 'Pain Medicine',
    description: 'A stepwise approach to managing acute pain, following the WHO analgesic ladder: non-opioids → weak opioids → strong opioids, with adjuvant agents as needed.',
    icon: 'healing',
    severity: 'Acute',
    symptoms: ['Pain (mild/moderate/severe)', 'Associated distress', 'Autonomic activation (tachycardia, hypertension)'],
    diagnosticMarkers: ['Pain assessment (Numeric Rating Scale 0-10)', 'Type of pain (nociceptive, neuropathic, visceral)'],
    treatmentProtocols: [
      { step: 1, action: 'Paracetamol 500-1000 mg QID OR NSAID (Ibuprofen 400 mg TDS, Diclofenac 50 mg TDS)', drug: 'Paracetamol or NSAID', drugId: 'paracetamol', dose: '500-1000 mg / 400 mg / 50 mg', route: 'PO', note: 'Mild pain (NRS 1-3)' },
      { step: 2, action: 'Tramadol 50-100 mg IM/IV q6h PRN + anti-emetic', drug: 'Tramadol', drugId: 'tramadol', dose: '50-100 mg', route: 'IM/IV', note: 'Moderate pain (NRS 4-6); give anti-emetic with opioid' },
      { step: 3, action: 'Nalbuphine 5-20 mg slow IV q4h PRN OR Morphine 5-10 mg slow IV over 5 min', drug: 'Nalbuphine / Morphine', drugId: 'morphine', dose: '5-20 mg / 5-10 mg', route: 'IV', note: 'Severe pain (NRS 7-10); strong opioids' },
      { step: 4, action: 'Add adjuvant: Drotavarine 40 mg IM for abdominal spasmodic pain', drug: 'Drotavarine', drugId: 'drotavarine', dose: '40 mg', route: 'IM', note: 'For visceral/spasmodic pain' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['paracetamol', 'ibuprofen', 'diclofenac', 'tramadol', 'nalbuphine', 'morphine', 'drotavarine', 'hyoscine', 'mebeverine']
  },
  {
    id: 'urticaria-allergic-reaction',
    name: 'Urticaria / Hives',
    category: 'Dermatology',
    description: 'A common skin condition characterized by raised, red, itchy welts (wheals) caused by release of histamine and other mediators from mast cells.',
    icon: 'allergy',
    severity: 'Acute',
    symptoms: ['Raised red welts', 'Intense itching', 'Wheals varying in size', 'Angioedema (lips, eyelids)', 'Resolution within 24 hours'],
    diagnosticMarkers: ['Clinical diagnosis', 'Allergy testing (if chronic)', 'CBC with differential'],
    treatmentProtocols: [
      { step: 1, action: 'Non-sedating antihistamine (Loratadine 10 mg OD or Cetirizine 10 mg OD)', drug: 'Loratadine / Cetirizine', drugId: 'loratadine', dose: '10 mg', route: 'PO', note: 'First-line treatment' },
      { step: 2, action: 'Calamine lotion topical PRN', drug: 'Calamine Lotion', dose: 'Apply PRN', route: 'Topical', note: 'Soothing agent for symptomatic relief' },
      { step: 3, action: 'Hydroxyzine 25 mg HS (if sleep disturbance)', drug: 'Hydroxyzine', dose: '25 mg', route: 'PO', note: 'Sedating antihistamine for nighttime' },
      { step: 4, action: 'Prednisolone 30-40 mg OD for 5 days (severe cases)', drug: 'Prednisolone', drugId: 'prednisolone', dose: '30-40 mg', route: 'PO', note: 'Short course for severe or refractory urticaria' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['loratadine', 'cetirizine', 'prednisolone', 'fexofenadine']
  },
  {
    id: 'bacterial-skin-infection',
    name: 'Bacterial Skin Infections (Cellulitis/Impetigo)',
    category: 'Dermatology',
    description: 'Common bacterial infections of the skin caused primarily by Staphylococcus aureus and Streptococcus pyogenes, ranging from superficial impetigo to deeper cellulitis.',
    icon: 'dermatology',
    severity: 'Acute',
    symptoms: ['Redness', 'Swelling', 'Warmth', 'Pain', 'Pus/discharge', 'Fever (systemic involvement)'],
    diagnosticMarkers: ['Clinical examination', 'Wound swab culture', 'CBC (leukocytosis)', 'CRP (elevated)'],
    treatmentProtocols: [
      { step: 1, action: 'Topical: Fusidic acid cream TDS or Mupirocin TDS for 5-7 days', drug: 'Fusidic Acid / Mupirocin', dose: 'Apply TDS', route: 'Topical', note: 'Mild localized impetigo' },
      { step: 2, action: 'Flucloxacillin 500 mg QID for 7-10 days', drug: 'Flucloxacillin', drugId: 'flucloxacillin', dose: '500 mg', route: 'PO', note: 'First-line oral for cellulitis' },
      { step: 3, action: 'Clarithromycin 500 mg BD for 7-10 days (if penicillin allergic)', drug: 'Clarithromycin', drugId: 'clarithromycin', dose: '500 mg', route: 'PO', note: 'Penicillin allergy alternative' },
      { step: 4, action: 'Ceftriaxone 1-2 g IV OD OR Vancomycin/Linezolid (severe/MRSA)', drug: 'Ceftriaxone / Vancomycin', drugId: 'ceftriaxone', dose: '1-2 g', route: 'IV', note: 'Severe infection requiring IV antibiotics' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['flucloxacillin', 'clarithromycin', 'ceftriaxone', 'vancomycin', 'linezolid']
  },
  {
    id: 'dog-bite-rabies',
    name: 'Dog Bite / Rabies Prophylaxis',
    category: 'Emergency Medicine',
    description: 'Post-exposure prophylaxis for rabies following a dog bite. Involves wound care, rabies immunoglobulin, and rabies vaccination according to WHO guidelines.',
    icon: 'healing',
    severity: 'Emergency',
    symptoms: ['Dog bite wound', 'Risk of rabies transmission'],
    diagnosticMarkers: ['Wound assessment', 'Animal vaccination status'],
    treatmentProtocols: [
      { step: 1, action: 'Wound cleaning with soap + water + antiseptic', drug: 'Wound Care', dose: 'As needed', route: 'Topical', note: 'Thorough wound toilet' },
      { step: 2, action: 'HRIG infiltration half into/around wound, half IM away from wound', drug: 'Human Rabies Immunoglobulin', dose: '20 IU/kg', route: 'Local + IM', note: 'Infiltrate around wound; remainder IM at distant site' },
      { step: 3, action: 'HDCV 1 mL IM days 0, 3, 7, 21', drug: 'Human Diploid Cell Vaccine', dose: '1 mL', route: 'IM', note: 'Four-dose schedule' },
      { step: 4, action: 'Tetanus Toxoid IM stat', drug: 'Tetanus Toxoid', dose: '0.5 mL', route: 'IM', note: 'If not vaccinated within 5 years' },
      { step: 5, action: 'Prophylactic antibiotics only for high-risk wounds', drug: 'Antibiotics', dose: 'As per protocol', route: 'PO', note: 'Only for high-risk wounds' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['human-rabies-immunoglobulin', 'tetanus-toxoid']
  },
  {
    id: 'organophosphate-poisoning',
    name: 'Organophosphate Poisoning',
    category: 'Emergency Medicine',
    description: 'Acute poisoning from organophosphate compounds causing cholinergic crisis due to acetylcholinesterase inhibition. Requires immediate atropinization and supportive care.',
    icon: 'warning',
    severity: 'Emergency',
    symptoms: ['Excessive secretions', 'Muscle fasciculations', 'Respiratory distress', 'Miosis', 'Bradycardia'],
    diagnosticMarkers: ['Serum cholinesterase levels', 'Clinical presentation'],
    treatmentProtocols: [
      { step: 1, action: 'Secure airway, administer O2', drug: 'Airway Management', dose: 'As needed', route: 'N/A', note: 'ABCs first' },
      { step: 2, action: 'Atropine 2 mg (mild-mod) or 6 mg (severe) IM; repeat 2 mg after 10-15 min', drug: 'Atropine', dose: '2-6 mg', route: 'IM', note: 'Titrate to dry secretions' },
      { step: 3, action: 'Pralidoxime 30 mg/kg IV loading then 4-8 mg/kg/hour', drug: 'Pralidoxime', dose: '30 mg/kg', route: 'IV', note: 'Reactivates acetylcholinesterase' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['atropine']
  },
  {
    id: 'chronic-hypertension',
    name: 'Chronic Hypertension',
    category: 'Cardiology',
    description: 'Persistently elevated blood pressure (BP > 140/90 mmHg) requiring long-term pharmacologic management to prevent target organ damage.',
    icon: 'heart_plus',
    severity: 'Chronic',
    symptoms: ['Often asymptomatic', 'Headache', 'Dizziness', 'Blurred vision'],
    diagnosticMarkers: ['BP > 140/90 mmHg', 'ECG', 'RFTs', 'Urinalysis'],
    treatmentProtocols: [
      { step: 1, action: 'ACEi (Lisinopril 5-10 mg OD) or ARB (Losartan 50 mg OD) OR CCB (Amlodipine 5 mg OD)', drug: 'ACEi/ARB/CCB', dose: 'As per drug', route: 'PO', note: 'Monotherapy initiation' },
      { step: 2, action: 'ACEi + CCB dual therapy', drug: 'ACEi + CCB', dose: 'As per regimen', route: 'PO', note: 'Add second agent if BP uncontrolled' },
      { step: 3, action: 'ACEi + CCB + Diuretic triple therapy', drug: 'Triple Therapy', dose: 'As per regimen', route: 'PO', note: 'Third-line therapy' }
    ],
    maintenanceTherapy: [
      { drug: 'Lisinopril', dose: '5-20 mg', frequency: 'OD', duration: 'Lifelong' },
      { drug: 'Amlodipine', drugId: 'amlodipine', dose: '5-10 mg', frequency: 'OD', duration: 'Lifelong' }
    ],
    relevantDrugs: ['lisinopril', 'amlodipine', 'losartan', 'bisoprolol', 'hydrochlorothiazide']
  },
  {
    id: 'angina-post-mi',
    name: 'Angina / Post-MI',
    category: 'Cardiology',
    description: 'Chronic stable angina and post-myocardial infarction management focusing on symptom relief, secondary prevention, and reduction of cardiovascular events.',
    icon: 'favorite_border',
    severity: 'Chronic',
    symptoms: ['Chest pain on exertion', 'Dyspnea', 'Fatigue'],
    diagnosticMarkers: ['ECG', 'Troponin', 'Stress test'],
    treatmentProtocols: [
      { step: 1, action: 'GTN 0.4 mg SL SOS', drug: 'Glyceryl Trinitrate', dose: '0.4 mg', route: 'SL', note: 'For acute angina episodes' },
      { step: 2, action: 'Isosorbide Mononitrate 20-40 mg BD', drug: 'Isosorbide Mononitrate', dose: '20-40 mg', route: 'PO', note: 'Long-acting nitrate' },
      { step: 3, action: 'Aspirin 75-150 mg OD + Atorvastatin 20-80 mg HS', drug: 'Aspirin + Atorvastatin', dose: '75-150 mg + 20-80 mg', route: 'PO', note: 'Antiplatelet + statin' },
      { step: 4, action: 'Trimetazidine 35 mg BD', drug: 'Trimetazidine', dose: '35 mg', route: 'PO', note: 'Metabolic anti-ischemic agent' }
    ],
    maintenanceTherapy: [
      { drug: 'Aspirin', dose: '75 mg', frequency: 'OD', duration: 'Lifelong' },
      { drug: 'Atorvastatin', dose: '20-80 mg', frequency: 'HS', duration: 'Lifelong' },
      { drug: 'Bisoprolol', dose: '2.5-10 mg', frequency: 'OD', duration: 'Lifelong' }
    ],
    relevantDrugs: ['aspirin', 'atorvastatin', 'bisoprolol', 'lisinopril', 'clopidogrel']
  },
  {
    id: 'atrial-fibrillation',
    name: 'Atrial Fibrillation (ER)',
    category: 'Cardiology',
    description: 'A supraventricular tachyarrhythmia characterized by uncoordinated atrial activation with irregular ventricular response. Requires rate/rhythm control and anticoagulation.',
    icon: 'monitor_heart',
    severity: 'Emergency',
    symptoms: ['Palpitations', 'Chest discomfort', 'Dyspnea', 'Dizziness', 'Irregular pulse'],
    diagnosticMarkers: ['ECG (irregularly irregular rhythm, no P waves)'],
    treatmentProtocols: [
      { step: 1, action: 'Amiodarone 150 mg IV over 10 min, then 1 mg/min for 6 hrs, then 0.5 mg/min', drug: 'Amiodarone', dose: '150 mg IV', route: 'IV', note: 'Rhythm control' },
      { step: 2, action: 'Rate control with Beta-blocker or CCB', drug: 'Beta-blocker/CCB', dose: 'Varies', route: 'PO', note: 'Rate control strategy' }
    ],
    maintenanceTherapy: [
      { drug: 'Bisoprolol', dose: '2.5-10 mg', frequency: 'OD', duration: 'Lifelong' },
      { drug: 'Rivaroxaban', dose: '15-20 mg', frequency: 'OD', duration: 'Lifelong' },
      { drug: 'Digoxin', drugId: 'digoxin', dose: '0.125-0.25 mg', frequency: 'OD', duration: 'Lifelong' }
    ],
    relevantDrugs: ['amiodarone', 'bisoprolol', 'digoxin', 'rivaroxaban']
  },
  {
    id: 'deep-venous-thrombosis',
    name: 'Deep Venous Thrombosis',
    category: 'Cardiology',
    description: 'Formation of a blood clot in a deep vein, usually in the lower extremities, with risk of embolization to the pulmonary circulation.',
    icon: 'monitor_heart',
    severity: 'Acute',
    symptoms: ['Unilateral leg swelling', 'Pain', 'Warmth', 'Erythema'],
    diagnosticMarkers: ['Doppler ultrasound', 'D-dimer'],
    treatmentProtocols: [
      { step: 1, action: 'Rivaroxaban 15 mg BD x 3 weeks, then 20 mg OD', drug: 'Rivaroxaban', dose: '15-20 mg', route: 'PO', note: 'Direct oral anticoagulant' },
      { step: 2, action: 'Enoxaparin 1 mg/kg SC 12-hourly (alternative)', drug: 'Enoxaparin', dose: '1 mg/kg', route: 'SC', note: 'Alternative to rivaroxaban' }
    ],
    maintenanceTherapy: [
      { drug: 'Rivaroxaban', dose: '20 mg', frequency: 'OD', duration: '3-6 months' }
    ],
    relevantDrugs: ['rivaroxaban', 'enoxaparin', 'warfarin']
  },
  {
    id: 'peripheral-vascular-disease',
    name: 'Peripheral Vascular Disease',
    category: 'Cardiology',
    description: 'Atherosclerotic occlusive disease of the peripheral arteries, most commonly affecting the lower extremities, causing claudication and critical limb ischemia.',
    icon: 'footprint',
    severity: 'Chronic',
    symptoms: ['Intermittent claudication', 'Cold extremities', 'Absent pulses'],
    diagnosticMarkers: ['Ankle-brachial index < 0.9', 'Doppler ultrasound'],
    treatmentProtocols: [
      { step: 1, action: 'Aspirin 75 mg OD + Atorvastatin 20 mg HS', drug: 'Aspirin + Atorvastatin', dose: '75 mg + 20 mg', route: 'PO', note: 'Antiplatelet + lipid lowering' },
      { step: 2, action: 'Cilostazol 100 mg BD', drug: 'Cilostazol', dose: '100 mg', route: 'PO', note: 'Improves walking distance' }
    ],
    maintenanceTherapy: [
      { drug: 'Aspirin', dose: '75-150 mg', frequency: 'OD', duration: 'Lifelong' },
      { drug: 'Clopidogrel', dose: '75 mg', frequency: 'OD', duration: 'Lifelong' },
      { drug: 'Atorvastatin', dose: '20-80 mg', frequency: 'HS', duration: 'Lifelong' }
    ],
    relevantDrugs: ['aspirin', 'clopidogrel', 'atorvastatin', 'cilostazol']
  },
  {
    id: 'acute-cough',
    name: 'Cough (Acute)',
    category: 'Pulmonology',
    description: 'Acute cough lasting less than 3 weeks, typically due to upper respiratory tract infections. Management is symptomatic and directed at the underlying cause.',
    icon: 'air',
    severity: 'Acute',
    symptoms: ['Cough (dry or productive)', 'Sputum', 'Chest congestion'],
    diagnosticMarkers: ['Chest X-ray if persistent', 'Clinical assessment'],
    treatmentProtocols: [
      { step: 1, action: 'Expectorant (Hydryllin 1-2 tbsp TDS) for wet cough', drug: 'Hydryllin', dose: '1-2 tbsp', route: 'PO', note: 'For productive cough' },
      { step: 2, action: 'Dextromethorphan (Hydryllin DM) for dry cough', drug: 'Dextromethorphan', dose: 'As per product', route: 'PO', note: 'For dry irritating cough' },
      { step: 3, action: 'Antibiotics if bacterial (Augmentin 625 mg BD 7-10 days)', drug: 'Co-amoxiclav', dose: '625 mg', route: 'PO', note: 'Only if bacterial infection suspected' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['amoxicillin-clavulanate', 'azithromycin', 'clarithromycin']
  },
  {
    id: 'copd',
    name: 'COPD',
    category: 'Pulmonology',
    description: 'Chronic obstructive pulmonary disease, a progressive lung disease characterized by persistent respiratory symptoms and airflow limitation due to airway and alveolar abnormalities.',
    icon: 'pulmonology',
    severity: 'Chronic',
    symptoms: ['Chronic cough', 'Sputum production', 'Dyspnea on exertion', 'Wheezing'],
    diagnosticMarkers: ['Spirometry (FEV1/FVC < 0.7)', 'Chest X-ray'],
    treatmentProtocols: [
      { step: 1, action: 'Smoking cessation + bronchodilator (Ipratropium 2 puffs TDS)', drug: 'Ipratropium', dose: '2 puffs', route: 'Inhalation', note: 'First-line bronchodilator' },
      { step: 2, action: 'Tiotropium 18 mcg OD inhaler', drug: 'Tiotropium', dose: '18 mcg', route: 'Inhalation', note: 'Long-acting anticholinergic' },
      { step: 3, action: 'Inhaled corticosteroids for exacerbations', drug: 'ICS', dose: 'As per product', route: 'Inhalation', note: 'Add for frequent exacerbations' },
      { step: 4, action: 'Antibiotics for acute exacerbations', drug: 'Antibiotics', dose: 'As per guideline', route: 'PO', note: 'For infectious exacerbations' },
      { step: 5, action: 'Vaccines (Influenza, Pneumococcal)', drug: 'Vaccines', dose: 'Standard', route: 'IM', note: 'Annual influenza + pneumococcal' }
    ],
    maintenanceTherapy: [
      { drug: 'Tiotropium', dose: '18 mcg', frequency: 'OD', duration: 'Long-term' },
      { drug: 'Salbutamol Inhaler', dose: '100-200 mcg', frequency: 'PRN', duration: 'As needed' }
    ],
    relevantDrugs: ['salbutamol', 'ipratropium', 'tiotropium', 'fluticasone', 'prednisolone']
  },
  {
    id: 'pulmonary-hypertension',
    name: 'Pulmonary Hypertension',
    category: 'Pulmonology',
    description: 'Elevated pulmonary artery pressure due to various causes, leading to right ventricular strain and eventual heart failure.',
    icon: 'pulmonology',
    severity: 'Chronic',
    symptoms: ['Dyspnea', 'Fatigue', 'Chest pain', 'Syncope', 'Peripheral edema'],
    diagnosticMarkers: ['Echocardiography', 'Right heart catheterization', 'BNP'],
    treatmentProtocols: [
      { step: 1, action: 'Bosentan 62.5-125 mg BD', drug: 'Bosentan', dose: '62.5-125 mg', route: 'PO', note: 'Endothelin receptor antagonist' },
      { step: 2, action: 'Sildenafil 20 mg TDS', drug: 'Sildenafil', dose: '20 mg', route: 'PO', note: 'PDE5 inhibitor' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['sildenafil']
  },
  {
    id: 'gerd-dyspepsia',
    name: 'GERD / Dyspepsia',
    category: 'Gastroenterology',
    description: 'Gastroesophageal reflux disease with or without dyspepsia, characterized by reflux of gastric contents into the esophagus causing symptoms and mucosal damage.',
    icon: 'gastroenterology',
    severity: 'Chronic',
    symptoms: ['Heartburn', 'Regurgitation', 'Epigastric pain', 'Bloating'],
    diagnosticMarkers: ['Upper GI endoscopy', 'Clinical diagnosis'],
    treatmentProtocols: [
      { step: 1, action: 'Omeprazole 20-40 mg OD 30 min before breakfast', drug: 'Omeprazole', dose: '20-40 mg', route: 'PO', note: 'PPI first-line' },
      { step: 2, action: 'Antacid (Diex-MP 2 tsp TDS) SOS', drug: 'Antacid', dose: '2 tsp', route: 'PO', note: 'For breakthrough symptoms' }
    ],
    maintenanceTherapy: [
      { drug: 'Omeprazole', dose: '20 mg', frequency: 'OD', duration: '4-8 weeks' },
      { drug: 'Famotidine', dose: '20-40 mg', frequency: 'BD', duration: '4-8 weeks' }
    ],
    relevantDrugs: ['omeprazole', 'pantoprazole', 'esomeprazole', 'famotidine']
  },
  {
    id: 'antiemetic-therapy',
    name: 'Antiemetic Therapy',
    category: 'Gastroenterology',
    description: 'Pharmacologic management of nausea and vomiting using antiemetic agents targeting different receptor pathways.',
    icon: 'gastroenterology',
    severity: 'Acute',
    symptoms: ['Nausea', 'Vomiting', 'Retching'],
    diagnosticMarkers: ['Clinical assessment', 'Electrolyte panel'],
    treatmentProtocols: [
      { step: 1, action: 'Ondansetron 8 mg IV/PO TDS', drug: 'Ondansetron', dose: '8 mg', route: 'IV/PO', note: '5-HT3 antagonist' },
      { step: 2, action: 'Metoclopramide 10 mg IM/IV TDS', drug: 'Metoclopramide', dose: '10 mg', route: 'IM/IV', note: 'Prokinetic antiemetic' },
      { step: 3, action: 'Domperidone 10 mg PO TDS', drug: 'Domperidone', dose: '10 mg', route: 'PO', note: 'Peripheral dopamine antagonist' },
      { step: 4, action: 'Promethazine 25 mg IM SOS', drug: 'Promethazine', dose: '25 mg', route: 'IM', note: 'Antihistamine antiemetic' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['metoclopramide']
  },
  {
    id: 'constipation',
    name: 'Constipation',
    category: 'Gastroenterology',
    description: 'Infrequent bowel movements (less than 3 per week) with hard, dry stools and excessive straining during defecation.',
    icon: 'gastroenterology',
    severity: 'Chronic',
    symptoms: ['Infrequent bowel movements', 'Hard stools', 'Straining'],
    diagnosticMarkers: ['Clinical assessment'],
    treatmentProtocols: [
      { step: 1, action: 'Lactulose 15-30 mL OD-BD', drug: 'Lactulose', dose: '15-30 mL', route: 'PO', note: 'Osmotic laxative' },
      { step: 2, action: 'Sodium Picosulphate 5-10 mg HS', drug: 'Sodium Picosulphate', dose: '5-10 mg', route: 'PO', note: 'Stimulant laxative' }
    ],
    maintenanceTherapy: [
      { drug: 'Lactulose', dose: '15-30 mL', frequency: 'OD', duration: 'As needed' }
    ],
    relevantDrugs: []
  },
  {
    id: 'acute-diarrhea-adult',
    name: 'Diarrhea (Adult)',
    category: 'Gastroenterology',
    description: 'Acute onset of loose or watery stools in adults, most commonly due to infectious gastroenteritis. Management focuses on symptom control and hydration.',
    icon: 'water_drop',
    severity: 'Acute',
    symptoms: ['Loose/watery stools', 'Abdominal cramps'],
    diagnosticMarkers: ['Stool examination'],
    treatmentProtocols: [
      { step: 1, action: 'Loperamide 4 mg initially then 2 mg after each loose stool (max 8/day)', drug: 'Loperamide', dose: '4 mg then 2 mg', route: 'PO', note: 'Antimotility agent' },
      { step: 2, action: 'Saccharomyces boulardii 1 sachet BD', drug: 'Saccharomyces boulardii', dose: '1 sachet', route: 'PO', note: 'Probiotic' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: []
  },
  {
    id: 'benign-prostatic-hyperplasia',
    name: 'Benign Prostatic Hyperplasia',
    category: 'Urology',
    description: 'Non-malignant enlargement of the prostate gland causing lower urinary tract symptoms due to bladder outlet obstruction.',
    icon: 'urology',
    severity: 'Chronic',
    symptoms: ['Urinary frequency', 'Urgency', 'Hesitancy', 'Weak stream', 'Nocturia'],
    diagnosticMarkers: ['DRE', 'PSA', 'Ultrasound', 'Uroflowmetry'],
    treatmentProtocols: [
      { step: 1, action: 'Tamsulosin 0.4 mg HS', drug: 'Tamsulosin', dose: '0.4 mg', route: 'PO', note: 'Alpha-blocker' },
      { step: 2, action: 'Tamsulosin + Dutasteride 0.4+0.5 mg HS', drug: 'Tamsulosin + Dutasteride', dose: '0.4+0.5 mg', route: 'PO', note: 'Combination therapy' },
      { step: 3, action: 'Doxazosin 2-4 mg OD', drug: 'Doxazosin', dose: '2-4 mg', route: 'PO', note: 'Alternative alpha-blocker' }
    ],
    maintenanceTherapy: [
      { drug: 'Tamsulosin', dose: '0.4 mg', frequency: 'HS', duration: 'Long-term' }
    ],
    relevantDrugs: ['tamsulosin', 'doxazosin']
  },
  {
    id: 'overactive-bladder',
    name: 'Overactive Bladder',
    category: 'Urology',
    description: 'A syndrome characterized by urinary urgency, usually with frequency and nocturia, with or without urge incontinence, in the absence of urinary tract infection.',
    icon: 'urology',
    severity: 'Chronic',
    symptoms: ['Urinary urgency', 'Frequency', 'Urge incontinence'],
    diagnosticMarkers: ['Urinalysis', 'Urodynamic studies'],
    treatmentProtocols: [
      { step: 1, action: 'Solifenacin 5 mg HS', drug: 'Solifenacin', dose: '5 mg', route: 'PO', note: 'Antimuscarinic' },
      { step: 2, action: 'Tolterodine 2 mg BD', drug: 'Tolterodine', dose: '2 mg', route: 'PO', note: 'Alternative antimuscarinic' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: []
  },
  {
    id: 'chronic-kidney-disease',
    name: 'Chronic Kidney Disease',
    category: 'Nephrology',
    description: 'Progressive loss of kidney function over months to years, leading to accumulation of waste products and metabolic disturbances.',
    icon: 'nephrology',
    severity: 'Chronic',
    symptoms: ['Fatigue', 'Edema', 'Decreased urine output', 'Pruritus'],
    diagnosticMarkers: ['Serum creatinine', 'eGFR', 'BUN', 'Urinalysis', 'Electrolytes'],
    treatmentProtocols: [
      { step: 1, action: 'Furosemide 40 mg (2+2+0)', drug: 'Furosemide', dose: '40 mg', route: 'PO', note: 'Loop diuretic for edema' },
      { step: 2, action: 'Calcium Acetate 667 mg TDS', drug: 'Calcium Acetate', dose: '667 mg', route: 'PO', note: 'Phosphate binder' },
      { step: 3, action: 'Alfacalcidol 0.5 mcg alternate days', drug: 'Alfacalcidol', dose: '0.5 mcg', route: 'PO', note: 'Active vitamin D analogue' },
      { step: 4, action: 'Erythropoietin 4000 IU twice weekly', drug: 'Erythropoietin', dose: '4000 IU', route: 'SC', note: 'For anemia of CKD' }
    ],
    maintenanceTherapy: [
      { drug: 'Furosemide', drugId: 'furosemide', dose: '20-80 mg', frequency: 'OD', duration: 'As needed' }
    ],
    relevantDrugs: ['furosemide']
  },
  {
    id: 'vaginal-candidiasis',
    name: 'Vaginal Candidiasis',
    category: 'Infectious Disease',
    description: 'A common fungal infection of the vagina caused by Candida species, most commonly Candida albicans, characterized by itching, burning, and thick white discharge.',
    icon: 'local_hospital',
    severity: 'Acute',
    symptoms: ['Vaginal itching', 'Burning', 'Thick white discharge', 'Dyspareunia'],
    diagnosticMarkers: ['Wet mount (yeast hyphae/pseudohyphae)', 'KOH preparation'],
    treatmentProtocols: [
      { step: 1, action: 'Clotrimazole 1% cream LA HS for 1-2 weeks', drug: 'Clotrimazole', dose: '1% LA', route: 'Topical', note: 'Topical azole' },
      { step: 2, action: 'Fluconazole 150 mg PO once', drug: 'Fluconazole', dose: '150 mg', route: 'PO', note: 'Single oral dose' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['fluconazole']
  },
  {
    id: 'bacterial-vaginosis',
    name: 'Bacterial Vaginosis',
    category: 'Infectious Disease',
    description: 'A dysbiosis of the vaginal microbiota characterized by replacement of lactobacilli with anaerobic bacteria, causing thin gray discharge with fishy odor.',
    icon: 'local_hospital',
    severity: 'Acute',
    symptoms: ['Thin gray vaginal discharge', 'Fishy odor', 'No itching'],
    diagnosticMarkers: ['Amsel criteria', 'Clue cells on wet mount'],
    treatmentProtocols: [
      { step: 1, action: 'Metronidazole 400 mg BD for 7 days', drug: 'Metronidazole', dose: '400 mg', route: 'PO', note: 'Oral metronidazole' },
      { step: 2, action: 'Metronidazole 0.75% gel LA HS for 5 days', drug: 'Metronidazole Gel', dose: '0.75% LA', route: 'Topical', note: 'Topical alternative' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['metronidazole']
  },
  {
    id: 'trichomoniasis',
    name: 'Trichomoniasis',
    category: 'Infectious Disease',
    description: 'A sexually transmitted infection caused by the protozoan Trichomonas vaginalis, presenting with frothy yellow-green discharge and vaginal itching.',
    icon: 'local_hospital',
    severity: 'Acute',
    symptoms: ['Frothy yellow-green discharge', 'Vaginal itching', 'Dysuria'],
    diagnosticMarkers: ['Wet mount (motile trichomonads)'],
    treatmentProtocols: [
      { step: 1, action: 'Metronidazole 400 mg BD for 7 days OR 2 g single dose', drug: 'Metronidazole', dose: '400 mg BD or 2 g stat', route: 'PO', note: 'Nitroimidazole therapy' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['metronidazole']
  },
  {
    id: 'chlamydia-cervicitis',
    name: 'Chlamydia',
    category: 'Infectious Disease',
    description: 'A sexually transmitted infection caused by Chlamydia trachomatis, often asymptomatic but can cause mucopurulent cervicitis and pelvic inflammatory disease.',
    icon: 'local_hospital',
    severity: 'Acute',
    symptoms: ['Mucopurulent discharge', 'Dysuria', 'Intermenstrual bleeding (often asymptomatic)'],
    diagnosticMarkers: ['NAAT (PCR) for Chlamydia trachomatis'],
    treatmentProtocols: [
      { step: 1, action: 'Doxycycline 100 mg BD for 7 days', drug: 'Doxycycline', dose: '100 mg', route: 'PO', note: 'First-line therapy' },
      { step: 2, action: 'Azithromycin 1 g PO once (pregnancy)', drug: 'Azithromycin', dose: '1 g', route: 'PO', note: 'Alternative in pregnancy' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['doxycycline', 'azithromycin']
  },
  {
    id: 'gonorrhea-cervicitis',
    name: 'Gonorrhea',
    category: 'Infectious Disease',
    description: 'A sexually transmitted infection caused by Neisseria gonorrhoeae, presenting with purulent discharge and dysuria.',
    icon: 'local_hospital',
    severity: 'Acute',
    symptoms: ['Purulent discharge', 'Dysuria', 'Vaginal bleeding'],
    diagnosticMarkers: ['Gram stain (GN diplococci)', 'NAAT (PCR)'],
    treatmentProtocols: [
      { step: 1, action: 'Ceftriaxone 250 mg IM once', drug: 'Ceftriaxone', dose: '250 mg', route: 'IM', note: 'First-line therapy' },
      { step: 2, action: 'Ciprofloxacin 250-500 mg BD for 1-2 weeks (alternative)', drug: 'Ciprofloxacin', dose: '250-500 mg', route: 'PO', note: 'Alternative if sensitive' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['ceftriaxone', 'ciprofloxacin']
  },
  {
    id: 'pelvic-inflammatory-disease',
    name: 'Pelvic Inflammatory Disease',
    category: 'Infectious Disease',
    description: 'Infection and inflammation of the upper female genital tract, including endometritis, salpingitis, and tubo-ovarian abscess, often polymicrobial.',
    icon: 'local_hospital',
    severity: 'Acute',
    symptoms: ['Lower abdominal pain', 'Cervical motion tenderness', 'Fever', 'Abnormal discharge'],
    diagnosticMarkers: ['Clinical diagnosis', 'Endocervical swab', 'Ultrasound', 'CRP'],
    treatmentProtocols: [
      { step: 1, action: 'Ceftriaxone 250 mg IM once + Metronidazole 400 mg BD + Doxycycline 100 mg BD x 14 days', drug: 'Ceftriaxone + Metronidazole + Doxycycline', dose: 'As per regimen', route: 'IM + PO', note: 'Triple regimen' },
      { step: 2, action: 'Metronidazole 400 mg BD + Ofloxacin 400 mg BD x 14 days', drug: 'Metronidazole + Ofloxacin', dose: '400 mg + 400 mg', route: 'PO', note: 'Alternative dual regimen' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['ceftriaxone', 'metronidazole', 'doxycycline', 'ofloxacin']
  },
  {
    id: 'syphilis',
    name: 'Syphilis',
    category: 'Infectious Disease',
    description: 'A sexually transmitted infection caused by Treponema pallidum, progressing through primary (chancre), secondary (rash), and tertiary stages if untreated.',
    icon: 'local_hospital',
    severity: 'Chronic',
    symptoms: ['Painless chancre (primary)', 'Rash', 'Fever', 'Lymphadenopathy (secondary)'],
    diagnosticMarkers: ['VDRL/RPR', 'TPHA/FTA-ABS'],
    treatmentProtocols: [
      { step: 1, action: 'Benzathine Penicillin G 2.4 million IU IM once (early)', drug: 'Benzathine Penicillin G', dose: '2.4 million IU', route: 'IM', note: 'Early syphilis' },
      { step: 2, action: 'Benzathine Penicillin G 2.4 million IU weekly x 3 weeks (late/neurosyphilis)', drug: 'Benzathine Penicillin G', dose: '2.4 million IU weekly', route: 'IM', note: 'Late/latent syphilis' },
      { step: 3, action: 'Doxycycline 100 mg BD for 2-4 weeks (penicillin allergy)', drug: 'Doxycycline', dose: '100 mg', route: 'PO', note: 'Penicillin allergy alternative' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: []
  },
  {
    id: 'hypothyroidism',
    name: 'Hypothyroidism',
    category: 'Endocrinology',
    description: 'A condition resulting from insufficient production of thyroid hormones, leading to a generalized slowing of metabolic processes.',
    icon: 'biotech',
    severity: 'Chronic',
    symptoms: ['Fatigue', 'Weight gain', 'Cold intolerance', 'Constipation', 'Dry skin', 'Depression'],
    diagnosticMarkers: ['TSH elevated', 'Free T4 decreased'],
    treatmentProtocols: [
      { step: 1, action: 'Levothyroxine 25-50 mcg OD initially. Start 1/2 tab x 2 weeks then increase to 1-3 tabs maintenance (1 tab = 50 mcg)', drug: 'Levothyroxine', dose: '25-150 mcg', route: 'PO', note: 'Start low, titrate gradually' }
    ],
    maintenanceTherapy: [
      { drug: 'Levothyroxine', dose: '50-150 mcg', frequency: 'OD', duration: 'Lifelong' }
    ],
    relevantDrugs: ['levothyroxine']
  },
  {
    id: 'hyperthyroidism',
    name: 'Hyperthyroidism / Graves Disease',
    category: 'Endocrinology',
    description: 'A condition resulting from excessive production of thyroid hormones, most commonly due to Graves disease, an autoimmune disorder.',
    icon: 'biotech',
    severity: 'Chronic',
    symptoms: ['Weight loss', 'Palpitations', 'Heat intolerance', 'Tremor', 'Exophthalmos'],
    diagnosticMarkers: ['TSH suppressed', 'Free T4/T3 elevated', 'TRAb antibodies'],
    treatmentProtocols: [
      { step: 1, action: 'Methimazole 5-60 mg/day depending on severity', drug: 'Methimazole', dose: '5-60 mg', route: 'PO', note: 'Thionamide therapy' },
      { step: 2, action: 'Propylthiouracil 50-150 mg TDS (DOC in pregnancy)', drug: 'Propylthiouracil', dose: '50-150 mg', route: 'PO', note: 'Preferred in pregnancy' }
    ],
    maintenanceTherapy: [
      { drug: 'Methimazole', dose: '5-30 mg', frequency: 'OD', duration: '12 months' }
    ],
    relevantDrugs: ['methimazole', 'propylthiouracil', 'propranolol']
  },
  {
    id: 'acne-vulgaris',
    name: 'Acne Vulgaris',
    category: 'Dermatology',
    description: 'A chronic inflammatory condition of pilosebaceous units, characterized by comedones, papules, pustules, nodules, and cysts, primarily on the face.',
    icon: 'dermatology',
    severity: 'Chronic',
    symptoms: ['Comedones', 'Papules', 'Pustules', 'Nodules', 'Cysts on face/chest/back'],
    diagnosticMarkers: ['Clinical assessment'],
    treatmentProtocols: [
      { step: 1, action: 'Benzoyl peroxide cream LA BD + Clindamycin gel LA BD (mild)', drug: 'Benzoyl Peroxide + Clindamycin', dose: 'Apply BD', route: 'Topical', note: 'Mild acne' },
      { step: 2, action: 'Doxycycline 100 mg BD then OD x 3 months (moderate)', drug: 'Doxycycline', dose: '100 mg', route: 'PO', note: 'Moderate acne' },
      { step: 3, action: 'Isotretinoin (severe/cystic)', drug: 'Isotretinoin', dose: 'Weight-based', route: 'PO', note: 'Severe/cystic acne - requires monitoring' },
      { step: 4, action: 'Tretinoin cream LA HS', drug: 'Tretinoin', dose: 'Apply HS', route: 'Topical', note: 'Topical retinoid' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['doxycycline', 'isotretinoin', 'tretinoin']
  },
  {
    id: 'melasma',
    name: 'Melasma',
    category: 'Dermatology',
    description: 'A common acquired hypermelanosis presenting as symmetric brown patches on sun-exposed areas of the face, often triggered by hormonal changes and UV exposure.',
    icon: 'dermatology',
    severity: 'Chronic',
    symptoms: ['Brown/gray-brown patches on face (cheeks, forehead, upper lip)'],
    diagnosticMarkers: ['Wood lamp examination', 'Clinical diagnosis'],
    treatmentProtocols: [
      { step: 1, action: 'Sunblock SPF 50+ LA daytime', drug: 'Sunblock', dose: 'Apply daytime', route: 'Topical', note: 'Sun protection essential' },
      { step: 2, action: 'Hydroquinone + Glycolic acid cream LA TDS x 30 days', drug: 'Hydroquinone + Glycolic Acid', dose: 'Apply TDS', route: 'Topical', note: 'Depigmenting agent' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: []
  },
  {
    id: 'scabies',
    name: 'Scabies',
    category: 'Dermatology',
    description: 'A contagious skin infestation caused by the mite Sarcoptes scabiei, characterized by intense itching, especially at night, and characteristic burrows.',
    icon: 'dermatology',
    severity: 'Acute',
    symptoms: ['Intense itching (worse at night)', 'Burrows in web spaces', 'Papules'],
    diagnosticMarkers: ['Clinical exam', 'Microscopic scraping (mites/eggs)'],
    treatmentProtocols: [
      { step: 1, action: 'Permethrin 5% cream LA once for 24 hrs', drug: 'Permethrin', dose: '5% cream', route: 'Topical', note: 'Apply from neck down, wash off after 24 hrs' },
      { step: 2, action: 'Loratadine 10 mg HS for night itching', drug: 'Loratadine', dose: '10 mg', route: 'PO', note: 'For symptom relief' },
      { step: 3, action: 'Ivermectin 3 mg x 3 PO weekly x 2 weeks (crusted scabies)', drug: 'Ivermectin', dose: '3 mg', route: 'PO', note: 'For crusted scabies' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['loratadine', 'ivermectin']
  },
  {
    id: 'tinea-dermatophytosis',
    name: 'Tinea / Dermatophytosis',
    category: 'Dermatology',
    description: 'Superficial fungal infection of the skin, hair, or nails caused by dermatophytes, presenting as ring-shaped scaly patches with central clearing.',
    icon: 'dermatology',
    severity: 'Chronic',
    symptoms: ['Ring-shaped erythematous scaly patches', 'Itching'],
    diagnosticMarkers: ['KOH mount (hyphae)', 'Wood lamp'],
    treatmentProtocols: [
      { step: 1, action: 'Terbinafine 1% cream LA BD x 2 weeks', drug: 'Terbinafine', dose: '1% cream', route: 'Topical', note: 'Topical antifungal' },
      { step: 2, action: 'Clotrimazole 1% cream LA BD', drug: 'Clotrimazole', dose: '1% cream', route: 'Topical', note: 'Alternative topical' },
      { step: 3, action: 'Terbinafine 250 mg OD x 2 weeks (extensive)', drug: 'Terbinafine', dose: '250 mg', route: 'PO', note: 'Oral for extensive disease' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['terbinafine', 'fluconazole', 'clotrimazole', 'ketoconazole']
  },
  {
    id: 'seborrheic-dermatitis',
    name: 'Seborrheic Dermatitis',
    category: 'Dermatology',
    description: 'A chronic inflammatory skin condition affecting areas rich in sebaceous glands, presenting as scaly red patches on the scalp, face, and chest.',
    icon: 'dermatology',
    severity: 'Chronic',
    symptoms: ['Scaly red patches on scalp, face, chest', 'Dandruff'],
    diagnosticMarkers: ['Clinical diagnosis'],
    treatmentProtocols: [
      { step: 1, action: 'Ketoconazole 2% shampoo twice weekly', drug: 'Ketoconazole Shampoo', dose: 'Apply twice weekly', route: 'Topical', note: 'Antifungal shampoo' },
      { step: 2, action: 'Topical steroid lotion LA BD', drug: 'Topical Steroid', dose: 'Apply BD', route: 'Topical', note: 'Anti-inflammatory' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['ketoconazole']
  },
  {
    id: 'cutaneous-leishmaniasis',
    name: 'Cutaneous Leishmaniasis',
    category: 'Dermatology',
    description: 'A parasitic infection of the skin caused by Leishmania species, transmitted by sandfly bite, presenting as non-healing ulcers with raised borders.',
    icon: 'dermatology',
    severity: 'Chronic',
    symptoms: ['Non-healing ulcer with raised border', 'Usually on exposed body parts'],
    diagnosticMarkers: ['Slit skin smear (LD bodies)', 'PCR'],
    treatmentProtocols: [
      { step: 1, action: 'Sodium Stibogluconate SC twice weekly (4 quadrants around lesion)', drug: 'Sodium Stibogluconate', dose: 'Weight-based', route: 'SC', note: 'Intralesional therapy' },
      { step: 2, action: 'Rifampicin 200 mg OD + Allopurinol 300 mg OD', drug: 'Rifampicin + Allopurinol', dose: '200 mg + 300 mg', route: 'PO', note: 'Oral combination therapy' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['rifampicin', 'allopurinol']
  },
  {
    id: 'pruritus',
    name: 'Pruritus',
    category: 'Dermatology',
    description: 'Generalized itching without primary skin lesions, often due to underlying systemic conditions such as liver disease, kidney failure, or hematologic disorders.',
    icon: 'dermatology',
    severity: 'Chronic',
    symptoms: ['Generalized itching without primary skin lesions'],
    diagnosticMarkers: ['Clinical assessment', 'Exclude systemic causes'],
    treatmentProtocols: [
      { step: 1, action: 'Calamine lotion LA SOS + Oral antihistamine (Loratadine 10 mg OD)', drug: 'Calamine + Antihistamine', dose: 'Apply SOS + 10 mg', route: 'Topical + PO', note: 'First-line symptomatic relief' },
      { step: 2, action: 'Hydroxyzine 25 mg HS (severe night itching)', drug: 'Hydroxyzine', dose: '25 mg', route: 'PO', note: 'Sedating antihistamine' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['loratadine', 'cetirizine', 'hydroxyzine']
  },
  {
    id: 'eczema-atopic-dermatitis',
    name: 'Eczema / Atopic Dermatitis',
    category: 'Dermatology',
    description: 'A chronic inflammatory skin condition characterized by dry, itchy, inflamed skin with flexural involvement, often associated with other atopic diseases.',
    icon: 'dermatology',
    severity: 'Chronic',
    symptoms: ['Dry, itchy, inflamed skin', 'Flexural involvement', 'Scratching'],
    diagnosticMarkers: ['Clinical diagnosis', 'IgE levels'],
    treatmentProtocols: [
      { step: 1, action: 'Emollients (Vaseline, Petroleum gel) LA TDS', drug: 'Emollients', dose: 'Apply TDS', route: 'Topical', note: 'Skin barrier maintenance' },
      { step: 2, action: 'Topical steroids by severity', drug: 'Topical Corticosteroid', dose: 'As per severity', route: 'Topical', note: 'Anti-inflammatory' },
      { step: 3, action: 'Tacrolimus 0.03% (2-15yr) or 0.1% (adults) LA TDS', drug: 'Tacrolimus', dose: '0.03-0.1%', route: 'Topical', note: 'Calcineurin inhibitor' },
      { step: 4, action: 'Methotrexate + Folic acid (severe)', drug: 'Methotrexate', dose: '7.5-15 mg/week', route: 'PO', note: 'Systemic therapy for severe disease' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['prednisolone', 'methotrexate']
  },
  {
    id: 'psoriasis',
    name: 'Psoriasis',
    category: 'Dermatology',
    description: 'A chronic immune-mediated inflammatory skin disease characterized by well-demarcated erythematous plaques with silvery scales.',
    icon: 'dermatology',
    severity: 'Chronic',
    symptoms: ['Well-demarcated erythematous plaques with silvery scales'],
    diagnosticMarkers: ['Clinical diagnosis', 'Skin biopsy'],
    treatmentProtocols: [
      { step: 1, action: 'Emollients LA TDS', drug: 'Emollients', dose: 'Apply TDS', route: 'Topical', note: 'Skin hydration' },
      { step: 2, action: 'Topical steroids (by severity)', drug: 'Topical Corticosteroid', dose: 'As per severity', route: 'Topical', note: 'Anti-inflammatory' },
      { step: 3, action: 'Vitamin D analogues', drug: 'Vitamin D analogue', dose: 'As per product', route: 'Topical', note: 'Regulates keratinocyte proliferation' },
      { step: 4, action: 'Phototherapy / Immunosuppression', drug: 'Phototherapy', dose: 'As per protocol', route: 'N/A', note: 'For moderate-severe disease' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['methotrexate', 'prednisolone']
  },
  {
    id: 'anxiety-disorders',
    name: 'Anxiety Disorders',
    category: 'Psychiatry',
    description: 'A group of mental health disorders characterized by excessive worry, fear, and related behavioral disturbances that significantly impair daily functioning.',
    icon: 'psychiatry',
    severity: 'Chronic',
    symptoms: ['Excessive worry', 'Restlessness', 'Fatigue', 'Muscle tension', 'Sleep disturbance'],
    diagnosticMarkers: ['Clinical assessment', 'GAD-7 scale'],
    treatmentProtocols: [
      { step: 1, action: 'Diazepam 5-10 mg HS-insomnia, BD-anxiety', drug: 'Diazepam', dose: '5-10 mg', route: 'PO', note: 'Benzodiazepine' },
      { step: 2, action: 'Lorazepam 1-2 mg HS-insomnia, BD-anxiety', drug: 'Lorazepam', dose: '1-2 mg', route: 'PO', note: 'Intermediate-acting BZD' },
      { step: 3, action: 'Bromazepam 3-6 mg HS-insomnia, BD-anxiety', drug: 'Bromazepam', dose: '3-6 mg', route: 'PO', note: 'Alternative BZD' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['diazepam', 'lorazepam', 'midazolam']
  },
  {
    id: 'chronic-epilepsy',
    name: 'Chronic Epilepsy',
    category: 'Neurology',
    description: 'A chronic neurological disorder characterized by recurrent unprovoked seizures due to abnormal electrical activity in the brain.',
    icon: 'bolt',
    severity: 'Chronic',
    symptoms: ['Recurrent unprovoked seizures'],
    diagnosticMarkers: ['EEG', 'MRI brain', 'Clinical history'],
    treatmentProtocols: [
      { step: 1, action: 'Levetiracetam 500 mg BD', drug: 'Levetiracetam', dose: '500 mg', route: 'PO', note: 'First-line broad-spectrum AED' },
      { step: 2, action: 'Carbamazepine 200 mg BD (increase weekly to TDS/QID)', drug: 'Carbamazepine', dose: '200 mg', route: 'PO', note: 'For focal seizures' },
      { step: 3, action: 'Topiramate 25-50 mg BD', drug: 'Topiramate', dose: '25-50 mg', route: 'PO', note: 'Add-on therapy' }
    ],
    maintenanceTherapy: [
      { drug: 'Levetiracetam', dose: '1000-3000 mg', frequency: 'BD', duration: 'Long-term' }
    ],
    relevantDrugs: ['levetiracetam', 'carbamazepine', 'phenytoin', 'sodium-valproate', 'topiramate', 'lamotrigine']
  },
  {
    id: 'vertigo-menieres',
    name: 'Vertigo / Menieres',
    category: 'Neurology',
    description: 'A sensation of spinning or rotational dizziness, often associated with vestibular disorders including Meniere disease (endolymphatic hydrops).',
    icon: 'bolt',
    severity: 'Acute',
    symptoms: ['Spinning sensation', 'Nausea/vomiting', 'Imbalance', 'Nystagmus'],
    diagnosticMarkers: ['Clinical assessment', 'Audiometry', 'Caloric testing'],
    treatmentProtocols: [
      { step: 1, action: 'Prochlorperazine 5 mg 1-2 TDS', drug: 'Prochlorperazine', dose: '5 mg', route: 'PO', note: 'Antiemetic/antivertigo' },
      { step: 2, action: 'Betahistine 8-16 mg BD', drug: 'Betahistine', dose: '8-16 mg', route: 'PO', note: 'Improves vestibular microcirculation' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['betahistine', 'prochlorperazine']
  },
  {
    id: 'parkinsonism',
    name: 'Parkinsonism',
    category: 'Neurology',
    description: 'A progressive neurodegenerative disorder characterized by tremor, rigidity, bradykinesia, and postural instability due to dopamine deficiency in the basal ganglia.',
    icon: 'accessibility_new',
    severity: 'Chronic',
    symptoms: ['Tremor', 'Rigidity', 'Bradykinesia', 'Postural instability'],
    diagnosticMarkers: ['Clinical diagnosis', 'DAT scan'],
    treatmentProtocols: [
      { step: 1, action: 'Carbidopa/Levodopa 25/250 mg 1 TDS', drug: 'Carbidopa/Levodopa', dose: '25/250 mg', route: 'PO', note: 'Gold standard therapy' },
      { step: 2, action: 'Procyclidine 5 mg BD', drug: 'Procyclidine', dose: '5 mg', route: 'PO', note: 'Anticholinergic' },
      { step: 3, action: 'Ropinirole 1 mg BD', drug: 'Ropinirole', dose: '1 mg', route: 'PO', note: 'Dopamine agonist' },
      { step: 4, action: 'Amantadine 100 mg OD initially, max 400 mg/day', drug: 'Amantadine', dose: '100-400 mg', route: 'PO', note: 'Antiviral with antiparkinsonian effects' }
    ],
    maintenanceTherapy: [
      { drug: 'Carbidopa/Levodopa', dose: '25/250 mg TDS', frequency: 'TDS', duration: 'Lifelong' }
    ],
    relevantDrugs: []
  },
  {
    id: 'multiple-sclerosis',
    name: 'Multiple Sclerosis',
    category: 'Neurology',
    description: 'A chronic autoimmune demyelinating disease of the central nervous system, leading to progressive neurological disability over time.',
    icon: 'bolt',
    severity: 'Chronic',
    symptoms: ['Fatigue', 'Visual disturbance', 'Weakness', 'Numbness', 'Ataxia'],
    diagnosticMarkers: ['MRI brain/spine', 'CSF oligoclonal bands', 'Evoked potentials'],
    treatmentProtocols: [
      { step: 1, action: 'Azathioprine 50 mg TDS', drug: 'Azathioprine', dose: '50 mg', route: 'PO', note: 'Immunosuppressant' },
      { step: 2, action: 'Imipramine 25 mg BD (for depression)', drug: 'Imipramine', dose: '25 mg', route: 'PO', note: 'For associated depression' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['azathioprine', 'imipramine']
  },
  {
    id: 'insomnia',
    name: 'Insomnia',
    category: 'Psychiatry',
    description: 'A sleep disorder characterized by difficulty falling asleep, staying asleep, or early morning awakening, with impairment of daytime function.',
    icon: 'psychiatry',
    severity: 'Chronic',
    symptoms: ['Difficulty falling/staying asleep', 'Early morning awakening', 'Daytime fatigue'],
    diagnosticMarkers: ['Clinical assessment', 'Sleep diary'],
    treatmentProtocols: [
      { step: 1, action: 'Melatonin 2 mg HS', drug: 'Melatonin', dose: '2 mg', route: 'PO', note: 'Sleep-regulating hormone' },
      { step: 2, action: 'Alprazolam 0.25-0.5 mg HS (max 5 days)', drug: 'Alprazolam', dose: '0.25-0.5 mg', route: 'PO', note: 'Short-term use only' },
      { step: 3, action: 'Zolpidem 10 mg HS', drug: 'Zolpidem', dose: '10 mg', route: 'PO', note: 'Non-benzodiazepine hypnotic' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['diazepam', 'lorazepam', 'midazolam']
  },
  {
    id: 'depression',
    name: 'Depression',
    category: 'Psychiatry',
    description: 'A common mental health disorder characterized by persistent low mood, anhedonia, and loss of interest in activities, with significant functional impairment.',
    icon: 'psychiatry',
    severity: 'Chronic',
    symptoms: ['Low mood', 'Anhedonia', 'Sleep/appetite changes', 'Fatigue', 'Poor concentration'],
    diagnosticMarkers: ['PHQ-9', 'Clinical assessment'],
    treatmentProtocols: [
      { step: 1, action: 'Escitalopram 10-20 mg OD (SSRI)', drug: 'Escitalopram', dose: '10-20 mg', route: 'PO', note: 'First-line SSRI' },
      { step: 2, action: 'Sertraline 50-100 mg OD (safe in IHD)', drug: 'Sertraline', dose: '50-100 mg', route: 'PO', note: 'Preferred in cardiac patients' },
      { step: 3, action: 'Fluoxetine 20-80 mg OD', drug: 'Fluoxetine', dose: '20-80 mg', route: 'PO', note: 'SSRI with long half-life' },
      { step: 4, action: 'Mirtazapine 30 mg OD (if depression + anorexia)', drug: 'Mirtazapine', dose: '30 mg', route: 'PO', note: 'NaSSA with appetite stimulation' },
      { step: 5, action: 'Duloxetine 30-60 mg OD (SNRI)', drug: 'Duloxetine', dose: '30-60 mg', route: 'PO', note: 'SNRI for associated pain' }
    ],
    maintenanceTherapy: [
      { drug: 'Escitalopram', dose: '10-20 mg', frequency: 'OD', duration: '6-12 months' }
    ],
    relevantDrugs: ['duloxetine', 'fluoxetine', 'sertraline', 'citalopram', 'venlafaxine', 'mirtazapine', 'amitriptyline']
  },
  {
    id: 'psychosis-schizophrenia',
    name: 'Psychosis / Schizophrenia',
    category: 'Psychiatry',
    description: 'A severe mental disorder characterized by delusions, hallucinations, disorganized speech, and negative symptoms, with significant impairment in functioning.',
    icon: 'psychiatry',
    severity: 'Chronic',
    symptoms: ['Delusions', 'Hallucinations', 'Disorganized speech', 'Negative symptoms'],
    diagnosticMarkers: ['Clinical assessment', 'PANSS scale'],
    treatmentProtocols: [
      { step: 1, action: 'Olanzapine 5-10 mg HS', drug: 'Olanzapine', dose: '5-10 mg', route: 'PO', note: 'Atypical antipsychotic' },
      { step: 2, action: 'Risperidone 3 mg HS', drug: 'Risperidone', dose: '3 mg', route: 'PO', note: 'Atypical antipsychotic' },
      { step: 3, action: 'Quetiapine 300 mg HS', drug: 'Quetiapine', dose: '300 mg', route: 'PO', note: 'Atypical antipsychotic' }
    ],
    maintenanceTherapy: [
      { drug: 'Olanzapine', dose: '5-20 mg', frequency: 'HS', duration: 'Long-term' }
    ],
    relevantDrugs: ['olanzapine', 'risperidone', 'quetiapine', 'haloperidol']
  },
  {
    id: 'bipolar-disorder',
    name: 'Bipolar Disorder',
    category: 'Psychiatry',
    description: 'A mood disorder characterized by alternating episodes of mania/hypomania and depression, with periods of normal mood between episodes.',
    icon: 'psychiatry',
    severity: 'Chronic',
    symptoms: ['Alternating episodes of mania/hypomania and depression'],
    diagnosticMarkers: ['Clinical assessment', 'MDQ'],
    treatmentProtocols: [
      { step: 1, action: 'Lithium Carbonate 400 mg BD', drug: 'Lithium Carbonate', dose: '400 mg', route: 'PO', note: 'Gold standard mood stabilizer' },
      { step: 2, action: 'Valproate 500-1000 mg/day (acute mania)', drug: 'Sodium Valproate', dose: '500-1000 mg', route: 'PO', note: 'For acute mania' },
      { step: 3, action: 'Olanzapine 10-20 mg HS (acute mania)', drug: 'Olanzapine', dose: '10-20 mg', route: 'PO', note: 'Atypical antipsychotic for mania' }
    ],
    maintenanceTherapy: [
      { drug: 'Lithium Carbonate', dose: '400-800 mg', frequency: 'BD', duration: 'Long-term' }
    ],
    relevantDrugs: ['lithium-carbonate', 'sodium-valproate', 'olanzapine', 'risperidone', 'quetiapine', 'carbamazepine', 'lamotrigine']
  },
  {
    id: 'allergic-rhinitis',
    name: 'Allergic Rhinitis',
    category: 'ENT',
    description: 'An allergic inflammation of the nasal mucosa triggered by inhaled allergens, causing sneezing, rhinorrhea, nasal congestion, and itchy eyes.',
    icon: 'ent',
    severity: 'Chronic',
    symptoms: ['Sneezing', 'Runny nose', 'Nasal congestion', 'Itchy eyes'],
    diagnosticMarkers: ['Clinical diagnosis', 'Allergy testing'],
    treatmentProtocols: [
      { step: 1, action: 'Beclomethasone nasal spray TDS', drug: 'Beclomethasone', dose: 'Spray TDS', route: 'Nasal', note: 'Intranasal corticosteroid' },
      { step: 2, action: 'Fexofenadine 120 mg BD', drug: 'Fexofenadine', dose: '120 mg', route: 'PO', note: 'Non-sedating antihistamine' },
      { step: 3, action: 'Xylometazoline nasal spray TDS (max 5 days)', drug: 'Xylometazoline', dose: 'Spray TDS', route: 'Nasal', note: 'Decongestant, short-term use only' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['loratadine', 'cetirizine', 'fexofenadine']
  },
  {
    id: 'oral-candidiasis',
    name: 'Oral Thrush / Candidiasis (Oral)',
    category: 'ENT',
    description: 'A fungal infection of the oral mucosa caused by Candida species, presenting as white patches on the tongue and oral mucosa.',
    icon: 'ent',
    severity: 'Acute',
    symptoms: ['White patches on oral mucosa', 'Soreness', 'Loss of taste'],
    diagnosticMarkers: ['Clinical exam', 'KOH mount'],
    treatmentProtocols: [
      { step: 1, action: 'Miconazole gel LA BD x 14 days', drug: 'Miconazole Gel', dose: 'Apply BD', route: 'Topical', note: 'Topical antifungal' },
      { step: 2, action: 'Fluconazole 50 mg OD x 7 days (severe)', drug: 'Fluconazole', dose: '50 mg', route: 'PO', note: 'Oral antifungal for severe cases' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['fluconazole', 'miconazole', 'clotrimazole', 'nystatin']
  },
  {
    id: 'bacterial-conjunctivitis',
    name: 'Bacterial Conjunctivitis',
    category: 'Ophthalmology',
    description: 'An acute bacterial infection of the conjunctiva presenting with red eye, purulent discharge, and foreign body sensation.',
    icon: 'ophthalmology',
    severity: 'Acute',
    symptoms: ['Red eye', 'Purulent discharge', 'Crusting', 'Foreign body sensation'],
    diagnosticMarkers: ['Clinical exam', 'Conjunctival swab'],
    treatmentProtocols: [
      { step: 1, action: 'Ofloxacin eye drops TDS', drug: 'Ofloxacin', dose: 'TDS', route: 'Eye Drops', note: 'Fluoroquinolone eye drops' },
      { step: 2, action: 'Tobramycin eye drops TDS or eye ointment HS', drug: 'Tobramycin', dose: 'TDS', route: 'Eye Drops', note: 'Aminoglycoside eye drops' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['ofloxacin', 'ciprofloxacin', 'moxifloxacin', 'tobramycin']
  },
  {
    id: 'dry-eye-syndrome',
    name: 'Dry Eye Syndrome',
    category: 'Ophthalmology',
    description: 'A multifactorial disease of the ocular surface characterized by loss of tear film homeostasis, causing discomfort, visual disturbance, and potential corneal damage.',
    icon: 'ophthalmology',
    severity: 'Chronic',
    symptoms: ['Dryness', 'Burning', 'Foreign body sensation', 'Blurred vision'],
    diagnosticMarkers: ['Schirmer test', 'Tear break-up time'],
    treatmentProtocols: [
      { step: 1, action: 'Artificial tears (Hydroxymethylcellulose) TDS', drug: 'Artificial Tears', dose: 'TDS', route: 'Eye Drops', note: 'Lubricating eye drops' },
      { step: 2, action: 'Polyvinyl Alcohol eye drops TDS', drug: 'Polyvinyl Alcohol', dose: 'TDS', route: 'Eye Drops', note: 'Alternative lubricant' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: []
  },
  {
    id: 'glaucoma',
    name: 'Glaucoma',
    category: 'Ophthalmology',
    description: 'A group of eye diseases characterized by progressive optic neuropathy, often associated with elevated intraocular pressure, leading to irreversible vision loss.',
    icon: 'ophthalmology',
    severity: 'Chronic',
    symptoms: ['Often asymptomatic early', 'Gradual vision loss', 'Tunnel vision'],
    diagnosticMarkers: ['IOP measurement', 'Fundoscopy', 'Visual field testing'],
    treatmentProtocols: [
      { step: 1, action: 'Timolol eye drops BD', drug: 'Timolol', dose: 'BD', route: 'Eye Drops', note: 'Beta-blocker eye drops' },
      { step: 2, action: 'Latanoprost eye drops HS', drug: 'Latanoprost', dose: 'HS', route: 'Eye Drops', note: 'Prostaglandin analogue' },
      { step: 3, action: 'Dorzolamide + Timolol BD', drug: 'Dorzolamide + Timolol', dose: 'BD', route: 'Eye Drops', note: 'Combination therapy' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['timolol', 'latanoprost', 'bimatoprost', 'brimonidine', 'dorzolamide']
  },
  {
    id: 'pediatric-fever',
    name: 'Pediatric Fever',
    category: 'Pediatrics',
    description: 'Elevated body temperature in children, typically defined as temperature > 38°C, requiring appropriate antipyretic therapy and identification of the underlying cause.',
    icon: 'thermometer',
    severity: 'Acute',
    symptoms: ['Temperature > 38°C', 'Irritability', 'Decreased appetite'],
    diagnosticMarkers: ['Temperature measurement', 'Clinical assessment'],
    treatmentProtocols: [
      { step: 1, action: 'Paracetamol 10-15 mg/kg TDS', drug: 'Paracetamol', dose: '10-15 mg/kg', route: 'PO', note: 'First-line antipyretic' },
      { step: 2, action: 'Ibuprofen 10 mg/kg TDS (children >3mo)', drug: 'Ibuprofen', dose: '10 mg/kg', route: 'PO', note: 'Alternative antipyretic' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['paracetamol', 'ibuprofen']
  },
  {
    id: 'pediatric-respiratory-distress',
    name: 'Pediatric Respiratory Distress',
    category: 'Pediatrics',
    description: 'Acute respiratory difficulty in children due to various causes including bronchiolitis, asthma, or pneumonia, requiring prompt assessment and intervention.',
    icon: 'pediatrics',
    severity: 'Emergency',
    symptoms: ['Tachypnea', 'Wheeze', 'Crepitations', 'Decreased air entry', 'Grunting'],
    diagnosticMarkers: ['RR', 'SpO2', 'CXR', 'CBC', 'CRP'],
    treatmentProtocols: [
      { step: 1, action: 'Nebulized Salbutamol + O2 (if wheeze)', drug: 'Salbutamol Nebulized', dose: '2.5-5 mg', route: 'Nebulized', note: 'Bronchodilator' },
      { step: 2, action: 'Nebulized Ipratropium + steroid (if crepitations/bronchiolitis)', drug: 'Ipratropium + Steroid', dose: 'As per protocol', route: 'Nebulized', note: 'For bronchiolitis' },
      { step: 3, action: 'Antibiotics (if pneumonia)', drug: 'Antibiotics', dose: 'Weight-based', route: 'PO/IV', note: 'If bacterial infection suspected' },
      { step: 4, action: 'Supportive care + urgent referral if danger signs', drug: 'Supportive Care', dose: 'As needed', route: 'N/A', note: 'Monitor for deterioration' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['salbutamol', 'ipratropium', 'prednisolone', 'amoxicillin']
  },
  {
    id: 'muscular-skeletal-pain',
    name: 'Muscular Pain / Skeletal Muscle Relaxants',
    category: 'Pain Medicine',
    description: 'Acute or chronic pain originating from muscles, tendons, and ligaments, often associated with muscle spasms and stiffness.',
    icon: 'healing',
    severity: 'Acute',
    symptoms: ['Muscle spasms', 'Back pain', 'Neck pain', 'Stiffness'],
    diagnosticMarkers: ['Clinical assessment'],
    treatmentProtocols: [
      { step: 1, action: 'Tizanidine 2-4 mg TDS/BD', drug: 'Tizanidine', dose: '2-4 mg', route: 'PO', note: 'Centrally acting muscle relaxant' },
      { step: 2, action: 'Thiocolchicoside 4 mg BD or IM', drug: 'Thiocolchicoside', dose: '4 mg', route: 'PO/IM', note: 'Muscle relaxant' },
      { step: 3, action: 'Meloxicam 7.5-15 mg OD', drug: 'Meloxicam', dose: '7.5-15 mg', route: 'PO', note: 'NSAID' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['tizanidine', 'thiocolchicoside', 'meloxicam', 'diclofenac', 'ibuprofen']
  },
  {
    id: 'spasmodic-abdominal-pain',
    name: 'Spasmodic Abdominal Pain',
    category: 'Pain Medicine',
    description: 'Colicky abdominal pain due to smooth muscle spasm in the gastrointestinal tract or genitourinary system, requiring spasmolytic therapy.',
    icon: 'healing',
    severity: 'Acute',
    symptoms: ['Colicky abdominal pain', 'Cramping'],
    diagnosticMarkers: ['Clinical assessment', 'Exclude surgical cause'],
    treatmentProtocols: [
      { step: 1, action: 'Drotavarine 40-80 mg TDS', drug: 'Drotavarine', dose: '40-80 mg', route: 'PO', note: 'Spasmolytic' },
      { step: 2, action: 'Hyoscine 10 mg TDS', drug: 'Hyoscine', dose: '10 mg', route: 'PO', note: 'Anticholinergic spasmolytic' },
      { step: 3, action: 'Mebeverine 135 mg TDS', drug: 'Mebeverine', dose: '135 mg', route: 'PO', note: 'Gut-selective spasmolytic' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['drotavarine', 'hyoscine', 'mebeverine']
  },
  {
    id: 'neuropathic-pain',
    name: 'Neuropathic Pain',
    category: 'Pain Medicine',
    description: 'Chronic pain caused by damage or dysfunction of the somatosensory nervous system, characterized by burning, tingling, and shooting pain.',
    icon: 'healing',
    severity: 'Chronic',
    symptoms: ['Burning', 'Tingling', 'Shooting pain', 'Numbness'],
    diagnosticMarkers: ['Clinical assessment', 'Nerve conduction studies'],
    treatmentProtocols: [
      { step: 1, action: 'Gabapentin 300 mg HS (titrate)', drug: 'Gabapentin', dose: '300 mg', route: 'PO', note: 'First-line neuropathic agent' },
      { step: 2, action: 'Pregabalin 75-150 mg HS', drug: 'Pregabalin', dose: '75-150 mg', route: 'PO', note: 'Alternative gabapentinoid' },
      { step: 3, action: 'Amitriptyline 10-25 mg HS', drug: 'Amitriptyline', dose: '10-25 mg', route: 'PO', note: 'Tricyclic antidepressant' },
      { step: 4, action: 'Duloxetine 30-60 mg OD', drug: 'Duloxetine', dose: '30-60 mg', route: 'PO', note: 'SNRI' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['gabapentin', 'pregabalin', 'amitriptyline', 'duloxetine', 'carbamazepine']
  },
  {
    id: 'anal-fissure',
    name: 'Anal Fissure',
    category: 'Surgery',
    description: 'A tear in the anal mucosa, usually in the posterior midline, causing sharp pain during and after defecation with bright red blood on the toilet paper.',
    icon: 'biotech',
    severity: 'Acute',
    symptoms: ['Sharp anal pain during/after defecation', 'Bright red blood on tissue'],
    diagnosticMarkers: ['Clinical exam'],
    treatmentProtocols: [
      { step: 1, action: 'GTN 0.2% ointment + Lignocaine gel LA BD', drug: 'GTN + Lignocaine', dose: 'Apply BD', route: 'Topical', note: 'Chemical sphincterotomy' },
      { step: 2, action: 'Sitz bath (baking soda + salt in warm water) BD x 15 min', drug: 'Sitz Bath', dose: 'BD', route: 'N/A', note: 'Hygiene and relaxation' },
      { step: 3, action: 'Oral painkiller PRN', drug: 'Oral Analgesic', dose: 'PRN', route: 'PO', note: 'For pain relief' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['nitroglycerin', 'lidocaine', 'paracetamol', 'ibuprofen']
  },
  {
    id: 'epididymo-orchitis',
    name: 'Epididymo-orchitis',
    category: 'Urology',
    description: 'Inflammation of the epididymis and testis, usually due to infection, presenting with painful testicular swelling and fever.',
    icon: 'urology',
    severity: 'Acute',
    symptoms: ['Painful swollen testicle', 'Fever', 'Dysuria'],
    diagnosticMarkers: ['Doppler ultrasound', 'Urine culture'],
    treatmentProtocols: [
      { step: 1, action: 'Ceftriaxone 250 mg IM once + Doxycycline 100 mg BD x 14 days (STI)', drug: 'Ceftriaxone + Doxycycline', dose: '250 mg + 100 mg', route: 'IM + PO', note: 'STI coverage' },
      { step: 2, action: 'Levofloxacin 500 mg OD x 10 days (UTI)', drug: 'Levofloxacin', dose: '500 mg', route: 'PO', note: 'UTI-related' }
    ],
    maintenanceTherapy: [],
    relevantDrugs: ['ceftriaxone', 'doxycycline', 'levofloxacin', 'ciprofloxacin']
  }
];
