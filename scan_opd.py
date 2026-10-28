import re

with open('Prototype/Material/drug-opd-guide-1st-edition.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find all page-level content sections (lines starting with uppercase after "--- Page")
in_section = False
for i, line in enumerate(lines):
    stripped = line.strip()
    if stripped.startswith('--- Page'):
        in_section = True
        continue
    if in_section and stripped and len(stripped) > 5:
        # Check if it's a major section header (uppercase, not too long, unique)
        if stripped.isupper() and len(stripped) < 80 and not any(c.isdigit() for c in stripped[:3]):
            safe = stripped.encode('ascii', 'replace').decode('ascii')
            print(f'Page section at L{i+1}: {safe}')
        in_section = False
