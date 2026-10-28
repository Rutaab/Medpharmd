import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

const pageId = 'endocrinology';

const subcategories = [
  {
    id: 'thyroid',
    title: 'Thyroid Function Tests',
    icon: 'monitor_heart',
    color: 'from-purple-600 to-purple-400',
    description: 'Assessment of thyroid gland function for diagnosis and monitoring of thyroid disorders.',
    tests: [
      {
        name: 'TSH (Thyroid Stimulating Hormone)',
        normalRange: '0.4-4.5 mIU/L (varies by assay)',
        clinicalSignificance: 'Pituitary hormone regulating thyroid gland. Most sensitive marker of thyroid function. First-line test for thyroid screening.',
        interpretation: 'High: primary hypothyroidism (subclinical: 4.5-10, overt: >10). Low: hyperthyroidism (suppressed <0.1). Pituitary disease: inappropriately normal TSH with abnormal T4. Illness, medications (dopamine, steroids, biotin) can affect TSH.',
        method: 'Third-generation immunoassay (CLIA or ECLIA) using anti-TSH antibodies, functional sensitivity <0.01 mIU/L',
      },
      {
        name: 'Free T4 (Free Thyroxine)',
        normalRange: '0.8-1.8 ng/dL',
        clinicalSignificance: 'Active, unbound thyroxine. Directly measures thyroid hormone output. Used with TSH for thyroid status assessment.',
        interpretation: 'High: hyperthyroidism, thyroiditis, exogenous T4. Low: hypothyroidism, sick euthyroid syndrome, central hypothyroidism. Interpret with TSH: high TSH + low T4 = primary hypothyroidism. Low TSH + high T4 = hyperthyroidism.',
        method: 'Two-step competitive immunoassay (CLIA or ECLIA) or equilibrium dialysis LC-MS/MS reference method',
      },
      {
        name: 'Free T3 (Free Triiodothyronine)',
        normalRange: '2.3-4.2 pg/mL',
        clinicalSignificance: 'Most biologically active thyroid hormone. Produced mainly by peripheral conversion of T4 to T3.',
        interpretation: 'Elevated in T3 toxicosis (hyperthyroidism with normal T4 but elevated T3). Low in sick euthyroid syndrome and hypothyroidism. Useful for diagnosing T3 hyperthyroidism when TSH is suppressed but T4 is normal.',
        method: 'Competitive immunoassay (CLIA or ECLIA) using anti-T3 antibodies',
      },
      {
        name: 'Total T4',
        normalRange: '5-12 mcg/dL',
        clinicalSignificance: 'Total thyroxine (bound + free). Affected by binding protein levels (TBG, albumin).',
        interpretation: 'Elevated by pregnancy (estrogen increases TBG), OCP, hepatitis, familial dysalbuminemia. Decreased by nephrotic syndrome, cirrhosis, malnutrition, androgens. Free T4 is more reliable when binding protein abnormalities are suspected.',
        method: 'Competitive immunoassay (CLIA or ECLIA) using anti-T4 antibodies on paramagnetic particles',
      },
      {
        name: 'Total T3',
        normalRange: '80-200 ng/dL',
        clinicalSignificance: 'Total triiodothyronine. Affected by binding proteins similarly to T4.',
        interpretation: 'High: hyperthyroidism, T3 toxicosis. Low: hypothyroidism, sick euthyroid syndrome. Less commonly used than free T3.',
        method: 'Competitive immunoassay (CLIA or ECLIA) using anti-T3 antibodies on paramagnetic particles',
      },
      {
        name: 'Reverse T3 (rT3)',
        normalRange: '10-40 ng/dL',
        clinicalSignificance: 'Inactive metabolite of T4. Produced in increased amounts during illness and fasting.',
        interpretation: 'Elevated: sick euthyroid syndrome (low T3, high rT3), fasting, stress, systemic illness. Helps distinguish sick euthyroid from true hypothyroidism (low T4 with normal/low rT3 suggests true hypothyroidism).',
        method: 'Radioimmunoassay (RIA) with 125I-labeled rT3 tracer or LC-MS/MS',
      },
      {
        name: 'T3 Uptake',
        normalRange: '25-35%',
        clinicalSignificance: 'Indirect measure of TBG binding capacity. Used to calculate free T4 index.',
        interpretation: 'High: decreased TBG (androgens, nephrotic syndrome, cirrhosis). Low: increased TBG (pregnancy, OCP, hepatitis). Free T4 index = T3 uptake x Total T4 / 100. Largely replaced by direct free T4 measurement.',
        method: 'Radioactive tracer uptake assay measuring TBG binding capacity for free T4 index calculation',
      },
      {
        name: 'Thyroid Antibodies',
        normalRange: 'Negative (TPO Ab <35 IU/mL, Tg Ab <40 IU/mL, TRAb <1.5 IU/L)',
        clinicalSignificance: 'Autoantibodies against thyroid tissue. Diagnostic markers for autoimmune thyroid disease.',
        interpretation: 'TPO Ab (anti-thyroid peroxidase): positive in Hashimoto thyroiditis (90%), Graves disease (50-80%). Tg Ab (anti-thyroglobulin): positive in Hashimoto, used to monitor differentiated thyroid cancer. TRAb (TSH receptor antibodies): positive in Graves disease ( >95% sensitivity).',
        method: 'Competitive CLIA/ECLIA for TPO/Tg antibodies, ELISA or radio-receptor assay for TRAb',
      },
      {
        name: 'Thyroglobulin (Tg)',
        normalRange: '3-40 ng/mL',
        clinicalSignificance: 'Protein produced exclusively by thyroid follicular cells. Primary tumor marker for differentiated thyroid cancer.',
        interpretation: 'Used to monitor post-thyroidectomy for thyroid cancer. Undetectable = excellent prognosis (no residual tissue). Detectable = residual thyroid tissue or recurrence. Tg antibodies interfere with assay (falsely low).',
        method: 'Two-site sandwich immunoassay (CLIA) with anti-Tg antibodies; LC-MS/MS alternative if Tg antibodies present',
      },
      {
        name: 'Thyroxine Binding Globulin (TBG)',
        normalRange: '12-30 mg/mL',
        clinicalSignificance: 'Primary transport protein for thyroid hormones. Changes in TBG alter total T4/T3 without affecting free hormone levels.',
        interpretation: 'Elevated: pregnancy, estrogen therapy, OCP, hepatitis, HIV, familial. Decreased: androgens, nephrotic syndrome, cirrhosis, protein malnutrition, acromegaly.',
        method: 'Sandwich immunoassay (CLIA or ELISA) or radioimmunoassay (RIA)',
      },
      {
        name: 'Calcitonin',
        normalRange: '< 10 pg/mL',
        clinicalSignificance: 'Hormone produced by thyroid C-cells. Tumor marker for medullary thyroid carcinoma (MTC).',
        interpretation: 'Elevated: medullary thyroid carcinoma (screening in MEN2), C-cell hyperplasia. Markedly elevated (>100): MTC. Mild elevation: renal failure, hypergastrinemia, thyroiditis, neuroendocrine tumors.',
        method: 'Two-site sandwich immunoassay (CLIA) using anti-calcitonin monoclonal antibodies',
      },
    ]
  },
  {
    id: 'diabetes',
    title: 'Diabetes & Glycemic Control',
    icon: 'science',
    color: 'from-red-600 to-red-400',
    description: 'Diagnosis, classification, and monitoring of diabetes mellitus and disorders of glucose metabolism.',
    tests: [
      {
        name: 'Fasting Blood Glucose (FBG)',
        normalRange: '70-100 mg/dL',
        clinicalSignificance: 'Plasma glucose after at least 8 hours of fasting. Primary screening and diagnostic test for diabetes.',
        interpretation: '100-125 mg/dL: impaired fasting glucose (pre-diabetes). >126 mg/dL on two separate occasions: diabetes mellitus. <70 mg/dL: hypoglycemia (Whipple triad required for diagnosis of hypoglycemic disorder).',
        method: 'Hexokinase/G6PD enzymatic method with spectrophotometric detection at 340 nm',
      },
      {
        name: 'Random Blood Glucose (RBG)',
        normalRange: '< 200 mg/dL',
        clinicalSignificance: 'Blood glucose measured at any time regardless of meals. Used for diabetes screening in symptomatic patients.',
        interpretation: '>200 mg/dL with classic symptoms (polyuria, polydipsia, unexplained weight loss): diagnostic of diabetes. 140-200: requires confirmatory fasting or HbA1c testing.',
        method: 'Hexokinase/G6PD enzymatic method with spectrophotometric detection at 340 nm',
      },
      {
        name: '2-Hour Postprandial Glucose',
        normalRange: '< 140 mg/dL',
        clinicalSignificance: 'Glucose measured 2 hours after a 75g oral glucose load. Assesses glucose tolerance.',
        interpretation: '140-199 mg/dL: impaired glucose tolerance (pre-diabetes). >200 mg/dL: diabetes. Used in gestational diabetes screening (OGTT).',
        method: 'Hexokinase/G6PD enzymatic method with spectrophotometric detection at 340 nm',
      },
      {
        name: 'Oral Glucose Tolerance Test (OGTT)',
        normalRange: 'Fasting: <100, 1h: <180, 2h: <140 mg/dL',
        clinicalSignificance: 'Gold standard for diagnosing gestational diabetes and impaired glucose tolerance. 75g glucose load with serial glucose measurements.',
        interpretation: 'GDM diagnosis (Carpenter-Coustan criteria): fasting >95, 1h >180, 2h >155, 3h >140 mg/dL (two or more elevated). Impaired glucose tolerance: 2h value 140-199.',
        method: 'Serial hexokinase/G6PD enzymatic glucose measurements after 75g oral glucose load',
      },
      {
        name: 'Hemoglobin A1c (HbA1c)',
        normalRange: '< 5.7%',
        clinicalSignificance: 'Glycated hemoglobin reflecting average blood glucose over the preceding 2-3 months. Standard for diabetes monitoring and diagnosis.',
        interpretation: '5.7-6.4%: pre-diabetes. >6.5%: diabetes. Target for most diabetics: <7.0% (ADA) or <6.5% (AACE). Factors causing falsely low: hemolytic anemia, blood transfusion, CKD (HbA1c unreliable in dialysis).',
        method: 'HPLC (boronate affinity or ion-exchange), immunoassay, or capillary electrophoresis; NGSP-certified',
      },
      {
        name: 'Estimated Average Glucose (eAG)',
        normalRange: '< 117 mg/dL',
        clinicalSignificance: 'Conversion of HbA1c to estimated average glucose: 28.7 x A1c - 46.7. Helps patients understand A1c in daily glucose terms.',
        interpretation: 'A1c 6% = eAG 126, A1c 7% = 154, A1c 8% = 183, A1c 9% = 212, A1c 10% = 240, A1c 11% = 269, A1c 12% = 298.',
        method: 'Calculated from HbA1c using ADAG study formula: eAG (mg/dL) = 28.7 x A1c - 46.7',
      },
      {
        name: 'Fructosamine',
        normalRange: '200-285 mcmol/L',
        clinicalSignificance: 'Glycated serum protein reflecting average glucose over 2-3 weeks. Alternative when HbA1c is unreliable.',
        interpretation: 'Elevated: hyperglycemia (reflects recent control). Used when HbA1c is unreliable (hemoglobinopathies, hemolysis, CKD, recent transfusion). Also used to monitor short-term changes in therapy.',
        method: 'Nitroblue tetrazolium (NBT) reduction assay measured spectrophotometrically at 530-550 nm',
      },
      {
        name: 'C-Peptide',
        normalRange: '0.8-3.1 ng/mL (fasting)',
        clinicalSignificance: 'Cleavage product of proinsulin. Reflects endogenous insulin production. Distinguishes type 1 from type 2 diabetes.',
        interpretation: 'Low C-peptide (<0.2): type 1 diabetes, long-standing type 2 with beta-cell failure. High C-peptide: insulin resistance, insulinoma, type 2 diabetes (early). Used to detect factitious hypoglycemia (low glucose + low C-peptide + high insulin = exogenous insulin).',
        method: 'Two-site sandwich immunoassay (CLIA) using anti-C-peptide monoclonal antibodies',
      },
      {
        name: 'Insulin (Fasting)',
        normalRange: '2-25 mIU/mL (fasting)',
        clinicalSignificance: 'Pancreatic beta-cell hormone regulating glucose uptake. Used with glucose for insulin resistance assessment.',
        interpretation: 'High fasting insulin (>15): insulin resistance (metabolic syndrome, PCOS, early T2D). Low: beta-cell failure. Used with glucose for HOMA-IR calculation: (glucose x insulin) / 405.',
        method: 'Two-site sandwich immunoassay (CLIA) using anti-insulin monoclonal antibodies',
      },
      {
        name: 'Insulin Autoantibodies (IAA)',
        normalRange: 'Negative',
        clinicalSignificance: 'Autoantibodies against insulin. Marker of autoimmune type 1 diabetes.',
        interpretation: 'Positive: type 1 diabetes (especially in children <10 years). Also positive in insulin-treated patients (exogenous insulin antibodies). Used in T1D prediction and classification.',
        method: 'Radioimmunoassay (RIA) with 125I-labeled insulin or ELISA',
      },
      {
        name: 'Glutamic Acid Decarboxylase Antibodies (GADA)',
        normalRange: 'Negative',
        clinicalSignificance: 'Most common autoantibody in type 1 diabetes (70-80%). Present years before clinical onset.',
        interpretation: 'Positive: autoimmune type 1 diabetes, LADA (Latent Autoimmune Diabetes in Adults). High titer: more rapid progression to insulin dependence. Used for diabetes classification when type is uncertain.',
        method: 'Radioimmunoassay (RIA) with 35S-/125I-labeled GAD65 or bridge ELISA',
      },
      {
        name: 'Islet Cell Antibodies (ICA)',
        normalRange: 'Negative',
        clinicalSignificance: 'Autoantibodies against pancreatic islet cells. Marker for autoimmune diabetes.',
        interpretation: 'Positive: type 1 diabetes (75-85% at diagnosis). Used in research for T1D prediction and prevention trials. Often used with GADA, IA-2A, and ZnT8A for comprehensive autoantibody panel.',
        method: 'Indirect immunofluorescence on fresh-frozen human pancreas sections',
      },
      {
        name: 'Ketones (Serum/Urine)',
        normalRange: 'Serum: <0.6 mmol/L, Urine: Negative',
        clinicalSignificance: 'Products of fatty acid metabolism. Elevated in states of insulin deficiency (DKA, starvation, alcoholic ketoacidosis).',
        interpretation: 'Serum beta-hydroxybutyrate >3.0 mmol/L: DKA (requires insulin therapy). Urine ketones: less reliable (detects acetoacetate, may miss beta-hydroxybutyrate). Serum preferred. Also elevated in starvation, ketogenic diet, alcoholic ketoacidosis.',
        method: 'Enzymatic method with beta-hydroxybutyrate dehydrogenase/NAD+ for serum; nitroprusside dipstick for urine',
      },
      {
        name: 'Zinc Transporter 8 Antibodies (ZnT8A)',
        normalRange: 'Negative',
        clinicalSignificance: 'Novel autoantibody marker for type 1 diabetes. Increases diagnostic sensitivity when added to standard panel.',
        interpretation: 'Positive: type 1 diabetes. Found in additional 10-20% of T1D patients negative for GADA, IA-2A, and IAA. Useful for diabetes classification and prediction in high-risk individuals.',
        method: 'Radioimmunoassay (RIA) with 35S-/125I-labeled ZnT8 antigen or bridge ELISA',
      },
    ]
  },
  {
    id: 'adrenal',
    title: 'Adrenal Function & Stress Hormones',
    icon: 'psychiatry',
    color: 'from-amber-600 to-amber-400',
    description: 'Evaluation of adrenal cortex and medulla function for diagnosis of adrenal insufficiency, Cushing syndrome, and pheochromocytoma.',
    tests: [
      {
        name: 'Cortisol (AM)',
        normalRange: '6-23 mcg/dL (8 AM sample)',
        clinicalSignificance: 'Primary glucocorticoid produced by adrenal cortex. Follows diurnal rhythm (highest at 8 AM, lowest at midnight).',
        interpretation: 'Low AM cortisol (<3): adrenal insufficiency (Addison disease, secondary AI). High: Cushing syndrome (loss of diurnal rhythm), stress, OCP (increased CBG), depression. Random cortisol >15 makes AI unlikely.',
        method: 'Competitive immunoassay (CLIA or ECLIA) using anti-cortisol antibodies',
      },
      {
        name: 'Cortisol (PM / Midnight)',
        normalRange: '< 5 mcg/dL (11 PM-midnight)',
        clinicalSignificance: 'Late-night cortisol is the best screening test for Cushing syndrome (loss of normal diurnal suppression).',
        interpretation: '>7.5 mcg/dL (midnight salivary cortisol): Cushing syndrome (high sensitivity). >50% of AM value = loss of diurnal rhythm suggestive of Cushing. False positives: stress, hospitalization, depression, alcoholism.',
        method: 'Competitive immunoassay (CLIA/ECLIA) or LC-MS/MS reference method with deuterated internal standard',
      },
      {
        name: 'Salivary Cortisol (Late Night)',
        normalRange: '< 0.1 mcg/dL (11 PM)',
        clinicalSignificance: 'Measures free, unbound cortisol in saliva. Convenient outpatient screening for Cushing syndrome.',
        interpretation: 'Elevated: Cushing syndrome (sensitivity >90%). Convenient as patient collects at home. False positives: licorice, smoking, shift work, insomnia. Normal levels effectively rule out Cushing.',
        method: 'Competitive ELISA or LC-MS/MS on saliva collected via Salivette device',
      },
      {
        name: 'Dexamethasone Suppression Test (DST)',
        normalRange: '1mg DST: Cortisol <1.8 mcg/dL (suppressed)',
        clinicalSignificance: 'Tests negative feedback on HPA axis. Overnight 1mg DST is the most common screening test for Cushing syndrome.',
        interpretation: 'Failure to suppress (cortisol >1.8): Cushing syndrome (sensitivity >95%). False positives: depression, obesity, stress, alcoholism, OCP, phenytoin, rifampin (increase dexamethasone clearance).',
        method: 'Overnight 1 mg dexamethasone suppression test with serum cortisol measured by competitive immunoassay',
      },
      {
        name: 'ACTH (Adrenocorticotropic Hormone)',
        normalRange: '10-60 pg/mL (8 AM)',
        clinicalSignificance: 'Pituitary hormone stimulating adrenal cortisol production. Differentiates primary from secondary adrenal disorders.',
        interpretation: 'High ACTH + high cortisol: ACTH-dependent Cushing (pituitary adenoma, ectopic ACTH). High ACTH + low cortisol: primary AI (Addison). Low ACTH + low cortisol: secondary AI (pituitary lesion, exogenous steroids).',
        method: 'Two-site sandwich immunoassay (CLIA) using anti-ACTH antibodies',
      },
      {
        name: 'ACTH Stimulation Test (Cosyntropin)',
        normalRange: 'Cortisol >18 mcg/dL at 30 or 60 min post-250 mcg cosyntropin',
        clinicalSignificance: 'Gold standard for diagnosing adrenal insufficiency. Measures adrenal reserve after synthetic ACTH administration.',
        interpretation: 'Low response (<18): adrenal insufficiency (primary AI if baseline ACTH high, secondary if low). Subnormal response: impaired adrenal reserve. Normal response: intact HPA axis (excludes AI).',
        method: 'Cosyntropin (250 mcg) stimulation test with serial cortisol measurements by competitive immunoassay',
      },
      {
        name: 'Aldosterone / Renin Ratio (ARR)',
        normalRange: 'Aldosterone: 4-31 ng/dL (upright), Renin: 0.5-4 ng/mL/hr, ARR: <30',
        clinicalSignificance: 'Screening test for primary hyperaldosteronism (Conn syndrome).',
        method: 'Aldosterone by CLIA/LC-MS/MS, renin by sandwich immunoassay or PRA by RIA; ratio calculated',
      },
      {
        name: 'Plasma-Free Metanephrines',
        normalRange: 'Normetanephrine <0.9 nmol/L, Metanephrine <0.5 nmol/L',
        clinicalSignificance: 'Metabolites of catecholamines from adrenal medulla. Best screening test for pheochromocytoma.',
        interpretation: 'Elevated: pheochromocytoma, paraganglioma. >3x upper normal: highly specific (requires imaging). Mild elevation: stress, drugs (TCAs, phenoxybenzamine, MAOIs), cocaine withdrawal, clonidine suppression test helps differentiate.',
        method: 'LC-MS/MS with deuterated internal standards after solid-phase extraction',
      },
      {
        name: 'Urine Catecholamines (24h)',
        normalRange: 'Epinephrine <20 mcg/day, Norepinephrine <80 mcg/day, Dopamine <400 mcg/day',
        clinicalSignificance: 'Measures catecholamine excretion over 24h. Adjunctive test for pheochromocytoma diagnosis.',
        interpretation: 'Elevated: pheochromocytoma, stress, exercise, MAOIs, methyldopa, ethanol withdrawal. Used when plasma metanephrines are equivocal. Combined sensitivity with metanephrines >98%.',
        method: 'HPLC-ECD or LC-MS/MS with deuterated internal standards on 24-hour urine collection',
      },
      {
        name: '17-Hydroxyprogesterone (17-OHP)',
        normalRange: '< 200 ng/dL',
        clinicalSignificance: 'Precursor in cortisol synthesis pathway. Elevated in 21-hydroxylase deficiency (congenital adrenal hyperplasia).',
        interpretation: 'Markedly elevated (>1000): classic CAH (21-hydroxylase deficiency). Mild elevation: non-classic CAH, PCOS. ACTH-stimulated 17-OHP used to confirm non-classic CAH diagnosis.',
        method: 'Competitive immunoassay (CLIA) or LC-MS/MS with deuterated internal standard',
      },
      {
        name: 'Dehydroepiandrosterone Sulfate (DHEA-S)',
        normalRange: 'Male: 100-500 mcg/dL, Female: 60-300 mcg/dL (age-dependent, declines with age)',
        clinicalSignificance: 'Adrenal androgen precursor. Marker of adrenal androgen production.',
        interpretation: 'Low: adrenal insufficiency (primary), aging. High: adrenal tumor, CAH, PCOS, Cushing disease. Very high: adrenocortical carcinoma. Used to differentiate adrenal from ovarian androgen excess.',
        method: 'Competitive immunoassay (CLIA) using anti-DHEA-S antibodies',
      },
    ]
  },
  {
    id: 'pituitary',
    title: 'Pituitary & Hypothalamic Function',
    icon: 'psychiatry',
    color: 'from-indigo-600 to-indigo-400',
    description: 'Comprehensive evaluation of anterior and posterior pituitary hormone function.',
    tests: [
      {
        name: 'Prolactin',
        normalRange: 'Male: 2-18 ng/mL, Female: 3-30 ng/mL',
        clinicalSignificance: 'Lactogenic hormone. Rules out prolactinoma in hyperprolactinemia.',
        interpretation: 'Elevated: prolactinoma (>200 suggestive), medications (antipsychotics, metoclopramide, verapamil, OCP), hypothyroidism, renal failure, chest wall stimulation, stress. Macroprolactinemia: biologically inactive but detected (adds to diagnostic confusion).',
        method: 'Two-site sandwich immunoassay (CLIA); PEG precipitation for macroprolactin screening',
      },
      {
        name: 'Growth Hormone (GH)',
        normalRange: '0-5 ng/mL (fasting, basal)',
        clinicalSignificance: 'Anabolic hormone. Diagnosis of GH deficiency and acromegaly. Random levels unhelpful due to pulsatile secretion.',
        interpretation: 'High + failure to suppress on OGTT: acromegaly. Low GH on stimulation testing: GH deficiency. Levels affected by stress, exercise, sleep, glucose (normally suppressed by glucose load).',
        method: 'Two-site sandwich immunoassay (CLIA) with functional sensitivity <0.05 ng/mL',
      },
      {
        name: 'IGF-1 (Insulin-Like Growth Factor 1)',
        normalRange: 'Varies by age and sex (z-score reported)',
        clinicalSignificance: 'Mediates GH effects. Stable marker of integrated GH secretion. Preferred screening test for acromegaly.',
        interpretation: 'High: acromegaly (sensitivity >90%), puberty (normal). Low: GH deficiency, malnutrition, hypothyroidism, liver disease, poorly controlled diabetes. Normal IGF-1 effectively rules out acromegaly.',
        method: 'Two-site sandwich immunoassay (CLIA or ELISA) after acid-ethanol extraction',
      },
      {
        name: 'LH (Luteinizing Hormone)',
        normalRange: 'Male: 1-8 IU/L, Female: varies with cycle phase (follicular 2-12, mid-cycle 20-100, luteal 1-12)',
        clinicalSignificance: 'Pituitary gonadotropin. Stimulates testosterone production in males and ovulation in females.',
        interpretation: 'High: primary hypogonadism (menopause, Klinefelter, Turner, testicular/ovarian failure). Low: secondary hypogonadism (hypothalamic/pituitary), functional hypothalamic amenorrhea. LH:FSH ratio >2 suggests PCOS.',
        method: 'Two-site sandwich immunoassay (CLIA) using anti-LH monoclonal antibodies',
      },
      {
        name: 'FSH (Follicle Stimulating Hormone)',
        normalRange: 'Male: 1-8 IU/L, Female: varies with cycle (follicular 3-10, mid-cycle 5-20, luteal 1-7)',
        clinicalSignificance: 'Pituitary gonadotropin. Stimulates spermatogenesis in males and follicular development in females.',
        interpretation: 'High: primary hypogonadism, menopause, ovarian/testicular failure. Low: secondary hypogonadism, hypothalamic amenorrhea, pituitary insufficiency.',
        method: 'Two-site sandwich immunoassay (CLIA) using anti-FSH monoclonal antibodies',
      },
      {
        name: 'ADH / Vasopressin (Copeptin)',
        normalRange: '1-5 pg/mL (plasma ADH)',
        clinicalSignificance: 'Antidiuretic hormone. Regulates water balance. Copeptin is a stable surrogate marker (more reliable assay).',
        interpretation: 'High ADH + hyponatremia: SIADH. Low ADH + polyuria/polydipsia: diabetes insipidus (central). High ADH + polyuria: nephrogenic DI (kidney resistant). Water deprivation test confirms DI and differentiates types.',
        method: 'Competitive immunoassay for ADH; sandwich immunoassay for copeptin (preferred)',
      },
      {
        name: 'Water Deprivation Test',
        normalRange: 'Urine osmolality >600 mOsm/kg after 8h water deprivation',
        clinicalSignificance: 'Gold standard for diagnosing and differentiating diabetes insipidus (central vs nephrogenic).',
        interpretation: 'Normal: urine osmolality >600 + serum osmolality <295. Complete DI: low urine osmolality + rising serum Na. Central DI: responds to DDAVP (urine osmolality increases >50%). Nephrogenic DI: does NOT respond to DDAVP.',
        method: 'Serial serum/urine osmolality and sodium monitoring during 8-hour fluid restriction followed by DDAVP challenge',
      },
    ]
  },
  {
    id: 'reproductive',
    title: 'Reproductive & Sex Hormones',
    icon: 'favorite',
    color: 'from-pink-600 to-pink-400',
    description: 'Evaluation of gonadal function, fertility assessment, and sex hormone disorders.',
    tests: [
      {
        name: 'Testosterone (Total)',
        normalRange: 'Male: 300-1000 ng/dL, Female: 15-70 ng/dL',
        clinicalSignificance: 'Primary male sex hormone. Essential for libido, muscle mass, bone density, and spermatogenesis.',
        interpretation: 'Low male (<300): hypogonadism (primary or secondary), aging, obesity, medications (opioids, steroids), chronic illness. High male: testicular tumor, androgen insensitivity, CAH (adrenal). High female: PCOS, CAH, ovarian/adrenal tumor.',
        method: 'Competitive immunoassay (CLIA) or LC-MS/MS reference method with testosterone-d3 internal standard',
      },
      {
        name: 'Free Testosterone',
        normalRange: 'Male: 5-21 ng/dL (varies by assay)',
        clinicalSignificance: 'Unbound, bioactive testosterone. More sensitive for hypogonadism diagnosis when SHBG is abnormal.',
        interpretation: 'Low free T with normal total T: increased SHBG (aging, liver disease, hyperthyroidism, estrogens). High free T with normal total T: decreased SHBG (obesity, diabetes, hypothyroidism, androgens).',
        method: 'Equilibrium dialysis with LC-MS/MS (reference method) or calculated from total T and SHBG (Vermeulen formula)',
      },
      {
        name: 'Sex Hormone Binding Globulin (SHBG)',
        normalRange: 'Male: 10-50 nmol/L, Female: 40-120 nmol/L',
        clinicalSignificance: 'Glycoprotein binding testosterone and estradiol. Affects free hormone levels.',
        interpretation: 'High: aging, hyperthyroidism, liver disease, pregnancy, OCP, anticonvulsants, anorexia. Low: obesity, diabetes, hypothyroidism, PCOS, androgens, nephrotic syndrome, acromegaly.',
        method: 'Two-site sandwich immunoassay (CLIA) using anti-SHBG monoclonal antibodies',
      },
      {
        name: 'Estradiol (E2)',
        normalRange: 'Male: 10-40 pg/mL, Female: varies with cycle (follicular 20-100, mid-cycle 100-400, luteal 50-200)',
        clinicalSignificance: 'Primary estrogen. Essential for female reproductive function and bone health.',
        interpretation: 'High: ovarian tumor, precocious puberty, gynecomastia (male), pregnancy, obesity. Low: menopause, hypogonadism, hypothalamic amenorrhea, PCOS (anovulatory).',
        method: 'Competitive immunoassay (CLIA/ECLIA) or LC-MS/MS with derivatization for low-level accuracy',
      },
      {
        name: 'Progesterone',
        normalRange: 'Follicular: <1 ng/mL, Luteal: 3-25 ng/mL, Pregnancy: 10-300 ng/mL (varies with trimester)',
        clinicalSignificance: 'Hormone essential for implantation and pregnancy maintenance. Assesses ovulation and corpus luteum function.',
        interpretation: 'Luteal level >3: confirms ovulation. Low in luteal phase defect (infertility). Used in early pregnancy to assess viability (low progesterone suggests non-viable pregnancy).',
        method: 'Competitive immunoassay (CLIA) using anti-progesterone antibodies',
      },
      {
        name: 'Inhibin B',
        normalRange: 'Male: 100-300 pg/mL, Female: 25-100 pg/mL (follicular)',
        clinicalSignificance: 'Sertoli cell (male) and granulosa cell (female) hormone. Marker of gonadal function and ovarian reserve.',
        interpretation: 'Low male: spermatogenic failure, non-obstructive azoospermia. Low female: diminished ovarian reserve (DOR), menopause. High: granulosa cell tumor (ovary).',
        method: 'Two-site sandwich ELISA with detergent pre-treatment and specific monoclonal antibodies',
      },
      {
        name: 'Anti-Mullerian Hormone (AMH)',
        normalRange: '0.5-5.0 ng/mL (varies with age)',
        clinicalSignificance: 'Produced by ovarian granulosa cells. Best marker of ovarian reserve. Independent of hypothalamic-pituitary axis.',
        interpretation: 'High (>5.0): PCOS (increased antral follicle count). Low (<0.5): diminished ovarian reserve, approaching menopause. Undetectable: primary ovarian insufficiency. Used to predict response to ART.',
        method: 'Two-site sandwich immunoassay (CLIA or ELISA) using anti-AMH monoclonal antibodies',
      },
      {
        name: 'Human Chorionic Gonadotropin (hCG)',
        normalRange: 'Non-pregnant: <5 mIU/mL',
        clinicalSignificance: 'Placental hormone. Pregnancy test. Also tumor marker for gestational trophoblastic disease and germ cell tumors.',
        interpretation: 'Pregnancy: >25 mIU/mL. Ectopic pregnancy: slower rise (<53% at 48h). Miscarriage: falling levels. GTD: very high levels >100,000. Serial hCG used to monitor pregnancy viability and trophoblastic disease response.',
        method: 'Two-site sandwich immunoassay (CLIA) detecting intact hCG and free beta-subunit',
      },
    ]
  },
  {
    id: 'bone-mineral',
    title: 'Calcium & Bone Metabolism',
    icon: 'biotech',
    color: 'from-teal-600 to-teal-400',
    description: 'Assessment of calcium homeostasis, bone turnover, and parathyroid function for metabolic bone disease evaluation.',
    tests: [
      {
        name: 'Intact PTH (Parathyroid Hormone)',
        normalRange: '10-65 pg/mL',
        clinicalSignificance: 'Regulates calcium homeostasis (increases serum Ca by bone resorption, renal reabsorption, and vitamin D activation).',
        interpretation: 'High PTH + high Ca: primary hyperparathyroidism. High PTH + low/normal Ca: secondary hyperparathyroidism (vitamin D deficiency, CKD). Low PTH + high Ca: humoral hypercalcemia of malignancy, bone mets. Low PTH + low Ca: hypoparathyroidism.',
        method: 'Two-site sandwich immunoassay (CLIA) detecting intact PTH(1-84) using N-terminal and C-terminal antibodies',
      },
      {
        name: '25-Hydroxyvitamin D [25(OH)D]',
        normalRange: '30-100 ng/mL (sufficient)',
        clinicalSignificance: 'Storage form of vitamin D. Best indicator of overall vitamin D status. Assesses nutritional vitamin D adequacy.',
        interpretation: '<20 ng/mL: deficient. 20-30: insufficient. >100: potential toxicity. Deficiency: rickets (children), osteomalacia (adults), secondary hyperparathyroidism, falls, fractures, autoimmune risk.',
        method: 'Competitive immunoassay (CLIA) or LC-MS/MS reference method with deuterated internal standards',
      },
      {
        name: '1,25-Dihydroxyvitamin D [1,25(OH)2D]',
        normalRange: '15-60 pg/mL',
        clinicalSignificance: 'Active form of vitamin D (calcitriol). Stimulates intestinal calcium absorption. Regulated by PTH and FGF23.',
        interpretation: 'High: hypercalcemia of granulomatous disease (sarcoidosis, TB), lymphoma, hyperparathyroidism, vitamin D intoxication. Low: CKD, hypoparathyroidism, vitamin D-dependent rickets type I.',
        method: 'Radioimmunoassay with column chromatography or LC-MS/MS with derivatization',
      },
      {
        name: 'Bone-Specific Alkaline Phosphatase (BALP)',
        normalRange: 'Male: 15-41 U/L, Female: 12-35 U/L',
        clinicalSignificance: 'Osteoblast enzyme. Marker of bone formation. More specific for bone turnover than total ALP.',
        interpretation: 'Elevated: high bone turnover states (Paget disease, hyperparathyroidism, fracture healing, bone metastases, osteomalacia). Decreased: hypophosphatasia (rare genetic disorder).',
        method: 'Immunoassay using monoclonal anti-BALP antibodies with pNPP substrate detection',
      },
      {
        name: 'Osteocalcin',
        normalRange: 'Male: 5-25 ng/mL, Female: 5-20 ng/mL',
        clinicalSignificance: 'Non-collagenous bone matrix protein. Marker of bone formation. Reflects osteoblast activity.',
        interpretation: 'Elevated: high bone turnover (Paget, hyperparathyroidism, hyperthyroidism, fracture healing). Low: glucocorticoid therapy, hypothyroidism, low bone turnover. Vitamin K deficiency affects carboxylation.',
        method: 'Two-site immunoassay (CLIA or ELISA) detecting intact osteocalcin and N-MID fragment',
      },
      {
        name: 'NTX / CTX (Bone Resorption Markers)',
        normalRange: 'NTX: Male 5-25 nmol BCE/mmol Cr, Female premenopausal 5-25, postmenopausal 10-60',
        clinicalSignificance: 'Collagen crosslink degradation products. Urine NTX and serum CTX are markers of bone resorption (osteoclast activity).',
        interpretation: 'Elevated: postmenopausal bone loss, Paget disease, hyperparathyroidism, bone metastases, multiple myeloma. Used to monitor response to antiresorptive therapy (bisphosphonates, denosumab). Decrease of >30% suggests adequate therapy.',
        method: 'Competitive ELISA for urine NTX; two-site immunoassay for serum CTX',
      },
      {
        name: 'FGF23 (Fibroblast Growth Factor 23)',
        normalRange: '10-50 pg/mL (varies with assay)',
        clinicalSignificance: 'Phosphate-regulating hormone. Promotes renal phosphate excretion and suppresses vitamin D activation.',
        interpretation: 'High: X-linked hypophosphatemia (XLH), tumor-induced osteomalacia (FGF23-secreting tumors), CKD (early marker of phosphate dysregulation). Low: tumoral calcinosis.',
        method: 'Intact and C-terminal ELISA using anti-FGF23 antibodies',
      },
    ]
  },
  {
    id: 'tumor-markers',
    title: 'Endocrine Tumor Markers',
    icon: 'biotech',
    color: 'from-rose-600 to-rose-400',
    description: 'Biochemical markers for neuroendocrine tumors, thyroid cancer, and other endocrine malignancies.',
    tests: [
      {
        name: 'Chromogranin A (CgA)',
        normalRange: '< 100 ng/mL',
        clinicalSignificance: 'Glycoprotein in neuroendocrine cell secretory granules. General neuroendocrine tumor marker.',
        interpretation: 'Elevated: neuroendocrine tumors (carcinoid, pancreatic NET, pheochromocytoma), PPI use (falsely elevated), renal failure, gastritis, heart failure. Used for monitoring NET disease progression and treatment response.',
        method: 'Two-site sandwich immunoassay (CLIA or ELISA) using anti-CgA antibodies',
      },
      {
        name: '5-HIAA (Urine 5-Hydroxyindoleacetic Acid)',
        normalRange: '< 10 mg/24h',
        clinicalSignificance: 'Serotonin metabolite. Primary biochemical marker for carcinoid syndrome diagnosis.',
        interpretation: 'Elevated: carcinoid syndrome (midgut NETs with liver metastases). >25 mg/24h: diagnostic for carcinoid. <10: excludes carcinoid. False positives: serotonin-rich foods (banana, kiwi, pineapple, tomato, avocado, walnuts, serotonin reuptake inhibitors).',
        method: 'HPLC-ECD or LC-MS/MS on 24-hour urine collection',
      },
      {
        name: 'Gastrin',
        normalRange: '< 100 pg/mL (fasting)',
        clinicalSignificance: 'Hormone stimulating gastric acid secretion. Elevated in gastrinoma (Zollinger-Ellison syndrome) and pernicious anemia.',
        interpretation: '>1000: diagnostic for gastrinoma. 100-1000: requires secretin stimulation test. Elevated: PPI therapy (falsely), achlorhydria (pernicious anemia, atrophic gastritis), retained gastric antrum, G-cell hyperplasia.',
        method: 'Radioimmunoassay (RIA) or competitive CLIA using anti-gastrin antibodies',
      },
      {
        name: 'Glucagon',
        normalRange: '< 150 pg/mL (fasting)',
        clinicalSignificance: 'Pancreatic alpha-cell hormone. Glucagonoma is a rare pancreatic NET.',
        interpretation: '>500: glucagonoma (associated with necrolytic migratory erythema, diabetes, weight loss, DVT). Mild elevation: renal failure, liver disease, prolonged fasting, familial hyperglucagonemia.',
        method: 'Radioimmunoassay (RIA) or competitive CLIA using anti-glucagon antibodies specific for pancreatic glucagon',
      },
      {
        name: 'VIP (Vasoactive Intestinal Peptide)',
        normalRange: '< 75 pg/mL',
        clinicalSignificance: 'Neurotransmitter. Elevated in VIPoma (WDHA syndrome: Watery Diarrhea, Hypokalemia, Achlorhydria).',
        interpretation: 'Elevated: VIPoma (>200 pg/mL diagnostic). Causes profuse watery diarrhea, hypokalemia, metabolic acidosis (VIPoma syndrome). VIP levels correlate with tumor burden.',
        method: 'Radioimmunoassay (RIA) after plasma extraction or competitive CLIA',
      },
      {
        name: 'Somatostatin',
        normalRange: '< 100 pg/mL',
        clinicalSignificance: 'Inhibitory hormone. Somatostatinoma is a rare pancreatic/small intestinal NET.',
        interpretation: 'Elevated: somatostatinoma (associated with diabetes, gallstones, steatorrhea). Often diagnosed late due to non-specific symptoms.',
        method: 'Radioimmunoassay (RIA) after plasma extraction or competitive CLIA',
      },
    ]
  },
];

