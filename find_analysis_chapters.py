import re

path = r'D:\ME\Pharmacy\drug-reference-app\Material\Analysis\Pharmaceutical Analysis.txt'
with open(path, encoding='utf-8') as f:
    raw = f.read()

cleaned = re.sub(r'[^\x20-\x7E\n]', '', raw)
lines = cleaned.split('\n')

# Search for specific chapter content markers after the TOC (line 261+)
keywords = {
    'IR Spectroscopy': ['IR spectroscopy', 'infrared spectroscopy', 'IR spectrophotometer'],
    'Mass Spectroscopy': ['mass spectroscopy', 'mass spectrometry', 'mass spectrum'],
    'NMR Spectroscopy': ['NMR spectroscopy', 'nuclear magnetic resonance', 'chemical shift'],
    'UV/Visible Spectroscopy': ['UV/Visible', 'ultraviolet and visible', 'UV and visible spectroscopy', 'UV radiation'],
    'Molecular Fluorescence': ['molecular fluorescence', 'fluorescence spectroscopy', 'fluorescence'],
    'Chromatography intro': ['chromatography is a separation', 'types of chromatography'],
    'Thin Layer Chromatography': ['thin layer chromatography', 'TLC'],
    'Column Chromatography': ['column chromatography'],
    'HPLC': ['high performance liquid chromatography', 'HPLC'],
    'GC': ['gas chromatography'],
    'Titration intro': ['titrimetric analysis', 'volumetric analysis'],
}

for keyword, markers in keywords.items():
    found = []
    for i in range(261, min(len(lines), 6000)):
        s = lines[i].strip().lower()
        for m in markers:
            if m in s and len(s) < 120:
                found.append((i+1, lines[i].strip()[:100]))
                break
    if found:
        print(f"\n{keyword}:")
        for ln, txt in found[:2]:
            print(f"  Line {ln}: {txt}")
