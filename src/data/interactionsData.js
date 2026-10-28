export const interactionsData = {
  'Amitriptyline': [
    { drugClass: 'Linezolid', effect: 'Both increase serotonin levels as linezolid may increase serotonin as a result of MAO-A inhibition. If linezolid must be administered, discontinue serotonergic drug immediately and monitor for CNS toxicity. Serotonergic therapy may be resumed 24 hours after last linezolid dose or after 2 weeks of monitoring, whichever comes first.', severity: 'Major' },
    { drugClass: 'Azithromycin', effect: 'Both increase QT interval, so use caution when using amitriptyline and azithromycin concomitantly due to potential for additive effects on the QT interval and increased risk of serious cardiovascular effects.', severity: 'Major' },
    { drugClass: 'Chlorpheniramine', effect: 'Both increase sedation; use caution and monitor.', severity: 'Moderate' },
    { drugClass: 'Cimetidine', effect: 'Cimetidine increases the level or effect of amitriptyline by affecting hepatic/intestinal enzyme CYP3A4 metabolism, decreasing amitriptyline metabolism. Use caution and adjust dose if needed, or use alternative H2 antagonist such as ranitidine or famotidine.', severity: 'Moderate' },
    { drugClass: 'Dicoumarol', effect: 'Increased risk of bleeding. In patients receiving oral anticoagulant therapy, prothrombin time ratio or INR should be closely monitored with addition and withdrawal of amitriptyline.', severity: 'Moderate' },
    { drugClass: 'Guanfacine', effect: 'Decreased antihypertensive effectiveness. Blood pressure should be monitored; higher doses of guanfacine may be required.', severity: 'Moderate' }
  ],
  'Clomipramine': [
    { drugClass: 'Yohimbine', effect: 'Increased risk of hypertension due to inhibition of hepatic metabolism of yohimbine. Monitor orthostatic and sitting blood pressure.', severity: 'Major' },
    { drugClass: 'Phenindione', effect: 'Increased risk of bleeding due to decreased phenindione metabolism and increased absorption. Prothrombin time or INR should be closely monitored.', severity: 'Moderate' },
    { drugClass: 'Warfarin', effect: 'Increased risk of bleeding due to decreased warfarin metabolism and increased absorption. INR should be closely monitored; warfarin dosage adjustments may be required.', severity: 'Moderate' }
  ],
  'Citalopram': [
    { drugClass: 'Fluconazole', effect: 'Concurrent use may result in increased risk of QT-interval prolongation and serotonin syndrome. Contraindicated due to potential for additive effects on QT interval prolongation and increased risk of serious cardiac adverse events. Fluconazole inhibits CYP3A4-mediated metabolism of citalopram.', severity: 'Major' },
    { drugClass: 'Metoclopramide', effect: 'Concurrent use may result in increased risk of extrapyramidal reactions and neuroleptic malignant syndrome. Concomitant use with other drugs likely to cause EPS is contraindicated.', severity: 'Major' },
    { drugClass: 'Amphetamine', effect: 'Concurrent use of amphetamines and serotonergic agents may result in increased risk of serotonin syndrome. Initiate with lower doses and monitor patients carefully.', severity: 'Major' }
  ],
  'Paroxetine': [
    { drugClass: 'Bromopride', effect: 'Concurrent use of bromopride and drugs that cause extrapyramidal reactions may result in increased risk of extrapyramidal reactions. Contraindicated.', severity: 'Major' },
    { drugClass: 'Alfentanil', effect: 'Concurrent use of alfentanil and serotonergic agents with anticholinergic properties may result in increased risk of serotonin syndrome and paralytic ileus. Monitor carefully.', severity: 'Major' },
    { drugClass: 'Amifampridine', effect: 'Concurrent use of amifampridine and QT-interval prolonging drugs may result in increased risk of QT-interval prolongation. Contraindicated.', severity: 'Major' }
  ],
  'Sertraline': [
    { drugClass: 'Clorgyline', effect: 'Concurrent use may result in CNS toxicity or serotonin syndrome (hypertension, hyperthermia, myoclonus, mental status changes). Contraindicated. Wait at least 14 days after discontinuing a MAO inhibitor before initiating sertraline.', severity: 'Major' },
    { drugClass: 'Linezolid', effect: 'Concurrent use may result in increased risk of serotonin syndrome. Contraindicated. If urgent treatment with linezolid is necessary, discontinue sertraline and monitor for serotonin syndrome for 2 weeks.', severity: 'Major' },
    { drugClass: 'Celecoxib', effect: 'Concurrent use of NSAIDs and SSRIs may result in increased risk of bleeding. Closely monitor for signs of GI bleeding, especially in elderly and those with history of GI ulcers.', severity: 'Major' },
    { drugClass: 'Amiodarone', effect: 'Concurrent use of sertraline and QT-interval prolonging drugs may result in increased risk of QT-interval prolongation and ventricular arrhythmias. Avoid administration.', severity: 'Minor' }
  ],
  'Fluoxetine': [
    { drugClass: 'Amoxapine', effect: 'Concurrent use may result in increased risk of tricyclic antidepressant toxicity, QT prolongation and serotonin syndrome. Consider TCA dose reduction if fluoxetine is added to an existing TCA regimen.', severity: 'Major' }
  ],
  'Carbamazepine': [
    { drugClass: 'Cimetidine', effect: 'Increased concentrations of carbamazepine. Avoid combination if possible; otherwise monitor carbamazepine concentrations and decrease dose if necessary. Use alternative H2 antagonist (e.g., ranitidine).', severity: 'Major' },
    { drugClass: 'Diltiazem', effect: 'Increased concentrations of carbamazepine. Monitor carbamazepine concentrations and decrease dose if necessary.', severity: 'Major' },
    { drugClass: 'Isoniazid (INH)', effect: 'Increased risk of carbamazepine toxicity and isoniazid hepatotoxicity. Monitor liver function tests and carbamazepine concentrations.', severity: 'Major' },
    { drugClass: 'MAO Inhibitors', effect: 'Increased risk of severe adverse effects (hyperpyrexia, hyperexcitability, muscle rigidity, seizures). Avoid combination. Discontinue MAO inhibitor at least 14 days prior to starting carbamazepine.', severity: 'Major' },
    { drugClass: 'Macrolide Antibiotics', effect: 'Increased concentrations of carbamazepine. Avoid combination if possible; otherwise monitor carbamazepine concentrations and decrease dose if necessary.', severity: 'Moderate' },
    { drugClass: 'Tricyclic Antidepressants', effect: 'Increased concentrations of carbamazepine and decreased concentrations of tricyclic antidepressant. Monitor concentrations and adjust dose of one or both drugs as needed.', severity: 'Moderate' }
  ],
  'Lamotrigine': [
    { drugClass: 'Carbamazepine', effect: 'Decreased concentrations of lamotrigine and increased risk of carbamazepine toxicity. Adjust dose of lamotrigine as needed when starting, stopping, or changing dose of carbamazepine.', severity: 'Major' },
    { drugClass: 'Valproic Acid', effect: 'Increased concentrations of lamotrigine and decreased concentrations of valproic acid. Adjust dose of one or both drugs as needed.', severity: 'Major' }
  ],
  'Phenytoin': [
    { drugClass: 'Carbamazepine', effect: 'Decreased concentrations of carbamazepine and variable effects on phenytoin concentrations. Monitor both and adjust doses as needed.', severity: 'Major' },
    { drugClass: 'Cimetidine', effect: 'Increased concentrations of phenytoin. Avoid combination. Use alternative H2 antagonist (e.g., ranitidine).', severity: 'Major' },
    { drugClass: 'Amiodarone', effect: 'Increased concentrations of phenytoin and decreased concentrations of amiodarone. Monitor phenytoin concentrations and signs of toxicity. Adjust doses as needed.', severity: 'Moderate' },
    { drugClass: 'Anticoagulants', effect: 'Increased concentrations of phenytoin and increased INR and risk of bleeding. Monitor phenytoin concentrations and INR. Adjust dose of one or both drugs as needed.', severity: 'Moderate' },
    { drugClass: 'Fluconazole', effect: 'Increased concentrations of phenytoin. Decrease phenytoin dose if necessary.', severity: 'Moderate' },
    { drugClass: 'Fluoxetine', effect: 'Increased concentrations of phenytoin. Decrease phenytoin dose if necessary.', severity: 'Minor' }
  ],
  'Valproic Acid': [
    { drugClass: 'Barbiturates', effect: 'Increased concentrations of barbiturate. Increase barbiturate dose if necessary.', severity: 'Major' },
    { drugClass: 'Carbamazepine', effect: 'Decreased concentrations of valproic acid. Monitor valproic acid concentrations and seizure activity for at least a month after starting or stopping either drug.', severity: 'Major' },
    { drugClass: 'Meropenem', effect: 'Decreased valproic acid plasma concentrations and loss of anticonvulsant effect. Concomitant use not recommended. Consider alternative antibiotic if possible.', severity: 'Major' },
    { drugClass: 'Warfarin', effect: 'Increased risk of bleeding. Coagulation tests should be monitored; dosage adjustments of warfarin may be needed.', severity: 'Major' },
    { drugClass: 'Cholestyramine', effect: 'Decreased GI absorption of valproic acid. Separate administration times by at least 3 hours.', severity: 'Minor' },
    { drugClass: 'Felbamate', effect: 'Increased concentrations of valproic acid. Decrease valproic acid dose if necessary.', severity: 'Minor' },
    { drugClass: 'Salicylates', effect: 'Increased free (unbound) concentrations of valproic acid. Decrease valproic acid dose if necessary.', severity: 'Moderate' }
  ],
  'Benztropine': [
    { drugClass: 'Metoclopramide', effect: 'Concurrent use may result in diminished effectiveness of metoclopramide and the dopaminergic agent. Concomitant use should be avoided. If coadministered, monitor for decreased efficacy and worsening of extrapyramidal movements.', severity: 'Major' },
    { drugClass: 'Tiotropium', effect: 'Concurrent use may result in increased risk of anticholinergic side effects. Avoid concomitant use with other anticholinergic agents.', severity: 'Major' },
    { drugClass: 'Amantadine', effect: 'May potentiate anticholinergic-like side effects. Reduce dose of anticholinergic drug or amantadine if atropine-like side effects occur.', severity: 'Moderate' },
    { drugClass: 'Chlorpromazine', effect: 'May result in decreased phenothiazine serum concentrations and enhanced anticholinergic effects. Anticholinergics should not be used routinely with phenothiazine derivatives as prophylaxis.', severity: 'Moderate' },
    { drugClass: 'Clozapine', effect: 'May result in excessive anticholinergic effects (sedation, constipation, dry mouth). Use only when clearly indicated. Monitor for excessive anticholinergic effects.', severity: 'Moderate' },
    { drugClass: 'Haloperidol', effect: 'May result in excessive anticholinergic effects. Adjust doses or discontinue medications as needed.', severity: 'Moderate' }
  ],
  'Levodopa/Carbidopa': [
    { drugClass: 'Linezolid', effect: 'May result in hypertensive crisis. Coadministration with a nonselective MAOI, such as linezolid, is contraindicated. Discontinue linezolid at least 2 weeks prior to initiating carbidopa/levodopa.', severity: 'Major' },
    { drugClass: 'Moclobemide', effect: 'May result in hypertensive crisis. Coadministration with a nonselective MAOI is contraindicated. Discontinue moclobemide at least 2 weeks prior.', severity: 'Major' },
    { drugClass: 'Haloperidol', effect: 'May result in reduced efficacy of levodopa. Use caution and monitor patients for worsening Parkinson disease symptoms.', severity: 'Moderate' },
    { drugClass: 'Papaverine', effect: 'May result in decreased levodopa effectiveness. Monitor for loss of therapeutic response. Consider dosage increases of carbidopa/levodopa.', severity: 'Moderate' }
  ],
  'Trihexyphenidyl': [
    { drugClass: 'Metoclopramide', effect: 'Concurrent use may result in diminished effectiveness. Concomitant use should be avoided.', severity: 'Major' },
    { drugClass: 'Tiotropium', effect: 'Increased risk of anticholinergic side effects. Avoid concomitant use with other anticholinergic agents.', severity: 'Major' },
    { drugClass: 'Chlorpromazine', effect: 'May result in decreased phenothiazine serum concentrations and enhanced anticholinergic effects. Use reserved for when EPS occur.', severity: 'Moderate' },
    { drugClass: 'Haloperidol', effect: 'May result in excessive anticholinergic effects. Dosage adjustments may be required.', severity: 'Moderate' },
    { drugClass: 'Valproic Acid', effect: 'May result in decreased plasma levels of valproate sodium and loss of seizure control. Monitor valproate levels if concomitant therapy is necessary.', severity: 'Moderate' }
  ],
  'Diazepam': [
    { drugClass: 'Phenobarbital', effect: 'Increased risk of QT-interval prolongation and arrhythmia. Susceptible patients may require monitoring and ECG.', severity: 'Major' },
    { drugClass: 'Carbamazepine', effect: 'Increased risk of QT interval prolongation. Contraindicated with drugs that cause QT prolongation due to risk of serious ventricular arrhythmia.', severity: 'Major' },
    { drugClass: 'Alfentanil', effect: 'Increased risk of QT prolongation and torsades de pointes. Patients may require monitoring and ECG.', severity: 'Major' },
    { drugClass: 'Domperidone', effect: 'Increased risk of QT interval prolongation and serious ventricular arrhythmia. Patients may require monitoring and ECG.', severity: 'Major' },
    { drugClass: 'Cimetidine', effect: 'Cimetidine increases the level or effect of diazepam by affecting hepatic/intestinal enzyme CYP3A4 metabolism. Avoid or use alternate drug.', severity: 'Moderate' }
  ],
  'Ergotamine': [
    { drugClass: 'Clarithromycin', effect: 'Clarithromycin increases toxicity of ergotamine by affecting CYP3A4 metabolism. Contraindicated. Monitor for signs of increased vasospasm and ischemia.', severity: 'Major' },
    { drugClass: 'Itraconazole', effect: 'Coadministration is contraindicated due to risk of significantly increased ergot exposure and ergotism, including vasospasm leading to cerebral ischemia and/or ischemia of the extremities.', severity: 'Major' },
    { drugClass: 'Mifepristone', effect: 'Concurrent use may result in increased ergotamine exposure and risk of adverse events. Contraindicated. Wait at least 2 weeks after stopping mifepristone before initiating ergotamine.', severity: 'Major' }
  ],
  'Sumatriptan': [
    { drugClass: 'Linezolid', effect: 'Concurrent use with MAO inhibitors may result in increased risk of serotonin syndrome. Contraindicated. Wait at least 14 days after discontinuing a MAO-A inhibitor before initiating sumatriptan.', severity: 'Major' },
    { drugClass: 'Amitriptyline', effect: 'Concurrent use with tricyclic antidepressants may result in increased risk of serotonin syndrome. Symptoms may occur within minutes to hours. Discontinue sumatriptan if serotonin syndrome is suspected.', severity: 'Major' },
    { drugClass: 'Citalopram', effect: 'Concurrent use with SSRIs may result in life-threatening serotonin syndrome. Monitor closely for symptoms (restlessness, hyperthermia, hyperreflexia, incoordination).', severity: 'Major' },
    { drugClass: 'Ergotamine', effect: 'Concurrent use may result in prolonged vasospastic reactions. Contraindicated. At least 24 hours should separate use.', severity: 'Major' },
    { drugClass: 'Sertraline', effect: 'Concurrent use with SSRIs may result in life-threatening serotonin syndrome. Discuss risks with patient and monitor closely.', severity: 'Major' }
  ],
  'Zolmitriptan': [
    { drugClass: 'Alfentanil', effect: 'Concurrent use may result in increased risk of serotonin syndrome. Monitor carefully during initiation and dosage adjustment.', severity: 'Major' },
    { drugClass: 'Amphetamine', effect: 'Concurrent use may result in serotonin syndrome. Use lower doses and monitor carefully.', severity: 'Major' },
    { drugClass: 'Reboxetine', effect: 'Concurrent use with SNRIs may result in life-threatening serotonin syndrome. Discuss risks and monitor closely.', severity: 'Major' }
  ],
  'Amphetamine': [
    { drugClass: 'Iproniazid', effect: 'May result in hypertensive crisis (headache, hyperpyrexia, hypertension). Contraindicated during or within 14 days following MAOI administration.', severity: 'Major' },
    { drugClass: 'Linezolid', effect: 'May result in hypertensive crisis. Contraindicated.', severity: 'Major' },
    { drugClass: 'Phenelzine', effect: 'May result in hypertensive crisis. Contraindicated.', severity: 'Major' },
    { drugClass: 'Alfentanil', effect: 'May result in increased risk of serotonin syndrome. Carefully monitor patient.', severity: 'Major' },
    { drugClass: 'Carbamazepine', effect: 'May result in increased risk of serotonin syndrome. Initiate with lower doses and monitor carefully.', severity: 'Major' },
    { drugClass: 'Imipramine', effect: 'May result in increased risk of serotonin syndrome. Initiate with lower doses and monitor carefully.', severity: 'Major' },
    { drugClass: 'Ascorbic Acid', effect: 'May result in decreased amphetamine efficacy due to acidification of urine. Monitoring recommended.', severity: 'Moderate' }
  ],
  'Modafinil': [
    { drugClass: 'Alfentanil', effect: 'Concurrent use with CYP3A4 inducers may result in reduced alfentanil plasma concentrations. Monitor for decreased efficacy and consider increasing alfentanil dose.', severity: 'Major' },
    { drugClass: 'Guanfacine', effect: 'Concurrent use with moderate CYP3A4 inducers may decrease guanfacine exposure. Consider dose adjustments.', severity: 'Moderate' }
  ],
  'Methylphenidate': [
    { drugClass: 'Brofaromine', effect: 'Concurrent use with MAO inhibitors may result in hypertensive crisis. Contraindicated. MAO inhibitor must be discontinued for minimum 14 days.', severity: 'Major' },
    { drugClass: 'Iproniazid', effect: 'Concurrent use with MAO inhibitors may result in hypertensive crisis. Contraindicated.', severity: 'Major' },
    { drugClass: 'Bupropion', effect: 'May result in increased risk of seizure. Caution is advised. Discontinue both if seizure occurs.', severity: 'Major' },
    { drugClass: 'Donepezil', effect: 'May result in reduced seizure threshold. Use extreme caution. Begin with low initial dose.', severity: 'Major' },
    { drugClass: 'Dicoumarol', effect: 'May result in increased risk of bleeding due to inhibition of dicoumarol metabolism. Monitor INR closely.', severity: 'Moderate' },
    { drugClass: 'Fluoxetine', effect: 'May result in increased SSRI plasma concentrations. Consider decrease in SSRI dose.', severity: 'Moderate' }
  ],
  'Propranolol': [
    { drugClass: 'Clonidine', effect: 'Sinus bradycardia and withdrawal response (acute hypertension). Monitor heart rate regularly.', severity: 'Major' },
    { drugClass: 'Diltiazem', effect: 'Increased risk of hypotension, bradycardia and AV conduction disturbance. Monitor cardiac function and adjust dose of hepatically metabolized beta blockers.', severity: 'Major' },
    { drugClass: 'Epinephrine', effect: 'Hypertension, bradycardia and resistance to epinephrine in anaphylaxis. Monitor patients for severe hypertension; glucagon may be used.', severity: 'Major' },
    { drugClass: 'Mefloquine', effect: 'Increased risk of ECG abnormalities and cardiac arrest. Monitor patient ECG especially with known cardiac disease.', severity: 'Major' },
    { drugClass: 'Verapamil', effect: 'Hypotension and bradycardia. Monitor cardiac function and blood pressure.', severity: 'Major' },
    { drugClass: 'Aceclofenac and NSAIDs', effect: 'Increased blood pressure with most NSAIDs. Monitor blood pressure regularly.', severity: 'Moderate' },
    { drugClass: 'Amiodarone', effect: 'Bradycardia, hypotension, sinus arrest and AV block. Monitor heart rate.', severity: 'Moderate' },
    { drugClass: 'Cimetidine', effect: 'Bradycardia and hypotension due to decreased propranolol metabolism. Monitor cardiac function and adjust dose.', severity: 'Moderate' },
    { drugClass: 'Digitoxin and Digoxin', effect: 'Increased risk of bradycardia and possible digitoxin toxicity. Monitor heart rate and PR interval.', severity: 'Moderate' },
    { drugClass: 'Prazosin', effect: 'Exaggerated hypotensive response to first dose of alpha blocker. Initiate alpha blocker with smaller dose preferably at bedtime.', severity: 'Moderate' },
    { drugClass: 'Quinidine', effect: 'Hypotension, bradycardia, arrhythmia and heart failure. Monitor patient for interaction effects.', severity: 'Moderate' }
  ],
  'Atenolol': [
    { drugClass: 'Diltiazem', effect: 'Increased risk of hypotension, bradycardia and AV conduction disturbance. Monitor cardiac function and blood pressure; adjust dose for hepatically metabolized beta blockers.', severity: 'Major' },
    { drugClass: 'Verapamil', effect: 'Hypotension and bradycardia. Monitor cardiac function and blood pressure, especially in heart failure patients.', severity: 'Major' },
    { drugClass: 'Aceclofenac and NSAIDs', effect: 'Increased blood pressure. Monitor blood pressure regularly.', severity: 'Moderate' },
    { drugClass: 'Amiodarone', effect: 'Bradycardia, hypotension, sinus arrest and AV block. Monitor heart rate.', severity: 'Moderate' },
    { drugClass: 'Digitoxin and Digoxin', effect: 'Increased risk of bradycardia and possible digitoxin toxicity. Monitor heart rate and QT interval.', severity: 'Moderate' },
    { drugClass: 'Quinidine', effect: 'Hypotension and bradycardia. Monitor cardiac function carefully.', severity: 'Moderate' }
  ],
  'Metoprolol': [
    { drugClass: 'Diltiazem', effect: 'Increased risk of hypotension, bradycardia and AV conduction disturbance. Monitor cardiac function and blood pressure.', severity: 'Major' },
    { drugClass: 'Verapamil', effect: 'Hypotension and bradycardia. Monitor cardiac function and blood pressure.', severity: 'Major' },
    { drugClass: 'Aceclofenac and NSAIDs', effect: 'Increased blood pressure. Monitor blood pressure regularly.', severity: 'Moderate' },
    { drugClass: 'Amiodarone', effect: 'Bradycardia, hypotension, sinus arrest and AV block. Monitor heart rate.', severity: 'Moderate' },
    { drugClass: 'Digitoxin and Digoxin', effect: 'Increased risk of bradycardia and possible digitoxin toxicity. Monitor heart rate and PR interval.', severity: 'Moderate' },
    { drugClass: 'Tolbutamide', effect: 'Hyperglycemia or hypoglycemia (decrease hypoglycemia symptoms) due to altered glucose metabolism and beta blockade. Increase frequency of glucose monitoring.', severity: 'Moderate' }
  ],
  'Amlodipine': [
    { drugClass: 'Amiodarone', effect: 'Concurrent use may result in bradycardia, atrioventricular block and/or sinus arrest. Caution is advised. Avoid concurrent use in patients with sick sinus syndrome or partial AV block.', severity: 'Major' },
    { drugClass: 'Clarithromycin', effect: 'May result in increased amlodipine exposure due to CYP3A4 inhibition. Consider dosage adjustments and monitor for increased adverse effects including hypotension.', severity: 'Major' },
    { drugClass: 'Clopidogrel', effect: 'May decrease antiplatelet effect of clopidogrel, increasing risk of thrombotic events. Use caution and monitor for loss of clopidogrel efficacy.', severity: 'Major' }
  ],
  'Diltiazem': [
    { drugClass: 'Colchicine', effect: 'Concurrent use may result in increased colchicine exposure. Use caution and monitor for colchicine toxicity.', severity: 'Major' },
    { drugClass: 'Atenolol', effect: 'Increased risk of hypotension, bradycardia and AV conduction disturbance. Monitor cardiac function and blood pressure.', severity: 'Major' },
    { drugClass: 'Atorvastatin', effect: 'May result in increased atorvastatin exposure. Monitor for statin adverse effects.', severity: 'Major' }
  ],
  'Losartan': [
    { drugClass: 'Aliskiren', effect: 'Concurrent use may result in increased risk of hypotension, hyperkalemia, and renal impairment. Avoid combination in patients with diabetes or moderate-to-severe renal impairment.', severity: 'Major' },
    { drugClass: 'Captopril', effect: 'Dual blockade of the renin-angiotensin system may result in increased risk of hypotension, hyperkalemia, and renal dysfunction.', severity: 'Major' }
  ],
  'Digoxin': [
    { drugClass: 'Amiodarone', effect: 'May result in increased digoxin concentrations and risk of digoxin toxicity. Monitor digoxin levels and adjust dose.', severity: 'Major' },
    { drugClass: 'Azithromycin', effect: 'May result in increased digoxin concentrations. Monitor digoxin levels.', severity: 'Major' },
    { drugClass: 'Quinidine', effect: 'May result in increased digoxin concentrations and risk of toxicity. Monitor digoxin levels.', severity: 'Major' },
    { drugClass: 'Corticosteroid', effect: 'May result in increased risk of hypokalemia and digoxin toxicity. Monitor potassium levels.', severity: 'Major' },
    { drugClass: 'Verapamil', effect: 'May result in increased digoxin concentrations. Monitor digoxin levels.', severity: 'Moderate' },
    { drugClass: 'Thiazide Diuretics', effect: 'May result in hypokalemia and increased risk of digoxin toxicity. Monitor potassium levels.', severity: 'Moderate' }
  ],
  'Warfarin': [
    { drugClass: 'Tamoxifen', effect: 'May result in increased anticoagulant effect. Monitor INR closely.', severity: 'Major' },
    { drugClass: 'Aspirin', effect: 'Increased risk of bleeding. Monitor INR and signs of bleeding.', severity: 'Major' },
    { drugClass: 'Allopurinol', effect: 'May result in increased anticoagulant effect. Monitor INR.', severity: 'Major' },
    { drugClass: 'Miconazole', effect: 'May result in increased anticoagulant effect. Avoid combination if possible.', severity: 'Major' },
    { drugClass: 'Torsemide', effect: 'May result in increased anticoagulant effect. Monitor INR.', severity: 'Major' }
  ],
  'Metformin': [
    { drugClass: 'Iopronic Acid', effect: 'Concurrent use may result in increased risk of metformin accumulation and lactic acidosis.', severity: 'Major' },
    { drugClass: 'Aspirin', effect: 'May result in increased metformin concentrations. Monitor blood glucose.', severity: 'Major' },
    { drugClass: 'Ciprofloxacin', effect: 'May result in altered blood glucose. Monitor blood glucose closely.', severity: 'Major' },
    { drugClass: 'Pioglitazone', effect: 'Additive glucose-lowering effect. Monitor for hypoglycemia.', severity: 'Major' }
  ],
  'Glipizide': [
    { drugClass: 'Enoxacin', effect: 'May result in increased hypoglycemic effect. Monitor blood glucose closely.', severity: 'Major' },
    { drugClass: 'Lanreotide', effect: 'May result in altered blood glucose control. Monitor blood glucose.', severity: 'Major' }
  ],
  'Ibuprofen': [
    { drugClass: 'Ketorolac', effect: 'Increased risk of GI bleeding and ulceration. Concomitant use is contraindicated.', severity: 'Major' },
    { drugClass: 'Aspirin', effect: 'Increased risk of GI bleeding. Avoid concurrent use.', severity: 'Major' },
    { drugClass: 'Clopidogrel', effect: 'Increased risk of bleeding. Monitor for signs of bleeding.', severity: 'Major' },
    { drugClass: 'Amitriptyline', effect: 'Increased risk of bleeding. Monitor for signs of bleeding.', severity: 'Major' },
    { drugClass: 'Chlorothiazide', effect: 'Decreased diuretic effectiveness. Monitor blood pressure.', severity: 'Major' }
  ],
  'Diclofenac': [
    { drugClass: 'Ketorolac', effect: 'Increased risk of GI bleeding. Contraindicated.', severity: 'Major' },
    { drugClass: 'Warfarin', effect: 'Increased risk of bleeding. Monitor INR and signs of bleeding.', severity: 'Major' },
    { drugClass: 'Ciprofloxacin', effect: 'Increased risk of CNS adverse effects. Use caution.', severity: 'Moderate' }
  ],
  'Aspirin': [
    { drugClass: 'Influenza Virus Vaccine (Live)', effect: 'Increased risk of Reye syndrome. Avoid in children and adolescents.', severity: 'Major' },
    { drugClass: 'Acarbose', effect: 'May result in altered glucose control. Monitor blood glucose.', severity: 'Major' },
    { drugClass: 'Cilostazol', effect: 'Increased risk of bleeding. Monitor for signs of bleeding.', severity: 'Major' },
    { drugClass: 'Imipramine', effect: 'Increased risk of bleeding. Monitor for signs of bleeding.', severity: 'Major' },
    { drugClass: 'Valproic Acid', effect: 'Increased free valproic acid concentrations. Consider monitoring valproic acid concentrations.', severity: 'Moderate' }
  ],
  'Naproxen': [
    { drugClass: 'Ketorolac', effect: 'Increased risk of GI bleeding. Contraindicated.', severity: 'Major' },
    { drugClass: 'Cyclosporine', effect: 'Increased risk of nephrotoxicity. Monitor renal function.', severity: 'Major' },
    { drugClass: 'Spironolactone', effect: 'Decreased diuretic effectiveness and increased risk of hyperkalemia. Monitor potassium.', severity: 'Major' }
  ],
  'Theophylline': [
    { drugClass: 'Erythromycin', effect: 'May result in increased theophylline concentrations. Monitor theophylline levels and adjust dose.', severity: 'Major' },
    { drugClass: 'Phenytoin', effect: 'May result in decreased theophylline concentrations. Monitor theophylline levels.', severity: 'Major' },
    { drugClass: 'Cimetidine', effect: 'May result in increased theophylline concentrations. Consider alternative H2 antagonist.', severity: 'Major' }
  ],
  'Omeprazole': [
    { drugClass: 'Ketoconazole', effect: 'May result in decreased ketoconazole absorption. Monitor antifungal efficacy.', severity: 'Major' },
    { drugClass: 'Rilpivirine', effect: 'May result in decreased rilpivirine concentrations. Contraindicated.', severity: 'Major' }
  ],
  'Cimetidine': [
    { drugClass: 'Ketorolac', effect: 'Increased risk of NSAID-related adverse effects. Avoid combination.', severity: 'Major' },
    { drugClass: 'Theophylline', effect: 'May result in increased theophylline concentrations. Monitor theophylline levels.', severity: 'Major' },
    { drugClass: 'Phenytoin', effect: 'May result in increased phenytoin concentrations. Monitor phenytoin levels.', severity: 'Major' },
    { drugClass: 'Chloroquine', effect: 'May result in increased chloroquine concentrations. Monitor for toxicity.', severity: 'Major' }
  ]
};
