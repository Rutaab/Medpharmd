import re

with open('Prototype/Material/Medicines.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Find section headers
sections = re.findall(r'(?:^|\n)\s*(\d+\.\s*[A-Z][^\n]+?)(?:\s*\n)', content)
for s in sections[:30]:
    print(s)
print(f'\n... found {len(sections)} numbered sections')

# Also parse the drug entries - pattern: brand tables with drug name, dosage, form, manufacturer
pages = re.findall(r'--- Page (\d+) ---', content)
print(f'Total pages: {len(pages)}')
print(f'Total chars: {len(content)}')
