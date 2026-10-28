// data/drugs.js - Aggregation of all drug categories
import { nsaids } from './nsaids';
import { antibiotics } from './antibiotics';
import { antipyretics } from './antipyretics';
import { analgesics } from './analgesics';
import { antivirals } from './antivirals';
import { cardiovascular } from './cardiovascular';
import { antiepileptics } from './antiepileptics';
import { antiTB } from './antiTB';
import { emergencyCare } from './emergency-care';
import { respiratoryAllergy } from './respiratory-allergy';

export const drugs = [
  ...nsaids,
  ...antibiotics,
  ...antipyretics,
  ...analgesics,
  ...antivirals,
  ...cardiovascular,
  ...antiepileptics,
  ...antiTB,
  ...emergencyCare,
  ...respiratoryAllergy
];
