# Module 06: Wagner-Nelson Method

## Purpose
The Wagner-Nelson method is used to determine the cumulative amount of drug absorbed over time from plasma concentration data, without assuming a specific absorption model (though it assumes a one-compartment body).

## The Principle
The total amount of drug absorbed up to time $t$ ($X_A$) is the sum of the drug in the body and the drug already eliminated.

## Formula
$$ \frac{X_A}{X_{A\infty}} = \frac{C_t + k_e \cdot AUC_{0-t}}{k_e \cdot AUC_{0-\infty}} $$
Where:
- $X_A / X_{A\infty}$: Fraction of drug absorbed at time $t$.
- $C_t$: Concentration at time $t$.
- $k_e$: Elimination rate constant (determined from IV data or terminal oral phase).

## Applications
- Determining the **absorption profile** of a dosage form.
- Checking for zero-order vs. first-order absorption.
- Correlation with *in vitro* dissolution data (IVIVC).
