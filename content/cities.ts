/**
 * Cidades atendidas.
 *
 * Cada cidade tem um ângulo próprio (tipo de construção, clima, perfil de morador)
 * porque página de cidade genérica é exatamente o que o Google trata como conteúdo
 * duplicado. A copy longa é **EN-only**; nos outros idiomas a cidade aparece
 * apenas como nome na listagem do hub.
 */

export type City = {
  slug: string;
  /** Nome próprio, igual nos três idiomas. */
  name: string;
  county: string;
  zips: string[];
  neighborhoods: string[];
  /** Slugs de cidades vizinhas, para links internos. */
  nearby: string[];
  image: string;
  imageAlt: string;
  /** Copy longa, apenas em inglês. */
  page: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    /** O que torna limpar nesta cidade diferente. */
    angle: { title: string; body: string }[];
    /** Detalhes locais concretos, em lista. */
    localNotes: string[];
    faq: { q: string; a: string }[];
  };
};

export const cities: City[] = [
  {
    slug: "san-francisco",
    name: "San Francisco",
    county: "San Francisco County",
    zips: ["94102", "94110", "94114", "94116", "94117", "94121", "94122", "94131"],
    neighborhoods: [
      "Noe Valley",
      "The Sunset",
      "The Richmond",
      "Bernal Heights",
      "Hayes Valley",
      "Potrero Hill",
      "The Mission",
      "Glen Park",
    ],
    nearby: ["daly-city", "south-san-francisco", "pacifica"],
    image: "/images/areas/house-cleaning-san-francisco-victorian.webp",
    imageAlt:
      "Row of painted Victorian homes on a San Francisco street with bay windows catching afternoon light",
    page: {
      metaTitle: "House Cleaning in San Francisco, CA",
      metaDescription:
        "House cleaning in San Francisco: Victorians, Edwardian flats and condos across Noe Valley, the Sunset, the Richmond and Bernal Heights. Text us for a free quote.",
      h1: "House cleaning in San Francisco",
      lead: "Victorians, Edwardian flats and hillside condos each ask for something different. After years of cleaning them, we know which is which before we walk in.",
      angle: [
        {
          title: "Old houses have more surfaces than new ones",
          body: "A 1910 Edwardian in the Richmond has tall baseboards, picture rails, panelled doors, deep window casings and original fir floors. Every one of those is a horizontal ledge collecting dust. A cleaner used to modern drywall boxes will finish an hour early and leave a grey line along every rail. We budget the time those details actually take, and we tell you upfront when a home needs more of it.",
        },
        {
          title: "Fog is a cleaning problem, not just weather",
          body: "Damp air west of Twin Peaks leaves a film on interior glass and sills, and it keeps bathrooms from drying out between showers. In the Sunset and the Richmond we treat window sills, tracks and bathroom grout as recurring items rather than deep-clean extras. Otherwise mildew wins by the third month.",
        },
        {
          title: "Buildings with rules, and streets with none",
          body: "Condo buildings downtown and in Mission Bay want a certificate of insurance and a booked freight elevator. Meanwhile a flat on a Bernal hill has no parking at all. Both are fine. We just need to know in advance so the visit starts on time instead of circling the block.",
        },
      ],
      localNotes: [
        "Steep-street parking planned ahead so the visit starts on schedule",
        "Original wood floors cleaned damp, never wet",
        "Bay window sills and tracks on every recurring visit, not just deep cleans",
        "Building COI and freight elevator paperwork handled before the first visit",
        "Garage-level entries and in-law units included in the quote, not billed later",
      ],
      faq: [
        {
          q: "Do you clean apartments and condos, or only houses?",
          a: "Both. A large share of our San Francisco work is flats and condos. If your building needs a certificate of insurance or a booked elevator, tell us when you text and we'll sort it before the first visit.",
        },
        {
          q: "Which San Francisco neighborhoods do you cover?",
          a: "We work across the city, with most of our regular clients in Noe Valley, Bernal Heights, the Sunset, the Richmond, Glen Park, Hayes Valley and Potrero Hill. Text us your ZIP code and we'll confirm straight away.",
        },
        {
          q: "Can you clean original hardwood floors?",
          a: "Yes. Old fir and oak floors get a damp mop with minimal water and no steam, because standing water and steam are what lift finish and open the seams.",
        },
        {
          q: "Is parking a problem?",
          a: "It's a scheduling detail, not a problem. Let us know if there's a driveway, a permit zone or a garage spot. If there isn't, we build the extra time into the plan instead of arriving late.",
        },
      ],
    },
  },
  {
    slug: "daly-city",
    name: "Daly City",
    county: "San Mateo County",
    zips: ["94014", "94015"],
    neighborhoods: [
      "Westlake",
      "Serramonte",
      "Original Daly City",
      "Crocker",
      "Broadmoor",
      "St. Francis Heights",
    ],
    nearby: ["san-francisco", "south-san-francisco", "pacifica"],
    image: "/images/areas/house-cleaning-daly-city-westlake.webp",
    imageAlt:
      "Rows of pastel mid-century Westlake homes in Daly City under a low coastal fog layer",
    page: {
      metaTitle: "House Cleaning in Daly City, CA",
      metaDescription:
        "House cleaning in Daly City: Westlake, Serramonte, Crocker and Broadmoor. Split-level homes, fog-belt damp and multigenerational households. Free quote by text.",
      h1: "House cleaning in Daly City",
      lead: "Westlake split-levels, busy multigenerational households and the dampest air on the Peninsula. Daly City has its own cleaning problems, and they're solvable.",
      angle: [
        {
          title: "Split-levels mean more stairs than square footage suggests",
          body: "The Doelger homes that define Westlake and St. Francis Heights are stacked across half-levels, with a garage below and living space above. The floor plan looks small on paper and takes longer than it looks in practice, mostly because of stairs, landings and the railings alongside them. We quote from the layout, not just the square footage.",
        },
        {
          title: "The fog belt earns its name",
          body: "Daly City sits in the thickest, most persistent fog on the Peninsula, and interior humidity follows it indoors. That shows up as mildew in bathroom grout, condensation rings on window sills and a musty smell in closets on exterior walls. We treat those as standing items on every visit here, because catching them monthly is easy and catching them annually is a deep clean.",
        },
        {
          title: "Homes with more people in them",
          body: "Many households here run multigenerational, which means more kitchen use, more bathroom use and more laundry than a two-person condo. Bi-weekly is usually the honest recommendation, and we'll say so even when weekly would bill more.",
        },
      ],
      localNotes: [
        "Stairs, landings and railings counted in the quote from the start",
        "Bathroom grout and window tracks treated as recurring, not deep-clean-only",
        "Closets on exterior walls checked for damp during winter months",
        "Garage-level rooms and converted spaces included when you want them",
        "Flexible timing around commuter and school-run schedules",
      ],
      faq: [
        {
          q: "Do you cover all of Daly City?",
          a: "Yes. Westlake, Serramonte, Original Daly City, Crocker, Broadmoor and St. Francis Heights, across both the 94014 and 94015 ZIP codes.",
        },
        {
          q: "Can you help with mildew in the bathroom?",
          a: "Yes, and it's one of the most common requests here. Regular scrubbing of grout and seals keeps it from taking hold. If it's already established, a deep clean is the right starting point, and then recurring visits keep it away.",
        },
        {
          q: "How do you price a split-level home?",
          a: "By layout as much as by size. Tell us how many levels, bedrooms and bathrooms when you text and we'll send a flat price back.",
        },
        {
          q: "Do you clean converted garage rooms?",
          a: "Yes, if you want them included. Just mention them when you ask for a quote so the price covers them from the start.",
        },
      ],
    },
  },
  {
    slug: "south-san-francisco",
    name: "South San Francisco",
    county: "San Mateo County",
    zips: ["94080"],
    neighborhoods: [
      "Sunshine Gardens",
      "Westborough",
      "Sign Hill",
      "Buri Buri",
      "Downtown",
      "Avalon",
    ],
    nearby: ["daly-city", "millbrae", "san-francisco"],
    image: "/images/areas/house-cleaning-south-san-francisco-hillside.webp",
    imageAlt:
      "Hillside homes in South San Francisco with the Sign Hill lettering visible on the ridge behind them",
    page: {
      metaTitle: "House Cleaning in South San Francisco, CA",
      metaDescription:
        "House cleaning in South San Francisco: Sunshine Gardens, Westborough, Buri Buri and Sign Hill. Built around biotech and SFO schedules. Free quote by text.",
      h1: "House cleaning in South San Francisco",
      lead: "A town that works long shifts. Most of our clients here are never home when we clean, and the whole service is built around that.",
      angle: [
        {
          title: "Cleaning for people who aren't there",
          body: "Between the biotech campuses on the east side and SFO ten minutes down the 101, South City runs on shift work and early flights. Almost every recurring client here gives us access and goes to work. That puts the weight on communication: a text when we arrive, a text when we leave, and a note about anything we noticed, like a leak under a sink or a filter that needs changing.",
        },
        {
          title: "Hillside homes, garage-level living",
          body: "Sunshine Gardens and the Sign Hill slopes are full of homes where the real living space is spread across levels and the garage has become a room. Those spaces are usually skipped by cleaners quoting off a bedroom count. We ask about them, price them in, and then actually clean them.",
        },
        {
          title: "Townhomes and turnover in Westborough",
          body: "Westborough's townhouse blocks turn over more often than the single-family streets, which means move-out cleans on tight deadlines and HOA common-area rules to respect. We keep short-notice slots specifically for end-of-month move-outs here.",
        },
      ],
      localNotes: [
        "Arrival and departure texts as standard for clients who aren't home",
        "Key, lockbox and garage-code access handled carefully and never shared",
        "Garage-level and converted rooms quoted in, not treated as extras",
        "Short-notice move-out slots held for end-of-month deadlines",
        "Early-morning starts available for shift and flight schedules",
      ],
      faq: [
        {
          q: "Can you clean while I'm at work?",
          a: "That's how most of our South San Francisco clients work with us. Leave a key, lockbox code or garage code and you'll get a text when we arrive and another when we finish.",
        },
        {
          q: "Do you do move-out cleans for townhomes?",
          a: "Yes, and we keep short-notice availability for them because move-out dates cluster at the end of the month. Text us as early as you can and we'll hold a slot.",
        },
        {
          q: "How early can you start?",
          a: "Early enough for a shift schedule. Tell us the window that works and we'll tell you honestly whether we can hit it.",
        },
        {
          q: "Is 94080 your whole coverage here?",
          a: "Yes, 94080 covers South San Francisco, and we work throughout it: Sunshine Gardens, Westborough, Buri Buri, Sign Hill, Avalon and downtown.",
        },
      ],
    },
  },
  {
    slug: "san-mateo",
    name: "San Mateo",
    county: "San Mateo County",
    zips: ["94401", "94402", "94403", "94404"],
    neighborhoods: [
      "San Mateo Park",
      "Baywood",
      "Hillsdale",
      "Aragon",
      "Shoreview",
      "Bay Meadows",
      "Downtown",
    ],
    nearby: ["burlingame", "millbrae", "south-san-francisco"],
    image: "/images/areas/house-cleaning-san-mateo-family-home.webp",
    imageAlt:
      "Tree-lined street of large family homes in the Baywood neighborhood of San Mateo",
    page: {
      metaTitle: "House Cleaning in San Mateo, CA",
      metaDescription:
        "House cleaning in San Mateo: Baywood, San Mateo Park, Hillsdale, Aragon and Bay Meadows. Large family homes and new-build condos. Free quote by text.",
      h1: "House cleaning in San Mateo",
      lead: "The biggest homes we clean and the newest condos we clean are both in San Mateo, a few minutes apart. They need completely different visits.",
      angle: [
        {
          title: "Large family homes need a rotation, not a sprint",
          body: "Baywood, San Mateo Park and Aragon have substantial older houses: multiple bathrooms, formal rooms that get used twice a year, and a lot of built-in woodwork. Cleaning every surface at full depth every visit isn't realistic or good value. We run a rotation instead: everything gets the standard clean, and a different zone gets the deep treatment each time, so the whole house cycles through properly.",
        },
        {
          title: "New builds hide dust in different places",
          body: "The condos and townhomes around Bay Meadows and Hillsdale are the opposite problem: fewer surfaces, but engineered floors that mark easily, glass everywhere, and HVAC returns that turn grey fast. Less time on trim, more time on glass and vents.",
        },
        {
          title: "Homes with children in them",
          body: "San Mateo is family territory, and it changes what matters. Switch plates, door handles, stair rails and the underside of the kitchen table do more for a household with kids than another pass on the countertop. Fragrance-free products are the default, not an upgrade.",
        },
      ],
      localNotes: [
        "Deep-clean rotation by zone for larger homes, so nothing goes a year untouched",
        "Engineered and laminate floors cleaned with minimal moisture",
        "High-touch surfaces prioritised in homes with young children",
        "Fragrance-free, low-tox products as the default",
        "Coverage across 94401, 94402, 94403 and 94404",
      ],
      faq: [
        {
          q: "My house is large. Will one visit cover it?",
          a: "Yes, with a rotation. Every visit cleans the whole home to the standard level, and each visit takes one zone to deep-clean depth. Over a couple of months the entire house cycles through without paying for a deep clean every time.",
        },
        {
          q: "Do you clean new-build condos?",
          a: "Regularly, especially around Bay Meadows and Hillsdale. Engineered floors get minimal moisture and we spend the time on glass, vents and fixtures instead of trim.",
        },
        {
          q: "Are your products safe with young kids?",
          a: "Yes, low-tox and fragrance-free by default. If someone in the home has a specific allergy, tell us before the first visit and we'll adjust what we bring.",
        },
        {
          q: "Which ZIP codes do you serve in San Mateo?",
          a: "All of them: 94401, 94402, 94403 and 94404.",
        },
      ],
    },
  },
  {
    slug: "burlingame",
    name: "Burlingame",
    county: "San Mateo County",
    zips: ["94010"],
    neighborhoods: [
      "Easton Addition",
      "Burlingame Park",
      "Ray Park",
      "Lyon-Hoag",
      "Mills Estate",
      "Burlingame Village",
    ],
    nearby: ["millbrae", "san-mateo", "south-san-francisco"],
    image: "/images/areas/house-cleaning-burlingame-craftsman.webp",
    imageAlt:
      "Craftsman home with original wood trim and a deep porch on a tree-lined Burlingame street",
    page: {
      metaTitle: "House Cleaning in Burlingame, CA",
      metaDescription:
        "House cleaning in Burlingame: Easton Addition, Burlingame Park, Ray Park and Mills Estate. Pre-war homes with original finishes. Free quote by text.",
      h1: "House cleaning in Burlingame",
      lead: "Original wood, original tile, original everything. Burlingame's older homes are beautiful and unforgiving of the wrong product.",
      angle: [
        {
          title: "Original finishes need the right chemistry, not the strong one",
          body: "Easton Addition and Burlingame Park are full of Craftsman and Tudor homes with unlacquered brass, original hex tile, waxed wood trim and cast-iron tubs. Standard bathroom spray strips wax, etches old glaze and dulls brass, and none of that comes back. We identify the finishes on the first visit and match products to them, which is slower and considerably cheaper than a refinishing quote.",
        },
        {
          title: "Older bathrooms and kitchens hide their build-up",
          body: "Pre-war tile has more grout line per square foot than anything built since, and decades of it in a bathroom holds soap scum that a wipe simply moves around. These homes almost always want a deep clean first, then a recurring visit that keeps the grout and the tub surround from sliding back.",
        },
        {
          title: "Quiet streets, quiet service",
          body: "Most of our Burlingame clients are recurring and most aren't home. Same cleaner, same day, key or lockbox, arrival and departure texts. The goal is that you notice the house and not the service.",
        },
      ],
      localNotes: [
        "Finishes identified on the first visit: brass, waxed wood, original tile",
        "No acidic cleaners on old glaze, no wax stripper on original trim",
        "Grout and tub surrounds kept on a recurring schedule after the first deep clean",
        "Same cleaner every visit, with arrival and departure texts",
        "Coverage throughout 94010, including Mills Estate and Burlingame Village",
      ],
      faq: [
        {
          q: "Will you damage my original tile or woodwork?",
          a: "That's precisely what we plan around. We look at the finishes on the first visit and choose products to match. No acidic cleaners on old glaze, nothing that strips wax from original trim.",
        },
        {
          q: "Do I need a deep clean first?",
          a: "In most older Burlingame homes, yes. Decades of soap scum in original tile doesn't come out during a routine visit. After the reset, recurring cleaning holds the line easily.",
        },
        {
          q: "Do you serve Mills Estate and Ray Park?",
          a: "Yes, we work throughout 94010, including Mills Estate, Ray Park, Easton Addition, Burlingame Park, Lyon-Hoag and the Village.",
        },
        {
          q: "Can you clean unlacquered brass fixtures?",
          a: "We clean them without stripping the patina, which is usually what people want. If you'd rather have them polished bright, say so and we'll treat them differently.",
        },
      ],
    },
  },
  {
    slug: "millbrae",
    name: "Millbrae",
    county: "San Mateo County",
    zips: ["94030"],
    neighborhoods: [
      "Millbrae Highlands",
      "Millbrae Meadows",
      "Capuchino",
      "Green Hills",
      "Lomita Park",
      "Downtown Millbrae",
    ],
    nearby: ["burlingame", "south-san-francisco", "san-mateo"],
    image: "/images/areas/house-cleaning-millbrae-hillside-home.webp",
    imageAlt:
      "Millbrae hillside home with a view over the bay and a plane on approach to SFO in the distance",
    page: {
      metaTitle: "House Cleaning in Millbrae, CA",
      metaDescription:
        "House cleaning in Millbrae: Highlands, Meadows, Capuchino and Green Hills. Built for SFO approach grit, commuter schedules and guest turnovers. Free quote by text.",
      h1: "House cleaning in Millbrae",
      lead: "Directly under the SFO approach and on top of a BART and Caltrain hub. Both of those change what a Millbrae home needs.",
      angle: [
        {
          title: "Airport grit is real, and it lands on the sills",
          body: "Living beneath a flight path means a fine, gritty film that settles on exterior-facing window sills, screens and patio doors faster than it does further inland. It isn't dangerous, it's just relentless. We keep sills, tracks and screens on the recurring list here instead of saving them for deep cleans, because a month of build-up wipes off and six months of it has to be scrubbed.",
        },
        {
          title: "Commuter schedules, cleaner-not-home service",
          body: "The BART and Caltrain station at Millbrae means a lot of our clients here leave early and get back late. Access arrangements, arrival texts and a consistent day of the week matter more than flexibility, because people want to stop thinking about it.",
        },
        {
          title: "Guest turnovers before flights",
          body: "Proximity to SFO makes Millbrae a landing spot for visiting family and short stays. Turnover cleans between guests are a regular request, and they're a different job from a routine visit: linens, bathrooms and kitchen reset to a first-impression standard, on a tight window.",
        },
      ],
      localNotes: [
        "Window sills, tracks and screens on every recurring visit, not just deep cleans",
        "Consistent weekday slot for commuters, with arrival and departure texts",
        "Guest-turnover cleans available on short windows between stays",
        "Patio doors and exterior-facing glass given extra attention",
        "Coverage throughout 94030: Highlands, Meadows, Capuchino, Green Hills and Lomita Park",
      ],
      faq: [
        {
          q: "Why do my window sills get dirty so fast?",
          a: "Being under the SFO approach puts a constant fine grit in the air, and exterior-facing sills, screens and patio doors catch it first. It's why we clean them on every visit here rather than treating them as a deep-clean item.",
        },
        {
          q: "Can you clean between guests?",
          a: "Yes. Turnover cleans are a regular request in Millbrae. Tell us the window between check-out and check-in and we'll tell you honestly whether it's enough time.",
        },
        {
          q: "Can I always have the same day of the week?",
          a: "Yes, and we'd recommend it. A fixed weekday slot with the same cleaner is what makes the service something you stop having to think about.",
        },
        {
          q: "Do you cover all of Millbrae?",
          a: "All of 94030: Millbrae Highlands, Millbrae Meadows, Capuchino, Green Hills, Lomita Park and downtown.",
        },
      ],
    },
  },
  {
    slug: "pacifica",
    name: "Pacifica",
    county: "San Mateo County",
    zips: ["94044"],
    neighborhoods: [
      "Linda Mar",
      "Rockaway Beach",
      "Sharp Park",
      "Vallemar",
      "Fairmont",
      "Pedro Point",
      "Manor",
    ],
    nearby: ["daly-city", "san-francisco", "south-san-francisco"],
    image: "/images/areas/house-cleaning-pacifica-coastal-home.webp",
    imageAlt:
      "Coastal home in Linda Mar, Pacifica, with salt-hazed windows facing the ocean and hills behind",
    page: {
      metaTitle: "House Cleaning in Pacifica, CA",
      metaDescription:
        "House cleaning in Pacifica: Linda Mar, Rockaway Beach, Sharp Park and Vallemar. Salt film, coastal damp and sand handled properly. Free quote by text.",
      h1: "House cleaning in Pacifica",
      lead: "Salt, damp and sand. Living by the ocean is worth it, and it means a home here needs a genuinely different cleaning routine.",
      angle: [
        {
          title: "Salt film is not the same as dirt",
          body: "Ocean air leaves a fine salt haze on windows, mirrors, metal fixtures and anything near a door that gets opened. Wipe it with a dry cloth and you smear it; wipe it with the wrong spray and it comes straight back. Glass in Linda Mar and Rockaway needs washing rather than polishing, and metal fixtures need drying afterwards or they spot.",
        },
        {
          title: "Damp lives in the closets",
          body: "Pacifica's humidity doesn't stop at the bathroom. It settles in closets on exterior walls, behind furniture pushed against them, and in window tracks that never fully dry. Left alone, that's mildew by winter. Caught on a recurring schedule, it's a five-minute item.",
        },
        {
          title: "Sand travels further than you think",
          body: "In a house within walking distance of the beach, sand ends up in entry rugs, along baseboards, in the tracks of sliding doors and eventually in the carpet pile. Entries, thresholds and door tracks get real attention here, because that's where you stop it.",
        },
      ],
      localNotes: [
        "Glass and mirrors washed rather than dry-polished to remove salt film",
        "Metal fixtures dried after cleaning so they don't spot",
        "Closets on exterior walls and window tracks checked for damp",
        "Entryways, thresholds and sliding-door tracks prioritised for sand",
        "Coverage throughout 94044: Linda Mar, Rockaway, Sharp Park, Vallemar, Fairmont and Pedro Point",
      ],
      faq: [
        {
          q: "Why do my windows look hazy again so quickly?",
          a: "That's salt, not dirt, and it needs washing rather than polishing. A dry cloth just moves it around. We wash the glass and dry the surrounding metal so it doesn't spot.",
        },
        {
          q: "Can you deal with mildew in closets?",
          a: "Yes, and it's one of the most common Pacifica requests. Once it's established, a deep clean is the right start; after that, checking those spots on every recurring visit keeps it from coming back.",
        },
        {
          q: "Do you go to Pedro Point and Vallemar?",
          a: "Yes, all of 94044, including Linda Mar, Rockaway Beach, Sharp Park, Vallemar, Fairmont, Manor and Pedro Point.",
        },
        {
          q: "How often should a coastal home be cleaned?",
          a: "Bi-weekly at minimum near the water. Salt and damp work continuously, and monthly visits tend to mean each one starts by undoing a month of build-up.",
        },
      ],
    },
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getCities(slugs: string[]): City[] {
  return slugs.map((slug) => getCity(slug)).filter((city): city is City => Boolean(city));
}
