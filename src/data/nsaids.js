// data/nsaids.js
export const nsaids = [
  {
    "id": "ibuprofen",
    "categoryId": "nsaids",
    "genericName": "Ibuprofen",
    "brandNames": "Advil, Motrin, Brufen, Ibugesic, Combiflam",
    "description": "Propionic acid derivative - Non-selective COX-1/2 inhibitor. Widely available globally and in Pakistan.",
    "status": "OTC + Rx",
    "isCommonlyPrescribed": true,
    "isOTCAndRx": true,
    "primaryIndication": "Pain and Inflammation",
    "dosageForm": "Oral Tablet/Liquid/Injection",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE (OTC)",
        "value": "200-400 mg q4-6h",
        "sub": "Max: 1,200 mg/day"
      },
      {
        "label": "STANDARD ADULT DOSE (RX)",
        "value": "400-800 mg q6-8h",
        "sub": "Max: 3,200 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "~2 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, fever, dysmenorrhea, headache, dental pain, migraine",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Advil",
        "form": "Tablets, Liqui-Gels, Suspension",
        "strengths": "200 mg (OTC)",
        "manufacturer": "Haleon (GSK)",
        "region": "USA, UK, Europe, Global"
      },
      {
        "name": "Motrin IB",
        "form": "Tablets, Caplets",
        "strengths": "200 mg (OTC)",
        "manufacturer": "Kenvue (J&J)",
        "region": "USA, Canada"
      },
      {
        "name": "Brufen",
        "form": "Tablets, Syrup, Granules",
        "strengths": "200 mg, 400 mg, 600 mg",
        "manufacturer": "Abbott Labs",
        "region": "UK, Europe, Asia, India"
      },
      {
        "name": "Ibugesic",
        "form": "Tablets, Suspension, Injection",
        "strengths": "200 mg, 400 mg, 600 mg",
        "manufacturer": "Cipla",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Nurofen",
        "form": "Tablets, Gels, Suspension",
        "strengths": "200 mg, 400 mg; 5% gel",
        "manufacturer": "Reckitt Benckiser",
        "region": "UK, Europe, Australia"
      },
      {
        "name": "Caldolor",
        "form": "IV injection",
        "strengths": "400 mg/4 mL, 800 mg/8 mL",
        "manufacturer": "Cumberland Pharma",
        "region": "USA, Europe"
      },
      {
        "name": "Combiflam",
        "form": "Tablets, Suspension",
        "strengths": "400 mg + 325 mg paracetamol",
        "manufacturer": "Sanofi, Cipla",
        "region": "Pakistan, India"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, Rivaroxaban)",
        "effect": "Increased GI bleeding risk.",
        "severity": "Major"
      },
      {
        "drugClass": "SSRIs (Sertraline, Fluoxetine)",
        "effect": "Increased upper GI bleeding risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Glucocorticoids (Prednisone)",
        "effect": "Increased risk of GI ulceration.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors/ARBs",
        "effect": "Reduced antihypertensive effect.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics (Furosemide)",
        "effect": "Reduced natriuretic effect.",
        "severity": "Minor"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance, increased toxicity.",
        "severity": "Moderate"
      }
    ],
    "warning": "Max OTC: 10 days pain, 3 days fever. Take with food. CV risk at high doses. Avoid in third trimester.",
    "subCategoryId": "propionic-acids"
  },
  {
    "id": "naproxen",
    "categoryId": "nsaids",
    "genericName": "Naproxen",
    "brandNames": "Aleve, Naprosyn, Anaprox, Synflex, Midol, Naprosyn E",
    "description": "Propionic acid derivative with longer half-life for extended relief.",
    "status": "OTC + Rx",
    "isCommonlyPrescribed": true,
    "isOTCAndRx": true,
    "primaryIndication": "Pain and Inflammation",
    "specialField": {
      "label": "Duration",
      "value": "Long-acting (12h)"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE (OTC)",
        "value": "220 mg q8-12h",
        "sub": "Max: 660 mg/day"
      },
      {
        "label": "STANDARD ADULT DOSE (RX)",
        "value": "250-500 mg BID",
        "sub": "Max: 1,500 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "12-17 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, AS, tendonitis, gout, migraines, dysmenorrhea",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Aleve",
        "form": "Tablets, Caplets, Gelcaps",
        "strengths": "220 mg (OTC)",
        "manufacturer": "Bayer",
        "region": "USA, Canada, Global"
      },
      {
        "name": "Naprosyn",
        "form": "Tablets, Suspension, DR Tablets",
        "strengths": "250 mg, 375 mg, 500 mg (Rx)",
        "manufacturer": "Atnahs Pharma",
        "region": "USA, Europe, India"
      },
      {
        "name": "Anaprox/DS",
        "form": "Tablets",
        "strengths": "275 mg, 550 mg",
        "manufacturer": "Roche",
        "region": "USA, Canada, Europe"
      },
      {
        "name": "Synflex",
        "form": "Tablets, Liquid",
        "strengths": "275 mg, 550 mg",
        "manufacturer": "Apothecon",
        "region": "USA, Canada, Asia"
      },
      {
        "name": "Midol Extended Relief",
        "form": "Tablets",
        "strengths": "220 mg",
        "manufacturer": "Bayer",
        "region": "USA, Canada"
      },
      {
        "name": "Naprosyn E",
        "form": "Tablets",
        "strengths": "500 mg gastro-resistant",
        "manufacturer": "Wyeth",
        "region": "Europe, UK"
      },
      {
        "name": "Flexin",
        "form": "Tablet",
        "strengths": "250 mg, 500 mg",
        "manufacturer": "Abbott Laboratories (Pakistan) Ltd",
        "region": "Pakistan"
      },
      {
        "name": "Neoprox",
        "form": "Tablet",
        "strengths": "500 mg",
        "manufacturer": "Martin Dow",
        "region": "Pakistan"
      },
      {
        "name": "Torex-IR",
        "form": "Tablet",
        "strengths": "550 mg",
        "manufacturer": "Platinum Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Dolonap",
        "form": "Tablet, Enteric-coated (EC) Tablet",
        "strengths": "250 mg, 500 mg",
        "manufacturer": "Platinum Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Nepiox",
        "form": "Tablet",
        "strengths": "550 mg",
        "manufacturer": "Rasco Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Dolorex",
        "form": "Tablet",
        "strengths": "550 mg",
        "manufacturer": "Angelini",
        "region": "Pakistan"
      },
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Increased bleeding risk.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors/ARBs",
        "effect": "Reduced antihypertensive efficacy.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance.",
        "severity": "Major"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Increased GI bleeding.",
        "severity": "Major"
      },
      {
        "drugClass": "SSRIs",
        "effect": "Increased upper GI bleeding.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Beta-Blockers",
        "effect": "Reduced antihypertensive effect.",
        "severity": "Moderate"
      }
    ],
    "warning": "Long-term use increases CV and GI risk. Avoid in late pregnancy. Max OTC: 10 days.",
    "subCategoryId": "propionic-acids"
  },
  {
    "id": "celecoxib",
    "categoryId": "nsaids",
    "genericName": "Celecoxib",
    "brandNames": "Celebrex, Onsenal, Celecox, Celcoxx, Elyxyb",
    "description": "COX-2 selective inhibitor with reduced GI toxicity.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "OA and RA",
    "specialField": {
      "label": "Class",
      "value": "COX-2 Selective Inhibitor"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "100-200 mg once/twice daily",
        "sub": "Max: 400 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "3 hours onset",
        "sub": "11 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, AS, acute pain, dysmenorrhea, FAP",
        "sub": null
      },
      {
        "label": "CV RISK NOTE",
        "value": "Lower GI bleeding risk",
        "sub": "Increased thrombotic CV risk"
      }
    ],
    "brandTable": [
      {
        "name": "Celebrex",
        "form": "Capsules, Suspension",
        "strengths": "50 mg, 100 mg, 200 mg, 400 mg",
        "manufacturer": "Pfizer",
        "region": "USA, UK, Europe, Global"
      },
      {
        "name": "Onsenal",
        "form": "Capsules",
        "strengths": "100 mg, 200 mg",
        "manufacturer": "Pfizer",
        "region": "Europe, Middle East"
      },
      {
        "name": "Elyxyb",
        "form": "Oral solution",
        "strengths": "120 mg/mL",
        "manufacturer": "BioDelivery Sciences",
        "region": "USA"
      },
      {
        "name": "Celbexx",
        "form": "Capsule",
        "strengths": "100 mg, 200 mg",
        "manufacturer": "Getz Pharma (Pvt.) Ltd",
        "region": "Pakistan"
      },
      {
        "name": "COXIGET",
        "form": "Capsule",
        "strengths": "200 mg, 400 mg",
        "manufacturer": "Getz Pharma (Pvt.) Limited",
        "region": "Pakistan"
      },
      {
        "name": "C-Lixo",
        "form": "Capsule",
        "strengths": "200 mg",
        "manufacturer": "Amros Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Moveryl",
        "form": "Capsule",
        "strengths": "100 mg, 200 mg",
        "manufacturer": "Sami Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Celstar",
        "form": "Capsule",
        "strengths": "200 mg",
        "manufacturer": "Pharmatec Pakistan (Pvt.) Ltd",
        "region": "Pakistan"
      },
      {
        "name": "Gelcoxx",
        "form": "Capsule",
        "strengths": "400 mg",
        "manufacturer": "Getz Pharma Pvt. Ltd",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Warfarin and Anticoagulants",
        "effect": "Increased bleeding risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Reduced renal clearance.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors/ARBs",
        "effect": "Reduced renal perfusion.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Fluconazole (CYP2C9)",
        "effect": "Increased celecoxib levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI irritation.",
        "severity": "Moderate"
      }
    ],
    "warning": "BLACK BOX: Increased risk of CV events, MI, stroke. Contraindicated in sulfonamide allergy or CABG surgery.",
    "subCategoryId": "coxibs"
  },
  {
    "id": "diclofenac",
    "categoryId": "nsaids",
    "genericName": "Diclofenac",
    "brandNames": "Voltaren, Zipsor, Cambia, Diclopar, Dicloran, Cataflam",
    "description": "Potent non-selective NSAID. One of the most potent NSAIDs available. Widely used in Pakistan.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Acute and Chronic Pain",
    "specialField": {
      "label": "Routes",
      "value": "Oral, Topical, IV, IM"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "50 mg TID or 75 mg BID",
        "sub": "Topical: 2-4 times daily"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-45 min onset",
        "sub": "1-2 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, migraines, post-op pain, renal colic",
        "sub": null
      },
      {
        "label": "TOPICAL",
        "value": "~3-5% systemic absorption",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Voltaren",
        "form": "Tablets, Gel, Patches",
        "strengths": "25 mg, 50 mg, 75 mg; 1% gel",
        "manufacturer": "Novartis/GSK",
        "region": "USA, UK, Europe, Global"
      },
      {
        "name": "Zipsor",
        "form": "IR capsules",
        "strengths": "25 mg",
        "manufacturer": "Pfizer",
        "region": "USA, Canada"
      },
      {
        "name": "Cambia",
        "form": "Powder for migraine",
        "strengths": "50 mg/packet",
        "manufacturer": "Endo Pharma",
        "region": "USA, Canada"
      },
      {
        "name": "Diclopar",
        "form": "Tablets, Suppositories, Injection",
        "strengths": "50 mg, 75 mg; 75 mg IM/IV",
        "manufacturer": "Various (Pakistan)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Cataflam",
        "form": "IR tablets, Drops",
        "strengths": "50 mg; 15 mg/mL",
        "manufacturer": "Novartis",
        "region": "Global"
      },
      {
        "name": "Caflam",
        "form": "Tablet",
        "strengths": "50 mg",
        "manufacturer": "Novartis Pharma Pakistan",
        "region": "Pakistan"
      },
      {
        "name": "Dicloran Disperlet",
        "form": "Dispersible Tablet",
        "strengths": "50 mg",
        "manufacturer": "Sami Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Voiden Fort",
        "form": "Tablet",
        "strengths": "50 mg",
        "manufacturer": "Rotex Pharma (Pvt.) Ltd",
        "region": "Pakistan"
      },
      {
        "name": "Befilam",
        "form": "Tablet",
        "strengths": "75 mg",
        "manufacturer": "Batala Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Velflex",
        "form": "Tablet",
        "strengths": "100 mg",
        "manufacturer": "Ray Pharma (Pvt) Ltd",
        "region": "Pakistan"
      },
      {
        "name": "Pblogin",
        "form": "Capsule",
        "strengths": "50 mg",
        "manufacturer": "Brookes Pharma (Pvt.) Ltd.",
        "region": "Pakistan"
      },
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants",
        "effect": "Increased bleeding risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels.",
        "severity": "Major"
      },
      {
        "drugClass": "Diuretics/ACEi",
        "effect": "Synergistic renal dysfunction.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Increased GI ulceration.",
        "severity": "Major"
      },
      {
        "drugClass": "Cyclosporine",
        "effect": "Increased nephrotoxicity.",
        "severity": "Moderate"
      }
    ],
    "warning": "Significant GI bleeding risk. Avoid in third trimester. Topical not for open wounds. Monitor renal function.",
    "subCategoryId": "acetic-acids"
  },
  {
    "id": "meloxicam",
    "categoryId": "nsaids",
    "genericName": "Meloxicam",
    "brandNames": "Mobic, Anjeso, Melox, Meloxigel, Mobicox, Metacam",
    "description": "Long-acting NSAID with preferential COX-2 inhibition. Once-daily dosing.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "RA and OA",
    "specialField": {
      "label": "Dosing",
      "value": "Once Daily"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "7.5-15 mg once daily",
        "sub": "Max: 15 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "4-5 hours onset",
        "sub": "15-20 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, JIA, AS, chronic pain",
        "sub": null
      },
      {
        "label": "ELDERLY",
        "value": "7.5 mg/day",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Mobic",
        "form": "Tablets, Suspension",
        "strengths": "7.5 mg, 15 mg",
        "manufacturer": "Boehringer Ingelheim",
        "region": "USA, UK, Europe, Global"
      },
      {
        "name": "Anjeso",
        "form": "IV Infusion",
        "strengths": "30 mg/vial",
        "manufacturer": "Hospira/Pfizer",
        "region": "USA, Europe"
      },
      {
        "name": "Mobicox",
        "form": "Tablets",
        "strengths": "7.5 mg, 15 mg",
        "manufacturer": "Cipla",
        "region": "Pakistan, India"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants",
        "effect": "Increased bleeding risk.",
        "severity": "Major"
      },
      {
        "drugClass": "ACEi/ARBs",
        "effect": "Reduced antihypertensive effect.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Increased GI bleeding.",
        "severity": "Major"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Reduced diuretic efficacy.",
        "severity": "Moderate"
      }
    ],
    "warning": "Long half-life - careful monitoring in elderly. Monitor renal function. Avoid in third trimester.",
    "subCategoryId": "oxicams"
  },
  {
    "id": "indomethacin",
    "categoryId": "nsaids",
    "genericName": "Indomethacin",
    "brandNames": "Indocin, Indocin SR, Indogesic, Indomet, Indo-Lemmon",
    "description": "Potent NSAID used for acute gout, AS, and PDA closure in neonates.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Acute Gout and AS",
    "specialField": {
      "label": "Use",
      "value": "Acute gout"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "50-100 mg daily divided",
        "sub": "Acute gout: 50 mg TID"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "4-5 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Acute gout, RA, AS, bursitis, PDA closure",
        "sub": null
      },
      {
        "label": "SPECIAL",
        "value": "PDA closure in neonates",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Indocin",
        "form": "Capsules, Suspension, IV",
        "strengths": "25 mg, 50 mg; 1 mg/vial IV",
        "manufacturer": "Merck",
        "region": "USA, UK, Europe, Global"
      },
      {
        "name": "Indocin SR",
        "form": "ER Capsules",
        "strengths": "75 mg",
        "manufacturer": "Merck",
        "region": "USA, Canada"
      },
      {
        "name": "Indo-Lemmon",
        "form": "Capsules",
        "strengths": "25 mg, 50 mg, 75 mg",
        "manufacturer": "Lemmon Company",
        "region": "USA"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants",
        "effect": "Increased bleeding risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Bone marrow suppression risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Reduced clearance, neurotoxicity.",
        "severity": "Major"
      },
      {
        "drugClass": "ACEi/ARBs/Diuretics",
        "effect": "Triple whammy.",
        "severity": "Major"
      },
      {
        "drugClass": "Corticosteroids/SSRIs",
        "effect": "Additive GI irritation.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Probenecid",
        "effect": "Reduced uricosuric effect.",
        "severity": "Moderate"
      }
    ],
    "warning": "BLACK BOX: Increased risk of CV events and GI bleeding. Avoid in third trimester.",
    "subCategoryId": "others"
  },
  {
    "id": "aspirin",
    "categoryId": "nsaids",
    "genericName": "Aspirin",
    "brandNames": "Bayer Aspirin, Ecotrin, Bufferin, Aspro, Disprin, Micropyrin",
    "description": "Salicylate NSAID - irreversible COX-1 and COX-2 inhibitor. The oldest synthetic NSAID. Unique antiplatelet effect at low doses. Widely used for primary and secondary prevention of cardiovascular events as well as for pain and fever.",
    "status": "OTC + Rx",
    "isCommonlyPrescribed": true,
    "isOTCAndRx": true,
    "primaryIndication": "Pain, Fever and Antiplatelet",
    "specialField": {
      "label": "Unique Property",
      "value": "Irreversible platelet inhibition"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE (Pain)",
        "value": "325-650 mg every 4-6 hrs",
        "sub": "Max: 4,000 mg/day"
      },
      {
        "label": "ANTIPLATELET DOSE",
        "value": "81-325 mg once daily",
        "sub": "Low-dose (baby aspirin) widely used"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-40 min onset",
        "sub": "2-3 hours (low dose); 15-20 hrs (high dose)"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Pain, fever, MI prevention, stroke prevention, TIA, inflammatory disorders (high dose)",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Bayer Aspirin",
        "form": "Tablets, Chewable Tablets, EC Tablets",
        "strengths": "81 mg, 325 mg, 500 mg",
        "manufacturer": "Bayer",
        "region": "USA, UK, Europe, Global"
      },
      {
        "name": "Ecotrin",
        "form": "Enteric-coated Tablets",
        "strengths": "81 mg, 325 mg",
        "manufacturer": "Prestige Brands",
        "region": "USA, Canada"
      },
      {
        "name": "Bufferin",
        "form": "Buffered Tablets",
        "strengths": "325 mg with antacids",
        "manufacturer": "Bristol-Myers Squibb / Novartis",
        "region": "USA, Japan, Asia"
      },
      {
        "name": "Aspro",
        "form": "Effervescent Tablets",
        "strengths": "300 mg, 500 mg",
        "manufacturer": "Bayer",
        "region": "UK, Europe, Australia"
      },
      {
        "name": "Disprin",
        "form": "Dispersible Tablets",
        "strengths": "300 mg, 500 mg",
        "manufacturer": "Reckitt Benckiser",
        "region": "Pakistan, India, UK, Africa"
      },
      {
        "name": "Micropyrin",
        "form": "EC Tablets",
        "strengths": "75 mg, 150 mg",
        "manufacturer": "Bayer",
        "region": "Pakistan, India, Middle East"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs, Heparin)",
        "effect": "Aspirin irreversibly inhibits platelet aggregation. Concomitant use with anticoagulants dramatically increases bleeding risk and hemorrhage events.",
        "severity": "Major"
      },
      {
        "drugClass": "Other NSAIDs (Ibuprofen, Naproxen)",
        "effect": "Ibuprofen may interfere with aspirin antiplatelet effect if taken before aspirin. Increased GI bleeding and ulceration risk with combination.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors",
        "effect": "Reduced antihypertensive effect of ACE inhibitors due to prostaglandin inhibition. May decrease therapeutic efficacy.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate leading to increased hematologic and hepatic toxicity risk.",
        "severity": "Major"
      },
      {
        "drugClass": "SSRIs and SNRIs",
        "effect": "Increased risk of upper GI bleeding through combined impairment of platelet function and serotonin-mediated platelet activation.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics (Spironolactone)",
        "effect": "Aspirin may reduce the diuretic and antihypertensive effect of spironolactone by inhibiting tubular secretion.",
        "severity": "Moderate"
      }
    ],
    "warning": "BLACK BOX WARNING: Reye syndrome risk in children with viral illness. Avoid in children/teenagers with chickenpox or flu-like symptoms. GI bleeding risk increases with dose. Discontinue 7 days before surgery due to irreversible platelet inhibition. Higher doses increase hemorrhagic stroke risk.",
    "subCategoryId": "salicylates"
  },
  {
    "id": "ketorolac",
    "categoryId": "nsaids",
    "genericName": "Ketorolac",
    "brandNames": "Toradol, Sprix, Acular, Ketorol, Ketalgin",
    "description": "Potent pyrrolizine carboxylic acid NSAID. One of the most effective injectable NSAIDs for acute moderate-to-severe pain. Short-term use only (max 5 days) due to significant GI toxicity.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Acute Moderate-to-Severe Pain",
    "specialField": {
      "label": "Max Duration",
      "value": "5 days only"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "10 mg PO q4-6h or 15-30 mg IM/IV q6h",
        "sub": "Max: 40 mg/day (IM/IV)"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min (oral); 10 min (IM)",
        "sub": "4-6 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Post-operative pain, renal colic, acute musculoskeletal pain, fracture pain, migraine",
        "sub": null
      },
      {
        "label": "MAX DURATION RULE",
        "value": "5 days total therapy",
        "sub": "Due to GI and renal toxicity"
      }
    ],
    "brandTable": [
      {
        "name": "Toradol",
        "form": "Tablets, Injection (IM/IV)",
        "strengths": "10 mg tablets; 15 mg/mL, 30 mg/mL injectable",
        "manufacturer": "Atnahs Pharma / Roche",
        "region": "USA, UK, Europe, Global"
      },
      {
        "name": "Sprix",
        "form": "Nasal Spray",
        "strengths": "15.75 mg/spray",
        "manufacturer": "Tris Pharma",
        "region": "USA"
      },
      {
        "name": "Acular",
        "form": "Ophthalmic Solution",
        "strengths": "0.5% eye drops",
        "manufacturer": "Allergan (AbbVie)",
        "region": "USA, Europe, Global"
      },
      {
        "name": "Ketorolac Tromethamine",
        "form": "Tablets, Injection, Ophthalmic",
        "strengths": "10 mg; 15 mg/mL, 30 mg/mL; 0.4%, 0.5% ophthalmic",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Ketalgin",
        "form": "Injection, Tablets",
        "strengths": "10 mg, 30 mg/mL",
        "manufacturer": "Hilton Pharma",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, LMWH)",
        "effect": "Synergistic bleeding risk. Contraindicated in patients on anticoagulation therapy due to hemorrhage risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Other NSAIDs or Aspirin",
        "effect": "Cumulative GI toxicity, increased bleeding risk. Combination contraindicated due to additive toxicity without added efficacy.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and Diuretics",
        "effect": "Reduced antihypertensive efficacy and increased risk of acute renal failure, especially in elderly and volume-depleted patients.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased methotrexate clearance leading to increased hematologic and renal toxicity.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Reduced lithium clearance, elevated serum lithium levels with risk of neurotoxicity and renal toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Significantly increased risk of GI ulceration and perforation. Ketorolac is the most GI-toxic NSAID.",
        "severity": "Major"
      }
    ],
    "warning": "BLACK BOX WARNING: Ketorolac is contraindicated in patients with active GI bleeding, advanced renal impairment, or at risk for bleeding. Do not use epidurally or intrathecally. Maximum duration: 5 days total. Risk of GI bleeding and perforation highest among NSAIDs. Contraindicated in nursing mothers and during labor/delivery.",
    "subCategoryId": "acetic-acids"
  },
  {
    "id": "piroxicam",
    "categoryId": "nsaids",
    "genericName": "Piroxicam",
    "brandNames": "Feldene, Feldene Piroxicam, Pirox, Osteral, Brexicam",
    "description": "Long-acting oxicam NSAID with very long half-life allowing once-daily dosing. Effective for chronic inflammatory conditions like osteoarthritis and rheumatoid arthritis.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Arthritis and Chronic Inflammation",
    "specialField": {
      "label": "Half-Life",
      "value": "50 hours (longest)"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "10-20 mg once daily",
        "sub": "Max: 20 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 days onset",
        "sub": "~50 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, AS, acute gout, tendinitis, bursitis, postoperative pain",
        "sub": null
      },
      {
        "label": "STEADY STATE",
        "value": "7-12 days to reach",
        "sub": "Due to very long half-life"
      }
    ],
    "brandTable": [
      {
        "name": "Feldene",
        "form": "Capsules, Tablets, Gel, Suppositories",
        "strengths": "10 mg, 20 mg; 0.5% gel; 20 mg suppository",
        "manufacturer": "Pfizer",
        "region": "USA, UK, Europe, Global"
      },
      {
        "name": "Feldene Melt",
        "form": "Melt-in-mouth tablets",
        "strengths": "10 mg, 20 mg",
        "manufacturer": "Pfizer",
        "region": "UK, Europe"
      },
      {
        "name": "Pirox",
        "form": "Capsules, Tablets",
        "strengths": "10 mg, 20 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Ostral",
        "form": "Capsules, Tablets",
        "strengths": "10 mg, 20 mg",
        "manufacturer": "Ferozsons",
        "region": "Pakistan, Middle East"
      },
      {
        "name": "Brexicam",
        "form": "Tablets, Dispersible Tablets",
        "strengths": "10 mg, 20 mg",
        "manufacturer": "Bristol Pharma",
        "region": "Pakistan, India"
      },
      {
        "name": "Mobiflex",
        "form": "Tablets",
        "strengths": "20 mg",
        "manufacturer": "Boehringer Ingelheim",
        "region": "Europe"
      },
      {
        "name": "Feldene",
        "form": "Capsule, Tablet, Gel",
        "strengths": "10 mg, 20 mg",
        "manufacturer": "Pfizer Pakistan Ltd",
        "region": "Pakistan"
      },
      {
        "name": "Bless",
        "form": "Tablet",
        "strengths": "20 mg",
        "manufacturer": "Foray Pharmaceuticals",
        "region": "Pakistan"
      },
      {
        "name": "Pcam",
        "form": "Tablet, Gel, Injection",
        "strengths": "20 mg",
        "manufacturer": "McOison Research Laboratories",
        "region": "Pakistan"
      },
      {
        "name": "Cyclodex",
        "form": "Tablet (Piroxicam-6-Cyclodextrin)",
        "strengths": "20 mg",
        "manufacturer": "Platinum Pharma",
        "region": "Pakistan"
      },
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Increased bleeding risk due to platelet inhibition and prolonged drug half-life. Significant and prolonged INR elevation possible.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effectiveness and increased risk of acute kidney injury, especially in volume-depleted patients.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate leading to increased toxicity. Risk is prolonged due to piroxicam long half-life.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Reduced lithium clearance resulting in elevated serum lithium with potential for neurological toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Increased GI toxicity with prolonged bleeding and ulceration risk. Both drugs have long half-lives.",
        "severity": "Major"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Reduced natriuretic and diuretic efficacy of loop and thiazide diuretics.",
        "severity": "Moderate"
      }
    ],
    "warning": "Very long half-life leads to prolonged drug effect and extended washout period. GI complications may persist longer than with other NSAIDs. Steady state takes 7-12 days to reach. Avoid in elderly patients with renal impairment because of prolonged drug accumulation.",
    "subCategoryId": "oxicams"
  },
  {
    "id": "etodolac",
    "categoryId": "nsaids",
    "genericName": "Etodolac",
    "brandNames": "Lodine, Lodine XL, Etolac, Etofree, Ultradol",
    "description": "Pyranocarboxylic acid NSAID with preferential COX-2 inhibition at therapeutic doses. Used for osteoarthritis, rheumatoid arthritis, and acute pain. One of the better-tolerated NSAIDs with lower GI toxicity.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Osteoarthritis and Rheumatoid Arthritis",
    "specialField": {
      "label": "COX Selectivity",
      "value": "Preferential COX-2"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "200-400 mg every 6-8 hours",
        "sub": "Extended-release: 400-1,000 mg daily"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "6-7 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, acute pain, post-surgical pain, dental pain",
        "sub": null
      },
      {
        "label": "GI SAFETY NOTE",
        "value": "Better GI tolerability",
        "sub": "Due to COX-2 preferential selectivity"
      }
    ],
    "brandTable": [
      {
        "name": "Lodine",
        "form": "Capsules, Tablets, IR/ER",
        "strengths": "200 mg, 300 mg, 400 mg capsules; 400 mg, 500 mg, 600 mg ER tablets",
        "manufacturer": "Wyeth-Ayerst (Pfizer)",
        "region": "USA, UK, Europe, Global"
      },
      {
        "name": "Lodine XL",
        "form": "Extended-release Tablets",
        "strengths": "400 mg, 500 mg, 600 mg",
        "manufacturer": "Wyeth-Ayerst",
        "region": "USA, Canada"
      },
      {
        "name": "Etolac",
        "form": "Tablets, Capsules",
        "strengths": "200 mg, 300 mg, 400 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Etofree",
        "form": "Tablets",
        "strengths": "300 mg, 400 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Ultradol",
        "form": "Capsules, ER Tablets",
        "strengths": "200 mg, 400 mg; ER 400 mg, 600 mg",
        "manufacturer": "Opko Health",
        "region": "Canada"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Increased risk of bleeding due to platelet inhibition and GI irritation. Monitor INR closely during concomitant therapy.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect and increased risk of acute renal failure in volume-depleted or elderly patients.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Reduced renal clearance of methotrexate potentially leading to increased hematologic toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Decreased renal lithium clearance resulting in elevated serum lithium levels and potential neurotoxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI ulceration and bleeding risk when used in combination.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics (Furosemide, Thiazides)",
        "effect": "Reduced natriuretic effect and diuretic efficacy due to prostaglandin inhibition in the kidneys.",
        "severity": "Minor"
      }
    ],
    "warning": "Lower incidence of GI ulceration compared to non-selective NSAIDs but still carries bleeding risk. Avoid in patients with active GI bleeding or severe renal impairment. Use lowest effective dose for shortest duration.",
    "subCategoryId": "acetic-acids"
  },
  {
    "id": "mefenamic-acid",
    "categoryId": "nsaids",
    "genericName": "Mefenamic Acid",
    "brandNames": "Ponstel, Ponstan, Mefac, Mefan, Ponsmel",
    "description": "Fenamate (anthranilic acid) NSAID specifically indicated for short-term management of dysmenorrhea, menorrhagia, and acute pain. Unique mechanism includes direct antagonism of prostaglandin receptors.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Dysmenorrhea and Menorrhagia",
    "specialField": {
      "label": "Special Indication",
      "value": "Menstrual disorders"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "250-500 mg TID",
        "sub": "Max: 1,500 mg/day for up to 7 days"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "2-4 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Dysmenorrhea, menorrhagia, RA, OA, dental pain, muscle pain, headache",
        "sub": null
      },
      {
        "label": "DURATION LIMIT",
        "value": "Use limited to 7 days",
        "sub": "Due to dose-dependent hematologic effects"
      }
    ],
    "brandTable": [
      {
        "name": "Ponstel",
        "form": "Capsules, Softgels",
        "strengths": "250 mg, 500 mg",
        "manufacturer": "Duramed / Shionogi",
        "region": "USA, Canada, UK"
      },
      {
        "name": "Ponstan",
        "form": "Tablets, Capsules, Suspension",
        "strengths": "250 mg, 500 mg; 50 mg/5 mL suspension",
        "manufacturer": "Parke-Davis / Pfizer",
        "region": "UK, Europe, Asia, Australia"
      },
      {
        "name": "Mefac",
        "form": "Tablets, Capsules",
        "strengths": "250 mg, 500 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Mefan",
        "form": "Tablets, Capsules",
        "strengths": "250 mg, 500 mg",
        "manufacturer": "Bristol Pharma",
        "region": "Pakistan, Middle East"
      },
      {
        "name": "Ponsmel",
        "form": "Tablets",
        "strengths": "250 mg, 500 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Ponstan Forte",
        "form": "Tablet",
        "strengths": "500 mg",
        "manufacturer": "LCI Pakistan Ltd",
        "region": "Pakistan"
      },
      {
        "name": "Zopan DS",
        "form": "Suspension, Tablet",
        "strengths": "100 mg/5 mL, 500 mg",
        "manufacturer": "Pharmatec Pakistan (Pvt.) Ltd",
        "region": "Pakistan"
      },
      {
        "name": "Mefnac DS",
        "form": "Tablet, Suspension",
        "strengths": "250 mg, 500 mg",
        "manufacturer": "Efroze Chemical Industries (Pvt.) Ltd",
        "region": "Pakistan"
      },
      {
        "name": "Panamic Forte",
        "form": "Tablet",
        "strengths": "500 mg",
        "manufacturer": "Lisko Pakistan (Pvt) Ltd",
        "region": "Pakistan"
      },
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Increased risk of bleeding due to inhibition of platelet aggregation and displacement of warfarin from protein binding sites.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect and increased risk of acute renal impairment, especially in elderly.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal elimination of methotrexate leading to increased toxicity.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium levels due to reduced renal clearance, increasing risk of lithium neurotoxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI ulceration risk. Mefenamic acid has higher incidence of GI side effects than some other NSAIDs.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Aspirin and Other NSAIDs",
        "effect": "Increased GI bleeding risk. Displacement of other NSAIDs from protein binding, increasing free drug levels.",
        "severity": "Moderate"
      }
    ],
    "warning": "Do not use for longer than 7 days due to dose-dependent risk of hemolytic anemia and bone marrow suppression. Discontinue immediately if rash, anemia, or GI bleeding occurs. Can cause severe diarrhea that may require discontinuation. Contraindicated in patients with active ulceration or inflammatory bowel disease.",
    "subCategoryId": "fenamates"
  },
  {
    "id": "etoricoxib",
    "categoryId": "nsaids",
    "genericName": "Etoricoxib",
    "brandNames": "Arcoxia, Algix, Etocox, Exiba, Tauxib, Etorico",
    "description": "Highly selective COX-2 inhibitor (coxib) with excellent GI safety profile. Widely used in Europe, Asia, and Pakistan for OA, RA, and acute gout. Not FDA-approved in the USA but extensively prescribed internationally.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Osteoarthritis and Rheumatoid Arthritis",
    "specialField": {
      "label": "Availability",
      "value": "Global (excl. USA)"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "30-90 mg once daily",
        "sub": "Acute gout: 120 mg once daily for 8 days"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1 hour onset",
        "sub": "~22 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, AS, acute gout, chronic low back pain, dysmenorrhea, dental pain",
        "sub": null
      },
      {
        "label": "GI SAFETY",
        "value": "Significantly reduced GI toxicity",
        "sub": "Compared to non-selective NSAIDs"
      }
    ],
    "brandTable": [
      {
        "name": "Arcoxia",
        "form": "Tablets, Oral Suspension",
        "strengths": "30 mg, 60 mg, 90 mg, 120 mg; 90 mg/5 mL",
        "manufacturer": "Merck (MSD)",
        "region": "Europe, Middle East, Asia, Pakistan"
      },
      {
        "name": "Algix",
        "form": "Tablets",
        "strengths": "60 mg, 90 mg, 120 mg",
        "manufacturer": "Getz Pharma",
        "region": "Pakistan, Asia"
      },
      {
        "name": "Etocox",
        "form": "Tablets",
        "strengths": "60 mg, 90 mg, 120 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Exiba",
        "form": "Tablets",
        "strengths": "60 mg, 90 mg",
        "manufacturer": "Hilton Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Tauxib",
        "form": "Tablets",
        "strengths": "60 mg, 90 mg, 120 mg",
        "manufacturer": "Aventis (Sanofi)",
        "region": "Europe, Middle East"
      },
      {
        "name": "Etorico",
        "form": "Tablets",
        "strengths": "60 mg, 90 mg",
        "manufacturer": "Bosch Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Starcox",
        "form": "Tablet",
        "strengths": "60 mg, 90 mg, 120 mg",
        "manufacturer": "Getz Pharma (Pvt.) Ltd",
        "region": "Pakistan"
      },
      {
        "name": "Gencox",
        "form": "Tablet",
        "strengths": "60 mg, 90 mg",
        "manufacturer": "Mcolson / Robinson Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Berica",
        "form": "Tablet",
        "strengths": "60 mg, 120 mg",
        "manufacturer": "Fazul Ellahie (Pvt.) Ltd",
        "region": "Pakistan"
      },
      {
        "name": "Hixib",
        "form": "Tablet",
        "strengths": "60 mg",
        "manufacturer": "Cell Laboratories (Pvt.) Ltd",
        "region": "Pakistan"
      },
    ],
    "interactions": [
      {
        "drugClass": "Warfarin and Anticoagulants",
        "effect": "Increased risk of bleeding events and elevated INR. Though less GI toxic than non-selective NSAIDs, COX-2 inhibitors can still increase bleeding risk.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive efficacy and potential for acute renal dysfunction, especially in volume-depleted patients.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Reduced clearance of methotrexate leading to increased plasma levels and potential toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels due to reduced renal excretion of lithium.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics (Loop, Thiazide)",
        "effect": "Reduced natriuretic and antihypertensive effect of diuretics.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Rifampicin and CYP Inducers",
        "effect": "Reduced etoricoxib plasma concentrations due to CYP3A4 induction, potentially reducing analgesic efficacy.",
        "severity": "Minor"
      }
    ],
    "warning": "Increased cardiovascular thrombotic risk as with all COX-2 inhibitors. Contraindicated in patients with uncontrolled hypertension and established ischemic heart disease. Reduce dose in moderate hepatic impairment. Not recommended in pregnancy. Do not use in patients with previous stroke or MI.",
    "subCategoryId": "coxibs"
  },
  {
    "id": "ketoprofen",
    "categoryId": "nsaids",
    "genericName": "Ketoprofen",
    "brandNames": "Orudis, Oruvail, Fastum, Ketofen, Profenid, Bi-Profenid",
    "description": "Propionic acid NSAID with both analgesic and antipyretic properties. Available in oral, topical, and injectable forms. Noted for its superior penetration into synovial fluid, making it effective for joint-related inflammatory conditions.",
    "status": "Rx Only + OTC (topical)",
    "isCommonlyPrescribed": true,
    "isRxOnly": false,
    "primaryIndication": "Arthritis and Acute Pain",
    "dosageForm": "Oral/IM/Topical",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "50-75 mg TID or 200 mg ER daily",
        "sub": "Max: 300 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "2-4 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, AS, acute musculoskeletal pain, dysmenorrhea, gout, dental pain",
        "sub": null
      },
      {
        "label": "SPECIAL PROPERTY",
        "value": "Excellent synovial fluid penetration",
        "sub": "High concentration in joint tissues"
      }
    ],
    "brandTable": [
      {
        "name": "Orudis",
        "form": "Capsules, Tablets, IM Injection, Suppositories",
        "strengths": "50 mg, 75 mg, 100 mg; 100 mg/5 mL IM; 100 mg suppository",
        "manufacturer": "Wyeth-Ayerst (Pfizer)",
        "region": "USA, UK, Europe, Global"
      },
      {
        "name": "Oruvail",
        "form": "Extended-Release Capsules",
        "strengths": "100 mg, 150 mg, 200 mg ER",
        "manufacturer": "Wyeth/Sanofi",
        "region": "USA, UK, Europe"
      },
      {
        "name": "Fastum",
        "form": "Topical Gel, Cream",
        "strengths": "2.5% gel, 5% cream",
        "manufacturer": "A. Menarini",
        "region": "Europe, Asia, Pakistan, Middle East"
      },
      {
        "name": "Ketofen",
        "form": "Tablets, Injection, Topical Gel",
        "strengths": "50 mg, 100 mg; 50 mg/mL injection; 2.5% gel",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia, Africa"
      },
      {
        "name": "Profenid",
        "form": "Capsules, Gel, IM Injection",
        "strengths": "50 mg, 100 mg, 200 mg ER; 2.5% gel; 100 mg/5 mL",
        "manufacturer": "Sanofi-Aventis",
        "region": "Europe, Middle East"
      },
      {
        "name": "Bi-Profenid",
        "form": "Biphasic-release tablets",
        "strengths": "200 mg biphasic",
        "manufacturer": "Sanofi-Aventis",
        "region": "Europe"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Increased bleeding risk due to platelet inhibition and GI irritation. Ketoprofen may displace warfarin from protein binding sites.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate leading to increased hematologic and hepatic toxicity risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium plasma levels due to reduced renal clearance, potentially causing neurotoxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors and Diuretics",
        "effect": "Reduced antihypertensive and diuretic efficacy. Increased risk of acute renal failure in susceptible patients.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI toxicity with increased risk of ulceration and GI bleeding.",
        "severity": "Major"
      },
      {
        "drugClass": "Probenecid",
        "effect": "Probenecid significantly reduces ketoprofen clearance and increases plasma levels, potentially leading to toxicity.",
        "severity": "Moderate"
      }
    ],
    "warning": "Photosensitivity reactions reported with topical gel use; avoid sun exposure on treated areas. Increased risk of serious GI adverse events. Avoid in late pregnancy. More likely to cause hepatic reactions compared to other NSAIDs. Monitor liver enzymes with long-term therapy.",
    "subCategoryId": "propionic-acids"
  },
  {
    "id": "sulindac",
    "categoryId": "nsaids",
    "genericName": "Sulindac",
    "brandNames": "Clinoril, Suloril, Sulide, Cilin, Sulindac",
    "description": "Prodrug indene acetic acid NSAID metabolized to active sulfide metabolite in the liver. Has relatively less effect on renal blood flow compared to other NSAIDs, making it a preferred choice in patients with mild renal impairment.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Arthritis and Tendonitis",
    "dosageForm": "Oral Tablets",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "200 mg BID",
        "sub": "Max: 400 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "Several days onset",
        "sub": "8 hours (parent); 16 hours (active metabolite)"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, AS, acute painful shoulder, acute gouty arthritis, bursitis, tendinitis",
        "sub": null
      },
      {
        "label": "RENAL ADVANTAGE",
        "value": "Less renal impact",
        "sub": "Better preservation of renal function"
      }
    ],
    "brandTable": [
      {
        "name": "Clinoril",
        "form": "Tablets",
        "strengths": "150 mg, 200 mg",
        "manufacturer": "Merck",
        "region": "USA, UK, Europe, Global"
      },
      {
        "name": "Suloril",
        "form": "Tablets",
        "strengths": "200 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Sulide",
        "form": "Tablets",
        "strengths": "200 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Cilin",
        "form": "Tablets",
        "strengths": "200 mg",
        "manufacturer": "Local Manufacturers",
        "region": "Pakistan"
      },
      {
        "name": "Sulindac",
        "form": "Tablets",
        "strengths": "150 mg, 200 mg",
        "manufacturer": "Various (Generic)",
        "region": "USA, Canada, Europe"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Sulindac may prolong prothrombin time. Increased bleeding risk due to platelet inhibition and warfarin displacement.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive efficacy. However, sulindac has less blunting effect on antihypertensives compared to other NSAIDs.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate leading to increased plasma levels and potential toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Reduced renal clearance of lithium, increasing serum levels and risk of lithium neurotoxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics (Furosemide, Thiazides)",
        "effect": "Reduced diuretic and natriuretic effects. Less severe than with other NSAIDs.",
        "severity": "Minor"
      },
      {
        "drugClass": "Aspirin",
        "effect": "Concurrent use with aspirin significantly reduces sulindac plasma levels and active metabolite concentrations.",
        "severity": "Moderate"
      }
    ],
    "warning": "Prodrug requiring hepatic conversion: efficacy and onset may be delayed in patients with hepatic impairment. Active metabolite is primarily excreted in bile and undergoes enterohepatic circulation. Can cause peripheral edema. Use cautiously in patients with compromised cardiac function.",
    "subCategoryId": "acetic-acids"
  },
  {
    "id": "nabumetone",
    "categoryId": "nsaids",
    "genericName": "Nabumetone",
    "brandNames": "Relafen, Relif, Nabuton, Artaxan, Nabumet",
    "description": "Prodrug naphthylalkanone NSAID metabolized to active metabolite (6-methoxy-2-naphthylacetic acid). Known for having one of the lowest incidences of GI ulceration among non-selective NSAIDs. Once-daily dosing.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Osteoarthritis and Rheumatoid Arthritis",
    "specialField": {
      "label": "GI Safety",
      "value": "Low ulceration risk"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "1,000-2,000 mg once daily",
        "sub": "May divide 500 mg-1,000 mg BID"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "Several hours onset",
        "sub": "~24 hours (active metabolite)"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, chronic pain, tendinitis, bursitis",
        "sub": null
      },
      {
        "label": "ELDERLY DOSING",
        "value": "500-1,000 mg daily",
        "sub": "Adjust for renal function"
      }
    ],
    "brandTable": [
      {
        "name": "Relafen",
        "form": "Tablets",
        "strengths": "500 mg, 750 mg, 1,000 mg",
        "manufacturer": "GlaxoSmithKline",
        "region": "USA, Canada, UK"
      },
      {
        "name": "Relif",
        "form": "Tablets",
        "strengths": "500 mg, 750 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Nabuton",
        "form": "Tablets",
        "strengths": "500 mg, 1,000 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Artaxan",
        "form": "Tablets",
        "strengths": "500 mg, 750 mg",
        "manufacturer": "Various (Generic)",
        "region": "Europe"
      },
      {
        "name": "Nabumet",
        "form": "Tablets",
        "strengths": "500 mg, 1,000 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Increased risk of GI bleeding and potential increase in INR. Monitor coagulation parameters closely.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect and potential for acute renal dysfunction, especially in elderly.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Increased methotrexate levels due to reduced renal clearance. Potential for hematologic and hepatic toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels due to decreased renal clearance of lithium.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Increased risk of GI ulceration and bleeding. Though nabumetone has lower GI risk, combination increases overall risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics (Loop, Thiazide)",
        "effect": "Reduced natriuretic and diuretic efficacy; increased risk of fluid retention.",
        "severity": "Minor"
      }
    ],
    "warning": "Prodrug: active metabolite forms after first-pass hepatic metabolism. Lower but not absent risk of serious GI adverse events. Caution in patients with hepatic impairment. Avoid in severe renal impairment. Not recommended during pregnancy, especially third trimester.",
    "subCategoryId": "acetic-acids"
  },
  {
    "id": "flurbiprofen",
    "categoryId": "nsaids",
    "genericName": "Flurbiprofen",
    "brandNames": "Ansaid, Froben, Ocufen, Flurib, Frophen",
    "description": "Propionic acid NSAID with potent anti-inflammatory activity. Available as oral tablets for arthritis pain and as ophthalmic solution for prevention of intraoperative miosis during cataract surgery. Particularly effective for RA.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Rheumatoid Arthritis and Ophthalmic Use",
    "dosageForm": "Oral/Opthalmic",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "50-100 mg BID or TID",
        "sub": "Max: 300 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "5-6 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "RA, OA, AS, acute pain, dysmenorrhea; ophthalmic: prevention of intraoperative miosis",
        "sub": null
      },
      {
        "label": "OPHTHALMIC USE",
        "value": "0.03% ophthalmic solution",
        "sub": "Prevents intraoperative miosis"
      }
    ],
    "brandTable": [
      {
        "name": "Ansaid",
        "form": "Tablets",
        "strengths": "50 mg, 100 mg",
        "manufacturer": "Pfizer (Upjohn)",
        "region": "USA, UK, Europe, Global"
      },
      {
        "name": "Froben",
        "form": "Tablets, SR Tablets",
        "strengths": "50 mg, 100 mg, 200 mg SR",
        "manufacturer": "Abbott (Knoll)",
        "region": "UK, Europe, Asia"
      },
      {
        "name": "Ocufen",
        "form": "Ophthalmic Solution",
        "strengths": "0.03% eye drops",
        "manufacturer": "Allergan (AbbVie)",
        "region": "USA, Europe, Global"
      },
      {
        "name": "Flurib",
        "form": "Tablets",
        "strengths": "50 mg, 100 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Frophen",
        "form": "Tablets",
        "strengths": "50 mg, 100 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Increased bleeding risk through platelet inhibition, GI irritation, and potential warfarin displacement from binding sites.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate leading to elevated methotrexate levels and increased toxicity risk.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect and increased risk of acute renal failure in susceptible patients.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Reduced renal clearance of lithium resulting in elevated lithium plasma levels and potential neurotoxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI ulceration and bleeding risk when used concurrently.",
        "severity": "Major"
      },
      {
        "drugClass": "Aspirin",
        "effect": "Concurrent aspirin use reduces flurbiprofen plasma levels and increases GI toxicity without added benefit.",
        "severity": "Moderate"
      }
    ],
    "warning": "Ophthalmic use: patients with bleeding disorders or on anticoagulants should use cautiously. Oral form carries standard NSAID GI and CV risks. Can cause fluid retention and edema. Use lowest effective dose. Avoid in third trimester of pregnancy.",
    "subCategoryId": "propionic-acids"
  },
  {
    "id": "fenoprofen",
    "categoryId": "nsaids",
    "genericName": "Fenoprofen",
    "brandNames": "Nalfon, Fenopron, Fenogesic, Progesic, Fenoprofen Calcium",
    "description": "Propionic acid NSAID used primarily for RA, OA, and mild-to-moderate pain. Less commonly prescribed today due to availability of better-tolerated alternatives. Noted for potential to cause nephrotic syndrome.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Rheumatoid Arthritis and Pain",
    "dosageForm": "Oral Capsules/Tablets",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "200-600 mg TID or QID",
        "sub": "Max: 3,200 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "2-3 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "RA, OA, mild-to-moderate pain, acute gout, tendinitis, bursitis, dysmenorrhea",
        "sub": null
      },
      {
        "label": "RENAL RISK",
        "value": "Acute interstitial nephritis",
        "sub": "Nephrotic syndrome reported"
      }
    ],
    "brandTable": [
      {
        "name": "Nalfon",
        "form": "Capsules, Tablets",
        "strengths": "200 mg, 300 mg, 600 mg",
        "manufacturer": "Pedinol Pharmacal",
        "region": "USA"
      },
      {
        "name": "Fenopron",
        "form": "Tablets, Capsules",
        "strengths": "300 mg, 600 mg",
        "manufacturer": "Dista (Eli Lilly)",
        "region": "UK, Europe"
      },
      {
        "name": "Fenogesic",
        "form": "Capsules, Tablets",
        "strengths": "200 mg, 300 mg, 600 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Progesic",
        "form": "Capsules",
        "strengths": "300 mg, 600 mg",
        "manufacturer": "Various (Generic)",
        "region": "Australia"
      },
      {
        "name": "Fenoprofen Calcium",
        "form": "Capsules, Tablets",
        "strengths": "200 mg, 400 mg, 600 mg",
        "manufacturer": "Various (Generic)",
        "region": "USA, Canada"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, Heparin)",
        "effect": "Increased bleeding risk due to platelet inhibition and GI irritation. Increased prothrombin time possible.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate leading to toxicity risk, including nephrotoxicity and bone marrow suppression.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive efficacy and increased risk of acute renal dysfunction in susceptible patients.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels due to reduced lithium clearance, increasing risk of neurotoxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI toxicity and ulceration risk with concurrent use.",
        "severity": "Major"
      },
      {
        "drugClass": "Hydantoins (Phenytoin)",
        "effect": "Fenoprofen may increase phenytoin levels due to protein-binding displacement, potentially causing phenytoin toxicity.",
        "severity": "Moderate"
      }
    ],
    "warning": "Increased risk of acute interstitial nephritis and nephrotic syndrome compared to other NSAIDs. Monitor renal function closely. Can cause false-positive urine test for benzodiazepines. Contraindicated in patients with pre-existing renal disease. Standard NSAID GI and cardiovascular precautions apply.",
    "subCategoryId": "propionic-acids"
  },
  {
    "id": "oxaprozin",
    "categoryId": "nsaids",
    "genericName": "Oxaprozin",
    "brandNames": "Daypro, Daypro Alta, Oxapro, Duraprox, Oxazin",
    "description": "Propionic acid NSAID with long half-life allowing once-daily dosing. Noted for being one of the few NSAIDs specifically approved for all major arthritic conditions. Excellent penetration into synovial fluid.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Osteoarthritis and Rheumatoid Arthritis",
    "specialField": {
      "label": "Half-Life",
      "value": "30-50 hours"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "600-1,200 mg once daily",
        "sub": "Max: 1,800 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "Several days to onset",
        "sub": "30-50 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, AS, JIA, acute tendinitis, bursitis",
        "sub": null
      },
      {
        "label": "STEADY STATE",
        "value": "3-7 days to achieve",
        "sub": "Due to long half-life"
      }
    ],
    "brandTable": [
      {
        "name": "Daypro",
        "form": "Capsules, Tablets",
        "strengths": "600 mg, 1,200 mg",
        "manufacturer": "GD Searle (Pfizer)",
        "region": "USA, Canada"
      },
      {
        "name": "Daypro Alta",
        "form": "Tablets",
        "strengths": "1,200 mg",
        "manufacturer": "Pfizer",
        "region": "USA"
      },
      {
        "name": "Oxapro",
        "form": "Tablets",
        "strengths": "600 mg, 1,200 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Duraprox",
        "form": "Tablets, Capsules",
        "strengths": "600 mg, 1,200 mg",
        "manufacturer": "Various (Generic)",
        "region": "Europe, Middle East"
      },
      {
        "name": "Oxazin",
        "form": "Tablets",
        "strengths": "600 mg",
        "manufacturer": "Various (Generic)",
        "region": "India, Asia"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Increased bleeding risk due to platelet inhibition and GI irritation. Prolonged half-life results in extended interaction period.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate. Long half-life of oxaprozin increases duration of interaction risk.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect and increased risk of acute renal impairment.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium levels due to reduced renal clearance. Monitor lithium levels during therapy.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI toxicity and increased risk of ulceration and GI bleeding.",
        "severity": "Major"
      },
      {
        "drugClass": "Aspirin",
        "effect": "Concurrent aspirin increases GI bleeding risk and may reduce oxaprozin plasma levels.",
        "severity": "Moderate"
      }
    ],
    "warning": "Long half-life: steady state may take up to one week. Extended washout period if toxicity occurs. Increased risk of photosensitivity reactions. GI toxicity may be prolonged due to extended half-life. Caution in elderly patients and those with hepatic/renal impairment.",
    "subCategoryId": "propionic-acids"
  },
  {
    "id": "tolmetin",
    "categoryId": "nsaids",
    "genericName": "Tolmetin",
    "brandNames": "Tolectin, Tolectin DS, Tolmet, Tolmax, Tolvin",
    "description": "Pyrrole acetic acid NSAID. One of the few NSAIDs with formal FDA approval for juvenile idiopathic arthritis (JIA). Now less commonly prescribed due to availability of safer alternatives but remains relevant in pediatric rheumatology.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Juvenile Idiopathic Arthritis and RA",
    "dosageForm": "Oral Capsules/Tablets",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "200-600 mg TID",
        "sub": "Max: 1,800 mg/day"
      },
      {
        "label": "PEDIATRIC DOSE",
        "value": "20 mg/kg/day in 3-4 divided doses",
        "sub": "For JIA: start at 15 mg/kg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "~5 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "RA, JIA, OA, AS, acute pain, tendinitis, bursitis",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Tolectin",
        "form": "Capsules, Tablets",
        "strengths": "200 mg, 400 mg, 600 mg",
        "manufacturer": "McNeil (J&J)",
        "region": "USA, Canada"
      },
      {
        "name": "Tolectin DS",
        "form": "Double-Strength Capsules",
        "strengths": "400 mg",
        "manufacturer": "McNeil (J&J)",
        "region": "USA"
      },
      {
        "name": "Tolmet",
        "form": "Capsules, Tablets",
        "strengths": "200 mg, 400 mg, 600 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Tolmax",
        "form": "Capsules",
        "strengths": "400 mg",
        "manufacturer": "Various (Generic)",
        "region": "India"
      },
      {
        "name": "Tolvin",
        "form": "Tablets",
        "strengths": "200 mg, 400 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, Heparin)",
        "effect": "Increased bleeding risk due to platelet inhibition and GI irritation. Increased prothrombin time and significant hemorrhage risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate leading to increased toxicity and bone marrow suppression risk.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive efficacy and increased risk of acute renal failure in susceptible patients.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Increased lithium levels due to reduced renal clearance, increasing risk of neurotoxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI toxicity and increased ulceration risk, especially relevant in JIA patients on chronic steroids.",
        "severity": "Major"
      },
      {
        "drugClass": "Aspirin",
        "effect": "Concurrent aspirin lowers tolmetin plasma levels by 50% while increasing GI toxicity. Avoid combination.",
        "severity": "Moderate"
      }
    ],
    "warning": "Can cause false-positive urine protein tests (sulfosalicylic acid method). Higher incidence of positive ANA and lupus-like syndromes compared to other NSAIDs. Standard NSAID GI, CV, and renal precautions apply.",
    "subCategoryId": "acetic-acids"
  },
  {
    "id": "nimesulide",
    "categoryId": "nsaids",
    "genericName": "Nimesulide",
    "brandNames": "Nimed, Nise, Sulide, Nimek, Nulide, Aulin",
    "description": "Sulfonanilide NSAID with preferential COX-2 inhibition. Rapid onset of action for acute pain. Widely used in Pakistan, India, and parts of Europe for acute musculoskeletal pain and dysmenorrhea.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Acute Pain and Inflammation",
    "specialField": {
      "label": "Onset Speed",
      "value": "Very rapid (15-20 min)"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "100 mg BID",
        "sub": "Max: 200 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "15-20 minutes onset",
        "sub": "2-5 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Acute pain, dysmenorrhea, OA, RA, post-operative pain, sinusitis, pharyngitis",
        "sub": null
      },
      {
        "label": "REGULATORY NOTE",
        "value": "Withdrawn in some countries",
        "sub": "Hepatotoxicity concerns"
      }
    ],
    "brandTable": [
      {
        "name": "Nise",
        "form": "Tablets, Gel, Granules",
        "strengths": "100 mg tablets; 50 mg/5 mL suspension; 1% gel; 100 mg granules",
        "manufacturer": "Panacea Biotec",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Nimed",
        "form": "Tablets, Suspension, Gel",
        "strengths": "100 mg; 50 mg/5 mL; 1% gel",
        "manufacturer": "Mepro Pharma",
        "region": "Pakistan, Asia"
      },
      {
        "name": "Sulide",
        "form": "Tablets, Suspension",
        "strengths": "100 mg; 50 mg/5 mL",
        "manufacturer": "Getz Pharma",
        "region": "Pakistan, Middle East"
      },
      {
        "name": "Nimek",
        "form": "Tablets, Dispersible Tablets",
        "strengths": "100 mg; 100 mg DT",
        "manufacturer": "Bosch Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Nulide",
        "form": "Tablets, Gel",
        "strengths": "100 mg; 1% gel",
        "manufacturer": "Hilton Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Aulin",
        "form": "Tablets, Granules, Suppositories",
        "strengths": "100 mg; 100 mg granules; 200 mg suppository",
        "manufacturer": "Helsinn Healthcare",
        "region": "Europe, South America"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Increased risk of bleeding due to platelet inhibition and GI irritation. Nimesulide may also alter warfarin metabolism.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate, increasing the risk of toxicity and bone marrow suppression.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive efficacy and potential for acute renal dysfunction in volume-depleted patients.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Reduced renal clearance of lithium, elevating serum levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics (Furosemide)",
        "effect": "Reduced natriuretic and diuretic efficacy of loop diuretics.",
        "severity": "Minor"
      },
      {
        "drugClass": "Sulfonylureas",
        "effect": "Nimesulide may increase the hypoglycemic effect of sulfonylureas, increasing risk of hypoglycemia.",
        "severity": "Moderate"
      }
    ],
    "warning": "Hepatotoxicity concern: withdrawn in several countries (Spain, Ireland, USA) due to rare but serious hepatic reactions. Should not be used for more than 15 consecutive days. Monitor liver function during prolonged therapy. Avoid in patients with pre-existing hepatic impairment.",
    "subCategoryId": "others"
  },
  {
    "id": "dipyrone",
    "categoryId": "nsaids",
    "genericName": "Dipyrone (Metamizole)",
    "brandNames": "Analgin, Novalgin, Baralgin, Optalgin, Prodolina",
    "description": "Pyrazolone NSAID with potent analgesic, antipyretic, and spasmolytic properties. Banned in many countries (USA, UK, Japan) due to risk of agranulocytosis but widely used in Pakistan, India, Latin America, and parts of Europe.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Severe Pain and Spasms",
    "specialField": {
      "label": "Regulatory Status",
      "value": "Banned in many countries"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "500-1,000 mg PO/IM/IV every 6-8 hrs",
        "sub": "Max: 4,000 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min (oral); 15-30 min (IM/IV)",
        "sub": "2-4 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Acute severe pain, colic pain (renal/biliary), post-operative pain, high fever unresponsive to other agents",
        "sub": null
      },
      {
        "label": "SPASMOLYTIC EFFECT",
        "value": "Relieves smooth muscle spasms",
        "sub": "Useful in renal colic and biliary colic"
      }
    ],
    "brandTable": [
      {
        "name": "Analgin",
        "form": "Tablets, Injection",
        "strengths": "500 mg, 1,000 mg; 500 mg/mL injection",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia, Africa"
      },
      {
        "name": "Novalgin",
        "form": "Tablets, Drops, Injection, Suppositories",
        "strengths": "500 mg; 500 mg/mL drops; 1 g/2 mL IM/IV",
        "manufacturer": "Sanofi-Aventis",
        "region": "Germany, Europe, Pakistan, Asia"
      },
      {
        "name": "Baralgin",
        "form": "Tablets, Injection",
        "strengths": "500 mg + 5 mg (with pitofenone)",
        "manufacturer": "Sanofi-Aventis",
        "region": "Pakistan, India, Latin America"
      },
      {
        "name": "Optalgin",
        "form": "Tablets, Oral Drops, Injection",
        "strengths": "500 mg, 1,000 mg; 500 mg/mL drops; 1 g/2 mL injection",
        "manufacturer": "Teva",
        "region": "Israel, Europe"
      },
      {
        "name": "Prodolina",
        "form": "Injection (combination)",
        "strengths": "2.5 g dipyrone + 5 mg pitofenone + 0.02 mg fenpiverinium",
        "manufacturer": "Balkan Pharma",
        "region": "Eastern Europe, Middle East"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Dipyrone may enhance the anticoagulant effect of warfarin and other oral anticoagulants, increasing bleeding risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Myelosuppressive Agents",
        "effect": "Additive risk of agranulocytosis and bone marrow suppression when combined with other drugs that suppress the bone marrow.",
        "severity": "Major"
      },
      {
        "drugClass": "Chlorpromazine and Other Neuroleptics",
        "effect": "Additive hypothermic effect and increased risk of severe hypothermia in combination.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal elimination of methotrexate, increasing plasma levels and potential for hematologic toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive efficacy through prostaglandin inhibition in the renal vasculature.",
        "severity": "Minor"
      },
      {
        "drugClass": "Cyclosporine",
        "effect": "Reduced cyclosporine levels via induction of hepatic metabolism, potentially reducing immunosuppressive efficacy.",
        "severity": "Moderate"
      }
    ],
    "warning": "BLACK BOX WARNING: Risk of agranulocytosis (1-2 cases per million). Patients should discontinue immediately if signs of infection develop. Banned in USA, UK, Canada, Japan, Australia. Contraindicated in patients with G6PD deficiency. Avoid during pregnancy and breastfeeding. Do not use for more than 3-5 days without medical supervision.",
    "subCategoryId": "pyrazolones"
  },
  {
    "id": "lornoxicam",
    "categoryId": "nsaids",
    "genericName": "Lornoxicam",
    "brandNames": "Xefo, Lorcam, Loxicam, Xefocam, Lornox",
    "description": "Oxicam class NSAID with potent analgesic activity. Has a relatively short half-life compared to other oxicams, offering faster clearance. Particularly effective for acute pain management and post-operative pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Acute and Chronic Pain",
    "dosageForm": "Oral/IV/IM/Suppository",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "4-8 mg BID or TID",
        "sub": "Max: 16 mg/day"
      },
      {
        "label": "PARENTERAL DOSE",
        "value": "8 mg IV/IM once or twice daily",
        "sub": "Max: 16 mg/day IM/IV"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "3-5 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Post-operative pain, acute and chronic LBP, OA, RA, AS, acute sciatica",
        "sub": null
      }
    ],
    "brandTable": [
      {
        "name": "Xefo",
        "form": "Tablets, IV/IM Injection, Suppositories",
        "strengths": "4 mg, 8 mg tablets; 8 mg vial IM/IV; 8 mg suppository",
        "manufacturer": "Nycomed (Takeda)",
        "region": "Europe, Asia, Middle East, Pakistan"
      },
      {
        "name": "Xefo Rapid",
        "form": "Orally Disintegrating Tablets",
        "strengths": "4 mg, 8 mg ODT",
        "manufacturer": "Nycomed (Takeda)",
        "region": "Europe, Asia"
      },
      {
        "name": "Lorcam",
        "form": "Tablets, Injection",
        "strengths": "4 mg, 8 mg; 8 mg injection",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Loxicam",
        "form": "Tablets, Injection",
        "strengths": "8 mg; 8 mg vial",
        "manufacturer": "Getz Pharma",
        "region": "Pakistan, Middle East"
      },
      {
        "name": "Xefocam",
        "form": "Tablets",
        "strengths": "8 mg",
        "manufacturer": "Various (Generic)",
        "region": "India, Asia"
      },
      {
        "name": "Lornox",
        "form": "Tablets, Injection",
        "strengths": "8 mg; 8 mg IM/IV",
        "manufacturer": "Hilton Pharma",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs, Heparin)",
        "effect": "Increased risk of bleeding due to platelet inhibition. Lornoxicam may enhance anticoagulant effect.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate leading to increased plasma levels.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive activity and increased risk of acute renal failure in volume-depleted patients.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels due to reduced renal clearance.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI ulceration and bleeding risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Diuretics (Furosemide, Thiazides)",
        "effect": "Reduced diuretic and antihypertensive effect.",
        "severity": "Moderate"
      }
    ],
    "warning": "Short half-life provides advantage of rapid clearance if toxicity develops. Patients with renal impairment require dose adjustment. Avoid in severe hepatic impairment. Injectable form should be used for maximum 2 days post-operatively.",
    "subCategoryId": "oxicams"
  },
  {
    "id": "tenoxicam",
    "categoryId": "nsaids",
    "genericName": "Tenoxicam",
    "brandNames": "Tilcotil, Tenox, Tencam, Xicam, Tenoxicam Teva",
    "description": "Long-acting oxicam NSAID similar to piroxicam but with slightly shorter half-life. Used for chronic inflammatory conditions and acute pain. Popular in Europe, Middle East, and Pakistan for once-daily dosing.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Osteoarthritis and Rheumatoid Arthritis",
    "specialField": {
      "label": "Half-Life",
      "value": "60-72 hours"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "20 mg once daily",
        "sub": "Acute pain: 20-40 mg loading dose"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "Several days steady state",
        "sub": "60-72 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, AS, acute musculoskeletal disorders, acute gout, post-operative pain",
        "sub": null
      },
      {
        "label": "ELDERLY NOTE",
        "value": "Accumulation risk",
        "sub": "Reduce dose in elderly"
      }
    ],
    "brandTable": [
      {
        "name": "Tilcotil",
        "form": "Tablets, Suppositories, IM Injection",
        "strengths": "20 mg; 20 mg suppository; 20 mg IM",
        "manufacturer": "Roche",
        "region": "Europe, Middle East, Asia, Pakistan"
      },
      {
        "name": "Tenox",
        "form": "Tablets, Injection",
        "strengths": "20 mg; 20 mg IM/IV",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Tencam",
        "form": "Tablets",
        "strengths": "20 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Xicam",
        "form": "Tablets",
        "strengths": "20 mg",
        "manufacturer": "Various (Generic)",
        "region": "India, Asia"
      },
      {
        "name": "Tenoxicam Teva",
        "form": "Tablets",
        "strengths": "20 mg",
        "manufacturer": "Teva Pharmaceutical",
        "region": "Europe, Israel"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Increased bleeding risk due to prolonged platelet inhibition and GI irritation. Long half-life extends interaction period.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance. Prolonged interaction due to long half-life.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect and increased risk of renal dysfunction.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Reduced lithium clearance, elevated lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI toxicity. Extended half-life means prolonged GI irritation risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Reduced diuretic efficacy; increased fluid retention.",
        "severity": "Moderate"
      }
    ],
    "warning": "Very long half-life leads to extended washout time (2-3 weeks for complete clearance). Steady state may take 7-14 days to achieve. Accumulation risk in elderly and renally impaired patients. Higher risk of GI bleeding similar to piroxicam.",
    "subCategoryId": "oxicams"
  },
  {
    "id": "dexibuprofen",
    "categoryId": "nsaids",
    "genericName": "Dexibuprofen",
    "brandNames": "Seractil, Dexifen, Dexip, Ibudex, Dexibu",
    "description": "Active enantiomer (S(+)-isomer) of ibuprofen. Provides faster onset and potentially lower GI toxicity compared to racemic ibuprofen. Used for pain and inflammation with lower dosing requirement.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Pain and Inflammation",
    "dosageForm": "Oral Tablets/Suspension",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "200-400 mg TID",
        "sub": "Max: 1,200 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "15-30 min onset",
        "sub": "1.8-3.5 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, acute pain, dental pain, dysmenorrhea, fever, musculoskeletal pain",
        "sub": null
      },
      {
        "label": "ADVANTAGE",
        "value": "50% lower dose than ibuprofen",
        "sub": "Same efficacy, potentially lower GI effects"
      }
    ],
    "brandTable": [
      {
        "name": "Seractil",
        "form": "Film-coated Tablets, Granules",
        "strengths": "200 mg, 300 mg, 400 mg; 200 mg, 300 mg granules",
        "manufacturer": "Gebro Pharma",
        "region": "Europe, Middle East, Asia, Pakistan"
      },
      {
        "name": "Dexifen",
        "form": "Tablets",
        "strengths": "200 mg, 300 mg, 400 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Dexip",
        "form": "Tablets",
        "strengths": "200 mg, 400 mg",
        "manufacturer": "Getz Pharma",
        "region": "Pakistan"
      },
      {
        "name": "Ibudex",
        "form": "Tablets",
        "strengths": "200 mg, 400 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Dexibu",
        "form": "Tablets",
        "strengths": "200 mg",
        "manufacturer": "Various (Generic)",
        "region": "India, Asia"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Increased risk of GI bleeding and hemorrhage due to platelet inhibition and gastric irritation.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate potentially leading to increased toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive efficacy and increased risk of acute renal dysfunction.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels due to reduced renal clearance.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI toxicity and ulceration risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Aspirin",
        "effect": "Concurrent aspirin may reduce dexibuprofen absorption and increase GI toxicity.",
        "severity": "Moderate"
      }
    ],
    "warning": "Better GI tolerability than racemic ibuprofen at equivalent analgesic doses, but standard NSAID precautions still apply. Avoid in patients with active peptic ulcer or GI bleeding. Use lowest effective dose for shortest duration.",
    "subCategoryId": "propionic-acids"
  },
  {
    "id": "dexketoprofen",
    "categoryId": "nsaids",
    "genericName": "Dexketoprofen",
    "brandNames": "Keral, Enantyum, Ketesse, Sympal, Dexfen",
    "description": "Active enantiomer (S(+)-isomer) of ketoprofen. One of the fastest acting NSAIDs with rapid onset of analgesia. Provides rapid relief for acute pain and musculoskeletal conditions.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Acute Pain (Rapid Onset)",
    "specialField": {
      "label": "Onset Speed",
      "value": "Fastest among NSAIDs"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "12.5-25 mg TID",
        "sub": "Max: 75 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "15-20 min onset",
        "sub": "1-2.5 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Acute musculoskeletal pain, dental pain, dysmenorrhea, post-op pain, LBP",
        "sub": null
      },
      {
        "label": "ADVANTAGE",
        "value": "50% lower dose than ketoprofen",
        "sub": "Rapid onset, lower GI burden"
      }
    ],
    "brandTable": [
      {
        "name": "Keral",
        "form": "Tablets, Granules, IM/IV Injection",
        "strengths": "12.5 mg, 25 mg; 25 mg/2 mL IM/IV; 25 mg granules",
        "manufacturer": "Sanofi-Aventis",
        "region": "Europe, Middle East, Pakistan, Asia"
      },
      {
        "name": "Enantyum",
        "form": "Tablets, IM Injection",
        "strengths": "25 mg; 25 mg/2 mL injection",
        "manufacturer": "Menarini",
        "region": "Europe, Latin America"
      },
      {
        "name": "Ketesse",
        "form": "Tablets, Granules, Injection, Gel",
        "strengths": "12.5 mg, 25 mg; 25 mg/sachet; 25 mg IM/IV",
        "manufacturer": "Menarini",
        "region": "Europe, Asia, Pakistan"
      },
      {
        "name": "Sympal",
        "form": "Tablets",
        "strengths": "12.5 mg, 25 mg",
        "manufacturer": "Menarini",
        "region": "Europe"
      },
      {
        "name": "Dexfen",
        "form": "Tablets, Injection",
        "strengths": "25 mg; 25 mg IM/IV",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs, Heparin)",
        "effect": "Increased bleeding risk due to platelet aggregation inhibition and GI mucosal irritation.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate leading to increased plasma levels and hematologic toxicity.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect and increased risk of acute renal impairment.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Reduced renal clearance of lithium, increasing serum lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI ulceration and bleeding risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Diuretics (Loop, Thiazide)",
        "effect": "Reduced diuretic efficacy and increased risk of fluid retention.",
        "severity": "Moderate"
      }
    ],
    "warning": "Fastest-acting oral NSAID - onset of action within 15-20 minutes. Optimal for acute pain but not intended for long-term chronic use. Injectable form provides even faster relief. Standard NSAID precautions for GI, CV, and renal safety.",
    "subCategoryId": "propionic-acids"
  },
  {
    "id": "loxoprofen",
    "categoryId": "nsaids",
    "genericName": "Loxoprofen",
    "brandNames": "Loxonin, Loxoprofen, Loxo, Lofepro, Loxon",
    "description": "Propionic acid prodrug NSAID converted to its active metabolite in the body. Most commonly prescribed NSAID in Japan and also used in Asia. Noted for its rapid onset and balanced safety profile.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Pain and Inflammation",
    "dosageForm": "Oral Tablets/Patch",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "60 mg TID",
        "sub": "Max: 180 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "1.5 hours (active metabolite)"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, acute pain, low back pain, periarthritis, post-surgical pain, dysmenorrhea",
        "sub": null
      },
      {
        "label": "TOPICAL FORM",
        "value": "Loxoprofen patch",
        "sub": "100 mg patch, once daily"
      }
    ],
    "brandTable": [
      {
        "name": "Loxonin",
        "form": "Tablets, Granules, Tape",
        "strengths": "60 mg tablets; 60 mg/packet granules; 100 mg/50 mg tape",
        "manufacturer": "Daiichi Sankyo",
        "region": "Japan, Asia"
      },
      {
        "name": "Loxoprofen Na",
        "form": "Tablets, Tape, Gel",
        "strengths": "60 mg; 100 mg/patch; 1% gel",
        "manufacturer": "Various (Generic)",
        "region": "Japan, China, Asia"
      },
      {
        "name": "Loxo",
        "form": "Tablets",
        "strengths": "60 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Lofepro",
        "form": "Tablets",
        "strengths": "60 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      },
      {
        "name": "Loxon",
        "form": "Tablets, Tape",
        "strengths": "60 mg; 100 mg patch",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Increased risk of bleeding due to platelet inhibition and GI irritation.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate leading to increased plasma levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect and increased risk of acute renal failure.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Reduced renal clearance of lithium resulting in increased plasma levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI toxicity with increased risk of ulceration.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Newer Quinolone Antibiotics",
        "effect": "Increased risk of CNS stimulation and convulsions when combined with quinolones.",
        "severity": "Minor"
      }
    ],
    "warning": "Most prescribed NSAID in Japan. Prodrug reduces direct gastric irritation. Standard NSAID precautions apply. Avoid in active GI ulceration. Tape/patch formulation provides localized relief with minimal systemic absorption.",
    "subCategoryId": "propionic-acids"
  },
  {
    "id": "acemetacin",
    "categoryId": "nsaids",
    "genericName": "Acemetacin",
    "brandNames": "Rantudil, Acemet, Acem, Acetalgin, Acemetacin Retard",
    "description": "Glycolic acid ester prodrug of indomethacin. Designed to reduce GI toxicity while maintaining similar efficacy to indomethacin. Used for chronic inflammatory conditions.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Arthritis and Inflammation",
    "dosageForm": "Oral Capsules",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "60 mg BID or TID",
        "sub": "Max: 180 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1 hour onset",
        "sub": "4-5 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "RA, OA, AS, acute gout, LBP, tendinitis, bursitis, postoperative inflammation",
        "sub": null
      },
      {
        "label": "PRODRUG BENEFIT",
        "value": "Better GI tolerability",
        "sub": "Less direct gastric irritation"
      }
    ],
    "brandTable": [
      {
        "name": "Rantudil",
        "form": "Capsules, Sustained-Release Capsules",
        "strengths": "30 mg, 60 mg; 90 mg SR",
        "manufacturer": "Bayer / Chiesi",
        "region": "Europe, Asia, Middle East"
      },
      {
        "name": "Acemet",
        "form": "Capsules",
        "strengths": "60 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Acem",
        "form": "Capsules",
        "strengths": "60 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Acetalgin",
        "form": "Capsules",
        "strengths": "60 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      },
      {
        "name": "Acemetacin Retard",
        "form": "Extended-Release Capsules",
        "strengths": "90 mg",
        "manufacturer": "Various (Generic)",
        "region": "Europe"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Increased bleeding risk due to conversion to indomethacin. Significant INR elevation.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate, leading to increased plasma levels.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive efficacy and increased risk of acute renal failure.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Reduced renal clearance of lithium, increasing serum lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI toxicity and increased risk of ulceration.",
        "severity": "Major"
      },
      {
        "drugClass": "Diuretics (Furosemide, Thiazides)",
        "effect": "Reduced diuretic efficacy and increased risk of edema.",
        "severity": "Moderate"
      }
    ],
    "warning": "Prodrug of indomethacin - same precautions as indomethacin apply regarding GI, CNS, and renal effects. May still cause headaches (though less frequently than indomethacin). Monitor for signs of GI bleeding.",
    "subCategoryId": "acetic-acids"
  },
  {
    "id": "proglumetacin",
    "categoryId": "nsaids",
    "genericName": "Proglumetacin",
    "brandNames": "Protaxil, Afloxan, Miridil, Proglum, Gluconac",
    "description": "NSAID that combines indomethacin with proglumide (a gastrin receptor antagonist). Designed to provide anti-inflammatory activity while reducing GI toxicity through mucosal protective effects.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "GI-Safe Anti-Inflammation",
    "specialField": {
      "label": "GI Protection",
      "value": "Built-in gastroprotection"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "150 mg BID",
        "sub": "Max: 300 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "6-8 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "RA, OA, AS, acute pain, tendinitis, bursitis",
        "sub": null
      },
      {
        "label": "UNIQUE FEATURE",
        "value": "Contains gastroprotective proglumide",
        "sub": "Reduced ulcerogenic potential"
      }
    ],
    "brandTable": [
      {
        "name": "Protaxil",
        "form": "Tablets, Capsules",
        "strengths": "150 mg",
        "manufacturer": "Rottapharm / Meda",
        "region": "Europe, Asia, Pakistan"
      },
      {
        "name": "Afloxan",
        "form": "Tablets, Capsules",
        "strengths": "150 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Miridil",
        "form": "Tablets",
        "strengths": "150 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      },
      {
        "name": "Proglum",
        "form": "Tablets",
        "strengths": "150 mg",
        "manufacturer": "Various (Generic)",
        "region": "India, Asia"
      },
      {
        "name": "Gluconac",
        "form": "Capsules",
        "strengths": "150 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Increased risk of bleeding due to indomethacin component.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate due to the indomethacin component.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive efficacy and increased risk of acute renal failure.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels due to reduced renal clearance.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive risk of GI ulceration, though reduced compared to indomethacin.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Reduced diuretic efficacy and potential for fluid retention.",
        "severity": "Moderate"
      }
    ],
    "warning": "Despite built-in gastroprotection, standard NSAID precautions still apply. Proglumide component provides mucosal protection but does not eliminate GI risk entirely. Avoid in active GI ulceration.",
    "subCategoryId": "acetic-acids"
  },
  {
    "id": "meclofenamic-acid",
    "categoryId": "nsaids",
    "genericName": "Meclofenamic Acid",
    "brandNames": "Meclomen, Meclofen, Movens, Meclodol, Meclofan",
    "description": "Fenamate (anthranilic acid) NSAID used for inflammatory arthritis and dysmenorrhea. Known for its antiprostaglandin activity and ability to antagonize prostaglandin receptors.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Arthritis and Dysmenorrhea",
    "dosageForm": "Oral Capsules",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "50-100 mg TID or QID",
        "sub": "Max: 400 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "3-4 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "RA, OA, dysmenorrhea, mild-to-moderate pain, AS",
        "sub": null
      },
      {
        "label": "MECHANISM NOTE",
        "value": "Prostaglandin receptor antagonist",
        "sub": "In addition to COX inhibition"
      }
    ],
    "brandTable": [
      {
        "name": "Meclomen",
        "form": "Capsules",
        "strengths": "50 mg, 100 mg",
        "manufacturer": "Parke-Davis (Pfizer)",
        "region": "USA, UK, Europe"
      },
      {
        "name": "Meclofen",
        "form": "Capsules",
        "strengths": "50 mg, 100 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Movens",
        "form": "Capsules",
        "strengths": "100 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Meclodol",
        "form": "Capsules",
        "strengths": "50 mg, 100 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      },
      {
        "name": "Meclofan",
        "form": "Capsules",
        "strengths": "100 mg",
        "manufacturer": "Various (Generic)",
        "region": "India, Asia"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Increased bleeding risk due to platelet inhibition and warfarin displacement.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive efficacy and increased risk of acute renal failure.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate leading to increased plasma levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels due to reduced renal clearance.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI ulceration and bleeding risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Aspirin",
        "effect": "Concurrent aspirin reduces meclofenamate plasma levels and increases GI toxicity.",
        "severity": "Moderate"
      }
    ],
    "warning": "Higher incidence of GI side effects, including diarrhea (10-33% of patients), which may require drug discontinuation. Diarrhea is dose-related. Use lowest effective dose. Contraindicated in active GI bleeding or IBD.",
    "subCategoryId": "fenamates"
  },
  {
    "id": "tolfenamic-acid",
    "categoryId": "nsaids",
    "genericName": "Tolfenamic Acid",
    "brandNames": "Clotam, Tolfedin, Tolfen, Fenamic, Tolfa",
    "description": "Fenamate NSAID with specific indication for acute migraine attacks. Unique property of inhibiting prostaglandin synthesis and antagonizing prostaglandin receptors. Effective for migraine and dysmenorrhea.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Acute Migraine and Pain",
    "specialField": {
      "label": "Special Indication",
      "value": "Migraine treatment"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "200 mg BID or TID",
        "sub": "Migraine: 200 mg at onset, may repeat"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "2-3 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Acute migraine, dysmenorrhea, RA, OA, dental pain, musculoskeletal pain",
        "sub": null
      },
      {
        "label": "MIGRAINE USE",
        "value": "Well-established efficacy",
        "sub": "Alternative to triptans"
      }
    ],
    "brandTable": [
      {
        "name": "Clotam",
        "form": "Tablets, Capsules",
        "strengths": "200 mg",
        "manufacturer": "Galen / Recordati",
        "region": "Europe, UK, Pakistan, Middle East"
      },
      {
        "name": "Tolfedin",
        "form": "Tablets, Capsules",
        "strengths": "200 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Tolfen",
        "form": "Tablets",
        "strengths": "200 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Fenamic",
        "form": "Capsules",
        "strengths": "200 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      },
      {
        "name": "Tolfa",
        "form": "Tablets",
        "strengths": "200 mg",
        "manufacturer": "Various (Generic)",
        "region": "India, Asia"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Increased bleeding risk due to platelet inhibition and warfarin displacement.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect and potential for acute renal dysfunction.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate, leading to increased toxicity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Reduced lithium clearance, elevated serum lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI toxicity and increased risk of ulceration.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Triptans (Sumatriptan, Rizatriptan)",
        "effect": "Combination may increase risk of serotonin syndrome, though rare.",
        "severity": "Minor"
      }
    ],
    "warning": "Effective alternative to triptans for acute migraine. May cause GI upset, diarrhea, and dyspepsia. Standard NSAID precautions for GI, CV, and renal safety. Not recommended for long-term daily use.",
    "subCategoryId": "fenamates"
  },
  {
    "id": "etofenamate",
    "categoryId": "nsaids",
    "genericName": "Etofenamate",
    "brandNames": "Rheumon, Bayrogel, Etofen, Etoflex, Traumalgex",
    "description": "Fenamate NSAID primarily formulated as a topical gel/cream for local treatment of musculoskeletal pain and inflammation. Provides effective local relief with minimal systemic absorption.",
    "status": "OTC (Topical)",
    "isCommonlyPrescribed": false,
    "isOTCAndRx": false,
    "primaryIndication": "Topical Musculoskeletal Pain Relief",
    "dosageForm": "Topical Gel/Cream/Spray",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "Apply 3-4 times daily to affected area",
        "sub": "5-10 cm strip of gel per application"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min local onset",
        "sub": "Low systemic absorption (~5%)"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Localized musculoskeletal pain, strains, sprains, sports injuries, OA (local), tendinitis",
        "sub": null
      },
      {
        "label": "SYSTEMIC ABSORPTION",
        "value": "Approximately 5%",
        "sub": "Minimal systemic side effects"
      }
    ],
    "brandTable": [
      {
        "name": "Rheumon",
        "form": "Topical Gel, Cream",
        "strengths": "5% gel, 10% cream",
        "manufacturer": "Bayer",
        "region": "Europe, Asia, Middle East, Pakistan"
      },
      {
        "name": "Bayrogel",
        "form": "Topical Gel",
        "strengths": "5% gel",
        "manufacturer": "Bayer",
        "region": "Europe, Asia"
      },
      {
        "name": "Etofen",
        "form": "Topical Gel, Cream",
        "strengths": "5% gel",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Etoflex",
        "form": "Topical Gel, Spray",
        "strengths": "5% gel, 10% spray",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Traumalgex",
        "form": "Topical Gel",
        "strengths": "5% gel",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, Middle East"
      }
    ],
    "interactions": [
      {
        "drugClass": "Oral Anticoagulants (Warfarin)",
        "effect": "Minimal interaction due to low systemic absorption, but caution if applied to large areas or broken skin.",
        "severity": "Minor"
      },
      {
        "drugClass": "Other Topical Preparations",
        "effect": "Do not apply other topical medications at same site without medical advice.",
        "severity": "Minor"
      },
      {
        "drugClass": "Systemic NSAIDs",
        "effect": "Additive systemic NSAID effect if applied to large body surface areas.",
        "severity": "Minor"
      },
      {
        "drugClass": "Sunlight/UV Exposure",
        "effect": "May cause photosensitivity reactions. Avoid UV exposure on treated skin.",
        "severity": "Minor"
      },
      {
        "drugClass": "Oral Methotrexate",
        "effect": "Minimal interaction risk due to low systemic absorption.",
        "severity": "Minor"
      }
    ],
    "warning": "For external use only. Do not apply to open wounds, broken skin, or mucous membranes. Avoid contact with eyes. Avoid sunlight on treated areas (photosensitivity risk). Discontinue if skin rash develops.",
    "subCategoryId": "fenamates"
  },
  {
    "id": "bromfenac",
    "categoryId": "nsaids",
    "genericName": "Bromfenac",
    "brandNames": "Bromday, Prolensa, Xibrom, Yellox, Bromfen",
    "description": "Acetic acid NSAID formulated exclusively as ophthalmic solution for postoperative inflammation and pain following cataract surgery. Provides effective ocular anti-inflammatory activity.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Ocular Inflammation (Post-Surgery)",
    "dosageForm": "Ophthalmic Solution",
    "stats": [
      {
        "label": "STANDARD DOSE",
        "value": "1 drop daily (0.09%) or BID (0.07%) in affected eye",
        "sub": "Starting 1 day before surgery"
      },
      {
        "label": "ONSET / DURATION",
        "value": "Rapid ocular onset",
        "sub": "BID dosing provides 24-hour coverage"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Post-cataract surgery inflammation and pain, ocular inflammation",
        "sub": null
      },
      {
        "label": "FORMULATION NOTE",
        "value": "Multiple concentrations available",
        "sub": "0.07%, 0.075%, 0.09%"
      }
    ],
    "brandTable": [
      {
        "name": "Bromday",
        "form": "Ophthalmic Solution",
        "strengths": "0.09% (once-daily dosing)",
        "manufacturer": "ISTA Pharma (Bausch+Lomb)",
        "region": "USA, Canada"
      },
      {
        "name": "Prolensa",
        "form": "Ophthalmic Solution",
        "strengths": "0.07% (once-daily dosing)",
        "manufacturer": "Bausch + Lomb",
        "region": "USA, Europe"
      },
      {
        "name": "Xibrom",
        "form": "Ophthalmic Solution",
        "strengths": "0.09% (BID dosing)",
        "manufacturer": "ISTA Pharma",
        "region": "USA"
      },
      {
        "name": "Yellox",
        "form": "Ophthalmic Solution",
        "strengths": "0.09% (BID dosing)",
        "manufacturer": "Bausch + Lomb",
        "region": "Europe, Asia, Middle East"
      },
      {
        "name": "Bromfenac",
        "form": "Ophthalmic Solution",
        "strengths": "0.07%, 0.09%",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia, Global"
      }
    ],
    "interactions": [
      {
        "drugClass": "Other Ophthalmic NSAIDs",
        "effect": "Additive ocular irritation and delayed corneal healing. Avoid concurrent use.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Ophthalmic Corticosteroids",
        "effect": "Increased risk of delayed corneal healing and potential increased IOP.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Anticoagulants (Warfarin, Clopidogrel)",
        "effect": "Increased risk of ocular bleeding during and after ophthalmic surgery.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Contact Lens Use",
        "effect": "Should not be used while wearing contact lenses.",
        "severity": "Minor"
      },
      {
        "drugClass": "Other Ophthalmic Medications",
        "effect": "At least 5 minutes should separate administration of different ophthalmic drugs.",
        "severity": "Minor"
      }
    ],
    "warning": "Ophthalmic use only - not for oral or systemic use. Oral bromfenac was withdrawn from US market due to severe hepatotoxicity. Monitor for signs of corneal damage or keratitis. Not recommended during late pregnancy.",
    "subCategoryId": "acetic-acids"
  },
  {
    "id": "nepafenac",
    "categoryId": "nsaids",
    "genericName": "Nepafenac",
    "brandNames": "Nevanac, Ilevro, Nepafen, Nefenac, Nepa",
    "description": "Prodrug ophthalmic NSAID converted to amfenac (active form) in ocular tissues. Provides effective treatment for postoperative pain and inflammation following cataract surgery with convenient dosing.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Post-Cataract Ocular Pain",
    "dosageForm": "Ophthalmic Suspension",
    "stats": [
      {
        "label": "STANDARD DOSE",
        "value": "1 drop TID (0.1%) for 2 weeks post-op",
        "sub": "Ilevro: once daily (0.3%)"
      },
      {
        "label": "ONSET / DURATION",
        "value": "Rapid activation in ocular tissues",
        "sub": "Active 24 hours after single dose"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Post-cataract surgery pain and inflammation, prevention of macular edema",
        "sub": null
      },
      {
        "label": "PRODRUG ADVANTAGE",
        "value": "Prodrug activated by hydrolases",
        "sub": "Reduced systemic exposure"
      }
    ],
    "brandTable": [
      {
        "name": "Nevanac",
        "form": "Ophthalmic Suspension",
        "strengths": "0.1% (TID dosing)",
        "manufacturer": "Alcon (Novartis)",
        "region": "USA, Europe, Global"
      },
      {
        "name": "Ilevro",
        "form": "Ophthalmic Suspension",
        "strengths": "0.3% (once-daily dosing)",
        "manufacturer": "Alcon (Novartis)",
        "region": "USA, Europe, Global"
      },
      {
        "name": "Nepafen",
        "form": "Ophthalmic Suspension",
        "strengths": "0.1%",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Nefenac",
        "form": "Ophthalmic Suspension",
        "strengths": "0.1%",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Nepa",
        "form": "Ophthalmic Suspension",
        "strengths": "0.1%",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Other Ophthalmic NSAIDs",
        "effect": "Additive ocular surface irritation and delayed corneal healing risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Ophthalmic Corticosteroids",
        "effect": "Increased risk of corneal complications and delayed wound healing.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Anticoagulants (Warfarin, Clopidogrel)",
        "effect": "Increased risk of ocular bleeding during surgery.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Prostaglandin Analogs (Latanoprost)",
        "effect": "May reduce IOP-lowering effect of prostaglandin analogs.",
        "severity": "Minor"
      },
      {
        "drugClass": "Topical Beta-Blockers (Timolol)",
        "effect": "No significant interaction; 5-minute interval between drops recommended.",
        "severity": "Minor"
      }
    ],
    "warning": "Prodrug activated in ocular tissues, reducing systemic exposure. Available in two strengths: 0.1% (TID) and 0.3% (once daily). Monitor for corneal adverse events in patients with risk factors. Not recommended during late pregnancy.",
    "subCategoryId": "acetic-acids"
  },
  {
    "id": "phenylbutazone",
    "categoryId": "nsaids",
    "genericName": "Phenylbutazone",
    "brandNames": "Butazolidine, Butazone, Phenylbut, PBZ, Buta",
    "description": "Pyrazolone NSAID with potent anti-inflammatory properties. Now largely withdrawn worldwide due to serious adverse effects including agranulocytosis and aplastic anemia. Used only for refractory ankylosing spondylitis.",
    "status": "Rx Only (Restricted)",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Refractory Ankylosing Spondylitis",
    "specialField": {
      "label": "Status",
      "value": "Restricted use only"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "100-200 mg TID initially",
        "sub": "Maintenance: 100-200 mg daily"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "Rapid onset",
        "sub": "~50-100 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Refractory AS, acute gout (limited), RA (historical)",
        "sub": null
      },
      {
        "label": "SEVERE TOXICITY",
        "value": "Agranulocytosis, aplastic anemia",
        "sub": "Risk: 1 in 100,000"
      }
    ],
    "brandTable": [
      {
        "name": "Butazolidine",
        "form": "Tablets, Capsules",
        "strengths": "100 mg, 200 mg",
        "manufacturer": "Geigy (Novartis)",
        "region": "USA, UK, Europe (largely discontinued)"
      },
      {
        "name": "Butazone",
        "form": "Tablets, Injection",
        "strengths": "200 mg; 600 mg/3 mL injection",
        "manufacturer": "Various",
        "region": "Limited markets"
      },
      {
        "name": "Phenylbut",
        "form": "Tablets",
        "strengths": "100 mg, 200 mg",
        "manufacturer": "Various",
        "region": "Pakistan, India"
      },
      {
        "name": "PBZ",
        "form": "Tablets",
        "strengths": "200 mg",
        "manufacturer": "Various",
        "region": "Pakistan"
      },
      {
        "name": "Buta",
        "form": "Tablets",
        "strengths": "100 mg, 200 mg",
        "manufacturer": "Various",
        "region": "India, Asia"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Potentiation of anticoagulant effect with dramatically increased bleeding risk. Inhibits warfarin metabolism and displaces it from protein binding.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Severe bone marrow suppression risk from additive myelotoxicity.",
        "severity": "Major"
      },
      {
        "drugClass": "Bone Marrow Suppressants",
        "effect": "Additive risk of agranulocytosis and aplastic anemia.",
        "severity": "Major"
      },
      {
        "drugClass": "Oral Hypoglycemics (Sulfonylureas)",
        "effect": "Increased hypoglycemic effect due to displacement from protein binding.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Reduced renal clearance of lithium, increasing plasma levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Phenytoin",
        "effect": "Phenylbutazone inhibits phenytoin metabolism, causing elevated levels and potential neurotoxicity.",
        "severity": "Major"
      }
    ],
    "warning": "BLACK BOX WARNING: Associated with potentially fatal agranulocytosis and aplastic anemia. Use only when other NSAIDs have failed. Treatment should not exceed 7-10 days. Regular blood count monitoring required. Withdrawn or restricted in most countries.",
    "subCategoryId": "pyrazolones"
  },
  {
    "id": "oxyphenbutazone",
    "categoryId": "nsaids",
    "genericName": "Oxyphenbutazone",
    "brandNames": "Tandearil, Oxyphenbut, Tandacort, Oxyphen, Butanol",
    "description": "Active metabolite of phenylbutazone with similar anti-inflammatory properties. Largely withdrawn worldwide due to bone marrow toxicity. Some ophthalmic formulations available for ocular inflammation.",
    "status": "Rx Only (Restricted)",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Refractory Inflammatory Conditions",
    "dosageForm": "Oral/Opthalmic",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "100-200 mg BID",
        "sub": "Max: 600 mg/day (short-term only)"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "40-80 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "AS, RA (refractory), acute gout, ocular inflammation (ophthalmic)",
        "sub": null
      },
      {
        "label": "SAFETY NOTE",
        "value": "Same hematologic risk as phenylbutazone",
        "sub": "Rare but severe bone marrow suppression"
      }
    ],
    "brandTable": [
      {
        "name": "Tandearil",
        "form": "Tablets",
        "strengths": "100 mg",
        "manufacturer": "Geigy (Novartis)",
        "region": "USA, Europe (discontinued)"
      },
      {
        "name": "Oxyphenbut",
        "form": "Tablets",
        "strengths": "100 mg, 200 mg",
        "manufacturer": "Various",
        "region": "Pakistan, India"
      },
      {
        "name": "Tandacort",
        "form": "Tablets",
        "strengths": "100 mg",
        "manufacturer": "Various",
        "region": "Pakistan"
      },
      {
        "name": "Oxyphen",
        "form": "Tablets, Ophthalmic",
        "strengths": "100 mg; eye ointment",
        "manufacturer": "Various",
        "region": "Pakistan, India"
      },
      {
        "name": "Butanol",
        "form": "Tablets",
        "strengths": "100 mg",
        "manufacturer": "Various",
        "region": "India"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Significantly increased bleeding risk. Avoid combination unless absolutely necessary.",
        "severity": "Major"
      },
      {
        "drugClass": "Myelosuppressive Agents",
        "effect": "Additive risk of agranulocytosis and aplastic anemia.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Additive hepatotoxicity and bone marrow suppression risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Sulfonylureas",
        "effect": "Increased risk of severe hypoglycemia due to displacement from protein binding.",
        "severity": "Major"
      },
      {
        "drugClass": "Phenytoin",
        "effect": "Significantly increased phenytoin levels with risk of neurotoxicity.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Reduced lithium elimination leading to elevated levels.",
        "severity": "Moderate"
      }
    ],
    "warning": "Same BLACK BOX WARNING as phenylbutazone: risk of potentially fatal agranulocytosis and aplastic anemia. Use restricted to short-term treatment. Regular blood count monitoring essential. Withdrawn in most developed countries.",
    "subCategoryId": "pyrazolones"
  },
  {
    "id": "parecoxib",
    "categoryId": "nsaids",
    "genericName": "Parecoxib",
    "brandNames": "Dynastat, Parecox, Parexin, Coxstat, Parecoxib",
    "description": "Prodrug of valdecoxib, the first injectable COX-2 selective inhibitor. Used for perioperative pain management. Provides effective analgesia with reduced GI effects. Not FDA-approved but widely used in Europe and Asia.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Perioperative Pain Management",
    "dosageForm": "IV/IM Injection",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "40 mg IM/IV, then 20-40 mg every 6-12 hrs",
        "sub": "Max: 80 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "7-13 min (IV); 20-30 min (IM)",
        "sub": "~8 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Post-operative pain, perioperative analgesia, acute pain management",
        "sub": null
      },
      {
        "label": "PRODRUG NOTE",
        "value": "Converted to valdecoxib",
        "sub": "IV formulation for acute use"
      }
    ],
    "brandTable": [
      {
        "name": "Dynastat",
        "form": "Powder for Injection (IV/IM)",
        "strengths": "20 mg, 40 mg vials",
        "manufacturer": "Pfizer",
        "region": "Europe, Asia, Middle East, Pakistan"
      },
      {
        "name": "Parecox",
        "form": "Injection",
        "strengths": "20 mg, 40 mg vials",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Parexin",
        "form": "Injection",
        "strengths": "40 mg vials",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      },
      {
        "name": "Coxstat",
        "form": "Injection",
        "strengths": "20 mg, 40 mg",
        "manufacturer": "Various (Generic)",
        "region": "India, Asia"
      },
      {
        "name": "Parecoxib",
        "form": "Injection",
        "strengths": "20 mg, 40 mg",
        "manufacturer": "Various (Generic)",
        "region": "Global"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Increased risk of bleeding events. COX-2 inhibitors can still increase bleeding risk despite lower GI toxicity.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive efficacy and potential for acute renal dysfunction.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Reduced clearance of methotrexate leading to increased plasma levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels due to reduced renal excretion.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics (Loop, Thiazide)",
        "effect": "Reduced natriuretic and antihypertensive effect.",
        "severity": "Moderate"
      },
      {
        "drugClass": "CYP2C9 Inhibitors",
        "effect": "Increased parecoxib/valdecoxib levels due to CYP2C9 inhibition.",
        "severity": "Moderate"
      }
    ],
    "warning": "Increased cardiovascular thrombotic risk as with all COX-2 inhibitors. Contraindicated in patients with ischemic heart disease or cerebrovascular disease. Not recommended in pregnancy. Injectable formulation only - do not use for more than 3 days.",
    "subCategoryId": "coxibs"
  },
  {
    "id": "valdecoxib",
    "categoryId": "nsaids",
    "genericName": "Valdecoxib",
    "brandNames": "Bextra, Valdecox, Valcox, Coxib, Valdyx",
    "description": "COX-2 selective inhibitor withdrawn from many markets due to cardiovascular safety concerns and serious skin reactions. Still available in some countries. Prodrug for parecoxib.",
    "status": "Rx Only (Withdrawn in many countries)",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Arthritis (Historical Use)",
    "dosageForm": "Oral Tablets",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "10-20 mg once daily",
        "sub": "Max: 40 mg/day (historical)"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "8-11 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, dysmenorrhea (historical use)",
        "sub": null
      },
      {
        "label": "WITHDRAWAL NOTE",
        "value": "Withdrawn in USA (2005)",
        "sub": "CV and skin reaction risks"
      }
    ],
    "brandTable": [
      {
        "name": "Bextra",
        "form": "Tablets",
        "strengths": "10 mg, 20 mg",
        "manufacturer": "Pfizer (Pharmacia)",
        "region": "USA (withdrawn), some markets"
      },
      {
        "name": "Valdecox",
        "form": "Tablets",
        "strengths": "10 mg, 20 mg",
        "manufacturer": "Various (Generic)",
        "region": "Limited markets"
      },
      {
        "name": "Valcox",
        "form": "Tablets",
        "strengths": "10 mg, 20 mg",
        "manufacturer": "Various (Generic)",
        "region": "Asia"
      },
      {
        "name": "Coxib",
        "form": "Tablets",
        "strengths": "20 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      },
      {
        "name": "Valdyx",
        "form": "Tablets",
        "strengths": "10 mg, 20 mg",
        "manufacturer": "Various (Generic)",
        "region": "India"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Increased risk of bleeding events and elevated INR.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive efficacy and potential for renal dysfunction.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Reduced clearance of methotrexate leading to increased plasma levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels due to reduced renal excretion.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Fluconazole and CYP2C9 Inhibitors",
        "effect": "Increased valdecoxib levels due to CYP2C9 inhibition.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Reduced diuretic and antihypertensive effect.",
        "severity": "Moderate"
      }
    ],
    "warning": "BLACK BOX WARNING (Historical): Increased risk of cardiovascular thrombotic events and serious skin reactions (Stevens-Johnson syndrome). Withdrawn from US market in 2005. Contraindicated in patients with sulfonamide allergy. Avoid use in patients with established CV disease.",
    "subCategoryId": "coxibs"
  },
  {
    "id": "lumiracoxib",
    "categoryId": "nsaids",
    "genericName": "Lumiracoxib",
    "brandNames": "Prexige, Lumirax, Coxib-L, Lumicox, Prexicam",
    "description": "Highly selective COX-2 inhibitor with unique acidic structure that concentrates in inflamed tissues. Withdrawn from most markets due to hepatotoxicity. Still available in some countries with restricted access.",
    "status": "Rx Only (Withdrawn in many countries)",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "OA and Acute Pain (Historical)",
    "dosageForm": "Oral Tablets",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "100-200 mg once daily",
        "sub": "Max: 400 mg/day (historical)"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "Rapid absorption",
        "sub": "3-6 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, acute pain, dental pain, dysmenorrhea (historical)",
        "sub": null
      },
      {
        "label": "UNIQUE PROPERTY",
        "value": "Tissue-selective distribution",
        "sub": "Concentrates in inflamed tissues"
      }
    ],
    "brandTable": [
      {
        "name": "Prexige",
        "form": "Tablets",
        "strengths": "100 mg, 200 mg, 400 mg",
        "manufacturer": "Novartis",
        "region": "Many countries (withdrawn)"
      },
      {
        "name": "Lumirax",
        "form": "Tablets",
        "strengths": "100 mg, 200 mg",
        "manufacturer": "Various (Generic)",
        "region": "Limited markets"
      },
      {
        "name": "Coxib-L",
        "form": "Tablets",
        "strengths": "100 mg, 200 mg",
        "manufacturer": "Various (Generic)",
        "region": "Asia"
      },
      {
        "name": "Lumicox",
        "form": "Tablets",
        "strengths": "100 mg, 200 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Prexicam",
        "form": "Tablets",
        "strengths": "100 mg, 200 mg",
        "manufacturer": "Various (Generic)",
        "region": "Limited markets"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Increased risk of bleeding due to platelet COX-1 inhibition at high doses.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect and risk of renal dysfunction.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Reduced clearance of methotrexate.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Hepatotoxic Drugs",
        "effect": "Additive hepatotoxicity risk. Avoid combination with other hepatotoxic agents.",
        "severity": "Major"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Reduced diuretic efficacy.",
        "severity": "Moderate"
      }
    ],
    "warning": "BLACK BOX WARNING: Severe hepatotoxicity including fatal liver failure. Withdrawn from most countries. Liver function monitoring mandatory during therapy. Use only in patients unresponsive to other NSAIDs. Contraindicated in patients with pre-existing hepatic impairment. Avoid alcohol.",
    "subCategoryId": "coxibs"
  },
  {
    "id": "roficoxib",
    "categoryId": "nsaids",
    "genericName": "Rofecoxib",
    "brandNames": "Vioxx, Ceoxx, Rofecox, Coxxib, Viox",
    "description": "Highly selective COX-2 inhibitor that was one of the most widely prescribed NSAIDs worldwide before being withdrawn in 2004 due to increased cardiovascular risk. Landmark case in drug safety.",
    "status": "Withdrawn",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "OA and Acute Pain (Historical)",
    "specialField": {
      "label": "Status",
      "value": "Withdrawn 2004"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "12.5-25 mg once daily (historical)",
        "sub": "Max: 50 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "~17 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, acute pain, migraine, dysmenorrhea (historical use)",
        "sub": null
      },
      {
        "label": "WITHDRAWAL",
        "value": "Withdrawn worldwide 2004",
        "sub": "Increased MI and stroke risk"
      }
    ],
    "brandTable": [
      {
        "name": "Vioxx",
        "form": "Tablets, Oral Suspension",
        "strengths": "12.5 mg, 25 mg, 50 mg",
        "manufacturer": "Merck",
        "region": "Global (withdrawn)"
      },
      {
        "name": "Ceoxx",
        "form": "Tablets",
        "strengths": "12.5 mg, 25 mg",
        "manufacturer": "Merck",
        "region": "Europe (withdrawn)"
      },
      {
        "name": "Rofecox",
        "form": "Tablets",
        "strengths": "12.5 mg, 25 mg",
        "manufacturer": "Various (Generic)",
        "region": "Limited markets"
      },
      {
        "name": "Coxxib",
        "form": "Tablets",
        "strengths": "25 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan (withdrawn)"
      },
      {
        "name": "Viox",
        "form": "Tablets",
        "strengths": "12.5 mg, 25 mg",
        "manufacturer": "Various (Generic)",
        "region": "Asia (withdrawn)"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Increased risk of bleeding due to platelet inhibition.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors",
        "effect": "Reduced antihypertensive effect and risk of renal dysfunction.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Reduced clearance of methotrexate.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Rifampicin",
        "effect": "Reduced rofecoxib levels due to CYP induction.",
        "severity": "Minor"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Reduced diuretic and antihypertensive effect.",
        "severity": "Moderate"
      }
    ],
    "warning": "BLACK BOX WARNING (Historical): Increased risk of serious cardiovascular events including MI and stroke. Withdrawn from worldwide market in 2004 following APPROVe study results showing increased cardiovascular risk with long-term use. Landmark case that changed NSAID regulatory landscape.",
    "subCategoryId": "coxibs"
  },
  {
    "id": "clonixin",
    "categoryId": "nsaids",
    "genericName": "Clonixin",
    "brandNames": "Clonix, Clonidol, Clexin, Dolonix, Clofan",
    "description": "Fenamate NSAID related to mefenamic acid. Used primarily for mild-to-moderate pain and dysmenorrhea. Available in combination with other analgesics in some regions. Popular in Pakistan and Latin America.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Mild-to-Moderate Pain",
    "dosageForm": "Oral Tablets/Injection",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "125-250 mg TID",
        "sub": "Max: 750 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "3-5 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Musculoskeletal pain, dental pain, dysmenorrhea, post-operative pain, headache",
        "sub": null
      },
      {
        "label": "COMBINATION USE",
        "value": "Often combined with other analgesics",
        "sub": "Enhanced efficacy in pain management"
      }
    ],
    "brandTable": [
      {
        "name": "Clonix",
        "form": "Tablets",
        "strengths": "125 mg, 250 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Clonidol",
        "form": "Tablets, Injection",
        "strengths": "125 mg; 125 mg/mL IM",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, Latin America"
      },
      {
        "name": "Clexin",
        "form": "Tablets",
        "strengths": "125 mg, 250 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Dolonix",
        "form": "Tablets",
        "strengths": "125 mg + paracetamol combinations",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, Latin America"
      },
      {
        "name": "Clofan",
        "form": "Tablets",
        "strengths": "125 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Increased bleeding risk due to platelet inhibition.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect and risk of renal dysfunction.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels due to reduced clearance.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI irritation and increased ulceration risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Aspirin and Other NSAIDs",
        "effect": "Increased GI bleeding risk. Avoid combination.",
        "severity": "Moderate"
      }
    ],
    "warning": "Standard NSAID precautions apply. GI side effects similar to other fenamates. Caution in patients with renal impairment. Avoid in third trimester of pregnancy. Discontinue if signs of GI bleeding occur.",
    "subCategoryId": "fenamates"
  },
  {
    "id": "lysine-clonixinate",
    "categoryId": "nsaids",
    "genericName": "Lysine Clonixinate",
    "brandNames": "Dolotral, Clonix-L, Lisiclon, Tralgiol, Clonixate",
    "description": "Lysine salt formulation of clonixin with improved solubility and faster absorption. Used for acute pain management with parenteral and oral formulations. Popular in Latin America and increasingly in Asia.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Acute Pain Management",
    "dosageForm": "Oral/IM/IV",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "125-250 mg TID (oral)",
        "sub": "125 mg IM/IV every 6-8 hours"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "15-30 min (oral); 5-10 min (IM/IV)",
        "sub": "2-4 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Acute pain, renal colic, post-operative pain, musculoskeletal pain, dysmenorrhea",
        "sub": null
      },
      {
        "label": "ADVANTAGE",
        "value": "Improved solubility",
        "sub": "Faster absorption, suitable for injection"
      }
    ],
    "brandTable": [
      {
        "name": "Dolotral",
        "form": "Tablets, IM/IV Injection",
        "strengths": "125 mg, 250 mg; 125 mg/2 mL injection",
        "manufacturer": "Sanofi-Aventis",
        "region": "Latin America, Pakistan"
      },
      {
        "name": "Clonix-L",
        "form": "Tablets, Injection",
        "strengths": "125 mg; 125 mg injection",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Lisiclon",
        "form": "Tablets",
        "strengths": "125 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      },
      {
        "name": "Tralgiol",
        "form": "Injection, Tablets",
        "strengths": "125 mg/2 mL; 125 mg tablets",
        "manufacturer": "Roemmers",
        "region": "Latin America"
      },
      {
        "name": "Clonixate",
        "form": "Tablets",
        "strengths": "125 mg, 250 mg",
        "manufacturer": "Various (Generic)",
        "region": "India, Asia"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Increased risk of bleeding.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect and risk of renal dysfunction.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased clearance of methotrexate.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI irritation.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Reduced diuretic efficacy.",
        "severity": "Minor"
      }
    ],
    "warning": "Injectable formulation provides rapid pain relief. Standard NSAID GI, CV, and renal precautions apply. Avoid in patients with active GI bleeding. Not recommended in third trimester of pregnancy. Injection may cause local site reactions.",
    "subCategoryId": "fenamates"
  },
  {
    "id": "carprofen",
    "categoryId": "nsaids",
    "genericName": "Carprofen",
    "brandNames": "Rimadyl, Carprofen, Carprieve, Novox, Carprox",
    "description": "Propionic acid NSAID that is primarily used in veterinary medicine but also available for human use in some countries. Used for osteoarthritis and acute pain conditions. Well-established safety profile in both humans and animals.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Osteoarthritis and Pain",
    "dosageForm": "Oral Tablets/Caplets",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "150-300 mg daily in 2-3 divided doses",
        "sub": "Max: 300 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "12-16 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, acute pain, tendinitis, bursitis",
        "sub": null
      },
      {
        "label": "VETERINARY USE",
        "value": "Extensively used in dogs",
        "sub": "Approved for canine OA"
      }
    ],
    "brandTable": [
      {
        "name": "Rimadyl",
        "form": "Tablets, Caplets",
        "strengths": "25 mg, 50 mg, 75 mg, 100 mg",
        "manufacturer": "Pfizer (Zoetis)",
        "region": "USA, UK, Europe, Global"
      },
      {
        "name": "Carprofen",
        "form": "Tablets",
        "strengths": "100 mg, 150 mg, 200 mg",
        "manufacturer": "Various (Generic)",
        "region": "USA, Europe"
      },
      {
        "name": "Carprieve",
        "form": "Tablets, Injectable",
        "strengths": "50 mg, 100 mg; 50 mg/mL injection",
        "manufacturer": "Norbrook",
        "region": "UK, Europe"
      },
      {
        "name": "Novox",
        "form": "Caplets",
        "strengths": "50 mg, 100 mg",
        "manufacturer": "VetOne",
        "region": "USA"
      },
      {
        "name": "Carprox",
        "form": "Tablets",
        "strengths": "100 mg, 200 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Europe"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Increased bleeding risk due to platelet inhibition.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive efficacy and renal function risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI toxicity and increased risk of ulceration.",
        "severity": "Major"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Reduced diuretic efficacy and increased fluid retention.",
        "severity": "Minor"
      }
    ],
    "warning": "Standard NSAID precautions apply. May cause GI upset and bleeding. Not recommended in patients with active GI ulceration or bleeding disorders. Caution in elderly patients and those with hepatic/renal impairment. Avoid in third trimester of pregnancy.",
    "subCategoryId": "propionic-acids"
  },
  {
    "id": "benzydamine",
    "categoryId": "nsaids",
    "genericName": "Benzydamine",
    "brandNames": "Tantum, Difflam, Benzyd, Oraldene, Benzym",
    "description": "Unique NSAID with local anesthetic and antimicrobial properties. Used primarily as a topical mouthwash or spray for oral inflammatory conditions. Also available as topical gel for musculoskeletal pain. Not a COX inhibitor - works through membrane stabilization.",
    "status": "OTC + Rx",
    "isCommonlyPrescribed": false,
    "isOTCAndRx": true,
    "primaryIndication": "Oral Inflammation and Mucosal Pain",
    "dosageForm": "Topical/Mouthwash/Spray/Gel",
    "stats": [
      {
        "label": "STANDARD DOSE (Mouthwash)",
        "value": "15 mL of 0.15% solution 3-4 times daily",
        "sub": "Gargle for 30 seconds then expectorate"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "Rapid local onset",
        "sub": "Minimal systemic absorption"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Pharyngitis, stomatitis, gingivitis, oral ulcers, post-dental surgery, musculoskeletal pain (gel)",
        "sub": null
      },
      {
        "label": "UNIQUE MECHANISM",
        "value": "Membrane stabilization",
        "sub": "Not a COX inhibitor, different from other NSAIDs"
      }
    ],
    "brandTable": [
      {
        "name": "Tantum",
        "form": "Mouthwash, Oral Spray, Lozenges",
        "strengths": "0.15% solution; 0.15% spray; 3 mg lozenges",
        "manufacturer": "Angelini Pharma",
        "region": "Europe, Asia, Pakistan, Middle East"
      },
      {
        "name": "Difflam",
        "form": "Mouthwash, Oral Spray, Gel, Lozenges",
        "strengths": "0.15% mouthwash; 0.15% spray; 3% gel; 3 mg lozenges",
        "manufacturer": "Meda (Mylan)",
        "region": "UK, Europe, Asia, Australia"
      },
      {
        "name": "Benzyd",
        "form": "Mouthwash, Spray",
        "strengths": "0.15% mouthwash; 0.15% spray",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Oraldene",
        "form": "Mouthwash",
        "strengths": "0.15% solution",
        "manufacturer": "Pfizer",
        "region": "UK, Europe"
      },
      {
        "name": "Benzym",
        "form": "Mouthwash, Oral Gel",
        "strengths": "0.15% solution; 3% gel",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      }
    ],
    "interactions": [
      {
        "drugClass": "Other Oral Topical Agents",
        "effect": "May reduce efficacy of concurrently applied oral medications. Allow time between applications.",
        "severity": "Minor"
      },
      {
        "drugClass": "Oral Antiseptics (Chlorhexidine)",
        "effect": "Can be used together. May reduce oral discomfort from other oral care products.",
        "severity": "Minor"
      },
      {
        "drugClass": "Systemic NSAIDs",
        "effect": "No significant interaction due to minimal systemic absorption from topical use.",
        "severity": "Minor"
      },
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Minimal interaction risk due to topical use and low systemic absorption.",
        "severity": "Minor"
      },
      {
        "drugClass": "Local Anesthetics (Lidocaine)",
        "effect": "Can be used sequentially for enhanced oral pain relief.",
        "severity": "Minor"
      }
    ],
    "warning": "For topical/mucosal use only. Avoid contact with eyes. Do not swallow mouthwash. If irritation or hypersensitivity occurs, discontinue use. Not a traditional COX-inhibiting NSAID - different safety profile. Can cause transient numbness of oral tissues. Not recommended for prolonged continuous use (>7 days) without medical advice.",
    "subCategoryId": "others"
  },
  {
    "id": "diclofenac-potassium",
    "categoryId": "nsaids",
    "genericName": "Diclofenac Potassium",
    "brandNames": "Cataflam, Voltaren Rapid, Diclo-K, K-Fenac, Rapidus",
    "description": "Potassium salt of diclofenac with faster absorption and onset of action compared to diclofenac sodium. Preferred for acute pain conditions where rapid relief is needed, such as migraine and dental pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Acute Pain (Rapid Relief)",
    "dosageForm": "Oral Tablets/Powder",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "50 mg TID",
        "sub": "Max: 150 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "15-30 min onset",
        "sub": "1-2 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Acute pain, migraine, dental pain, dysmenorrhea, musculoskeletal pain",
        "sub": null
      },
      {
        "label": "DIFFERENCE",
        "value": "Faster absorption than sodium salt",
        "sub": "Preferred for acute pain"
      }
    ],
    "brandTable": [
      {
        "name": "Cataflam",
        "form": "Tablets, Oral Drops",
        "strengths": "50 mg tablets; 15 mg/mL oral drops",
        "manufacturer": "Novartis",
        "region": "USA, UK, Europe, Global"
      },
      {
        "name": "Voltaren Rapid",
        "form": "Tablets",
        "strengths": "25 mg, 50 mg",
        "manufacturer": "Novartis",
        "region": "Europe, Asia, Pakistan"
      },
      {
        "name": "Diclo-K",
        "form": "Tablets",
        "strengths": "25 mg, 50 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "K-Fenac",
        "form": "Tablets",
        "strengths": "50 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      },
      {
        "name": "Rapidus",
        "form": "Tablets, Oral Powder Sachets",
        "strengths": "50 mg; 50 mg/sachet",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Increased bleeding risk due to platelet inhibition.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Reduced renal clearance of lithium.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect and renal dysfunction risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Increased GI toxicity and ulceration risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Reduced diuretic efficacy.",
        "severity": "Moderate"
      }
    ],
    "warning": "Faster absorption leads to quicker onset but also faster clearance. Same GI, CV, and renal risks as diclofenac sodium. Use lowest effective dose for shortest duration. Avoid in third trimester of pregnancy.",
    "subCategoryId": "acetic-acids"
  },
  {
    "id": "tiaprofenic-acid",
    "categoryId": "nsaids",
    "genericName": "Tiaprofenic Acid",
    "brandNames": "Surgam, Tiaprofen, Tiaprox, Tiafen, Surgamic",
    "description": "Propionic acid NSAID noted for its excellent penetration into articular cartilage. Used primarily for OA and RA. Associated with cystitis as a distinctive adverse effect compared to other NSAIDs.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Osteoarthritis and RA",
    "dosageForm": "Oral Tablets",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "200-300 mg BID",
        "sub": "Max: 600 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "2-3 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, AS, acute musculoskeletal pain, periarthritis",
        "sub": null
      },
      {
        "label": "SPECIAL NOTE",
        "value": "Penetrates articular cartilage",
        "sub": "Good synovial fluid levels"
      }
    ],
    "brandTable": [
      {
        "name": "Surgam",
        "form": "Tablets, SR Tablets",
        "strengths": "200 mg, 300 mg; 300 mg SR",
        "manufacturer": "Sanofi-Aventis (Roussel)",
        "region": "Europe, Asia, Middle East"
      },
      {
        "name": "Tiaprofen",
        "form": "Tablets",
        "strengths": "200 mg, 300 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Tiaprox",
        "form": "Tablets",
        "strengths": "300 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      },
      {
        "name": "Tiafen",
        "form": "Tablets",
        "strengths": "200 mg, 300 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Surgamic",
        "form": "Tablets",
        "strengths": "300 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Increased bleeding risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased clearance of methotrexate.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI irritation.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Reduced diuretic efficacy.",
        "severity": "Minor"
      }
    ],
    "warning": "Distinctive risk of cystitis and sterile pyuria - monitor for urinary symptoms. Discontinue if bladder pain or hematuria occurs. Standard NSAID GI, CV, and renal precautions apply. Contraindicated in patients with active urinary tract disorders.",
    "subCategoryId": "propionic-acids"
  },
  {
    "id": "azapropazone",
    "categoryId": "nsaids",
    "genericName": "Azapropazone",
    "brandNames": "Apazone, Rheumox, Azapron, Azone, Proxazone",
    "description": "Pyrazolidine NSAID with uricosuric (uric acid-lowering) properties. Used for both inflammatory arthritis and acute gout. Has longer half-life and once-daily dosing. Less commonly prescribed today.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Arthritis and Gout",
    "specialField": {
      "label": "Unique Property",
      "value": "Uricosuric effect"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "600 mg once or twice daily",
        "sub": "Max: 1,200 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "12-20 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "RA, OA, AS, acute gout, psoriatic arthritis, Reiter syndrome",
        "sub": null
      },
      {
        "label": "DUAL ACTION",
        "value": "NSAID + Uricosuric",
        "sub": "Lowers uric acid levels"
      }
    ],
    "brandTable": [
      {
        "name": "Apazone",
        "form": "Capsules, Tablets",
        "strengths": "300 mg, 600 mg",
        "manufacturer": "Wyeth-Ayerst",
        "region": "USA, UK, Europe"
      },
      {
        "name": "Rheumox",
        "form": "Capsules",
        "strengths": "300 mg, 600 mg",
        "manufacturer": "Wyeth",
        "region": "UK, Europe"
      },
      {
        "name": "Azapron",
        "form": "Capsules",
        "strengths": "300 mg, 600 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Azone",
        "form": "Capsules",
        "strengths": "300 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      },
      {
        "name": "Proxazone",
        "form": "Capsules",
        "strengths": "600 mg",
        "manufacturer": "Various (Generic)",
        "region": "India, Asia"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Significantly increased bleeding risk due to protein-binding displacement.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased clearance with increased toxicity risk.",
        "severity": "Major"
      },
      {
        "drugClass": "Sulfonylureas (Glibenclamide)",
        "effect": "Increased hypoglycemic effect due to displacement from protein binding.",
        "severity": "Major"
      },
      {
        "drugClass": "Phenytoin",
        "effect": "Increased phenytoin levels with potential neurotoxicity.",
        "severity": "Major"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels due to reduced renal clearance.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Other NSAIDs",
        "effect": "Additive GI toxicity and ulceration risk.",
        "severity": "Major"
      }
    ],
    "warning": "Uricosuric property makes it effective for acute gout but also increases risk of uric acid nephropathy in patients with high uric acid production. Ensure adequate hydration. Photosensitivity reported. Standard NSAID GI, CV, and renal precautions apply.",
    "subCategoryId": "pyrazolones"
  },
  {
    "id": "firocoxib",
    "categoryId": "nsaids",
    "genericName": "Firocoxib",
    "brandNames": "Equioxx, Previcox, Firox, Coxxivet, Equicox",
    "description": "Highly selective COX-2 inhibitor developed primarily for veterinary use in horses and dogs. Approved for osteoarthritis and pain management in animals. Sometimes used in humans in regions with limited NSAID access.",
    "status": "Rx Only (Veterinary)",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Osteoarthritis (Veterinary)",
    "dosageForm": "Oral Tablets/Injectable",
    "stats": [
      {
        "label": "ANIMAL DOSE (Dog)",
        "value": "5 mg/kg once daily",
        "sub": "Approved for canine OA"
      },
      {
        "label": "ANIMAL DOSE (Horse)",
        "value": "0.1 mg/kg once daily for 14 days",
        "sub": "Equioxx oral paste"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "~8-10 hours half-life"
      },
      {
        "label": "COX-2 SELECTIVITY",
        "value": "Highly selective",
        "sub": "Minimal COX-1 inhibition"
      }
    ],
    "brandTable": [
      {
        "name": "Equioxx",
        "form": "Oral Paste",
        "strengths": "0.82% oral paste for horses",
        "manufacturer": "Merial (Boehringer Ingelheim)",
        "region": "USA, Europe, Global (veterinary)"
      },
      {
        "name": "Previcox",
        "form": "Chewable Tablets",
        "strengths": "57 mg, 227 mg for dogs",
        "manufacturer": "Merial",
        "region": "USA, Europe (veterinary)"
      },
      {
        "name": "Firox",
        "form": "Tablets",
        "strengths": "57 mg, 227 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India (veterinary)"
      },
      {
        "name": "Coxxivet",
        "form": "Tablets",
        "strengths": "57 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India (veterinary)"
      },
      {
        "name": "Equicox",
        "form": "Oral Paste",
        "strengths": "0.82%",
        "manufacturer": "Various (Generic)",
        "region": "Asia (veterinary)"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Potential increased bleeding risk despite COX-2 selectivity.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Corticosteroids",
        "effect": "Additive GI ulceration risk, though lower than non-selective NSAIDs.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors",
        "effect": "Reduced antihypertensive effect.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Other NSAIDs",
        "effect": "Additive GI toxicity without added efficacy.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Reduced diuretic efficacy.",
        "severity": "Minor"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased clearance of methotrexate.",
        "severity": "Moderate"
      }
    ],
    "warning": "Primarily a veterinary NSAID. COX-2 selective with improved GI safety profile compared to non-selective NSAIDs. Limited human safety data available. Standard coxib cardiovascular precautions apply if used in humans.",
    "subCategoryId": "coxibs"
  },
  {
    "id": "diflunisal",
    "categoryId": "nsaids",
    "genericName": "Diflunisal",
    "brandNames": "Dolobid, Diflunisal, Flovac, Diflonid, Unisal",
    "description": "Salicylate NSAID related to aspirin but without the irreversible antiplatelet effect. Used for RA and OA with longer dosing interval due to its long half-life. Lacks antipyretic activity unlike most other NSAIDs.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Rheumatoid Arthritis and OA",
    "specialField": {
      "label": "Unique Property",
      "value": "No antipyretic effect"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "250-500 mg BID",
        "sub": "Max: 1,500 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "8-12 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, acute pain, tendinitis, bursitis, soft tissue injuries",
        "sub": null
      },
      {
        "label": "DIFFERENCE FROM ASPIRIN",
        "value": "No antiplatelet effect",
        "sub": "Does not irreversibly inhibit platelets"
      }
    ],
    "brandTable": [
      {
        "name": "Dolobid",
        "form": "Tablets",
        "strengths": "250 mg, 500 mg",
        "manufacturer": "Merck",
        "region": "USA, UK, Europe, Global"
      },
      {
        "name": "Diflunisal",
        "form": "Tablets",
        "strengths": "250 mg, 500 mg",
        "manufacturer": "Various (Generic)",
        "region": "USA, Canada, Europe"
      },
      {
        "name": "Flovac",
        "form": "Tablets",
        "strengths": "250 mg, 500 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Diflonid",
        "form": "Tablets",
        "strengths": "500 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      },
      {
        "name": "Unisal",
        "form": "Tablets",
        "strengths": "250 mg, 500 mg",
        "manufacturer": "Various (Generic)",
        "region": "India, Asia"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Increased bleeding risk. Less than aspirin but still significant.",
        "severity": "Major"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate leading to increased toxicity.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive efficacy and increased renal dysfunction risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels due to reduced clearance.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics (Furosemide, Thiazides)",
        "effect": "Reduced diuretic efficacy and increased fluid retention.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Antacids (Aluminum/Magnesium)",
        "effect": "Reduced diflunisal absorption. Separate dosing by 2 hours.",
        "severity": "Minor"
      }
    ],
    "warning": "Unlike aspirin, diflunisal does not have antiplatelet effects and cannot substitute for aspirin in CV prevention. No antipyretic activity (does not reduce fever). Can cause Reye syndrome risk in children with viral illness. Standard NSAID GI and renal precautions apply. Avoid in third trimester of pregnancy.",
    "subCategoryId": "salicylates"
  },
  {
    "id": "salsalate",
    "categoryId": "nsaids",
    "genericName": "Salsalate",
    "brandNames": "Disalcid, Salsalate, Salflex, Salzone, Disal",
    "description": "Non-acetylated salicylate NSAID. Two molecules of salicylic acid linked together, releasing salicylate after absorption. Has minimal effect on platelet function and less GI toxicity than aspirin, making it useful in patients with bleeding disorders.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Rheumatoid Arthritis and OA",
    "specialField": {
      "label": "GI Safety",
      "value": "Better than aspirin"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "500-1,000 mg BID or TID",
        "sub": "Max: 3,000 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "7-8 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "RA, OA, acute pain, tendinitis, bursitis, ankylosing spondylitis",
        "sub": null
      },
      {
        "label": "PLATELET EFFECT",
        "value": "Minimal platelet inhibition",
        "sub": "Safe in bleeding disorders"
      }
    ],
    "brandTable": [
      {
        "name": "Disalcid",
        "form": "Capsules, Tablets",
        "strengths": "500 mg, 750 mg",
        "manufacturer": "3M Pharma",
        "region": "USA, Canada"
      },
      {
        "name": "Salflex",
        "form": "Tablets",
        "strengths": "500 mg, 750 mg",
        "manufacturer": "Cypress Pharma",
        "region": "USA"
      },
      {
        "name": "Salzone",
        "form": "Capsules, Tablets",
        "strengths": "500 mg, 750 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Disal",
        "form": "Tablets",
        "strengths": "500 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Salsalate",
        "form": "Capsules",
        "strengths": "500 mg, 750 mg",
        "manufacturer": "Various (Generic)",
        "region": "USA, Europe"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Less bleeding risk than aspirin but may still increase INR and bleeding risk.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate. Less interaction than with aspirin but still significant.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect, though less than with aspirin.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels due to reduced renal clearance.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Reduced diuretic efficacy.",
        "severity": "Minor"
      },
      {
        "drugClass": "Urinary Alkalinizers",
        "effect": "Increased salsalate elimination due to pH-dependent renal clearance.",
        "severity": "Minor"
      }
    ],
    "warning": "May cause tinnitus (ringing in ears) at high doses, which is an early sign of salicylism. Can cause Reye syndrome in children with viral illness, though risk is lower than with aspirin. Avoid in pregnancy, especially third trimester. Safer alternative to aspirin in patients with GI sensitivity or bleeding disorders.",
    "subCategoryId": "salicylates"
  },
  {
    "id": "choline-magnesium-trisalicylate",
    "categoryId": "nsaids",
    "genericName": "Choline Magnesium Trisalicylate",
    "brandNames": "Trilisate, Choline Magnesium, Trilisate Forte, Sal-Tropine, Choline Sal",
    "description": "Non-acetylated salicylate combination with similar advantages to salsalate: minimal platelet effects and better GI tolerability than aspirin. Used for chronic inflammatory conditions where bleeding risk is a concern.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Arthritis (GI-Sensitive Patients)",
    "dosageForm": "Oral Tablets/Liquid",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "500-1,000 mg BID or TID",
        "sub": "Max: 3,000 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "1-2 hours onset",
        "sub": "8-12 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, AS, juvenile arthritis, acute pain, soft tissue injuries",
        "sub": null
      },
      {
        "label": "PLATELET SAFETY",
        "value": "No antiplatelet effect",
        "sub": "Does not prolong bleeding time"
      }
    ],
    "brandTable": [
      {
        "name": "Trilisate",
        "form": "Tablets, Liquid",
        "strengths": "500 mg, 750 mg, 1,000 mg; 500 mg/5 mL liquid",
        "manufacturer": "Purdue Frederick",
        "region": "USA, Canada"
      },
      {
        "name": "Trilisate Forte",
        "form": "Fortified Tablets",
        "strengths": "1,000 mg",
        "manufacturer": "Purdue Frederick",
        "region": "USA"
      },
      {
        "name": "Choline Magnesium",
        "form": "Tablets, Liquid",
        "strengths": "500 mg, 750 mg; 500 mg/5 mL",
        "manufacturer": "Various (Generic)",
        "region": "USA, Canada"
      },
      {
        "name": "Sal-Tropine",
        "form": "Tablets",
        "strengths": "500 mg, 750 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Choline Sal",
        "form": "Tablets",
        "strengths": "500 mg, 750 mg",
        "manufacturer": "Various (Generic)",
        "region": "India, Asia"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Less bleeding risk than aspirin. May still cause minor INR changes.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Reduced clearance of methotrexate. Less interaction than aspirin.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Reduced diuretic efficacy.",
        "severity": "Minor"
      },
      {
        "drugClass": "Probenecid",
        "effect": "Decreased salicylate excretion, increasing salicylate levels.",
        "severity": "Moderate"
      }
    ],
    "warning": "Preferred NSAID in patients with bleeding disorders or those on anticoagulation due to minimal antiplatelet effect. Can cause tinnitus at high doses. Avoid in children with viral illness. Safer GI profile than aspirin. Contraindicated in severe renal impairment.",
    "subCategoryId": "salicylates"
  },
  {
    "id": "dipyrone-combination",
    "categoryId": "nsaids",
    "genericName": "Dipyrone + Pitofenone + Fenpiverinium",
    "brandNames": "Baralgin, Novalgin Compositum, Tanalgin, Spasmolgin, Spasmo-Analgin",
    "description": "Combination NSAID containing dipyrone (metamizole), pitofenone (antispasmodic), and fenpiverinium (anticholinergic). Used for visceral spasms and colicky pain. Popular in Pakistan, India, Latin America, and parts of Europe.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Visceral Spasms and Colic Pain",
    "specialField": {
      "label": "Type",
      "value": "Combination with antispasmodic"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "1-2 tablets TID or 2-5 mL IM/IV",
        "sub": "Max: 4 tablets/day or 10 mL injection"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "15-30 min (IM/IV); 30-60 min (oral)",
        "sub": "2-3 hours (dipyrone)"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Renal colic, biliary colic, intestinal spasms, dysmenorrhea, visceral pain",
        "sub": null
      },
      {
        "label": "COMBINATION BENEFIT",
        "value": "Analgesic + antispasmodic",
        "sub": "Dual mechanism for visceral pain"
      }
    ],
    "brandTable": [
      {
        "name": "Baralgin",
        "form": "Tablets, Injection, Drops",
        "strengths": "500 mg + 5 mg + 0.1 mg per tablet; 2.5 g + 10 mg + 0.2 mg per 5 mL injection",
        "manufacturer": "Sanofi-Aventis",
        "region": "Pakistan, India, Latin America, Europe"
      },
      {
        "name": "Tanalgin",
        "form": "Tablets, Injection",
        "strengths": "500 mg + 5 mg + 0.1 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Asia"
      },
      {
        "name": "Spasmolgin",
        "form": "Tablets, Injection",
        "strengths": "500 mg + 5 mg + 0.1 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Novalgin Compositum",
        "form": "Tablets, Injection",
        "strengths": "500 mg + 5 mg + 0.1 mg",
        "manufacturer": "Sanofi",
        "region": "Europe, Latin America"
      },
      {
        "name": "Spasmo-Analgin",
        "form": "Tablets, Injection",
        "strengths": "500 mg + 5 mg + 0.1 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India, Middle East"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin, DOACs)",
        "effect": "Enhanced anticoagulant effect and increased bleeding risk from dipyrone component.",
        "severity": "Major"
      },
      {
        "drugClass": "Myelosuppressive Agents",
        "effect": "Additive risk of agranulocytosis from dipyrone component.",
        "severity": "Major"
      },
      {
        "drugClass": "Anticholinergics (Other)",
        "effect": "Additive anticholinergic effects (dry mouth, blurred vision, constipation) from fenpiverinium component.",
        "severity": "Moderate"
      },
      {
        "drugClass": "CNS Depressants (Alcohol, Sedatives)",
        "effect": "Enhanced sedative effect.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors",
        "effect": "Reduced antihypertensive effect.",
        "severity": "Minor"
      }
    ],
    "warning": "BLACK BOX WARNING: Dipyrone component carries risk of agranulocytosis. Patients should discontinue immediately if signs of infection develop. Anticholinergic component may cause dry mouth, blurred vision, urinary retention, and constipation. Contraindicated in patients with glaucoma, prostatic hyperplasia, or G6PD deficiency. Injection may cause hypotension if given too rapidly. Do not use for more than 3-5 days.",
    "subCategoryId": "pyrazolones"
  },
  {
    "id": "celecoxib-combination",
    "categoryId": "nsaids",
    "genericName": "Celecoxib + Amlodipine (Fixed-Dose)",
    "brandNames": "Consensi, Celecox-Amlo, Coxib-AML, Celam, Amlocox",
    "description": "Fixed-dose combination of celecoxib (COX-2 inhibitor) and amlodipine (calcium channel blocker). Designed for patients with hypertension and osteoarthritis who need both BP control and pain management.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "HTN and OA Combination Therapy",
    "specialField": {
      "label": "Type",
      "value": "Fixed-dose combination"
    },
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "Celecoxib 200 mg + Amlodipine 5 mg daily",
        "sub": "May titrate amlodipine to 10 mg"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "Celecoxib: 3 hrs; Amlodipine: 6-12 hrs onset",
        "sub": "Celecoxib: 11 hrs; Amlodipine: 30-50 hrs"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA with concomitant hypertension, RA with hypertension",
        "sub": null
      },
      {
        "label": "ADVANTAGE",
        "value": "Single-pill convenience",
        "sub": "Improved adherence for comorbid patients"
      }
    ],
    "brandTable": [
      {
        "name": "Consensi",
        "form": "Tablets",
        "strengths": "200 mg + 5 mg; 200 mg + 10 mg",
        "manufacturer": "AstraZeneca / POZEN",
        "region": "USA"
      },
      {
        "name": "Celecox-Amlo",
        "form": "Capsules",
        "strengths": "200 mg + 5 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Coxib-AML",
        "form": "Capsules",
        "strengths": "200 mg + 5 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      },
      {
        "name": "Celam",
        "form": "Capsules",
        "strengths": "200 mg + 5 mg, 200 mg + 10 mg",
        "manufacturer": "Various (Generic)",
        "region": "India, Asia"
      },
      {
        "name": "Amlocox",
        "form": "Capsules",
        "strengths": "200 mg + 5 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      }
    ],
    "interactions": [
      {
        "drugClass": "Warfarin and Anticoagulants",
        "effect": "Increased bleeding risk from celecoxib component.",
        "severity": "Major"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Additive antihypertensive effect with amlodipine; however NSAID component may blunt overall BP response.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Reduced clearance of methotrexate from celecoxib component.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "CYP3A4 Inhibitors (Ketoconazole)",
        "effect": "Increased amlodipine and celecoxib levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Grapefruit Juice",
        "effect": "Increased amlodipine levels due to CYP3A4 inhibition.",
        "severity": "Moderate"
      }
    ],
    "warning": "Black box warning for celecoxib: increased CV thrombotic risk. Amlodipine component may cause peripheral edema and dizziness. Monitor BP regularly. Contraindicated in patients with severe CAD or recent MI. Not recommended in pregnancy. Avoid grapefruit juice during therapy.",
    "subCategoryId": "coxibs"
  },
  {
    "id": "magnesium-salicylate",
    "categoryId": "nsaids",
    "genericName": "Magnesium Salicylate",
    "brandNames": "Magan, Mobidin, Salici-Mg, Mag-Salic, Doan",
    "description": "Non-acetylated salicylate similar to salsalate but with magnesium as the cation. Used for mild-to-moderate pain and inflammation. Has minimal platelet effects and better GI tolerability than aspirin.",
    "status": "OTC + Rx",
    "isCommonlyPrescribed": false,
    "isOTCAndRx": true,
    "primaryIndication": "Mild-to-Moderate Pain",
    "dosageForm": "Oral Tablets",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "500-650 mg TID or QID",
        "sub": "Max: 2,600 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "8-10 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "OA, RA, mild-to-moderate pain, back pain, tendinitis",
        "sub": null
      },
      {
        "label": "ADVANTAGE",
        "value": "No antiplatelet effect",
        "sub": "Safe in bleeding disorders"
      }
    ],
    "brandTable": [
      {
        "name": "Magan",
        "form": "Tablets",
        "strengths": "500 mg, 650 mg",
        "manufacturer": "Various",
        "region": "USA, Canada"
      },
      {
        "name": "Mobidin",
        "form": "Tablets",
        "strengths": "500 mg, 650 mg",
        "manufacturer": "Various",
        "region": "USA"
      },
      {
        "name": "Salici-Mg",
        "form": "Tablets",
        "strengths": "500 mg, 650 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Mag-Salic",
        "form": "Tablets",
        "strengths": "500 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      },
      {
        "name": "Doan Pills",
        "form": "Tablets",
        "strengths": "500 mg magnesium salicylate",
        "manufacturer": "Precision Dose",
        "region": "USA"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Minimal interaction compared to aspirin due to lack of platelet inhibition.",
        "severity": "Minor"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Decreased renal clearance of methotrexate.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors and ARBs",
        "effect": "Reduced antihypertensive effect.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Reduced diuretic efficacy.",
        "severity": "Minor"
      },
      {
        "drugClass": "Tetracycline Antibiotics",
        "effect": "Magnesium may chelate tetracyclines, reducing absorption.",
        "severity": "Minor"
      }
    ],
    "warning": "Less GI irritation than aspirin due to non-acetylated structure. No antiplatelet effect, making it safer in patients with bleeding disorders. May cause tinnitus at high doses. Avoid in children with viral illness (Reye syndrome risk). Caution in severe renal impairment due to magnesium content.",
    "subCategoryId": "salicylates"
  },
  {
    "id": "sodium-salicylate",
    "categoryId": "nsaids",
    "genericName": "Sodium Salicylate",
    "brandNames": "Sod Sal, Sal Soda, Sodium Sal, Salicyl Sodium, Salizone",
    "description": "Oldest form of salicylate NSAID. Non-acetylated salicylate with similar properties to other non-acetylated salicylates. Rarely used today due to availability of better-tolerated alternatives but available in some regions.",
    "status": "OTC",
    "isCommonlyPrescribed": false,
    "isOTCAndRx": false,
    "primaryIndication": "Mild Pain and Fever",
    "dosageForm": "Oral Tablets",
    "stats": [
      {
        "label": "STANDARD ADULT DOSE",
        "value": "300-600 mg every 4-6 hours",
        "sub": "Max: 3,600 mg/day"
      },
      {
        "label": "ONSET / HALF-LIFE",
        "value": "30-60 min onset",
        "sub": "2-3 hours half-life"
      },
      {
        "label": "CLINICAL INDICATIONS",
        "value": "Mild-to-moderate pain, fever, headache",
        "sub": null
      },
      {
        "label": "NOTE",
        "value": "Rarely prescribed today",
        "sub": "Replaced by other NSAIDs"
      }
    ],
    "brandTable": [
      {
        "name": "Sod Sal",
        "form": "Tablets",
        "strengths": "300 mg, 600 mg",
        "manufacturer": "Various",
        "region": "Pakistan, India"
      },
      {
        "name": "Sodium Sal",
        "form": "Tablets",
        "strengths": "300 mg, 600 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan, India"
      },
      {
        "name": "Salizone",
        "form": "Tablets",
        "strengths": "300 mg, 600 mg",
        "manufacturer": "Various (Generic)",
        "region": "Pakistan"
      },
      {
        "name": "Sal Soda",
        "form": "Effervescent Powder",
        "strengths": "1,000 mg/sachet",
        "manufacturer": "Various",
        "region": "Pakistan, India"
      },
      {
        "name": "Salicyl Sodium",
        "form": "Tablets",
        "strengths": "300 mg",
        "manufacturer": "Various (Generic)",
        "region": "India, Asia"
      }
    ],
    "interactions": [
      {
        "drugClass": "Anticoagulants (Warfarin)",
        "effect": "Minor increase in bleeding risk, less than aspirin.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Methotrexate",
        "effect": "Reduced clearance of methotrexate.",
        "severity": "Moderate"
      },
      {
        "drugClass": "ACE Inhibitors",
        "effect": "Reduced antihypertensive effect.",
        "severity": "Minor"
      },
      {
        "drugClass": "Lithium",
        "effect": "Elevated lithium levels.",
        "severity": "Moderate"
      },
      {
        "drugClass": "Diuretics",
        "effect": "Reduced diuretic efficacy.",
        "severity": "Minor"
      },
      {
        "drugClass": "Probenecid",
        "effect": "Reduced salicylate excretion, increasing salicylate levels.",
        "severity": "Moderate"
      }
    ],
    "warning": "Contains sodium - use with caution in patients with hypertension, heart failure, or renal impairment. Non-acetylated structure means less platelet inhibition than aspirin. Avoid in children with viral illness. May cause tinnitus at high doses. Contraindicated in active peptic ulcer disease.",
    "subCategoryId": "salicylates"
  }
];
