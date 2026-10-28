import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

const pageId = 'urinalysis';

const subcategories = [
  {
    id: 'urinalysis-chem',
    title: 'Urinalysis - Physical & Chemical',
    icon: 'water_drop',
    color: 'from-amber-600 to-amber-400',
    description: 'Routine urinalysis combining physical inspection and chemical reagent strip testing for rapid screening of renal, metabolic, and urinary tract disorders.',
    tests: [
      {
        name: 'Urine Color & Appearance',
        normalRange: 'Pale yellow to amber, clear to slightly hazy',
        clinicalSignificance: 'Provides initial clues for hydration status, metabolic disorders, and pathologic constituents.',
        interpretation: 'Dark amber: dehydration. Red/red-brown: hematuria, hemoglobinuria, myoglobinuria, beets. Cloudy/turbid: pyuria, bacteriuria, phosphate crystals, chyluria. Orange: bilirubin, rifampin, phenazopyridine. Green: Pseudomonas, biliverdin.',
        method: 'Visual inspection of freshly voided urine against a white background under standard lighting',
      },
      {
        name: 'Urine Specific Gravity',
        normalRange: '1.005-1.030 (random), 1.016-1.022 (after fluid restriction)',
        clinicalSignificance: 'Measures urine concentration ability. Reflects renal tubular function and hydration status.',
        interpretation: 'Fixed at 1.010: renal tubular damage, diabetes insipidus (isosthenuria). High (>1.030): dehydration, SIADH, glucosuria, contrast media. Low (<1.005): excessive fluid intake, DI, renal concentrating defect.',
        method: 'Refractometry measuring refractive index of urine, or reagent strip pad colorimetric method',
      },
      {
        name: 'Urine pH',
        normalRange: '4.5-8.0 (average 5.5-6.5)',
        clinicalSignificance: 'Indicates acid-base status and influences crystal formation and drug solubility.',
        interpretation: 'Acidic (pH <5.5): high-protein diet, metabolic acidosis, respiratory acidosis, UTI (E. coli), uric acid crystals. Alkaline (pH >7.5): vegetarian diet, UTI (Proteus, urease-producing), metabolic alkalosis, struvite crystals, renal tubular acidosis.',
        method: 'Reagent strip pad with pH indicator dyes (methyl red, bromothymol blue) producing color change',
      },
      {
        name: 'Urine Glucose',
        normalRange: 'Negative (no detectable glucose)',
        clinicalSignificance: 'Glucose appears in urine when blood glucose exceeds renal threshold (~180 mg/dL). Screening for diabetes mellitus.',
        interpretation: 'Positive: diabetes mellitus (most common), renal glycosuria (low renal threshold), pregnancy, Cushings syndrome, stress hyperglycemia. Trace: may be normal in pregnancy.',
        method: 'Glucose oxidase-peroxidase reagent strip pad producing color change with chromogen',
      },
      {
        name: 'Urine Protein',
        normalRange: 'Negative to trace (<150 mg/24h)',
        clinicalSignificance: 'Proteinuria is a key marker of glomerular and tubular disease. Microalbuminuria is earliest sign of diabetic nephropathy.',
        interpretation: 'Trace/mild: fever, exercise, orthostatic proteinuria, UTI, CHF. Heavy (>3+): glomerulonephritis, nephrotic syndrome, diabetic nephropathy, multiple myeloma (Bence Jones). Microalbuminuria (30-300 mg/24h): early diabetic nephropathy.',
        method: 'Reagent strip pad with tetrabromophenol blue colorimetric method (albumin-preferential)',
      },
      {
        name: 'Urine Ketones',
        normalRange: 'Negative',
        clinicalSignificance: 'Detects acetoacetate and acetone. Indicator of fat metabolism and ketoacidosis.',
        interpretation: 'Positive: diabetic ketoacidosis, starvation/fasting, high-protein/low-carb diet, alcoholism, vomiting, glycogen storage diseases. Falsely negative: predominantly beta-hydroxybutyrate (no nitroprusside reaction).',
        method: 'Nitroprusside reaction (Legal test) on reagent strip pad detecting acetoacetate and acetone',
      },
      {
        name: 'Urine Blood (Hemoglobin)',
        normalRange: 'Negative (no intact RBCs or free hemoglobin)',
        clinicalSignificance: 'Detects hematuria (intact RBCs) or hemoglobinuria (free hemoglobin/myoglobin). Screening for renal and urinary tract pathology.',
        interpretation: 'Positive: UTI, nephrolithiasis, glomerulonephritis, malignancy, trauma, menstrual contamination, vigorous exercise. Hemoglobinuria: hemolytic transfusion reaction, paroxysmal nocturnal hemoglobinuria. Myoglobinuria: rhabdomyolysis, crush injury.',
        method: 'Reagent strip pad with peroxidase-like activity of hemoglobin pseudoperoxidase using organic peroxide and chromogen',
      },
      {
        name: 'Urine Bilirubin',
        normalRange: 'Negative',
        clinicalSignificance: 'Conjugated (direct) bilirubin appears in urine in obstructive jaundice and hepatocellular injury. Unconjugated bilirubin is albumin-bound and not filtered.',
        interpretation: 'Positive: extrahepatic obstruction (gallstones, tumor), intrahepatic cholestasis, hepatitis, cirrhosis, drug-induced liver injury. Always indicates pathologic jaundice.',
        method: 'Diazo reaction (diazotized dichloroaniline) on reagent strip pad producing azobilirubin color',
      },
      {
        name: 'Urine Urobilinogen',
        normalRange: '0.1-1.0 EU/dL (Ehrlich units)',
        clinicalSignificance: 'Formed from bilirubin by gut bacteria, partially reabsorbed and excreted in urine. Assesses hemolysis and liver function.',
        interpretation: 'Increased: hemolytic anemia, ineffective erythropoiesis, hepatic dysfunction (decreased hepatic clearance), constipation. Decreased/absent: complete obstructive jaundice, severe liver failure, antibiotic-induced gut sterility.',
        method: 'Ehrlich aldehyde reaction (p-dimethylaminobenzaldehyde) on reagent strip pad producing red color',
      },
      {
        name: 'Urine Nitrite',
        normalRange: 'Negative',
        clinicalSignificance: 'Rapid screening test for bacteriuria. Gram-negative bacteria (especially Enterobacteriaceae) convert nitrate to nitrite.',
        interpretation: 'Positive: significant bacteriuria (UTI) caused by nitrate-reducing organisms (E. coli, Klebsiella, Proteus, Enterobacter). False negative: non-nitrate reducers (Enterococcus, Pseudomonas, Staphylococcus), dilute urine, frequent voiding, low dietary nitrate.',
        method: 'Griess reaction on reagent strip pad with sulfanilamide and NED forming azo dye in presence of nitrite',
      },
      {
        name: 'Urine Leukocyte Esterase',
        normalRange: 'Negative',
        clinicalSignificance: 'Detects esterase enzyme released from lysed neutrophils. Screening marker for pyuria and urinary tract infection.',
        interpretation: 'Positive: UTI/pyelonephritis, STI (gonorrhea, chlamydia), interstitial cystitis, renal transplant rejection, glomerulonephritis, TB. False negative: glycosuria, high specific gravity, antibiotics, vitamin C.',
        method: 'Indoxyl ester hydrolysis by leukocyte esterase on reagent strip pad, reacting with diazonium salt to produce color',
      },
      {
        name: 'Urine Dipstick (Multistix - Complete)',
        normalRange: 'All parameters within normal limits',
        clinicalSignificance: 'Multi-analyte reagent strip providing comprehensive rapid urinalysis screening. Includes all chemical parameters simultaneously.',
        interpretation: 'Integrated interpretation of all parameters: pH, specific gravity, glucose, protein, ketones, blood, bilirubin, urobilinogen, nitrite, leukocyte esterase. Abnormalities guide further confirmatory testing.',
        method: 'Multipad reagent strip immersed in fresh urine with timed colorimetric reading (manual or automated strip reader)',
      },
      {
        name: 'Urine Reducing Substances',
        normalRange: 'Negative',
        clinicalSignificance: 'Detects all reducing substances including glucose, fructose, galactose, lactose, and reducing drugs.',
        interpretation: 'Positive: glucosuria (diabetes), galactosuria (galactosemia), fructosuria (essential fructosuria), lactosuria (pregnancy, neonates), homogentisic acid (alkaptonuria), drug metabolites (salicylates, levodopa).',
        method: 'Clinitest tablet (copper reduction method) using Benedict reagent and heat-generating reaction',
      },
      {
        name: 'Urine Pregnancy Test (hCG)',
        normalRange: 'Negative (non-pregnant: <5 mIU/mL)',
        clinicalSignificance: 'Qualitative detection of human chorionic gonadotropin. First-line test for pregnancy diagnosis.',
        interpretation: 'Positive: pregnancy (detectable from day of missed period). False positive: molar pregnancy, germ cell tumors, exogenous hCG, pituitary hCG (perimenopausal). False negative: very early pregnancy, dilute urine, ectopic pregnancy (low hCG).',
        method: 'Lateral flow immunochromatographic assay using monoclonal anti-beta-hCG antibodies with colloidal gold conjugate',
      },
    ]
  },
  {
    id: 'urine-micro',
    title: 'Urine Microscopy & Sediment',
    icon: 'biotech',
    color: 'from-indigo-600 to-indigo-400',
    description: 'Microscopic examination of urine sediment for cellular elements, casts, crystals, and microorganisms to evaluate renal and urinary tract pathology.',
    tests: [
      {
        name: 'Urine Microscopy (Complete Sediment)',
        normalRange: 'Few RBCs (0-2/HPF), rare WBCs (0-5/HPF), occasional epithelial cells, rare hyaline casts',
        clinicalSignificance: 'Complete microscopic evaluation of centrifuged urine sediment. Identifies formed elements indicating renal or urinary tract disease.',
        interpretation: 'Findings guide diagnosis: RBCs (glomerular vs non-glomerular hematuria), WBCs (infection/inflammation), casts (tubular origin), crystals (metabolic disorders), organisms (UTI).',
        method: 'Standardized centrifugation of 10 mL urine at 1500 rpm for 5 min, sediment resuspension and coverslipped examination under brightfield and phase contrast microscopy',
      },
      {
        name: 'RBCs in Urine (Hematuria Workup)',
        normalRange: '0-2 per high-power field (HPF)',
        clinicalSignificance: 'Dysmorphic RBCs indicate glomerular origin; isomorphic RBCs suggest lower urinary tract bleeding.',
        interpretation: 'Glomerular hematuria (dysmorphic, acanthocytes >5%): IgA nephropathy, post-streptococcal GN, lupus nephritis, thin GBM disease. Non-glomerular (isomorphic): stones, tumors, infection, trauma, BPH, exercise-induced.',
        method: 'Phase-contrast microscopy of urine sediment identifying RBC morphology (dysmorphic vs isomorphic)',
      },
      {
        name: 'WBCs in Urine (Pyuria)',
        normalRange: '0-5 per high-power field (HPF)',
        clinicalSignificance: 'Elevated WBCs indicate urinary tract inflammation, most commonly infection.',
        interpretation: '>5 WBC/HPF: UTI, STI, interstitial nephritis, renal TB, transplant rejection, drug-induced (NSAIDs, penicillins). Eosinophiluria: drug-induced interstitial nephritis (Wright/Hansel stain). Clumped WBCs: active infection.',
        method: 'Brightfield microscopy of centrifuged urine sediment with possible Hansel stain for eosinophil detection',
      },
      {
        name: 'Epithelial Cells (Squamous/Renal/TCC)',
        normalRange: 'Few squamous epithelial cells (from distal urethra/vagina). Renal tubular cells: rare or absent.',
        clinicalSignificance: 'Distinguishes lower tract contamination (squamous) from renal tubular injury (renal epithelial cells).',
        interpretation: 'Squamous: usually contamination (midstream clean-catch reduces). Transitional (TCC): bladder/urethral sloughing (UTI, instrumentation, malignancy). Renal tubular cells: acute tubular necrosis, nephrotoxic drugs, viral nephritis (BK polyomavirus), transplant rejection.',
        method: 'Brightfield microscopy identifying cell morphology and nuclear characteristics in urine sediment',
      },
      {
        name: 'Hyaline Casts',
        normalRange: '0-5 per low-power field (LPF)',
        clinicalSignificance: 'Composed of Tamm-Horsfall mucoprotein. Can be present in normal urine, especially after exercise or dehydration.',
        interpretation: 'Few: normal, exercise, dehydration, fever, diuretic therapy. Many: early renal disease, CHF, cirrhosis, nephrotic syndrome, glomerulonephritis. Often accompany other casts in pathologic states.',
        method: 'Brightfield or phase-contrast microscopy of urine sediment identifying transparent, pale eosinophilic, cylindrical structures',
      },
      {
        name: 'Granular Casts',
        normalRange: 'None to rare',
        clinicalSignificance: 'Degenerated cellular casts with granular inclusions. Indicate tubular injury or disease.',
        interpretation: 'Fine granular: mild tubular injury, exercise, early nephritis, prerenal azotemia. Coarse granular: significant tubular damage, ATN, advanced GN, pyelonephritis, nephrotoxins. Brown granular: myoglobinuria, hemoglobinuria.',
        method: 'Brightfield microscopy identifying granular (fine or coarse) matrix within cast background',
      },
      {
        name: 'RBC Casts',
        normalRange: 'None (always pathologic)',
        clinicalSignificance: 'Pathognomonic for glomerular bleeding. RBCs trapped in tubular cast matrix indicate glomerular origin of hematuria.',
        interpretation: 'Present: IgA nephropathy (most common), post-streptococcal GN, lupus nephritis, MPGN, crescentic GN, Goodpasture syndrome, vasculitis (ANCA-associated), hereditary nephritis (Alport).',
        method: 'Phase-contrast or brightfield microscopy identifying red-brown cast with embedded RBCs, confirming glomerular origin',
      },
      {
        name: 'WBC Casts',
        normalRange: 'None (always pathologic)',
        clinicalSignificance: 'Indicate renal parenchymal inflammation (pyelonephritis, tubulointerstitial nephritis).',
        interpretation: 'Present: acute pyelonephritis (most common), tubulointerstitial nephritis (drug-induced, autoimmune), renal transplant rejection, ATN, lupus nephritis. Neutrophil casts: bacterial infection. Eosinophil casts: allergic interstitial nephritis.',
        method: 'Brightfield microscopy identifying cellular casts composed of white blood cells in a protein matrix',
      },
      {
        name: 'Waxy Casts',
        normalRange: 'None (always pathologic)',
        clinicalSignificance: 'End-stage of cast degeneration. Indicate chronic and severe renal disease with tubular atrophy.',
        interpretation: 'Present: chronic renal failure, advanced renal disease, amyloidosis, diabetic nephropathy, severe glomerulonephritis, renal transplant rejection, renal artery stenosis. Broad waxy casts: very poor prognosis (advanced renal failure).',
        method: 'Brightfield microscopy identifying homogeneous, refractile, glass-like casts with sharp borders',
      },
      {
        name: 'Broad Casts',
        normalRange: 'None (always pathologic)',
        clinicalSignificance: 'Formed in dilated collecting ducts. Indicate advanced renal disease with tubular atrophy and dilation.',
        interpretation: 'Present: end-stage renal disease, chronic renal failure, severe chronic pyelonephritis, amyloidosis. Any broad cast type (granular, waxy, cellular) signifies advanced irreversible kidney damage.',
        method: 'Brightfield microscopy identifying casts with diameter exceeding 2-3x normal cast width',
      },
      {
        name: 'Crystal Identification - Calcium Oxalate',
        normalRange: 'Occasional (can be normal, especially in oxalate-rich diet)',
        clinicalSignificance: 'Most common urinary crystal. Monohydrate (dumbbell) and dihydrate (envelope) forms. Large numbers indicate hyperoxaluria.',
        interpretation: 'Numerous: ethylene glycol poisoning (monohydrate), hyperoxaluria (primary or enteric), vitamin C excess, high oxalate diet (spinach, rhubarb), Crohn disease, short bowel syndrome, ileostomy.',
        method: 'Polarized light microscopy of urine sediment identifying birefringent envelope (dihydrate) and dumbbell (monohydrate) crystals',
      },
      {
        name: 'Crystal Identification - Uric Acid',
        normalRange: 'Occasional (can be normal in acidic urine)',
        clinicalSignificance: 'Amber/yellow rhomboid or rosette crystals in acidic urine. Associated with hyperuricemia and uric acid nephrolithiasis.',
        interpretation: 'Numerous/persistent: gout, tumor lysis syndrome, myeloproliferative disorders, Lesch-Nyhan syndrome, high-purine diet, dehydration, acidic urine (pH <5.5). Uric acid stones: radiolucent on X-ray.',
        method: 'Brightfield and polarized light microscopy identifying pleomorphic rhomboid, barrel, or rosette-shaped yellow-brown crystals',
      },
      {
        name: 'Crystal Identification - Triple Phosphate (Struvite)',
        normalRange: 'None to rare',
        clinicalSignificance: 'Magnesium ammonium phosphate crystals. Associated with alkaline urine and urease-producing bacterial infection.',
        interpretation: 'Present: alkaline urine (pH >7.0), UTI with urease-producing organisms (Proteus, Klebsiella, Pseudomonas, Ureaplasma). Struvite (infection) stones: staghorn calculi requiring surgical intervention.',
        method: 'Brightfield microscopy identifying characteristic coffin-lid or prism-shaped colorless crystals',
      },
      {
        name: 'Crystal Identification - Cystine',
        normalRange: 'None (always pathologic)',
        clinicalSignificance: 'Hexagonal, flat, colorless crystals. Pathognomonic for cystinuria (autosomal recessive defect of renal tubular dibasic amino acid transport).',
        interpretation: 'Present: cystinuria (defect in cystine, ornithine, arginine, lysine transport). Cystine stones: radiopaque (sulfur content), recurrent nephrolithiasis, can form staghorn calculi.',
        method: 'Brightfield microscopy identifying characteristic flat, hexagonal, benzene-ring-shaped colorless crystals in acid urine',
      },
      {
        name: 'Yeast Cells (Candida)',
        normalRange: 'None',
        clinicalSignificance: 'Fungal elements, most commonly Candida albicans. Differentiate from RBCs by budding and pseudohyphae.',
        interpretation: 'Present: Candida UTI (often in diabetics, catheterized patients, immunocompromised), vulvovaginitis (contamination). Often with pseudohyphae in active infection. May form fungal balls in collecting system.',
        method: 'Brightfield microscopy of urine sediment identifying oval budding yeast cells (3-6 um) with pseudohyphae',
      },
      {
        name: 'Trichomonas vaginalis',
        normalRange: 'None',
        clinicalSignificance: 'Flagellated protozoan parasite causing sexually transmitted infection. Commonly detected in urine of infected males and females.',
        interpretation: 'Present: trichomoniasis (STI). Often asymptomatic in males. In females: vaginal discharge, dysuria, dyspareunia. Associated with increased risk of HIV transmission and adverse pregnancy outcomes.',
        method: 'Phase-contrast or brightfield microscopy of freshly voided urine or vaginal wet mount identifying motile pear-shaped trophozoite with characteristic jerky motility',
      },
      {
        name: 'Spermatozoa',
        normalRange: 'None or rare (post-coital)',
        clinicalSignificance: 'Presence in urine indicates recent ejaculation, retrograde ejaculation, or contamination.',
        interpretation: 'Post-coital: normal (within 24-48h). Non-post-coital: retrograde ejaculation (diabetes, spinal cord injury, post-prostatectomy), contamination (specimen collection). Can cause false-positive protein on dipstick.',
        method: 'Brightfield microscopy of urine sediment identifying oval head and long tail under low or high power',
      },
      {
        name: 'Mucous Threads',
        normalRange: 'Few (trace to small)',
        clinicalSignificance: 'Secreted by urethral and vaginal mucosa. Large amounts may indicate urethral inflammation or contamination.',
        interpretation: 'Increased: urethritis, STI, contamination (poor collection), chronic catheterization. May trap cells and interfere with microscopic examination.',
        method: 'Brightfield microscopy of urine sediment identifying wavy, ribbon-like, pale-staining strands',
      },
      {
        name: 'Bacterial Count (Bacteriuria)',
        normalRange: 'No significant bacteriuria (<10^4 CFU/mL in clean-catch midstream)',
        clinicalSignificance: 'Quantifies bacteria in urine. Differentiates contamination from significant bacteriuria requiring treatment.',
        interpretation: '>10^5 CFU/mL: significant bacteriuria (UTI) in clean-catch midstream. 10^4-10^5: suspicious, repeat with proper collection. >10^2 CFU/mL: significant in suprapubic aspirate. <10^4: contamination. Lower counts may be significant in symptomatic patients.',
        method: 'Gram stain of uncentrifuged urine for rapid screening, or semiquantitative culture using calibrated loop on MacConkey and blood agar',
      },
    ]
  },
  {
    id: 'csf',
    title: 'Cerebrospinal Fluid (CSF) Analysis',
    icon: 'psychiatry',
    color: 'from-blue-600 to-blue-400',
    description: 'Diagnostic evaluation of CSF for meningitis, encephalitis, multiple sclerosis, malignancy, and other neurologic conditions through comprehensive biochemical, cytologic, and microbiologic analysis.',
    tests: [
      {
        name: 'CSF Opening Pressure',
        normalRange: '10-20 cm H2O (lateral decubitus position)',
        clinicalSignificance: 'Measured during lumbar puncture before fluid collection. Reflects intracranial pressure.',
        interpretation: 'Elevated (>25 cm): meningitis, encephalitis, intracranial mass, pseudotumor cerebri, venous sinus thrombosis, hydrocephalus, SAH. Low (<5 cm): CSF leak, spinal block, severe dehydration, traumatic tap (false low).',
        method: 'Manometric measurement via spinal needle connected to graduated manometer before CSF collection',
      },
      {
        name: 'CSF Color & Appearance',
        normalRange: 'Clear and colorless',
        clinicalSignificance: 'Visual inspection provides immediate diagnostic clues about pathologic processes.',
        interpretation: 'Xanthochromia (yellow/pink): subarachnoid hemorrhage (>12h), elevated protein (>150 mg/dL), hyperbilirubinemia, melanoma. Cloudy/turbid: meningitis (bacterial, fungal). Bloody: traumatic tap (decreasing in sequential tubes), subarachnoid hemorrhage (uniform throughout).',
        method: 'Visual inspection against white background comparing sequentially collected tubes for clearing pattern',
      },
      {
        name: 'CSF Total Cell Count',
        normalRange: '0-5 cells/mcL (all mononuclear)',
        clinicalSignificance: 'Quantifies WBCs and RBCs in CSF. Essential for diagnosing meningitis and differentiating etiologies.',
        interpretation: 'Elevated WBC: meningitis (bacterial: 100-50,000, PMN predominant; viral: 10-1000, lymph predominant; fungal: 10-500, lymph predominant). RBC count: traumatic tap vs SAH (decreasing vs non-clearing).',
        method: 'Manual hemocytometer (Neubauer) counting after gentle mixing, with separate WBC and RBC enumeration',
      },
      {
        name: 'CSF Differential Count',
        normalRange: '>70% lymphocytes, <30% monocytes, no neutrophils',
        clinicalSignificance: 'Determines predominant WBC type to differentiate meningitis etiology.',
        interpretation: 'Neutrophilic (>50% PMN): bacterial meningitis (early), fungal (early), amoebic, Lyme (early), CNS vasculitis, post-neurosurgery. Lymphocytic: viral, TB (early may be mixed), fungal, Lyme, MS, syphilis. Eosinophilic: parasitic, coccidioidomycosis, CNS lymphoma, drug-induced.',
        method: 'Cytocentrifugation of CSF followed by Wright-Giemsa staining and manual differential enumeration',
      },
      {
        name: 'CSF Glucose',
        normalRange: '50-80 mg/dL (or 50-70% of serum glucose)',
        clinicalSignificance: 'Low CSF glucose (hypoglycorrhachia) is a key differentiator for bacterial, fungal, and TB meningitis.',
        interpretation: 'Decreased (<40 mg/dL or <50% serum): bacterial meningitis, fungal meningitis, TB meningitis, sarcoidosis, subarachnoid hemorrhage, hypoglycemia, meningeal carcinomatosis. Normal: viral meningitis, MS, Guillain-Barre, neurosyphilis.',
        method: 'Enzymatic (hexokinase/glucose oxidase) method on automated chemistry analyzer, ideally paired with simultaneous serum glucose',
      },
      {
        name: 'CSF Protein',
        normalRange: '15-45 mg/dL',
        clinicalSignificance: 'Elevated CSF protein indicates blood-CSF barrier disruption or intrathecal Ig production.',
        interpretation: 'Elevated (>45): bacterial meningitis (100-500), fungal/TB meningitis, Guillain-Barre (albuminocytologic dissociation), MS, spinal block (Froin syndrome, >1000), tumors, hemorrhage, polyneuritis, hypothyroidism.',
        method: 'Turbidimetric (benzethonium chloride) or colorimetric (Lowry/Pyrogallol red) method on automated chemistry analyzer',
      },
      {
        name: 'CSF Lactate',
        normalRange: '10-25 mg/dL (1.1-2.8 mmol/L)',
        clinicalSignificance: 'Useful biomarker to differentiate bacterial from viral meningitis. Less affected by peripheral blood contamination.',
        interpretation: 'Elevated (>35 mg/dL, >3.9 mmol/L): bacterial meningitis (sensitivity >90%, specificity >95%), fungal meningitis, TB meningitis, cerebral hypoxia/ischemia, mitochondrial disorders. Normal: viral meningitis, MS.',
        method: 'Enzymatic (lactate oxidase/peroxidase) colorimetric or amperometric method on blood gas/chemistry analyzer',
      },
      {
        name: 'CSF Chloride',
        normalRange: '118-132 mEq/L',
        clinicalSignificance: 'Historically used in TB meningitis diagnosis. Low chloride is associated with prolonged meningitis.',
        interpretation: 'Decreased: TB meningitis (classically <110 mEq/L), bacterial meningitis, fungal meningitis, hyponatremia (SIADH), hypoalbuminemia. Elevated: hypernatremia, hyperchloremic acidosis, renal failure.',
        method: 'Ion-selective electrode (ISE) or coulometric titration method on automated chemistry analyzer',
      },
      {
        name: 'CSF Gram Stain',
        normalRange: 'No organisms seen',
        clinicalSignificance: 'Rapid identification of bacterial meningitis etiology within minutes of LP. Critical for empiric antibiotic selection.',
        interpretation: 'Positive: Gram-positive cocci (pairs: S. pneumoniae; clusters: S. aureus; chains: Group B Strep), Gram-negative diplococci (N. meningitidis), Gram-negative rods (H. influenzae, E. coli, L. monocytogenes). Sensitivity 60-90% (higher if >10^5 CFU/mL).',
        method: 'Cytocentrifugation, Gram staining, and oil-immersion microscopic examination of CSF sediment',
      },
      {
        name: 'CSF Culture',
        normalRange: 'No growth after 48-72 hours',
        clinicalSignificance: 'Gold standard for confirming bacterial meningitis and identifying causative organism with antibiotic susceptibility.',
        interpretation: 'Growth: identifies specific organism with antibiogram. S. pneumoniae, N. meningitidis, H. influenzae, Group B Strep, L. monocytogenes, E. coli. Culture negative but Gram positive: consider antibiotics prior to LP, atypical organisms (Mycoplasma, TB, virus, fungus).',
        method: 'Inoculation on chocolate agar (5% CO2), blood agar, and thioglycolate broth incubated at 35-37°C for 48-72 hours',
      },
      {
        name: 'CSF India Ink Preparation (Cryptococcus)',
        normalRange: 'Negative (no encapsulated yeasts)',
        clinicalSignificance: 'Rapid detection of Cryptococcus neoformans in CSF. Most useful in HIV/AIDS patients with cryptococcal meningitis.',
        interpretation: 'Positive: cryptococcal meningitis (encapsulated yeast with characteristic halo). Sensitivity: 50-80% in HIV+ patients, lower in HIV-negative. Negative does not exclude disease. Confirm with cryptococcal antigen.',
        method: 'India ink (Nigrosin) mixed with CSF sediment on a slide and examined for encapsulated yeast with negative staining',
      },
      {
        name: 'CSF Cryptococcal Antigen',
        normalRange: 'Negative (titer <1:2)',
        clinicalSignificance: 'Highly sensitive and specific for cryptococcal meningitis. Recommended initial test in immunocompromised patients with suspected meningitis.',
        interpretation: 'Positive: cryptococcal meningitis (titer correlates with disease severity and prognosis). High titers (>1:1024): high fungal burden, increased ICP, poor prognosis. Negative: excellent negative predictive value.',
        method: 'Latex agglutination or lateral flow immunochromatographic assay detecting cryptococcal polysaccharide capsular antigen',
      },
      {
        name: 'CSF Oligoclonal Bands (OCBs)',
        normalRange: 'None (no bands in CSF that are absent in serum)',
        clinicalSignificance: 'Gold standard laboratory finding for multiple sclerosis. Indicates intrathecal IgG synthesis.',
        interpretation: 'Type 1 (normal): no bands in CSF or serum. Type 2 (MS pattern): bands in CSF only = intrathecal synthesis. Type 3: bands in CSF and serum = systemic with intrathecal. Type 4 (mirror): identical in CSF and serum = systemic only. Positive: MS (>95% sensitivity), also seen in Lyme, SLE with CNS, neurosarcoidosis.',
        method: 'Isoelectric focusing (IEF) on agarose gel with immunoblotting and paired CSF/serum samples at equal IgG concentration',
      },
      {
        name: 'CSF IgG Index',
        normalRange: '<0.7',
        clinicalSignificance: 'Quantitative measure of intrathecal IgG synthesis relative to serum. Supports MS diagnosis.',
        interpretation: 'Elevated (>0.7): multiple sclerosis, CNS infection (Lyme, HIV, syphilis), autoimmune CNS disease, neurosarcoidosis, SSPE. Calculated as (CSF IgG/serum IgG) / (CSF albumin/serum albumin).',
        method: 'Nephelometric or turbidimetric IgG and albumin measurement in paired CSF and serum samples',
      },
      {
        name: 'CSF 14-3-3 Protein (Prion)',
        normalRange: 'Negative',
        clinicalSignificance: 'Important diagnostic marker for Creutzfeldt-Jakob disease (prion disease). Clinical use in rapidly progressive dementia evaluation.',
        interpretation: 'Positive: CJD (sensitivity >90%, specificity ~85%), also positive in HSV encephalitis, recent stroke, MS, paraneoplastic syndromes. Negative: strong negative predictive value for CJD. RT-QuIC (real-time quaking-induced conversion) is newer more specific assay.',
        method: 'Western blot or ELISA detecting 14-3-3 protein isoforms in CSF with monoclonal antibodies',
      },
      {
        name: 'CSF VDRL (Neurosyphilis)',
        normalRange: 'Non-reactive',
        clinicalSignificance: 'Specific serologic test for neurosyphilis in CSF. Highly specific but relatively insensitive.',
        interpretation: 'Reactive: neurosyphilis (specific but false positives can occur). Non-reactive does not exclude: low sensitivity (30-70%). FTA-ABS in CSF is more sensitive but less specific. Diagnosis requires combination of serum serology, CSF cell count, protein, and VDRL.',
        method: 'VDRL flocculation test using cardiolipin antigen and heat-inactivated CSF examined under light microscopy',
      },
      {
        name: 'CSF Albumin Quotient',
        normalRange: '<9 (age-dependent, lower in children)',
        clinicalSignificance: 'Calculated as CSF albumin / serum albumin. Measures blood-CSF barrier integrity.',
        interpretation: 'Elevated (>9): blood-CSF barrier dysfunction (meningitis, Guillain-Barre, MS, tumors, stroke, vasculitis). Normal quotient with elevated IgG index = pure intrathecal IgG synthesis without barrier damage.',
        method: 'Nephelometric/turbidimetric albumin measurement in paired CSF and serum, calculating the ratio',
      },
      {
        name: 'CSF Cytology (Malignant Cells)',
        normalRange: 'No malignant cells identified',
        clinicalSignificance: 'Detection of neoplastic cells in CSF. Confirms leptomeningeal carcinomatosis or primary CNS lymphoma.',
        interpretation: 'Positive: leptomeningeal carcinomatosis (breast, lung, melanoma, GI), primary CNS lymphoma (B-cell most common), leukemia/lymphoma (ALL, Burkitt), medulloblastoma. Sensitivity improves with >10 mL volume and multiple LP specimens (2-3).',
        method: 'Cytocentrifugation, Papanicolaou and Wright-Giemsa staining, and cytopathologic examination by pathologist',
      },
      {
        name: 'CSF PCR (Meningitis Panel)',
        normalRange: 'Negative (no pathogen nucleic acid detected)',
        clinicalSignificance: 'Multiplex molecular panel detecting bacterial, viral, and fungal CNS pathogens simultaneously. Rapid (<1 hour) and highly sensitive.',
        interpretation: 'Positive: identifies specific pathogen DNA/RNA (S. pneumoniae, N. meningitidis, H. influenzae, E. coli, Group B Strep, L. monocytogenes, HSV-1/2, VZV, CMV, Enterovirus, Parechovirus, Cryptococcus). Faster and more sensitive than culture.',
        method: 'Multiplex real-time PCR (e.g., FilmArray Meningitis/Encephalitis panel) detecting nucleic acids of 14 common pathogens simultaneously',
      },
      {
        name: 'CSF Viral PCR (HSV, VZV, Enterovirus)',
        normalRange: 'Negative (no viral DNA/RNA detected)',
        clinicalSignificance: 'Gold standard for diagnosing viral CNS infections. HSV encephalitis requires prompt acyclovir therapy.',
        interpretation: 'HSV-1 positive: herpes simplex encephalitis (temporal lobe involvement, high morbidity/mortality without treatment). VZV positive: CNS vasculopathy, encephalitis, myelitis. Enterovirus positive: aseptic meningitis (most common cause). HHV-6: post-transplant encephalitis.',
        method: 'Singleplex or duplex real-time PCR (TaqMan) using virus-specific primers and fluorescent probes',
      },
    ]
  },
  {
    id: 'serous-fluids',
    title: 'Pleural & Peritoneal Fluid Analysis',
    icon: 'pulmonology',
    color: 'from-teal-600 to-teal-400',
    description: 'Comprehensive biochemical, cytologic, and microbiologic analysis of serous effusions to differentiate transudates from exudates and identify specific etiologies.',
    tests: [
      {
        name: 'Pleural Fluid - Color & Appearance',
        normalRange: 'Clear, pale yellow (sterile serous fluid)',
        clinicalSignificance: 'Visual inspection suggests underlying pathology. Guides further diagnostic workup.',
        interpretation: 'Serous: transudate (CHF, cirrhosis, nephrotic). Serosanguinous: malignancy, PE, trauma, TB, post-cardiac injury. Bloody: trauma, malignancy, PE, asbestos. Purulent: empyema. Chylous (milky): chylothorax (thoracic duct injury, lymphoma). Green: bilious fistula (rare).',
        method: 'Visual inspection of pleural fluid in a clear tube against a white background',
      },
      {
        name: 'Pleural Fluid - Cell Count & Differential',
        normalRange: 'RBC: <10,000/mcL, WBC: <1,000/mcL (predominantly mononuclear)',
        clinicalSignificance: 'Differentiates exudates from transudates and suggests specific etiologies.',
        interpretation: 'PMN predominant (>50%): acute inflammation, pneumonia/parapneumonic effusion, PE, pancreatitis, TB (early). Lymphocyte predominant: TB (late), malignancy, lymphoma, sarcoidosis, CHF, chylothorax, post-CABG. Eosinophils: pneumothorax, hemothorax, drugs, fungal, parasitic, asbestos, Churg-Strauss.',
        method: 'Hemocytometer counting with differential on Wright-stained cytocentrifuged preparation',
      },
      {
        name: 'Pleural Fluid - Total Protein & Albumin (Light Criteria)',
        normalRange: 'Total protein <3.0 g/dL (transudate) or >3.0 g/dL (exudate)',
        clinicalSignificance: 'Light criteria classify pleural effusion as transudate or exudate to narrow differential diagnosis.',
        interpretation: 'Exudate (any of Light criteria): pleural/serum protein >0.5, pleural/serum LDH >0.6, pleural LDH >2/3 upper normal serum LDH. Transudate: none met. Albumin gradient (serum-pleural >1.2 g/dL) alternative for patients on diuretics.',
        method: 'Automated chemistry analyzer for total protein and albumin with simultaneous serum measurement for ratio comparison',
      },
      {
        name: 'Pleural Fluid - LDH',
        normalRange: '<200 IU/L (varies by lab, <50% of serum upper limit)',
        clinicalSignificance: 'Key component of Light criteria. Elevated in exudates. Very high levels suggest specific diseases.',
        interpretation: 'Elevated (exudate): part of Light criteria. Very high (>1000 IU/L): empyema, rheumatoid pleurisy, malignancy, pancreatic pseudocyst. LDH isoenzymes may provide additional specificity.',
        method: 'UV kinetic enzymatic (LDH to pyruvate/lactate with NADH/NAD+ detection at 340 nm) method on chemistry analyzer',
      },
      {
        name: 'Pleural Fluid - Glucose',
        normalRange: 'Similar to serum glucose (70-100 mg/dL)',
        clinicalSignificance: 'Low pleural glucose indicates increased metabolic activity or impaired transport.',
        interpretation: 'Low (<60 mg/dL): empyema/complicated parapneumonic effusion, rheumatoid pleurisy, malignancy, TB, lupus pleuritis, esophageal rupture. Very low (<30 mg/dL): rheumatoid pleurisy (classic), empyema.',
        method: 'Enzymatic (hexokinase/glucose oxidase) method on automated chemistry analyzer',
      },
      {
        name: 'Pleural Fluid - pH',
        normalRange: '7.60-7.64 (pleural), 7.38-7.42 (peritoneal)',
        clinicalSignificance: 'Low pH indicates intense metabolic activity and inflammation. Predicts need for chest tube drainage.',
        interpretation: 'Low pH (<7.30): complicated parapneumonic effusion/empyema (requires drainage), esophageal rupture, rheumatoid pleurisy, TB, malignancy, lupus pleuritis, hemothorax. pH <7.20 with glucose <60 mg/dL: empyema requiring immediate drainage.',
        method: 'Blood gas analyzer measurement of anaerobically collected pleural fluid (heparinized syringe, iced transport)',
      },
      {
        name: 'Pleural Fluid - Amylase',
        normalRange: '<100 U/L (or serum amylase upper limit)',
        clinicalSignificance: 'Elevated pleural amylase suggests pancreatic origin or esophageal rupture.',
        interpretation: 'Elevated (>serum upper limit): acute pancreatitis, pancreatic pseudocyst (left-sided effusion), esophageal rupture (salivary amylase), malignancy (lung, ovary). Very high levels: pancreaticopleural fistula.',
        method: 'Enzymatic (EPS-G7, CNPG3) colorimetric method on automated chemistry analyzer',
      },
      {
        name: 'Pleural Fluid - Triglycerides (Chylothorax)',
        normalRange: '<50 mg/dL',
        clinicalSignificance: 'Chylothorax (milky fluid) due to thoracic duct disruption. Large effusions cause nutritional and immune compromise.',
        interpretation: 'Triglycerides >110 mg/dL: chylothorax (thoracic duct injury from trauma, surgery, malignancy/lymphoma, TB, filariasis). Triglycerides 50-110 mg/dL with chylomicrons: chylothorax. Pseudochylothorax: cholesterol >200 mg/dL with cholesterol crystals (TB, RA, chronic effusions).',
        method: 'Enzymatic (lipase/glycerol kinase) colorimetric method for triglycerides and cholesterol measurement',
      },
      {
        name: 'Pleural Fluid - ADA (Tuberculosis)',
        normalRange: '<40 U/L',
        clinicalSignificance: 'Adenosine deaminase is a highly sensitive marker for tuberculous pleuritis. First-line screening test in TB-endemic areas.',
        interpretation: 'Elevated (>40 U/L, especially >50): tuberculous pleurisy (sensitivity 90-95%, specificity ~90%). False positives: empyema, parapneumonic, rheumatoid, lymphoma, brucellosis. Combined ADA + lymphocyte predominance = high PPV for TB.',
        method: 'Colorimetric (Giusti) method measuring ammonia production from adenosine deamination',
      },
      {
        name: 'Pleural Fluid - Gram Stain & Culture',
        normalRange: 'No organisms seen, no growth',
        clinicalSignificance: 'Essential for diagnosing pleural infection (empyema, complicated parapneumonic effusion).',
        interpretation: 'Gram stain positive: identifies organism morphology (GPC, GNR) guiding empiric antibiotics. Culture positive: definitive organism identification with antibiogram. Most common organisms: S. pneumoniae, S. aureus, anaerobes, Strep milleri group, Enterobacteriaceae.',
        method: 'Gram stain of cytocentrifuged fluid with aerobic, anaerobic, and fungal cultures on appropriate media',
      },
      {
        name: 'Pleural Fluid - Cytology',
        normalRange: 'No malignant cells identified',
        clinicalSignificance: 'Primary method for diagnosing malignant pleural effusion (lung, breast, lymphoma, ovarian, gastric).',
        interpretation: 'Positive malignant cells: lung adenocarcinoma (most common), breast, lymphoma (especially NHL), mesothelioma, ovarian, gastric. Sensitivity: 60% (single), 90% (three specimens). Cell block improves sensitivity over cytospin alone.',
        method: 'Papanicolaou and Wright-Giemsa staining of cell block and cytocentrifuged preparations with immunohistochemistry as needed',
      },
      {
        name: 'Peritoneal Fluid (Ascitic) - Appearance',
        normalRange: 'Clear, straw-colored (serous)',
        clinicalSignificance: 'Visual inspection of ascitic fluid guides the differential diagnosis of ascites.',
        interpretation: 'Clear/serous: transudate (cirrhosis, CHF, nephrotic). Cloudy: SBP or secondary bacterial peritonitis. Bloody: trauma, malignancy, ruptured aneurysm, hemorrhagic pancreatitis, tuberculous peritonitis. Chylous: lymphoma, filariasis, cirrhosis, post-surgical. Bilious: perforated biliary tract.',
        method: 'Visual inspection against a white background in a clear tube, with volume estimation',
      },
      {
        name: 'Peritoneal Fluid - SAAG (Serum-Ascites Albumin Gradient)',
        normalRange: 'SAAG = Serum albumin - Ascitic albumin',
        clinicalSignificance: 'SAAG classifies ascites more accurately than total protein. High SAAG = portal hypertension.',
        interpretation: 'High SAAG (>1.1 g/dL): portal hypertension (cirrhosis 97%, CHF, Budd-Chiari, hepatic veno-occlusive disease, massive liver metastases). Low SAAG (<1.1 g/dL): non-portal hypertension causes (peritoneal carcinomatosis, TB peritonitis, pancreatic ascites, nephrotic syndrome, serositis).',
        method: 'Calculated from simultaneous serum and ascitic fluid albumin measured by automated chemistry analyzer (bromocresol green method)',
      },
      {
        name: 'Peritoneal Fluid - Cell Count (PMN for SBP)',
        normalRange: 'WBC <500/mcL, PMN <250/mcL',
        clinicalSignificance: 'PMN count is the most important test for diagnosing spontaneous bacterial peritonitis in cirrhotic ascites.',
        interpretation: 'PMN >250/mcL: SBP (initiate empiric antibiotics immediately). PMN >500/mcL with multiple organisms: secondary bacterial peritonitis (surgical abdomen, requires imaging/intervention). Mixed flora: consider secondary peritonitis (vs SBP which is monomicrobial).',
        method: 'Hemocytometer counting with differential on Wright-stained cytocentrifuged ascitic fluid specimen',
      },
      {
        name: 'Peritoneal Fluid - Culture (Blood Culture Bottles)',
        normalRange: 'No growth',
        clinicalSignificance: 'Inoculating ascitic fluid directly into blood culture bottles at bedside increases SBP culture yield by >50%.',
        interpretation: 'Culture positive: confirms SBP (typically monomicrobial). Most common: E. coli (40%), Klebsiella, S. pneumoniae, GBS, Enterococcus. Polymicrobial: secondary peritonitis or procedure contamination. Negative culture with PMN >250: culture-negative neutrocytic ascites (treat as SBP).',
        method: 'Bedside inoculation of 10-20 mL ascitic fluid into aerobic and anaerobic blood culture bottles, incubated at 35-37°C for 5-7 days',
      },
      {
        name: 'Peritoneal Fluid - Amylase',
        normalRange: '<100 U/L (or serum amylase upper limit)',
        clinicalSignificance: 'Elevated ascitic amylase indicates pancreatic source or enteric perforation.',
        interpretation: 'Elevated: acute pancreatitis, pancreatic pseudocyst rupture, pancreatic trauma, enteric perforation (bacterial amylase), mesenteric ischemia, perforated peptic ulcer. Very high levels: pancreatic ascites.',
        method: 'Enzymatic (EPS-G7, CNPG3) colorimetric method on automated chemistry analyzer',
      },
      {
        name: 'Peritoneal Fluid - Bilirubin',
        normalRange: '<1.0 mg/dL (or less than serum bilirubin)',
        clinicalSignificance: 'Elevated ascitic bilirubin indicates biliary tract perforation or choleperitoneum.',
        interpretation: 'Elevated (>serum bilirubin, or ascitic/serum ratio >1.0): biliary leak (post-cholecystectomy, cholecystitis, perforated gallbladder), choledocholithiasis, bile duct injury, perforated peptic ulcer.',
        method: 'Diazonium (Jendrassik-Grof) colorimetric method on automated chemistry analyzer',
      },
      {
        name: 'Peritoneal Fluid - Cytology',
        normalRange: 'No malignant cells identified',
        clinicalSignificance: 'Diagnoses peritoneal carcinomatosis in patients with low SAAG ascites and suspected malignancy.',
        interpretation: 'Positive malignant cells: ovarian (most common peritoneal metastasis), gastric, colon, pancreatic, uterine, breast, mesothelioma. Sensitivity: 40-70% (ovarian higher). Cell block and immunohistochemistry help determine primary site.',
        method: 'Papanicolaou and Wright-Giemsa staining of cell block and cytocentrifuged preparations with immunocytochemistry',
      },
    ]
  },
  {
    id: 'synovial',
    title: 'Synovial Fluid Analysis',
    icon: 'orthopedics',
    color: 'from-red-600 to-red-400',
    description: 'Comprehensive evaluation of joint effusions to diagnose crystal arthropathies, septic arthritis, and inflammatory or non-inflammatory joint diseases.',
    tests: [
      {
        name: 'Synovial Fluid - Color & Clarity',
        normalRange: 'Clear, colorless to pale yellow, transparent',
        clinicalSignificance: 'Visual inspection classifies joint effusion into inflammatory, non-inflammatory, or septic categories.',
        interpretation: 'Clear/straw-colored: non-inflammatory (OA, trauma). Yellow/cloudy: inflammatory (RA, gout, pseudogout, reactive arthritis, psoriatic). Greenish/opaque: septic arthritis (S. aureus most common). Hemorrhagic/reddish-brown: hemophilia, trauma, PVNS, anticoagulation, Charcot joint, tumor.',
        method: 'Visual inspection against white background in a clear tube, assessing transparency and color',
      },
      {
        name: 'Synovial Fluid - Viscosity (String Test/Mucin Clot)',
        normalRange: 'High viscosity: fluid forms a string >5 cm before separating',
        clinicalSignificance: 'Viscosity reflects hyaluronic acid (HA) content and polymerization. Decreased in inflammatory conditions.',
        interpretation: 'High viscosity (normal string >5 cm): non-inflammatory (OA, trauma). Low viscosity (string <3 cm): inflammatory (RA, gout, pseudogout, septic). Poor mucin clot (fragile): inflammatory. Good mucin clot (firm): non-inflammatory.',
        method: 'String test: slow expression from syringe measuring continuous thread length; Mucin clot: fluid in 5% acetic acid assessing clot quality',
      },
      {
        name: 'Synovial Fluid - WBC Count & Differential',
        normalRange: 'WBC <200/mcL (mononuclear predominant)',
        clinicalSignificance: 'Key parameter to distinguish non-inflammatory, inflammatory, and septic arthritis.',
        interpretation: 'Non-inflammatory (200-2000): OA, trauma, chronic crystalline. Inflammatory (2000-50,000): RA, gout (often >10,000), pseudogout, reactive arthritis, psoriatic, SLE, AS. Septic (>50,000, often >100,000): septic arthritis (S. aureus, Strep, N. gonorrhoeae). PMN >75% suggests infection.',
        method: 'Hemocytometer counting with manual or automated differential on Wright-stained synovial fluid smear',
      },
      {
        name: 'Synovial Fluid - Crystal Analysis (Polarized Light)',
        normalRange: 'No crystals identified',
        clinicalSignificance: 'Definitive diagnosis of crystal arthropathies. Gold standard for gout and pseudogout.',
        interpretation: 'MSU crystals (gout): needle-shaped, strong negative birefringence (yellow when parallel to compensator axis). CPPD crystals (pseudogout): rhomboid or rod-shaped, weakly positive birefringence (blue when parallel). False positive: hemostiderin, fibrin, talc, corticosteroid crystals.',
        method: 'Compensated polarized light microscopy of fresh synovial fluid between crossed polarizers with red compensator',
      },
      {
        name: 'Monosodium Urate (MSU) Crystals - Gout',
        normalRange: 'None',
        clinicalSignificance: 'Pathognomonic for gout (monosodium urate monohydrate crystal deposition). Definitive diagnostic finding.',
        interpretation: 'Intracellular MSU crystals: acute gout flare (phagocytosed by neutrophils). Extracellular: intercritical gout. Negative birefringence (yellow parallel to compensator axis = strong negative). Needle-shaped, 2-20 um. Also found in tophi (characteristic of chronic tophaceous gout).',
        method: 'Compensated polarized light microscopy identifying negatively birefringent needle-shaped intracellular crystals',
      },
      {
        name: 'Calcium Pyrophosphate (CPPD) Crystals - Pseudogout',
        normalRange: 'None',
        clinicalSignificance: 'Pathognomonic for calcium pyrophosphate deposition disease (CPPD, formerly pseudogout).',
        interpretation: 'CPPD crystals: rhomboid, rod, or polymorphic shapes. Weakly positive birefringence (blue parallel to compensator axis). Associated with OA, trauma, hemochromatosis, hyperparathyroidism, hypomagnesemia, hypothyroidism, aging. Chondrocalcinosis on X-ray.',
        method: 'Compensated polarized light microscopy identifying rhomboid-shaped positively birefringent (blue) crystals',
      },
      {
        name: 'Synovial Fluid - Gram Stain & Culture',
        normalRange: 'No organisms seen, no growth',
        clinicalSignificance: 'Essential for diagnosing septic arthritis. Urgent identification of causative organism and antibiotic susceptibility.',
        interpretation: 'Gram stain positive: identifies morphology (GPC in clusters: S. aureus; GPC in pairs: S. pneumoniae; GNDC: N. gonorrhoeae; GNR: E. coli, Pseudomonas). Gram stain sensitivity only 50-70% in septic arthritis. Culture remains gold standard.',
        method: 'Gram stain of direct and cytocentrifuged fluid with aerobic, anaerobic, and enriched (chocolate agar with CO2) cultures',
      },
      {
        name: 'Synovial Fluid - Glucose',
        normalRange: 'Near serum glucose (within 10-20 mg/dL of serum)',
        clinicalSignificance: 'Low synovial glucose suggests increased metabolic activity from inflammation or infection.',
        interpretation: 'Low (<50% of serum, or >40 mg/dL below serum): septic arthritis (severe decrease), RA, TB arthritis, fungal arthritis. Compared to serum for accuracy. Less commonly used now due to moderate sensitivity/specificity.',
        method: 'Enzymatic (hexokinase/glucose oxidase) method on automated chemistry analyzer, paired with simultaneous serum glucose',
      },
      {
        name: 'Synovial Fluid - Total Protein',
        normalRange: '1-3 g/dL',
        clinicalSignificance: 'Increased protein reflects increased vascular permeability due to inflammation.',
        interpretation: 'Mildly elevated (3-5 g/dL): inflammatory arthritis (RA, gout, pseudogout, reactive). Highly elevated (>5 g/dL): septic arthritis, TB arthritis. Non-inflammatory: <3 g/dL. Also helpful in differentiating inflammatory from non-inflammatory effusions.',
        method: 'Automated chemistry analyzer (biuret/colorimetric method) measuring total protein concentration',
      },
      {
        name: 'Synovial Fluid - LDH',
        normalRange: '<250 IU/L (or <50% of serum upper normal)',
        clinicalSignificance: 'Elevated LDH indicates cell turnover and inflammation. Non-specific but supports inflammatory etiology.',
        interpretation: 'Elevated: inflammatory arthritis (RA, gout, pseudogout, reactive), septic arthritis (highest levels), hemarthrosis. LDH isoenzymes: LDH4 and LDH5 elevated in RA. Serial monitoring may track treatment response.',
        method: 'UV kinetic enzymatic method (LDH catalyzing lactate/pyruvate conversion with NAD/NADH detection at 340 nm)',
      },
      {
        name: 'Synovial Fluid - Complement Levels',
        normalRange: 'CH50 150-250 U/mL, C3 70-150 mg/dL, C4 10-40 mg/dL',
        clinicalSignificance: 'Low synovial complement indicates immune complex-mediated inflammation and complement consumption.',
        interpretation: 'Low complement: RA (classic finding, especially seropositive), SLE, cryoglobulinemia, viral arthritis, Reiter syndrome. Normal/elevated complement: non-inflammatory arthritis, gout, pseudogout, septic arthritis, OA. Helps differentiate RA from other inflammatory arthritides.',
        method: 'Nephelometric/turbidimetric immunoassay for C3 and C4; hemolytic assay (CH50) for total complement activity',
      },
    ]
  },
];

