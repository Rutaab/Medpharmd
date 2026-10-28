import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

const pageId = 'hematology';

const subcategories = [
  {
    id: 'cbc',
    title: 'Complete Blood Count (CBC)',
    icon: 'water_drop',
    color: 'from-red-600 to-red-400',
    description: 'The cornerstone of hematological evaluation. CBC provides quantitative and qualitative assessment of all cellular blood components.',
    tests: [
      {
        name: 'Hemoglobin (Hb)',
        normalRange: 'Male: 13.5-17.5 g/dL, Female: 12.0-15.5 g/dL',
        clinicalSignificance: 'Measures oxygen-carrying capacity of blood. Decreased in anemia, increased in polycythemia.',
        interpretation: 'Low: anemia (nutritional, hemolytic, blood loss). High: polycythemia vera, COPD, high altitude.',
        method: 'Colorimetric/SLS (sodium lauryl sulfate) method using automated hematology analyzer',
      },
      {
        name: 'Hematocrit (HCT)',
        normalRange: 'Male: 38.8-50.0%, Female: 34.9-44.5%',
        clinicalSignificance: 'Percentage of blood volume occupied by RBCs. Used with Hb to classify anemia.',
        interpretation: 'Low: anemia, overhydration. High: polycythemia, dehydration.',
        method: 'Calculated from RBC count and MCV by automated analyzer, or measured by microhematocrit centrifugation',
      },
      {
        name: 'Red Blood Cell Count (RBC)',
        normalRange: 'Male: 4.35-5.65 x10^12/L, Female: 3.92-5.13 x10^12/L',
        clinicalSignificance: 'Direct count of circulating erythrocytes.',
        interpretation: 'Low: anemia, hemolysis, blood loss. High: polycythemia.',
        method: 'Impedance or optical counting method using automated hematology analyzer',
      },
      {
        name: 'White Blood Cell Count (WBC)',
        normalRange: '4.0-11.0 x10^9/L',
        clinicalSignificance: 'Total leukocyte count. First-line indicator of infection, inflammation, or hematologic malignancy.',
        interpretation: 'Leukocytosis (>11): infection, inflammation, stress, leukemia. Leukopenia (<4): viral infection, marrow suppression, autoimmune.',
        method: 'Impedance or optical counting after RBC lysis using automated hematology analyzer',
      },
      {
        name: 'Platelet Count',
        normalRange: '150-450 x10^9/L',
        clinicalSignificance: 'Essential for primary hemostasis. Thrombocytopenia increases bleeding risk, thrombocytosis increases thrombosis risk.',
        interpretation: 'Thrombocytopenia (<150): ITP, DIC, marrow failure, drug-induced. Thrombocytosis (>450): reactive, essential thrombocythemia.',
        method: 'Impedance or optical fluorescence method using automated hematology analyzer',
      },
      {
        name: 'Mean Corpuscular Volume (MCV)',
        normalRange: '80-100 fL',
        clinicalSignificance: 'Average RBC size. Classifies anemia as microcytic, normocytic, or macrocytic.',
        interpretation: 'Low MCV: iron deficiency, thalassemia, anemia of chronic disease. High MCV: B12/folate deficiency, alcohol, MDS, hypothyroidism.',
        method: 'Calculated from RBC volume distribution measured by impedance or optical method',
      },
      {
        name: 'Mean Corpuscular Hemoglobin (MCH)',
        normalRange: '27-34 pg',
        clinicalSignificance: 'Average hemoglobin content per RBC. Parallels MCV changes.',
        interpretation: 'Low: hypochromic anemias (iron deficiency, thalassemia). High: macrocytic anemias.',
        method: 'Calculated as hemoglobin divided by RBC count using automated hematology analyzer',
      },
      {
        name: 'Mean Corpuscular Hemoglobin Concentration (MCHC)',
        normalRange: '32-36 g/dL',
        clinicalSignificance: 'Average Hb concentration per volume of RBCs.',
        interpretation: 'Low: hypochromic anemia. High (rare): spherocytosis, sickle cell disease.',
        method: 'Calculated as hemoglobin divided by hematocrit using automated hematology analyzer',
      },
      {
        name: 'Red Cell Distribution Width (RDW)',
        normalRange: '11.5-14.5%',
        clinicalSignificance: 'Measures variability in RBC size (anisocytosis). Helpful in differentiating anemia types.',
        interpretation: 'High: iron deficiency (early), B12/folate deficiency, post-transfusion, MDS. Normal: thalassemia trait, ACD.',
        method: 'Calculated as coefficient of variation of RBC volume distribution from impedance or optical method',
      },
      {
        name: 'Differential Count',
        normalRange: 'Neutrophils 40-80%, Lymphocytes 20-40%, Monocytes 2-10%, Eosinophils 1-6%, Basophils <1-2%',
        clinicalSignificance: 'Relative distribution of WBC subtypes. Absolute counts should be calculated.',
        interpretation: 'Neutrophilia: bacterial infection, stress, steroids. Lymphocytosis: viral, CLL. Eosinophilia: allergy, parasitic infection, eosinophilic disorders. Monocytosis: chronic infection, recovery phase.',
        method: 'VCS (Volume, Conductivity, Scatter) technology by automated analyzer with manual smear review if flagged',
      },
      {
        name: 'Peripheral Blood Smear',
        normalRange: 'Normal morphology of all cell lines',
        clinicalSignificance: 'Direct microscopic examination of stained blood film. Confirms automated results and identifies abnormal cells.',
        interpretation: 'Identifies blasts (leukemia), schistocytes (MAHA/TTP), spherocytes (autoimmune hemolysis), sickle cells, target cells, rouleaux (multiple myeloma), toxic granulation (sepsis).',
        method: 'Manual microscopic examination of Wright-stained peripheral blood smear',
      },
      {
        name: 'Reticulocyte Count',
        normalRange: '0.5-2.5% (absolute: 25-100 x10^9/L)',
        clinicalSignificance: 'Measures bone marrow production of new RBCs. Distinguishes hypoproliferative from hyperproliferative anemia.',
        interpretation: 'High reticulocyte count: hemolysis, acute blood loss (appropriate marrow response). Low: marrow failure, nutritional deficiency, ACD.',
        method: 'Manual new methylene blue staining or automated flow cytometry with fluorescent dyes',
      },
      {
        name: 'Erythrocyte Sedimentation Rate (ESR)',
        normalRange: 'Male: 0-20 mm/hr, Female: 0-30 mm/hr',
        clinicalSignificance: 'Non-specific marker of inflammation. Rate of RBC settling in plasma over 1 hour.',
        interpretation: 'Elevated: temporal arteritis, polymyalgia rheumatica, RA, chronic infection, malignancy, pregnancy. Markedly elevated (>100): malignancy, autoimmune, chronic infection.',
        method: 'Modified Westergren method using automated or manual sedimentation measurement',
      },
    ]
  },
  {
    id: 'coagulation',
    title: 'Coagulation Studies',
    icon: 'bloodtype',
    color: 'from-blue-600 to-blue-400',
    description: 'Assess the clotting cascade, monitor anticoagulant therapy, and diagnose bleeding disorders.',
    tests: [
      {
        name: 'Prothrombin Time (PT/INR)',
        normalRange: 'PT: 11-13.5 sec, INR: 0.8-1.2',
        clinicalSignificance: 'Assesses extrinsic and common coagulation pathways (Factors VII, X, V, II, fibrinogen). Standardized for warfarin monitoring.',
        interpretation: 'Prolonged PT: warfarin therapy, liver disease, vitamin K deficiency, DIC, Factor VII deficiency. INR: 2-3 (AF/DVT therapeutic), 2.5-3.5 (mechanical valve).',
        method: 'Optical or mechanical clot detection after adding thromboplastin reagent to plasma',
      },
      {
        name: 'Activated Partial Thromboplastin Time (aPTT)',
        normalRange: '25-35 sec',
        clinicalSignificance: 'Assesses intrinsic and common pathways (Factors XII, XI, IX, VIII, X, V, II, fibrinogen). Monitors heparin therapy.',
        interpretation: 'Prolonged: heparin therapy, hemophilia A/B, Factor XI deficiency, lupus anticoagulant, DIC, liver disease. Therapeutic aPTT: 1.5-2.5x baseline for heparin.',
        method: 'Optical or mechanical clot detection after activating intrinsic pathway with phospholipid and contact activator',
      },
      {
        name: 'Thrombin Time (TT)',
        normalRange: '14-21 sec',
        clinicalSignificance: 'Measures conversion of fibrinogen to fibrin. Tests final common pathway.',
        interpretation: 'Prolonged: hypofibrinogenemia, dysfibrinogenemia, heparin contamination, DIC, direct thrombin inhibitors.',
        method: 'Optical or mechanical clot detection after adding standardized thrombin reagent to plasma',
      },
      {
        name: 'Fibrinogen (Factor I)',
        normalRange: '200-400 mg/dL',
        clinicalSignificance: 'Acute phase reactant. Essential for platelet aggregation and fibrin clot formation.',
        interpretation: 'Low: DIC, liver failure, massive transfusion (consumption). High: acute phase reaction, pregnancy, inflammation, cardiovascular risk.',
        method: 'Clauss method measuring clotting time of diluted plasma with high-concentration thrombin',
      },
      {
        name: 'D-Dimer',
        normalRange: '< 0.5 mg/L (varies by assay)',
        clinicalSignificance: 'Fibrin degradation product. Negative D-dimer has high negative predictive value for VTE.',
        interpretation: 'Elevated: DVT, PE, DIC, post-surgery, pregnancy, trauma, malignancy, recent thrombosis. High sensitivity but low specificity.',
        method: 'Immunoturbidimetric method using latex particles coated with anti-D-dimer antibodies',
      },
      {
        name: 'Bleeding Time (BT)',
        normalRange: '2-7 min',
        clinicalSignificance: 'Global test of platelet function and primary hemostasis.',
        interpretation: 'Prolonged: thrombocytopenia, von Willebrand disease, platelet dysfunction (NSAIDs, aspirin), uremia, liver disease.',
        method: 'Ivy method with standardized incision and timed blotting until bleeding stops',
      },
      {
        name: 'Fibrin Degradation Products (FDP)',
        normalRange: '< 10 mcg/mL',
        clinicalSignificance: 'Products of fibrinolysis. Elevated in conditions with excessive clot formation and breakdown.',
        interpretation: 'Elevated: DIC, DVT, PE, acute MI, severe liver disease, post-surgical.',
        method: 'Latex agglutination or immunoturbidimetric method using anti-FDP antibodies',
      },
      {
        name: 'Protein C',
        normalRange: '70-140% activity',
        clinicalSignificance: 'Vitamin K-dependent natural anticoagulant. Inactivates Factors Va and VIIIa.',
        interpretation: 'Deficiency: hereditary thrombophilia (increased VTE risk), warfarin-induced skin necrosis, liver disease, DIC.',
        method: 'Chromogenic assay using snake venom activator and chromogenic substrate for activated Protein C',
      },
      {
        name: 'Protein S',
        normalRange: 'Total: 70-140%, Free: 30-50% (varies)',
        clinicalSignificance: 'Cofactor for Protein C activation. Vitamin K-dependent.',
        interpretation: 'Deficiency: hereditary thrombophilia, pregnancy, OCP use, liver disease, DIC, warfarin therapy.',
        method: 'Functional clot-based assay or immunoassay for free and total Protein S',
      },
      {
        name: 'Antithrombin III (AT III)',
        normalRange: '80-120% activity',
        clinicalSignificance: 'Serine protease inhibitor that inactivates thrombin, Factor Xa, and other coagulation factors.',
        interpretation: 'Deficiency: hereditary thrombophilia, heparin resistance, liver disease, nephrotic syndrome, DIC.',
        method: 'Factor Xa-based chromogenic assay with excess heparin to activate AT III',
      },
      {
        name: 'Lupus Anticoagulant (LA)',
        normalRange: 'Negative',
        clinicalSignificance: 'Antiphospholipid antibody that causes paradoxical thrombotic tendency with prolonged aPTT.',
        interpretation: 'Positive: antiphospholipid syndrome, SLE, recurrent pregnancy loss, arterial/venous thrombosis. Does not correct with mixing studies.',
        method: 'dRVVT screening and confirmatory tests with mixing studies and excess phospholipids',
      },
      {
        name: 'Factor Assays (VIII, IX, XI, XII)',
        normalRange: '50-150% activity',
        clinicalSignificance: 'Measures individual coagulation factor levels. Used to diagnose specific factor deficiencies.',
        interpretation: 'Low Factor VIII: hemophilia A, vWD. Low Factor IX: hemophilia B. Low Factor XI: hemophilia C (Ashkenazi Jews). High: acute phase reaction.',
        method: 'One-stage clotting assay using factor-deficient plasma and aPTT-based detection',
      },
      {
        name: 'von Willebrand Factor (vWF)',
        normalRange: 'vWF Antigen: 50-200%, vWF Activity: 50-200%',
        clinicalSignificance: 'Carries Factor VIII and mediates platelet adhesion to subendothelium.',
        interpretation: 'Decreased: von Willebrand disease (most common inherited bleeding disorder). Increased: acute phase, pregnancy, endothelial damage.',
        method: 'Immunoturbidimetric vWF antigen assay and ristocetin cofactor activity assay',
      },
    ]
  },
  {
    id: 'hemoglobinopathies',
    title: 'Hemoglobinopathies & RBC Disorders',
    icon: 'science',
    color: 'from-green-600 to-green-400',
    description: 'Diagnostic evaluation of hemoglobin variants, hemolytic anemias, and nutritional deficiencies affecting erythropoiesis.',
    tests: [
      {
        name: 'Hemoglobin Electrophoresis / HPLC',
        normalRange: 'HbA >95%, HbA2 <3.5%, HbF <1%',
        clinicalSignificance: 'Separates and quantifies hemoglobin fractions. Gold standard for diagnosing hemoglobinopathies.',
        interpretation: 'Elevated HbA2 (>3.5%) + low MCV: beta-thalassemia trait. Elevated HbF: beta-thalassemia, HPFH, sickle cell disease. HbS band: sickle cell trait or disease. HbC, HbD, HbE: variant hemoglobins.',
        method: 'Cation-exchange HPLC or capillary electrophoresis separating hemoglobin fractions by charge',
      },
      {
        name: 'HbA2 Quantitation',
        normalRange: '2.0-3.5%',
        clinicalSignificance: 'Minor adult hemoglobin. Elevated in beta-thalassemia trait.',
        interpretation: 'Elevated: beta-thalassemia trait, megaloblastic anemia (B12/folate deficiency), hyperthyroidism. Decreased: iron deficiency, alpha-thalassemia, sideroblastic anemia.',
        method: 'Cation-exchange HPLC or capillary electrophoresis quantifying HbA2 as percentage of total hemoglobin',
      },
      {
        name: 'Hemoglobin F (HbF)',
        normalRange: '<1% (adults), higher in children',
        clinicalSignificance: 'Fetal hemoglobin. Normally replaced by HbA after 6-12 months of life.',
        interpretation: 'Elevated: beta-thalassemia major/intermedia, HPFH, sickle cell disease, juvenile myelomonocytic leukemia, MDS, pregnancy.',
        method: 'HPLC or alkali denaturation method measuring HbF resistant to alkaline denaturation',
      },
      {
        name: 'Sickle Cell Test / HbS Solubility',
        normalRange: 'Negative (no sickling)',
        clinicalSignificance: 'Screening test for hemoglobin S. Positive test indicates presence of HbS.',
        interpretation: 'Positive: sickle cell trait (HbAS) or sickle cell disease (HbSS, HbSC, HbS-beta-thal). Confirmatory testing with Hb electrophoresis required.',
        method: 'Solubility test using sodium dithionite reducing agent to detect deoxygenated HbS precipitation',
      },
      {
        name: 'Direct Coombs Test (DAT)',
        normalRange: 'Negative',
        clinicalSignificance: 'Detects antibody or complement bound to RBC surface. Used to diagnose autoimmune hemolytic anemia.',
        interpretation: 'Positive: autoimmune hemolytic anemia (warm/cold), hemolytic transfusion reaction, HDN, drug-induced hemolysis. Strength graded 1+ to 4+.',
        method: 'Tube or gel card agglutination method using anti-human globulin reagent',
      },
      {
        name: 'Indirect Coombs Test (IAT)',
        normalRange: 'Negative',
        clinicalSignificance: 'Detects unbound (free) antibodies in serum against RBC antigens. Used for antibody screening and crossmatching.',
        interpretation: 'Positive: alloantibodies (transfusion), isoimmunization (pregnancy), autoantibodies compatible with AIHA.',
        method: 'Tube or gel card method using anti-human globulin after incubating serum with reagent RBCs',
      },
      {
        name: 'Serum Iron',
        normalRange: '50-150 mcg/dL',
        clinicalSignificance: 'Measures iron bound to transferrin. Reflects recent iron intake.',
        interpretation: 'Low: iron deficiency anemia, ACD. High: hemochromatosis, iron overload, hemosiderosis, sideroblastic anemia, thalassemia.',
        method: 'Colorimetric method using ferrozine or Ferene chromogenic reagent with reducing agent',
      },
      {
        name: 'Total Iron Binding Capacity (TIBC)',
        normalRange: '250-450 mcg/dL',
        clinicalSignificance: 'Indirect measure of transferrin levels. Reflects iron storage status.',
        interpretation: 'High: iron deficiency anemia (increased transferrin production). Low: ACD, hemochromatosis, chronic disease, malignancy, protein malnutrition.',
        method: 'Iron saturation and adsorption method with colorimetric measurement of transferrin-bound iron',
      },
      {
        name: 'Transferrin Saturation',
        normalRange: '20-50%',
        clinicalSignificance: 'Serum Iron / TIBC x 100. Most sensitive indicator of iron supply for erythropoiesis.',
        interpretation: '<16%: iron deficiency (inadequate iron for erythropoiesis). >50%: iron overload/hemochromatosis.',
        method: 'Calculated as serum iron divided by TIBC multiplied by 100',
      },
      {
        name: 'Serum Ferritin',
        normalRange: 'Male: 20-200 ng/mL, Female: 15-150 ng/mL',
        clinicalSignificance: 'Reflects body iron stores. The most sensitive and specific test for iron deficiency.',
        interpretation: 'Low (<15): iron deficiency anemia (highly specific). High: hemochromatosis, chronic inflammation, liver disease, malignancy, ACUTE PHASE REACTANT.',
        method: 'Chemiluminescence immunoassay (CLIA) using anti-ferritin antibody-coated paramagnetic particles',
      },
      {
        name: 'Vitamin B12',
        normalRange: '200-900 pg/mL',
        clinicalSignificance: 'Essential for RBC maturation and neurological function. Deficiency causes megaloblastic anemia.',
        interpretation: 'Low: pernicious anemia, malabsorption (gastrectomy, Crohn, celiac), vegan diet, metformin, PPIs, atrophic gastritis. High: liver disease, myeloproliferative disorders.',
        method: 'Electrochemiluminescence immunoassay (ECLIA) using competitive binding with intrinsic factor',
      },
      {
        name: 'Serum Folate',
        normalRange: '3-17 ng/mL',
        clinicalSignificance: 'Required for DNA synthesis and RBC maturation. Deficiency causes megaloblastic anemia.',
        interpretation: 'Low: dietary deficiency, alcoholism, malabsorption, pregnancy, methotrexate, anticonvulsants. High: B12 deficiency (folate trap), recent supplementation.',
        method: 'Electrochemiluminescence immunoassay (ECLIA) using competitive binding with folate binding protein',
      },
      {
        name: 'Glucose-6-Phosphate Dehydrogenase (G6PD)',
        normalRange: '>7.0 U/g Hb',
        clinicalSignificance: 'X-linked enzyme deficiency causing oxidative hemolysis when exposed to triggers (oxidant drugs, fava beans, infection).',
        interpretation: 'Low: G6PD deficiency (most common enzyme deficiency worldwide, protective against malaria). Levels may be falsely normal during acute hemolysis (young RBCs have higher G6PD).',
        method: 'Quantitative UV kinetic method measuring NADPH production at 340 nm',
      },
      {
        name: 'Osmotic Fragility Test',
        normalRange: '0.30-0.45% NaCl (hemolysis starts/complete)',
        clinicalSignificance: 'Measures RBC resistance to hemolysis in hypotonic saline. Used in hereditary spherocytosis diagnosis.',
        interpretation: 'Increased fragility: hereditary spherocytosis, autoimmune hemolytic anemia. Decreased fragility: thalassemia, sickle cell disease, iron deficiency, liver disease.',
        method: 'Measurement of RBC hemolysis in serial dilutions of hypotonic saline',
      },
    ]
  },
  {
    id: 'bone-marrow',
    title: 'Bone Marrow & Special Hematology',
    icon: 'biotech',
    color: 'from-purple-600 to-purple-400',
    description: 'Advanced diagnostic techniques for evaluating bone marrow function, hematopoietic disorders, and hematologic malignancies.',
    tests: [
      {
        name: 'Bone Marrow Aspiration & Biopsy',
        normalRange: 'Normocellular marrow with adequate trilineage hematopoiesis. Myeloid:Erythroid ratio 2:1 to 4:1.',
        clinicalSignificance: 'Gold standard for diagnosing bone marrow disorders. Aspiration assesses morphology, biopsy evaluates cellularity and architecture.',
        interpretation: 'Hypercellular: CML, polycythemia vera, AML, MDS. Hypocellular: aplastic anemia, myelofibrosis, post-chemo. Infiltration: leukemia, lymphoma, myeloma, metastatic tumors, granulomas.',
        method: 'Jamshidi needle aspiration and core biopsy from posterior superior iliac crest',
      },
      {
        name: 'Flow Cytometry (Immunophenotyping)',
        normalRange: 'Normal distribution of hematopoietic cell markers.',
        clinicalSignificance: 'Identifies cell lineage and maturation stage using specific cluster of differentiation (CD) markers. Essential for leukemia/lymphoma diagnosis.',
        interpretation: 'AML: CD33, CD13, CD117, MPO+. B-ALL: CD19, CD20, CD10, TdT+. T-ALL: CD3, CD7, CD1a, TdT+. CLL: CD19, CD5, CD23, weak sIg. MM: CD38, CD138, CD56+.',
        method: 'Multi-parameter flow cytometry using fluorophore-conjugated monoclonal antibodies to CD markers',
      },
      {
        name: 'Cytogenetics / Karyotyping',
        normalRange: 'Normal male: 46,XY. Normal female: 46,XX.',
        clinicalSignificance: 'Visualizes chromosomal structure and number. Identifies clonal chromosomal abnormalities in hematologic malignancies.',
        interpretation: 't(9;22) BCR-ABL: CML, ALL. t(15;17) PML-RARA: APML. t(8;21) RUNX1-RUNX1T1: AML. Del(5q), del(7q): MDS. Trisomy 12: CLL. Complex karyotype: poor prognosis in AML/MDS.',
        method: 'G-banded karyotyping of cultured bone marrow cells arrested in metaphase',
      },
      {
        name: 'FISH (Fluorescence In Situ Hybridization)',
        normalRange: 'Negative (no rearrangement detected)',
        clinicalSignificance: 'Molecular technique detecting specific chromosomal abnormalities. Faster than conventional karyotyping.',
        interpretation: 'Positive: detects specific translocations, deletions, or amplifications when morphology suggests a particular entity. Used for monitoring minimal residual disease.',
        method: 'Fluorescence microscopy using DNA probes hybridized to interphase nuclei of bone marrow or blood',
      },
      {
        name: 'JAK2 V617F Mutation',
        normalRange: 'Negative (no mutation detected)',
        clinicalSignificance: 'Somatic mutation in the JAK2 tyrosine kinase gene. Diagnostic marker for Philadelphia-negative myeloproliferative neoplasms.',
        interpretation: 'Positive: polycythemia vera (>95%), essential thrombocythemia (50-60%), primary myelofibrosis (50-60%). Negative result does not exclude MPN (CALR, MPL mutations may be present).',
        method: 'Allele-specific PCR or real-time qPCR detecting the JAK2 V617F point mutation',
      },
      {
        name: 'CALR Mutation',
        normalRange: 'Negative (no mutation detected)',
        clinicalSignificance: 'Calreticulin gene mutation. Second most common driver mutation in MPNs.',
        interpretation: 'Positive: essential thrombocythemia (25-30%), primary myelofibrosis (20-25%). Usually mutually exclusive with JAK2 and MPL mutations.',
        method: 'Fragment analysis by capillary electrophoresis after PCR amplification of CALR exon 9',
      },
      {
        name: 'BCR-ABL (Philadelphia Chromosome)',
        normalRange: 'Negative (no rearrangement detected)',
        clinicalSignificance: 't(9;22)(q34;q11) translocation resulting in BCR-ABL fusion gene. Diagnostic for CML.',
        interpretation: 'Positive: CML (95%), ALL (25-30% adults, 2-5% children), rare cases of AML. Quantification used for monitoring treatment response (major molecular response = MR3).',
        method: 'Real-time quantitative PCR (qPCR) detecting BCR-ABL fusion transcript from reverse-transcribed RNA',
      },
      {
        name: 'Serum Protein Electrophoresis (SPEP)',
        normalRange: 'Albumin: 55-65%, Alpha-1: 2-4%, Alpha-2: 8-12%, Beta: 10-14%, Gamma: 10-18%',
        clinicalSignificance: 'Separates serum proteins by electrophoresis. Identifies monoclonal gammopathies.',
        interpretation: 'Monoclonal spike (M-spike): multiple myeloma, MGUS, Waldenstrom macroglobulinemia. Polyclonal increase: chronic inflammation, infection, autoimmune disease. Hypogammaglobulinemia: CLL, immunodeficiency.',
        method: 'Agarose gel electrophoresis or capillary zone electrophoresis separating serum protein fractions',
      },
      {
        name: 'Immunofixation Electrophoresis (IFE)',
        normalRange: 'No monoclonal immunoglobulin detected',
        clinicalSignificance: 'Identifies the specific immunoglobulin type (IgG, IgA, IgM, kappa, lambda) of a monoclonal protein.',
        interpretation: 'Identifies heavy chain (G, A, M, D, E) and light chain (kappa or lambda) type. Used to confirm and characterize M-spike from SPEP. Essential for MGUS vs myeloma differentiation.',
        method: 'Agarose gel electrophoresis with monospecific antisera to identify monoclonal immunoglobulin type',
      },
      {
        name: 'Free Light Chains (Kappa/Lambda Ratio)',
        normalRange: 'Kappa: 3.3-19.4 mg/L, Lambda: 5.7-26.3 mg/L, Ratio: 0.26-1.65',
        clinicalSignificance: 'Measures unbound kappa and lambda light chains. Highly sensitive for detecting light chain multiple myeloma and monitoring disease.',
        interpretation: 'Abnormal ratio: multiple myeloma (elevated involved chain), AL amyloidosis, light chain deposition disease. Used for monitoring response and detecting relapse (involved/uninvolved chain ratio).',
        method: 'Nephelometric or turbidimetric immunoassay using antibodies specific for free light chains (Freelite assay)',
      },
      {
        name: 'Cytokine Receptors / Soluble Markers',
        normalRange: 'Varies by marker',
        clinicalSignificance: 'Specialized markers for specific hematologic conditions.',
        interpretation: 'Soluble IL-2 receptor (sIL-2R): elevated in hairy cell leukemia, HLH, T-cell lymphoma. TNF-alpha: elevated in MDS, HLH.',
        method: 'Enzyme-linked immunosorbent assay (ELISA) using capture and detection antibodies',
      },
    ]
  },
  {
    id: 'transfusion',
    title: 'Transfusion Medicine',
    icon: 'bloodtype',
    color: 'from-orange-600 to-orange-400',
    description: 'Blood group serology, compatibility testing, and transfusion reaction workup for safe blood product administration.',
    tests: [
      {
        name: 'ABO Blood Group & Rh Typing',
        normalRange: 'Determined by antigen presence on RBC surface and antibodies in serum.',
        clinicalSignificance: 'Essential before any blood transfusion. Major blood group system (A, B, AB, O) and RhD status.',
        interpretation: 'Type A (A antigen, anti-B), Type B (B antigen, anti-A), Type AB (both antigens, no antibodies), Type O (no antigens, both antibodies). RhD+ or RhD- determines compatibility.',
        method: 'Tube or gel card agglutination method using monoclonal anti-A, anti-B, and anti-D reagents with forward and reverse grouping',
      },
      {
        name: 'Crossmatching (Major & Minor)',
        normalRange: 'Compatible (no agglutination or hemolysis)',
        clinicalSignificance: 'Final check of donor-recipient compatibility before transfusion. Major crossmatch: donor cells with recipient serum.',
        interpretation: 'Incompatible: presence of clinically significant antibodies. Requires extended phenotyping or finding antigen-negative units. Electronic crossmatch allowed if no antibodies detected.',
        method: 'Tube method with immediate spin, 37°C incubation, and anti-human globulin phases for recipient serum and donor cells',
      },
      {
        name: 'Antibody Screen (Indirect Coombs)',
        normalRange: 'Negative (no unexpected red cell antibodies detected)',
        clinicalSignificance: 'Screens for clinically significant non-ABO antibodies. Required for all transfusion candidates and antenatal patients.',
        interpretation: 'Positive: may indicate alloantibodies due to prior transfusion or pregnancy. Requires antibody identification panel to determine specificity (anti-K, anti-E, anti-c, etc.).',
        method: 'Tube or gel card method using anti-human globulin after incubating patient serum with reagent screening RBCs',
      },
    ]
  },
];

