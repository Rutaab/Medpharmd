export const syllabus = {
  '1st-professional': {
    id: '1st-professional',
    title: '1st Professional',
    icon: 'looks_one',
    color: 'from-rose-600 to-rose-600',
    subjects: [
      {
        id: 'pharmaceutical-chemistry-i',
        title: 'Pharmaceutical Chemistry-I (Organic)',
        icon: 'science',
        color: 'from-indigo-600 to-indigo-400',
        description: 'Basic concepts, organic reactions, stereochemistry, heterocyclic compounds and pharmaceutical applications.',
        chapters: [
          { title: 'Basic Concepts', topics: ['Conjugation', 'Hyperconjugation', 'Steric effect', 'Inductive effect', 'Mesomeric effect', 'Hydrogen bonding', 'Theory of resonance', 'Effect of structure on reactivity', 'Tautomerism of carbonyl compounds'] },
          { title: 'Nucleophilic & Electrophilic Substitution', topics: ['Substitution reactions in aliphatic systems', 'Substitution reactions in aromatic systems'] },
          { title: 'Orientation in Electrophilic Substitution', topics: ['Orientation on benzene ring', 'Directing effects of substituents'] },
          { title: 'Organic Reactions', topics: ['Baeyer-Villiger oxidation', 'Diels Alder reaction', "Grignard's reaction", 'Metal hydride reduction', 'Wolf Kishner reduction', "Friedel Craft's reaction", 'Perkin reaction', 'Cannizzaro reaction'] },
          { title: 'Carbonium Ion Rearrangements', topics: ['Pinacol-pinacolone', 'Wagner-Meerwein', 'Wolf rearrangement', 'Hofmann rearrangement', 'Beckmann rearrangement'] },
          { title: 'Carbanions', topics: ['Aldol condensation', 'Favorskii rearrangement', 'Witting reaction'] },
          { title: 'Stereochemistry', topics: ['Stereoisomerism', 'Optical isomerism', 'Molecules with multiple chiral centres', 'Geometrical isomerism', 'Resolution of racemic mixture', 'Conformational analysis'] },
          { title: 'Free Radicals', topics: ['Introduction and structure', 'Stability', 'Preparation and properties'] },
          { title: 'Functional Group Chemistry', topics: ['Alcohols', 'Phenols', 'Ethers', 'Aldehydes', 'Ketones', 'Acids', 'Esters', 'Amines', 'Aniline'] },
          { title: 'Heterocyclic Compounds', topics: ['Pyrrol', 'Furan', 'Thiophene', 'Pyridine', 'Pyrimidine', 'Pyrazine'] },
          { title: 'Benzo-Fused Heterocycles', topics: ['Indole', 'Quinoline', 'Isoquinoline'] },
        ]
      },
      {
        id: 'pharmaceutical-biochemistry',
        title: 'Pharmaceutical Biochemistry',
        icon: 'biotech',
        color: 'from-violet-600 to-violet-400',
        description: 'Chemistry of biomolecules, metabolic pathways, enzymes, vitamins, hormones, and gene expression.',
        chapters: [
          { title: 'Introduction & Basic Principles', topics: ['Role of biochemistry in health profession', 'Nature of biochemical reactions'] },
          { title: 'Carbohydrates', topics: ['Chemistry and classification', 'Reactions of carbohydrates', 'Optical activity', 'Biological and pharmaceutical importance'] },
          { title: 'Lipids', topics: ['Chemistry of fatty acids', 'Classification: saponifiable and non-saponifiable', 'Simple, complex and derived lipids', 'Essential fatty acids', 'Biological and pharmaceutical importance'] },
          { title: 'Proteins & Amino Acids', topics: ['Chemistry and classification', 'Reactions of proteins and amino acids', 'Organizational levels', 'Macromolecular nature', 'Biological and pharmaceutical importance'] },
          { title: 'Nucleic Acids', topics: ['Chemistry and types (DNA, RNA, mRNA, tRNA, rRNA)', 'Purine and pyrimidine bases', 'Nucleosides and nucleotides', 'Structures of nucleic acids', 'Biological and pharmaceutical importance'] },
          { title: 'Vitamins', topics: ['Chemistry and classification', 'Fat-soluble vitamins', 'Water-soluble vitamins', 'Biological and pharmaceutical importance'] },
          { title: 'Hormones', topics: ['Chemistry and classification', 'Proteinous and non-proteinous hormones', 'Amino acid derivatives', 'Steroid hormones', 'Biological and pharmaceutical importance'] },
          { title: 'Enzymes', topics: ['Chemistry and classification', 'Mode of action', 'Kinetics (Michaelis Menten equation)', 'Inhibition and activation', 'Specificity', 'Allosteric enzymes', 'Factors affecting reaction rate', 'Mechanism of chymotrypsin and ribonuclease'] },
          { title: 'Carbohydrate Metabolism', topics: ['Introduction to metabolism', 'Digestion and absorption', 'Glycolysis', 'Pentose Phosphate Pathway', 'Glycogenolysis', 'Glycogenesis', 'Gluconeogenesis', 'Citric acid cycle', 'Energetics'] },
          { title: 'Lipid Metabolism', topics: ['Digestion and absorption of lipids', 'Beta-oxidation of fatty acids', 'Biosynthesis of fatty acids', 'Biosynthesis of neutral lipids and cholesterol'] },
          { title: 'Protein & Amino Acid Metabolism', topics: ['Digestion and absorption', 'Metabolism of essential and non-essential amino acids', 'Biosynthesis and catabolism of haemins and porphyrins'] },
          { title: 'Bioenergetics', topics: ['Principles of bioenergetics', 'Electron transport chain', 'Oxidative phosphorylation'] },
          { title: 'Regulation of Metabolic Processes', topics: ['Role of vitamins as coenzymes', 'Receptor mediated regulation by hormones', 'Secondary messengers (cAMP, calcium, phosphoinositol)', 'Gene expression: replication, transcription, translation', 'Biotechnology and genetic engineering', 'Recombinant DNA technology'] },
        ]
      },
      {
        id: 'pharmaceutics-i',
        title: 'Pharmaceutics-I (Physical Pharmacy)',
        icon: 'medication',
        color: 'from-sky-600 to-sky-400',
        description: 'Physico-chemical principles, dispersions, rheology, and kinetic principles in pharmacy.',
        chapters: [
          { title: 'Pharmacy Orientation', topics: ['Introduction to hospital pharmacy', 'Retail pharmacy', 'Industrial pharmacy', 'Forensic pharmacy', 'Pharmaceutical education and research'] },
          { title: 'History & Literature of Pharmacy', topics: ['History through ancient, Greek and Arab periods', 'Contribution of Muslim scientists', 'Introduction to official books'] },
          { title: 'Physico-Chemical Principles - Solutions', topics: ['Types of solutions', 'Concentration expressions', 'Ideal and real solutions', 'Colligative properties', 'Molecular weight determinations', 'Distribution coefficient'] },
          { title: 'Solubilization', topics: ['Solubility and factors affecting', 'Surfactants: properties and types', 'Micelles: formulation and types'] },
          { title: 'Ionization & Buffers', topics: ['Ionization and pH', 'pH indicators', 'pKa', 'Buffers and buffer equation', 'Isotonic solutions'] },
          { title: 'Hydrolysis & Micromeritics', topics: ['Types of hydrolysis', 'Protection of drugs against hydrolysis', 'Particle size and shapes', 'Methods of particle size determination'] },
          { title: 'Colloidal Dispersions', topics: ['Types of colloids', 'Methods of preparation', 'Optical, kinetic and electrical properties', 'Dialysis and artificial kidney', 'Stability of colloids', 'Protection and sensitization'] },
          { title: 'Emulsions', topics: ['Types of emulsions', 'Theories of emulsification', 'Emulsifying agents', 'Stability of emulsion'] },
          { title: 'Suspensions', topics: ['Types of suspensions', 'Methods of preparation', 'Properties', 'Suspending agents', 'Stability'] },
          { title: 'Adsorption', topics: ['Techniques and processes of adsorption'] },
          { title: 'Rheology', topics: ['Definition and fundamental concepts', 'Properties contributing to rheological behaviour', 'Graphic presentation of rheological data'] },
          { title: 'Physicochemical Processes', topics: ['Precipitation', 'Crystallization', 'Distillation (simple, fractional, steam, vacuum)', 'Efflorescence, deliquescence, lyophilization', 'Elutrition, exsiccation, sublimation, fusion, calcination'] },
          { title: 'Kinetic Principles & Stability', topics: ['Rate and order of reactions', 'Physical factors: pH, temperature, ionic strength, UV light', 'Chemical factors: oxidation-reduction, hydrolysis'] },
        ]
      },
      {
        id: 'physiology-and-histology',
        title: 'Physiology & Histology',
        icon: 'monitor_heart',
        color: 'from-rose-600 to-rose-400',
        description: 'Human physiology of organ systems and histological examination of tissues.',
        chapters: [
          { title: 'Blood', topics: ['Composition of blood', 'RBC, WBC and Platelets', 'Functions and genesis of formed elements', 'Jaundice', 'Blood groups and Rh factors', 'ESR and blood volume', 'Functions of spleen', 'Blood coagulation', 'Hemophilia', 'Anaemias'] },
          { title: 'Circulatory System', topics: ['Properties of cardiac muscle', 'Origin and conduction of heart beat', 'Cardiac cycle and ECG', 'Heart sounds', 'Cardiac output', 'Blood pressure', 'Coronary, pulmonary and skin circulation', 'Arterial and venous pulse', 'Capillary circulation', 'Haemorrhage and shock'] },
          { title: 'Respiratory System', topics: ['Mechanics of respiration', 'Intrathoracic and intrapulmonary pressure', 'Pulmonary ventilation', 'Lung volumes and capacities', 'Gas carriage by blood', 'Regulation of breathing', 'Pneumonia, emphysema, bronchial asthma'] },
          { title: 'Skin', topics: ['Structure of skin', 'Functions of skin', 'Temperature regulation'] },
          { title: 'Digestive System', topics: ['Mastication and deglutition', 'Digestive juices: saliva, gastric, pancreatic, bile, intestinal', 'Movements of stomach and intestines', 'Functions of large intestine', 'Functions of liver and gall bladder'] },
          { title: 'Urinary System', topics: ['Urine formation', 'Composition of urine', 'GFR and urea clearance', 'Concentrated and diluted urine'] },
          { title: 'Nerve & Muscle Physiology', topics: ['Chemical changes in muscle contraction', 'Action potential'] },
          { title: 'Nervous System', topics: ['Spinal reflexes', 'Reflex regulation of movement and posture', 'Cerebral cortex functions', 'Descending tracts', 'Basal ganglia', 'Cerebellum', 'Autonomic nervous system', 'CSF'] },
          { title: 'Special Senses', topics: ['Elementary knowledge of structure and function'] },
          { title: 'Endocrinology', topics: ['Pituitary hormones', 'Thyroid gland', 'Parathyroid hormone', 'Pancreatic hormones', 'Adrenal glands', 'Sex hormones', 'Mechanism of hormone action'] },
          { title: 'Histological Techniques', topics: ['Underlying principles', 'Staining of paraffin and frozen sections', 'Epithelium, connective tissue and muscle tissue', 'Organ systems: lung, kidney, appendix, skin, gall bladder, stomach, intestine'] },
        ]
      },
      {
        id: 'anatomy',
        title: 'Anatomy',
        icon: 'accessibility',
        color: 'from-orange-600 to-orange-400',
        description: 'Anatomical terminology, cell structure, tissues, and organ systems of the human body.',
        chapters: [
          { title: 'Introduction & Anatomical Terminology', topics: ['Definition', 'Cell, tissue, organ system'] },
          { title: 'Structure of Cell', topics: ['Cell membrane', 'Cytoplasm', 'Organelles', 'Nucleus', 'Cell cycle'] },
          { title: 'Tissues of the Body', topics: ['Epithelial tissue: characters and classification', 'Connective tissue: structure and types', 'Cartilage and bone', 'Muscle: skeletal, smooth, cardiac'] },
          { title: 'Integumentary System', topics: ['Skin: epidermis and dermis', 'Glands of skin', 'Hair: structure and function', 'Nail'] },
          { title: 'Cardiovascular System', topics: ['Structure of heart', 'Location of heart', 'Blood supply to heart', 'Main blood vessels'] },
          { title: 'Elementary System', topics: ['Name and structure of digestive system parts', 'Inter-relationship of organs'] },
          { title: 'Urinary System', topics: ['Name and structure of urinary organs', 'Inter-relationship of organs'] },
          { title: 'Reproductive System', topics: ['Male reproductive system', 'Female reproductive system'] },
          { title: 'Endocrine System', topics: ['Pituitary gland', 'Thyroid gland', 'Adrenal gland'] },
          { title: 'Nervous System', topics: ['Neurons and accessory cells', 'Brain: cerebrum, cerebellum, brain stem', 'Spinal cord: meninges, CSF, sensory and motor pathways', 'Cranial nerves', 'Autonomic nervous system'] },
        ]
      },
    ]
  },
  '2nd-professional': {
    id: '2nd-professional',
    title: '2nd Professional',
    icon: 'looks_two',
    color: 'from-emerald-600 to-emerald-600',
    subjects: [
      {
        id: 'pharmaceutics-ii',
        title: 'Pharmaceutics-II (Pharmaceutical Preparations)',
        icon: 'medication',
        color: 'from-sky-600 to-sky-400',
        description: 'Pharmaceutical calculations, galenical preparations, dosage forms, and parenterals.',
        chapters: [
          { title: 'Introduction', topics: ['Dosage forms', 'Ingredients'] },
          { title: 'Pharmaceutical Calculations', topics: ['Metric system', 'Common systems and conversions', 'Calculation of doses', 'Reducing and enlarging formulas', 'Density, specific gravity and volume', 'Percentage preparations', 'Isotonic solutions', 'HLB values', 'Industrial calculations'] },
          { title: 'Galenical Preparations', topics: ['Infusions', 'Decoctions', 'Extracts', 'Fluid extracts', 'Tinctures', 'Aromatic waters'] },
          { title: 'Extraction Processes', topics: ['Maceration: purpose and process', 'Percolation: purpose and process', 'Liquid-liquid extraction', 'Large scale extraction'] },
          { title: 'Oral Solutions & Syrups', topics: ['Solutions and preparation', 'Dry mixtures for solution', 'Oral rehydrate solutions', 'Syrup components and preparation', 'Elixirs: medicated and non-medicated', 'Spirits'] },
          { title: 'Oral Suspensions & Emulsions', topics: ['Preparations', 'Examples and importance', 'Magma and gels'] },
          { title: 'Transdermal Drug Delivery', topics: ['Ointments, creams, pastes', 'Poultice, plasters, lotions, liniments', 'Topical gels, tinctures, collodions', 'Percutaneous absorption', 'Transdermal systems'] },
          { title: 'Ophthalmic, Nasal & Otic Preparations', topics: ['Ophthalmic solutions, suspensions, ointments, inserts', 'Contact lens solutions', 'Nasal decongestants', 'Ear preparations'] },
          { title: 'Suppositories', topics: ['Semi-solid preparations', 'Suppository bases', 'Preparation, packaging and storage', 'Vaginal suppositories', 'Enemas'] },
          { title: 'Aerosols & Inhalations', topics: ['Principle and container/valve assembly', 'Propellants', 'Filling, testing, packaging, labeling'] },
          { title: 'Powders, Capsules & Tablets', topics: ['Preparation of powders', 'Granules and effervescent salts', 'Hard and soft gelatin capsules', 'Tablet types and methods of preparation'] },
          { title: 'Parenterals', topics: ['Official types of injections', 'Solvents and vehicles', 'Added substances'] },
          { title: 'Oral Hygiene Products', topics: ['Brief introduction'] },
        ]
      },
      {
        id: 'pharmacology-therapeutics-i',
        title: 'Pharmacology & Therapeutics-I',
        icon: 'local_pharmacy',
        color: 'from-teal-600 to-teal-600',
        description: 'General pharmacology, autonomic nervous system drugs, GIT, respiratory, cardiovascular drugs, and autacoids.',
        chapters: [
          { title: 'General Pharmacology', topics: ['History and classification', 'Drug sources', 'Routes of administration', 'Pharmacokinetics: absorption, distribution, biotransformation, excretion', 'Bioavailability and bioequivalence', 'Therapeutic index', 'Pharmacodynamics: receptors and theories', 'Mechanisms of drug action'] },
          { title: 'Autonomic Nervous System Drugs', topics: ['Organization of ANS', 'Neurotransmitters: synthesis, release and fate', 'Sympathetic agonists: catecholamines and non-catecholamines', 'Sympathetic antagonists: adrenergic blockers', 'Parasympathetic agonists and anticholinesterase inhibitors', 'Parasympathetic antagonists', 'Ganglion stimulants and blockers', 'Neuromuscular blocking drugs'] },
          { title: 'Gastrointestinal Drugs', topics: ['Emetic and anti-emetics', 'Purgatives: bulk, lubricant, irritant, saline', 'Anti-diarrheal agents', 'Peptic ulcer treatment: antacids, H2 antagonists, PPIs', 'Drugs affecting bile flow'] },
          { title: 'Autacoids & Antagonists', topics: ['Histamine and anti-histamines', 'Serotonin and serotonin antagonists'] },
          { title: 'Respiratory System Drugs', topics: ['Antitussives, expectorants and mucolytics', 'Bronchial asthma treatment: bronchodilators, cromoglycate, corticosteroids'] },
          { title: 'Cardiovascular System Drugs', topics: ['Angina treatment', 'Congestive heart failure treatment', 'Antiarrhythmic drugs', 'Antihyperlipidemic agents', 'Coagulants and anticoagulants', 'Antihypertensives', 'Diuretics'] },
          { title: 'Genitourinary System Drugs', topics: ['Oxytocic drugs', 'Ergot alkaloids', 'Uterine relaxants'] },
          { title: 'Anti-Anaemic Drugs', topics: ['Iron preparations', 'Vitamin B12 and folic acid'] },
        ]
      },
      {
        id: 'pharmacognosy-i',
        title: 'Pharmacognosy-I',
        icon: 'park',
        color: 'from-emerald-600 to-emerald-400',
        description: 'General pharmacognosy, crude drugs from medicinal plant families, enzymes, allergens, and poisonous plants.',
        chapters: [
          { title: 'General Introduction', topics: ['Historical development and scope', 'Traditional medicine systems', 'Classification of crude drugs', 'Terminology in pharmacognosy', 'Preparation for commercial market', 'Cultivation, drying, storage, preservation', 'Evaluation: organoleptic, microscopic, physical, chemical, biological'] },
          { title: 'Ranunculaceae Family', topics: ['Aconitum', 'Larkspur', 'Pulsatilla', 'Hydrastis'] },
          { title: 'Papaveraceae Family', topics: ['Papaver somniferum', 'Sanguinaria canadensis'] },
          { title: 'Leguminosae Family', topics: ['Acacia', 'Glycyrrhiza', 'Senna', 'Cassia', 'Tamarind'] },
          { title: 'Umbelliferae Family', topics: ['Fennel', 'Carum', 'Coriander', 'Conium', 'Asafoetida'] },
          { title: 'Apocynaceae Family', topics: ['Rauwolfia', 'Catharanthus'] },
          { title: 'Solanaceae Family', topics: ['Belladonna', 'Hyoscyamus', 'Stramonium', 'Capsicum'] },
          { title: 'Scrophulariaceae Family', topics: ['Digitalis', 'Verbascum'] },
          { title: 'Labiatae Family', topics: ['Peppermint', 'Thyme', 'Spearmint', 'Salvia', 'Ocimum'] },
          { title: 'Liliaceae Family', topics: ['Garlic', 'Colchicum', 'Aloe'] },
          { title: 'Zingiberaceae Family', topics: ['Ginger', 'Curcuma'] },
          { title: 'Growth Regulators', topics: ['Auxins', 'Gibberellins', 'Abscisic acid', 'Cytokinins', 'Ethylene'] },
          { title: 'Allergens & Allergenic Preparations', topics: ['Introduction and case history', 'Skin tests', 'Treatment of allergy', 'Types of allergens', 'Mechanism of allergy'] },
          { title: 'Enzymes', topics: ['Plant enzymes: papain, bromelain, malt extract', 'Animal enzymes: rennin, pepsin, pancreatin, pancrealipase'] },
          { title: 'Poisonous Plants', topics: ['Introduction with reference to Pakistan'] },
          { title: 'Pesticides', topics: ['Introduction', 'Methods of pest control', 'Natural methods'] },
        ]
      },
      {
        id: 'pharmaceutical-microbiology',
        title: 'Pharmaceutical Microbiology',
        icon: 'lab_profile',
        color: 'from-violet-600 to-violet-400',
        description: 'General microbiology, bacteria, viruses, fungi, immunology, sterilization, and industrial microbiology.',
        chapters: [
          { id: 'introduction-to-microbiology', title: 'Introduction to Microbiology', topics: ['History of microbiology', 'Microscope', 'Microscopy'] },
          { id: 'bacteria', title: 'Bacteria', topics: ['Classification of bacteria', 'Staining methods', 'Morphology of bacterial cell', 'Microbial nutrition', 'Physical factors affecting bacterial growth', 'Culture media', 'Culture methods', 'Biochemical test & reactions', 'Bacterial growth', 'Bacterial diseases'] },
          { id: 'controlling-microorganisms', title: 'Controlling Microorganisms', topics: ['Sterilization', 'Heat sterilization', 'Chemical sterilization', 'Mechanical methods', 'Filtration', 'Disinfection', 'Antiseptics'] },
          { id: 'immunology', title: 'Immunology', topics: ['Host defenses', 'Non-specific defenses', 'Specific defenses', 'Hypersensitivity', 'Antibodies', 'Vaccines', 'Immunological tests', 'ELISA'] },
          { id: 'viruses', title: 'Viruses', topics: ['Structure', 'Replication of virus', 'Virus growth', 'Cultivation of virus', 'Viral diseases'] },
          { id: 'normal-flora', title: 'Normal Flora', topics: ['Microbiology of air', 'Microbiology of soil', 'Normal bacterial flora of humans', 'Benefits of normal flora'] },
          { id: 'fungi', title: 'Fungi', topics: ['Classification of fungi', 'Terminologies', 'Mycoses types', 'Superficial and cutaneous mycoses', 'Subcutaneous mycoses', 'Systemic mycoses', 'Laboratory diagnosis', 'Fungal culture process'] },
          { id: 'protozoa', title: 'Protozoa', topics: ['General characteristics', 'Diseases caused by protozoans'] },
          { id: 'fermentation', title: 'Fermentation', topics: ['Types of fermentation', 'Fermenter', 'Antibiotic production', 'Penicillin production', 'Upstream processing', 'Downstream processing'] },
        ]
      },
      {
        id: 'pharmaceutical-mathematics-biostatistics',
        title: 'Pharmaceutical Mathematics & Biostatistics',
        icon: 'calculate',
        color: 'from-teal-600 to-teal-400',
        description: 'Algebra, trigonometry, calculus, and biostatistical methods for pharmaceutical sciences.',
        chapters: [
          { title: 'Algebra - Sets & Functions', topics: ['Elementary concepts of sets', 'Concept of functions', 'Domain and range', 'Graphical representation'] },
          { title: 'Algebra - Equations', topics: ['Linear and quadratic equations', 'Equations reducible to quadratic form', 'Simultaneous equations'] },
          { title: 'Progressions & Means', topics: ['Arithmetic progression', 'Geometric progression', 'Harmonic progression', 'Arithmetic, geometric and harmonic means'] },
          { title: 'Permutations & Combinations', topics: ['Fundamental principles', 'Binomial theorem'] },
          { title: 'Trigonometry', topics: ['Measurement of angles', 'Circular functions', 'Derivation for simple cases'] },
          { title: 'Analytical Geometry', topics: ['Coordinates', 'Distance between points', 'Equations of straight line', 'Parabola, circle and ellipse'] },
          { title: 'Differential Calculus', topics: ['Concept of derivations', 'Rules of differentiation', 'Derivatives of exponential and logarithmic functions', 'Partial derivatives', 'Maxima and minima'] },
          { title: 'Integral Calculus', topics: ['Concept of integration', 'Rules of integration', 'Integration of algebraic and trigonometric functions'] },
          { title: 'Descriptive Statistics', topics: ['What is statistics', 'Importance in biological and pharmaceutical sciences', 'Sample selection'] },
          { title: 'Organizing & Displaying Data', topics: ['Variables: quantitative and qualitative', 'Frequency tables', 'Bar charts, histograms, pictograms'] },
          { title: 'Summarizing Data & Variation', topics: ['Mean, median, mode', 'Mean deviation', 'Variance and standard deviation', 'Coefficient of variation'] },
          { title: 'Curve Fitting', topics: ['Fitting a straight line', 'Parabolic and higher degree curves'] },
          { title: 'Probability', topics: ['Definitions', 'Probability rules', 'Binomial and normal distributions'] },
          { title: 'Regression & Correlation', topics: ['Simple linear regression', 'Correlation coefficient'] },
          { title: 'Test of Hypothesis', topics: ['Statistical hypothesis', 'Level of significance', 'Confidence intervals'] },
          { title: 't, F & Chi-Square Distributions', topics: ['Test of significance', 'Student t distribution', 'F distribution', 'Chi-square distribution'] },
          { title: 'Analysis of Variance', topics: ['One-way classification', 'Two-way classification', 'Partitioning of sum of squares', 'Multiple comparison tests (LSD)'] },
        ]
      },
    ]
  },
  '3rd-professional': {
    id: '3rd-professional',
    title: '3rd Professional',
    icon: 'looks_3',
    color: 'from-orange-600 to-orange-600',
    subjects: [
      {
        id: 'pathology',
        title: 'Pathology',
        icon: 'diagnosis',
        color: 'from-rose-600 to-rose-400',
        description: 'General pathology, disease mechanisms, inflammation, neoplasia, and clinical laboratory examination.',
        chapters: [
          { id: 'Cellular Injury, Death & Adaptation', title: 'Cellular Injury, Death & Adaptation', topics: ['Etiology and pathogenesis', 'Morphological changes in cell injury', 'Necrosis vs apoptosis', 'Atrophy, hypertrophy, hyperplasia, metaplasia', 'Intracellular accumulations', 'Cellular adaptation to stress'] },
          { id: 'Inflammation-and-Tissue-Repair', title: 'Inflammation and Tissue Repair', topics: ['Acute inflammation: vascular and cellular events', 'Chronic inflammation: causes and features', 'Chemical mediators of inflammation', 'Granulomatous inflammation', 'Tissue repair: regeneration and scarring', 'Wound healing'] },
          { id: 'hypertension-pathology', title: 'Hypertension (Vascular Diseases)', topics: ['Blood pressure regulation', 'Essential vs secondary hypertension', 'Vascular pathology in hypertension', 'Arteriosclerosis and atherosclerosis', 'Aneurysms and dissection', 'Complications of hypertension'] },
          { id: 'cancer-pathology', title: 'Tumour & Cancer', topics: ['Classification of tumors: benign vs malignant', 'Hallmarks of cancer', 'Carcinogenesis: chemical, radiation, viral', 'Tumor invasion and metastasis', 'Molecular basis of cancer', 'Clinical aspects: diagnosis and staging'] },
          { id: 'Peptic Ulcer Disease', title: 'Peptic Ulcer Disease (PUD)', topics: ['Epidemiology and causes', 'H. pylori infection', 'NSAID-induced ulcer', 'Pathophysiology of ulcer formation', 'Clinical features and complications', 'Treatment and management'] },
          { id: 'immunity', title: 'Immunity', topics: ['Types of immunity: innate vs adaptive', 'Cells of the immune system', 'Humoral immunity: antibodies and B cells', 'Cell-mediated immunity: T cells', 'Antigen presentation and MHC', 'Hypersensitivity and autoimmune diseases'] },
        ]
      },
      {
        id: 'pharmacology-therapeutics-ii',
        title: 'Pharmacology & Therapeutics-II',
        icon: 'local_pharmacy',
        color: 'from-teal-600 to-teal-600',
        description: 'CNS drugs, anaesthetics, chemotherapy, hormones, and toxicology.',
        chapters: [
          { id: 'nsaids', title: 'NSAIDs (Non-Steroidal Anti-Inflammatory Drugs)', topics: ['Introduction and classification', 'Mechanism of action: COX-1 vs COX-2 inhibition', 'Salicylates: aspirin pharmacology', 'Propionic acid derivatives: ibuprofen, naproxen', 'Acetic acid derivatives: indomethacin, diclofenac', 'Selective COX-2 inhibitors: celecoxib', 'Adverse effects and drug interactions'] },
          { id: 'antifungal-drugs', title: 'Antifungal Drugs', topics: ['Classification of antifungal agents', 'Azole antifungals: ketoconazole, fluconazole', 'Polyene antifungals: amphotericin B, nystatin', 'Allylamines: terbinafine', 'Echinocandins: caspofungin', 'Antimetabolites: flucytosine', 'Treatment of systemic and superficial mycoses'] },
          { id: 'pharmacology-cns-basic', title: 'Pharmacology CNS Basic', topics: ['Pharmacokinetics and pharmacodynamics', 'Autonomic pharmacology', 'CNS neurotransmitters', 'Classification of psychotropic drugs'] },
          { id: 'anxiety-disorders', title: 'Anxiety Disorders and Their Treatments', topics: ['Anxiety disorder types', 'Benzodiazepines', 'Barbiturates and Z-drugs', 'Psychotherapy approaches'] },
          { id: 'depression-and-antidepressants', title: 'Depression and Antidepressant Medications', topics: ['Mechanisms of depression', 'SSRIs, SNRIs and TCAs', 'MAOIs and novel agents', 'ECT and medical procedures'] },
          { id: 'psychoactive-drugs', title: 'Psychoactive Drugs', topics: ['Psychomotor stimulants', 'Psychedelics', 'Ketamine and depressants', 'Synthetic cannabinoids and addiction'] },
          { id: 'epilepsy-and-anti-seizure-medications', title: 'Epilepsy and Anti-Seizure Medications', topics: ['Seizure classification', 'Status epilepticus', 'Anti-seizure drugs', 'Special populations and cannabinoids'] },
          { id: 'migraine', title: 'Migraine', topics: ['Epidemiology and pathophysiology', 'Acute (abortive) treatments', 'Prophylactic (preventive) treatments'] },
        ]
      },
      {
        id: 'pharmacognosy-ii',
        title: 'Pharmacognosy-II',
        icon: 'park',
        color: 'from-emerald-600 to-emerald-400',
        description: 'Plant constituents, chromatography, glycosides, alkaloids, volatile oils, resins, lipids, steroids, and tumour inhibitors.',
        chapters: [
          { title: 'Chromatography & Separation Techniques', topics: ['Introduction to chromatography: stationary and mobile phases', 'Classification based on mobile phase (liquid, gas) and apparatus (planar, column)', 'Thin Layer Chromatography (TLC): principle, requirements, procedure, Rf values', 'Paper Chromatography: ascending, descending, radial development', 'Open Column Chromatography: adsorption and partition modes', 'High Performance Liquid Chromatography (HPLC): instrumentation and applications', 'Gas Chromatography (GC): principle, instrumentation (carrier gas, column, detector)'] },
          { title: 'Carbohydrates', topics: ['Definition and classification: monosaccharides, oligosaccharides, polysaccharides', 'Monosaccharides: trioses, tetroses, pentoses, hexoses (glucose, fructose)', 'Disaccharides: sucrose, lactose, maltose', 'Polysaccharides: starch, cellulose, glycogen, inulin', 'Gums and mucilages: tragacanth, acacia, agar, pectin, guar gum', 'Cellulose and derivatives: microcrystalline cellulose, carboxymethyl cellulose'] },
          { title: 'Glycosides', topics: ['General overview: glycone and aglycone, acetal linkage', 'Properties: physical state, solubility, taste, hydrolysis', 'Types based on linking atom: O-glycosides, S-glycosides, C-glycosides, N-glycosides', 'Classification based on aglycone: cardiotonic, anthraquinone, saponin, cyanophore', 'Cardiotonic glycosides: digitalis (digitoxin), strophanthus (K-strophanthin-β), squill (scillaren-A)', 'Anthraquinone glycosides: cascara, aloe, senna, rhubarb', 'Saponin glycosides: dioscin, ginsenosides, glycyrrhizin', 'Cyanophore (cyanogenic), isothiocyanate, lactone, aldehyde glycosides'] },
          { title: 'Tannins', topics: ['Introduction: polyhydroxyphenols, puckering taste, tanning property', 'Classification: true tannins vs pseudo-tannins (Goldbeaters Skin Test)', 'Hydrolysable tannins: gallotannins (nutgall, rhubarb), ellagitannins (pomegranate)', 'Condensed tannins (proanthocyanidins): catechin, phlobaphenes (cinnamon, cinchona, tea)', 'Properties: solubility, precipitation with heavy metals/alkaloids/proteins', 'Chemical identification: Goldbeaters skin test, gelatin test, ferric chloride test'] },
          { title: 'Volatile Oils', topics: ['General characteristics: odorous, evaporate at ordinary temperatures, eleoptenes and stearoptenes', 'Physical properties: color, refractive index, optical activity, solubility', 'Chemistry: terpenes (isoprene units, head-to-tail linkage)', 'Classification of terpenes: monoterpenes, sesquiterpenes, diterpenes, triterpenes', 'Oxygenated derivatives: alcohols, aldehydes, ketones, phenols, ethers, esters', 'Phenyl propanoids: shikimic acid pathway (cinnamaldehyde, eugenol, anethole)', 'Types of volatile oils: hydrocarbon, alcoholic, aldehyde, ketonic, phenolic, phenolic ether, oxide, ester'] },
          { title: 'Resins & Resin Combinations', topics: ['Resins: rosin, cannabis', 'Glycoresins: podophyllum, jalap', 'Oleoresins: capsicum, ginger', 'Oleo-gum resins: asafoetida', 'Balsams: benzoin, tolu, peru', 'Storax'] },
          { title: 'Alkaloids', topics: ['Introduction: nitrogen-containing natural compounds, pharmacological effects', 'Functions in plants: protective agents, growth regulators, nitrogen reserve', 'Properties: crystalline nature, salt formation, solubility, elemental composition', 'Biological origins: decarboxylation, transamination, Schiff base, Mannich condensation', 'Extraction methods: Process A (organic solvent), Process B (alcohol/water), Process C (acid extraction)', 'Classification: pyridine-piperidine (nicotine, coniine), tropane (atropine, cocaine)', 'Quinoline (quinine), isoquinoline (morphine, codeine, papaverine)', 'Indole (reserpine, strychnine), imidazole (pilocarpine), steroidal (solanidine)', 'Alkaloidal amines (ephedrine, colchicine), purine bases (caffeine, theophylline)'] },
          { title: 'Lipids (Fats, Fixed Oils & Waxes)', topics: ['Definition: esters of long-chain fatty acids with alcohol, insoluble in water', 'Classification: simple, compound, and derived lipids', 'Simple lipids: fats (saturated triglycerides), fixed oils (unsaturated triglycerides)', 'Non-drying oils: almond, coconut, olive; Semi-drying: cottonseed, sesame; Drying: linseed, poppy seed', 'Waxes: bees wax (myricyl palmitate), carnauba, spermaceti (cetyl esters), jojoba', 'Fatty acids: saturated (capric, lauric, palmitic, stearic) and unsaturated (oleic, linoleic, linolenic)', 'Important crude drugs: castor oil, olive oil, almond oil, theobroma oil, lanolin'] },
          { title: 'Steroids', topics: ['Introduction: cyclopentanoperhydrophenanthrene nucleus', 'Sterols: cholesterol, ergosterol, stigmasterol, sitosterol', 'Bile acids: cholic acid, desoxycholic acid, lithocholic acid', 'Steroidal saponins: dioscin, ginsenosides', 'Lactone steroids: cardiotonic glycosides, withanolides (withaferin A)', 'Steroidal alkaloids: solanine', 'Steroidal hormones: adrenocortical (glucocorticoids, mineralocorticoids), sex hormones (androgens, estrogens, progestins)', 'Ecdysteroids: molting hormones (ecdysone)'] },
          { title: 'Tumour Inhibitors from Plants', topics: ['Plant origin: indole alkaloids (vincristine, vinblastine), alkaloidal amines (colchicine)', 'Terpenoid alkaloids (taxol/paclitaxel), glycoresins (podophyllotoxin derivatives)', 'Marine origin: bryostatin-1 (Bugula neritina), didemnin-B (Trididemnum)', 'Dehydrodidemnin-B (Aplidium albicans), dolastatin-10 (Dolabella auricularia)', 'Ecteinascidin-743 (Ecteinascidia turbinata)', 'Microbial origin: anthracyclines (doxorubicin from Streptomyces), bleomycins, actinomycin-D'] },
        ]
      },
      {
        id: 'pharmaceutics-iii',
        title: 'Pharmaceutics-III (Dispensing & Community Pharmacy)',
        icon: 'medication',
        color: 'from-sky-600 to-sky-400',
        description: 'Compounding, dispensing, incompatibilities, community pharmacy practice, and patient care.',
        chapters: [
          { title: 'Basic Principles of Compounding', topics: ['Weights and measures', 'Calculations for compounding', 'Fundamental operations', 'Containers and closures', 'Prescription handling', 'Labelling'] },
          { title: 'Extemporaneous Dispensing', topics: ['Solutions, suspensions, emulsions', 'Creams, ointments, pastes and gels', 'Suppositories and pessaries', 'Powders and granules', 'Oral unit dosage forms'] },
          { title: 'Pharmaceutical Incompatibilities', topics: ['Types of incompatibilities', 'Manifestations', 'Correction and prevention', 'Typical examples'] },
          { title: 'Classical Dosage Forms', topics: ['Traditional pharmaceutical preparations'] },
          { title: 'I.V. Admixtures', topics: ['Preparation and compatibility'] },
          { title: 'Radio-Pharmacy', topics: ['Techniques and applications'] },
          { title: 'Community Pharmacy - Public Health', topics: ['Epidemiology and control', 'Preventive health: EPI and CDC', 'Family planning', 'National drug policy'] },
          { title: 'Patient Assessment & Communication', topics: ['Patient assessment techniques', 'Pharmacist-patient communication', 'Patient education and counselling'] },
          { title: 'Drug Abuse Control', topics: ['Control of drug abuse and misuse'] },
          { title: 'Role of Pharmacist', topics: ['Public health educator', 'Drug monitoring', 'Drug information services'] },
        ]
      },
      {
        id: 'pharmaceutical-chemistry-ii',
        title: 'Pharmaceutical Chemistry-II (Instrumentation)',
        icon: 'science',
        color: 'from-indigo-600 to-indigo-400',
        description: 'Spectroscopic methods (UV, IR, NMR, mass spectrometry, AAS, AES, flame photometry, fluorescence), chromatographic techniques (column, HPLC, GC, GC-MS, LSC, LLC, LC-MS), and capillary electrophoresis for pharmaceutical analysis.',
        chapters: [
          { id: 'basic-spectroscopy', title: 'Basic Spectroscopy', topics: ['Definition of spectroscopy', 'Electromagnetic radiation and photons', 'Spectroscopy vs spectrometry vs spectrophotometry', 'Principle of spectroscopy', 'Absorption vs emission spectroscopy'] },
          { id: 'atomic-absorption-emission-spectroscopy', title: 'Atomic Absorption and Emission Spectroscopy', topics: ['Principle of AAS', 'AAS instrumentation', 'Flame and graphite furnace atomization', 'Interferences in AAS', 'Advantages and applications of AAS', 'Principle of AES', 'Types of emission spectra', 'AES instrumentation (ICP, arc/spark)'] },
          { id: 'flame-photometry', title: 'Flame Photometry', topics: ['Principle', 'Working', 'Instrumentation', 'Flame structure and zones', 'Interferences', 'Advantages and limitations', 'Applications'] },
          { id: 'chromatography', title: 'Chromatography', topics: ['Fundamental principles', 'Stationary and mobile phases', 'Types of separation (frontal, displacement, elution)', 'Theoretical considerations (K, tR, capacity factor, alpha, Rs)', 'Plate and rate (van Deemter) theory', 'General instrumentation'] },
          { id: 'column-chromatography', title: 'Column Chromatography', topics: ['Principles and separation mechanisms', 'Theoretical concepts', 'Types of columns', 'Stationary phase (adsorbents)', 'Mobile phase (eluent) selection', 'Wet and dry packing', 'Sample introduction', 'Development techniques', 'Factors affecting column efficiency', 'Applications, advantages and limitations'] },
          { id: 'high-performance-liquid-chromatography', title: 'High Performance Liquid Chromatography (HPLC)', topics: ['Fundamentals and principle', 'Comparison with Liquid Chromatography', 'HPLC instrument configurations', 'Pumps (isocratic and gradient)', 'Injectors and autosamplers', 'Columns and packing materials', 'Detectors (UV, MS, RI, fluorescence)', 'Separation modes of HPLC', 'Temperature control', 'Strengths and limitations'] },
          { id: 'gas-chromatography', title: 'Gas Chromatography (GC)', topics: ['Principle of GC', 'Instrumentation (carrier gas, injector, column)', 'GC detectors (FID, TCD, ECD, AED, MS)', 'Working of GC', 'Data analysis', 'Comparison with other techniques', 'Strengths and limitations', 'Applications'] },
          { id: 'gas-chromatography-mass-spectrometry', title: 'Gas Chromatography-Mass Spectrometry (GC-MS)', topics: ['Principle of GC-MS coupling', 'GC assembly', 'MS assembly (ion source, mass analyzer, detector, vacuum)', 'Working of GC-MS', 'Data analysis', 'Strengths and limitations', 'Applications'] },
          { id: 'capillary-electrophoresis', title: 'Capillary Electrophoresis (CE)', topics: ['Principle and electrophoretic mobility', 'Instrumental setup', 'Capillary Zone Electrophoresis (CZE)', 'Capillary Gel Electrophoresis (CGE)', 'Capillary Electrochromatography (CEC)', 'Micellar Electrokinetic Chromatography (MEKC)', 'CIEF and CITP', 'CE vs HPLC', 'Applications'] },
          { id: 'ir-spectroscopy', title: 'IR Spectroscopy', topics: ['Principle of IR spectroscopy', 'Regions of IR spectrum', 'Interpretation of IR spectrum (functional group and fingerprint regions)', 'Types of absorption bands', 'Modes of vibration (stretching and bending)', 'Factors affecting vibrational frequency', 'Instrumentation of IR spectrophotometer', 'Mode of operation (working)', 'Sample handling (gases, liquids, solids)', 'Strengths and limitations', 'Applications', 'FTIR spectrometers and advantages'] },
          { id: 'nmr-spectroscopy', title: 'NMR Spectroscopy', topics: ['Principle of NMR', 'Types of NMR (1H and 13C)', 'Basic theory (nuclear spin, resonance, Larmor frequency)', 'NMR spectrum and chemical shift', 'Features of 1H NMR spectrum', 'Factors affecting chemical shift', 'Reference standards (TMS)', 'Spin-spin splitting and coupling', 'Instrumentation of NMR spectrometer', 'Solvents used in NMR', 'Working of NMR spectrometer', 'Applications and limitations'] },
          { id: 'mass-spectroscopy', title: 'Mass Spectroscopy (MS)', topics: ['Basic theory and principle', 'Mass spectrum interpretation', 'Instrumentation (inlet, ionization source, analyzer, detector)', 'Ionization methods (EI, CI, FI, FD, FAB, MALDI)', 'Mass analyzers (magnetic, TOF, quadrupole, ion trap)', 'Detectors', 'Strengths and limitations', 'Qualitative and quantitative applications'] },
          { id: 'molecular-fluorescence-spectroscopy', title: 'Molecular Fluorescence Spectroscopy', topics: ['Principle and Jablonski diagram', 'Properties of fluorescence', 'Types of fluorescence (prompt, delayed, phosphorescence)', 'Instrumentation', 'Applications'] },
          { id: 'liquid-solid-chromatography', title: 'Liquid-Solid Chromatography (LSC)', topics: ['Principle and mechanism', 'Adsorption isotherms', 'Adsorbents', 'Solvents and adsorbates (elution order)', 'Columns and packing', 'Example application'] },
          { id: 'liquid-liquid-chromatography', title: 'Liquid-Liquid Chromatography (LLC)', topics: ['Principle and mechanism', 'Advantages over adsorption chromatography', 'Types of LLC (normal and reversed phase)', 'Supports for stationary phase', 'Steps in liquid-liquid chromatography'] },
          { id: 'liquid-chromatography-mass-spectrometry', title: 'Liquid Chromatography-Mass Spectrometry (LC-MS)', topics: ['Introduction to LC-MS', 'Principle of LC-MS', 'Requirements of liquid chromatography in LC-MS', 'Instrumentation (LC assembly, ion source, mass analyzer, detector)', 'Strengths and limitations', 'Applications'] },
        ]
      },
    ]
  },
  '4th-professional': {
    id: '4th-professional',
    title: '4th Professional',
    icon: 'looks_4',
    color: 'from-indigo-600 to-indigo-600',
    subjects: [
      {
        id: 'hospital-pharmacy',
        title: 'Pharmaceutics-IV (Hospital Pharmacy)',
        icon: 'local_hospital',
        color: 'from-emerald-600 to-emerald-400',
        description: 'Hospital pharmacy organization, drug distribution, formulary management, sterile compounding, and clinical services.',
        chapters: [
          { title: 'Introduction to Hospital Pharmacy', topics: ['Role of pharmacist in hospital', 'Minimum standards for hospital pharmacies', 'Research in hospital pharmacy'] },
          { title: 'Hospital Organization', topics: ['Classification of hospitals', 'Organizational pattern and administration', 'Clinical departments and supportive services'] },
          { title: 'Pharmacy Organization & Personnel', topics: ['Pharmacy specialist roles', 'Drug information centre', 'Poison control centre', 'Pharmacy education', 'Professional services'] },
          { title: 'Pharmacy & Therapeutic Committee', topics: ['Committee structure and function'] },
          { title: 'Hospital Formulary', topics: ['Principles and guidelines', 'Format and preparation', 'Role of pharmacist', 'Benefits and problems'] },
          { title: 'Inpatient Dispensing', topics: ['Methods and SOPs', 'Unit dose dispensing', 'Satellite pharmacy concepts'] },
          { title: 'Ambulatory Patient Dispensing', topics: ['Outpatient pharmacy services'] },
          { title: 'Control Substances Distribution', topics: ['Regulatory compliance and security'] },
          { title: 'Safe Medication Use', topics: ['Medication errors', 'Evaluation and precautions', 'Role of pharmacist'] },
          { title: 'Manufacturing & Sterile Products', topics: ['Bulk manufacturing', 'Sterile compounding'] },
          { title: 'Central Sterile Supply Room', topics: ['CSSR management'] },
          { title: 'Aseptic Dispensing', topics: ['TPN, I/V admixtures', 'Cytotoxic dispensing', 'Eye and ear drops', 'Hyperalimentation'] },
          { title: 'Inventory Management', topics: ['Purchasing and distribution', 'Stock control', 'Drug distribution systems'] },
          { title: 'Nuclear Pharmacy', topics: ['Radioactive pharmaceuticals'] },
          { title: 'Physical Plant & Equipment', topics: ['Facility design and equipment'] },
          { title: 'Ward Inspection', topics: ['Drug storage and administration review'] },
          { title: 'Emergency Pharmacy', topics: ['Accident and emergency services'] },
        ]
      },
      {
        id: 'biopharmaceutics',
        title: 'Pharmaceutics-VII (Biopharmaceutics)',
        icon: 'biotech',
        color: 'from-violet-600 to-violet-400',
        description: 'Bioavailability, pharmacokinetics, compartment models, drug clearance, and protein binding.',
        chapters: [
          { title: 'Definitions & Terminology', topics: ['Biopharmaceutics', 'Generic equivalence', 'Bioavailability and bioequivalence', 'Pharmacokinetics', 'Therapeutic equivalents'] },
          { title: 'GI Absorption & Physicochemical Factors', topics: ['Transmembrane movement forces', 'pH Partition Theory', 'Factors affecting bioavailability'] },
          { title: 'Bioavailability Studies', topics: ['Purpose', 'Relative and absolute bioavailability', 'Determination methods'] },
          { title: 'Dissolution & Bioavailability', topics: ['In-vitro and in-vivo dissolution methods'] },
          { title: 'Multiple Dosage Regimens', topics: ['Principles and calculations'] },
          { title: 'Intravenous Infusions', topics: ['Pharmacokinetics of IV infusion'] },
          { title: 'Dosage Form Development', topics: ['Biopharmaceutical and pharmacokinetic aspects'] },
          { title: 'Introduction to Pharmacokinetics', topics: ['Plasma drug level studies', 'Clinical applications'] },
          { title: 'Compartment Models', topics: ['One compartment open model', 'Two compartment open model', 'Non-compartmental analysis'] },
          { title: 'Biological Half-Life & Volume of Distribution', topics: ['Concept and determination methods'] },
          { title: 'Drug Clearance', topics: ['Mechanisms', 'Determination', 'Relationship with half-life'] },
          { title: 'Drug Elimination', topics: ['Hepatic elimination and biotransformation', 'First pass effect', 'Renal excretion', 'Pulmonary, salivary, mammary excretion'] },
          { title: 'Protein Binding', topics: ['Determination', 'Clinical significance'] },
          { title: 'Clinical Applications', topics: ['Pharmacokinetics in disease states', 'Bioavailability in clinical situations'] },
        ]
      },
      {
        id: 'pharmaceutical-quality-management',
        title: 'Pharmaceutics-VIII (Pharmaceutical Quality Management)',
        icon: 'verified',
        color: 'from-amber-600 to-amber-400',
        description: 'Quality control testing, biological assays, pharmacopoeial standards, and statistical quality control.',
        chapters: [
          { title: 'Scope of Quality Control', topics: ['Testing programs', 'Dosage form control', 'Process control', 'Statistical quality control', 'Total quality assurance'] },
          { title: 'QC of Solid Dosage Forms', topics: ['Physical tests: hardness, thickness, friability, disintegration', 'Chemical tests: content uniformity, assay, dissolution'] },
          { title: 'QC of Syrups & Elixirs', topics: ['Viscosity determination', 'Weight per ml', 'Assay of active ingredients'] },
          { title: 'Evaluation of Sustained Action Products', topics: ['Stability during storage', 'In-vitro and in-vivo evaluation'] },
          { title: 'QC of Suppositories', topics: ['Disintegration', 'Uniformity of weight', 'Liquefaction time', 'Breaking test'] },
          { title: 'QC of Sterile Products', topics: ["Leaker's test", 'Clarity test', 'Pyrogen test', 'Assay of active ingredients'] },
          { title: 'Biological Assays', topics: ['Standard preparations', 'Units of activity', 'Bioassay of antibiotics, insulin, digitalis, vitamin D'] },
          { title: 'Alcohol Determination', topics: ['Alcoholometric methods', 'Distillation of alcohol'] },
          { title: 'Alkaloidal Drug Assay', topics: ['Weighing and extraction', 'Maceration and percolation', 'Continuous extraction', 'Purification and determination'] },
          { title: 'Miscellaneous Tests', topics: ['Weight/ml', 'Moisture content', 'Loss on drying', 'Toxicity and identification tests'] },
          { title: 'Pharmacopoeial Standards', topics: ['BP, BPC, USP appendices'] },
          { title: 'Statistical QC Charts', topics: ['Interpretation during manufacturing'] },
        ]
      },
    ]
  },
  '5th-professional': {
    id: '5th-professional',
    title: 'Final Professional',
    icon: 'looks_5',
    color: 'from-teal-600 to-teal-600',
    subjects: [
      {
        id: 'medicinal-chemistry',
        title: 'Pharmaceutical Chemistry-III (Medicinal Chemistry)',
        icon: 'science',
        color: 'from-indigo-600 to-indigo-400',
        description: 'Drug design, SAR, synthetic drugs, antibiotics, and inorganic pharmaceutical compounds.',
        chapters: [
          { title: 'Introduction to Medicinal Chemistry', topics: ['Chemical constitution and biological activity', 'Receptor theory', 'Structure Activity Relationships (SAR)', 'Drug metabolism'] },
          { title: 'Drug Design', topics: ['Classification of synthetic drugs', 'Recent approaches to drug synthesis'] },
          { title: 'Alicyclic Compounds', topics: ['Cyclopropane', 'Terpenes', 'Citral', 'Pinene', 'Camphor', 'Menthol', 'Carotenes'] },
          { title: 'Alkaloids', topics: ['Atropine', 'Morphine and codeine', 'Ergotamine', 'Reserpine', 'Ephedrine'] },
          { title: 'Vitamins', topics: ['Water soluble: B1, B2, B6, B12, folic acid, nicotinic acid, ascorbic acid', 'Fat soluble: A, D, E, K'] },
          { title: 'Hormones', topics: ['Steroidal: testosterone, progesterone, estrogen, cortisol', 'Proteinous: insulin, glucagon, oxytocin, vasopressin'] },
          { title: 'Antineoplastic Agents', topics: ['Tamoxifen', 'Fluorouracil', 'Mercaptopurine', 'Methotrexate', 'Vincristine'] },
          { title: 'Sedatives & Hypnotics', topics: ['Benzodiazepines', 'Barbiturates', 'Paraldehyde', 'Chloral hydrate'] },
          { title: 'Anaesthetics', topics: ['Local: procaine, lignocaine, cocaine, benzocaine', 'General: halothane, ketamine, thiopental'] },
          { title: 'Analgesics & Antipyretics', topics: ['Paracetamol', 'Salicylic acid analogues', 'Quinoline derivatives', 'Pyrazolones', 'Aryl and heteroaryl acetic acids'] },
          { title: 'Antiseptics', topics: ['Phenols and related compounds', 'Halogens and halogen compounds', 'Dyes', 'Nitrofuran derivatives'] },
          { title: 'Sulphonamides', topics: ['Prontosil', 'Sulphanilamide', 'Sulphadimidine', 'Sulfamethoxazole'] },
          { title: 'Antimalarials', topics: ['4-Aminoquinolines', '8-Aminoquinolines', 'Biguanides', 'Mefloquine', 'Cinchona alkaloids'] },
          { title: 'Anthelmintics', topics: ['Piperazine derivatives', 'Thiabendazole', 'Mebendazole'] },
          { title: 'Diuretics', topics: ['Thiazides', 'Spironolactone', 'Furosemide', 'Acetazolamide', 'Ethacrynic acid'] },
          { title: 'Antitubercular Drugs', topics: ['Ethambutol', 'Isoniazid', 'Rifampicin', 'Pyrazinamide', 'Cycloserine'] },
          { title: 'Antiviral Drugs', topics: ['Acyclovir', 'Ribavirin'] },
          { title: 'Immunosuppressants', topics: ['Azathioprine', 'Cyclosporin'] },
          { title: 'Antibiotics', topics: ['Penicillins', 'Cephalosporins', 'Streptomycin', 'Chloramphenicol', 'Tetracyclines', 'Erythromycin'] },
          { title: 'Official Inorganic Compounds', topics: ['Aluminium hydroxide', 'Ammonium chloride', 'Magnesium carbonate', 'Ferrous sulfate', 'Silver nitrate'] },
        ]
      },
      {
        id: 'clinical-pharmacy-ii',
        title: 'Pharmaceutics-IX (Clinical Pharmacy-II)',
        icon: 'clinical_notes',
        color: 'from-blue-600 to-blue-400',
        description: 'Rational drug use, essential drugs, DUE/DUR, pharmacokinetics, pharmacoeconomics, clinical therapeutics, and toxicology.',
        chapters: [
          { title: 'Rational Use of Drugs', topics: ['Rational prescribing and dispensing', 'Problems of irrational drug use', 'Drug use indicators'] },
          { title: 'Essential Drugs', topics: ['Criteria for selection', 'Usage and advantages'] },
          { title: 'DUE & DUR', topics: ['Protocol development', 'Steroids, vancomycin, cimetidine review'] },
          { title: 'Drug Abuse & Misuse', topics: ['Patterns and prevention'] },
          { title: 'Practical Pharmacokinetics', topics: ['TDM of digoxin, theophylline, gentamicin, lithium, phenytoin, carbamazepine, valproic acid'] },
          { title: 'Pharmacoeconomics', topics: ['Economic evaluation of drug therapy'] },
          { title: 'Pharmaceutical Care', topics: ['Scope, management and care plans'] },
          { title: 'Clinical Therapeutics', topics: ['Common cold, pneumonia, TB, diarrhoea, malaria', 'CCF, anaemia, gout, asthma, diabetes', 'Hypertension, hepatitis, dermatology'] },
          { title: 'Clinical Toxicology', topics: ['Poison management', 'Role of poison control centre', 'Antidotes and mechanisms'] },
          { title: 'IV Therapy', topics: ['Safe intravenous therapy', 'Hazards of IV therapy'] },
          { title: 'Non-Compliance', topics: ['Extent and assessment', 'Reasons and strategies for improvement'] },
        ]
      },
      {
        id: 'pharmaceutical-technology',
        title: 'Pharmaceutical Technology',
        icon: 'settings',
        color: 'from-cyan-600 to-cyan-400',
        description: 'Formulation development, novel drug delivery systems, modified release, biotechnology, and advanced dosage forms.',
        chapters: [
          { title: 'Formulation & Dosage Form Design', topics: ['Product formulation', 'Need for dosage form', 'Preformulation studies'] },
          { title: 'Formulation Development', topics: ['Pharmaceutical aerosols', 'Ophthalmic preparations', 'Parenteral preparations'] },
          { title: 'Advanced Formulation Techniques', topics: ['Methodology and flow plans', 'New drug delivery technologies'] },
          { title: 'Novel Drug Delivery Systems', topics: ['Liposomes and niosomes', 'Biodegradable polymers', 'Active and passive delivery'] },
          { title: 'Modified Release Dosage Forms', topics: ['Sustained release concepts', 'Matrix tablets', 'Microencapsulation', 'Control release technology'] },
          { title: 'Pharmaceutical Biotechnology', topics: ['Genetic engineering fundamentals', 'Monoclonal antibodies', 'Gene therapy', 'Immobilized enzymes', 'Microbial assay'] },
        ]
      },
      {
        id: 'forensic-pharmacy',
        title: 'Forensic Pharmacy',
        icon: 'gavel',
        color: 'from-amber-600 to-amber-400',
        description: 'Drug laws, pharmacy acts, dangerous drugs, factory laws, and narcotics control in Pakistan.',
        chapters: [
          { title: 'Drug Laws in Pakistan', topics: ['The Drugs Act 1976 and rules', 'Provincial Drug Rules', 'Advertisement rules'] },
          { title: 'Pharmacy Act 1967', topics: ['Legal provisions for pharmacy practice'] },
          { title: 'Dangerous Drugs Act 1930', topics: ['Control of dangerous drugs'] },
          { title: 'Factory Law 1934', topics: ['Industrial safety and welfare'] },
          { title: 'Shops & Establishment Ordinance', topics: ['Employment conditions and rules'] },
          { title: 'Poisons Act 1919', topics: ['Control of poisons'] },
          { title: 'Narcotics Control Act 1997', topics: ['Control of narcotic substances'] },
        ]
      },
      {
        id: 'pharmaceutical-management-marketing',
        title: 'Pharmaceutical Management & Marketing',
        icon: 'business',
        color: 'from-rose-600 to-rose-400',
        description: 'Management principles, production and marketing management, and pharmacy layout design.',
        chapters: [
          { title: 'Management Principles', topics: ['Nature and principles', 'Types and functions of managers', 'Planning, organizing', 'Management control systems', 'Motivation and communication'] },
          { title: 'Production Management', topics: ['Material management'] },
          { title: 'Marketing Management', topics: ['Marketing channels', 'Promotion and advertising', 'Salesmanship'] },
          { title: 'Sales Management', topics: ['Personnel', 'Buying, receiving, pricing', 'Sales promotion', 'Customer services'] },
          { title: 'Pharmacy Layout Design', topics: ['Objectives of layout design', 'Types of community pharmacies', 'Layout principles and traffic flow'] },
        ]
      },
      {
        id: 'computer-applications',
        title: 'Computer and its Applications in Pharmacy',
        icon: 'computer',
        color: 'from-teal-600 to-teal-400',
        description: 'Computer fundamentals, data processing, communication, and web development for pharmacy.',
        chapters: [
          { title: 'Computer Fundamentals', topics: ['History of data processing', 'Types of computers', 'Components', 'Storage devices', 'Viruses and anti-viruses'] },
          { title: 'System Analysis & Design', topics: ['System life cycle', 'Data gathering and analysis', 'Design and implementation', 'Documentation'] },
          { title: 'Data Processing', topics: ['Data processing cycle', 'Data collection and input', 'Data verification and validation', 'Batch and real-time processing'] },
          { title: 'Data Communication', topics: ['Applications', 'Network components', 'Network topology', 'Internet concepts'] },
          { title: 'Web Development', topics: ['Internet and email', 'Web page development', 'HTML and FrontPage', 'Multimedia and hyperlinking'] },
          { title: 'Statistical Software', topics: ['SPSS and data analysis'] },
        ]
      },
    ]
  },
  'semester-1': {
    id: 'semester-1',
    title: 'Semester 1',
    icon: 'looks_one',
    color: 'from-rose-600 to-rose-600',
    subjects: [
      {
        id: 'physical-pharmacy-i',
        title: 'Physical Pharmacy - I',
        icon: 'science',
        color: 'from-blue-600 to-blue-400',
        description: 'Fundamental principles of physical pharmacy including solubility, diffusion, rheology, and surface phenomena.',
        chapters: [
          { title: 'Solubility & Distribution', topics: ['Solubility expressions', 'Factors affecting solubility', 'Solubilization', 'Partition coefficient', 'Henderson-Hasselbalch equation'] },
          { title: 'Diffusion & Dissolution', topics: ['Fick\'s laws of diffusion', 'Steady-state diffusion', 'Dissolution rate', 'Noyes-Whitney equation'] },
          { title: 'Rheology', topics: ['Newtonian and non-Newtonian systems', 'Viscosity', 'Thixotropy', 'Plastic and pseudoplastic flow'] },
          { title: 'Surface & Interfacial Phenomena', topics: ['Surface tension', 'Interfacial tension', 'Adsorption', 'Surfactants and micelles', 'HLB system'] },
        ]
      },
      {
        id: 'organic-chemistry-i',
        title: 'Organic Chemistry - I',
        icon: 'biotech',
        color: 'from-indigo-600 to-indigo-400',
        description: 'Fundamentals of organic chemistry including bonding, stereochemistry, and reaction mechanisms.',
        chapters: [
          { title: 'Bonding & Structure', topics: ['Atomic structure', 'Hybridization', 'Bond polarity', 'Intermolecular forces', 'Resonance'] },
          { title: 'Stereochemistry', topics: ['Optical isomerism', 'Chirality', 'Configurational nomenclature', 'Conformational analysis'] },
          { title: 'Reaction Mechanisms', topics: ['SN1 and SN2 reactions', 'E1 and E2 eliminations', 'Electrophilic addition', 'Carbocation rearrangements'] },
        ]
      },
      {
        id: 'biochemistry-i',
        title: 'Biochemistry - I',
        icon: 'monitor_heart',
        color: 'from-green-600 to-green-400',
        description: 'Biochemical principles including biomolecules, enzymes, and metabolic pathways.',
        chapters: [
          { title: 'Biomolecules', topics: ['Carbohydrates: classification and functions', 'Proteins: structure and properties', 'Lipids: types and roles', 'Nucleic acids: DNA and RNA'] },
          { title: 'Enzymes', topics: ['Classification and nomenclature', 'Mechanism of action', 'Factors affecting enzyme activity', 'Enzyme inhibition'] },
          { title: 'Bioenergetics', topics: ['Energy-rich compounds', 'ATP cycle', 'Oxidation-reduction reactions', 'Electron transport chain'] },
        ]
      },
      {
        id: 'physiology-i',
        title: 'Physiology - I',
        icon: 'heart_plus',
        color: 'from-red-600 to-red-400',
        description: 'Human physiology covering cell biology, blood, cardiovascular and respiratory systems.',
        chapters: [
          { title: 'Cell Physiology', topics: ['Cell structure and organelles', 'Transport across cell membrane', 'Membrane potential', 'Cell signaling'] },
          { title: 'Blood', topics: ['Composition and functions', 'Erythropoiesis', 'Hemostasis', 'Blood groups'] },
          { title: 'Cardiovascular System', topics: ['Cardiac cycle', 'Heart sounds', 'Blood pressure regulation', 'Cardiac output'] },
          { title: 'Respiratory System', topics: ['Mechanics of breathing', 'Gas exchange', 'Transport of gases', 'Regulation of respiration'] },
        ]
      },
      {
        id: 'functional-english',
        title: 'Functional English',
        icon: 'translate',
        color: 'from-purple-600 to-purple-400',
        description: 'English language skills for professional communication in pharmaceutical sciences.',
        chapters: [
          { title: 'Grammar & Composition', topics: ['Parts of speech', 'Sentence structure', 'Tenses and voice', 'Paragraph writing'] },
          { title: 'Professional Communication', topics: ['Technical writing', 'Report writing', 'Presentation skills', 'Scientific vocabulary'] },
        ]
      },
    ]
  },
  'semester-2': {
    id: 'semester-2',
    title: 'Semester 2',
    icon: 'looks_two',
    color: 'from-amber-500 to-amber-500',
    subjects: [
      {
        id: 'physical-pharmacy-ii',
        title: 'Physical Pharmacy - II',
        icon: 'science',
        color: 'from-cyan-600 to-cyan-400',
        description: 'Advanced physical pharmacy concepts including complexation, kinetics, and disperse systems.',
        chapters: [
          { title: 'Complexation', topics: ['Types of complexes', 'Methods of analysis', 'Stability constants', 'Drug complexation'] },
          { title: 'Chemical Kinetics', topics: ['Reaction order and rate', 'Zero and first order kinetics', 'Half-life and shelf life', 'Accelerated stability studies'] },
          { title: 'Disperse Systems', topics: ['Classification', 'Colloids: types and properties', 'Emulsions: theory and stability', 'Suspensions: formulation and evaluation'] },
        ]
      },
      {
        id: 'organic-chemistry-ii',
        title: 'Organic Chemistry - II',
        icon: 'biotech',
        color: 'from-indigo-600 to-indigo-400',
        description: 'Advanced organic chemistry covering aromatic chemistry, heterocycles, and natural products.',
        chapters: [
          { title: 'Aromatic Chemistry', topics: ['Aromaticity', 'Electrophilic substitution', 'Nucleophilic substitution', 'Orientation and directing effects'] },
          { title: 'Heterocyclic Chemistry', topics: ['Five-membered heterocycles', 'Six-membered heterocycles', 'Fused heterocycles', 'Pharmaceutical importance'] },
          { title: 'Natural Products', topics: ['Alkaloids', 'Terpenoids', 'Steroids', 'Structure elucidation basics'] },
        ]
      },
      {
        id: 'biochemistry-ii',
        title: 'Biochemistry - II',
        icon: 'monitor_heart',
        color: 'from-emerald-600 to-emerald-400',
        description: 'Metabolic pathways, hormone biochemistry, and molecular biology fundamentals.',
        chapters: [
          { title: 'Metabolism', topics: ['Carbohydrate metabolism', 'Lipid metabolism', 'Amino acid metabolism', 'Nucleotide metabolism'] },
          { title: 'Hormone Biochemistry', topics: ['Classification of hormones', 'Mechanism of hormone action', 'Pituitary and thyroid hormones', 'Steroid hormones'] },
          { title: 'Molecular Biology', topics: ['DNA replication', 'Transcription and translation', 'Gene regulation', 'Recombinant DNA technology'] },
        ]
      },
      {
        id: 'anatomy-histology',
        title: 'Anatomy & Histology',
        icon: 'skull',
        color: 'from-rose-600 to-rose-400',
        description: 'Gross anatomy and microscopic structure of human tissues and organ systems.',
        chapters: [
          { title: 'General Anatomy', topics: ['Anatomical terminology', 'Skeletal system', 'Muscular system', 'Nervous system'] },
          { title: 'Histological Techniques', topics: ['Tissue preparation', 'Staining methods', 'Microscopy', 'Artifacts and interpretation'] },
          { title: 'Systemic Histology', topics: ['Epithelial tissue', 'Connective tissue', 'Muscle tissue', 'Nervous tissue'] },
        ]
      },
      {
        id: 'physiology-ii',
        title: 'Physiology - II',
        icon: 'heart_plus',
        color: 'from-red-600 to-red-400',
        description: 'Advanced physiology covering nervous, digestive, renal, endocrine and reproductive systems.',
        chapters: [
          { title: 'Nervous System', topics: ['Neuron structure and function', 'Synaptic transmission', 'Sensory and motor pathways', 'Autonomic nervous system'] },
          { title: 'Digestive System', topics: ['GI tract structure', 'Digestion and absorption', 'GI hormones', 'Liver and pancreas functions'] },
          { title: 'Renal System', topics: ['Nephron structure', 'Urine formation', 'Acid-base balance', 'Fluid and electrolyte balance'] },
          { title: 'Endocrine System', topics: ['Endocrine glands', 'Hypothalamic-pituitary axis', 'Thyroid and parathyroid', 'Adrenal and pancreatic hormones'] },
          { title: 'Reproductive System', topics: ['Male reproductive physiology', 'Female reproductive physiology', 'Menstrual cycle', 'Fertilization and pregnancy'] },
        ]
      },
      {
        id: 'islamic-studies',
        title: 'Islamic Studies',
        icon: 'menu_book',
        color: 'from-teal-600 to-teal-400',
        description: 'Islamic principles, ethics, and their application in professional and personal life.',
        chapters: [
          { title: 'Islamic Foundations', topics: ['Quranic studies', 'Hadith and Sunnah', 'Islamic creed and worship', 'Sources of Islamic law'] },
          { title: 'Islamic Ethics', topics: ['Professional ethics in Islam', 'Bioethics from Islamic perspective', 'Social responsibility', 'Family and society'] },
        ]
      },
    ]
  },
  'semester-3': {
    id: 'semester-3',
    title: 'Semester 3',
    icon: 'looks_3',
    color: 'from-emerald-600 to-emerald-600',
    subjects: [
      {
        id: 'drug-delivery-systems-i',
        title: 'Drug Delivery Systems and Formulation Science - I',
        icon: 'biotech',
        color: 'from-violet-600 to-violet-400',
        description: 'Principles of dosage form design, preformulation, and formulation of liquid and semisolid dosage forms.',
        chapters: [
          { title: 'Preformulation', topics: ['Physicochemical properties', 'Drug-excipient compatibility', 'Solubility and dissolution', 'Particle size and polymorphism'] },
          { title: 'Liquid Dosage Forms', topics: ['Solutions and syrups', 'Elixirs and tinctures', 'Suspensions', 'Emulsions', 'Formulation additives'] },
          { title: 'Semisolid Dosage Forms', topics: ['Ointments and creams', 'Gels and pastes', 'Suppositories', 'Formulation and evaluation'] },
        ]
      },
      {
        id: 'pharmacology-therapeutics-i',
        title: 'Pharmacology and Therapeutics - I',
        icon: 'local_pharmacy',
        color: 'from-teal-600 to-teal-600',
        description: 'General pharmacology and drug actions on autonomic nervous system, cardiovascular, and renal systems.',
        chapters: [
          { title: 'General Pharmacology', topics: ['Pharmacokinetics: ADME', 'Pharmacodynamics: receptors', 'Drug interactions', 'Adverse drug reactions'] },
          { title: 'Autonomic Nervous System', topics: ['Cholinergics and anticholinergics', 'Adrenergics and antiadrenergics', 'Ganglionic stimulants and blockers', 'Neuromuscular blocking agents'] },
          { title: 'Cardiovascular Pharmacology', topics: ['Antihypertensives', 'Antianginal drugs', 'Antiarrhythmics', 'Cardiac glycosides'] },
          { title: 'Renal Pharmacology', topics: ['Diuretics', 'Antidiuretics', 'Drugs affecting renal function'] },
        ]
      },
      {
        id: 'pharmacognosy-basic-i',
        title: 'Pharmacognosy - (Basic I)',
        icon: 'grass',
        color: 'from-green-600 to-green-400',
        description: 'Fundamentals of pharmacognosy including crude drugs, classification, and phytochemistry.',
        chapters: [
          { title: 'Introduction to Pharmacognosy', topics: ['Definition and scope', 'Sources of crude drugs', 'Classification systems', 'Organized and unorganized drugs'] },
          { title: 'Cultivation & Processing', topics: ['Cultivation methods', 'Collection and drying', 'Storage and preservation', 'Adulteration and evaluation'] },
          { title: 'Phytochemicals', topics: ['Carbohydrates and glycosides', 'Alkaloids', 'Volatile oils', 'Tannins and resins'] },
        ]
      },
      {
        id: 'pathology',
        title: 'Pathology',
        icon: 'science',
        color: 'from-orange-600 to-orange-400',
        description: 'Basic pathology covering cell injury, inflammation, immunity, and disease mechanisms.',
        chapters: [
          { title: 'Cell Injury & Adaptation', topics: ['Types of cell injury', 'Necrosis and apoptosis', 'Atrophy, hypertrophy, hyperplasia', 'Metaplasia and dysplasia'] },
          { title: 'Inflammation & Repair', topics: ['Acute inflammation', 'Chronic inflammation', 'Chemical mediators', 'Wound healing'] },
          { title: 'Immunopathology', topics: ['Innate and adaptive immunity', 'Hypersensitivity reactions', 'Autoimmune diseases', 'Immunodeficiency'] },
          { title: 'Hemodynamic Disorders', topics: ['Edema and congestion', 'Thrombosis and embolism', 'Infarction', 'Shock'] },
        ]
      },
      {
        id: 'basic-pharmaceutical-microbiology',
        title: 'Basic Pharmaceutical Microbiology',
        icon: 'coronavirus',
        color: 'from-amber-600 to-amber-400',
        description: 'Microbiology fundamentals including bacteria, fungi, viruses, and sterilization techniques for pharmacy.',
        chapters: [
          { title: 'Introduction to Microbiology', topics: ['History and scope', 'Classification of microorganisms', 'Bacterial structure and growth', 'Fungal and viral structure'] },
          { title: 'Sterilization & Disinfection', topics: ['Physical methods: heat, radiation', 'Chemical methods: disinfectants', 'Sterility testing', 'Aseptic techniques'] },
          { title: 'Microbial Assays', topics: ['Antibiotic assays', 'Vitamin and amino acid assays', 'Bacterial endotoxin testing', 'Bioburden testing'] },
          { title: 'Applied Microbiology', topics: ['Water and air microbiology', 'Pharmaceutical water systems', 'Preservation of formulations', 'Hospital infections and control'] },
        ]
      },
    ]
  },
  'semester-4': {
    id: 'semester-4',
    title: 'Semester 4',
    icon: 'looks_4',
    color: 'from-sky-500 to-sky-500',
    subjects: [
      {
        id: 'drug-delivery-systems-ii',
        title: 'Drug Delivery Systems and Formulation Science - II',
        icon: 'biotech',
        color: 'from-amber-600 to-amber-400',
        description: 'Advanced dosage form design including solid dosage forms, tablets, capsules, and parenterals.',
        chapters: [
          { title: 'Tablets', topics: ['Types and classification', 'Excipients and formulation', 'Compression and granulation', 'Coating and evaluation'] },
          { title: 'Capsules', topics: ['Hard gelatin capsules', 'Soft gelatin capsules', 'Formulation and filling', 'Quality control'] },
          { title: 'Parenteral Products', topics: ['Types of injections', 'Vehicles and additives', 'Aseptic manufacturing', 'Sterility and pyrogen testing'] },
          { title: 'Aerosols', topics: ['Propellants and containers', 'Metered-dose inhalers', 'Dry powder inhalers', 'Nebulizers'] },
        ]
      },
      {
        id: 'applied-microbiology-immunology',
        title: 'Applied Pharmaceutical Microbiology and Immunology',
        icon: 'coronavirus',
        color: 'from-rose-600 to-rose-400',
        description: 'Applied microbiology and immunology concepts for pharmaceutical manufacturing and quality assurance.',
        chapters: [
          { title: 'Applied Microbiology', topics: ['Sterility assurance', 'Clean room classification', 'Environmental monitoring', 'Preservation of pharmaceutical products'] },
          { title: 'Immunology Fundamentals', topics: ['Immune system components', 'Antigen-antibody reactions', 'Vaccines and immunization', 'Immunological assays'] },
          { title: 'Quality Microbiology', topics: ['Microbiological limits', 'Endotoxin testing', 'Bioburden analysis', 'Preservative efficacy testing'] },
        ]
      },
      {
        id: 'pharmacology-therapeutics-ii',
        title: 'AI in Pharmacology and Therapeutics (Pharmacology & Therapeutics-II)',
        icon: 'psychiatry',
        color: 'from-teal-600 to-teal-600',
        description: 'Pharmacology principles enhanced with AI applications, covering CNS drugs, anaesthetics, and chemotherapy.',
        chapters: [
          { title: 'CNS Pharmacology', topics: ['Sedatives and hypnotics', 'Antiepileptics', 'Antiparkinsonian drugs', 'Antidepressants and antipsychotics'] },
          { title: 'Anaesthetics', topics: ['General anaesthetics', 'Local anaesthetics', 'Preanaesthetic medication', 'Spinal anaesthesia'] },
          { title: 'Chemotherapy', topics: ['Antibiotics', 'Antivirals and antifungals', 'Anticancer drugs', 'Immunosuppressants'] },
          { title: 'AI in Drug Development', topics: ['AI-driven drug discovery', 'Machine learning in pharmacology', 'Predictive modeling for ADME', 'AI in clinical trials'] },
        ]
      },
      {
        id: 'pharmacognosy-basic-ii',
        title: 'Pharmacognosy (Basic - II)',
        icon: 'grass',
        color: 'from-green-600 to-green-400',
        description: 'Advanced pharmacognosy covering secondary metabolites, extraction, and quality control of herbal drugs.',
        chapters: [
          { title: 'Secondary Metabolites', topics: ['Alkaloids: classification and properties', 'Glycosides: cardiac and anthraquinone', 'Terpenoids and steroids', 'Phenolic compounds and flavonoids'] },
          { title: 'Extraction & Isolation', topics: ['Solvent extraction methods', 'Maceration and percolation', 'Distillation techniques', 'Chromatographic purification'] },
          { title: 'Herbal Drug Technology', topics: ['Standardization of herbal drugs', 'Marker compound analysis', 'Herbal formulations', 'Quality control and stability'] },
        ]
      },
      {
        id: 'pakistan-studies',
        title: 'Pakistan Studies',
        icon: 'flag',
        color: 'from-emerald-600 to-emerald-400',
        description: 'History, culture, and constitutional development of Pakistan.',
        chapters: [
          { title: 'Historical Perspective', topics: ['Ideology of Pakistan', 'Pakistan movement', 'Quaid-e-Azam and Allama Iqbal', 'Creation of Pakistan'] },
          { title: 'Constitution & Governance', topics: ['Constitutional development', 'Government structure', 'Rights and responsibilities', 'National integration'] },
        ]
      },
      {
        id: 'fehm-e-quran-i',
        title: 'Fehm-e-Quran I',
        icon: 'menu_book',
        color: 'from-teal-600 to-teal-400',
        description: 'Understanding Quranic teachings and their application in daily life.',
        chapters: [
          { title: 'Quranic Studies', topics: ['Revelation and compilation', 'Themes of the Quran', 'Tafsir fundamentals', 'Selected Surahs study'] },
          { title: 'Practical Application', topics: ['Moral and ethical teachings', 'Social principles', 'Spiritual development', 'Contemporary relevance'] },
        ]
      },
    ]
  },
  'semester-5': {
    id: 'semester-5',
    title: 'Semester 5',
    icon: 'looks_5',
    color: 'from-violet-600 to-violet-600',
    subjects: [
      {
        id: 'pharmacognosy-applied',
        title: 'Pharmacognosy (Applied)',
        icon: 'grass',
        color: 'from-green-600 to-green-400',
        description: 'Applied pharmacognosy focusing on herbal drug evaluation, formulation, and therapeutic applications.',
        chapters: [
          { title: 'Herbal Drug Evaluation', topics: ['Macroscopic and microscopic evaluation', 'Chemical evaluation', 'Biological evaluation', 'Adulteration and detection'] },
          { title: 'Herbal Formulations', topics: ['Types of herbal formulations', 'Extraction and processing', 'Stability and shelf-life', 'Regulatory requirements'] },
          { title: 'Therapeutic Applications', topics: ['Herbs for GIT disorders', 'Herbs for CVS', 'Hepatoprotective herbs', 'Immunomodulatory herbs'] },
        ]
      },
      {
        id: 'pharmaceutical-analysis-i',
        title: 'Pharmaceutical Analysis-I',
        icon: 'science',
        color: 'from-indigo-600 to-indigo-400',
        description: 'Analytical techniques including volumetric analysis, electrochemistry, and spectroscopy.',
        chapters: [
          { title: 'Volumetric Analysis', topics: ['Acid-base titrations', 'Redox titrations', 'Complexometric titrations', 'Non-aqueous titrations'] },
          { title: 'Electrochemical Methods', topics: ['Potentiometry', 'Conductometry', 'Polarography', 'Amperometric titrations'] },
          { title: 'Spectroscopy', topics: ['UV-Visible spectroscopy', 'IR spectroscopy', 'Atomic absorption spectroscopy', 'Flame photometry'] },
        ]
      },
      {
        id: 'pharmacology-therapeutics-iii',
        title: 'Pharmacology and Therapeutics-III',
        icon: 'local_pharmacy',
        color: 'from-teal-600 to-teal-600',
        description: 'Systematic pharmacology covering endocrine, reproductive, and chemotherapy of infectious diseases.',
        chapters: [
          { title: 'Endocrine Pharmacology', topics: ['Hypothalamic and pituitary hormones', 'Thyroid and antithyroid drugs', 'Insulin and oral hypoglycemics', 'Corticosteroids'] },
          { title: 'Reproductive Pharmacology', topics: ['Estrogens and progestins', 'Androgens and anabolic steroids', 'Oral contraceptives', 'Drugs for infertility'] },
          { title: 'Chemotherapy', topics: ['Antimicrobial drugs', 'Antitubercular therapy', 'Antimalarials', 'Drug resistance mechanisms'] },
        ]
      },
      {
        id: 'hospital-community-pharmacy',
        title: 'Hospital and Community Pharmacy',
        icon: 'local_hospital',
        color: 'from-red-600 to-red-400',
        description: 'Pharmacy practice in hospital and community settings including drug distribution and patient care.',
        chapters: [
          { title: 'Hospital Pharmacy', topics: ['Organization and management', 'Drug distribution systems', 'Hospital formulary', 'Sterile compounding'] },
          { title: 'Community Pharmacy', topics: ['Pharmacy layout and management', 'Prescription handling', 'Patient counseling', 'OTC medications'] },
          { title: 'Clinical Services', topics: ['Drug information services', 'Medication therapy management', 'Adverse drug reaction monitoring', 'Pharmaceutical care'] },
        ]
      },
      {
        id: 'quantitative-reasoning-i',
        title: 'Quantitative Reasoning - I',
        icon: 'calculate',
        color: 'from-blue-600 to-blue-400',
        description: 'Mathematical and statistical reasoning for pharmaceutical sciences.',
        chapters: [
          { title: 'Mathematical Foundations', topics: ['Algebra and equations', 'Logarithms and exponents', 'Calculus basics', 'Pharmaceutical calculations'] },
          { title: 'Statistics', topics: ['Descriptive statistics', 'Probability distributions', 'Hypothesis testing', 'Correlation and regression'] },
        ]
      },
      {
        id: 'ideology-constitution-pakistan',
        title: 'Ideology & Constitution of Pakistan',
        icon: 'gavel',
        color: 'from-emerald-600 to-emerald-400',
        description: 'Ideological foundations and constitutional framework of Pakistan.',
        chapters: [
          { title: 'Ideological Foundations', topics: ['Two-nation theory', 'Islamic ideology', 'Vision of Quaid-e-Azam', 'National identity'] },
          { title: 'Constitutional Framework', topics: ['Constitution of 1973', 'Fundamental rights', 'Federal and provincial relations', 'Judicial system'] },
        ]
      },
      {
        id: 'fehm-e-quran-ii',
        title: 'Fehm-e-Quran II',
        icon: 'menu_book',
        color: 'from-teal-600 to-teal-400',
        description: 'Advanced study of Quranic themes and their contemporary relevance.',
        chapters: [
          { title: 'Advanced Quranic Themes', topics: ['Selected Surahs: thematic study', 'Quranic worldview', 'Social justice in the Quran', 'Family and society'] },
          { title: 'Contemporary Issues', topics: ['Bioethics in the Quran', 'Environmental stewardship', 'Interfaith harmony', 'Modern challenges'] },
        ]
      },
    ]
  },
  'semester-6': {
    id: 'semester-6',
    title: 'Semester 6',
    icon: 'looks_6',
    color: 'from-cyan-600 to-cyan-600',
    subjects: [
      {
        id: 'pharmacognosy-advanced',
        title: 'Pharmacognosy (Advanced)',
        icon: 'grass',
        color: 'from-green-600 to-green-400',
        description: 'Advanced pharmacognosy covering herbal cosmeceuticals, nutraceuticals, and modern phytopharmaceuticals.',
        chapters: [
          { title: 'Herbal Cosmeceuticals', topics: ['Skin care herbs', 'Hair care preparations', 'Antioxidant formulations', 'Regulatory considerations'] },
          { title: 'Nutraceuticals', topics: ['Vitamins and minerals', 'Herbal supplements', 'Functional foods', 'Health claims and regulations'] },
          { title: 'Modern Phytopharmaceuticals', topics: ['Standardized extracts', 'Phytosome technology', 'Herbal drug interactions', 'Clinical evidence and research'] },
        ]
      },
      {
        id: 'dispensing-social-admin-pharmacy',
        title: 'Dispensing, Social & Administrative Pharmacy',
        icon: 'description',
        color: 'from-cyan-600 to-cyan-400',
        description: 'Dispensing practices, social aspects of pharmacy, and administrative management.',
        chapters: [
          { title: 'Dispensing Practice', topics: ['Prescription analysis', 'Compounding techniques', 'Incompatibilities', 'Labeling and packaging'] },
          { title: 'Social Pharmacy', topics: ['Health care systems', 'Pharmacoeconomics', 'Pharmacy and public health', 'Patient compliance'] },
          { title: 'Administrative Pharmacy', topics: ['Pharmacy management', 'Inventory control', 'Financial management', 'Human resource management'] },
        ]
      },
      {
        id: 'pharmaceutical-analysis-ii',
        title: 'Pharmaceutical Analysis-II',
        icon: 'science',
        color: 'from-indigo-600 to-indigo-400',
        description: 'Advanced analytical techniques including chromatography, NMR, and mass spectrometry.',
        chapters: [
          { title: 'Chromatography', topics: ['HPLC: principles and applications', 'GC: instrumentation and methods', 'TLC and HPTLC', 'Column chromatography'] },
          { title: 'Advanced Spectroscopy', topics: ['NMR spectroscopy', 'Mass spectrometry', 'Hyphenated techniques (LC-MS, GC-MS)', 'Structure elucidation'] },
          { title: 'Method Validation', topics: ['Validation parameters', 'ICH guidelines', 'System suitability', 'Method development'] },
        ]
      },
      {
        id: 'pharmacology-therapeutics-iv',
        title: 'Pharmacology and Therapeutics-IV',
        icon: 'local_pharmacy',
        color: 'from-teal-600 to-teal-600',
        description: 'Advanced pharmacology covering immunomodulators, toxicology, and rational drug use.',
        chapters: [
          { title: 'Immunopharmacology', topics: ['Immunostimulants', 'Immunosuppressants', 'Vaccines and immunotherapy', 'Monoclonal antibodies'] },
          { title: 'Toxicology', topics: ['Principles of toxicology', 'Heavy metal poisoning', 'Antidotes and chelation therapy', 'Drug poisoning management'] },
          { title: 'Rational Drug Use', topics: ['Essential medicines concept', 'Drug utilization studies', 'Rational prescribing', 'Evidence-based medicine'] },
        ]
      },
      {
        id: 'applications-of-ict',
        title: 'Applications of ICT (Especial focus on Pharmacy)',
        icon: 'computer',
        color: 'from-blue-600 to-blue-400',
        description: 'Information and communication technology applications in pharmacy practice and research.',
        chapters: [
          { title: 'ICT Fundamentals', topics: ['Computer systems and networks', 'Internet and web technologies', 'Database management', 'Data security and privacy'] },
          { title: 'Pharmacy Informatics', topics: ['Drug information systems', 'Electronic health records', 'Telepharmacy', 'Decision support systems'] },
          { title: 'Data Science', topics: ['Statistical software', 'Data visualization', 'Introduction to machine learning', 'Pharmacoinformatics'] },
        ]
      },
      {
        id: 'quantitative-reasoning-ii',
        title: 'Quantitative Reasoning-II',
        icon: 'calculate',
        color: 'from-blue-700 to-blue-500',
        description: 'Advanced quantitative reasoning with emphasis on biostatistics for pharmaceutical research.',
        chapters: [
          { title: 'Biostatistics', topics: ['Study designs', 'Sampling methods', 'Parametric and non-parametric tests', 'ANOVA and multiple comparisons'] },
          { title: 'Advanced Statistics', topics: ['Regression analysis', 'Survival analysis', 'Meta-analysis basics', 'Statistical software applications'] },
          { title: 'Data Interpretation', topics: ['Results presentation', 'Statistical inference', 'Critical appraisal', 'Research methodology'] },
        ]
      },
    ]
  },
  'semester-7': {
    id: 'semester-7',
    title: 'Semester 7',
    icon: 'biotech',
    color: 'from-orange-600 to-orange-600',
    subjects: [
      {
        id: 'industrial-pharmacy-i',
        title: 'Industrial Pharmacy - I',
        icon: 'factory',
        color: 'from-purple-600 to-purple-400',
        description: 'Industrial pharmaceutical manufacturing processes, equipment, and quality assurance.',
        chapters: [
          { title: 'Pharmaceutical Manufacturing', topics: ['Plant layout and design', 'Material handling', 'Size reduction and separation', 'Mixing and blending'] },
          { title: 'Dosage Form Manufacturing', topics: ['Tablet manufacturing', 'Capsule filling', 'Liquid manufacturing', 'Semisolid manufacturing'] },
          { title: 'Quality Assurance', topics: ['GMP guidelines', 'Validation principles', 'Process validation', 'Cleaning validation'] },
        ]
      },
      {
        id: 'biopharmaceutics-pharmacokinetics-i',
        title: 'Biopharmaceutics and Pharmacokinetics - I',
        icon: 'monitor_heart',
        color: 'from-red-600 to-red-400',
        description: 'Biopharmaceutic principles, pharmacokinetic models, and drug disposition in the body.',
        chapters: [
          { title: 'Biopharmaceutics', topics: ['Drug absorption mechanisms', 'Bioavailability and bioequivalence', 'In-vitro in-vivo correlation', 'Factors affecting absorption'] },
          { title: 'Pharmacokinetics', topics: ['Compartmental models', 'Non-compartmental analysis', 'Multiple dosing', 'Non-linear pharmacokinetics'] },
          { title: 'Drug Disposition', topics: ['Protein binding', 'Tissue distribution', 'Metabolism and clearance', 'Renal and hepatic clearance'] },
        ]
      },
      {
        id: 'clinical-pharmacy-i',
        title: 'Clinical Pharmacy-I',
        icon: 'stethoscope',
        color: 'from-cyan-600 to-cyan-400',
        description: 'Clinical pharmacy practice including patient assessment, therapeutic drug monitoring, and clinical interventions.',
        chapters: [
          { title: 'Clinical Pharmacy Practice', topics: ['Patient data collection', 'Medication history', 'Clinical pharmacokinetics', 'Drug therapy monitoring'] },
          { title: 'Therapeutic Drug Monitoring', topics: ['TDM principles and indications', 'Aminoglycosides and vancomycin', 'Antiepileptics', 'Immunosuppressants'] },
          { title: 'Clinical Interventions', topics: ['Medication review', 'Drug-related problems', 'Clinical decision making', 'Documentation and communication'] },
        ]
      },
      {
        id: 'pharmaceutical-quality-management',
        title: 'Pharmaceutical Quality Management System',
        icon: 'verified',
        color: 'from-teal-600 to-teal-400',
        description: 'Quality management systems, ISO standards, and regulatory compliance in pharmaceutical industry.',
        chapters: [
          { title: 'Quality Management', topics: ['Quality assurance and control', 'ISO 9001 and 14001', 'Total quality management', 'Quality audits'] },
          { title: 'Regulatory Compliance', topics: ['cGMP requirements', 'ICH Q-series guidelines', 'WHO certification', 'Documentation management'] },
          { title: 'Continuous Improvement', topics: ['CAPA systems', 'Change control', 'Risk management', 'Performance metrics'] },
        ]
      },
      {
        id: 'expository-writing',
        title: 'Expository Writing',
        icon: 'edit_note',
        color: 'from-pink-600 to-pink-400',
        description: 'Academic and professional writing skills for scientific communication.',
        chapters: [
          { title: 'Academic Writing', topics: ['Essay structure and development', 'Research proposals', 'Literature reviews', 'Citation and referencing'] },
          { title: 'Scientific Writing', topics: ['Research manuscripts', 'Abstract and summary writing', 'Grant writing', 'Scientific presentations'] },
        ]
      },
      {
        id: 'entrepreneurship',
        title: 'Entrepreneurship',
        icon: 'rocket_launch',
        color: 'from-amber-600 to-amber-400',
        description: 'Entrepreneurial skills and business development for pharmacy professionals.',
        chapters: [
          { title: 'Entrepreneurial Foundations', topics: ['Entrepreneurship concepts', 'Business planning', 'Market analysis', 'Financial planning'] },
          { title: 'Pharmacy Business', topics: ['Community pharmacy setup', 'Business models', 'Regulatory requirements', 'Growth strategies'] },
        ]
      },
    ]
  },
  'semester-8': {
    id: 'semester-8',
    title: 'Semester 8',
    icon: 'stethoscope',
    color: 'from-teal-600 to-teal-600',
    subjects: [
      {
        id: 'industrial-pharmacy-ii',
        title: 'Industrial Pharmacy - II',
        icon: 'factory',
        color: 'from-purple-700 to-purple-500',
        description: 'Advanced industrial pharmacy covering packaging, stability, pilot plants, and regulatory aspects.',
        chapters: [
          { title: 'Packaging Technology', topics: ['Packaging materials', 'Container types', 'Packaging machinery', 'Labeling and inserts'] },
          { title: 'Stability Testing', topics: ['ICH stability guidelines', 'Stability study design', 'Accelerated and long-term studies', 'Photostability testing'] },
          { title: 'Pilot Plant & Scale-Up', topics: ['Pilot plant design', 'Technology transfer', 'Scale-up considerations', 'Process optimization'] },
        ]
      },
      {
        id: 'biopharmaceutics-pharmacokinetics-ii',
        title: 'Biopharmaceutics and Pharmacokinetics - II',
        icon: 'monitor_heart',
        color: 'from-red-700 to-red-500',
        description: 'Advanced pharmacokinetics including non-linear kinetics, PK-PD modeling, and biopharmaceutic considerations.',
        chapters: [
          { title: 'Advanced Pharmacokinetics', topics: ['Non-linear kinetics', 'Physiologically-based PK modeling', 'Population pharmacokinetics', 'PK-PD modeling'] },
          { title: 'Biopharmaceutic Considerations', topics: ['Product formulation effects', 'Food and nutrient interactions', 'Special populations', 'Bioequivalence study design'] },
          { title: 'Clinical Pharmacokinetics', topics: ['Dosage regimen design', 'Therapeutic range management', 'Pharmacogenomics', 'Bayesian dosing'] },
        ]
      },
      {
        id: 'clinical-pharmacy-ii',
        title: 'Clinical Pharmacy-II',
        icon: 'stethoscope',
        color: 'from-cyan-700 to-cyan-500',
        description: 'Advanced clinical pharmacy in specialized care areas and pharmacotherapeutic management.',
        chapters: [
          { title: 'Specialized Care', topics: ['ICU pharmacotherapy', 'Oncology pharmacy', 'Pediatric pharmacotherapy', 'Geriatric pharmacotherapy'] },
          { title: 'Pharmacotherapeutic Management', topics: ['Cardiovascular therapeutics', 'Respiratory therapeutics', 'Infectious disease management', 'Renal and hepatic disorders'] },
          { title: 'Clinical Research', topics: ['Clinical trial design', 'Ethical considerations', 'Data management', 'Regulatory submissions'] },
        ]
      },
      {
        id: 'civics-community-engagement',
        title: 'Civics & Community Engagement',
        icon: 'diversity_3',
        color: 'from-emerald-600 to-emerald-400',
        description: 'Civic responsibilities, community engagement, and social accountability in pharmacy practice.',
        chapters: [
          { title: 'Civic Education', topics: ['Citizenship and rights', 'Democratic principles', 'Civic responsibilities', 'Community development'] },
          { title: 'Community Engagement', topics: ['Health promotion programs', 'Community outreach', 'Interprofessional collaboration', 'Social accountability'] },
        ]
      },
      {
        id: 'pharmaceutical-quality-control',
        title: 'Pharmaceutical Quality Control',
        icon: 'verified',
        color: 'from-teal-700 to-teal-500',
        description: 'Quality control testing of raw materials, in-process samples, and finished products.',
        chapters: [
          { title: 'Raw Material Testing', topics: ['Identity and purity tests', 'Assay methods', 'Impurity profiling', 'Pharmacopoeial standards'] },
          { title: 'Finished Product Testing', topics: ['Disintegration and dissolution', 'Hardness and friability', 'Content uniformity', 'Microbiological testing'] },
          { title: 'Stability Testing', topics: ['Stability-indicating methods', 'Degradation product analysis', 'Shelf-life determination', 'QC documentation'] },
        ]
      },
      {
        id: 'pharmaceutical-management-marketing',
        title: 'Pharmaceutical Management and Marketing',
        icon: 'trending_up',
        color: 'from-blue-600 to-blue-400',
        description: 'Management principles and marketing strategies specific to pharmaceutical industry.',
        chapters: [
          { title: 'Pharmaceutical Management', topics: ['Organizational behavior', 'Strategic management', 'Supply chain management', 'Project management'] },
          { title: 'Pharmaceutical Marketing', topics: ['Market research', 'Brand management', 'Pharmaceutical promotion', 'Ethical marketing practices'] },
        ]
      },
    ]
  },
  'semester-9': {
    id: 'semester-9',
    title: 'Semester 9',
    icon: 'auto_stories',
    color: 'from-fuchsia-600 to-fuchsia-600',
    subjects: [
      {
        id: 'pharmaceutical-technology-i',
        title: 'Pharmaceutical Technology - I',
        icon: 'precision_manufacturing',
        color: 'from-teal-600 to-teal-400',
        description: 'Advanced pharmaceutical technology including novel drug delivery systems and formulation technologies.',
        chapters: [
          { title: 'Novel Drug Delivery Systems', topics: ['Controlled release systems', 'Transdermal drug delivery', 'Targeted drug delivery', 'Nanocarriers and liposomes'] },
          { title: 'Formulation Technologies', topics: ['Hot melt extrusion', 'Spray drying and freeze drying', 'Microencapsulation', 'Solid dispersion technology'] },
          { title: 'Process Intensification', topics: ['Continuous manufacturing', 'Process analytical technology', 'Design of experiments', 'Quality by design'] },
        ]
      },
      {
        id: 'pharmaceutical-regulatory-science-i',
        title: 'Pharmaceutical Regulatory Science-I',
        icon: 'gavel',
        color: 'from-indigo-600 to-indigo-400',
        description: 'Regulatory requirements for pharmaceutical product development, registration, and marketing.',
        chapters: [
          { title: 'Regulatory Framework', topics: ['Drug regulatory authorities', 'Drug laws and regulations', 'Registration and licensing', 'Post-marketing surveillance'] },
          { title: 'Dossier Preparation', topics: ['CTD and eCTD format', 'Module 1-5 requirements', 'Common technical document', 'Submission procedures'] },
          { title: 'Regulatory Strategy', topics: ['Orphan drug designation', 'Fast track and breakthrough therapy', 'Pediatric investigation plans', 'Global regulatory harmonization'] },
        ]
      },
      {
        id: 'medicinal-chemistry-i',
        title: 'Medicinal Chemistry-I',
        icon: 'science',
        color: 'from-rose-600 to-rose-400',
        description: 'Medicinal chemistry principles, drug design, and SAR of major drug classes.',
        chapters: [
          { title: 'Drug Design Principles', topics: ['QSAR and molecular modeling', 'Pharmacophore modeling', 'Molecular docking', 'Drug-likeness and Lipinski rules'] },
          { title: 'Drug Metabolism', topics: ['Phase I and II reactions', 'Prodrug design', 'Metabolic stability', 'Drug-drug interactions'] },
          { title: 'SAR of Drug Classes', topics: ['Adrenergic and cholinergic agents', 'Antihistamines and anticholinergics', 'Antihypertensives and antiarrhythmics', 'NSAIDs and analgesics'] },
        ]
      },
      {
        id: 'advanced-clinical-pharmacy-i',
        title: 'Advanced Clinical Pharmacy-I',
        icon: 'stethoscope',
        color: 'from-cyan-600 to-cyan-400',
        description: 'Advanced clinical pharmacy with focus on evidence-based pharmacotherapy and patient-centered care.',
        chapters: [
          { title: 'Evidence-Based Pharmacotherapy', topics: ['Critical appraisal of literature', 'Clinical practice guidelines', 'Systematic reviews and meta-analysis', 'Translating evidence to practice'] },
          { title: 'Special Populations', topics: ['Pediatric pharmacotherapy', 'Geriatric pharmacotherapy', 'Pregnancy and lactation', 'Organ impairment adjustments'] },
          { title: 'Advanced Therapeutics', topics: ['Cardiovascular therapeutics', 'Respiratory therapeutics', 'Neurological therapeutics', 'Oncological pharmacotherapy'] },
        ]
      },
      {
        id: 'clinical-pharmacology',
        title: 'Clinical Pharmacology',
        icon: 'local_pharmacy',
        color: 'from-teal-600 to-teal-600',
        description: 'Clinical pharmacology principles including clinical trials, pharmacovigilance, and rational therapeutics.',
        chapters: [
          { title: 'Clinical Trial Methodology', topics: ['Phase I-IV studies', 'Study design and protocols', 'Randomization and blinding', 'Ethical considerations and GCP'] },
          { title: 'Pharmacovigilance', topics: ['ADR monitoring and reporting', 'Signal detection', 'Risk management plans', 'Global pharmacovigilance systems'] },
          { title: 'Rational Therapeutics', topics: ['Drug selection principles', 'Combination therapy', 'Therapeutic guidelines', 'Prescribing in special populations'] },
        ]
      },
    ]
  },
  'semester-10': {
    id: 'semester-10',
    title: 'Semester 10',
    icon: 'school',
    color: 'from-indigo-600 to-indigo-600',
    subjects: [
      {
        id: 'pharmaceutical-technology-ii',
        title: 'Pharmaceutical Technology - II',
        icon: 'precision_manufacturing',
        color: 'from-teal-700 to-teal-500',
        description: 'Advanced pharmaceutical technology including biopharmaceuticals and advanced manufacturing.',
        chapters: [
          { title: 'Biopharmaceuticals', topics: ['Monoclonal antibodies', 'Recombinant proteins and peptides', 'Vaccine technology', 'Gene and cell therapy'] },
          { title: 'Advanced Manufacturing', topics: ['Single-use technology', 'Automation and robotics', 'Isolator technology', 'Lyophilization advanced'] },
          { title: 'Emerging Technologies', topics: ['3D printing of pharmaceuticals', 'Smart pills and sensors', 'Personalized medicine', 'Digital therapeutics'] },
        ]
      },
      {
        id: 'pharmaceutical-regulatory-science-ii',
        title: 'Pharmaceutical Regulatory Science-II',
        icon: 'gavel',
        color: 'from-indigo-700 to-indigo-500',
        description: 'Advanced regulatory affairs including global registration, inspections, and compliance management.',
        chapters: [
          { title: 'Global Registration', topics: ['US FDA submissions', 'EMA procedures', 'WHO prequalification', 'ASEAN and ICH regions'] },
          { title: 'Regulatory Inspections', topics: ['FDA inspections', 'Mock audits and readiness', '483 observations and responses', 'Warning letters and remediation'] },
          { title: 'Compliance Management', topics: ['Compliance programs', 'Risk-based inspections', 'Pharmacopoeial compliance', 'Ethical compliance and fraud prevention'] },
        ]
      },
      {
        id: 'medicinal-chemistry-ii',
        title: 'Medicinal Chemistry-II',
        icon: 'science',
        color: 'from-rose-700 to-rose-500',
        description: 'Advanced medicinal chemistry of chemotherapeutic agents, hormones, and enzyme inhibitors.',
        chapters: [
          { title: 'Chemotherapeutic Agents', topics: ['Antibacterials: SAR and mechanisms', 'Antivirals and antiretrovirals', 'Antifungals and antiparasitics', 'Anticancer agents'] },
          { title: 'Hormones and Antagonists', topics: ['Steroidal hormones', 'Non-steroidal hormone modulators', 'Thyroid and parathyroid agents', 'Anti-inflammatory corticosteroids'] },
          { title: 'Enzyme Inhibitors', topics: ['ACE inhibitors', 'HMG-CoA reductase inhibitors', 'Protease inhibitors', 'Kinase inhibitors as targeted therapy'] },
        ]
      },
      {
        id: 'advanced-clinical-pharmacy-ii',
        title: 'Advanced Clinical Pharmacy-II',
        icon: 'stethoscope',
        color: 'from-cyan-700 to-cyan-500',
        description: 'Advanced clinical pharmacy in specialized areas including critical care, infectious diseases, and research.',
        chapters: [
          { title: 'Critical Care Pharmacy', topics: ['Sepsis management', 'Hemodynamic support', 'Sedation and analgesia in ICU', 'Nutrition support'] },
          { title: 'Infectious Disease Pharmacotherapy', topics: ['Antibiotic stewardship', 'HIV pharmacotherapy', 'Tuberculosis management', 'Fungal infection management'] },
          { title: 'Clinical Leadership', topics: ['Pharmacy leadership and management', 'Clinical guideline development', 'Quality improvement', 'Interprofessional collaboration'] },
        ]
      },
      {
        id: 'bioethics',
        title: 'Bioethics (Arts & Humanities)',
        icon: 'balance',
        color: 'from-amber-600 to-amber-400',
        description: 'Ethical principles and their application in pharmaceutical and healthcare practice.',
        chapters: [
          { title: 'Ethical Foundations', topics: ['Ethical theories and principles', 'Autonomy and informed consent', 'Beneficence and non-maleficence', 'Justice and fairness'] },
          { title: 'Pharmaceutical Ethics', topics: ['Ethics in clinical trials', 'Patient confidentiality', 'End-of-life ethics', 'Genetic and reproductive ethics'] },
          { title: 'Professional Ethics', topics: ['Code of ethics for pharmacists', 'Ethical decision making', 'Conflict of interest', 'Social responsibility'] },
        ]
      },
      {
        id: 'capstone-project',
        title: 'Capstone Project',
        icon: 'rocket',
        color: 'from-yellow-600 to-yellow-400',
        description: 'Integrative research project demonstrating mastery of pharmaceutical sciences.',
        chapters: [
          { title: 'Project Planning', topics: ['Research question formulation', 'Literature review', 'Methodology design', 'Project management'] },
          { title: 'Implementation', topics: ['Data collection', 'Analysis and interpretation', 'Results presentation', 'Report writing'] },
          { title: 'Dissemination', topics: ['Thesis preparation', 'Presentation skills', 'Publication ethics', 'Future directions'] },
        ]
      },
    ]
  },
};
