# Numerical Analysis: One-Compartment Oral Administration

## Formula Reference
1. $T_{max} = \frac{\ln(k_a / k_e)}{k_a - k_e}$
2. $C_{max} = \frac{F \cdot Dose}{V_d} \cdot e^{-k_e T_{max}}$
3. $AUC = \frac{F \cdot Dose}{V_d \cdot k_e} = \frac{F \cdot Dose}{Cl}$
4. $F = \frac{AUC_{oral} \cdot Dose_{IV}}{AUC_{IV} \cdot Dose_{oral}}$

---

## Problem 1: $T_{max}$ and $C_{max}$ Calculation
**Question**: A 100 mg oral dose is given ($F=1$). $k_a = 0.8\ hr^{-1}$, $k_e = 0.2\ hr^{-1}$, and $V_d = 10\ L$. Calculate the time of peak concentration and the peak concentration itself.

**Solution**:
1. **Find $T_{max}$**:
   $$ T_{max} = \frac{\ln(0.8 / 0.2)}{0.8 - 0.2} = \frac{\ln(4)}{0.6} = \frac{1.386}{0.6} = 2.31\ hr $$
2. **Find $C_{max}$**:
   $$ C_{max} = \frac{1 \cdot 100}{10} \cdot e^{-(0.2 \cdot 2.31)} = 10 \cdot e^{-0.462} = 10 \cdot 0.630 = 6.30\ mg/L $$

---

## Problem 2: Bioavailability Calculation
**Question**: A drug is given as 500 mg IV and 1000 mg Oral. The AUC for IV is 100 mg·hr/L and for Oral is 120 mg·hr/L. Calculate the absolute bioavailability.

**Solution**:
$$ F = \frac{AUC_{oral} / Dose_{oral}}{AUC_{IV} / Dose_{IV}} $$
$$ F = \frac{120 / 1000}{100 / 500} = \frac{0.12}{0.20} = 0.6\ (or\ 60\%) $$

---

## Problem 3: Absorption Rate Constant ($k_a$) via Method of Residuals
**Question**: From an oral concentration-time curve, the elimination phase equation is $\ln C = 2.5 - 0.1t$. A data point at $t=1$ hr shows a concentration of 8.5 mg/L. Calculate the residual at $t=1$ and the $k_a$ if the residual line equation is $\ln(Residual) = 3.2 - 1.2t$.

**Solution**:
1. **Extrapolated concentration ($C_{extrap}$) at $t=1$**:
   $$ \ln C_{extrap} = 2.5 - 0.1(1) = 2.4 $$
   $$ C_{extrap} = e^{2.4} = 11.02\ mg/L $$
2. **Residual at $t=1$**:
   $$ Residual = C_{extrap} - C_{actual} = 11.02 - 8.5 = 2.52\ mg/L $$
3. **Absorption rate constant ($k_a$)**:
   From the residual line equation $\ln(Residual) = 3.2 - 1.2t$, the slope is $-k_a$.
   $$ k_a = 1.2\ hr^{-1} $$

---

## Problem 4: Wagner-Nelson Method
**Question**: For a one-compartment drug, $k_e = 0.15\ hr^{-1}$. At $t=4$ hr, $C = 10\ mg/L$ and $AUC_{0-4} = 30\ mg\cdot hr/L$. If $AUC_{0-\infty} = 80\ mg\cdot hr/L$, what fraction of the drug has been absorbed by 4 hours?

**Solution**:
$$ \text{Fraction Absorbed} = \frac{C_t + k_e \cdot AUC_{0-t}}{k_e \cdot AUC_{0-\infty}} $$
$$ \text{Fraction Absorbed} = \frac{10 + (0.15 \cdot 30)}{0.15 \cdot 80} = \frac{10 + 4.5}{12} = \frac{14.5}{12} = 1.208 $$
*(Note: A value > 1 usually indicates experimental error or that the model assumptions aren't perfectly met, but for this exercise, it demonstrates the calculation steps).*
*(Corrected calculation for a realistic scenario: if $AUC_{0-\infty}$ was 100: $14.5/15 = 0.967$ or 96.7%)*
