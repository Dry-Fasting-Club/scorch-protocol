import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://scorchprotocol.com";

export const metadata: Metadata = {
  title: "Research & Citations",
  description:
    "The peer-reviewed and specialized fasting literature behind The Scorch Protocol: renal safety, ketone metabolism, growth hormone, osmotic-stress autophagy, and the Khoroshilov dry-fasting series.",
  alternates: { canonical: `${SITE_URL}/research` },
};

type Ref = {
  title: string;
  authors?: string;
  source?: string;
  href?: string;
  shows: string;
  phase?: { label: string; href: string };
};

const MODERN: Ref[] = [
  {
    title:
      "Anthropometric, Hemodynamic, Metabolic, and Renal Responses during 5 Days of Food and Water Deprivation",
    authors: "Papagiannopoulos IA, Sideris VI, Boschmann M, Koutsoni OS, Dotsika EN",
    source: "Forschende Komplementärmedizin (Research in Complementary Medicine), 2013; 20(6):427–433",
    href: "https://doi.org/10.1159/000357718",
    shows:
      "In healthy adults, five days of total food and water deprivation was hemodynamically stable (blood pressure and heart rate steady, no arrhythmias, no clinical dehydration), with mean weight loss ~1.4 kg/day. Kidney filtration (GFR) rose rather than fell. This is the clinical backbone for the safety framing of a supervised dry fast.",
    phase: { label: "Dry Fasting", href: "/dry-fasting" },
  },
  {
    title: "Starvation in Man",
    authors: "Cahill GF Jr.",
    source: "New England Journal of Medicine, 1970 (foundational review)",
    shows:
      "The classic map of fasting metabolism: glycogen depletion in the first 24 hours, gluconeogenesis breaking down muscle protein in the 24–72 hour window, then the brain shifting to ketones (glucose demand falling from ~100 g/day to <40 g/day) and muscle breakdown sparing once ketosis is established. Underpins the day-by-day physiology and the case for pairing T3 with adequate fuel.",
    phase: { label: "T3 Therapy", href: "/t3-therapy" },
  },
];

const MECHANISM: Ref[] = [
  {
    title: "Hyperosmotic Stress Induces Unconventional Autophagy Independent of the Ulk1 Complex",
    source: "Molecular and cellular autophagy literature",
    shows:
      "Hyperosmotic (dehydration-like) conditions initiate autophagy even when nutrients are present, bypassing the normal amino-acid-sensing Ulk1/mTOR pathway. This is the mechanistic basis for why dry fasting drives a distinct, faster cellular clean-out than water fasting.",
    phase: { label: "Dry Fasting", href: "/dry-fasting" },
  },
  {
    title: "Hypertonic stress promotes autophagy and microtubule-dependent autophagosomal clusters",
    source: "Autophagy, 2013",
    shows:
      "Hypertonic (dehydration) stress is a potent, rapid trigger of autophagy that specifically clears p62-positive, misfolded protein aggregates via microtubule-dependent remodeling. Supports the 'deep clean' rationale behind the dry-fast and hGH rebuild phases.",
    phase: { label: "hGH Therapy", href: "/hgh-therapy" },
  },
  {
    title: "Kinetics of osmotic stress regulate a cell-fate switch",
    source: "Osmotic-stress cell-biology literature",
    shows:
      "How the timing and intensity of osmotic stress push cells toward adaptation versus clearance — relevant to why dry-fast duration and refeed timing matter.",
    phase: { label: "Refeeding", href: "/refeeding" },
  },
];

const DRY_FASTING_SERIES: Ref[] = [
  {
    title: "The state of water and mineral metabolism under conditions of absolute (dry) fasting",
    shows:
      "Documents maximal urinary concentration (osmolality ~1,080 mOsm/kg by day 3), a large ADH rise, oliguria, and aggressive renal sodium/potassium conservation during a 3-day dry fast.",
    phase: { label: "Kidneys FAQ", href: "/faq/kidneys" },
  },
  {
    title: "Change of the indices of protein metabolism under conditions of absolute (dry) fasting",
    shows:
      "Serum creatinine rises modestly (attributed to hemoconcentration, not renal damage) while urine creatinine output stays constant (muscle preserved); urea stays within normal clinical limits and albumin is maintained.",
    phase: { label: "Kidneys FAQ", href: "/faq/kidneys" },
  },
  {
    title: "Comprehensive assessment of body composition during absolute (dry) fasting",
    shows:
      "A large growth-hormone surge acts anti-catabolically (favoring fat breakdown over muscle), with lean mass almost entirely preserved. Supports the protein-sparing and hGH rationale.",
    phase: { label: "hGH Therapy", href: "/hgh-therapy" },
  },
  {
    title: "Influence of absolute (dry) fasting on metabolic processes and organ function",
    shows:
      "Profound insulin suppression and a large improvement in insulin sensitivity (HOMA-IR) during dry fasting — the metabolic reset the protocol builds on.",
    phase: { label: "T3 Therapy", href: "/t3-therapy" },
  },
  {
    title: "Dry fasting and the immune system",
    shows:
      "Describes fasting as an immune 'reset,' with increases in cytotoxic T-cell and NK-cell activity that persist after a short fast.",
    phase: { label: "hGH Therapy", href: "/hgh-therapy" },
  },
  {
    title: "Absolute fasting: the effect of the complete absence of food and water on the human body",
    shows:
      "Metabolic-water production (~0.5–0.8 L/day) from the oxidation of fat and glycogen, the mechanism by which the body 'drinks' its own fat during a dry fast.",
    phase: { label: "Dry Fasting", href: "/dry-fasting" },
  },
];

