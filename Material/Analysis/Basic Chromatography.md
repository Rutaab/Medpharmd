# Chromatography
Chromatography is a fundamental analytical method used primarily for the separation of a sample mixture. The term itself originates from the Greek words 'Khromatos' meaning "Color" and 'Graphy' meaning "measurements or writing," as it was initially used by Russian botanist Mikhail Tswett to separate colors from vegetable juice. Chromatography is considered both a physical process, because no new compounds are formed, and a chemical process, because the composition changes before and after the analysis.
At its core, chromatography facilitates the separation of substances based on their differential migration within a porous sorptive medium, driven by the flow of solvents. This technique allows for the determination of the number and quantity of components in a mixture.
## Fundamental Principles
The separation in chromatography relies on the distribution of the sample mixture between two phases:
Stationary Phase: This can be a solid or a liquid, typically supported as a thin film on the surface of an inert solid. It is the phase over which the mobile phase flows.
Mobile Phase: This is the solvent, which can be a gas or a liquid, that flows over the stationary phase to separate the components of the mixture.
The underlying basis of chromatography is polarity. Separation occurs because of the differential interaction (based on polarity) of the sample components with the stationary and mobile phases. Components that are less attracted to the solid stationary phase or more soluble in the liquid mobile phase will move faster. The order of polarity refers to the sequence of solvents with increasing or decreasing polarity, for example, n-Hexane < Petroleum ether < Chloroform < Ethyl acetate < Alcohol (Methanol > Ethanol > Propanol > Butanol), with water being the most polar solvent.
## Types of Separation (Development of Chromatogram)
Three main types of chromatographic development:
Frontal Analysis: In this method, the sample solution continuously passes through the sorbent. Strongly adsorbed components occupy active sites, while the least strongly adsorbed components accumulate in the traveling front. The solvent elutes first, followed by the least strongly adsorbed solutes. This method is primarily used for the removal of relatively small, undesirable components.
Displacement Analysis: The mixture is first introduced to the sorbent, followed by a mobile phase containing a strongly adsorbed displacing agent. This agent forces all components out of their sorption sites, causing them to move ahead of the displacer. Components then displace each other, with the least adsorbed leaving the column first. This technique allows for heavy sample loading and is suitable for preparative work.
Elution: In elution, a solute partitions between the two phases, and separation is based on relative retention. Elution can be:
Isocratic: Elution conditions remain constant throughout the experiment.
Gradient: Intentional changes are made to elution conditions during development, which can involve altering the mobile phase composition, temperature, or pressure.
## Theoretical Considerations
Several key parameters and theories are used to describe and quantify chromatographic separation:
Partition Coefficient (K): Represents the equilibrium distribution of an analyte between the stationary (Cs) and mobile (Cm) phases, expressed as K = Cs/Cm. A higher K value means the solute will take a longer time to pass through the column.
Retention Time (tR): The time required for a component to travel the length of the column (L). It can be expressed as tR = L/V, where V is the average linear rate of solute migration.
Capacity Factor (k'): An important experimental parameter describing the migration rate of a solute. It is proportional to the partition coefficient and the ratio of the stationary phase volume (Vs) to the mobile phase volume (Vm). An ideal k' value is typically between 1 and 5. Values less than 1 indicate elution is too rapid, while values greater than 20-30 suggest excessively long elution times. It can be calculated as k' = (tR - tM) / tM, where tM is the dead time.
Retention Volume (VR): The volume of mobile phase needed to elute a sample component. It is calculated as VR = tR × F, where F is the flow rate of the mobile phase. The basic retention equation is VR = VM(1 + K'), where VM is the void volume.
Selectivity Factor (α): Compares the retention of two species (A and B), indicating the column's ability to differentiate them. It is defined as α = KB/KA or α = k'B/k'A.
Resolution (Rs): Measures the degree of separation between two peaks, aiming for narrow peaks and large spacing between them. It is given as Resolution = Peak Separation / Average Peak Width.
Ideal and Non-Ideal Chromatography: In an ideal situation, all molecules would behave identically, and component zones (bands or peaks) would not spread, resulting in sharp, completely separated peaks. In non-ideal situations, random molecular behavior causes zones to become diffuse and broad as they pass through the column.
## Theories of Chromatography
Two main theories explain chromatography:
Plate Theory: Developed by Martin & Synge in 1941, this theory conceptualizes the column as being divided into a number (N) of adjacent imaginary segments called theoretical plates. Within each theoretical plate, analytes are assumed to completely equilibrate between the stationary and mobile phases.
Significance: Greater separation is achieved with a greater number of theoretical plates (N) and a smaller plate height (H or HETP). HETP is defined as L/N, where L is the column length. N can be estimated experimentally from a chromatogram using the formula
N = 16(tR/w)² or N = 5.55(tR/w1/2)².
Predictions: The theory predicts that band spreading (width of bands) increases as retention time or volume increases. It also predicts that a smaller HETP leads to a narrower eluted peak. A key factor for maximum column efficiency (NMax) is a smaller particle size (dp), with NMax = 0.4 L/dp.
Rate Theory: Proposed by van Deemter in 1956, this theory provides a more realistic description by accounting for the dynamics of separation and the time taken for the solute to equilibrate between phases. It considers various processes that contribute to band broadening:
Eddy Diffusion (Term A): Molecules take different paths through the packed stationary phase at random, causing band broadening due to varying path lengths. This term is independent of mobile phase velocity (u).
Longitudinal Diffusion (Term B): Analyte diffuses from the center of the band to the edges, broadening the band. This term dominates at low mobile phase velocities; higher velocities reduce its effect.
Resistance to Mass Transfer (Term C): Analyte requires time to equilibrate between stationary and mobile phases. At high mobile phase velocities, analyte in the mobile phase can move ahead of analyte in the stationary phase, causing broadening.
The Van Deemter equation (HETP = A + B/u + Cu) describes how these factors contribute to plate height, where 'u' is the average velocity of the mobile phase. A plot of plate height vs. average linear velocity of the mobile phase (Van Deemter plot) is useful for determining the optimum flow rate.
## General Instrumentation
A typical chromatographic system, particularly column chromatography, consists of several key components:
A Stationary Phase: Chosen to be appropriate for the analytes being separated.
A Column: Contains the stationary phase, with dimensions varying by technique (e.g., stainless steel or glass, 25-50 cm long with 4mm internal diameter for liquid chromatography).
A Mobile Phase and Delivery System: The solvent and the mechanism (e.g., pumping system or gas pressure) to deliver it through the column at a constant rate.
An Injector System: Delivers the test samples to the top of the column in a reproducible manner.
A Detector and Chart Recorder: Continuously records the presence of analytes as they emerge from the column, often based on physical parameters like visible or ultraviolet absorption or fluorescence. Each separated analyte typically appears as a peak on the chart recorder.
A Fraction Collector: Gathers separated analytes for further studies.
The preparation of the column typically involves packing it with the stationary phase using either a dry packing or wet packing method. The sample is then introduced, usually dissolved in a minimum quantity of mobile phase, and adsorbed onto the top of the column. Elution then separates the components. Detection methods vary depending on whether the compounds are colored or require reagents or UV absorbance to be visualized.
