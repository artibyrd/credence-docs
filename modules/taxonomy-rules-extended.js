/**
 * Credence Documentation Taxonomy Rules: Extended Catalogs (UX, Financial, Medical, Governance)
 * Zero-npm native ES module.
 */

export const EXTENDED_TAXONOMY_RULES = [
  {
    "id": "FALLACY-4.3",
    "name": "Bandwagon / Appeal to Popularity (Ad Populum)",
    "uri": "logical-fallacy:emotional-and-manipulative-appeals/FALLACY-4.3@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "EMOTIONAL_AND_MANIPULATIVE_APPEALS",
    "cluster": "Emotional & Manipulative Appeals",
    "severity": 2,
    "desc": "Arguing that a claim must be true or good simply because many people believe or do it.",
    "signals": [
      "'Everyone knows that X' or 'Millions of people can't be wrong.'"
    ],
    "evidence": "Quote the appeal to consensus or popular belief as proof of validity.",
    "mitigations": null
  },
  {
    "id": "FALLACY-4.4",
    "name": "Appeal to False Authority (Ad Verecundiam)",
    "uri": "logical-fallacy:emotional-and-manipulative-appeals/FALLACY-4.4@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "EMOTIONAL_AND_MANIPULATIVE_APPEALS",
    "cluster": "Emotional & Manipulative Appeals",
    "severity": 3,
    "desc": "Citing the opinion of a celebrity, non-expert, or authority in an unrelated field as definitive proof.",
    "signals": [
      "Using an entertainer's opinion to validate a complex epidemiological or cosmological claim."
    ],
    "evidence": "Quote the authority citation and specify why their expertise does not apply.",
    "mitigations": null
  },
  {
    "id": "FALLACY-5.1",
    "name": "Straw Man",
    "uri": "logical-fallacy:ambiguity-and-equivocation/FALLACY-5.1@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "AMBIGUITY_AND_EQUIVOCATION",
    "cluster": "Ambiguity & Equivocation",
    "severity": 4,
    "desc": "Misrepresenting, exaggerating, or oversimplifying an opponent's argument to make it easier to attack.",
    "signals": [
      "Distorting an opponent's moderate position into an absurd, easily dismantled caricature."
    ],
    "evidence": "Quote the distorted summary alongside the authentic position being caricatured.",
    "mitigations": null
  },
  {
    "id": "FALLACY-5.2",
    "name": "Equivocation",
    "uri": "logical-fallacy:ambiguity-and-equivocation/FALLACY-5.2@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "AMBIGUITY_AND_EQUIVOCATION",
    "cluster": "Ambiguity & Equivocation",
    "severity": 3,
    "desc": "Using a word or phrase with multiple meanings ambiguously in different parts of the argument.",
    "signals": [
      "Shifting definition of a key term mid-argument to manufacture a false conclusion."
    ],
    "evidence": "Quote the text and show how the key term's definition was shifted.",
    "mitigations": null
  },
  {
    "id": "FALLACY-5.3",
    "name": "Fallacy of Accent / Out of Context",
    "uri": "logical-fallacy:ambiguity-and-equivocation/FALLACY-5.3@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "AMBIGUITY_AND_EQUIVOCATION",
    "cluster": "Ambiguity & Equivocation",
    "severity": 3,
    "desc": "Altering the meaning of an original statement by changing vocal emphasis or removing surrounding qualifiers.",
    "signals": [
      "Selective excerpting that conveys the opposite of what the original author intended."
    ],
    "evidence": "Quote the excerpt and provide the missing surrounding sentences.",
    "mitigations": null
  },
  {
    "id": "FALLACY-6.1",
    "name": "False Equivalence",
    "uri": "logical-fallacy:formal-and-deductive-errors/FALLACY-6.1@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "FORMAL_AND_DEDUCTIVE_ERRORS",
    "cluster": "Formal & Deductive Errors",
    "severity": 3,
    "desc": "Equating two completely unequal situations, severity levels, or ethical transgressions as if they were identical.",
    "signals": [
      "Treating a minor clerical error and widespread systemic fraud as equivalent misconduct."
    ],
    "evidence": "Quote the comparison and explain why the two situations are fundamentally unequal.",
    "mitigations": null
  },
  {
    "id": "FALLACY-6.2",
    "name": "Affirming the Consequent",
    "uri": "logical-fallacy:formal-and-deductive-errors/FALLACY-6.2@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "FORMAL_AND_DEDUCTIVE_ERRORS",
    "cluster": "Formal & Deductive Errors",
    "severity": 3,
    "desc": "Inferring the antecedent from the consequent (If P then Q; Q; therefore P).",
    "signals": [
      "Assuming an outcome could only have been caused by one specific prior event."
    ],
    "evidence": "Quote the deductive statement and point out alternative possible causes.",
    "mitigations": null
  },
  {
    "id": "SPJ-1.1",
    "name": "Unsourced Factual Assertion",
    "uri": "journalistic-ethics:seek-truth-and-report/SPJ-1.1@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "SEEK_TRUTH_AND_REPORT",
    "cluster": "Seek Truth and Report It",
    "severity": 3,
    "desc": "Significant factual, scientific, or statistical claims made without citations, primary sources, or verifiable provenance.",
    "signals": [
      "Sweeping empirical claims presented without attribution ('studies show', 'experts say' without naming who or where).",
      "Absence of hyperlinks or citations for non-obvious statistical assertions."
    ],
    "evidence": "Quote the unsupported factual claim and indicate what primary verification is missing.",
    "mitigations": null
  },
  {
    "id": "SPJ-1.2",
    "name": "Headline / Body Distortion",
    "uri": "journalistic-ethics:seek-truth-and-report/SPJ-1.2@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "SEEK_TRUTH_AND_REPORT",
    "cluster": "Seek Truth and Report It",
    "severity": 4,
    "desc": "Misleading headline disparity where the article title or social preview contradicts or grossly inflates what the body text substantiates.",
    "signals": [
      "Sensationalist clickbait title making an absolute claim that is softened or debunked inside the body text.",
      "Headline suggesting confirmed facts when the article only reports unverified rumors."
    ],
    "evidence": "Quote the headline alongside the contradicting excerpt from the article body.",
    "mitigations": null
  },
  {
    "id": "SPJ-1.3",
    "name": "Uncorroborated Anonymous Sourcing",
    "uri": "journalistic-ethics:seek-truth-and-report/SPJ-1.3@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "SEEK_TRUTH_AND_REPORT",
    "cluster": "Seek Truth and Report It",
    "severity": 3,
    "desc": "Damaging assertions attributed exclusively to unnamed sources without explanatory justification or multiple independent corroborating points.",
    "signals": [
      "Relying on anonymous 'insiders' or 'officials' for severe defamatory allegations without explaining source motives or corroboration attempts."
    ],
    "evidence": "Quote the passage where anonymous claims are used and note the lack of corroborating context.",
    "mitigations": null
  },
  {
    "id": "SPJ-1.4",
    "name": "Deceptive Context & Selective Omission",
    "uri": "journalistic-ethics:seek-truth-and-report/SPJ-1.4@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "SEEK_TRUTH_AND_REPORT",
    "cluster": "Seek Truth and Report It",
    "severity": 4,
    "desc": "Quoting individuals or citing data while intentionally omitting critical qualifiers, timestamps, or full context that changes the fundamental meaning.",
    "signals": [
      "Snipped quotes that reverse the speaker's stated intent.",
      "Outdated reports or videos recirculated as breaking current events."
    ],
    "evidence": "Quote the trimmed statement and supply the omitted contextual qualifiers.",
    "mitigations": null
  },
  {
    "id": "SPJ-1.5",
    "name": "Blurred Editorial Demarcation",
    "uri": "journalistic-ethics:seek-truth-and-report/SPJ-1.5@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "SEEK_TRUTH_AND_REPORT",
    "cluster": "Seek Truth and Report It",
    "severity": 3,
    "desc": "Op-eds, speculative commentary, or sponsored marketing presented with the visual styling and framing of objective hard news.",
    "signals": [
      "Heavy editorial opinions and prescriptive stances without an 'Opinion', 'Commentary', or 'Analysis' badge.",
      "Lack of visual separation between editorial content and journalistic reporting."
    ],
    "evidence": "Quote opinionated passages and note the absence of clear editorial labeling.",
    "mitigations": null
  },
  {
    "id": "SPJ-1.6",
    "name": "Cloaked Satire / Bad-Faith Parody Defense",
    "uri": "journalistic-ethics:seek-truth-and-report/SPJ-1.6@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "SEEK_TRUTH_AND_REPORT",
    "cluster": "Seek Truth and Report It",
    "severity": 4,
    "desc": "Malicious disinformation or defamatory falsehoods masquerading as 'satire' or 'a joke' to evade accountability while actively deceiving audiences.",
    "signals": [
      "Deceptive fabrication designed to look like authentic breaking news with no visible satire disclosures on the page or masthead.",
      "Claiming satire only after being challenged on factual inaccuracies."
    ],
    "evidence": "Quote the fabricated claim and identify why it is deceptively framed as legitimate news.",
    "mitigations": null
  },
  {
    "id": "SPJ-2.1",
    "name": "Sensational Exploitation of Tragedy",
    "uri": "journalistic-ethics:minimize-harm/SPJ-2.1@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "MINIMIZE_HARM",
    "cluster": "Minimize Harm",
    "severity": 4,
    "desc": "Gratuitous sensationalism exploiting private victims, minors, or grief for emotional engagement or ad clicks.",
    "signals": [
      "Ghoulish imagery, unredacted traumatic footage, or invasive reporting on grieving families."
    ],
    "evidence": "Quote or identify the sensationalized coverage of private grief.",
    "mitigations": null
  },
  {
    "id": "SPJ-2.2",
    "name": "Doxxing & Unjustified Privacy Intrusion",
    "uri": "journalistic-ethics:minimize-harm/SPJ-2.2@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "MINIMIZE_HARM",
    "cluster": "Minimize Harm",
    "severity": 5,
    "desc": "Publishing private phone numbers, home addresses, or private identifying documents without legitimate public interest justification.",
    "signals": [
      "Exposing private personal identifiable information (PII) of non-public figures."
    ],
    "evidence": "Identify the private information exposed without public justification.",
    "mitigations": null
  },
  {
    "id": "SPJ-3.1",
    "name": "Undisclosed Commercial or Political Conflict",
    "uri": "journalistic-ethics:act-independently/SPJ-3.1@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "ACT_INDEPENDENTLY",
    "cluster": "Act Independently",
    "severity": 4,
    "desc": "Favorable coverage of products, donors, or political candidates without disclosing financial, ownership, or affiliate ties.",
    "signals": [
      "Glowing review or uncritical endorsement without standard affiliate or sponsor disclosures."
    ],
    "evidence": "Quote promotional passages and document the missing conflict disclosure.",
    "mitigations": null
  },
  {
    "id": "SPJ-3.2",
    "name": "Disguised Native Advertising",
    "uri": "journalistic-ethics:act-independently/SPJ-3.2@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "ACT_INDEPENDENTLY",
    "cluster": "Act Independently",
    "severity": 5,
    "desc": "Paid promotional marketing designed to mimic an independent investigative article.",
    "signals": [
      "Advertorial formatted as authentic news reporting without conspicuous 'Sponsored' or 'Ad' tags."
    ],
    "evidence": "Quote the article layout or text showing sponsored intent disguised as news.",
    "mitigations": null
  },
  {
    "id": "SPJ-4.1",
    "name": "Ghost or Anonymous Publishing",
    "uri": "journalistic-ethics:be-accountable-and-transparent/SPJ-4.1@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "BE_ACCOUNTABLE_AND_TRANSPARENT",
    "cluster": "Be Accountable and Transparent",
    "severity": 2,
    "desc": "Articles completely lacking author bylines, editorial mastheads, or publisher identity.",
    "signals": [
      "News reports published without an author name, editorial board, or organization contact."
    ],
    "evidence": "Note the absence of author byline and organization masthead on the page.",
    "mitigations": null
  },
  {
    "id": "SPJ-4.2",
    "name": "Lack of Corrections Policy",
    "uri": "journalistic-ethics:be-accountable-and-transparent/SPJ-4.2@v1.0.0",
    "catalog": "spj_ethics",
    "domain": "JOURNALISTIC_ETHICS",
    "cluster_id": "BE_ACCOUNTABLE_AND_TRANSPARENT",
    "cluster": "Be Accountable and Transparent",
    "severity": 2,
    "desc": "Absence of a visible corrections log, contact channel for factual disputes, or retraction standards.",
    "signals": [
      "No mechanism for readers to submit corrections or verify editorial accountability."
    ],
    "evidence": "Note the absence of corrections policy or contact methods.",
    "mitigations": null
  },
  {
    "id": "FIN-1.1",
    "name": "Ungrounded Non-GAAP Forward Projections",
    "uri": "financial-disclosures:forward-projections/FIN-1.1@v1.0.0",
    "catalog": "financial_disclosures",
    "domain": "DOMAIN_SPECIFIC",
    "cluster_id": "FORWARD_PROJECTIONS",
    "cluster": "Forward Projections & Non-GAAP",
    "severity": 4,
    "desc": "Promoting non-GAAP Adjusted EBITDA or forward guidance without direct GAAP reconciliation table and explicit risk disclosures.",
    "signals": [
      "non-GAAP Adjusted EBITDA",
      "projected 10x EBITDA without GAAP bridge",
      "cherry-picked margin expansion"
    ],
    "evidence": "Citation must quote the exact financial claim and verify whether SEC Regulation G reconciliation is omitted.",
    "mitigations": "Clear safe harbor statement alongside mandatory GAAP net income reconciliation table."
  },
  {
    "id": "MED-1.1",
    "name": "In Vitro Extrapolation to Human Cure",
    "uri": "medical-claims:clinical-evidence/MED-1.1@v1.0.0",
    "catalog": "medical_claims",
    "domain": "DOMAIN_SPECIFIC",
    "cluster_id": "CLINICAL_EVIDENCE",
    "cluster": "Clinical Evidence & Trials",
    "severity": 4,
    "desc": "Reporting in vitro laboratory cell or rodent studies as proven human medical cures without Phase III clinical trial evidence.",
    "signals": [
      "miracle breakthrough in petri dishes",
      "cures cancer in mouse models presented as human therapy"
    ],
    "evidence": "Citation must quote the therapeutic efficacy claim and identify the clinical trial phase (or lack thereof).",
    "mitigations": "Explicit prominently placed disclosure of pre-clinical laboratory stage and unknown human efficacy."
  },
  {
    "id": "ELEC-1.1",
    "name": "Deceptive Voter Procedure / False Deadlines",
    "uri": "election-integrity:voting-procedures/ELEC-1.1@v1.0.0",
    "catalog": "election_integrity",
    "domain": "DOMAIN_SPECIFIC",
    "cluster_id": "VOTING_PROCEDURES",
    "cluster": "Voting Procedures & Deadlines",
    "severity": 5,
    "desc": "Misrepresenting official voter registration deadlines, mail-in ballot return criteria, or polling precinct locations.",
    "signals": [
      "vote by text message",
      "false registration closing date",
      "wrong polling hours or ID requirements"
    ],
    "evidence": "Citation must quote the deceptive voting instruction verbatim and reference official county recorder statutes.",
    "mitigations": "Satire or parody when labeled clearly, but strictly prohibited for operational voting mechanics."
  },
  {
    "id": "CONFLICT-1.1",
    "name": "Publisher-Politician Undisclosed Conflict",
    "uri": "governance-ethics:publisher-independence/CONFLICT-1.1@v1.0.0",
    "catalog": "governance_ethics",
    "domain": "DOMAIN_SPECIFIC",
    "cluster_id": "PUBLISHER_INDEPENDENCE",
    "cluster": "Publisher Independence & Civic Governance",
    "severity": 5,
    "desc": "Publishing civic coverage or political endorsements where publication ownership holds direct commercial or political office without full masthead and per-article disclosure.",
    "signals": [
      "city council candidate owns sole local news outlet",
      "editorial praise for publisher business land deal",
      "favorable zoning coverage without ownership badge"
    ],
    "evidence": "Citation must quote the favorable civic coverage and cross-reference public municipal financial disclosure registries.",
    "mitigations": "Total recusal of editorial control and prominent in-line masthead conflict disclosure."
  }
];
