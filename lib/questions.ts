export type Question = {
  question: string;
  options: string[];
  correctIndex: number;
};

export const questionsBySlug: Record<string, Question[]> = {
  "lh-life-basics": [
    {
      question: "Which type of life insurance has no cash value?",
      options: ["Whole life", "Universal life", "Term life", "Variable life"],
      correctIndex: 2,
    },
    {
      question: "Who is the person whose life is covered by a life insurance policy?",
      options: ["The owner", "The insured", "The beneficiary", "The producer"],
      correctIndex: 1,
    },
    {
      question: "What is the typical length of the free look period?",
      options: ["3 days", "10 days", "30 days", "60 days"],
      correctIndex: 1,
    },
    {
      question: "Which policy type allows flexible premiums and an adjustable death benefit?",
      options: ["Term life", "Whole life", "Universal life", "Credit life"],
      correctIndex: 2,
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
    },
    {
      question: "Who receives the death benefit when the insured dies?",
      options: ["The owner", "The insurer", "The beneficiary", "The producer"],
      correctIndex: 2,
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
    },
    {
      question: "Which party can change the beneficiary on a life policy (assuming a revocable designation)?",
      options: ["The insured only", "The beneficiary", "The owner", "The insurer"],
      correctIndex: 2,
    },
  ],
  "lh-policy-provisions": [
    {
      question: "After how many years can an insurer no longer contest a life policy for misstatements (incontestability clause)?",
      options: ["1 year", "2 years", "5 years", "10 years"],
      correctIndex: 1,
    },
    {
      question: "A rider that waives premiums if the insured becomes disabled is called:",
      options: ["Accelerated death benefit", "Waiver of premium", "Guaranteed insurability", "Accidental death benefit"],
      correctIndex: 1,
    },
    {
      question: "Which nonforfeiture option converts cash value into a smaller, fully paid-up policy?",
      options: ["Extended term", "Cash surrender", "Reduced paid-up", "Automatic premium loan"],
      correctIndex: 2,
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
    },
    {
      question: "Which provision prevents an insurer from denying a claim years later over an honest mistake on the application?",
      options: ["Grace period", "Incontestability clause", "Free look", "Reinstatement"],
      correctIndex: 1,
    },
  ],
  "lh-health-basics": [
    {
      question: "Which plan type generally requires a primary care physician and referrals to see specialists?",
      options: ["PPO", "HMO", "Indemnity plan", "HSA-only plan"],
      correctIndex: 1,
    },
    {
      question: "The amount paid out-of-pocket before insurance starts paying is the:",
      options: ["Premium", "Deductible", "Coinsurance", "Copay"],
      correctIndex: 1,
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
    },
    {
      question: "Which of these is a qualifying event that can trigger COBRA continuation coverage?",
      options: ["A raise at work", "Loss of a job", "Turning 18", "Moving to a new state"],
      correctIndex: 1,
    },
  ],
  "lh-regulation": [
    {
      question: "What must an Idaho producer do before applying for a life/health license?",
      options: [
        "Pass a background check only",
        "Complete state-approved pre-licensing education and pass the exam",
        "Work under a sponsoring agent for 1 year",
        "Nothing, licenses are automatic",
      ],
      correctIndex: 1,
    },
    {
      question: "What is required to keep an Idaho producer license active at renewal?",
      options: ["Continuing education hours", "A new background check every year", "Re-taking the licensing exam", "Nothing is required"],
      correctIndex: 0,
    },
    {
      question: "Misrepresenting policy terms to make a sale is an example of:",
      options: ["Twisting", "An unfair claims practice", "Rebating", "Subrogation"],
      correctIndex: 1,
    },
    {
      question: "When replacing an existing life or health policy, a producer must:",
      options: [
        "Provide specific disclosure to the policyholder",
        "Avoid telling the client anything about the old policy",
        "Wait 90 days before submitting the new application",
        "Get approval from the old insurer",
      ],
      correctIndex: 0,
    },
    {
      question: "Which of the following must an Idaho producer report to the Department of Insurance?",
      options: [
        "A change in favorite restaurant",
        "Certain administrative actions and criminal convictions",
        "Annual income",
        "Marital status changes",
      ],
      correctIndex: 1,
    },
    {
      question: "An insurance producer license in Idaho is issued by the:",
      options: [
        "Idaho Department of Insurance",
        "National Association of Insurance Commissioners",
        "Local county clerk",
        "Federal Trade Commission",
      ],
      correctIndex: 0,
    },
    {
      question: "Unfair claims practices laws are designed to protect:",
      options: ["Insurers from fraud", "Policyholders from bad-faith claim handling", "Producers from chargebacks", "Reinsurers from loss"],
      correctIndex: 1,
    },
    {
      question: "Continuing education requirements exist primarily to:",
      options: [
        "Generate fees for the state",
        "Keep producers current on laws and product knowledge",
        "Replace the licensing exam",
        "Limit the number of producers in the state",
      ],
      correctIndex: 1,
    },
  ],
  "pc-property-basics": [
    {
      question: "Which homeowners form covers the dwelling on an open-perils basis and personal property on a named-perils basis?",
      options: ["HO-2", "HO-3", "HO-4", "HO-6"],
      correctIndex: 1,
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
    },
    {
      question: "The coinsurance clause in a property policy penalizes:",
      options: ["Overinsuring", "Underinsuring", "Multiple insurers", "Filing too many claims"],
      correctIndex: 1,
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
    },
    {
      question: "Which homeowners form is typically used for condo unit owners?",
      options: ["HO-3", "HO-4", "HO-6", "HO-8"],
      correctIndex: 2,
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
    },
  ],
  "pc-casualty-basics": [
    {
      question: "Which auto coverage pays for crash damage regardless of fault?",
      options: ["Comprehensive", "Collision", "Liability", "Medical payments"],
      correctIndex: 1,
    },
    {
      question: "Workers' compensation is best described as:",
      options: ["A fault-based system", "A no-fault system covering injured employees", "Optional in all states", "Only for office workers"],
      correctIndex: 1,
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
    },
    {
      question: "Which Personal Auto Policy coverage pays medical bills for you and passengers regardless of fault?",
      options: ["Liability", "Medical payments", "Comprehensive", "Uninsured motorist property damage"],
      correctIndex: 1,
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
    },
  ],
  "pc-regulation": [
    {
      question: "Inducing a client to replace a policy through misrepresentation is known as:",
      options: ["Rebating", "Twisting", "Coinsurance", "Subrogation"],
      correctIndex: 1,
    },
    {
      question: "Giving a client something of value not stated in the policy to induce a sale is called:",
      options: ["Twisting", "Rebating", "Underwriting", "Endorsing"],
      correctIndex: 1,
    },
    {
      question: "Idaho producers must complete pre-licensing education for:",
      options: [
        "Each line of authority they want to sell",
        "Only the first license they obtain",
        "Only commercial lines",
        "No lines, it's optional",
      ],
      correctIndex: 0,
    },
    {
      question: "Cancellation and nonrenewal of policies in Idaho must follow:",
      options: [
        "No specific requirements",
        "Required notice periods set by Idaho law",
        "Whatever the insurer prefers",
        "Federal notice requirements only",
      ],
      correctIndex: 1,
    },
    {
      question: "Producers must report which of the following to the Idaho Department of Insurance?",
      options: [
        "Favorite product line",
        "Address and name changes",
        "Personal investment portfolio",
        "Client referral sources",
      ],
      correctIndex: 1,
    },
    {
      question: "Errors & omissions awareness is important for producers because it relates to:",
      options: [
        "Marketing strategy",
        "Protection against claims of professional negligence",
        "Tax filing status",
        "Office lease agreements",
      ],
      correctIndex: 1,
    },
    {
      question: "A resident producer license in Idaho is required for:",
      options: [
        "Selling insurance only out of state",
        "Selling insurance as a resident of Idaho",
        "Only group health products",
        "Only commercial property products",
      ],
      correctIndex: 1,
    },
    {
      question: "Rebating laws in Idaho generally prohibit:",
      options: [
        "Offering the standard policy terms",
        "Giving anything of value not stated in the policy to induce a sale",
        "Explaining coverage options to a client",
        "Comparing quotes from multiple insurers",
      ],
      correctIndex: 1,
    },
  ],
};
