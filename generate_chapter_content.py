import re
from pathlib import Path

MATERIAL = Path(r"D:\ME\Pharmacy\drug-reference-app\Material")
OUTPUT = Path(r"D:\ME\Pharmacy\drug-reference-app\src\data\chapterContent.js")


def escape_js(text):
    return text.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n")


def read_lines(path):
    with open(path, encoding="utf-8") as f:
        raw = f.read()
    lines = raw.split("\n")
    result = []
    for line in lines:
        s = line.strip()
        if s.startswith("--- Page") or s.startswith("==="):
            continue
        if not s or len(s) < 4:
            continue
        cleaned = re.sub(r'[^\x20-\x7E]+', '', s).strip()
        if cleaned and len(cleaned) > 3:
            result.append(escape_js(cleaned))
    return result


def read_md_lines(path):
    with open(path, encoding="utf-8") as f:
        raw = f.read()
    lines = raw.split("\n")
    result = []
    for line in lines:
        s = line.strip()
        if not s:
            continue
        m = re.match(r'^(#{1,4})\s+(.+)', s)
        if m:
            heading_text = m.group(2).strip()
            if heading_text:
                result.append(escape_js(s))
            continue
        if len(s) >= 4:
            result.append(escape_js(s))
    return result


# ─── COGNOSY-II ───
cognosy_dir = MATERIAL / "Cognosy-II"

cognosy_source = [
    ("Chromatography & Separation Techniques", "Chromatography Principles and Applications.txt"),
    ("Carbohydrates", "Carbohydrates.txt"),
    ("Glycosides", "Glycosides.txt"),
    ("Tannins", "Tannins.txt"),
    ("Volatile Oils", "Volatile Oils.txt"),
    ("Resins & Resin Combinations", None),
    ("Alkaloids", "Alkaloids.md"),
    ("Lipids", "Lipids.txt"),
    ("Steroids", "Steroids.txt"),
    ("Tumour Inhibitors from Plants", "Anti Tumor and Anti AIDS.txt"),
]

fallback_content = {
    0: [
        "Chromatography Principles and Applications",
        "1. Introduction to Chromatography",
        "Chromatography is fundamentally a separation process based upon the differential distribution of a mixture between two phases.",
        "2. Types of Chromatography",
        "Chromatography can be classified based on several criteria.",
        "[Note: Extended content from PDF extraction is no longer available. Please re-extract from source PDFs.]",
    ],
    1: [
        "Carbohydrates",
        "Carbohydrates are polyhydroxy aldehydes or ketones, or substances that yield these on hydrolysis.",
        "1. Classification of Carbohydrates",
        "Monosaccharides, Oligosaccharides, Polysaccharides.",
        "[Note: Extended content from PDF extraction is no longer available. Please re-extract from source PDFs.]",
    ],
    3: [
        "Tannins",
        "Tannins are complex polyphenolic compounds of plant origin, capable of combining with proteins to form stable water-insoluble compounds.",
        "[Note: Extended content from PDF extraction is no longer available. Please re-extract from source PDFs.]",
    ],
    4: [
        "Volatile Oils",
        "Volatile oils (essential oils) are volatile, aromatic, oily liquids obtained from plant material.",
        "[Note: Extended content from PDF extraction is no longer available. Please re-extract from source PDFs.]",
    ],
    7: [
        "Lipids",
        "Lipids are a group of naturally occurring substances consisting of the fatty acid esters of glycerol (fixed oils and fats) and related compounds.",
        "[Note: Extended content from PDF extraction is no longer available. Please re-extract from source PDFs.]",
    ],
    8: [
        "Steroids",
        "Steroids are biologically active organic compounds with a characteristic molecular structure of four rings arranged in a specific molecular configuration.",
        "[Note: Extended content from PDF extraction is no longer available. Please re-extract from source PDFs.]",
    ],
    9: [
        "Tumour Inhibitors from Plants",
        "Many plants contain compounds that have demonstrated anti-tumour and anti-AIDS activity.",
        "[Note: Extended content from PDF extraction is no longer available. Please re-extract from source PDFs.]",
    ],
}