const THYROID: Ref[] = [
  {
    title:
      "Supraphysiological cyclic dosing of sustained release T3 in order to reset low basal body temperature",
    authors: "Friedman M, Miranda-Massari JR, Gonzalez MJ",
    source: "Puerto Rico Health Sciences Journal, 2006;25(1):23-29. PMID 16883675",
    href: "https://prhsj.rcm.upr.edu/index.php/prhsj/article/view/329",
    shows:
      "The only published clinical study of the Wilson's T3 protocol: eleven chronic fatigue patients given cycled sustained-release T3 until temperature held at 98.6 F, all improving on self-reported symptoms, with no control group, no randomisation and no blinding. It is hypothesis-generating, not evidence of efficacy, and it is the entire published base for the ramp, hold and taper pattern the 30-day course borrows.",
    phase: { label: "T3 Therapy", href: "/t3-therapy" },
  },
  {
    title: "Statement on \"Wilson's Syndrome\"",
    authors: "American Thyroid Association",
    source: "Updated 24 May 2005",
    href: "https://www.thyroid.org/american-thyroid-association-statement-on-wilsons-syndrome/",
    shows:
      "The mainstream position, cited so the disagreement is visible: the syndrome is not recognised, the 98.6 F anchor sits above the normal waking mean, the evidence offered for the therapy is testimonial, and T3 given this way can raise blood T3 to abnormal levels with potential effects on the heart and bones.",
    phase: { label: "T3 Therapy", href: "/t3-therapy" },
  },
  {
    title: "Pseudo-endocrine Disorders: Recognition, Management, and Action",
    authors: "McDermott MT",
    source: "Journal of the Endocrine Society, 2024;9(1):bvae226. PMID 39749108",
    href: "https://doi.org/10.1210/jendso/bvae226",
    shows:
      "A 2024 endocrine review that classes Wilson's temperature syndrome among pseudo-endocrine disorders and names high-dose T3 as the specific hazard.",
    phase: { label: "T3 Therapy", href: "/t3-therapy" },
  },
  {
    title:
      "Higher Prevalence of \"Low T3 Syndrome\" in Patients With Chronic Fatigue Syndrome: A Case-Control Study",
    authors: "Ruiz-Nunez B, Tarasse R, Vogelaar EF, Janneke Dijck-Brouwer DA, Muskiet FAJ",
    source: "Frontiers in Endocrinology, 2018;9:97. PMID 29615976",
    href: "https://doi.org/10.3389/fendo.2018.00097",
    shows:
      "Chronic fatigue patients against matched controls had similar TSH but lower free T3 and total T3, lower deiodinase activity and a higher reverse T3 fraction, and the authors call for trials of T3. The strongest objective ground for a T3 trial in this population, and the nearest thing to a published criterion for who might need it; it is a blood pattern, not the history-and-temperature screen the protocol uses, and it does not establish the dose.",
    phase: { label: "Decision Tree", href: "/decision-tree" },
  },
  {
    title:
      "Triiodothyronine and leptin repletion in humans similarly reverse weight-loss-induced changes in skeletal muscle",
    authors: "Rosenbaum M, Goldsmith RL, Haddad F, et al.",
    source: "American Journal of Physiology: Endocrinology and Metabolism, 2018;315(5):E771-E779. PMID 29920214",
    href: "https://doi.org/10.1152/ajpendo.00116.2018",
    shows:
      "In weight-reduced people, T3 repletion reversed the skeletal muscle efficiency changes and myosin shift that follow weight loss, to a degree similar to leptin repletion. Direct evidence that T3 is one lever on the post-weight-loss slowdown, at replacement scale.",
    phase: { label: "T3 Therapy", href: "/t3-therapy" },
  },
  {
    title: "Metabolic effects of triiodothyronine replacement during fasting in obese subjects",
    authors: "Byerley LO, Heber D",
    source: "Journal of Clinical Endocrinology and Metabolism, 1996;81(3):968-976. PMID 8772559",
    href: "https://doi.org/10.1210/jcem.81.3.8772559",
    shows:
      "Obese subjects fasted ten days with T3 restored to the normal range over the last three days: metabolic rate did not rise after T3. The one controlled test of T3 around a fast, and it does not support T3 as a metabolic-rate rescue. It used replacement doses during the fast, not the protocol's post-refeed timing, which nobody has tested.",
    phase: { label: "T3 Therapy", href: "/t3-therapy" },
  },
  {
    title: "Effect of tri-iodothyronine replacement on the metabolic and pituitary responses to starvation",
    authors: "Gardner DF, Kaplan MM, Stanley CA, Utiger RD",
    source: "New England Journal of Medicine, 1979;300(11):579-584. PMID 105290",
    href: "https://doi.org/10.1056/NEJM197903153001102",
    shows:
      "Healthy men fasted 80 hours with and without T3 replacement: urea excretion rose with T3, which the authors read as the low-T3 state of fasting protecting muscle protein. Part of why T3 does not run during the fast.",
    phase: { label: "T3 Therapy", href: "/t3-therapy" },
  },
  {
    title:
      "Patterns of recovery of the hypothalamic-pituitary-thyroid axis in patients taken off chronic thyroid therapy",
    authors: "Krugman LG, Hershman JM, Chopra IJ, et al.",
    source: "Journal of Clinical Endocrinology and Metabolism, 1975;41(1):70-80. PMID 807596",
    href: "https://doi.org/10.1210/jcem-41-1-70",
    shows:
      "After chronic thyroid therapy was withdrawn, TSH stayed suppressed for about two weeks, normal TSH responsiveness returned at about sixteen days and the T3 response normalised at about three weeks; in previously hypothyroid patients recovery ran about a month. The axis-recovery numbers behind the slow taper and the T4 bridge.",
    phase: { label: "T3 Therapy", href: "/t3-therapy" },
  },
  {
    title: "Recovery of pituitary thyrotropic function after withdrawal of prolonged thyroid-suppression therapy",
    authors: "Vagenakis AG, Braverman LE, Azizi F, Portnay GI, Ingbar SH",
    source: "New England Journal of Medicine, 1975;293(14):681-684. PMID 808728",
    href: "https://doi.org/10.1056/NEJM197510022931402",
    shows:
      "Withdrawal of prolonged thyroid suppression in euthyroid women: TSH and iodine uptake returned at two to three weeks, reduced TSH reserve persisted two to five weeks, and serum T4 normalised at four weeks or more.",
    phase: { label: "T3 Therapy", href: "/t3-therapy" },
  },
  {
    title:
      "Clinical Outcomes After Discontinuation of Thyroid Hormone Replacement: A Systematic Review and Meta-Analysis",
    authors: "Burgos N, Toloza FJK, Singh Ospina NM, et al.",
    source: "Thyroid, 2021;31(5):740-751. PMID 33161885",
    href: "https://doi.org/10.1089/thy.2020.0679",
    shows:
      "Across observational studies of thyroid hormone discontinuation, patients with a prior diagnosis of overt hypothyroidism were markedly less likely to remain euthyroid off treatment than those with subclinical hypothyroidism. Low-quality evidence by the authors' own grading, in the same direction as the harder taper seen in people already on thyroid medication.",
    phase: { label: "T3 Therapy", href: "/t3-therapy" },
  },
];

