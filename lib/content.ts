export type Module = {
  slug: string;
  track: "life-health" | "property-casualty";
  title: string;
  summary: string;
  points: string[];
  examTraps: string[];
};

export const modules: Module[] = [
  {
    slug: "lh-life-basics",
    track: "life-health",
    title: "Life Insurance Basics",
    summary: "Core life insurance concepts: policy types, parties, and terminology.",
    points: [
      "Term life covers a fixed period with no cash value; whole life is permanent with cash value.",
      "Key parties: owner, insured, beneficiary, insurer.",
      "Universal life allows flexible premiums and adjustable death benefits.",
      "Premiums are based on age, health, occupation, and risk class at issue.",
      "Free look period: lets a policyholder cancel for a full refund within a set window (commonly 10 days).",
    ],
    examTraps: [
      "Don't confuse \"owner\" with \"insured\" — they're often the same person, but the exam tests the case where they're different (e.g. a parent owns a policy on a child).",
      "Term life is the cheapest because it has no savings component — questions often disguise this as \"why would someone choose term over whole life?\"",
      "Universal life is NOT the same as variable life: universal life has a fixed/declared interest rate on cash value, variable life ties cash value to investment subaccounts.",
    ],
  },
  {
    slug: "lh-policy-provisions",
    track: "life-health",
    title: "Policy Provisions, Riders & Options",
    summary: "Standard provisions and common riders that modify a policy.",
    points: [
      "Incontestability clause: insurer can't contest a policy after 2 years except for nonpayment.",
      "Grace period: typically 30-31 days to pay an overdue premium before lapse.",
      "Waiver of premium rider: waives premiums if insured becomes disabled.",
      "Accelerated death benefit: pays part of the death benefit early for terminal illness.",
      "Nonforfeiture options: cash surrender, reduced paid-up, or extended term.",
    ],
    examTraps: [
      "Incontestability is 2 years from policy issue, not from each premium payment — a common wrong-answer trap is \"2 years from the last reinstatement.\"",
      "Waiver of premium waives the premium, it does NOT pay the death benefit or cash value — don't confuse it with disability income riders.",
      "Reduced paid-up keeps the SAME maturity date with a SMALLER face amount; extended term keeps the SAME face amount for a LIMITED time — these are commonly swapped in distractor answers.",
    ],
  },
  {
    slug: "lh-health-basics",
    track: "life-health",
    title: "Health Insurance Basics",
    summary: "Core health insurance concepts and plan types.",
    points: [
      "HMOs require a primary care physician and referrals; PPOs allow more provider flexibility.",
      "Deductible: amount paid out-of-pocket before insurance starts paying.",
      "Coinsurance: percentage split of costs between insured and insurer after the deductible.",
      "Group health plans are typically guaranteed issue, unlike most individual plans.",
      "COBRA allows continuation of group coverage after qualifying events like job loss.",
    ],
    examTraps: [
      "Deductible is paid first, coinsurance applies AFTER the deductible — questions like to test the order of operations with a sample claim amount.",
      "COBRA continues the SAME group coverage temporarily at the employee's own cost — it is not a new or cheaper plan.",
      "HMO referral requirements are a tradeoff for lower premiums; don't assume HMO = worse coverage, just less provider flexibility.",
    ],
  },
  {
    slug: "lh-regulation",
    track: "life-health",
    title: "Idaho Laws & Regulations (Life & Health)",
    summary: "State-specific rules tested on the Idaho L&H exam.",
    points: [
      "Producers must complete state-approved pre-licensing education and pass the exam before applying for a license.",
      "Idaho requires continuing education hours each renewal period to keep a license active.",
      "Unfair claims practices and misrepresentation are prohibited under Idaho insurance code.",
      "Replacement of an existing life or health policy requires specific disclosure to the policyholder.",
      "Producers must report certain administrative actions and criminal convictions to the Idaho Department of Insurance.",
    ],
    examTraps: [
      "Replacement disclosure rules apply even if the new policy is from the SAME insurer — the trigger is replacing a policy, not switching companies.",
      "Twisting and rebating are both prohibited but are different acts — twisting misrepresents to induce replacement, rebating gives something of value to induce a sale.",
      "Continuing education is about KEEPING a license active at renewal, not about getting licensed the first time — don't mix it up with pre-licensing education.",
    ],
  },
  {
    slug: "pc-property-basics",
    track: "property-casualty",
    title: "Property Insurance Basics",
    summary: "Core property insurance concepts and the HO policy forms.",
    points: [
      "Named perils policies cover only listed risks; open perils (all-risk) cover everything except exclusions.",
      "HO-3 is the most common homeowners form: open perils on the dwelling, named perils on personal property.",
      "Actual cash value = replacement cost minus depreciation.",
      "Coinsurance clause in property policies penalizes underinsuring at claim time.",
      "Renters insurance (HO-4) covers personal property and liability but not the building structure.",
    ],
    examTraps: [
      "Don't confuse \"open perils\" with \"no exclusions\" — open perils still has exclusions, it just covers everything EXCEPT what's excluded, the opposite structure from named perils.",
      "The coinsurance penalty formula (amount of insurance carried ÷ amount required) × loss = the questions often test this exact calculation with underinsured examples.",
      "HO-6 (condo) and HO-4 (renters) are often swapped in distractors — HO-6 owner insures interior/improvements they're responsible for, HO-4 renter insures only contents, neither insures the building shell.",
    ],
  },
  {
    slug: "pc-casualty-basics",
    track: "property-casualty",
    title: "Casualty & Auto Insurance Basics",
    summary: "Liability concepts and personal auto policy structure.",
    points: [
      "Liability coverage pays for bodily injury/property damage you cause to others.",
      "Personal Auto Policy (PAP) includes liability, medical payments, uninsured motorist, and physical damage coverages.",
      "Comprehensive covers non-collision damage (theft, weather); collision covers crash damage regardless of fault.",
      "Workers' compensation is a no-fault system covering injured employees regardless of liability.",
      "Umbrella policies provide excess liability coverage above underlying auto/home limits.",
    ],
    examTraps: [
      "Collision pays regardless of fault on YOUR vehicle; liability pays for damage you cause to OTHERS — exam loves swapping these two in a claim scenario.",
      "Workers' comp being \"no-fault\" means the employee gives up the right to sue the employer in most cases — that tradeoff is often tested directly.",
      "Umbrella coverage only kicks in AFTER underlying policy limits are exhausted — it does not replace the need for primary auto/home liability coverage.",
    ],
  },
  {
    slug: "lh-annuities",
    track: "life-health",
    title: "Annuities",
    summary: "How annuities work, payout options, and tax treatment.",
    points: [
      "An annuity converts a sum of money into a stream of income, often for retirement.",
      "Accumulation phase: premiums grow tax-deferred. Annuitization (payout) phase: insurer pays the annuitant.",
      "Fixed annuities guarantee a set rate; variable annuities' returns depend on underlying investments.",
      "Life annuity payout options can be straight life, life with period certain, or joint and survivor.",
      "Surrender charges apply if the annuity is cashed out early, within the surrender period.",
      "Annuities are not life insurance and do not pay a death benefit in the same way; they're designed to pay out income, not protect against premature death.",
      "Immediate annuities begin payouts shortly after a lump-sum purchase; deferred annuities accumulate first.",
      "Qualified annuities are funded with pre-tax dollars (e.g., inside a retirement plan); nonqualified use after-tax dollars.",
    ],
    examTraps: [
      "An annuity protects against OUTLIVING your money (longevity risk); life insurance protects against dying TOO SOON — these are opposite risks and the exam tests this contrast directly.",
      "\"Straight life\" payout stops completely at death with nothing left for heirs, even if the annuitant dies after one payment — don't assume any leftover funds pass on.",
      "Only the earnings/growth portion of a nonqualified annuity is taxed on withdrawal (since it was funded with after-tax dollars) — qualified annuity withdrawals are fully taxable since none of it was taxed going in.",
    ],
  },
  {
    slug: "lh-medicare-ltc",
    track: "life-health",
    title: "Medicare, Medicaid & Long-Term Care",
    summary: "Government health programs and long-term care coverage basics.",
    points: [
      "Medicare Part A covers hospital costs; Part B covers outpatient/medical costs.",
      "Medicare Part C (Medicare Advantage) is provided through private insurers as an alternative to Original Medicare.",
      "Medicare Part D covers prescription drugs.",
      "Medicare Supplement (Medigap) policies help cover gaps like deductibles and coinsurance under Original Medicare.",
      "Medicaid is a joint federal/state program based on financial need, not age.",
      "Long-term care insurance covers services like nursing home or in-home care not covered by standard health insurance or Medicare.",
      "Most long-term care policies pay benefits once the insured can't perform a set number of Activities of Daily Living (ADLs).",
      "Medicare generally does not cover long-term custodial care, which is why LTC insurance exists as a separate product.",
    ],
    examTraps: [
      "Memorize Parts by letter: A = hospital (\"A\" for admitted), B = doctor/outpatient, C = Advantage (private alternative), D = Drugs — exam questions are often just \"which part covers X.\"",
      "Medicaid is needs-based (income/assets), Medicare is largely age/disability-based — don't mix up the eligibility trigger.",
      "Long-term care is about ADLs (bathing, dressing, eating, toileting, transferring, continence), not about a specific diagnosis — benefits trigger on functional inability, not illness type.",
    ],
  },
  {
    slug: "pc-commercial-liability",
    track: "property-casualty",
    title: "Commercial Property & General Liability",
    summary: "Core commercial lines concepts beyond personal auto/home.",
    points: [
      "Commercial General Liability (CGL) covers a business's liability for bodily injury and property damage to third parties.",
      "Businessowners Policy (BOP) bundles property and liability coverage for small/medium businesses.",
      "Commercial property policies can be written on a named-perils or open-perils (special form) basis, similar to personal lines.",
      "Business income (interruption) coverage replaces lost income and continuing expenses while a business is shut down by a covered loss.",
      "Products-completed operations coverage addresses liability arising from products sold or work performed after completion.",
      "Additional insured endorsements extend liability coverage to parties beyond the named insured, often required in contracts.",
      "Claims-made liability policies cover claims made during the policy period regardless of when the incident occurred, unlike occurrence policies.",
    ],
    examTraps: [
      "Claims-made vs. occurrence is a classic trap: occurrence covers based on WHEN THE INCIDENT HAPPENED, claims-made covers based on WHEN THE CLAIM IS FILED — a claims-made policy can leave a gap if it lapses before an old incident is reported.",
      "A BOP bundles property + liability for small/medium businesses — it does NOT include workers' compensation, which is always a separate policy.",
      "\"Additional insured\" extends coverage to someone else under YOUR policy (e.g. a landlord on a tenant's policy) — it's not the same as adding a co-owner to the named insured.",
    ],
  },
  {
    slug: "pc-bonds",
    track: "property-casualty",
    title: "Surety & Fidelity Bonds",
    summary: "How bonds differ from insurance and common bond types.",
    points: [
      "A surety bond involves three parties: principal (who must perform), obligee (who is protected), and surety (who guarantees performance).",
      "Unlike insurance, a surety bond is not designed to absorb loss for the principal — the principal must reimburse the surety if a claim is paid.",
      "Fidelity bonds protect an employer against employee dishonesty, such as theft or embezzlement.",
      "License and permit bonds guarantee a business will comply with laws/regulations tied to its license.",
      "Contract bonds (bid, performance, payment bonds) guarantee a contractor will fulfill construction contract obligations.",
    ],
    examTraps: [
      "The biggest trap: a surety bond is NOT insurance for the principal — the surety expects to be repaid if it pays a claim, since the bond guarantees the principal's performance to a third party (the obligee).",
      "Don't confuse fidelity bonds (protect against YOUR OWN employees' dishonesty) with surety bonds (guarantee performance to an outside party) — different purpose entirely.",
      "Three-party structure to memorize: principal performs, obligee is protected, surety guarantees — exam questions often describe a scenario and ask you to identify which party is which.",
    ],
  },
  {
    slug: "pc-regulation",
    track: "property-casualty",
    title: "Idaho Laws & Regulations (Property & Casualty)",
    summary: "State-specific rules tested on the Idaho P&C exam.",
    points: [
      "Idaho requires producers to hold a resident license and complete pre-licensing education for each line of authority.",
      "Twisting (inducing a policy replacement through misrepresentation) is prohibited.",
      "Producers must maintain errors & omissions awareness and report address/name changes to the Department of Insurance.",
      "Cancellation and nonrenewal of policies must follow Idaho's required notice periods.",
      "Rebating (giving anything of value not stated in the policy to induce a sale) is generally illegal in Idaho.",
    ],
    examTraps: [
      "Resident vs. nonresident licensing requirements differ — a resident license is for producers who live and primarily transact business in Idaho.",
      "Nonrenewal notice requirements exist to protect the policyholder from being dropped without enough time to find new coverage — exam questions often test the minimum notice period concept, not always quizzing the policy itself.",
      "Errors & omissions (E&O) coverage protects the PRODUCER from claims of professional negligence — don't confuse it with a client's own liability coverage.",
    ],
  },
];

export const tracks = {
  "life-health": "Life & Health",
  "property-casualty": "Property & Casualty",
} as const;