cognosy_content = {}
for idx, (title, filename) in enumerate(cognosy_source):
    key = str(idx)
    if filename:
        fp = cognosy_dir / filename
        if fp.exists():
            if filename.endswith('.md'):
                items = read_md_lines(fp)
                if items:
                    cognosy_content[key] = items
                    continue
            else:
                items = read_lines(fp)
                if items:
                    cognosy_content[key] = items
                    continue
    # Fallback: use hardcoded content or Resins hardcoded data
    if filename is None and title == "Resins & Resin Combinations":
        cognosy_content[key] = [
            escape_js("Resins & Resin Combinations"),
            escape_js("Resins are amorphous products of complex chemical nature formed in specialised plant cells, typically hard, transparent or translucent, softening or melting when heated."),
            escape_js("Properties: Insoluble in water, soluble in organic solvents (alcohol, ether, chloroform). Non-crystalline, burn with smoky flame."),
            escape_js("Resins: True resins - mixtures of resin acids, resin alcohols, resin phenols, esters. Examples: rosin (Pinus), cannabis resin."),
            escape_js("Glycoresins (Glycosidal Resins): Resins yielding sugars on hydrolysis. Examples: podophyllum (Podophyllum peltatum), jalap (Ipomoea purga) - powerful purgatives."),
            escape_js("Oleoresins: Natural mixtures of resin and volatile oil (semi-solid or liquid). Examples: capsicum (capsaicin), ginger (gingerols, shogaols)."),
            escape_js("Oleo-gum Resins: Natural mixtures of resin, gum, and volatile oil. Example: asafoetida (Ferula) - carminative, antispasmodic."),
            escape_js("Balsams: Resinous mixtures with high proportions of aromatic balsamic acids (benzoic, cinnamic). Examples: benzoin (Styrax), tolu balsam, Peru balsam."),
            escape_js("Storax (Styrax): From Liquidambar orientalis. Contains cinnamic acid, styrene, resinous substances. Expectorant, skin conditions."),
            escape_js("Identification: Characteristic colour reactions, solubility behaviour, melting point characteristics."),
            escape_js("Uses: Active ingredients (purgatives, counter-irritants, carminatives), flavouring agents (balsams, oleoresins), excipients."),
        ]
    elif idx in fallback_content:
        cognosy_content[key] = [escape_js(l) for l in fallback_content[idx]]
    else:
        cognosy_content[key] = [f"[Content not available for: {title}]"]


# ─── ANALYSIS ───
analysis_path = MATERIAL / "Analysis" / "Pharmaceutical Analysis.txt"

if analysis_path.exists():
    with open(analysis_path, encoding="utf-8") as f:
        raw = f.read()
    cleaned = re.sub(r'[^\x20-\x7E\n]', '', raw)
    all_lines = cleaned.split('\n')

    analysis_ranges = [
        ("Introduction to Spectroscopy", 216, 265),
        ("Atomic Absorption Spectroscopy (AAS)", 265, 403),
        ("Atomic Emission Spectroscopy (AES) & Flame Photometry", 540, 705),
        ("Molecular Fluorescence Spectroscopy", 472, 540),
        ("IR Spectroscopy", 705, 1132),
        ("Mass Spectroscopy (MS)", 1132, 1427),
        ("NMR Spectroscopy", 1427, 1783),
        ("UV/Visible Spectroscopy", 1783, 2408),
        ("Chromatographic Methods", 2408, 4122),
        ("Capillary Electrophoresis (CE)", 4123, 4152),
        ("Electrochemical Methods", 4153, 4558),
        ("Titrimetric Analysis", 5435, 6205),
        ("Official Inorganic Pharmaceuticals", 4559, 5434),
        ("Differential Scanning Calorimetry (DSC)", -1, -1),
    ]

    analysis_chapter_titles = [r[0] for r in analysis_ranges]
    analysis_content = {}

    for idx, (title, start, end) in enumerate(analysis_ranges):
        key = str(idx)
        lines = []
        if start < 0 or start >= len(all_lines):
            analysis_content[key] = ['[Content for this chapter is not available in the extracted text]']
            continue
        end = min(end, len(all_lines)) if end > 0 else len(all_lines)
        for i in range(start, end):
            s = all_lines[i].strip()
            if not s or len(s) < 4:
                continue
            if s.startswith('--- Page') or s.startswith('==='):
                continue
            cleaned = re.sub(r'[^\x20-\x7E]+', '', s).strip()
            if cleaned:
                lines.append(escape_js(cleaned))
        # Add AES intro (lines 403-471) to AES chapter (idx=2)
        if idx == 2:
            for i in range(403, 472):
                if i < len(all_lines):
                    s = all_lines[i].strip()
                    if not s or len(s) < 4:
                        continue
                    if s.startswith('--- Page') or s.startswith('==='):
                        continue
                    cleaned = re.sub(r'[^\x20-\x7E]+', '', s).strip()
                    if cleaned:
                        lines.append(escape_js(cleaned))
        analysis_content[key] = lines
else:
    # Fallback: minimal content
    analysis_chapter_titles = [
        "Introduction to Spectroscopy", "Atomic Absorption Spectroscopy (AAS)",
        "Atomic Emission Spectroscopy (AES) & Flame Photometry", "Molecular Fluorescence Spectroscopy",
        "IR Spectroscopy", "Mass Spectroscopy (MS)", "NMR Spectroscopy", "UV/Visible Spectroscopy",
        "Chromatographic Methods", "Capillary Electrophoresis (CE)", "Electrochemical Methods",
        "Titrimetric Analysis", "Official Inorganic Pharmaceuticals", "Differential Scanning Calorimetry (DSC)",
    ]
    analysis_content = {}
    for idx in range(len(analysis_chapter_titles)):
        analysis_content[str(idx)] = [f"[Analysis text file not found. Please restore {analysis_path.name}]"]


# ─── PATHOLOGY ───
pathology_dir = MATERIAL / "Pathology"