const GROWTH_HORMONE: Ref[] = [
  {
    title:
      "Fasting enhances growth hormone secretion and amplifies the complex rhythms of growth hormone secretion in man",
    authors: "Ho KY, Veldhuis JD, Johnson ML, et al.",
    source: "Journal of Clinical Investigation, 1988;81(4):968-975. PMID 3127426",
    href: "https://doi.org/10.1172/JCI113450",
    shows:
      "A five-day fast raised growth hormone pulse frequency from about six to about ten pulses per 24 hours. Fasting is a growth hormone event, which is why exogenous hGH and a fast have to be reconciled rather than stacked.",
    phase: { label: "hGH Therapy", href: "/hgh-therapy" },
  },
  {
    title:
      "Augmented growth hormone (GH) secretory burst frequency and amplitude mediate enhanced GH secretion during a two-day fast in normal men",
    authors: "Hartman ML, Veldhuis JD, Johnson ML, et al.",
    source: "Journal of Clinical Endocrinology and Metabolism, 1992;74(4):757-765. PMID 1548337",
    href: "https://doi.org/10.1210/jcem.74.4.1548337",
    shows:
      "Two days of fasting produced a fivefold rise in the 24-hour growth hormone production rate in healthy men, through more frequent and larger secretory bursts.",
    phase: { label: "hGH Therapy", href: "/hgh-therapy" },
  },
  {
    title:
      "The protein-retaining effects of growth hormone during fasting involve inhibition of muscle-protein breakdown",
    authors: "Nørrelund H, Nair KS, Jørgensen JO, Christiansen JS, Møller N",
    source: "Diabetes, 2001;50(1):96-104. PMID 11147801",
    href: "https://doi.org/10.2337/diabetes.50.1.96",
    shows:
      "In a 40-hour fast, suppressing growth hormone raised muscle protein breakdown and replacing it prevented that rise. The cleanest answer to what growth hormone does for muscle during a short fast, and the basis for reading extreme muscle loss as a sign that points at this axis.",
    phase: { label: "hGH Therapy", href: "/hgh-therapy" },
  },
  {
    title: "Metabolic response to human growth hormone during prolonged starvation",
    authors: "Felig P, Marliss EB, Cahill GF Jr.",
    source: "Journal of Clinical Investigation, 1971;50(2):411-421",
    href: "https://www.jci.org/articles/view/106508",
    shows:
      "The only study of hGH given across a multi-week fast, in obese subjects: urea fell but ammonia rose and net nitrogen loss did not change, ketosis worsened, glucose and insulin rose, and subjects had nausea, vomiting and muscle pain. A caution, not a confirmation, for fasting while on hGH, which the literature has otherwise not tested.",
    phase: { label: "hGH Therapy", href: "/hgh-therapy" },
  },
  {
    title: "Exogenous 20K growth hormone (GH) suppresses endogenous 22K GH secretion in normal men",
    authors: "Hashimoto Y, Kamioka T, Hosaka M, et al.",
    source: "Journal of Clinical Endocrinology and Metabolism, 2000;85(2):601-606. PMID 10690862",
    href: "https://doi.org/10.1210/jcem.85.2.6377",
    shows:
      "Injected growth hormone suppresses the pituitary's own output in normal men, the basis of the anti-doping isoform test. The reason the fasting-mode dosing changes and the reason the course ends with a wean.",
    phase: { label: "hGH Therapy", href: "/hgh-therapy" },
  },
  {
    title: "Growth hormone deficiency and the transition from pediatric to adult care",
    authors: "Tavares ABW, Collett-Solberg PF",
    source: "Jornal de Pediatria, 2021;97(6):595-602",
    href: "https://www.jped.com.br/en-growth-hormone-deficiency-transition-from-articulo-S0021755721000541",
    shows:
      "Clinical practice requires one to three months off recombinant growth hormone before the axis is retested, because exogenous hormone suppresses it. The 30-day recovery window on the hGH page is the short end of that convention; no study has measured the recovery curve in adults after months of dosing.",
    phase: { label: "hGH Therapy", href: "/hgh-therapy" },
  },
  {
    title:
      "Metabolic effects of growth hormone administered subcutaneously once or twice daily to growth hormone deficient adults",
    authors: "Laursen T, Jørgensen JO, Christiansen JS",
    source: "Clinical Endocrinology (Oxford), 1994;41(3):337-343. PMID 7525120",
    href: "https://doi.org/10.1111/j.1365-2265.1994.tb02554.x",
    shows:
      "Two injections a day gave higher IGF-I than one injection of the same total dose. Twice daily is the most frequent subcutaneous injection schedule tested in people; no study has dosed hGH four times a day by injection under the skin.",
    phase: { label: "hGH Therapy", href: "/hgh-therapy" },
  },
  {
    title:
      "Diagnosis and Treatment of Growth Hormone Deficiency: A Position Statement from Korean Endocrine Society and Korean Society of Pediatric Endocrinology",
    authors: "Kim JH, Chae HW, Chin SO, et al.",
    source: "Endocrinology and Metabolism (Seoul), 2020;35(2):272-287",
    href: "https://doi.org/10.3803/EnM.2020.35.2.272",
    shows:
      "Growth hormone treatment is contraindicated in active malignancy (basal and squamous cell skin cancers excepted), and dosing is titrated to IGF-1 within the age-adjusted reference range.",
    phase: { label: "hGH Therapy", href: "/hgh-therapy" },
  },
  {
    title:
      "Long-term Safety of Growth Hormone in Adults With Growth Hormone Deficiency: Overview of 15 809 GH-Treated Patients",
    authors: "Johannsson G, Touraine P, Feldt-Rasmussen U, et al.",
    source: "Journal of Clinical Endocrinology and Metabolism, 2022;107(7):1906-1919. PMID 35368070",
    href: "https://doi.org/10.1210/clinem/dgac199",
    shows:
      "The largest long-term surveillance of adults on growth hormone replacement: new cancer incidence matched the general population, with neutral effects on lipids and fasting glucose. Replacement dosing in diagnosed deficiency, below the range the protocol uses, so it is not stretched further than it goes.",
    phase: { label: "hGH Therapy", href: "/hgh-therapy" },
  },
];