const HematologyPage = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface via-surface-container to-surface-dim pt-8 pb-12">
      {/* Header Section */}
      <section className="px-4 mb-12 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-display text-display text-primary mb-2">Hematology</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Comprehensive hematology reference covering complete blood count, coagulation studies, hemoglobinopathies, bone marrow pathology, and transfusion medicine with full clinical interpretation.
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
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Hematology Test Categories</h2>
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
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Hematology Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-error-container/10 border border-error/40 rounded-xl p-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-error text-2xl flex-shrink-0">warning</span>
              <div>
                <h3 className="font-headline-sm text-headline-md text-error mb-2">Critical Values</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Hemoglobin &lt;7 g/dL, Platelets &lt;20 x10^9/L, INR &gt;5.0, WBC &lt;1.0 x10^9/L are critical values requiring immediate clinical action. Always repeat critical values before intervention if clinically feasible.
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
                  Sample hemolysis, improper anticoagulant ratio, delayed processing, and storage temperature affect coagulation studies and CBC results. Use proper collection tubes (lavender for CBC, blue for coagulation) and fill to marked volume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="px-4 mt-16 max-w-7xl mx-auto border-t border-outline-variant pt-8">
        <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
          This hematology reference is designed for healthcare professionals. Reference ranges may vary between laboratories. Always correlate laboratory findings with clinical presentation.
        </p>
      </section>
    </div>
  );
};

export { subcategories };
export default HematologyPage;
