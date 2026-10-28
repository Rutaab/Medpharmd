# Module 08: Multiple IV Bolus Dosing

## The Principles of Drug Accumulation
In clinical practice, most drugs are administered repeatedly to maintain a therapeutic effect over a prolonged period. When an IV bolus dose is administered at regular intervals ($\tau$), and the dosing interval is shorter than the time required for complete elimination, the drug starts to accumulate in the body. Accumulation continues until the amount of drug eliminated during one dosing interval exactly equals the amount administered in each dose. At this point, the system is said to be at **Steady State** (Shargel & Yu, 2016).

## 1. The Accumulation Factor ($R$)
The extent of drug accumulation depends solely on the elimination rate constant ($k$) and the dosing interval ($\tau$). The accumulation factor ($R$) is defined as the ratio of the concentration after $n$ doses to the concentration after the first dose:
$$ R = \frac{1}{1 - e^{-k\tau}} $$
If $\tau$ is very long compared to the half-life, $e^{-k\tau}$ approaches zero, and $R$ approaches 1 (no accumulation). If $\tau$ is very short, $R$ becomes very large, indicating significant accumulation (Gibaldi & Perrier, 1982).

## 2. Steady-State Concentrations
At steady state, the plasma concentration fluctuates between a maximum (peak) and a minimum (trough) value.

### Steady-State Peak ($C_{max,ss}$)
The peak concentration occurs immediately after an IV bolus dose at steady state:
$$ C_{max,ss} = \frac{C_0}{1 - e^{-k\tau}} $$
Where $C_0 = Dose / V_d$.

### Steady-State Trough ($C_{min,ss}$)
The trough concentration occurs just before the next dose is administered:
$$ C_{min,ss} = C_{max,ss} \cdot e^{-k\tau} = \frac{C_0 \cdot e^{-k\tau}}{1 - e^{-k\tau}} $$

### Average Steady-State Concentration ($C_{av,ss}$)
$C_{av,ss}$ is a theoretical value representing the concentration if the drug were administered as a continuous infusion. It is the most useful parameter for calculating maintenance doses:
$$ C_{av,ss} = \frac{AUC_{0 \to \tau}}{\tau} = \frac{Dose}{Cl \cdot \tau} $$
Where $AUC_{0 \to \tau}$ is the area under the curve during one dosing interval at steady state, which is equal to the $AUC_{0 \to \infty}$ after a single dose (Rowland & Tozer, 2011).

## 3. Time Course to Reach Steady State
A fundamental principle of first-order kinetics is that the time required to reach steady state depends *only* on the elimination half-life ($t_{1/2}$) of the drug. It does not depend on the dose, the dosing interval, or the number of doses.
- After 1 $t_{1/2}$: 50% of steady state.
- After 3 $t_{1/2}$: 87.5% of steady state.
- After 5 $t_{1/2}$: 96.9% of steady state.
Clinically, steady state is considered achieved after 4 to 5 half-lives.

## 4. Fluctuations and Dosing Interval Selection
The degree of fluctuation between $C_{max,ss}$ and $C_{min,ss}$ is determined by the dosing interval relative to the half-life.
- **Short $\tau$**: Results in smaller fluctuations and a smoother concentration profile.
- **Long $\tau$**: Results in larger fluctuations. If the fluctuation is too large, the concentration may exceed the toxic threshold at the peak or fall below the minimum effective concentration at the trough.

The goal of a multiple dosing regimen is to keep the plasma concentration within the **Therapeutic Window**.

## 5. Loading Dose in Multiple Dosing
If a rapid therapeutic effect is needed, a loading dose ($D_L$) can be given to reach steady state immediately. Ideally, the loading dose is calculated to achieve the $C_{max,ss}$ right away:
$$ D_L = \text{Maintenance Dose} \cdot R = \frac{D_M}{1 - e^{-k\tau}} $$
If the dosing interval $\tau$ is equal to the half-life ($t_{1/2}$), the loading dose is exactly twice the maintenance dose (Ritschel & Kearns, 2009).

## Summary Table: Multiple Dosing Parameters
| Parameter | Symbol | Definition/Formula |
| :--- | :--- | :--- |
| Dosing Interval | $\tau$ | Time between consecutive doses |
| Accumulation Factor | $R$ | $1 / (1 - e^{-k\tau})$ |
| SS Peak | $C_{max,ss}$ | $C_0 \cdot R$ |
| SS Average | $C_{av,ss}$ | $Dose / (Cl \cdot \tau)$ |
| Loading Dose | $D_L$ | $V_d \cdot C_{max,ss}$ |

## References
1. **Shargel, L., & Yu, A. B.** (2016). *Applied Biopharmaceutics & Pharmacokinetics* (7th ed.). McGraw-Hill Education.
2. **Gibaldi, M., & Perrier, D.** (1982). *Pharmacokinetics* (2nd ed.). Marcel Dekker.
3. **Rowland, M., & Tozer, T. N.** (2011). *Clinical Pharmacokinetics and Pharmacodynamics: Concepts and Applications* (4th ed.). Lippincott Williams & Wilkins.
4. **Ritschel, W. A., & Kearns, G. L.** (2009). *Handbook of Basic Pharmacokinetics* (7th ed.). American Pharmacists Association.