const FASTING_SAFETY: Ref[] = [
  {
    title: "Clinical and hygienic aspects of absolute (dry) fasting",
    authors: "Khoroshilov IE",
    source:
      "Author's abstract of a Candidate of Medical Sciences thesis, Military Medical Academy, St Petersburg, 1994; abridged English translation, Siberika Publishing, 2020",
    shows:
      "Six healthy men fasted 68 hours without food or water in a climate chamber: a 2 to 4 percent fluid deficit, no rhythm disturbance, the acidotic switch around day three, cortisol up and insulin and T3 down. His own method is a dry start of one to three days by individual tolerance, followed by water fasting. Nothing in it measures a fourth day, so no claim indexed to day five can come from it.",
    phase: { label: "Dry Fasting", href: "/dry-fasting" },
  },
  {
    title: "Dry fasting physiology: responses to hypovolemia and hypertonicity",
    authors: "Papagiannopoulos-Vatopaidinos IE, Papagiannopoulou M, Sideris V",
    source: "Complementary Medicine Research, 2020;27(4):242-251. PMID 31958788",
    href: "https://doi.org/10.1159/000505201",
    shows:
      "Ten healthy, unmedicated, experienced adults through five dry days under daily medical measurement: compensated hypovolaemia, cortisol up several-fold and uric acid doubled, and the authors' own statement that hypovolaemia and hypertonicity limit the method to a few days and make medical supervision obligatory. With the 2013 study above, the only measured five-day dry fasts in the literature.",
    phase: { label: "Dry Fasting", href: "/dry-fasting" },
  },
  {
    title:
      "Severe dialysis disequilibrium following an extreme dry fast: hypernatremic dehydration and rhabdomyolysis leading to multiorgan failure",
    authors: "Philip R, Shahid R, Rehman S, Jussa M, Rao HS, Philip M",
    source: "American Journal of Respiratory and Critical Care Medicine, 2026;212(Suppl 1), ATS conference abstract A51-43",
    href: "https://academic.oup.com/ajrccm/article/212/Supplement_1/aamag162.4785/8684721",
    shows:
      "The one published harm report from a multi-day dry fast: oliguric kidney injury with rhabdomyolysis after four days alone, needing dialysis. A single conference abstract with unknown confounders, cited because it is the only such report and it sits inside the five-day window.",
    phase: { label: "Dry Fasting", href: "/dry-fasting" },
  },
  {
    title:
      "Prolonged fasting reduces IGF-1/PKA to promote hematopoietic-stem-cell-based regeneration and reverse immunosuppression",
    authors: "Cheng CW, Adams GB, Perin L, et al.",
    source: "Cell Stem Cell, 2014;14(6):810-823. PMID 24905167",
    href: "https://doi.org/10.1016/j.stem.2014.04.014",
    shows:
      "The regeneration finding behind the 'immune reset' idea: 48 to 72 hour fasting cycles in mice lowered IGF-1/PKA signalling and drove haematopoietic stem-cell self-renewal. Water-type fasting, mostly in mice; no study compares dry-fast depth against any immune outcome.",
    phase: { label: "Dry Fasting", href: "/dry-fasting" },
  },
  {
    title:
      "Safety, health improvement and well-being during a 4 to 21-day fasting period in an observational study including 1422 subjects",
    authors: "Wilhelmi de Toledo F, Grundler F, Bergouignan A, Drinda S, Michalsen A",
    source: "PLoS One, 2019;14(1):e0209353. PMID 30601864",
    href: "https://doi.org/10.1371/journal.pone.0209353",
    shows:
      "The Buchinger cohort: daily weight, blood pressure and pulse, a physician two to three times a week, a 600 kcal vegetarian day before the fast, daily walks. Blood pressure fell, heart rate did not change, serious events were rare. Water-type fasting with about three litres of fluid a day, so it informs the vitals and the relief day, not dry fasting itself.",
    phase: { label: "Symptom Management", href: "/symptom-management" },
  },
  {
    title: "Leitlinien zur Fastentherapie (guidelines for fasting therapy)",
    authors: "Ärztegesellschaft Heilfasten und Ernährung (ÄGHE)",
    source: "Forschende Komplementärmedizin und Klassische Naturheilkunde, 2002;9:189-198",
    href: "https://karger.com/fkm/article-pdf/9/3/189/4207114/000064270.pdf",
    shows:
      "The only published numeric stop list for fasting: higher-grade arrhythmia, potassium below 3.0 or sodium below 125 mmol/L, or circulatory depression for two days (heart rate under 45, systolic under 70). It calls for daily gentle movement, treats fasting crises as possible healing crises, and prescribes a vegetarian relief day under about 1,000 kcal before the fast. Written for water-type fasting under trained supervision.",
    phase: { label: "Symptom Management", href: "/symptom-management" },
  },
  {
    title: "Is fasting safe? A chart review of adverse events during medically supervised, water-only fasting",
    authors: "Finnell JS, Saul BC, Goldhamer AC, Myers TR",
    source: "BMC Complementary and Alternative Medicine, 2018;18(1):67. PMID 29458369",
    href: "https://doi.org/10.1186/s12906-018-2136-6",
    shows:
      "768 supervised water-only fasting visits with vitals twice daily and weekly bloods: fatigue, insomnia, nausea and headache were the common events, and the one grade 4 event was low sodium presenting as speech difficulty. Electrolytes caused the serious event, and no home reading captures them.",
    phase: { label: "Symptom Management", href: "/symptom-management" },
  },
  {
    title:
      "Is muscle and protein loss relevant in long-term fasting in healthy men? A prospective trial on physiological adaptations",
    authors: "Laurens C, Grundler F, Damiot A, et al.",
    source: "Journal of Cachexia, Sarcopenia and Muscle, 2021;12(6):1690-1703. PMID 34668663",
    href: "https://doi.org/10.1002/jcsm.12766",
    shows:
      "Sixteen healthy men through ten Buchinger fasting days with daily low-intensity exercise kept their strength. The support for walking during a fast; massage has no trial evidence in fasting of any kind.",
    phase: { label: "Tips and Tricks", href: "/tips-and-tricks" },
  },
  {
    title: "KDIGO Clinical Practice Guideline for Acute Kidney Injury",
    authors: "Kidney Disease: Improving Global Outcomes (KDIGO) Acute Kidney Injury Work Group",
    source: "Kidney International Supplements, 2012;2(1):1-138",
    href: "https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf",
    shows:
      "Defines oliguria as under 0.5 ml/kg/h for six hours and stage 3 kidney injury as no urine for 12 hours. Dry-fasting urine output sits at or under the oliguria line by design, so volume alone misleads and no urine at all is the signal; the 12-hour anuria line is stricter than a 24-hour rule.",
    phase: { label: "Symptom Management", href: "/symptom-management" },
  },
  {
    title:
      "2015 Heart Rhythm Society expert consensus statement on the diagnosis and treatment of postural tachycardia syndrome, inappropriate sinus tachycardia, and vasovagal syncope",
    authors: "Sheldon RS, Grubb BP 2nd, Olshansky B, et al.",
    source: "Heart Rhythm, 2015;12(6):e41-e63. PMID 25980576",
    href: "https://doi.org/10.1016/j.hrthm.2015.03.029",
    shows:
      "Restates the orthostatic definitions: a heart-rate rise of 30 beats or more on standing, and a systolic fall of more than 20 mmHg. These are earlier signs of low blood volume than a resting heart rate or a resting blood pressure, and they are not among the protocol's four readings.",
    phase: { label: "Dry Fasting for POTS", href: "/dry-fasting-for-pots" },
  },
  {
    title:
      "Consensus statement on the definition of orthostatic hypotension, neurally mediated syncope and the postural tachycardia syndrome",
    authors: "Freeman R, Wieling W, Axelrod FB, et al.",
    source: "Clinical Autonomic Research, 2011;21(2):69-72. PMID 21431947",
    href: "https://pubmed.ncbi.nlm.nih.gov/21431947/",
    shows:
      "The consensus definitions themselves: orthostatic hypotension is a systolic fall of more than 20 mmHg on standing, and postural tachycardia a rise of 30 beats or more.",
    phase: { label: "Symptom Management", href: "/symptom-management" },
  },
  {
    title: "Urinary indices of hydration status",
    authors: "Armstrong LE, Maresh CM, Castellani JW, et al.",
    source: "International Journal of Sport Nutrition, 1994;4(3):265-279. PMID 7987361",
    href: "https://doi.org/10.1123/ijsn.4.3.265",
    shows:
      "The urine colour chart was validated against specific gravity and osmolality in hydrated athletes. In a dry fast, dark concentrated urine is the expected state, so colour cannot separate safe concentration from failing kidneys.",
    phase: { label: "Tips and Tricks", href: "/tips-and-tricks" },
  },
  {
    title: "Citrate salts for preventing and treating calcium containing kidney stones in adults",
    authors: "Phillips R, Hanchanale VS, Myatt A, Somani B, Nabi G, Biyani CS",
    source: "Cochrane Database of Systematic Reviews, 2015;(10):CD010057. PMID 26439475",
    href: "https://doi.org/10.1002/14651858.CD010057.pub2",
    shows:
      "Pooled trials of citrate salts in recurrent calcium stone formers over one to four years: markedly fewer new stones than placebo, with upper gastrointestinal upset the commonest side effect. Modest daily doses for years, not a week of laxative doses; magnesium's separate contribution is not isolated.",
    phase: { label: "Preparation", href: "/preparation" },
  },
  {
    title:
      "Severe symptomatic hypermagnesemia associated with over-the-counter laxatives in a patient with renal failure and sigmoid volvulus",
    authors: "Khairi T, Amer S, Spitalewitz S, Sharon D, et al.",
    source: "Case Reports in Nephrology, 2014;2014:560746. PMID 24563801",
    href: "https://doi.org/10.1155/2014/560746",
    shows:
      "Magnesium toxicity from over-the-counter magnesium laxatives when the kidneys could not clear it. A dry fast temporarily imposes reduced clearance, which is the caution behind a week of higher-dose magnesium citrate.",
    phase: { label: "Preparation", href: "/preparation" },
  },
  {
    title: "Fatal hypermagnesemia due to laxative use",
    authors: "Bokhari SR, Siriki R, Teran FJ, Batuman V",
    source: "American Journal of the Medical Sciences, 2018;355(4):390-395. PMID 29661354",
    href: "https://doi.org/10.1016/j.amjms.2017.08.013",
    shows:
      "A death from magnesium laxative use in a woman with normal kidney function, serum magnesium climbing within two days.",
    phase: { label: "Preparation", href: "/preparation" },
  },
  {
    title: "Clinical effects of colonic cleansing for general health promotion: a systematic review",
    authors: "Acosta RD, Cash BD",
    source: "American Journal of Gastroenterology, 2009;104(11):2830-2836. PMID 19724266",
    href: "https://doi.org/10.1038/ajg.2009.494",
    shows:
      "No methodologically rigorous controlled trials support colonic cleansing for health promotion, and multiple case series document harm. The gastroenterology basis for skipping enemas and colonics; the dry-fasting schools themselves empty the bowel once before the fast and never during the dry days.",
    phase: { label: "Preparation", href: "/preparation" },
  },
  {
    title: "Could these be gallstones?",
    authors: "Sies CW, Brooker J",
    source: "Lancet, 2005;365(9468):1388. PMID 15836886",
    href: "https://doi.org/10.1016/S0140-6736(05)66373-8",
    shows:
      "The 'stones' a patient passed after an olive-oil and lemon-juice liver flush were analysed: saponified fatty acids, soap, not cholesterol or bile pigment. Why the stones are not the point of a flush, and why the flush is a case-by-case call rather than a routine step.",
    phase: { label: "Preparation", href: "/preparation" },
  },
];

