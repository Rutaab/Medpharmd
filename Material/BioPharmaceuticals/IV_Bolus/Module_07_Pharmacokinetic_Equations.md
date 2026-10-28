# Module 07: Pharmacokinetic Equations Summary

## Overview of Kinetic Modeling
Pharmacokinetic equations are the mathematical tools used to describe, predict, and quantify the time course of drug concentrations in the body. For the one-compartment open model with an IV bolus dose, these equations are based on first-order kinetics, where the rate of change is proportional to the amount present. This summary provides a comprehensive list of primary and secondary equations essential for clinical and experimental pharmacokinetics (Shargel & Yu, 2016).

## 1. Fundamental Differential Equations
The rate of change of the drug amount ($X$) in the body is described by:
$$ \frac{dX}{dt} = -kX $$
Where $k$ is the first-order elimination rate constant. Converting this to concentration ($C = X / V_d$):
$$ \frac{dC}{dt} = -kC $$
These equations represent the "instantaneous" rate of elimination at any given moment.

## 2. Integrated Concentration-Time Equations
Integrating the differential equations provides the concentration at any specific time $t$:
### Exponential Form
$$ C = C_0 \cdot e^{-kt} $$
Where $C_0$ is the initial concentration at $t=0$. This is the core equation for mono-exponential decline.

### Linearized Logarithmic Forms
To facilitate graphical analysis and calculation of $k$, the exponential equation is often linearized:
- **Natural Logarithm ($\ln$):**
  $$ \ln(C) = \ln(C_0) - kt $$
- **Common Logarithm ($\log_{10}$):**
  $$ \log(C) = \log(C_0) - \frac{kt}{2.303} $$
A plot of $\log(C)$ vs. $t$ yields a straight line with a slope of $-k/2.303$ and a y-intercept of $\log(C_0)$ (Gibaldi & Perrier, 1982).

## 3. Calculation of Primary Parameters
Primary parameters are those that relate to the body's physiological capacity to distribute and eliminate the drug.
- **Initial Concentration ($C_0$):**
  $$ C_0 = \frac{Dose}{V_d} $$
- **Apparent Volume of Distribution ($V_d$):**
  $$ V_d = \frac{Dose}{C_0} = \frac{Dose}{k \cdot AUC} $$
- **Total Body Clearance ($Cl$):**
  $$ Cl = k \cdot V_d = \frac{Dose}{AUC} $$

## 4. Calculation of Secondary Parameters
Secondary parameters are derived from primary parameters and describe the speed of the kinetic processes.
- **Elimination Rate Constant ($k$):**
  $$ k = \frac{Cl}{V_d} = \frac{\ln(C_1) - \ln(C_2)}{t_2 - t_1} $$
- **Elimination Half-Life ($t_{1/2}$):**
  $$ t_{1/2} = \frac{0.693}{k} = \frac{0.693 \cdot V_d}{Cl} $$
- **Mean Residence Time (MRT):**
  $$ MRT = \frac{1}{k} = \frac{t_{1/2}}{0.693} = \frac{AUMC}{AUC} $$

## 5. Area Under the Curve (AUC) Equations
- **From Parameters:**
  $$ AUC_{0 \to \infty} = \frac{C_0}{k} = \frac{Dose}{Cl} $$
- **Trapezoidal Rule (Experimental):**
  $$ AUC_{t_1}^{t_2} = \frac{C_1 + C_2}{2} (t_2 - t_1) $$
- **Terminal Tail Area:**
  $$ AUC_{t_{last} \to \infty} = \frac{C_{last}}{k} $$

## 6. Clinical Prediction Equations
These are used to determine future concentrations or adjust doses:
- **Predicting Concentration ($C_{future}$):**
  $$ C_{future} = C_{known} \cdot e^{-k \cdot \Delta t} $$
- **Time to reach a specific concentration ($t_{target}$):**
  $$ t = \frac{\ln(C_0) - \ln(C_{target})}{k} $$
- **Loading Dose ($D_L$):**
  $$ D_L = C_{target} \cdot V_d $$

## 7. Relationship Summary Table
| Goal | Formula | Key Reference |
| :--- | :--- | :--- |
| Find amount in body | $X = X_0 \cdot e^{-kt}$ | Shargel et al. |
| Find slope of log-plot | $slope = -k / 2.303$ | Gibaldi & Perrier |
| Relate $Cl$, $V_d$, $t_{1/2}$ | $t_{1/2} = 0.693 \cdot V_d / Cl$ | Rowland & Tozer |
| Calculate total exposure | $AUC = Dose / Cl$ | Ritschel & Kearns |

## References
1. **Shargel, L., & Yu, A. B.** (2016). *Applied Biopharmaceutics & Pharmacokinetics* (7th ed.). McGraw-Hill Education.
2. **Gibaldi, M., & Perrier, D.** (1982). *Pharmacokinetics* (2nd ed.). Marcel Dekker.
3. **Rowland, M., & Tozer, T. N.** (2011). *Clinical Pharmacokinetics and Pharmacodynamics: Concepts and Applications* (4th ed.). Lippincott Williams & Wilkins.
4. **Ritschel, W. A., & Kearns, G. L.** (2009). *Handbook of Basic Pharmacokinetics* (7th ed.). American Pharmacists Association.
