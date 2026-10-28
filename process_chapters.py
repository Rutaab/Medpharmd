import re, sys

def process_file(input_path, label):
    with open(input_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    # Stop before OCR section
    content_lines = []
    for line in lines:
        if line.strip() == "---":
            break
        content_lines.append(line.rstrip())

    output = []
    for i, line in enumerate(content_lines):
        text = line.strip()
        if not text:
            if output and output[-1] != "":
                output.append("")
            continue

        if text == f"# {label}":
            output.append(f"# {label}")
            continue

        clean = re.sub(r'^\*{3,}', '', text).strip()

        if clean.startswith('#'):
            output.append(clean)
            continue

        bold_heading = re.match(r'^\*\*(.+?)\*\*:?$', clean)
        if bold_heading and len(clean) < 60:
            h = bold_heading.group(1)
            if h != label:
                output.append(f"## {h}")
            continue

        if re.match(r'^[A-Z][A-Z\s\/\-]{3,}$', clean) and len(clean) < 50:
            output.append(f"## {clean}")
            continue

        output.append(clean)

    cleaned = []
    blank = 0
    for l in output:
        if l == "":
            blank += 1
            if blank <= 1:
                cleaned.append(l)
        else:
            blank = 0
            cleaned.append(l)

    out_path = f"Material/Industrial Pharmacy/{label.lower()}_array.txt"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(f"export const {label.lower()}Content = [\n")
        for l in cleaned:
            escaped = l.replace("\\", "\\\\").replace("'", "\\'")
            f.write(f"  '{escaped}',\n")
        f.write("];\n")
        f.write(f"// {label} lines: {len(cleaned)}\n")
    print(f"Written: {out_path} ({len(cleaned)} lines)")

process_file("Material/Industrial Pharmacy/Evaporation.md", "Evaporation")
process_file("Material/Industrial Pharmacy/Filteration.md", "Filtration")
