# Mass Spectroscopy (MS)
Mass Spectrometry (MS) is a powerful analytical technique primarily used for structural determination (elucidation)** and quantifying metals and metalloids. Unlike other spectroscopic methods, MS does not involve the absorption or emission of electromagnetic radiation (EMR); instead, it focuses on the breakdown of molecules into different fragments.
## Basic Theory and Principle
The fundamental principle involves bombarding organic molecules with electrons to convert them into highly energetic positively charged ions, known as molecular ions or parent ions. These molecular ions can then break up into smaller fragment ions or daughter ions. These fragment ions are subsequently separated by deflection in a magnetic field based on their mass and charge, ultimately yielding a mass spectrum.
The basic principle dictates that if a large molecule is present, too many fragments will be formed. This is why MS is often used in combination with other techniques like Gas Chromatography (GC), High-Performance Liquid Chromatography (HPLC), Liquid Chromatography (LC), and Thin Layer Chromatography (TLC), which first isolate compounds before MS performs fragmentation and identification.
## Mass Spectrum
The mass spectrum is a graphical representation where the relative abundance of ions is plotted against their mass-to-charge ratio (m/e). It is used for the detection of isotopes based on their mass; ions with a high mass-to-charge ratio correspond to heavier isotopes, and vice versa.
The highest peak is recorded as 100% and is called the base peak, representing the highest quantity of a fragment.
Other peaks are recorded relative to this base peak.
The mass of the substance is inversely proportional to the distance in the spectrum.
It's important to note that if too many compounds are introduced to MS, they may mix, making it difficult to identify the original parent compound.
## Instrumentation
A mass spectrometer is composed of several key components that work in concert:
Sample Inlet System
Ionization Source (or Ionisation Chamber)
The Electrostatic Accelerating System
The Magnetic Field
The Ion Separator (Mass Analyzer)
The Ion Collector (Detector)
The Vacuum System
### 1. Sample Inlet System
The type of inlet system used depends on the nature of the sample:
Solid samples with low vapor pressure are directly inserted into the ionization chamber, with volatilization controlled by heating the probe.
Liquids are handled via hypodermic needle injection through a silicon rubber dam.
Gases and samples with high pressure are leaked directly into the ionization chamber with the help of a mercury manometer.
### 2. Ionization Source
The ionization source is responsible for the production of ions. Ionization of the sample occurs in the ionization chamber. Molecular ions begin to form when the electron beam energy reaches 10-15 eV, while fragmentation typically occurs at higher bombardment energies, around 70 eV. Ionization methods are broadly categorized into two types:
Gas Phase Ionization (for gases and vapors):** Samples are volatilized outside the ion source.
Electron Impact (EI) Ionization: This is the most common method. An electrically heated filament (tungsten or rhenium) serves as the source of an electron beam. Electrons are drawn towards an anode plate (electron trap)** and travel across the chamber, guided by collimating magnets. The sample, volatilized in a separate chamber to pressures of 10⁻⁴ - 10⁻⁶ torr, enters the ionization chamber where the electron beam bombards it, removing electrons to create radical cations. The produced ions then move towards the mass analyzer.
Chemical Ionization (CI): A reagent gas (e.g., methane, ammonia, nitric acid) is introduced into a high-pressure source (0.1 - 1.0 torr) and ionized by electron bombardment. A small amount of the sample in vapor phase then reacts with these reagent ions through gas-phase processes, such as proton transfer, to produce sample ions.
Field Ionization (FI):** This method uses very strong electric fields (typically 10-20 kV) to produce ions from gas-phase molecules. It is particularly suited for the analysis of synthetic or man-made polymers.
Desorption Technique **(for liquids and solids):** Samples are ionized directly inside the ion source. Energy is introduced into the solid or liquid samples, causing the direct formation of gaseous ions. This technique is suitable for non-volatile substances.
Field Desorption (FD): An electrode coated with a solution of the sample is mounted on a probe and inserted into the sample compartment. Ionization occurs upon the application of a high potential.
Fast Atom Bombardment (FAB):** This method is used for large biological molecules that are difficult to get into the gas phase. FAB typically causes little fragmentation and usually yields a large molecular ion. The sample is dissolved in a viscous liquid, often glycerol, and then bombarded by energetic (fast-moving) xenon or argon atoms. These energetic atoms are generated by accelerating xenon or argon ions from an ion source (gun) at 10⁻⁵ torr, which then pick up an electron in collisions with neutral atoms to form a high-energy atomic beam.
Laser Desorption (LD):** This technique involves the interaction of a laser beam with sample particles, leading to both ionization and vaporization.
Matrix Assisted Laser Desorption Ionization (MALDI):** This technique is based on bombarding sample molecules with laser light for ionization. The sample is pre-mixed with a highly absorbing matrix compound, such as nicotinic acid, to optimize the energy at the sample/matrix surface when the laser beam is fired. This process causes larger molecules to ionize, allowing them to be extracted through the mass spectrometer. MALDI is a widely used ionization method for protein identification.
### Mass Analyzer
The mass analyzer is often referred to as the "Heart" of the mass spectrometer. Its primary function is to take ionized masses and separate them based on their charge-to-mass ratios (m/e)** using magnetic and electric fields. It is also known as an ion separator. The two main functions of a mass analyzer are:
To resolve the ion beam into its component ions.
To maximize the resolved ions intensities. The mass resolving power (R)** measures the analyzer's ability to separate ions with different mass-to-charge ratios.
Here are the types of mass analyzers:
Magnetic Sector Mass Analyzer: These analyzers rely on the effect of a magnetic field on moving ions to separate them. The ionic beam is directed between the poles of an electromagnet, which causes the beam to assume a curved path. This curved path separates the ions according to their m/e ratio.
Single Focusing Mass Analyzer: This type consists of a horse-shoe shaped glass tube, an inlet, an electron bombardment source, accelerated plates at one end, and a collector slit at the other. Ions are passed between the poles of a magnet. An ion with charge "e" repelled by an ionic source with voltage "V" gains potential energy (eV), which is converted into kinetic energy (½ mv²). Under the influence of the magnetic field, ions follow a curved path with radius 'r', experiencing a centrifugal force (mv²/r) that equals the centripetal force (eHv) at equilibrium. This leads to the relationship: m/e ∝ r², meaning the mass-to-charge ratio depends on the magnetic field strength (H), voltage (V), and radius of curvature (r). Single focusing analyzers have lower mass ranges.
Double Focusing Mass Analyzer: This analyzer uses a combination of magnetic and electric fields to focus and sort ions. It provides both directional and velocity focusing, differentiating ions based on their kinetic energy before they enter the magnetic field. These analyzers offer higher mass ranges compared to single focusing mass spectrometers.
Time of Flight (TOF) Analyzer: This method measures the time an ion takes to travel from the ion source to the detector. A burst of electrons produces ions between the first and second electrodes. An extraction potential (E) is applied briefly to focus the ions, followed by an accelerating potential (V) applied for an even shorter period to simultaneously accelerate all ions. The accelerated ions then travel through a field-free drift tube (about one meter long) before being collected by a sensing electrode.
Benefits: Fastest MS analyzer, well-suited for pulsed ionization (e.g., MALDI), high ion transmission, highest practical mass range.
Limitations: Requires pulsed ionization, fast digitizers can have limited dynamic range.
Applications: Most MALDI systems, very fast GC/MS systems.
Typical flight times are 1-30 µs. TOF analyzers generally have lower resolution power (less than 1000) and lower mass ranges.
Quadrupole Mass Analyzer: These analyzers are constructed from four rods with a hyperbolic or circular cross-section. Opposite pairs of rods are charged either positively or negatively, with both DC and RF (radiofrequency) potentials applied. Accelerated ions entering the analyzer oscillate in a complex manner based on their m/e ratio and the applied RF/DC ratio. Only ions with a specific m/e value can pass through to the collector, while others strike the poles and are discharged. By varying the RF/DC ratio continuously, the entire mass spectrum can be recorded.
Benefits: Classical mass spectra, good reproducibility, relatively small and low-cost.
Limitations: Limited resolution, peak heights can vary, not well-suited for pulsed ionization.
Applications: Majority of benchtop GC/MS and LC/MS systems, triple quadrupole MS/MS systems.
Ion Trap Mass Analyzer: Ions from an electron impact or chemical ionization source enter a specially designed chamber. Ions with an appropriate m/e value circulate in an orbit. As the radiofrequency voltage increases, the orbit of heavier ions becomes stabilized, while lighter ions become destabilized or trapped and move towards the detector.
Types: Three-dimensional quadrupole ion traps and ion cyclotron resonance mass spectrometers (FTICR).
Benefits (FTICR): Highest recorded mass resolution, powerful for ion chemistry and MS/MS, well-suited for pulsed ionization.
Benefits (Quadrupole Ion Traps): High sensitivity, multi-stage mass spectrometry, compact.
Limitations: Can lead to artifacts ("non-classical mass spectra"), poor quantitation for FTICR, limited dynamic range for ion traps, strict low-pressure requirements.
Applications: Ion chemistry, high-resolution MALDI/electrospray for high-mass analytes (FTICR); benchtop GC/MS, LC/MS, target compound screening (ion traps).
Ion Cyclotron Resonances: In a magnetic field, ions move in circular orbits that are characteristic of their m/z values. If energy is supplied at a frequency equal to their precession frequency, and in a direction perpendicular to their plane of precession, the ions absorb this energy, enabling their detection.
### Detector
The detector is an instrument that detects the ions coming from the analyzer. Common types include:
Faraday Cup Detector: This is a metallic cup maintained at a potential to capture ions. Incident ions striking the dynode surface emit electrons, inducing a current that is then amplified and recorded.
Photographic Plates Detector: Photographic plates coated with silver bromide emulsion are sensitive to energetic ions. Ions falling on these plates cause an impression, and this detector is well-suited for a wide range of m/e values.
Electron Multiplier Detector: This detector consists of a series of electrodes called dynodes. When an ion strikes the first dynode, it releases a large number of electrons. These electrons then hit the second dynode, releasing even more electrons, and this process continues through approximately 10 dynodes. This sequence generates an electric current that is amplified and presented as a mass spectrum.
Scintillation Type Detector: Here, the dynode consists of a substance (scintillators) that emits photons when struck by ions. The emitted light is detected by a photomultiplier tube and converted into an electric current.
Recorder: Modern systems typically use an online computer (data system) to record and print the mass spectrum.
## Strengths and Limitations of MS
Strengths:
Rapid identification of trace impurities, especially when coupled with chromatographic separation and high-resolution MS.
High sensitivity and selectivity for monitoring drugs and their metabolites in biological fluids.
The re-emergence of time-of-flight MS and electrospray mass spectrometry makes it highly useful for quality control of therapeutic antibodies and peptides.
Limitations:
Currently not routinely used in quality control (QC), but rather in research and development (R&D) for specific problem-solving.
Expensive instrumentation requiring highly trained personnel and regular maintenance, although open-access instruments are becoming more common.
## Applications of Mass Spectrometry
Mass spectrometry has extensive applications, both qualitative and quantitative:
### Qualitative Applications
Determination of molecular weight: It is considered the best technique for determining or confirming the molecular weight of compounds that can be easily volatilized.
Determination of molecular formula: This requires identifying the molecular ion peak and its exact mass.
Determination of structure of compounds: MS helps determine structure by analyzing the fragmentation pattern of ions. By breaking the molecule into smaller charged fragments and separating them by m/z ratio, the resulting mass spectrum provides structural information.
### Quantitative Applications
Determination of isotope abundance: Despite small differences in isotope masses, MS can determine the isotopic composition of molecules. This information is valuable for:
Tracer studies with isotopes.
Determination of atomic weights of compounds.
Determination of the age of rocks and minerals.
Studies of the origin and nature of the solar system.
Determination of isotope ratio: MS is used to determine isotope ratios, which helps ascertain the concentration of individual components in complex mixtures.
Differentiation between Cis and Trans isomers: While both isomers yield similar spectra, they can be differentiated by the intensity of their molecular ion peaks; the trans isomer's molecular ion peak is more intense than that of the cis isomer.
Mass spectrometry in thermodynamics:
Determination of heat of vaporization: Data from the spectrum of high-temperature compounds is collected, and a graph plotting ion intensities (Y-axis) against temperature (X-axis) is used.
Determination of heat of sublimation: Vapors of sublimed solids are passed into the ionization chamber, and the recorded spectrum's peak intensities are directly proportional to the sample's vapor pressure (VP).
Measurement of ionization potential: This refers to the minimum energy required by bombarding electrons to produce molecular ions from a molecule.
Determination of ion-molecule reactions: MS is used to study reactions between fragment ions and unionized molecules.
Detection of impurity: Impurities, even in low concentrations (parts per million), can be detected by spectrometry, provided their molecular weights differ significantly from the major components.
Identification of unknown compounds: This is achieved by recording the spectrum of the unknown compound and comparing it with the spectrum of a standard compound.
Identification of proteins: MS is a valuable tool in the study of protein structure and function, especially the analysis of proteins digested by proteases like trypsin (proteomics). Electro spray ionization (ESI)** and Matrix-Assisted Laser Desorption Ionization (MALDI)** are commonly used ionization methods for this purpose.
