import re

with open('src/pages/IndustryPage.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.index("const dryingContent = [")
end = text.index("];", start) + 2
drying = text[start:end]

with open('temp_evap2.txt', 'r', encoding='utf-8') as f:
    evap = re.sub(r'^export const \w+ = \[', 'export const evaporationContent = [', f.read(), flags=re.MULTILINE)

with open('temp_filt2.txt', 'r', encoding='utf-8') as f:
    filt = re.sub(r'^export const \w+ = \[', 'export const filtrationContent = [', f.read(), flags=re.MULTILINE)

with open('src/data/industryContent.js', 'w', encoding='utf-8') as f:
    f.write(drying)
    f.write('\n\n')
    f.write(evap)
    f.write('\n\n')
    f.write(filt)

print('Written src/data/industryContent.js successfully')
