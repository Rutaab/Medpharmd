import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

const pageId = 'immunology';

const subcategories = [
  {
    id: 'autoimmune',
    title: 'Autoimmune Serology',
    icon: 'shield',
    color: 'from-purple-600 to-purple-400',
    description: 'Detection and characterization of autoantibodies for diagnosing systemic autoimmune diseases.',
    tests: [
      {
        name: 'Antinuclear Antibody (ANA) by IF',
        normalRange: 'Titer <1:40 (negative)',
        clinicalSignificance: 'First-line screening test for systemic autoimmune diseases. Detects autoantibodies targeting nuclear antigens.',
        interpretation: 'Positive (≥1:160): SLE, drug-induced lupus, mixed connective tissue disease, Sjogren syndrome, scleroderma. May be positive in low titers in healthy individuals.',
        method: 'Indirect immunofluorescence (IIF) on HEp-2 cell substrate with serial dilutions to endpoint titer',
      },
      {
        name: 'ANA by ELISA',
        normalRange: '<1.0 units (negative)',
        clinicalSignificance: 'Screening test for ANA using enzyme immunoassay. Less sensitive for certain autoantibodies than IIF.',
        interpretation: 'Positive: suggests autoimmune disease. Less specific than IIF. Used as initial screen in some laboratories. Negative ANA by ELISA with high clinical suspicion should be confirmed by IIF.',
        method: 'Enzyme-linked immunosorbent assay (ELISA) using purified nuclear antigens coated on microtiter plates',
      },
      {
        name: 'Anti-dsDNA',
        normalRange: '<30 IU/mL (negative by ELISA); <1:10 (negative by Crithidia)',
        clinicalSignificance: 'Highly specific for SLE. Correlates with disease activity, especially lupus nephritis.',
        interpretation: 'Elevated: SLE (60-80% sensitivity, >95% specificity). Rising titers may precede disease flare. Also positive in drug-induced lupus.',
        method: 'ELISA using purified dsDNA antigen or Crithidia luciliae immunofluorescence for kinetoplast dsDNA',
      },
      {
        name: 'Anti-Sm (Smith) Antibody',
        normalRange: '<20 units (negative)',
        clinicalSignificance: 'Highly specific for SLE. Directed against core proteins of U1, U2, U4/U6, U5 snRNPs.',
        interpretation: 'Positive: SLE (highly specific, ~99%). Present in 15-30% of SLE patients. Associated with lupus nephritis and CNS involvement.',
        method: 'ELISA using purified Sm antigen (core proteins B/B, D, E, F, G)',
      },
      {
        name: 'Anti-RNP Antibody',
        normalRange: '<20 units (negative)',
        clinicalSignificance: 'Found in mixed connective tissue disease (MCTD) and other autoimmune conditions.',
        interpretation: 'High-titer anti-RNP without other SLE-specific antibodies: MCTD. Also seen in SLE (25-40%), scleroderma, Sjogren syndrome.',
        method: 'ELISA using purified U1-RNP antigen (70K, A, C proteins)',
      },
      {
        name: 'Anti-SSA/Ro Antibody',
        normalRange: '<20 units (negative)',
        clinicalSignificance: 'Associated with Sjogren syndrome, SLE, and neonatal lupus (risk of congenital heart block).',
        interpretation: 'Positive: Sjogren syndrome (60-70%), SLE (30-40%), subacute cutaneous lupus (>70%), neonatal lupus. Associated with photosensitivity, sicca symptoms.',
        method: 'ELISA using recombinant or purified Ro52 and Ro60 antigens',
      },
      {
        name: 'Anti-SSB/La Antibody',
        normalRange: '<20 units (negative)',
        clinicalSignificance: 'Often accompanies anti-SSA in Sjogren syndrome. Associated with reduced risk of neonatal lupus.',
        interpretation: 'Positive: Sjogren syndrome (40-50%), SLE (10-15%). Almost always with anti-SSA. Associated with earlier disease onset and extraglandular manifestations.',
        method: 'ELISA using purified La antigen',
      },
      {
        name: 'Anti-Scl-70 (Topoisomerase I) Antibody',
        normalRange: '<20 units (negative)',
        clinicalSignificance: 'Marker for diffuse cutaneous systemic sclerosis (scleroderma).',
        interpretation: 'Positive: systemic sclerosis (20-40%), especially diffuse cutaneous disease. Associated with lung fibrosis, digital ulcers, and increased mortality.',
        method: 'ELISA using purified topoisomerase I (Scl-70) antigen',
      },
      {
        name: 'Anti-Jo-1 Antibody',
        normalRange: '<20 units (negative)',
        clinicalSignificance: 'Most common myositis-specific antibody. Associated with antisynthetase syndrome.',
        interpretation: 'Positive: polymyositis/dermatomyositis (20-30%), antisynthetase syndrome (myositis, interstitial lung disease, mechanic hands, Raynaud phenomenon, arthralgia).',
        method: 'ELISA using purified histidyl-tRNA synthetase (Jo-1) antigen',
      },
      {
        name: 'Anti-Centromere Antibody',
        normalRange: '<20 units (negative)',
        clinicalSignificance: 'Highly associated with limited cutaneous systemic sclerosis (CREST syndrome).',
        interpretation: 'Positive: limited cutaneous systemic sclerosis/CREST (50-80%), primary Raynaud phenomenon (20-30%). Associated with pulmonary hypertension, not lung fibrosis.',
        method: 'ELISA using purified centromere proteins (CENP-A, CENP-B)',
      },
      {
        name: 'Anti-Cardiolipin IgG/IgM',
        normalRange: 'IgG <20 GPL, IgM <20 MPL',
        clinicalSignificance: 'Antiphospholipid antibody. Associated with arterial/venous thrombosis and pregnancy loss.',
        interpretation: 'Positive: antiphospholipid syndrome (primary or secondary to SLE), thrombosis, recurrent miscarriage, thrombocytopenia. Moderate-high titer IgG is most clinically significant.',
        method: 'ELISA using purified cardiolipin antigen with beta2-glycoprotein I cofactor',
      },
      {
        name: 'Anti-Beta2 Glycoprotein I',
        normalRange: '<20 units (negative)',
        clinicalSignificance: 'More specific antiphospholipid antibody than anti-cardiolipin. Confirms APS diagnosis.',
        interpretation: 'Positive: antiphospholipid syndrome. IgG is most clinically significant. Used in revised Sapporo classification criteria for APS.',
        method: 'ELISA using purified human beta2-glycoprotein I',
      },
      {
        name: 'Lupus Anticoagulant (dRVVT)',
        normalRange: 'Negative (dRVVT ratio <1.2)',
        clinicalSignificance: 'Functional assay for antiphospholipid antibodies causing paradoxical thrombosis.',
        interpretation: 'Positive: antiphospholipid syndrome, SLE, drug-induced. Prolonged aPTT that does not correct with mixing. Increased risk of arterial/venous thrombosis and pregnancy complications.',
        method: 'Dilute Russell Viper Venom Time (dRVVT) with screening, mixing, and confirmatory phases',
      },
      {
        name: 'Anti-Neutrophil Cytoplasmic Antibody (ANCA) - cANCA/PR3',
        normalRange: '<1:20 (negative by IIF); <20 units (negative by ELISA)',
        clinicalSignificance: 'cANCA with PR3 specificity is highly specific for granulomatosis with polyangiitis (GPA, formerly Wegener granulomatosis).',
        interpretation: 'Positive cANCA/PR3: GPA (80-90% sensitivity in active disease), microscopic polyangiitis (MPA), EGPA (Churg-Strauss). Titers correlate with disease activity.',
        method: 'Indirect immunofluorescence on ethanol-fixed neutrophils with confirmatory PR3 ELISA',
      },
      {
        name: 'ANCA - pANCA/MPO',
        normalRange: '<1:20 (negative by IIF); <20 units (negative by ELISA)',
        clinicalSignificance: 'pANCA with MPO specificity associated with microscopic polyangiitis (MPA) and EGPA.',
        interpretation: 'Positive pANCA/MPO: MPA (50-75%), EGPA (40-50%), pauci-immune crescentic glomerulonephritis. Associated with renal involvement and pulmonary capillaritis.',
        method: 'Indirect immunofluorescence on ethanol-fixed neutrophils with confirmatory MPO ELISA',
      },
      {
        name: 'Anti-Glomerular Basement Membrane (GBM) Antibody',
        normalRange: '<20 units (negative)',
        clinicalSignificance: 'Diagnostic for Goodpasture syndrome (anti-GBM disease).',
        interpretation: 'Positive: anti-GBM disease (Goodpasture syndrome). Causes rapidly progressive glomerulonephritis with or without pulmonary hemorrhage. Requires urgent plasmapheresis and immunosuppression.',
        method: 'ELISA using purified collagen type IV alpha-3 chain (Goodpasture antigen)',
      },
      {
        name: 'Anti-Mitochondrial Antibody (AMA)',
        normalRange: '<1:20 (negative)',
        clinicalSignificance: 'Hallmark serologic marker for primary biliary cholangitis (PBC).',
        interpretation: 'Positive: primary biliary cholangitis (90-95% sensitivity, >95% specificity). Anti-M2 subtype (PDH-E2) is most specific. May be positive in other autoimmune diseases.',
        method: 'Indirect immunofluorescence on rodent kidney/stomach substrate or ELISA using pyruvate dehydrogenase complex (PDH)',
      },
      {
        name: 'Anti-Smooth Muscle Antibody (SMA)',
        normalRange: '<1:20 (negative)',
        clinicalSignificance: 'Marker for autoimmune hepatitis type 1.',
        interpretation: 'Positive: autoimmune hepatitis type 1 (70-80% sensitivity, ~80% specificity). Anti-F-actin specificity improves specificity. Also positive in PBC, viral hepatitis (low titer).',
        method: 'Indirect immunofluorescence on rodent stomach/kidney substrate detecting anti-actin antibodies',
      },
      {
        name: 'Anti-Liver Kidney Microsomal (LKM-1) Antibody',
        normalRange: '<1:20 (negative)',
        clinicalSignificance: 'Marker for autoimmune hepatitis type 2 (children and young adults).',
        interpretation: 'Positive: autoimmune hepatitis type 2 (anti-LKM-1 targets CYP2D6). Also positive in some cases of hepatitis C and D. Associated with more severe disease and younger age.',
        method: 'Indirect immunofluorescence on rodent liver/kidney tissue or ELISA using recombinant CYP2D6',
      },
    ]
  },
  {
    id: 'allergy',
    title: 'Allergy Testing',
    icon: 'allergy',
    color: 'from-red-600 to-red-400',
    description: 'Diagnostic evaluation of immediate and delayed hypersensitivity to allergens.',
    tests: [
      {
        name: 'Total IgE',
        normalRange: '0-100 IU/mL (adults), varies by age',
        clinicalSignificance: 'Overall measure of IgE antibody levels. Elevated in allergic conditions and certain infections.',
        interpretation: 'Elevated: atopic disease (asthma, eczema, allergic rhinitis), parasitic infection, allergic bronchopulmonary aspergillosis, hyper-IgE syndrome, multiple myeloma.',
        method: 'Chemiluminescence immunoassay (CLIA) or ELISA using anti-IgE antibodies',
      },
      {
        name: 'Specific IgE (RAST) - Inhalant Panel',
        normalRange: '<0.35 kUA/L (Class 0)',
        clinicalSignificance: 'Detects IgE antibodies to specific inhalant allergens (pollen, dust mite, mold, animal dander).',
        interpretation: 'Positive: allergic sensitization to specific aeroallergens. Higher levels correlate with likelihood of clinical allergy. Must correlate with clinical history for diagnosis.',
        method: 'Fluoroenzyme immunoassay (FEIA) using allergen-coated solid phase and anti-IgE detection',
      },
      {
        name: 'Specific IgE (RAST) - Food Panel',
        normalRange: '<0.35 kUA/L (Class 0)',
        clinicalSignificance: 'Detects IgE antibodies to specific food allergens (peanut, egg, milk, soy, wheat, shellfish, tree nuts).',
        interpretation: 'Positive: sensitization to food allergen. Levels >95% positive predictive value for clinical allergy are established for common foods. Negative test has high NPV.',
        method: 'Fluoroenzyme immunoassay (FEIA) using food allergen extract or component-resolved diagnostics',
      },
      {
        name: 'Skin Prick Test',
        normalRange: 'Negative (wheal <3 mm compared to negative control)',
        clinicalSignificance: 'First-line in vivo test for immediate-type (Type I) hypersensitivity. Results available in 15-20 minutes.',
        interpretation: 'Positive: wheal ≥3 mm greater than negative control indicates sensitization. Requires correlation with clinical history. False positives may occur with dermographism.',
        method: 'Percutaneous application of standardized allergen extract using lancet or multi-test device on volar forearm or back',
      },
      {
        name: 'Intradermal Skin Test',
        normalRange: 'Negative (wheal <5 mm compared to negative control)',
        clinicalSignificance: 'More sensitive than skin prick test. Used when prick test is negative but clinical suspicion remains high.',
        interpretation: 'Positive: suggests IgE-mediated sensitization. Higher rate of false positives and systemic reactions than prick test. Used for venom, penicillin, and local anesthetic allergy.',
        method: 'Intradermal injection of 0.02-0.05 mL of diluted allergen extract into superficial dermis forming a 2-3 mm bleb',
      },
      {
        name: 'Patch Testing',
        normalRange: 'Negative (no reaction)',
        clinicalSignificance: 'Gold standard for diagnosing allergic contact dermatitis (Type IV delayed hypersensitivity).',
        interpretation: 'Positive: erythema, infiltration, papules, vesicles at 48 and 96 hours graded 1+ to 3+. Identifies specific contact allergens (nickel, fragrance, rubber, preservatives).',
        method: 'Epicutaneous application of allergens in petrolatum using Finn Chambers on adhesive tape applied to upper back for 48 hours',
      },
      {
        name: 'Tryptase (Mast Cell)',
        normalRange: '<11.4 ng/mL',
        clinicalSignificance: 'Marker of mast cell activation and degranulation. Elevated in anaphylaxis and mastocytosis.',
        interpretation: 'Elevated: anaphylaxis (peak 15-120 min post-exposure), mastocytosis, mast cell activation syndrome, systemic mast cell disease. Baseline elevation suggests clonal mast cell disorder.',
        method: 'Chemiluminescence immunoassay measuring total tryptase (alpha and beta forms)',
      },
      {
        name: 'Eosinophil Cationic Protein (ECP)',
        normalRange: '<15 mcg/L (varies by assay)',
        clinicalSignificance: 'Marker of eosinophil activation and degranulation. Reflects airway inflammation in asthma.',
        interpretation: 'Elevated: allergic asthma (correlates with disease severity), atopic dermatitis, eosinophilic esophagitis, parasitic infection. Decreases with effective steroid therapy.',
        method: 'Immunoassay (FEIA or ELISA) using monoclonal anti-ECP antibodies',
      },
      {
        name: 'Basophil Activation Test',
        normalRange: 'Negative (<15% activated basophils)',
        clinicalSignificance: 'Flow cytometry-based functional assay measuring basophil response to allergen stimulation.',
        interpretation: 'Positive: basophil upregulates CD63 and CD203c upon allergen exposure. Used for diagnosis of drug allergy, food allergy, and hymenoptera venom allergy.',
        method: 'Flow cytometry detecting CD63 and CD203c expression on basophils after in vitro allergen stimulation',
      },
      {
        name: 'Histamine Release Test',
        normalRange: 'Negative (histamine release <10 ng/mL)',
        clinicalSignificance: 'Measures in vitro histamine release from basophils after allergen challenge.',
        interpretation: 'Positive: basophil histamine release >10 ng/mL or >10% of total histamine content. Used in research and specialized allergy centers for drug and food allergy.',
        method: 'Fluorometric or enzyme immunoassay measuring histamine released from isolated basophils after allergen stimulation',
      },
    ]
  },
  {
    id: 'immunoglobulins',
    title: 'Immunoglobulin Profiling',
    icon: 'science',
    color: 'from-blue-600 to-blue-400',
    description: 'Quantitative and qualitative assessment of immunoglobulins for immunodeficiency and monoclonal gammopathy evaluation.',
    tests: [
      {
        name: 'Serum Immunoglobulin G (IgG)',
        normalRange: '700-1600 mg/dL',
        clinicalSignificance: 'Major antibody class in secondary immune response. Accounts for 75% of serum immunoglobulins.',
        interpretation: 'High: chronic infection, autoimmune disease, chronic liver disease, multiple myeloma (IgG). Low: primary immunodeficiency (CVID, XLA), secondary immunodeficiency, protein-losing enteropathy, nephrotic syndrome.',
        method: 'Nephelometric or turbidimetric immunoassay using anti-human IgG antibodies',
      },
      {
        name: 'Serum Immunoglobulin A (IgA)',
        normalRange: '70-400 mg/dL',
        clinicalSignificance: 'Primary antibody in mucosal immunity. Found in secretions (saliva, tears, GI tract).',
        interpretation: 'High: IgA myeloma, chronic liver disease, autoimmune disease. Low: selective IgA deficiency (most common primary immunodeficiency, 1:700), CVID, XLA, protein-losing enteropathy.',
        method: 'Nephelometric or turbidimetric immunoassay using anti-human IgA antibodies',
      },
      {
        name: 'Serum Immunoglobulin M (IgM)',
        normalRange: '40-230 mg/dL',
        clinicalSignificance: 'Primary antibody in initial immune response. Natural antibodies (isohemagglutinins) are IgM.',
        interpretation: 'High: Waldenstrom macroglobulinemia (IgM myeloma), chronic infection, autoimmune disease, primary biliary cholangitis. Low: CVID, XLA, IgG myeloma (immunoparesis).',
        method: 'Nephelometric or turbidimetric immunoassay using anti-human IgM antibodies',
      },
      {
        name: 'Serum Immunoglobulin E (IgE)',
        normalRange: '0-100 IU/mL',
        clinicalSignificance: 'Mediates Type I hypersensitivity reactions and defense against parasites.',
        interpretation: 'High: atopic disease, parasitic infection, hyper-IgE syndrome (Job syndrome), allergic bronchopulmonary aspergillosis, IgE myeloma.',
        method: 'Chemiluminescence or enzyme immunoassay using anti-human IgE antibodies',
      },
      {
        name: 'Serum Immunoglobulin D (IgD)',
        normalRange: '0-8 mg/dL',
        clinicalSignificance: 'Minor immunoglobulin class. Function not fully understood. Membrane IgD on naive B cells.',
        interpretation: 'Markedly elevated: IgD myeloma (rare). Mild elevation: chronic infection, autoimmune disease. Generally low clinical utility for most conditions.',
        method: 'Nephelometric or radial immunodiffusion using anti-human IgD antibodies',
      },
      {
        name: 'IgG Subclasses (IgG1-4)',
        normalRange: 'IgG1: 350-1200 mg/dL, IgG2: 100-600 mg/dL, IgG3: 20-110 mg/dL, IgG4: 4-90 mg/dL',
        clinicalSignificance: 'Different IgG subclasses have distinct functional properties. Deficiency may cause recurrent infections despite normal total IgG.',
        interpretation: 'IgG2 deficiency: recurrent sinopulmonary infections (encapsulated bacteria). IgG4 elevation: IgG4-related disease. IgG3 deficiency: recurrent viral infections.',
        method: 'Nephelometric or turbidimetric immunoassay using subclass-specific monoclonal antibodies',
      },
      {
        name: 'Free Light Chains Kappa/Lambda',
        normalRange: 'Kappa: 3.3-19.4 mg/L, Lambda: 5.7-26.3 mg/L, Ratio: 0.26-1.65',
        clinicalSignificance: 'Measures unbound immunoglobulin light chains. Sensitive for light chain multiple myeloma, AL amyloidosis.',
        interpretation: 'Abnormal kappa/lambda ratio: multiple myeloma, AL amyloidosis, light chain deposition disease, MGUS with abnormal FLC ratio (higher risk of progression).',
        method: 'Nephelometric or turbidimetric immunoassay using antibodies specific for free kappa and free lambda epitopes (Freelite assay)',
      },
      {
        name: 'Serum Protein Electrophoresis (SPEP)',
        normalRange: 'Albumin: 55-65%, Alpha-1: 2-4%, Alpha-2: 8-12%, Beta: 10-14%, Gamma: 10-18%',
        clinicalSignificance: 'Separates serum proteins into fractions. Screens for monoclonal gammopathies and protein abnormalities.',
        interpretation: 'M-spike: multiple myeloma, MGUS, Waldenstrom macroglobulinemia. Polyclonal hypergammaglobulinemia: chronic inflammation, autoimmune disease, cirrhosis. Hypogammaglobulinemia: CVID, XLA.',
        method: 'Capillary zone electrophoresis or agarose gel electrophoresis separating serum proteins by charge-to-mass ratio',
      },
      {
        name: 'Immunofixation Electrophoresis (IFE)',
        normalRange: 'No monoclonal immunoglobulin detected',
        clinicalSignificance: 'Characterizes monoclonal proteins identified on SPEP by heavy and light chain type.',
        interpretation: 'Identifies IgG kappa/lambda, IgA, IgM, IgD, IgE, or free light chains. Essential for differentiating MGUS, multiple myeloma, Waldenstrom macroglobulinemia, and AL amyloidosis.',
        method: 'Agarose gel electrophoresis followed by immunoprecipitation with monospecific antisera to heavy and light chains',
      },
      {
        name: 'Cryoglobulins',
        normalRange: 'None detected (negative)',
        clinicalSignificance: 'Immunoglobulins that precipitate at cold temperatures and resolubilize on warming. Associated with vasculitis.',
        interpretation: 'Type I: monoclonal (lymphoma, myeloma). Type II (mixed): monoclonal IgM with polyclonal IgG (HCV, SLE). Type III (mixed): polyclonal (HCV, autoimmune disease). Positive cryocrit >1% is significant.',
        method: 'Precipitation at 4°C for 7 days with cryocrit quantification and immunofixation typing',
      },
      {
        name: 'Serum Viscosity',
        normalRange: '1.4-1.8 relative viscosity units (water = 1.0)',
        clinicalSignificance: 'Measures blood serum viscosity. Elevated in conditions with high serum protein concentration.',
        interpretation: 'Elevated (>2.0): Waldenstrom macroglobulinemia (most common cause), multiple myeloma (especially IgA), rheumatoid arthritis. Symptoms of hyperviscosity syndrome appear >4.0.',
        method: 'Ostwald or Ubbelohde viscometer measuring flow rate of serum through capillary at 37°C relative to water',
      },
    ]
  },
  {
    id: 'complement',
    title: 'Complement System',
    icon: 'gynecology',
    color: 'from-cyan-600 to-cyan-400',
    description: 'Evaluation of complement pathway proteins for diagnosing immune complex diseases, angioedema, and complement deficiencies.',
    tests: [
      {
        name: 'C3 Complement',
        normalRange: '90-180 mg/dL',
        clinicalSignificance: 'Central complement protein. Acute phase reactant. Consumed in immune complex diseases.',
        interpretation: 'Low: SLE (active disease, especially nephritis), post-streptococcal glomerulonephritis, membranoproliferative glomerulonephritis, C3 deficiency. High: acute phase reaction, autoimmune disease.',
        method: 'Nephelometric or turbidimetric immunoassay using anti-human C3 antibodies',
      },
      {
        name: 'C4 Complement',
        normalRange: '10-40 mg/dL',
        clinicalSignificance: 'Classical pathway component. More sensitive marker of complement consumption than C3.',
        interpretation: 'Low: SLE (correlates with disease activity), cryoglobulinemia, hereditary angioedema (low C4 with normal C1-INH), C4 deficiency. High: acute phase reaction.',
        method: 'Nephelometric or turbidimetric immunoassay using anti-human C4 antibodies',
      },
      {
        name: 'CH50 (Total Hemolytic Complement)',
        normalRange: '30-75 U/mL (varies by assay)',
        clinicalSignificance: 'Functional assay measuring integrity of classical complement pathway (C1-C9).',
        interpretation: 'Low: complement consumption (SLE, MPGN), congenital complement deficiency. Absent CH50 suggests complete deficiency of a complement component.',
        method: 'Hemolytic assay using antibody-sensitized sheep RBCs incubated with serially diluted patient serum measuring 50% lysis',
      },
      {
        name: 'Alternative Pathway Activity (AP50)',
        normalRange: '60-100% of normal (varies by lab)',
        clinicalSignificance: 'Functional assay assessing the alternative complement pathway (factors B, D, properdin, C3, C5-9).',
        interpretation: 'Low: deficiency of alternative pathway components (properdin deficiency - X-linked, increased meningococcal infection risk). Consumed in C3 glomerulopathies.',
        method: 'Hemolytic assay using rabbit RBCs in EGTA-Mg buffer (blocks classical pathway) measuring 50% lysis',
      },
      {
        name: 'Mannose-Binding Lectin (MBL)',
        normalRange: '>0.5 mcg/mL (varies by assay)',
        clinicalSignificance: 'Pattern recognition molecule of the lectin complement pathway. Opsonin for mannose-rich pathogens.',
        interpretation: 'Low (<0.1 mcg/mL): MBL deficiency (most common complement deficiency, ~5% population). Associated with increased infections in immunocompromised, children, and post-chemotherapy.',
        method: 'ELISA using mannan-coated plates detecting MBL binding to carbohydrate ligands',
      },
      {
        name: 'C1 Esterase Inhibitor (C1-INH) - Level',
        normalRange: '16-33 mg/dL (varies by assay)',
        clinicalSignificance: 'Serine protease inhibitor regulating classical pathway and contact system. Deficiency causes hereditary angioedema (HAE).',
        interpretation: 'Low: hereditary angioedema Type I (85%, low antigenic and functional C1-INH), acquired angioedema. Normal: HAE Type II (normal antigenic but low functional C1-INH).',
        method: 'Immunoassay (nephelometry or ELISA) using anti-human C1-INH antibodies',
      },
      {
        name: 'C1 Esterase Inhibitor - Functional',
        normalRange: '>68% of normal (varies by assay)',
        clinicalSignificance: 'Functional activity of C1-INH. Essential for diagnosing HAE Type II and acquired angioedema.',
        interpretation: 'Low with normal C1-INH level: HAE Type II (15%). Low with low C1-INH level: HAE Type I (85%). Low C1q with low functional C1-INH: acquired angioedema.',
        method: 'Chromogenic assay measuring inhibition of C1s or C1r esterase activity using synthetic substrate',
      },
      {
        name: 'Complement Factor H',
        normalRange: '250-700 mcg/mL (varies by assay)',
        clinicalSignificance: 'Major regulator of alternative pathway. Prevents uncontrolled C3 activation.',
        interpretation: 'Low/deficient: atypical hemolytic uremic syndrome (aHUS), C3 glomerulopathy, age-related macular degeneration risk (Factor H polymorphism).',
        method: 'ELISA or nephelometric immunoassay using anti-human Factor H antibodies',
      },
      {
        name: 'Complement Factor I',
        normalRange: '35-105 mcg/mL (varies by assay)',
        clinicalSignificance: 'Serine protease that cleaves C3b and C4b. Regulates both classical and alternative pathways.',
        interpretation: 'Deficiency: recurrent pyogenic infections, aHUS, C3 glomerulopathy. Low C3 with normal C4 suggests alternative pathway dysregulation (Factor I or H deficiency).',
        method: 'ELISA or nephelometric immunoassay using anti-human Factor I antibodies',
      },
      {
        name: 'C1q and C1q Antibodies',
        normalRange: 'C1q: 10-25 mg/dL; C1q antibodies: negative',
        clinicalSignificance: 'C1q is the first component of the classical pathway. Anti-C1q antibodies are associated with SLE nephritis.',
        interpretation: 'Low C1q: acquired angioedema (low C1q + low C1-INH), SLE, hypocomplementemic urticarial vasculitis. Anti-C1q positive: active SLE nephritis.',
        method: 'Radial immunodiffusion (C1q level) or ELISA (anti-C1q antibodies) using purified C1q antigen',
      },
      {
        name: 'C5b-9 (Membrane Attack Complex - sMAC)',
        normalRange: '<250 ng/mL (varies by assay)',
        clinicalSignificance: 'Terminal complement complex. Measures final pathway activation. Elevated in complement-mediated diseases.',
        interpretation: 'Elevated: aHUS (during active disease), paroxysmal nocturnal hemoglobinuria, C3 glomerulopathy, SLE, post-transplant. Used to monitor response to complement inhibitors (eculizumab).',
        method: 'ELISA using monoclonal antibodies to neoepitopes on C5b-9 complex',
      },
      {
        name: 'C2 Complement',
        normalRange: '18-32 mg/dL (varies by assay)',
        clinicalSignificance: 'Classical pathway component. Most common complement deficiency in Caucasian populations.',
        interpretation: 'Deficiency: increased risk of SLE and SLE-like disease, recurrent pyogenic infections (especially encapsulated bacteria), atherosclerotic disease.',
        method: 'Radial immunodiffusion or ELISA using anti-human C2 antibodies',
      },
      {
        name: 'Properdin',
        normalRange: '10-30 mcg/mL (varies by assay)',
        clinicalSignificance: 'Positive regulator (stabilizer) of alternative pathway C3 convertase. Only complement component made by leukocytes.',
        interpretation: 'Deficiency: X-linked (males affected), increased susceptibility to meningococcal infections (Neisseria meningitidis).',
        method: 'ELISA using anti-human properdin antibodies',
      },
    ]
  },
  {
    id: 'cellular',
    title: 'Cellular Immunity',
    icon: 'biotech',
    color: 'from-teal-600 to-teal-400',
    description: 'Assessment of cellular immune function including lymphocyte subsets, cytokine profiles, and functional assays.',
    tests: [
      {
        name: 'T Cell Subsets (CD3, CD4, CD8) by Flow Cytometry',
        normalRange: 'CD3: 800-2200 cells/mcL, CD4: 500-1500 cells/mcL, CD8: 200-900 cells/mcL',
        clinicalSignificance: 'Quantifies T lymphocyte populations. Monitors HIV disease progression and immune status.',
        interpretation: 'Low CD4: HIV/AIDS (<200 cells/mcL = AIDS-defining), SCID, DiGeorge syndrome, immunosuppression, chemotherapy.',
        method: 'Multi-parameter flow cytometry using CD3, CD4, and CD8 monoclonal antibodies with gating on lymphocyte population',
      },
      {
        name: 'CD4 Count and Percentage',
        normalRange: 'Absolute: 500-1500 cells/mcL, Percentage: 30-60% of lymphocytes',
        clinicalSignificance: 'Primary indicator of immune function in HIV infection. CD4 percentage is more stable than absolute count.',
        interpretation: '<350 cells/mcL: initiate ART. <200: high risk of opportunistic infections (PJP, CMV, MAC). Used for monitoring ART response.',
        method: 'Flow cytometry single-platform absolute counting with CD4-specific antibody and bead-based counting',
      },
      {
        name: 'CD4:CD8 Ratio',
        normalRange: '1.5-3.0 (CD4:CD8 ratio)',
        clinicalSignificance: 'Indicator of immune balance. Inverted ratio suggests immune dysfunction.',
        interpretation: 'Inverted (<1.0): HIV/AIDS, chronic viral infection (CMV, EBV, hepatitis), advanced age, severe infection, immune senescence.',
        method: 'Calculated from absolute CD4 and CD8 counts obtained by flow cytometry',
      },
      {
        name: 'B Cell Count (CD19)',
        normalRange: '100-500 cells/mcL (2-15% of lymphocytes)',
        clinicalSignificance: 'Measures B lymphocyte numbers. Important in humoral immunodeficiency evaluation.',
        interpretation: 'Low/absent: X-linked agammaglobulinemia (XLA), CVID, SCID, rituximab therapy. High: some autoimmune diseases, CLL (CD19+CD5+).',
        method: 'Flow cytometry using CD19-specific monoclonal antibody on peripheral blood lymphocytes',
      },
      {
        name: 'NK Cell Count (CD16/56)',
        normalRange: '150-500 cells/mcL (5-20% of lymphocytes)',
        clinicalSignificance: 'Natural killer cells mediate innate immunity against viruses and tumors.',
        interpretation: 'Low: NK cell deficiency (rare), some CVID patients, post-chemotherapy. High: viral infection recovery, some autoimmune diseases.',
        method: 'Flow cytometry using CD16 and CD56 monoclonal antibodies on peripheral blood lymphocytes',
      },
      {
        name: 'Lymphocyte Proliferation Assay',
        normalRange: 'Stimulation index >3 (varies by mitogen and assay)',
        clinicalSignificance: 'Functional test of T cell proliferation in response to mitogens (PHA, ConA, PWM) or antigens.',
        interpretation: 'Low response: SCID, DiGeorge syndrome, HIV/AIDS, drug-induced immunosuppression, severe combined immunodeficiency.',
        method: 'H-thymidine incorporation or CFSE dilution measured by flow cytometry after mitogen/antigen stimulation',
      },
      {
        name: 'Cytokine Profiling (IL-6, TNF-α, IFN-γ)',
        normalRange: 'IL-6: <5 pg/mL, TNF-α: <10 pg/mL, IFN-γ: <10 pg/mL (varies)',
        clinicalSignificance: 'Measures pro-inflammatory cytokines. Used in monitoring inflammatory and autoimmune conditions.',
        interpretation: 'Elevated IL-6: sepsis, RA (correlates with disease activity), cytokine release syndrome, Castleman disease. Elevated TNF-α: RA, IBD, psoriasis. Elevated IFN-γ: HLH, TB, viral infection.',
        method: 'Multiplex bead-based immunoassay (Luminex) or ELISA using cytokine-specific capture and detection antibodies',
      },
      {
        name: 'Quantiferon-TB Gold (IGRA)',
        normalRange: 'Negative (<0.35 IU/mL to TB antigens)',
        clinicalSignificance: 'Measures IFN-γ release from T cells stimulated by M. tuberculosis-specific antigens. Detects latent TB infection.',
        interpretation: 'Positive: M. tuberculosis infection (latent or active). Cannot distinguish latent vs active. False negative: immunocompromised, recent TB exposure (8-10 week window period).',
        method: 'ELISA measuring IFN-γ released from whole blood after 16-24 hour stimulation with ESAT-6, CFP-10, and TB7.7 peptides',
      },
      {
        name: 'T-SPOT.TB',
        normalRange: 'Negative (<6 spot-forming cells above negative control)',
        clinicalSignificance: 'ELISPOT-based IGRA for latent TB infection detection. May be more sensitive than Quantiferon in immunocompromised patients.',
        interpretation: 'Positive: M. tuberculosis infection. Uses separate ESAT-6 and CFP-10 antigen wells. Indeterminate: inadequate cell response or high background.',
        method: 'ELISPOT assay counting IFN-γ-producing T cells (spot-forming cells) after stimulation with TB-specific antigens',
      },
      {
        name: 'Neutrophil Function Test (NBT Reduction)',
        normalRange: '>97% of neutrophils reduce NBT (positive)',
        clinicalSignificance: 'Screening test for chronic granulomatous disease (CGD). Measures neutrophil respiratory burst.',
        interpretation: 'Negative/abnormal: CGD (X-linked most common, due to NADPH oxidase deficiency). Carrier females may have intermediate results.',
        method: 'Microscopic evaluation of nitroblue tetrazolium (NBT) reduction to formazan by stimulated neutrophils',
      },
      {
        name: 'Lymphocyte Immunophenotyping Panel',
        normalRange: 'Age-specific reference ranges for T, B, and NK cell subsets',
        clinicalSignificance: 'Comprehensive evaluation of lymphocyte subsets. Essential for diagnosing primary immunodeficiencies.',
        interpretation: 'Abnormal: SCID (very low T, ±low B/NK), DiGeorge (low T), XLA (absent B), CVID (low B, variable T), Wiskott-Aldrich (low T, low platelets).',
        method: 'Extended multi-color flow cytometry panel with CD3, CD4, CD8, CD19, CD16/56, CD45, and additional markers',
      },
      {
        name: 'ADA (Adenosine Deaminase)',
        normalRange: '10-30 U/L (RBC lysate, varies by age)',
        clinicalSignificance: 'Enzyme in purine metabolism. Deficiency causes SCID (ADA-SCID, ~15% of SCID cases).',
        interpretation: 'Low/deficient: ADA-SCID (severe combined immunodeficiency with absent T, B, NK cells). Elevated: some leukemias, liver disease.',
        method: 'Spectrophotometric kinetic assay measuring ammonia production from adenosine deamination',
      },
    ]
  },
];

