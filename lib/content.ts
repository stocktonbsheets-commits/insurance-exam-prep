export type Module = {
  slug: string;
  track: "life-health" | "property-casualty";
  title: string;
  summary: string;
  points: string[];
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
  },
];

export const tracks = {
  "life-health": "Life & Health",
  "property-casualty": "Property & Casualty",
} as const;
