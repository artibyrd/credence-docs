/**
 * Credence Documentation Taxonomy Rules: Core Catalogs (SPJ & Fallacies)
 * Zero-npm native ES module.
 */

export const CORE_TAXONOMY_RULES = [
  {
    "id": "DP-1.1",
    "name": "Disguised Ads & Fake UI Elements",
    "uri": "deceptive-pattern:visual-and-attention-interference/DP-1.1@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "VISUAL_AND_ATTENTION_INTERFERENCE",
    "cluster": "Visual & Attention Interference",
    "severity": 4,
    "desc": "Advertisements styled to look like native site content, search results, system alert dialogs, or primary action buttons.",
    "signals": [
      "Banner ads styled as 'Download Now' or 'Scan System' system prompts.",
      "Sponsored promotional links disguised as genuine editorial navigation."
    ],
    "evidence": "Identify the deceptive visual element or DOM selector and specify how it mimics native controls.",
    "mitigations": null
  },
  {
    "id": "DP-1.2",
    "name": "Visual Contrast Suppression / Hidden Disclosures",
    "uri": "deceptive-pattern:visual-and-attention-interference/DP-1.2@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "VISUAL_AND_ATTENTION_INTERFERENCE",
    "cluster": "Visual & Attention Interference",
    "severity": 3,
    "desc": "Making crucial terms, recurring billing conditions, or opt-out links nearly invisible using ultra-low contrast or microscopic fonts.",
    "signals": [
      "Light gray text on white background for critical subscription pricing.",
      "Tiny disclaimers placed outside the visual viewport or below the fold."
    ],
    "evidence": "Quote the suppressed text and note its CSS styling, font size, or color contrast ratio.",
    "mitigations": null
  },
  {
    "id": "DP-1.3",
    "name": "Preselection & Sneaking",
    "uri": "deceptive-pattern:visual-and-attention-interference/DP-1.3@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "VISUAL_AND_ATTENTION_INTERFERENCE",
    "cluster": "Visual & Attention Interference",
    "severity": 4,
    "desc": "Pre-checking opt-ins for expensive add-ons, marketing lists, or recurring donations without user affirmative action.",
    "signals": [
      "Default checked boxes that add products or subscriptions to the cart."
    ],
    "evidence": "Identify the preselected checkbox, toggle, or stealth charge.",
    "mitigations": null
  },
  {
    "id": "DP-2.1",
    "name": "Confirmshaming",
    "uri": "deceptive-pattern:emotional-and-social-pressure/DP-2.1@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "EMOTIONAL_AND_SOCIAL_PRESSURE",
    "cluster": "Emotional & Social Pressure",
    "severity": 3,
    "desc": "Phrasing the opt-out option to guilt, insult, or shame the user into complying with the site's preferred choice.",
    "signals": [
      "'No thanks, I hate saving money' or 'No, I don't care about security' as the decline button text."
    ],
    "evidence": "Quote the manipulative reject button text and the positive accept alternative.",
    "mitigations": null
  },
  {
    "id": "DP-2.2",
    "name": "Fake Urgency / Resetting Countdowns",
    "uri": "deceptive-pattern:emotional-and-social-pressure/DP-2.2@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "EMOTIONAL_AND_SOCIAL_PRESSURE",
    "cluster": "Emotional & Social Pressure",
    "severity": 4,
    "desc": "Displaying artificial timers, countdowns, or claims of impending price hikes that automatically reset upon page refresh.",
    "signals": [
      "'Special deal expires in 04:59' timers that loop or reset upon reload.",
      "Manufactured urgency with no real inventory expiration."
    ],
    "evidence": "Quote the timer or urgency claim and note its artificial reset behavior.",
    "mitigations": null
  },
  {
    "id": "DP-2.3",
    "name": "Fabricated Social Proof / Fake Activity Tickers",
    "uri": "deceptive-pattern:emotional-and-social-pressure/DP-2.3@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "EMOTIONAL_AND_SOCIAL_PRESSURE",
    "cluster": "Emotional & Social Pressure",
    "severity": 4,
    "desc": "Generating synthetic notifications claiming other users just purchased the item or that high demand is depleting stock.",
    "signals": [
      "Repeating toast popups ('John from Ohio just bought this!') generated randomly via client-side script."
    ],
    "evidence": "Quote the social proof popup or identify the client-side ticker script.",
    "mitigations": null
  },
  {
    "id": "DP-3.1",
    "name": "Roach Motel / Trapped Cancellation",
    "uri": "deceptive-pattern:forced-action-and-obstruction/DP-3.1@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "FORCED_ACTION_AND_OBSTRUCTION",
    "cluster": "Forced Action & Obstruction",
    "severity": 5,
    "desc": "Making it effortless to sign up or subscribe (1-click), but requiring phone calls, maze-like forms, or hidden menus to cancel.",
    "signals": [
      "Asymmetric friction: instant online signup vs mandatory telephone cancellation during limited hours."
    ],
    "evidence": "Identify the cancellation friction pathway compared to initial onboarding.",
    "mitigations": null
  },
  {
    "id": "DP-3.2",
    "name": "Comparison Prevention",
    "uri": "deceptive-pattern:forced-action-and-obstruction/DP-3.2@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "FORCED_ACTION_AND_OBSTRUCTION",
    "cluster": "Forced Action & Obstruction",
    "severity": 3,
    "desc": "Intentionally obfuscating unit prices, plan features, or metrics to prevent users from making an informed financial comparison.",
    "signals": [
      "Concealing per-ounce or per-month true costs behind arbitrary bundle points."
    ],
    "evidence": "Identify the obfuscated pricing tier and note the omitted standard metrics.",
    "mitigations": null
  },
  {
    "id": "DP-4.1",
    "name": "Bait and Switch",
    "uri": "deceptive-pattern:deceptive-navigation/DP-4.1@v1.0.0",
    "catalog": "deceptive_patterns",
    "domain": "DECEPTIVE_PATTERN",
    "cluster_id": "DECEPTIVE_NAVIGATION",
    "cluster": "Deceptive Navigation",
    "severity": 5,
    "desc": "Promising one outcome (e.g. clicking 'Close' or 'Skip') but executing an entirely different action (e.g. initiating download or checkout).",
    "signals": [
      "Clicking an 'X' button that opens a sponsored popup instead of closing the modal."
    ],
    "evidence": "Identify the deceptive trigger and its unexpected resulting action.",
    "mitigations": null
  },
  {
    "id": "FALLACY-1.1",
    "name": "Ad Hominem (Abusive / Circumstantial)",
    "uri": "logical-fallacy:relevance-and-personal-attacks/FALLACY-1.1@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "RELEVANCE_AND_PERSONAL_ATTACKS",
    "cluster": "Relevance & Personal Attacks",
    "severity": 3,
    "desc": "Attacking an opponent's character, background, appearance, or motives instead of engaging with their substantive argument.",
    "signals": [
      "Name-calling, insults, or impugning personal morality rather than refuting premises.",
      "Dismissing an argument simply because the proponent stands to benefit from the conclusion."
    ],
    "evidence": "Quote the personal insult or motive-questioning statement and indicate what substantive argument it replaces.",
    "mitigations": null
  },
  {
    "id": "FALLACY-1.2",
    "name": "Tu Quoque (Whataboutism)",
    "uri": "logical-fallacy:relevance-and-personal-attacks/FALLACY-1.2@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "RELEVANCE_AND_PERSONAL_ATTACKS",
    "cluster": "Relevance & Personal Attacks",
    "severity": 3,
    "desc": "Deflecting criticism by accusing the accuser of hypocrisy or raising unrelated counter-allegations.",
    "signals": [
      "'What about when they did X?' or 'You do the same thing so your argument is invalid.'"
    ],
    "evidence": "Quote the counter-accusation and explain how it evades answering the initial point.",
    "mitigations": null
  },
  {
    "id": "FALLACY-1.3",
    "name": "Poisoning the Well",
    "uri": "logical-fallacy:relevance-and-personal-attacks/FALLACY-1.3@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "RELEVANCE_AND_PERSONAL_ATTACKS",
    "cluster": "Relevance & Personal Attacks",
    "severity": 4,
    "desc": "Preemptively presenting adverse information about an opponent to discredit anything they might say beforehand.",
    "signals": [
      "Warning the audience that the opponent is an inveterate liar or corrupt before quoting them."
    ],
    "evidence": "Quote the preemptive disparagement aimed at invalidating future testimony.",
    "mitigations": null
  },
  {
    "id": "FALLACY-1.4",
    "name": "Genetic Fallacy",
    "uri": "logical-fallacy:relevance-and-personal-attacks/FALLACY-1.4@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "RELEVANCE_AND_PERSONAL_ATTACKS",
    "cluster": "Relevance & Personal Attacks",
    "severity": 2,
    "desc": "Judging the validity of an idea purely on the basis of its origin or source history rather than its merits.",
    "signals": [
      "Rejecting an empirical claim solely because of the political or geographical origin of the speaker."
    ],
    "evidence": "Quote where the origin of the argument is used as sole justification for dismissal.",
    "mitigations": null
  },
  {
    "id": "FALLACY-2.1",
    "name": "Begging the Question (Petitio Principii)",
    "uri": "logical-fallacy:presumption-and-circularity/FALLACY-2.1@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "PRESUMPTION_AND_CIRCULARITY",
    "cluster": "Presumption & Circularity",
    "severity": 3,
    "desc": "An argument whose premises assume the truth of the conclusion they are supposed to prove.",
    "signals": [
      "Circular reasoning where statement A is true because of B, and B is true because of A."
    ],
    "evidence": "Quote the circular argument and highlight where the premise restates the conclusion.",
    "mitigations": null
  },
  {
    "id": "FALLACY-2.2",
    "name": "False Dilemma / False Dichotomy",
    "uri": "logical-fallacy:presumption-and-circularity/FALLACY-2.2@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "PRESUMPTION_AND_CIRCULARITY",
    "cluster": "Presumption & Circularity",
    "severity": 3,
    "desc": "Presenting complex, nuanced situations as an 'either/or' choice while ignoring viable middle grounds.",
    "signals": [
      "'You are either with us or against us' framing.",
      "Ignoring third alternatives and treating two extremes as exhaustive."
    ],
    "evidence": "Quote the binary constraint and identify reasonable excluded options.",
    "mitigations": null
  },
  {
    "id": "FALLACY-2.3",
    "name": "Loaded Question",
    "uri": "logical-fallacy:presumption-and-circularity/FALLACY-2.3@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "PRESUMPTION_AND_CIRCULARITY",
    "cluster": "Presumption & Circularity",
    "severity": 3,
    "desc": "Asking a question containing an unproven, incriminating presumption that cannot be answered simply without admitting guilt.",
    "signals": [
      "'Have you stopped taking bribes yet?' style interrogations."
    ],
    "evidence": "Quote the question and identify the presupposed unproven claim.",
    "mitigations": null
  },
  {
    "id": "FALLACY-2.4",
    "name": "Cherry-Picking (Texas Sharpshooter)",
    "uri": "logical-fallacy:presumption-and-circularity/FALLACY-2.4@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "PRESUMPTION_AND_CIRCULARITY",
    "cluster": "Presumption & Circularity",
    "severity": 4,
    "desc": "Highlighting only confirming evidence or favorable outliers while ignoring vast contradictory data.",
    "signals": [
      "Selecting isolated quarters or single studies while concealing consensus meta-analyses."
    ],
    "evidence": "Quote the cherry-picked dataset and identify the omitted broader body of evidence.",
    "mitigations": null
  },
  {
    "id": "FALLACY-3.1",
    "name": "Post Hoc Ergo Propter Hoc",
    "uri": "logical-fallacy:causal-and-inductive-errors/FALLACY-3.1@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "CAUSAL_AND_INDUCTIVE_ERRORS",
    "cluster": "Causal & Inductive Errors",
    "severity": 3,
    "desc": "Assuming that because Event B occurred after Event A, Event A must have caused Event B.",
    "signals": [
      "Claiming sequential coincidence proves causal linkage without mechanistic proof."
    ],
    "evidence": "Quote the passage asserting causation based solely on chronological order.",
    "mitigations": null
  },
  {
    "id": "FALLACY-3.2",
    "name": "Correlation as Causation",
    "uri": "logical-fallacy:causal-and-inductive-errors/FALLACY-3.2@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "CAUSAL_AND_INDUCTIVE_ERRORS",
    "cluster": "Causal & Inductive Errors",
    "severity": 3,
    "desc": "Treating statistical correlation between two variables as definitive proof that one causes the other.",
    "signals": [
      "Overlooking confounding variables or reverse causality in statistical relationships."
    ],
    "evidence": "Quote the causal conclusion drawn from purely correlational data.",
    "mitigations": null
  },
  {
    "id": "FALLACY-3.3",
    "name": "Hasty Generalization",
    "uri": "logical-fallacy:causal-and-inductive-errors/FALLACY-3.3@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "CAUSAL_AND_INDUCTIVE_ERRORS",
    "cluster": "Causal & Inductive Errors",
    "severity": 2,
    "desc": "Drawing a broad conclusion from a sample that is too small or unrepresentative.",
    "signals": [
      "Using a single personal anecdote to generalize about an entire demographic or scientific field."
    ],
    "evidence": "Quote the generalization and identify why the sample size is inadequate.",
    "mitigations": null
  },
  {
    "id": "FALLACY-3.4",
    "name": "Slippery Slope",
    "uri": "logical-fallacy:causal-and-inductive-errors/FALLACY-3.4@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "CAUSAL_AND_INDUCTIVE_ERRORS",
    "cluster": "Causal & Inductive Errors",
    "severity": 3,
    "desc": "Claiming that a minor initial step will inevitably trigger a disastrous chain reaction without proving each link.",
    "signals": [
      "'If we allow X, then catastrophic Y and apocalypse Z will unavoidable follow.'"
    ],
    "evidence": "Quote the predicted catastrophic progression and note the missing intermediate proofs.",
    "mitigations": null
  },
  {
    "id": "FALLACY-4.1",
    "name": "Appeal to Fear (Argumentum Ad Baculum / In Terrorem)",
    "uri": "logical-fallacy:emotional-and-manipulative-appeals/FALLACY-4.1@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "EMOTIONAL_AND_MANIPULATIVE_APPEALS",
    "cluster": "Emotional & Manipulative Appeals",
    "severity": 4,
    "desc": "Using fabricated, exaggerated, or apocalyptic terror scenarios to coerce acceptance of a claim.",
    "signals": [
      "Alarmist rhetoric designed to induce panic rather than explain empirical risks."
    ],
    "evidence": "Quote the fear-inducing rhetoric and specify how it substitutes for logical argument.",
    "mitigations": null
  },
  {
    "id": "FALLACY-4.2",
    "name": "Appeal to Outrage / Anger",
    "uri": "logical-fallacy:emotional-and-manipulative-appeals/FALLACY-4.2@v1.0.0",
    "catalog": "iep_fallacies",
    "domain": "LOGICAL_FALLACY",
    "cluster_id": "EMOTIONAL_AND_MANIPULATIVE_APPEALS",
    "cluster": "Emotional & Manipulative Appeals",
    "severity": 3,
    "desc": "Stoking moral outrage, hostility, and indignation to bypass critical evaluation of claims.",
    "signals": [
      "Hyper-charged emotional language framing opponents as monsters or existential threats."
    ],
    "evidence": "Quote the inflammatory rhetoric intended to provoke outrage.",
    "mitigations": null
  }
];
