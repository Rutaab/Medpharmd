// data/categories.js
export const categories = [
  {
    id: 'nsaids',
    name: 'NSAIDs',
    description: 'Non-steroidal anti-inflammatory drugs that reduce pain, decrease fever, and prevent blood clots.',
    icon: 'medical_services',
    drugCount: 54,
    exampleDrugs: ['Ibuprofen', 'Naproxen'],
    subCategories: [
      { id: 'salicylates', name: 'Salicylates', description: 'Derived from salicylic acid. Include aspirin and non-acetylated salicylates.', drugCount: 6 },
      { id: 'propionic-acids', name: 'Propionic Acid Derivatives', description: 'Commonly used NSAIDs with propionic acid structure. Include ibuprofen and naproxen.', drugCount: 11 },
      { id: 'acetic-acids', name: 'Acetic Acid Derivatives', description: 'NSAIDs with acetic acid structure. Include diclofenac and ketorolac.', drugCount: 11 },
      { id: 'fenamates', name: 'Fenamates (Anthranilic Acid)', description: 'Anthranilic acid derivatives with prostaglandin receptor antagonism.', drugCount: 6 },
      { id: 'oxicams', name: 'Oxicams', description: 'Enolic acid NSAIDs with long half-life for once-daily dosing.', drugCount: 4 },
      { id: 'coxibs', name: 'COX-2 Inhibitors (Coxibs)', description: 'Selective COX-2 inhibitors with reduced GI toxicity.', drugCount: 8 },
      { id: 'pyrazolones', name: 'Pyrazolones', description: 'Older class with potent analgesic properties but significant safety concerns.', drugCount: 5 },
      { id: 'others', name: 'Other NSAIDs', description: 'Miscellaneous NSAIDs with distinct chemical structures.', drugCount: 3 }
    ]
  },
  {
    id: 'antibiotics',
    name: 'Antibiotics',
    description: 'Medications used to treat bacterial infections by inhibiting the growth of or destroying bacteria.',
    icon: 'biotech',
    drugCount: 60,
    exampleDrugs: ['Amoxicillin', 'Azithromycin'],
    subCategories: [
      { id: 'penicillins', name: 'Penicillins', description: 'Beta-lactam antibiotics containing a thiazolidine ring. Inhibit bacterial cell wall synthesis. First-line for many common infections.', drugCount: 10 },
      { id: 'cephalosporins-1', name: 'Cephalosporins (1st Gen)', description: 'First-generation cephalosporins with activity against Gram-positive organisms.', drugCount: 3 },
      { id: 'cephalosporins-2', name: 'Cephalosporins (2nd Gen)', description: 'Second-generation cephalosporins with extended Gram-negative coverage.', drugCount: 4 },
      { id: 'cephalosporins-3', name: 'Cephalosporins (3rd Gen)', description: 'Third-generation cephalosporins with broad-spectrum Gram-negative activity.', drugCount: 7 },
      { id: 'cephalosporins-4', name: 'Cephalosporins (4th/5th Gen)', description: 'Fourth and fifth-generation cephalosporins with extended Gram-positive and anti-MRSA coverage.', drugCount: 2 },
      { id: 'macrolides', name: 'Macrolides', description: 'Inhibit bacterial protein synthesis by binding to 50S ribosomal subunit. Active against respiratory and atypical pathogens.', drugCount: 5 },
      { id: 'fluoroquinolones', name: 'Fluoroquinolones', description: 'Inhibit bacterial DNA gyrase and topoisomerase IV. Broad-spectrum with excellent tissue penetration.', drugCount: 7 },
      { id: 'tetracyclines', name: 'Tetracyclines', description: 'Inhibit bacterial protein synthesis by binding to 30S ribosomal subunit. Broad-spectrum activity.', drugCount: 5 },
      { id: 'aminoglycosides', name: 'Aminoglycosides', description: 'Inhibit bacterial protein synthesis. Potent Gram-negative coverage. Require monitoring of renal function.', drugCount: 5 },
      { id: 'carbapenems', name: 'Carbapenems', description: 'Broadest-spectrum beta-lactams. Reserved for serious infections, MDR Gram-negative, and mixed infections.', drugCount: 4 },
      { id: 'others', name: 'Other Antibiotics', description: 'Miscellaneous antibiotics including glycopeptides, oxazolidinones, nitroimidazoles, and lipopeptides.', drugCount: 8 }
    ]
  },
  {
    id: 'antipyretics',
    name: 'Antipyretics',
    description: 'Substances that reduce fever by causing the hypothalamus to override a prostaglandin-induced increase in temperature.',
    icon: 'thermostat',
    drugCount: 22,
    exampleDrugs: ['Acetaminophen', 'Metamizole'],
    subCategories: [
      { id: 'para-aminophenols', name: 'Para-aminophenol Derivatives', description: 'COX inhibitors primarily acting in the CNS. Standard first-line antipyretics with excellent safety profile.', drugCount: 6 },
      { id: 'pyrazolone-antipyretics', name: 'Pyrazolone Antipyretics', description: 'Potent antipyretic and analgesic agents with distinct safety profiles. Widely used in many regions globally.', drugCount: 4 },
      { id: 'combination-products', name: 'Combination Antipyretic Products', description: 'Fixed-dose combinations containing antipyretics with decongestants, antihistamines, antitussives, or other analgesics.', drugCount: 8 },
      { id: 'other-antipyretics', name: 'Other Antipyretics', description: 'Miscellaneous antipyretic agents including topical and lozenge forms for fever and associated symptoms.', drugCount: 4 }
    ]
  },
  {
    id: 'analgesics',
    name: 'Analgesics',
    description: 'A group of drugs used to achieve analgesia, relief from pain, covering a range of opioid and non-opioid compounds.',
    icon: 'healing',
    drugCount: 89,
    exampleDrugs: ['Morphine', 'Hydromorphone'],
    subCategories: [
      { id: 'opioids-strong', name: 'Strong Opioid Agonists', description: 'Full mu-opioid receptor agonists used for moderate-to-severe pain. Includes morphine, hydromorphone, fentanyl, and oxycodone.', drugCount: 11 },
      { id: 'opioids-moderate', name: 'Moderate Opioid Agonists', description: 'Weak-to-moderate mu-opioid agonists for mild-to-moderate pain. Includes codeine, tramadol, hydrocodone, and tapentadol.', drugCount: 8 },
      { id: 'agonist-antagonists', name: 'Opioid Agonist-Antagonists', description: 'Mixed opioid receptor agents with partial agonist or antagonist activity. Ceiling effect for respiratory depression.', drugCount: 5 },
      { id: 'opioid-antagonists', name: 'Opioid Antagonists', description: 'Competitive antagonists at mu, kappa, and delta opioid receptors. Used for overdose reversal and addiction management.', drugCount: 3 },
      { id: 'central-analgesics', name: 'Non-Opioid Central Analgesics', description: 'Centrally acting analgesics with non-opioid mechanisms including monoamine reuptake inhibition and calcium channel modulation.', drugCount: 4 },
      { id: 'adjuvant-antidepressants', name: 'Adjuvant Analgesics (Antidepressants)', description: 'Antidepressants used for neuropathic pain management through serotonin and norepinephrine reuptake inhibition.', drugCount: 7 },
      { id: 'adjuvant-anticonvulsants', name: 'Adjuvant Analgesics (Anticonvulsants)', description: 'Anticonvulsants used for neuropathic pain through calcium channel modulation and sodium channel blockade.', drugCount: 7 },
      { id: 'topical-analgesics', name: 'Topical Analgesics', description: 'Locally applied analgesic agents including local anesthetics, capsaicin, and topical NSAIDs for localized pain.', drugCount: 8 },
      { id: 'antimigraine', name: 'Antimigraine Agents', description: 'Agents specifically for migraine abortive and prophylactic therapy including triptans, ergot alkaloids, and CGRP antagonists.', drugCount: 12 },
      { id: 'combination-analgesics', name: 'Combination Analgesics', description: 'Fixed-dose combinations of analgesics with adjuvant agents including opioid-combination and multi-mechanism products.', drugCount: 12 },
      { id: 'other-analgesics', name: 'Other Analgesics', description: 'Miscellaneous analgesic agents including cannabinoids, ketamine, and emerging pain therapies.', drugCount: 12 }
    ]
  },
  {
    id: 'antivirals',
    name: 'Antivirals',
    description: 'Agents used specifically for treating viral infections, inhibiting development instead of destroying the pathogen.',
    icon: 'coronavirus',
    drugCount: 41,
    exampleDrugs: ['Oseltamivir', 'Acyclovir'],
    subCategories: [
      { id: 'anti-herpes', name: 'Anti-Herpes Agents', description: 'Nucleoside analogues targeting herpes simplex and varicella-zoster virus DNA polymerase. First-line for HSV and VZV infections.', drugCount: 5 },
      { id: 'anti-influenza', name: 'Anti-Influenza Agents', description: 'Neuraminidase inhibitors and cap-dependent endonuclease inhibitors targeting influenza A and B. Seasonal and pandemic use.', drugCount: 5 },
      { id: 'anti-hiv-nrti', name: 'Anti-HIV (NRTIs)', description: 'Nucleoside/nucleotide reverse transcriptase inhibitors that chain-terminate HIV reverse transcription. Backbone of most ART regimens.', drugCount: 6 },
      { id: 'anti-hiv-nnrti', name: 'Anti-HIV (NNRTIs)', description: 'Non-nucleoside reverse transcriptase inhibitors that bind allosterically to HIV RT. Potent but with low resistance barrier.', drugCount: 4 },
      { id: 'anti-hiv-protease', name: 'Anti-HIV (Protease Inhibitors)', description: 'HIV protease inhibitors blocking viral maturation. Often boosted with ritonavir or cobicistat for enhanced pharmacokinetics.', drugCount: 4 },
      { id: 'anti-hiv-integrase', name: 'Anti-HIV (Integrase Inhibitors)', description: 'HIV integrase strand transfer inhibitors (INSTIs) blocking viral DNA integration. Preferred first-line class due to tolerability.', drugCount: 3 },
      { id: 'anti-hcv', name: 'Anti-HCV Agents', description: 'Direct-acting antivirals against hepatitis C virus including NS5A, NS5B, and NS3/4A inhibitors. Curative regimens available.', drugCount: 5 },
      { id: 'anti-cmv', name: 'Anti-CMV Agents', description: 'Agents targeting cytomegalovirus DNA polymerase and terminase complex. Used in immunocompromised patients and transplant recipients.', drugCount: 4 },
      { id: 'other-antivirals', name: 'Other Antivirals', description: 'Miscellaneous antiviral agents including broad-spectrum agents, ribavirin, and emerging antiviral therapies.', drugCount: 5 }
    ]
  },
  {
    id: 'cardiovascular',
    name: 'Cardiovascular',
    description: 'Medications affecting the heart and blood vessels, including beta-blockers, calcium channel blockers, ACE inhibitors, and ARBs for hypertension, heart failure, and arrhythmias.',
    icon: 'favorite',
    drugCount: 22,
    exampleDrugs: ['Amlodipine', 'Losartan'],
    subCategories: [
      { id: 'beta-blockers', name: 'Beta-Blockers', description: 'Competitive antagonists of beta-adrenergic receptors used for HTN, angina, heart failure, and arrhythmias.', drugCount: 6 },
      { id: 'calcium-channel-blockers', name: 'Calcium Channel Blockers', description: 'Inhibit calcium influx into cardiac and vascular smooth muscle; used for HTN, angina, and arrhythmias.', drugCount: 4 },
      { id: 'ace-inhibitors', name: 'ACE Inhibitors', description: 'Inhibit angiotensin-converting enzyme; first-line for HTN, heart failure, and diabetic nephropathy.', drugCount: 5 },
      { id: 'arbs', name: 'Angiotensin II Receptor Blockers', description: 'Block AT1 receptors; alternative to ACEi with better tolerability profile.', drugCount: 7 }
    ]
  },
  {
    id: 'antiepileptics',
    name: 'Antiepileptics',
    description: 'Medications used for the management of epileptic seizures, with broad-spectrum and narrow-spectrum agents available.',
    icon: 'bolt',
    drugCount: 9,
    exampleDrugs: ['Sodium Valproate', 'Levetiracetam'],
    subCategories: [
      { id: 'antiepileptics', name: 'Antiepileptic Drugs', description: 'AEDs for management of various seizure types including focal, generalized, and absence seizures.', drugCount: 9 }
    ]
  },
  {
    id: 'emergency-care',
    name: 'Emergency & Critical Care',
    description: 'Life-saving medications used in emergency and critical care settings for resuscitation, anaphylaxis, and acute cardiac support.',
    icon: 'local_hospital',
    drugCount: 7,
    exampleDrugs: ['Adrenaline', 'Furosemide'],
    subCategories: [
      { id: 'emergency-care', name: 'Emergency Drugs', description: 'Immediate-use medications for cardiac arrest, anaphylaxis, acute pulmonary edema, and shock.', drugCount: 7 }
    ]
  },
  {
    id: 'respiratory-allergy',
    name: 'Respiratory & Allergy',
    description: 'Drugs for respiratory conditions including bronchodilators, antihistamines, and corticosteroids for asthma, COPD, and allergic disorders.',
    icon: 'air',
    drugCount: 3,
    exampleDrugs: ['Salbutamol', 'Prednisolone'],
    subCategories: [
      { id: 'bronchodilators', name: 'Bronchodilators', description: 'Beta-2 agonists and other agents for bronchodilation in asthma and COPD.', drugCount: 1 },
      { id: 'antihistamines', name: 'Antihistamines', description: 'H1 receptor antagonists for allergic conditions including rhinitis and urticaria.', drugCount: 1 },
      { id: 'corticosteroids', name: 'Systemic Corticosteroids', description: 'Potent anti-inflammatory and immunosuppressant agents for severe allergic and inflammatory conditions.', drugCount: 1 }
    ]
  }
];