const REFEED_WINDOW: Ref[] = [
  {
    title: "Short-term post-fast refeeding enhances intestinal stemness via polyamines",
    authors: "Imada S, Khawaled S, Shin H, et al.",
    source: "Nature, 2024;633(8031):895-904. PMID 39169180",
    href: "https://doi.org/10.1038/s41586-024-07840-z",
    shows:
      "In mice after a 24-hour fast, intestinal stem-cell proliferation and protein synthesis peaked at the end of the first day of refeeding, above mice that never fasted, driven by insulin, mTORC1 and polyamine synthesis. Deleting a tumour-suppressor gene in that window produced more tumours than in mice that kept eating or stayed fasted, and blocking the growth signal (rapamycin, a polyamine-synthesis inhibitor or a protein-synthesis blocker) removed the excess. No chemical mutagen was used and there are no human data. The whole basis for the refeed's mutagen holiday, carried as a precaution, for keeping the first three days low in growth signal, and for holding growth-promoting add-ons to refeed day 14 after any cancer.",
    phase: { label: "Refeeding", href: "/refeeding" },
  },
  {
    title:
      "Post-fast refeeding: rise of intestinal stemness and mutagen-induced cancer risk through polyamine metabolism",
    authors: "Brunner S, Janssen KP, Ecker J",
    source: "Signal Transduction and Targeted Therapy, 2024;9:317. PMID 39528467",
    href: "https://doi.org/10.1038/s41392-024-02038-1",
    shows:
      "The commentary on the paper above. It calls the experiment a strong tumour-induction model, uses the word mutagen as an analogy for the engineered gene deletion, and says that in humans the scenario is more complicated than in mice and further studies are needed. Cited so the limits travel with the rule.",
    phase: { label: "Refeeding", href: "/refeeding" },
  },
];

