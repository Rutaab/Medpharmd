import re

path = r'D:\ME\Pharmacy\drug-reference-app\Material\Analysis\Pharmaceutical Analysis.txt'
with open(path, encoding='utf-8') as f:
    raw = f.read()

cleaned = re.sub(r'[^\x20-\x7E\n]', '', raw)
all_lines = cleaned.split('\n')

# Print lines 262-500 with line numbers to see the structure
for i in range(262, min(500, len(all_lines))):
    s = all_lines[i].strip()
    if s:
        print(f"{i+1}: {s[:120]}")
