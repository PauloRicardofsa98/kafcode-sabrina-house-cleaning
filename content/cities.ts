/**
 * Cidades atendidas.
 *
 * Cada cidade tem um ângulo próprio (tipo de construção, clima, perfil de morador)
 * porque página de cidade genérica é exatamente o que o Google trata como conteúdo
 * duplicado. A copy longa é **EN-only**; nos outros idiomas a cidade aparece
 * apenas como nome na listagem do hub.
 *
 * As páginas de cidade não têm foto: com 18 cidades, gerar uma imagem específica
 * e crível para cada uma custaria mais do que entrega. O que sustenta a página é
 * o texto local, não a foto.
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
  // ---------------------------------------------------------------------------
  // Contra Costa central
  // ---------------------------------------------------------------------------
  {
    slug: "concord",
    name: "Concord",
    county: "Contra Costa County",
    zips: ["94518", "94519", "94520", "94521"],
    neighborhoods: [
      "Todos Santos",
      "Ygnacio Valley",
      "Dana Estates",
      "Monument Corridor",
      "Downtown Concord",
      "Turtle Creek",
    ],
    nearby: ["walnut-creek", "clayton-valley", "pacheco"],
    page: {
      metaTitle: "House Cleaning in Concord, CA",
      metaDescription:
        "House cleaning in Concord: Todos Santos, Ygnacio Valley, Dana Estates and the Monument Corridor. Built for inland summers and family homes. Free quote by text.",
      h1: "House cleaning in Concord",
      lead: "The biggest city in Contra Costa, and the one where summer does the most damage to a clean house.",
      angle: [
        {
          title: "Inland heat changes the whole job",
          body: "Concord runs twenty degrees hotter than the coast for most of the summer, and that shows up indoors. Dust arrives dry and fine instead of settling damp, so it drifts onto every surface and back into the air the moment you disturb it. Air conditioning runs constantly, which means the return vents and filters collect far more than they would in a coastal home. We work top-down with that in mind and treat vents and returns as a standing item here rather than an annual extra.",
        },
        {
          title: "Ranch homes with a lot of horizontal surface",
          body: "Most of Concord is single-story tract housing from the fifties through the seventies. On paper the square footage looks modest, but it is all spread out on one level, with long hallways, wide sills and plenty of sliding glass. That is more floor and more glass per bedroom than a two-story house of the same size, and we quote from the layout rather than the bedroom count.",
        },
        {
          title: "Families, and the surfaces that come with them",
          body: "This is a household-with-kids town. Switch plates, door handles, stair rails, the underside of the kitchen table and the tracks of the patio door do more for a home like that than another pass on the countertop. Fragrance-free products are the default here, not something you have to ask for.",
        },
      ],
      localNotes: [
        "HVAC vents, returns and filters checked on every recurring visit, not just deep cleans",
        "Sliding patio doors and their tracks cleaned as a standard item",
        "Quoted from the floor plan, because single-story spreads further than the bedroom count suggests",
        "High-touch surfaces prioritised in homes with young children",
        "Coverage across 94518, 94519, 94520 and 94521",
      ],
      faq: [
        {
          q: "Which parts of Concord do you cover?",
          a: "All of it. Todos Santos and downtown, Ygnacio Valley, Dana Estates, Turtle Creek and the Monument Corridor, across all four ZIP codes.",
        },
        {
          q: "Why does my house get dusty again so fast in summer?",
          a: "Inland heat keeps dust dry and airborne instead of letting it settle, and your AC recirculates it. Cleaning vents and returns regularly, rather than once a year, is what actually slows it down.",
        },
        {
          q: "Do you charge by bedroom count?",
          a: "No. A single-story ranch has more floor and more glass than a two-story home with the same number of bedrooms, so we quote from the layout. Tell us roughly how it is laid out and we will send a flat price.",
        },
        {
          q: "Are your products safe with kids and pets?",
          a: "Yes, low-tox and fragrance-free by default. Tell us about any allergies before the first visit and we will adjust what we bring.",
        },
      ],
    },
  },
  {
    slug: "walnut-creek",
    name: "Walnut Creek",
    county: "Contra Costa County",
    zips: ["94595", "94596", "94597", "94598"],
    neighborhoods: [
      "Downtown",
      "Rossmoor",
      "Northgate",
      "Saranap",
      "Walnut Heights",
      "Larkey",
    ],
    nearby: ["lafayette", "alamo", "concord"],
    page: {
      metaTitle: "House Cleaning in Walnut Creek, CA",
      metaDescription:
        "House cleaning in Walnut Creek: downtown condos, Rossmoor, Northgate and Walnut Heights. Building access and quiet hours handled. Free quote by text.",
      h1: "House cleaning in Walnut Creek",
      lead: "Downtown high-rises, hillside family homes and Rossmoor. Three very different jobs inside one ZIP code cluster.",
      angle: [
        {
          title: "Buildings with rules",
          body: "The condo towers around downtown and Broadway Plaza have front desks, loading docks and elevator bookings. Some want a certificate of insurance before anyone works in a unit. None of that is a problem, but it has to be sorted before the first visit or the visit starts forty minutes late. Tell us the building when you ask for a quote and we will handle the paperwork.",
        },
        {
          title: "Rossmoor runs on its own clock",
          body: "Gate access, quiet hours and a resident sponsor for entry are all part of working in Rossmoor. We keep to the posted hours, arrive with the gate arrangements already made, and work quietly enough that neighbours never become part of the conversation. Homes here also tend to be single-level with a lot of built-in cabinetry, which we clean rather than skip.",
        },
        {
          title: "Hillside homes with real square footage",
          body: "Northgate and Walnut Heights have substantial two-story houses with multiple bathrooms and rooms that get used twice a year. Cleaning every surface to full depth on every visit is neither realistic nor good value, so we run a rotation: the whole house gets the standard clean, and one zone goes deep each time.",
        },
      ],
      localNotes: [
        "Building COI, loading dock and elevator booking arranged before the first visit",
        "Rossmoor gate access and quiet hours respected without you having to remind us",
        "Deep-clean rotation by zone for larger Northgate and Walnut Heights homes",
        "Built-in cabinetry cleaned, not treated as furniture to work around",
        "Coverage across 94595, 94596, 94597 and 94598",
      ],
      faq: [
        {
          q: "Do you clean condos downtown?",
          a: "Regularly. If your building needs a certificate of insurance, a booked elevator or a loading dock slot, tell us when you text and we will have it arranged before the first visit.",
        },
        {
          q: "Can you work in Rossmoor?",
          a: "Yes. We keep to the posted quiet hours and arrive with gate access already sorted, so nothing falls on you the morning of the visit.",
        },
        {
          q: "My house is large. Will one visit cover it?",
          a: "Yes, with a rotation. Every visit cleans the whole home to the standard level and takes one zone to deep-clean depth, so the whole house cycles through without paying deep-clean prices each time.",
        },
        {
          q: "Which ZIP codes do you serve here?",
          a: "All four: 94595, 94596, 94597 and 94598.",
        },
      ],
    },
  },
  {
    slug: "clayton-valley",
    name: "Clayton Valley",
    county: "Contra Costa County",
    zips: ["94517", "94521"],
    neighborhoods: [
      "Downtown Clayton",
      "Oakhurst",
      "Peacock Creek",
      "Regency Woods",
      "Dana Hills",
      "Crystyl Ranch",
    ],
    nearby: ["concord", "walnut-creek", "pittsburg"],
    page: {
      metaTitle: "House Cleaning in Clayton & the Clayton Valley, CA",
      metaDescription:
        "House cleaning in Clayton and the Clayton Valley: Oakhurst, Peacock Creek, Regency Woods and east Concord. Built for Mount Diablo dust. Free quote by text.",
      h1: "House cleaning in Clayton and the Clayton Valley",
      lead: "Sitting at the foot of Mount Diablo is worth it. It also means a specific kind of dust that arrives with every warm afternoon.",
      angle: [
        {
          title: "Mount Diablo sends its dust downhill",
          body: "The valley sits directly beneath dry, grassy hillsides, and the afternoon wind carries fine grit off them straight into the neighbourhoods below. It lands on exterior-facing sills, screens and patio doors faster than anywhere else we work. Left for a season it has to be scrubbed; caught on a recurring visit it wipes off. We keep sills, tracks and screens on the standing list here.",
        },
        {
          title: "Newer homes, different problems",
          body: "Oakhurst, Peacock Creek and Crystyl Ranch are mostly newer construction: engineered floors that mark with too much water, a lot of glass, tall entryways and vaulted ceilings that put light fixtures and vents out of easy reach. Less time on old trim, more time on glass, fixtures and the high dusting nobody does themselves.",
        },
      ],
      localNotes: [
        "Window sills, tracks and screens cleaned every recurring visit, not just deep cleans",
        "Engineered and laminate floors cleaned with minimal moisture",
        "High dusting for vaulted ceilings, fixtures and entryway ledges",
        "Covers both the city of Clayton (94517) and the east Concord side of the valley (94521)",
        "Extra attention to patio doors and exterior-facing glass after windy stretches",
      ],
      faq: [
        {
          q: "Do you cover Clayton itself or just the valley?",
          a: "Both. The city of Clayton in 94517, and the Clayton Valley neighbourhoods on the east Concord side in 94521.",
        },
        {
          q: "Why do my window sills get gritty so quickly?",
          a: "Dry hillsides above the valley plus afternoon wind. It is grit rather than household dust, and it lands on exterior-facing surfaces first, which is why we clean sills, tracks and screens on every visit here.",
        },
        {
          q: "Can you clean high ceilings and light fixtures?",
          a: "Yes. Vaulted entryways and tall living rooms are common in the newer neighbourhoods and the high dusting is included rather than treated as an extra.",
        },
        {
          q: "Will you damage my engineered floors?",
          a: "No. Engineered and laminate floors get a barely damp mop and no steam, which is what keeps the seams from lifting.",
        },
      ],
    },
  },
  {
    slug: "pacheco",
    name: "Pacheco",
    county: "Contra Costa County",
    zips: ["94553"],
    neighborhoods: ["Old Pacheco", "Camelback", "Pacheco Boulevard", "Windhover"],
    nearby: ["martinez", "concord", "walnut-creek"],
    page: {
      metaTitle: "House Cleaning in Pacheco, CA",
      metaDescription:
        "House cleaning in Pacheco: Old Pacheco, Camelback and the Pacheco Boulevard corridor. Small-town scheduling, flat pricing. Free quote by text.",
      h1: "House cleaning in Pacheco",
      lead: "Small, unincorporated and easy to miss on a service map. We work here properly rather than treating it as a detour from Concord.",
      angle: [
        {
          title: "A small town that gets skipped",
          body: "Pacheco is unincorporated and sits between Martinez, Concord and Pleasant Hill, which means plenty of cleaners quote it as an afterthought or decline it outright. We schedule Pacheco alongside Martinez and Concord visits, so you get the same weekday slot and the same person as anyone else, not whatever is left over.",
        },
        {
          title: "Mixed housing stock in a short distance",
          body: "Old Pacheco has genuinely old homes with original trim and small rooms. A few streets away there is postwar tract housing and newer infill. Those need different products and different time budgets, so we look at the finishes on the first visit rather than assuming.",
        },
      ],
      localNotes: [
        "Scheduled alongside Martinez and Concord, so a fixed weekday slot is realistic",
        "Finishes identified on the first visit, because the housing stock changes street to street",
        "Older homes get products matched to original trim and tile",
        "Creek-adjacent properties checked for damp in closets during winter",
        "Coverage throughout 94553",
      ],
      faq: [
        {
          q: "Do you actually come out to Pacheco?",
          a: "Yes, regularly. We schedule it with our Martinez and Concord work, so you get a normal fixed slot rather than being squeezed in.",
        },
        {
          q: "Is there a minimum or a travel charge?",
          a: "No travel charge. The flat price we text you covers supplies, equipment and getting there.",
        },
        {
          q: "My house is old. Will you use the wrong products?",
          a: "We look at what the finishes actually are on the first visit before choosing anything. Original tile and waxed wood get treated differently from modern surfaces.",
        },
      ],
    },
  },
  {
    slug: "martinez",
    name: "Martinez",
    county: "Contra Costa County",
    zips: ["94553"],
    neighborhoods: [
      "Downtown Martinez",
      "Alhambra Valley",
      "Vine Hill",
      "Martinez Heights",
      "Virginia Hills",
    ],
    nearby: ["pacheco", "benicia", "concord"],
    page: {
      metaTitle: "House Cleaning in Martinez, CA",
      metaDescription:
        "House cleaning in Martinez: downtown Victorians, Alhambra Valley, Vine Hill and Martinez Heights. Original finishes handled carefully. Free quote by text.",
      h1: "House cleaning in Martinez",
      lead: "A downtown full of genuinely old houses, hills full of newer ones, and a refinery that puts a film on everything facing north.",
      angle: [
        {
          title: "Downtown houses are older than most of the county",
          body: "The blocks around downtown Martinez have Victorians and Craftsman homes with original wood trim, picture rails, tall baseboards and old tile. Standard bathroom spray strips wax, etches old glaze and dulls unlacquered brass, and none of that comes back. We identify the finishes on the first visit and match products to them, which is slower and enormously cheaper than a refinishing quote.",
        },
        {
          title: "Refinery air is a real cleaning variable",
          body: "Homes on the north side of town collect a fine industrial film on exterior-facing glass, sills and screens that ordinary dusting just smears. It needs washing rather than polishing, and the surrounding metal needs drying afterwards or it spots. We treat those surfaces as recurring items here rather than saving them for deep cleans.",
        },
        {
          title: "Hillside homes with stairs that do not show up in the square footage",
          body: "Martinez Heights, Virginia Hills and the Alhambra Valley edges are built into slopes, with split levels, exterior stairs and landings. A house that reads as modest on paper takes noticeably longer in practice. We quote from the layout so the price does not change once we see it.",
        },
      ],
      localNotes: [
        "Finishes identified on the first visit: original tile, waxed trim, unlacquered brass",
        "Exterior-facing glass washed rather than dry-polished, and metal dried so it does not spot",
        "Stairs, landings and split levels counted in the quote from the start",
        "No acidic cleaners on old glaze, no wax stripper on original woodwork",
        "Coverage throughout 94553, including Alhambra Valley and Vine Hill",
      ],
      faq: [
        {
          q: "Will you damage my original woodwork or tile?",
          a: "That is exactly what we plan around. We look at the finishes on the first visit and choose products to match: no acidic cleaners on old glaze, nothing that strips wax from original trim.",
        },
        {
          q: "Why do my windows look hazy again so fast?",
          a: "On the north side of town it is usually an industrial film rather than dust. A dry cloth just moves it around. We wash the glass and dry the surrounding metal so it does not spot.",
        },
        {
          q: "Do I need a deep clean first?",
          a: "In most older Martinez homes, yes. Decades of soap scum in original tile does not come out during a routine visit. After that reset, recurring cleaning holds it easily.",
        },
        {
          q: "Do you cover Alhambra Valley?",
          a: "Yes, along with Vine Hill, Martinez Heights, Virginia Hills and downtown, all within 94553.",
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // Lamorinda
  // ---------------------------------------------------------------------------
  {
    slug: "lafayette",
    name: "Lafayette",
    county: "Contra Costa County",
    zips: ["94549"],
    neighborhoods: [
      "Burton Valley",
      "Happy Valley",
      "Reliez Valley",
      "Downtown Lafayette",
      "Trail neighborhoods",
    ],
    nearby: ["orinda", "moraga", "walnut-creek"],
    page: {
      metaTitle: "House Cleaning in Lafayette, CA",
      metaDescription:
        "House cleaning in Lafayette: Burton Valley, Happy Valley, Reliez Valley and downtown. Oak debris, pollen and wooded lots handled. Free quote by text.",
      h1: "House cleaning in Lafayette",
      lead: "Living under mature oaks is the reason people move here. It is also the reason the house needs a different routine.",
      angle: [
        {
          title: "Oaks drop something in every season",
          body: "Mature valley oaks shed catkins in spring, fine leaf litter through summer and heavy debris in autumn, and all of it gets tracked in and blown into entryways and window tracks. Spring pollen coats sills and interior glass for weeks. In Lafayette we treat entryways, sills and door tracks as a standing item, because that is where the outdoors actually gets inside.",
        },
        {
          title: "Wooded lots mean darker, damper corners",
          body: "Heavy tree cover keeps the north side of a house from ever drying out properly. That shows up as damp in closets on exterior walls, mildew in bathrooms with small windows, and a musty edge in rooms that stay shaded. Caught monthly it is a five-minute item. Caught annually it is a deep clean.",
        },
        {
          title: "Homes where nobody is in during the day",
          body: "Lafayette runs on the BART commute, so most of our recurring clients here are not home when we clean. Access arrangements, an arrival text and a consistent day of the week matter more than flexibility. People want to stop thinking about it.",
        },
      ],
      localNotes: [
        "Entryways, thresholds and door tracks prioritised for tracked-in oak debris",
        "Sills and interior glass cleaned through pollen season rather than dusted",
        "Closets on exterior walls and shaded rooms checked for damp in winter",
        "Fixed weekday slot with arrival and departure texts for commuters",
        "Coverage throughout 94549",
      ],
      faq: [
        {
          q: "Can you deal with pollen season?",
          a: "Yes, and it is worth switching to a shorter interval for those weeks. Pollen on sills and glass needs washing rather than dusting, otherwise it just redistributes.",
        },
        {
          q: "Can you clean while I am at work?",
          a: "That is how most of our Lafayette clients work with us. Leave a key or a lockbox code and you will get a text when we arrive and another when we finish.",
        },
        {
          q: "What about mildew in a shaded bathroom?",
          a: "Common here. If it is already established, a deep clean is the right start. After that, checking it on every recurring visit keeps it from coming back.",
        },
        {
          q: "Which neighbourhoods do you cover?",
          a: "All of 94549, including Burton Valley, Happy Valley, Reliez Valley, the trail neighbourhoods and downtown.",
        },
      ],
    },
  },
  {
    slug: "orinda",
    name: "Orinda",
    county: "Contra Costa County",
    zips: ["94563"],
    neighborhoods: [
      "Orinda Village",
      "Glorietta",
      "Sleepy Hollow",
      "Orinda Downs",
      "Ivy Drive",
    ],
    nearby: ["lafayette", "moraga", "berkeley"],
    page: {
      metaTitle: "House Cleaning in Orinda, CA",
      metaDescription:
        "House cleaning in Orinda: Glorietta, Sleepy Hollow, Orinda Downs and the Village. Wooded hillside homes and fire-season ash. Free quote by text.",
      h1: "House cleaning in Orinda",
      lead: "Winding roads, deep tree cover and houses built into hillsides. Getting there takes planning, and so does cleaning there.",
      angle: [
        {
          title: "Hillside houses are taller than they look",
          body: "Orinda homes step down slopes across two or three levels, often with exterior stairs to the entry and interior stairs between every room that matters. Stairs, landings and the railings alongside them take real time, and they never show up in a square-footage estimate. We quote from the layout so the number does not move after the first visit.",
        },
        {
          title: "Fire season leaves fine ash indoors",
          body: "When smoke settles over the East Bay hills, a fine ash works its way in through vents, window tracks and any door that gets opened. It is light enough to redistribute rather than lift if you dry-dust it. Through those weeks we wash hard surfaces rather than wiping them, and we go over vents and returns more often than the schedule would normally call for.",
        },
        {
          title: "Mid-century and Mediterranean, side by side",
          body: "Glorietta and Orinda Downs mix mid-century homes with a lot of glass and wood against Mediterranean houses with tile floors and plaster walls. Those want opposite things from a cleaning product. We look at what a house actually is before choosing anything.",
        },
      ],
      localNotes: [
        "Stairs, landings and railings counted in the quote from the start",
        "Vents, returns and window tracks cleaned more often during smoke season",
        "Hard surfaces washed rather than dry-dusted while ash is settling",
        "Products matched to the house: glass and wood, or tile and plaster",
        "Coverage throughout 94563, including Sleepy Hollow and Orinda Downs",
      ],
      faq: [
        {
          q: "Do you charge more for a hillside house?",
          a: "Not a surcharge, but the quote reflects the layout. Three levels and two flights of stairs take longer than the same square footage on one floor, and we would rather say so upfront than adjust later.",
        },
        {
          q: "Can you help after a smoky stretch?",
          a: "Yes, and it is one of the most common requests here. Fine ash needs washing rather than dusting, plus extra passes on vents and window tracks.",
        },
        {
          q: "Do you clean tile and plaster properly?",
          a: "Yes. Tile floors and plaster walls need different products from the mid-century wood-and-glass houses a few streets away, so we look at the house before deciding.",
        },
        {
          q: "Is access a problem on the narrow roads?",
          a: "It is a scheduling detail, not a problem. Tell us about the driveway or turnaround and we build the time in rather than arriving late.",
        },
      ],
    },
  },
  {
    slug: "moraga",
    name: "Moraga",
    county: "Contra Costa County",
    zips: ["94556"],
    neighborhoods: [
      "Moraga Country Club",
      "Rheem Valley",
      "Campolindo",
      "Sanders Ranch",
      "Saint Mary's",
    ],
    nearby: ["orinda", "lafayette", "walnut-creek"],
    page: {
      metaTitle: "House Cleaning in Moraga, CA",
      metaDescription:
        "House cleaning in Moraga: Campolindo, Sanders Ranch, Rheem Valley and the Country Club. Semi-rural homes and open-space dust. Free quote by text.",
      h1: "House cleaning in Moraga",
      lead: "Open space on three sides, which is lovely, and which means the outdoors gets a vote in how your house looks.",
      angle: [
        {
          title: "Open space means fine, dry dust",
          body: "Moraga is ringed by grassland and regional parks, and from late spring the hills go dry. Wind carries that fine dust onto exterior-facing sills, screens and patio doors continuously, in a way that inland tract neighbourhoods surrounded by other houses simply do not experience. Sills, tracks and screens stay on the standing list here.",
        },
        {
          title: "Big single-family homes on generous lots",
          body: "Campolindo and Sanders Ranch have substantial family houses with multiple bathrooms, formal rooms used a few times a year, and a lot of built-in cabinetry. Deep-cleaning every surface every visit is not good value. We run a zone rotation instead, so the whole house cycles through properly without paying deep-clean prices each time.",
        },
      ],
      localNotes: [
        "Sills, screens and patio doors cleaned every visit, because open space keeps sending dust",
        "Deep-clean rotation by zone for larger homes",
        "Built-in cabinetry cleaned rather than worked around",
        "Entryways given extra attention where trails and open space are a few steps away",
        "Coverage throughout 94556",
      ],
      faq: [
        {
          q: "Which parts of Moraga do you cover?",
          a: "All of 94556: Campolindo, Sanders Ranch, Rheem Valley, the Country Club area and the streets around Saint Mary's.",
        },
        {
          q: "My house is large. Will one visit be enough?",
          a: "Yes, using a rotation. The whole house gets the standard clean every visit and one zone goes to deep-clean depth, so nothing sits untouched for a year.",
        },
        {
          q: "Why is there always dust on the sills?",
          a: "Dry open space on three sides plus afternoon wind. It is why we clean sills, screens and patio doors on every visit here instead of treating them as a deep-clean item.",
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // Vale de San Ramon
  // ---------------------------------------------------------------------------
  {
    slug: "danville",
    name: "Danville",
    county: "Contra Costa County",
    zips: ["94506", "94526"],
    neighborhoods: [
      "Blackhawk",
      "Old Town Danville",
      "Greenbrook",
      "Westside Danville",
      "Diablo",
      "Tassajara",
    ],
    nearby: ["alamo", "san-ramon", "walnut-creek"],
    page: {
      metaTitle: "House Cleaning in Danville, CA",
      metaDescription:
        "House cleaning in Danville: Blackhawk, Old Town, Greenbrook and Westside. Gated access and large family homes. Free quote by text.",
      h1: "House cleaning in Danville",
      lead: "Old Town cottages and Blackhawk estates, ten minutes apart and nothing alike as a cleaning job.",
      angle: [
        {
          title: "Gated communities need arrangements, not improvisation",
          body: "Blackhawk and the gated pockets around Diablo have guard gates, resident authorisation and sometimes vendor registration. It is straightforward once it exists and a wasted morning when it does not. We get on the approved list before the first visit rather than sitting at the gate while you take a call at work.",
        },
        {
          title: "Estate homes want a rotation, not a sprint",
          body: "A large Blackhawk house has more bathrooms than most families have rooms, plus formal spaces that are used twice a year and a lot of stone and millwork. Full depth everywhere every visit is neither realistic nor worth paying for. Everything gets the standard clean, and a different zone gets the deep treatment each time.",
        },
        {
          title: "Old Town is a completely different house",
          body: "The cottages and older homes near downtown have original wood floors, small rooms, and finishes that predate anything you would buy today. Those get a damp mop with minimal water, no steam, and products chosen for the finish rather than for speed.",
        },
      ],
      localNotes: [
        "Gate authorisation and vendor registration handled before the first visit",
        "Deep-clean rotation by zone for larger homes, so nothing goes a year untouched",
        "Natural stone treated with pH-neutral products, never acidic cleaners",
        "Original wood floors in Old Town cleaned damp, never wet, and never steamed",
        "Coverage across 94506 and 94526",
      ],
      faq: [
        {
          q: "Can you get into Blackhawk?",
          a: "Yes. Tell us when you text and we sort the gate authorisation before the first visit, so nobody is waiting at the entrance.",
        },
        {
          q: "How do you price a very large home?",
          a: "Flat, per visit, with a zone rotation built in. The whole house gets cleaned every time and one area goes deep, which is far better value than paying deep-clean rates repeatedly.",
        },
        {
          q: "Do you clean natural stone?",
          a: "Yes, with pH-neutral products. Acidic cleaners etch marble and limestone permanently, so they never come near it.",
        },
        {
          q: "Do you cover Diablo and Tassajara?",
          a: "Yes, along with Blackhawk, Greenbrook, Westside and Old Town, across both 94506 and 94526.",
        },
      ],
    },
  },
  {
    slug: "alamo",
    name: "Alamo",
    county: "Contra Costa County",
    zips: ["94507"],
    neighborhoods: [
      "Westside Alamo",
      "Round Hill",
      "Stone Valley",
      "Alamo Oaks",
      "Bryan Ranch",
    ],
    nearby: ["danville", "walnut-creek", "san-ramon"],
    page: {
      metaTitle: "House Cleaning in Alamo, CA",
      metaDescription:
        "House cleaning in Alamo: Round Hill, Stone Valley, Alamo Oaks and Westside. Large lots, long driveways, semi-rural dust. Free quote by text.",
      h1: "House cleaning in Alamo",
      lead: "Big lots, long driveways and a lot of house. Semi-rural living with the dust that comes with it.",
      angle: [
        {
          title: "Acre lots put the outdoors closer to the door",
          body: "Alamo homes sit on large, often partly unpaved properties with gravel drives, mature oaks and open ground. That means more grit and leaf debris tracked in per day than a house on a suburban street, and it collects in entryways, mudrooms and door tracks first. Those are the surfaces that decide whether the rest of the house stays clean.",
        },
        {
          title: "Unincorporated, and quietly harder to service",
          body: "Alamo is unincorporated, so some companies treat it as an out-of-area detour and price it accordingly. We schedule it with our Danville and Walnut Creek work, which means a fixed weekday slot, the same cleaner and no travel surcharge.",
        },
        {
          title: "Homes with real square footage and real millwork",
          body: "Round Hill and Alamo Oaks have substantial houses with wood floors, built-ins, stone counters and several bathrooms. We run a zone rotation so the whole house gets cleaned every visit while one area goes deep, and we match products to the finish rather than to the clock.",
        },
      ],
      localNotes: [
        "Entryways, mudrooms and door tracks prioritised, because gravel and oak debris arrive daily",
        "Scheduled with Danville and Walnut Creek, so a fixed slot is realistic and there is no travel charge",
        "Deep-clean rotation by zone for larger homes",
        "Natural stone cleaned with pH-neutral products",
        "Coverage throughout 94507",
      ],
      faq: [
        {
          q: "Do you charge extra because Alamo is unincorporated?",
          a: "No. It is on the same route as our Danville and Walnut Creek visits, so there is no travel surcharge and you get a normal fixed slot.",
        },
        {
          q: "We have a gravel driveway and constant dust. Can that be managed?",
          a: "Yes, by focusing on where it enters. Entryways, mudrooms and door tracks get the attention, because stopping it there keeps it out of the rest of the house.",
        },
        {
          q: "Can you handle a very large home?",
          a: "Yes. Everything gets cleaned every visit and one zone goes to deep-clean depth each time, so the whole house cycles through without deep-clean pricing every visit.",
        },
      ],
    },
  },
  {
    slug: "san-ramon",
    name: "San Ramon",
    county: "Contra Costa County",
    zips: ["94582", "94583"],
    neighborhoods: [
      "Dougherty Valley",
      "Windemere",
      "Gale Ranch",
      "Twin Creeks",
      "Old Ranch",
      "Bishop Ranch",
    ],
    nearby: ["danville", "alamo", "walnut-creek"],
    page: {
      metaTitle: "House Cleaning in San Ramon, CA",
      metaDescription:
        "House cleaning in San Ramon: Dougherty Valley, Windemere, Gale Ranch and Twin Creeks. New-build homes and working households. Free quote by text.",
      h1: "House cleaning in San Ramon",
      lead: "Newer, larger and busier than almost anywhere else in the county. Most of our clients here are never home when we clean.",
      angle: [
        {
          title: "New construction hides dust in different places",
          body: "Dougherty Valley, Windemere and Gale Ranch are recent builds: tall entryways, a lot of glass, engineered floors that mark with too much water, and HVAC returns that go grey noticeably faster than they should. There is very little old trim to fuss over, so the time goes into glass, vents, fixtures and high dusting instead.",
        },
        {
          title: "Two working parents and a full calendar",
          body: "The households here run on tight schedules, and the whole point of the service is that it stops being something you manage. Fixed weekday slot, same cleaner, access already arranged, a text on arrival and another when we leave. Nothing that needs a decision from you on a Tuesday morning.",
        },
        {
          title: "HOA rules that are easier handled than discovered",
          body: "Several of the newer communities have parking rules, service-hour windows or vendor registration. It takes one message to sort and a wasted visit to find out the hard way, so we ask about it before the first clean rather than after.",
        },
      ],
      localNotes: [
        "Engineered and laminate floors cleaned with minimal moisture, no steam",
        "HVAC vents and returns on the standing list, because new builds collect fast",
        "High dusting for two-story entryways, fixtures and ledges",
        "HOA parking and service-hour rules checked before the first visit",
        "Coverage across 94582 and 94583",
      ],
      faq: [
        {
          q: "Can you clean while nobody is home?",
          a: "That is how most San Ramon clients work with us. Leave a code or a key and you get a text when we arrive and another when we finish.",
        },
        {
          q: "Will you damage engineered floors?",
          a: "No. They get a barely damp mop and never steam, which is what keeps the seams intact.",
        },
        {
          q: "Can you reach high entryway ceilings?",
          a: "Yes. High dusting for two-story entryways, light fixtures and ledges is part of the visit, not an upsell.",
        },
        {
          q: "Do you cover Dougherty Valley?",
          a: "Yes, along with Windemere, Gale Ranch, Twin Creeks and Old Ranch, across 94582 and 94583.",
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // Leste do condado / Delta
  // ---------------------------------------------------------------------------
  {
    slug: "pittsburg",
    name: "Pittsburg",
    county: "Contra Costa County",
    zips: ["94565"],
    neighborhoods: [
      "Old Town Pittsburg",
      "San Marco",
      "Vista Del Mar",
      "Oak Hills",
      "Highlands Ranch",
    ],
    nearby: ["bay-point", "concord", "clayton-valley"],
    page: {
      metaTitle: "House Cleaning in Pittsburg, CA",
      metaDescription:
        "House cleaning in Pittsburg: Old Town, San Marco, Vista Del Mar and Oak Hills. Delta wind, summer heat and new builds. Free quote by text.",
      h1: "House cleaning in Pittsburg",
      lead: "Delta wind on one side, triple-digit summers on the other. Two forces that keep a house from staying clean on its own.",
      angle: [
        {
          title: "Delta wind delivers dust all year",
          body: "The wind coming up off the Delta is constant and it carries fine grit onto anything facing it. Window screens, sills, patio doors and outdoor-facing glass collect it far faster than sheltered inland neighbourhoods. Wiped monthly it comes off easily; left for a season it has to be scrubbed. We keep those on the standing list here.",
        },
        {
          title: "Summer heat keeps dust in the air",
          body: "Pittsburg regularly runs well past 100°F, so dust stays dry and airborne instead of settling, and air conditioning recirculates it through the house all day. Vents, returns and filter housings collect more here than almost anywhere else we work, and they get checked on recurring visits rather than once a year.",
        },
        {
          title: "New builds and Old Town want opposite things",
          body: "San Marco and the newer hillside developments have engineered floors, tall entryways and a lot of glass. Old Town has genuinely old houses with original trim and small rooms. We look at what the house actually is before deciding what to bring.",
        },
      ],
      localNotes: [
        "Screens, sills and exterior-facing glass cleaned on every recurring visit",
        "HVAC vents, returns and filter housings checked regularly through summer",
        "Engineered floors in the newer neighbourhoods cleaned with minimal moisture",
        "Original trim and tile in Old Town matched with the right products",
        "Coverage throughout 94565",
      ],
      faq: [
        {
          q: "Why do my screens and sills get dirty so fast?",
          a: "Delta wind. It is constant here and it carries fine grit onto anything facing it, which is why we clean screens, sills and patio doors every visit rather than saving them for deep cleans.",
        },
        {
          q: "Does the summer heat really change anything?",
          a: "Yes. Above 100°F dust stays dry and airborne, and the AC keeps moving it around. Cleaning vents and returns regularly is what actually slows it down.",
        },
        {
          q: "Do you cover Old Town as well as the new neighbourhoods?",
          a: "Both, throughout 94565. They need different products, so we look at the house on the first visit.",
        },
      ],
    },
  },
  {
    slug: "bay-point",
    name: "Bay Point",
    county: "Contra Costa County",
    zips: ["94565"],
    neighborhoods: ["Shore Acres", "Bella Vista", "West Pittsburg", "Anchor Cove"],
    nearby: ["pittsburg", "concord", "martinez"],
    page: {
      metaTitle: "House Cleaning in Bay Point, CA",
      metaDescription:
        "House cleaning in Bay Point: Shore Acres, Bella Vista and Anchor Cove. Waterfront damp, Delta wind and honest flat pricing. Free quote by text.",
      h1: "House cleaning in Bay Point",
      lead: "Right on the water, which means wind and damp at the same time. Unincorporated, which means plenty of companies quietly skip it.",
      angle: [
        {
          title: "Wind and damp together",
          body: "Bay Point gets Delta wind carrying grit and waterfront humidity holding moisture, which is an unusual combination. Grit lands on screens, sills and exterior glass; the damp settles into bathrooms, closets on exterior walls and window tracks that never fully dry. Handled together on a recurring schedule they stay manageable. Left alone, the damp turns into mildew by winter.",
        },
        {
          title: "Unincorporated should not mean overlooked",
          body: "Bay Point is unincorporated and gets treated as out of area by a lot of services. We schedule it with our Pittsburg and Concord work, so you get a fixed weekday slot, the same cleaner and no travel surcharge. The flat price covers getting here.",
        },
      ],
      localNotes: [
        "Screens, sills and window tracks cleaned every visit for wind-carried grit",
        "Closets on exterior walls and bathrooms checked for damp through winter",
        "Metal fixtures dried after cleaning so waterfront air does not spot them",
        "Scheduled with Pittsburg and Concord, with no travel charge",
        "Coverage throughout 94565, including Shore Acres and Bella Vista",
      ],
      faq: [
        {
          q: "Do you actually serve Bay Point?",
          a: "Yes. It runs on the same route as our Pittsburg and Concord visits, so you get a normal fixed slot rather than being fitted in when convenient.",
        },
        {
          q: "Is there a travel charge?",
          a: "No. The flat price we text you includes supplies, equipment and getting there.",
        },
        {
          q: "Can you deal with mildew near the water?",
          a: "Yes, and it is the most common request here. If it is established, a deep clean is the right start; after that, checking those spots on every visit keeps it away.",
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // Solano
  // ---------------------------------------------------------------------------
  {
    slug: "benicia",
    name: "Benicia",
    county: "Solano County",
    zips: ["94510"],
    neighborhoods: [
      "Downtown Historic District",
      "Southampton",
      "The Arsenal",
      "Waterfront",
      "East Second Street",
    ],
    nearby: ["vallejo", "martinez", "concord"],
    page: {
      metaTitle: "House Cleaning in Benicia, CA",
      metaDescription:
        "House cleaning in Benicia: the historic downtown, Southampton, the Arsenal and the waterfront. Original finishes and salt air. Free quote by text.",
      h1: "House cleaning in Benicia",
      lead: "One of the oldest towns in California, sitting on the water. Old houses and salt air are a demanding combination.",
      angle: [
        {
          title: "The historic district is genuinely historic",
          body: "Downtown Benicia has homes from the 1800s with original wood floors, tall baseboards, panelled doors, old glass and hardware that cannot be replaced. Every one of those is a surface that punishes the wrong product. We identify the finishes on the first visit and choose accordingly, which takes longer and costs a fraction of restoring something we ruined.",
        },
        {
          title: "Waterfront air leaves salt, not dirt",
          body: "Homes near the strait get a fine salt haze on windows, mirrors and metal fixtures. Dry-polishing smears it and the wrong spray brings it straight back. Glass gets washed rather than polished, and the metal around it gets dried afterwards so it does not spot.",
        },
        {
          title: "Southampton is a different job entirely",
          body: "Up the hill, Southampton is postwar and later tract housing with modern finishes, more square footage and fewer fragile surfaces. Faster per square foot than downtown, and priced that way rather than on one blended rate.",
        },
      ],
      localNotes: [
        "Finishes identified on the first visit: original floors, old glass, period hardware",
        "Glass and mirrors washed rather than dry-polished to lift salt film",
        "Metal fixtures dried after cleaning so they do not spot",
        "Downtown and Southampton quoted differently, because they are different work",
        "Coverage throughout 94510",
      ],
      faq: [
        {
          q: "My house is from the 1800s. Is that a problem?",
          a: "It is the reason we look before we choose products. Original floors, old glass and period hardware all need specific handling, and none of it recovers from a mistake.",
        },
        {
          q: "Why do the windows go hazy again so quickly?",
          a: "That is salt from the waterfront, not dirt. It needs washing rather than polishing, and the surrounding metal needs drying or it spots.",
        },
        {
          q: "Do you cover Southampton as well as downtown?",
          a: "Yes, both, throughout 94510. They are quoted differently because the work is genuinely different.",
        },
      ],
    },
  },
  {
    slug: "vallejo",
    name: "Vallejo",
    county: "Solano County",
    zips: ["94589", "94590", "94591", "94592"],
    neighborhoods: [
      "Heritage District",
      "Mare Island",
      "Glen Cove",
      "Hiddenbrooke",
      "Country Club Crest",
      "St. Vincent's Hill",
    ],
    nearby: ["benicia", "martinez", "berkeley"],
    page: {
      metaTitle: "House Cleaning in Vallejo, CA",
      metaDescription:
        "House cleaning in Vallejo: the Heritage District, Mare Island, Glen Cove and Hiddenbrooke. Victorians, waterfront air and flat pricing. Free quote by text.",
      h1: "House cleaning in Vallejo",
      lead: "Some of the best Victorian housing stock in the Bay Area, and some of the newest construction, in the same city.",
      angle: [
        {
          title: "The Heritage District is full of real Victorians",
          body: "These houses have more surface per square foot than anything built since: tall baseboards, picture rails, panelled doors, deep window casings, original fir floors and pocket doors. Every one is a horizontal ledge that collects dust. A cleaner used to modern drywall boxes finishes early and leaves a grey line along every rail. We budget the time those details actually take and say so upfront.",
        },
        {
          title: "Mare Island and the waterfront get salt air",
          body: "Homes near the water collect a salt haze on glass, mirrors and metal that smears if you dry-polish it. Glass gets washed, metal gets dried afterwards. It is a small change in method that makes the difference between clean and streaked.",
        },
        {
          title: "Hiddenbrooke and Glen Cove are the opposite problem",
          body: "Newer hillside developments with engineered floors, big windows and tall ceilings. Almost no fragile trim, but a lot of glass and high dusting, plus HVAC returns that grey quickly. Different time budget, different products.",
        },
      ],
      localNotes: [
        "Picture rails, panelled doors and deep casings given the time they actually need",
        "Original fir floors cleaned damp with minimal water, never steamed",
        "Glass washed rather than dry-polished near the waterfront, metal dried afterwards",
        "High dusting and vents prioritised in the newer hillside neighbourhoods",
        "Coverage across 94589, 94590, 94591 and 94592",
      ],
      faq: [
        {
          q: "Can you clean an old Victorian properly?",
          a: "Yes, and it takes longer than the square footage suggests. Picture rails, panelled doors and deep casings are all dust ledges, and we budget for them rather than finishing early.",
        },
        {
          q: "Can you clean original hardwood floors?",
          a: "Yes. Old fir and oak get a damp mop with minimal water and no steam, because standing water and steam are what lift the finish and open the seams.",
        },
        {
          q: "Which parts of Vallejo do you cover?",
          a: "All four ZIP codes: the Heritage District, Mare Island, Glen Cove, Hiddenbrooke, Country Club Crest and the rest.",
        },
        {
          q: "Is there a travel charge from Contra Costa?",
          a: "No. The flat price includes getting there, and we schedule Vallejo alongside our Benicia work.",
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // Alameda e São Francisco
  // ---------------------------------------------------------------------------
  {
    slug: "oakland",
    name: "Oakland",
    county: "Alameda County",
    zips: ["94602", "94605", "94606", "94609", "94610", "94611", "94618", "94619"],
    neighborhoods: [
      "Rockridge",
      "Temescal",
      "Grand Lake",
      "Montclair",
      "Piedmont Avenue",
      "Dimond",
      "Laurel",
    ],
    nearby: ["berkeley", "orinda", "san-francisco"],
    page: {
      metaTitle: "House Cleaning in Oakland, CA",
      metaDescription:
        "House cleaning in Oakland: Rockridge, Temescal, Grand Lake, Montclair and the Dimond. Craftsman bungalows and hill homes. Free quote by text.",
      h1: "House cleaning in Oakland",
      lead: "Craftsman bungalows in the flats, houses on stilts in the hills. Same city, completely different jobs.",
      angle: [
        {
          title: "Bungalows have more trim than anything built since",
          body: "Rockridge, Temescal and the Dimond are full of 1910s and 1920s Craftsman homes: box beams, plate rails, built-in buffets, panelled wainscoting and original fir floors. Every ledge collects dust and every one gets skipped by someone working from a generic checklist. We budget for the detail and tell you upfront when a house needs more of it.",
        },
        {
          title: "Hill houses are stairs first, square footage second",
          body: "Montclair and the upper hills are built into slopes, often with a long exterior stair to the front door and three levels inside. That is real time, and it never appears in a square-footage quote. We price from the layout. Fire season also puts fine ash through vents and window tracks up here, which we clean more often during those weeks.",
        },
        {
          title: "Buildings, permits and parking are part of the plan",
          body: "Condos near Grand Lake and Piedmont Avenue may want a certificate of insurance or a booked elevator. Street parking in the flats is genuinely difficult on some blocks. Neither is a problem when we know in advance; both waste a morning when we do not.",
        },
      ],
      localNotes: [
        "Box beams, plate rails and built-ins cleaned rather than dusted around",
        "Original fir floors cleaned damp with minimal water, never steamed",
        "Stairs and levels counted in the quote for hill homes",
        "Vents and window tracks cleaned more often during smoke season",
        "Building COI, elevator booking and parking arrangements sorted before the first visit",
      ],
      faq: [
        {
          q: "Do you clean built-ins and box beams?",
          a: "Yes. In a Craftsman house those are most of the surfaces that matter, and skipping them is what makes a clean look half-done.",
        },
        {
          q: "Can you clean original hardwood floors?",
          a: "Yes, damp with minimal water and no steam. Standing water and steam are what lift the finish and open the seams on old fir.",
        },
        {
          q: "Is parking a problem in the flats?",
          a: "It is a scheduling detail. Tell us about the block, a driveway or a permit zone and we build the time in rather than arriving late.",
        },
        {
          q: "Which Oakland neighbourhoods do you cover?",
          a: "Rockridge, Temescal, Grand Lake, Piedmont Avenue, Montclair, the Dimond, the Laurel and the surrounding streets. Text us your ZIP code and we will confirm.",
        },
      ],
    },
  },
  {
    slug: "berkeley",
    name: "Berkeley",
    county: "Alameda County",
    zips: ["94702", "94703", "94704", "94705", "94707", "94708", "94709", "94710"],
    neighborhoods: [
      "Elmwood",
      "North Berkeley",
      "Berkeley Hills",
      "Claremont",
      "Thousand Oaks",
      "Westbrae",
      "Southside",
    ],
    nearby: ["oakland", "orinda", "san-francisco"],
    page: {
      metaTitle: "House Cleaning in Berkeley, CA",
      metaDescription:
        "House cleaning in Berkeley: Elmwood, North Berkeley, the hills, Claremont and Thousand Oaks. Brown shingles and old houses handled properly. Free quote by text.",
      h1: "House cleaning in Berkeley",
      lead: "Brown shingle houses with a hundred years of woodwork in them. Beautiful, and unforgiving of the wrong cleaning product.",
      angle: [
        {
          title: "Brown shingles are made of surfaces that punish shortcuts",
          body: "The classic Berkeley house has unpainted redwood panelling, box beams, built-in seating, leaded glass and original fir floors. Modern all-purpose spray dulls old wood and there is no undoing it. We identify what the finishes actually are on the first visit and choose products for them, which is slower than working from a checklist and enormously cheaper than refinishing.",
        },
        {
          title: "Hills and flats are two different service areas",
          body: "The flats are level, walkable and easy to schedule, with parking as the main variable. The hills are three-level houses on slopes with exterior stairs, narrow streets and smoke-season ash through the vents. Same city, quite different time budgets, and we quote them differently rather than blending one rate.",
        },
        {
          title: "Households that care what is in the bottle",
          body: "More people here ask about ingredients than anywhere else we work, and it is a fair question. Low-tox and fragrance-free is our default rather than an upgrade, and if you would rather we use your own products we will, at no difference in price.",
        },
      ],
      localNotes: [
        "Unpainted redwood, box beams and built-ins cleaned with products matched to the finish",
        "Original fir floors cleaned damp, never wet, and never steamed",
        "Hill homes quoted from the layout, including exterior stairs and levels",
        "Vents and window tracks cleaned more often during smoke season",
        "Low-tox and fragrance-free by default, or your own products at the same price",
      ],
      faq: [
        {
          q: "Will you damage the redwood panelling?",
          a: "That is exactly what we plan around. Unpainted old redwood dulls permanently under a standard all-purpose spray, so we look at the finish before choosing anything.",
        },
        {
          q: "What products do you use?",
          a: "Low-tox and fragrance-free as our default, precisely because of kids, pets and people who react to scented cleaners. If you would rather we use yours, leave them out and there is no price difference.",
        },
        {
          q: "Do you cover the hills as well as the flats?",
          a: "Yes, both, though we quote them differently. A three-level house on a slope takes longer than the same square footage in the flats.",
        },
        {
          q: "Which ZIP codes do you serve?",
          a: "All of Berkeley: 94702 through 94710, including Elmwood, North Berkeley, Claremont, Thousand Oaks, Westbrae and the hills.",
        },
      ],
    },
  },
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
    nearby: ["oakland", "berkeley", "walnut-creek"],
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
];

/**
 * Agrupamento por região, usado na seção de áreas atendidas.
 *
 * Com 18 cidades, uma grade de cards vira um muro. Agrupar por região deixa a
 * seção calma e ainda ajuda o visitante a se localizar mais rápido do que uma
 * lista alfabética.
 *
 * Os rótulos ficam em inglês nos três idiomas, pelo mesmo motivo que os nomes
 * das cidades: são topônimos. "Lamorinda" é como a região é chamada localmente.
 */
export const cityRegions: { label: string; slugs: string[] }[] = [
  {
    label: "Central Contra Costa",
    slugs: ["concord", "walnut-creek", "clayton-valley", "pacheco", "martinez"],
  },
  { label: "Lamorinda", slugs: ["lafayette", "orinda", "moraga"] },
  { label: "San Ramon Valley", slugs: ["danville", "alamo", "san-ramon"] },
  { label: "East Contra Costa", slugs: ["pittsburg", "bay-point"] },
  { label: "Alameda & San Francisco", slugs: ["oakland", "berkeley", "san-francisco"] },
  { label: "Solano", slugs: ["benicia", "vallejo"] },
];

export function getCity(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getCities(slugs: string[]): City[] {
  return slugs.map((slug) => getCity(slug)).filter((city): city is City => Boolean(city));
}