const REACTIVATION: Ref[] = [
  {
    title:
      "Effects of thyroid hormone on HSV-1 gene regulation: implications in the control of viral latency and reactivation",
    authors: "Hsia SC, Bedadala GR, Balish MD",
    source: "Cell & Bioscience, 2011;1:24. PMID 21756309",
    href: "https://doi.org/10.1186/2045-3701-1-24",
    shows:
      "In neuron-like cells, thyroid hormone bound to its receptor repressed HSV-1 lytic transcription and blocked replication, and removing the hormone reversed the block and let replication restart. The work used a mouse neuroblastoma line engineered to carry extra thyroid receptor, the authors report the effect did not appear in two non-neuronal lines, and there is no animal reactivation experiment and no controlled human study. It points the risk at the hormone drop, which is why the T3 taper and trough carry full antiviral coverage.",
    phase: { label: "Viral Reactivation", href: "/viral-reactivation" },
  },
  {
    title: "New insights on thyroid hormone mediated regulation of herpesvirus infections",
    authors: "Figliozzi RW, Chen F, Hsia SV",
    source: "Cell & Bioscience, 2017;7:13. PMID 28344765",
    href: "https://doi.org/10.1186/s13578-017-0140-z",
    shows:
      "Reproduces the repression in a second, differentiated cell line and traces it through PI3K and casein kinase 2. Same direction: thyroid hormone present represses HSV-1, thyroid hormone withdrawn permits it. Still cell culture.",
    phase: { label: "T3 Therapy", href: "/t3-therapy" },
  },
  {
    title:
      "A cohort historical analysis of the relationship between thyroid hormone malady and alpha-human herpesvirus activation",
    authors: "Hsia SH, Hsia SV",
    source: "Journal of Steroids & Hormonal Science, 2014;5(2):133. PMID 25838972",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4380329/",
    shows:
      "A retrospective claims-database study: patients with alpha-herpesvirus diagnoses were more likely to carry a thyroid disorder diagnosis over twelve years. Diagnosis codes only; it cannot separate low thyroid from high or show which way the link runs, and the authors call for controlled studies. The thinnest layer of the human evidence, cited so its weight is visible.",
    phase: { label: "Viral Reactivation", href: "/viral-reactivation" },
  },
  {
    title: "STIMULATE-ICP (drug arms)",
    source: "The Lancet Infectious Diseases, published 8 July 2026",
    shows:
      "The one properly powered test of an antihistamine in long Covid: 778 non-hospitalised adults across 12 NHS clinics, open-label, with arms of colchicine, rivaroxaban, famotidine plus loratadine, or no drug for 12 weeks. Famotidine plus loratadine gave a small fatigue reduction at 12 weeks that disappeared 12 weeks after stopping, and the trial concludes that current evidence does not support routine repurposed drug therapy. Why the famotidine mention on the MCAS page is symptom relief only.",
    phase: { label: "MCAS and Dry Fasting", href: "/mcas-and-dry-fasting" },
  },
];

