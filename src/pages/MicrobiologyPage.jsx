import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

const pageId = 'microbiology';

const subcategories = [
  {
    id: 'cultures',
    title: 'Bacterial Cultures & Sensitivity',
    icon: 'biotech',
    color: 'from-green-600 to-green-400',
    description: 'Isolation, identification, and antimicrobial susceptibility testing of pathogenic bacteria from clinical specimens for diagnosis of infectious diseases.',
    tests: [
      {
        name: 'Blood Culture',
        normalRange: 'Negative (no growth after 5 days)',
        clinicalSignificance: 'Gold standard for diagnosing bloodstream infections and sepsis. Detects bacteremia and fungemia.',
        interpretation: 'Positive: bacteremia/sepsis (community-acquired or nosocomial), infective endocarditis, catheter-related infection. Contaminants: coagulase-negative staphylococci, diphtheroids, Bacillus spp. (if single set).',
        method: 'Aerobic and anaerobic bottle inoculation with automated continuous monitoring (BACTEC/BacT/ALERT) for CO2 detection',
      },
      {
        name: 'Urine Culture',
        normalRange: '<10^4 CFU/mL (mixed flora)',
        clinicalSignificance: 'Definitive diagnosis of urinary tract infection with identification and quantification of uropathogens.',
        interpretation: '>10^5 CFU/mL single organism: significant bacteriuria (UTI). 10^4-10^5 CFU/mL: equivocal, repeat. >10^3 CFU/mL in symptomatic: significant. Polymicrobial >2 organisms: contamination.',
        method: 'Calibrated loop (0.001/0.01 mL) inoculation on CLED/MacConkey agar with aerobic incubation at 37°C for 24-48 hours',
      },
      {
        name: 'Sputum Culture',
        normalRange: 'Normal respiratory flora (no predominant pathogen)',
        clinicalSignificance: 'Diagnoses lower respiratory tract infections including pneumonia, bronchitis, bronchiectasis, and lung abscess.',
        interpretation: 'Positive: Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis, Klebsiella pneumoniae (community). Pseudomonas, Acinetobacter, MRSA, enteric GNR (hospital-acquired). Requires Gram stain QC (<10 squamous cells, >25 WBCs for valid specimen).',
        method: 'Sputum homogenization and inoculation on blood, chocolate, and MacConkey agar with identification by colony morphology and biochemical tests',
      },
      {
        name: 'Stool Culture',
        normalRange: 'Normal enteric flora (no enteropathogens isolated)',
        clinicalSignificance: 'Identifies bacterial causes of gastroenteritis including Salmonella, Shigella, Campylobacter, and toxigenic E. coli.',
        interpretation: 'Positive: Salmonella enteritidis/typhi (enteric fever), Shigella spp. (dysentery), Campylobacter jejuni, Yersinia enterocolitica, Vibrio cholerae, enteropathogenic E. coli (serotyping).',
        method: 'Selective and differential media (MacConkey, XLD, HE, SS agar) with enrichment broth and biochemical/serological identification',
      },
      {
        name: 'Wound/Tissue Culture',
        normalRange: 'No growth or normal skin flora',
        clinicalSignificance: 'Identifies causative organisms in wound infections, abscesses, surgical site infections, and diabetic ulcers.',
        interpretation: 'Positive: S. aureus (including MRSA), Streptococcus pyogenes, Pseudomonas aeruginosa, enteric GNR, anaerobes (Bacteroides, Clostridium). Polymicrobial: common in diabetic foot infections and pressure ulcers.',
        method: 'Tissue homogenate or wound swab inoculation on aerobic and anaerobic media with Gram stain correlation',
      },
      {
        name: 'CSF Culture',
        normalRange: 'Sterile (no growth)',
        clinicalSignificance: 'Definitive diagnosis of bacterial, tuberculous, and fungal meningitis. Critical for selecting appropriate antibiotic therapy.',
        interpretation: 'Positive: S. pneumoniae, N. meningitidis, H. influenzae (community-acquired meningitis). Listeria monocytogenes (neonates/elderly). E. coli, Group B Streptococcus (neonatal). M. tuberculosis (TB meningitis).',
        method: 'Centrifuged CSF sediment inoculated on blood, chocolate, and MacConkey agar incubated at 37°C with 5% CO2 for 48-72 hours',
      },
      {
        name: 'Throat Swab Culture',
        normalRange: 'Normal respiratory flora (no group A Streptococcus)',
        clinicalSignificance: 'Primary diagnostic test for acute pharyngitis due to Group A Streptococcus (GAS). Guides appropriate antibiotic therapy.',
        interpretation: 'Positive for S. pyogenes (GAS): acute streptococcal pharyngitis/tonsillitis. Also detects Arcanobacterium haemolyticum, Neisseria gonorrhoeae, Corynebacterium diphtheriae (diphtheria) when clinically indicated.',
        method: 'Throat swab streaked on 5% sheep blood agar with bacitracin disc for identification of beta-hemolytic colonies',
      },
      {
        name: 'Anaerobic Culture',
        normalRange: 'No anaerobic growth',
        clinicalSignificance: 'Detects obligate anaerobic bacteria from deep abscesses, necrotic tissue, bite wounds, and intra-abdominal infections.',
        interpretation: 'Positive: Bacteroides fragilis group (intra-abdominal), Clostridium perfringens (gas gangrene), Peptostreptococcus, Fusobacterium, Prevotella, Actinomyces. Often polymicrobial with facultative anaerobes.',
        method: 'Specimen collection in anaerobic transport medium with inoculation on prereduced anaerobic blood agar in anaerobic jar/chamber at 37°C for 48-72 hours',
      },
      {
        name: 'Mycobacterial Culture (TB)',
        normalRange: 'Negative (no acid-fast bacilli isolated)',
        clinicalSignificance: 'Gold standard for definitive diagnosis of tuberculosis and nontuberculous mycobacterial infections. Provides isolate for drug susceptibility testing.',
        interpretation: 'Positive: M. tuberculosis complex (pulmonary TB, extrapulmonary TB), M. avium complex (disseminated in immunocompromised), M. kansasii, M. fortuitum, M. abscessus. Speciation and DST guide treatment.',
        method: 'Specimen decontamination with NALC-NaOH and inoculation on Lowenstein-Jensen slant and liquid media (MGIT) with automated growth detection',
      },
      {
        name: 'Genital Swab Culture',
        normalRange: 'No Neisseria gonorrhoeae or other pathogens isolated',
        clinicalSignificance: 'Diagnoses sexually transmitted infections including gonorrhea, chancroid, and bacterial vaginosis-associated organisms.',
        interpretation: 'Positive: N. gonorrhoeae (gonorrhea), H. ducreyi (chancroid), Group B Streptococcus (antenatal screening), Trichomonas vaginalis (wet mount). Mixed flora: bacterial vaginosis (Nugent score by Gram stain).',
        method: 'Urethral/endocervical/vaginal swab inoculated on Thayer-Martin (modified) chocolate agar in CO2-enriched atmosphere',
      },
      {
        name: 'Sputum AFB Smear',
        normalRange: 'Negative (no acid-fast bacilli per 100 immersion fields)',
        clinicalSignificance: 'Rapid screening test for pulmonary tuberculosis. Positive smear indicates infectiousness and need for respiratory isolation.',
        interpretation: 'Positive: pulmonary TB (active, infectious). Grading: 1+ (1-9 AFB/100 fields), 2+ (1-9 AFB/10 fields), 3+ (1-9 AFB/field), 4+ (>9 AFB/field). Negative does not rule out TB (paucibacillary disease or non-TB mycobacteria).',
        method: 'Auramine-rhodamine fluorescent staining or Ziehl-Neelsen carbolfuchsin staining of concentrated sputum smear examined under 1000x oil immersion',
      },
      {
        name: 'Gram Stain',
        normalRange: 'Normal flora depending on specimen site',
        clinicalSignificance: 'Rapid, inexpensive preliminary identification of bacteria as Gram-positive or Gram-negative and assessment of specimen quality. Guides empiric antibiotic therapy.',
        interpretation: 'Gram-positive cocci in clusters: S. aureus. Gram-positive cocci in chains: Streptococcus spp. Gram-negative diplococci: N. meningitidis/N. gonorrhoeae. Gram-negative rods: Enterobacteriaceae, Pseudomonas. Yeast: Candida. Quality criteria vary by specimen type.',
        method: 'Heat-fixed smear sequentially stained with crystal violet, Gram iodine, decolorizer, and safranin counterstain examined under 1000x oil immersion',
      },
    ]
  },
  {
    id: 'serology',
    title: 'Serological Assays',
    icon: 'science',
    color: 'from-blue-600 to-blue-400',
    description: 'Detection of antibodies and antigens in serum for diagnosis of infectious diseases, autoimmune conditions, and immune status assessment.',
    tests: [
      {
        name: 'C-Reactive Protein (CRP)',
        normalRange: '< 5 mg/L (varies by assay)',
        clinicalSignificance: 'Acute phase reactant synthesized by the liver in response to IL-6. Non-specific marker of inflammation and tissue injury.',
        interpretation: 'Mild elevation (5-40 mg/L): local inflammation, viral infection, smoking, obesity. Moderate (40-100 mg/L): active inflammation, bacterial infection. Marked (>100 mg/L): severe bacterial infection, sepsis, major trauma. hs-CRP for cardiovascular risk stratification.',
        method: 'Immunoturbidimetric or nephelometric assay using anti-CRP antibody-coated latex particles',
      },
      {
        name: 'Anti-Streptolysin O (ASO) Titre',
        normalRange: 'Adults: <200 IU/mL, Children: <150 IU/mL',
        clinicalSignificance: 'Detects antibodies to streptolysin O produced by group A Streptococcus. Evidence of recent GAS infection.',
        interpretation: 'Elevated: post-streptococcal glomerulonephritis (peak 4-6 weeks), acute rheumatic fever (peak 4-6 weeks), recent GAS pharyngitis/scarlet fever. Rising titre (>4-fold) indicates recent infection.',
        method: 'Turbidimetric immunoassay or latex agglutination method measuring antibody neutralization of streptolysin O',
      },
      {
        name: 'Rheumatoid Factor (RF)',
        normalRange: '< 20 IU/mL',
        clinicalSignificance: 'Autoantibody (usually IgM) directed against the Fc portion of IgG. Used in diagnosis of rheumatoid arthritis and other autoimmune conditions.',
        interpretation: 'Positive: RA (sensitivity ~70%, specificity ~85%), Sjogren syndrome, SLE, mixed cryoglobulinemia, chronic infections (TB, IE, HCV), sarcoidosis, aging. High titre: more specific for RA.',
        method: 'Nephelometric or turbidimetric immunoassay using aggregated human IgG as antigen',
      },
      {
        name: 'VDRL/RPR (Syphilis)',
        normalRange: 'Non-reactive',
        clinicalSignificance: 'Non-treponemal screening test for syphilis. Detects reagin antibodies against cardiolipin. Quantitative titre for monitoring treatment response.',
        interpretation: 'Reactive: primary syphilis (positive after 4-6 weeks), secondary syphilis (universally reactive, highest titre), latent, tertiary. Biological false positive: SLE, pregnancy, HIV, IVDU, leprosy, malaria, typhus. Confirm with TPHA.',
        method: 'Flocculation test using cardiolipin-cholesterol-lecithin antigen with microscopic (VDRL) or macroscopic (RPR) agglutination detection',
      },
      {
        name: 'TPHA (Syphilis Confirmatory)',
        normalRange: 'Non-reactive',
        clinicalSignificance: 'Treponema pallidum-specific antibody test. Confirms VDRL/RPR reactivity. Remains positive for life after successful treatment.',
        interpretation: 'Reactive: confirms syphilis infection (past or current). Used to distinguish true positive from biological false positive VDRL/RPR. Cannot differentiate active from past infection. FTA-ABS used as alternative confirmatory test.',
        method: 'Indirect hemagglutination assay using T. pallidum antigen-coated sheep or avian erythrocytes',
      },
      {
        name: 'Widal Test (Typhoid)',
        normalRange: 'O titre <1:80, H titre <1:160 (varies by endemicity)',
        clinicalSignificance: 'Serological diagnosis of typhoid/enteric fever caused by Salmonella enterica serovar Typhi and Paratyphi.',
        interpretation: 'Rising 4-fold titre in paired sera (acute and convalescent) is diagnostic. High O titre: active infection. High H titre: past infection/vaccination. Low sensitivity and specificity; culture remains gold standard.',
        method: 'Standard tube agglutination assay using Salmonella O and H antigen suspensions with serial serum dilutions',
      },
      {
        name: 'Weil-Felix Test',
        normalRange: 'Titre <1:40',
        clinicalSignificance: 'Heterophile antibody test for rickettsial infections (typhus, spotted fevers). Based on cross-reactivity with Proteus vulgaris OX antigens.',
        interpretation: 'OX-2 elevated: Rocky Mountain spotted fever, typhus. OX-19 elevated: epidemic typhus (R. prowazekii), murine typhus (R. typhi). OX-K elevated: scrub typhus (O. tsutsugamushi). Low specificity, replaced by specific serology.',
        method: 'Tube agglutination or latex agglutination using Proteus vulgaris OX-2, OX-19, and OX-K antigens',
      },
      {
        name: 'Paul-Bunnell Test (Monospot)',
        normalRange: 'Negative',
        clinicalSignificance: 'Rapid screening test for infectious mononucleosis caused by Epstein-Barr virus (EBV). Detects heterophile antibodies.',
        interpretation: 'Positive: acute EBV infection (infectious mononucleosis) with 85-90% sensitivity. False negative: early infection (first week), children <4 years, elderly. Heterophile-negative IM may be due to CMV, toxoplasma, HIV, HHV-6.',
        method: 'Slide agglutination test using horse or sheep RBCs after absorption with guinea pig kidney antigen to differentiate heterophile antibodies',
      },
      {
        name: 'Cold Agglutinins',
        normalRange: 'Titre <1:32 at 4°C',
        clinicalSignificance: 'IgM antibodies that agglutinate RBCs at low temperatures. Associated with Mycoplasma pneumoniae infection and cold agglutinin disease.',
        interpretation: 'Elevated (>1:64): M. pneumoniae pneumonia (50-70% of cases, peak at 2-3 weeks), EBV, CMV, influenza, adenovirus, autoimmune hemolytic anemia (cold type), lymphoproliferative disorders.',
        method: 'Serial serum dilution incubated with group O RBCs at 4°C, 37°C, and room temperature to demonstrate cold-specific agglutination',
      },
      {
        name: 'Febrile Antigen Panel',
        normalRange: 'All titres < 1:40 (non-reactive)',
        clinicalSignificance: 'Battery of serological tests for common causes of pyrexia of unknown origin (PUO) including typhoid, brucellosis, rickettsiosis, and leptospirosis.',
        interpretation: 'Significant titres: Widal (Salmonella), Brucella agglutinins, Weil-Felix (Rickettsia), Leptospira antibodies. Interpretation requires paired acute and convalescent sera with 4-fold rise. Low specificity in endemic areas.',
        method: 'Serial dilution tube agglutination using standardized antigen suspensions against multiple febrile pathogens',
      },
      {
        name: 'Brucella Agglutinins',
        normalRange: 'Titre < 1:40',
        clinicalSignificance: 'Serological diagnosis of brucellosis (undulant fever), a zoonotic infection transmitted from cattle, goats, sheep, and dogs.',
        interpretation: 'Titre 1:80-1:160: probable infection. Titre >1:160: active brucellosis (sensitivity ~95%). Rising titre in paired sera confirms diagnosis. Cross-reactivity: Yersinia, V. cholerae, tularemia, vaccination.',
        method: 'Standard tube agglutination test (SAT) using B. abortus and B. melitensis antigens with 2-mercaptoethanol reduction for IgG detection',
      },
      {
        name: 'Leptospira Serology',
        normalRange: 'Negative (no antibodies detected)',
        clinicalSignificance: 'Diagnosis of leptospirosis (Weil disease), a spirochetal zoonosis transmitted through water contaminated with rodent urine.',
        interpretation: 'Positive: recent or current leptospirosis. Microscopic agglutination test (MAT) with >1:100 titre or 4-fold rise in paired sera is confirmatory. Early IgM ELISA positivity. Cross-reactivity with syphilis, Lyme, relapsing fever.',
        method: 'ELISA detecting Leptospira-specific IgM or MAT using live Leptospira serovars with dark-field microscopic agglutination detection',
      },
    ]
  },
  {
    id: 'viral-markers',
    title: 'Viral Markers',
    icon: 'coronavirus',
    color: 'from-red-600 to-red-400',
    description: 'Serological and molecular detection of viral antigens, antibodies, and nucleic acids for diagnosis and monitoring of viral infections.',
    tests: [
      {
        name: 'HBsAg (Hepatitis B Surface Antigen)',
        normalRange: 'Negative (non-reactive)',
        clinicalSignificance: 'Primary screening test for HBV infection. Detects active infection. First serological marker to appear after HBV exposure.',
        interpretation: 'Positive: acute or chronic HBV infection (carrier state). May be transiently positive during acute infection. Persistence >6 months defines chronic carrier. Used for blood donor screening and antenatal screening.',
        method: 'Chemiluminescence immunoassay (CLIA) or ELISA using monoclonal anti-HBs antibody-coated microparticles',
      },
      {
        name: 'Anti-HBs (Hepatitis B Antibody)',
        normalRange: 'Positive: >10 mIU/mL (protective)',
        clinicalSignificance: 'Detects neutralizing antibodies against HBsAg. Indicates recovery from infection or vaccine-induced immunity.',
        interpretation: '>10 mIU/mL: protective immunity (post-vaccination or resolved infection). <10 mIU/mL: non-immune. Positive with negative HBsAg: resolved infection. Positive with positive HBsAg: not possible (different epitope); indicates different subtype or window period.',
        method: 'Chemiluminescence immunoassay (CLIA) using recombinant HBsAg for antibody capture',
      },
      {
        name: 'Anti-HBc (Hepatitis B Core Antibody)',
        normalRange: 'Negative (non-reactive)',
        clinicalSignificance: 'Detects antibodies to HBV core antigen. Marker of past or current HBV infection. Differentiates natural infection from vaccination.',
        interpretation: 'Anti-HBc IgM: recent/acute infection (window period marker). Anti-HBc IgG: past resolved infection. Positive with negative HBsAg and negative Anti-HBs: occult HBV infection or window period. Positive with positive HBsAg: chronic infection.',
        method: 'Chemiluminescence immunoassay (CLIA) using recombinant HBc antigen for IgM and IgG detection',
      },
      {
        name: 'HBeAg',
        normalRange: 'Negative (non-reactive)',
        clinicalSignificance: 'Marker of active HBV replication and high infectivity. Correlates with HBV DNA levels.',
        interpretation: 'Positive: high viral replication, high infectivity, active liver disease (HBeAg-positive chronic hepatitis). Negative with positive Anti-HBe: low replication phase (HBeAg-negative chronic hepatitis), often with precore/core promoter mutations.',
        method: 'Chemiluminescence immunoassay (CLIA) using monoclonal anti-HBe antibody for antigen detection',
      },
      {
        name: 'Anti-HCV (Hepatitis C Antibody)',
        normalRange: 'Negative (non-reactive)',
        clinicalSignificance: 'Screening test for hepatitis C virus infection. Detects antibodies against HCV recombinant antigens.',
        interpretation: 'Positive: current or past HCV infection. Does not distinguish active from resolved infection. Confirm with HCV RNA PCR. False negative: early infection (window period 6-8 weeks), immunocompromised, hemodialysis. False positive: low prevalence populations.',
        method: 'Chemiluminescence immunoassay (CLIA) using recombinant HCV core, NS3, NS4, and NS5 antigens',
      },
      {
        name: 'Anti-HAV IgM',
        normalRange: 'Negative (non-reactive)',
        clinicalSignificance: 'Diagnosis of acute hepatitis A virus infection. IgM appears during acute illness and persists for 3-6 months.',
        interpretation: 'Positive: acute HAV infection (jaundice, elevated transaminases). IgM persists 4-6 months. Anti-HAV IgG: past infection or vaccination (lifelong immunity). HAV is fecal-oral transmitted, usually self-limited.',
        method: 'Chemiluminescence immunoassay (CLIA) using anti-human IgM mAb capturing HAV-specific IgM antibodies',
      },
      {
        name: 'Anti-HEV IgM',
        normalRange: 'Negative (non-reactive)',
        clinicalSignificance: 'Diagnosis of acute hepatitis E virus infection. HEV is enterically transmitted, causes outbreaks in endemic regions (Asia, Africa, Middle East).',
        interpretation: 'Positive: acute HEV infection (often self-limited). Pregnant women: high mortality (20-30% in third trimester). Immunocompromised: risk of chronic HEV. Differential diagnosis: HAV, HBV, HCV acute hepatitis.',
        method: 'ELISA using recombinant HEV ORF2 and ORF3 antigens for IgM capture',
      },
      {
        name: 'HIV Ag/Ab Combo (p24 + Antibodies)',
        normalRange: 'Negative (non-reactive)',
        clinicalSignificance: 'Fourth-generation HIV screening test. Simultaneously detects HIV-1 p24 antigen and HIV-1/2 antibodies. Reduces window period to 14-21 days.',
        interpretation: 'Reactive: requires confirmatory testing (HIV-1/2 differentiation assay). p24 antigen detected: acute HIV infection (pre-seroconversion). Antibody positive: established HIV infection. False positives: pregnancy, autoimmune, vaccinations.',
        method: 'Sandwich chemiluminescence immunoassay using monoclonal anti-p24 and HIV-1/2 antigen-coated microparticles',
      },
      {
        name: 'HIV Viral Load (RNA PCR)',
        normalRange: 'Not detected (target not detected)',
        clinicalSignificance: 'Quantifies HIV-1 RNA in plasma. Essential for monitoring disease progression and antiretroviral therapy (ART) response.',
        interpretation: 'Detectable: active HIV replication. Undetectable (<20-40 copies/mL): effective ART suppression (target). Blips (50-1000 copies/mL): transient viremia. Virologic failure: >1000 copies/mL on two consecutive tests despite adherence.',
        method: 'Real-time reverse transcription PCR (RT-qPCR) targeting conserved HIV-1 gag/pol/LTR regions with internal quantitation standard',
      },
      {
        name: 'SARS-CoV-2 PCR (COVID-19)',
        normalRange: 'Negative (not detected)',
        clinicalSignificance: 'Gold standard molecular diagnosis of acute SARS-CoV-2 infection. Detects viral RNA from respiratory specimens.',
        interpretation: 'Positive: active COVID-19 infection. Ct value inversely correlates with viral load (Ct <30: high viral load, Ct >35: low/waning). May remain positive weeks after recovery (non-infectious RNA shedding). False negatives: poor sampling, early incubation, mutant variants.',
        method: 'Real-time reverse transcription PCR (RT-qPCR) targeting SARS-CoV-2 N, E, and RdRp genes from nasopharyngeal swab',
      },
      {
        name: 'SARS-CoV-2 Antigen',
        normalRange: 'Negative (no antigen detected)',
        clinicalSignificance: 'Rapid point-of-care test for acute COVID-19 infection. Detects viral nucleocapsid protein. Results in 15-30 minutes.',
        interpretation: 'Positive: active infection (high specificity >98%). Sensitivity highest in first 5-7 days of symptoms and high viral load (Ct <25). False negatives: low viral load, asymptomatic, late infection. Confirm negative RAT with PCR if high clinical suspicion.',
        method: 'Lateral flow immunoassay using gold nanoparticle-conjugated monoclonal anti-SARS-CoV-2 N protein antibodies',
      },
      {
        name: 'CMV IgG/IgM',
        normalRange: 'IgG: Negative, IgM: Negative',
        clinicalSignificance: 'Determines CMV immune status and diagnoses primary or reactivated CMV infection. Critical in transplant recipients, pregnancy, and immunocompromised.',
        interpretation: 'IgG+/IgM-: past infection (latent). IgG-/IgM+: acute/recent infection. IgG+/IgM+: primary infection or reactivation. IgG avidity: low avidity confirms recent primary infection (within 3-4 months). Congenital CMV: maternal primary infection during pregnancy.',
        method: 'Chemiluminescence immunoassay (CLIA) using CMV lysate or recombinant pp150/pp65 antigens for IgG/IgM detection',
      },
      {
        name: 'EBV VCA IgG/IgM',
        normalRange: 'VCA IgM: Negative, VCA IgG: Negative',
        clinicalSignificance: 'Diagnosis of acute EBV infection (infectious mononucleosis). VCA IgM is the earliest antibody response.',
        interpretation: 'VCA IgM+/VCA IgG-: acute primary EBV infection. VCA IgM+/VCA IgG+: recent infection. VCA IgM-/VCA IgG+: past infection (lifetime). EBNA-1 IgG: appears weeks later, persists. Negative VCA IgM and positive EBNA-1: past infection.',
        method: 'Chemiluminescence immunoassay (CLIA) using synthetic VCA p18 peptide for specific IgM and IgG capture',
      },
      {
        name: 'HSV IgG/IgM',
        normalRange: 'HSV-1/2 IgG: Negative, IgM: Negative',
        clinicalSignificance: 'Determines HSV serostatus and differentiates HSV-1 from HSV-2 infection. Type-specific serology based on glycoprotein G.',
        interpretation: 'HSV-2 IgG positive: genital herpes (usually). HSV-1 IgG positive: orolabial herpes (usually). IgM positive: primary/recent infection or reactivation. Positive in neonates: consider neonatal herpes. Type-specific testing important for prenatal counseling.',
        method: 'ELISA or chemiluminescence immunoassay using type-specific HSV glycoprotein G (gG1/gG2) antigens',
      },
      {
        name: 'Rubella IgG/IgM',
        normalRange: 'IgG: Positive (>10 IU/mL immune), IgM: Negative',
        clinicalSignificance: 'Determines rubella immune status (part of prenatal screening). Detects congenital rubella syndrome risk and acute infection.',
        interpretation: 'IgG positive: immune (vaccination or past infection). IgM positive: recent infection/presumed acute rubella. Critical in pregnancy: acute rubella in first trimester has 80-90% risk of congenital rubella syndrome (cardiac, hearing, ocular defects).',
        method: 'Chemiluminescence immunoassay (CLIA) using rubella virus lysate or recombinant capsid/E1 antigens',
      },
      {
        name: 'Measles IgG/IgM',
        normalRange: 'IgG: Positive (immune), IgM: Negative',
        clinicalSignificance: 'Determines measles immunity and diagnoses acute measles infection. Important in outbreak settings and post-exposure prophylaxis.',
        interpretation: 'IgM positive: acute/recent measles infection (febrile rash illness with cough, coryza, conjunctivitis, Koplik spots). IgG negative: susceptible (consider MMR vaccination). Both IgG and IgM positive: recent infection/re-exposure.',
        method: 'ELISA using measles virus nucleoprotein (N) recombinant antigen for IgM and IgG capture',
      },
      {
        name: 'Dengue NS1 Antigen',
        normalRange: 'Negative (no antigen detected)',
        clinicalSignificance: 'Early diagnostic test for acute dengue virus infection. Detects NS1 glycoprotein produced by all four DENV serotypes. Positive during first 0-7 days of fever.',
        interpretation: 'Positive: acute dengue infection (sensitivity >90% in primary, >80% in secondary). Cannot differentiate serotype. Negative in early febrile phase: repeat if high suspicion. After day 7, switch to dengue IgM serology.',
        method: 'ELISA or immunochromatographic lateral flow test using monoclonal anti-dengue NS1 antibodies',
      },
      {
        name: 'Dengue IgG/IgM',
        normalRange: 'IgM: Negative, IgG: Negative',
        clinicalSignificance: 'Serological diagnosis of dengue infection. IgM appears after 4-5 days of fever. Differentiates primary from secondary infection.',
        interpretation: 'IgM+/IgG-: primary acute dengue. IgM+/IgG+: secondary dengue (more severe, risk of DHF/DSS). IgG+/IgM-: past infection. Rising IgG titre in paired sera: recent secondary infection. High IgG in acute phase: secondary infection.',
        method: 'ELISA using inactivated dengue virus serotype-1-4 antigens or recombinant envelope proteins',
      },
      {
        name: 'Chikungunya Serology',
        normalRange: 'IgM: Negative, IgG: Negative',
        clinicalSignificance: 'Diagnosis of Chikungunya virus infection (alpha virus transmitted by Aedes mosquitoes). Characterized by acute fever with severe arthralgia.',
        interpretation: 'IgM positive: acute/recent infection (appears day 2-7, persists 3-6 months). IgG positive: past infection. Cross-reactivity with other alphaviruses (Ross River, O\'nyong-nyong). Differential: dengue (co-circulates), Zika, parvovirus B19.',
        method: 'ELISA using CHIKV E1/E2 recombinant envelope glycoproteins for IgM and IgG detection',
      },
      {
        name: 'Malaria Antigen (RDT)',
        normalRange: 'Negative (no malaria antigen detected)',
        clinicalSignificance: 'Rapid point-of-care test for malaria diagnosis. Detects P. falciparum-specific HRP-2 and pan-malarial pLDH/aldolase antigens.',
        interpretation: 'Pf HRP-2 positive: P. falciparum infection (may persist weeks after treatment). Pan-pLDH positive: non-falciparum species (P. vivax, P. ovale, P. malariae, P. knowlesi). Both positive: mixed infection. Sensitivity influenced by parasite density.',
        method: 'Lateral flow immunochromatographic assay using monoclonal antibodies against HRP-2 and pan-pLDH antigens',
      },
      {
        name: 'Malaria Smear (Thick/Thin)',
        normalRange: 'No malaria parasites detected',
        clinicalSignificance: 'Gold standard for malaria diagnosis. Thick film for parasite detection and quantification. Thin film for species identification and stage assessment.',
        interpretation: 'Positive: species identification (P. falciparum: banana-shaped gametocytes, multiple rings. P. vivax: Schuffner dots, enlarged RBCs. P. ovale: oval RBCs, fimbriated edges. P. malariae: band forms, rosettes). Parasitemia: % infected RBCs (>10%: severe falciparum).',
        method: 'Giemsa-stained thick and thin blood smears examined under 1000x oil immersion for identifying malaria parasite stages',
      },
    ]
  },
  {
    id: 'fungal',
    title: 'Fungal & Parasitic Testing',
    icon: 'pest_control',
    color: 'from-purple-600 to-purple-400',
    description: 'Diagnostic testing for fungal, protozoal, and helminthic infections using microscopy, culture, antigen detection, and serological methods.',
    tests: [
      {
        name: 'KOH Mount (Skin/Nail)',
        normalRange: 'No fungal elements seen',
        clinicalSignificance: 'Rapid screening test for cutaneous fungal infections. Detects hyphae, pseudohyphae, and yeast forms in skin scrapings, nail clippings, and hair.',
        interpretation: 'Positive: dermatophyte infection (dermatophytosis/ringworm). Septate branching hyphae: Trichophyton, Microsporum, Epidermophyton. Yeast cells with pseudohyphae: Candida. Spaghetti and meatball appearance: Malassezia (tinea versicolor).',
        method: 'Specimen mounted in 10-20% KOH solution with gentle heating to dissolve keratin, examined under 400x bright-field microscopy',
      },
      {
        name: 'Fungal Culture',
        normalRange: 'No fungal growth',
        clinicalSignificance: 'Definitive diagnosis of fungal infections through isolation and identification of pathogenic fungi from clinical specimens.',
        interpretation: 'Positive: Dermatophytes (Trichophyton, Microsporum) - colony morphology and microscopic features. Moulds: Aspergillus, Fusarium, Mucorales (rapid growers). Dimorphic fungi: Histoplasma, Blastomyces, Coccidioides (slow, require BSL-3). Yeasts: Candida, Cryptococcus.',
        method: 'Specimen inoculated on Sabouraud dextrose agar with chloramphenicol and cycloheximide incubated at 30°C and 37°C for up to 4 weeks',
      },
      {
        name: 'Galactomannan Antigen (Aspergillus)',
        normalRange: 'Index < 0.5 (negative)',
        clinicalSignificance: 'Non-invasive biomarker for diagnosis of invasive aspergillosis. Galactomannan is a cell wall polysaccharide released by Aspergillus during growth.',
        interpretation: 'Index > 0.5: positive for invasive aspergillosis (sensitivity ~70%, specificity ~90%). Higher cut-off (1.0) improves specificity. False positives: piperacillin-tazobactam, other beta-lactams, Plasmalyte, B. bifidum probiotics. False negatives: neutropenia, prophylaxis.',
        method: 'Double-sandwich ELISA using monoclonal anti-galactomannan EB-A2 antibody from bronchoalveolar lavage or serum',
      },
      {
        name: 'Beta-D-Glucan Assay',
        normalRange: '< 60 pg/mL (negative)',
        clinicalSignificance: 'Pan-fungal biomarker detecting (1,3)-beta-D-glucan in the cell wall of most fungi (except Mucorales and Cryptococcus). Screening test for invasive fungal infections.',
        interpretation: '>80 pg/mL: positive for invasive fungal infection (Candida, Aspergillus, Pneumocystis jirovecii, Histoplasma, Blastomyces, Coccidioides). False positives: hemodialysis, bacteremia, IVIG, albumin, surgical gauze, cellulose filters.',
        method: 'Chromogenic limulus amebocyte lysate (LAL)-based assay activated by factor G pathway detecting beta-D-glucan',
      },
      {
        name: 'Cryptococcal Antigen',
        normalRange: 'Negative (no antigen detected)',
        clinicalSignificance: 'Detects Cryptococcus neoformans/gattii capsular polysaccharide antigen. High association with HIV/AIDS, transplant recipients, and other immunocompromised states.',
        interpretation: 'Positive: cryptococcal meningitis (serum and CSF), pulmonary cryptococcosis, disseminated cryptococcosis. Quantitative titre: prognostic (higher titre = worse outcome, >1:1024 associated with increased mortality). Screening recommended in HIV with CD4 <100.',
        method: 'Latex agglutination test using anti-cryptococcal polysaccharide antibodies or LFA (lateral flow assay) with monoclonal antibodies',
      },
      {
        name: 'Histoplasma Antigen/Antibody',
        normalRange: 'Negative (no antigen/antibody detected)',
        clinicalSignificance: 'Diagnosis of histoplasmosis, a dimorphic fungal infection endemic to Ohio/Mississippi River valleys. Antigen detection preferred in disseminated disease.',
        interpretation: 'Antigen positive: disseminated histoplasmosis (urine > serum sensitivity), acute pulmonary. Antibody positive: past or current infection (immunodiffusion: H and M bands). M band alone: chronic infection. H and M bands: active disease. Cross-reactivity: blastomycosis, coccidioidomycosis.',
        method: 'ELISA for Histoplasma galactomannan antigen in urine/serum; immunodiffusion or CF for antibody detection',
      },
      {
        name: 'Ova & Parasite (Stool Exam)',
        normalRange: 'No ova, cysts, or parasites identified',
        clinicalSignificance: 'Gold standard for diagnosing intestinal parasitic infections. Identifies protozoan trophozoites/cysts and helminth eggs/larvae in stool specimens.',
        interpretation: 'Positive: Giardia lamblia (trophozoites/cysts), Entamoeba histolytica (IHAT-positive), Ascaris lumbricoides (ova), hookworm (Ancylostoma/Necator), Strongyloides stercoralis (rhabditiform larvae), Trichuris trichiura, Taenia spp., Schistosoma mansoni (eggs).',
        method: 'Wet mount with saline and iodine, supplemented with formalin-ether concentration (FEC) technique and permanent trichrome/Giemsa staining',
      },
      {
        name: 'Entamoeba histolytica Serology',
        normalRange: 'Negative (no antibodies detected)',
        clinicalSignificance: 'Diagnosis of invasive amebiasis (amebic liver abscess, amebic colitis). Differentiates E. histolytica from non-pathogenic E. dispar.',
        interpretation: 'Positive: invasive amebic infection (amebic liver abscess: >95% positive, amebic colitis: ~80% positive). May remain positive for years after infection. Negative serology with positive stool microscopy: consider E. dispar (non-pathogenic).',
        method: 'ELISA using recombinant E. histolytica-specific Gal/GalNAc lectin or whole trophozoite antigen',
      },
      {
        name: 'Toxoplasma IgG/IgM',
        normalRange: 'IgG: Negative, IgM: Negative',
        clinicalSignificance: 'Diagnosis of toxoplasmosis caused by Toxoplasma gondii. Critical in pregnancy (risk of congenital toxoplasmosis), immunocompromised (reactivation causing cerebral toxoplasmosis).',
        interpretation: 'IgG positive: past infection (latent). IgM positive: acute/recent infection (may persist >12 months). IgG avidity: high avidity excludes recent infection (past 12-16 weeks). Pregnant: acute infection in first trimester highest fetal risk. HIV: reactivation when CD4 <100.',
        method: 'Chemiluminescence immunoassay (CLIA) or ELISA using Toxoplasma lysate antigen or recombinant SAG1/GRA antigens',
      },
      {
        name: 'Leishmania Serology (rK39)',
        normalRange: 'Negative (no antibodies detected)',
        clinicalSignificance: 'Rapid serological diagnosis of visceral leishmaniasis (Kala-azar) caused by Leishmania donovani complex. Uses recombinant kinesin antigen rK39.',
        interpretation: 'Positive: active visceral leishmaniasis (sensitivity ~90% in Indian subcontinent, lower in East Africa). Clinical: fever, splenomegaly, hepatomegaly, pancytopenia, weight loss. Post-Kala-azar dermal leishmaniasis (PKDL): may also be positive.',
        method: 'Immunochromatographic lateral flow test (dipstick) using rK39 recombinant antigen for antibody detection',
      },
      {
        name: 'Hydatid Serology (Echinococcus)',
        normalRange: 'Negative (no antibodies detected)',
        clinicalSignificance: 'Diagnosis of hydatid disease (cystic echinococcosis) caused by Echinococcus granulosus tapeworm. Detects antibodies against hydatid cyst fluid antigens.',
        interpretation: 'Positive: hepatic hydatid cyst (most common, 60-70%), pulmonary hydatid, peritoneal, splenic. Sensitivity depends on cyst integrity (intact cyst: lower sensitivity, ruptured cyst: higher). Cross-reactivity: other cestode infections, liver fluke, malignancy.',
        method: 'ELISA using E. granulosus hydatid cyst fluid antigen (AgB/Ag5) with confirmatory immunoblot detecting 8/16 kDa subunits',
      },
    ]
  },
  {
    id: 'ast',
    title: 'Antimicrobial Susceptibility Testing',
    icon: 'medication',
    color: 'from-amber-600 to-amber-400',
    description: 'In vitro tests to determine the susceptibility of bacterial and fungal isolates to antimicrobial agents, guiding appropriate therapeutic selection.',
    tests: [
      {
        name: 'Kirby-Bauer Disc Diffusion',
        normalRange: 'Susceptible (zone diameter above CLSI breakpoint)',
        clinicalSignificance: 'Standardized qualitative method for determining antimicrobial susceptibility. Results reported as Susceptible, Intermediate, or Resistant (SIR).',
        interpretation: 'Zone diameter measured and compared to CLSI breakpoints. S: likely effective. I: may be effective at higher doses. R: not effective. Methicillin-resistant S. aureus (MRSA): cefoxitin screen positive. ESBL: reduced cephalosporin zones.',
        method: 'Standardized 0.5 McFarland inoculum swabbed on Mueller-Hinton agar with antimicrobial discs placed and incubated 16-18 hours at 37°C',
      },
      {
        name: 'MIC (Minimum Inhibitory Concentration)',
        normalRange: 'Susceptible (MIC below CLSI breakpoint)',
        clinicalSignificance: 'Quantitative method determining the lowest antimicrobial concentration that inhibits visible bacterial growth. Essential for guiding optimal dosing.',
        interpretation: 'MIC value (mcg/mL) compared to CLSI/EUCAST breakpoints. Low MIC: susceptible. High MIC: resistant. MIC correlates with PK/PD: time-dependent (beta-lactams: T>MIC), concentration-dependent (aminoglycosides: Cmax/MIC), AUC/MIC ratio (fluoroquinolones).',
        method: 'Broth microdilution in 96-well plates with serial 2-fold antimicrobial dilutions and 0.5 McFarland inoculum read after 16-24 hours incubation',
      },
      {
        name: 'MBC (Minimum Bactericidal Concentration)',
        normalRange: 'MBC/MIC ratio < 4 (bactericidal)',
        clinicalSignificance: 'Determines the lowest antimicrobial concentration that kills 99.9% of inoculum. Important for endocarditis, meningitis, and neutropenic fever.',
        interpretation: 'MBC/MIC ratio <4: bactericidal (beta-lactams, aminoglycosides, fluoroquinolones, vancomycin, daptomycin). MBC/MIC ratio >4: bacteriostatic (macrolides, tetracyclines, linezolid, tigecycline). Tolerant: MBC/MIC >32 (e.g., S. aureus with vancomycin).',
        method: 'Subculture of MIC plate wells with no visible growth onto antibiotic-free agar for colony count after 24 hours incubation to determine 99.9% kill',
      },
      {
        name: 'ESBL Screening/Confirmation',
        normalRange: 'Negative (no ESBL production detected)',
        clinicalSignificance: 'Detection of extended-spectrum beta-lactamase producing Enterobacteriaceae. ESBLs hydrolyze penicillins, cephalosporins, and aztreonam.',
        interpretation: 'Screening: reduced zone for ceftazidime/cefotaxime. Confirmation: ceftazidime zone increase >5 mm with clavulanic acid. ESBL-positive: treat with carbapenems (meropenem, imipenem, ertapenem). Avoid cephalosporins and penicillins regardless of MIC.',
        method: 'CLSI combination disc test using ceftazidime (30 mcg) and cefotaxime (30 mcg) discs with and without clavulanic acid on Mueller-Hinton agar',
      },
      {
        name: 'MRSA Screening',
        normalRange: 'Negative (no MRSA detected)',
        clinicalSignificance: 'Detection of methicillin-resistant Staphylococcus aureus colonization or infection. Critical for infection control (contact precautions) and guiding empiric therapy.',
        interpretation: 'Positive: MRSA colonization (nares, groin, axilla) or infection. Cefoxitin disc screen positive (zone <22 mm). Confirm with mecA PCR or PBP2a detection. Healthcare-associated vs community-associated (SCCmec typing).',
        method: 'Mannitol salt agar with oxacillin (selective) or cefoxitin disc screen on Mueller-Hinton agar with 0.5 McFarland inoculum',
      },
      {
        name: 'VRE Screening',
        normalRange: 'Negative (no VRE detected)',
        clinicalSignificance: 'Detection of vancomycin-resistant Enterococci (predominantly E. faecium, E. faecalis). Important for infection control and treatment selection.',
        interpretation: 'Positive: VRE colonization or infection. VanA phenotype: high-level vancomycin (MIC >256) and teicoplanin resistance. VanB: variable vancomycin resistance, teicoplanin susceptible. Treatment: linezolid, daptomycin, tigecycline, quinupristin-dalfopristin.',
        method: 'Enterococcosel agar with vancomycin (6 mcg/mL) for selective screening, confirmed by vanA/vanB PCR and broth microdilution MIC',
      },
      {
        name: 'Carbapenemase Detection (mCIM)',
        normalRange: 'Negative (no carbapenemase detected)',
        clinicalSignificance: 'Detection of carbapenemase-producing organisms (CPO) including KPC, NDM, VIM, IMP, OXA-48. Critical for treatment of carbapenem-resistant Enterobacteriaceae (CRE).',
        interpretation: 'Positive (zone diameter 6-15 mm or 16-18 mm with visible colonies): carbapenemase detected. Modified carbapenem inactivation method (mCIM) + EDTA-modified (eCIM) for metallo-beta-lactamase differentiation: eCIM positive: MBL (NDM, VIM, IMP), eCIM negative: serine carbapenemase (KPC, OXA-48).',
        method: 'mCIM: 10 mcg meropenem disc incubated in MHB with test organism inoculum loop for 4 hours, then applied to Mueller-Hinton lawn of E. coli ATCC 25922',
      },
      {
        name: 'Beta-Lactamase Test',
        normalRange: 'Negative (no beta-lactamase activity detected)',
        clinicalSignificance: 'Rapid detection of beta-lactamase enzyme production by bacteria. Confirms penicillin resistance in S. aureus, H. influenzae, M. catarrhalis, N. gonorrhoeae.',
        interpretation: 'Positive: organism produces beta-lactamase (penicillin resistant). S. aureus: >90% produce beta-lactamase. H. influenzae: 30-40% produce beta-lactamase. N. gonorrhoeae: PPNG (penicillinase-producing). M. catarrhalis: >90% produce beta-lactamase.',
        method: 'Chromogenic cephalosporin test (nitrocefin) detecting beta-lactamase enzyme activity by color change from yellow to red/pink on filter paper',
      },
      {
        name: 'Inducible Clindamycin Resistance (D-Zone)',
        normalRange: 'Negative (no inducible resistance)',
        clinicalSignificance: 'Detection of inducible macrolide-lincosamide-streptogramin B (MLSB) resistance in S. aureus, S. pneumoniae, and beta-hemolytic streptococci.',
        interpretation: 'D-zone positive (flattened zone around clindamycin adjacent to erythromycin): inducible MLSB resistance. Report clindamycin as resistant. D-zone negative: clindamycin susceptibility confirmed. Constitutive resistance: both erythromycin and clindamycin resistant.',
        method: 'Double-disc diffusion with erythromycin (15 mcg) and clindamycin (2 mcg) discs placed 15-20 mm apart on Mueller-Hinton agar',
      },
      {
        name: 'Serum Bactericidal Titre',
        normalRange: 'Peak titre > 1:32, Trough > 1:8',
        clinicalSignificance: 'Functional assay measuring the highest dilution of patient serum that kills 99.9% of infecting organism. Monitors antibiotic efficacy in endocarditis, osteomyelitis, and other deep-seated infections.',
        interpretation: 'Peak titre >1:32: adequate antibiotic dosing. Trough titre >1:8: adequate trough level. Titre <1:8: inadequate dosing or treatment failure. Used for adjusting vancomycin, aminoglycosides, daptomycin in difficult-to-treat infections.',
        method: 'Serial 2-fold dilutions of patient serum in pooled normal serum inoculated with patient\'s organism at 5x10^5 CFU/mL, subcultured after 24-hour incubation',
      },
    ]
  },
];