const UrinalysisPage = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface via-surface-container to-surface-dim pt-8 pb-12">
      {/* Header Section */}
      <section className="px-4 mb-12 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-display text-display text-primary mb-2">Urinalysis & Body Fluids</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Comprehensive clinical reference for urinalysis, body fluid analysis including cerebrospinal fluid, pleural, peritoneal, and synovial fluids with full diagnostic interpretation and method details.
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
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Fluid Types</p>
            <p className="font-headline-md text-headline-md text-primary">5</p>
          </div>
        </div>
      </section>

      {/* Subcategory Accordion */}
      <section className="px-4 max-w-7xl mx-auto">
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Urinalysis & Body Fluid Test Categories</h2>
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
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Urinalysis & Body Fluids Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-error-container/10 border border-error/40 rounded-xl p-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-error text-2xl flex-shrink-0">warning</span>
              <div>
                <h3 className="font-headline-sm text-headline-md text-error mb-2">Critical Values</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  CSF WBC &gt;100/mcL with PMN predominance, CSF glucose &lt;30 mg/dL, CSF protein &gt;150 mg/dL, synovial WBC &gt;50,000/mcL, and pleural fluid pH &lt;7.20 require immediate clinical action. Gram stain and culture results should be communicated urgently.
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
                  Urinalysis: first-morning void preferred, analyze within 1 hour (or refrigerate). CSF: transport immediately, avoid refrigerating for culture, cell counts degrade within 30 min. Body fluids: heparinize for pH, EDTA for cell counts, sterile container for culture. Collect all fluid (especially pleural/peritoneal) for maximum diagnostic yield.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="px-4 mt-16 max-w-7xl mx-auto border-t border-outline-variant pt-8">
        <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
          This urinalysis and body fluids reference is designed for healthcare professionals. Reference ranges may vary between laboratories. Always correlate laboratory findings with clinical presentation and radiographic findings.
        </p>
      </section>
    </div>
  );
};

export { subcategories };
export default UrinalysisPage;
