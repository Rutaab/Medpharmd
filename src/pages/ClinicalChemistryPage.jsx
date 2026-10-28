import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

const pageId = 'clinical-chemistry';

const subcategories = [
  {
    id: 'cmp',
    title: 'Comprehensive Metabolic Panel (CMP)',
    icon: 'monitor_heart',
    color: 'from-blue-600 to-blue-400',
    description: 'Standard panel of 14 tests assessing glucose, electrolytes, renal function, liver function, and protein status.',
    tests: [
      {
        name: 'Glucose (Fasting)',
        normalRange: '70-100 mg/dL',
        clinicalSignificance: 'Primary energy source. Elevated in diabetes, impaired glucose tolerance, and stress response.',
        interpretation: '100-125 mg/dL: impaired fasting glucose (pre-diabetes). >126 mg/dL on two occasions: diabetes. <70 mg/dL: hypoglycemia (insulin overdose, insulinoma, liver failure, starvation).',
        method: 'Hexokinase/glucose-6-phosphate dehydrogenase (G6PD) enzymatic method, spectrophotometric detection of NADPH at 340 nm',
      },
      {
        name: 'Blood Urea Nitrogen (BUN)',
        normalRange: '7-20 mg/dL',
        clinicalSignificance: 'Waste product of protein metabolism cleared by kidneys. Reflects renal function and hydration status.',
        interpretation: 'Elevated: renal impairment, dehydration, high-protein diet, GI bleeding, catabolic states. Decreased: liver failure, overhydration, pregnancy, low-protein diet.',
        method: 'Urease/GLDH enzymatic method (BUN); Jaffe kinetic or enzymatic method (creatinine)',
      },
      {
        name: 'Sodium (Na)',
        normalRange: '136-145 mEq/L',
        clinicalSignificance: 'Major extracellular cation. Primary determinant of plasma osmolality and volume status.',
        interpretation: 'Hyponatremia (<136): fluid overload, SIADH, vomiting/diarrhea, diuretics, adrenal insufficiency, polydipsia. Hypernatremia (>145): dehydration, diabetes insipidus, excess sodium administration.',
        method: 'Direct or indirect ion-selective electrode (ISE) potentiometry',
      },
      {
        name: 'Potassium (K)',
        normalRange: '3.5-5.1 mEq/L',
        clinicalSignificance: 'Major intracellular cation. Essential for neuromuscular function and cardiac conduction.',
        interpretation: 'Hypokalemia (<3.5): diuretics, vomiting/diarrhea, hyperaldosteronism, insulin therapy. Hyperkalemia (>5.1): renal failure, ACEi/ARBs, potassium-sparing diuretics, tumor lysis, hemolysis. Critical: <2.5 or >6.5 requires immediate intervention.',
        method: 'Ion-selective electrode (ISE) potentiometry with valinomycin-based potassium-selective membrane',
      },
      {
        name: 'Chloride (Cl)',
        normalRange: '98-106 mEq/L',
        clinicalSignificance: 'Major extracellular anion. Follows sodium to maintain electrical neutrality. Helps assess acid-base status.',
        interpretation: 'Hyperchloremia: metabolic acidosis, diarrhea, renal tubular acidosis, saline overload. Hypochloremia: vomiting, metabolic alkalosis, SIADH, diuretics.',
        method: 'Ion-selective electrode (ISE) potentiometry or coulometric titration with amperometric endpoint detection',
      },
      {
        name: 'Carbon Dioxide / Bicarbonate (CO2)',
        normalRange: '23-30 mEq/L',
        clinicalSignificance: 'Reflects bicarbonate level. Primary buffer in blood. Used to assess acid-base status (metabolic component).',
        interpretation: 'Low: metabolic acidosis (DKA, lactic acidosis, diarrhea, renal failure). High: metabolic alkalosis (vomiting, diuretics, hyperaldosteronism).',
        method: 'Enzymatic method (phosphoenolpyruvate carboxylase/malate dehydrogenase with NADH oxidation) or ISE, spectrophotometric detection at 340 nm',
      },
      {
        name: 'Calcium (Total)',
        normalRange: '8.5-10.5 mg/dL',
        clinicalSignificance: 'Essential for bone mineralization, muscle contraction, nerve transmission, and blood clotting.',
        interpretation: 'Hypercalcemia (>10.5): hyperparathyroidism, malignancy (bone mets, multiple myeloma), sarcoidosis, vitamin D excess, thiazides. Hypocalcemia (<8.5): CKD, hypoparathyroidism, vitamin D deficiency, pancreatitis, rhabdomyolysis. Correct for albumin.',
        method: 'Arsenazo III or o-cresolphthalein colorimetric method, spectrophotometric detection at 570-650 nm',
      },
      {
        name: 'Corrected Calcium',
        normalRange: '8.5-10.5 mg/dL (corrected)',
        clinicalSignificance: 'Adjusts total calcium for albumin levels. Corrected Ca = Measured Ca + 0.8 x (4 - Albumin).',
        interpretation: 'Provides accurate calcium status when albumin is abnormal. Falsely low total Ca with normal ionized Ca in hypoalbuminemia.',
        method: 'Calculated from total calcium (Arsenazo III colorimetric) and albumin (BCG dye-binding) using correction formula',
      },
      {
        name: 'Albumin',
        normalRange: '3.4-5.4 g/dL',
        clinicalSignificance: 'Major serum protein produced by liver. Reflects nutritional status and liver synthetic function. Negative acute phase reactant.',
        interpretation: 'Low: liver disease (cirrhosis, hepatitis), nephrotic syndrome, malnutrition, malabsorption, acute phase response. High: dehydration (relative increase).',
        method: 'Bromocresol green (BCG) or bromocresol purple (BCP) dye-binding colorimetric method, spectrophotometric detection at 600-630 nm',
      },
      {
        name: 'Total Protein',
        normalRange: '6.0-8.0 g/dL',
        clinicalSignificance: 'Sum of albumin and globulins. Non-specific marker of nutritional and disease status.',
        interpretation: 'Low: liver disease, nephrotic syndrome, malnutrition, chronic disease. High: dehydration, multiple myeloma (M-spike increase in globulins).',
        method: 'Biuret colorimetric method, cupric ions form violet coordination complex with peptide bonds, spectrophotometric detection at 540-560 nm',
      },
      {
        name: 'Anion Gap',
        normalRange: '8-12 mEq/L',
        clinicalSignificance: 'Na - (Cl + HCO3). Helps classify metabolic acidosis.',
        interpretation: 'High anion gap (>12): MUDPILES - Methanol, Uremia, DKA, Propylene glycol/Phenformin, Iron/INH, Lactic acidosis, Ethanol/Ethylene glycol, Salicylates. Normal gap (hyperchloremic): diarrhea, RTA, acetazolamide.',
        method: 'Calculated from sodium (ISE), chloride (ISE or coulometric), and bicarbonate (enzymatic method)',
      },
      {
        name: 'Osmolality (Serum)',
        normalRange: '275-295 mOsm/kg',
        clinicalSignificance: 'Concentration of solutes in plasma. Calculated: 2Na + Glucose/18 + BUN/2.8.',
        interpretation: 'High: dehydration, hypernatremia, hyperglycemia, ethanol/methanol/ethylene glycol ingestion. Low: overhydration, SIADH, hyponatremia. Osmolar gap >10 suggests toxic alcohol ingestion.',
        method: 'Freezing point depression osmometry or calculated from serum sodium, glucose, and BUN',
      },
    ]
  },
  {
    id: 'lft',
    title: 'Liver Function Tests (LFTs)',
    icon: 'monitor_heart',
    color: 'from-green-600 to-green-400',
    description: 'Comprehensive assessment of liver injury, cholestasis, synthetic function, and metabolic capacity.',
    tests: [
      {
        name: 'Alanine Aminotransferase (ALT)',
        normalRange: '10-40 U/L',
        clinicalSignificance: 'Cytosolic enzyme predominantly in hepatocytes. Most specific marker for hepatocellular injury.',
        interpretation: 'Elevated: viral hepatitis (1000s), drug-induced liver injury (statins, paracetamol, INH), alcoholic hepatitis, NAFLD, ischemic hepatitis. Mild elevation: 40-200 U/L, Moderate: 200-1000, Severe: >1000.',
        method: 'NADH-coupled UV kinetic assay (ALT-LDH coupled enzyme reaction), spectrophotometric detection of NADH consumption at 340 nm',
      },
      {
        name: 'Aspartate Aminotransferase (AST)',
        normalRange: '10-40 U/L',
        clinicalSignificance: 'Mitochondrial and cytosolic enzyme found in liver, heart, muscle, kidney, and brain. Less specific than ALT.',
        interpretation: 'Elevated: same as ALT plus myocardial infarction, muscle injury, hemolysis. AST:ALT >2:1 suggests alcoholic liver disease. AST:ALT >1 in cirrhosis. ALT > AST in viral hepatitis and NAFLD.',
        method: 'NADH-coupled UV kinetic assay (AST-MDH coupled enzyme reaction), spectrophotometric detection of NADH consumption at 340 nm',
      },
      {
        name: 'AST:ALT Ratio',
        normalRange: '<1 (ALT slightly higher than AST)',
        clinicalSignificance: 'Ratio pattern helps differentiate causes of liver disease.',
        interpretation: '>2:1: alcoholic liver disease, Wilson disease (with ALP <40). >1: cirrhosis, chronic hepatitis (bridging fibrosis). <1: acute viral hepatitis, NAFLD, acute drug injury.',
        method: 'Calculated from AST and ALT concentrations measured by NADH-coupled UV kinetic assays',
      },
      {
        name: 'Alkaline Phosphatase (ALP)',
        normalRange: '44-147 U/L',
        clinicalSignificance: 'Enzyme in liver (bile ducts), bone, intestine, and placenta. Elevated in cholestasis and bone disorders.',
        interpretation: 'Elevated (hepatic): biliary obstruction (gallstones, stricture, tumor), cholangitis, drug-induced cholestasis, PBC, PSC. Elevated (bone): Paget disease, osteomalacia, fractures, bone metastases, growing children, hyperparathyroidism.',
        method: 'p-Nitrophenyl phosphate (pNPP) substrate colorimetric kinetic assay, spectrophotometric detection of p-nitrophenol at 405 nm',
      },
      {
        name: 'Gamma-Glutamyl Transferase (GGT)',
        normalRange: '8-61 U/L',
        clinicalSignificance: 'Membrane-bound enzyme in hepatocytes and bile ducts. Very sensitive but non-specific marker of hepatobiliary disease.',
        interpretation: 'Elevated: alcohol use (induction), biliary obstruction, drug-induced (phenytoin, barbiturates, warfarin), NAFLD, pancreatic disease. Used to confirm hepatic origin of elevated ALP (if GGT elevated, ALP is from liver).',
        method: 'L-gamma-glutamyl-p-nitroanilide substrate colorimetric kinetic assay, spectrophotometric detection of p-nitroaniline at 405 nm',
      },
      {
        name: '5-Nucleotidase (5-NT)',
        normalRange: '2-11 U/L',
        clinicalSignificance: 'Membrane-bound enzyme specific to liver. Helps distinguish hepatic from bone source of elevated ALP.',
        interpretation: 'Elevated: cholestasis (parallels ALP of hepatic origin), biliary obstruction, drug-induced cholestasis. Normal when ALP elevation is from bone.',
        method: 'AMP substrate with phosphate detection via ammonium molybdate colorimetric reaction, spectrophotometric detection at 340 nm (UV) or 660 nm (molybdenum blue)',
      },
      {
        name: 'Total Bilirubin',
        normalRange: '0.1-1.2 mg/dL',
        clinicalSignificance: 'Breakdown product of heme from RBCs. Increased in hemolysis, liver disease, and biliary obstruction.',
        interpretation: 'Unconjugated predominance: hemolysis, Gilbert syndrome (mild, <3 mg/dL), Crigler-Najjar. Conjugated predominance: biliary obstruction, hepatitis, drug-induced, Dubin-Johnson, Rotor syndrome. Jaundice visible >2.5 mg/dL.',
        method: 'Jendrassik-Grof diazo method with caffeine/benzoate accelerator, spectrophotometric detection of azobilirubin at 540-550 nm',
      },
      {
        name: 'Direct (Conjugated) Bilirubin',
        normalRange: '0.1-0.3 mg/dL',
        clinicalSignificance: 'Water-soluble bilirubin conjugated by the liver. Elevated in cholestatic conditions.',
        interpretation: 'Direct > 50% of total: obstructive jaundice, hepatocellular injury with impaired excretion. Direct < 20%: hemolytic or unconjugated hyperbilirubinemia.',
        method: 'Diazo method without accelerator in aqueous buffer, spectrophotometric detection of azobilirubin at 540 nm',
      },
      {
        name: 'Indirect (Unconjugated) Bilirubin',
        normalRange: '0.2-0.8 mg/dL',
        clinicalSignificance: 'Calculated by subtracting direct from total bilirubin. Fat-soluble, bound to albumin.',
        interpretation: 'Elevated: hemolysis, ineffective erythropoiesis, Gilbert syndrome, Crigler-Najjar, neonatal jaundice.',
        method: 'Calculated from total bilirubin minus direct bilirubin measured by Jendrassik-Grof diazo method',
      },
      {
        name: 'Prothrombin Time (PT/INR)',
        normalRange: '11-13.5 sec / INR 0.8-1.2',
        clinicalSignificance: 'Measures hepatic synthetic function. Factors II, VII, IX, X are synthesized in liver (vitamin K-dependent).',
        interpretation: 'Prolonged: liver disease (factor deficiency), vitamin K deficiency, warfarin, DIC. In liver disease, prolonged PT that does NOT correct with vitamin K suggests hepatocellular failure.',
        method: 'Thromboplastin reagent with calcium chloride activating extrinsic pathway, optical or mechanical clot detection',
      },
      {
        name: 'Albumin (Hepatic Synthetic)',
        normalRange: '3.4-5.4 g/dL',
        clinicalSignificance: 'Major protein synthesized exclusively by liver. Half-life ~20 days. Marker of chronic liver disease.',
        interpretation: 'Low: cirrhosis (portal hypertension), chronic hepatitis, acute liver failure (late). Used in Child-Pugh and MELD scores for cirrhosis prognosis.',
        method: 'Bromocresol green (BCG) dye-binding colorimetric method, spectrophotometric detection at 630 nm',
      },
      {
        name: 'Ammonia',
        normalRange: '15-45 mcg/dL',
        clinicalSignificance: 'Neurotoxic byproduct of nitrogen metabolism. Normally converted to urea in liver.',
        interpretation: 'Elevated: hepatic encephalopathy, liver failure, Reye syndrome, portosystemic shunt, urea cycle disorders, GI bleeding. Correlation with encephalopathy severity is limited.',
        method: 'Glutamate dehydrogenase (GLDH) enzymatic method with NADPH, spectrophotometric detection at 340 nm or fluorometric detection',
      },
      {
        name: 'Lactate Dehydrogenase (LDH)',
        normalRange: '140-280 U/L',
        clinicalSignificance: 'Cytosolic enzyme found in most tissues. Non-specific marker of cell injury and turnover.',
        interpretation: 'Elevated: MI (LDH1 > LDH2), hemolysis, hepatitis, malignancy (lymphoma, germ cell), PE, muscle injury, renal infarction. LDH1 > LDH2: MI. LDH5 elevated: liver/muscle damage.',
        method: 'NADH-coupled UV kinetic assay (lactate-to-pyruvate), spectrophotometric detection of NADH formation at 340 nm',
      },
    ]
  },
  {
    id: 'lipids',
    title: 'Lipid Profile & Cardiovascular Risk',
    icon: 'favorite',
    color: 'from-red-600 to-red-400',
    description: 'Assessment of cardiovascular risk through measurement of cholesterol fractions and triglycerides.',
    tests: [
      {
        name: 'Total Cholesterol',
        normalRange: '< 200 mg/dL (desirable)',
        clinicalSignificance: 'Sum of LDL, HDL, and VLDL cholesterol. Major modifiable risk factor for atherosclerosis.',
        interpretation: '200-239: borderline high. >240: high. Elevated: familial hypercholesterolemia, hypothyroidism, nephrotic syndrome, cholestasis, diabetes. Decreased: hyperthyroidism, liver disease, malnutrition, statin therapy.',
        method: 'CHOD-PAP enzymatic method (cholesterol esterase, cholesterol oxidase, peroxidase with Trinder reaction), spectrophotometric detection of quinoneimine dye at 500-520 nm',
      },
      {
        name: 'LDL Cholesterol (LDL-C)',
        normalRange: '< 100 mg/dL (optimal), < 70 mg/dL (very high risk)',
        clinicalSignificance: 'Primary atherogenic lipoprotein. Primary target for lipid-lowering therapy.',
        interpretation: '100-129: near optimal. 130-159: borderline high. 160-189: high. >190: very high (consider FH). Elevated: familial hypercholesterolemia, diet, hypothyroidism, nephrotic syndrome, cholestasis.',
        method: 'Friedewald calculation or direct homogeneous enzymatic assay with selective detergents, CHOD-PAP Trinder reaction, spectrophotometric detection at 500-520 nm',
      },
      {
        name: 'HDL Cholesterol (HDL-C)',
        normalRange: 'Male: >40 mg/dL, Female: >50 mg/dL',
        clinicalSignificance: 'Anti-atherogenic lipoprotein. Promotes reverse cholesterol transport. Low HDL is an independent CV risk factor.',
        interpretation: '<40 mg/dL (low): metabolic syndrome, diabetes, smoking, obesity, sedentary lifestyle, anabolic steroids. >60 mg/dL: protective (negative risk factor).',
        method: 'Direct homogeneous enzymatic assay with selective detergents for non-HDL blockade, or phosphotungstic acid/MgCl2 precipitation method, CHOD-PAP Trinder reaction',
      },
      {
        name: 'Non-HDL Cholesterol',
        normalRange: '< 130 mg/dL (optimal)',
        clinicalSignificance: 'Total cholesterol minus HDL. Includes all atherogenic lipoproteins (LDL, VLDL, IDL, Lp(a)).',
        interpretation: 'Preferred secondary target in patients with diabetes or metabolic syndrome. Does not require fasting. Target: 30 mg/dL higher than LDL target.',
        method: 'Calculated from total cholesterol (CHOD-PAP) minus HDL cholesterol (direct homogeneous enzymatic assay)',
      },
      {
        name: 'Triglycerides',
        normalRange: '< 150 mg/dL (fasting)',
        clinicalSignificance: 'Major form of dietary fat transport. Elevated levels increase cardiovascular risk and pancreatitis risk.',
        interpretation: '150-199: borderline high. 200-499: high. >500: very high (pancreatitis risk). Elevated: diabetes, metabolic syndrome, obesity, alcohol, hypothyroidism, renal disease, high-carb diet.',
        method: 'GPO-PAP enzymatic method (lipase, glycerol kinase, glycerol-3-phosphate oxidase, peroxidase with Trinder reaction), spectrophotometric detection of quinoneimine dye at 500-520 nm',
      },
      {
        name: 'VLDL Cholesterol',
        normalRange: '5-40 mg/dL',
        clinicalSignificance: 'Triglyceride-rich lipoprotein synthesized by liver. Precursor to LDL.',
        interpretation: 'Calculated as triglycerides/5. Elevated in hypertriglyceridemia, diabetes, obesity, alcohol excess.',
        method: 'Calculated as triglycerides divided by 5 using the Friedewald formula (GPO-PAP enzymatic method)',
      },
      {
        name: 'Lipoprotein(a) [Lp(a)]',
        normalRange: '< 30 mg/dL',
        clinicalSignificance: 'LDL-like particle with attached apolipoprotein(a). Genetic risk factor for ASCVD and aortic stenosis.',
        interpretation: '>50 mg/dL (or >125 nmol/L): significantly increased cardiovascular risk. Levels are genetically determined and minimally affected by lifestyle or statins. Niacin and PCSK9 inhibitors may reduce Lp(a).',
        method: 'Immunoturbidimetry or nephelometry using anti-apolipoprotein(a) antibodies',
      },
      {
        name: 'Apolipoprotein B (Apo B)',
        normalRange: '< 90 mg/dL',
        clinicalSignificance: 'Primary apolipoprotein in all atherogenic lipoproteins. Better marker of CV risk than LDL-C.',
        interpretation: 'Elevated: increased atherogenic particle number (even if LDL-C is normal). Used in patients with metabolic syndrome, diabetes, or hypertriglyceridemia where LDL-C is less reliable.',
        method: 'Immunoturbidimetry or nephelometry using anti-apolipoprotein B antibodies',
      },
      {
        name: 'Apolipoprotein A-I (Apo A-I)',
        normalRange: 'Male: >120 mg/dL, Female: >140 mg/dL',
        clinicalSignificance: 'Major protein component of HDL. Reflects HDL particle number.',
        interpretation: 'Low: increased CV risk. Apo B / Apo A-I ratio is a strong predictor of cardiovascular risk. Ratio <0.7 (male) or <0.6 (female) is desirable.',
        method: 'Immunoturbidimetry or nephelometry using anti-apolipoprotein A-I antibodies',
      },
      {
        name: 'hs-CRP (High Sensitivity CRP)',
        normalRange: '< 2.0 mg/L (low risk)',
        clinicalSignificance: 'Inflammatory marker used for cardiovascular risk assessment in intermediate-risk patients.',
        interpretation: '2.0-3.0 mg/L: moderate risk. >3.0 mg/L: high risk (consider statin therapy). >10 mg/L: acute infection/inflammation (repeat after resolution).',
        method: 'High-sensitivity immunoturbidimetry or nephelometry using anti-CRP antibodies with detection limit < 0.3 mg/L',
      },
    ]
  },
  {
    id: 'electrolytes',
    title: 'Electrolytes & Acid-Base',
    icon: 'science',
    color: 'from-cyan-600 to-cyan-400',
    description: 'Comprehensive evaluation of electrolyte balance, acid-base status, and osmoregulation.',
    tests: [
      {
        name: 'Serum Osmolality',
        normalRange: '275-295 mOsm/kg',
        clinicalSignificance: 'Concentration of osmotically active particles in plasma. Calculated: 2Na + Glu/18 + BUN/2.8.',
        interpretation: 'High: hypernatremia, hyperglycemia, uremia, alcohol intoxication, mannitol. Low: hyponatremia, overhydration. Osmolar gap (>10): methanol, ethylene glycol, isopropanol, propylene glycol.',
        method: 'Freezing point depression osmometry or calculated from serum sodium, glucose, and BUN',
      },
      {
        name: 'Urine Osmolality',
        normalRange: '300-900 mOsm/kg (variable with hydration)',
        clinicalSignificance: 'Tests kidney concentrating ability. Used to differentiate causes of hyponatremia and polyuria.',
        interpretation: '>600: appropriate concentration (dehydration). <300: inappropriate dilution (primary polydipsia, DI). 300-600: renal disease (loss of concentrating ability).',
        method: 'Freezing point depression osmometry',
      },
      {
        name: 'Magnesium (Mg)',
        normalRange: '1.7-2.5 mg/dL',
        clinicalSignificance: 'Essential cofactor for ATP-dependent reactions, muscle contraction, and nerve function. Important for cardiac electrophysiology.',
        interpretation: 'Hypomagnesemia (<1.7): diuretics, alcoholism, GI losses, cisplatin, cyclosporine, PPIs. Hyper-magnesemia (>2.5): renal failure, excessive supplementation, lithium. Causes arrhythmias, neuromuscular irritability.',
        method: 'Xylidyl blue or calmagite colorimetric method, or enzymatic method (hexokinase/G6PD coupled), spectrophotometric detection',
      },
      {
        name: 'Phosphorus (PO4)',
        normalRange: '2.5-5.0 mg/dL',
        clinicalSignificance: 'Essential for ATP production, bone mineralization, and acid-base buffering. Tightly regulated by kidney.',
        interpretation: 'Hyperphosphatemia (>5.0): CKD (most common), hypoparathyroidism, tumor lysis, rhabdomyolysis, acromegaly. Hypophosphatemia (<2.5): refeeding syndrome, hyperparathyroidism, vitamin D deficiency, diuretics, phosphate binders.',
        method: 'Ammonium molybdate colorimetric method (direct UV or molybdenum blue reduction), spectrophotometric detection at 340 nm or 660-700 nm',
      },
      {
        name: 'Anion Gap (Urine)',
        normalRange: 'Negative (typically 0 to -20 mEq/L)',
        clinicalSignificance: 'Used to evaluate hyperchloremic metabolic acidosis. Calculated as Na + K - Cl.',
        interpretation: 'Negative gap (normal): appropriate ammonium excretion (diarrhea). Positive gap: impaired ammonium excretion (RTA type 1, 4). Helps differentiate renal from extra-renal causes of acidosis.',
        method: 'Calculated from urine sodium, potassium, and chloride measured by ion-selective electrode (ISE) potentiometry',
      },
      {
        name: 'Fractional Excretion of Sodium (FENa)',
        normalRange: '<1% (pre-renal), >2% (intrinsic renal)',
        clinicalSignificance: '(Urine Na x Plasma Cr) / (Plasma Na x Urine Cr) x 100. Differentiates pre-renal AKI from ATN.',
        interpretation: '<1%: pre-renal azotemia (dehydration, CHF, cirrhosis). >2%: intrinsic renal disease (ATN, interstitial nephritis). 1-2%: borderline. Note: FENa may be <1% in contrast nephropathy and myoglobinuric ARF.',
        method: 'Calculated from urine sodium (ISE), plasma sodium (ISE), urine creatinine, and plasma creatinine using standard formula',
      },
      {
        name: 'Blood Gas (ABG/VBG) - pH',
        normalRange: 'Arterial: 7.35-7.45, Venous: 7.31-7.41',
        clinicalSignificance: 'Negative logarithm of hydrogen ion concentration. Primary determinant of acid-base status.',
        interpretation: '<7.35: acidemia (respiratory or metabolic). >7.45: alkalemia. Compensation rule: Respiratory acidosis - pH 0.08 per 10 mmHg PCO2 change. Metabolic - pH 0.15 per 10 mEq/L HCO3 change.',
        method: 'pH-sensitive glass electrode potentiometry in blood gas analyzer, measured at 37°C with temperature correction',
      },
      {
        name: 'Blood Gas - PCO2',
        normalRange: '35-45 mmHg (arterial)',
        clinicalSignificance: 'Partial pressure of CO2. Reflects respiratory component of acid-base balance (alveolar ventilation).',
        interpretation: '>45: respiratory acidosis (hypoventilation - COPD, sedation, neuromuscular). <35: respiratory alkalosis (hyperventilation - anxiety, PE, pain, liver disease).',
        method: 'Severinghaus-type PCO2 electrode (pH-sensitive glass electrode with CO2-permeable silicone membrane and bicarbonate buffer)',
      },
      {
        name: 'Blood Gas - HCO3',
        normalRange: '22-26 mEq/L (arterial)',
        clinicalSignificance: 'Calculated bicarbonate from blood gas. Reflects metabolic component.',
        interpretation: 'Low: metabolic acidosis (DKA, lactic, renal). High: metabolic alkalosis (vomiting, diuretics). Compare with serum CO2 from BMP (should be similar within 2-3 mEq/L).',
        method: 'Calculated from measured pH and PCO2 using the Henderson-Hasselbalch equation',
      },
      {
        name: 'Blood Gas - PO2',
        normalRange: '80-100 mmHg (arterial on room air)',
        clinicalSignificance: 'Partial pressure of oxygen in arterial blood. Assesses oxygenation status.',
        interpretation: '60-80 mmHg: mild hypoxemia. 40-60 mmHg: moderate. <40 mmHg: severe. <60 mmHg on FiO2 >60%: ARDS (P/F ratio = PaO2/FiO2 <300 diagnostic for ALI, <200 for ARDS).',
        method: 'Clark-type polarographic oxygen electrode (platinum cathode and Ag/AgCl anode) with amperometric detection at -0.6 to -0.8 V',
      },
      {
        name: 'Blood Gas - Base Excess',
        normalRange: '-2 to +2 mEq/L',
        clinicalSignificance: 'Amount of acid or base needed to normalize pH at standard PCO2. Helps quantify metabolic component.',
        interpretation: 'Negative base excess: metabolic acidosis. Positive: metabolic alkalosis. Corrects pH for PCO2 changes to isolate metabolic component.',
        method: 'Calculated from measured pH, PCO2, and HCO3 using the Van Slyke equation or Siggaard-Andersen nomogram',
      },
      {
        name: 'Lactate',
        normalRange: '0.5-1.0 mmol/L',
        clinicalSignificance: 'Product of anaerobic metabolism. Marker of tissue hypoperfusion, hypoxia, and mitochondrial dysfunction.',
        interpretation: '2-4 mmol/L: mild hyperlactatemia (compensated shock, seizures, exercise, liver dysfunction). >4 mmol/L: severe (lactic acidosis - sepsis, cardiogenic/hypovolemic shock, mesenteric ischemia, metformin (rare)). >8: high mortality.',
        method: 'Lactate oxidase enzymatic method with chromogenic Trinder reaction (spectrophotometric) or amperometric enzyme electrode detection',
      },
    ]
  },
  {
    id: 'renal',
    title: 'Renal Function & Urinalysis',
    icon: 'water_drop',
    color: 'from-indigo-600 to-indigo-400',
    description: 'Assessment of glomerular filtration, tubular function, and urine analysis for kidney disease diagnosis and monitoring.',
    tests: [
      {
        name: 'eGFR (Estimated GFR)',
        normalRange: '> 90 mL/min/1.73m2',
        clinicalSignificance: 'Estimated glomerular filtration rate using CKD-EPI or MDRD equations incorporating creatinine, age, sex, and race.',
        interpretation: 'Stage 1: >90 (normal, kidney damage present). Stage 2: 60-89 (mild). Stage 3a: 45-59 (mild-moderate). Stage 3b: 30-44 (moderate-severe). Stage 4: 15-29 (severe). Stage 5: <15 (kidney failure).',
        method: 'Calculated from serum creatinine (Jaffe or enzymatic) using CKD-EPI 2021 or MDRD equation incorporating age, sex, and creatinine',
      },
      {
        name: 'Creatinine Clearance (CrCl)',
        normalRange: 'Male: 97-137 mL/min, Female: 88-128 mL/min',
        clinicalSignificance: 'Calculated using Cockcroft-Gault formula. Used for drug dosing in renal impairment.',
        interpretation: 'Directly measured from 24-hour urine collection (most accurate). Calculated CrCl used for drug dose adjustments (particularly for renally cleared drugs like vancomycin, aminoglycosides, DOACs).',
        method: 'Calculated using Cockcroft-Gault formula from serum creatinine, age, weight, and sex',
      },
      {
        name: 'BUN:Creatinine Ratio',
        normalRange: '10:1 to 20:1',
        clinicalSignificance: 'Helps differentiate pre-renal from intrinsic renal causes of elevated creatinine.',
        interpretation: '>20:1: pre-renal (dehydration, CHF, cirrhosis, GI bleed). Normal 10-20: intrinsic renal disease. <10:1: liver disease, malnutrition, SIADH.',
        method: 'Calculated from BUN (urease/GLDH enzymatic) and creatinine (Jaffe or enzymatic) measured on same sample',
      },
      {
        name: 'Cystatin C',
        normalRange: '0.5-1.2 mg/L',
        clinicalSignificance: 'Alternative GFR marker produced by all nucleated cells. Less affected by muscle mass, age, sex, and diet than creatinine.',
        interpretation: 'Elevated: decreased GFR (more sensitive than creatinine for mild GFR reduction). Used when creatinine is unreliable (elderly, amputees, vegetarians, cirrhosis). Cystatin C-based eGFR is often more accurate.',
        method: 'Particle-enhanced turbidimetric immunoassay (PETIA) or nephelometric immunoassay (PENIA) using anti-cystatin C antibody-coated particles',
      },
      {
        name: 'Urine Protein / Proteinuria',
        normalRange: '< 150 mg/day (< 30 mg albumin/g Cr)',
        clinicalSignificance: 'Presence of protein in urine. Marker of glomerular or tubular damage.',
        interpretation: 'Microalbuminuria: 30-300 mg/g Cr (early diabetic nephropathy). Macroalbuminuria >300 mg/g Cr: overt glomerular disease. Nephrotic range: >3.5 g/day. Causes: diabetes, hypertension, GN, amyloidosis.',
        method: 'Turbidimetric method (benzethonium chloride or sulfosalicylic acid), dye-binding method (pyrogallol red-molybdate or Coomassie Brilliant Blue), or dipstick colorimetry',
      },
      {
        name: 'Urine Albumin-to-Creatinine Ratio (UACR)',
        normalRange: '< 30 mg/g',
        clinicalSignificance: 'Spot urine measurement for albuminuria screening. More convenient than 24-hour collection.',
        interpretation: '30-300 mg/g: microalbuminuria (early nephropathy in diabetes, CVD risk). >300 mg/g: macroalbuminuria (overt kidney disease). Used for CKD staging and monitoring progression.',
        method: 'Urine albumin by immunoturbidimetry (anti-human albumin antibodies) and urine creatinine by enzymatic method (creatininase/peroxidase), ratio calculated in mg/g',
      },
      {
        name: 'Urine Specific Gravity',
        normalRange: '1.005-1.030',
        clinicalSignificance: 'Measures urine concentration ability. Reflects hydration status and renal tubular function.',
        interpretation: '>1.030: concentrated (dehydration, SIADH, glycosuria). 1.010 (fixed): tubular dysfunction (CKD, diabetes insipidus, pyelonephritis).',
        method: 'Refractometry or dipstick reagent pad colorimetry',
      },
      {
        name: 'Urine pH',
        normalRange: '4.5-8.0',
        clinicalSignificance: 'Reflects acid excretion by kidneys. Influenced by diet, medications, and disease states.',
        interpretation: '<5.5: acidic (metabolic acidosis, high-protein diet, vitamin C, COPD, starvation). >8.0: alkaline (UTI with urea-splitting organisms, metabolic alkalosis, vegetarian diet, RTA, post-prandial).',
        method: 'Dipstick reagent pad (methyl red and bromthymol blue indicators) or glass pH electrode with potentiometric measurement',
      },
      {
        name: 'Urine Microscopy / Sediment',
        normalRange: 'RBC: 0-2/HPF, WBC: 0-5/HPF, Casts: few hyaline, Crystals: occasional',
        clinicalSignificance: 'Direct microscopic examination of urine sediment for cells, casts, crystals, and organisms.',
        interpretation: 'RBC casts: glomerulonephritis. WBC casts: pyelonephritis, interstitial nephritis. Waxy/broad casts: CKD. Dysmorphic RBCs: glomerular source. Eosinophiluria: drug-induced interstitial nephritis. Acanthocytes: glomerular hematuria.',
        method: 'Manual centrifugation at 1500-2000 rpm for 5 minutes with microscopic examination, or automated flow microscopy with digital imaging and particle classification',
      },
      {
        name: 'Urine Electrolytes (Na, K, Cl)',
        normalRange: 'Urine Na: 40-220 mEq/L (varies with intake)',
        clinicalSignificance: 'Used to evaluate volume status, AKI differential, and electrolyte disorders.',
        interpretation: 'Urine Na <20: pre-renal state (kidneys conserving Na). Urine Na >40: ATN, diuretic use, Addison disease. Used with FENa for AKI differentiation. Spot urine K used for hypokalemia evaluation.',
        method: 'Ion-selective electrode (ISE) potentiometry with urine-specific calibrators for sodium, potassium, and chloride measurement',
      },
    ]
  },
  {
    id: 'cardiac-enzymes',
    title: 'Cardiac Markers & Enzymes',
    icon: 'favorite',
    color: 'from-rose-600 to-rose-400',
    description: 'Biochemical markers for acute coronary syndrome detection, heart failure assessment, and myocardial injury evaluation.',
    tests: [
      {
        name: 'High-Sensitivity Troponin I (hs-cTnI)',
        normalRange: '< 0.04 ng/mL (99th percentile)',
        clinicalSignificance: 'Gold standard for acute MI diagnosis. Highly specific for cardiac tissue. Detection of minor myocardial injury.',
        interpretation: 'Rise/fall pattern with at least one value >99th percentile: acute MI. Chronic mild elevation: CKD, CHF, LVH, stable CAD. Serial testing at 0h and 3h (or 0h and 1h with high-sensitivity assays).',
        method: 'Chemiluminescent immunoassay (CLIA) or electrochemiluminescent immunoassay (ECLIA) with sandwich format using anti-cTnI antibodies',
      },
      {
        name: 'High-Sensitivity Troponin T (hs-cTnT)',
        normalRange: '< 0.014 ng/mL',
        clinicalSignificance: 'Same clinical utility as cTnI. Minor differences in clearance and assay characteristics.',
        interpretation: '0h <12 ng/L + 1h delta <3 ng/L: rule-out (NPV >99%). 0h >52 ng/L or 1h delta >5 ng/L: rule-in. Moderate values require 3h testing.',
        method: 'Electrochemiluminescent immunoassay (ECLIA) with sandwich format using biotinylated capture and ruthenium complex-labeled detection antibodies',
      },
      {
        name: 'CK-MB',
        normalRange: '<5% of total CK or <25 U/L',
        clinicalSignificance: 'Creatine kinase MB isoenzyme. More specific for cardiac muscle than total CK but less specific than troponin.',
        interpretation: 'Rises 4-6h post-MI, peaks at 12-24h, returns to normal in 2-3 days. Useful for detecting reinfarction (normalizes faster than troponin). Ratio CK-MB/total CK >2.5-3 suggests cardiac source.',
        method: 'Immunoinhibition activity assay or chemiluminescent mass immunoassay (CLIA) with sandwich format using anti-CK-MB antibodies',
      },
      {
        name: 'Myoglobin',
        normalRange: '25-72 ng/mL',
        clinicalSignificance: 'Low molecular weight heme protein. Earliest marker of myocardial necrosis (rises within 1-3h).',
        interpretation: 'Rapid rise and fall (2-4h peak). High negative predictive value (normal myoglobin at 4-6h effectively rules out MI). Not cardiac-specific (also elevated in muscle injury, renal failure).',
        method: 'Chemiluminescent immunoassay (CLIA) or electrochemiluminescent immunoassay (ECLIA) with sandwich format using anti-myoglobin antibodies',
      },
      {
        name: 'BNP (B-type Natriuretic Peptide)',
        normalRange: '< 100 pg/mL',
        clinicalSignificance: 'Hormone released from cardiac ventricles in response to volume overload and wall stress. Diagnostic for heart failure.',
        interpretation: '100-400: gray zone (HF, PE, renal failure, COPD). >400: HF likely. >1000: severe HF. Used for HF diagnosis, severity assessment, and monitoring treatment response.',
        method: 'Chemiluminescent immunoassay (CLIA) with sandwich format using anti-BNP capture and detection antibodies',
      },
      {
        name: 'NT-proBNP',
        normalRange: '< 125 pg/mL (<75 yrs), < 450 pg/mL (>75 yrs)',
        clinicalSignificance: 'N-terminal fragment of proBNP. Longer half-life than BNP. More stable in vitro.',
        interpretation: '<300: HF unlikely (NPV 98%). >900: HF likely (<50 yrs). >1800: HF likely (50-75 yrs). >2500: HF likely (>75 yrs). Used for outpatient HF monitoring, acute dyspnea differentiation, and prognosis.',
        method: 'Electrochemiluminescent immunoassay (ECLIA) with sandwich format using biotinylated capture and ruthenium complex-labeled detection antibodies',
      },
      {
        name: 'Lactate Dehydrogenase (LDH) Isoenzymes',
        normalRange: 'LDH1 (heart): 17-27%, LDH2: 27-37%',
        clinicalSignificance: 'LDH isoenzyme fractionation for cardiac vs non-cardiac source of elevated total LDH.',
        interpretation: 'LDH1 > LDH2 ("flipped pattern"): acute MI (6-12h, peaks at 24-48h). Also elevated in hemolysis, renal infarction, and myopathy. Historical marker, largely replaced by troponin.',
        method: 'Agarose gel electrophoresis at pH 8.6 with lactate/NAD/NBT/PMS staining and densitometric quantification, or immunoinhibition assay',
      },
      {
        name: 'Heart-Type Fatty Acid Binding Protein (H-FABP)',
        normalRange: '< 6 ng/mL',
        clinicalSignificance: 'Small cytoplasmic protein. Released rapidly after myocardial ischemia (1-3h). Early marker of cardiac injury.',
        interpretation: 'Elevated: MI (earlier than troponin), cardiac ischemia, skeletal muscle injury. Less specific than troponin. Used primarily in research settings or as adjunctive early marker.',
        method: 'Enzyme-linked immunosorbent assay (ELISA) or chemiluminescent immunoassay (CLIA) with sandwich format using anti-H-FABP antibodies',
      },
      {
        name: 'Glycogen Phosphorylase BB (GPBB)',
        normalRange: '< 10 mcg/L',
        clinicalSignificance: 'Marker of myocardial ischemia (detects ischemia before necrosis). Rises within 1-4h of ischemia onset.',
        interpretation: 'Elevated: early myocardial ischemia, unstable angina, MI. Normalizes within 1-2 days. Useful for detecting early ischemia before troponin becomes positive.',
        method: 'Enzyme-linked immunosorbent assay (ELISA) with sandwich format using anti-GPBB capture and HRP-conjugated detection antibodies',
      },
    ]
  },
  {
    id: 'tdm',
    title: 'Therapeutic Drug Monitoring (TDM)',
    icon: 'science',
    color: 'from-amber-600 to-amber-400',
    description: 'Measurement of drug concentrations in blood to optimize therapeutic efficacy while minimizing toxicity.',
    tests: [
      {
        name: 'Vancomycin Trough',
        normalRange: '10-20 mcg/mL (trough). 15-20 mcg/mL for serious MRSA infections.',
        clinicalSignificance: 'Glycopeptide antibiotic. AUC/MIC ratio best predicts efficacy. Trough used as surrogate.',
        interpretation: '<10: subtherapeutic (risk of treatment failure and resistance). >20: increased nephrotoxicity risk. AUC-guided dosing preferred for serious infections. Monitor trough before 4th dose.',
        method: 'Fluorescence polarization immunoassay (FPIA), particle-enhanced turbidimetric immunoassay (PETIA), or chemiluminescent immunoassay (CLIA), competitive format',
      },
      {
        name: 'Gentamicin / Tobramycin',
        normalRange: 'Peak: 5-10 mcg/mL, Trough: <2 mcg/mL (conventional)',
        clinicalSignificance: 'Aminoglycoside antibiotics. Narrow therapeutic index requiring peak and trough monitoring.',
        interpretation: 'Trough >2: increased nephrotoxicity and ototoxicity risk. Peak <5: subtherapeutic. Extended interval dosing preferred (gentamicin 7 mg/kg). Monitor predose level at 18-24h.',
        method: 'Fluorescence polarization immunoassay (FPIA), particle-enhanced turbidimetric immunoassay (PETIA), or chemiluminescent immunoassay (CLIA), competitive format',
      },
      {
        name: 'Amikacin',
        normalRange: 'Peak: 20-40 mcg/mL, Trough: <5 mcg/mL',
        clinicalSignificance: 'Aminoglycoside for multi-drug resistant organisms. Once-daily dosing preferred.',
        interpretation: 'Trough >5: toxicity risk. Peak <20: subtherapeutic. Extended interval (15-20 mg/kg daily): monitor trough before second dose.',
        method: 'Fluorescence polarization immunoassay (FPIA), particle-enhanced turbidimetric immunoassay (PETIA), or chemiluminescent immunoassay (CLIA), competitive format',
      },
      {
        name: 'Digoxin',
        normalRange: '0.5-2.0 ng/mL (therapeutic: 0.8-2.0 for HF, 1.0-2.0 for AF)',
        clinicalSignificance: 'Cardiac glycoside for HF and AF. Narrow therapeutic index. Digoxin toxicity is life-threatening.',
        interpretation: '>2.0: toxicity risk (arrhythmias, GI, neurological). >3.0: toxicity likely. <0.5: subtherapeutic. Sample minimum 6h post-dose. Toxicity increased by hypokalemia, hypomagnesemia, hypercalcemia, renal impairment.',
        method: 'Chemiluminescent immunoassay (CLIA) or electrochemiluminescent immunoassay (ECLIA), competitive format using anti-digoxin antibodies',
      },
      {
        name: 'Lithium',
        normalRange: '0.6-1.2 mEq/L (acute mania: 0.8-1.2, maintenance: 0.6-0.8)',
        clinicalSignificance: 'Mood stabilizer for bipolar disorder. Narrow therapeutic index requiring regular monitoring.',
        interpretation: '>1.5: toxicity (tremor, ataxia, confusion). >2.0: severe toxicity (seizures, coma, renal failure). >3.5: potentially fatal (may require dialysis). <0.6: subtherapeutic. Draw 12h post-dose.',
        method: 'Ion-selective electrode (ISE) potentiometry with crown ether-based lithium-selective membrane, or colorimetric method (quinizarin or nitroxamine)',
      },
      {
        name: 'Valproic Acid',
        normalRange: '50-100 mcg/mL (epilepsy), 50-125 mcg/mL (bipolar)',
        clinicalSignificance: 'Broad-spectrum antiepileptic and mood stabilizer.',
        interpretation: '>100: increased side effects (tremor, weight gain, hepatotoxicity, thrombocytopenia). >150: toxicity (confusion, coma, hyperammonemia). <50: subtherapeutic. Monitor LFTs and ammonia with levels.',
        method: 'Chemiluminescent immunoassay (CLIA), fluorescence polarization immunoassay (FPIA), or particle-enhanced turbidimetric immunoassay (PETIA), competitive format',
      },
      {
        name: 'Phenytoin',
        normalRange: '10-20 mcg/mL (total), Free: 1-2 mcg/mL',
        clinicalSignificance: 'Sodium channel blocker AED. Non-linear (Michaelis-Menten) pharmacokinetics. Small dose changes cause large level changes.',
        interpretation: '>20: nystagmus. >30: ataxia. >40: lethargy, coma. <10: subtherapeutic. Free levels preferred in renal failure, hypoalbuminemia (adjust total for albumin).',
        method: 'Chemiluminescent immunoassay (CLIA), fluorescence polarization immunoassay (FPIA), or particle-enhanced turbidimetric immunoassay (PETIA), competitive format',
      },
      {
        name: 'Carbamazepine',
        normalRange: '4-12 mcg/mL',
        clinicalSignificance: 'AED for focal and generalized seizures. Autoinduction of metabolism causes decreased levels over 2-4 weeks.',
        interpretation: '>12: toxicity (diplopia, ataxia, dizziness, drowsiness). >20: severe toxicity (seizures, coma). <4: subtherapeutic. Autoinduction: levels may drop after 2-4 wks, requiring dose adjustment.',
        method: 'Chemiluminescent immunoassay (CLIA), fluorescence polarization immunoassay (FPIA), or particle-enhanced turbidimetric immunoassay (PETIA), competitive format',
      },
      {
        name: 'Theophylline',
        normalRange: '5-15 mcg/mL',
        clinicalSignificance: 'Methylxanthine bronchodilator for asthma/COPD. Rarely used now due to narrow TI and toxicity.',
        interpretation: '>20: toxicity (nausea, vomiting, tachycardia). >30: cardiac arrhythmias, seizures. >40: life-threatening. <5: subtherapeutic. Levels affected by drug interactions (ciprofloxacin, macrolides, rifampin, smoking).',
        method: 'Chemiluminescent immunoassay (CLIA), fluorescence polarization immunoassay (FPIA), or particle-enhanced turbidimetric immunoassay (PETIA), competitive format',
      },
      {
        name: 'Cyclosporine / Tacrolimus',
        normalRange: 'Cyclosporine: 100-400 ng/mL, Tacrolimus: 5-20 ng/mL (varies with organ and post-transplant time)',
        clinicalSignificance: 'Calcineurin inhibitors for transplant immunosuppression. Routinely monitored to balance rejection vs toxicity.',
        interpretation: 'Above range: nephrotoxicity, neurotoxicity, hypertension, diabetes (tacrolimus). Below range: rejection risk. Trough levels (C0) drawn immediately before next dose. Goal levels decrease with time post-transplant.',
        method: 'Chemiluminescent immunoassay (CLIA) with competitive format on whole blood, or liquid chromatography-tandem mass spectrometry (LC-MS/MS) with internal standard',
      },
      {
        name: 'Methotrexate',
        normalRange: '< 0.1 mcmol/L (therapeutic varies by protocol, e.g., high-dose MTX: target clearance <0.1 at 72h)',
        clinicalSignificance: 'Antimetabolite used in high doses for chemotherapy and lower doses for RA/psoriasis.',
        interpretation: 'Elevated levels at 72h: increased toxicity risk (myelosuppression, mucositis, hepatotoxicity, nephrotoxicity). Requires leucovorin rescue. High-dose MTX monitoring: levels at 24, 48, 72h post-infusion.',
        method: 'Chemiluminescent immunoassay (CLIA), fluorescence polarization immunoassay (FPIA), or high-performance liquid chromatography (HPLC) with UV detection at 307 nm',
      },
    ]
  },
];

