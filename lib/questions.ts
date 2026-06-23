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
  ],
};