const EndocrinologyPage = () => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface via-surface-container to-surface-dim pt-8 pb-12">
      {/* Header Section */}
      <section className="px-4 mb-12 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-display text-display text-primary mb-2">Endocrinology</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Comprehensive endocrinology reference covering thyroid function, diabetes management, adrenal disorders, pituitary evaluation, reproductive hormones, calcium metabolism, and endocrine tumor markers.
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
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Endocrinology Test Categories</h2>
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
        <h2 className="font-headline-md text-headline-md text-primary mb-6">Endocrinology Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-error-container/10 border border-error/40 rounded-xl p-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-error text-2xl flex-shrink-0">warning</span>
              <div>
                <h3 className="font-headline-sm text-headline-md text-error mb-2">Hormone Assay Pitfalls</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Biotin supplements interfere with many hormone immunoassays (TSH, T4, T3, cortisol, PTH) causing falsely high or low results. Discontinue biotin at least 72 hours before testing. Estrogen-containing medications (OCP, HRT) alter SHBG, TBG, and CBG affecting total hormone levels.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-secondary-container/10 border border-secondary/40 rounded-xl p-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl flex-shrink-0">info</span>
              <div>
                <h3 className="font-headline-sm text-headline-md text-secondary mb-2">Sampling Considerations</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Most hormone levels follow circadian rhythms: cortisol (peak 8 AM, nadir midnight), TSH (peak overnight), growth hormone (pulsatile, peak during sleep). Cortisol and renin are affected by stress, posture, and venipuncture itself. Testosterone should be drawn before 10 AM (morning peak).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="px-4 mt-16 max-w-7xl mx-auto border-t border-outline-variant pt-8">
        <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
          This endocrinology reference is designed for healthcare professionals. Reference ranges vary by age, sex, assay method, and laboratory. Always interpret hormone levels in clinical context. Many hormones require dynamic testing (stimulation or suppression) for definitive diagnosis.
        </p>
      </section>
    </div>
  );
};

export { subcategories };
export default EndocrinologyPage;
