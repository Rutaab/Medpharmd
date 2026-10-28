import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('Prototype/Material/Medicines.txt', 'r', encoding='utf-8') as f:
    med = f.read()
with open('Prototype/Material/drug-opd-guide-1st-edition.txt', 'r', encoding='utf-8') as f:
    opd = f.read()

# Find all drug generic names in Medicines.txt
# Pattern: sections like "1. ibuprofen" or numbered entries
med_drugs = set()
for m in re.finditer(r'(?:^|\n)\s*\d+\.\s*([A-Za-z][A-Za-z\s\-/]+?)(?:\s*\(|$|\n)', med):
    name = m.group(1).strip()
    if len(name) > 2 and len(name) < 50 and not name.startswith('First') and not name.startswith('Second') and not name.startswith('Third') and not name.startswith('Fourth'):
        med_drugs.add(name)

print('=== DRUGS MENTIONED IN MEDICINES.TXT ===')
for d in sorted(med_drugs)[:80]:
    print(f'  {d}')
print(f'  ... total: {len(med_drugs)}')

# Find conditions in OPD guide
print('\n=== OPD GUIDE: Looking for condition/protocol headers ===')
opd_conditions = set()
for m in re.finditer(r'^(?:(\d+\))\s*([A-Z][A-Za-z\s\-/]+?)(?:\s*\(|$|\n))', opd, re.MULTILINE):
    name = m.group(2).strip()
    if len(name) > 3 and len(name) < 80:
        opd_conditions.add(name)

for c in sorted(opd_conditions):
    print(f'  {c}')
print(f'  total: {len(opd_conditions)}')
