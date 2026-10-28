export const formularyDrugs = [
  {
    id: 'ors',
    name: 'Oral Rehydration Salts (ORS)',
    drugClass: 'Electrolytes',
    mechanismOfAction: 'The glucose in ORS facilitates the absorption of sodium and water in the small intestine via the sodium-glucose co-transport system, thereby correcting dehydration and acidosis.',
    indications: [
      'Dehydration from acute diarrhea in adults and children (all ages)',
      'Mild to moderate dehydration from vomiting or other fluid losses',
      'Maintenance therapy to prevent dehydration in ongoing diarrhea',
      'As an adjunct in febrile illnesses to prevent dehydration',
      'In hyperemesis gravidarum (pregnancy)'
    ],
    adultDosing: 'Mild-Moderate Dehydration: 2-4 liters over 24 hours as needed. Severe Dehydration (as adjunct to IV fluids): 500-900 mL/hour under medical supervision. Persistent Diarrhea (Rice-based ORS): One sachet after each loose stool (max 5 sachets/day) for 3-4 days. Maintenance (Prevention): 200-400 mL after each loose stool for duration of diarrhea.',
    pediatricDosing: 'Infants (<1 year): 50-100 mL per kg body weight over first 4 hours for rehydration. Children (1-10 years): 100-200 mL after each loose stool; OR 1 liter over 8-24 hours in small frequent sips. Adolescents (>10 years): Same as adult, 2-4 liters per 24 hours as needed.',
    brands: [
      { name: 'Woodwards ORS', dose: '1 Sachet (powder)', form: 'Powder', manufacturer: 'Woodwards (Distributor: ICI Pakistan Limited)' },
      { name: 'Peditral', dose: '500 mL', form: 'Oral Solution', manufacturer: 'Searle' },
      { name: 'Oralyte', dose: '20 Sachets (powder)', form: 'Powder', manufacturer: 'Karachi Chemical' },
      { name: 'Paeditrex', dose: '20 Sachets (powder)', form: 'ORS Powder', manufacturer: 'Helicon Pharmaceutek' },
      { name: 'Normolyte', dose: '20 Sachets (powder) (Lemon)', form: 'Powder', manufacturer: 'Surge Laboratories' },
      { name: 'Oem Powder', dose: '20 Sachets (powder) (Banana)', form: 'Powder', manufacturer: 'Indus Pharma' },
      { name: 'Valosal', dose: '20 Sachets (powder)', form: 'Powder', manufacturer: '(Not listed)' },
      { name: 'Sterilyte', dose: '500 mL', form: 'Oral Liquid', manufacturer: '(Not listed)' },
      { name: 'Werisol', dose: '20 Sachets (powder)', form: 'Powder', manufacturer: '(Not listed)' },
      { name: 'Teknosol', dose: '20 Sachets (powder)', form: 'Powder', manufacturer: '(Not listed)' },
      { name: 'Orasal-f', dose: 'Powder', form: 'Powder', manufacturer: 'Wilshire' }
    ],
    fullText: 'ORS is the mainstay treatment for dehydration, especially caused by acute diarrhea or vomiting. The WHO-approved formula uses a balanced mix of electrolytes and glucose to replace fluid and electrolyte losses. Mechanism of Action: The glucose in ORS facilitates the absorption of sodium and water in the small intestine via the sodium-glucose co-transport system, thereby correcting dehydration and acidosis. Main Indications: Dehydration from acute diarrhea in adults and children (all ages); Mild to moderate dehydration from vomiting or other fluid losses; Maintenance therapy to prevent dehydration in ongoing diarrhea; As an adjunct in febrile illnesses to prevent dehydration; In hyperemesis gravidarum (pregnancy). Available Formulations: Powder for reconstitution (most common), ready-to-drink liquid, and rice-based ORS (for persistent diarrhea).'
  },
  {
    id: 'penicillin-v',
    name: 'Penicillin V',
    drugClass: 'Penicillins (Narrow-spectrum)',
    mechanismOfAction: 'Binds to penicillin-binding proteins (PBPs) and inhibits cell wall synthesis, leading to cell lysis.',
    indications: [
      'Streptococcal pharyngitis (Strep throat)',
      'Pneumonia (mild-moderate)',
      'Otitis media',
      'Skin infections',
      'Dental infections',
      'Rheumatic fever prophylaxis',
      'Anthrax'
    ],
    adultDosing: 'Streptococcal Pharyngitis: 250-500 mg orally every 6 hours for 10 days. Rheumatic Fever Prophylaxis: 250 mg orally twice daily long-term. Pneumonia (Mild-moderate): 250-500 mg orally every 6 hours for 7-10 days. Skin/Soft Tissue Infections: 250-500 mg orally every 6 hours for 7-14 days.',
    pediatricDosing: 'Children (<=12 years): Streptococcal pharyngitis 125-250 mg orally every 6-8 hours for 10 days. Children (>12 years): Same as adult dose.',
    brands: [
      { name: 'Penvee', dose: '250 mg', form: 'Suspension (Forte)', manufacturer: 'Polyfine ChemPharma' },
      { name: 'Penisol V.K', dose: '125 mg, 250 mg', form: 'Syrup', manufacturer: '(Not listed)' },
      { name: 'Penicillin-V', dose: '125 mg, 250 mg', form: 'Tablet', manufacturer: 'Lisko' },
      { name: 'V-Cillin', dose: '250 mg, 500 mg', form: 'Tablet', manufacturer: 'Eli Lilly (International)' },
      { name: 'Veetids', dose: '250 mg, 500 mg', form: 'Tablet', manufacturer: 'Apotex (International)' }
    ],
    fullText: 'Narrow-spectrum penicillin. Active against streptococci, pneumococci (non-resistant), and some anaerobes. Used for Strep throat, pneumonia, otitis media, skin infections, dental infections, rheumatic fever prophylaxis, and anthrax.'
  },
  {
    id: 'penicillin-g',
    name: 'Penicillin G',
    drugClass: 'Penicillins (Narrow-spectrum)',
    mechanismOfAction: 'Binds to penicillin-binding proteins (PBPs) and inhibits cell wall synthesis, leading to cell lysis.',
    indications: [
      'Syphilis',
      'Bacterial endocarditis',
      'Meningitis',
      'Gas gangrene',
      'Rheumatic fever prophylaxis'
    ],
    adultDosing: 'Early Syphilis: 2.4 million units IM single dose. Rheumatic Fever Prophylaxis: 1.2 million units IM every 28 days long-term. Bacterial Endocarditis Prophylaxis: 2 million units IM single dose pre-procedure.',
    pediatricDosing: 'Children (<27 kg) Congenital syphilis: 50,000 units/kg IM single dose. Children (>27 kg): Same as adult, 1.2-2.4 million units IM single dose.',
    brands: [
      { name: 'Benzathine Penicillin', dose: '600,000 IU, 1.2 million IU, 2.4 million IU', form: 'Injection (IM)', manufacturer: 'Pfizer (international)' },
      { name: 'Penicillin G Procaine', dose: '400,000 IU, 800,000 IU', form: 'Injection (IM)', manufacturer: 'Various (generic)' },
      { name: 'Penicillin G Sodium', dose: '1 million IU, 5 million IU', form: 'Injection (IV/IM)', manufacturer: 'Various (generic)' },
      { name: 'Bicillin L-A', dose: '1.2 million IU, 2.4 million IU', form: 'Injection', manufacturer: 'Pfizer (innovator)' }
    ],
    fullText: 'Injectable narrow-spectrum penicillin. Used for Syphilis, bacterial endocarditis, meningitis, gas gangrene, and rheumatic fever prophylaxis.'
  },
  {
    id: 'amoxicillin',
    name: 'Amoxicillin',
    drugClass: 'Penicillins (Broad-spectrum)',
    mechanismOfAction: 'Binds to penicillin-binding proteins (PBPs) and inhibits cell wall synthesis, leading to cell lysis.',
    indications: [
      'Otitis media',
      'Sinusitis',
      'Pharyngitis',
      'Pneumonia',
      'UTI',
      'Typhoid',
      'H. pylori eradication (in combination)',
      'Skin/soft tissue infections'
    ],
    adultDosing: 'Pharyngitis/Tonsillitis: 500 mg every 12 hours OR 250 mg every 8 hours for 10 days. Pneumonia: 500-875 mg every 12 hours for 7-10 days. Sinusitis: 500 mg every 8-12 hours for 10-14 days. Uncomplicated UTI: 500 mg every 12 hours for 7 days. H. pylori Triple Therapy: 1 g twice daily for 14 days.',
    pediatricDosing: 'Neonates (<1 month): 20-30 mg/kg/day every 12 hours. Children (1 month-12 years, <40 kg): 20-40 mg/kg/day divided every 8-12 hours. Otitis Media: 80-90 mg/kg/day in 2 divided doses for 7-10 days. Children (>12 years): Same as adult.',
    brands: [
      { name: 'Amoxil', dose: '125 mg, 250 mg, 500 mg', form: 'Capsule, Drops', manufacturer: 'GlaxoSmithKline Pakistan Ltd.' },
      { name: 'Zeemox', dose: '125 mg/5 mL, 250 mg/5 mL', form: 'Syrup', manufacturer: 'Searle' },
      { name: 'Moxikind', dose: '125 mg/5 mL, 250 mg/5 mL', form: 'Syrup', manufacturer: '(Not listed)' },
      { name: 'Dispermox', dose: '250 mg, 500 mg', form: 'Dispersible Tablet', manufacturer: 'ZAFA Pharmaceuticals' },
      { name: 'Trimox', dose: '250 mg, 500 mg', form: 'Capsule', manufacturer: 'Bristol-Myers Squibb (international)' },
      { name: 'Moxypen', dose: '250 mg, 500 mg', form: 'Capsule', manufacturer: '(Various generic)' },
      { name: 'Amoxil Pediatric Drops', dose: '100 mg/mL', form: 'Oral Drops', manufacturer: 'GlaxoSmithKline' }
    ],
    fullText: 'Broad-spectrum penicillin. Active against streptococci, pneumococci, H. influenzae, E. coli, Salmonella, Shigella, and some Klebsiella. Used for Otitis media, sinusitis, pharyngitis, pneumonia, UTI, typhoid, H. pylori, skin/soft tissue infections.'
  },
  {
    id: 'co-amoxiclav',
    name: 'Co-amoxiclav (Amoxicillin + Clavulanic Acid)',
    drugClass: 'Penicillins (Extended-spectrum)',
    mechanismOfAction: 'Clavulanate is a beta-lactamase inhibitor, extending amoxicillin\'s spectrum to beta-lactamase-producing bacteria. Amoxicillin binds to PBPs and inhibits cell wall synthesis.',
    indications: [
      'Complicated sinusitis',
      'Otitis media (recurrent)',
      'Community-acquired pneumonia (CAP)',
      'Skin/soft tissue infections (abscesses, diabetic foot)',
      'UTI (complicated)',
      'Intra-abdominal infections'
    ],
    adultDosing: 'CAP: 875/125 mg every 12 hours for 7-10 days. Severe Sinusitis: 500/125 mg or 875/125 mg every 8-12 hours for 10-14 days. Skin/Soft Tissue Infection: 875/125 mg every 12 hours for 7-14 days. Complicated UTI: 875/125 mg every 12 hours for 7-14 days. IV (hospital): 1.2 g every 8-12 hours.',
    pediatricDosing: 'Children (<12 years, >40 kg): 20-40 mg/kg/day of amoxicillin component in 3 divided doses. Children (>12 years): Same as adult.',
    brands: [
      { name: 'Augmentin', dose: '375 mg (250+125), 625 mg (500+125), 875+125 mg', form: 'Tablet, Suspension, Injection', manufacturer: 'GlaxoSmithKline Pakistan Ltd.' },
      { name: 'Clavamox', dose: '625 mg', form: 'Tablet', manufacturer: '(Not listed)' },
      { name: 'Moxiclav', dose: '625 mg', form: 'Tablet', manufacturer: '(Not listed)' },
      { name: 'Clavomox', dose: '625 mg', form: 'Tablet', manufacturer: '(Not listed)' },
      { name: 'Moxclav', dose: '625 mg', form: 'Tablet', manufacturer: '(Not listed)' },
      { name: 'Symbiotic', dose: '375 mg, 625 mg', form: 'Tablet', manufacturer: '(Not listed)' },
      { name: 'Fulvox', dose: '375 mg, 625 mg', form: 'Tablet', manufacturer: '(Not listed)' },
      { name: 'Calamox', dose: '625 mg (500+125), Oral Drops 62.5 mg/mL', form: 'Tablet, Oral Drops, Suspension, Injection', manufacturer: 'Bosch Pharmaceuticals (Pvt.) Ltd.' },
      { name: 'Zamoclav', dose: '625 mg, 1 g (875+125)', form: 'Tablet, Suspension, Injection', manufacturer: 'ZAFA Pharmaceutical Laboratories (Pvt.) Ltd.' },
      { name: 'Comoxi', dose: '156.25 mg/5mL, 312.5 mg/5mL; 625 mg', form: 'Suspension, Tablet', manufacturer: 'Macter International Ltd.' },
      { name: 'Curam', dose: '375 mg, 625 mg', form: 'Tablet', manufacturer: '(Not listed)' }
    ],
    fullText: 'Extended-spectrum penicillin. Clavulanate is a beta-lactamase inhibitor, extending amoxicillin\'s spectrum to beta-lactamase-producing S. aureus, H. influenzae, E. coli, K. pneumoniae, B. fragilis, etc. Used for Complicated sinusitis, otitis media (recurrent), CAP, skin/soft tissue infections (e.g., abscesses, diabetic foot), UTI, intra-abdominal infections.'
  },
  {
    id: 'piperacillin-tazobactam',
    name: 'Piperacillin-Tazobactam',
    drugClass: 'Penicillins (Antipseudomonal)',
    mechanismOfAction: 'Tazobactam is a beta-lactamase inhibitor with activity against many beta-lactamases. Piperacillin inhibits bacterial cell wall synthesis. Very broad-spectrum including Pseudomonas aeruginosa.',
    indications: [
      'Hospital-acquired pneumonia (HAP)',
      'Complicated intra-abdominal infections',
      'Febrile neutropenia',
      'Sepsis',
      'Complicated UTI/pyelonephritis'
    ],
    adultDosing: 'Hospital-Acquired Pneumonia: 4.5 g IV every 6-8 hours for 7-14 days. Complicated Intra-Abdominal Infection: 3.375 g IV every 6 hours for 7-14 days. Febrile Neutropenia: 4.5 g IV every 6-8 hours for duration of neutropenia. Complicated UTI/Pyelonephritis: 3.375 g IV every 6 hours for 7-14 days.',
    pediatricDosing: 'Neonates (0-28 days): 80-100 mg/kg of piperacillin component IV every 12 hours. Infants & Children (1 month-12 years): 80-100 mg/kg of piperacillin component IV every 6-8 hours (max 4 g/dose). Children (>12 years): Same as adult.',
    brands: [
      { name: 'Taizon', dose: '4.5 g', form: 'Injection', manufacturer: 'Stallion Pharma' },
      { name: 'Tazopip', dose: '4.5 g', form: 'Injection', manufacturer: 'Lucky Core Industries' },
      { name: 'Tanzo', dose: '4.5 g', form: 'Injection', manufacturer: 'Bosch Pharmaceuticals' },
      { name: 'Piptaz', dose: '4.5 g', form: 'Injection', manufacturer: 'Evolution Pharma' },
      { name: 'Taztin', dose: '4.5 g', form: 'Injection', manufacturer: 'Martin Dow' },
      { name: 'Tacip', dose: '2.25 g, 4.5 g', form: 'Injection', manufacturer: 'Macter' },
      { name: 'Zosyn', dose: '2.25 g, 3.375 g, 4.5 g', form: 'Injection', manufacturer: 'Pfizer (innovator)' }
    ],
    fullText: 'Very broad-spectrum (antipseudomonal) penicillin. Active against Pseudomonas aeruginosa, Acinetobacter, ESBL-producing Enterobacteriaceae, and many anaerobes. Used for Hospital-acquired pneumonia, complicated intra-abdominal infections, febrile neutropenia, sepsis, complicated UTI. Hospital use only.'
  },
  {
    id: 'ibuprofen',
    name: 'Ibuprofen',
    drugClass: 'NSAIDs (Propionic Acid Derivatives)',
    mechanismOfAction: 'Propionic acid derivative; non-selective COX inhibitor (COX-1 and COX-2). Reduces prostaglandin synthesis, providing analgesic, anti-inflammatory, and antipyretic effects.',
    indications: [
      'Mild to moderate pain (headache, toothache, muscle pain)',
      'Rheumatoid arthritis and osteoarthritis',
      'Dysmenorrhea (painful menstruation)',
      'Fever',
      'Post-operative pain relief',
      'Pain and inflammation from minor injuries (sprains, strains)'
    ],
    adultDosing: 'Mild to moderate pain: 200-400 mg orally every 4-6 hours (max 1,200 mg OTC, up to 3,200 mg with medical supervision). Dysmenorrhea: 400 mg orally every 4-6 hours. Fever: 200-400 mg orally every 4-6 hours. Arthritis: 400-800 mg orally 3-4 times daily (max 3,200 mg under medical supervision).',
    pediatricDosing: 'Children (6 months to 12 years): Pain/Fever 5-10 mg/kg based on weight every 6-8 hours (max 40 mg/kg/day). Juvenile Idiopathic Arthritis: 30-40 mg/kg/day in 3-4 divided doses. Children (12+ years): Same as adult.',
    brands: [
      { name: 'Biudol', dose: '100 mg/5 mL', form: 'Suspension', manufacturer: 'Standpharm Pakistan' },
      { name: 'Brufen', dose: '200 mg, 400 mg, 600 mg', form: 'Tablet, Suspension', manufacturer: 'Abbott Laboratories (Pakistan)' },
      { name: 'Fenbro Plus', dose: '200 mg/5 mL', form: 'Suspension', manufacturer: 'Stanley Pharma Peshawar' },
      { name: 'Arinac Forte', dose: '400 mg (combination with Paracetamol 325 mg)', form: 'Tablet', manufacturer: 'Abbott Laboratories (Pakistan) Ltd' },
      { name: 'Flurest', dose: '200 mg, 400 mg', form: 'Tablet, Suspension', manufacturer: '(Not specified)' },
      { name: 'Enac', dose: '100 mg/5 mL, 200 mg/5 mL', form: 'Suspension', manufacturer: 'Eros Pharmaceuticals' }
    ],
    fullText: 'Propionic acid derivative; non-selective COX inhibitor. Well-known for its analgesic, anti-inflammatory, and antipyretic properties. Used for mild to moderate pain, inflammation in rheumatoid arthritis and osteoarthritis, dysmenorrhea, fever, and post-operative pain relief.'
  },
  {
    id: 'diclofenac',
    name: 'Diclofenac',
    drugClass: 'NSAIDs (Acetic Acid Derivatives)',
    mechanismOfAction: 'Phenylacetic acid derivative; non-selective COX inhibitor. A potent NSAID with strong analgesic and anti-inflammatory effects, available in various formulations.',
    indications: [
      'Rheumatoid arthritis, osteoarthritis, and ankylosing spondylitis',
      'Acute gout',
      'Acute musculo-skeletal disorders (frozen shoulder, tendinitis, tenosynovitis, bursitis)',
      'Painful conditions from trauma (fractures, low back pain, sprains, strains, dislocation)',
      'Orthopedic, dental, and minor surgery',
      'Dysmenorrhea',
      'Acute migraine attacks'
    ],
    adultDosing: 'Osteoarthritis/Rheumatoid Arthritis: 50 mg orally 2-3 times daily (max 150 mg). Ankylosing Spondylitis: 50 mg twice daily. Acute Pain: 50-100 mg orally 1-2 times daily (max 150 mg). Acute Gout: 50 mg orally 3 times daily (max 150 mg). Menstrual Cramps: 50 mg 3 times daily. Migraine: 50 mg oral solution single dose.',
    pediatricDosing: 'Children (3 years and older): Juvenile Idiopathic Arthritis 2-3 mg/kg/day in divided doses for up to 4 weeks.',
    brands: [
      { name: 'Caflam', dose: '50 mg', form: 'Tablet (Diclofenac Potassium)', manufacturer: 'Novartis Pharma Pakistan' },
      { name: 'Dicloran Disperlet', dose: '50 mg', form: 'Dispersible Tablet (Diclofenac Sodium)', manufacturer: 'Sami Pharmaceuticals' },
      { name: 'Volden Fort', dose: '50 mg', form: 'Tablet (Diclofenac Sodium)', manufacturer: 'Rotex Pharma (Pvt.) Ltd' },
      { name: 'Befilam', dose: '75 mg', form: 'Tablet (Diclofenac Potassium)', manufacturer: 'Batala Pharmaceuticals' },
      { name: 'Velflex', dose: '100 mg', form: 'Tablet (Diclofenac Potassium)', manufacturer: 'Ray Pharma (Pvt) Ltd' },
      { name: 'Phlogin', dose: '50 mg', form: 'Capsule (Diclofenac Sodium)', manufacturer: 'Brookes Pharma (Pvt.) Ltd.' },
      { name: 'Dicloned-K', dose: '75 mg', form: 'Tablet (Diclofenac Potassium)', manufacturer: '(Not specified)' }
    ],
    fullText: 'Phenylacetic acid derivative; non-selective COX inhibitor. A potent NSAID with strong analgesic and anti-inflammatory effects, available in various formulations. Used for rheumatoid arthritis, osteoarthritis, ankylosing spondylitis, acute gout, musculo-skeletal disorders, trauma, surgery, dysmenorrhea, and migraine.'
  },
  {
    id: 'naproxen',
    name: 'Naproxen',
    drugClass: 'NSAIDs (Propionic Acid Derivatives)',
    mechanismOfAction: 'Propionic acid derivative; non-selective COX inhibitor. A long-acting NSAID, often used for chronic conditions like arthritis.',
    indications: [
      'Acute pain (headaches, toothaches, post-surgical pain, backaches)',
      'Chronic pain and inflammation from arthritis, ankylosing spondylitis, and gout',
      'Menstrual cramps',
      'Fever reduction',
      'Migraine',
      'Musculoskeletal disorders'
    ],
    adultDosing: 'Acute Pain (general): 500 mg orally twice daily (max 1,000 mg). Osteoarthritis: 500 mg orally twice daily (max 1,000 mg). Rheumatoid Arthritis (initial): 1,000 mg orally morning and evening for first day, then 500 mg twice daily (max 2,000 mg day 1). Ankylosing Spondylitis: 550-1,000 mg orally twice daily (max 1,100-2,000 mg). Bursitis/Tendonitis: 550 mg orally twice daily. Menstrual Cramps: 550 mg orally initially, then 550 mg every 6-8 hours as needed (max 1,650 mg).',
    pediatricDosing: 'Children (2 years and older): Juvenile Idiopathic Arthritis 10 mg/kg/day in 2 divided doses. Fever: 5 mg/kg 2 times daily. Mild to moderate pain: 5 mg/kg 2 times daily.',
    brands: [
      { name: 'Flexin', dose: '250 mg, 500 mg', form: 'Tablet (Naproxen)', manufacturer: 'Abbott Laboratories (Pakistan) Ltd' },
      { name: 'Neoprox', dose: '500 mg', form: 'Tablet (Naproxen)', manufacturer: 'Martin Dow' },
      { name: 'Torex-IR', dose: '550 mg', form: 'Tablet (Naproxen Sodium)', manufacturer: 'Platinum Pharma' },
      { name: 'Dolonap', dose: '250 mg, 500 mg', form: 'Tablet, Enteric-coated (EC) Tablet', manufacturer: 'Platinum Pharma' },
      { name: 'Nepiox', dose: '550 mg', form: 'Tablet (Naproxen Sodium)', manufacturer: 'Rasco Pharma' },
      { name: 'Dolorex', dose: '550 mg', form: 'Tablet (Naproxen)', manufacturer: 'Angelini' },
      { name: 'Alcuflex', dose: '550 mg', form: 'Tablet (Naproxen)', manufacturer: '(Not specified)' }
    ],
    fullText: 'Propionic acid derivative; non-selective COX inhibitor. A long-acting NSAID, often used for chronic conditions like arthritis. Used for acute pain, chronic pain and inflammation from arthritis, ankylosing spondylitis, gout, menstrual cramps, fever, migraines, and musculoskeletal disorders.'
  },
  {
    id: 'mefenamic-acid',
    name: 'Mefenamic Acid',
    drugClass: 'NSAIDs (Fenamates)',
    mechanismOfAction: 'Anthranilic acid derivative; non-selective COX inhibitor. Particularly effective for dysmenorrhea (menstrual pain) and other conditions involving prostaglandin-mediated pain.',
    indications: [
      'Dysmenorrhea (period pain)',
      'Mild to moderate pain (headaches, toothaches, post-operative)',
      'Pain and inflammation in osteoarthritis and musculoskeletal disorders',
      'Fever reduction',
      'Alternative to other NSAIDs'
    ],
    adultDosing: 'Mild to moderate acute pain: 500 mg orally every 6-8 hours as needed (max 1,500 mg for up to 7 days). Dysmenorrhea: 500 mg orally initially, then 250 mg every 6 hours as needed (max 1,500 mg for up to 3 days). Chronic inflammatory pain: 250-500 mg orally 3-4 times daily (max 1,500 mg).',
    pediatricDosing: 'Children (5 years and older): Mild to moderate pain 250 mg orally every 6-8 hours. Dysmenorrhea: 250 mg orally initially, then 125 mg every 6 hours as needed up to 3 days.',
    brands: [
      { name: 'Ponstan Forte', dose: '500 mg', form: 'Tablet', manufacturer: 'LCI Pakistan Ltd' },
      { name: 'Zopan DS', dose: '100 mg/mL, 500 mg', form: 'Suspension, Tablet', manufacturer: 'Pharmatec Pakistan (Pvt.) Ltd' },
      { name: 'Mefnac DS', dose: '250 mg, 500 mg', form: 'Tablet, Suspension', manufacturer: 'Efroze Chemical Industries (Pvt.) Ltd' },
      { name: 'Panamic Forte', dose: '500 mg', form: 'Tablet', manufacturer: 'Lisko Pakistan (Pvt) Ltd' },
      { name: 'Stalfamine', dose: '50 mg/5 mL', form: 'Suspension', manufacturer: '(Not specified)' },
      { name: 'Unimet', dose: '50 mg/5 mL', form: 'Suspension', manufacturer: '(Not specified)' },
      { name: 'Kamic', dose: '250 mg', form: 'Capsule', manufacturer: '(Not specified)' }
    ],
    fullText: 'Anthranilic acid derivative; non-selective COX inhibitor. Particularly effective for dysmenorrhea (menstrual pain) and other conditions involving prostaglandin-mediated pain. Used for period pain, mild to moderate pain, osteoarthritis, musculoskeletal disorders, and fever.'
  },
  {
    id: 'celecoxib',
    name: 'Celecoxib',
    drugClass: 'NSAIDs (COX-2 Inhibitors)',
    mechanismOfAction: 'Selective COX-2 inhibitor. Specifically targets COX-2, reducing inflammation while minimizing gastrointestinal side effects.',
    indications: [
      'Osteoarthritis (OA)',
      'Rheumatoid arthritis (RA)',
      'Ankylosing spondylitis',
      'Juvenile rheumatoid arthritis (JRA) in patients 2 years and older',
      'Acute pain (especially post-operative)',
      'Primary dysmenorrhea',
      'Reduction of adenomatous colorectal polyps in FAP (adjunct)'
    ],
    adultDosing: 'Osteoarthritis: 200 mg orally once daily OR 100 mg twice daily. Rheumatoid Arthritis: 100-200 mg orally twice daily. Ankylosing Spondylitis: 200 mg orally once daily, may increase to 400 mg. Acute Pain/Dysmenorrhea: 400 mg orally initially, then 200 mg twice daily short-term.',
    pediatricDosing: 'Children (2+ years, >10 kg to <25 kg): Juvenile Rheumatoid Arthritis 50 mg orally twice daily. Children (2+ years, >25 kg): JRA 100 mg orally twice daily.',
    brands: [
      { name: 'Celbexx', dose: '100 mg, 200 mg', form: 'Capsule', manufacturer: 'Getz Pharma (Pvt.) Ltd' },
      { name: 'COXIGET', dose: '200 mg, 400 mg', form: 'Capsule', manufacturer: 'Getz Pharma (Pvt.) Limited' },
      { name: 'C-Lixo', dose: '200 mg', form: 'Capsule', manufacturer: 'Amros Pharmaceuticals' },
      { name: 'Moveryl', dose: '100 mg, 200 mg', form: 'Capsule', manufacturer: 'Sami Pharma' },
      { name: 'Celstar', dose: '200 mg', form: 'Capsule', manufacturer: 'Pharmatec Pakistan (Pvt.) Ltd' },
      { name: 'Artiflex', dose: '200 mg', form: 'Capsule', manufacturer: '(Not specified)' },
      { name: 'Gelcoxx', dose: '400 mg', form: 'Capsule', manufacturer: 'Getz Pharma Pvt. Ltd' }
    ],
    fullText: 'Selective COX-2 inhibitor. Specifically targets COX-2, reducing inflammation while minimizing gastrointestinal side effects. Used for osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, juvenile rheumatoid arthritis, acute pain, dysmenorrhea, and FAP.'
  },
  {
    id: 'etoricoxib',
    name: 'Etoricoxib',
    drugClass: 'NSAIDs (COX-2 Inhibitors)',
    mechanismOfAction: 'Selective COX-2 inhibitor. A potent, once-daily selective COX-2 inhibitor with a long duration of action.',
    indications: [
      'Osteoarthritis (OA)',
      'Rheumatoid arthritis (RA)',
      'Ankylosing spondylitis',
      'Acute pain (including post-dental extraction)',
      'Primary dysmenorrhea',
      'Chronic pain conditions',
      'Acute gouty arthritis',
      'Musculoskeletal pain and inflammation'
    ],
    adultDosing: 'Osteoarthritis: 60 mg orally once daily (max 60 mg). Rheumatoid Arthritis: 90 mg orally once daily (max 90 mg). Ankylosing Spondylitis: 90 mg orally once daily (max 90 mg). Acute Pain: 90-120 mg orally once daily (max 120 mg). Dysmenorrhea: 60 mg orally once daily (max 60 mg). Acute Gouty Arthritis: 120 mg orally once daily for a short duration (max 120 mg, up to 8 days).',
    pediatricDosing: 'Safety and efficacy in pediatric patients have not been established.',
    brands: [
      { name: 'Starcox', dose: '60 mg, 90 mg, 120 mg', form: 'Tablet', manufacturer: 'Getz Pharma (Pvt.) Ltd' },
      { name: 'Gencox', dose: '60 mg, 90 mg', form: 'Tablet', manufacturer: 'Mcolson/Robinson Pharma' },
      { name: 'Berica', dose: '60 mg, 120 mg', form: 'Tablet', manufacturer: 'Fazul Ellahie (Pvt.) Ltd' },
      { name: 'Hixib', dose: '60 mg', form: 'Tablet', manufacturer: 'Cell Laboratories (Pvt.) Ltd' },
      { name: 'Etiroxx', dose: '90 mg, 120 mg', form: 'Tablet', manufacturer: '(Not specified)' },
      { name: 'Coxwin', dose: '60 mg', form: 'Tablet', manufacturer: '(Not specified)' },
      { name: 'Etorid', dose: '60 mg', form: 'Tablet', manufacturer: '(Not specified)' }
    ],
    fullText: 'Selective COX-2 inhibitor. A potent, once-daily selective COX-2 inhibitor with a long duration of action. Used for osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, acute pain, dysmenorrhea, chronic pain, acute gouty arthritis, and musculoskeletal pain.'
  },
  {
    id: 'piroxicam',
    name: 'Piroxicam',
    drugClass: 'NSAIDs (Oxicams)',
    mechanismOfAction: 'Enolic acid derivative (oxicam); non-selective COX inhibitor. A long-acting NSAID with a slow onset but once-daily dosing, used for chronic inflammatory conditions.',
    indications: [
      'Rheumatoid arthritis and osteoarthritis',
      'Acute pain and swelling after surgery or injury',
      'Ankylosing spondylitis',
      'Menstrual pain and discomfort',
      'Migraine headaches',
      'Musculoskeletal conditions including soft tissue disorders'
    ],
    adultDosing: 'Osteoarthritis: 20 mg orally once daily (may start with 40 mg/day for first 2 days). Rheumatoid Arthritis: 20 mg orally once daily (may start with 40 mg/day for first 2 days). Ankylosing Spondylitis: 20 mg orally once daily. Acute Pain: 40 mg orally once daily for first 2 days, then 20 mg once daily short-term. Acute Gout: 40 mg once daily for first 2 days, then 20 mg once daily up to 5 days. Dysmenorrhea: 40 mg once daily for first 2 days, then 20 mg once daily short-term.',
    pediatricDosing: 'Not routinely recommended for pediatric use.',
    brands: [
      { name: 'Feldene', dose: '10 mg, 20 mg', form: 'Capsule, Tablet, Gel', manufacturer: 'Pfizer Pakistan Ltd' },
      { name: 'Bless', dose: '20 mg', form: 'Tablet', manufacturer: 'Foray Pharmaceuticals' },
      { name: 'Pcam', dose: '20 mg', form: 'Tablet, Gel, Injection', manufacturer: '(Not specified)' },
      { name: 'Curadec', dose: '20 mg', form: 'Capsule', manufacturer: 'Mcolson Research Laboratories (Pvt) Ltd' },
      { name: 'Cyclodex', dose: '20 mg', form: 'Tablet (Piroxicam-beta-Cyclodextrin)', manufacturer: 'Platinum Pharma' },
      { name: 'Betoxi', dose: '20 mg', form: 'Tablet (Piroxicam-beta-cyclodextrin)', manufacturer: '(Not specified)' },
      { name: 'Aflamic', dose: '20 mg', form: 'Tablet (Piroxicam with Beta Cyclodextrin)', manufacturer: '(Not specified)' }
    ],
    fullText: 'Enolic acid derivative (oxicam); non-selective COX inhibitor. A long-acting NSAID with a slow onset but once-daily dosing, used for chronic inflammatory conditions. Used for rheumatoid arthritis, osteoarthritis, acute pain, ankylosing spondylitis, menstrual pain, migraine, and musculoskeletal conditions.'
  }
];
