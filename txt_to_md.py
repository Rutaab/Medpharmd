import re
import sys
from pathlib import Path


def clean_ocr(text):
    result = (text
        .replace('|', 'I')
        .replace('٠', 'o')
        .replace('\u2013', '-')
        .replace('\u2014', '--')
        .replace('\u2018', "'")
        .replace('\u2019', "'")
        .replace('\u201c', '"')
        .replace('\u201d', '"')
    )
    # Fix OCR-corrupted Roman numerals at line start (e.g., "Il." -> "II.", "lll." -> "III.")
    result = re.sub(r'^Il\.', 'II.', result)
    result = re.sub(r'^lll\.', 'III.', result)
    result = re.sub(r'^iv\.', 'IV.', result)
    result = re.sub(r'^vl\.', 'VI.', result)
    result = re.sub(r'^xl\.', 'XL.', result)
    result = re.sub(r'^lx\.', 'LX.', result)
    result = re.sub(r'^xc\.', 'XC.', result)
    # Fix general lowercase Roman numerals with period (for any position)
    result = re.sub(r'\bIl\.\s+[A-Z]', 'II. ', result)
    result = re.sub(r'\blll\.\s+[A-Z]', 'III. ', result)
    # Fix "0-" at start of meaningful content -> "O-"
    result = re.sub(r'\b0-([A-Z][a-z])', r'O-\1', result)
    return result


def heading_level(line):
    s = line.strip()
    if not s or len(s) < 3:
        return None
    if len(s) > 90:
        return None

    s_clean = clean_ocr(s)

    if re.match(r'^\d+\.\d+\.\d+\s', s_clean):
        return 3
    if re.match(r'^\d+\.\d+\s', s_clean):
        return 2
    if re.match(r'^\d+\s+[A-Z]', s_clean):
        return 1
    if re.match(r'^\d+\.\s+[A-Z]', s_clean):
        return 1
    if re.match(r'^[IVXL]+\.[\s\.]+[A-Z]', s_clean):
        return 1
    if re.match(r'^[IVXL]+\s+[A-Z]', s_clean):
        return 1

    keywords_h2 = [
        'introduction', 'principle', 'classification', 'types?', 'definition',
        'overview', 'properties', 'applications', 'advantages', 'disadvantages',
        'instrumentation', 'conclusion', 'references?', 'general', 'biological',
        'chemical', 'physical', 'functions',
        'preparation', 'extraction', 'isolation', 'identification', 'uses',
        'sources', 'occurrence', 'production', 'methods?', 'cultivation',
        'collection', 'drying', 'storage',
    ]
    pattern = r'^(' + '|'.join(keywords_h2) + r')\b'
    if re.search(pattern, s_clean, re.IGNORECASE) and len(s_clean) < 70:
        return 2
    if re.match(r'^[A-Z][A-Z\s\/\-]{3,}$', s_clean) and len(s_clean) < 50:
        return 1
    return None


def is_page_marker(line):
    return line.strip().startswith('--- Page') or line.strip().startswith('===')


def is_bullet(line):
    s = line.strip()
    if not s:
        return False
    if re.match(r'^[o\-\*•«+]\s', s):
        return True
    if re.match(r'^[=\u2022]\s', s):
        return True
    if re.match(r'^[IVXL]+\.[a-z]', s):
        return False
    return False


def convert_txt_to_md(input_path, output_path=None):
    input_path = Path(input_path)
    if not input_path.exists():
        print(f"Error: File not found: {input_path}")
        return

    if output_path is None:
        output_path = input_path.with_suffix('.md')

    with open(input_path, encoding='utf-8') as f:
        raw = f.read()

    lines = raw.split('\n')
    md_lines = []
    first_line = True

    for line in lines:
        s = line.rstrip()

        if is_page_marker(s):
            continue

        cleaned = re.sub(r'[^\x20-\x7E]', '', s).strip()
        if not cleaned:
            if md_lines and md_lines[-1] != '':
                md_lines.append('')
            continue

        if len(cleaned) < 4:
            continue

        cleaned = clean_ocr(cleaned)
        hl = heading_level(cleaned)

        # Detect first meaningful line as title (h1) if it's short
        if first_line and len(cleaned) < 60 and not hl:
            hl = 1

        if hl:
            prefix = '#' * hl
            if md_lines and md_lines[-1] != '':
                md_lines.append('')
            md_lines.append(f'{prefix} {cleaned}')
            md_lines.append('')
            first_line = False
            continue

        if is_bullet(cleaned):
            text = re.sub(r'^[o\-\*•«+]\s*', '', cleaned)
            md_lines.append(f'- {text}')
            first_line = False
            continue

        md_lines.append(cleaned)
        md_lines.append('')
        first_line = False

    # Clean up blank lines
    result = []
    blanks = 0
    for l in md_lines:
        if l == '':
            blanks += 1
            if blanks <= 1:
                result.append(l)
        else:
            blanks = 0
            result.append(l)

    output = '\n'.join(result).strip() + '\n'
    output_path = Path(output_path)
    output_path.write_text(output, encoding='utf-8')

    heading_count = sum(1 for l in result if l.startswith('#'))
    para_count = sum(1 for l in result if l.strip() and not l.startswith('#') and not l.startswith('-'))
    bullet_count = sum(1 for l in result if l.startswith('- '))
    print(f"Converted: {input_path.name} -> {output_path.name}")
    print(f"  {heading_count} headings, {para_count} paragraphs, {bullet_count} bullets, {len(result)} lines")


def convert_all(input_dir):
    path = Path(input_dir)
    for f in sorted(path.glob('*.txt')):
        convert_txt_to_md(f)


if __name__ == '__main__':
    args = sys.argv[1:]
    if not args:
        print("Usage: python txt_to_md.py <input.txt> [output.md]")
        print("       python txt_to_md.py <input_dir>  (converts all .txt in dir)")
        sys.exit(1)

    input_path = Path(args[0])
    output_path = Path(args[1]) if len(args) > 1 else None

    if input_path.is_dir():
        convert_all(input_path)
    else:
        convert_txt_to_md(input_path, output_path)