pathology_source = [
    ("Cellular Injury, Death & Adaptation", "Cellular Injury, Death & Adaptation.md"),
    ("Inflammation and Tissue Repair", "Inflammation and Tissue Repair.md"),
    ("Hypertension (Vascular Diseases)", "Hypertension.md"),
    ("Tumour & Cancer", "Cancer F.md"),
    ("Peptic Ulcer Disease (PUD)", "Peptic Ulcer Disease PUD.md"),
    ("Immunity", "Immunity.md"),
]

pathology_content = {}
for idx, (title, filename) in enumerate(pathology_source):
    key = str(idx)
    fp = pathology_dir / filename
    if fp.exists():
        items = read_md_lines(fp)
        if items:
            pathology_content[key] = items
            continue
    pathology_content[key] = [escape_js(f"[Content not available for: {title}]")]


# ─── PHARMACOLOGY-II ───
# Keys must match syllabus chapter indices (NSAIDs=7, Antifungal=8)
cology_dir = MATERIAL / "Cology-II"

cology_source = [
    (7, "NSAIDs (Non-Steroidal Anti-Inflammatory Drugs)", "NSAIDs.md"),
    (8, "Antifungal Drugs", "Antifungal Drugs and Fungal Diseases.md"),
]

cology_content = {}
for key, title, filename in cology_source:
    fp = cology_dir / filename
    if fp.exists():
        items = read_md_lines(fp)
        if items:
            cology_content[str(key)] = items
            continue
    cology_content[str(key)] = [escape_js(f"[Content not available for: {title}]")]


# ─── GENERATE JS ───
def fmt_paras(paras):
    if not paras:
        return "        '[Content to be added]'"
    items = []
    for p in paras:
        items.append(f"        '{p}'")
    return ",\n".join(items)


js = """// Auto-generated from PDF extraction - contains full chapter content
export const chapterContent = {
"""

# Pharmacognosy-II
js += "  'pharmacognosy-ii': {\n"
for idx in sorted(cognosy_content.keys(), key=int):
    title = cognosy_source[int(idx)][0]
    paras = cognosy_content[idx]
    js += f"    {idx}: {{\n"
    js += f"      title: '{title}',\n"
    js += f"      content: [\n{fmt_paras(paras)}\n      ],\n"
    js += "    },\n"
js += "  },\n"

# Pharmaceutical Chemistry-II
js += "  'pharmaceutical-chemistry-ii': {\n"
for idx in sorted(analysis_content.keys(), key=int):
    title = analysis_chapter_titles[int(idx)]
    paras = analysis_content[idx]
    js += f"    {idx}: {{\n"
    js += f"      title: '{title}',\n"
    js += f"      content: [\n{fmt_paras(paras)}\n      ],\n"
    js += "    },\n"
js += "  },\n"

# Pathology
js += "  'pathology': {\n"
for idx in sorted(pathology_content.keys(), key=int):
    title = pathology_source[int(idx)][0]
    paras = pathology_content[idx]
    js += f"    {idx}: {{\n"
    js += f"      title: '{title}',\n"
    js += f"      content: [\n{fmt_paras(paras)}\n      ],\n"
    js += "    },\n"
js += "  },\n"

# Pharmacology-II
js += "  'pharmacology-therapeutics-ii': {\n"
for key, title, filename in cology_source:
    skey = str(key)
    paras = cology_content[skey]
    js += f"    {skey}: {{\n"
    js += f"      title: '{title}',\n"
    js += f"      content: [\n{fmt_paras(paras)}\n      ],\n"
    js += "    },\n"
js += "  },\n"

js += "};\n"

OUTPUT.write_text(js, encoding="utf-8")

total = 0
print("Generated chapterContent.js\n")
print("Pharmacognosy-II:")
for idx in sorted(cognosy_content.keys(), key=int):
    n = len(cognosy_content[idx])
    total += n
    fn = cognosy_source[int(idx)][1] or "(hardcoded)"
    status = "OK" if n > 5 else "FALLBACK"
    print(f"  [{idx}] {cognosy_source[int(idx)][0]}: {n} items [{status}] src={fn}")

print(f"\nPharmaceutical Chemistry-II:")
for idx in sorted(analysis_content.keys(), key=int):
    n = len(analysis_content[idx])
    total += n
    print(f"  [{idx}] {analysis_chapter_titles[int(idx)]}: {n} items")

print(f"\nPathology:")
for idx in sorted(pathology_content.keys(), key=int):
    n = len(pathology_content[idx])
    total += n
    fn = pathology_source[int(idx)][1]
    status = "OK" if n > 5 else "LOW"
    print(f"  [{idx}] {pathology_source[int(idx)][0]}: {n} items [{status}] src={fn}")

print(f"\nPharmacology-II:")
for key, title, fn in cology_source:
    skey = str(key)
    n = len(cology_content[skey])
    total += n
    status = "OK" if n > 5 else "LOW"
    print(f"  [{skey}] {title}: {n} items [{status}] src={fn}")

print(f"\nTotal: {total} items")