function RefList({ refs }: { refs: Ref[] }) {
  return (
    <ul className="research-list">
      {refs.map((r) => (
        <li key={r.title} style={{ marginBottom: "1.25rem" }}>
          <div style={{ fontWeight: 600 }}>
            {r.href ? (
              <a href={r.href} rel="noopener nofollow" target="_blank">
                {r.title}
              </a>
            ) : (
              r.title
            )}
          </div>
          {(r.authors || r.source) && (
            <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: "0.15rem 0" }}>
              {[r.authors, r.source].filter(Boolean).join(". ")}
            </div>
          )}
          <p style={{ margin: "0.25rem 0 0" }}>{r.shows}</p>
          {r.phase && (
            <div style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}>
              Used in: <Link href={r.phase.href}>{r.phase.label}</Link>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function ResearchPage() {
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Research & Citations",
    url: `${SITE_URL}/research`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@type": "MedicalCondition", name: "Long COVID" },
  };

  return (
    <>
      <JsonLd data={collectionLd} />

      <h1>Research &amp; Citations</h1>
      <p className="static-lede">
        The protocol is built on physiology, and this page is where that
        physiology is sourced. Below is the literature the protocol draws on,
        grouped by what it establishes and linked to the protocol phase it informs.
      </p>

      <p>
        A note on honesty, because this is medical content: the evidence base is a
        mix. Some of it is modern, indexed, peer-reviewed research with a DOI you can
        open. Much of the dry-fasting-specific work comes from a specialized (largely
        Russian-language) clinical literature that is harder to link but real, and a
        few figures cited across the site are my own summaries of that work rather
        than a single indexed source. I try to make that distinction visible rather
        than dress every number up as a landmark trial.
      </p>

      <h2>Modern peer-reviewed research</h2>
      <RefList refs={MODERN} />

      <h2>Mechanism: osmotic stress &amp; autophagy</h2>
      <RefList refs={MECHANISM} />

      <h2>The absolute (dry) fasting clinical series</h2>
      <p>
        A body of specialized dry-fasting research (associated with the Khoroshilov
        line of work) documenting how the body handles total food-and-water
        deprivation: renal conservation, protein sparing, hormonal shifts, and
        immune effects. I cite it for mechanism and direction, and I flag where a
        specific number is an interpretation rather than a headline finding.
      </p>
      <RefList refs={DRY_FASTING_SERIES} />

      <h2>Thyroid hormone: the T3 course and what stands behind it</h2>
      <p>
        The 30-day T3 course borrows its ramp, hold and taper from the
        Wilson&rsquo;s protocol, and I want the evidence for that lineage
        visible: it is thin, and the field disagrees with it. The stronger
        ground for using T3 in this population is the low-T3 pattern measured
        in chronic fatigue patients and the muscle findings after weight loss.
        The controlled fasting-and-T3 trials and the axis-recovery studies are
        here too, because they shape when T3 runs and how slowly it comes off.
      </p>
      <RefList refs={THYROID} />

      <h2>Growth hormone and fasting</h2>
      <p>
        Fasting raises your own growth hormone, exogenous hGH suppresses it, and
        the only study of hGH across a long fast is a caution. The hGH timing on
        this site is my practice built around those facts, not a tested
        protocol, and the sources below are where the literature runs out.
      </p>
      <RefList refs={GROWTH_HORMONE} />

      <h2>Fasting safety, depth and preparation</h2>
      <p>
        The measured dry-fasting literature stops at day five and was collected
        in healthy, unmedicated adults under daily medical checks. The stop
        rules, the movement advice and the relief-day preparation come from the
        water-fasting clinics and guidelines. Where my rules are stricter or
        looser than those sources, the protocol pages say so.
      </p>
      <RefList refs={FASTING_SAFETY} />

      <h2>The refeed window and cancer caution</h2>
      <p>
        One mouse study stands behind the refeed&rsquo;s mutagen holiday and
        the cancer-history rules, and I want its size visible: a 24-hour fast,
        an engineered gene deletion, no chemical mutagen and no human data. I
        carry it as a precaution that costs nothing, not as a finding about
        people.
      </p>
      <RefList refs={REFEED_WINDOW} />

      <h2>Thyroid hormone, herpesviruses and antihistamines</h2>
      <p>
        I have seen the T3 ramp trigger HSV in many cases; the published work
        below points at the hormone drop instead, and it is thin, so both
        windows are covered. The antihistamine trial is here because it is the
        best test there is, and the benefit it found was small and faded once
        the drug stopped.
      </p>
      <RefList refs={REACTIVATION} />

      <h2>Have a correction?</h2>
      <p>
        If a citation is wrong, outdated, or better sourced elsewhere, tell me and
        I will fix it. See my <Link href="/editorial-policy">editorial policy</Link>{" "}
        for how claims are sourced and corrected, and{" "}
        <Link href="/contact">get in touch</Link>.
      </p>
    </>
  );
}