const MicrobiologyPage = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface via-surface-container to-surface-dim pt-8 pb-12">
      {/* Header Section */}
      <section className="px-4 mb-12 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-display text-display text-primary mb-2">Microbiology & Serology</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Comprehensive microbiology reference covering bacterial cultures, serological assays, viral markers, fungal and parasitic testing, and antimicrobial susceptibility testing with full clinical interpretation.
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
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Microbiology Test Categories</h2>
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
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Microbiology Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-error-container/10 border border-error/40 rounded-xl p-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-error text-2xl flex-shrink-0">warning</span>
              <div>
                <h3 className="font-headline-sm text-headline-md text-error mb-2">Critical Results</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Positive blood cultures, CSF Gram stain/culture, sterile site cultures (joint, pleural, pericardial), positive AFB smear, positive malaria smear, positive viral PCR for notifiable diseases, and carbapenemase-producing organisms must be communicated immediately as critical results. Always correlate with clinical presentation.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-secondary-container/10 border border-secondary/40 rounded-xl p-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl flex-shrink-0">info</span>
              <div>
                <h3 className="font-headline-sm text-headline-md text-secondary mb-2">Specimen Collection Guidelines</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Proper collection, transport, and storage are critical for accurate microbiology results. Collect specimens before antibiotics where possible. Use appropriate sterile containers, transport media (e.g., Cary-Blair for stool), and maintain temperature (refrigerate urine, room temp for CSF). Label clearly with site and time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="px-4 mt-16 max-w-7xl mx-auto border-t border-outline-variant pt-8">
        <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
          This microbiology reference is designed for healthcare professionals. Reference ranges and breakpoints may vary between laboratories and guidelines (CLSI/EUCAST). Always correlate laboratory findings with clinical presentation.
        </p>
      </section>
    </div>
  );
};

export { subcategories };
export default MicrobiologyPage;
