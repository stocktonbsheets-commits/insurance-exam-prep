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
