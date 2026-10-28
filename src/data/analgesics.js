// data/analgesics.js
export const analgesics = [
  {
    "id": "amitriptyline",
    "categoryId": "analgesics",
    "genericName": "Amitriptyline",
    "brandNames": "Elavil, Endep, Amitril, Levate",
    "description": "Tricyclic antidepressant (TCA) used as first-line adjuvant analgesic for chronic neuropathic pain, including diabetic neuropathy and postherpetic neuralgia.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Neuropathic Pain, Depression",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "10-25 mg at bedtime, titrated to 75-150 mg/day", "sub": "Analgesic effect at lower doses than antidepressant doses" },
      { "label": "ONSET / HALF-LIFE", "value": "2-4 weeks for analgesic effect", "sub": "15-30 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Diabetic neuropathy, postherpetic neuralgia, fibromyalgia, chronic low back pain, migraine prophylaxis", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Strong anticholinergic effects limit use in elderly", "sub": "Fall risk, urinary retention, constipation, cardiac conduction delays" }
    ],
    "brandTable": [
      { "name": "Elavil", "form": "Tablets", "strengths": "10 mg, 25 mg, 50 mg, 75 mg, 100 mg, 150 mg", "manufacturer": "Merck (AstraZeneca)", "region": "USA, Canada, Global" },
      { "name": "Endep", "form": "Tablets", "strengths": "10 mg, 25 mg, 50 mg, 75 mg, 100 mg", "manufacturer": "Alphapharm", "region": "Australia, New Zealand" },
      { "name": "Amitril", "form": "Tablets", "strengths": "10 mg, 25 mg, 50 mg, 75 mg", "manufacturer": "Parke-Davis (Pfizer)", "region": "Pakistan, India, Asia" },
      { "name": "Levate", "form": "Tablets", "strengths": "10 mg, 25 mg, 50 mg, 75 mg", "manufacturer": "Bayer", "region": "Pakistan, India" },
      { "name": "Amitriptyline HCl", "form": "Tablets", "strengths": "10 mg, 25 mg, 50 mg, 75 mg, 100 mg, 150 mg", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "Hypertensive crisis and serotonin syndrome risk.", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs (Fluoxetine, Paroxetine)", "effect": "Increased TCA levels, serotonin syndrome risk.", "severity": "Major" },
      { "drugClass": "CNS Depressants (Alcohol, Benzodiazepines)", "effect": "Additive sedation and respiratory depression.", "severity": "Major" },
      { "drugClass": "Anticholinergics (Antihistamines, Antispasmodics)", "effect": "Additive anticholinergic effects.", "severity": "Moderate" },
      { "drugClass": "Clonidine and Antihypertensives", "effect": "Reduced antihypertensive effect, hypertensive rebound.", "severity": "Moderate" },
      { "drugClass": "QT-Prolonging Agents (Amiodarone, Sotalol)", "effect": "Additive QT prolongation, risk of torsades de pointes.", "severity": "Major" }
    ],
    "warning": "Black box warning: increased risk of suicidal thinking in children and young adults. Avoid abrupt discontinuation. Use with caution in patients with seizure disorder, hyperthyroidism, CV disease, or history of urinary retention.",
    "subCategoryId": "adjuvant-antidepressants"
  },
  {
    "id": "nortriptyline",
    "categoryId": "analgesics",
    "genericName": "Nortriptyline",
    "brandNames": "Pamelor, Aventyl, Allegron, Norpress",
    "description": "Secondary amine tricyclic antidepressant with fewer anticholinergic effects and better tolerability than amitriptyline, used as adjuvant analgesic for neuropathic pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Neuropathic Pain, Depression",
    "dosageForm": "Oral Capsules/Solution",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "10-25 mg at bedtime, titrated to 50-150 mg/day", "sub": "Lower doses effective for analgesia than for depression" },
      { "label": "ONSET / HALF-LIFE", "value": "2-4 weeks for analgesic effect", "sub": "18-44 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Diabetic neuropathy, postherpetic neuralgia, chronic low back pain, fibromyalgia", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Preferred TCA in elderly due to fewer anticholinergic effects", "sub": "Less sedation and orthostatic hypotension than amitriptyline" }
    ],
    "brandTable": [
      { "name": "Pamelor", "form": "Capsules, Solution", "strengths": "10 mg, 25 mg, 50 mg, 75 mg; 10 mg/5 mL oral solution", "manufacturer": "Mallinckrodt", "region": "USA, Canada" },
      { "name": "Aventyl", "form": "Capsules, Liquid", "strengths": "10 mg, 25 mg, 50 mg, 75 mg; 10 mg/5 mL", "manufacturer": "Eli Lilly", "region": "USA, UK, Europe" },
      { "name": "Allegron", "form": "Tablets, Capsules", "strengths": "10 mg, 25 mg, 50 mg, 75 mg", "manufacturer": "Alphapharm", "region": "Australia, New Zealand" },
      { "name": "Norpress", "form": "Tablets", "strengths": "10 mg, 25 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India" },
      { "name": "Nortriptyline HCl", "form": "Capsules", "strengths": "10 mg, 25 mg, 50 mg, 75 mg", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "Hypertensive crisis, serotonin syndrome.", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs (Fluoxetine, Paroxetine)", "effect": "Increased nortriptyline levels, serotonin syndrome.", "severity": "Major" },
      { "drugClass": "CNS Depressants (Alcohol, Sedatives)", "effect": "Additive CNS depression and sedation.", "severity": "Major" },
      { "drugClass": "Sympathomimetics (Epinephrine, Norepinephrine)", "effect": "Enhanced pressor response, hypertensive effect.", "severity": "Moderate" },
      { "drugClass": "Anticholinergics", "effect": "Additive anticholinergic effects.", "severity": "Moderate" },
      { "drugClass": "QT-Prolonging Agents", "effect": "Additive QT prolongation risk.", "severity": "Major" }
    ],
    "warning": "Black box warning: suicidality risk in young adults. Monitor for hypomania in bipolar patients. Use cautiously in patients with cardiovascular disease or seizure disorders. Therapeutic drug monitoring available (target 50-150 ng/mL).",
    "subCategoryId": "adjuvant-antidepressants"
  },
  {
    "id": "duloxetine",
    "categoryId": "analgesics",
    "genericName": "Duloxetine",
    "brandNames": "Cymbalta, Drizalma Sprinkle, Irenka, Yentreve",
    "description": "SNRI antidepressant that inhibits serotonin and norepinephrine reuptake, FDA-approved for diabetic peripheral neuropathy and fibromyalgia as a first-line analgesic adjuvant.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Neuropathic Pain, Fibromyalgia",
    "dosageForm": "Oral Delayed-Release Capsules",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "30-60 mg once daily, may increase to 60-120 mg/day", "sub": "Max: 120 mg/day (in divided doses if >60 mg)" },
      { "label": "ONSET / HALF-LIFE", "value": "2-4 weeks for analgesic response", "sub": "~12 hours half-life (active metabolite)" },
      { "label": "CLINICAL INDICATIONS", "value": "Diabetic peripheral neuropathy, fibromyalgia, chronic musculoskeletal pain, OA-related pain, chemotherapy-induced neuropathy", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Do not crush or chew capsules; risk of withdrawal on abrupt cessation", "sub": "Taper gradually when discontinuing over 2-4 weeks" }
    ],
    "brandTable": [
      { "name": "Cymbalta", "form": "Delayed-Release Capsules", "strengths": "20 mg, 30 mg, 40 mg, 60 mg", "manufacturer": "Eli Lilly", "region": "USA, UK, Europe, Global" },
      { "name": "Drizalma Sprinkle", "form": "Delayed-Release Sprinkle Capsules", "strengths": "20 mg, 30 mg, 40 mg, 60 mg", "manufacturer": "Almatica Pharma", "region": "USA" },
      { "name": "Irenka", "form": "Delayed-Release Capsules", "strengths": "30 mg, 60 mg", "manufacturer": "Torrent Pharma", "region": "Pakistan, India, Asia" },
      { "name": "Yentreve", "form": "Delayed-Release Capsules", "strengths": "20 mg, 40 mg", "manufacturer": "Eli Lilly", "region": "Europe, UK (for stress incontinence)" },
      { "name": "Duloxetine HCl", "form": "Delayed-Release Capsules", "strengths": "20 mg, 30 mg, 40 mg, 60 mg", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "Severe serotonin syndrome, hypertensive crisis.", "severity": "Major" },
      { "drugClass": "Other Serotonergic Drugs (SSRIs, Triptans)", "effect": "Additive serotonin syndrome risk.", "severity": "Major" },
      { "drugClass": "CYP1A2 Inhibitors (Fluvoxamine, Ciprofloxacin)", "effect": "Increased duloxetine levels, toxicity risk.", "severity": "Moderate" },
      { "drugClass": "NSAIDs/Aspirin/Anticoagulants", "effect": "Increased bleeding risk via serotonin-mediated platelet inhibition.", "severity": "Moderate" },
      { "drugClass": "CYP2D6 Substrates (TCAs, Flecainide)", "effect": "Increased levels of co-administered CYP2D6 substrates.", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Increased hepatotoxicity risk; avoid combination.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: suicidality risk. Increased risk of bleeding when used with NSAIDs/anticoagulants. Monitor for hepatotoxicity, hyponatremia, and serotonin syndrome. Avoid in uncontrolled narrow-angle glaucoma. Withdrawal syndrome on abrupt discontinuation.",
    "subCategoryId": "adjuvant-antidepressants"
  },
  {
    "id": "venlafaxine",
    "categoryId": "analgesics",
    "genericName": "Venlafaxine",
    "brandNames": "Effexor XR, Trevilor, Vencarm",
    "description": "SNRI antidepressant effective for neuropathic pain at higher dose ranges where norepinephrine reuptake inhibition becomes significant, particularly for diabetic neuropathy.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Neuropathic Pain, Depression",
    "dosageForm": "Oral Extended-Release Capsules/Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "37.5-75 mg once daily, titrated to 150-225 mg/day", "sub": "Analgesic effects require higher doses (>150 mg/day)" },
      { "label": "ONSET / HALF-LIFE", "value": "2-4 weeks for analgesic effect", "sub": "3-7 hours half-life; active metabolite 9-13 hours" },
      { "label": "CLINICAL INDICATIONS", "value": "Diabetic neuropathy, fibromyalgia, chronic pain syndrome, migraine prophylaxis", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Dose-dependent blood pressure increase at >150 mg/day", "sub": "Monitor BP regularly; severe withdrawal syndrome on abrupt cessation" }
    ],
    "brandTable": [
      { "name": "Effexor XR", "form": "Extended-Release Capsules", "strengths": "37.5 mg, 75 mg, 150 mg", "manufacturer": "Pfizer (Wyeth)", "region": "USA, UK, Europe, Global" },
      { "name": "Trevilor", "form": "Extended-Release Capsules, Tablets", "strengths": "37.5 mg, 75 mg, 150 mg", "manufacturer": "Grunenthal", "region": "Europe, Middle East" },
      { "name": "Vencarm", "form": "Extended-Release Capsules", "strengths": "37.5 mg, 75 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Venlafaxine ER", "form": "Extended-Release Capsules, Tablets", "strengths": "37.5 mg, 75 mg, 150 mg, 225 mg", "manufacturer": "Various (Generic)", "region": "USA, Global" },
      { "name": "Venlift OD", "form": "Extended-Release Capsules", "strengths": "75 mg, 150 mg", "manufacturer": "Cipla", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "Severe serotonin syndrome, hypertensive crisis; 14-day washout required.", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs/Triptans", "effect": "Additive serotonin syndrome risk.", "severity": "Major" },
      { "drugClass": "NSAIDs/Aspirin/Anticoagulants", "effect": "Increased bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Antihypertensives", "effect": "May antagonize antihypertensive effect (dose-dependent).", "severity": "Moderate" },
      { "drugClass": "CYP3A4 Inhibitors (Ketoconazole)", "effect": "Increased venlafaxine levels.", "severity": "Moderate" },
      { "drugClass": "Lithium", "effect": "Possible serotonin syndrome, increased neurotoxicity.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: suicidality risk. Dose-dependent hypertension (monitor BP). Severe withdrawal syndrome (dizziness, nausea, headache, anxiety) requires slow taper over 4-6 weeks. Increased bleeding risk. Avoid in uncontrolled hypertension.",
    "subCategoryId": "adjuvant-antidepressants"
  },
  {
    "id": "desvenlafaxine",
    "categoryId": "analgesics",
    "genericName": "Desvenlafaxine",
    "brandNames": "Pristiq, Desfax, Desvenlafaxine",
    "description": "Active metabolite of venlafaxine with more predictable dosing and fewer drug interactions, used as an SNRI adjuvant analgesic for neuropathic pain management.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Neuropathic Pain",
    "dosageForm": "Oral Extended-Release Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "50 mg once daily, may increase to 100 mg/day", "sub": "Max: 400 mg/day (higher doses not more effective)" },
      { "label": "ONSET / HALF-LIFE", "value": "2-4 weeks for analgesic effect", "sub": "~11 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Diabetic neuropathy, chronic pain syndromes, vasomotor symptoms with pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Minimal CYP metabolism, fewer drug interactions than venlafaxine", "sub": "Renal dose adjustment required (CrCl <30: 50 mg every 48h)" }
    ],
    "brandTable": [
      { "name": "Pristiq", "form": "Extended-Release Tablets", "strengths": "25 mg, 50 mg, 100 mg", "manufacturer": "Pfizer", "region": "USA, UK, Europe, Global" },
      { "name": "Desfax", "form": "Extended-Release Tablets", "strengths": "50 mg, 100 mg", "manufacturer": "Lupin", "region": "Pakistan, India, Asia" },
      { "name": "Desvenlafaxine ER", "form": "Extended-Release Tablets", "strengths": "25 mg, 50 mg, 100 mg", "manufacturer": "Various (Generic)", "region": "USA, Canada, Global" },
      { "name": "Desvenlafaxine Sandoz", "form": "Extended-Release Tablets", "strengths": "50 mg, 100 mg", "manufacturer": "Sandoz (Novartis)", "region": "Europe, Global" },
      { "name": "Desveen", "form": "Extended-Release Tablets", "strengths": "50 mg, 100 mg", "manufacturer": "Cipla", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "Severe serotonin syndrome, hypertensive crisis.", "severity": "Major" },
      { "drugClass": "Other Serotonergic Drugs (SSRIs, Triptans)", "effect": "Additive serotonin syndrome risk.", "severity": "Major" },
      { "drugClass": "NSAIDs/Aspirin/Anticoagulants", "effect": "Increased bleeding risk via platelet serotonin depletion.", "severity": "Moderate" },
      { "drugClass": "CYP3A4 Inducers (Rifampin, Carbamazepine)", "effect": "Reduced desvenlafaxine levels.", "severity": "Minor" },
      { "drugClass": "Alcohol", "effect": "Increased CNS depression.", "severity": "Moderate" },
      { "drugClass": "Lithium", "effect": "Possible serotonin syndrome.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: suicidality risk in young adults. Dose-dependent hypertension (monitor BP). Withdrawal syndrome on abrupt discontinuation. Renal dose adjustment necessary. Avoid in patients with end-stage renal disease on dialysis.",
    "subCategoryId": "adjuvant-antidepressants"
  },
  {
    "id": "milnacipran",
    "categoryId": "analgesics",
    "genericName": "Milnacipran",
    "brandNames": "Savella, Ixel, Dalcipran, Milnacipran",
    "description": "SNRI with balanced serotonin and norepinephrine reuptake inhibition, FDA-approved specifically for fibromyalgia management as an analgesic adjuvant.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Fibromyalgia",
    "dosageForm": "Oral Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "12.5-25 mg once daily, titrated to 50-100 mg BID", "sub": "Max: 200 mg/day (100 mg BID)" },
      { "label": "ONSET / HALF-LIFE", "value": "2-4 weeks for analgesic response in fibromyalgia", "sub": "6-8 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Fibromyalgia, chronic fatigue syndrome with pain, central pain syndromes", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Titrate slowly over 1-2 weeks to reduce GI side effects", "sub": "Do not use MAOIs within 14 days; monitor for hepatotoxicity" }
    ],
    "brandTable": [
      { "name": "Savella", "form": "Tablets", "strengths": "12.5 mg, 25 mg, 50 mg, 100 mg", "manufacturer": "Allergan (AbbVie)", "region": "USA, Canada" },
      { "name": "Ixel", "form": "Capsules, Tablets", "strengths": "25 mg, 50 mg", "manufacturer": "Pierre Fabre", "region": "Europe, UK, Asia" },
      { "name": "Dalcipran", "form": "Tablets", "strengths": "25 mg, 50 mg, 100 mg", "manufacturer": "Torrent", "region": "Pakistan, India, Asia" },
      { "name": "Milnacipran HCl", "form": "Tablets", "strengths": "12.5 mg, 25 mg, 50 mg, 100 mg", "manufacturer": "Various (Generic)", "region": "Global" },
      { "name": "Milnacip", "form": "Capsules", "strengths": "25 mg, 50 mg", "manufacturer": "Lupin", "region": "India, Asia" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "Severe serotonin syndrome, hypertensive crisis.", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs/Triptans", "effect": "Additive serotonin syndrome risk.", "severity": "Major" },
      { "drugClass": "NSAIDs/Aspirin/Anticoagulants", "effect": "Increased bleeding risk.", "severity": "Moderate" },
      { "drugClass": "Clonidine", "effect": "Reduced antihypertensive effect of clonidine.", "severity": "Moderate" },
      { "drugClass": "Epinephrine/Norepinephrine", "effect": "Enhanced pressor response, hypertensive effect.", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Increased CNS depression.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: suicidality risk. Cases of hepatotoxicity reported; monitor LFTs. Can cause increased heart rate and BP. Avoid in patients with uncontrolled hypertension or cardiac disease. Taper gradually to avoid withdrawal.",
    "subCategoryId": "adjuvant-antidepressants"
  },
  {
    "id": "imipramine",
    "categoryId": "analgesics",
    "genericName": "Imipramine",
    "brandNames": "Tofranil, Impril, Antidep",
    "description": "Tricyclic antidepressant (TCA) with balanced serotonin and norepinephrine reuptake inhibition, used as adjuvant analgesic for neuropathic pain and chronic pain conditions.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Neuropathic Pain, Depression",
    "dosageForm": "Oral Tablets/Capsules",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "10-25 mg at bedtime, titrated to 75-150 mg/day", "sub": "Analgesic effect often achieved at lower doses" },
      { "label": "ONSET / HALF-LIFE", "value": "2-4 weeks for analgesic response", "sub": "6-12 hours half-life; active metabolite 18-28 hours" },
      { "label": "CLINICAL INDICATIONS", "value": "Diabetic neuropathy, postherpetic neuralgia, tension headache, chronic pain syndromes, enuresis-associated pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Significant anticholinergic effects similar to amitriptyline", "sub": "Cardiotoxicity in overdose; therapeutic drug monitoring recommended" }
    ],
    "brandTable": [
      { "name": "Tofranil", "form": "Tablets, Capsules, Injection", "strengths": "10 mg, 25 mg, 50 mg, 75 mg, 100 mg, 125 mg; 25 mg/2 mL IM", "manufacturer": "Mallinckrodt (Cephalon)", "region": "USA, UK, Europe, Global" },
      { "name": "Impril", "form": "Tablets", "strengths": "10 mg, 25 mg, 50 mg, 75 mg", "manufacturer": "Pfizer", "region": "Canada, Asia" },
      { "name": "Antidep", "form": "Tablets", "strengths": "10 mg, 25 mg, 50 mg, 75 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Tofranil PM", "form": "Capsules (Pamoate)", "strengths": "75 mg, 100 mg, 125 mg, 150 mg", "manufacturer": "Mallinckrodt", "region": "USA" },
      { "name": "Imipramine HCl", "form": "Tablets", "strengths": "10 mg, 25 mg, 50 mg", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "Hypertensive crisis, serotonin syndrome, hyperpyrexia.", "severity": "Major" },
      { "drugClass": "SSRIs (Fluoxetine, Paroxetine)", "effect": "Imipramine levels increased 2-5 fold via CYP2D6 inhibition.", "severity": "Major" },
      { "drugClass": "CNS Depressants (Alcohol, Benzodiazepines)", "effect": "Additive sedation and CNS depression.", "severity": "Major" },
      { "drugClass": "Anticholinergics", "effect": "Additive anticholinergic effects including paralytic ileus.", "severity": "Moderate" },
      { "drugClass": "QT-Prolonging Agents", "effect": "Additive QT prolongation, torsades de pointes risk.", "severity": "Major" },
      { "drugClass": "Clonidine", "effect": "Reduced antihypertensive effect; hypertensive crisis on withdrawal.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: suicidality risk in young adults. Highly cardiotoxic in overdose (QT prolongation, arrhythmias). Anticholinergic effects limit use in elderly. Monitor for hypomania in bipolar patients. Seizure threshold reduction.",
    "subCategoryId": "adjuvant-antidepressants"
  },
  {
    "id": "gabapentin",
    "categoryId": "analgesics",
    "genericName": "Gabapentin",
    "brandNames": "Neurontin, Gralise, Horizant, Gabarone",
    "description": "Gabapentinoid anticonvulsant that modulates voltage-gated calcium channels, serving as a first-line adjuvant analgesic for neuropathic pain of various etiologies.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Neuropathic Pain, Seizures",
    "dosageForm": "Oral Capsules/Tablets/Solution",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "300-600 mg TID, titrated from 300 mg at bedtime", "sub": "Max: 3,600 mg/day in 3 divided doses" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 weeks for analgesic effect", "sub": "5-7 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Postherpetic neuralgia, diabetic neuropathy, fibromyalgia, neuropathic cancer pain, restless legs syndrome", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Renal dose adjustment essential (CrCl-based dosing)", "sub": "Reduce dose for elderly; withdrawal seizures with abrupt cessation" }
    ],
    "brandTable": [
      { "name": "Neurontin", "form": "Capsules, Tablets, Oral Solution", "strengths": "100 mg, 300 mg, 400 mg caps; 600 mg, 800 mg tabs; 250 mg/5 mL solution", "manufacturer": "Pfizer (Parke-Davis)", "region": "USA, UK, Europe, Global" },
      { "name": "Gralise", "form": "Extended-Release Tablets", "strengths": "300 mg, 600 mg", "manufacturer": "Assertio Therapeutics", "region": "USA (specific for PHN)" },
      { "name": "Horizant", "form": "Extended-Release Tablets", "strengths": "300 mg, 600 mg", "manufacturer": "XenoPort (Arbor Pharma)", "region": "USA (RLS and PHN)" },
      { "name": "Gabarone", "form": "Capsules, Tablets", "strengths": "100 mg, 300 mg, 400 mg caps; 600 mg, 800 mg tabs", "manufacturer": "Ivax (Teva)", "region": "USA" },
      { "name": "Gabapentin HCl", "form": "Capsules, Tablets, Oral Solution", "strengths": "100 mg, 300 mg, 400 mg, 600 mg, 800 mg", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Opioids (Morphine, Hydrocodone)", "effect": "Increased gabapentin levels and sedation; respiratory depression risk.", "severity": "Major" },
      { "drugClass": "CNS Depressants (Alcohol, Benzodiazepines)", "effect": "Additive sedation and dizziness.", "severity": "Major" },
      { "drugClass": "Antacids (Aluminum/Magnesium)", "effect": "Reduced gabapentin absorption by 20-30%.", "severity": "Moderate" },
      { "drugClass": "Antidiabetic Agents", "effect": "May cause false urine glucose readings.", "severity": "Minor" },
      { "drugClass": "NSAIDs", "effect": "Possible reduced analgesic efficacy of gabapentin.", "severity": "Minor" },
      { "drugClass": "Hydrocodone", "effect": "Increased hydrocodone levels and CNS depression.", "severity": "Major" }
    ],
    "warning": "Renal dose adjustment mandatory (proportional to CrCl). CNS depression increases with opioids/benzodiazepines. Dizziness and somnolence common in first weeks. Avoid abrupt discontinuation (withdrawal seizures). May cause false urine protein readings.",
    "subCategoryId": "adjuvant-anticonvulsants"
  },
  {
    "id": "pregabalin",
    "categoryId": "analgesics",
    "genericName": "Pregabalin",
    "brandNames": "Lyrica, Lyrica CR, Alzain",
    "description": "Gabapentinoid with higher potency and more predictable bioavailability than gabapentin, FDA-approved first-line agent for diabetic neuropathy, postherpetic neuralgia, and fibromyalgia.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Neuropathic Pain, Fibromyalgia",
    "dosageForm": "Oral Capsules/Solution/ER Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "50-150 mg BID or 75-300 mg BID", "sub": "Max: 600 mg/day; CR: 165-330 mg once daily" },
      { "label": "ONSET / HALF-LIFE", "value": "1 week for analgesic effect", "sub": "~6.3 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Diabetic neuropathy, postherpetic neuralgia, fibromyalgia, spinal cord injury pain, generalized anxiety disorder", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Schedule V controlled substance due to euphoria risk", "sub": "Renal dose adjustment required; taper when discontinuing" }
    ],
    "brandTable": [
      { "name": "Lyrica", "form": "Capsules, Oral Solution", "strengths": "25 mg, 50 mg, 75 mg, 100 mg, 150 mg, 200 mg, 225 mg, 300 mg; 20 mg/mL solution", "manufacturer": "Pfizer", "region": "USA, UK, Europe, Global" },
      { "name": "Lyrica CR", "form": "Extended-Release Tablets", "strengths": "82.5 mg, 165 mg, 330 mg", "manufacturer": "Pfizer", "region": "USA" },
      { "name": "Alzain", "form": "Capsules", "strengths": "75 mg, 150 mg, 300 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Pregabalin ER", "form": "Extended-Release Tablets", "strengths": "82.5 mg, 165 mg, 330 mg", "manufacturer": "Various (Generic)", "region": "USA, Global" },
      { "name": "Pregaba", "form": "Capsules", "strengths": "75 mg, 150 mg", "manufacturer": "Intas Pharma", "region": "Pakistan, India" }
    ],
    "interactions": [
      { "drugClass": "Opioids (Oxycodone, Morphine)", "effect": "Additive CNS depression, increased risk of respiratory depression.", "severity": "Major" },
      { "drugClass": "CNS Depressants (Alcohol, Benzodiazepines)", "effect": "Additive sedation, dizziness, and cognitive impairment.", "severity": "Major" },
      { "drugClass": "Thiazolidinediones (Pioglitazone)", "effect": "Increased risk of weight gain and peripheral edema.", "severity": "Moderate" },
      { "drugClass": "ACE Inhibitors/ARBs", "effect": "Additive risk of angioedema (rare).", "severity": "Moderate" },
      { "drugClass": "Antidiabetic Agents", "effect": "May potentiate hypoglycemic effects.", "severity": "Minor" },
      { "drugClass": "CNS Stimulants", "effect": "May reduce pregabalin's therapeutic effects.", "severity": "Minor" }
    ],
    "warning": "Schedule V controlled substance with abuse potential. Renal dose adjustment necessary. May cause peripheral edema, weight gain, and blurred vision. Avoid abrupt discontinuation (insomnia, nausea, headache, anxiety, diarrhea). Dizziness and somnolence common.",
    "subCategoryId": "adjuvant-anticonvulsants"
  },
  {
    "id": "carbamazepine",
    "categoryId": "analgesics",
    "genericName": "Carbamazepine",
    "brandNames": "Tegretol, Carbatrol, Epitol, Equetro",
    "description": "Anticonvulsant that stabilizes neuronal membranes via sodium channel blockade, established as first-line therapy for trigeminal neuralgia and neuropathic pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Trigeminal Neuralgia, Seizures",
    "dosageForm": "Oral Tablets/Capsules/Suspension",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "200-400 mg/day in divided doses, titrated to 800-1,200 mg/day", "sub": "Max: 1,600 mg/day (ER: 1,200 mg/day)" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 weeks for analgesic effect in trigeminal neuralgia", "sub": "25-65 hours initially; 12-17 hours with autoinduction" },
      { "label": "CLINICAL INDICATIONS", "value": "Trigeminal neuralgia, glossopharyngeal neuralgia, diabetic neuropathy, central pain syndromes, postherpetic neuralgia", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "CYP3A4 autoinduction and potent enzyme inducer; HLA-B*1502 screening in Asian ancestry", "sub": "Monitor CBC, LFTs, and drug levels (target 4-12 mcg/mL)" }
    ],
    "brandTable": [
      { "name": "Tegretol", "form": "Tablets, Chewable Tablets, Suspension, ER Tablets/Capsules", "strengths": "200 mg tabs; 100 mg/5 mL susp; 100 mg, 200 mg, 400 mg XR", "manufacturer": "Novartis", "region": "USA, UK, Europe, Global" },
      { "name": "Carbatrol", "form": "Extended-Release Capsules", "strengths": "100 mg, 200 mg, 300 mg", "manufacturer": "Shire (Takeda)", "region": "USA, Canada" },
      { "name": "Epitol", "form": "Tablets", "strengths": "200 mg", "manufacturer": "Teva", "region": "USA, Global" },
      { "name": "Equetro", "form": "Extended-Release Capsules", "strengths": "100 mg, 200 mg, 300 mg", "manufacturer": "Validus Pharma", "region": "USA" },
      { "name": "Carbamazepine XR", "form": "Extended-Release Tablets", "strengths": "100 mg, 200 mg, 400 mg", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy via CYP3A4 induction.", "severity": "Major" },
      { "drugClass": "Warfarin/Anticoagulants", "effect": "Reduced warfarin levels and INR.", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Increased risk of hypertensive crisis, hyperpyrexia.", "severity": "Major" },
      { "drugClass": "Antipsychotics (Aripiprazole, Clozapine)", "effect": "Reduced antipsychotic levels via CYP induction.", "severity": "Major" },
      { "drugClass": "CYP3A4 Inhibitors (Ketoconazole, Grapefruit)", "effect": "Increased carbamazepine levels, toxicity risk.", "severity": "Major" },
      { "drugClass": "Acetaminophen", "effect": "Reduced acetaminophen levels; increased hepatotoxicity risk.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: HLA-B*1502 screening required in Asian ancestry patients due to risk of Stevens-Johnson syndrome. Aplastic anemia and agranulocytosis risk (monitor CBC). Potent enzyme inducer affecting many co-medications. Autoinduction requires dose adjustment.",
    "subCategoryId": "adjuvant-anticonvulsants"
  },
  {
    "id": "oxcarbazepine",
    "categoryId": "analgesics",
    "genericName": "Oxcarbazepine",
    "brandNames": "Trileptal, Oxtellar XR, Oxcarb",
    "description": "Anticonvulsant similar to carbamazepine with better tolerability and fewer drug interactions, used as alternative analgesic for trigeminal neuralgia and neuropathic pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Trigeminal Neuralgia",
    "dosageForm": "Oral Tablets/Suspension/ER Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "300-600 mg BID, titrated from 150-300 mg BID", "sub": "Max: 2,400 mg/day (IR); 1,200-1,800 mg/day (ER)" },
      { "label": "ONSET / HALF-LIFE", "value": "1-2 weeks for analgesic effect", "sub": "2 hours (parent); 9 hours (active metabolite MHD)" },
      { "label": "CLINICAL INDICATIONS", "value": "Trigeminal neuralgia, diabetic neuropathy, central neuropathic pain, postherpetic neuralgia, bipolar disorder", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Lower risk of drug interactions than carbamazepine; no autoinduction", "sub": "Dose-related hyponatremia risk; HLA-B*1502 screening still advised" }
    ],
    "brandTable": [
      { "name": "Trileptal", "form": "Tablets, Oral Suspension", "strengths": "150 mg, 300 mg, 600 mg tabs; 300 mg/5 mL susp", "manufacturer": "Novartis", "region": "USA, UK, Europe, Global" },
      { "name": "Oxtellar XR", "form": "Extended-Release Tablets", "strengths": "150 mg, 300 mg, 600 mg", "manufacturer": "Supernus Pharma", "region": "USA" },
      { "name": "Oxcarbazepine HCl", "form": "Tablets", "strengths": "150 mg, 300 mg, 600 mg", "manufacturer": "Various (Generic)", "region": "USA, Global" },
      { "name": "Oxcarb", "form": "Tablets, Suspension", "strengths": "150 mg, 300 mg, 600 mg; 300 mg/5 mL", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Trileptal (Generic)", "form": "Tablets", "strengths": "150 mg, 300 mg, 600 mg", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy (less than carbamazepine).", "severity": "Moderate" },
      { "drugClass": "Calcium Channel Blockers (Felodipine)", "effect": "Reduced CCB levels.", "severity": "Moderate" },
      { "drugClass": "CYP3A4 Inhibitors (Ketoconazole)", "effect": "Minimal effect due to different metabolic pathway.", "severity": "Minor" },
      { "drugClass": "MAO Inhibitors", "effect": "Increased risk of hypertensive crisis.", "severity": "Major" },
      { "drugClass": "Diuretics (Furosemide, HCTZ)", "effect": "Additive hyponatremia risk.", "severity": "Moderate" },
      { "drugClass": "Lithium", "effect": "Increased lithium neurotoxicity.", "severity": "Moderate" }
    ],
    "warning": "HLA-B*1502 screening recommended in Asian patients (Stevens-Johnson syndrome risk). Hyponatremia risk (monitor Na+ regularly). CNS effects: dizziness, diplopia, ataxia - dose-related. Less enzyme induction than carbamazepine but still interacts with OCPs.",
    "subCategoryId": "adjuvant-anticonvulsants"
  },
  {
    "id": "lamotrigine",
    "categoryId": "analgesics",
    "genericName": "Lamotrigine",
    "brandNames": "Lamictal, Lamotrigine",
    "description": "Anticonvulsant that blocks voltage-gated sodium channels and inhibits glutamate release, used as second-line adjuvant analgesic for trigeminal neuralgia and central neuropathic pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Trigeminal Neuralgia, Seizures",
    "dosageForm": "Oral Tablets/Chewable Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "25-50 mg/day, slow titration to 200-400 mg/day", "sub": "Analgesic doses typically 200-400 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "4-6 weeks for neuropathic pain response", "sub": "25-33 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Trigeminal neuralgia, central post-stroke pain, diabetic neuropathy, HIV neuropathy, spinal cord injury pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Extremely slow titration required to minimize SJS/TEN risk", "sub": "Carbamazepine/valproate significantly alter lamotrigine levels" }
    ],
    "brandTable": [
      { "name": "Lamictal", "form": "Tablets, Chewable Dispersible Tablets, ODT", "strengths": "25 mg, 50 mg, 100 mg, 150 mg, 200 mg; 2 mg, 5 mg, 25 mg chewable", "manufacturer": "GSK", "region": "USA, UK, Europe, Global" },
      { "name": "Lamictal XR", "form": "Extended-Release Tablets", "strengths": "25 mg, 50 mg, 100 mg, 200 mg, 250 mg, 300 mg", "manufacturer": "GSK", "region": "USA" },
      { "name": "Lamotrigine HCl", "form": "Tablets, Chewable Tablets, ODT", "strengths": "25 mg, 50 mg, 100 mg, 150 mg, 200 mg", "manufacturer": "Various (Generic)", "region": "USA, Global" },
      { "name": "Lamotrigine XR", "form": "Extended-Release Tablets", "strengths": "25 mg, 50 mg, 100 mg, 200 mg, 250 mg, 300 mg", "manufacturer": "Various (Generic)", "region": "USA, Global" },
      { "name": "Lamictal (Generic)", "form": "Tablets", "strengths": "25 mg, 50 mg, 100 mg, 200 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" }
    ],
    "interactions": [
      { "drugClass": "Valproate/Valproic Acid", "effect": "Doubles lamotrigine half-life; increased SJS risk with rapid titration.", "severity": "Major" },
      { "drugClass": "Carbamazepine/Phenytoin/Phenobarbital", "effect": "Reduced lamotrigine levels by ~50% via enzyme induction.", "severity": "Major" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced lamotrigine levels by ~50%.", "severity": "Major" },
      { "drugClass": "Rifampin", "effect": "Significantly reduces lamotrigine levels.", "severity": "Moderate" },
      { "drugClass": "MAO Inhibitors", "effect": "Increased risk of CNS effects.", "severity": "Moderate" },
      { "drugClass": "SSRIs/SNRIs", "effect": "Possible serotonin syndrome (rare).", "severity": "Minor" }
    ],
    "warning": "Black box warning: life-threatening rashes including Stevens-Johnson syndrome. Extremely slow titration essential. Risk increased with valproate co-administration. High rate of benign rash (10%) - any rash warrants immediate evaluation. Discontinue if any rash.",
    "subCategoryId": "adjuvant-anticonvulsants"
  },
  {
    "id": "topiramate",
    "categoryId": "analgesics",
    "genericName": "Topiramate",
    "brandNames": "Topamax, Topiragen, Trokendi XR, Qudexy XR",
    "description": "Anticonvulsant with multiple mechanisms including sodium channel blockade and GABA enhancement, established as a first-line agent for migraine prophylaxis and chronic pain prevention.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Migraine Prevention, Seizures",
    "dosageForm": "Oral Tablets/Capsules/Sprinkle Capsules",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "25-50 mg BID, titrated to 100-200 mg/day in divided doses", "sub": "Max: 400 mg/day (migraine: 100 mg/day typically effective)" },
      { "label": "ONSET / HALF-LIFE", "value": "4-8 weeks for migraine prophylaxis", "sub": "19-25 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Migraine prophylaxis, chronic daily headache, diabetic neuropathy, trigeminal neuralgia, chronic pain with migraine", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Cognitive side effects (word-finding difficulty, confusion) - dose-related", "sub": "Weight loss common; monitor for metabolic acidosis and nephrolithiasis" }
    ],
    "brandTable": [
      { "name": "Topamax", "form": "Tablets, Sprinkle Capsules", "strengths": "25 mg, 50 mg, 100 mg, 200 mg tabs; 15 mg, 25 mg sprinkle caps", "manufacturer": "Janssen (J&J)", "region": "USA, UK, Europe, Global" },
      { "name": "Topiragen", "form": "Tablets, Capsules", "strengths": "25 mg, 50 mg, 100 mg, 200 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Trokendi XR", "form": "Extended-Release Capsules", "strengths": "25 mg, 50 mg, 100 mg, 200 mg", "manufacturer": "Supernus Pharma", "region": "USA" },
      { "name": "Qudexy XR", "form": "Extended-Release Capsules", "strengths": "25 mg, 50 mg, 100 mg, 150 mg, 200 mg, 300 mg", "manufacturer": "Upsher-Smith", "region": "USA" },
      { "name": "Topiramate HCl", "form": "Tablets, Sprinkle Capsules, ER Capsules", "strengths": "25 mg, 50 mg, 100 mg, 200 mg", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Oral Contraceptives", "effect": "Reduced contraceptive efficacy at >200 mg/day.", "severity": "Major" },
      { "drugClass": "Valproate/Valproic Acid", "effect": "Increased risk of hyperammonemia and cognitive dysfunction.", "severity": "Moderate" },
      { "drugClass": "Carbamazepine/Phenytoin", "effect": "Reduced topiramate levels via enzyme induction.", "severity": "Moderate" },
      { "drugClass": "Lithium", "effect": "Increased lithium levels (topiramate reduces renal clearance).", "severity": "Moderate" },
      { "drugClass": "Carbonic Anhydrase Inhibitors (Acetazolamide)", "effect": "Additive risk of nephrolithiasis and metabolic acidosis.", "severity": "Major" },
      { "drugClass": "Alcohol/CNS Depressants", "effect": "Additive cognitive and psychomotor impairment.", "severity": "Moderate" }
    ],
    "warning": "Cognitive side effects (word-finding difficulty, concentration problems, confusion) common and dose-related. Increased risk of nephrolithiasis (maintain hydration). Monitor for metabolic acidosis (serum bicarbonate). Weight loss and paresthesias common. Teratogenic (cleft palate).",
    "subCategoryId": "adjuvant-anticonvulsants"
  },
  {
    "id": "valproate",
    "categoryId": "analgesics",
    "genericName": "Valproate (Valproic Acid / Sodium Valproate)",
    "brandNames": "Depakote, Depakene, Valpro, Convulex",
    "description": "Anticonvulsant that enhances GABA activity and blocks voltage-gated sodium channels, used as adjuvant analgesic for migraine prophylaxis and certain chronic pain conditions.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Migraine Prevention, Seizures, Bipolar",
    "dosageForm": "Oral Tablets/Capsules/Syrup/IV Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "250-500 mg BID, titrated to 1,000-2,000 mg/day", "sub": "Max: 60 mg/kg/day; migraine: 500-1,500 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "4-8 weeks for migraine prophylaxis", "sub": "9-16 hours half-life (ER: 14-17 hours)" },
      { "label": "CLINICAL INDICATIONS", "value": "Migraine prophylaxis, diabetic neuropathy, postherpetic neuralgia, chronic daily headache, cluster headache prophylaxis", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Hepatotoxicity and pancreatitis risk; monitoring required", "sub": "Teratogenic (neural tube defects); female patients need counseling" }
    ],
    "brandTable": [
      { "name": "Depakote", "form": "DR Tablets, ER Tablets, Sprinkle Capsules", "strengths": "125 mg, 250 mg, 500 mg DR; 250 mg, 500 mg ER; 125 mg sprinkle caps", "manufacturer": "AbbVie", "region": "USA, UK, Europe, Global" },
      { "name": "Depakene", "form": "Capsules, Syrup", "strengths": "250 mg caps; 250 mg/5 mL syrup", "manufacturer": "AbbVie", "region": "USA, Canada, Global" },
      { "name": "Valpro", "form": "Tablets, Syrup", "strengths": "200 mg, 500 mg; 200 mg/5 mL syrup", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Convulex", "form": "Soft Capsules, EC Tablets, Syrup, IV", "strengths": "150 mg, 300 mg, 500 mg caps; 300 mg EC; 50 mg/mL syrup; 400 mg IV", "manufacturer": "Pharmacia (Pfizer)", "region": "Europe, Asia" },
      { "name": "Valproic Acid HCl", "form": "Capsules, Syrup, IV Injection", "strengths": "250 mg caps; 250 mg/5 mL; 100 mg/mL IV vials", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Aspirin/NSAIDs", "effect": "Displaces valproate from protein, increasing free levels and hepatotoxicity risk.", "severity": "Major" },
      { "drugClass": "Lamotrigine", "effect": "Doubles lamotrigine half-life; dramatically increases SJS risk.", "severity": "Major" },
      { "drugClass": "Carbamazepine/Phenytoin", "effect": "Reduced valproate levels; increased toxicity of co-medication.", "severity": "Major" },
      { "drugClass": "Warfarin/Anticoagulants", "effect": "Increased INR via protein-binding displacement.", "severity": "Moderate" },
      { "drugClass": "Benzodiazepines (Lorazepam, Diazepam)", "effect": "Increased sedation via reduced benzodiazepine metabolism.", "severity": "Moderate" },
      { "drugClass": "Tricyclic Antidepressants", "effect": "Increased TCA levels via inhibition of metabolism.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: hepatotoxicity (especially in children <2 years, patients with mitochondrial disease). Pancreatitis risk. Teratogenic (neural tube defects, lower IQ). Monitor LFTs, CBC, and valproate levels (target 50-100 mcg/mL). Weight gain, tremor, and alopecia common.",
    "subCategoryId": "adjuvant-anticonvulsants"
  },
  {
    "id": "morphine",
    "categoryId": "analgesics",
    "genericName": "Morphine",
    "brandNames": "MS Contin, Oramorph SR, Kadian, Astramorph, Duramorph, Infumorph, Roxanol, Statex",
    "description": "Naturally occurring phenanthrene opioid agonist at mu, kappa, and delta receptors, the WHO gold standard for moderate-to-severe cancer pain management.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Severe Chronic Pain, Cancer Pain",
    "dosageForm": "Oral IR/ER Tablets, Oral Solution, Injection, Suppository",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "10-30 mg PO q4h (IR); 15-60 mg PO q12h (ER); 2-10 mg IV q2-4h", "sub": "Highly variable: titrate to effect; no ceiling dose" },
      { "label": "ONSET / HALF-LIFE", "value": "IR: 30 min onset, 60 min peak; IV: 5-10 min onset", "sub": "2-4 hours half-life (IR); 12+ hours sustained from ER" },
      { "label": "CLINICAL INDICATIONS", "value": "Cancer pain, severe acute pain, postoperative pain, MI pain, chronic non-cancer pain (selected)", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Active metabolite morphine-6-glucuronide accumulates in renal failure", "sub": "Equianalgesic: 30 mg PO = 10 mg IM/IV" }
    ],
    "brandTable": [
      { "name": "MS Contin", "form": "Extended-Release Tablets", "strengths": "15 mg, 30 mg, 60 mg, 100 mg, 200 mg", "manufacturer": "Purdue Pharma", "region": "USA, Canada, UK, Global" },
      { "name": "Kadian", "form": "Extended-Release Capsules", "strengths": "10 mg, 20 mg, 30 mg, 40 mg, 50 mg, 60 mg, 80 mg, 100 mg, 200 mg", "manufacturer": "Allergan (AbbVie)", "region": "USA, Canada" },
      { "name": "Oramorph SR", "form": "Extended-Release Suspension/Tablets", "strengths": "30 mg, 60 mg, 100 mg tablets; 30 mg/5 mL susp", "manufacturer": "Xanodyne (Mallinckrodt)", "region": "USA, UK, Europe" },
      { "name": "Roxanol", "form": "Immediate-Release Oral Solution", "strengths": "20 mg/mL, 100 mg/5 mL (concentrate)", "manufacturer": "West-Ward", "region": "USA" },
      { "name": "Statex", "form": "Oral Drops, Solution", "strengths": "1 mg/mL, 5 mg/mL, 10 mg/mL, 20 mg/mL, 50 mg/mL drops", "manufacturer": "Purdue Pharma (Canada)", "region": "Canada, Australia" }
    ],
    "interactions": [
      { "drugClass": "Benzodiazepines (Diazepam, Alprazolam)", "effect": "Additive respiratory depression and CNS depression - potentially fatal.", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS depression and respiratory depression risk.", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Severe serotonin syndrome, hypertensive crisis, coma.", "severity": "Major" },
      { "drugClass": "CNS Depressants (Sedatives, Hypnotics)", "effect": "Additive sedation and respiratory depression.", "severity": "Major" },
      { "drugClass": "Rifampin", "effect": "Reduced morphine levels via CYP3A4 induction.", "severity": "Moderate" },
      { "drugClass": "Cimetidine", "effect": "Increased morphine levels and CNS effects.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: respiratory depression, addiction risk, opioid use disorder, and neonatal opioid withdrawal syndrome. Tolerance and physical dependence develop with chronic use. Constipation requires bowel regimen. Avoid in paralytic ileus, severe respiratory insufficiency.",
    "subCategoryId": "opioids-strong"
  },
  {
    "id": "hydromorphone",
    "categoryId": "analgesics",
    "genericName": "Hydromorphone",
    "brandNames": "Dilaudid, Exalgo, Hydromorph Contin, Jurnista",
    "description": "Semi-synthetic mu-opioid agonist approximately 5-7 times more potent than morphine with faster onset, used for moderate-to-severe acute and chronic pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Severe Acute/Chronic Pain",
    "dosageForm": "Oral IR/ER Tablets, Injection, Suppository",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "2-4 mg PO q4-6h (IR); 8-64 mg PO q24h (ER); 0.5-2 mg IV q2-4h", "sub": "ER (Exalgo): 8-64 mg once daily" },
      { "label": "ONSET / HALF-LIFE", "value": "IR: 15-30 min onset, 30-60 min peak; IV: 5-10 min onset", "sub": "2-3 hours half-life (IR); 11-16 hours (ER)" },
      { "label": "CLINICAL INDICATIONS", "value": "Severe acute pain, postoperative pain, cancer pain, severe chronic pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Preferred in renal impairment vs morphine (less active metabolite accumulation)", "sub": "Equianalgesic: 7.5 mg PO = 1.5 mg IV = 30 mg morphine PO" }
    ],
    "brandTable": [
      { "name": "Dilaudid", "form": "Tablets, Oral Liquid, Injection, Suppositories", "strengths": "2 mg, 4 mg, 8 mg tabs; 1 mg/mL liq; 1-4 mg/mL injection; 3 mg supp", "manufacturer": "Purdue Pharma", "region": "USA, Canada, UK, Global" },
      { "name": "Exalgo", "form": "Extended-Release Tablets", "strengths": "8 mg, 12 mg, 16 mg, 32 mg", "manufacturer": "Mallinckrodt", "region": "USA" },
      { "name": "Hydromorph Contin", "form": "Extended-Release Capsules", "strengths": "3 mg, 6 mg, 12 mg, 18 mg, 24 mg, 30 mg", "manufacturer": "Purdue Pharma (Canada)", "region": "Canada" },
      { "name": "Jurnista", "form": "Extended-Release Tablets (OROS)", "strengths": "8 mg, 16 mg, 32 mg, 64 mg", "manufacturer": "Janssen (J&J)", "region": "Europe, Australia, Canada" },
      { "name": "Hydromorphone HCl", "form": "Tablets, Injection, Suppositories", "strengths": "2 mg, 4 mg, 8 mg tabs; 1 mg/mL, 2 mg/mL, 4 mg/mL, 10 mg/mL inj", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Benzodiazepines (Diazepam, Alprazolam)", "effect": "Additive respiratory depression, profound sedation, death risk.", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS and respiratory depression.", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Severe serotonin syndrome, hypertensive crisis, coma.", "severity": "Major" },
      { "drugClass": "CNS Depressants (Sedatives, Anesthetics)", "effect": "Additive sedation and respiratory depression.", "severity": "Major" },
      { "drugClass": "CYP3A4 Inhibitors (Ketoconazole, Erythromycin)", "effect": "Increased hydromorphone levels/effects.", "severity": "Moderate" },
      { "drugClass": "Anticholinergics", "effect": "Additive anticholinergic effects (constipation, urinary retention).", "severity": "Moderate" }
    ],
    "warning": "Black box warning: respiratory depression, addiction risk, and neonatal withdrawal syndrome. High abuse potential - do not crush ER formulations. Tolerance develops; constipation requires prophylactic bowel regimen. Use with extreme caution in COPD, cor pulmonale, and head injury.",
    "subCategoryId": "opioids-strong"
  },
  {
    "id": "fentanyl",
    "categoryId": "analgesics",
    "genericName": "Fentanyl",
    "brandNames": "Duragesic, Actiq, Fentora, Abstral, Sublimaze, Onsolis, Lazanda, Subsys",
    "description": "Synthetic phenylpiperidine mu-opioid agonist 50-100 times more potent than morphine, available in multiple formulations for acute procedural, chronic, and breakthrough cancer pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Severe Chronic Pain, Breakthrough Cancer Pain",
    "dosageForm": "Transdermal Patch, Buccal Tablet/lozenge, Nasal Spray, Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "12-100 mcg/h patch q72h; 100-1600 mcg buccal/lozenge PRN; 0.5-2 mcg/kg IV", "sub": "Patch: only for opioid-tolerant patients; 3-day wear" },
      { "label": "ONSET / HALF-LIFE", "value": "IV: 1-2 min onset; Buccal: 5-15 min; Patch: 12-24h to steady state", "sub": "3-12 hours half-life (patch: 17h after removal due to reservoir)" },
      { "label": "CLINICAL INDICATIONS", "value": "Cancer pain, opioid-tolerant chronic pain, procedural sedation, anesthesia adjunct", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "NOT for opioid-naive patients (respiratory arrest risk with patch)", "sub": "Equianalgesic: 100 mcg IV = 10 mg morphine IV; heat increases patch absorption" }
    ],
    "brandTable": [
      { "name": "Duragesic", "form": "Transdermal Patch", "strengths": "12 mcg/h, 25 mcg/h, 37.5 mcg/h, 50 mcg/h, 62.5 mcg/h, 75 mcg/h, 87.5 mcg/h, 100 mcg/h", "manufacturer": "Janssen (J&J)", "region": "USA, UK, Europe, Global" },
      { "name": "Actiq", "form": "Oral Transmucosal Lozenge (OTFC)", "strengths": "200 mcg, 400 mcg, 600 mcg, 800 mcg, 1200 mcg, 1600 mcg", "manufacturer": "Cephalon (Teva)", "region": "USA, UK, Global" },
      { "name": "Fentora", "form": "Buccal Tablets", "strengths": "100 mcg, 200 mcg, 400 mcg, 600 mcg, 800 mcg", "manufacturer": "Cephalon (Teva)", "region": "USA" },
      { "name": "Abstral", "form": "Sublingual Tablets", "strengths": "100 mcg, 200 mcg, 300 mcg, 400 mcg, 600 mcg, 800 mcg", "manufacturer": "Galena (ProStrakan)", "region": "USA, UK, Europe" },
      { "name": "Sublimaze", "form": "IV/IM Injection", "strengths": "50 mcg/mL (2 mL, 5 mL, 10 mL, 20 mL vials)", "manufacturer": "Janssen (J&J)", "region": "USA, Global" }
    ],
    "interactions": [
      { "drugClass": "Benzodiazepines (Diazepam, Midazolam)", "effect": "Profound respiratory depression, death - contraindicated in non-ventilated.", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS and respiratory depression; patch wearers at risk.", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Severe serotonin syndrome, hypertensive crisis; 14-day washout needed.", "severity": "Major" },
      { "drugClass": "CYP3A4 Inhibitors (Ketoconazole, Ritonavir)", "effect": "Increased fentanyl levels and respiratory depression risk.", "severity": "Major" },
      { "drugClass": "CNS Depressants (Sedatives, Anesthetics)", "effect": "Additive sedation and respiratory depression.", "severity": "Major" },
      { "drugClass": "Serotonergic Drugs (SSRIs, MAOIs)", "effect": "Risk of serotonin syndrome.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: respiratory depression (especially in opioid-naive), abuse potential, accidental exposure (patch), neonatal withdrawal. Heat increases patch absorption by up to 60% - avoid heating pads, fever. Transmucosal products for breakthrough cancer pain only in opioid-tolerant patients.",
    "subCategoryId": "opioids-strong"
  },
  {
    "id": "oxycodone",
    "categoryId": "analgesics",
    "genericName": "Oxycodone",
    "brandNames": "OxyContin, Roxicodone, OxyIR, Oxaydo, Oxyfast, Oxecta, Percolone",
    "description": "Semi-synthetic thebaine-derived mu-opioid agonist 1.5-2 times more potent than oral morphine, one of the most widely prescribed opioids for moderate-to-severe pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Moderate-to-Severe Pain",
    "dosageForm": "Oral IR/ER Tablets, Oral Solution, Concentrate",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "5-15 mg PO q4-6h (IR); 10-80 mg PO q12h (ER); 5-10 mg IV q3-4h", "sub": "ER only for opioid-tolerant; max varies by formulation" },
      { "label": "ONSET / HALF-LIFE", "value": "IR: 10-15 min onset, 30-60 min peak; ER: 1-2h onset", "sub": "3-6 hours half-life (IR); 12+ hours from ER" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute pain, chronic pain, cancer pain, postoperative pain, trauma pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Frequently combined with acetaminophen (Percocet) or ibuprofen (Combunox)", "sub": "Equianalgesic: 20 mg PO = 30 mg morphine PO; abuse-deterrent formulations exist" }
    ],
    "brandTable": [
      { "name": "OxyContin", "form": "Extended-Release Tablets (abuse-deterrent)", "strengths": "10 mg, 15 mg, 20 mg, 30 mg, 40 mg, 60 mg, 80 mg", "manufacturer": "Purdue Pharma", "region": "USA, Canada, UK, Global" },
      { "name": "Roxicodone", "form": "Immediate-Release Tablets", "strengths": "5 mg, 15 mg, 30 mg", "manufacturer": "Mallinckrodt", "region": "USA" },
      { "name": "Oxaydo", "form": "Immediate-Release Tablets (abuse-deterrent)", "strengths": "5 mg, 7.5 mg", "manufacturer": "Egalet (Shionogi)", "region": "USA" },
      { "name": "Oxyfast", "form": "Oral Concentrate Solution", "strengths": "20 mg/mL concentrate", "manufacturer": "Mallinckrodt", "region": "USA" },
      { "name": "Oxecta", "form": "Immediate-Release Tablets (abuse-deterrent)", "strengths": "5 mg, 7.5 mg", "manufacturer": "Pfizer (King)", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "Benzodiazepines (Diazepam, Alprazolam)", "effect": "Additive respiratory depression, profound sedation; fatal overdose risk.", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS depression; ER formulation dose-dumping risk.", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Severe serotonin syndrome, hypertensive crisis, coma.", "severity": "Major" },
      { "drugClass": "CYP3A4 Inhibitors (Ketoconazole, Grapefruit Juice)", "effect": "Increased oxycodone levels, respiratory depression risk.", "severity": "Major" },
      { "drugClass": "CYP3A4 Inducers (Rifampin, Carbamazepine)", "effect": "Reduced oxycodone levels, withdrawal risk.", "severity": "Moderate" },
      { "drugClass": "Serotonergic Drugs (SSRIs, Triptans)", "effect": "Serotonin syndrome risk.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: respiratory depression, addiction risk, opioid use disorder, neonatal withdrawal. OxyContin ER must be swallowed whole (cut/crush/chew = fatal dose dumping). Abuse-deterrent formulations do not eliminate abuse potential. Constipation, tolerance, physical dependence expected with chronic use.",
    "subCategoryId": "opioids-strong"
  },
  {
    "id": "methadone",
    "categoryId": "analgesics",
    "genericName": "Methadone",
    "brandNames": "Dolophine, Methadose, Physeptone, Symoron",
    "description": "Synthetic mu-opioid agonist with NMDA receptor antagonist properties and unique long half-life, used for severe chronic pain and medication-assisted treatment of opioid use disorder.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Severe Chronic Pain, Opioid Use Disorder",
    "dosageForm": "Oral Tablets, Oral Solution/Concentrate, Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "2.5-10 mg PO q8-12h (pain); 20-120 mg PO daily (OUD maintenance)", "sub": "Pain: titrate slowly due to accumulation risk" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min onset; 2-4h peak analgesic effect", "sub": "8-59 hours half-life (avg 24-36h); steady state in 3-5 days" },
      { "label": "CLINICAL INDICATIONS", "value": "Severe chronic pain, cancer pain, neuropathic pain (NMDA effect), opioid use disorder, neonatal abstinence syndrome", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "QT prolongation risk at higher doses (>100 mg/day); requires ECG monitoring", "sub": "Highly variable half-life; NOT equianalgesic by simple ratio; risk of accumulation" }
    ],
    "brandTable": [
      { "name": "Dolophine", "form": "Tablets, Injection", "strengths": "5 mg, 10 mg tabs; 10 mg/mL injection", "manufacturer": "Roxane (Mallinckrodt)", "region": "USA" },
      { "name": "Methadose", "form": "Tablets, Oral Concentrate, Diskets (Dispersible Tabs)", "strengths": "5 mg, 10 mg tabs; 10 mg/mL concentrate; 40 mg Diskets", "manufacturer": "Mallinckrodt", "region": "USA, Canada" },
      { "name": "Physeptone", "form": "Tablets, Injection", "strengths": "5 mg tabs; 10 mg/mL injection", "manufacturer": "GSK (Aspen Pharma)", "region": "UK, Europe, Australia, New Zealand" },
      { "name": "Symoron", "form": "Tablets, Oral Solution", "strengths": "5 mg, 10 mg tabs; 1 mg/mL, 5 mg/mL solution", "manufacturer": "Various (Generic)", "region": "Europe, Middle East" },
      { "name": "Methadone HCl", "form": "Tablets, Oral Solution, Injection", "strengths": "5 mg, 10 mg tabs; 5 mg/5 mL, 10 mg/5 mL solution; 10 mg/mL injection", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "QT-Prolonging Agents (Amiodarone, Sotalol, Ciprofloxacin)", "effect": "Additive QT prolongation, torsades de pointes risk.", "severity": "Major" },
      { "drugClass": "Benzodiazepines (Diazepam, Alprazolam)", "effect": "Profound respiratory depression and sedation.", "severity": "Major" },
      { "drugClass": "CYP3A4 Inducers (Rifampin, Carbamazepine, Phenytoin)", "effect": "Reduced methadone levels, precipitates withdrawal.", "severity": "Major" },
      { "drugClass": "CYP3A4 Inhibitors (Ketoconazole, Erythromycin)", "effect": "Increased methadone levels, toxicity risk.", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS depression; hepatotoxicity risk with chronic use.", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs/MAO Inhibitors", "effect": "Serotonin syndrome risk with serotonergic agents.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: respiratory depression, addiction risk. Unique: QT interval prolongation (ECG baseline and follow-up). Drug accumulation risk with repeated dosing due to long half-life. Respiratory depression may persist beyond analgesia. For OUD: must be dispensed through certified opioid treatment programs.",
    "subCategoryId": "opioids-strong"
  },
  {
    "id": "sufentanil",
    "categoryId": "analgesics",
    "genericName": "Sufentanil",
    "brandNames": "Sufenta, Dsuvia, Zalviso",
    "description": "Synthetic mu-opioid agonist approximately 5-10 times more potent than fentanyl and 500-1000 times more potent than morphine, primarily used in anesthesia and intensive care settings.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Severe Acute Pain (Anesthesia/ICU)",
    "dosageForm": "IV Injection, Sublingual Tablet, Transdermal PCA",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "0.1-0.5 mcg/kg IV bolus; 0.3-1.0 mcg/kg/h IV infusion; 30 mcg sublingual tablet", "sub": "Anesthesia: high-dose (8-30 mcg/kg) for cardiac surgery" },
      { "label": "ONSET / HALF-LIFE", "value": "IV: 1-3 min onset; Sublingual: 15-30 min onset", "sub": "2-4 hours elimination half-life; context-sensitive half-life increases with infusion duration" },
      { "label": "CLINICAL INDICATIONS", "value": "Anesthesia induction/maintenance, ICU sedation/analgesia, postoperative pain, procedural sedation, battlefield/trauma pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Context-sensitive half-life prolongs with prolonged infusion duration", "sub": "Equianalgesic: 10 mcg sufentanil = 100 mcg fentanyl = 10 mg morphine" }
    ],
    "brandTable": [
      { "name": "Sufenta", "form": "IV Injection", "strengths": "50 mcg/mL (1 mL, 2 mL, 5 mL ampules/vials)", "manufacturer": "Janssen (J&J)", "region": "USA, UK, Europe, Global" },
      { "name": "Dsuvia", "form": "Sublingual Tablet (single-dose applicator)", "strengths": "30 mcg", "manufacturer": "AcelRx", "region": "USA (supervised medical settings only)" },
      { "name": "Zalviso", "form": "Sublingual PCA System", "strengths": "15 mcg tablet (PCA system)", "manufacturer": "AcelRx", "region": "Europe, USA" },
      { "name": "Sufentanil Citrate", "form": "IV Injection, Infusion", "strengths": "50 mcg/mL multiple-dose vials", "manufacturer": "Various (Generic)", "region": "Global" },
      { "name": "Sufentanil (with Bupivacaine)", "form": "Epidural Injection", "strengths": "5 mcg/mL + bupivacaine combinations", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Benzodiazepines (Midazolam, Diazepam)", "effect": "Profound synergistic respiratory depression and hypotension.", "severity": "Major" },
      { "drugClass": "Volatile Anesthetics (Isoflurane, Sevoflurane)", "effect": "Reduced anesthetic requirements (MAC-sparing effect).", "severity": "Major" },
      { "drugClass": "CYP3A4 Inhibitors (Ketoconazole, Ritonavir)", "effect": "Increased sufentanil levels and duration of action.", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Severe serotonin syndrome, hypertensive crisis.", "severity": "Major" },
      { "drugClass": "Beta-Blockers/Calcium Channel Blockers", "effect": "Enhanced bradycardia and hypotension.", "severity": "Moderate" },
      { "drugClass": "Alcohol/CNS Depressants", "effect": "Additive CNS and respiratory depression.", "severity": "Major" }
    ],
    "warning": "Black box warning: respiratory depression. For hospital/ICU use only under expert supervision. Sublingual forms (Dsuvia, Zalviso) restricted to certified healthcare settings only. Context-sensitive half-life can be prolonged (>12h) after prolonged infusion. Muscle rigidity (chest wall rigidity) with rapid IV bolus.",
    "subCategoryId": "opioids-strong"
  },
  {
    "id": "alfentanil",
    "categoryId": "analgesics",
    "genericName": "Alfentanil",
    "brandNames": "Alfenta, Rapifen, Alfentanil",
    "description": "Ultra-short-acting synthetic mu-opioid agonist with rapid onset and brief duration of action (1/4 to 1/3 that of fentanyl), ideal for short surgical procedures and outpatient anesthesia.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Anesthesia (Short Procedures)",
    "dosageForm": "IV Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "8-50 mcg/kg IV bolus; 0.5-1.0 mcg/kg/min IV infusion", "sub": "Anesthesia induction: 130-245 mcg/kg total" },
      { "label": "ONSET / HALF-LIFE", "value": "IV: 1-2 min onset, 1.5-2 min peak effect", "sub": "1-2 hours elimination half-life; context-sensitive half-life minimally increases" },
      { "label": "CLINICAL INDICATIONS", "value": "Anesthesia induction/maintenance (short procedures), outpatient surgery, monitored anesthesia care (MAC), pain management in ICU", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Preferred for short outpatient procedures due to rapid clearance", "sub": "Equianalgesic: 1 mg alfentanil = 40-80 mcg fentanyl; CYP3A4 substrate" }
    ],
    "brandTable": [
      { "name": "Alfenta", "form": "IV Injection", "strengths": "500 mcg/mL (1 mL, 2 mL, 5 mL, 10 mL, 20 mL vials)", "manufacturer": "Janssen (J&J)", "region": "USA, Canada" },
      { "name": "Rapifen", "form": "IV Injection", "strengths": "500 mcg/mL (1 mL, 2 mL, 5 mL, 10 mL ampules)", "manufacturer": "Janssen-Cilag", "region": "UK, Europe, Australia, New Zealand" },
      { "name": "Alfentanil HCl", "form": "IV Injection", "strengths": "500 mcg/mL in various vial sizes", "manufacturer": "Various (Generic)", "region": "Global" },
      { "name": "Alfentanil (with Propofol)", "form": "IV Co-Administration", "strengths": "Pre-mixed combinations in some centers", "manufacturer": "Various (Generic)", "region": "Europe" },
      { "name": "Alfentanil HCL", "form": "IV Injection (preservative-free)", "strengths": "500 mcg/mL (2 mL amputes NRFit)", "manufacturer": "Hameln Pharma", "region": "Europe, UK" }
    ],
    "interactions": [
      { "drugClass": "Benzodiazepines (Midazolam, Diazepam)", "effect": "Synergistic respiratory depression and hypotension.", "severity": "Major" },
      { "drugClass": "Volatile Anesthetics (Isoflurane, Sevoflurane)", "effect": "MAC reduction; bradycardia risk.", "severity": "Major" },
      { "drugClass": "CYP3A4 Inhibitors (Ketoconazole, Erythromycin)", "effect": "Prolonged alfentanil effect and respiratory depression.", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Severe serotonin syndrome, hypertensive crisis.", "severity": "Major" },
      { "drugClass": "Propofol", "effect": "Synergistic sedation and respiratory depression.", "severity": "Major" },
      { "drugClass": "CNS Depressants (Alcohol, Sedatives)", "effect": "Additive CNS and respiratory depression.", "severity": "Major" }
    ],
    "warning": "Respiratory depression is dose-dependent and may persist after emergence from anesthesia. Muscle rigidity (chest wall) with rapid bolus administration. Naloxone-reversible. Reduce dose in elderly, hepatic impairment, and CYP3A4 inhibitor co-administration. For hospital use only.",
    "subCategoryId": "opioids-strong"
  },
  {
    "id": "remifentanil",
    "categoryId": "analgesics",
    "genericName": "Remifentanil",
    "brandNames": "Ultiva, Remifentanil",
    "description": "Ultra-short-acting mu-opioid agonist with unique esterase metabolism resulting in a context-insensitive half-life of 3-10 minutes regardless of infusion duration, ideal for rapid opioid turnover procedures.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Anesthesia (Rapid Turnover Procedures)",
    "dosageForm": "IV Injection/Infusion (powder for reconstitution)",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "0.5-1.0 mcg/kg IV bolus; 0.1-0.5 mcg/kg/min IV infusion", "sub": "Titrate to effect; typical infusion 0.1-0.25 mcg/kg/min" },
      { "label": "ONSET / HALF-LIFE", "value": "IV: 1-2 min onset, 3-5 min peak effect", "sub": "3-10 min elimination half-life (context-insensitive)" },
      { "label": "CLINICAL INDICATIONS", "value": "Anesthesia maintenance, intraoperative analgesia, neurosurgery, cardiac surgery, obese patients, prolonged procedures requiring rapid emergence", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Context-insensitive half-life unique among opioids (ester hydrolysis)", "sub": "Equianalgesic: 50-100 mcg remifentanil = 100 mcg fentanyl; NOT for postoperative pain (wears off too quickly)" }
    ],
    "brandTable": [
      { "name": "Ultiva", "form": "IV Injection (lyophilized powder)", "strengths": "1 mg, 2 mg, 5 mg vials (reconstitute to 50 mcg/mL, 250 mcg/mL, or 1 mg/mL)", "manufacturer": "Mylan (AbbVie previously)", "region": "USA, UK, Europe, Global" },
      { "name": "Remifentanil HCl", "form": "IV Injection (lyophilized powder)", "strengths": "1 mg, 2 mg, 5 mg vials", "manufacturer": "Various (Generic)", "region": "USA, Global" },
      { "name": "Remifentanil Actavis", "form": "IV Injection (lyophilized powder)", "strengths": "1 mg, 2 mg, 5 mg vials", "manufacturer": "Actavis (Teva)", "region": "Europe, Global" },
      { "name": "Remifentanil Kabi", "form": "IV Injection (lyophilized powder)", "strengths": "1 mg, 2 mg, 5 mg vials", "manufacturer": "Fresenius Kabi", "region": "Europe, Global" },
      { "name": "Remifentanil (with Propofol TCI)", "form": "IV Co-Infusion (Target-Controlled Infusion)", "strengths": "Prepared as per institutional protocols", "manufacturer": "Various", "region": "Global (anesthesia practice)" }
    ],
    "interactions": [
      { "drugClass": "Benzodiazepines (Midazolam, Diazepam)", "effect": "Synergistic respiratory depression and hypotension.", "severity": "Major" },
      { "drugClass": "Volatile Anesthetics (Isoflurane, Sevoflurane)", "effect": "Significant MAC reduction (up to 50-90%).", "severity": "Major" },
      { "drugClass": "Propofol/Thiopental", "effect": "Synergistic sedation, bradycardia, and hypotension.", "severity": "Major" },
      { "drugClass": "Beta Blockers/Calcium Channel Blockers", "effect": "Enhanced bradycardia and hypotensive effects.", "severity": "Moderate" },
      { "drugClass": "Neuromuscular Blockers", "effect": "Does not prolong neuromuscular blockade (no drug interaction).", "severity": "Minor" },
      { "drugClass": "MAO Inhibitors", "effect": "Possible serotonin syndrome risk.", "severity": "Moderate" }
    ],
    "warning": "Respiratory depression is profound and dose-dependent but resolves within minutes of infusion cessation. Muscle rigidity (chest wall) with rapid bolus. Bradycardia and hypotension common. Postoperative pain emerges rapidly upon discontinuation - plan transition analgesia. NOT for epidural (contains glycine excipient).",
    "subCategoryId": "opioids-strong"
  },
  {
    "id": "buprenorphine",
    "categoryId": "analgesics",
    "genericName": "Buprenorphine",
    "brandNames": "Subutex, Suboxone, Buprenex, Butrans, Belbuca, Temgesic, Norspan",
    "description": "Synthetic partial mu-opioid agonist and kappa-antagonist with a ceiling effect on respiratory depression, used for opioid use disorder maintenance and moderate-to-severe chronic pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Opioid Use Disorder, Moderate-to-Severe Pain",
    "dosageForm": "Sublingual Tablets/Film, Transdermal Patch, Buccal Film, Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "2-8 mg SL (OUD: 8-24 mg/day); 5-20 mcg/h patch q7d; 75-900 mcg buccal q12h", "sub": "Partial agonist - ceiling effect reduces abuse and respiratory depression risk" },
      { "label": "ONSET / HALF-LIFE", "value": "SL: 30-60 min; Buccal: 30 min; Patch: 3+ days to steady state", "sub": "24-42 hours half-life; high receptor affinity (slow dissociation)" },
      { "label": "CLINICAL INDICATIONS", "value": "Opioid use disorder maintenance, moderate-to-severe chronic pain, cancer pain, acute pain (injection)", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Partial agonist - may precipitate withdrawal in full-agonist tolerant patients", "sub": "Equianalgesic: 0.4 mg SL = 10 mg morphine IM; ceiling at 32 mg SL due to partial agonism" }
    ],
    "brandTable": [
      { "name": "Subutex", "form": "Sublingual Tablets", "strengths": "2 mg, 8 mg", "manufacturer": "Indivior", "region": "USA, UK, Europe, Global" },
      { "name": "Suboxone", "form": "Sublingual Film (with Naloxone 4:1)", "strengths": "2/0.5 mg, 4/1 mg, 8/2 mg, 12/3 mg", "manufacturer": "Indivior", "region": "USA, UK, Europe, Canada, Global" },
      { "name": "Butrans", "form": "Transdermal Patch (weekly)", "strengths": "5 mcg/h, 7.5 mcg/h, 10 mcg/h, 15 mcg/h, 20 mcg/h", "manufacturer": "Purdue Pharma", "region": "USA, Canada" },
      { "name": "Belbuca", "form": "Buccal Film", "strengths": "75 mcg, 150 mcg, 300 mcg, 450 mcg, 600 mcg, 750 mcg, 900 mcg", "manufacturer": "BioDelivery Sciences", "region": "USA" },
      { "name": "Temgesic", "form": "Sublingual Tablets, Injection", "strengths": "0.2 mg, 0.4 mg SL; 0.3 mg/mL injection", "manufacturer": "Indivior (Reckitt Benckiser)", "region": "UK, Europe, Australia, New Zealand" }
    ],
    "interactions": [
      { "drugClass": "Benzodiazepines (Diazepam, Alprazolam)", "effect": "Profound respiratory depression and CNS depression - leading cause of death in OUD patients.", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS depression; hepatotoxicity risk.", "severity": "Major" },
      { "drugClass": "Full Opioid Agonists (Morphine, Oxycodone, Heroin)", "effect": "Precipitated withdrawal (partial agonist displaces full agonist).", "severity": "Major" },
      { "drugClass": "CYP3A4 Inhibitors (Ketoconazole, Ritonavir)", "effect": "Increased buprenorphine levels and effects.", "severity": "Moderate" },
      { "drugClass": "CNS Depressants (Sedatives, Antipsychotics)", "effect": "Additive CNS depression.", "severity": "Major" },
      { "drugClass": "Serotonergic Drugs (SSRIs, MAOIs)", "effect": "Serotonin syndrome risk.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: respiratory depression (less than full agonists due to ceiling effect), addiction risk, neonatal abstinence syndrome. May precipitate severe withdrawal in opioid-dependent patients if initiated too soon after full agonist use. Suboxone contains naloxone to deter IV abuse. Hepatic monitoring required for OUD therapy.",
    "subCategoryId": "opioids-strong"
  },
  {
    "id": "oxymorphone",
    "categoryId": "analgesics",
    "genericName": "Oxymorphone",
    "brandNames": "Opana, Opana ER, Numorphan",
    "description": "Semi-synthetic mu-opioid agonist approximately 10 times more potent than morphine with minimal histamine release, used for moderate-to-severe acute and chronic pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Moderate-to-Severe Pain",
    "dosageForm": "Oral IR/ER Tablets, Injection, Suppository",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "5-10 mg PO q4-6h (IR); 7.5-30 mg PO q12h (ER); 0.5-1 mg IV q2-4h", "sub": "ER: for opioid-tolerant patients only; titrate cautiously" },
      { "label": "ONSET / HALF-LIFE", "value": "IR: 15-30 min onset, 30-60 min peak; IV: 5-10 min onset", "sub": "4-6 hours half-life (IR); 9-12 hours (ER)" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute pain, chronic pain, cancer pain, postoperative pain, trauma pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "No active metabolites - preferred in hepatic impairment", "sub": "Equianalgesic: 10 mg PO = 1 mg IV = 30 mg morphine PO; high abuse potential" }
    ],
    "brandTable": [
      { "name": "Opana", "form": "Immediate-Release Tablets", "strengths": "5 mg, 10 mg", "manufacturer": "Endo Pharmaceuticals", "region": "USA (discontinued 2017)" },
      { "name": "Opana ER", "form": "Extended-Release Tablets (abuse-deterrent)", "strengths": "5 mg, 7.5 mg, 10 mg, 15 mg, 20 mg, 30 mg, 40 mg", "manufacturer": "Endo Pharmaceuticals", "region": "USA (discontinued 2017)" },
      { "name": "Numorphan", "form": "Injection, Suppositories", "strengths": "1 mg/mL, 1.5 mg/mL injection; 5 mg suppositories", "manufacturer": "Endo Pharmaceuticals", "region": "USA" },
      { "name": "Oxymorphone HCl", "form": "Tablets, Injection", "strengths": "5 mg, 10 mg IR tabs; 1 mg/mL injection", "manufacturer": "Various (Generic)", "region": "USA, Global" },
      { "name": "Oxymorphone ER", "form": "Extended-Release Tablets", "strengths": "5 mg, 7.5 mg, 10 mg, 15 mg, 20 mg, 30 mg, 40 mg", "manufacturer": "Various (Generic)", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "Benzodiazepines (Diazepam, Alprazolam)", "effect": "Profound respiratory depression, sedation, fatal overdose.", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS depression; ER dose-dumping risk.", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Severe serotonin syndrome, hypertensive crisis.", "severity": "Major" },
      { "drugClass": "CNS Depressants (Sedatives, Anesthetics)", "effect": "Additive CNS and respiratory depression.", "severity": "Major" },
      { "drugClass": "Anticholinergics", "effect": "Additive constipation and urinary retention.", "severity": "Moderate" },
      { "drugClass": "CYP3A4 Inducers (Rifampin, Carbamazepine)", "effect": "Reduced oxymorphone levels.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: respiratory depression, addiction risk, neonatal withdrawal. Opana ER was withdrawn from US market in 2017 after FDA request due to abuse via injection. Highest abuse liability among prescription opioids. Crushing ER formulation causes rapid release of fatal dose. Constipation requires bowel regimen.",
    "subCategoryId": "opioids-strong"
  },
  {
    "id": "meperidine",
    "categoryId": "analgesics",
    "genericName": "Meperidine (Pethidine)",
    "brandNames": "Demerol, Pethidine, Meperidine, Dolantin",
    "description": "Synthetic phenylpiperidine mu-opioid agonist with antispasmodic properties, now reserved for short-term use due to toxicity of its metabolite normeperidine.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Acute Pain (Short-Term Use Only)",
    "dosageForm": "Oral Tablets, Injection, Syrup",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "50-150 mg PO/IM/SC q3-4h; 25-50 mg IV slow push q2-4h", "sub": "Max: 600 mg/day (orally); not to exceed 48 hours of use" },
      { "label": "ONSET / HALF-LIFE", "value": "PO: 30-60 min; IM: 10-15 min; IV: 5-10 min", "sub": "3-4 hours half-life; normeperidine 8-21 hours (accumulates)" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute pain (short-term), postoperative shivering, rigors from amphotericin B, procedural pain", "sub": "NOT recommended for chronic pain" },
      { "label": "SPECIAL CONSIDERATION", "value": "Normeperidine accumulation causes neurotoxicity (seizures, myoclonus)", "sub": "Avoid in renal impairment; MAOI interaction (serotonin syndrome); WHO recommends avoiding for chronic pain" }
    ],
    "brandTable": [
      { "name": "Demerol", "form": "Tablets, Injection, Syrup", "strengths": "50 mg, 100 mg tabs; 25 mg/5 mL syrup; 50 mg/mL, 75 mg/mL, 100 mg/mL injection", "manufacturer": "Sanofi-Aventis", "region": "USA, Canada" },
      { "name": "Pethidine", "form": "Tablets, Injection", "strengths": "50 mg, 100 mg tabs; 50 mg/mL injection", "manufacturer": "Various (Generic)", "region": "UK, Europe, Australia, New Zealand" },
      { "name": "Dolantin", "form": "Tablets, Injection, Suppositories", "strengths": "50 mg, 100 mg tabs; 50 mg/mL, 100 mg/mL injection; 100 mg supp", "manufacturer": "Sanofi", "region": "Europe, Asia, Middle East" },
      { "name": "Meperidine HCl", "form": "Tablets, Injection, Syrup", "strengths": "50 mg, 100 mg tabs; 25 mg/5 mL syrup; 25 mg/mL, 50 mg/mL, 75 mg/mL, 100 mg/mL injection", "manufacturer": "Various (Generic)", "region": "USA, Global" },
      { "name": "Pethilorfan", "form": "Injection (with Nalorphine)", "strengths": "50 mg/mL + 0.625 mg/mL nalorphine", "manufacturer": "Various (Generic)", "region": "Australia, New Zealand" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors (Phenelzine, Tranylcypromine)", "effect": "Severe serotonin syndrome, hyperpyrexia, seizures, coma, death (contraindicated).", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs/Triptans", "effect": "Additive serotonin syndrome risk.", "severity": "Major" },
      { "drugClass": "Benzodiazepines (Diazepam, Alprazolam)", "effect": "Additive CNS and respiratory depression.", "severity": "Major" },
      { "drugClass": "Phenytoin", "effect": "Increased normeperidine production (increased metabolism).", "severity": "Moderate" },
      { "drugClass": "Ritonavir/Ritonavir-Boosted PIs", "effect": "Increased normeperidine levels.", "severity": "Moderate" },
      { "drugClass": "Alcohol/CNS Depressants", "effect": "Additive CNS and respiratory depression.", "severity": "Major" }
    ],
    "warning": "Black box warning: respiratory depression, addiction risk. Normeperidine metabolite is neurotoxic (seizures, myoclonus, dysphoria) especially in renal impairment. CONTRAINDICATED with MAOIs (can cause fatal serotonin syndrome). WHO recommends avoiding meperidine for chronic pain. Limit to 48 hours maximum.",
    "subCategoryId": "opioids-strong"
  },
  {
    "id": "codeine",
    "categoryId": "analgesics",
    "genericName": "Codeine",
    "brandNames": "Codeine Contin, Codaphen, Codicaps",
    "description": "Naturally occurring weak opioid prodrug metabolized via CYP2D6 to morphine, classified as a moderate mu-opioid agonist for mild-to-moderate pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Mild-to-Moderate Pain, Cough",
    "dosageForm": "Oral Tablets, Oral Solution, Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "15-60 mg PO q4-6h PRN", "sub": "Max: 360 mg/day; doses above 60 mg provide diminishing analgesia via saturable metabolism" },
      { "label": "ONSET / HALF-LIFE", "value": "30-40 min onset, 1-2h peak", "sub": "2-4 hours (codeine); 2-4 hours (morphine metabolite)" },
      { "label": "CLINICAL INDICATIONS", "value": "Mild-to-moderate pain, cough suppression (antitussive), diarrhea (antidiarrheal)", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "CYP2D6 polymorphisms cause variable efficacy (poor vs ultra-rapid metabolizers)", "sub": "Contraindicated in children <12 post-tonsillectomy (ultra-rapid metabolizers risk fatal respiratory depression)" }
    ],
    "brandTable": [
      { "name": "Codeine Contin", "form": "Controlled-Release Tablets", "strengths": "50 mg, 100 mg, 150 mg, 200 mg", "manufacturer": "Purdue Pharma (Canada)", "region": "Canada" },
      { "name": "Codaphen", "form": "Tablets", "strengths": "15 mg, 30 mg, 60 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Codicaps", "form": "Capsules", "strengths": "15 mg, 30 mg, 60 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Codeine Phosphate", "form": "Tablets, Oral Solution, Injection", "strengths": "15 mg, 30 mg, 60 mg tabs; 15 mg/5 mL, 25 mg/5 mL solution; 30 mg/mL, 60 mg/mL injection", "manufacturer": "Various (Generic)", "region": "Global" },
      { "name": "Codafen (with Ibuprofen)", "form": "Tablets", "strengths": "12.5 mg/200 mg, 12.5 mg/400 mg (codeine/ibuprofen)", "manufacturer": "Various", "region": "Asia, Australia" }
    ],
    "interactions": [
      { "drugClass": "Benzodiazepines (Diazepam, Alprazolam)", "effect": "Additive respiratory and CNS depression.", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS depression and sedation.", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Serotonin syndrome, hypertensive crisis.", "severity": "Major" },
      { "drugClass": "CYP2D6 Inhibitors (Fluoxetine, Paroxetine, Bupropion)", "effect": "Reduced conversion to morphine, decreased analgesia.", "severity": "Moderate" },
      { "drugClass": "CYP3A4 Inducers (Rifampin, Carbamazepine)", "effect": "Reduced codeine levels and analgesia.", "severity": "Moderate" },
      { "drugClass": "Quinidine", "effect": "Blocks CYP2D6 conversion, abolishes analgesic effect.", "severity": "Major" }
    ],
    "warning": "Black box warning: respiratory depression, addiction risk, neonatal withdrawal. FDA contraindicated in children <12 years for post-tonsillectomy pain (ultra-rapid CYP2D6 metabolizers at risk of fatal respiratory depression). CYP2D6 poor metabolizers get no analgesic effect. Constipation, nausea common.",
    "subCategoryId": "opioids-moderate"
  },
  {
    "id": "tramadol",
    "categoryId": "analgesics",
    "genericName": "Tramadol",
    "brandNames": "Ultram, Tramal, ConZip, Rybix, Ryzolt, Tramundin",
    "description": "Synthetic atypical mu-opioid agonist with SNRI (serotonin/norepinephrine reuptake inhibition) properties, providing dual-mechanism analgesia for moderate-to-severe pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Moderate-to-Severe Pain",
    "dosageForm": "Oral IR/ER Tablets, Oral Drops, Injection, Suppository",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "50-100 mg PO q4-6h (IR); 100-300 mg PO q24h (ER)", "sub": "Max: 400 mg/day (300 mg/day in elderly)" },
      { "label": "ONSET / HALF-LIFE", "value": "IR: 30-60 min onset, 2h peak; ER: 4-6h onset", "sub": "5-7 hours (tramadol); 7-9 hours (active M1 metabolite)" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute pain, chronic pain, osteoarthritis pain, neuropathic pain, postoperative pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "CYP2D6-dependent activation; M1 metabolite (O-desmethyltramadol) is 200x more mu-affinity", "sub": "Seizure threshold reduction; serotonin syndrome risk (dual mechanism); Schedule IV controlled substance" }
    ],
    "brandTable": [
      { "name": "Ultram", "form": "Immediate-Release Tablets", "strengths": "50 mg", "manufacturer": "Janssen (J&J)", "region": "USA, Canada" },
      { "name": "Ultram ER", "form": "Extended-Release Tablets", "strengths": "100 mg, 200 mg, 300 mg", "manufacturer": "Janssen (J&J)", "region": "USA" },
      { "name": "Tramal", "form": "Capsules, Drops, Injection, Suppositories", "strengths": "50 mg, 100 mg caps; 100 mg/mL drops; 50 mg/mL, 100 mg/mL injection; 100 mg supp", "manufacturer": "Grunenthal", "region": "Europe, UK, Asia, Global" },
      { "name": "ConZip", "form": "Extended-Release Capsules", "strengths": "100 mg, 200 mg, 300 mg", "manufacturer": "Vertical Pharma", "region": "USA" },
      { "name": "Tramundin", "form": "Retard Tablets", "strengths": "100 mg, 150 mg, 200 mg", "manufacturer": "Mundipharma", "region": "Europe, Asia" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "Severe serotonin syndrome, seizures, hypertensive crisis (contraindicated).", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs/Triptans", "effect": "Additive serotonin syndrome risk (triple mechanism).", "severity": "Major" },
      { "drugClass": "Benzodiazepines (Diazepam, Alprazolam)", "effect": "Additive respiratory and CNS depression.", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS depression; ER dose-dumping risk.", "severity": "Major" },
      { "drugClass": "CYP2D6 Inhibitors (Fluoxetine, Paroxetine, Bupropion)", "effect": "Reduced tramadol activation, decreased analgesia.", "severity": "Moderate" },
      { "drugClass": "Seizure Threshold-Lowering Drugs (Bupropion, Clozapine, TCAs)", "effect": "Additive seizure risk.", "severity": "Major" }
    ],
    "warning": "Black box warning: respiratory depression, addiction risk, neonatal withdrawal. Seizure risk increased at high doses (>400 mg/day) and with SSRIs/SNRIs/TCAs. Serotonin syndrome risk due to dual SNRI mechanism. CYP2D6 ultrarapid metabolizers may have enhanced effects. Schedule IV controlled substance. Taper to avoid withdrawal.",
    "subCategoryId": "opioids-moderate"
  },
  {
    "id": "hydrocodone",
    "categoryId": "analgesics",
    "genericName": "Hydrocodone",
    "brandNames": "Vicodin, Norco, Lortab, Hycodan, Zohydro ER, Hysingla ER",
    "description": "Semi-synthetic mu-opioid agonist widely prescribed in combination formulations with acetaminophen for moderate-to-moderately-severe pain, also available as single-entity ER formulations.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Moderate-to-Severe Pain",
    "dosageForm": "Oral IR/ER Tablets, Oral Solution, ER Capsules",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "5-10 mg PO q4-6h PRN (combination); 10-50 mg PO q12h (ER)", "sub": "Max: varies by APAP content (limit: 4g/day acetaminophen)" },
      { "label": "ONSET / HALF-LIFE", "value": "IR: 10-20 min onset, 30-60 min peak; ER: 1-2h onset", "sub": "3-4.5 hours half-life (IR); 7-9 hours (ER)" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute pain, chronic pain, dental pain, trauma pain, postoperative pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Most prescribed opioid in the US in combination formulations", "sub": "Equianalgesic: 30 mg PO = 30 mg morphine PO" }
    ],
    "brandTable": [
      { "name": "Vicodin", "form": "Tablets (5/300, 7.5/300, 10/300 with APAP)", "strengths": "5 mg/300 mg, 7.5 mg/300 mg, 10 mg/300 mg", "manufacturer": "AbbVie", "region": "USA, Global" },
      { "name": "Norco", "form": "Tablets (5/325, 7.5/325, 10/325 with APAP)", "strengths": "5 mg/325 mg, 7.5 mg/325 mg, 10 mg/325 mg", "manufacturer": "Allergan (AbbVie)", "region": "USA" },
      { "name": "Zohydro ER", "form": "Extended-Release Capsules (single entity)", "strengths": "10 mg, 15 mg, 20 mg, 30 mg, 40 mg, 50 mg", "manufacturer": "Pernix Therapeutics", "region": "USA" },
      { "name": "Hysingla ER", "form": "Extended-Release Tablets (abuse-deterrent)", "strengths": "20 mg, 30 mg, 40 mg, 60 mg, 80 mg, 100 mg, 120 mg", "manufacturer": "Purdue Pharma", "region": "USA" },
      { "name": "Hycodan", "form": "Syrup/Tablets (with Homatropine, for cough)", "strengths": "5 mg/1.5 mg per 5 mL syrup; 5 mg/1.5 mg tabs", "manufacturer": "Sanofi", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "Benzodiazepines (Diazepam, Alprazolam)", "effect": "Additive respiratory depression, profound sedation - leading cause of opioid OD deaths.", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS depression; hepatotoxicity risk with APAP component.", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Severe serotonin syndrome, hypertensive crisis.", "severity": "Major" },
      { "drugClass": "CNS Depressants (Sedatives, Hypnotics)", "effect": "Additive sedation and respiratory depression.", "severity": "Major" },
      { "drugClass": "CYP3A4 Inhibitors (Ketoconazole, Erythromycin)", "effect": "Increased hydrocodone levels.", "severity": "Moderate" },
      { "drugClass": "CYP3A4 Inducers (Rifampin, Carbamazepine)", "effect": "Reduced hydrocodone levels.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: respiratory depression, addiction risk, neonatal abstinence syndrome. Acetaminophen component limits maximum daily hydrocodone dose (limit APAP to <4 g/day). ER formulations (Zohydro, Hysingla) for opioid-tolerant patients only. Abuse-deterrent Hysingla reduces IV/IN abuse but does not prevent oral abuse.",
    "subCategoryId": "opioids-moderate"
  },
  {
    "id": "tapentadol",
    "categoryId": "analgesics",
    "genericName": "Tapentadol",
    "brandNames": "Nucynta, Nucynta ER, Palexia, Tapal",
    "description": "Novel centrally acting mu-opioid agonist with norepinephrine reuptake inhibition, providing synergistic analgesic efficacy for moderate-to-severe pain with improved GI tolerability.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Moderate-to-Severe Pain",
    "dosageForm": "Oral IR/ER Tablets",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "50-100 mg PO q4-6h (IR); 50-250 mg PO q12h (ER)", "sub": "Max: 600 mg/day (IR); 500 mg/day (ER)" },
      { "label": "ONSET / HALF-LIFE", "value": "IR: 30-60 min onset, 1.5h peak", "sub": "4-5 hours (IR); 5-6 hours (ER)" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute pain, chronic pain, neuropathic pain, diabetic neuropathy, osteoarthritis pain, low back pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "NRI mechanism provides efficacy in neuropathic pain unlike pure mu-agonists", "sub": "Equianalgesic: 75 mg = 10 mg IV morphine; Schedule II controlled substance" }
    ],
    "brandTable": [
      { "name": "Nucynta", "form": "Immediate-Release Tablets", "strengths": "50 mg, 75 mg, 100 mg", "manufacturer": "Depomed (Assertio)", "region": "USA, Canada" },
      { "name": "Nucynta ER", "form": "Extended-Release Tablets", "strengths": "50 mg, 100 mg, 150 mg, 200 mg, 250 mg", "manufacturer": "Depomed (Assertio)", "region": "USA, Canada" },
      { "name": "Palexia", "form": "IR Tablets, ER Tablets, Oral Solution", "strengths": "50 mg, 75 mg, 100 mg IR; 50 mg, 100 mg, 150 mg, 200 mg, 250 mg ER; 20 mg/mL solution", "manufacturer": "Grunenthal", "region": "UK, Europe, Australia, New Zealand" },
      { "name": "Tapal", "form": "Tablets", "strengths": "50 mg, 75 mg, 100 mg", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" },
      { "name": "Tapentadol HCl", "form": "IR Tablets, ER Tablets", "strengths": "50 mg, 75 mg, 100 mg IR; 50 mg, 100 mg, 150 mg, 200 mg, 250 mg ER", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "Severe serotonin syndrome, hypertensive crisis, seizures (contraindicated).", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs/TCAs/Triptans", "effect": "Additive serotonin syndrome risk.", "severity": "Major" },
      { "drugClass": "Benzodiazepines (Diazepam, Alprazolam)", "effect": "Additive respiratory and CNS depression.", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS depression; ER dose-dumping risk.", "severity": "Major" },
      { "drugClass": "CNS Depressants (Sedatives, Anesthetics)", "effect": "Additive sedation and respiratory depression.", "severity": "Major" },
      { "drugClass": "Antihypertensives", "effect": "May enhance hypotensive effects.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: respiratory depression, addiction risk, neonatal withdrawal. Serotonin syndrome risk due to NRI mechanism (avoid with MAOIs, SSRIs, SNRIs). Seizure risk. Less constipation than equianalgesic doses of morphine (unique NRI-sparing effect on GI tract). Schedule II controlled substance. Taper to avoid withdrawal.",
    "subCategoryId": "opioids-moderate"
  },
  {
    "id": "dihydrocodeine",
    "categoryId": "analgesics",
    "genericName": "Dihydrocodeine",
    "brandNames": "DHC Contin, Synalgos DC (with aspirin/caffeine), Dihydrocodeine, Paracodin, Codidol",
    "description": "Semi-synthetic weak mu-opioid agonist structurally related to codeine with slightly higher potency and bioavailability, used for moderate pain and cough suppression.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Moderate Pain, Cough",
    "dosageForm": "Oral IR/ER Tablets, Oral Solution, Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "30-60 mg PO q4-6h PRN (IR); 60-120 mg PO q12h (ER)", "sub": "Max: 240 mg/day (IR); 240 mg/day (ER)" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min onset, 1-2h peak", "sub": "3-5 hours (IR); 12+ hours sustained from ER" },
      { "label": "CLINICAL INDICATIONS", "value": "Moderate pain, chronic pain, cough suppression, dyspnea in palliative care, diarrhea", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Metabolized via CYP2D6 to dihydromorphine (active metabolite)", "sub": "Equianalgesic: 30 mg = 30 mg codeine = 5 mg morphine" }
    ],
    "brandTable": [
      { "name": "DHC Contin", "form": "Controlled-Release Tablets", "strengths": "60 mg, 90 mg, 120 mg", "manufacturer": "Purdue Pharma (Canada)", "region": "Canada" },
      { "name": "Synalgos DC", "form": "Capsules (with Aspirin 356.4 mg/Caffeine 30 mg)", "strengths": "16 mg dihydrocodeine per capsule", "manufacturer": "Alra (Mayne Pharma)", "region": "USA" },
      { "name": "Paracodin", "form": "Tablets, Drops, Syrup", "strengths": "10 mg, 30 mg tabs; 5 mg/5 mL syrup; 10 mg/mL drops", "manufacturer": "Various (Generic)", "region": "Germany, Europe" },
      { "name": "Codidol", "form": "Tablets, ER Tablets", "strengths": "30 mg, 40 mg, 60 mg IR; 60 mg, 90 mg, 120 mg ER", "manufacturer": "Various (Generic)", "region": "UK, Europe" },
      { "name": "Dihydrocodeine HCl", "form": "Tablets, ER Tablets, Oral Solution, Injection", "strengths": "30 mg, 40 mg, 60 mg tabs; 60 mg, 90 mg, 120 mg ER; 15 mg/5 mL solution; 50 mg/mL injection", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Benzodiazepines (Diazepam, Alprazolam)", "effect": "Additive respiratory and CNS depression.", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS depression and sedation.", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Possible serotonin syndrome, hypertensive crisis.", "severity": "Major" },
      { "drugClass": "CYP2D6 Inhibitors (Fluoxetine, Paroxetine, Bupropion)", "effect": "Reduced conversion to dihydromorphine, decreased analgesia.", "severity": "Moderate" },
      { "drugClass": "CNS Depressants (Sedatives, Hypnotics)", "effect": "Additive CNS depression.", "severity": "Major" },
      { "drugClass": "CYP3A4 Inducers (Rifampin, Carbamazepine)", "effect": "Reduced dihydrocodeine levels.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: respiratory depression, addiction risk. CYP2D6 poor metabolizers may experience reduced analgesia. Ultra-rapid metabolizers risk toxicity. Available in combination with aspirin/caffeine (Synalgos DC). Tolerance and physical dependence develop. Constipation requires bowel management. Not commonly used in the US (more common in Europe and Canada).",
    "subCategoryId": "opioids-moderate"
  },
  {
    "id": "dextropropoxyphene",
    "categoryId": "analgesics",
    "genericName": "Dextropropoxyphene (Propoxyphene)",
    "brandNames": "Darvon, Darvocet-N, Propoxyphene, Doloxene, Distalgesic, Di-Gesic, Capadex",
    "description": "Weak mu-opioid agonist structurally related to methadone, previously used for mild-to-moderate pain but withdrawn from many markets due to cardiotoxicity (QT prolongation) even at therapeutic doses.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Mild-to-Moderate Pain (Historical Use Only)",
    "dosageForm": "Oral Capsules, Tablets (including with APAP/ASA)",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "65 mg PO q4h PRN (Darvon); 100 mg PO q4h PRN (Darvocet-N 100)", "sub": "Max: 390 mg/day; dose-related QT prolongation risk at all doses" },
      { "label": "ONSET / HALF-LIFE", "value": "30-60 min onset, 2-3h peak", "sub": "6-12 hours (parent); 30-36 hours (active metabolite norpropoxyphene)" },
      { "label": "CLINICAL INDICATIONS", "value": "Mild-to-moderate pain (withdrawn due to safety concerns)", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "WITHDRAWN from US market (2010) and European market; still available in some countries", "sub": "Metabolite norpropoxyphene accumulates - causes cardiac arrhythmias even at therapeutic doses" }
    ],
    "brandTable": [
      { "name": "Darvon", "form": "Capsules", "strengths": "65 mg", "manufacturer": "Eli Lilly (aaiPharma)", "region": "USA (withdrawn 2010)" },
      { "name": "Darvocet-N", "form": "Tablets (with APAP)", "strengths": "50 mg/325 mg, 100 mg/325 mg", "manufacturer": "Eli Lilly (aaiPharma)", "region": "USA (withdrawn 2010)" },
      { "name": "Distalgesic", "form": "Tablets (with Paracetamol 325 mg)", "strengths": "32.5 mg dose", "manufacturer": "Various (Generic)", "region": "Europe (withdrawn)" },
      { "name": "Di-Gesic", "form": "Tablets (with Paracetamol)", "strengths": "32.5 mg/325 mg dose", "manufacturer": "Various (Generic)", "region": "South Africa, Asia (some still available)" },
      { "name": "Capadex", "form": "Capsules (with Paracetamol)", "strengths": "32.5 mg/325 mg dose", "manufacturer": "Various (Generic)", "region": "Pakistan, India, Asia" }
    ],
    "interactions": [
      { "drugClass": "QT-Prolonging Agents (Amiodarone, Sotalol, Haloperidol)", "effect": "Additive QT prolongation, torsades de pointes risk.", "severity": "Major" },
      { "drugClass": "Benzodiazepines/Alcohol/CNS Depressants", "effect": "Additive CNS and respiratory depression.", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Possible serotonin syndrome.", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk.", "severity": "Major" },
      { "drugClass": "CYP3A4 Inducers (Rifampin, Carbamazepine)", "effect": "Increased norpropoxyphene production (more toxic).", "severity": "Major" },
      { "drugClass": "Antidepressants (TCAs, SSRIs)", "effect": "Additive CNS effects, possible serotonin syndrome.", "severity": "Moderate" }
    ],
    "warning": "Black box warning (historical): cardiotoxicity (QT prolongation, fatal arrhythmias) even at therapeutic doses. FDA withdrew from US market in 2010 following failure to demonstrate cardiac safety. Norpropoxyphene metabolite accumulates in elderly, renal impairment, and at higher doses. Valvular heart disease risk. Avoid use entirely.",
    "subCategoryId": "opioids-moderate"
  },
  {
    "id": "pentazocine",
    "categoryId": "analgesics",
    "genericName": "Pentazocine",
    "brandNames": "Talwin, Fortral, Talacen (with APAP), Pentazocine",
    "description": "Mixed opioid agonist-antagonist at mu, kappa, and sigma receptors with weak mu antagonism and kappa agonism, used for moderate-to-severe pain with ceiling effect on respiratory depression.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Moderate-to-Severe Pain",
    "dosageForm": "Oral Tablets, Injection, Suppositories",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "50-100 mg PO q3-4h PRN; 30 mg IM/SC/IV q3-4h PRN", "sub": "Max: 600 mg/day PO; 360 mg/day injection" },
      { "label": "ONSET / HALF-LIFE", "value": "PO: 15-30 min onset, 1-3h peak; IM: 15-30 min onset", "sub": "2-3 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Moderate-to-severe pain, obstetric analgesia (rarely), preoperative sedation", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Partial kappa agonist/mu antagonist - may precipitate withdrawal in opioid-dependent patients", "sub": "Equianalgesic: 50 mg PO = 30 mg codeine = 10 mg morphine; ceiling on respiratory depression" }
    ],
    "brandTable": [
      { "name": "Talwin", "form": "Tablets, Injection", "strengths": "50 mg tablets; 30 mg/mL injection (1 mL and 2 mL vials)", "manufacturer": "Sanofi-Aventis", "region": "USA, Canada" },
      { "name": "Fortral", "form": "Capsules, Tablets, Injection, Suppositories", "strengths": "50 mg caps; 30 mg/mL injection; 50 mg suppositories", "manufacturer": "Sterling Winthrop (Sanofi)", "region": "UK, Europe, Asia" },
      { "name": "Talacen", "form": "Tablets (with APAP 650 mg)", "strengths": "Pentazocine 25 mg with APAP 650 mg", "manufacturer": "Sanofi-Aventis", "region": "USA" },
      { "name": "Pentazocine HCl", "form": "Tablets, Injection", "strengths": "50 mg tabs; 30 mg/mL injection", "manufacturer": "Various (Generic)", "region": "Global" },
      { "name": "Pentazocine Lactate", "form": "Injection", "strengths": "30 mg/mL in prefilled syringes", "manufacturer": "Various (Generic)", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Opioid Agonists (Morphine, Oxycodone, Methadone)", "effect": "Precipitated withdrawal; reduced analgesic effect of full agonists.", "severity": "Major" },
      { "drugClass": "Benzodiazepines/Alcohol/CNS Depressants", "effect": "Additive CNS depression.", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Possible serotonin syndrome, hypertensive crisis.", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs", "effect": "Additive serotonin syndrome risk.", "severity": "Moderate" },
      { "drugClass": "CYP3A4 Inhibitors (Ketoconazole, Erythromycin)", "effect": "Increased pentazocine levels.", "severity": "Moderate" },
      { "drugClass": "Anticholinergics", "effect": "Additive anticholinergic effects.", "severity": "Moderate" }
    ],
    "warning": "Black box warning: respiratory depression (ceiling effect makes it less severe than full agonists). May cause psychotomimetic effects (dysphoria, hallucinations, nightmares) due to kappa/sigma activity at higher doses. Can precipitate withdrawal in opioid-dependent patients. Injection site sclerosis/tissue damage with repeated IM use. Ceiling on both analgesia and respiratory depression.",
    "subCategoryId": "opioids-moderate"
  },
  {
    "id": "nalbuphine",
    "categoryId": "analgesics",
    "genericName": "Nalbuphine",
    "brandNames": "Nubain, Nalbuphine",
    "description": "Synthetic mixed opioid agonist-antagonist with potent kappa agonist and mu antagonist activity, providing effective analgesia with a ceiling on respiratory depression.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Moderate-to-Severe Pain",
    "dosageForm": "Injection (IM/IV/SC)",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "10-20 mg IM/IV/SC q3-6h PRN", "sub": "Max: 160 mg/day; single max: 20 mg" },
      { "label": "ONSET / HALF-LIFE", "value": "IV: 2-3 min onset; IM: 15 min onset", "sub": "3-6 hours half-life" },
      { "label": "CLINICAL INDICATIONS", "value": "Moderate-to-severe acute pain, obstetric analgesia (labor), postoperative pain, supplement to anesthesia", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Ceiling on respiratory depression - safer in opioid-naive patients", "sub": "Equianalgesic: 10 mg = 10 mg morphine; may precipitate withdrawal in opioid-dependent patients" }
    ],
    "brandTable": [
      { "name": "Nubain", "form": "Injection (IM/IV/SC)", "strengths": "10 mg/mL, 20 mg/mL (1 mL, 2 mL, 10 mL vials)", "manufacturer": "Endo Pharmaceuticals", "region": "USA" },
      { "name": "Nalbuphine HCl", "form": "Injection (IM/IV/SC)", "strengths": "10 mg/mL, 20 mg/mL; preservative-free available", "manufacturer": "Various (Generic)", "region": "USA, Global" },
      { "name": "Nalbuphine Generic", "form": "Injection, Prefilled Syringes", "strengths": "10 mg/mL, 20 mg/mL in various sizes", "manufacturer": "Various (Generic)", "region": "Global" },
      { "name": "Nalbuphine (Veterinary)", "form": "Injection", "strengths": "10 mg/mL, 20 mg/mL", "manufacturer": "Various (Generic)", "region": "Global" },
      { "name": "Nalbuphine HCl (preservative-free)", "form": "IV Injection (epidural/spinal use)", "strengths": "10 mg/mL (1 mL ampules)", "manufacturer": "Various (Generic)", "region": "USA, Global" }
    ],
    "interactions": [
      { "drugClass": "Full Opioid Agonists (Morphine, Fentanyl, Oxycodone)", "effect": "Precipitated withdrawal; reduced analgesic efficacy of full agonists.", "severity": "Major" },
      { "drugClass": "Benzodiazepines (Midazolam, Diazepam)", "effect": "Additive sedation and respiratory depression (limited due to ceiling).", "severity": "Major" },
      { "drugClass": "Alcohol/CNS Depressants", "effect": "Additive CNS depression.", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Possible serotonin syndrome.", "severity": "Moderate" },
      { "drugClass": "General Anesthetics (Propofol, Thiopental)", "effect": "Reduced anesthetic requirements.", "severity": "Moderate" },
      { "drugClass": "SSRIs/SNRIs", "effect": "Possible serotonin syndrome (rare).", "severity": "Minor" }
    ],
    "warning": "Ceiling on respiratory depression distinguishes nalbuphine from full mu-agonists, but still has abuse potential. Can precipitate withdrawal in opioid-dependent patients. Psychotomimetic effects (dysphoria, depersonalization) at higher doses due to kappa activity. IM injection only (no oral formulation). Not a controlled substance in all jurisdictions.",
    "subCategoryId": "opioids-moderate"
  },
  {
    "id": "butorphanol",
    "categoryId": "analgesics",
    "genericName": "Butorphanol Tartrate",
    "brandNames": "Stadol, Butace, Butorph",
    "description": "Synthetic opioid partial agonist-antagonist analgesic used for moderate to severe pain including migraine; acts on kappa and sigma opioid receptors with weak mu receptor antagonism; available as nasal spray for rapid onset of action.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Moderate to severe pain, migraine headache",
    "dosageForm": "Nasal Spray, IV/IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1 mg IV/IM q3-4h or 1 spray (1 mg) per nostril q3-4h", "sub": "Max single dose: 2 mg; max daily: 12 mg" },
      { "label": "ONSET / HALF-LIFE", "value": "IV: 1-2 min; IM: 10-15 min; Nasal: 15 min / T: 2.5-4 h", "sub": "Hepatic metabolism; renally eliminated" },
      { "label": "CLINICAL INDICATIONS", "value": "Moderate to severe acute pain, migraine, obstetric analgesia", "sub": "Also used for cancer pain and procedural sedation" },
      { "label": "SPECIAL CONSIDERATION", "value": "Ceiling effect on respiratory depression; may precipitate withdrawal in opioid-dependent patients", "sub": "Avoid in patients with MAOI use within 14 days" }
    ],
    "brandTable": [
      { "name": "Stadol", "form": "Nasal Spray", "strengths": "10 mg/mL (1 mg/spray)", "manufacturer": "Apothecon", "region": "USA" },
      { "name": "Butorph", "form": "IV/IM Injection", "strengths": "1 mg/mL, 2 mg/mL", "manufacturer": "Mylan", "region": "USA" },
      { "name": "Butace", "form": "IV/IM Injection", "strengths": "2 mg/mL", "manufacturer": "Sandoz", "region": "Canada" },
      { "name": "Stadol NS", "form": "Nasal Spray", "strengths": "10 mg/mL (1 mg/spray)", "manufacturer": "Bristol-Myers Squibb", "region": "USA" },
      { "name": "Moradol", "form": "IV/IM Injection", "strengths": "2 mg/mL", "manufacturer": "Roche", "region": "Europe" }
    ],
    "interactions": [
      { "drugClass": "CNS Depressants", "effect": "Additive sedation and respiratory depression", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Increased risk of hypertensive crisis and CNS excitation", "severity": "Major" },
      { "drugClass": "Opioid Agonists", "effect": "May precipitate withdrawal in dependent patients due to antagonist properties", "severity": "Major" },
      { "drugClass": "Benzodiazepines", "effect": "Additive CNS depression, increased risk of profound sedation", "severity": "Moderate" },
      { "drugClass": "Anticholinergics", "effect": "Increased risk of urinary retention and severe constipation", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS depressant effects; avoid concomitant use", "severity": "Major" }
    ],
    "warning": "Butorphanol carries a risk of opioid dependence, respiratory depression, and withdrawal precipitation in opioid-dependent patients. The nasal spray formulation must be used only as directed due to the risk of abuse. Use caution in patients with head injury, increased intracranial pressure, or hepatic/renal impairment.",
    "subCategoryId": "agonist-antagonists"
  },
  {
    "id": "dezocine",
    "categoryId": "analgesics",
    "genericName": "Dezocine",
    "brandNames": "Dalgan",
    "description": "Partial mu-opioid receptor agonist and kappa-opioid receptor antagonist analgesic used for moderate to severe postoperative pain; provides equipotent analgesia to morphine with a ceiling effect on respiratory depression.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Moderate to severe postoperative pain",
    "dosageForm": "IV/IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "5-10 mg IV q2-4h or 5-20 mg IM q3-6h", "sub": "Initial dose: 5 mg IV; titrate to effect" },
      { "label": "ONSET / HALF-LIFE", "value": "IV: 1-2 min; IM: 15-30 min / T: 1.5-2.5 h", "sub": "Hepatic glucuronidation; renal elimination" },
      { "label": "CLINICAL INDICATIONS", "value": "Postoperative pain, acute traumatic pain", "sub": "Limited to short-term hospital use" },
      { "label": "SPECIAL CONSIDERATION", "value": "Ceiling effect on respiratory depression; lower abuse potential than full agonists", "sub": "Contraindicated in patients with known opioid dependence" }
    ],
    "brandTable": [
      { "name": "Dalgan", "form": "IV/IM Injection", "strengths": "5 mg/mL, 10 mg/mL", "manufacturer": "AstraZeneca", "region": "USA" },
      { "name": "Dezocin", "form": "IV/IM Injection", "strengths": "10 mg/mL", "manufacturer": "Hospira", "region": "Europe" },
      { "name": "Dalgan", "form": "IV/IM Injection", "strengths": "5 mg/mL", "manufacturer": "AstraZeneca", "region": "Canada" },
      { "name": "Dalgan", "form": "IV Injection", "strengths": "10 mg/2 mL vial", "manufacturer": "AstraZeneca", "region": "UK" },
      { "name": "Dezogesic", "form": "IM Injection", "strengths": "10 mg/mL", "manufacturer": "Gedeon Richter", "region": "Hungary" }
    ],
    "interactions": [
      { "drugClass": "CNS Depressants", "effect": "Additive sedation and respiratory depression", "severity": "Major" },
      { "drugClass": "Full Opioid Agonists", "effect": "May antagonize analgesic effects and precipitate withdrawal", "severity": "Major" },
      { "drugClass": "Benzodiazepines", "effect": "Increased risk of profound sedation and respiratory compromise", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS depression; avoid concurrent use", "severity": "Major" },
      { "drugClass": "Antihypertensives", "effect": "May potentiate hypotensive effects", "severity": "Moderate" },
      { "drugClass": "Muscle Relaxants", "effect": "Additive sedation and respiratory depression", "severity": "Moderate" }
    ],
    "warning": "Dezocine is indicated for short-term management of postoperative pain only. Prolonged use may lead to dependence. Respiratory depression, though subject to a ceiling effect, may still occur at high doses. May precipitate acute withdrawal in patients physically dependent on mu-opioid agonists.",
    "subCategoryId": "agonist-antagonists"
  },
  {
    "id": "levorphanol",
    "categoryId": "analgesics",
    "genericName": "Levorphanol Tartrate",
    "brandNames": "Levo-Dromoran",
    "description": "Potent mu-opioid receptor agonist with NMDA receptor antagonist and serotonin-norepinephrine reuptake inhibitor properties; uniquely effective for chronic neuropathic pain and opioid-tolerant patients; high oral bioavailability.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Chronic neuropathic pain (NMDA antagonist properties)",
    "dosageForm": "Oral Tablet, IV Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "2 mg PO q6-8h initially; 3-5 mg IV q6-8h for severe pain", "sub": "Titrate to effect; max 12-15 mg daily" },
      { "label": "ONSET / HALF-LIFE", "value": "PO: 30-60 min; IV: 5-10 min / T: 11-16 h", "sub": "Long half-life requires cautious titration" },
      { "label": "CLINICAL INDICATIONS", "value": "Chronic neuropathic pain, opioid-tolerant chronic pain, breakthrough cancer pain", "sub": "NMDA antagonism beneficial for neuropathic pain states" },
      { "label": "SPECIAL CONSIDERATION", "value": "NMDA antagonist activity may reduce opioid tolerance and improve neuropathic pain", "sub": "Accumulation risk in elderly; reduce dose in hepatic impairment" }
    ],
    "brandTable": [
      { "name": "Levo-Dromoran", "form": "Oral Tablet", "strengths": "2 mg", "manufacturer": "Irex Pharmaceuticals", "region": "USA" },
      { "name": "Levo-Dromoran", "form": "IV Injection", "strengths": "2 mg/mL", "manufacturer": "Irex Pharmaceuticals", "region": "USA" },
      { "name": "Levorphanol Tartrate", "form": "Oral Tablet", "strengths": "2 mg", "manufacturer": "Roxane Laboratories", "region": "USA" },
      { "name": "Levo-Dromoran", "form": "Oral Tablet", "strengths": "2 mg", "manufacturer": "Valeant Pharmaceuticals", "region": "Canada" },
      { "name": "Levorphanol", "form": "IV Injection", "strengths": "2 mg/mL ampule", "manufacturer": "Hospira", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "CNS Depressants", "effect": "Additive sedation, respiratory depression, and cognitive impairment", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Risk of serotonin syndrome and hypertensive crisis", "severity": "Major" },
      { "drugClass": "SSRI/SNRI Antidepressants", "effect": "Additive serotonergic effects; risk of serotonin syndrome", "severity": "Moderate" },
      { "drugClass": "NMDA Antagonists", "effect": "Additive NMDA blockade may increase dissociative effects", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Profound CNS depression and increased sedative effects", "severity": "Major" },
      { "drugClass": "Benzodiazepines", "effect": "Increased risk of respiratory depression and extreme sedation", "severity": "Major" }
    ],
    "warning": "Levorphanol is a potent mu-opioid agonist with a long half-life (11-16 h) requiring careful dose titration to avoid accumulation and delayed respiratory depression. Its NMDA antagonist properties may provide unique benefits for neuropathic pain but also increase the risk of dissociative side effects.",
    "subCategoryId": "agonist-antagonists"
  },
  {
    "id": "nalorphine",
    "categoryId": "analgesics",
    "genericName": "Nalorphine Hydrobromide",
    "brandNames": "Nalline, Lethidrone",
    "description": "First-generation opioid antagonist with partial agonist properties; historically used for opioid overdose reversal and as a diagnostic agent for opioid dependence; largely replaced by naloxone due to agonist side effects.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Opioid overdose reversal (historical)",
    "dosageForm": "IV/IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "5-10 mg IV q10-15min prn for respiratory depression; max 40 mg", "sub": "0.1 mg/kg for neonatal respiratory depression" },
      { "label": "ONSET / HALF-LIFE", "value": "IV: 1-2 min; IM: 10-15 min / T: 2-3 h", "sub": "Hepatic metabolism; renal elimination" },
      { "label": "CLINICAL INDICATIONS", "value": "Opioid-induced respiratory depression, neonatal asphyxia from maternal opioids", "sub": "Historical use as narcotic antagonist challenge test" },
      { "label": "SPECIAL CONSIDERATION", "value": "Not a pure antagonist; retains some agonist effects (dysphoria, miosis, psychotomimetic effects)", "sub": "Obsolete for most clinical applications; replaced by naloxone" }
    ],
    "brandTable": [
      { "name": "Nalline", "form": "IV/IM Injection", "strengths": "5 mg/mL", "manufacturer": "Merck & Co.", "region": "USA" },
      { "name": "Lethidrone", "form": "IV Injection", "strengths": "10 mg/mL", "manufacturer": "Burroughs Wellcome", "region": "UK" },
      { "name": "Nalline", "form": "IV Injection", "strengths": "5 mg/mL", "manufacturer": "MSD", "region": "Canada" },
      { "name": "Lethidrone", "form": "IM Injection", "strengths": "10 mg/mL", "manufacturer": "Glaxo", "region": "Australia" },
      { "name": "Nalorphine HBr", "form": "IV/IM Injection", "strengths": "5 mg/mL, 20 mg/2 mL", "manufacturer": "Multiple Generic", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "Opioid Agonists", "effect": "Reverses opioid-induced respiratory depression; may precipitate acute withdrawal", "severity": "Major" },
      { "drugClass": "CNS Depressants", "effect": "Agonist component may contribute to dysphoria and psychotomimetic effects", "severity": "Moderate" },
      { "drugClass": "Barbiturates", "effect": "May enhance nalorphine-induced dysphoria and confusion", "severity": "Moderate" },
      { "drugClass": "Antipsychotics", "effect": "Potential additive psychotomimetic effects", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "May worsen CNS side effects, including sedation and confusion", "severity": "Moderate" },
      { "drugClass": "Full Opioid Antagonists", "effect": "No additional benefit; naloxone preferred due to fewer agonist effects", "severity": "Minor" }
    ],
    "warning": "Nalorphine is a mixed opioid agonist-antagonist that produces dysphoria, psychotomimetic effects (hallucinations, nightmares), and miosis due to its kappa-agonist activity. It is largely obsolete in modern clinical practice, having been replaced by naloxone as a pure opioid antagonist.",
    "subCategoryId": "agonist-antagonists"
  },
  {
    "id": "phenazocine",
    "categoryId": "analgesics",
    "genericName": "Phenazocine Hydrobromide",
    "brandNames": "Narphen, Prinadol",
    "description": "Synthetic opioid analgesic with potent mu-agonist activity; approximately 3-5 times more potent than morphine with less respiratory depression and sedation; used primarily in the UK and Europe.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Moderate to severe pain",
    "dosageForm": "Oral Tablet",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "5 mg PO q4-6h initially; 10-20 mg PO q4h for severe pain", "sub": "Max daily dose: 60 mg" },
      { "label": "ONSET / HALF-LIFE", "value": "PO: 30-60 min / T: 3-6 h", "sub": "Hepatic metabolism; renal and fecal elimination" },
      { "label": "CLINICAL INDICATIONS", "value": "Moderate to severe acute and chronic pain, cancer pain", "sub": "Obstetric analgesia and perioperative use" },
      { "label": "SPECIAL CONSIDERATION", "value": "Less respiratory depression and sedation than morphine at equianalgesic doses", "sub": "Not available in the USA; primarily UK and European markets" }
    ],
    "brandTable": [
      { "name": "Narphen", "form": "Oral Tablet", "strengths": "5 mg", "manufacturer": "Smith & Nephew", "region": "UK" },
      { "name": "Prinadol", "form": "Oral Tablet", "strengths": "5 mg, 10 mg", "manufacturer": "Boehringer Ingelheim", "region": "Germany" },
      { "name": "Narphen", "form": "Sublingual Tablet", "strengths": "5 mg", "manufacturer": "Smith & Nephew", "region": "UK" },
      { "name": "Phenazocine", "form": "Oral Tablet", "strengths": "5 mg", "manufacturer": "May & Baker", "region": "UK" },
      { "name": "Prinadol", "form": "Oral Tablet", "strengths": "10 mg", "manufacturer": "Boehringer Ingelheim", "region": "Switzerland" }
    ],
    "interactions": [
      { "drugClass": "CNS Depressants", "effect": "Additive sedation and respiratory depression", "severity": "Major" },
      { "drugClass": "MAO Inhibitors", "effect": "Risk of severe CNS excitation or depression", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS depressant effects; avoid concurrent use", "severity": "Major" },
      { "drugClass": "Benzodiazepines", "effect": "Increased risk of profound sedation and respiratory depression", "severity": "Major" },
      { "drugClass": "Opioid Agonist-Antagonists", "effect": "Possible antagonism of analgesic effect", "severity": "Moderate" },
      { "drugClass": "Anticholinergics", "effect": "Increased risk of constipation and urinary retention", "severity": "Moderate" }
    ],
    "warning": "Phenazocine is a potent mu-opioid agonist with abuse potential similar to morphine. Although associated with less respiratory depression at equianalgesic doses, clinically significant respiratory depression can occur at higher doses. Tolerance and physical dependence develop with prolonged use.",
    "subCategoryId": "agonist-antagonists"
  },
  {
    "id": "naloxone",
    "categoryId": "analgesics",
    "genericName": "Naloxone Hydrochloride",
    "brandNames": "Narcan, Evzio, Kloxxado",
    "description": "Pure competitive opioid receptor antagonist with highest affinity for mu-receptors; rapidly reverses opioid-induced respiratory depression and sedation; gold standard for opioid overdose reversal; no intrinsic agonist activity.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Opioid overdose reversal",
    "dosageForm": "Nasal Spray, IV/IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "0.4-2 mg IV/IM q2-3min prn; 4-8 mg nasal spray single dose", "sub": "May repeat q2-3min; max 10 mg cumulative" },
      { "label": "ONSET / HALF-LIFE", "value": "IV: 1-2 min; IM: 5-10 min; Nasal: 8-15 min / T: 30-90 min", "sub": "Hepatic metabolism; shorter duration than most opioids" },
      { "label": "CLINICAL INDICATIONS", "value": "Opioid overdose, neonatal opioid depression, opioid challenge testing", "sub": "Off-label: opioid-induced pruritus, constipation, spinal opioid side effects" },
      { "label": "SPECIAL CONSIDERATION", "value": "Duration of action (30-90 min) is shorter than many opioids; may need repeat dosing", "sub": "Higher doses (4-8 mg nasal) needed for synthetic opioids like fentanyl" }
    ],
    "brandTable": [
      { "name": "Narcan", "form": "Nasal Spray", "strengths": "4 mg/0.1 mL single-dose", "manufacturer": "Emergent BioSolutions", "region": "USA" },
      { "name": "Evzio", "form": "Auto-Injector", "strengths": "2 mg/0.4 mL", "manufacturer": "Kaleo", "region": "USA" },
      { "name": "Kloxxado", "form": "Nasal Spray", "strengths": "8 mg/0.1 mL single-dose", "manufacturer": "Hikma Pharmaceuticals", "region": "USA" },
      { "name": "Naloxone HCl", "form": "IV/IM Injection", "strengths": "0.4 mg/mL, 1 mg/mL, 2 mg/2 mL", "manufacturer": "Hospira", "region": "USA" },
      { "name": "Naloxone", "form": "IV Injection", "strengths": "400 mcg/mL, 1 mg/mL", "manufacturer": "Multiple Generic", "region": "Canada" }
    ],
    "interactions": [
      { "drugClass": "Opioid Agonists", "effect": "Reverses all opioid effects; may precipitate severe withdrawal", "severity": "Major" },
      { "drugClass": "Partial Opioid Agonists", "effect": "Antagonizes analgesic and respiratory effects; withdrawal possible", "severity": "Major" },
      { "drugClass": "Buprenorphine", "effect": "Partial reversal; high buprenorphine doses may overcome naloxone", "severity": "Moderate" },
      { "drugClass": "Non-Opioid CNS Depressants", "effect": "Will not reverse non-opioid-induced respiratory depression", "severity": "Moderate" },
      { "drugClass": "Cardiovascular Agents", "effect": "May cause acute hypertension and tachycardia upon reversal of opioids", "severity": "Moderate" },
      { "drugClass": "Catecholamines", "effect": "Risk of ventricular arrhythmias with sudden opioid reversal", "severity": "Moderate" }
    ],
    "warning": "Naloxone has a shorter duration of action (30-90 min) than most opioids; respiratory depression may recur requiring repeat dosing or continuous infusion. May precipitate acute opioid withdrawal (agitation, hypertension, tachycardia, vomiting).",
    "subCategoryId": "opioid-antagonists"
  },
  {
    "id": "naltrexone",
    "categoryId": "analgesics",
    "genericName": "Naltrexone Hydrochloride",
    "brandNames": "Revia, Vivitrol, Depade",
    "description": "Pure long-acting competitive opioid antagonist with oral and injectable formulations; blocks mu, kappa, and delta opioid receptors reducing craving and preventing opioid reinforcement; also reduces alcohol craving.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "primaryIndication": "Alcohol and opioid use disorder",
    "dosageForm": "Oral Tablet, IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "50 mg PO daily; 380 mg IM q4 weeks (Vivitrol)", "sub": "Must be opioid-free for 7-10 days before initiation" },
      { "label": "ONSET / HALF-LIFE", "value": "PO: 1-2 h; IM: slow release over 4 wk / T: 4-13 h; 6-10 days (IM)", "sub": "Hepatic metabolism; primary metabolite 6-beta-naltrexol" },
      { "label": "CLINICAL INDICATIONS", "value": "Alcohol dependence, opioid use disorder maintenance", "sub": "Off-label: self-injurious behavior, pruritus, gambling disorder" },
      { "label": "SPECIAL CONSIDERATION", "value": "Black box warning for hepatotoxicity at high doses (5x+ therapeutic)", "sub": "Contraindicated in acute hepatitis, liver failure, or current opioid use" }
    ],
    "brandTable": [
      { "name": "Revia", "form": "Oral Tablet", "strengths": "50 mg", "manufacturer": "Duramed Pharmaceuticals", "region": "USA" },
      { "name": "Vivitrol", "form": "IM Injection (ER)", "strengths": "380 mg/vial", "manufacturer": "Alkermes", "region": "USA" },
      { "name": "Depade", "form": "Oral Tablet", "strengths": "50 mg", "manufacturer": "Mallinckrodt", "region": "USA" },
      { "name": "Naltrexone HCl", "form": "Oral Tablet", "strengths": "50 mg", "manufacturer": "Teva Pharmaceuticals", "region": "USA" },
      { "name": "Naltrexone", "form": "Oral Tablet", "strengths": "50 mg", "manufacturer": "AA Pharma", "region": "Canada" }
    ],
    "interactions": [
      { "drugClass": "Opioid Agonists", "effect": "Complete blockade; high-dose opioids may overcome but risk severe injury or death", "severity": "Major" },
      { "drugClass": "Hepatotoxic Agents", "effect": "Increased risk of hepatotoxicity with high naltrexone doses", "severity": "Major" },
      { "drugClass": "Antidiarrheals", "effect": "Loperamide may fail to provide opioid effects for diarrhea treatment", "severity": "Moderate" },
      { "drugClass": "Cough Suppressants", "effect": "Dextromethorphan may have reduced efficacy or unexpected serotonergic effects", "severity": "Moderate" },
      { "drugClass": "Thioridazine", "effect": "May cause excessive sedation and lethargy", "severity": "Moderate" },
      { "drugClass": "Disulfiram", "effect": "No direct interaction but combined use for alcohol dependence requires monitoring", "severity": "Moderate" }
    ],
    "warning": "Naltrexone carries a boxed warning for dose-related hepatotoxicity; use is contraindicated in acute hepatitis or hepatic failure. Patients must be opioid-free for 7-10 days prior to initiation to prevent severe precipitated withdrawal.",
    "subCategoryId": "opioid-antagonists"
  },
  {
    "id": "flupirtine",
    "categoryId": "analgesics",
    "genericName": "Flupirtine Maleate",
    "brandNames": "Katadolon, Trancopal Dolo",
    "description": "Centrally acting non-opioid analgesic with selective neuronal potassium channel opener (KCNQ/Kv7) activity; also has weak NMDA antagonist and GABA modulatory properties; effective for musculoskeletal and nociceptive pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Musculoskeletal pain (hepatotoxicity warning)",
    "dosageForm": "Oral Capsule, Suppository",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "100-200 mg PO TID-QID; 150 mg PR BID", "sub": "Max daily dose: 600 mg (400 mg in elderly)" },
      { "label": "ONSET / HALF-LIFE", "value": "PO: 30-60 min / T: 6.5-10 h", "sub": "Hepatic metabolism (CYP450); renal elimination" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute and chronic musculoskeletal pain, tension headache, dysmenorrhea", "sub": "Postoperative pain, cancer pain as adjunct" },
      { "label": "SPECIAL CONSIDERATION", "value": "Black box warning for hepatotoxicity; LFT monitoring required q2-4 weeks", "sub": "Not available in USA or UK; restricted in EU due to liver injury" }
    ],
    "brandTable": [
      { "name": "Katadolon", "form": "Oral Capsule", "strengths": "100 mg", "manufacturer": "AWD.pharma", "region": "Germany" },
      { "name": "Trancopal Dolo", "form": "Oral Capsule", "strengths": "100 mg", "manufacturer": "Santen", "region": "Germany" },
      { "name": "Katadolon", "form": "Suppository", "strengths": "150 mg", "manufacturer": "AWD.pharma", "region": "Germany" },
      { "name": "Flupirtin", "form": "Oral Capsule", "strengths": "100 mg", "manufacturer": "Pfizer", "region": "Italy" },
      { "name": "Katadolon", "form": "Oral Capsule", "strengths": "100 mg", "manufacturer": "Meda Pharma", "region": "Russia" }
    ],
    "interactions": [
      { "drugClass": "Hepatotoxic Drugs", "effect": "Increased risk of liver injury; concurrent use contraindicated", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Increased hepatotoxicity and CNS depression", "severity": "Major" },
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk; flupirtine displaces warfarin from albumin", "severity": "Major" },
      { "drugClass": "CNS Depressants", "effect": "Additive sedation and dizziness", "severity": "Moderate" },
      { "drugClass": "Muscle Relaxants", "effect": "Enhanced muscle relaxation and sedative effects", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "No clinically significant interaction reported", "severity": "Minor" }
    ],
    "warning": "Flupirtine is associated with a high risk of hepatotoxicity, including acute liver failure with fatal outcomes. Liver function tests must be monitored every 2-4 weeks during treatment and for 4 weeks after discontinuation. Contraindicated in patients with pre-existing liver disease or elevated transaminases.",
    "subCategoryId": "central-analgesics"
  },
  {
    "id": "nefopam",
    "categoryId": "analgesics",
    "genericName": "Nefopam Hydrochloride",
    "brandNames": "Acupan, Neodol, Nefam",
    "description": "Centrally acting non-opioid analgesic with a unique mechanism involving inhibition of serotonin, norepinephrine, and dopamine reuptake; no respiratory depression or abuse potential; used as an alternative to opioids.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Moderate acute and chronic pain (no respiratory depression)",
    "dosageForm": "Oral Tablet, IV/IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "30-60 mg PO TID; 20 mg IV/IM q4-6h", "sub": "Max daily oral: 180-300 mg; IV: 120 mg" },
      { "label": "ONSET / HALF-LIFE", "value": "PO: 30-60 min; IV: 5-10 min / T: 3-8 h", "sub": "Hepatic metabolism (CYP1A2, CYP3A4); renal elimination" },
      { "label": "CLINICAL INDICATIONS", "value": "Musculoskeletal pain, postoperative pain, cancer pain adjunct", "sub": "Chronic pain syndromes, neuropathic pain, dental pain" },
      { "label": "SPECIAL CONSIDERATION", "value": "Safe in opioid-induced respiratory depression; no tolerance or dependence", "sub": "Contraindicated in seizure disorders and convulsant therapy" }
    ],
    "brandTable": [
      { "name": "Acupan", "form": "Oral Tablet", "strengths": "30 mg", "manufacturer": "Biocodex", "region": "France" },
      { "name": "Neodol", "form": "IV/IM Injection", "strengths": "20 mg/2 mL", "manufacturer": "Asofarma", "region": "Mexico" },
      { "name": "Nefam", "form": "Oral Tablet", "strengths": "30 mg", "manufacturer": "RPG Life Sciences", "region": "India" },
      { "name": "Acupan", "form": "IV/IM Injection", "strengths": "20 mg/mL", "manufacturer": "Biocodex", "region": "France" },
      { "name": "Nefopam", "form": "Oral Tablet", "strengths": "30 mg", "manufacturer": "Sandoz", "region": "Canada" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "Risk of hypertensive crisis and serotonin syndrome", "severity": "Major" },
      { "drugClass": "SSRI/SNRI Antidepressants", "effect": "Additive serotonergic effects; risk of serotonin syndrome", "severity": "Major" },
      { "drugClass": "Tricyclic Antidepressants", "effect": "Additive anticholinergic effects; risk of urinary retention", "severity": "Moderate" },
      { "drugClass": "Anticholinergics", "effect": "Increased risk of dry mouth, urinary retention, and constipation", "severity": "Moderate" },
      { "drugClass": "Sympathomimetics", "effect": "May enhance tachycardic and hypertensive effects", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Additive CNS depression; increased sedation", "severity": "Moderate" }
    ],
    "warning": "Nefopam is contraindicated in patients with seizure disorders or those undergoing electroconvulsive therapy due to its seizure threshold-lowering effect. Serotonin syndrome risk when combined with MAOIs, SSRIs, or other serotonergic drugs.",
    "subCategoryId": "central-analgesics"
  },
  {
    "id": "ziconotide",
    "categoryId": "analgesics",
    "genericName": "Ziconotide Acetate",
    "brandNames": "Prialt",
    "description": "Synthetic analog of omega-conotoxin MVIIA derived from the venom of Conus magus (cone snail); selective N-type voltage-gated calcium channel blocker; potent non-opioid intrathecal analgesic requiring specialized pump delivery.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Severe chronic pain (cone snail venom, requires pump)",
    "dosageForm": "Intrathecal Infusion",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "Start 1.2-2.4 mcg/day IT; titrate by 0.3-1.2 mcg/day q2-3d", "sub": "Max: 19.2 mcg/day; average maintenance: 4-8 mcg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "IT: 1-2 h (analgesia); up to 20 h for peak effect / T: 4.5-6.5 h IT", "sub": "Eliminated via CSF bulk absorption; proteolytic degradation" },
      { "label": "CLINICAL INDICATIONS", "value": "Severe chronic pain refractory to other therapies (including opioids)", "sub": "Cancer pain, AIDS-related pain, neuropathic pain syndromes" },
      { "label": "SPECIAL CONSIDERATION", "value": "Requires intrathecal pump implantation; no tolerance or dependence", "sub": "Broad contraindications list; psychiatric and neurological monitoring required" }
    ],
    "brandTable": [
      { "name": "Prialt", "form": "Intrathecal Infusion", "strengths": "25 mcg/mL, 100 mcg/mL", "manufacturer": "Jazz Pharmaceuticals", "region": "USA" },
      { "name": "Prialt", "form": "Intrathecal Infusion", "strengths": "500 mcg/5 mL vial", "manufacturer": "Eisai", "region": "Europe" },
      { "name": "Prialt", "form": "Intrathecal Infusion", "strengths": "100 mcg/mL, 500 mcg/5 mL", "manufacturer": "Jazz Pharmaceuticals", "region": "Canada" },
      { "name": "Ziconotide", "form": "Intrathecal Infusion", "strengths": "100 mcg/mL", "manufacturer": "Hikma Pharmaceuticals", "region": "UK" },
      { "name": "Prialt", "form": "Intrathecal Infusion", "strengths": "25 mcg/mL, 100 mcg/mL", "manufacturer": "Jazz Pharmaceuticals", "region": "Australia" }
    ],
    "interactions": [
      { "drugClass": "CNS Depressants", "effect": "Additive sedation, dizziness, confusion; may require dose adjustment", "severity": "Major" },
      { "drugClass": "Antipsychotics", "effect": "Increased risk of cognitive impairment, hallucinations, and mood disturbances", "severity": "Major" },
      { "drugClass": "Antidepressants", "effect": "Additive serotonergic and noradrenergic effects; monitor for mood changes", "severity": "Moderate" },
      { "drugClass": "Intrathecal Opioids", "effect": "May be combined but requires careful monitoring for additive side effects", "severity": "Moderate" },
      { "drugClass": "Anticonvulsants", "effect": "Potential additive dizziness and ataxia", "severity": "Moderate" },
      { "drugClass": "Calcium Channel Blockers", "effect": "Theoretical risk of additive cardiovascular effects; monitor blood pressure", "severity": "Moderate" }
    ],
    "warning": "Ziconotide is administered exclusively via intrathecally implanted infusion pump; improper handling or pump malfunction can result in life-threatening overdose or withdrawal. Neuropsychological effects are common including cognitive impairment, hallucinations, mood changes, and suicidal ideation.",
    "subCategoryId": "central-analgesics"
  },
  {
    "id": "tianeptine",
    "categoryId": "analgesics",
    "genericName": "Tianeptine Sodium",
    "brandNames": "Stablon, Coaxil, Tatinol",
    "description": "Atypical antidepressant with unique mechanism as a selective serotonin reuptake enhancer (SSRE); also acts as a mu-opioid receptor agonist producing analgesic effects; significant abuse potential and withdrawal syndrome noted.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Depression, chronic pain (opioid activity, abuse potential)",
    "dosageForm": "Oral Tablet",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "12.5 mg PO TID (for depression); off-label 25-50 mg for pain", "sub": "Max: 50 mg/day; taper to discontinue" },
      { "label": "ONSET / HALF-LIFE", "value": "PO: 30-60 min / T: 2.5-3 h", "sub": "Hepatic metabolism (beta-oxidation); renal elimination" },
      { "label": "CLINICAL INDICATIONS", "value": "Major depressive disorder (Europe/Asia); off-label chronic pain, fibromyalgia", "sub": "Anxiety disorders, IBS, chronic pain syndromes" },
      { "label": "SPECIAL CONSIDERATION", "value": "Mu-opioid agonist activity contributes to both efficacy and abuse liability", "sub": "Not approved in USA; schedule II-IV classification varies by country" }
    ],
    "brandTable": [
      { "name": "Stablon", "form": "Oral Tablet", "strengths": "12.5 mg", "manufacturer": "Servier", "region": "France" },
      { "name": "Coaxil", "form": "Oral Tablet", "strengths": "12.5 mg", "manufacturer": "Servier", "region": "Russia" },
      { "name": "Tatinol", "form": "Oral Tablet", "strengths": "12.5 mg", "manufacturer": "Servier", "region": "China" },
      { "name": "Tianeptine", "form": "Oral Tablet", "strengths": "12.5 mg", "manufacturer": "Multiple Generic", "region": "India" },
      { "name": "Stablon", "form": "Oral Tablet", "strengths": "12.5 mg", "manufacturer": "Servier", "region": "Australia" }
    ],
    "interactions": [
      { "drugClass": "MAO Inhibitors", "effect": "Risk of serotonin syndrome and hypertensive crisis", "severity": "Major" },
      { "drugClass": "Opioid Agonists", "effect": "Additive mu-opioid effects; increased risk of respiratory depression and dependence", "severity": "Major" },
      { "drugClass": "CNS Depressants", "effect": "Additive sedation and respiratory depression; avoid concurrent use", "severity": "Major" },
      { "drugClass": "SSRI/SNRI Antidepressants", "effect": "Theoretical serotonergic interaction; caution with concurrent use", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Enhanced CNS depression and hepatotoxicity risk", "severity": "Major" },
      { "drugClass": "Benzodiazepines", "effect": "Additive sedation; increased risk of overdose", "severity": "Moderate" }
    ],
    "warning": "Tianeptine has significant mu-opioid receptor agonist activity and is associated with abuse potential, dependence, and a severe withdrawal syndrome. Use has been linked to opioid-type withdrawal symptoms including anxiety, sweating, diarrhea, and pain amplification upon discontinuation.",
    "subCategoryId": "central-analgesics"
  },
  {
    "id": "nalmefene",
    "categoryId": "analgesics",
    "genericName": "Nalmefene Hydrochloride",
    "brandNames": "Revex, Selincro",
    "description": "Pure opioid receptor antagonist similar to naloxone and naltrexone; available as both injectable for overdose reversal and oral tablet for alcohol use disorder; longer half-life than naloxone without need for repeat dosing.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "primaryIndication": "Opioid overdose reversal, alcohol dependence",
    "dosageForm": "IV Injection, Oral Tablet",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "0.5-2 mg IV (overdose); 18 mg PO prn (alcohol craving)", "sub": "May repeat q2-5min; max 4 mg cumulative" },
      { "label": "ONSET / HALF-LIFE", "value": "IV: 2-5 min; PO: 1-3 h / T: 8-11 h", "sub": "Hepatic glucuronidation; enterohepatic recirculation" },
      { "label": "CLINICAL INDICATIONS", "value": "Opioid overdose reversal, alcohol use disorder reduction", "sub": "Alcohol craving reduction in patients with high drinking risk" },
      { "label": "SPECIAL CONSIDERATION", "value": "Longer half-life than naloxone; may be preferred for long-acting opioid overdoses", "sub": "Selincro dosing: as-needed (prn) rather than daily fixed regimen" }
    ],
    "brandTable": [
      { "name": "Revex", "form": "IV Injection", "strengths": "100 mcg/mL, 1 mg/mL", "manufacturer": "Baxter Healthcare", "region": "USA" },
      { "name": "Selincro", "form": "Oral Tablet", "strengths": "18 mg", "manufacturer": "Lundbeck", "region": "Europe" },
      { "name": "Nalmefene", "form": "IV Injection", "strengths": "1 mg/mL single-dose vial", "manufacturer": "Hospira", "region": "USA" },
      { "name": "Selincro", "form": "Oral Tablet", "strengths": "18 mg", "manufacturer": "Lundbeck", "region": "UK" },
      { "name": "Nalmefene HCl", "form": "IV Injection", "strengths": "100 mcg/mL, 1 mg/mL", "manufacturer": "Baxter", "region": "Canada" }
    ],
    "interactions": [
      { "drugClass": "Opioid Agonists", "effect": "Reverses opioid effects; may precipitate severe withdrawal", "severity": "Major" },
      { "drugClass": "Partial Opioid Agonists", "effect": "Antagonizes effects; withdrawal possible in dependent patients", "severity": "Major" },
      { "drugClass": "Alcohol", "effect": "Reduces alcohol craving but may cause nausea and dizziness with concurrent drinking", "severity": "Moderate" },
      { "drugClass": "Benzodiazepines", "effect": "No direct interaction; may be used concomitantly for alcohol withdrawal", "severity": "Minor" },
      { "drugClass": "Hepatotoxic Agents", "effect": "Caution in patients with hepatic impairment; reduce dose in mild impairment", "severity": "Moderate" },
      { "drugClass": "CNS Depressants", "effect": "Nalmefene does not reverse non-opioid CNS depression", "severity": "Moderate" }
    ],
    "warning": "Nalmefene may precipitate acute opioid withdrawal in opioid-dependent patients. Injectable Revex has a longer duration (8-11 h) than naloxone, making it advantageous for reversing long-acting opioid overdoses but also prolonging withdrawal symptoms.",
    "subCategoryId": "opioid-antagonists"
  },
  {
    "id": "lidocaine-topical",
    "categoryId": "analgesics",
    "genericName": "Lidocaine (Topical)",
    "brandNames": "Lidoderm, Xylocaine, LMX, Ztlido",
    "description": "A topical amide anesthetic that blocks voltage-gated sodium channels to provide localized analgesia for neuropathic pain and minor musculoskeletal conditions.",
    "status": "OTC / Rx",
    "isCommonlyPrescribed": true,
    "isRxOnly": false,
    "isOTCAndRx": true,
    "primaryIndication": "Postherpetic neuralgia, localized neuropathic pain",
    "dosageForm": "Topical Patch/Gel/Cream",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "Apply 1-3 patches q12h; gel/cream 2.5-5% up to TID", "sub": "Max 3 patches in 12h; max 20g gel/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 1-3 hours (patch), 5-15 min (gel)", "sub": "Half-life 1.5-2 hours" },
      { "label": "CLINICAL INDICATIONS", "value": "Postherpetic neuralgia, diabetic neuropathy, minor burns, local anesthesia", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Avoid application to broken skin or open wounds; risk of systemic toxicity", "sub": "Reduce dose in hepatic impairment" }
    ],
    "brandTable": [
      { "name": "Lidoderm", "form": "Topical Patch 5%", "strengths": "700 mg/patch", "manufacturer": "Endo Pharmaceuticals", "region": "USA" },
      { "name": "Xylocaine", "form": "Topical Gel 2% / Ointment 5%", "strengths": "2%, 5%", "manufacturer": "AstraZeneca", "region": "Global" },
      { "name": "LMX", "form": "Topical Cream 4%", "strengths": "4% liposomal", "manufacturer": "Ferndale Laboratories", "region": "USA" },
      { "name": "Ztlido", "form": "Topical Patch 1.8%", "strengths": "1.8% w/w", "manufacturer": "Scilex Pharmaceuticals", "region": "USA" },
      { "name": "EMLA", "form": "Cream 2.5% / 2.5%", "strengths": "Lidocaine 2.5% + Prilocaine 2.5%", "manufacturer": "AstraZeneca", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Class I Antiarrhythmics", "effect": "Additive cardiac depressant effects and increased risk of arrhythmias", "severity": "Major" },
      { "drugClass": "Other Local Anesthetics", "effect": "Additive systemic toxicity, increased risk of CNS and cardiac effects", "severity": "Major" },
      { "drugClass": "CYP1A2 Inhibitors", "effect": "Reduced lidocaine clearance leading to increased plasma levels", "severity": "Moderate" },
      { "drugClass": "Beta-Blockers", "effect": "Reduced hepatic clearance of lidocaine, increased toxicity risk", "severity": "Moderate" },
      { "drugClass": "Cimetidine", "effect": "Decreased lidocaine metabolism, increased serum concentrations", "severity": "Moderate" },
      { "drugClass": "Succinylcholine", "effect": "Prolonged neuromuscular blockade", "severity": "Moderate" }
    ],
    "warning": "Apply only to intact skin; do not use with concurrent Class I antiarrhythmics without cardiac monitoring; risk of methemoglobinemia with high doses.",
    "subCategoryId": "topical-analgesics"
  },
  {
    "id": "capsaicin",
    "categoryId": "analgesics",
    "genericName": "Capsaicin (Topical)",
    "brandNames": "Qutenza, Capzasin, Zacin, Capsidol",
    "description": "A naturally occurring TRPV1 receptor agonist that depletes substance P from sensory nerve endings to provide long-lasting analgesia for neuropathic and musculoskeletal pain.",
    "status": "OTC / Rx",
    "isCommonlyPrescribed": true,
    "isRxOnly": false,
    "isOTCAndRx": true,
    "primaryIndication": "Postherpetic neuralgia, diabetic neuropathy, osteoarthritis",
    "dosageForm": "Topical Patch/Cream",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "0.025-0.1% cream TID-QID; 8% patch applied for 30-60 min", "sub": "Max 4 patches per treatment session" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 2-4 weeks (cream), 1-3 days (patch)", "sub": "Half-life dermal depot effect: 2-4 weeks" },
      { "label": "CLINICAL INDICATIONS", "value": "Postherpetic neuralgia, painful diabetic neuropathy, osteoarthritis, psoriatic arthritis", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Initial burning sensation diminishes with regular use; avoid eyes and mucous membranes", "sub": "Wash hands thoroughly after application" }
    ],
    "brandTable": [
      { "name": "Qutenza", "form": "Topical Patch 8%", "strengths": "640 mcg/cm2", "manufacturer": "Grunenthal", "region": "Global" },
      { "name": "Capzasin", "form": "Topical Cream 0.1%", "strengths": "0.1%", "manufacturer": "Chattem", "region": "USA" },
      { "name": "Zacin", "form": "Topical Cream 0.025%", "strengths": "0.025%", "manufacturer": "Novartis", "region": "UK" },
      { "name": "Capsidol", "form": "Topical Cream 0.075%", "strengths": "0.075%", "manufacturer": "Bioglan", "region": "Australia" },
      { "name": "ArthriCare", "form": "Topical Cream 0.05%", "strengths": "0.05%", "manufacturer": "Vi-Jon", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "ACE Inhibitors", "effect": "Increased risk of cough (capsaicin-induced reflex)", "severity": "Minor" },
      { "drugClass": "Anticoagulants", "effect": "Increased risk of bruising at application site", "severity": "Moderate" },
      { "drugClass": "Topical Irritants", "effect": "Additive skin irritation and burning sensation", "severity": "Minor" },
      { "drugClass": "Heat Therapy", "effect": "Enhanced absorption and increased skin irritation", "severity": "Minor" },
      { "drugClass": "Other Topical Analgesics", "effect": "Potential additive irritation without added benefit", "severity": "Minor" },
      { "drugClass": "Corticosteroids (Topical)", "effect": "May attenuate anti-inflammatory response", "severity": "Minor" }
    ],
    "warning": "May cause transient burning sensation at application site; avoid contact with eyes, mucous membranes, and broken skin; discontinue if severe irritation occurs.",
    "subCategoryId": "topical-analgesics"
  },
  {
    "id": "diclofenac-topical",
    "categoryId": "analgesics",
    "genericName": "Diclofenac (Topical)",
    "brandNames": "Voltaren Gel, Solaraze, Flector, Pennsaid",
    "description": "A topical nonsteroidal anti-inflammatory drug (NSAID) that inhibits cyclooxygenase enzymes to reduce prostaglandin synthesis for localized pain and inflammation relief.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Osteoarthritis, actinic keratosis, soft tissue injuries",
    "dosageForm": "Topical Gel",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1% gel 4x daily; 1.5% solution 40 drops BID", "sub": "Max 32g gel/day; max 8 sprays BID (solution)" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 1-2 hours", "sub": "Half-life 1-2 hours (topical); 12 hours (systemic)" },
      { "label": "CLINICAL INDICATIONS", "value": "Osteoarthritis of knees/hands, actinic keratosis, acute soft tissue injuries", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Systemic absorption is 5-15% of oral; avoid concurrent oral NSAIDs", "sub": "Not for use on open wounds or eyes" }
    ],
    "brandTable": [
      { "name": "Voltaren Gel", "form": "Topical Gel 1%", "strengths": "1% w/w", "manufacturer": "GSK", "region": "Global" },
      { "name": "Solaraze", "form": "Topical Gel 3%", "strengths": "3% w/w", "manufacturer": "Almirall", "region": "USA" },
      { "name": "Flector", "form": "Topical Patch 1.3%", "strengths": "1.3% w/w (180 mg/patch)", "manufacturer": "Pfizer", "region": "USA" },
      { "name": "Pennsaid", "form": "Topical Solution 1.5%", "strengths": "1.5% w/w (60 mg/mL)", "manufacturer": "Aptalis Pharma", "region": "USA" },
      { "name": "Voltaren Emulgel", "form": "Topical Gel 1.16%", "strengths": "1.16% w/w", "manufacturer": "GSK", "region": "Europe" }
    ],
    "interactions": [
      { "drugClass": "Oral NSAIDs", "effect": "Additive systemic NSAID exposure and increased GI/cardiovascular risk", "severity": "Major" },
      { "drugClass": "Anticoagulants (Warfarin)", "effect": "Increased bleeding risk due to platelet inhibition", "severity": "Major" },
      { "drugClass": "Lithium", "effect": "Increased lithium levels due to reduced renal clearance", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate toxicity due to reduced clearance", "severity": "Moderate" },
      { "drugClass": "ACE Inhibitors", "effect": "Reduced antihypertensive effect; increased renal impairment risk", "severity": "Moderate" },
      { "drugClass": "Diuretics", "effect": "Reduced diuretic efficacy; increased nephrotoxicity risk", "severity": "Moderate" }
    ],
    "warning": "Use lowest effective dose for shortest duration; avoid in patients with active GI bleeding, recent CABG, or advanced renal disease.",
    "subCategoryId": "topical-analgesics"
  },
  {
    "id": "ketoprofen-topical",
    "categoryId": "analgesics",
    "genericName": "Ketoprofen (Topical)",
    "brandNames": "Oruvail Gel, Fastum, Ketonal",
    "description": "A topical propionic acid NSAID that inhibits COX-1 and COX-2 to provide localized anti-inflammatory and analgesic effects for musculoskeletal conditions.",
    "status": "OTC / Rx",
    "isCommonlyPrescribed": false,
    "isRxOnly": false,
    "isOTCAndRx": true,
    "primaryIndication": "Localized musculoskeletal pain, soft tissue injuries",
    "dosageForm": "Topical Gel",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "2.5% gel applied 2-4x daily", "sub": "Max 15g gel/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 1-2 hours", "sub": "Half-life 2-2.5 hours" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute muscle strains, tendinitis, sprains, localized inflammatory conditions", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Phototoxicity risk; avoid sun exposure on treated areas", "sub": "Not for use on broken skin or near eyes" }
    ],
    "brandTable": [
      { "name": "Oruvail Gel", "form": "Topical Gel 2.5%", "strengths": "2.5% w/w", "manufacturer": "Mylan", "region": "UK" },
      { "name": "Fastum", "form": "Topical Gel 2.5%", "strengths": "2.5% w/w", "manufacturer": "A. Menarini", "region": "Italy" },
      { "name": "Ketonal", "form": "Topical Gel 2.5% / Cream 5%", "strengths": "2.5%, 5%", "manufacturer": "Sandoz", "region": "Europe" },
      { "name": "Feldene Gel", "form": "Topical Gel 2.5%", "strengths": "2.5% (piroxicam alternative)", "manufacturer": "Pfizer", "region": "Global" },
      { "name": "Ketospray", "form": "Topical Spray 10%", "strengths": "10% w/w solution", "manufacturer": "Various", "region": "Europe" }
    ],
    "interactions": [
      { "drugClass": "Sun Exposure (UV)", "effect": "Increased risk of severe phototoxic skin reactions", "severity": "Major" },
      { "drugClass": "Oral NSAIDs", "effect": "Additive systemic NSAID exposure", "severity": "Moderate" },
      { "drugClass": "Anticoagulants", "effect": "Slightly increased bleeding risk with high-dose topical use", "severity": "Moderate" },
      { "drugClass": "Other Topical Agents", "effect": "Potential for altered absorption with concurrent topical products", "severity": "Minor" },
      { "drugClass": "Occlusive Dressings", "effect": "Increased systemic absorption and adverse effect risk", "severity": "Moderate" },
      { "drugClass": "Aspirin", "effect": "Reduced antiplatelet effect if significant systemic absorption occurs", "severity": "Minor" }
    ],
    "warning": "Avoid concurrent use with oral NSAIDs; protect treated area from sun exposure during treatment and for 2 weeks after; contraindicated in known NSAID hypersensitivity.",
    "subCategoryId": "topical-analgesics"
  },
  {
    "id": "piroxicam-topical",
    "categoryId": "analgesics",
    "genericName": "Piroxicam (Topical)",
    "brandNames": "Feldene Gel, Pirox Gel, Cyclodex Gel",
    "description": "A topical oxicam NSAID that provides long-lasting anti-inflammatory and analgesic effects through preferential COX-1 inhibition with a prolonged half-life.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Osteoarthritis, tendinitis, soft tissue rheumatism",
    "dosageForm": "Topical Gel",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "0.5% gel applied 3-4x daily", "sub": "Max 10g gel/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 2-4 hours", "sub": "Half-life 50 hours (topical depot effect)" },
      { "label": "CLINICAL INDICATIONS", "value": "Localized osteoarthritis, tendinitis, bursitis, soft tissue rheumatism", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Lower GI toxicity profile than oral formulation due to reduced systemic exposure", "sub": "Use caution in renal impairment" }
    ],
    "brandTable": [
      { "name": "Feldene Gel", "form": "Topical Gel 0.5%", "strengths": "0.5% w/w", "manufacturer": "Pfizer", "region": "Global" },
      { "name": "Pirox Gel", "form": "Topical Gel 0.5%", "strengths": "0.5% w/w", "manufacturer": "Janssen-Cilag", "region": "Europe" },
      { "name": "Cyclodex Gel", "form": "Topical Gel 0.5%", "strengths": "0.5% w/w (cyclodextrin complex)", "manufacturer": "Biogalenique", "region": "Europe" },
      { "name": "Piroxicam EG", "form": "Topical Gel 0.5%", "strengths": "0.5% w/w", "manufacturer": "EG Labo", "region": "France" },
      { "name": "Reumador", "form": "Topical Gel 0.5%", "strengths": "0.5% w/w", "manufacturer": "Chiesi", "region": "Italy" }
    ],
    "interactions": [
      { "drugClass": "Oral NSAIDs", "effect": "Additive systemic exposure and increased GI/cardiovascular risk", "severity": "Major" },
      { "drugClass": "Anticoagulants", "effect": "Increased bleeding risk with significant systemic absorption", "severity": "Moderate" },
      { "drugClass": "Lithium", "effect": "Potential increase in lithium levels", "severity": "Moderate" },
      { "drugClass": "ACE Inhibitors", "effect": "Reduced antihypertensive efficacy", "severity": "Moderate" },
      { "drugClass": "Aspirin", "effect": "Increased risk of GI side effects with concurrent use", "severity": "Moderate" },
      { "drugClass": "Corticosteroids", "effect": "Increased risk of GI irritation", "severity": "Moderate" }
    ],
    "warning": "Avoid contact with eyes and mucous membranes; do not apply to open wounds or infected skin; discontinue if rash or phototoxicity occurs.",
    "subCategoryId": "topical-analgesics"
  },
  {
    "id": "methyl-salicylate",
    "categoryId": "analgesics",
    "genericName": "Methyl Salicylate",
    "brandNames": "Bengay, Deep Heat, Tiger Balm, Iodex",
    "description": "A topical counterirritant and salicylate derivative that produces analgesic effects through local vasodilation and mild COX inhibition at the application site.",
    "status": "OTC",
    "isCommonlyPrescribed": true,
    "isRxOnly": false,
    "isOTCAndRx": true,
    "primaryIndication": "Localized muscle and joint pain, minor arthritis",
    "dosageForm": "Topical Cream/Ointment",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "10-30% cream/ointment TID-QID", "sub": "Max 4x daily application" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30-60 minutes", "sub": "Half-life 2-3 hours (local absorption)" },
      { "label": "CLINICAL INDICATIONS", "value": "Muscle aches, back pain, arthritis pain, sports injuries, minor strains", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Salicylate toxicity risk with excessive application, especially in children", "sub": "Avoid with oral salicylates or anticoagulants" }
    ],
    "brandTable": [
      { "name": "Bengay", "form": "Topical Cream/Ointment", "strengths": "Methyl salicylate 10-30%, Menthol 8-10%", "manufacturer": "Johnson & Johnson", "region": "USA" },
      { "name": "Deep Heat", "form": "Topical Rub/Cream", "strengths": "Methyl salicylate 20%, Menthol 5%", "manufacturer": "Mentholatum", "region": "UK" },
      { "name": "Tiger Balm", "form": "Topical Ointment", "strengths": "Methyl salicylate 10-12%, Camphor 10-11%", "manufacturer": "Haw Par Healthcare", "region": "Global" },
      { "name": "Iodex", "form": "Topical Ointment", "strengths": "Methyl salicylate 15%, Iodine 2%", "manufacturer": "Mentholatum", "region": "India" },
      { "name": "Flexall", "form": "Topical Gel", "strengths": "Methyl salicylate 30%, Menthol 10%", "manufacturer": "Chattem", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR and bleeding risk with excessive topical salicylate absorption", "severity": "Major" },
      { "drugClass": "Oral NSAIDs", "effect": "Additive salicylate levels and GI irritation", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate toxicity due to reduced clearance", "severity": "Moderate" },
      { "drugClass": "Other Salicylates", "effect": "Cumulative salicylate toxicity with concurrent oral/bismuth salicylates", "severity": "Major" },
      { "drugClass": "Heat Therapy", "effect": "Enhanced absorption and skin irritation; risk of burns", "severity": "Moderate" },
      { "drugClass": "Sulfonylureas", "effect": "Theoretical enhanced hypoglycemic effect at high salicylate levels", "severity": "Minor" }
    ],
    "warning": "Do not apply to broken or irritated skin; avoid combining with heating pads; limit use in children due to Reye syndrome risk.",
    "subCategoryId": "topical-analgesics"
  },
  {
    "id": "trolamine",
    "categoryId": "analgesics",
    "genericName": "Trolamine Salicylate",
    "brandNames": "Aspercreme, Myoflex, Sportscreme",
    "description": "A topical salicylate analgesic that provides localized pain relief through mild COX inhibition and counterirritant effects for musculoskeletal discomfort.",
    "status": "OTC",
    "isCommonlyPrescribed": true,
    "isRxOnly": false,
    "isOTCAndRx": true,
    "primaryIndication": "Localized musculoskeletal pain",
    "dosageForm": "Topical Cream",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "10% cream TID-QID", "sub": "Max 4x daily application" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30-60 minutes", "sub": "Half-life 3-4 hours" },
      { "label": "CLINICAL INDICATIONS", "value": "Arthritis pain, muscle strains, backaches, minor sports injuries", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Non-staining, odorless formulation preferred over methyl salicylate", "sub": "Avoid with oral salicylate hypersensitivity" }
    ],
    "brandTable": [
      { "name": "Aspercreme", "form": "Topical Cream 10%", "strengths": "Trolamine salicylate 10%", "manufacturer": "Prestige Brands", "region": "USA" },
      { "name": "Myoflex", "form": "Topical Cream 10%", "strengths": "Trolamine salicylate 10%", "manufacturer": "AdvaCare", "region": "USA" },
      { "name": "Sportscreme", "form": "Topical Cream 10%", "strengths": "Trolamine salicylate 10%", "manufacturer": "DeMerlis", "region": "USA" },
      { "name": "BenGay Ultra Strength", "form": "Topical Cream", "strengths": "Alternative methyl salicylate-based", "manufacturer": "Pfizer", "region": "USA" },
      { "name": "ArthriCare Triple Action", "form": "Topical Cream", "strengths": "Trolamine salicylate 10% + Menthol", "manufacturer": "Vi-Jon", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Potential INR elevation with excessive or prolonged use on large areas", "severity": "Moderate" },
      { "drugClass": "Other Salicylates", "effect": "Additive salicylate accumulation with concurrent use", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Reduced methotrexate clearance at high salicylate levels", "severity": "Moderate" },
      { "drugClass": "Oral NSAIDs", "effect": "Theoretical additive GI risk; minimal due to low systemic absorption", "severity": "Minor" },
      { "drugClass": "Heat Therapy", "effect": "Increased absorption leading to higher systemic salicylate levels", "severity": "Minor" },
      { "drugClass": "Aspirin", "effect": "Additive antiplatelet effect if significant systemic absorption occurs", "severity": "Minor" }
    ],
    "warning": "For external use only; avoid contact with eyes and mucous membranes; do not use with heating pads; discontinue if rash or irritation develops.",
    "subCategoryId": "topical-analgesics"
  },
  {
    "id": "benzocaine-topical",
    "categoryId": "analgesics",
    "genericName": "Benzocaine (Topical)",
    "brandNames": "Anbesol, Orajel, Hurricane, Dermoplast",
    "description": "A topical ester-type local anesthetic that reversibly blocks sodium channels in nerve cell membranes to provide rapid-onset surface anesthesia for mucocutaneous pain.",
    "status": "OTC / Rx",
    "isCommonlyPrescribed": true,
    "isRxOnly": false,
    "isOTCAndRx": true,
    "primaryIndication": "Oral ulcers, teething pain, minor skin irritation, mucosal anesthesia",
    "dosageForm": "Topical Gel/Spray",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "5-20% gel up to QID; 20% spray as needed", "sub": "Max 4x daily; max 2 seconds spray duration" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 1-5 minutes", "sub": "Half-life 10-15 minutes (tissue depot)" },
      { "label": "CLINICAL INDICATIONS", "value": "Oral mucosal pain, teething, canker sores, procedural topical anesthesia, minor burns", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Risk of methemoglobinemia, especially in children and with excessive use", "sub": "Avoid in infants under 2 months; use smallest amount effective" }
    ],
    "brandTable": [
      { "name": "Anbesol", "form": "Topical Gel 20% / Liquid 6.3%", "strengths": "20%, 6.3%", "manufacturer": "Pfizer", "region": "USA" },
      { "name": "Orajel", "form": "Topical Gel 10-20%", "strengths": "10%, 15%, 20%", "manufacturer": "Church & Dwight", "region": "USA" },
      { "name": "Hurricane", "form": "Topical Gel/Spray 20%", "strengths": "20%", "manufacturer": "Beutlich", "region": "USA" },
      { "name": "Dermoplast", "form": "Topical Spray/Aerosol 5%", "strengths": "5% (combination with menthol)", "manufacturer": "Medtech", "region": "USA" },
      { "name": "Cepacaine", "form": "Lozenges / Gel", "strengths": "Benzocaine 10 mg", "manufacturer": "Cepacol", "region": "Canada" }
    ],
    "interactions": [
      { "drugClass": "Methemoglobin-Inducing Agents", "effect": "Additive risk of methemoglobinemia with nitrates, dapsone, sulfonamides", "severity": "Major" },
      { "drugClass": "Sulfonamides", "effect": "Antagonized antibacterial effect due to PABA competition", "severity": "Moderate" },
      { "drugClass": "Ester-Type Local Anesthetics", "effect": "Additive systemic toxicity and cross-sensitivity risk", "severity": "Moderate" },
      { "drugClass": "Acetylcholinesterase Inhibitors", "effect": "Reduced metabolism of ester-type anesthetics", "severity": "Moderate" },
      { "drugClass": "MAOIs", "effect": "Potential hypertensive crisis with systemic absorption", "severity": "Moderate" },
      { "drugClass": "Antidiabetic Agents", "effect": "Potential blood glucose interference with high-dose topical use", "severity": "Minor" }
    ],
    "warning": "FDA black box warning: risk of methemoglobinemia, especially in children under 2 years; use minimum amount needed; not for teething infants under 2 years.",
    "subCategoryId": "topical-analgesics"
  },
  {
    "id": "sumatriptan",
    "categoryId": "analgesics",
    "genericName": "Sumatriptan",
    "brandNames": "Imitrex, Sumavel, Alsuma, Imigran",
    "description": "A selective 5-HT1B/1D receptor agonist that causes cranial vasoconstriction and inhibits trigeminal nerve activation to abort acute migraine attacks.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Acute migraine with or without aura, cluster headache",
    "dosageForm": "Oral/SC/Nasal",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "50-100 mg oral; 6 mg SC; 20 mg nasal spray", "sub": "Max 100 mg/12 mg SC/40 mg nasal per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30 min oral, 10 min SC, 15 min nasal", "sub": "Half-life 2 hours" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute migraine, cluster headache (SC formulation)", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Contraindicated in CAD, Prinzmetal angina, uncontrolled HTN; SC for cluster headache", "sub": "Basilar/hemiplegic migraine contraindication" }
    ],
    "brandTable": [
      { "name": "Imitrex", "form": "Tablet / Injection / Nasal Spray", "strengths": "25, 50, 100 mg; 6 mg/0.5 mL; 20 mg spray", "manufacturer": "GSK", "region": "Global" },
      { "name": "Sumavel", "form": "SC Injection (Needle-Free)", "strengths": "6 mg/0.5 mL", "manufacturer": "Endo Pharmaceuticals", "region": "USA" },
      { "name": "Alsuma", "form": "SC Auto-Injector", "strengths": "6 mg/0.5 mL", "manufacturer": "Pfizer", "region": "USA" },
      { "name": "Imigran", "form": "Tablet / Injection / Nasal Spray", "strengths": "50, 100 mg; 6 mg; 20 mg nasal", "manufacturer": "GSK", "region": "Europe" },
      { "name": "Sumatriptan Succinate", "form": "Generic Tablet", "strengths": "25, 50, 100 mg", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Ergotamine/Dihydroergotamine", "effect": "Prolonged vasospastic reactions; contraindicated within 24h", "severity": "Major" },
      { "drugClass": "MAO-A Inhibitors", "effect": "Increased sumatriptan levels; contraindicated (MAO-A)", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs", "effect": "Increased risk of serotonin syndrome", "severity": "Moderate" },
      { "drugClass": "Other Triptans", "effect": "Additive vasospastic effects; avoid within 24h", "severity": "Major" },
      { "drugClass": "CYP1A2 Inhibitors", "effect": "Increased sumatriptan exposure", "severity": "Moderate" },
      { "drugClass": "MAO-B Inhibitors", "effect": "Minimal interaction; MAO-B selective safe at low doses", "severity": "Minor" }
    ],
    "warning": "Contraindicated in patients with ischemic heart disease, history of MI, CAD, Prinzmetal angina, uncontrolled hypertension, or hemiplegic/basilar migraine.",
    "subCategoryId": "antimigraine"
  },
  {
    "id": "rizatriptan",
    "categoryId": "analgesics",
    "genericName": "Rizatriptan",
    "brandNames": "Maxalt, Rizact, Rizatan",
    "description": "A selective 5-HT1B/1D receptor agonist with rapid oral absorption used to abort acute migraine attacks with or without aura.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Acute migraine with or without aura",
    "dosageForm": "Oral/ODT",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "5-10 mg oral/ODT at onset; may repeat after 2h", "sub": "Max 30 mg per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30 minutes", "sub": "Half-life 2-3 hours" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute migraine attacks", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Reduce dose to 5 mg with propranolol use; ODT dissolves on tongue", "sub": "Avoid within 24h of other triptans/ergots" }
    ],
    "brandTable": [
      { "name": "Maxalt", "form": "Tablet 5, 10 mg / ODT 5, 10 mg", "strengths": "5 mg, 10 mg", "manufacturer": "Merck", "region": "Global" },
      { "name": "Rizact", "form": "Tablet 5, 10 mg", "strengths": "5 mg, 10 mg", "manufacturer": "Dr. Reddy's", "region": "India" },
      { "name": "Rizatan", "form": "Tablet 5, 10 mg", "strengths": "5 mg, 10 mg", "manufacturer": "Sandoz", "region": "Europe" },
      { "name": "Maxalt-MLT", "form": "Orally Disintegrating Tablet", "strengths": "5 mg, 10 mg", "manufacturer": "Merck", "region": "USA" },
      { "name": "Rizatriptan Benzoate", "form": "Generic Tablet/ODT", "strengths": "5 mg, 10 mg", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "MAO-A Inhibitors", "effect": "Increased rizatriptan levels; contraindicated", "severity": "Major" },
      { "drugClass": "Propranolol", "effect": "Increased rizatriptan AUC by 70%; reduce dose to 5 mg", "severity": "Moderate" },
      { "drugClass": "Other Triptans", "effect": "Additive vasospasm risk; avoid within 24h", "severity": "Major" },
      { "drugClass": "Ergotamine", "effect": "Prolonged vasospasm risk; contraindicated within 24h", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs", "effect": "Increased serotonin syndrome risk", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Slightly increased rizatriptan plasma levels (not clinically significant)", "severity": "Minor" }
    ],
    "warning": "Do not use within 24h of other triptans or ergotamine; contraindicated in ischemic heart disease, uncontrolled hypertension, or hemiplegic migraine.",
    "subCategoryId": "antimigraine"
  },
  {
    "id": "zolmitriptan",
    "categoryId": "analgesics",
    "genericName": "Zolmitriptan",
    "brandNames": "Zomig, Zoming",
    "description": "A selective 5-HT1B/1D receptor agonist available in multiple formulations for flexible acute migraine management.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Acute migraine with or without aura, cluster headache",
    "dosageForm": "Oral/Nasal",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "2.5-5 mg oral; 5 mg nasal spray at onset", "sub": "Max 10 mg per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30 min oral, 15 min nasal", "sub": "Half-life 3 hours" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute migraine attacks, cluster headache", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Nasal spray offers faster onset; ODT formulation available", "sub": "Reduce dose in hepatic impairment" }
    ],
    "brandTable": [
      { "name": "Zomig", "form": "Tablet 2.5, 5 mg / Nasal Spray 5 mg", "strengths": "2.5 mg, 5 mg; 5 mg/spray", "manufacturer": "AstraZeneca", "region": "Global" },
      { "name": "Zoming", "form": "Tablet 2.5, 5 mg", "strengths": "2.5 mg, 5 mg", "manufacturer": "Sun Pharma", "region": "India" },
      { "name": "Zomig Rapimelt", "form": "ODT 2.5, 5 mg", "strengths": "2.5 mg, 5 mg", "manufacturer": "AstraZeneca", "region": "Europe" },
      { "name": "Zolmitriptan ODT", "form": "Orally Disintegrating Tablet", "strengths": "2.5 mg, 5 mg", "manufacturer": "Various", "region": "Global" },
      { "name": "Zolmitriptan Nasal", "form": "Nasal Spray", "strengths": "5 mg/spray", "manufacturer": "Various", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "MAO-A Inhibitors", "effect": "Increased zolmitriptan levels; avoid use", "severity": "Major" },
      { "drugClass": "Cimetidine", "effect": "Increased half-life and AUC of zolmitriptan", "severity": "Moderate" },
      { "drugClass": "Other Triptans", "effect": "Additive vasospasm risk; avoid within 24h", "severity": "Major" },
      { "drugClass": "Ergotamine", "effect": "Prolonged vasospasm risk; contraindicated within 24h", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs", "effect": "Increased serotonin syndrome risk", "severity": "Moderate" },
      { "drugClass": "Selegiline", "effect": "Potential interaction with MAO-B at high doses", "severity": "Minor" }
    ],
    "warning": "Contraindicated in ischemic heart disease, uncontrolled hypertension, and within 24h of other triptans or ergot derivatives.",
    "subCategoryId": "antimigraine"
  },
  {
    "id": "naratriptan",
    "categoryId": "analgesics",
    "genericName": "Naratriptan",
    "brandNames": "Amerge, Naramig",
    "description": "A selective 5-HT1B/1D receptor agonist with a longer half-life and slower onset, used for moderate migraine attacks with prolonged duration.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Acute migraine with or without aura",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-2.5 mg oral at onset; may repeat after 4h", "sub": "Max 5 mg per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 1-2 hours", "sub": "Half-life 5-6 hours" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute migraine attacks, menstrual migraine", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Slower onset but longer duration; lower side effect profile than sumatriptan", "sub": "Contraindicated in severe hepatic/renal impairment" }
    ],
    "brandTable": [
      { "name": "Amerge", "form": "Tablet 1, 2.5 mg", "strengths": "1 mg, 2.5 mg", "manufacturer": "GSK", "region": "USA" },
      { "name": "Naramig", "form": "Tablet 2.5 mg", "strengths": "2.5 mg", "manufacturer": "GSK", "region": "Europe" },
      { "name": "Naratriptan HCl", "form": "Generic Tablet", "strengths": "1 mg, 2.5 mg", "manufacturer": "Various", "region": "Global" },
      { "name": "Naratriptan 2.5 mg", "form": "Tablet", "strengths": "2.5 mg", "manufacturer": "Sandoz", "region": "Canada" },
      { "name": "Naratriptan Sandoz", "form": "Tablet", "strengths": "2.5 mg", "manufacturer": "Sandoz", "region": "Australia" }
    ],
    "interactions": [
      { "drugClass": "Ergotamine", "effect": "Prolonged vasospasm; contraindicated within 24h", "severity": "Major" },
      { "drugClass": "Other Triptans", "effect": "Additive vasospasm risk; avoid within 24h", "severity": "Major" },
      { "drugClass": "MAO-A Inhibitors", "effect": "Increased naratriptan levels; contraindicated", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs", "effect": "Increased serotonin syndrome risk", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Minimal interaction; no dose adjustment needed", "severity": "Minor" },
      { "drugClass": "Nicotine", "effect": "Smoking may reduce naratriptan efficacy", "severity": "Minor" }
    ],
    "warning": "Contraindicated in patients with CAD, uncontrolled hypertension, hemiplegic/basilar migraine, severe hepatic or renal impairment (CrCl under 15 mL/min).",
    "subCategoryId": "antimigraine"
  },
  {
    "id": "eletriptan",
    "categoryId": "analgesics",
    "genericName": "Eletriptan",
    "brandNames": "Relpax",
    "description": "A selective 5-HT1B/1D receptor agonist with high oral bioavailability used for the acute treatment of migraine with or without aura.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Acute migraine with or without aura",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "20-40 mg oral at onset; may repeat after 2h", "sub": "Max 80 mg per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30-60 minutes", "sub": "Half-life 4 hours" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute migraine attacks", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "High lipophilicity with good CNS penetration; avoid with potent CYP3A4 inhibitors", "sub": "Contraindicated in severe hepatic impairment" }
    ],
    "brandTable": [
      { "name": "Relpax", "form": "Tablet 20, 40 mg", "strengths": "20 mg, 40 mg", "manufacturer": "Pfizer", "region": "Global" },
      { "name": "Eletriptan HBr", "form": "Generic Tablet", "strengths": "20 mg, 40 mg", "manufacturer": "Various", "region": "USA" },
      { "name": "Eletriptan 40 mg", "form": "Tablet", "strengths": "40 mg", "manufacturer": "Sandoz", "region": "Europe" },
      { "name": "Relpax 40 mg", "form": "Tablet", "strengths": "40 mg", "manufacturer": "Upjohn", "region": "Global" },
      { "name": "Eletriptan Mylan", "form": "Tablet", "strengths": "20 mg, 40 mg", "manufacturer": "Mylan", "region": "Europe" }
    ],
    "interactions": [
      { "drugClass": "CYP3A4 Inhibitors (Ketoconazole, Erythromycin)", "effect": "Markedly increased eletriptan levels; contraindicated", "severity": "Major" },
      { "drugClass": "Ergotamine", "effect": "Prolonged vasospasm; contraindicated within 24h", "severity": "Major" },
      { "drugClass": "Other Triptans", "effect": "Additive vasospasm risk; avoid within 24h", "severity": "Major" },
      { "drugClass": "MAO-A Inhibitors", "effect": "Increased eletriptan levels; contraindicated", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs", "effect": "Increased serotonin syndrome risk", "severity": "Moderate" },
      { "drugClass": "CYP3A4 Inducers", "effect": "Reduced eletriptan efficacy", "severity": "Moderate" }
    ],
    "warning": "Contraindicated within 72h of potent CYP3A4 inhibitors (ketoconazole, itraconazole, clarithromycin); avoid in severe hepatic impairment and ischemic heart disease.",
    "subCategoryId": "antimigraine"
  },
  {
    "id": "almotriptan",
    "categoryId": "analgesics",
    "genericName": "Almotriptan",
    "brandNames": "Axert, Almogran",
    "description": "A selective 5-HT1B/1D receptor agonist with favorable tolerability profile used for acute migraine treatment.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Acute migraine with or without aura",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "6.25-12.5 mg oral at onset; may repeat after 2h", "sub": "Max 25 mg per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30-60 minutes", "sub": "Half-life 3-4 hours" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute migraine attacks", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Dual route of metabolism (CYP3A4 and MAO-A) reduces drug interaction risk", "sub": "Well tolerated; lower incidence of chest symptoms" }
    ],
    "brandTable": [
      { "name": "Axert", "form": "Tablet 6.25, 12.5 mg", "strengths": "6.25 mg, 12.5 mg", "manufacturer": "Janssen", "region": "USA" },
      { "name": "Almogran", "form": "Tablet 12.5 mg", "strengths": "12.5 mg", "manufacturer": "Almirall", "region": "Europe" },
      { "name": "Almotriptan Malate", "form": "Generic Tablet", "strengths": "6.25 mg, 12.5 mg", "manufacturer": "Various", "region": "Global" },
      { "name": "Almotriptan 12.5 mg", "form": "Tablet", "strengths": "12.5 mg", "manufacturer": "Sandoz", "region": "Canada" },
      { "name": "Amignul", "form": "Tablet 12.5 mg", "strengths": "12.5 mg", "manufacturer": "Various", "region": "Spain" }
    ],
    "interactions": [
      { "drugClass": "MAO-A Inhibitors", "effect": "Increased almotriptan exposure; contraindicated", "severity": "Major" },
      { "drugClass": "Ergotamine", "effect": "Prolonged vasospasm; contraindicated within 24h", "severity": "Major" },
      { "drugClass": "Other Triptans", "effect": "Additive vasospasm risk; avoid within 24h", "severity": "Major" },
      { "drugClass": "CYP3A4 Inhibitors", "effect": "Increased almotriptan levels (less significant than eletriptan)", "severity": "Moderate" },
      { "drugClass": "SSRIs/SNRIs", "effect": "Increased serotonin syndrome risk", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "No clinically significant interaction", "severity": "Minor" }
    ],
    "warning": "Contraindicated in ischemic heart disease, uncontrolled hypertension, hemiplegic/basilar migraine; avoid within 24h of other triptans or ergot derivatives.",
    "subCategoryId": "antimigraine"
  },
  {
    "id": "frovatriptan",
    "categoryId": "analgesics",
    "genericName": "Frovatriptan",
    "brandNames": "Frova, Migard",
    "description": "A selective 5-HT1B/1D receptor agonist with the longest half-life among triptans, making it particularly suitable for prolonged migraines and menstrual migraine prevention.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Acute migraine with or without aura, menstrual migraine",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "2.5 mg oral at onset; may repeat after 2h", "sub": "Max 7.5 mg per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 2-4 hours", "sub": "Half-life 26 hours" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute migraine, menstrual migraine (short-term prevention)", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Lowest headache recurrence rate among triptans due to long half-life", "sub": "May be used for mini-prophylaxis of menstrual migraine" }
    ],
    "brandTable": [
      { "name": "Frova", "form": "Tablet 2.5 mg", "strengths": "2.5 mg", "manufacturer": "Endo Pharmaceuticals", "region": "USA" },
      { "name": "Migard", "form": "Tablet 2.5 mg", "strengths": "2.5 mg", "manufacturer": "Menarini", "region": "Europe" },
      { "name": "Frovatriptan Succinate", "form": "Generic Tablet", "strengths": "2.5 mg", "manufacturer": "Various", "region": "Global" },
      { "name": "Frovatriptan 2.5 mg", "form": "Tablet", "strengths": "2.5 mg", "manufacturer": "Teva", "region": "Canada" },
      { "name": "Frovatriptan Sandoz", "form": "Tablet", "strengths": "2.5 mg", "manufacturer": "Sandoz", "region": "Europe" }
    ],
    "interactions": [
      { "drugClass": "Ergotamine", "effect": "Prolonged vasospasm; contraindicated within 24h", "severity": "Major" },
      { "drugClass": "Other Triptans", "effect": "Additive vasospasm risk; avoid within 24h", "severity": "Major" },
      { "drugClass": "MAO-A Inhibitors", "effect": "Increased frovatriptan levels; avoid use", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs", "effect": "Increased serotonin syndrome risk", "severity": "Moderate" },
      { "drugClass": "CYP1A2 Inhibitors", "effect": "Potential increase in frovatriptan levels", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Slight increase in frovatriptan levels (not clinically significant)", "severity": "Minor" }
    ],
    "warning": "Contraindicated in ischemic heart disease, uncontrolled hypertension, hemiplegic/basilar migraine; avoid within 24h of other triptans or ergot derivatives.",
    "subCategoryId": "antimigraine"
  },
  {
    "id": "ergotamine",
    "categoryId": "analgesics",
    "genericName": "Ergotamine Tartrate",
    "brandNames": "Ergomar, Lingraine, Migril",
    "description": "An ergot alkaloid that acts as a non-selective serotonin agonist and vasoconstrictor used for acute migraine abortion with a long historical track record.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Acute migraine with prolonged duration",
    "dosageForm": "Oral/Sublingual",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "2 mg sublingual/oral at onset; then 1-2 mg q30min", "sub": "Max 6 mg per attack; max 10 mg per week" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30-60 minutes", "sub": "Half-life 2 hours (biphasic: 2h and 21h)" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute migraine attacks (especially prolonged)", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Significant vasoconstriction risk; limit use to 2 days per week maximum", "sub": "Contraindicated in CAD, PVD, HTN, pregnancy" }
    ],
    "brandTable": [
      { "name": "Ergomar", "form": "Sublingual Tablet 2 mg", "strengths": "2 mg", "manufacturer": "Novartis", "region": "USA" },
      { "name": "Lingraine", "form": "Sublingual Tablet 2 mg", "strengths": "2 mg", "manufacturer": "Sanofi", "region": "UK" },
      { "name": "Migril", "form": "Tablet (combination)", "strengths": "Ergotamine 2 mg + Caffeine 100 mg", "manufacturer": "Pfizer", "region": "UK" },
      { "name": "Ergotamine+Caffeine", "form": "Suppository", "strengths": "Ergotamine 2 mg + Caffeine 100 mg", "manufacturer": "Various", "region": "Europe" },
      { "name": "Ergotamine Tartrate", "form": "Generic Tablet 1 mg", "strengths": "1 mg", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Triptans", "effect": "Prolonged vasospasm; contraindicated within 24h", "severity": "Major" },
      { "drugClass": "CYP3A4 Inhibitors (Macrolides, Azoles)", "effect": "Increased ergotamine levels; risk of ergotism; contraindicated", "severity": "Major" },
      { "drugClass": "Propranolol", "effect": "Additive vasoconstriction; increased ergotism risk", "severity": "Moderate" },
      { "drugClass": "Other Vasoconstrictors", "effect": "Additive vasospasm risk", "severity": "Major" },
      { "drugClass": "Nicotine", "effect": "Additive vasoconstriction; reduced efficacy", "severity": "Moderate" },
      { "drugClass": "Anticoagulants", "effect": "Reduced anticoagulant effect (case reports)", "severity": "Moderate" }
    ],
    "warning": "Contraindicated with potent CYP3A4 inhibitors (macrolides, azole antifungals, HIV protease inhibitors); limit use to 2 days per week; discontinue if signs of ergotism (numbness, pain, cyanosis).",
    "subCategoryId": "antimigraine"
  },
  {
    "id": "dihydroergotamine",
    "categoryId": "analgesics",
    "genericName": "Dihydroergotamine",
    "brandNames": "Migranal, D.H.E. 45",
    "description": "A semi-synthetic ergot alkaloid with stronger venoconstrictor than arterioconstrictor activity, used for acute migraine and cluster headache with a better safety profile than ergotamine.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Acute migraine, cluster headache",
    "dosageForm": "Nasal/IM/IV",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1 mg IM/IV; 0.5 mg per nostril nasal spray; may repeat after 15 min", "sub": "Max 2 mg IM/IV per 24h; max 3 mg nasal per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 15-30 min IM/IV, 30-60 min nasal", "sub": "Half-life 10 hours" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute migraine, cluster headache, status migrainosus", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Preferred over ergotamine for IV use in emergency; less arterial vasoconstriction than ergotamine", "sub": "Contraindicated in CAD, PVD, uncontrolled HTN" }
    ],
    "brandTable": [
      { "name": "Migranal", "form": "Nasal Spray 4 mg/mL", "strengths": "0.5 mg/spray", "manufacturer": "Bausch Health", "region": "USA" },
      { "name": "D.H.E. 45", "form": "Injection 1 mg/mL", "strengths": "1 mg/mL ampule", "manufacturer": "Novartis", "region": "USA" },
      { "name": "Dihydroergotamine Mesylate", "form": "Generic Injection", "strengths": "1 mg/mL", "manufacturer": "Various", "region": "Global" },
      { "name": "DHE Nasal Spray", "form": "Nasal Spray", "strengths": "0.5 mg/spray", "manufacturer": "Various", "region": "Europe" },
      { "name": "DHE Injection", "form": "Ampule 1 mg/mL", "strengths": "1 mg", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Triptans", "effect": "Prolonged vasospasm; contraindicated within 24h", "severity": "Major" },
      { "drugClass": "CYP3A4 Inhibitors", "effect": "Increased DHE levels; risk of ergotism", "severity": "Major" },
      { "drugClass": "Propranolol", "effect": "Additive vasoconstriction risk", "severity": "Moderate" },
      { "drugClass": "Other Ergot Alkaloids", "effect": "Additive ergotism risk; avoid concurrent use", "severity": "Major" },
      { "drugClass": "Nicotine", "effect": "Additive vasoconstriction", "severity": "Moderate" },
      { "drugClass": "SSRIs/SNRIs", "effect": "Increased serotonin syndrome risk", "severity": "Moderate" }
    ],
    "warning": "Contraindicated with potent CYP3A4 inhibitors; within 24h of triptans; in patients with CAD, uncontrolled hypertension, PVD, sepsis, or severe hepatic/renal impairment.",
    "subCategoryId": "antimigraine"
  },
  {
    "id": "propranolol-migraine",
    "categoryId": "analgesics",
    "genericName": "Propranolol (Migraine)",
    "brandNames": "Inderal, InnoPran",
    "description": "A non-selective beta-adrenergic receptor blocker that reduces migraine frequency through central beta-blockade and modulation of cortical spreading depression.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Migraine Prevention",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "40-160 mg/day in 1-2 divided doses; start 40 mg BID", "sub": "Max 240 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 4-8 weeks for prophylactic effect", "sub": "Half-life 3-6 hours (IR); 8-11 hours (ER)" },
      { "label": "CLINICAL INDICATIONS", "value": "Migraine prophylaxis, tension-type headache prophylaxis", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "First-line migraine prophylaxis; reduce dose in hepatic impairment; do not abruptly discontinue", "sub": "Avoid in asthma, heart block, bradycardia" }
    ],
    "brandTable": [
      { "name": "Inderal", "form": "Tablet 10, 20, 40, 80 mg / LA 60, 80, 120, 160 mg", "strengths": "10-160 mg", "manufacturer": "Pfizer", "region": "Global" },
      { "name": "InnoPran", "form": "ER Capsule 80, 120 mg", "strengths": "80 mg, 120 mg", "manufacturer": "Reliant", "region": "USA" },
      { "name": "Inderal LA", "form": "Long-Acting Capsule", "strengths": "60, 80, 120, 160 mg", "manufacturer": "Pfizer", "region": "USA" },
      { "name": "Propranolol HCl", "form": "Generic Tablet / ER Capsule", "strengths": "10-160 mg", "manufacturer": "Various", "region": "Global" },
      { "name": "Bedranol", "form": "SR Capsule", "strengths": "80, 120, 160 mg", "manufacturer": "Cipla", "region": "India" }
    ],
    "interactions": [
      { "drugClass": "Calcium Channel Blockers (Verapamil)", "effect": "Additive negative chronotropic/inotropic effects; risk of bradycardia", "severity": "Moderate" },
      { "drugClass": "Antiarrhythmics", "effect": "Additive cardiac depressant effects", "severity": "Moderate" },
      { "drugClass": "Rizatriptan", "effect": "Increased rizatriptan AUC by 70%; reduce rizatriptan dose to 5 mg", "severity": "Moderate" },
      { "drugClass": "Insulin/Oral Hypoglycemics", "effect": "Masked hypoglycemia symptoms (tachycardia)", "severity": "Moderate" },
      { "drugClass": "NSAIDs", "effect": "Reduced antihypertensive effect of beta-blockers", "severity": "Minor" },
      { "drugClass": "CYP1A2/CYP2D6 Inhibitors", "effect": "Increased propranolol levels", "severity": "Moderate" }
    ],
    "warning": "Do not abruptly discontinue (risk of MI, arrhythmia); contraindicated in asthma, COPD, heart block, bradycardia, cardiogenic shock; monitor heart rate and blood pressure regularly.",
    "subCategoryId": "antimigraine"
  },
  {
    "id": "topiramate-migraine",
    "categoryId": "analgesics",
    "genericName": "Topiramate (Migraine)",
    "brandNames": "Topamax, Trokendi XR",
    "description": "A sulfamate-substituted monosaccharide anticonvulsant that reduces migraine frequency through multiple mechanisms including GABA potentiation and glutamate antagonism.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Migraine Prevention",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "25 mg/day initially, titrate to 50-200 mg/day in 2 divided doses", "sub": "Max 400 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 4-8 weeks for prophylactic effect", "sub": "Half-life 21 hours" },
      { "label": "CLINICAL INDICATIONS", "value": "Migraine prophylaxis, chronic migraine", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Titrate slowly (25 mg/week); monitor for metabolic acidosis, nephrolithiasis, acute myopia", "sub": "Contraindicated in pregnancy (cleft lip/palate risk)" }
    ],
    "brandTable": [
      { "name": "Topamax", "form": "Tablet 25, 50, 100, 200 mg / Sprinkle 15, 25 mg", "strengths": "25, 50, 100, 200 mg", "manufacturer": "Janssen", "region": "Global" },
      { "name": "Trokendi XR", "form": "ER Capsule 25, 50, 100, 200 mg", "strengths": "25, 50, 100, 200 mg", "manufacturer": "Supernus", "region": "USA" },
      { "name": "Qudexy XR", "form": "ER Capsule 25, 50, 100, 150, 200 mg", "strengths": "25-200 mg", "manufacturer": "Upsher-Smith", "region": "USA" },
      { "name": "Topiramate IR", "form": "Generic Tablet / Sprinkle", "strengths": "25, 50, 100, 200 mg", "manufacturer": "Various", "region": "Global" },
      { "name": "Topamac", "form": "Tablet 25, 50, 100 mg", "strengths": "25, 50, 100 mg", "manufacturer": "Johnson & Johnson", "region": "Asia" }
    ],
    "interactions": [
      { "drugClass": "Oral Contraceptives", "effect": "Reduced estrogen efficacy at doses above 200 mg/day", "severity": "Moderate" },
      { "drugClass": "Valproic Acid", "effect": "Hyperammonemia, encephalopathy risk; reduced topiramate levels", "severity": "Moderate" },
      { "drugClass": "Carbonic Anhydrase Inhibitors", "effect": "Additive risk of nephrolithiasis and metabolic acidosis", "severity": "Moderate" },
      { "drugClass": "Lithium", "effect": "Increased lithium levels (monitor)", "severity": "Moderate" },
      { "drugClass": "Metformin", "effect": "Increased metformin levels; monitor for lactic acidosis", "severity": "Moderate" },
      { "drugClass": "CNS Depressants", "effect": "Additive cognitive impairment and sedation", "severity": "Moderate" }
    ],
    "warning": "Increased risk of acute angle-closure glaucoma, metabolic acidosis, and nephrolithiasis; pregnancy category D; may cause cognitive dulling and word-finding difficulty; ensure adequate hydration.",
    "subCategoryId": "antimigraine"
  },
  {
    "id": "flunarizine",
    "categoryId": "analgesics",
    "genericName": "Flunarizine",
    "brandNames": "Sibelium, Florinal",
    "description": "A calcium channel blocker with antihistaminergic and dopaminergic antagonist properties used for migraine prophylaxis, particularly effective in vestibular migraine.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Migraine Prevention",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "5-10 mg daily at bedtime; maintenance 5 mg/day after 2 months", "sub": "Max 10 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 4-8 weeks for prophylactic effect", "sub": "Half-life 19 days (long terminal half-life)" },
      { "label": "CLINICAL INDICATIONS", "value": "Migraine prophylaxis, vestibular migraine, vertigo", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Long half-life allows daily dosing; weight gain and sedation are common side effects", "sub": "May cause extrapyramidal symptoms in elderly; taper upon discontinuation" }
    ],
    "brandTable": [
      { "name": "Sibelium", "form": "Capsule 5 mg / Tablet 10 mg", "strengths": "5 mg, 10 mg", "manufacturer": "Janssen-Cilag", "region": "Europe" },
      { "name": "Florinal", "form": "Capsule 5 mg", "strengths": "5 mg", "manufacturer": "Various", "region": "Europe" },
      { "name": "Flunarizine HCl", "form": "Generic Tablet/Capsule", "strengths": "5 mg, 10 mg", "manufacturer": "Various", "region": "Global" },
      { "name": "Flunarin", "form": "Tablet 5 mg", "strengths": "5 mg", "manufacturer": "Various", "region": "India" },
      { "name": "Vasculin", "form": "Capsule 5 mg", "strengths": "5 mg", "manufacturer": "Various", "region": "Asia" }
    ],
    "interactions": [
      { "drugClass": "Alcohol/CNS Depressants", "effect": "Additive sedation effect", "severity": "Moderate" },
      { "drugClass": "Anticholinergics", "effect": "Additive anticholinergic effects", "severity": "Moderate" },
      { "drugClass": "Antihypertensives", "effect": "Additive hypotensive effect", "severity": "Moderate" },
      { "drugClass": "Dopamine Antagonists", "effect": "Increased risk of extrapyramidal symptoms", "severity": "Moderate" },
      { "drugClass": "Carbamazepine", "effect": "Reduced flunarizine levels", "severity": "Minor" },
      { "drugClass": "Oral Contraceptives", "effect": "No significant interaction reported", "severity": "Minor" }
    ],
    "warning": "May cause significant weight gain (average 3-5 kg) and sedation; use with caution in elderly due to extrapyramidal side effects; contraindicated in patients with Parkinson's disease or a history of depression.",
    "subCategoryId": "antimigraine"
  },
  {
    "id": "paracetamol-codeine",
    "categoryId": "analgesics",
    "genericName": "Paracetamol + Codeine",
    "brandNames": "Tylenol #3, Panadeine, Co-codamol, Solpadeine",
    "description": "A fixed-dose combination analgesic where paracetamol provides antipyretic and analgesic effects while codeine acts as a prodrug converted to morphine for moderate pain relief.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Moderate pain not responsive to non-opioid analgesics alone",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "30/500 mg or 30/300 mg 1-2 tabs q4-6h", "sub": "Max 4000 mg paracetamol/240 mg codeine per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30-60 minutes", "sub": "Half-life 2-4 hours (paracetamol); 2.5-3.5h (codeine)" },
      { "label": "CLINICAL INDICATIONS", "value": "Post-operative pain, dental pain, musculoskeletal pain, headache", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "CYP2D6 poor metabolizers have reduced efficacy; ultra-rapid metabolizers at toxicity risk", "sub": "Avoid in children post-tonsillectomy (FDA warning)" }
    ],
    "brandTable": [
      { "name": "Tylenol #3", "form": "Tablet", "strengths": "Codeine 30 mg + Paracetamol 300 mg", "manufacturer": "Janssen", "region": "USA" },
      { "name": "Panadeine", "form": "Tablet / Caplet", "strengths": "Codeine 8 mg + Paracetamol 500 mg", "manufacturer": "GSK", "region": "Australia" },
      { "name": "Co-codamol", "form": "Tablet / Effervescent / Caplet", "strengths": "Codeine 8/15/30 mg + Paracetamol 500 mg", "manufacturer": "Various", "region": "UK" },
      { "name": "Solpadeine", "form": "Soluble Tablet / Caplet", "strengths": "Codeine 8 mg + Paracetamol 500 mg", "manufacturer": "Omega Pharma", "region": "UK" },
      { "name": "Tylenol #4", "form": "Tablet", "strengths": "Codeine 60 mg + Paracetamol 300 mg", "manufacturer": "Janssen", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "CNS Depressants (Alcohol, Benzodiazepines)", "effect": "Additive sedation and respiratory depression", "severity": "Major" },
      { "drugClass": "MAOIs", "effect": "Increased risk of serotonin syndrome and CNS depression", "severity": "Major" },
      { "drugClass": "CYP2D6 Inhibitors", "effect": "Reduced conversion to morphine; decreased efficacy", "severity": "Moderate" },
      { "drugClass": "Anticoagulants (Warfarin)", "effect": "Increased INR with high-dose paracetamol", "severity": "Moderate" },
      { "drugClass": "SSRIs", "effect": "Increased risk of serotonin syndrome and bleeding", "severity": "Moderate" },
      { "drugClass": "Quinidine", "effect": "Reduced codeine efficacy via CYP2D6 inhibition", "severity": "Moderate" }
    ],
    "warning": "Risk of opioid dependence, abuse, and respiratory depression; CYP2D6 ultra-rapid metabolizers at risk of morphine toxicity; contraindicated in children under 12 years.",
    "subCategoryId": "combination-analgesics"
  },
  {
    "id": "paracetamol-tramadol",
    "categoryId": "analgesics",
    "genericName": "Paracetamol + Tramadol",
    "brandNames": "Ultracet, Tramacet, Doreta",
    "description": "A fixed-dose combination of a centrally-acting opioid agonist and a non-opioid analgesic providing multimodal analgesia for moderate to moderately severe pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Moderate to moderately severe acute pain",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "37.5/325 mg 1-2 tabs q4-6h as needed", "sub": "Max 8 tabs per 24h (300 mg tramadol/2600 mg paracetamol)" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 1 hour", "sub": "Half-life 5-7 hours (tramadol); 2-4h (paracetamol)" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute musculoskeletal pain, post-operative pain, dental pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Tramadol lowers seizure threshold; avoid in epilepsy; CYP2D6 polymorphism affects response", "sub": "Reduce dose in elderly (over 75) and renal impairment" }
    ],
    "brandTable": [
      { "name": "Ultracet", "form": "Tablet", "strengths": "Tramadol 37.5 mg + Paracetamol 325 mg", "manufacturer": "Janssen", "region": "USA" },
      { "name": "Tramacet", "form": "Tablet", "strengths": "Tramadol 37.5 mg + Paracetamol 325 mg", "manufacturer": "Janssen-Cilag", "region": "Canada" },
      { "name": "Doreta", "form": "Tablet", "strengths": "Tramadol 37.5 mg + Paracetamol 325 mg", "manufacturer": "Grumenthal", "region": "Europe" },
      { "name": "Zaldiar", "form": "Tablet / Effervescent", "strengths": "Tramadol 37.5 mg + Paracetamol 325 mg", "manufacturer": "Gruenenthal", "region": "Europe" },
      { "name": "Tramadol/APAP", "form": "Generic Tablet", "strengths": "Tramadol 37.5 mg + Paracetamol 325 mg", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "CNS Depressants", "effect": "Additive sedation, respiratory depression, coma risk", "severity": "Major" },
      { "drugClass": "MAOIs", "effect": "Increased serotonin syndrome risk; contraindicated within 14 days", "severity": "Major" },
      { "drugClass": "SSRIs/SNRIs", "effect": "Increased serotonin syndrome risk (tramadol is a weak SNRI)", "severity": "Moderate" },
      { "drugClass": "Antiepileptics (Carbamazepine)", "effect": "Reduced tramadol efficacy; increased seizure risk", "severity": "Moderate" },
      { "drugClass": "Warfarin", "effect": "Increased INR with high-dose paracetamol", "severity": "Moderate" },
      { "drugClass": "Ondansetron", "effect": "Reduced tramadol analgesic efficacy (5-HT3 antagonism)", "severity": "Moderate" }
    ],
    "warning": "Risk of opioid dependence, seizures (especially in epileptic patients), and serotonin syndrome; contraindicated with MAOIs, in acute intoxication, and in children under 12 years.",
    "subCategoryId": "combination-analgesics"
  },
  {
    "id": "paracetamol-oxycodone",
    "categoryId": "analgesics",
    "genericName": "Paracetamol + Oxycodone",
    "brandNames": "Percocet, Roxicet, Endocet",
    "description": "A fixed-dose combination of a potent semi-synthetic opioid agonist and a non-opioid analgesic providing rapid-onset analgesia for acute moderate to severe pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Acute moderate to severe pain",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "5/325 mg 1 tab q6h as needed; range 2.5-10 mg oxycodone component", "sub": "Max 4000 mg paracetamol per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 15-30 minutes", "sub": "Half-life 3-5 hours (oxycodone); 2-4h (paracetamol)" },
      { "label": "CLINICAL INDICATIONS", "value": "Post-operative pain, trauma pain, dental pain, cancer pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "High abuse potential; FDA recommends avoiding doses above 5/325 mg due to paracetamol toxicity", "sub": "Taper to avoid withdrawal after prolonged use" }
    ],
    "brandTable": [
      { "name": "Percocet", "form": "Tablet", "strengths": "Oxycodone 2.5/5/7.5/10 mg + Paracetamol 325/500 mg", "manufacturer": "Endo Pharmaceuticals", "region": "USA" },
      { "name": "Roxicet", "form": "Tablet / Solution 5 mg/325 mg per 5 mL", "strengths": "Oxycodone 5 mg + Paracetamol 325 mg", "manufacturer": "Roxane", "region": "USA" },
      { "name": "Endocet", "form": "Tablet", "strengths": "Oxycodone 5/7.5/10 mg + Paracetamol 325/500 mg", "manufacturer": "Actavis", "region": "USA" },
      { "name": "Tylox", "form": "Capsule", "strengths": "Oxycodone 5 mg + Paracetamol 500 mg", "manufacturer": "Janssen", "region": "USA" },
      { "name": "Oxycodone/APAP", "form": "Generic Tablet", "strengths": "Various strengths", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "CNS Depressants", "effect": "Profound sedation, respiratory depression, coma; potentially fatal", "severity": "Major" },
      { "drugClass": "MAOIs", "effect": "Increased oxycodone levels and CNS depression; contraindicated", "severity": "Major" },
      { "drugClass": "CYP3A4 Inhibitors", "effect": "Increased oxycodone levels and toxicity risk", "severity": "Major" },
      { "drugClass": "CYP3A4 Inducers", "effect": "Reduced oxycodone efficacy; withdrawal risk", "severity": "Moderate" },
      { "drugClass": "SSRIs/SNRIs", "effect": "Increased serotonin syndrome risk", "severity": "Moderate" },
      { "drugClass": "Anticholinergics", "effect": "Additive risk of severe constipation and ileus", "severity": "Moderate" }
    ],
    "warning": "High abuse and addiction potential; risk of fatal respiratory depression, especially with concurrent CNS depressants; FDA limits paracetamol content to 325 mg/dose unit.",
    "subCategoryId": "combination-analgesics"
  },
  {
    "id": "paracetamol-hydrocodone",
    "categoryId": "analgesics",
    "genericName": "Paracetamol + Hydrocodone",
    "brandNames": "Vicodin, Norco, Lortab",
    "description": "A fixed-dose combination of a semi-synthetic opioid agonist and a non-opioid analgesic providing effective analgesia for moderate to moderately severe pain requiring opioid-level therapy.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Moderate to moderately severe pain",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "5/325 mg 1 tab q4-6h as needed", "sub": "Max 4000 mg paracetamol per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30 minutes", "sub": "Half-life 4 hours (hydrocodone); 2-4h (paracetamol)" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute pain, post-surgical pain, injury-related pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "FDA restricted doses to 5/325 mg max per unit due to paracetamol toxicity", "sub": "CYP2D6 extensively metabolizes hydrocodone to hydromorphone" }
    ],
    "brandTable": [
      { "name": "Vicodin", "form": "Tablet", "strengths": "Hydrocodone 5 mg + Paracetamol 300/500 mg", "manufacturer": "AbbVie", "region": "USA" },
      { "name": "Norco", "form": "Tablet", "strengths": "Hydrocodone 5/7.5/10 mg + Paracetamol 325 mg", "manufacturer": "Allergan", "region": "USA" },
      { "name": "Lortab", "form": "Tablet / Elixir", "strengths": "Hydrocodone 2.5/5/7.5/10 mg + Paracetamol 300/325/500 mg", "manufacturer": "UCB", "region": "USA" },
      { "name": "Hydrocodone/APAP", "form": "Generic Tablet", "strengths": "Various strengths", "manufacturer": "Various", "region": "USA" },
      { "name": "Vicodin HP", "form": "Tablet", "strengths": "Hydrocodone 10 mg + Paracetamol 300 mg", "manufacturer": "AbbVie", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "CNS Depressants", "effect": "Fatal respiratory depression risk with alcohol, benzodiazepines, etc.", "severity": "Major" },
      { "drugClass": "MAOIs", "effect": "Increased opioid toxicity; avoid concurrent use", "severity": "Major" },
      { "drugClass": "CYP3A4 Inhibitors", "effect": "Increased hydrocodone levels", "severity": "Moderate" },
      { "drugClass": "CYP2D6 Inhibitors", "effect": "Reduced conversion to hydromorphone; altered analgesia", "severity": "Moderate" },
      { "drugClass": "SSRIs/SNRIs", "effect": "Increased serotonin syndrome risk", "severity": "Moderate" },
      { "drugClass": "Anticholinergics", "effect": "Additive constipation and urinary retention", "severity": "Moderate" }
    ],
    "warning": "Risk of opioid addiction, abuse, and fatal overdose; FDA limits paracetamol content to 325 mg per dosage unit; avoid concurrent benzodiazepines and alcohol.",
    "subCategoryId": "combination-analgesics"
  },
  {
    "id": "aspirin-codeine",
    "categoryId": "analgesics",
    "genericName": "Aspirin + Codeine",
    "brandNames": "Empirin #3, Codral, Ascodeen",
    "description": "A fixed-dose combination of a salicylate NSAID with a prodrug opioid providing dual-mechanism analgesia for moderate pain with anti-inflammatory benefits.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Moderate pain with inflammatory component",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "30/325 mg or 30/500 mg 1-2 tabs q4-6h", "sub": "Max 4000 mg aspirin/240 mg codeine per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30 minutes", "sub": "Half-life 2-3 hours (aspirin); 2.5-3.5h (codeine)" },
      { "label": "CLINICAL INDICATIONS", "value": "Post-operative pain, dental pain, musculoskeletal pain, headache", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Contraindicated in children and adolescents (Reye syndrome); avoid in peptic ulcer disease and bleeding disorders", "sub": "CYP2D6 polymorphism affects codeine response" }
    ],
    "brandTable": [
      { "name": "Empirin #3", "form": "Tablet", "strengths": "Codeine 30 mg + Aspirin 325 mg", "manufacturer": "GSK", "region": "USA" },
      { "name": "Codral", "form": "Tablet / Caplet", "strengths": "Codeine 8 mg + Aspirin 500 mg", "manufacturer": "Johnson & Johnson", "region": "Australia" },
      { "name": "Ascodeen", "form": "Tablet", "strengths": "Codeine 10 mg + Aspirin 500 mg", "manufacturer": "Various", "region": "India" },
      { "name": "Empirin #4", "form": "Tablet", "strengths": "Codeine 60 mg + Aspirin 325 mg", "manufacturer": "GSK", "region": "USA" },
      { "name": "Aspirin + Codeine", "form": "Generic Tablet", "strengths": "Codeine 30 mg + Aspirin 325 mg", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Anticoagulants (Warfarin)", "effect": "Increased bleeding risk due to aspirin antiplatelet effect", "severity": "Major" },
      { "drugClass": "CNS Depressants", "effect": "Additive sedation and respiratory depression", "severity": "Major" },
      { "drugClass": "MAOIs", "effect": "Increased risk of serotonin syndrome and CNS depression", "severity": "Major" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate toxicity due to reduced clearance", "severity": "Moderate" },
      { "drugClass": "Other NSAIDs", "effect": "Additive GI bleeding risk", "severity": "Major" },
      { "drugClass": "Oral Hypoglycemics", "effect": "Enhanced hypoglycemic effect at high aspirin doses", "severity": "Moderate" }
    ],
    "warning": "Contraindicated in children under 12 years (Reye syndrome risk); avoid in active peptic ulcer, hemophilia, severe hepatic impairment; risk of opioid dependence and respiratory depression.",
    "subCategoryId": "combination-analgesics"
  },
  {
    "id": "aspirin-caffeine",
    "categoryId": "analgesics",
    "genericName": "Aspirin + Caffeine",
    "brandNames": "Anacin, Vanquish",
    "description": "A combination analgesic where caffeine enhances the antinociceptive effect of aspirin through adenosine receptor antagonism and improved absorption.",
    "status": "OTC / Rx",
    "isCommonlyPrescribed": true,
    "isRxOnly": false,
    "isOTCAndRx": true,
    "primaryIndication": "Tension headache, mild to moderate pain, menstrual cramps",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "500/65 mg 2 tabs q4-6h as needed", "sub": "Max 4000 mg aspirin per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 15-30 minutes", "sub": "Half-life 2-3 hours (aspirin); 4-6h (caffeine)" },
      { "label": "CLINICAL INDICATIONS", "value": "Tension-type headache, migraine, menstrual cramps, mild arthritis pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Caffeine potentiates analgesia; may cause insomnia and jitteriness if taken late in the day", "sub": "Avoid in children, pregnancy, peptic ulcer, bleeding disorders" }
    ],
    "brandTable": [
      { "name": "Anacin", "form": "Tablet / Caplet", "strengths": "Aspirin 400/500 mg + Caffeine 32/65 mg", "manufacturer": "Insight Pharmaceuticals", "region": "USA" },
      { "name": "Vanquish", "form": "Caplet", "strengths": "Aspirin 227 mg + Caffeine 33 mg + Paracetamol 194 mg", "manufacturer": "Sterling Health", "region": "USA" },
      { "name": "APC (Aspirin-Phenacetin-Caffeine)", "form": "Tablet", "strengths": "Aspirin 250 mg + Caffeine 50 mg", "manufacturer": "Various", "region": "Global" },
      { "name": "Aspirin Plus Caffeine", "form": "Generic Tablet", "strengths": "Aspirin 500 mg + Caffeine 65 mg", "manufacturer": "Various", "region": "Global" },
      { "name": "Excedrin (Aspirin formulation)", "form": "Tablet", "strengths": "Aspirin 250 mg + Caffeine 65 mg + Paracetamol 250 mg", "manufacturer": "GSK", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "Anticoagulants", "effect": "Increased bleeding risk due to aspirin antiplatelet effect", "severity": "Major" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate toxicity", "severity": "Moderate" },
      { "drugClass": "Oral Hypoglycemics", "effect": "Enhanced hypoglycemic effect", "severity": "Moderate" },
      { "drugClass": "CYP1A2 Inhibitors", "effect": "Increased caffeine levels and side effects", "severity": "Minor" },
      { "drugClass": "Other NSAIDs", "effect": "Additive GI bleeding risk", "severity": "Moderate" },
      { "drugClass": "Vaccines (Varicella, Influenza)", "effect": "Theoretical Reye syndrome risk", "severity": "Moderate" }
    ],
    "warning": "Contraindicated in children and adolescents with viral illness (Reye syndrome); avoid in active peptic ulcer disease, hemophilia, aspirin allergy, and third trimester of pregnancy.",
    "subCategoryId": "combination-analgesics"
  },
  {
    "id": "ibuprofen-codeine",
    "categoryId": "analgesics",
    "genericName": "Ibuprofen + Codeine",
    "brandNames": "Nurofen Plus, Ibudol, Brufen Plus",
    "description": "A fixed-dose combination of a propionic acid NSAID and a prodrug opioid providing enhanced analgesia through complementary anti-inflammatory and opioid mechanisms.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Moderate acute pain with inflammatory component",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "200/12.8 mg 1-2 tabs q4-6h", "sub": "Max 6 tabs per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30-60 minutes", "sub": "Half-life 2-4 hours (ibuprofen); 2.5-3.5h (codeine)" },
      { "label": "CLINICAL INDICATIONS", "value": "Dental pain, post-operative pain, musculoskeletal pain, dysmenorrhea", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Lower codeine content reduces opioid-related side effects; avoid in active GI bleeding and severe renal impairment", "sub": "CYP2D6 poor metabolizers may have reduced efficacy" }
    ],
    "brandTable": [
      { "name": "Nurofen Plus", "form": "Tablet / Caplet", "strengths": "Ibuprofen 200 mg + Codeine 12.8 mg", "manufacturer": "Reckitt Benckiser", "region": "UK / Australia" },
      { "name": "Ibudol", "form": "Tablet", "strengths": "Ibuprofen 200 mg + Codeine 12.8 mg", "manufacturer": "Various", "region": "India" },
      { "name": "Brufen Plus", "form": "Tablet", "strengths": "Ibuprofen 200 mg + Codeine 12.8 mg", "manufacturer": "Abbott", "region": "India" },
      { "name": "Cuprofen Plus", "form": "Tablet", "strengths": "Ibuprofen 200 mg + Codeine 12.8 mg", "manufacturer": "McNeil", "region": "UK" },
      { "name": "Ibuprofen + Codeine", "form": "Generic Tablet", "strengths": "Ibuprofen 200 mg + Codeine 12.8 mg", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Anticoagulants", "effect": "Increased bleeding risk due to NSAID antiplatelet effect", "severity": "Major" },
      { "drugClass": "CNS Depressants", "effect": "Additive sedation and respiratory depression", "severity": "Major" },
      { "drugClass": "MAOIs", "effect": "Increased serotonin syndrome risk", "severity": "Major" },
      { "drugClass": "Other NSAIDs", "effect": "Additive GI and cardiovascular risks", "severity": "Major" },
      { "drugClass": "ACE Inhibitors", "effect": "Reduced antihypertensive effect; increased renal impairment risk", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate toxicity", "severity": "Moderate" }
    ],
    "warning": "Risk of opioid dependence; avoid in active peptic ulcer, severe renal impairment, and children under 12 years; CYP2D6 ultra-rapid metabolizers at risk of morphine toxicity.",
    "subCategoryId": "combination-analgesics"
  },
  {
    "id": "paracetamol-caffeine",
    "categoryId": "analgesics",
    "genericName": "Paracetamol + Caffeine",
    "brandNames": "Panadol Extra, Excedrin, Anadin Extra",
    "description": "A combination analgesic where caffeine adjuvant enhances paracetamol efficacy by 40-50% through adenosine receptor antagonism for improved pain relief.",
    "status": "OTC / Rx",
    "isCommonlyPrescribed": true,
    "isRxOnly": false,
    "isOTCAndRx": true,
    "primaryIndication": "Mild to moderate pain, tension headache, migraine",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "500/65 mg 1-2 tabs q4-6h", "sub": "Max 4000 mg paracetamol per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 15-30 minutes", "sub": "Half-life 2-4 hours (paracetamol); 4-6h (caffeine)" },
      { "label": "CLINICAL INDICATIONS", "value": "Tension headache, migraine, dental pain, menstrual cramps, musculoskeletal pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Caffeine enhances analgesia but may cause dependence and withdrawal headache", "sub": "Avoid caffeine from other sources to prevent excessive intake" }
    ],
    "brandTable": [
      { "name": "Panadol Extra", "form": "Tablet / Caplet / Soluble", "strengths": "Paracetamol 500 mg + Caffeine 65 mg", "manufacturer": "GSK", "region": "Global" },
      { "name": "Excedrin", "form": "Tablet / Caplet / Geltab", "strengths": "Paracetamol 250 mg + Aspirin 250 mg + Caffeine 65 mg", "manufacturer": "GSK", "region": "USA" },
      { "name": "Anadin Extra", "form": "Tablet / Caplet", "strengths": "Paracetamol 500 mg + Caffeine 65 mg", "manufacturer": "Pfizer", "region": "UK" },
      { "name": "Paracetamol + Caffeine", "form": "Generic Tablet", "strengths": "Paracetamol 500 mg + Caffeine 65 mg", "manufacturer": "Various", "region": "Global" },
      { "name": "Tylenol Ultra Relief", "form": "Caplet", "strengths": "Paracetamol 500 mg + Caffeine 65 mg", "manufacturer": "McNeil", "region": "Canada" }
    ],
    "interactions": [
      { "drugClass": "Warfarin", "effect": "Increased INR with high-dose paracetamol", "severity": "Moderate" },
      { "drugClass": "CYP1A2 Inhibitors", "effect": "Increased caffeine levels; insomnia, palpitations", "severity": "Minor" },
      { "drugClass": "Alcohol", "effect": "Increased hepatotoxicity risk with high paracetamol doses", "severity": "Major" },
      { "drugClass": "MAOIs", "effect": "Potential hypertensive crisis with caffeine", "severity": "Moderate" },
      { "drugClass": "Anticonvulsants (Hepatic Enzyme Inducers)", "effect": "Reduced paracetamol efficacy; increased hepatotoxicity risk", "severity": "Moderate" },
      { "drugClass": "Oral Contraceptives", "effect": "Reduced caffeine clearance; increased side effects", "severity": "Minor" }
    ],
    "warning": "Excessive caffeine may cause insomnia, nervousness, tachycardia; paracetamol overdose causes severe hepatotoxicity; avoid concurrent alcohol consumption; limit to 4000 mg paracetamol daily.",
    "subCategoryId": "combination-analgesics"
  },
  {
    "id": "paracetamol-diphenhydramine",
    "categoryId": "analgesics",
    "genericName": "Paracetamol + Diphenhydramine",
    "brandNames": "Tylenol PM, Panadol Night",
    "description": "A combination analgesic where diphenhydramine provides sedative and mild anticholinergic effects to aid sleep while paracetamol treats nocturnal pain.",
    "status": "OTC / Rx",
    "isCommonlyPrescribed": true,
    "isRxOnly": false,
    "isOTCAndRx": true,
    "primaryIndication": "Pain with insomnia, nighttime pain relief",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "500/25 mg or 500/50 mg 2 tabs at bedtime", "sub": "Max 4000 mg paracetamol per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30 minutes", "sub": "Half-life 2-4 hours (paracetamol); 4-6h (diphenhydramine)" },
      { "label": "CLINICAL INDICATIONS", "value": "Nighttime pain, pain with insomnia, headache with sleep disturbance", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Causes significant sedation and morning drowsiness; avoid driving after use", "sub": "Anticholinergic side effects in elderly" }
    ],
    "brandTable": [
      { "name": "Tylenol PM", "form": "Tablet / Caplet / Geltab", "strengths": "Paracetamol 500 mg + Diphenhydramine 25 mg", "manufacturer": "McNeil", "region": "USA" },
      { "name": "Panadol Night", "form": "Tablet / Caplet", "strengths": "Paracetamol 500 mg + Diphenhydramine 25 mg", "manufacturer": "GSK", "region": "Global" },
      { "name": "Unisom with Paracetamol", "form": "Caplet", "strengths": "Paracetamol 500 mg + Diphenhydramine 25 mg", "manufacturer": "Pfizer", "region": "USA" },
      { "name": "Anadin Night", "form": "Tablet", "strengths": "Paracetamol 500 mg + Diphenhydramine 25 mg", "manufacturer": "Pfizer", "region": "UK" },
      { "name": "Paracetamol PM", "form": "Generic Caplet", "strengths": "Paracetamol 500 mg + Diphenhydramine 25 mg", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "CNS Depressants (Alcohol, Benzodiazepines)", "effect": "Additive sedation; avoid concurrent use", "severity": "Major" },
      { "drugClass": "MAOIs", "effect": "Increased anticholinergic and CNS depressant effects", "severity": "Moderate" },
      { "drugClass": "Anticholinergics", "effect": "Additive urinary retention, constipation, dry mouth", "severity": "Moderate" },
      { "drugClass": "Warfarin", "effect": "Increased INR with high-dose paracetamol", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Increased hepatotoxicity risk with high paracetamol doses", "severity": "Major" },
      { "drugClass": "Antihypertensives", "effect": "Reduced antihypertensive efficacy (diphenhydramine)", "severity": "Minor" }
    ],
    "warning": "Avoid driving or operating machinery after use; may cause anticholinergic side effects (constipation, dry mouth, urinary retention); avoid in BPH and narrow-angle glaucoma; do not combine with alcohol.",
    "subCategoryId": "combination-analgesics"
  },
  {
    "id": "paracetamol-phenylephrine",
    "categoryId": "analgesics",
    "genericName": "Paracetamol + Phenylephrine",
    "brandNames": "Tylenol Cold, Panadol Cold & Flu",
    "description": "A combination analgesic-decongestant providing symptomatic relief from pain, fever, and nasal congestion associated with upper respiratory tract infections.",
    "status": "OTC / Rx",
    "isCommonlyPrescribed": true,
    "isRxOnly": false,
    "isOTCAndRx": true,
    "primaryIndication": "Cold and flu symptoms with pain and headache",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "500/10 mg 2 tabs q4-6h", "sub": "Max 4000 mg paracetamol per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30 minutes", "sub": "Half-life 2-4 hours (paracetamol); 2-3h (phenylephrine)" },
      { "label": "CLINICAL INDICATIONS", "value": "Cold and flu symptoms, sinus headache with congestion, allergic rhinitis with pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Phenylephrine has poor oral bioavailability (38%); intranasal more effective for congestion", "sub": "Avoid in uncontrolled hypertension and hyperthyroidism" }
    ],
    "brandTable": [
      { "name": "Tylenol Cold", "form": "Tablet / Caplet / Liquid", "strengths": "Paracetamol 325/500 mg + Phenylephrine 5/10 mg", "manufacturer": "McNeil", "region": "USA" },
      { "name": "Panadol Cold & Flu", "form": "Tablet / Caplet / Sachet", "strengths": "Paracetamol 500 mg + Phenylephrine 10 mg", "manufacturer": "GSK", "region": "Global" },
      { "name": "Lemsip Cold & Flu", "form": "Sachet / Powder", "strengths": "Paracetamol 500-1000 mg + Phenylephrine 10 mg", "manufacturer": "Reckitt Benckiser", "region": "UK" },
      { "name": "Sudafed PE + Paracetamol", "form": "Caplet", "strengths": "Paracetamol 500 mg + Phenylephrine 10 mg", "manufacturer": "McNeil", "region": "USA" },
      { "name": "Coldrex", "form": "Tablet / Sachet", "strengths": "Paracetamol 500 mg + Phenylephrine 10 mg", "manufacturer": "Omega Pharma", "region": "Europe" }
    ],
    "interactions": [
      { "drugClass": "MAOIs", "effect": "Hypertensive crisis; contraindicated within 14 days", "severity": "Major" },
      { "drugClass": "Beta-Blockers", "effect": "Reduced phenylephrine efficacy; possible hypertensive episode", "severity": "Moderate" },
      { "drugClass": "Other Sympathomimetics", "effect": "Additive vasopressor effects", "severity": "Moderate" },
      { "drugClass": "Tricyclic Antidepressants", "effect": "Enhanced phenylephrine vasopressor effect", "severity": "Moderate" },
      { "drugClass": "Warfarin", "effect": "Increased INR with high-dose paracetamol", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Increased hepatotoxicity risk with high paracetamol doses", "severity": "Major" }
    ],
    "warning": "Avoid in uncontrolled hypertension, severe coronary artery disease, hyperthyroidism, and MAOI use within 14 days; phenylephrine may cause increased blood pressure and heart rate.",
    "subCategoryId": "combination-analgesics"
  },
  {
    "id": "paracetamol-ornade",
    "categoryId": "analgesics",
    "genericName": "Paracetamol + Chlorpheniramine + Pseudoephedrine",
    "brandNames": "Ornade, Eskornade",
    "description": "A triple-combination analgesic, antihistamine, and decongestant providing multi-symptom relief from pain, allergic symptoms, and nasal congestion in cold and flu.",
    "status": "OTC / Rx",
    "isCommonlyPrescribed": true,
    "isRxOnly": false,
    "isOTCAndRx": true,
    "primaryIndication": "Cold and flu with pain, congestion, and allergic symptoms",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "500/2/30 mg 1-2 tabs q4-6h", "sub": "Max 4000 mg paracetamol per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30 minutes", "sub": "Half-life 2-4h (paracetamol); 12-15h (chlorpheniramine); 4-6h (pseudoephedrine)" },
      { "label": "CLINICAL INDICATIONS", "value": "Cold and flu symptoms, sinusitis, allergic rhinitis with headache", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Antihistamine causes sedation; pseudoephedrine is a precursor monitored for methamphetamine production", "sub": "Chlorpheniramine preferred for elderly due to lower anticholinergic burden than diphenhydramine" }
    ],
    "brandTable": [
      { "name": "Ornade", "form": "Spansule Capsule / Tablet", "strengths": "Paracetamol 500 mg + Chlorpheniramine 2 mg + Pseudoephedrine 30 mg", "manufacturer": "GSK", "region": "Global" },
      { "name": "Eskornade", "form": "Spansule / Syrup", "strengths": "Paracetamol 500 mg + Chlorpheniramine 2 mg + Pseudoephedrine 30 mg", "manufacturer": "Allen & Hanburys", "region": "UK" },
      { "name": "Triominic", "form": "Tablet / Liquid", "strengths": "Paracetamol 500 mg + Chlorpheniramine 2 mg + Pseudoephedrine 30 mg", "manufacturer": "Novartis", "region": "Europe" },
      { "name": "Actifed Plus", "form": "Tablet / Caplet", "strengths": "Paracetamol 500 mg + Chlorpheniramine 2 mg + Pseudoephedrine 30 mg", "manufacturer": "McNeil", "region": "Global" },
      { "name": "Sudafed Plus Sinus", "form": "Caplet", "strengths": "Paracetamol 500 mg + Pseudoephedrine 30 mg + Chlorpheniramine 2 mg", "manufacturer": "Pfizer", "region": "UK" }
    ],
    "interactions": [
      { "drugClass": "MAOIs", "effect": "Hypertensive crisis; contraindicated within 14 days", "severity": "Major" },
      { "drugClass": "CNS Depressants", "effect": "Additive sedation due to chlorpheniramine", "severity": "Moderate" },
      { "drugClass": "Beta-Blockers", "effect": "Reduced pseudoephedrine efficacy", "severity": "Moderate" },
      { "drugClass": "Anticholinergics", "effect": "Additive anticholinergic effects (chlorpheniramine)", "severity": "Moderate" },
      { "drugClass": "Warfarin", "effect": "Increased INR with high-dose paracetamol", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Paracetamol hepatotoxicity; additive sedation", "severity": "Major" }
    ],
    "warning": "Avoid in uncontrolled hypertension, hyperthyroidism, BPH, narrow-angle glaucoma, and with MAOIs; may cause sedation and impaired driving; pseudoephedrine monitored for methamphetamine production.",
    "subCategoryId": "combination-analgesics"
  },
  {
    "id": "paracetamol-diclofenac",
    "categoryId": "analgesics",
    "genericName": "Paracetamol + Diclofenac",
    "brandNames": "Combifenac, Diclofenac Plus",
    "description": "A fixed-dose combination of a non-opioid analgesic and an NSAID providing potent multimodal analgesia for moderate to severe acute pain with enhanced anti-inflammatory effect.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Acute moderate to severe pain with inflammation",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "50/50 mg or 75/50 mg 1 tab q8-12h", "sub": "Max 200 mg diclofenac/3000 mg paracetamol per 24h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30-60 minutes", "sub": "Half-life 1-2 hours (diclofenac); 2-4h (paracetamol)" },
      { "label": "CLINICAL INDICATIONS", "value": "Post-operative pain, acute musculoskeletal pain, dental pain, renal colic", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Combination allows lower doses of each component with additive efficacy; avoid other NSAIDs", "sub": "Contraindicated in active GI bleeding, recent CABG, severe renal impairment" }
    ],
    "brandTable": [
      { "name": "Combifenac", "form": "Tablet", "strengths": "Diclofenac 50 mg + Paracetamol 500 mg", "manufacturer": "Various", "region": "India" },
      { "name": "Diclofenac Plus", "form": "Tablet", "strengths": "Diclofenac 50 mg + Paracetamol 500 mg", "manufacturer": "Various", "region": "Global" },
      { "name": "Dicloplus", "form": "Tablet", "strengths": "Diclofenac 75 mg + Paracetamol 500 mg", "manufacturer": "Various", "region": "India" },
      { "name": "Difena-Plus", "form": "Tablet", "strengths": "Diclofenac 50 mg + Paracetamol 500 mg", "manufacturer": "Various", "region": "Pakistan" },
      { "name": "Voltaren Plus", "form": "Tablet", "strengths": "Diclofenac 50 mg + Paracetamol 500 mg", "manufacturer": "GSK", "region": "Europe" }
    ],
    "interactions": [
      { "drugClass": "Anticoagulants (Warfarin)", "effect": "Increased bleeding risk due to NSAID antiplatelet effect", "severity": "Major" },
      { "drugClass": "Other NSAIDs (including Aspirin)", "effect": "Additive GI bleeding and cardiovascular risk", "severity": "Major" },
      { "drugClass": "Lithium", "effect": "Increased lithium levels due to reduced renal clearance", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate toxicity", "severity": "Moderate" },
      { "drugClass": "ACE Inhibitors", "effect": "Reduced antihypertensive efficacy; increased renal impairment risk", "severity": "Moderate" },
      { "drugClass": "Alcohol", "effect": "Paracetamol hepatotoxicity; increased GI bleeding risk", "severity": "Major" }
    ],
    "warning": "Avoid in active GI bleeding, peptic ulcer disease, recent CABG, severe renal or hepatic impairment; caution in elderly and patients with cardiovascular risk factors.",
    "subCategoryId": "combination-analgesics"
  },
  {
    "id": "ketamine",
    "categoryId": "analgesics",
    "genericName": "Ketamine",
    "brandNames": "Ketalar, Ketanest, Spravato",
    "description": "An NMDA receptor antagonist that provides dissociative anesthesia and potent analgesia at sub-anesthetic doses, particularly effective for refractory pain and opioid-tolerant patients.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Refractory pain, opioid-tolerant acute pain, complex regional pain syndrome",
    "dosageForm": "IV/IM/Nasal",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "Analgesic: 0.1-0.5 mg/kg IV; Anesthetic: 1-2 mg/kg IV; Nasal: 10-50 mg spray", "sub": "Titrate to effect; infusion rates 0.1-0.5 mg/kg/h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30 sec IV, 3-5 min IM, 5-10 min nasal", "sub": "Half-life 2-4 hours (ketamine); 2.5h (norketamine metabolite)" },
      { "label": "CLINICAL INDICATIONS", "value": "Procedural sedation, refractory pain, CRPS, opioid-sparing analgesia, depression", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Sub-anesthetic doses provide analgesia without respiratory depression; risk of emergence phenomena and urological toxicity", "sub": "Contraindicated in uncontrolled hypertension and psychosis" }
    ],
    "brandTable": [
      { "name": "Ketalar", "form": "Injection 10, 50, 100 mg/mL", "strengths": "10 mg/mL, 50 mg/mL, 100 mg/mL", "manufacturer": "Pfizer", "region": "Global" },
      { "name": "Ketanest", "form": "Injection 5, 25, 50 mg/mL", "strengths": "5, 25, 50 mg/mL", "manufacturer": "Pfizer", "region": "Europe" },
      { "name": "Spravato", "form": "Nasal Spray", "strengths": "28 mg/spray (esketamine)", "manufacturer": "Janssen", "region": "USA" },
      { "name": "KetaVial", "form": "Injection Vial", "strengths": "50 mg/mL, 100 mg/mL", "manufacturer": "Various", "region": "Global" },
      { "name": "Ketamine HCl", "form": "Generic Injection / Nasal Compounded", "strengths": "Various", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "CNS Depressants", "effect": "Additive sedation and respiratory depression", "severity": "Major" },
      { "drugClass": "Sympathomimetics", "effect": "Additive hypertension and tachycardia", "severity": "Moderate" },
      { "drugClass": "MAOIs", "effect": "Increased hypertensive response to ketamine", "severity": "Moderate" },
      { "drugClass": "Thyroid Hormones", "effect": "Increased risk of hypertension and tachycardia", "severity": "Moderate" },
      { "drugClass": "CYP3A4 Inhibitors", "effect": "Increased ketamine levels", "severity": "Moderate" },
      { "drugClass": "Benzodiazepines", "effect": "Reduced emergence reactions but may prolong recovery", "severity": "Moderate" }
    ],
    "warning": "Risk of emergence reactions (hallucinations, confusion); monitor for urological toxicity with chronic use; contraindicated in uncontrolled hypertension, severe CAD, increased intracranial pressure, and psychosis.",
    "subCategoryId": "other-analgesics"
  },
  {
    "id": "cannabinoids",
    "categoryId": "analgesics",
    "genericName": "Cannabinoids (Dronabinol, Nabilone)",
    "brandNames": "Marinol, Syndros, Cesamet, Sativex",
    "description": "Synthetic and plant-derived cannabinoid receptor (CB1/CB2) agonists that modulate nociceptive processing through the endocannabinoid system for chronic and neuropathic pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Chemotherapy-induced nausea, refractory neuropathic pain, spasticity pain",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "Dronabinol 2.5-10 mg BID; Nabilone 0.5-1 mg BID; Sativex 1-8 sprays/day", "sub": "Max dronabinol 20 mg/day; max nabilone 6 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30-60 min oral, 15-30 min oromucosal", "sub": "Half-life 25-36h (dronabinol); 2h (nabilone); variable terminal" },
      { "label": "CLINICAL INDICATIONS", "value": "Neuropathic pain, chemotherapy nausea, spasticity in MS, anorexia in cachexia", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Dronabinol is synthetic THC; Sativex is nabiximols (THC+CBD); psychoactive effects limit tolerability", "sub": "Differentiate from medical cannabis; individualize dosing" }
    ],
    "brandTable": [
      { "name": "Marinol", "form": "Capsule 2.5, 5, 10 mg", "strengths": "2.5 mg, 5 mg, 10 mg", "manufacturer": "AbbVie", "region": "USA" },
      { "name": "Syndros", "form": "Oral Solution 5 mg/mL", "strengths": "5 mg/mL", "manufacturer": "Insys", "region": "USA" },
      { "name": "Cesamet", "form": "Capsule 0.5, 1 mg", "strengths": "0.5 mg, 1 mg", "manufacturer": "Meda", "region": "USA" },
      { "name": "Sativex", "form": "Oromucosal Spray", "strengths": "THC 2.7 mg + CBD 2.5 mg per spray", "manufacturer": "GW Pharma", "region": "Europe" },
      { "name": "Bedrocan (Medical Cannabis)", "form": "Dried Flower / Oil", "strengths": "22% THC (standardized strain)", "manufacturer": "Bedrocan", "region": "Netherlands" }
    ],
    "interactions": [
      { "drugClass": "CNS Depressants", "effect": "Additive sedation, cognitive impairment, psychomotor effects", "severity": "Major" },
      { "drugClass": "CYP3A4 Inhibitors", "effect": "Increased cannabinoid levels and psychoactive effects", "severity": "Moderate" },
      { "drugClass": "CYP3A4 Inducers", "effect": "Reduced cannabinoid efficacy", "severity": "Moderate" },
      { "drugClass": "Anticoagulants (Warfarin)", "effect": "Potential INR increase (CBD component inhibits CYP2C9)", "severity": "Moderate" },
      { "drugClass": "SSRIs/SNRIs", "effect": "Additive serotonin effects; theoretical serotonin syndrome risk", "severity": "Moderate" },
      { "drugClass": "Anticholinergics", "effect": "Additive cognitive impairment and tachycardia", "severity": "Moderate" }
    ],
    "warning": "Psychoactive effects (dysphoria, paranoia, cognitive impairment); risk of dependence and withdrawal; avoid in history of schizophrenia or bipolar disorder; monitor for falls in elderly.",
    "subCategoryId": "other-analgesics"
  },
  {
    "id": "palmitoylethanolamide",
    "categoryId": "analgesics",
    "genericName": "Palmitoylethanolamide (PEA)",
    "brandNames": "Normast, PeaPure, Levagen",
    "description": "An endogenous fatty acid amide that acts as a peroxisome proliferator-activated receptor alpha (PPAR-alpha) agonist and mast cell stabilizer for chronic neuropathic pain modulation.",
    "status": "OTC",
    "isCommonlyPrescribed": true,
    "isRxOnly": false,
    "isOTCAndRx": true,
    "primaryIndication": "Neuropathic and chronic pain",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "300-600 mg daily in 1-2 divided doses; micronized form 600 mg BID", "sub": "Max 1200 mg/day" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 2-4 weeks for full analgesic effect", "sub": "Half-life 4-6 hours" },
      { "label": "CLINICAL INDICATIONS", "value": "Chronic neuropathic pain, sciatica, fibromyalgia, CRPS, pelvic pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Excellent safety profile; no known drug interactions; ultramicronized form has superior bioavailability", "sub": "May be used as add-on therapy with conventional analgesics" }
    ],
    "brandTable": [
      { "name": "Normast", "form": "Tablet 300, 600 mg / Chewable 200 mg", "strengths": "300 mg, 600 mg", "manufacturer": "Epitech", "region": "Italy" },
      { "name": "PeaPure", "form": "Capsule 400, 600 mg", "strengths": "400 mg, 600 mg", "manufacturer": "JP Plus", "region": "USA" },
      { "name": "Levagen", "form": "Capsule 350, 600 mg", "strengths": "350 mg, 600 mg", "manufacturer": "Gencor", "region": "Global" },
      { "name": "PeaVera", "form": "Powder / Capsule", "strengths": "400 mg, 600 mg", "manufacturer": "Various", "region": "Europe" },
      { "name": "Visadron PEA", "form": "Ophthalmic Drops (for dry eye)", "strengths": "PEA 0.1%", "manufacturer": "Various", "region": "Italy" }
    ],
    "interactions": [
      { "drugClass": "NSAIDs", "effect": "Potential additive anti-inflammatory effect; no known adverse interaction", "severity": "Minor" },
      { "drugClass": "Opioids", "effect": "Potential opioid-sparing effect; no pharmacokinetic interaction", "severity": "Minor" },
      { "drugClass": "Anticoagulants", "effect": "No clinically significant interaction reported", "severity": "Minor" },
      { "drugClass": "Antiepileptics (Gabapentinoids)", "effect": "Potential additive analgesic benefit", "severity": "Minor" },
      { "drugClass": "Antidepressants", "effect": "No known interaction; potential additive benefit in chronic pain", "severity": "Minor" },
      { "drugClass": "Other Supplements", "effect": "No known interactions with dietary supplements", "severity": "Minor" }
    ],
    "warning": "Generally well tolerated with excellent safety profile; may cause mild GI upset initially; no known contraindications; does not cause dependence or tolerance; first-line nutraceutical for neuropathic pain.",
    "subCategoryId": "other-analgesics"
  },
  {
    "id": "clonidine-analgesic",
    "categoryId": "analgesics",
    "genericName": "Clonidine (Analgesic)",
    "brandNames": "Catapres, Duraclon, Dixarit",
    "description": "A centrally-acting alpha-2 adrenergic agonist that reduces sympathetic outflow and provides adjuvant analgesia for neuropathic pain through spinal and supraspinal mechanisms.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Neuropathic pain, adjuvant analgesic",
    "dosageForm": "Oral/Transdermal",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "0.1-0.3 mg oral BID-TID; Transdermal 0.1-0.3 mg/24h weekly patch", "sub": "Max 0.6 mg/day (oral); max 0.3 mg/24h patch" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 30-60 min oral, 2-3 days transdermal", "sub": "Half-life 12-16 hours (oral); 20h (transdermal)" },
      { "label": "CLINICAL INDICATIONS", "value": "Neuropathic pain, cancer pain (epidural), opioid withdrawal, diabetic neuropathy", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Epidural clonidine (Duraclon) for severe cancer pain; transdermal provides steady delivery", "sub": "Abrupt discontinuation causes rebound hypertension" }
    ],
    "brandTable": [
      { "name": "Catapres", "form": "Tablet 0.1, 0.2, 0.3 mg", "strengths": "0.1 mg, 0.2 mg, 0.3 mg", "manufacturer": "Boehringer Ingelheim", "region": "USA" },
      { "name": "Duraclon", "form": "Epidural Injection", "strengths": "100 mcg/mL, 500 mcg/mL", "manufacturer": "Mylan", "region": "USA" },
      { "name": "Dixarit", "form": "Tablet 0.025 mg", "strengths": "0.025 mg", "manufacturer": "Novartis", "region": "UK" },
      { "name": "Catapres-TTS", "form": "Transdermal Patch", "strengths": "0.1, 0.2, 0.3 mg/24h", "manufacturer": "Boehringer Ingelheim", "region": "USA" },
      { "name": "Kapvay", "form": "ER Tablet 0.1 mg", "strengths": "0.1 mg extended-release", "manufacturer": "Shionogi", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "Beta-Blockers", "effect": "Additive bradycardia; severe rebound hypertension with propranolol withdrawal", "severity": "Major" },
      { "drugClass": "CNS Depressants", "effect": "Additive sedation and hypotension", "severity": "Moderate" },
      { "drugClass": "Calcium Channel Blockers", "effect": "Additive negative chronotropic effects", "severity": "Moderate" },
      { "drugClass": "Tricyclic Antidepressants", "effect": "Reduced clonidine efficacy; increased hypertensive response with abrupt clonidine withdrawal", "severity": "Moderate" },
      { "drugClass": "MAOIs", "effect": "Reduced clonidine efficacy", "severity": "Moderate" },
      { "drugClass": "Digoxin", "effect": "Additive bradycardia risk", "severity": "Moderate" }
    ],
    "warning": "Rebound hypertension and withdrawal symptoms upon abrupt discontinuation; taper over 2-4 days; contraindicated in severe bradycardia, sick sinus syndrome, and second/third-degree AV block.",
    "subCategoryId": "other-analgesics"
  },
  {
    "id": "dexmedetomidine",
    "categoryId": "analgesics",
    "genericName": "Dexmedetomidine",
    "brandNames": "Precedex",
    "description": "A highly selective alpha-2 adrenergic agonist that provides sedation, anxiolysis, and opioid-sparing analgesia without significant respiratory depression for perioperative and ICU use.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "ICU sedation, perioperative analgesia, procedural sedation",
    "dosageForm": "IV Infusion",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "Loading 1 mcg/kg IV over 10 min; maintenance 0.2-0.7 mcg/kg/h", "sub": "Max 1.5 mcg/kg/h; reduce in hepatic impairment" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 5-10 min (loading dose)", "sub": "Half-life 2 hours (distribution); 3h (terminal)" },
      { "label": "CLINICAL INDICATIONS", "value": "ICU sedation, intubated/non-intubated patients, awake craniotomy, opioid-sparing perioperative", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Unique sedative with rousability; minimal respiratory depression; bradycardia and hypotension are dose-limiting", "sub": "Avoid loading dose in elderly and hemodynamically unstable patients" }
    ],
    "brandTable": [
      { "name": "Precedex", "form": "IV Solution 100 mcg/mL, 200 mcg/50 mL", "strengths": "100 mcg/mL (2 mL vial); 200 mcg/50 mL bag", "manufacturer": "Pfizer", "region": "Global" },
      { "name": "Dexmedetomidine HCl", "form": "Generic IV Solution", "strengths": "100 mcg/mL, 200 mcg/50 mL, 400 mcg/100 mL", "manufacturer": "Various", "region": "Global" },
      { "name": "Dexdor", "form": "IV Solution 100 mcg/mL", "strengths": "100 mcg/mL", "manufacturer": "Orion Pharma", "region": "Europe" },
      { "name": "Precedex Premix", "form": "Premixed IV Bag", "strengths": "200 mcg/50 mL, 400 mcg/100 mL", "manufacturer": "Pfizer", "region": "USA" },
      { "name": "Igalmi", "form": "Sublingual Film (for agitation)", "strengths": "120, 180 mcg sublingual", "manufacturer": "BioXcel", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "CNS Depressants (Opioids, Benzodiazepines)", "effect": "Additive sedation and bradycardia; reduced opioid requirements", "severity": "Moderate" },
      { "drugClass": "Vasodilators/Antihypertensives", "effect": "Additive hypotension and bradycardia", "severity": "Moderate" },
      { "drugClass": "Beta-Blockers", "effect": "Additive bradycardia; risk of profound heart rate slowing", "severity": "Moderate" },
      { "drugClass": "Calcium Channel Blockers", "effect": "Additive negative chronotropic effects", "severity": "Moderate" },
      { "drugClass": "Digoxin", "effect": "Additive bradycardia", "severity": "Moderate" },
      { "drugClass": "Neuromuscular Blockers", "effect": "No direct interaction; may potentiate vagal responses", "severity": "Minor" }
    ],
    "warning": "Risk of bradycardia and hypotension, especially with loading dose; avoid in advanced heart block, severe bradycardia, and uncontrolled hypotension; reduce dose in hepatic impairment; monitor hemodynamics continuously.",
    "subCategoryId": "other-analgesics"
  },
  {
    "id": "nitrous-oxide",
    "categoryId": "analgesics",
    "genericName": "Nitrous Oxide",
    "brandNames": "Entonox, Nitronox",
    "description": "An inhaled gas anesthetic that provides rapid-onset, short-duration analgesia and anxiolysis through NMDA receptor antagonism and opioid system modulation for procedural pain.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Procedural analgesia, dental pain, labor pain, minor surgical procedures",
    "dosageForm": "Inhalation Gas",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "50% N2O + 50% O2 via demand valve/mask; titrate to effect", "sub": "Max 70% N2O (minimum 30% O2)" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 2-5 minutes", "sub": "Half-life 5 minutes (rapid pulmonary elimination)" },
      { "label": "CLINICAL INDICATIONS", "value": "Procedural analgesia, dental procedures, labor analgesia, minor emergency procedures", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Self-administered by patient (demand valve); rapid onset/offset; no IV access needed", "sub": "Chronic exposure risk (healthcare workers); scavenging system required" }
    ],
    "brandTable": [
      { "name": "Entonox", "form": "Compressed Gas Cylinder", "strengths": "50% N2O + 50% O2 premixed", "manufacturer": "BOC Healthcare", "region": "UK" },
      { "name": "Nitronox", "form": "Gas Cylinder / In-House Pipeline", "strengths": "50% N2O + 50% O2", "manufacturer": "Porter Instrument", "region": "USA" },
      { "name": "Nitrous Oxide Medical", "form": "Bulk Liquid/Gas", "strengths": "100% N2O (requires mixing)", "manufacturer": "Air Liquide", "region": "Global" },
      { "name": "Laughing Gas", "form": "Dental Cylinder", "strengths": "100% N2O (dental use with O2 mixer)", "manufacturer": "Various", "region": "Global" },
      { "name": "Relivion N2O", "form": "Portable Delivery System", "strengths": "50% N2O + 50% O2", "manufacturer": "Various", "region": "Europe" }
    ],
    "interactions": [
      { "drugClass": "CNS Depressants", "effect": "Additive sedation and respiratory depression", "severity": "Major" },
      { "drugClass": "Opioids", "effect": "Enhanced analgesic effect; possible deeper sedation", "severity": "Moderate" },
      { "drugClass": "Methotrexate", "effect": "Increased methotrexate toxicity (N2O inhibits methionine synthase)", "severity": "Moderate" },
      { "drugClass": "Folate Antagonists", "effect": "Additive impairment of folate metabolism; theoretical risk", "severity": "Moderate" },
      { "drugClass": "Vitamin B12 Deficiency", "effect": "Exacerbation of deficiency; megaloblastic anemia risk with prolonged use", "severity": "Moderate" },
      { "drugClass": "Pneumothorax / Air Trapping", "effect": "Expansion of air-filled spaces (pneumothorax, bowel obstruction)", "severity": "Major" }
    ],
    "warning": "Contraindicated in pneumothorax, bowel obstruction, increased ICP, decompression sickness, and vitamin B12 deficiency; chronic occupational exposure requires scavenging; pregnancy caution (1st trimester).",
    "subCategoryId": "other-analgesics"
  },
  {
    "id": "magnesium-analgesic",
    "categoryId": "analgesics",
    "genericName": "Magnesium (Analgesic)",
    "brandNames": "Magnesium Sulfate",
    "description": "An NMDA receptor antagonist and voltage-gated calcium channel blocker that provides opioid-sparing analgesia, particularly effective in perioperative and migraine pain management.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Acute pain, migraine, perioperative",
    "dosageForm": "IV Infusion",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "1-4 g IV (as MgSO4) over 15-60 min for acute pain/migraine", "sub": "Max 5 g per dose; infusion rate max 2 g/h" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 5-10 min IV", "sub": "Half-life 4 hours (normal renal function)" },
      { "label": "CLINICAL INDICATIONS", "value": "Acute migraine (status migrainosus), perioperative analgesia, eclampsia prevention/treatment", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Monitor for hypermagnesemia (loss of reflexes, respiratory depression); renal function determines dosing", "sub": "Calcium gluconate as antidote for magnesium toxicity" }
    ],
    "brandTable": [
      { "name": "Magnesium Sulfate", "form": "IV Solution 20%, 50% / Pre-mixed Bags", "strengths": "1 g/10 mL, 2 g/50 mL, 4 g/100 mL", "manufacturer": "Various", "region": "Global" },
      { "name": "MgSO4 Injection", "form": "Ampule / Vial / Minibag", "strengths": "500 mg/mL, 125 mg/mL", "manufacturer": "Fresenius Kabi", "region": "Global" },
      { "name": "Magnesium Sulfate USP", "form": "Injection Solution", "strengths": "1 g/2 mL (50%), 1 g/10 mL (10%)", "manufacturer": "Hospira", "region": "USA" },
      { "name": "Mag-Sulfate", "form": "IV Bag / Vial", "strengths": "Various concentrations", "manufacturer": "Various", "region": "Global" },
      { "name": "Magnesium (Oral supplement)", "form": "Tablet / Capsule / Powder", "strengths": "100-500 mg elemental magnesium", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Calcium Channel Blockers", "effect": "Additive hypotension and neuromuscular blockade", "severity": "Moderate" },
      { "drugClass": "Neuromuscular Blockers", "effect": "Prolonged and enhanced neuromuscular blockade", "severity": "Major" },
      { "drugClass": "Aminoglycosides", "effect": "Additive neuromuscular blockade", "severity": "Moderate" },
      { "drugClass": "Loop Diuretics", "effect": "Increased magnesium excretion; reduced efficacy", "severity": "Moderate" },
      { "drugClass": "CNS Depressants", "effect": "Additive sedation", "severity": "Moderate" },
      { "drugClass": "Potassium-Sparing Diuretics", "effect": "Increased risk of hypermagnesemia", "severity": "Moderate" }
    ],
    "warning": "Monitor for loss of deep tendon reflexes (first sign of hypermagnesemia), respiratory depression, and cardiac conduction abnormalities; contraindicated in heart block and severe renal impairment (CrCl under 30 mL/min).",
    "subCategoryId": "other-analgesics"
  },
  {
    "id": "botulinum-toxin-pain",
    "categoryId": "analgesics",
    "genericName": "Botulinum Toxin (Pain)",
    "brandNames": "Botox, Dysport, Xeomin",
    "description": "A neurotoxin that inhibits acetylcholine release at neuromuscular junctions and blocks substance P, CGRP, and glutamate release to provide prolonged analgesia for chronic pain conditions.",
    "status": "Rx Only",
    "isCommonlyPrescribed": true,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Chronic migraine, spasticity, myofascial pain",
    "dosageForm": "IM Injection",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "Chronic migraine: 155-195 U IM across 31-39 sites; Spasticity: 200-400 U; Cervical dystonia: 200-240 U", "sub": "Max 400 U per treatment; repeat q12 weeks" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 1-2 weeks; peak effect 4-6 weeks", "sub": "Half-life 12 weeks (duration of clinical effect)" },
      { "label": "CLINICAL INDICATIONS", "value": "Chronic migraine (prophylaxis), cervical dystonia, spasticity, myofascial pain, trigeminal neuralgia", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Dosing units are product-specific and NOT interchangeable between brands", "sub": "Contraindicated in neuromuscular disorders (MG, ALS, Lambert-Eaton)" }
    ],
    "brandTable": [
      { "name": "Botox", "form": "Injection Vial (Powder)", "strengths": "50, 100, 200 U/vial (onabotulinumtoxinA)", "manufacturer": "Allergan", "region": "Global" },
      { "name": "Dysport", "form": "Injection Vial (Powder)", "strengths": "300, 500 U/vial (abobotulinumtoxinA)", "manufacturer": "Ipsen", "region": "Global" },
      { "name": "Xeomin", "form": "Injection Vial (Powder)", "strengths": "50, 100 U/vial (incobotulinumtoxinA)", "manufacturer": "Merz", "region": "Global" },
      { "name": "Myobloc", "form": "Injection Solution (Liquid)", "strengths": "2500, 5000 U/mL (rimabotulinumtoxinB)", "manufacturer": "Solstice", "region": "USA" },
      { "name": "Jeuveau", "form": "Injection Vial (Powder)", "strengths": "100 U/vial (prabotulinumtoxinA)", "manufacturer": "Evolus", "region": "USA" }
    ],
    "interactions": [
      { "drugClass": "Aminoglycosides", "effect": "Enhanced neuromuscular blockade; additively increased weakness", "severity": "Major" },
      { "drugClass": "Neuromuscular Blockers", "effect": "Prolonged and enhanced paralysis", "severity": "Major" },
      { "drugClass": "Other Botulinum Toxins", "effect": "Additive neuromuscular effects; risk of systemic toxicity with concurrent use", "severity": "Major" },
      { "drugClass": "Anticholinergics", "effect": "Additive anticholinergic side effects", "severity": "Moderate" },
      { "drugClass": "Quinidine", "effect": "Enhanced neuromuscular blockade", "severity": "Moderate" },
      { "drugClass": "Calcium Channel Blockers", "effect": "Potential effect on neurotransmitter release", "severity": "Minor" }
    ],
    "warning": "Units are not interchangeable between products; risk of toxin spread causing dysphagia, aspiration, and respiratory compromise; contraindicated in neuromuscular junction disorders and infection at injection site.",
    "subCategoryId": "other-analgesics"
  },
  {
    "id": "acetyl-l-carnitine",
    "categoryId": "analgesics",
    "genericName": "Acetyl-L-Carnitine",
    "brandNames": "ALCAR, Carnitene, Neurocarnitine",
    "description": "A mitochondrial metabolite that enhances nerve energy metabolism and promotes nerve regeneration, reducing neuropathic pain through improved neuronal mitochondrial function and antioxidant effects.",
    "status": "OTC",
    "isCommonlyPrescribed": true,
    "isRxOnly": false,
    "isOTCAndRx": true,
    "primaryIndication": "Diabetic neuropathy, neuropathic pain",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "500-2000 mg daily in 2-3 divided doses", "sub": "Max 3000 mg/day; reduce if GI intolerance" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 4-8 weeks for clinical improvement", "sub": "Half-life 4 hours (ALCAR); 24h (acetylcarnitine esters)" },
      { "label": "CLINICAL INDICATIONS", "value": "Diabetic peripheral neuropathy, antiretroviral toxic neuropathy, chemotherapy-induced neuropathy", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Dose-dependent GI side effects (nausea, diarrhea); morning dosing preferred for mild stimulant effect", "sub": "May cause fishy body odor at high doses" }
    ],
    "brandTable": [
      { "name": "ALCAR", "form": "Capsule 500, 750, 1000 mg / Powder", "strengths": "500 mg, 750 mg, 1000 mg", "manufacturer": "Various", "region": "Global" },
      { "name": "Carnitene", "form": "Tablet 330 mg / Oral Solution 1 g/10 mL", "strengths": "330 mg, 1 g/10 mL", "manufacturer": "Sigma-Tau", "region": "Italy" },
      { "name": "Neurocarnitine", "form": "Capsule 500 mg (with B vitamins)", "strengths": "ALCAR 500 mg + B-complex", "manufacturer": "Various", "region": "Europe" },
      { "name": "Acetyl-L-Carnitine Arginate", "form": "Capsule / Tablet", "strengths": "500 mg, 750 mg", "manufacturer": "Swanson", "region": "USA" },
      { "name": "GeroNerv ALC", "form": "Tablet 500 mg", "strengths": "500 mg", "manufacturer": "Various", "region": "Europe" }
    ],
    "interactions": [
      { "drugClass": "Anticoagulants (Warfarin)", "effect": "Theoretical increased INR (monitor when starting ALCAR)", "severity": "Moderate" },
      { "drugClass": "Thyroid Hormones", "effect": "Potential enhanced thyroid effect; monitor thyroid function", "severity": "Minor" },
      { "drugClass": "Valproic Acid", "effect": "May correct valproate-induced carnitine deficiency", "severity": "Beneficial" },
      { "drugClass": "Chemotherapeutic Agents (Cisplatin)", "effect": "May reduce chemotherapy-induced neuropathy (no interference with efficacy)", "severity": "Beneficial" },
      { "drugClass": "Antidiabetic Agents", "effect": "May improve insulin sensitivity (beneficial interaction)", "severity": "Minor" },
      { "drugClass": "CNS Stimulants", "effect": "Theoretical additive stimulant effect at high doses", "severity": "Minor" }
    ],
    "warning": "Generally well tolerated; may cause GI upset at high doses; fishy body odor in some patients; caution in seizure disorder (theoretical threshold lowering at very high doses); no known dependence or tolerance.",
    "subCategoryId": "other-analgesics"
  },
  {
    "id": "alpha-lipoic-acid",
    "categoryId": "analgesics",
    "genericName": "Alpha-Lipoic Acid",
    "brandNames": "Thioctacid, AlphaLipo, Thiotab",
    "description": "A potent antioxidant that scavenges free radicals, chelates metal ions, and improves insulin sensitivity to reduce oxidative stress-mediated neuropathic pain in diabetic neuropathy.",
    "status": "OTC",
    "isCommonlyPrescribed": true,
    "isRxOnly": false,
    "isOTCAndRx": true,
    "primaryIndication": "Diabetic neuropathy",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "300-600 mg daily; 600 mg IV (Germany) for acute neuropathy symptoms", "sub": "Max 1800 mg/day (oral); max 600 mg/day IV" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 3-4 weeks for symptomatic improvement", "sub": "Half-life 30 minutes (R-form); 20h (metabolites)" },
      { "label": "CLINICAL INDICATIONS", "value": "Diabetic peripheral neuropathy, metabolic syndrome, neuropathic pain", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "R-enantiomer has higher bioavailability; take on empty stomach for best absorption; may lower blood glucose", "sub": "Monitor blood glucose in diabetic patients on medications" }
    ],
    "brandTable": [
      { "name": "Thioctacid", "form": "Tablet 300, 600 mg / IV Injection", "strengths": "300 mg, 600 mg", "manufacturer": "MEDA Pharma", "region": "Europe" },
      { "name": "AlphaLipo", "form": "Capsule 100, 200, 300, 600 mg", "strengths": "100-600 mg", "manufacturer": "Various", "region": "Global" },
      { "name": "Thiotab", "form": "Tablet 300, 600 mg", "strengths": "300 mg, 600 mg", "manufacturer": "Various", "region": "India" },
      { "name": "ALA R-Lipoic Acid", "form": "Capsule 100, 200, 300 mg", "strengths": "100 mg, 200 mg, 300 mg", "manufacturer": "Jarrow Formulas", "region": "USA" },
      { "name": "Berlithion", "form": "Tablet 300 mg / IV Ampule 300 mg", "strengths": "300 mg", "manufacturer": "Berlin-Chemie", "region": "Europe" }
    ],
    "interactions": [
      { "drugClass": "Antidiabetic Agents (Insulin, Sulfonylureas)", "effect": "Enhanced blood glucose lowering; monitor glucose closely", "severity": "Moderate" },
      { "drugClass": "Antineoplastic Agents (Cisplatin)", "effect": "Theoretical reduction of chemotherapy efficacy (antioxidant concern)", "severity": "Moderate" },
      { "drugClass": "Thyroid Hormones", "effect": "Theoretical interference; monitor TSH", "severity": "Minor" },
      { "drugClass": "Antacids", "effect": "Reduced ALA absorption (take 1h before or 2h after)", "severity": "Minor" },
      { "drugClass": "Iron/Calcium/Magnesium Supplements", "effect": "Chelation of minerals; take ALA separately", "severity": "Minor" },
      { "drugClass": "Alcohol", "effect": "Reduced ALA efficacy; chronic alcohol depletes endogenous ALA", "severity": "Minor" }
    ],
    "warning": "May cause skin rash, GI upset, and hypoglycemia in diabetic patients on medications; generally well tolerated; rare cases of insulin autoimmune syndrome reported; take on empty stomach; avoid in thiamine deficiency.",
    "subCategoryId": "other-analgesics"
  },
  {
    "id": "memantine",
    "categoryId": "analgesics",
    "genericName": "Memantine",
    "brandNames": "Namenda, Ebixa, Axura",
    "description": "An NMDA receptor antagonist that modulates glutamatergic neurotransmission, providing adjuvant analgesia for neuropathic pain by reducing central sensitization and wind-up phenomena.",
    "status": "Rx Only",
    "isCommonlyPrescribed": false,
    "isRxOnly": true,
    "isOTCAndRx": false,
    "primaryIndication": "Neuropathic pain",
    "dosageForm": "Oral",
    "stats": [
      { "label": "STANDARD ADULT DOSE", "value": "5 mg/day initially, titrate by 5 mg weekly to 20 mg/day", "sub": "Max 28 mg/day; reduce dose in severe renal impairment (CrCl 5-29: 10 mg/day)" },
      { "label": "ONSET / HALF-LIFE", "value": "Onset 4-6 weeks for analgesic effect", "sub": "Half-life 60-80 hours" },
      { "label": "CLINICAL INDICATIONS", "value": "Neuropathic pain, phantom limb pain, fibromyalgia, Alzheimer disease", "sub": null },
      { "label": "SPECIAL CONSIDERATION", "value": "Slow titration minimizes side effects; renally excreted; alkaline urine (e.g., from antacids) reduces clearance", "sub": "May cause dizziness and confusion in elderly" }
    ],
    "brandTable": [
      { "name": "Namenda", "form": "Tablet 5, 10 mg / Titration Pack", "strengths": "5 mg, 10 mg", "manufacturer": "Allergan", "region": "USA" },
      { "name": "Ebixa", "form": "Tablet 10, 20 mg / Oral Drops 10 mg/g", "strengths": "10 mg, 20 mg", "manufacturer": "Lundbeck", "region": "Europe" },
      { "name": "Axura", "form": "Tablet 10, 20 mg / Oral Solution", "strengths": "10 mg, 20 mg", "manufacturer": "Merz", "region": "Europe" },
      { "name": "Namenda XR", "form": "ER Capsule 7, 14, 21, 28 mg", "strengths": "7, 14, 21, 28 mg", "manufacturer": "Allergan", "region": "USA" },
      { "name": "Memantine HCl", "form": "Generic Tablet / ER Capsule", "strengths": "5, 10 mg; 7, 14, 21, 28 mg ER", "manufacturer": "Various", "region": "Global" }
    ],
    "interactions": [
      { "drugClass": "Urinary Alkalinizers (Carbonic Anhydrase Inhibitors, NaHCO3)", "effect": "Reduced memantine clearance; increased toxicity risk", "severity": "Moderate" },
      { "drugClass": "Amantadine, Ketamine, Dextromethorphan", "effect": "Additive NMDA antagonism; increased CNS side effects", "severity": "Moderate" },
      { "drugClass": "Anticholinergics", "effect": "Combined anticholinergic burden; cognitive decline risk", "severity": "Moderate" },
      { "drugClass": "Dopamine Agonists/Levodopa", "effect": "Potential additive effects or reduced L-DOPA efficacy", "severity": "Moderate" },
      { "drugClass": "Cimetidine", "effect": "Reduced memantine clearance (weak interaction)", "severity": "Minor" },
      { "drugClass": "CYP450 Inducers/Inhibitors", "effect": "Minimal CYP450 involvement; low interaction potential", "severity": "Minor" }
    ],
    "warning": "Caution in renal impairment (reduce dose); avoid in severe hepatic impairment; may cause dizziness, headache, and confusion; titrate slowly; alkaline urine (high pH) reduces excretion; do not combine with other NMDA antagonists.",
    "subCategoryId": "other-analgesics"
  }
];
