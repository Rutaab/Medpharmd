# Fix evaporation heading levels: downgrade standalone # to ## and adjust children
in_equipments = False

with open("Material/Industrial Pharmacy/evaporation_array.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

# Extract just the array lines
array_start = False
items = []
for line in lines:
    s = line.strip()
    if s.startswith("'#"):
        array_start = True
    if array_start:
        if s.endswith("',") or s.endswith("'"):
            # Extract content between quotes
            content = s[1:-2] if s.endswith("',") else s[1:-1]
            items.append(content)
        elif s == "'" or s == "'":
            items.append("")

# Fix the heading levels
fixed = []
for item in items:
    if item == "# Principle":
        fixed.append("## Principle")
    elif item == "# Equipments":
        fixed.append("## Equipments")
    elif item == "# Entrainment separators":
        fixed.append("## Entrainment Separators")
    elif item == "# Common accessories used with evaporators":
        fixed.append("## Common Accessories")
    elif item.startswith("## ") and "equipments" in items[max(0, items.index(item)-30):items.index(item)]:
        # Only if preceded by # Equipments
        pass  # keep as is
    else:
        fixed.append(item)

# Actually, let me just identify the pattern more carefully
# The issue is items starting with ## that are under # Equipments should be ###
# Let me track when we're under each section

fixed = []
current_h1 = None
for item in items:
    if item == "# Evaporation":
        current_h1 = "evaporation"
        fixed.append(item)
    elif item == "# Principle":
        fixed.append("## Principle")
    elif item == "# Equipments":
        fixed.append("## Equipments")
    elif item == "# Entrainment separators":
        fixed.append("## Entrainment Separators")
    elif item == "# Common accessories used with evaporators":
        fixed.append("## Common Accessories")
    elif item.startswith("## ") and current_h1 == "equipments":
        # Under Equipments, ## should be ###
        fixed.append("###" + item[2:])
    elif item.startswith("### ") and current_h1 == "equipments":
        # Keep ### as is under Equipments
        fixed.append(item)
    else:
        # Track if we're in the equipments section
        if item == "## Equipments":
            current_h1 = "equipments"
        elif item.startswith("## ") and current_h1 == "equipments":
            current_h1 = "equipments"
        elif item.startswith("# ") and item != "# Evaporation":
            current_h1 = None
        fixed.append(item)

# Write corrected array
with open("Material/Industrial Pharmacy/evaporation_fixed.txt", "w", encoding="utf-8") as f:
    f.write("export const evaporationContent = [\n")
    for l in fixed:
        escaped = l.replace("\\", "\\\\").replace("'", "\\'")
        f.write(f"  '{escaped}',\n")
    f.write("];\n")
    f.write(f"// Evaporation lines: {len(fixed)}\n")

print(f"Fixed evaporation: {len(fixed)} lines")