const ClinicalChemistryPage = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface via-surface-container to-surface-dim pt-8 pb-12">
      {/* Header Section */}
      <section className="px-4 mb-12 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-display text-display text-primary mb-2">Clinical Chemistry</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Comprehensive clinical chemistry reference covering metabolic panels, liver function, lipid profile, electrolytes, renal function, cardiac markers, and therapeutic drug monitoring.
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
            <p className="font-headline-md text-headline-md text-primary">7</p>
          </div>
        </div>
      </section>

      {/* Subcategory Accordion */}
      <section className="px-4 max-w-7xl mx-auto">
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Chemistry Test Categories</h2>
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
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Laboratory Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-error-container/10 border border-error/40 rounded-xl p-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-error text-2xl flex-shrink-0">warning</span>
              <div>
                <h3 className="font-headline-sm text-headline-md text-error mb-2">Critical Values Requiring Immediate Action</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Serum Potassium &lt;2.5 or &gt;6.5 mEq/L, Glucose &lt;50 or &gt;500 mg/dL, pH &lt;7.2 or &gt;7.6, Sodium &lt;120 or &gt;160 mEq/L, Calcium &gt;13.0 mg/dL require immediate clinical intervention.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-secondary-container/10 border border-secondary/40 rounded-xl p-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl flex-shrink-0">info</span>
              <div>
                <h3 className="font-headline-sm text-headline-md text-secondary mb-2">Pre-analytical Variables</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Fasting status, time of collection, tourniquet time, sample hemolysis, and storage conditions significantly affect chemical test results. Most chemistry tests require fasting of 8-12 hours. Hemolyzed samples falsely elevate K, LDH, AST, and phosphate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="px-4 mt-16 max-w-7xl mx-auto border-t border-outline-variant pt-8">
        <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
          This clinical chemistry reference is designed for healthcare professionals. Reference ranges may vary between laboratories based on methodology and population. Always correlate laboratory findings with clinical presentation.
        </p>
      </section>
    </div>
  );
};

export { subcategories };
export default ClinicalChemistryPage;
