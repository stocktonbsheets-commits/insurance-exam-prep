export type Concept = {
  title: string;
  explanation: string;
  examFocus: string;
};

export function videoSearchUrl(query: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

export type Module = {
  slug: string;
  track: "life-health" | "property-casualty";
  title: string;
  summary: string;
  concepts: Concept[];
  examTraps: string[];
  videoSearch: string;
  free?: boolean;
};

export const modules: Module[] = [
  {
    slug: "lh-life-basics",
    track: "life-health",
    title: "Life Insurance Basics",
    free: true,
    summary: "Core life insurance concepts: policy types, parties, and terminology.",
    videoSearch: "life insurance basics term whole universal explained",
    concepts: [
      {
        title: "Term vs. Whole vs. Universal Life",
        explanation:
          "Term life insurance covers you for a fixed period — 10, 20, or 30 years, for example — and pays a death benefit only if you die during that term. It builds no cash value, which is why it's the cheapest form of life insurance for a given death benefit. Whole life is permanent coverage: it lasts your entire life (as long as premiums are paid) and builds guaranteed cash value you can borrow against or surrender for cash. Universal life is also permanent, but it's more flexible — you can adjust your premium payments and death benefit within limits, and the cash value grows based on a declared interest rate set by the insurer, which can change over time.",
        examFocus:
          "Know the exact tradeoff: term = cheap/no cash value/temporary; whole = guaranteed cash value/permanent; universal = flexible premium and death benefit. Expect a direct \"which type is X\" question.",
      },
      {
        title: "The Parties to a Policy",
        explanation:
          "Every life insurance policy involves up to four distinct roles, and the exam frequently tests whether you can tell them apart. The owner is the person who controls the policy — they pay premiums, can change beneficiaries, and can cancel or borrow against it. The insured is the person whose life is covered; if they die, the policy pays out. The beneficiary is who receives the death benefit. The insurer is the company that issues the policy and bears the risk. In most personal policies the owner and insured are the same person, but they don't have to be — a parent can own a policy insuring a child, or a business can own a policy insuring a key employee.",
        examFocus:
          "Memorize: owner controls, insured is covered, beneficiary collects, insurer pays. Be ready for a scenario where owner ≠ insured.",
      },
      {
        title: "How Premiums Are Determined",
        explanation:
          "Insurers price a policy based on the insured's risk profile at the time of application. Age is the biggest factor — younger applicants pay less because they statistically have more years before death. Health history, current medical conditions, and family history of serious illness all factor into underwriting. Occupation and hobbies matter too: a commercial pilot or a person who scuba dives professionally may pay more due to elevated risk. Insurers place applicants into risk classes (such as preferred, standard, or substandard) and price premiums accordingly. Once a policy is issued, the insurer generally cannot reclassify or raise rates due to a later change in health for the same policy.",
        examFocus:
          "Key fact tested: a worsening health condition AFTER issue cannot raise that policy's premium — rates are locked in at issue based on the original risk class.",
      },
      {
        title: "The Free Look Period",
        explanation:
          "After a life insurance policy is delivered, the policyholder has a free look period — commonly 10 days, though it can vary — during which they can review the contract and cancel it for any reason, receiving a full refund of any premium paid. This consumer protection exists because life insurance is a complex, long-term financial commitment, and regulators want buyers to have a real chance to back out after seeing the actual contract terms (not just what an agent described verbally). If the policy is cancelled within this window, it's treated as if it never existed.",
        examFocus:
          "Remember the number (commonly 10 days) and that the refund is FULL — this is a frequent fill-in-the-blank style question.",
      },
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
    videoSearch: "life insurance policy riders incontestability nonforfeiture explained",
    concepts: [
      {
        title: "The Incontestability Clause",
        explanation:
          "Once a life insurance policy has been in force for a set period — typically two years — the insurer can no longer contest or void the policy based on misstatements made in the original application, even if those misstatements were significant. The exception is nonpayment of premium, which can always void a policy regardless of how long it's been active. This clause protects beneficiaries from having a claim denied years later over an honest mistake or omission on an old application, and it pushes insurers to do thorough underwriting up front rather than investigating only after a claim is filed.",
        examFocus:
          "Memorize the exact number: 2 years from policy issue. The one exception that always applies regardless of time: nonpayment of premium.",
      },
      {
        title: "Grace Period and Reinstatement",
        explanation:
          "If a premium payment is missed, the policy doesn't lapse immediately. A grace period — usually 30 to 31 days — gives the policyholder time to pay the overdue premium and keep the policy in force without a new application. If the insured dies during the grace period, the policy still pays out, minus the unpaid premium. If the grace period expires without payment, the policy lapses, but many policies allow reinstatement within a window afterward (often up to several years), usually requiring proof of insurability and payment of back premiums with interest.",
        examFocus:
          "Two numbers to know: grace period ≈ 30-31 days, and that a death DURING the grace period still pays out (minus the owed premium).",
      },
      {
        title: "Common Riders",
        explanation:
          "Riders are optional add-ons that modify a base policy's coverage. A waiver of premium rider keeps the policy in force without requiring premium payments if the insured becomes totally disabled, but it does not pay any death benefit or cash value itself — it simply waives the premium obligation. An accelerated death benefit rider lets the insured access part of the death benefit while still alive if diagnosed with a terminal illness, helping cover end-of-life costs. A guaranteed insurability rider allows the policyholder to buy additional coverage at specific future dates or life events (like marriage or having a child) without new medical underwriting.",
        examFocus:
          "Match each rider to its ONE trigger: waiver of premium → disability, accelerated death benefit → terminal illness, guaranteed insurability → life events, no new underwriting.",
      },
      {
        title: "Nonforfeiture Options",
        explanation:
          "When a whole life policy with cash value lapses or the owner stops paying premiums, the accumulated cash value isn't simply lost — nonforfeiture laws require insurers to offer options. Cash surrender lets the owner take the cash value as a lump sum, ending the policy. Reduced paid-up insurance converts the cash value into a smaller death benefit that requires no further premiums, keeping the same type of permanent coverage at a reduced face amount. Extended term insurance uses the cash value to purchase term coverage at the original face amount, but only for a limited period calculated based on the cash value available.",
        examFocus:
          "Pair each option with what stays the SAME: reduced paid-up keeps the policy permanent (smaller face); extended term keeps the original face amount (limited time).",
      },
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
    videoSearch: "health insurance basics HMO PPO deductible coinsurance explained",
    concepts: [
      {
        title: "HMO vs. PPO",
        explanation:
          "Health Maintenance Organizations (HMOs) require members to choose a primary care physician (PCP) who coordinates all care and must provide referrals before the member can see specialists. In exchange for this structure, HMOs typically have lower premiums and lower out-of-pocket costs, but little to no coverage for out-of-network care except emergencies. Preferred Provider Organizations (PPOs) give members more freedom — they can see specialists without a referral and can go out-of-network, though usually at a higher cost. PPOs generally cost more in premiums than HMOs because of this added flexibility.",
        examFocus:
          "One-line test: HMO = PCP + referral required, cheaper. PPO = no referral, out-of-network allowed, pricier.",
      },
      {
        title: "Deductibles, Coinsurance, and Copays",
        explanation:
          "These three terms describe different pieces of how cost-sharing works. A deductible is the amount the insured must pay out of pocket before the insurer starts paying for covered services in a plan year. Once the deductible is met, coinsurance kicks in — a percentage split of costs between the insured and insurer (for example, the plan pays 80% and the insured pays 20% until they hit their out-of-pocket maximum). A copay is different from both: it's a fixed dollar amount paid at the time of a specific service (like $30 for a doctor visit), often regardless of whether the deductible has been met.",
        examFocus:
          "Order matters: deductible paid FIRST, then coinsurance applies. Be ready to calculate a payout given a deductible, coinsurance %, and a claim amount.",
      },
      {
        title: "Group vs. Individual Health Coverage",
        explanation:
          "Group health insurance is purchased by an employer (or another organization) and offered to its members, typically as a benefit of employment. Because the risk is spread across a large group rather than underwritten person-by-person, group plans are usually guaranteed issue — meaning no one can be denied coverage based on health status. Individual health insurance, purchased directly by a person rather than through an employer, may involve more individual underwriting depending on the market and regulations in effect, and tends to have different pricing and benefit structures than group coverage.",
        examFocus:
          "Key term: group health is usually GUARANTEED ISSUE because risk is pooled across many people, not underwritten individually.",
      },
      {
        title: "COBRA Continuation Coverage",
        explanation:
          "COBRA (the Consolidated Omnibus Budget Reconciliation Act) allows employees and their dependents to continue their exact same group health coverage for a limited time (often up to 18 months) after a qualifying event such as job loss, reduction in hours, or divorce from the covered employee. The key thing to remember is that COBRA isn't a new or cheaper plan — it's the same coverage the person already had, but now they pay the full premium themselves (including the portion the employer used to cover), which is why COBRA coverage is often expensive compared to what the person paid while employed.",
        examFocus:
          "COBRA = SAME plan, FULL premium now paid by the former employee. It is not new coverage and not subsidized.",
      },
    ],
    examTraps: [
      "Deductible is paid first, coinsurance applies AFTER the deductible — questions like to test the order of operations with a sample claim amount.",
      "COBRA continues the SAME group coverage temporarily at the employee's own cost — it is not a new or cheaper plan.",
      "HMO referral requirements are a tradeoff for lower premiums; don't assume HMO = worse coverage, just less provider flexibility.",
    ],
  },
  {
    slug: "lh-underwriting-application",
    track: "life-health",
    title: "Life Insurance Application, Underwriting & Contract Law",
    summary: "How an application becomes a policy — underwriting, risk classification, and the contract law principles unique to insurance.",
    videoSearch: "life insurance underwriting process application contract law explained",
    concepts: [
      {
        title: "Completing the Application",
        explanation:
          "The application is the foundation of the entire insurance contract — it's where the insurer gathers the information used to decide whether to issue a policy and at what price. The application requires specific signatures (the applicant and, if different, the proposed insured), and any changes to it must be initialed by the applicant, not just altered by the agent. An incomplete application can delay or derail underwriting, and answers on it are treated as representations — statements believed true to the best of the applicant's knowledge — rather than warranties (which would need to be literally, exactly true).",
        examFocus:
          "Application answers are REPRESENTATIONS, not warranties — they need to be substantially true and made in good faith, not perfectly precise. This distinction matters when an insurer later tries to contest a claim.",
      },
      {
        title: "Insurable Interest and Underwriting Information Sources",
        explanation:
          "Insurable interest means the policy owner would suffer a genuine financial or emotional loss if the insured died — required at the time the policy is applied for to prevent insurance from becoming a wagering contract on someone else's life. Underwriters gather information beyond the application itself: medical information and consumer reports, governed in part by the Fair Credit Reporting Act (FCRA), which gives applicants the right to know what's in their file and to dispute inaccuracies. Based on all this information, underwriters sort applicants into risk classifications (preferred, standard, substandard) that determine the premium charged.",
        examFocus:
          "Insurable interest must exist AT THE TIME OF APPLICATION for life insurance — unlike property insurance, it does not need to continue existing at the time of a claim/death.",
      },
      {
        title: "STOLI and Other Underwriting Red Flags",
        explanation:
          "Stranger/Investor-Owned Life Insurance (STOLI/IOLI) describes an arrangement where a policy is procured on someone's life specifically for an investor or stranger to profit from it, rather than for someone with a genuine insurable interest — these arrangements are generally illegal because they violate the insurable interest requirement and can incentivize harm to the insured. Underwriters are trained to watch for STOLI red flags, like premium financing arrangements set up by an unrelated investor at the time of application.",
        examFocus:
          "STOLI arrangements fail the insurable interest requirement at its core — a stranger or investor has no genuine stake in the insured's continued life, which is exactly why these arrangements are prohibited.",
      },
      {
        title: "Delivering the Policy and Contract Law Basics",
        explanation:
          "Once issued, a policy isn't fully in force until it's delivered to the policyholder and the producer has explained its provisions, riders, exclusions, and any rating (extra premium for elevated risk) — coverage generally begins once the policy is delivered, the first premium is paid, and the insured's health hasn't changed since the application. Every insurance contract also reflects specific contract law principles: it requires consideration (premium for promise), offer and acceptance, competent parties, and a legal purpose, plus unique characteristics — it's conditional (payment is conditioned on the insured's death), unilateral (only the insurer makes a binding promise), adhesion (the insurer writes it, the insured simply accepts or rejects), and aleatory (the value exchanged isn't equal — a small premium can lead to a large payout).",
        examFocus:
          "Memorize the four unique contract characteristics: conditional, unilateral, adhesion, aleatory. Exam questions often describe one of these features and ask which characteristic it demonstrates.",
      },
    ],
    examTraps: [
      "Application answers are representations (substantially true, good faith), not warranties (must be literally, exactly true) — a frequently tested distinction.",
      "Insurable interest for life insurance is required only AT THE TIME OF APPLICATION, not continuously through the insured's death — different from property insurance's ongoing requirement.",
      "STOLI/IOLI arrangements fail because the policy owner lacks genuine insurable interest — a stranger profiting from someone else's death is exactly what insurable interest rules prevent.",
      "The four unique insurance contract traits — conditional, unilateral, adhesion, aleatory — are commonly tested by describing the trait and asking you to name it.",
    ],
  },
  {
    slug: "lh-retirement-life-settlements",
    track: "life-health",
    title: "Retirement Planning, Life Settlements & Group Life Concepts",
    summary: "Third-party ownership, life settlements, group life, retirement plans, needs analysis, and the tax treatment of life insurance.",
    videoSearch: "life insurance retirement planning needs analysis tax treatment explained",
    concepts: [
      {
        title: "Third-Party Ownership and Life Settlements",
        explanation:
          "A life insurance policy's owner doesn't have to be the insured — third-party ownership is common, like a business owning a key person policy on an employee, or a parent owning a policy insuring a child. A life settlement lets a policy owner who no longer wants or can afford a policy sell it to a third party for a lump sum greater than the cash surrender value but less than the death benefit, rather than simply lapsing or surrendering it for less money.",
        examFocus:
          "A life settlement payout sits BETWEEN cash surrender value and the full death benefit — that gap is exactly why it's more attractive than a simple surrender for a policy owner who no longer needs the coverage.",
      },
      {
        title: "Group Life: Contributory vs. Noncontributory",
        explanation:
          "Group life plans are either contributory (employees pay part of the premium, typically requiring a minimum participation percentage like 75% of eligible employees to prevent adverse selection) or noncontributory (the employer pays the entire premium, which typically requires 100% participation since there's no cost barrier to joining). When a covered employee leaves the group, the conversion privilege generally lets them convert to an individual policy without proving insurability, within a limited window.",
        examFocus:
          "Contributory plans need a MINIMUM PARTICIPATION percentage (often 75%) to guard against adverse selection; noncontributory plans require 100% participation since the employer covers the full cost.",
      },
      {
        title: "Qualified vs. Nonqualified Retirement Plans",
        explanation:
          "Qualified retirement plans (like 401(k)s) meet IRS requirements for favorable tax treatment: contributions are typically tax-deductible (or pre-tax) and the funds grow tax-deferred, but the plan must follow strict rules about nondiscrimination and contribution limits. Nonqualified plans don't meet those IRS requirements and don't get the same favorable tax treatment up front, but they offer employers more flexibility — for example, the ability to provide enhanced benefits to select key employees without offering them to the entire workforce.",
        examFocus:
          "Qualified = IRS tax-favored, but must follow nondiscrimination rules covering all eligible employees. Nonqualified = no special tax break going in, but flexible enough to benefit select key employees only.",
      },
      {
        title: "Life Insurance Needs Analysis",
        explanation:
          "Needs analysis is the process of calculating how much life insurance a person or business should actually carry. Personal needs analysis considers income replacement for dependents, final expenses, debt payoff, and education funding. Business needs analysis includes key person coverage (protecting a business against the financial loss of losing a critical employee or owner) and buy-sell funding (using life insurance proceeds to fund a buyout of a deceased owner's interest in the business, so the remaining owners or the business itself can purchase that interest from the deceased's estate).",
        examFocus:
          "Key person coverage protects the BUSINESS from losing a critical person; buy-sell funding lets the REMAINING owners/business buy out a deceased owner's share — two different business uses, easy to conflate.",
      },
      {
        title: "Tax Treatment of Life Insurance",
        explanation:
          "Life insurance death benefits paid to a beneficiary are generally received income tax-free, one of the product's most significant advantages. Cash value growth inside a permanent policy is tax-deferred while it accumulates. Individual life insurance premiums are generally not tax-deductible. A Modified Endowment Contract (MEC) is a policy that's been overfunded relative to IRS limits, losing some favorable tax treatment on withdrawals (taxed on a last-in-first-out basis, with potential penalties for early withdrawal) even though the death benefit remains tax-free.",
        examFocus:
          "Death benefits = income tax-free to the beneficiary (the single most tested tax fact in this section). Premiums are NOT deductible. A MEC loses favorable loan/withdrawal tax treatment, but the death benefit stays tax-free regardless.",
      },
    ],
    examTraps: [
      "Life insurance death benefits are received income tax-free by the beneficiary — but that doesn't mean ALL transactions involving the policy are tax-free (MECs, for example, lose favorable withdrawal treatment).",
      "Contributory group plans need roughly 75% minimum participation to prevent adverse selection; noncontributory plans need 100% since the employer pays it all.",
      "Key person coverage protects the business from losing a key employee; buy-sell funding lets remaining owners buy out a deceased owner's interest — different purposes, frequently swapped on the exam.",
      "A life settlement payout falls between cash surrender value and the full death benefit — know that range specifically.",
    ],
  },
  {
    slug: "lh-regulation-idaho-general",
    track: "life-health",
    title: "Idaho Insurance Law: Licensing & Marketing Practices",
    summary:
      "Idaho Title 41 statutes common to every line — Director's authority, producer licensing, and unfair trade practices. Worth roughly 12 of the 75 scored questions on each Idaho L&H exam.",
    videoSearch: "Idaho insurance producer license Title 41 explained",
    concepts: [
      {
        title: "The Director of the Department of Insurance",
        explanation:
          "Idaho Code 41-203 places administration of Idaho's insurance laws in the hands of the Director of the Department of Insurance. The Director can examine insurers and producers (41-210, 219, 220), hold hearings and issue orders (41-212, 232, 235), and levy penalties for violations (41-117, 117A). Nearly every licensing and enforcement question on the Idaho-specific portion of either exam traces back to this office's authority.",
        examFocus:
          "If a question asks who can suspend a license, order a hearing, or examine an insurer's records, the answer is the Director of the Department of Insurance under 41-203.",
      },
      {
        title: "Who Must Be Licensed and How",
        explanation:
          "Under 41-1003(8) and 41-1004, anyone who sells, solicits, or negotiates insurance in Idaho must hold a producer license. Idaho distinguishes resident producers — who live in and primarily transact business in Idaho, per the definitions in 41-1003 — from nonresident producers (41-1009, 1010), who hold a home-state license and obtain an Idaho nonresident license through reciprocity. Life and Health are separate lines of authority requiring their own pre-licensing education, application (41-1006, 1007), and exam (41-1006) unless an exemption applies (41-1005, 1007(4), 1012). The Director can deny a license under 41-1011, 1016.",
        examFocus:
          "Life and Health are separate lines of authority in Idaho — a producer wanting to sell both needs both lines on their license. Resident status hinges on where the producer lives and primarily transacts business, not where any one client is located.",
      },
      {
        title: "Maintaining a License: CE, Renewal, and Discipline",
        explanation:
          "An Idaho producer must complete continuing education (41-1013, IDAPA 18.06.04), keep their license current through renewal and fees (41-1008, IDAPA 18.01.02), keep accurate records (41-1036), and report any change of address (41-1008(6), 1009(3)). The Director can suspend or revoke a license — including for a felony conviction — under 41-1016 and 41-1026. Producers owe Idaho a fiduciary duty over premium funds they handle (41-1024, 1323, 1325, 1803) and must disclose and properly charge any fees beyond commission (41-1030).",
        examFocus:
          "A felony conviction is explicit grounds for suspension or revocation under 41-1016/1026 — a frequently tested 'which of these can cost you your license' fact.",
      },
      {
        title: "Unfair Trade Practices (Twisting, Rebating, and More)",
        explanation:
          "Idaho Code 41-1303 through 41-1315 lists specific unfair methods of competition. Rebating (41-1314) is offering anything of value not stated in the policy to induce a sale. Twisting (41-1305) is inducing a policyholder to replace an existing policy through misrepresentation — especially relevant for life and health, where replacing a policy can mean losing accumulated cash value or restarting contestability periods. Misrepresentation and false advertising (41-1303, 1304), defamation (41-1308), false financial statements (41-1306), boycott/coercion/intimidation (41-1309), unfair discrimination (41-1313, 1315), coercion of a borrower (41-1310-1312), and fraud (41-290, 293) round out the list. Violations expose a producer to penalties under 41-117, 1016, 1327, 1329A.",
        examFocus:
          "REPLACE + lie about it = twisting (41-1305). Anything of value not in the policy to induce a sale = rebating (41-1314). Idaho's replacement-disclosure rules (IDAPA 18.03.04, covered in the life-specific module) exist specifically to combat twisting.",
      },
    ],
    examTraps: [
      "Life and Health are separate Idaho lines of authority (41-1003(8), 1004) — don't assume one exam covers both lines automatically.",
      "A felony conviction is named explicitly (41-1016, 1026) as grounds for license suspension/revocation.",
      "Twisting targets the REPLACEMENT decision (41-1305); rebating targets the PURCHASE incentive (41-1314) — frequently swapped on exam scenarios.",
      "Resident vs. nonresident licensing hinges on where the producer lives and primarily transacts business (41-1003(9)), not where a client happens to be.",
    ],
  },
  {
    slug: "lh-regulation-idaho-life",
    track: "life-health",
    title: "Idaho Insurance Law: Life-Specific Statutes",
    summary:
      "Idaho statutes specific to life insurance — policy replacement, annuity suitability, individual and group life provisions, and the Life Settlements Act.",
    videoSearch: "Idaho life insurance law policy replacement annuity suitability explained",
    concepts: [
      {
        title: "Policy Replacement Rules (IDAPA 18.03.04)",
        explanation:
          "Idaho's replacement regulation defines what counts as a replacement, who's exempt, and imposes specific duties on both the producer and the replacing insurance company. A producer recommending replacement must give the client a notice regarding replacement and provide the information needed to compare the old and new policy's costs and benefits — since replacing a policy can mean losing accumulated cash value, restarting contestability and suicide-exclusion periods, or losing favorable provisions in the older contract. The replacing insurer also has its own duties, like verifying the disclosure was provided.",
        examFocus:
          "Replacement disclosure duties apply even when the new policy is from the SAME insurer — the trigger is replacing a policy, not switching companies. This regulation exists specifically to prevent twisting.",
      },
      {
        title: "Annuity Best Interest / Suitability (41-1940A through 1940E)",
        explanation:
          "Idaho requires that any annuity recommendation be in the consumer's best interest, considering their financial situation, needs, and objectives at the time of the transaction. Producers must make a reasonable effort to obtain the consumer's profile information and consider factors like age, financial situation, tax status, liquidity needs, and risk tolerance before recommending an annuity — and must document that basis. Idaho updated this from a pure 'suitability' standard to the stricter 'best interest' standard effective 2021, and producers must also complete a one-time 4-hour annuity training course. This requirement is layered on top of the general annuity contract statutes (41-1917-1923, 1935).",
        examFocus:
          "Idaho's standard is BEST INTEREST (not just suitability) as of the 2021 update — the producer must document a reasonable basis tied to the specific consumer's profile, not just confirm the consumer wants the product. A one-time 4-hour annuity training course is also required.",
      },
      {
        title: "Individual Life Standard Provisions",
        explanation:
          "Idaho law (41-1833, 1835-36, 1903-1913, 1918, 1930, 1935) sets standard provisions every individual life policy must include: a grace period for late premiums, defined policy loan and loan interest rate terms, a path to reinstatement after lapse, a free look period, and protection of named beneficiaries from the insured's creditors (so a death benefit generally can't be seized to pay the deceased's debts).",
        examFocus:
          "Beneficiary proceeds are generally protected from the insured's creditors under Idaho law — a frequently tested consumer-protection fact distinguishing life insurance proceeds from other estate assets.",
      },
      {
        title: "The Life Settlements Act (41-1950 through 1965)",
        explanation:
          "A life settlement is the sale of an existing life insurance policy by the owner to a third party for a lump sum greater than the cash surrender value but less than the death benefit — the buyer becomes the new owner/beneficiary and continues paying premiums, collecting the death benefit when the insured dies. Idaho's Life Settlements Act regulates these transactions to protect consumers, including licensing requirements for life settlement providers and brokers and required disclosures to the policy owner about alternatives to settling.",
        examFocus:
          "A life settlement pays MORE than cash surrender value but LESS than the full death benefit — that gap is exactly why it's attractive to a policy owner who no longer wants or can afford the policy but doesn't want to walk away with nothing.",
      },
      {
        title: "Group Life Standard Provisions and Conversion",
        explanation:
          "Idaho's group life statutes (41-2010-2020) set standard provisions for group policies and define eligible groups (41-2003-2008) who can be covered. The conversion privilege (41-2018) is a key consumer protection: when a person's group life coverage ends (such as leaving the employer), they generally have the right to convert to an individual policy without proving insurability, within a specified window after the group coverage ends.",
        examFocus:
          "Conversion rights let a departing group member buy individual coverage WITHOUT new medical underwriting — but only within a limited window after group coverage ends, and the converted policy is typically more expensive than the group rate.",
      },
    ],
    examTraps: [
      "Replacement disclosure duties apply even within the SAME insurer — the trigger is the act of replacing a policy.",
      "Idaho's annuity standard is BEST INTEREST, not just suitability, since the 2021 update — and it requires a documented, individualized reasonable basis, not just that the consumer asked for the product.",
      "A life settlement pays between the cash surrender value and the full death benefit — know that range, and that the buyer becomes the new policy owner.",
      "Group life conversion rights apply without new underwriting, but only within a limited window after coverage ends — and the individual policy will cost more than the group rate.",
    ],
  },
  {
    slug: "lh-regulation-idaho-health",
    track: "life-health",
    title: "Idaho Insurance Law: Health-Specific Statutes",
    summary:
      "Idaho statutes specific to health/disability insurance — required coverages, disclosure, Medicare supplement, long-term care, and small employer/individual health availability acts.",
    videoSearch: "Idaho health insurance law required coverages long term care explained",
    concepts: [
      {
        title: "Required Coverages: Newborns, Maternity, and More",
        explanation:
          "Idaho law requires certain coverages be included in health policies issued in the state: coverage for newborns and adopted children from the moment of birth or placement (41-2140, 2210, 3932), maternity benefits (41-2140, 2210, 3438), coverage for handicapped dependents beyond the usual dependent age cutoff (41-2139), reconstructive surgery and prosthetic devices (IDAPA 18.04.08), and mammograms (41-2144, 2218, 3926). These required coverages can't be excluded or limited beyond what the statute allows, regardless of what an insurer might prefer to offer.",
        examFocus:
          "Newborn coverage attaches automatically from the moment of birth (or adoption placement) — a parent doesn't need to separately apply or wait for an open enrollment period to get the newborn covered.",
      },
      {
        title: "Free Look, Contestability, and Grace Period for Health Policies",
        explanation:
          "Idaho health policies must include a free look period (41-2138) allowing a new policyholder to cancel for a full refund within a set window. The right of the insurer to contest a claim (time limit on certain defenses, 41-2106) parallels the life insurance incontestability clause — after a defined period, the insurer generally can't void the policy over application misstatements. A grace period (41-2107) gives the policyholder time to pay an overdue premium before the policy lapses. Pre-existing condition limitations are also tightly regulated across market segments (41-2221 for large groups, 41-4708 for small employers, 41-5208 for individual coverage) to prevent insurers from indefinitely excluding coverage for conditions a person had before enrolling.",
        examFocus:
          "Health insurance's 'time limit on certain defenses' (41-2106) is functionally the same concept as life insurance's incontestability clause — both cap how long an insurer can contest a policy over application misstatements.",
      },
      {
        title: "Medicare Supplement and Long-Term Care Regulation",
        explanation:
          "Idaho regulates Medicare supplement (Medigap) policies under 41-4402, 4403, 4406-4408 and IDAPA 18.04.10, standardizing plan offerings so consumers can compare them. Long-term care insurance is separately regulated (41-4603, IDAPA 18.04.11), requiring specific disclosure statements (41-4605), defined Activities of Daily Living triggers, mandatory producer training before selling LTC products, and a suitability requirement similar in spirit to the annuity suitability rule.",
        examFocus:
          "Idaho specifically requires PRODUCER TRAINING before a producer can sell long-term care insurance — a distinct requirement beyond the general L&H pre-licensing education.",
      },
      {
        title: "Small Employer and Individual Health Availability Acts",
        explanation:
          "The Small Employer Health Insurance Availability Act (Title 41, Chapter 47) sets special provisions, disclosure requirements, and fair marketing standards for coverage sold to small employers, and defines who qualifies as a small employer and an eligible employee. The Individual Health Insurance Availability Act (Title 41, Chapter 52) provides parallel protections in the individual market. The Idaho Health Carrier External Review Act (41-5901 through 5917) gives consumers the right to an independent external review when a health carrier denies a claim, after exhausting the carrier's internal appeal process.",
        examFocus:
          "External review (41-5901+) is a consumer's recourse AFTER exhausting the carrier's own internal appeal — it's an independent, outside review of a denied claim, not a first step.",
      },
    ],
    examTraps: [
      "Health insurance's 'time limit on certain defenses' (41-2106) plays the same role as life insurance's incontestability clause — don't treat them as unrelated concepts just because the name differs.",
      "Long-term care insurance requires specific PRODUCER TRAINING in Idaho — a distinct, additional requirement beyond standard pre-licensing education.",
      "Newborn and adopted-child coverage attaches automatically at birth/placement — it isn't something a parent has to apply for separately.",
      "External review under the Health Carrier External Review Act comes AFTER the carrier's internal appeal process, not instead of it.",
    ],
  },
  {
    slug: "pc-property-basics",
    track: "property-casualty",
    title: "Property Insurance Basics",
    free: true,
    summary: "Core property insurance concepts and the HO policy forms.",
    videoSearch: "homeowners insurance HO3 HO4 HO6 named perils open perils explained",
    concepts: [
      {
        title: "Named Perils vs. Open Perils",
        explanation:
          "A named-perils policy only covers losses caused by risks specifically listed in the policy — if a loss happens from a cause not on that list, it's not covered, period. An open-perils policy (sometimes called \"all-risk\" or \"special form\") flips this structure: it covers every cause of loss except for the perils specifically excluded in the policy. This matters because open-perils coverage is broader by default, but it still has real exclusions (commonly flood, earthquake, and war) — \"open perils\" does not mean \"everything is covered no matter what.\"",
        examFocus:
          "Flip test: named perils = covered ONLY if listed; open perils = covered UNLESS excluded. Open perils still has real exclusions.",
      },
      {
        title: "Homeowners Policy Forms",
        explanation:
          "The HO-3 is the most common homeowners policy form for owner-occupied single-family homes. It insures the dwelling itself on an open-perils basis (broad coverage with named exclusions) but insures personal property (contents) on a named-perils basis (narrower, listed-causes-only coverage) — a mixed structure that's frequently tested. The HO-4 form is for renters: it covers personal property and personal liability, but never the building structure, since the renter doesn't own it. The HO-6 form is for condominium unit owners: it covers personal property plus the interior improvements and fixtures the owner is responsible for under their condo association agreement, but not the building's exterior structure, which the condo association typically insures separately.",
        examFocus:
          "Memorize the form-to-person match: HO-3 = homeowner (mixed dwelling/contents coverage), HO-4 = renter (contents only), HO-6 = condo owner (contents + interior).",
      },
      {
        title: "Actual Cash Value vs. Replacement Cost",
        explanation:
          "When a covered item is damaged, the policy determines how its value is calculated for payout. Actual cash value (ACV) equals the replacement cost of the item minus depreciation — so a five-year-old couch is reimbursed at its depreciated value, not what a brand-new one costs. Replacement cost coverage, by contrast, pays what it actually costs to replace the item with a new one of similar kind and quality, without subtracting depreciation. Replacement cost coverage costs more in premium but provides a much better claims outcome, especially for older property.",
        examFocus:
          "Memorize the formula: ACV = replacement cost − depreciation. Be ready to compute ACV given a replacement cost and depreciation amount.",
      },
      {
        title: "The Coinsurance Clause",
        explanation:
          "Property policies often include a coinsurance clause requiring the policyholder to insure their property to at least a certain percentage of its value (commonly 80%). If they underinsure — carrying less coverage than required — and a partial loss occurs, the insurer pays only a reduced percentage of the loss, calculated as (amount of insurance carried ÷ amount of insurance required) × the loss amount. This penalizes policyholders who try to save on premiums by underinsuring, since most losses are partial rather than total, and the penalty applies even though the insured didn't lose everything.",
        examFocus:
          "Memorize the formula: (insurance carried ÷ insurance required) × loss = payout. Expect a calculation question using this exact formula.",
      },
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
    videoSearch: "personal auto policy liability collision comprehensive explained",
    concepts: [
      {
        title: "Liability Coverage",
        explanation:
          "Liability coverage pays for bodily injury or property damage that the insured causes to other people — it never pays for the insured's own injuries or their own vehicle's damage. This is the core coverage required in nearly every state for driving legally, since it protects third parties from the financial consequences of an at-fault driver's actions. Liability limits are usually expressed as a set of numbers (e.g., 100/300/50) representing per-person bodily injury, per-accident bodily injury, and property damage limits respectively.",
        examFocus:
          "Memorize the 100/300/50 format: per-person BI / per-accident BI / property damage. Be ready to read limits from this exact notation.",
      },
      {
        title: "Personal Auto Policy Structure",
        explanation:
          "A standard Personal Auto Policy (PAP) bundles several distinct coverages together. Liability covers harm to others. Medical payments coverage pays medical bills for the insured and their passengers regardless of fault. Uninsured/underinsured motorist coverage protects the insured when the at-fault driver has no insurance or not enough to cover the damages. Physical damage coverage is split into collision (pays for damage to the insured's own vehicle from a crash, regardless of fault) and comprehensive (pays for non-collision damage like theft, vandalism, fire, or weather events such as hail).",
        examFocus:
          "List all five PAP pieces and what each one alone covers — liability, medical payments, UM/UIM, collision, comprehensive. Expect a match-the-scenario question.",
      },
      {
        title: "Collision vs. Comprehensive",
        explanation:
          "These two coverages are the most commonly confused on the exam. Collision pays for damage to the insured's own vehicle resulting from a collision with another vehicle or object, regardless of who was at fault — so even if the insured caused the accident, collision coverage pays for their own car's repair. Comprehensive pays for damage to the insured's vehicle from causes other than a collision: theft, fire, falling objects, vandalism, and weather. Neither coverage pays for damage the insured causes to someone else's property — that's what liability is for.",
        examFocus:
          "Quick filter: was it a collision with an object/vehicle? Collision. Anything else (theft/weather/fire)? Comprehensive. Either way it's YOUR car, never someone else's.",
      },
      {
        title: "Workers' Compensation",
        explanation:
          "Workers' compensation is a no-fault system: an injured employee receives benefits for medical care and lost wages regardless of who caused the workplace injury, even if it was the employee's own carelessness. In exchange for this guaranteed, no-fault benefit, the employee generally gives up the right to sue their employer for the injury (with narrow exceptions, such as intentional harm). Coverage is typically mandatory for employers above a certain size and is regulated at the state level.",
        examFocus:
          "Memorize the tradeoff pair: employee gets guaranteed no-fault benefits ↔ employee gives up the right to sue the employer.",
      },
      {
        title: "Umbrella Liability Policies",
        explanation:
          "An umbrella policy provides an extra layer of liability protection above the limits of underlying policies like auto and homeowners insurance. It only pays out after the underlying policy's liability limits are exhausted — it does not replace primary liability coverage, and insurers typically require the policyholder to maintain certain minimum underlying limits to qualify for an umbrella policy. Umbrella policies are relatively inexpensive for the amount of additional protection they provide, since they only get triggered in unusually large claims.",
        examFocus:
          "Key sequencing fact: umbrella pays ONLY after underlying limits are exhausted — it never pays first or instead of the primary policy.",
      },
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
    videoSearch: "annuities explained fixed variable immediate deferred",
    concepts: [
      {
        title: "What an Annuity Actually Does",
        explanation:
          "An annuity is a contract with an insurance company designed to convert a sum of money into a stream of income, most commonly used to provide guaranteed retirement income. This is fundamentally different from life insurance, which protects against dying too soon — an annuity protects against the opposite risk, outliving your savings (longevity risk). The buyer pays the insurer either a lump sum or a series of payments, and in exchange the insurer promises to pay the buyer income, either starting immediately or at some point in the future.",
        examFocus:
          "Memorize the risk pairing: life insurance = dying too soon; annuity = living too long (longevity risk). This contrast is tested directly and often.",
      },
      {
        title: "Accumulation and Annuitization Phases",
        explanation:
          "Annuities have two phases. During the accumulation phase, the money paid into the annuity grows, typically tax-deferred, meaning no taxes are owed on the growth until money is withdrawn. During the annuitization (payout) phase, the insurer converts the accumulated value into a stream of income payments to the annuitant. An immediate annuity essentially skips most of the accumulation phase — payouts begin shortly after a lump-sum purchase. A deferred annuity spends potentially years or decades in the accumulation phase before payouts begin later.",
        examFocus:
          "Two phase names to recall instantly: accumulation (growing) and annuitization (paying out). Immediate vs. deferred is about how long accumulation lasts before payout starts.",
      },
      {
        title: "Fixed vs. Variable Annuities",
        explanation:
          "A fixed annuity guarantees a set rate of return on the accumulated value, declared by the insurer, giving the buyer predictable, conservative growth. A variable annuity ties the account's growth to the performance of underlying investment subaccounts (similar to mutual funds), meaning the value can go up or down based on market performance — offering higher growth potential but real investment risk that the fixed annuity doesn't carry.",
        examFocus:
          "Fixed = guaranteed/declared rate, no investment risk. Variable = subaccounts, real investment risk. This is a direct definitional question.",
      },
      {
        title: "Payout Options",
        explanation:
          "When an annuity enters its payout phase, the annuitant chooses a settlement option. A straight life (life only) option pays the highest periodic amount but stops completely upon the annuitant's death, even if they die shortly after payments begin, with nothing left over for heirs. A life with period certain option guarantees payments for a minimum number of years even if the annuitant dies early, with the remainder going to a beneficiary. A joint and survivor option continues payments to a second person (often a spouse) after the primary annuitant dies, though usually at a reduced payment amount.",
        examFocus:
          "Memorize which option pays the MOST per period (straight life) and which one guarantees something for heirs (period certain or joint and survivor).",
      },
      {
        title: "Surrender Charges and Tax Treatment",
        explanation:
          "Most annuities have a surrender period — often several years — during which withdrawing more than a small allowed amount triggers a surrender charge, a penalty designed to discourage early withdrawal. On the tax side, qualified annuities are funded with pre-tax dollars (often inside a retirement account), so withdrawals are fully taxable as ordinary income. Nonqualified annuities are funded with after-tax dollars, so only the growth/earnings portion of each withdrawal is taxed — the original contribution was already taxed before it went in.",
        examFocus:
          "Tax rule to memorize: qualified = fully taxable on withdrawal (pre-tax money in); nonqualified = only earnings taxed (after-tax money in).",
      },
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
    videoSearch: "Medicare Parts A B C D explained Medicaid long term care insurance",
    concepts: [
      {
        title: "Medicare Parts A, B, C, and D",
        explanation:
          "Medicare is a federal health program primarily for people 65 and older (and some younger people with qualifying disabilities), broken into distinct parts. Part A covers inpatient hospital stays, skilled nursing facility care, and some home health care — it's often premium-free if the person paid Medicare taxes long enough while working. Part B covers outpatient and medical services: doctor visits, preventive care, durable medical equipment — and it does require a monthly premium. Part C, known as Medicare Advantage, is an alternative to Original Medicare (Parts A and B) offered through private insurers, often bundling in extra benefits. Part D covers prescription drugs and is also offered through private insurers.",
        examFocus:
          "Drill the letters until automatic: A=hospital, B=outpatient/doctor, C=Advantage (private alternative), D=drugs. This is asked almost word-for-word on most exams.",
      },
      {
        title: "Medicare Supplement (Medigap) Policies",
        explanation:
          "Original Medicare (Parts A and B) doesn't cover 100% of costs — there are deductibles, copayments, and coinsurance the beneficiary is responsible for. Medigap policies, sold by private insurers, are designed specifically to fill these gaps, paying some or all of the out-of-pocket costs Original Medicare leaves behind. Medigap policies work alongside Original Medicare, not as a replacement for it — someone who switches to Medicare Advantage (Part C) generally cannot also use a Medigap policy, since Part C already restructures the cost-sharing.",
        examFocus:
          "Critical incompatibility: Medigap pairs with Original Medicare (A+B), NOT with Medicare Advantage (Part C). The exam often tests this exact incompatibility.",
      },
      {
        title: "Medicare vs. Medicaid",
        explanation:
          "These two programs are frequently confused because of their similar names, but their eligibility triggers are completely different. Medicare eligibility is based primarily on age (65+) or disability status, regardless of income or assets. Medicaid eligibility is based on financial need — income and asset limits set jointly by federal and state guidelines — regardless of age. Some people qualify for both (called \"dual eligible\"), but qualifying for one doesn't mean qualifying for the other.",
        examFocus:
          "One-word trigger to memorize: Medicare = AGE/disability. Medicaid = NEED (income/assets). This distinction is asked directly almost every time.",
      },
      {
        title: "Long-Term Care Insurance",
        explanation:
          "Long-term care (LTC) insurance covers services like nursing home care, assisted living, and in-home custodial care — costs that neither standard health insurance nor Medicare generally cover beyond very limited, short-term skilled care. Most LTC policies trigger benefits when the insured can no longer independently perform a set number (often 2 of 6) of Activities of Daily Living: bathing, dressing, eating, toileting, transferring, and continence. This functional-ability trigger, rather than a specific diagnosis, is why LTC insurance exists as a distinct product — it covers the type of ongoing custodial support that Medicare's acute-care focus was never designed to pay for.",
        examFocus:
          "Memorize the ADL list (bathing, dressing, eating, toileting, transferring, continence) and the common \"2 of 6\" trigger threshold — exact recall is tested.",
      },
    ],
    examTraps: [
      "Memorize Parts by letter: A = hospital (\"A\" for admitted), B = doctor/outpatient, C = Advantage (private alternative), D = Drugs — exam questions are often just \"which part covers X.\"",
      "Medicaid is needs-based (income/assets), Medicare is largely age/disability-based — don't mix up the eligibility trigger.",
      "Long-term care is about ADLs (bathing, dressing, eating, toileting, transferring, continence), not about a specific diagnosis — benefits trigger on functional inability, not illness type.",
    ],
  },
  {
    slug: "lh-health-provisions",
    track: "life-health",
    title: "Health Policy Provisions & Renewability",
    summary: "The mandatory and optional provisions every health policy contains, plus the renewability categories the exam tests.",
    videoSearch: "health insurance policy provisions renewability clauses explained",
    concepts: [
      {
        title: "Mandatory Provisions",
        explanation:
          "Health policies are required to include a defined set of mandatory provisions. The entire contract provision states that the policy, application, and any riders together make up the whole agreement. The time limit on certain defenses (incontestability) caps how long an insurer can contest the policy over application misstatements. Notice of claim and proof of loss set deadlines for the insured to report a claim and submit documentation. Time of payment of claims requires the insurer to pay promptly once proof of loss is received. Legal actions provisions set a minimum and maximum window for the insured to sue the insurer over a denied claim, and physical examination and autopsy provisions let the insurer verify a claim's validity.",
        examFocus:
          "Mandatory provisions exist in EVERY policy — distinguish them from optional provisions, which an insurer may or may not include. Notice of claim and proof of loss set the insured's deadlines; time of payment sets the insurer's deadline.",
      },
      {
        title: "Optional Provisions and Riders",
        explanation:
          "Optional provisions give insurers flexibility in how they structure a policy. A probationary period is a window after the policy starts during which certain conditions (often sickness, as opposed to accidents) aren't yet covered. An elimination period is a waiting period between when a disability begins and when benefits start being paid — similar in concept to a deductible, but measured in time rather than dollars. Common riders include impairment/exclusion riders (excluding coverage for a specific pre-existing condition rather than declining the whole application) and a future increase option (guaranteeing the right to increase coverage later without new underwriting).",
        examFocus:
          "Elimination period = a TIME-based waiting period before disability benefits start (not a dollar deductible). Probationary period = a window when certain conditions aren't yet covered, common for sickness-only exclusions early in a policy.",
      },
      {
        title: "Renewability Rights",
        explanation:
          "How long a health policy can be kept in force, and on what terms, depends on its renewability classification. A noncancelable policy can't be cancelled or have its premium increased by the insurer for the life of the policy, as long as premiums are paid — the strongest protection for the insured. A guaranteed renewable policy can't be cancelled by the insurer, but the insurer CAN raise premiums, typically for an entire class of policyholders rather than singling out one person. A cancelable policy gives the insurer the right to cancel coverage at any time, subject to advance notice.",
        examFocus:
          "Rank by insured protection: noncancelable (strongest — no cancellation, no individual rate increase) > guaranteed renewable (no cancellation, but rates CAN rise by class) > cancelable (weakest — insurer can cancel with notice).",
      },
      {
        title: "Coordination with Pre-Existing Conditions and Benefit Limits",
        explanation:
          "Pre-existing condition clauses define how long an insurer can limit or exclude coverage for a condition the insured had before the policy began — these clauses are tightly regulated since they could otherwise be used to deny coverage indefinitely for chronic conditions. Lifetime, annual, or per-cause maximum benefit limits cap the total amount a policy will pay, and usual, reasonable, and customary (URC) charge provisions limit reimbursement to what's typical for a given service in a given area, protecting against inflated billing.",
        examFocus:
          "Pre-existing condition exclusions are time-LIMITED, not permanent — regulation prevents insurers from using them to deny coverage for a chronic condition forever.",
      },
    ],
    examTraps: [
      "Noncancelable is the strongest renewability protection (no cancellation, no individual rate hike); cancelable is the weakest (insurer can end coverage with notice) — guaranteed renewable sits in between.",
      "An elimination period is a TIME-based waiting period before disability benefits begin — don't confuse it with a dollar-based deductible.",
      "Mandatory provisions appear in every policy; optional provisions are the insurer's choice to include — know which bucket a given provision belongs to.",
      "Pre-existing condition exclusions are time-limited by regulation, not permanent exclusions.",
    ],
  },
  {
    slug: "lh-specialty-health-underwriting",
    track: "life-health",
    title: "Specialty Health Policies, Field Underwriting & Other Concepts",
    summary: "Disability income, AD&D, specialty health products, coordination of benefits, and the field underwriting process for health insurance.",
    videoSearch: "disability income insurance specialty health policies field underwriting explained",
    concepts: [
      {
        title: "Disability Income and Accidental Death & Dismemberment",
        explanation:
          "Disability income insurance replaces a portion of lost income when the insured can't work due to illness or injury — individual policies cover a person directly, while business overhead expense and disability buyout policies protect a business if an owner becomes disabled (covering ongoing business expenses or funding a buyout of the disabled owner's interest, respectively). Disability classifications matter: total disability means the insured can't perform their occupation at all, partial disability means a reduced capacity to work, recurrent disability is a relapse of a prior disability within a specified period (often treated as a continuation rather than a new claim), and residual disability pays a benefit proportional to actual income loss when the insured can work in a limited capacity. Accidental Death & Dismemberment (AD&D) pays a benefit for death or loss of a limb/eyesight specifically resulting from an accident, not illness.",
        examFocus:
          "Match disability type to its definition: total = can't do own job at all, partial = reduced capacity, recurrent = relapse within a window (often treated as the SAME claim), residual = benefit proportional to actual income lost. AD&D pays ONLY for accidental causes, never illness.",
      },
      {
        title: "Specialty and Limited-Benefit Health Products",
        explanation:
          "Beyond major medical coverage, the exam tests several specialty and limited-benefit products. Dental and vision policies cover routine and major care for those specific areas. Cancer and critical illness (specified disease) policies pay a lump sum or scheduled benefit upon diagnosis of a covered condition, regardless of actual medical expenses incurred. Hospital indemnity policies pay a fixed daily or per-confinement amount for a hospital stay, again regardless of actual costs. Short-term medical provides temporary, limited-duration major medical-style coverage, often used as a gap-filler between other coverage. Worksite (employer-sponsored) policies are voluntary benefits offered through an employer but typically paid for by the employee.",
        examFocus:
          "Critical illness, cancer, and hospital indemnity policies pay FIXED or SCHEDULED amounts regardless of actual costs incurred — they're not reimbursement-based like major medical, which is a key distinguishing feature.",
      },
      {
        title: "Coordination of Benefits and Subrogation",
        explanation:
          "When a person is covered by more than one health plan, coordination of benefits (COB) rules determine which plan pays first (primary) and which pays the remainder up to its own limit (secondary or excess) — preventing the insured from collecting more than their actual covered expenses. Subrogation in the health context lets an insurer recover what it paid from a third party responsible for the insured's injury (such as an at-fault driver in an auto accident) — similar in principle to property/casualty subrogation. Workers' compensation also factors into COB: if a work injury is covered by workers' comp, that coverage is typically primary over a group health plan for that specific injury.",
        examFocus:
          "Primary plan pays first, up to its limits; secondary/excess plan picks up some or all of the remainder — COB exists specifically to prevent the insured from being overpaid relative to actual expenses.",
      },
      {
        title: "Field Underwriting Procedures",
        explanation:
          "Field underwriting is the work a producer does at the point of sale, before the application even reaches the insurer's underwriters. It includes properly completing the application, explaining sources of insurability information the insurer may use (such as a Medical Information Bureau report or a consumer report under the Fair Credit Reporting Act) and HIPAA privacy practices, collecting the initial premium and issuing a receipt (which can trigger conditional coverage pending formal underwriting, often contingent on a clean medical exam), and submitting the completed application and premium to the company. After issuance, the producer's field underwriting role continues through policy delivery — explaining the policy's provisions, riders, exclusions, and any rating to the client.",
        examFocus:
          "A conditional receipt issued at the point of sale can create temporary coverage pending formal underwriting — but it's typically conditioned on the applicant remaining insurable (e.g., passing a medical exam) at the level applied for.",
      },
    ],
    examTraps: [
      "Critical illness, cancer, and hospital indemnity policies pay fixed/scheduled benefits regardless of actual costs — don't treat them as reimbursement-based major medical substitutes.",
      "AD&D pays only for ACCIDENTAL death/dismemberment, never illness — a frequently tested limitation.",
      "Coordination of benefits prevents overpayment when multiple plans apply — primary pays first, secondary covers some/all of the remainder, not in addition without limit.",
      "Recurrent disability is often treated as a continuation of the SAME prior claim if it relapses within a specified window, rather than triggering a brand-new elimination period.",
    ],
  },
  {
    slug: "pc-commercial-liability",
    track: "property-casualty",
    title: "Commercial Property & General Liability",
    summary: "Core commercial lines concepts beyond personal auto/home.",
    videoSearch: "commercial general liability CGL businessowners policy explained",
    concepts: [
      {
        title: "Commercial General Liability (CGL)",
        explanation:
          "A CGL policy covers a business's liability exposure for bodily injury or property damage caused to third parties (customers, visitors, vendors) arising from the business's operations, products, or premises. It's the commercial-lines equivalent of personal liability coverage, but scoped to business activities. CGL is one of the most foundational commercial policies because nearly every business that interacts with the public or operates physical premises has some exposure to third-party claims.",
        examFocus:
          "CGL = third-party bodily injury/property damage from business operations. It is the commercial analog to personal liability coverage — know that parallel.",
      },
      {
        title: "Businessowners Policy (BOP)",
        explanation:
          "A BOP bundles commercial property coverage and general liability coverage into a single, simplified policy, designed for small to medium-sized businesses with relatively standard, lower-risk operations (think retail shops, offices, or small restaurants). It's convenient and often cheaper than buying property and liability coverage separately, but it does not include workers' compensation, which always remains a separate, mandatory policy in most states regardless of what other commercial coverage a business carries.",
        examFocus:
          "Memorize what a BOP is missing: workers' compensation is NEVER included — always a separate policy, no exceptions.",
      },
      {
        title: "Business Income (Interruption) Coverage",
        explanation:
          "When a covered property loss — like a fire — forces a business to shut down temporarily, business income coverage replaces the income the business would have earned during the restoration period, plus continuing expenses like payroll for key employees, so the business can reopen on solid footing rather than collapsing financially during the closure. This coverage is triggered by the same covered perils as the underlying property policy; it doesn't independently cover business closures from causes the property policy wouldn't have covered in the first place.",
        examFocus:
          "Key trigger rule: business income coverage only activates from a peril ALREADY covered by the underlying property policy — it has no independent trigger.",
      },
      {
        title: "Claims-Made vs. Occurrence Policies",
        explanation:
          "These two liability policy structures determine WHEN a policy responds to a claim, and the difference matters a lot for coverage gaps. An occurrence policy covers any incident that happened during the policy period, no matter when the claim is actually filed — even years later. A claims-made policy only covers claims that are filed (reported) while the policy is active, regardless of when the underlying incident occurred. This means a business that lets a claims-made policy lapse could find old incidents go completely uncovered if they're reported after cancellation, which is why claims-made policies often require special \"tail\" coverage when switching insurers or closing a business.",
        examFocus:
          "Memorize the trigger word for each: occurrence = WHEN IT HAPPENED. Claims-made = WHEN IT'S REPORTED. This pairing is one of the most frequently tested distinctions in commercial lines.",
      },
      {
        title: "Additional Insured and Products-Completed Operations",
        explanation:
          "An additional insured endorsement extends a business's liability coverage to protect another party — commonly a landlord, contractor, or client who requires it contractually — without making them a co-owner of the policy. Products-completed operations coverage specifically addresses liability that arises after a product is sold or a job is finished — for example, if a contractor's completed plumbing work causes water damage months later, this coverage (rather than the general \"ongoing operations\" liability coverage) is what responds.",
        examFocus:
          "Additional insured ≠ co-owner — it just extends protection. Products-completed operations is specifically for AFTER-the-job liability, not during active work.",
      },
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
    videoSearch: "surety bonds vs fidelity bonds explained insurance",
    concepts: [
      {
        title: "The Three-Party Surety Bond Structure",
        explanation:
          "A surety bond involves three distinct parties, and understanding each role is the foundation for this whole topic. The principal is the party who must perform an obligation — complete a contract, comply with a law, or fulfill a duty. The obligee is the party protected by the bond — the one who receives payment if the principal fails to perform. The surety is the company that issues the bond, guaranteeing to the obligee that the principal will perform, or paying the obligee if they don't.",
        examFocus:
          "Drill until automatic: principal PERFORMS, obligee is PROTECTED, surety GUARANTEES. Exam scenarios will describe a situation and ask you to name the role.",
      },
      {
        title: "Why a Surety Bond Is Not Insurance",
        explanation:
          "This is the single most tested concept in this topic: a surety bond is fundamentally different from insurance, even though it's sold by insurance companies. With insurance, the insurer absorbs the loss and the policyholder owes nothing further. With a surety bond, if the surety pays a claim to the obligee because the principal failed to perform, the surety then expects the principal to reimburse it. The bond guarantees the OBLIGEE gets paid — it does not protect the PRINCIPAL from financial responsibility for their own failure to perform.",
        examFocus:
          "THE single most important fact in this module: the principal must reimburse the surety. A surety bond never absorbs loss for the principal the way insurance does.",
      },
      {
        title: "Fidelity Bonds",
        explanation:
          "Fidelity bonds work differently from surety bonds — they protect an employer against losses caused by their own employees' dishonest acts, such as theft, embezzlement, or fraud. Unlike a three-party surety bond, a fidelity bond is closer to traditional insurance: the employer is both the one purchasing the bond and the one protected by it, and the dishonest employee has no obligation to reimburse the bonding company the way a surety bond's principal would.",
        examFocus:
          "Fidelity bond = two-party, insurance-like, protects employer from OWN employees. Different structure entirely from the three-party surety bond.",
      },
      {
        title: "License, Permit, and Contract Bonds",
        explanation:
          "License and permit bonds guarantee that a business holding a license — like a contractor or a notary — will comply with the laws and regulations tied to that license; if they violate those rules and cause harm, the bond compensates the affected party. Contract bonds, common in construction, include bid bonds (guaranteeing a contractor who wins a bid will actually sign the contract), performance bonds (guaranteeing the contractor will complete the work to contract specifications), and payment bonds (guaranteeing the contractor will pay their subcontractors and suppliers).",
        examFocus:
          "Memorize the three contract bond types and their single job each: bid (will sign), performance (will finish to spec), payment (will pay subs/suppliers).",
      },
    ],
    examTraps: [
      "The biggest trap: a surety bond is NOT insurance for the principal — the surety expects to be repaid if it pays a claim, since the bond guarantees the principal's performance to a third party (the obligee).",
      "Don't confuse fidelity bonds (protect against YOUR OWN employees' dishonesty) with surety bonds (guarantee performance to an outside party) — different purpose entirely.",
      "Three-party structure to memorize: principal performs, obligee is protected, surety guarantees — exam questions often describe a scenario and ask you to identify which party is which.",
    ],
  },
  {
    slug: "pc-property-specialty-lines",
    track: "property-casualty",
    title: "Commercial Property, Inland Marine & Specialty Lines",
    summary: "Dwelling forms, commercial property, inland marine, and the specialty lines the exam tests outside basic homeowners.",
    videoSearch: "dwelling policy DP forms inland marine NFIP explained insurance exam",
    concepts: [
      {
        title: "Dwelling Policies (DP-1, DP-2, DP-3)",
        explanation:
          "Dwelling policies insure a dwelling that doesn't qualify for or doesn't need a homeowners policy — common for rental properties or homes that don't meet homeowner underwriting standards. DP-1 is the basic form, covering only a short list of named perils (fire, lightning, and a few others) on an actual cash value basis. DP-2 (broad form) expands the named perils list significantly and typically pays replacement cost on the dwelling. DP-3 (special form) covers the dwelling on an open-perils basis, mirroring how HO-3 treats the dwelling, while contents remain named-perils.",
        examFocus:
          "Rank them by breadth: DP-1 (narrowest, ACV) < DP-2 (broader, named perils) < DP-3 (broadest, open-perils dwelling) — mirrors the HO-3 dwelling/contents split.",
      },
      {
        title: "Commercial Property Forms",
        explanation:
          "Commercial property coverage is typically built from a Commercial Package Policy (CPP), which combines a commercial property form with a causes-of-loss form (basic, broad, or special — controlling which perils are covered) and can add business income and extra expense coverage. Business income coverage replaces lost net income and continuing expenses during a shutdown from a covered loss; extra expense coverage pays the additional costs of speeding up the resumption of operations. Equipment breakdown coverage (formerly called boiler and machinery) covers mechanical or electrical breakdown of equipment, which is specifically excluded under standard property forms.",
        examFocus:
          "Business income = lost income/profit during shutdown. Extra expense = the EXTRA cost to keep operating or reopen faster. They're complementary, not duplicates, and equipment breakdown fills the gap standard property forms exclude.",
      },
      {
        title: "Builder's Risk and Cyber First-Party Coverage",
        explanation:
          "Builder's risk insurance covers a structure while it's under construction, including materials on site — it's written for the construction period and typically converts to or is replaced by a standard property policy once the building is completed and occupied. Cyber first-party coverage is a newer specialty line that pays the policyholder's OWN costs from a cyber event: data restoration, business interruption from a system outage, ransomware payments, and notification costs — distinct from cyber liability, which pays third parties harmed by a breach of their data.",
        examFocus:
          "Cyber FIRST-PARTY pays the insured's own costs (data recovery, downtime); cyber LIABILITY pays third parties whose data was exposed. Builder's risk runs only during construction, not after occupancy.",
      },
      {
        title: "Inland Marine and the National Flood Insurance Program",
        explanation:
          "Inland marine covers property that moves or is in transit — personal articles floaters (jewelry, cameras, fine art) and commercial property floaters (contractor's equipment, goods in transit) are scheduled separately because standard property forms don't follow property away from a fixed location well. The National Flood Insurance Program (NFIP) is a federal program providing flood coverage that standard homeowners and commercial property policies specifically exclude — flood coverage must be purchased separately, either through NFIP or private flood insurance.",
        examFocus:
          "Standard property policies EXCLUDE flood — it's a specifically separate purchase through NFIP or a private flood policy. Inland marine exists because property in transit/away from premises doesn't fit a standard fixed-location property form.",
      },
      {
        title: "Earthquake, Mobile Homes, Farm/Ranch, and Windstorm",
        explanation:
          "Like flood, earthquake is typically excluded from standard property policies and must be added by endorsement or purchased as a separate policy, often with its own higher deductible expressed as a percentage of the dwelling's value. Mobile/manufactured homes use specialized forms (similar in structure to HO policies but adapted for the unique risks of manufactured housing, like tie-down requirements and transit exposure). Farm/ranch policies combine dwelling, personal property, farm structures, equipment, and livestock coverage that a standard homeowners policy doesn't contemplate. In coastal or wind-prone areas, windstorm coverage may also be carved out with its own separate deductible or policy, similar to earthquake.",
        examFocus:
          "Earthquake and windstorm both commonly use a PERCENTAGE deductible (e.g. 2-10% of dwelling value) rather than a flat dollar amount — a frequently tested distinction from standard peril deductibles.",
      },
    ],
    examTraps: [
      "Flood and earthquake are both standard exclusions on ordinary property policies — both require a separate policy or endorsement, and both commonly use percentage-based deductibles rather than flat dollar amounts.",
      "Don't confuse cyber first-party (pays the insured's own recovery costs) with cyber liability (pays third parties) — exam scenarios often describe one and ask which coverage responds.",
      "Builder's risk only covers the construction period — once the building is completed and occupied, it needs to convert to a standard property policy.",
      "DP forms rank by breadth just like HO forms: DP-1 is narrowest (named perils, ACV), DP-3 is broadest (open-perils dwelling).",
    ],
  },
  {
    slug: "pc-property-provisions",
    track: "property-casualty",
    title: "Property Policy Provisions & Contract Law",
    summary: "Declarations, conditions, exclusions, and the core terms that define how a property policy actually responds to a loss.",
    videoSearch: "property insurance policy provisions declarations conditions exclusions explained",
    concepts: [
      {
        title: "The Four Parts of Every Property Policy",
        explanation:
          "Every property policy is built from four standard parts. The declarations page lists the specific facts of the policy — who's insured, the property address, limits, deductibles, and the policy period. The insuring agreement is the insurer's core promise to pay for covered losses. Conditions are the rules both parties must follow for coverage to apply, like the duty to report a loss promptly or cooperate with an investigation. Exclusions list what's specifically NOT covered, even though it might otherwise fall under the insuring agreement.",
        examFocus:
          "Know where to look for each type of fact: limits/deductibles/who's-insured → declarations; the core promise to pay → insuring agreement; rules you must follow → conditions; carve-outs → exclusions.",
      },
      {
        title: "Proximate Cause, Indemnity, and Limits of Liability",
        explanation:
          "Proximate cause is the dominant, efficient cause that sets a chain of events in motion leading to a loss — insurers trace back to the proximate cause to determine if a loss is covered, even if a covered peril and an excluded peril both contributed. Indemnity is the core principle that insurance should restore the insured to their financial position before the loss — no better, no worse — which is why insurers use actual cash value and replacement cost rather than just handing over a policy's face value. Limits of liability cap the maximum the insurer will pay, whether per occurrence, per item (special limits on categories like jewelry), or as an aggregate over the policy period.",
        examFocus:
          "Indemnity means restore, not enrich — a recurring theme behind loss valuation methods. Proximate cause questions usually describe a chain of events and ask which peril actually triggered coverage.",
      },
      {
        title: "Occurrence, Vacancy, and Liability Types",
        explanation:
          "An occurrence is an event (or continuous/repeated exposure to conditions) causing a loss, and it's the trigger most property and liability policies use to define when coverage applies. Vacancy and unoccupancy provisions matter because insurers consider an empty building a higher risk (more prone to vandalism, undiscovered damage) — many policies limit or suspend certain coverages after a building sits vacant beyond a specified period, commonly 60 days. Liability comes in several flavors tested on this exam: absolute liability (responsible regardless of fault or care taken, rare and tied to inherently dangerous activities), strict liability (liable for harm caused by a product or activity without needing to prove negligence), and vicarious liability (liability imposed on one party for the acts of another, like an employer for an employee).",
        examFocus:
          "Vacancy provisions typically kick in around 60 days unoccupied — coverage doesn't vanish entirely but often narrows (e.g., vandalism/theft may be excluded while fire stays covered). Match liability type to its trigger: absolute = inherently dangerous activity, strict = product/activity without needing negligence, vicarious = responsible for ANOTHER's acts.",
      },
      {
        title: "Subrogation, Other Insurance, and TRIA",
        explanation:
          "Subrogation is the insurer's right to recover what it paid out from a third party who actually caused the loss — after paying the insured's claim, the insurer can pursue the at-fault party (or their insurer) for reimbursement, and the insured generally can't waive this right after a loss without insurer consent. The other insurance provision addresses what happens when a loss is covered by more than one policy, typically prorating payment between insurers rather than allowing the insured to collect twice. The Terrorism Risk Insurance Act (TRIA) is a federal program requiring insurers to offer terrorism coverage and providing a federal backstop for the insurance industry against catastrophic terrorism losses.",
        examFocus:
          "Subrogation = insurer steps into the insured's shoes to collect from the at-fault party — it's why you shouldn't sign a release with an at-fault party before your insurer settles your claim. TRIA exists at the federal level specifically for terrorism risk, distinct from standard state-regulated coverage.",
      },
    ],
    examTraps: [
      "Subrogation rights belong to the INSURER after they pay a claim — an insured who releases the at-fault party from liability before the insurer settles can jeopardize their own claim.",
      "Vacancy provisions narrow coverage after a set period (often 60 days) — they don't always cancel the policy outright, but they commonly suspend coverage for perils like vandalism or theft.",
      "Absolute, strict, and vicarious liability are easy to mix up — absolute ties to inherently dangerous activity, strict applies without needing to prove negligence (often product liability), vicarious means liability for someone ELSE's act.",
      "Indemnity is a restore-don't-enrich principle — it's the reasoning behind why insurers use ACV/replacement cost rather than paying a flat face amount regardless of actual loss.",
    ],
  },
  {
    slug: "pc-casualty-crime-professional",
    track: "property-casualty",
    title: "Crime Coverage & Professional Liability",
    summary: "The specific crime sub-types and professional liability variants the exam tests beyond basic CGL.",
    videoSearch: "crime insurance coverage employee dishonesty errors and omissions explained",
    concepts: [
      {
        title: "Crime Coverage Sub-Types",
        explanation:
          "Crime coverage isn't one single thing — the exam tests several distinct sub-types. Employee dishonesty (sometimes called employee theft) covers losses from an employee's fraudulent or dishonest acts, like embezzlement. Theft is the broadest term for unlawfully taking property. Robbery specifically involves taking property from a person by force, threat, or violence. Burglary involves unlawful entry into a premises (typically requiring visible signs of forced entry) to steal property. Forgery and alteration covers losses from forged or altered financial instruments like checks. Mysterious disappearance covers property that vanishes without any explanation or evidence of how it was lost.",
        examFocus:
          "Distinguish by HOW the loss happens: robbery = force/threat against a PERSON, burglary = forced entry into a PREMISES, mysterious disappearance = no explanation at all, employee dishonesty = an inside job by your own staff.",
      },
      {
        title: "Errors & Omissions and Medical Malpractice",
        explanation:
          "Errors & Omissions (E&O) coverage protects professionals against claims that their negligent act, error, or omission in performing professional services caused a client financial harm — it's the professional-services equivalent of CGL's bodily injury/property damage focus, but for financial/reputational harm from bad professional advice or service. Medical malpractice is essentially E&O for healthcare providers, covering claims of negligent diagnosis, treatment, or care that harms a patient.",
        examFocus:
          "E&O protects against financial harm from professional mistakes/advice, not bodily injury or property damage — that distinction (financial vs. physical harm) is the core difference from general liability.",
      },
      {
        title: "Directors & Officers and Employment Practices Liability",
        explanation:
          "Directors and Officers (D&O) liability protects a company's directors and officers from claims related to their decisions made in managing the company — shareholders, regulators, or other parties alleging mismanagement, breach of fiduciary duty, or similar governance failures. Employment Practices Liability Insurance (EPLI) covers claims by employees against the employer for things like wrongful termination, discrimination, harassment, or retaliation — a distinct and increasingly significant liability exposure that standard CGL specifically excludes.",
        examFocus:
          "D&O protects decision-makers from claims about how they RAN the company; EPLI protects the employer from claims brought by its own EMPLOYEES over workplace treatment. Both are excluded under standard CGL — they require separate, specific policies.",
      },
      {
        title: "Cyber Liability and Liquor Liability",
        explanation:
          "Cyber liability (the third-party counterpart to cyber first-party coverage) pays for claims by others harmed when the insured's data breach exposes their personal information — including legal defense, settlements, and regulatory fines. Liquor liability covers businesses that manufacture, sell, or serve alcohol against claims arising from an intoxicated person's actions — this is a standard CGL exclusion that must be added back by endorsement or a separate policy for any business in the business of serving or selling alcohol.",
        examFocus:
          "Liquor liability is a notable standard CGL EXCLUSION for businesses serving/selling alcohol — they need a specific endorsement or separate policy, a frequently tested 'what's NOT covered by a base CGL' fact.",
      },
    ],
    examTraps: [
      "Robbery requires force or threat against a PERSON; burglary requires forced entry into a PREMISES — exam scenarios will describe one and ask you to name it correctly.",
      "E&O and medical malpractice cover FINANCIAL/professional harm from mistakes in service, not bodily injury from an accident — that's what separates them from general liability.",
      "D&O and EPLI are both standard CGL exclusions requiring their own policy — D&O is about company governance decisions, EPLI is about employee workplace claims.",
      "Liquor liability is excluded from standard CGL for any business serving/selling alcohol — don't assume a restaurant's CGL automatically covers an intoxication-related claim.",
    ],
  },
  {
    slug: "pc-casualty-provisions",
    track: "property-casualty",
    title: "Casualty Policy Provisions & Damages",
    summary: "Declarations, exclusions, duties after a loss, and the damages terminology the exam tests on liability claims.",
    videoSearch: "liability insurance policy provisions damages compensatory punitive explained",
    concepts: [
      {
        title: "Declarations, Conditions, and Exclusions in Liability Policies",
        explanation:
          "Just like property policies, casualty/liability policies are built from declarations (who's insured, limits, policy period), an insuring agreement (the promise to pay for covered bodily injury or property damage the insured is legally liable for), conditions (duties like notifying the insurer promptly and cooperating with defense), and exclusions (carve-outs like intentional acts, which are excluded because insurance is meant to cover accidental, not deliberate, harm).",
        examFocus:
          "Intentional acts are a near-universal liability exclusion — insurance covers ACCIDENTAL harm the insured is liable for, not harm they intended to cause.",
      },
      {
        title: "Duties of the Insured After a Loss",
        explanation:
          "Liability policies impose specific duties on the insured once a claim or potential claim arises: promptly notify the insurer, avoid voluntarily making payments or admitting liability without the insurer's consent, and cooperate with the insurer's investigation and defense. Violating these duties — like settling directly with a claimant without telling the insurer — can jeopardize coverage for that claim, since the insurer loses its ability to control and properly evaluate its own defense.",
        examFocus:
          "Never let an insured \"voluntarily assume liability\" or pay a claimant directly without the insurer's involvement — this is one of the most frequently tested duties-after-loss facts.",
      },
      {
        title: "Loss Settlement, Consent to Settle, and Other Insurance",
        explanation:
          "Loss settlement provisions describe how a covered liability claim gets resolved — typically the insurer has the right (and duty) to defend and may settle a claim within policy limits, sometimes requiring the insured's consent to settle depending on the policy. The other insurance provision in liability policies, like in property, addresses how multiple applicable policies share a loss, usually through pro rata sharing or a primary/excess relationship rather than allowing a double recovery.",
        examFocus:
          "An insurer typically has both the right AND the duty to defend a covered liability claim — defense costs are usually paid in addition to, not subtracted from, the liability limit (verify this nuance against the specific policy form referenced).",
      },
      {
        title: "Compensatory vs. Punitive Damages",
        explanation:
          "Damages awarded in a liability claim fall into two main categories. Compensatory damages reimburse the actual harm suffered — split into general damages (non-economic harm like pain and suffering, which has no precise dollar receipt) and special damages (economic harm with calculable amounts, like medical bills and lost wages). Punitive damages are different in purpose entirely: they're not meant to compensate the victim but to punish the wrongdoer for especially reckless or malicious conduct, and many states restrict or prohibit insurance from covering punitive damages as a matter of public policy.",
        examFocus:
          "General damages = non-economic (pain/suffering), special damages = economic/calculable (medical bills, lost wages) — both are compensatory. Punitive damages punish the wrongdoer and are often NOT insurable as a matter of public policy.",
      },
    ],
    examTraps: [
      "An insured who settles directly with a claimant or admits fault without the insurer's consent can lose coverage for that claim — duties after loss are heavily tested.",
      "Intentional acts are excluded from liability coverage almost universally — insurance is for accidental liability, not deliberate harm.",
      "General damages (non-economic, like pain/suffering) and special damages (economic, like medical bills) are both forms of COMPENSATORY damages — don't confuse either with punitive damages, which punish rather than compensate.",
      "Punitive damages are frequently NOT insurable as a matter of public policy — a detail the exam likes to test against the assumption that 'liability insurance covers all damages.'",
    ],
  },
  {
    slug: "pc-regulation-idaho-general",
    track: "property-casualty",
    title: "Idaho Insurance Law: Licensing & Marketing Practices",
    summary:
      "Idaho Title 41 statutes common to every line — Director's authority, producer licensing, and unfair trade practices. Worth roughly 12 of the 138 scored questions on the Idaho P&C exam.",
    videoSearch: "Idaho insurance producer license Title 41 explained",
    concepts: [
      {
        title: "The Director of the Department of Insurance",
        explanation:
          "Idaho Code 41-203 makes the Director of the Department of Insurance the state official responsible for administering Idaho's insurance laws. The Director (or their examiners) can conduct examinations of insurers and producers (41-210, 219, 220), hold hearings and issue orders (41-212, 232, 235), and levy penalties for violations (41-117, 117A). The Director's authority is the backbone of every licensing and enforcement question on the Idaho-specific portion of the exam — almost every 'who has the power to...' question traces back to this office.",
        examFocus:
          "Memorize: the Director of the Department of Insurance holds examination, hearing, and penalty authority under Title 41. If a question asks who can suspend a license or order a hearing, the answer is the Director.",
      },
      {
        title: "Who Must Be Licensed and How",
        explanation:
          "Under 41-1003(8) and 41-1004, anyone who sells, solicits, or negotiates insurance in Idaho must hold a producer license. Idaho distinguishes resident producers — who live in and primarily transact business in Idaho, per the definitions in 41-1003 — from nonresident producers (41-1009, 1010), who hold a home-state license and obtain an Idaho nonresident license through reciprocity. To obtain a license, an applicant must meet qualification requirements (41-1007), submit a license application (41-1006, 1007), and pass the written exam (41-1006) unless an exemption applies (41-1005, 1007(4), 1012). The Director can deny or refuse a license under 41-1011, 1016.",
        examFocus:
          "Property and casualty are separate lines of authority in Idaho — selling both requires passing both exams and holding both lines on one license. Resident vs. nonresident is about where the producer lives and primarily transacts business, not where they're selling a particular policy.",
      },
      {
        title: "Maintaining a License: CE, Renewal, and Discipline",
        explanation:
          "Once licensed, an Idaho producer must complete continuing education (41-1013, IDAPA 18.06.04), keep their license current through renewal and fee payment (41-1008, IDAPA 18.01.02), keep accurate records (41-1036), and report any change of address or place of business (41-1008(6), 1009(3)). Licenses expire under 41-1013 if not renewed. The Director can suspend or revoke a license — including for a felony conviction — under 41-1016 and 41-1026. Producers also owe Idaho a fiduciary duty over premium funds they handle (41-1024, 1323, 1325, 1803) and must disclose and properly charge any fees beyond commission (41-1030).",
        examFocus:
          "A felony conviction is explicit grounds for suspension or revocation under 41-1016/1026 — this is a frequently tested 'which of these can cost you your license' fact. Producers must report changes of address; failing to do so is itself a violation.",
      },
      {
        title: "Unfair Trade Practices (Twisting, Rebating, and More)",
        explanation:
          "Idaho Code 41-1303 through 41-1315 lists specific unfair methods of competition. Rebating (41-1314) is offering anything of value not stated in the policy to induce a sale. Misrepresentation and false advertising (41-1303, 1304) involve misleading statements about a policy or insurer. Twisting (41-1305) is inducing a policyholder to replace an existing policy through misrepresentation. Defamation (41-1308), false financial statements (41-1306), boycott/coercion/intimidation (41-1309), unfair discrimination (41-1313, 1315), coercion of a borrower (41-1310-1312), and fraud (41-290, 293) round out the list. Violating these provisions exposes a producer to penalties under 41-117, 1016, 1327, 1329A. Separately, 41-1328/1329/1839/3611 govern unfair claims practices by insurers.",
        examFocus:
          "Drill the keyword pairs: REPLACE + lie about it = twisting (41-1305). Anything of value not in the policy to induce a sale = rebating (41-1314). The exam frequently presents a one-sentence scenario and asks you to name the Idaho code violation.",
      },
    ],
    examTraps: [
      "Resident vs. nonresident licensing in Idaho hinges on where the producer lives and primarily transacts business (41-1003(9)), not where any single client is located.",
      "Property and casualty are separate Idaho lines of authority (41-1003(8), 1004) — don't assume one exam covers both lines of authority automatically.",
      "A felony conviction is named explicitly (41-1016, 1026) as grounds for license suspension/revocation — a frequently tested fact.",
      "Twisting targets the REPLACEMENT decision (41-1305); rebating targets the PURCHASE incentive (41-1314) — these are commonly swapped on exam scenarios.",
    ],
  },
  {
    slug: "pc-regulation-idaho-pc",
    track: "property-casualty",
    title: "Idaho Insurance Law: Property & Casualty Specifics",
    summary:
      "Idaho statutes specific to property and casualty contracts — rate filings, the Guaranty Association, financial responsibility, and UM/UIM. Worth roughly 11 of the 138 scored questions.",
    videoSearch: "Idaho property casualty insurance law financial responsibility explained",
    concepts: [
      {
        title: "Insurance Contracts, Binders, and Countersignature",
        explanation:
          "Idaho Code 41-1823 governs binders — the temporary written or oral agreement that provides coverage while the formal policy is being prepared. Insurance contracts more broadly (renewal, nonrenewal, cancellation of commercial, homeowners, personal auto, and casualty policies) are addressed in 41-1806, 1811, 1814-15, 1817, 1828, 1831, 1841-43, and 1850. A countersignature requirement (41-337, 338, 1023) means certain policies must be signed by a licensed resident agent before they're valid in Idaho — a holdover protection ensuring a local licensed producer is involved in the transaction.",
        examFocus:
          "A binder (41-1823) provides IMMEDIATE temporary coverage before the policy is issued — know that it's enforceable even if oral, pending the actual policy.",
      },
      {
        title: "Rate Filings and the Idaho P&C Guaranty Association",
        explanation:
          "Under 41-1401, 1402, and 1405, P&C insurers must file their rates with the Idaho Department of Insurance, and rates can't be excessive, inadequate, or unfairly discriminatory. Idaho's Insurance Guaranty Association Act (41-3603, 3606, 3607) protects P&C policyholders if their insurer becomes insolvent — the Guaranty Association steps in to pay covered claims up to statutory limits, funded by assessments on other licensed P&C insurers in the state. (Life and Health has its own separate guaranty fund under the Idaho Life and Health Insurance Guaranty Association Act, Title 41 Chapter 43.)",
        examFocus:
          "The Guaranty Association pays claims when an INSURER becomes insolvent — it does not protect against bad investment decisions, fraud by the policyholder, or claims above the statutory limit.",
      },
      {
        title: "Property-Specific: Standard Fire Policy and Inland Marine",
        explanation:
          "Idaho's standard fire policy provisions (41-2401) set the baseline coverage form that Idaho fire insurance must follow at minimum. Marine and inland marine coverage in Idaho is referenced in 41-505 and 41-1401. The National Flood Insurance Program (NFIP) is addressed by Idaho Bulletin 07-1, reflecting that flood coverage is a federal program administered through participating private insurers rather than a typical state-regulated line.",
        examFocus:
          "Flood insurance (NFIP) is a FEDERAL program — Idaho doesn't regulate flood rates the way it regulates standard P&C rates. This federal/state distinction is a common trap.",
      },
      {
        title: "Casualty-Specific: Financial Responsibility and UM/UIM",
        explanation:
          "Idaho's financial responsibility law (Title 49, Chapter 12, including 49-1212 and 49-1232) requires drivers to be able to demonstrate they can pay for damages they cause — almost always satisfied by carrying liability auto insurance, though Idaho also allows a bond or cash deposit as alternative methods. Uninsured/underinsured motorist coverage (41-2502, 2504) protects a driver when the at-fault party has no insurance or not enough. Idaho also has a mature driver discount provision (41-2515) for completing an accident prevention course, an assigned risk plan (41-1441, 2508(4)) for drivers who can't get coverage in the standard market, and follows comparative negligence (Idaho Code 6-802) rather than pure contributory negligence — meaning a partially at-fault claimant can still recover damages, reduced by their percentage of fault.",
        examFocus:
          "Idaho is a comparative negligence state (6-802) — a claimant who is partly at fault can still recover a reduced amount. This is different from a handful of states that bar any recovery if the claimant is even 1% at fault.",
      },
    ],
    examTraps: [
      "A binder (41-1823) creates coverage immediately, even before the full policy is issued — don't confuse it with an application, which creates no coverage by itself.",
      "The Idaho P&C Guaranty Association protects against INSURER insolvency, not against denied claims from a solvent insurer.",
      "NFIP flood coverage is federally administered — distinguish it from state-regulated standard fire and inland marine coverage.",
      "Idaho follows comparative negligence (6-802): being partially at fault reduces, but does not eliminate, a claimant's recovery.",
    ],
  },
];

export const tracks = {
  "life-health": "Life & Health",
  "property-casualty": "Property & Casualty",
} as const;
