# Module 01: Absorption Kinetics (First-Order)

## Overview
Oral administration involves a delay as the drug must be absorbed from the gastrointestinal tract into the systemic circulation. In a one-compartment model, this is usually described as a first-order process.

## The Model
```
[ GI Tract (Dose) ] --ka--> [ Central Compartment (Vd) ] --ke--> Elimination
```

## Mathematical Equation
The plasma concentration ($C$) at time $t$ is given by the biexponential equation:
$$ C = \frac{F \cdot Dose \cdot k_a}{V_d \cdot (k_a - k_e)} \cdot (e^{-k_e t} - e^{-k_a t}) $$
Where:
- $F$: Bioavailability (fraction absorbed).
- $k_a$: Absorption rate constant.
- $k_e$: Elimination rate constant.

## Absorption Phase vs. Elimination Phase
- **Early Phase**: $k_a$ dominates as the drug enters the blood faster than it leaves.
- **Terminal Phase**: Once absorption is complete, the curve is dominated by $k_e$.
- **Peak**: The point where absorption rate equals elimination rate.