const ImmunologyPage = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface via-surface-container to-surface-dim pt-8 pb-12">
      {/* Header Section */}
      <section className="px-4 mb-12 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-display text-display text-primary mb-2">Immunology</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Comprehensive immunology reference covering autoimmune serology, allergy testing, immunoglobulin profiling, complement system evaluation, and cellular immunity with full clinical interpretation.
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
            <p className="font-headline-md text-headline-md text-primary">{subcategories.length}</p>
          </div>
        </div>
      </section>

      {/* Subcategory Accordion */}
      <section className="px-4 max-w-7xl mx-auto">
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Immunology Test Categories</h2>
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
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Immunology Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-error-container/10 border border-error/40 rounded-xl p-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-error text-2xl flex-shrink-0">warning</span>
              <div>
                <h3 className="font-headline-sm text-headline-md text-error mb-2">Testing Pitfalls</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  ANA positivity occurs in 5-15% of healthy individuals (especially elderly). False-positive ANAs from medications (procainamide, hydralazine, minoxidil). Anti-dsDNA is specific for SLE but may be negative in remission. Cryoglobulins require strict pre-warming of collection tubes to 37°C. CH50 may be normal in single complement component deficiencies if using alternative pathway assays.
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
                  Complement samples must be separated and frozen within 2 hours of collection (degradation at room temperature). Serum for cryoglobulins must be maintained at 37°C during collection and transport. IgE levels may be falsely low in patients on omalizumab. Flow cytometry requires EDTA anticoagulated blood processed within 24 hours. Avoid heparin contamination in complement functional assays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="px-4 mt-16 max-w-7xl mx-auto border-t border-outline-variant pt-8">
        <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
          This immunology reference is designed for healthcare professionals. Reference ranges may vary between laboratories. Always correlate laboratory findings with clinical presentation.
        </p>
      </section>
    </div>
  );
};

export { subcategories };
export default ImmunologyPage;
