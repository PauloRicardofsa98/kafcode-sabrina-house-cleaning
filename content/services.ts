/**
 * Serviços.
 *
 * `slug` e `image` são compartilhados pelos três idiomas (aparecem nos cards da
 * home e no hub). O objeto `page` é a copy longa da página individual, que é
 * **EN-only** por decisão de escopo, porque é onde está o tráfego de busca.
 */

export const serviceSlugs = [
  "recurring-cleaning",
  "deep-cleaning",
  "move-in-move-out",
  "post-construction",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export type Service = {
  slug: ServiceSlug;
  image: string;
  imageAlt: string;
  /** Copy longa, apenas em inglês. */
  page: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    intro: string[];
    includes: { group: string; items: string[] }[];
    goodFor: string[];
    duration: string;
    tip: { title: string; body: string };
    faq: { q: string; a: string }[];
  };
};

export const services: Service[] = [
  {
    slug: "recurring-cleaning",
    image: "/images/services/recurring-cleaning-bay-area-home.webp",
    imageAlt:
      "Tidy kitchen counter and clean hardwood floor in a Bay Area home after a recurring cleaning visit",
    page: {
      metaTitle: "Recurring House Cleaning: Weekly, Bi-Weekly & Monthly",
      metaDescription:
        "Weekly, bi-weekly or monthly house cleaning across San Francisco and the Peninsula. Same cleaner every visit, flat pricing, supplies included. Free quote by text.",
      h1: "Recurring house cleaning",
      lead: "The same person, on the same day, doing the same thorough job, so your home never gets far enough behind to need rescuing.",
      intro: [
        "Recurring cleaning is what most of our clients settle into after a first deep clean. It costs less per visit than a one-off, and it stays that way because a home that's cleaned regularly simply takes less work each time.",
        "The part that matters more than the price: you keep the same cleaner. She learns that the guest room isn't used, that the espresso machine has a specific cloth, that the dog is friendly but the cat hides under the bed. That knowledge is the whole difference between a service and a stranger in your house.",
      ],
      includes: [
        {
          group: "Kitchen",
          items: [
            "Counters, backsplash and sink scrubbed and dried",
            "Outside of all appliances, including handles and control panels",
            "Stovetop degreased, grates wiped",
            "Cabinet fronts spot-cleaned",
            "Floors vacuumed and mopped, edges included",
            "Trash out, bin wiped, liner replaced",
          ],
        },
        {
          group: "Bathrooms",
          items: [
            "Toilet cleaned inside, outside, base and behind",
            "Shower and tub scrubbed, glass and door tracks cleared",
            "Sink, faucet base and counters",
            "Mirrors polished streak-free",
            "Floors washed by hand at the edges",
          ],
        },
        {
          group: "Bedrooms & living areas",
          items: [
            "Beds made, or linens changed if you leave them out",
            "All reachable surfaces dusted, including shelves and picture frames",
            "Mirrors and glass",
            "Under and behind furniture that moves",
            "Vacuum and mop throughout",
          ],
        },
        {
          group: "Throughout",
          items: [
            "Light switches and door handles",
            "Baseboards, alternating rooms each visit",
            "Interior window sills",
            "Cobwebs in corners and ceiling lights",
          ],
        },
      ],
      goodFor: [
        "Households where everyone works and nobody wants to spend Saturday cleaning",
        "Homes with pets, where hair builds up faster than anything else",
        "Families with small children",
        "Anyone who has tried a big agency and got a different crew every time",
      ],
      duration: "Typically 2–4 hours depending on the size of the home. Bi-weekly is the most common choice.",
      tip: {
        title: "Start with a deep clean, then go recurring",
        body: "If your home hasn't had a professional clean in a while, the first visit should be a deep clean. It resets the baseline so the recurring visits can stay at recurring prices instead of quietly turning into rescue missions.",
      },
      faq: [
        {
          q: "How often should I book?",
          a: "Bi-weekly works for most households and gives the best value per clean. Weekly makes sense with pets, small children, or a home where people are in and out all day. Monthly is enough for smaller places or homes that stay tidy in between.",
        },
        {
          q: "Do I get the same cleaner each time?",
          a: "Yes, that's the point of the service. If she's ever unavailable, we tell you in advance and you decide whether to move the visit or accept a substitute.",
        },
        {
          q: "Can I skip a week?",
          a: "Of course. Text us at least 24 hours ahead and there's no fee. Your slot is held for the following visit.",
        },
        {
          q: "Do I need to be home?",
          a: "No. Most recurring clients aren't. Leave a key, a lockbox code or building instructions and we'll text you when we arrive and when we finish.",
        },
      ],
    },
  },
  {
    slug: "deep-cleaning",
    image: "/images/services/deep-cleaning-kitchen-san-francisco.webp",
    imageAlt:
      "Close-up of a spotless oven interior and scrubbed tile grout during a deep cleaning in a San Francisco kitchen",
    page: {
      metaTitle: "Deep Cleaning Services in San Francisco & the Bay Area",
      metaDescription:
        "Top-to-bottom deep cleaning: inside the oven and fridge, grout, baseboards, window tracks and everything routine cleaning misses. Flat price, quoted by text.",
      h1: "Deep cleaning",
      lead: "Everything a normal clean skips, done once and done properly, so the house is back to a baseline you can actually maintain.",
      intro: [
        "A deep clean is not a longer regular clean. It's a different job: we take apart what can be taken apart, get behind and underneath things, and attack the build-up that accumulates in places nobody cleans weekly because nobody has four spare hours on a Wednesday.",
        "Most people book one after a period without help, before hosting family, at the start of spring, or as the first visit before switching to a recurring schedule.",
      ],
      includes: [
        {
          group: "Kitchen, in detail",
          items: [
            "Inside the oven, including racks and door glass",
            "Inside the refrigerator, shelves removed and washed",
            "Inside the microwave, top and turntable",
            "Range hood and filter degreased",
            "Cabinet fronts washed, tops of cabinets dusted",
            "Backsplash grout scrubbed",
            "Behind and under the appliances that move",
          ],
        },
        {
          group: "Bathrooms, in detail",
          items: [
            "Tile and grout scrubbed, not just wiped",
            "Hard-water and soap scum removed from glass",
            "Shower door tracks cleared out",
            "Showerhead and faucet descaled",
            "Extractor fan cover cleaned",
            "Behind the toilet and along the base",
          ],
        },
        {
          group: "Everywhere else",
          items: [
            "All baseboards washed by hand, not dusted",
            "Door frames, doors and handles",
            "Light switches and outlet plates",
            "Interior windows, sills and tracks",
            "Ceiling fans and light fixtures",
            "Vents and air returns",
            "Behind and under furniture that can be moved safely",
            "Radiators and heaters",
          ],
        },
      ],
      goodFor: [
        "Homes that haven't had professional cleaning in six months or more",
        "The first visit before starting a recurring schedule",
        "Before family visits, a party, or the holidays",
        "Rentals between long-term tenants",
        "Anyone who has looked at their oven and quietly closed it again",
      ],
      duration:
        "Usually 4–8 hours, sometimes across two visits for larger homes. We tell you which before we start.",
      tip: {
        title: "Tell us the worst three things",
        body: "When you text for a quote, name the three areas that bother you most: the oven, the shower glass, the window tracks. It lets us price accurately and make sure the time goes where you actually want it.",
      },
      faq: [
        {
          q: "How is this different from a regular cleaning?",
          a: "A regular clean maintains a level. A deep clean sets one. We go inside appliances, scrub grout instead of wiping it, wash baseboards by hand and move furniture. None of that fits in a routine visit.",
        },
        {
          q: "Do I need a deep clean before recurring service?",
          a: "Only if the home hasn't been professionally cleaned recently. We'll tell you honestly when you send photos or describe the place. Sometimes the answer is no.",
        },
        {
          q: "How much more does it cost than a regular clean?",
          a: "It depends on the size and condition, but expect it to be meaningfully more than a routine visit, because it's several times the work. You get the exact flat price by text before booking.",
        },
        {
          q: "Do you clean inside cabinets and closets?",
          a: "Inside kitchen cabinets and closets isn't included by default, because it requires emptying them. Ask for it when you get your quote and we'll add it in.",
        },
      ],
    },
  },
  {
    slug: "move-in-move-out",
    image: "/images/services/move-out-cleaning-empty-apartment.webp",
    imageAlt:
      "Empty apartment with bare floors and open closets being cleaned before a move-out inspection",
    page: {
      metaTitle: "Move-In & Move-Out Cleaning in San Francisco & the Peninsula",
      metaDescription:
        "Empty-home cleaning built around the deposit inspection: inside cabinets, appliances, closets, blinds and tracks. Flat price, quoted by text, fast turnaround.",
      h1: "Move-in and move-out cleaning",
      lead: "The clean that decides whether you get your deposit back, or whether your first night in a new place feels like a fresh start.",
      intro: [
        "An empty home is cleaned differently. With nothing in the way, everything is reachable and everything is visible, which is exactly how a landlord or a property manager will look at it during the walkthrough.",
        "We work from the checklist those inspections actually use: inside every cabinet and drawer, inside the appliances, closet shelves and rods, blind slats, window tracks, and the marks left behind on walls and baseboards where furniture used to sit.",
      ],
      includes: [
        {
          group: "Kitchen",
          items: [
            "Inside every cabinet and drawer, top and bottom",
            "Inside and behind the refrigerator",
            "Inside the oven, broiler drawer and racks",
            "Inside the dishwasher, including the filter",
            "Range hood and filter",
            "Sink, faucet and disposal",
            "Countertops and backsplash",
          ],
        },
        {
          group: "Bathrooms",
          items: [
            "Inside vanity cabinets and drawers",
            "Medicine cabinet, inside and out",
            "Full tile and grout scrub",
            "Hard-water removal from glass and fixtures",
            "Toilet, inside and out, including the base and bolts",
            "Exhaust fan cover",
          ],
        },
        {
          group: "Throughout the home",
          items: [
            "Inside closets: shelves, rods and floors",
            "Interior windows, sills and tracks",
            "Blinds, slat by slat",
            "All baseboards and door frames washed",
            "Light fixtures, ceiling fans and vents",
            "Switch plates and outlet covers",
            "Scuff marks on walls where reachable",
            "Floors vacuumed and mopped last, after everything else",
          ],
        },
      ],
      goodFor: [
        "Tenants who want the full security deposit back",
        "Landlords and property managers preparing a unit for listing",
        "Buyers who want the place cleaned before the furniture arrives",
        "Anyone whose lease requires a professional cleaning receipt",
      ],
      duration:
        "Usually a single full day. Book it after the movers finish and before the walkthrough, because an empty home is much faster and much more thorough.",
      tip: {
        title: "Schedule it for the day after the truck leaves",
        body: "If we clean around boxes, the inspection will find whatever was under them. Give us the home genuinely empty and the result speaks for itself in the walkthrough.",
      },
      faq: [
        {
          q: "Will this get my deposit back?",
          a: "Cleanliness is the part of a deposit dispute you can control, and we clean to the standard those inspections use. We can't do anything about damage, paint or repairs, but the home will not fail on cleaning.",
        },
        {
          q: "Do you provide a receipt for my landlord?",
          a: "Yes. Many Bay Area leases require proof of professional cleaning, so just ask and we'll send you one.",
        },
        {
          q: "Can you clean carpets?",
          a: "We vacuum thoroughly, but hot-water carpet extraction is a separate trade with separate equipment. Tell us and we'll point you to someone who does it properly.",
        },
        {
          q: "How much notice do you need?",
          a: "Move-out dates cluster at the end of the month, so the earlier the better. A week is comfortable. If you're in a bind, text us anyway; we hold some short-notice slots.",
        },
      ],
    },
  },
  {
    slug: "post-construction",
    image: "/images/services/post-construction-cleaning-remodel.webp",
    imageAlt:
      "Freshly remodeled room with fine construction dust being removed from window frames and floors",
    page: {
      metaTitle: "Post-Construction & Post-Remodel Cleaning in the Bay Area",
      metaDescription:
        "Fine construction dust removed properly after a remodel: vents, fixtures, tracks, cabinets and multiple floor passes. Flat price, quoted by text.",
      h1: "Post-construction cleaning",
      lead: "Remodel dust is not normal dust. It's fine, it's everywhere, and it comes back twice after the first clean. That's exactly why it needs its own service.",
      intro: [
        "Drywall and sanding dust is light enough to stay airborne for hours and settles into everything: the tops of door frames, inside light fixtures, along window tracks, in the HVAC returns. Vacuum it once with a household machine and you mostly redistribute it.",
        "We work top-down in passes, with HEPA filtration, and we come back over the same surfaces after the air has settled. It's slower than a deep clean and it has to be, because the difference between a good post-construction job and a bad one shows up a week later when the dust reappears on every surface.",
      ],
      includes: [
        {
          group: "Dust removal, in passes",
          items: [
            "HEPA vacuum of ceilings, walls and all vertical surfaces",
            "Light fixtures, ceiling fans and recessed cans",
            "HVAC vents, returns and grilles",
            "Tops of doors, frames and trim",
            "Window frames, sills and tracks",
            "Second pass over everything once airborne dust has settled",
          ],
        },
        {
          group: "Surfaces and finishes",
          items: [
            "Adhesive and sticker residue off new fixtures and appliances",
            "Paint specks and grout haze on floors and glass",
            "Inside new cabinets and drawers",
            "Inside new appliances",
            "New tile and grout washed down",
            "Interior glass and mirrors polished",
          ],
        },
        {
          group: "Floors, last",
          items: [
            "HEPA vacuum, including edges and corners",
            "Damp mop, then a second pass with clean water",
            "Protective coverings and construction debris removed",
          ],
        },
      ],
      goodFor: [
        "Kitchen and bathroom remodels",
        "New floors, paint or drywall work",
        "ADU and in-law unit builds",
        "Contractors handing a project back to the owner",
      ],
      duration:
        "Depends entirely on the size of the work. Small bathroom remodels take a day; a whole-home renovation is usually scheduled across several.",
      tip: {
        title: "Book us after the last trade leaves",
        body: "If the trim carpenter is coming back on Thursday, Thursday afternoon is when to clean. Cleaning between trades means paying twice for the same dust.",
      },
      faq: [
        {
          q: "Can you clean while work is still going on?",
          a: "We can do a rough clean mid-project to make the space usable, but the detailed pass should wait until the last trade is out. Otherwise the dust simply comes back.",
        },
        {
          q: "Do you haul away construction debris?",
          a: "We remove packaging, coverings and the fine debris that comes with cleaning. Bulk material like lumber, drywall offcuts and old cabinets needs a hauler, and we're glad to recommend one.",
        },
        {
          q: "Why does dust come back after cleaning?",
          a: "Because the first clean lifts settled dust back into the air, where it hangs for hours before landing again. That's why our process is built around returning over the same surfaces instead of finishing in one pass.",
        },
        {
          q: "Do you work with contractors directly?",
          a: "Yes, regularly. Text us the project address and the handover date and we'll fit into the schedule.",
        },
      ],
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
