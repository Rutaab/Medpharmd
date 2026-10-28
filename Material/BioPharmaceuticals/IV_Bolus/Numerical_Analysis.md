# Numerical Analysis: One-Compartment IV Bolus

## Formula Reference
1. $k = \frac{\ln(C_1) - \ln(C_2)}{t_2 - t_1}$
2. $t_{1/2} = \frac{0.693}{k}$
3. $V_d = \frac{Dose}{C_0}$
4. $Cl = k \cdot V_d$
5. $AUC = \frac{C_0}{k}$

---

## Problem 1: Basic Parameter Calculation
**Question**: A 500 mg dose of a drug is given as an IV bolus. The plasma concentration at 2 hours is 15 mg/L and at 8 hours is 5 mg/L. Calculate $k$, $t_{1/2}$, $V_d$, and $Cl$.

**Solution**:
1. **Find $k$**:
   $$ k = \frac{\ln(15) - \ln(5)}{8 - 2} = \frac{2.708 - 1.609}{6} = \frac{1.099}{6} = 0.183\ hr^{-1} $$
2. **Find $t_{1/2}$**:
   $$ t_{1/2} = \frac{0.693}{0.183} = 3.79\ hr $$
3. **Find $C_0$**:
   $$ \ln(C_0) = \ln(C) + kt = \ln(15) + (0.183 \cdot 2) = 2.708 + 0.366 = 3.074 $$
   $$ C_0 = e^{3.074} = 21.63\ mg/L $$
4. **Find $V_d$**:
   $$ V_d = \frac{500\ mg}{21.63\ mg/L} = 23.12\ L $$
5. **Find $Cl$**:
   $$ Cl = 0.183 \cdot 23.12 = 4.23\ L/hr $$

---

## Problem 2: Loading Dose Calculation
**Question**: A drug has a $V_d$ of 40 L and a $k$ of 0.1 $hr^{-1}$. What loading dose is required to achieve a target concentration of 20 mg/L?

**Solution**:
$$ LD = C_{target} \cdot V_d $$
$$ LD = 20\ mg/L \cdot 40\ L = 800\ mg $$

---

## Problem 3: Predicting Concentration
**Question**: For the drug in Problem 2, what will be the plasma concentration 12 hours after the loading dose?

**Solution**:
$$ C = C_0 \cdot e^{-kt} $$
$$ C = 20 \cdot e^{-(0.1 \cdot 12)} = 20 \cdot e^{-1.2} = 20 \cdot 0.301 = 6.02\ mg/L $$

---

## Problem 4: Multiple Dosing (Steady State)
**Question**: A patient is given 250 mg of a drug every 6 hours. $k = 0.115\ hr^{-1}$ and $V_d = 20\ L$. Calculate $C_{max,ss}$ and $C_{min,ss}$.

**Solution**:
1. **Find $C_0$ per dose**: $C_0 = 250 / 20 = 12.5\ mg/L$
2. **Find $e^{-k\tau}$**: $e^{-(0.115 \cdot 6)} = e^{-0.69} = 0.502$
3. **Calculate $C_{max,ss}$**:
   $$ C_{max,ss} = \frac{12.5}{1 - 0.502} = \frac{12.5}{0.498} = 25.10\ mg/L $$
4. **Calculate $C_{min,ss}$**:
   $$ C_{min,ss} = 25.10 \cdot 0.502 = 12.60\ mg/L $$
