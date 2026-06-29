export type Question = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
};

export const questionsBySlug: Record<string, Question[]> = {
  "lh-life-basics": [
    {
      question: "Which type of life insurance has no cash value?",
      options: ["Whole life", "Universal life", "Term life", "Variable life"],
      correctIndex: 2,
      explanation:
        "Term life is pure death-benefit protection for a fixed period with no savings component — that's exactly why it's the cheapest form of life insurance for a given face amount.",
    },
    {
      question: "Who is the person whose life is covered by a life insurance policy?",
      options: ["The owner", "The insured", "The beneficiary", "The producer"],
      correctIndex: 1,
      explanation:
        "The insured is whose life is on the line — the policy pays out when THEY die. The owner controls the policy and the beneficiary collects, but neither has to be the insured.",
    },
    {
      question: "What is the typical length of the free look period?",
      options: ["3 days", "10 days", "30 days", "60 days"],
      correctIndex: 1,
      explanation:
        "10 days is the commonly tested free look length — the window where a new policyholder can cancel for any reason and get a full premium refund, no questions asked.",
    },
    {
      question: "Which policy type allows flexible premiums and an adjustable death benefit?",
      options: ["Term life", "Whole life", "Universal life", "Credit life"],
      correctIndex: 2,
      explanation:
        "Universal life is the flexible permanent product — you can adjust premium payments and the death benefit within limits, unlike whole life's fixed premium/fixed benefit structure.",
    },
    {
      question: "Premiums for life insurance are primarily based on:",
      options: [
        "Age, health, occupation, and risk class",
        "Marital status only",
        "Annual income only",
        "Zip code only",
      ],
      correctIndex: 0,
      explanation:
        "Underwriting prices risk based on age, health history, occupation, and the resulting risk class — not on unrelated factors like marital status or zip code alone.",
    },
    {
      question: "Who receives the death benefit when the insured dies?",
      options: ["The owner", "The insurer", "The beneficiary", "The producer"],
      correctIndex: 2,
      explanation:
        "The beneficiary is named specifically to collect the death benefit — distinct from the owner (who controls the policy while the insured is alive) and the insurer (who pays out, not receives).",
    },
    {
      question: "Whole life insurance is best described as:",
      options: [
        "Temporary coverage with no cash value",
        "Permanent coverage with cash value",
        "Group coverage only",
        "Coverage that expires after 20 years always",
      ],
      correctIndex: 1,
      explanation:
        "Whole life is permanent — it lasts your entire life as long as premiums are paid — and builds guaranteed cash value, the two features that distinguish it from term life.",
    },
    {
      question: "Which party can change the beneficiary on a life policy (assuming a revocable designation)?",
      options: ["The insured only", "The beneficiary", "The owner", "The insurer"],
      correctIndex: 2,
      explanation:
        "The owner controls the policy's administrative decisions, including changing a revocable beneficiary — the insured and beneficiary have no inherent right to make that change themselves.",
    },
    {
      question: "What is the primary purpose of life insurance?",
      options: [
        "To build investment wealth",
        "To replace income lost at the insured's death",
        "To pay the insured's medical bills",
        "To fund the insured's retirement",
      ],
      correctIndex: 1,
      explanation:
        "Life insurance exists to protect dependents from the financial loss caused by the insured's death — any cash-value growth is secondary to that core income-replacement purpose.",
    },
    {
      question: "Which of these is NOT one of the three parties typically named on a life insurance policy?",
      options: ["Owner", "Insured", "Beneficiary", "Underwriter"],
      correctIndex: 3,
      explanation:
        "The underwriter evaluates and prices risk for the insurer — they aren't a named party on the policy itself. Owner, insured, and beneficiary are the three roles a policy defines.",
    },
    {
      question: "A policy where the same person is the applicant, owner, and insured is described as:",
      options: ["Third-party ownership", "Self-owned", "Absolute assignment", "Collateral assignment"],
      correctIndex: 1,
      explanation:
        "When one person fills all three roles, it's the most common (self-owned) arrangement, as opposed to third-party ownership where someone else owns a policy on another person's life.",
    },
    {
      question: "Variable life insurance differs from whole life mainly because:",
      options: [
        "It has no death benefit",
        "Cash value is invested in separate accounts chosen by the policyowner",
        "It cannot be sold to individuals",
        "Premiums are always level and guaranteed",
      ],
      correctIndex: 1,
      explanation:
        "Variable life ties cash value (and often the death benefit) to investment performance in separate accounts the owner selects — that investment risk is the key difference from whole life's guaranteed cash value.",
    },
    {
      question: "Which life insurance product is generally the least expensive for the most coverage in the short term?",
      options: ["Whole life", "Universal life", "Term life", "Variable universal life"],
      correctIndex: 2,
      explanation:
        "Because term life builds no cash value and only covers a fixed period, it offers the highest death benefit per premium dollar in the short term — the trade-off is it expires.",
    },
    {
      question: "Decreasing term life insurance is most commonly used to cover:",
      options: ["A mortgage balance that shrinks over time", "Final expenses", "Lifetime income replacement", "A growing business loan"],
      correctIndex: 0,
      explanation:
        "Decreasing term's face amount declines on a schedule, which matches a mortgage's shrinking balance — the death benefit and the debt it's meant to cover fall together.",
    },
  ],
  "lh-policy-provisions": [
    {
      question: "After how many years can an insurer no longer contest a life policy for misstatements (incontestability clause)?",
      options: ["1 year", "2 years", "5 years", "10 years"],
      correctIndex: 1,
      explanation:
        "2 years from issue is the standard incontestability period — after that, the insurer can't void the policy over application misstatements, with nonpayment of premium as the one standing exception.",
    },
    {
      question: "A rider that waives premiums if the insured becomes disabled is called:",
      options: ["Accelerated death benefit", "Waiver of premium", "Guaranteed insurability", "Accidental death benefit"],
      correctIndex: 1,
      explanation:
        "Waiver of premium keeps the policy in force without payments during a qualifying disability — it doesn't pay a death benefit itself, it just waives the premium obligation.",
    },
    {
      question: "Which nonforfeiture option converts cash value into a smaller, fully paid-up policy?",
      options: ["Extended term", "Cash surrender", "Reduced paid-up", "Automatic premium loan"],
      correctIndex: 2,
      explanation:
        "Reduced paid-up insurance keeps the policy permanent but shrinks the face amount — the trade is a lower death benefit in exchange for never paying premiums again.",
    },
    {
      question: "The grace period gives a policyholder extra time to:",
      options: [
        "File a claim",
        "Pay an overdue premium before the policy lapses",
        "Cancel the policy for a refund",
        "Change beneficiaries",
      ],
      correctIndex: 1,
      explanation:
        "The grace period (commonly 30-31 days) exists solely to let a policyholder catch up on an overdue premium before the policy actually lapses — coverage stays in force during this window.",
    },
    {
      question: "An accelerated death benefit rider allows the insured to:",
      options: [
        "Borrow against the policy at any time",
        "Receive part of the death benefit early due to terminal illness",
        "Increase the face amount without underwriting",
        "Convert term to whole life automatically",
      ],
      correctIndex: 1,
      explanation:
        "This rider's one trigger is a terminal illness diagnosis — it lets the insured access part of their own death benefit while still alive, typically to cover end-of-life costs.",
    },
    {
      question: "A guaranteed insurability rider allows the policyholder to:",
      options: [
        "Purchase additional coverage at set intervals without new underwriting",
        "Cancel the policy without penalty",
        "Reduce premiums after good health checkups",
        "Transfer the policy to another insurer",
      ],
      correctIndex: 0,
      explanation:
        "This rider locks in the right to buy more coverage at specific future dates or life events (marriage, a new child) WITHOUT proving insurability again — valuable if health later declines.",
    },
    {
      question: "Under the extended term nonforfeiture option, cash value is used to:",
      options: [
        "Buy paid-up whole life coverage",
        "Buy term coverage for the original face amount for a limited time",
        "Refund the policyholder in cash",
        "Pay future premiums indefinitely",
      ],
      correctIndex: 1,
      explanation:
        "Extended term keeps the ORIGINAL face amount intact but only for a limited time, calculated from the available cash value — the opposite trade-off from reduced paid-up, which keeps the policy permanent but shrinks the face amount.",
    },
    {
      question: "Which provision prevents an insurer from denying a claim years later over an honest mistake on the application?",
      options: ["Grace period", "Incontestability clause", "Free look", "Reinstatement"],
      correctIndex: 1,
      explanation:
        "The incontestability clause is exactly this protection — once the contestable period passes, old application errors can no longer be used to deny a claim, except for nonpayment of premium.",
    },
    {
      question: "If an insured understates their age on a life insurance application, the typical remedy at claim time is:",
      options: [
        "The claim is automatically denied",
        "The death benefit is adjusted to what the premium paid would have bought at the true age",
        "The policy is voided with no refund",
        "The beneficiary is changed",
      ],
      correctIndex: 1,
      explanation:
        "The misstatement of age provision doesn't void the policy — it recalculates the benefit to what the premiums actually paid for at the insured's real age.",
    },
    {
      question: "An automatic premium loan provision uses the policy's cash value to:",
      options: [
        "Increase the death benefit",
        "Pay an overdue premium automatically, preventing lapse",
        "Buy a paid-up rider",
        "Cancel the policy",
      ],
      correctIndex: 1,
      explanation:
        "This provision (an optional election) taps available cash value to cover a missed premium automatically, keeping the policy in force without the owner having to act.",
    },
    {
      question: "A policy loan against cash value, if unpaid at the insured's death, is handled by:",
      options: [
        "Voiding the entire policy",
        "Deducting the outstanding loan balance from the death benefit paid out",
        "Billing the beneficiary separately",
        "Forgiving the loan automatically",
      ],
      correctIndex: 1,
      explanation:
        "Outstanding policy loans plus accrued interest simply reduce the death benefit paid to the beneficiary — the insurer doesn't bill anyone separately or cancel coverage over it.",
    },
    {
      question: "Reinstating a lapsed life policy generally requires:",
      options: [
        "Nothing — coverage resumes automatically after 90 days",
        "Evidence of insurability and payment of back premiums (often with interest)",
        "A brand-new application only, with no back payment",
        "Court approval",
      ],
      correctIndex: 1,
      explanation:
        "Reinstatement isn't automatic — within the reinstatement window, the insured must prove they're still insurable and pay overdue premiums, usually with interest.",
    },
    {
      question: "A change of plan provision in a policy allows the owner to:",
      options: [
        "Convert one type of life policy to another (e.g., term to whole life) without new underwriting",
        "Change the insured to a different person",
        "Cancel the free look period",
        "Switch insurers without a new contract",
      ],
      correctIndex: 0,
      explanation:
        "This provision lets the owner convert coverage types — most commonly term to permanent — generally without re-proving insurability, as long as it's exercised within the allowed window.",
    },
    {
      question: "Which provision specifies how a death claim must be paid if the policy doesn't name a settlement option?",
      options: ["Entire contract clause", "Facility of payment clause", "Payment of claims provision", "Free look provision"],
      correctIndex: 2,
      explanation:
        "The payment of claims provision sets the default method and timing for paying out a claim when no specific settlement option was elected in advance.",
    },
    {
      question: "The entire contract provision establishes that:",
      options: [
        "The policy and attached application together make up the full legal contract",
        "Only the application is legally binding",
        "Riders are never part of the contract",
        "Verbal agreements override the written policy",
      ],
      correctIndex: 0,
      explanation:
        "This provision means nothing outside the policy document and attached application (like a verbal promise from an agent) can be used to expand or alter the contract's terms.",
    },
  ],
  "lh-health-basics": [
    {
      question: "Which plan type generally requires a primary care physician and referrals to see specialists?",
      options: ["PPO", "HMO", "Indemnity plan", "HSA-only plan"],
      correctIndex: 1,
      explanation:
        "HMOs use a primary care physician as a gatekeeper, requiring referrals for specialist care, in exchange for lower premiums — PPOs trade that restriction for more flexibility at a higher cost.",
    },
    {
      question: "The amount paid out-of-pocket before insurance starts paying is the:",
      options: ["Premium", "Deductible", "Coinsurance", "Copay"],
      correctIndex: 1,
      explanation:
        "The deductible is the threshold you pay first, out of pocket, before the insurer's cost-sharing kicks in — distinct from the ongoing premium and the per-visit copay or coinsurance split.",
    },
    {
      question: "COBRA primarily allows:",
      options: [
        "Lower premiums for healthy individuals",
        "Continuation of group coverage after a qualifying event",
        "Guaranteed life insurance issue",
        "Tax-free withdrawals from an HSA",
      ],
      correctIndex: 1,
      explanation:
        "COBRA lets someone keep their employer group health coverage (usually at their own full cost) after a qualifying event like job loss — it's about continuity, not a discount or a new benefit.",
    },
    {
      question: "Coinsurance in a health plan refers to:",
      options: [
        "A flat dollar fee per visit",
        "The percentage split of costs between insured and insurer after the deductible",
        "The total premium owed each year",
        "A penalty for late payment",
      ],
      correctIndex: 1,
      explanation:
        "Coinsurance is a PERCENTAGE split (e.g. 80/20) that applies after the deductible is met — don't confuse it with a copay, which is a flat dollar amount per visit.",
    },
    {
      question: "PPO plans typically differ from HMOs by:",
      options: [
        "Requiring no premium",
        "Allowing more flexibility to see providers without referrals",
        "Covering only emergency care",
        "Being available only to government employees",
      ],
      correctIndex: 1,
      explanation:
        "PPOs let members see specialists and out-of-network providers without a referral, trading the HMO's gatekeeper structure for more freedom — usually at a higher premium.",
    },
    {
      question: "Group health insurance, compared to individual coverage, is typically:",
      options: [
        "More restrictive on pre-existing conditions",
        "Guaranteed issue",
        "Never subject to a deductible",
        "Only available to retirees",
      ],
      correctIndex: 1,
      explanation:
        "Group plans are generally guaranteed issue for eligible employees — the risk is pooled across the whole group, so individual health history matters far less than in the individual market.",
    },
    {
      question: "A copay is best described as:",
      options: [
        "A fixed dollar amount paid at the time of service",
        "A percentage of total cost",
        "The annual out-of-pocket maximum",
        "The monthly premium",
      ],
      correctIndex: 0,
      explanation:
        "A copay is a flat, fixed fee due at the time of service (e.g. $25 per office visit) — the percentage-based version of cost-sharing is coinsurance, a different mechanism entirely.",
    },
    {
      question: "Which of these is a qualifying event that can trigger COBRA continuation coverage?",
      options: ["A raise at work", "Loss of a job", "Turning 18", "Moving to a new state"],
      correctIndex: 1,
      explanation:
        "Job loss (along with events like divorce or reduced work hours) is a defined COBRA qualifying event — it's what triggers the right to continue group coverage, generally at the individual's own expense.",
    },
    {
      question: "An HSA (Health Savings Account) can only be paired with:",
      options: ["Any health plan", "A high-deductible health plan (HDHP)", "Medicare only", "A whole life policy"],
      correctIndex: 1,
      explanation:
        "HSAs are legally tied to HDHPs — you can't open or contribute to one without qualifying HDHP coverage, which is the trade-off for the account's triple tax advantage.",
    },
    {
      question: "Money contributed to an HSA that is not spent by year-end:",
      options: [
        "Is forfeited like an FSA",
        "Rolls over and stays with the account holder indefinitely",
        "Is returned to the employer",
        "Must be spent within 90 days",
      ],
      correctIndex: 1,
      explanation:
        "Unlike a use-it-or-lose-it FSA, HSA funds roll over year to year and belong to the account holder permanently, even if they change jobs or health plans.",
    },
    {
      question: "The out-of-pocket maximum on a health plan represents:",
      options: [
        "The total premium for the year",
        "The most a member pays in cost-sharing before the plan covers 100% of remaining costs",
        "The deductible amount only",
        "A penalty for using out-of-network care",
      ],
      correctIndex: 1,
      explanation:
        "Once a member hits the out-of-pocket maximum (deductible + copays + coinsurance combined), the plan picks up 100% of covered costs for the rest of the plan year.",
    },
    {
      question: "A POS (Point of Service) plan combines features of:",
      options: ["HMO and PPO", "Whole life and term", "Medicare and Medicaid", "HSA and FSA"],
      correctIndex: 0,
      explanation:
        "POS plans use an HMO-style primary care gatekeeper for in-network care but allow PPO-style out-of-network access at a higher cost — a hybrid of the two structures.",
    },
    {
      question: "Pre-existing condition limitations on individual health policies are most heavily restricted by:",
      options: ["State guaranty associations", "The Affordable Care Act (ACA)", "COBRA", "Medicare Part D"],
      correctIndex: 1,
      explanation:
        "The ACA bars individual and group health plans from denying coverage or charging more based on pre-existing conditions — a major shift from pre-ACA medical underwriting.",
    },
    {
      question: "An indemnity (fee-for-service) health plan is characterized by:",
      options: [
        "A required primary care physician",
        "Paying a scheduled benefit regardless of which provider the insured chooses",
        "No premium",
        "Coverage only for hospital stays",
      ],
      correctIndex: 1,
      explanation:
        "Indemnity plans pay a fixed/scheduled benefit toward covered services with no network restriction — the insured can see any provider, unlike HMO or PPO network-based plans.",
    },
    {
      question: "Which best describes a health plan's 'network'?",
      options: [
        "The list of all possible diagnoses covered",
        "The group of providers that have contracted with the insurer at negotiated rates",
        "The total number of members enrolled",
        "The plan's claims department",
      ],
      correctIndex: 1,
      explanation:
        "A network is the set of providers who've agreed to the insurer's negotiated rates — using in-network providers is what produces the plan's advertised cost savings.",
    },
  ],
  "lh-underwriting-application": [
    {
      question: "Statements made on a life insurance application are generally treated as:",
      options: [
        "Warranties that must be literally, exactly true",
        "Representations that must be substantially true and made in good faith",
        "Legally meaningless",
        "Binding contracts in themselves",
      ],
      correctIndex: 1,
      explanation:
        "Application answers are representations — substantially true statements made in good faith — not warranties, which would require exact, literal truth. This affects how insurers can later contest a claim.",
    },
    {
      question: "Insurable interest for a life insurance policy must exist:",
      options: [
        "Continuously through the insured's death",
        "At the time the policy is applied for",
        "Only at claim time",
        "Never — life insurance doesn't require insurable interest",
      ],
      correctIndex: 1,
      explanation:
        "Life insurance requires insurable interest at the time of application, unlike property insurance, which requires it to continue through the time of loss.",
    },
    {
      question: "The Fair Credit Reporting Act (FCRA) primarily gives applicants the right to:",
      options: [
        "Demand a lower premium",
        "Know what's in their consumer report and dispute inaccuracies",
        "Skip the medical exam",
        "Automatically qualify for preferred rates",
      ],
      correctIndex: 1,
      explanation:
        "FCRA governs consumer reports used in underwriting, giving applicants the right to know what information was used and to dispute inaccurate information in their file.",
    },
    {
      question: "Risk classification (preferred, standard, substandard) is used by underwriters to:",
      options: [
        "Determine the agent's commission",
        "Set the premium based on the applicant's assessed risk level",
        "Decide whether to offer a free look period",
        "Determine the state of residence",
      ],
      correctIndex: 1,
      explanation:
        "Underwriters sort applicants into risk classes based on all gathered information, and that classification directly determines the premium charged.",
    },
    {
      question: "STOLI (Stranger/Investor-Owned Life Insurance) arrangements are generally prohibited because they:",
      options: [
        "Charge too much in premium",
        "Violate the insurable interest requirement, since a stranger/investor has no genuine stake in the insured's life",
        "Are always whole life policies",
        "Require a medical exam",
      ],
      correctIndex: 1,
      explanation:
        "STOLI arrangements fail the insurable interest requirement at its core — a stranger or investor profiting from someone else's death is exactly what insurable interest rules exist to prevent.",
    },
    {
      question: "A life insurance policy generally goes into force once:",
      options: [
        "The application is submitted, regardless of delivery",
        "It's delivered, the first premium is paid, and the insured's health hasn't changed since application",
        "The free look period ends",
        "The agent signs the policy",
      ],
      correctIndex: 1,
      explanation:
        "Coverage generally begins once all three conditions are met: delivery, payment of the first premium, and no change in the insured's health since the application was completed.",
    },
    {
      question: "Which characteristic describes a life insurance contract as one where only the insurer makes a legally enforceable promise?",
      options: ["Conditional", "Unilateral", "Adhesion", "Aleatory"],
      correctIndex: 1,
      explanation:
        "Unilateral means only one party (the insurer) makes a binding promise — the insured isn't legally compelled to keep paying premiums, though the policy lapses if they stop.",
    },
    {
      question: "An insurance contract being a contract of 'adhesion' means:",
      options: [
        "Both parties negotiate every term equally",
        "The insurer writes the contract and the insured simply accepts or rejects it",
        "The contract requires no consideration",
        "The contract can never be voided",
      ],
      correctIndex: 1,
      explanation:
        "Adhesion means the insurer drafts the contract terms and the insured has no power to negotiate them — they can only accept the policy as written or decline it.",
    },
    {
      question: "An insurance contract being 'aleatory' refers to:",
      options: [
        "Equal value exchanged by both parties",
        "An unequal exchange of value — a small premium can lead to a large payout",
        "The contract being void from the start",
        "The requirement for a medical exam",
      ],
      correctIndex: 1,
      explanation:
        "Aleatory contracts involve an unequal exchange — the insured may pay a small premium relative to a much larger potential payout, unlike contracts where both sides exchange roughly equal value.",
    },
    {
      question: "An insurance contract being 'conditional' means:",
      options: [
        "The insurer's payment obligation is conditioned on a specified event, like the insured's death",
        "Either party can cancel at will with no consequence",
        "No premium is required",
        "The contract has no defined term",
      ],
      correctIndex: 0,
      explanation:
        "Conditional means the insurer's promise to pay only becomes due if a specific condition occurs — most obviously, the insured's death for a life policy.",
    },
    {
      question: "Which document, signed at the time of application, authorizes the insurer to obtain medical and consumer report information?",
      options: ["The free look notice", "A conditional receipt", "An authorization to release information", "The beneficiary form"],
      correctIndex: 2,
      explanation:
        "This signed authorization is what lets the insurer legally pull medical records, MIB data, and consumer reports needed to underwrite the application.",
    },
    {
      question: "A conditional receipt given at application generally provides coverage:",
      options: [
        "Immediately and permanently, regardless of underwriting",
        "From the date of application, IF the applicant would have qualified for the coverage applied for",
        "Only after the policy is delivered",
        "Only for accidental death",
      ],
      correctIndex: 1,
      explanation:
        "A conditional receipt provides coverage retroactive to the application date, but only if the applicant turns out to qualify at the rate applied for — it's conditional, not automatic.",
    },
    {
      question: "The Medical Information Bureau (MIB) exists primarily to:",
      options: [
        "Set premium rates industry-wide",
        "Let member insurers share coded medical underwriting information to detect fraud or material omissions",
        "Replace the need for a paramedical exam",
        "License insurance producers",
      ],
      correctIndex: 1,
      explanation:
        "MIB is an information-sharing database among member insurers, used to flag undisclosed health conditions across multiple applications — a fraud and omission check, not a rating bureau.",
    },
    {
      question: "Underwriting classifies a substandard risk as one that:",
      options: [
        "Pays less than a standard risk",
        "Is charged a higher-than-standard premium due to greater-than-average risk",
        "Is automatically declined",
        "Qualifies for the best available rates",
      ],
      correctIndex: 1,
      explanation:
        "Substandard doesn't mean declined — it means the applicant is still insurable but at a higher premium that reflects their above-average risk factors.",
    },
    {
      question: "Which source of underwriting information comes directly from the applicant's own treating physician?",
      options: ["MIB report", "Attending Physician Statement (APS)", "Consumer credit report", "Motor vehicle report"],
      correctIndex: 1,
      explanation:
        "An APS is a detailed records request straight from a doctor who has actually treated the applicant — used when an application or other source flags a condition needing more detail.",
    },
  ],
  "lh-retirement-life-settlements": [
    {
      question: "A life settlement allows a policy owner to:",
      options: [
        "Sell an existing policy to a third party for more than cash surrender value but less than the death benefit",
        "Cancel a policy for no refund",
        "Convert term to whole life automatically",
        "Receive the full death benefit while still alive",
      ],
      correctIndex: 0,
      explanation:
        "A life settlement pays the policy owner an amount between cash surrender value and the full death benefit — more attractive than simply surrendering the policy for less money.",
    },
    {
      question: "A contributory group life plan typically requires:",
      options: [
        "100% employee participation",
        "A minimum participation percentage (often around 75%) to guard against adverse selection",
        "No minimum participation at all",
        "Only key employees to enroll",
      ],
      correctIndex: 1,
      explanation:
        "Because employees pay part of the premium in a contributory plan, insurers require a minimum participation threshold (often ~75%) to prevent only higher-risk employees from enrolling.",
    },
    {
      question: "A noncontributory group life plan typically requires:",
      options: [
        "75% minimum participation",
        "100% participation, since the employer pays the full premium",
        "No participation requirement",
        "Participation only by management",
      ],
      correctIndex: 1,
      explanation:
        "Since the employer covers the entire premium in a noncontributory plan, there's no cost barrier to joining, so insurers typically require 100% participation.",
    },
    {
      question: "A qualified retirement plan, compared to a nonqualified plan, is characterized by:",
      options: [
        "No IRS involvement at all",
        "Favorable tax treatment in exchange for following nondiscrimination rules covering eligible employees",
        "Being available only to executives",
        "Having no contribution limits",
      ],
      correctIndex: 1,
      explanation:
        "Qualified plans get favorable tax treatment (like pre-tax contributions) but must meet IRS nondiscrimination rules — they can't favor only select employees the way a nonqualified plan can.",
    },
    {
      question: "A nonqualified retirement plan is often used to:",
      options: [
        "Provide enhanced benefits to select key employees without offering them company-wide",
        "Guarantee the lowest possible taxes for all employees",
        "Replace Social Security",
        "Avoid all IRS reporting requirements",
      ],
      correctIndex: 0,
      explanation:
        "Nonqualified plans trade away some upfront tax favorability for flexibility — employers can offer enhanced benefits to select key employees without extending them to the whole workforce.",
    },
    {
      question: "Key person life insurance is designed to protect:",
      options: [
        "The key employee's family directly",
        "The business against the financial loss of losing a critical employee or owner",
        "Customers of the business",
        "Competing businesses",
      ],
      correctIndex: 1,
      explanation:
        "Key person coverage is owned by and pays the business itself — protecting it against the financial impact of losing a critical person, not paying the employee's family directly.",
    },
    {
      question: "Buy-sell agreement funding through life insurance is used to:",
      options: [
        "Pay off the business's general debts",
        "Fund a buyout of a deceased owner's interest by the remaining owners or the business",
        "Replace key person coverage",
        "Cover customer claims",
      ],
      correctIndex: 1,
      explanation:
        "Buy-sell funding lets the remaining owners (or the business itself) purchase a deceased owner's interest from their estate, using life insurance proceeds rather than scrambling for cash or a loan.",
    },
    {
      question: "Life insurance death benefits paid to a named beneficiary are generally:",
      options: [
        "Fully taxable as ordinary income",
        "Received income tax-free",
        "Taxed at a flat 10% rate",
        "Taxed only if the policy was permanent",
      ],
      correctIndex: 1,
      explanation:
        "Death benefits are generally received income tax-free by the beneficiary — one of life insurance's most significant and most frequently tested tax advantages.",
    },
    {
      question: "A Modified Endowment Contract (MEC) results from:",
      options: [
        "Underfunding a policy relative to IRS limits",
        "Overfunding a policy relative to IRS limits, losing some favorable tax treatment on withdrawals",
        "Converting term to whole life",
        "Naming a minor as beneficiary",
      ],
      correctIndex: 1,
      explanation:
        "A MEC occurs when a policy is funded faster than IRS limits allow — withdrawals then become taxed last-in-first-out with potential penalties, though the death benefit remains tax-free.",
    },
    {
      question: "Individual life insurance premiums are generally:",
      options: [
        "Fully tax-deductible",
        "Not tax-deductible",
        "Deductible only for permanent policies",
        "Deductible up to $10,000 per year",
      ],
      correctIndex: 1,
      explanation:
        "Premiums paid for individual life insurance are generally not tax-deductible — the tax advantage shows up later, in tax-deferred cash value growth and tax-free death benefits.",
    },
    {
      question: "A viatical settlement differs from a standard life settlement primarily because:",
      options: [
        "It involves a terminally or chronically ill insured selling their policy",
        "It only applies to group policies",
        "It pays less than the cash surrender value",
        "It requires no underwriting by the buyer",
      ],
      correctIndex: 0,
      explanation:
        "Viatical settlements specifically involve a terminally or chronically ill insured — life settlements are the broader category that can involve any qualifying policy owner, ill or not.",
    },
    {
      question: "Group term life insurance provided by an employer is tax-free to the employee for coverage up to:",
      options: ["$10,000", "$50,000", "$100,000", "$250,000"],
      correctIndex: 1,
      explanation:
        "The IRS allows the first $50,000 of employer-paid group term life coverage to be received tax-free — coverage above that amount creates imputed income to the employee.",
    },
    {
      question: "Dividends paid on a participating life insurance policy are generally treated as:",
      options: [
        "Fully taxable income",
        "A nontaxable return of excess premium",
        "Taxed as capital gains",
        "Taxed only when the policy is surrendered",
      ],
      correctIndex: 1,
      explanation:
        "Because dividends represent a return of the policyowner's own excess premium, they're not treated as taxable income, unlike interest or investment earnings.",
    },
    {
      question: "Section 1035 exchanges and tax-deferred cash value growth both serve to:",
      options: [
        "Increase the death benefit automatically",
        "Encourage long-term saving inside life insurance and annuity contracts by deferring or avoiding tax",
        "Eliminate surrender charges",
        "Replace the need for underwriting",
      ],
      correctIndex: 1,
      explanation:
        "Both provisions exist to make life insurance and annuities attractive long-term savings vehicles — by letting cash value grow without annual taxation and allowing tax-free transfers between similar contracts.",
    },
  ],
  "lh-regulation-idaho-general": [
    {
      question: "Under Idaho Code 41-203, who is responsible for administering Idaho's insurance laws?",
      options: [
        "The Governor",
        "The Director of the Department of Insurance",
        "The state legislature",
        "The Idaho Attorney General",
      ],
      correctIndex: 1,
      explanation:
        "41-203 places this authority with the Director of the Department of Insurance — examinations, hearings, and penalties under Title 41 all flow through this office.",
    },
    {
      question: "In Idaho, Life and Health are:",
      options: [
        "A single combined line of authority",
        "Separate lines of authority requiring their own exams",
        "Not separately licensed",
        "Only available to nonresidents",
      ],
      correctIndex: 1,
      explanation:
        "Under 41-1003(8)/1004, Life and Health are distinct lines of authority — a producer wanting to sell both must pass both exams and hold both lines on their license.",
    },
    {
      question: "Inducing a policyholder to replace an existing policy through misrepresentation violates Idaho Code:",
      options: ["41-1314 (rebating)", "41-1305 (twisting)", "41-1306 (false financial statements)", "41-1309 (boycott)"],
      correctIndex: 1,
      explanation:
        "This is twisting (41-1305) — misrepresenting the comparison to induce a policyholder to REPLACE existing coverage, especially damaging for life/health where it can mean losing accumulated cash value.",
    },
    {
      question: "Offering a client something of value not stated in the policy to induce a sale in Idaho is called:",
      options: ["Twisting (41-1305)", "Rebating (41-1314)", "Coercion (41-1309)", "Defamation (41-1308)"],
      correctIndex: 1,
      explanation:
        "Rebating (41-1314) targets the financial incentive to BUY — anything of value outside the policy terms. Twisting is the separate violation targeting misrepresentation of a replacement.",
    },
    {
      question: "A resident producer license in Idaho is for someone who:",
      options: [
        "Lives in and primarily transacts business in Idaho",
        "Only sells insurance online",
        "Has a felony conviction on record",
        "Works exclusively for one insurer",
      ],
      correctIndex: 0,
      explanation:
        "41-1003(9) defines resident status by where the producer LIVES and primarily transacts business — not by sales channel or insurer affiliation.",
    },
    {
      question: "Under Idaho Code 41-1016 and 41-1026, a felony conviction can result in:",
      options: [
        "No effect on a producer's license",
        "Suspension or revocation of the producer's license",
        "Automatic upgrade to a resident license",
        "A mandatory rebate to clients",
      ],
      correctIndex: 1,
      explanation:
        "These sections explicitly name a felony conviction as grounds for the Director to suspend or revoke a license — a frequently tested licensing-discipline fact.",
    },
    {
      question: "An Idaho producer who handles premium funds owes clients which duty under 41-1024, 1323, 1325?",
      options: ["A marketing duty", "A fiduciary duty", "A countersignature duty", "An assigned risk duty"],
      correctIndex: 1,
      explanation:
        "Handling client premium money creates a fiduciary duty — the producer must hold and account for those funds responsibly on the client's behalf.",
    },
    {
      question: "If an Idaho producer moves to a new address, Idaho Code 41-1008(6) requires them to:",
      options: [
        "Do nothing until renewal",
        "Report the change of address to the Department of Insurance",
        "Surrender their license",
        "Reapply for a new exam",
      ],
      correctIndex: 1,
      explanation:
        "Producers must proactively report address changes — failing to do so is itself a violation under Idaho law.",
    },
    {
      question: "Idaho continuing education requirements for producers are established under:",
      options: ["41-1013 and IDAPA 18.06.04", "41-1305", "41-4190", "6-802"],
      correctIndex: 0,
      explanation:
        "41-1013 (statute) and IDAPA 18.06.04 (the implementing rule) set Idaho's CE requirements — the other citations relate to twisting, annuity suitability, and comparative negligence respectively.",
    },
    {
      question: "Misleading a client about the comparative benefits of a new life policy versus their existing one is:",
      options: ["Rebating", "Twisting", "Subrogation", "Coinsurance"],
      correctIndex: 1,
      explanation:
        "This is twisting by definition — distorting the comparison between old and new coverage to induce a replacement.",
    },
  ],
  "lh-regulation-idaho-life": [
    {
      question: "Idaho's replacement regulation (IDAPA 18.03.04) requires a producer recommending a policy replacement to:",
      options: [
        "Say nothing about the existing policy",
        "Provide a notice and information comparing the old and new policy's costs and benefits",
        "Wait 90 days before submitting the application",
        "Get the old insurer's written approval",
      ],
      correctIndex: 1,
      explanation:
        "The replacement regulation requires disclosure that lets the client meaningfully compare the old and new policy — since replacing can mean losing cash value or restarting contestability periods.",
    },
    {
      question: "Replacement disclosure duties in Idaho apply:",
      options: [
        "Only when switching to a different insurer",
        "Even when the new policy is from the same insurer",
        "Only for policies over $100,000",
        "Only to nonresident producers",
      ],
      correctIndex: 1,
      explanation:
        "The trigger is the act of REPLACING a policy, not switching companies — disclosure duties apply even within the same insurer.",
    },
    {
      question: "Idaho's annuity suitability requirement (41-4190 through 4190E) obligates a producer to:",
      options: [
        "Sell any annuity the client requests with no further analysis",
        "Have a documented, reasonable basis that the recommendation suits the consumer's situation",
        "Only sell annuities to consumers over 65",
        "Avoid recommending annuities entirely",
      ],
      correctIndex: 1,
      explanation:
        "Suitability requires a reasonable, documented basis tied to the specific consumer's age, finances, tax status, liquidity needs, and risk tolerance — not just that the consumer asked for the product.",
    },
    {
      question: "Under Idaho's individual life standard provisions, a named beneficiary's death benefit proceeds are generally:",
      options: [
        "Subject to seizure by the insured's creditors",
        "Protected from the insured's creditors",
        "Taxed at 100%",
        "Forfeited if the insured dies within 2 years",
      ],
      correctIndex: 1,
      explanation:
        "Idaho law protects beneficiary proceeds from the insured's creditors — a consumer protection distinguishing life insurance proceeds from other estate assets.",
    },
    {
      question: "A life settlement, as regulated under Idaho's Life Settlements Act, involves:",
      options: [
        "Surrendering a policy back to the insurer for cash value only",
        "Selling an existing policy to a third party for more than cash surrender value but less than the death benefit",
        "Converting a term policy to whole life",
        "A producer rebating part of their commission to the client",
      ],
      correctIndex: 1,
      explanation:
        "A life settlement pays the policy owner more than the cash surrender value but less than the full death benefit — the buyer becomes the new owner/beneficiary and continues paying premiums.",
    },
    {
      question: "Idaho's Life Settlements Act requires:",
      options: [
        "No licensing of life settlement providers or brokers",
        "Licensing of life settlement providers/brokers and disclosures to the policy owner",
        "Only insurer approval, no consumer disclosure",
        "That all life settlements be reported to the IRS only",
      ],
      correctIndex: 1,
      explanation:
        "Idaho regulates life settlements through licensing requirements for providers/brokers and mandatory disclosures to the policy owner about alternatives to settling.",
    },
    {
      question: "Idaho's group life conversion privilege (41-2018) allows a departing group member to:",
      options: [
        "Keep group rates forever",
        "Convert to an individual policy without proving insurability, within a limited window",
        "Receive a cash refund of premiums paid",
        "Transfer coverage to a family member only",
      ],
      correctIndex: 1,
      explanation:
        "Conversion rights let a departing group member buy an individual policy without new medical underwriting — but only within a limited window after group coverage ends, and at a higher individual rate.",
    },
    {
      question: "Eligible groups for group life coverage in Idaho are defined under:",
      options: ["41-2003-2008", "41-1314", "41-4190", "6-802"],
      correctIndex: 0,
      explanation:
        "41-2003-2008 defines which groups qualify for group life coverage — the other citations relate to rebating, annuity suitability, and comparative negligence.",
    },
    {
      question: "Idaho individual life standard provisions (41-1833, 1903-1913, etc.) include:",
      options: [
        "No grace period requirement",
        "A grace period, policy loan terms, reinstatement rights, and a free look period",
        "Mandatory annual medical exams",
        "A requirement that all policies be term life",
      ],
      correctIndex: 1,
      explanation:
        "These statutes establish the baseline consumer protections every individual life policy must include: grace period, defined loan terms, reinstatement rights, and free look.",
    },
    {
      question: "Suitability documentation for an Idaho annuity recommendation should be based on:",
      options: [
        "The producer's personal sales targets",
        "The consumer's age, financial situation, tax status, liquidity needs, and risk tolerance",
        "The insurer's profit margin on the product",
        "Whether the consumer has purchased an annuity before",
      ],
      correctIndex: 1,
      explanation:
        "A suitable recommendation is grounded in the specific consumer's circumstances — age, finances, tax status, liquidity needs, and risk tolerance — not generic factors.",
    },
  ],
  "lh-regulation-idaho-health": [
    {
      question: "Idaho law requires newborn and adopted-child coverage to attach:",
      options: [
        "Only after a separate application is filed",
        "Automatically from the moment of birth or adoption placement",
        "Only during open enrollment",
        "Only if the child is over age 1",
      ],
      correctIndex: 1,
      explanation:
        "Newborn/adopted-child coverage attaches automatically at birth or placement under 41-2140, 2210, 3932 — a parent doesn't need to separately apply to get the child covered.",
    },
    {
      question: "Idaho health insurance's 'time limit on certain defenses' (41-2106) is functionally equivalent to:",
      options: [
        "The free look period",
        "Life insurance's incontestability clause",
        "The grace period",
        "The external review process",
      ],
      correctIndex: 1,
      explanation:
        "Both cap how long an insurer can contest a policy over application misstatements — health insurance's version of incontestability, just under a different name.",
    },
    {
      question: "A health policy's grace period (41-2107) exists to:",
      options: [
        "Let the insured cancel for any reason",
        "Give the policyholder time to pay an overdue premium before the policy lapses",
        "Extend coverage indefinitely without payment",
        "Allow the insurer to raise rates mid-term",
      ],
      correctIndex: 1,
      explanation:
        "The grace period gives the policyholder a window to catch up on a missed premium before the policy actually lapses.",
    },
    {
      question: "Idaho requires producers to complete additional training before selling which product?",
      options: ["Term life insurance", "Long-term care insurance", "Auto insurance", "Homeowners insurance"],
      correctIndex: 1,
      explanation:
        "Idaho specifically requires producer training before selling long-term care insurance (IDAPA 18.04.11) — a distinct requirement beyond general L&H pre-licensing education.",
    },
    {
      question: "The Idaho Health Carrier External Review Act (41-5901 through 5917) gives consumers the right to:",
      options: [
        "Skip the carrier's internal appeal entirely",
        "An independent external review after exhausting the carrier's internal appeal process",
        "A refund of all premiums paid",
        "Automatic approval of any denied claim",
      ],
      correctIndex: 1,
      explanation:
        "External review is available AFTER a consumer exhausts the carrier's internal appeal process — it's an independent, outside review of the denial, not a first step.",
    },
    {
      question: "Idaho's Medicare supplement regulations (41-4402, 4403, 4406-4408) primarily exist to:",
      options: [
        "Ban the sale of Medigap policies",
        "Standardize plan offerings so consumers can compare them",
        "Replace Medicare Part A",
        "Require Medigap for all Medicare enrollees",
      ],
      correctIndex: 1,
      explanation:
        "Standardizing Medigap plan offerings lets consumers compare apples-to-apples across insurers, since plan letters represent the same benefits regardless of carrier.",
    },
    {
      question: "The Small Employer Health Insurance Availability Act (Title 41, Chapter 47) sets special provisions for:",
      options: [
        "Individual health policies only",
        "Coverage sold to small employers, including who qualifies as an eligible employee",
        "Medicare supplement plans only",
        "Life insurance only",
      ],
      correctIndex: 1,
      explanation:
        "This Act specifically governs small employer health coverage — disclosure requirements, fair marketing standards, and definitions of small employer and eligible employee.",
    },
    {
      question: "Idaho's long-term care disclosure statement requirement (41-4605) requires insurers to:",
      options: [
        "Provide no disclosure at all",
        "Provide specific disclosure statements to LTC applicants",
        "Only disclose information if asked",
        "Disclose information only to producers, not consumers",
      ],
      correctIndex: 1,
      explanation:
        "Idaho requires specific LTC disclosure statements be provided to applicants — part of the heightened consumer protection around long-term care products.",
    },
    {
      question: "Pre-existing condition limitations on Idaho health policies are regulated under:",
      options: ["41-2221, 4206, 5208", "41-1314", "41-2018", "6-802"],
      correctIndex: 0,
      explanation:
        "These sections regulate how long and under what conditions an insurer can limit coverage for a pre-existing condition — preventing indefinite exclusion.",
    },
    {
      question: "The Individual Health Insurance Availability Act (Title 41, Chapter 52) provides protections parallel to:",
      options: [
        "The Small Employer Health Insurance Availability Act, but for the individual market",
        "The Life Settlements Act",
        "The annuity suitability rule",
        "The Workers' Compensation Act",
      ],
      correctIndex: 0,
      explanation:
        "This Act mirrors the small employer act's protections, but applies to health coverage sold directly to individuals rather than through an employer group.",
    },
  ],
  "lh-health-provisions": [
    {
      question: "The entire contract provision in a health policy means:",
      options: [
        "Only the application matters, not the policy itself",
        "The policy, application, and any riders together make up the whole agreement",
        "Riders are never part of the contract",
        "The insurer can add terms after issuance without notice",
      ],
      correctIndex: 1,
      explanation:
        "The entire contract provision confirms that everything making up the agreement — policy, application, riders — is contained in those documents together, not added later unilaterally.",
    },
    {
      question: "The time limit on certain defenses provision in a health policy:",
      options: [
        "Allows the insurer to contest the policy forever",
        "Caps how long an insurer can contest the policy over application misstatements",
        "Eliminates the need for an application",
        "Only applies to claims over $10,000",
      ],
      correctIndex: 1,
      explanation:
        "This is health insurance's version of the incontestability clause — after a defined period, the insurer generally can't void the policy over misstatements made on the application.",
    },
    {
      question: "An elimination period in a disability or health policy is best described as:",
      options: [
        "A dollar-amount deductible",
        "A time-based waiting period before benefits begin being paid",
        "The free look period",
        "A type of rider",
      ],
      correctIndex: 1,
      explanation:
        "An elimination period is measured in TIME, not dollars — it's the waiting period between when a disability begins and when benefit payments start, conceptually similar to a deductible but time-based.",
    },
    {
      question: "A probationary period in a health policy refers to:",
      options: [
        "A window when certain conditions, often sickness, aren't yet covered",
        "The period after a claim is approved",
        "The grace period for late premiums",
        "The time before the agent receives commission",
      ],
      correctIndex: 0,
      explanation:
        "A probationary period is a window early in the policy when certain conditions (commonly sickness, as opposed to accidents) aren't yet covered — a way for insurers to guard against people buying coverage only once already sick.",
    },
    {
      question: "A noncancelable health policy provides the insured with:",
      options: [
        "The strongest protection — no cancellation and no individual premium increase for the life of the policy",
        "The weakest protection — the insurer can cancel anytime",
        "Coverage that always lapses after one year",
        "No renewability rights at all",
      ],
      correctIndex: 0,
      explanation:
        "Noncancelable is the strongest renewability classification — the insurer can't cancel the policy or raise that specific insured's premium, as long as premiums are paid.",
    },
    {
      question: "A guaranteed renewable health policy allows the insurer to:",
      options: [
        "Cancel the policy at will",
        "Raise premiums, typically for an entire class of policyholders, but not cancel coverage",
        "Change the insured's risk classification individually without notice",
        "Deny all future claims",
      ],
      correctIndex: 1,
      explanation:
        "Guaranteed renewable sits between noncancelable and cancelable — the insurer can't cancel coverage, but CAN raise premiums, usually applied to an entire class rather than singling out one insured.",
    },
    {
      question: "A cancelable health policy gives the insurer the right to:",
      options: [
        "Never cancel the policy under any circumstance",
        "Cancel coverage at any time, subject to advance notice",
        "Only raise premiums, never cancel",
        "Cancel only if the insured misses two payments",
      ],
      correctIndex: 1,
      explanation:
        "Cancelable is the weakest renewability protection for the insured — the insurer retains the right to end coverage, generally with advance notice required.",
    },
    {
      question: "Usual, reasonable, and customary (URC) charge provisions exist to:",
      options: [
        "Guarantee full reimbursement for any billed amount",
        "Limit reimbursement to what's typical for a service in a given area, protecting against inflated billing",
        "Set the policy's premium",
        "Determine eligibility for coverage",
      ],
      correctIndex: 1,
      explanation:
        "URC provisions cap reimbursement at what's typical for that service in that geographic area — protecting the insurer (and ultimately premium payers) from inflated or outlier billing.",
    },
    {
      question: "Pre-existing condition exclusion periods on health policies are:",
      options: [
        "Permanent and can never expire",
        "Time-limited by regulation, not permanent",
        "Applied only to accidents, never illness",
        "Banned entirely in every case",
      ],
      correctIndex: 1,
      explanation:
        "Regulation requires pre-existing condition exclusions to be time-limited rather than permanent — preventing insurers from using them to deny coverage for a chronic condition indefinitely.",
    },
    {
      question: "Lifetime, annual, or per-cause maximum benefit limits in a health policy:",
      options: [
        "Have no effect on what the insurer pays",
        "Cap the total amount the policy will pay out",
        "Only apply to dental coverage",
        "Guarantee unlimited benefits",
      ],
      correctIndex: 1,
      explanation:
        "These maximums set a ceiling on what the insurer will pay in total — once a covered person reaches that cap, the policy stops paying for that benefit category.",
    },
    {
      question: "An optionally renewable health policy gives the insurer the right to:",
      options: [
        "Refuse renewal on a specified renewal date, for any reason",
        "Never refuse renewal under any circumstance",
        "Only cancel mid-term",
        "Raise premiums but never refuse renewal",
      ],
      correctIndex: 0,
      explanation:
        "Optionally renewable sits below guaranteed renewable in protection — the insurer can choose not to renew at a renewal date, though it can't cancel mid-term the way a cancelable policy can.",
    },
    {
      question: "A 'free look' provision on a health policy entitles the insured to:",
      options: [
        "Cancel a portion of the policy at any time",
        "Examine the policy after delivery and return it for a full refund within a set period",
        "A discount on the second year's premium",
        "An automatic rate increase waiver",
      ],
      correctIndex: 1,
      explanation:
        "Free look gives a brand-new policyholder a window (commonly 10 days) to review the actual policy and cancel for a full refund if it isn't what they expected — no specific reason required.",
    },
    {
      question: "The notice of claim provision in a health policy generally requires the insured to:",
      options: [
        "Notify the insurer of a claim within a specified time, commonly 20 days",
        "Wait until the policy renews to file",
        "File only through their employer",
        "Notify only the treating physician",
      ],
      correctIndex: 0,
      explanation:
        "This provision sets the window (typically around 20 days after a loss) for notifying the insurer, so claims processing can start promptly and isn't delayed indefinitely.",
    },
    {
      question: "The proof of loss provision requires the insured to:",
      options: [
        "Submit documentation supporting the claim within a specified time after notice of claim",
        "Pay a fee to file a claim",
        "Get a second medical opinion",
        "Wait for the grace period to end",
      ],
      correctIndex: 0,
      explanation:
        "Proof of loss is the actual documentation backing the claim (bills, records) — due within a set window after the notice of claim was given, completing what's needed for the insurer to pay.",
    },
    {
      question: "The insurer's right to a physical exam and autopsy provision allows the insurer to:",
      options: [
        "Require a medical exam of the claimant at its own expense while a claim is pending, where not forbidden by law",
        "Deny any claim without explanation",
        "Skip paying valid claims",
        "Require a court order before paying",
      ],
      correctIndex: 0,
      explanation:
        "This lets the insurer verify a pending claim's validity through its own examination, at its own cost — a check against fraudulent or exaggerated claims.",
    },
  ],
  "lh-specialty-health-underwriting": [
    {
      question: "Total disability, in a disability income policy, generally means the insured:",
      options: [
        "Can work in a reduced capacity",
        "Cannot perform their occupation at all",
        "Has a relapse of a prior disability",
        "Lost a limb in an accident",
      ],
      correctIndex: 1,
      explanation:
        "Total disability means the insured is completely unable to perform their occupation — distinct from partial disability (reduced capacity) and residual disability (proportional benefit for partial income loss).",
    },
    {
      question: "Residual disability benefits are calculated based on:",
      options: [
        "A flat amount regardless of income",
        "The actual proportional loss of income while working in a limited capacity",
        "The insured's age only",
        "Whether the disability was caused by an accident",
      ],
      correctIndex: 1,
      explanation:
        "Residual disability pays a benefit proportional to the insured's actual income loss — if they're earning 60% of their prior income, the benefit reflects that 40% shortfall, not a flat amount.",
    },
    {
      question: "Recurrent disability provisions typically treat a relapse within a specified period as:",
      options: [
        "A brand-new claim with a new elimination period",
        "A continuation of the original claim, rather than starting over",
        "An automatic claim denial",
        "Grounds for policy cancellation",
      ],
      correctIndex: 1,
      explanation:
        "If a disability recurs within the specified window, it's typically treated as a continuation of the original claim — avoiding a new elimination period the second time around.",
    },
    {
      question: "Accidental Death & Dismemberment (AD&D) coverage pays a benefit for:",
      options: [
        "Death or loss of a limb/eyesight from illness",
        "Death or loss of a limb/eyesight specifically from an accident",
        "Any cause of death whatsoever",
        "Only dismemberment, never death",
      ],
      correctIndex: 1,
      explanation:
        "AD&D is strictly accident-triggered — it does not pay for death or dismemberment resulting from illness, which is a frequently tested limitation.",
    },
    {
      question: "Critical illness (specified disease) policies typically pay benefits:",
      options: [
        "Only as reimbursement for actual medical bills incurred",
        "As a lump sum or scheduled amount upon diagnosis, regardless of actual expenses",
        "Only after the insured exhausts major medical coverage",
        "Only for accidental injuries",
      ],
      correctIndex: 1,
      explanation:
        "Critical illness policies pay a fixed or scheduled benefit simply upon a covered diagnosis — they're not reimbursement-based like major medical, so the insured can use the funds however they need.",
    },
    {
      question: "Hospital indemnity insurance pays benefits based on:",
      options: [
        "A percentage of the total hospital bill",
        "A fixed daily or per-confinement amount, regardless of the actual bill",
        "Only outpatient procedures",
        "The insured's annual income",
      ],
      correctIndex: 1,
      explanation:
        "Hospital indemnity pays a fixed amount per day or per confinement, independent of what the actual hospital bill comes to — similar in structure to critical illness coverage.",
    },
    {
      question: "Coordination of benefits (COB), when a person has more than one health plan, determines:",
      options: [
        "That only one plan is allowed to exist",
        "Which plan pays first (primary) and which pays the remainder (secondary), preventing overpayment",
        "That the insured must choose only one plan to keep",
        "That benefits double automatically",
      ],
      correctIndex: 1,
      explanation:
        "COB rules establish a primary plan (pays first) and secondary plan (covers some or all of the remainder up to its own limits) so the insured isn't overpaid relative to actual covered expenses.",
    },
    {
      question: "When a work injury is covered by workers' compensation, that coverage is typically:",
      options: [
        "Secondary to the group health plan",
        "Primary over the group health plan for that specific injury",
        "Irrelevant to coordination of benefits",
        "Only available after group health is exhausted",
      ],
      correctIndex: 1,
      explanation:
        "Workers' compensation is typically primary for a covered work injury — the group health plan would only be relevant for unrelated, non-work health needs.",
    },
    {
      question: "A conditional receipt issued when collecting the initial premium at the point of sale:",
      options: [
        "Guarantees coverage no matter what",
        "Can create temporary coverage, typically conditioned on the applicant remaining insurable as applied for",
        "Has no effect on coverage timing",
        "Replaces the need for underwriting entirely",
      ],
      correctIndex: 1,
      explanation:
        "A conditional receipt can provide coverage pending formal underwriting, but that coverage is conditioned on the applicant actually qualifying at the level applied for — like passing a required medical exam.",
    },
    {
      question: "Field underwriting responsibilities include explaining to the client:",
      options: [
        "Nothing — that's solely the underwriter's job",
        "Sources of insurability information (like MIB or FCRA reports) and HIPAA privacy practices",
        "Only the premium amount",
        "The insurer's internal profit margins",
      ],
      correctIndex: 1,
      explanation:
        "Field underwriting includes explaining to the applicant what information sources may be used (MIB reports, FCRA-governed consumer reports) and how HIPAA privacy rules apply — part of the producer's point-of-sale responsibilities.",
    },
    {
      question: "Presumptive disability provisions automatically classify the insured as totally disabled upon:",
      options: [
        "Any minor injury",
        "Specified severe losses, such as loss of both hands, both feet, or eyesight",
        "Reaching retirement age",
        "Missing one paycheck",
      ],
      correctIndex: 1,
      explanation:
        "Presumptive disability waives the usual proof requirements for a defined list of severe losses (like loss of both hands) — total disability is presumed automatically, regardless of whether the insured could technically still work.",
    },
    {
      question: "Own-occupation disability coverage pays a benefit if the insured:",
      options: [
        "Cannot perform their own specific occupation, even if able to work in a different one",
        "Cannot perform any occupation whatsoever",
        "Is unemployed for any reason",
        "Retires early",
      ],
      correctIndex: 0,
      explanation:
        "Own-occupation is the more generous (and more expensive) disability definition — it pays even if the insured could work a different job, as long as they can't do their own specific occupation.",
    },
    {
      question: "Any-occupation disability coverage is generally:",
      options: [
        "More expensive than own-occupation coverage",
        "Less expensive but harder to qualify for, since it requires inability to perform ANY occupation",
        "Identical to own-occupation in every way",
        "Only available through Social Security",
      ],
      correctIndex: 1,
      explanation:
        "Any-occupation is the stricter, cheaper definition — benefits only pay if the insured can't perform any job reasonably suited to their education and experience, not just their prior one.",
    },
    {
      question: "Long-term disability (LTD) and short-term disability (STD) policies primarily differ in:",
      options: [
        "STD has a longer benefit period than LTD",
        "STD covers shorter elimination/benefit periods, while LTD covers longer-term or permanent disabilities",
        "LTD never has an elimination period",
        "STD is always employer-paid and LTD never is",
      ],
      correctIndex: 1,
      explanation:
        "STD bridges short absences with a quick elimination period and limited benefit duration; LTD kicks in later and is built for disabilities that last months to years, sometimes to retirement age.",
    },
  ],
  "pc-property-basics": [
    {
      question: "Which homeowners form covers the dwelling on an open-perils basis and personal property on a named-perils basis?",
      options: ["HO-2", "HO-3", "HO-4", "HO-6"],
      correctIndex: 1,
      explanation:
        "HO-3 is the 'special form' — the most common homeowners policy. It insures the dwelling against all perils except specific exclusions, but personal property is only covered for the perils explicitly named in the policy.",
    },
    {
      question: "Actual cash value is calculated as:",
      options: [
        "Replacement cost plus depreciation",
        "Replacement cost minus depreciation",
        "Market value minus mortgage",
        "Original purchase price",
      ],
      correctIndex: 1,
      explanation:
        "ACV = replacement cost minus depreciation. It accounts for wear and age, which is why ACV settlements are always lower than what it would cost to actually replace the item new.",
    },
    {
      question: "The coinsurance clause in a property policy penalizes:",
      options: ["Overinsuring", "Underinsuring", "Multiple insurers", "Filing too many claims"],
      correctIndex: 1,
      explanation:
        "Coinsurance requires the insured to carry coverage equal to a set percentage (often 80%) of the property's value. Carry less than that and you're 'underinsured' — any claim payout gets reduced proportionally, even on a partial loss.",
    },
    {
      question: "A named-perils policy covers:",
      options: [
        "Every possible risk with no exclusions",
        "Only the risks specifically listed in the policy",
        "Only flood and earthquake",
        "Liability claims exclusively",
      ],
      correctIndex: 1,
      explanation:
        "Named-perils (or 'specified perils') policies only pay for losses caused by perils explicitly listed in the policy — anything not on that list isn't covered, even if it isn't excluded elsewhere.",
    },
    {
      question: "Renters insurance (HO-4) covers:",
      options: [
        "The building structure and personal property",
        "Personal property and liability, but not the building structure",
        "Only the building structure",
        "Only liability, no personal property",
      ],
      correctIndex: 1,
      explanation:
        "Renters don't own the building, so HO-4 skips dwelling coverage entirely and focuses on what the tenant actually owns: personal property, plus personal liability protection.",
    },
    {
      question: "An open-perils (all-risk) policy covers:",
      options: [
        "Only named risks",
        "Everything except specifically excluded perils",
        "Only fire and theft",
        "Nothing unless endorsed",
      ],
      correctIndex: 1,
      explanation:
        "Open-perils flips the named-perils logic: everything is covered UNLESS the policy specifically excludes it. This is broader coverage, which is why HO-3 uses it for the dwelling.",
    },
    {
      question: "Which homeowners form is typically used for condo unit owners?",
      options: ["HO-3", "HO-4", "HO-6", "HO-8"],
      correctIndex: 2,
      explanation:
        "HO-6 is built for condo owners — it covers the interior of the unit and personal property, since the condo association's master policy typically covers the building structure itself.",
    },
    {
      question: "Replacement cost coverage, unlike actual cash value, pays:",
      options: [
        "The depreciated value of the item",
        "The cost to replace the item with a new one of similar kind, without deducting depreciation",
        "A fixed amount regardless of the item",
        "Nothing for personal property",
      ],
      correctIndex: 1,
      explanation:
        "Replacement cost coverage ignores depreciation entirely — you get what it actually costs today to buy a new equivalent item, which is why it costs more in premium than ACV coverage.",
    },
    {
      question: "If a coinsurance clause requires 80% insurance-to-value and the insured only carries 60%, a partial loss claim is:",
      options: [
        "Paid in full regardless",
        "Reduced proportionally to penalize the underinsurance",
        "Denied entirely",
        "Increased to make up the gap",
      ],
      correctIndex: 1,
      explanation:
        "Coinsurance penalizes underinsurance by reducing the claim payout proportionally — carrying only 60% of the required 80% means the insured effectively self-insures a share of every loss, not just total losses.",
    },
    {
      question: "Which homeowners form is built specifically for renters, covering personal property and liability but not a building structure?",
      options: ["HO-2", "HO-3", "HO-4", "HO-6"],
      correctIndex: 2,
      explanation:
        "HO-4 is the renters form — since a tenant doesn't own the building, it skips dwelling coverage and focuses on personal property and liability.",
    },
    {
      question: "A peril, as distinct from a hazard, is best defined as:",
      options: [
        "A condition that increases the chance of loss",
        "The actual cause of a loss, like fire or theft",
        "The dollar amount of a loss",
        "The insurer's profit margin",
      ],
      correctIndex: 1,
      explanation:
        "A peril is the actual CAUSE of loss (fire, theft, windstorm). A hazard is a condition that increases the likelihood or severity of that loss occurring — the two terms are often confused on the exam.",
    },
    {
      question: "Under an HO-3 policy, personal property (contents) is typically covered on:",
      options: [
        "An open-perils basis, same as the dwelling",
        "A named-perils basis, narrower than the dwelling coverage",
        "No basis — contents are never covered",
        "A liability-only basis",
      ],
      correctIndex: 1,
      explanation:
        "HO-3's defining feature is the split: the dwelling is covered on a broad open-perils basis, while personal property/contents remain on a narrower named-perils basis.",
    },
    {
      question: "Actual cash value, when the agreed-value method isn't used, is typically calculated using which formula?",
      options: [
        "Original purchase price plus inflation",
        "Replacement cost minus depreciation",
        "Market value plus appreciation",
        "Replacement cost times two",
      ],
      correctIndex: 1,
      explanation:
        "The standard ACV formula is replacement cost minus depreciation — accounting for the item's age and wear, which is why ACV payouts are consistently lower than the cost to buy new.",
    },
    {
      question: "HO-8 policies are typically used for:",
      options: [
        "Brand-new luxury homes",
        "Older homes where replacement cost would significantly exceed market value",
        "Condo units exclusively",
        "Mobile homes exclusively",
      ],
      correctIndex: 1,
      explanation:
        "HO-8 is designed for older homes where rebuilding to modern code would cost far more than the home is actually worth on the market — coverage is typically based on actual cash value rather than full replacement cost.",
    },
  ],
  "pc-casualty-basics": [
    {
      question: "Which auto coverage pays for crash damage regardless of fault?",
      options: ["Comprehensive", "Collision", "Liability", "Medical payments"],
      correctIndex: 1,
      explanation:
        "Collision pays for damage to YOUR car from hitting another car or object, no matter who caused the crash. Comprehensive covers non-collision events like theft, fire, or hail.",
    },
    {
      question: "Workers' compensation is best described as:",
      options: ["A fault-based system", "A no-fault system covering injured employees", "Optional in all states", "Only for office workers"],
      correctIndex: 1,
      explanation:
        "Workers' comp pays regardless of who was at fault for a work injury — in exchange, the employee generally gives up the right to sue their employer (the 'exclusive remedy' doctrine).",
    },
    {
      question: "An umbrella policy provides:",
      options: [
        "Primary auto liability coverage",
        "Excess liability above underlying policy limits",
        "Property damage to your own car",
        "Health coverage for employees",
      ],
      correctIndex: 1,
      explanation:
        "Umbrella policies don't stand alone — they kick in only after an underlying auto or homeowners liability limit is exhausted, extending protection well beyond those base limits.",
    },
    {
      question: "Comprehensive auto coverage typically covers:",
      options: [
        "Collision damage only",
        "Non-collision damage like theft and weather",
        "Bodily injury to others",
        "Medical bills for the at-fault driver",
      ],
      correctIndex: 1,
      explanation:
        "Comprehensive is the 'everything else' physical damage coverage — theft, vandalism, fire, falling objects, weather — anything that isn't a collision with another vehicle or object.",
    },
    {
      question: "Liability coverage in a Personal Auto Policy pays for:",
      options: [
        "Damage to your own vehicle",
        "Bodily injury and property damage you cause to others",
        "Your own medical bills only",
        "Theft of your vehicle",
      ],
      correctIndex: 1,
      explanation:
        "Liability is about harm you cause to OTHERS — their injuries, their property. It never pays for damage to your own car; that's what collision/comprehensive are for.",
    },
    {
      question: "Uninsured motorist coverage protects you when:",
      options: [
        "You cause an accident",
        "You're hit by a driver with no liability insurance",
        "Your car is stolen",
        "You drive a rental car",
      ],
      correctIndex: 1,
      explanation:
        "UM coverage steps in specifically when the AT-FAULT driver has no liability insurance to pay your claim — it protects you from someone else's lack of coverage.",
    },
    {
      question: "Which Personal Auto Policy coverage pays medical bills for you and passengers regardless of fault?",
      options: ["Liability", "Medical payments", "Comprehensive", "Uninsured motorist property damage"],
      correctIndex: 1,
      explanation:
        "Medical payments (MedPay) pays your and your passengers' medical bills no matter who caused the accident — it's a small, no-fault add-on, distinct from liability which only pays for others.",
    },
    {
      question: "An umbrella policy typically requires:",
      options: [
        "No underlying coverage at all",
        "Underlying auto/home liability limits to be maintained",
        "Only commercial policyholders",
        "A separate license to purchase",
      ],
      correctIndex: 1,
      explanation:
        "Insurers require you to keep specific minimum liability limits on your underlying auto/home policies — the umbrella only covers losses above those limits, so the gap below must stay insured.",
    },
    {
      question: "Split limits on a Personal Auto Policy, such as 100/300/50, represent:",
      options: [
        "One combined limit for everything",
        "Separate per-person bodily injury, per-accident bodily injury, and property damage limits",
        "The deductible amount only",
        "The umbrella policy's limit",
      ],
      correctIndex: 1,
      explanation:
        "Split limits break liability into three separate numbers: per-person bodily injury, per-accident bodily injury total, and property damage — as opposed to a combined single limit that covers all three from one pool.",
    },
    {
      question: "A combined single limit (CSL), compared to split limits, provides:",
      options: [
        "Three separate caps for bodily injury and property damage",
        "One single limit that applies to bodily injury and property damage combined",
        "No liability coverage at all",
        "Coverage only for the named insured",
      ],
      correctIndex: 1,
      explanation:
        "A combined single limit pools bodily injury and property damage liability into one number, giving more flexibility per claim than split limits, which cap each category separately.",
    },
    {
      question: "Workers' compensation's 'exclusive remedy' doctrine means:",
      options: [
        "An injured employee can sue their employer for unlimited damages",
        "Workers' comp benefits are generally the employee's only recourse against the employer for a work injury",
        "Only the employer can file a claim",
        "Workers' comp never pays medical bills",
      ],
      correctIndex: 1,
      explanation:
        "Exclusive remedy means the employee generally gives up the right to sue their employer in exchange for guaranteed no-fault workers' comp benefits — a foundational trade-off of the workers' comp system.",
    },
    {
      question: "Underinsured motorist coverage applies when:",
      options: [
        "The at-fault driver has no insurance whatsoever",
        "The at-fault driver has insurance, but not enough to cover the full loss",
        "The insured's own vehicle is totaled in a single-car accident",
        "The insured was at fault",
      ],
      correctIndex: 1,
      explanation:
        "Underinsured motorist coverage fills the gap when the at-fault driver DOES have insurance, but their limits aren't enough to cover the full loss — distinct from uninsured motorist coverage, which applies when there's no insurance at all.",
    },
    {
      question: "Which type of auto is typically covered under a personal auto policy without needing to be specifically listed?",
      options: [
        "A newly acquired auto, for a limited grace period",
        "A commercial delivery vehicle",
        "A business fleet vehicle",
        "An auto owned by a non-relative roommate",
      ],
      correctIndex: 0,
      explanation:
        "Most personal auto policies automatically extend coverage to a newly acquired vehicle for a short grace period (commonly around 14-30 days), giving the insured time to formally add it to the policy.",
    },
    {
      question: "Physical damage coverage on a Personal Auto Policy (collision and comprehensive) pays for damage to:",
      options: [
        "Other people's vehicles only",
        "The insured's own vehicle",
        "Only rental vehicles",
        "Nothing — physical damage coverage doesn't exist on auto policies",
      ],
      correctIndex: 1,
      explanation:
        "Collision and comprehensive together make up physical damage coverage for the insured's OWN vehicle — liability coverage is the part that pays for harm to others.",
    },
  ],
  "lh-annuities": [
    {
      question: "During which phase of an annuity does money grow tax-deferred?",
      options: ["Annuitization phase", "Accumulation phase", "Free look phase", "Probate phase"],
      correctIndex: 1,
      explanation:
        "The accumulation phase is when money is going IN and growing tax-deferred — annuitization is the later payout phase, where the accumulated value converts into an income stream.",
    },
    {
      question: "A fixed annuity differs from a variable annuity because it:",
      options: [
        "Guarantees a set rate of return",
        "Has returns tied to investment performance",
        "Pays a death benefit like life insurance",
        "Has no surrender period",
      ],
      correctIndex: 0,
      explanation:
        "Fixed annuities guarantee a set rate, with the insurer bearing the investment risk. Variable annuities tie returns to subaccount performance, shifting that risk to the contract owner.",
    },
    {
      question: "A life annuity payout option that continues payments to a second person after the annuitant dies is called:",
      options: ["Straight life", "Life with period certain", "Joint and survivor", "Lump sum"],
      correctIndex: 2,
      explanation:
        "Joint and survivor is built for exactly this — payments continue to a named survivor (often a spouse) after the first annuitant dies, unlike straight life, which stops payments entirely at death.",
    },
    {
      question: "Cashing out an annuity early, within the surrender period, typically results in:",
      options: ["A bonus payment", "A surrender charge", "An automatic tax refund", "No consequence"],
      correctIndex: 1,
      explanation:
        "Surrender charges are the penalty for withdrawing during the surrender period — they decline over time and exist to discourage early cash-outs of what's meant to be a long-term product.",
    },
    {
      question: "An immediate annuity is best described as one that:",
      options: [
        "Accumulates for decades before paying out",
        "Begins payouts shortly after a lump-sum purchase",
        "Only pays a death benefit",
        "Is only available to businesses",
      ],
      correctIndex: 1,
      explanation:
        "Immediate annuities skip the long accumulation phase — you hand over a lump sum and payments start almost right away, typically within a year.",
    },
    {
      question: "A nonqualified annuity is funded with:",
      options: ["Pre-tax dollars only", "After-tax dollars", "Employer stock", "Government bonds only"],
      correctIndex: 1,
      explanation:
        "Nonqualified annuities are funded with money that's already been taxed — only the earnings are taxed on withdrawal. Qualified annuities (inside a retirement plan) use pre-tax dollars instead.",
    },
    {
      question: "The main purpose of an annuity is to:",
      options: [
        "Protect against premature death",
        "Provide a stream of income, often for retirement",
        "Cover medical expenses",
        "Replace homeowners insurance",
      ],
      correctIndex: 1,
      explanation:
        "Annuities exist to solve the opposite problem from life insurance — they protect against OUTLIVING your savings by converting a sum of money into a guaranteed income stream.",
    },
    {
      question: "A deferred annuity, compared to an immediate annuity:",
      options: [
        "Pays out immediately after purchase",
        "Accumulates funds before payments begin later",
        "Cannot be variable",
        "Has no accumulation phase",
      ],
      correctIndex: 1,
      explanation:
        "Deferred annuities have a real accumulation phase — money grows tax-deferred for years before payouts begin, unlike an immediate annuity, which starts paying right away.",
    },
    {
      question: "The straight life (life only) annuity payout option:",
      options: [
        "Guarantees payments for a minimum number of years regardless of death",
        "Pays the highest periodic income but stops entirely at the annuitant's death",
        "Always pays a death benefit to heirs",
        "Refunds unused principal to a beneficiary",
      ],
      correctIndex: 1,
      explanation:
        "Straight life pays the largest payment of any option because the insurer takes on no obligation to pay anyone after the annuitant dies — there's no refund or guarantee period.",
    },
    {
      question: "A life annuity with period certain guarantees:",
      options: [
        "Payments for a minimum number of years even if the annuitant dies early",
        "A higher interest rate than fixed annuities",
        "No surrender charges ever",
        "Automatic conversion to life insurance",
      ],
      correctIndex: 0,
      explanation:
        "This option guarantees a minimum payout period (e.g., 10 years) — if the annuitant dies before that period ends, a named beneficiary collects the remaining guaranteed payments.",
    },
    {
      question: "Indexed (fixed-indexed) annuities tie interest credited to:",
      options: [
        "A market index's performance, with a guaranteed minimum",
        "The annuitant's age only",
        "Direct ownership of stocks",
        "Federal Reserve interest rate announcements only",
      ],
      correctIndex: 0,
      explanation:
        "Indexed annuities credit interest based on a market index (like the S&P 500) using caps and participation rates, but still guarantee a contractual minimum — unlike a variable annuity, principal isn't directly at risk in the market.",
    },
    {
      question: "A 1035 exchange allows a policyholder to:",
      options: [
        "Withdraw annuity funds tax-free at any time",
        "Transfer funds from one annuity (or life policy) to another without triggering current income tax",
        "Avoid surrender charges entirely",
        "Convert an annuity into a health policy",
      ],
      correctIndex: 1,
      explanation:
        "A 1035 exchange defers taxation when moving value directly between like contracts — it doesn't waive surrender charges on the old contract, it only avoids triggering a taxable event.",
    },
  ],
  "lh-medicare-ltc": [
    {
      question: "Which part of Medicare covers hospital costs?",
      options: ["Part A", "Part B", "Part C", "Part D"],
      correctIndex: 0,
      explanation:
        "Part A is hospital insurance — inpatient stays, skilled nursing, hospice. Part B handles outpatient/medical costs, which is the most commonly confused pairing on this topic.",
    },
    {
      question: "Which part of Medicare covers outpatient/medical costs?",
      options: ["Part A", "Part B", "Part C", "Part D"],
      correctIndex: 1,
      explanation:
        "Part B covers outpatient and medical services — doctor visits, preventive care, durable medical equipment — distinct from Part A's hospital/inpatient focus.",
    },
    {
      question: "Medicare Advantage is also known as:",
      options: ["Part A", "Part B", "Part C", "Medigap"],
      correctIndex: 2,
      explanation:
        "Part C (Medicare Advantage) is a private-insurer alternative that bundles Part A and B (often with Part D) into one plan — don't confuse it with Medigap, which supplements Original Medicare rather than replacing it.",
    },
    {
      question: "Which part of Medicare covers prescription drugs?",
      options: ["Part A", "Part B", "Part C", "Part D"],
      correctIndex: 3,
      explanation:
        "Part D is the dedicated prescription drug benefit, offered through private insurers under Medicare rules — it's the only part of the lettered system focused specifically on medications.",
    },
    {
      question: "Medigap policies are designed to:",
      options: [
        "Replace Original Medicare entirely",
        "Help cover gaps like deductibles and coinsurance under Original Medicare",
        "Cover only prescription drugs",
        "Provide long-term care benefits",
      ],
      correctIndex: 1,
      explanation:
        "Medigap fills the COST-SHARING gaps in Original Medicare — deductibles, copays, coinsurance — it works alongside Medicare, not in place of it (that distinction belongs to Medicare Advantage).",
    },
    {
      question: "Eligibility for Medicaid is primarily based on:",
      options: ["Age 65+", "Financial need", "Employer sponsorship", "Veteran status"],
      correctIndex: 1,
      explanation:
        "Medicaid is a need-based program for low-income individuals and families — Medicare is the age/disability-based program, and the two are frequently swapped on exam questions.",
    },
    {
      question: "Long-term care insurance benefits are typically triggered when the insured:",
      options: [
        "Turns 65",
        "Can't perform a set number of Activities of Daily Living",
        "Retires from work",
        "Files for Medicare",
      ],
      correctIndex: 1,
      explanation:
        "LTC benefits trigger on functional need — typically being unable to perform a defined number of Activities of Daily Living (bathing, dressing, eating, etc.) — not on age or retirement status alone.",
    },
    {
      question: "Why do people buy separate long-term care insurance?",
      options: [
        "Medicare fully covers custodial care",
        "Medicare generally does not cover long-term custodial care",
        "It's required by federal law",
        "It replaces Medicare Part A",
      ],
      correctIndex: 1,
      explanation:
        "This is the single most important LTC exam fact: Medicare does NOT cover ongoing custodial care (help with daily living) — only limited, short-term skilled care — which is exactly the gap LTC insurance is built to fill.",
    },
    {
      question: "Most LTC insurance benefits are paid out as:",
      options: [
        "A single lump sum at claim time",
        "A daily or monthly benefit amount up to a policy maximum",
        "A percentage of the insured's final salary",
        "A one-time tax credit",
      ],
      correctIndex: 1,
      explanation:
        "LTC policies typically pay a set daily or monthly benefit toward qualifying care costs, up to the policy's maximum benefit amount or benefit period — not a single lump-sum payout.",
    },
    {
      question: "An elimination period in a long-term care policy works like:",
      options: [
        "A free look period",
        "A waiting period (similar to a deductible) before benefits begin",
        "A grace period for premium payment",
        "A surrender charge schedule",
      ],
      correctIndex: 1,
      explanation:
        "The elimination period is the number of days the insured must need qualifying care before the policy starts paying — functionally similar to a deductible, but measured in days, not dollars.",
    },
    {
      question: "Medicare Part B is funded mainly through:",
      options: [
        "Payroll taxes only",
        "Monthly premiums paid by enrollees plus general federal revenue",
        "State sales tax",
        "Employer contributions only",
      ],
      correctIndex: 1,
      explanation:
        "Unlike Part A (largely payroll-tax funded), Part B relies on enrollee premiums and general federal revenue — a key structural difference tested between the two parts.",
    },
    {
      question: "A Medicare Advantage (Part C) plan can typically be combined with:",
      options: ["A Medigap policy", "Original Medicare Part A and B benefits administered through the private plan", "Nothing else — it must stand alone with Medigap excluded", "Medicaid only"],
      correctIndex: 1,
      explanation:
        "Medicare Advantage plans replace and administer A and B benefits through a private insurer — by rule, you cannot also buy or use a Medigap policy alongside Medicare Advantage.",
    },
    {
      question: "The 'donut hole' (coverage gap) historically associated with Medicare applies to:",
      options: ["Part A", "Part B", "Part C", "Part D"],
      correctIndex: 3,
      explanation:
        "The coverage gap is a Part D (prescription drug) feature — a stretch of drug spending where cost-sharing temporarily changed before catastrophic coverage kicked in.",
    },
  ],
  "pc-commercial-liability": [
    {
      question: "A Commercial General Liability (CGL) policy primarily covers:",
      options: [
        "A business's own property damage",
        "A business's liability for bodily injury and property damage to third parties",
        "Employee health benefits",
        "Company vehicles only",
      ],
      correctIndex: 1,
      explanation:
        "CGL is a liability policy, not a property policy — it pays when the business is legally responsible for hurting someone else or damaging someone else's property, not for the business's own losses.",
    },
    {
      question: "A Businessowners Policy (BOP) is designed for:",
      options: [
        "Only Fortune 500 companies",
        "Bundling property and liability coverage for small/medium businesses",
        "Personal auto coverage",
        "Workers' compensation only",
      ],
      correctIndex: 1,
      explanation:
        "A BOP packages property and general liability coverage into one policy at a lower combined cost — built specifically for small and mid-size businesses, not large enterprises with complex risks.",
    },
    {
      question: "Business income coverage is meant to:",
      options: [
        "Pay for inventory damage only",
        "Replace lost income and continuing expenses while a business is shut down by a covered loss",
        "Cover employee salaries forever",
        "Pay off business loans",
      ],
      correctIndex: 1,
      explanation:
        "Business income (interruption) coverage replaces the revenue a business would have earned, plus ongoing expenses like rent, during the time it's shut down repairing a covered loss — it's about keeping the business solvent during downtime, not paying for the physical damage itself.",
    },
    {
      question: "Products-completed operations coverage addresses liability arising from:",
      options: [
        "Products or work performed after completion",
        "Employee injuries on the job",
        "Company vehicle accidents",
        "Cyberattacks",
      ],
      correctIndex: 0,
      explanation:
        "This coverage specifically targets harm that shows up AFTER a product is sold or a job is finished — like a defective product injuring a customer months later, which is why it's a distinct CGL exposure category from ongoing operations.",
    },
    {
      question: "An additional insured endorsement does what?",
      options: [
        "Removes coverage for the named insured",
        "Extends liability coverage to parties beyond the named insured",
        "Cancels the policy",
        "Adds flood coverage",
      ],
      correctIndex: 1,
      explanation:
        "Additional insured status extends liability protection to a party who isn't the original policyholder — commonly used when a contractor adds a property owner or general contractor to their policy for a specific job.",
    },
    {
      question: "A claims-made liability policy covers claims based on:",
      options: [
        "When the incident occurred, regardless of when reported",
        "When the claim is made during the policy period",
        "Only claims filed after the policy expires",
        "Only claims from named employees",
      ],
      correctIndex: 1,
      explanation:
        "Claims-made coverage triggers on WHEN the claim is reported, not when the incident happened — which is why these policies need a retroactive date and often tail coverage if the policy is cancelled.",
    },
    {
      question: "An occurrence policy, unlike a claims-made policy, covers:",
      options: [
        "Only claims reported during the same year",
        "Incidents that happened during the policy period, regardless of when the claim is filed",
        "Nothing after cancellation",
        "Only product liability",
      ],
      correctIndex: 1,
      explanation:
        "Occurrence coverage locks in based on WHEN THE INCIDENT HAPPENED — even if the claim surfaces years later after the policy ends, it's still covered as long as the incident itself occurred during the policy period.",
    },
    {
      question: "Under CGL Coverage A, bodily injury and property damage liability, the trigger for a claims-made form is tied to:",
      options: [
        "The retroactive date and when the claim is made",
        "Only the date the policy was purchased",
        "The date the business was founded",
        "Nothing — Coverage A is always occurrence-based",
      ],
      correctIndex: 0,
      explanation:
        "A claims-made Coverage A form responds based on a retroactive date (the earliest date an incident can have occurred) combined with the claim being made during the policy period — both pieces matter together.",
    },
    {
      question: "CGL Coverage B, Personal Injury and Advertising Injury, is designed to cover claims like:",
      options: [
        "A customer slipping and falling on wet floors",
        "Libel, slander, or copyright infringement in advertising",
        "An employee's work-related injury",
        "Damage to the business's own building",
      ],
      correctIndex: 1,
      explanation:
        "Coverage B addresses non-physical injuries like libel, slander, false arrest, or advertising-related infringement — a distinct exposure from Coverage A's bodily injury/property damage focus.",
    },
    {
      question: "A Businessowners Policy (BOP) does NOT typically include:",
      options: [
        "Property coverage",
        "General liability coverage",
        "Workers' compensation",
        "Business income coverage",
      ],
      correctIndex: 2,
      explanation:
        "A BOP bundles property and liability for small/medium businesses, but workers' compensation is always written as a separate, distinct policy — never bundled into a BOP.",
    },
    {
      question: "Under products-completed operations coverage, a claim is most likely to arise:",
      options: [
        "While a worker is actively performing the job",
        "After the product was sold or the job was finished",
        "Before the policy was purchased",
        "Only during a CGL renewal period",
      ],
      correctIndex: 1,
      explanation:
        "Products-completed operations specifically addresses harm that surfaces AFTER the work is done or the product is sold — like a defective installation causing damage months later.",
    },
    {
      question: "The 'who is an insured' provision in a CGL policy generally defines coverage for:",
      options: [
        "Only the single named business owner",
        "The named insured and, depending on the policy, certain employees acting within their duties",
        "Customers of the business",
        "Competing businesses",
      ],
      correctIndex: 1,
      explanation:
        "CGL policies extend insured status beyond just the named business to employees acting within the scope of their job duties — a key reason CGL claims can arise from employee actions, not just ownership decisions.",
    },
    {
      question: "Supplemental payments under a CGL policy typically cover things like:",
      options: [
        "The business's lost income",
        "Defense costs and certain expenses related to a covered claim, often in addition to the liability limit",
        "Employee wages",
        "Property damage to the business's own building",
      ],
      correctIndex: 1,
      explanation:
        "Supplementary payments (like defense costs) are often paid IN ADDITION to the liability limit, not subtracted from it — a frequently tested distinction from how the core liability limit itself works.",
    },
  ],
  "pc-bonds": [
    {
      question: "In a surety bond, who must perform the underlying obligation?",
      options: ["The obligee", "The surety", "The principal", "The insurer's agent"],
      correctIndex: 2,
      explanation:
        "The principal is the one with the actual job to do (finish the contract, follow the license rules). The surety only steps in financially if the principal fails — the surety itself never performs the work.",
    },
    {
      question: "In a surety bond, who is protected if the principal fails to perform?",
      options: ["The principal", "The surety", "The obligee", "The bonding company's shareholders"],
      correctIndex: 2,
      explanation:
        "The obligee is the party who required the bond and is protected by it — e.g., the government agency or project owner who needs assurance the principal will follow through.",
    },
    {
      question: "Unlike standard insurance, a surety bond requires the principal to:",
      options: [
        "Pay nothing ever",
        "Reimburse the surety if a claim is paid",
        "Be the only party covered",
        "Skip underwriting",
      ],
      correctIndex: 1,
      explanation:
        "This is the key feature that makes a surety bond NOT insurance: the surety expects to be repaid by the principal for any claim it pays out. It's a credit/guarantee instrument, not a risk pool.",
    },
    {
      question: "A fidelity bond protects an employer against:",
      options: ["Weather damage", "Employee dishonesty such as theft or embezzlement", "Customer lawsuits", "Equipment breakdown"],
      correctIndex: 1,
      explanation:
        "Fidelity bonds cover losses caused by an employer's OWN employees acting dishonestly — theft, embezzlement, forgery — distinct from surety bonds, which guarantee performance to a third party.",
    },
    {
      question: "A license and permit bond guarantees that a business will:",
      options: [
        "Make a profit",
        "Comply with laws/regulations tied to its license",
        "Never be sued",
        "Pay no taxes",
      ],
      correctIndex: 1,
      explanation:
        "Many professions and trades must post this bond as a condition of licensure — it guarantees compliance with the specific laws/regulations governing that license, with the public protected as the obligee.",
    },
    {
      question: "Which type of bond guarantees a contractor will fulfill a construction contract?",
      options: ["Fidelity bond", "License bond", "Contract (performance) bond", "Title bond"],
      correctIndex: 2,
      explanation:
        "A performance bond (a type of contract bond) specifically guarantees that the contractor will complete the construction contract as agreed — if they don't, the surety covers the cost of finding someone to finish it.",
    },
    {
      question: "A bid bond specifically guarantees that:",
      options: [
        "The contractor will finish the job to specification",
        "A contractor who wins a bid will actually sign the contract",
        "Subcontractors will be paid",
        "The project will be completed on time regardless of cause",
      ],
      correctIndex: 1,
      explanation:
        "A bid bond is narrowly about the bidding process itself — it guarantees that if a contractor wins the bid, they'll actually sign the contract at the bid price, rather than walking away.",
    },
    {
      question: "A payment bond specifically guarantees that:",
      options: [
        "The contractor will complete the work to spec",
        "The contractor will pay their subcontractors and suppliers",
        "The obligee will pay the principal in advance",
        "The bond premium will be refunded",
      ],
      correctIndex: 1,
      explanation:
        "A payment bond protects subcontractors and suppliers by guaranteeing they'll get paid by the contractor — distinct from a performance bond, which guarantees the work itself gets finished.",
    },
    {
      question: "In the three-party surety bond structure, who is the obligee?",
      options: [
        "The party who must perform the obligation",
        "The company that issues the bond",
        "The party protected by the bond, who receives payment if the principal fails",
        "A government regulator with no direct stake in the bond",
      ],
      correctIndex: 2,
      explanation:
        "The obligee is the party the bond protects — they're the one who collects if the principal fails to perform. The principal performs, and the surety guarantees that performance to the obligee.",
    },
    {
      question: "If a surety pays a claim to the obligee because the principal failed to perform, the surety:",
      options: [
        "Absorbs the loss permanently, like a standard insurer",
        "Expects the principal to reimburse it for the amount paid",
        "Forgives the debt automatically after one year",
        "Has no further recourse against the principal",
      ],
      correctIndex: 1,
      explanation:
        "This is the defining feature that separates a surety bond from insurance — the surety expects reimbursement from the principal, since the bond guarantees the OBLIGEE gets paid, not that the principal is free of financial responsibility.",
    },
    {
      question: "A fidelity bond differs from a surety bond in its basic structure because a fidelity bond is:",
      options: [
        "A three-party arrangement just like a surety bond",
        "Closer to traditional two-party insurance, protecting the employer who purchased it",
        "Only available to government agencies",
        "A guarantee that a contract will be signed",
      ],
      correctIndex: 1,
      explanation:
        "Fidelity bonds function more like ordinary insurance — a two-party arrangement where the employer is both the purchaser and the one protected, unlike the three-party surety bond structure.",
    },
    {
      question: "A notary bond is an example of which bond category?",
      options: [
        "A fidelity bond",
        "A license and permit bond",
        "A bid bond",
        "A payment bond",
      ],
      correctIndex: 1,
      explanation:
        "A notary bond is a license and permit bond — it guarantees that the notary, who holds a license to perform notarial acts, will comply with the laws governing that role.",
    },
  ],
  "pc-property-specialty-lines": [
    {
      question: "Which dwelling form covers the dwelling on an open-perils basis, similar to HO-3?",
      options: ["DP-1", "DP-2", "DP-3", "DP-4"],
      correctIndex: 2,
      explanation:
        "DP-3 is the special form, covering the dwelling on an open-perils basis just like HO-3 — DP-1 and DP-2 are both narrower, named-perils forms.",
    },
    {
      question: "Business income coverage is meant to replace:",
      options: [
        "The cost to repair the damaged building",
        "Lost net income and continuing expenses during a shutdown",
        "Equipment breakdown repair costs",
        "Employee wages permanently",
      ],
      correctIndex: 1,
      explanation:
        "Business income coverage replaces what the business would have earned (plus ongoing expenses like rent) while it's shut down from a covered loss — not the physical repair cost itself, which the property coverage handles.",
    },
    {
      question: "Extra expense coverage pays for:",
      options: [
        "Lost profit only",
        "The additional cost of speeding up resumption of operations",
        "Employee bonuses",
        "Flood damage",
      ],
      correctIndex: 1,
      explanation:
        "Extra expense covers the EXTRA cost of getting back up and running faster — like renting temporary space — complementing business income coverage rather than duplicating it.",
    },
    {
      question: "Equipment breakdown coverage exists because:",
      options: [
        "Standard property forms exclude mechanical/electrical breakdown",
        "It replaces business income coverage",
        "It's required by NFIP",
        "It covers flood only",
      ],
      correctIndex: 0,
      explanation:
        "Standard property forms specifically exclude mechanical or electrical breakdown of equipment — equipment breakdown coverage fills that exact gap.",
    },
    {
      question: "Cyber first-party coverage pays for:",
      options: [
        "Claims by third parties whose data was exposed",
        "The insured's own costs like data restoration and business interruption from a cyber event",
        "Only legal defense costs",
        "Liquor liability claims",
      ],
      correctIndex: 1,
      explanation:
        "First-party cyber coverage pays the INSURED's own recovery costs — data restoration, downtime, ransomware. Third-party harm is covered by cyber liability instead.",
    },
    {
      question: "Inland marine coverage exists primarily for:",
      options: [
        "Property that is fixed and never moves",
        "Property that moves or is in transit, away from a fixed location",
        "Flood damage only",
        "Employee dishonesty",
      ],
      correctIndex: 1,
      explanation:
        "Inland marine covers property that travels or sits away from a fixed premises — like jewelry, fine art, or contractor's equipment — which standard property forms don't handle well.",
    },
    {
      question: "Flood damage under a standard homeowners or commercial property policy is:",
      options: [
        "Automatically covered",
        "Specifically excluded, requiring NFIP or private flood coverage",
        "Covered only above $1,000",
        "Covered only for commercial property",
      ],
      correctIndex: 1,
      explanation:
        "Flood is a standard exclusion on ordinary property policies — coverage must be purchased separately through NFIP or a private flood insurer.",
    },
    {
      question: "Earthquake and windstorm deductibles are commonly structured as:",
      options: [
        "A flat $100 deductible",
        "A percentage of the dwelling's value",
        "No deductible at all",
        "A fixed $10,000 regardless of value",
      ],
      correctIndex: 1,
      explanation:
        "Earthquake and windstorm coverage commonly use a PERCENTAGE deductible (e.g. 2-10% of dwelling value) rather than the flat dollar deductibles typical of standard perils.",
    },
    {
      question: "Builder's risk insurance is designed to cover:",
      options: [
        "A completed and occupied building",
        "A structure while it's under construction",
        "Only liability claims",
        "Flood damage exclusively",
      ],
      correctIndex: 1,
      explanation:
        "Builder's risk covers a structure and materials during the construction period — once the building is completed and occupied, it needs to convert to a standard property policy.",
    },
    {
      question: "Farm/ranch policies are distinct from standard homeowners policies because they:",
      options: [
        "Cover only the dwelling",
        "Combine dwelling, farm structures, equipment, and livestock coverage",
        "Exclude all personal property",
        "Are issued only by NFIP",
      ],
      correctIndex: 1,
      explanation:
        "Farm/ranch policies bundle dwelling and personal property coverage with farm-specific exposures like structures, equipment, and livestock that a standard homeowners policy doesn't contemplate.",
    },
    {
      question: "A boiler and machinery policy (now commonly called equipment breakdown) covers losses caused by:",
      options: [
        "Fire only",
        "Sudden and accidental breakdown of pressure vessels, boilers, or machinery",
        "Theft of equipment",
        "Flood damage to equipment",
      ],
      correctIndex: 1,
      explanation:
        "This coverage targets sudden mechanical or electrical breakdown — explosions of steam boilers, motor burnout — perils standard property and casualty forms don't address.",
    },
    {
      question: "Ordinance or law coverage on a property policy addresses:",
      options: [
        "Liability lawsuits",
        "Increased rebuilding costs from current building codes after a covered loss",
        "Flood damage",
        "Employee theft",
      ],
      correctIndex: 1,
      explanation:
        "After a loss, current building codes may require upgrades beyond simply restoring what existed — ordinance or law coverage pays for that code-driven cost gap, which standard property coverage excludes.",
    },
    {
      question: "Valuable papers and records coverage is a specialty inland marine coverage designed to:",
      options: [
        "Replace cash lost in a robbery",
        "Cover the cost to research and recreate damaged or destroyed business records and documents",
        "Cover only digital data breaches",
        "Insure company vehicles",
      ],
      correctIndex: 1,
      explanation:
        "This coverage pays the often-significant cost of researching and recreating records — blueprints, contracts, files — that have no simple market replacement value of their own.",
    },
    {
      question: "A difference in conditions (DIC) policy is typically purchased to:",
      options: [
        "Replace a standard property policy entirely",
        "Fill gaps and add perils (like flood or earthquake) not covered by an underlying property policy",
        "Lower the named insured's liability limits",
        "Cover only auto physical damage",
      ],
      correctIndex: 1,
      explanation:
        "DIC policies wrap around an existing property program to add coverage for excluded perils — commonly flood and earthquake — rather than duplicating what's already insured.",
    },
    {
      question: "Ocean marine insurance, unlike inland marine, primarily covers:",
      options: [
        "Property in transit over land only",
        "Vessels, cargo, and liability exposures tied to ocean and navigable waters transport",
        "Fixed buildings near the coast",
        "Auto liability",
      ],
      correctIndex: 1,
      explanation:
        "Ocean marine is the original marine insurance line, covering hulls, cargo, and related liability on the water — inland marine grew out of it to cover transit and mobile property on land.",
    },
  ],
  "pc-property-provisions": [
    {
      question: "On a property policy, the declarations page lists:",
      options: [
        "What's excluded from coverage",
        "Who's insured, the property address, limits, deductibles, and policy period",
        "The rules the insured must follow",
        "The insurer's core promise to pay",
      ],
      correctIndex: 1,
      explanation:
        "Declarations are the specific facts of the policy — who, what, where, how much, and how long. The insuring agreement holds the core promise; conditions hold the rules; exclusions hold the carve-outs.",
    },
    {
      question: "Proximate cause is used to determine:",
      options: [
        "The policy's expiration date",
        "The dominant, efficient cause that set a chain of events leading to a loss",
        "The insured's credit score",
        "The agent's commission rate",
      ],
      correctIndex: 1,
      explanation:
        "When multiple causes contribute to a loss, insurers trace back to the proximate (dominant, efficient) cause to determine whether the loss is actually covered.",
    },
    {
      question: "The principle of indemnity means insurance is meant to:",
      options: [
        "Enrich the insured beyond their loss",
        "Restore the insured to their pre-loss financial position, no better or worse",
        "Always pay the full face amount regardless of actual loss",
        "Punish the insurer for underwriting errors",
      ],
      correctIndex: 1,
      explanation:
        "Indemnity is a restore-don't-enrich principle — it's why insurers use actual cash value or replacement cost calculations instead of simply paying a flat face amount.",
    },
    {
      question: "A building that has been vacant for an extended period (commonly around 60 days) typically:",
      options: [
        "Has no change in coverage",
        "May have certain coverages, like vandalism or theft, limited or suspended",
        "Automatically gains broader coverage",
        "Is required to file for NFIP",
      ],
      correctIndex: 1,
      explanation:
        "Insurers treat vacant buildings as higher risk — many policies narrow coverage (often excluding vandalism or theft) once a building has sat vacant beyond a specified period, commonly 60 days.",
    },
    {
      question: "Strict liability differs from absolute liability because strict liability:",
      options: [
        "Requires no contributing factor at all",
        "Applies to harm caused by a product or activity without needing to prove negligence",
        "Only applies to government entities",
        "Is the same exact concept as vicarious liability",
      ],
      correctIndex: 1,
      explanation:
        "Strict liability applies without needing to prove negligence, often in product liability cases. Absolute liability is even narrower, tied to inherently dangerous activities, while vicarious liability holds one party responsible for ANOTHER's acts.",
    },
    {
      question: "Vicarious liability means:",
      options: [
        "An individual is liable only for their own direct actions",
        "One party is held liable for the acts of another, such as an employer for an employee",
        "No one can be held liable",
        "Liability that requires proof of intent",
      ],
      correctIndex: 1,
      explanation:
        "Vicarious liability shifts responsibility onto a party (like an employer) for the acts of another (like an employee acting within the scope of employment).",
    },
    {
      question: "Subrogation gives the insurer the right to:",
      options: [
        "Deny all future claims from the insured",
        "Recover what it paid out from the third party who actually caused the loss",
        "Cancel the policy immediately after any claim",
        "Refuse to pay the original claim",
      ],
      correctIndex: 1,
      explanation:
        "After paying a claim, the insurer can pursue the at-fault third party (or their insurer) to recover what it paid — which is why an insured shouldn't release an at-fault party from liability before the insurer settles.",
    },
    {
      question: "If an insured signs a release with an at-fault third party before their insurer settles the claim, this can:",
      options: [
        "Have no effect on the claim",
        "Jeopardize the insurer's subrogation rights and potentially the insured's own claim",
        "Automatically increase the payout",
        "Void only the third party's liability, not the insured's coverage",
      ],
      correctIndex: 1,
      explanation:
        "Releasing the at-fault party can eliminate the insurer's ability to subrogate (recover its payout), which is why insureds are cautioned against settling directly with an at-fault party before involving their insurer.",
    },
    {
      question: "When a property loss is covered by more than one policy, the other insurance provision typically:",
      options: [
        "Allows the insured to collect the full amount from each policy",
        "Prorates payment between insurers rather than allowing double recovery",
        "Voids all coverage automatically",
        "Has no defined process",
      ],
      correctIndex: 1,
      explanation:
        "The other insurance provision prevents double recovery by prorating or coordinating payment between multiple applicable policies, consistent with the principle of indemnity.",
    },
    {
      question: "The Terrorism Risk Insurance Act (TRIA) is best described as:",
      options: [
        "A state-level rate filing requirement",
        "A federal program requiring insurers to offer terrorism coverage with a federal backstop",
        "A type of fidelity bond",
        "An exclusion found only in dwelling policies",
      ],
      correctIndex: 1,
      explanation:
        "TRIA operates at the federal level, requiring insurers to offer terrorism coverage and providing a federal backstop against catastrophic terrorism losses — distinct from standard state-regulated coverage.",
    },
    {
      question: "Actual cash value (ACV) is most commonly calculated as:",
      options: [
        "Replacement cost with no adjustment",
        "Replacement cost minus depreciation",
        "The original purchase price only",
        "Market value of the entire property",
      ],
      correctIndex: 1,
      explanation:
        "ACV takes what it would cost to replace the item new today and subtracts depreciation for age and wear — producing a lower payout than full replacement cost coverage.",
    },
    {
      question: "Replacement cost coverage, compared to ACV, pays:",
      options: [
        "Less than ACV in every case",
        "The cost to repair or replace with similar materials, without a deduction for depreciation",
        "Only the original purchase price",
        "Nothing for partial losses",
      ],
      correctIndex: 1,
      explanation:
        "Replacement cost coverage skips the depreciation deduction that reduces ACV payouts — the trade-off is usually a higher premium for that more complete reimbursement.",
    },
    {
      question: "A coinsurance penalty on a commercial property policy is triggered when the insured:",
      options: [
        "Carries coverage equal to or above the required percentage of value",
        "Underinsures the property below the policy's required coinsurance percentage, resulting in a reduced claim payout",
        "Files more than one claim per year",
        "Cancels the policy early",
      ],
      correctIndex: 1,
      explanation:
        "Coinsurance penalizes underinsurance — if the insured carries less than the required percentage of the property's value, any claim payout is reduced proportionally, even for a partial loss.",
    },
    {
      question: "Concurrent causation occurs when a loss results from:",
      options: [
        "A single excluded cause only",
        "Two or more causes acting together, where at least one is covered and at least one is excluded",
        "No identifiable cause",
        "Only causes that are all covered",
      ],
      correctIndex: 1,
      explanation:
        "Concurrent causation situations — where a covered peril and an excluded peril combine to cause a loss — are exactly why policies include anti-concurrent-causation language to clarify how such claims are handled.",
    },
    {
      question: "Warranty in a property/casualty policy (as opposed to a representation) refers to a statement that:",
      options: [
        "Must be substantially true",
        "Becomes part of the contract and must be exactly/literally true, or the policy can be voided",
        "Has no legal significance",
        "Only applies to verbal statements",
      ],
      correctIndex: 1,
      explanation:
        "Warranties are stricter than representations — once written into the contract, a warranty must be literally true, and a breach can void coverage, unlike a representation, which only needs to be substantially true.",
    },
  ],
  "pc-casualty-crime-professional": [
    {
      question: "Robbery, as a crime coverage term, specifically involves:",
      options: [
        "Unlawful entry into a premises",
        "Taking property from a person by force or threat",
        "An employee stealing from their employer",
        "Property vanishing with no explanation",
      ],
      correctIndex: 1,
      explanation:
        "Robbery requires force or threat against a PERSON — distinct from burglary (forced entry into a premises) and mysterious disappearance (no explanation at all).",
    },
    {
      question: "Burglary, as a crime coverage term, requires:",
      options: [
        "Force or threat against a person",
        "Unlawful entry into a premises, typically with visible signs of forced entry",
        "An employee's dishonest act",
        "A forged check",
      ],
      correctIndex: 1,
      explanation:
        "Burglary is specifically about forced entry into a PREMISES — if there's no sign of forced entry, it likely wouldn't qualify as burglary under a crime policy.",
    },
    {
      question: "Employee dishonesty coverage responds to:",
      options: [
        "Outside burglars breaking into a building",
        "An employee's fraudulent or dishonest acts, like embezzlement",
        "Robbery committed by a stranger",
        "Forged checks from a third party",
      ],
      correctIndex: 1,
      explanation:
        "Employee dishonesty covers losses caused by an employer's OWN employees acting dishonestly — an inside job, distinct from outside crimes like burglary or robbery.",
    },
    {
      question: "Errors & Omissions (E&O) coverage protects a professional against claims of:",
      options: [
        "Bodily injury caused by a slip and fall",
        "Negligent acts, errors, or omissions in performing professional services that cause financial harm",
        "Employee theft",
        "Property damage from a fire",
      ],
      correctIndex: 1,
      explanation:
        "E&O covers financial/professional harm from mistakes in service — not bodily injury or property damage, which is what separates it from general liability.",
    },
    {
      question: "Medical malpractice insurance is best understood as:",
      options: [
        "A type of property insurance",
        "E&O coverage specifically for healthcare providers",
        "A surety bond for hospitals",
        "Workers' compensation for nurses",
      ],
      correctIndex: 1,
      explanation:
        "Medical malpractice is essentially E&O for the medical profession — covering claims of negligent diagnosis, treatment, or care that harms a patient.",
    },
    {
      question: "Directors and Officers (D&O) liability protects against claims related to:",
      options: [
        "Decisions made by directors and officers in managing the company",
        "Bodily injury on company premises",
        "Employee theft",
        "Property damage from a covered peril",
      ],
      correctIndex: 0,
      explanation:
        "D&O protects the people making governance decisions — directors and officers — from claims alleging mismanagement, breach of fiduciary duty, or similar failures in running the company.",
    },
    {
      question: "Employment Practices Liability Insurance (EPLI) covers claims by:",
      options: [
        "Customers injured on premises",
        "Employees against the employer, such as wrongful termination or discrimination",
        "Shareholders against directors",
        "Third parties whose data was breached",
      ],
      correctIndex: 1,
      explanation:
        "EPLI specifically covers claims brought BY EMPLOYEES against their employer over workplace treatment — wrongful termination, discrimination, harassment, retaliation.",
    },
    {
      question: "D&O and EPLI coverage are both:",
      options: [
        "Automatically included in a standard CGL policy",
        "Standard CGL exclusions requiring their own separate policy",
        "Forms of crime coverage",
        "Required only for sole proprietors",
      ],
      correctIndex: 1,
      explanation:
        "Standard CGL excludes both D&O-type governance claims and EPLI-type employment claims — businesses need separate, specific policies for each exposure.",
    },
    {
      question: "Cyber liability coverage (as opposed to cyber first-party) pays for:",
      options: [
        "The insured's own data restoration costs",
        "Claims by third parties harmed when the insured's data breach exposed their information",
        "Equipment breakdown",
        "Flood damage to a data center",
      ],
      correctIndex: 1,
      explanation:
        "Cyber liability is the third-party counterpart to cyber first-party coverage — it pays when others are harmed by a breach of their data, including defense costs, settlements, and regulatory fines.",
    },
    {
      question: "Liquor liability coverage is needed by businesses that serve or sell alcohol because:",
      options: [
        "Standard CGL automatically covers it",
        "Standard CGL specifically excludes it, requiring an endorsement or separate policy",
        "It's covered under workers' compensation",
        "It's part of D&O coverage",
      ],
      correctIndex: 1,
      explanation:
        "Liquor liability is a standard CGL exclusion for any business in the business of serving or selling alcohol — they need a specific endorsement or separate policy to cover claims from an intoxicated person's actions.",
    },
    {
      question: "A fidelity bond is best described as protecting an employer against:",
      options: [
        "Outside burglars only",
        "Financial loss caused by the dishonest acts of a bonded employee",
        "Customer lawsuits",
        "Equipment breakdown",
      ],
      correctIndex: 1,
      explanation:
        "A fidelity bond specifically backstops the employer against losses from a covered employee's dishonesty — overlapping in concept with employee dishonesty crime coverage.",
    },
    {
      question: "Forgery or alteration coverage under a crime policy responds to losses from:",
      options: [
        "An employee embezzling funds",
        "Someone forging or altering a check or similar financial instrument",
        "A robbery at gunpoint",
        "A burglar breaking a window",
      ],
      correctIndex: 1,
      explanation:
        "This coverage targets losses from forged or altered financial instruments specifically — a different mechanism than employee dishonesty, robbery, or burglary, even though all four fall under 'crime' coverage broadly.",
    },
    {
      question: "Computer fraud coverage under a crime policy pays for loss of money or property resulting from:",
      options: [
        "A natural disaster",
        "Fraudulent computer-based instructions causing funds or property to be transferred out",
        "An employee's poor performance review",
        "A vehicle accident",
      ],
      correctIndex: 1,
      explanation:
        "Computer fraud coverage targets losses where a fraudulent electronic instruction (like a hacked transfer request) causes money or property to leave the insured's control.",
    },
    {
      question: "Surety bonds differ fundamentally from insurance because a surety bond:",
      options: [
        "Protects the principal from their own default",
        "Guarantees a third party (the obligee) that the principal will perform, and the surety expects to be reimbursed by the principal if it pays a claim",
        "Never involves three parties",
        "Is always cheaper than insurance",
      ],
      correctIndex: 1,
      explanation:
        "A surety bond is a three-party guarantee — the principal is expected to perform, and if the surety has to pay the obligee for the principal's default, it then seeks reimbursement FROM the principal, unlike standard insurance.",
    },
  ],
  "pc-casualty-provisions": [
    {
      question: "Intentional acts by an insured are typically:",
      options: [
        "Covered the same as accidental acts",
        "Excluded from liability coverage, since insurance covers accidental harm",
        "Covered only up to the policy limit",
        "Covered only if reported within 24 hours",
      ],
      correctIndex: 1,
      explanation:
        "Intentional acts are a near-universal liability exclusion — insurance is designed to cover accidental harm the insured is legally liable for, not harm they deliberately caused.",
    },
    {
      question: "After a liability loss, an insured who settles directly with a claimant without the insurer's consent:",
      options: [
        "Has no risk to their coverage",
        "Can jeopardize coverage for that claim",
        "Automatically increases their payout",
        "Is required to do so under standard conditions",
      ],
      correctIndex: 1,
      explanation:
        "Duties after a loss require the insured to let the insurer control the claim — settling directly or admitting liability without consent can jeopardize coverage, since the insurer loses the ability to properly evaluate and defend the claim.",
    },
    {
      question: "On a liability claim, the insurer typically has:",
      options: [
        "No obligation to defend the insured",
        "Both the right and the duty to defend a covered claim",
        "Only the right to deny the claim",
        "An obligation to settle every claim regardless of merit",
      ],
      correctIndex: 1,
      explanation:
        "A liability insurer generally has both the right AND the duty to defend a covered claim — defense is a core part of what the insured is paying for, separate from the indemnity payment itself.",
    },
    {
      question: "General damages in a liability claim refer to:",
      options: [
        "Economic harm with a calculable dollar amount, like medical bills",
        "Non-economic harm, like pain and suffering",
        "Damages meant to punish the wrongdoer",
        "Damages awarded only in criminal cases",
      ],
      correctIndex: 1,
      explanation:
        "General damages compensate non-economic harm (pain and suffering) that has no precise receipt — special damages cover the economic, calculable harm like medical bills and lost wages.",
    },
    {
      question: "Special damages in a liability claim refer to:",
      options: [
        "Non-economic harm like pain and suffering",
        "Economic harm with calculable amounts, like medical bills and lost wages",
        "Punitive damages",
        "Damages that are never insurable",
      ],
      correctIndex: 1,
      explanation:
        "Special damages are the economic, calculable side of compensatory damages — medical bills, lost wages — as opposed to general damages, which cover non-economic harm.",
    },
    {
      question: "Punitive damages are intended to:",
      options: [
        "Reimburse the victim's actual economic loss",
        "Punish the wrongdoer for especially reckless or malicious conduct",
        "Cover the victim's pain and suffering",
        "Replace special damages",
      ],
      correctIndex: 1,
      explanation:
        "Punitive damages exist to punish the wrongdoer, not to compensate the victim — a different purpose entirely from general and special (both compensatory) damages.",
    },
    {
      question: "Punitive damages, as a matter of public policy in many states, are:",
      options: [
        "Always fully insurable",
        "Often restricted or prohibited from being covered by insurance",
        "The only damages insurance ever covers",
        "Treated identically to special damages",
      ],
      correctIndex: 1,
      explanation:
        "Many states restrict or prohibit insurance from covering punitive damages, reasoning that allowing insurance to absorb a punishment would undermine its deterrent purpose.",
    },
    {
      question: "The other insurance provision in a liability policy exists to:",
      options: [
        "Allow the insured to collect twice from multiple policies",
        "Coordinate or prorate payment when more than one policy applies to a loss",
        "Void all coverage if another policy exists",
        "Cancel the policy automatically",
      ],
      correctIndex: 1,
      explanation:
        "Like in property coverage, the other insurance provision prevents double recovery by coordinating how multiple applicable liability policies share a loss.",
    },
    {
      question: "The insuring agreement in a liability policy contains:",
      options: [
        "The list of what's excluded",
        "The insurer's core promise to pay for covered bodily injury or property damage the insured is liable for",
        "The policy's declarations",
        "The duties of the insured after a loss",
      ],
      correctIndex: 1,
      explanation:
        "The insuring agreement is where the insurer's actual promise to pay lives — exclusions carve back from it, conditions set the rules, and declarations hold the policy-specific facts.",
    },
    {
      question: "Conditions in a liability policy typically require the insured to:",
      options: [
        "Pay claimants directly before notifying the insurer",
        "Promptly notify the insurer of a claim and cooperate with the investigation/defense",
        "Waive all rights to a defense",
        "Settle every claim within 24 hours",
      ],
      correctIndex: 1,
      explanation:
        "Conditions set the rules both parties must follow — for the insured, that typically means prompt notice of a claim and cooperation with the insurer's investigation and defense.",
    },
    {
      question: "Comparative negligence allows a damaged party to recover even when:",
      options: [
        "They were 0% at fault only",
        "They were partially at fault, with their recovery reduced by their own percentage of fault",
        "The other party had no insurance",
        "There was no actual damage",
      ],
      correctIndex: 1,
      explanation:
        "Comparative negligence lets a partially-at-fault party still recover damages, just reduced by their own share of fault — a contrast to contributory negligence, which can bar recovery entirely if the claimant is even slightly at fault.",
    },
    {
      question: "Contributory negligence, where still applied, generally results in:",
      options: [
        "A reduced award proportional to fault",
        "A complete bar to recovery if the claimant is found even partly at fault",
        "No effect on the claim outcome",
        "An automatic increase in damages",
      ],
      correctIndex: 1,
      explanation:
        "Contributory negligence is the harsher, older rule — any fault at all by the claimant can completely bar recovery, which is why most states have replaced it with some form of comparative negligence.",
    },
    {
      question: "An umbrella liability policy is designed to:",
      options: [
        "Replace the need for any underlying liability policy",
        "Provide additional limits above underlying policies and broaden coverage for some gaps",
        "Cover only auto liability",
        "Eliminate all deductibles",
      ],
      correctIndex: 1,
      explanation:
        "Umbrella policies sit on top of underlying liability policies (like auto and homeowners/CGL), adding extra limits once those are exhausted and sometimes covering gaps the underlying policies don't.",
    },
    {
      question: "A self-insured retention (SIR) on a liability policy functions similarly to:",
      options: [
        "A policy limit",
        "A deductible the insured must absorb before the policy responds",
        "A premium discount with no obligation",
        "An exclusion",
      ],
      correctIndex: 1,
      explanation:
        "An SIR requires the insured to pay losses out of pocket up to a set amount before the policy responds — functionally similar to a deductible, common on larger commercial liability programs.",
    },
  ],
  "pc-regulation-idaho-general": [
    {
      question: "Under Idaho Code 41-203, who is responsible for administering Idaho's insurance laws?",
      options: [
        "The Governor",
        "The Director of the Department of Insurance",
        "The state legislature",
        "The Idaho Attorney General",
      ],
      correctIndex: 1,
      explanation:
        "41-203 places this authority with the Director of the Department of Insurance — examinations, hearings, and penalties under Title 41 all flow through this office, not the Governor or legislature.",
    },
    {
      question: "Inducing a policyholder to replace an existing policy through misrepresentation violates Idaho Code:",
      options: ["41-1314 (rebating)", "41-1305 (twisting)", "41-1306 (false financial statements)", "41-1309 (boycott)"],
      correctIndex: 1,
      explanation:
        "This is twisting (41-1305) — the defining feature is misrepresenting the comparison to get a policyholder to REPLACE their existing coverage. Rebating (41-1314) is a different violation about purchase incentives.",
    },
    {
      question: "Offering a client something of value not stated in the policy to induce a sale in Idaho is called:",
      options: ["Twisting (41-1305)", "Rebating (41-1314)", "Coercion (41-1309)", "Defamation (41-1308)"],
      correctIndex: 1,
      explanation:
        "Rebating (41-1314) is about the financial incentive to BUY — anything of value outside the policy terms. Twisting is the separate violation that targets misrepresenting a replacement decision.",
    },
    {
      question: "In Idaho, property and casualty are:",
      options: [
        "A single combined line of authority",
        "Separate lines of authority requiring their own exams",
        "Not separately licensed",
        "Only available to nonresidents",
      ],
      correctIndex: 1,
      explanation:
        "Under 41-1003(8)/1004, property and casualty are distinct lines of authority — a producer wanting to sell both must pass both exams and hold both lines on their license.",
    },
    {
      question: "A resident producer license in Idaho is for someone who:",
      options: [
        "Lives in and primarily transacts business in Idaho",
        "Only sells insurance online",
        "Has a felony conviction on record",
        "Works exclusively for one insurer",
      ],
      correctIndex: 0,
      explanation:
        "41-1003(9) defines resident status by where the producer LIVES and primarily transacts business — not by sales channel, client location, or insurer affiliation.",
    },
    {
      question: "Under Idaho Code 41-1016 and 41-1026, a felony conviction can result in:",
      options: [
        "No effect on a producer's license",
        "Suspension or revocation of the producer's license",
        "Automatic upgrade to a resident license",
        "A mandatory rebate to clients",
      ],
      correctIndex: 1,
      explanation:
        "These sections explicitly name a felony conviction as grounds for the Director to suspend or revoke a license — one of the most frequently tested licensing-discipline facts.",
    },
    {
      question: "An Idaho producer who handles premium funds owes clients which duty under 41-1024, 1323, 1325?",
      options: ["A marketing duty", "A fiduciary duty", "A countersignature duty", "An assigned risk duty"],
      correctIndex: 1,
      explanation:
        "Handling client premium money creates a fiduciary duty — the producer must hold and account for those funds responsibly, on the client's behalf, not their own.",
    },
    {
      question: "If an Idaho producer moves to a new address, Idaho Code 41-1008(6) requires them to:",
      options: [
        "Do nothing until renewal",
        "Report the change of address to the Department of Insurance",
        "Surrender their license",
        "Reapply for a new exam",
      ],
      correctIndex: 1,
      explanation:
        "Producers must proactively report address/business location changes — failing to do so is itself a violation under Idaho law, independent of any other infraction.",
    },
    {
      question: "Misleading a client about the comparative benefits of a new policy versus their existing one is:",
      options: ["Rebating", "Twisting", "Subrogation", "Coinsurance"],
      correctIndex: 1,
      explanation:
        "This is twisting by definition — distorting the comparison between old and new coverage to induce a replacement. Subrogation and coinsurance are unrelated policy-provision concepts.",
    },
    {
      question: "Idaho continuing education requirements for producers are established under:",
      options: ["41-1013 and IDAPA 18.06.04", "41-1305", "41-3603", "6-802"],
      correctIndex: 0,
      explanation:
        "41-1013 (statute) and IDAPA 18.06.04 (the implementing administrative rule) together set Idaho's CE requirements — the other citations relate to twisting, the Guaranty Association, and comparative negligence respectively.",
    },
  ],
  "pc-regulation-idaho-pc": [
    {
      question: "A binder under Idaho Code 41-1823 provides:",
      options: [
        "No coverage until the formal policy is issued",
        "Immediate, temporary coverage while the policy is being prepared",
        "Coverage only for commercial lines",
        "A discount on the eventual premium",
      ],
      correctIndex: 1,
      explanation:
        "A binder is enforceable coverage starting immediately, even before the formal policy document exists — it can even be oral, bridging the gap while the policy is being written up.",
    },
    {
      question: "The Idaho Property and Casualty Guaranty Association Act (41-3603, 3606, 3607) protects policyholders when:",
      options: [
        "Their claim is denied for a covered loss",
        "Their insurer becomes insolvent",
        "They miss a premium payment",
        "They move out of state",
      ],
      correctIndex: 1,
      explanation:
        "The Guaranty Association exists specifically to pay covered claims when the INSURER itself goes insolvent — it doesn't second-guess a solvent insurer's claim decisions or cover unrelated lapses.",
    },
    {
      question: "Idaho P&C insurers must file their rates with the Department of Insurance under:",
      options: ["41-1401, 1402, 1405", "41-2515", "6-802", "41-3603"],
      correctIndex: 0,
      explanation:
        "41-1401/1402/1405 are Idaho's rate-filing statutes, requiring rates to be filed and not be excessive, inadequate, or unfairly discriminatory. The other citations cover mature drivers, negligence, and the Guaranty Association.",
    },
    {
      question: "Idaho follows which negligence standard under Idaho Code 6-802?",
      options: [
        "Pure contributory negligence (any fault bars recovery)",
        "Comparative negligence (fault reduces, but doesn't bar, recovery)",
        "No-fault negligence",
        "Strict liability only",
      ],
      correctIndex: 1,
      explanation:
        "Idaho is a comparative negligence state — a partially at-fault claimant can still recover damages, just reduced by their percentage of fault. This is more forgiving than pure contributory negligence states.",
    },
    {
      question: "The National Flood Insurance Program (NFIP), referenced in Idaho Bulletin 07-1, is administered:",
      options: [
        "Entirely by the State of Idaho",
        "As a federal program through participating private insurers",
        "Only through the assigned risk plan",
        "By the Idaho P&C Guaranty Association",
      ],
      correctIndex: 1,
      explanation:
        "NFIP is a FEDERAL program — Idaho doesn't set flood rates the way it regulates standard P&C rates; private insurers participate in selling and servicing federally-backed flood policies.",
    },
    {
      question: "Idaho's financial responsibility law (Title 41-2510; Title 49) requires drivers to:",
      options: [
        "Carry collision coverage only",
        "Demonstrate ability to pay for damages they cause, usually via liability insurance",
        "Carry comprehensive coverage only",
        "Pass an annual driving test",
      ],
      correctIndex: 1,
      explanation:
        "Financial responsibility is about proving you CAN pay for damages you cause — liability insurance is the usual method, but Idaho also allows a bond or cash deposit as alternatives.",
    },
    {
      question: "Uninsured/underinsured motorist coverage in Idaho (41-2502, 2504) protects a driver when:",
      options: [
        "They are at fault in an accident",
        "The at-fault party has no insurance or not enough",
        "Their vehicle is stolen",
        "They drive a non-owned vehicle",
      ],
      correctIndex: 1,
      explanation:
        "UM/UIM exists for exactly one scenario: the AT-FAULT driver lacks insurance, or doesn't have enough to cover your damages — it has nothing to do with your own fault, theft, or vehicle ownership status.",
    },
    {
      question: "Idaho's assigned risk plan (41-1441, 2508(4)) exists for:",
      options: [
        "Drivers who cannot obtain coverage in the standard market",
        "Insurers seeking a rate increase",
        "Producers who lost their license",
        "Claims adjusters only",
      ],
      correctIndex: 0,
      explanation:
        "The assigned risk plan is a safety net for drivers the standard market won't insure — they're assigned to an insurer who must accept them, ensuring even high-risk drivers can obtain required coverage.",
    },
    {
      question: "A countersignature requirement (41-337, 338, 1023) in Idaho means:",
      options: [
        "No signature is required on any policy",
        "Certain policies must be signed by a licensed resident agent",
        "Only the insured needs to sign",
        "Only electronic signatures are valid",
      ],
      correctIndex: 1,
      explanation:
        "Countersignature laws require a licensed RESIDENT agent's signature on certain policies — a holdover rule ensuring a locally licensed producer is actually involved in the transaction.",
    },
    {
      question: "Idaho's standard fire policy provisions (41-1842, 2401) establish:",
      options: [
        "The minimum baseline coverage form for Idaho fire insurance",
        "A federal flood coverage mandate",
        "The Guaranty Association assessment rate",
        "The mature driver discount",
      ],
      correctIndex: 0,
      explanation:
        "These sections set the minimum standard fire coverage form that Idaho fire insurance policies must meet — insurers can offer more, but never less, than this baseline.",
    },
  ],
};
