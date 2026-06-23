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
};

export const modules: Module[] = [
  {
    slug: "lh-life-basics",
    track: "life-health",
    title: "Life Insurance Basics",
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
    slug: "lh-regulation",
    track: "life-health",
    title: "Idaho Laws & Regulations (Life & Health)",
    summary: "State-specific rules tested on the Idaho L&H exam.",
    videoSearch: "Idaho insurance producer license laws and regulations",
    concepts: [
      {
        title: "Getting Licensed in Idaho",
        explanation:
          "Before anyone can sell life or health insurance in Idaho, they must complete state-approved pre-licensing education covering the lines of authority they intend to sell, then pass the corresponding state licensing exam. Once the exam is passed, the candidate submits a license application to the Idaho Department of Insurance, which includes a background check. Only after the license is issued can the person legally solicit, negotiate, or sell insurance products in the state. Selling without a valid license is a serious violation that can result in fines and bar future licensure.",
        examFocus:
          "Order of operations: pre-licensing education → pass exam → apply (background check) → license issued → THEN you may sell.",
      },
      {
        title: "Keeping a License Active",
        explanation:
          "Getting licensed is only the first step — Idaho requires producers to complete continuing education (CE) hours during each renewal period to keep their license active. This is separate and distinct from the pre-licensing education required to get the license in the first place; CE exists to keep producers current on changing laws, new products, and ethical practice standards. Failing to complete CE by the renewal deadline can result in the license lapsing, which would require the producer to stop selling insurance until it's resolved.",
        examFocus:
          "CE = renewal requirement (recurring); pre-licensing education = one-time, before the first license. Don't swap them.",
      },
      {
        title: "Unfair Practices and Misrepresentation",
        explanation:
          "Idaho insurance code prohibits a range of unfair trade practices designed to protect consumers. Misrepresentation — making false or misleading statements about a policy's terms, benefits, or the insurer's financial condition — is prohibited whether intentional or not. Unfair claims practices, such as unreasonably delaying or denying valid claims, misrepresenting policy provisions to deny a claim, or failing to adopt reasonable standards for prompt claim investigation, are also against the law. These rules exist because the insurer-policyholder relationship is inherently unequal in information and power, and the state has an interest in keeping insurers honest.",
        examFocus:
          "Misrepresentation is prohibited even if UNINTENTIONAL — intent doesn't matter for the violation to count.",
      },
      {
        title: "Replacement Disclosure Requirements",
        explanation:
          "When a producer helps a client replace an existing life or health policy with a new one — even if both policies are from the same insurer — specific disclosure requirements kick in. The producer must provide the client with information that allows them to compare the old and new policy, since replacing a policy can mean losing accumulated cash value, restarting contestability and suicide-exclusion periods, or facing new exclusions for pre-existing conditions. These rules exist specifically to combat \"twisting\" — inducing a client to replace a policy through misrepresentation or omission of these tradeoffs.",
        examFocus:
          "Disclosure trigger is REPLACEMENT itself — applies even within the same insurer. This is the rule that exists to prevent twisting.",
      },
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
    slug: "pc-regulation",
    track: "property-casualty",
    title: "Idaho Laws & Regulations (Property & Casualty)",
    summary: "State-specific rules tested on the Idaho P&C exam.",
    videoSearch: "Idaho property casualty insurance producer license laws",
    concepts: [
      {
        title: "Resident Licensing in Idaho",
        explanation:
          "A resident producer license in Idaho is for individuals who live in (and primarily transact insurance business in) Idaho. To get licensed, a candidate must complete pre-licensing education for each specific line of authority they intend to sell — property, casualty, or both are separate lines requiring separate education and exams — then pass the corresponding exam and apply through the Idaho Department of Insurance, which conducts a background check before issuing the license.",
        examFocus:
          "Key fact: property and casualty are SEPARATE lines of authority, each requiring their own pre-licensing education and exam — selling both requires both licenses.",
      },
      {
        title: "Twisting and Rebating",
        explanation:
          "Idaho law prohibits two distinct unfair practices that sound similar but work differently. Twisting is inducing a policyholder to replace their existing policy through misrepresentation — lying about or distorting the comparison between the old and new policy to make the replacement look better than it is. Rebating is offering a client something of value not stated in the policy itself (like cash back or a gift) to induce them to buy — essentially, an under-the-table incentive to make a sale. Both are illegal, but they target different moments: twisting targets the comparison/decision process, rebating targets the financial incentive to buy.",
        examFocus:
          "Match the act to the keyword: REPLACE + lie = twisting. BUY + extra incentive = rebating. The exam often gives a short scenario and asks you to name the violation.",
      },
      {
        title: "Cancellation and Nonrenewal Notice Requirements",
        explanation:
          "Insurers in Idaho can't simply drop a policyholder's coverage without warning — cancellation (ending a policy mid-term) and nonrenewal (declining to renew at the end of a term) both require advance written notice, with specific minimum notice periods set by Idaho law. This gives the policyholder time to shop for replacement coverage and avoid a gap in protection. The required notice period and process can differ for cancellation versus nonrenewal, and for different reasons (such as nonpayment versus underwriting decisions).",
        examFocus:
          "Distinguish cancellation (mid-term) from nonrenewal (end-of-term) — both require advance WRITTEN notice, but the required lead time can differ.",
      },
      {
        title: "Errors & Omissions and Continuing Obligations",
        explanation:
          "Errors & omissions (E&O) coverage protects the PRODUCER (not the client) from claims that they made a professional mistake — giving bad advice, failing to procure coverage they promised, or making a paperwork error that caused a client financial harm. Beyond E&O awareness, licensed producers in Idaho have ongoing administrative obligations: reporting changes of address or name to the Department of Insurance, and reporting certain criminal convictions or administrative actions taken against them in other states, since failing to disclose these can itself be grounds for license action.",
        examFocus:
          "E&O protects the PRODUCER, not the client — a frequently swapped detail. Also remember: failing to report a conviction/address change is itself a violation.",
      },
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
