import re

with open('Prototype/Material/Medicines.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    stripped = line.strip()
    if not stripped:
        continue
    # Find drug class headers (numbered entries like "1. Penicillins", "2. Cephalosporins", etc.)
    m = re.match(r'^(\d+)\.\s+(.+)', stripped)
    if m:
        safe = stripped.encode('ascii', 'replace').decode('ascii')
        print(f'L{i+1}: {safe[:120]}')
