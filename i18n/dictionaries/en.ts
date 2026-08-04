/**
 * Inglês, a fonte da verdade da tradução.
 *
 * O tipo `Dictionary` é derivado deste arquivo (`typeof en`), então adicionar
 * uma chave aqui quebra o build de `pt.ts` e `es.ts` até que ela seja traduzida.
 * É essa a garantia de "nenhuma string hardcoded em componente".
 */
const en = {
  meta: {
    home: {
      title: "House Cleaning in San Francisco & the Bay Area",
      description:
        "Recurring, deep and move-out house cleaning across San Francisco and the Peninsula. Flat pricing, same cleaner every visit. Text us for a free quote.",
    },
    services: {
      title: "Cleaning Services",
      description:
        "Recurring upkeep, deep cleaning, move-in/move-out and post-construction cleaning for homes across the Bay Area. Free quotes by text.",
    },
    areas: {
      title: "Areas We Serve",
      description:
        "House cleaning in San Francisco, Daly City, South San Francisco, San Mateo, Burlingame, Millbrae and Pacifica. Text us your ZIP code for a free quote.",
    },
    about: {
      title: "About Sabrina",
      description:
        "A small, careful house cleaning business serving San Francisco and the Peninsula. Meet the person who will actually be cleaning your home.",
    },
    faq: {
      title: "Frequently Asked Questions",
      description:
        "Booking, pricing, supplies, access, areas covered and our re-clean guarantee. The questions we get asked most about house cleaning in the Bay Area.",
    },
    quote: {
      title: "Get a Free Quote",
      description:
        "Tell us about your home and we'll send a flat price by text, usually within the hour. No walkthrough, no obligation.",
    },
    privacy: {
      title: "Privacy Policy",
      description: "How Sabrina House Cleaning handles the information you share with us.",
    },
    terms: {
      title: "Terms of Service",
      description: "The terms that apply to cleaning services booked with Sabrina House Cleaning.",
    },
  },

  nav: {
    home: "Home",
    services: "Services",
    areas: "Areas",
    about: "About",
    faq: "FAQ",
    quote: "Get a quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    languageLabel: "Change language",
    primaryLabel: "Main navigation",
    footerLabel: "Footer navigation",
  },

  cta: {
    text: "Text us for a free quote",
    textShort: "Text us",
    /** Versão curta o bastante para a barra fixa de 375px. */
    textBar: "Text us for a free quote",
    call: "Call us",
    callShort: "Call",
    quote: "Get a free quote",
    quoteShort: "Free quote",
    learnMore: "Learn more",
    viewAll: "View all",
    /** Mensagem que já vai escrita no app de SMS ao tocar no CTA principal. */
    smsBody: "Hi Sabrina! I'd like a free quote for house cleaning. My ZIP code is ",
  },

  hero: {
    eyebrow: "San Francisco & the Peninsula",
    titleLead: "A home that feels",
    titleAccent: "brand new",
    titleTail: "every week.",
    subtitle:
      "Recurring, deep and move-out cleaning from a small team that shows up on time and remembers how you like things. Text us your ZIP code and get a flat price back, usually within the hour.",
    imageAlt:
      "Sunlit living room in a San Francisco home after a professional cleaning, with clear surfaces and neatly arranged cushions",
    /**
     * Selos usados enquanto `site.stats.confirmed` for `false`.
     * Todos são políticas nossas, não fatos que eu não possa verificar.
     */
    badges: {
      estimate: "Free estimates",
      availability: "Same-week openings",
      supplies: "Supplies included",
    },
    /** Só aparece quando `site.stats.confirmed` vira `true`. */
    stats: {
      rating: "average rating",
      homes: "homes cleaned",
      years: "years in the Bay Area",
    },
  },

  about: {
    eyebrow: "About",
    title: "A small business, on purpose",
    lead: "Sabrina House Cleaning is owner-run. That isn't a limitation we're apologising for. It's the reason the work stays consistent.",
    intro: {
      one: "When you hire a large agency you are, in practice, hiring a dispatcher. Whoever is free that morning shows up, works from a generic checklist, and may never come back. When you hire us, you are hiring the person who will be standing in your kitchen.",
      two: "That's the whole model. We keep the client list small enough that the same person can return to the same homes week after week and learn them properly. Which shelf is off-limits, which dog barks at the vacuum, which bathroom always needs the extra ten minutes.",
    },
    howTitle: "How we work",
    how: {
      quote: {
        title: "We quote before we start",
        body: "You get a flat price by text, based on what you tell us about the home. If the home turns out to be very different from the description, we tell you before we begin, never after.",
      },
      supplies: {
        title: "We bring everything",
        body: "Products, cloths, vacuum. Low-tox and fragrance-free as the default, because of kids, pets and the people who react to scented cleaners.",
      },
      report: {
        title: "We tell you what we find",
        body: "A slow drain, a leak starting under the sink, mould behind a window frame. You get a text about it. Finding those early is worth more than the cleaning itself.",
      },
      redo: {
        title: "We come back if it's wrong",
        body: "Point at anything within 24 hours of a visit and we return and redo it at no cost. No forms and no argument. It's simply cheaper for us than losing a client.",
      },
    },
    storyTitle: "In Sabrina's words",
    photoAlt: "Sabrina, owner of Sabrina House Cleaning, in a Bay Area home",
    areaTitle: "Where we work",
    areaBody: "San Francisco and down the Peninsula, including Daly City, South San Francisco, Pacifica, Millbrae, Burlingame and San Mateo.",
    ctaTitle: "Want to know if we're a fit?",
    ctaBody: "Text us your ZIP code and a sentence about your home. If we're not the right choice, we'll say so.",
  },

  trust: {
    licensedAndInsured: "Licensed & insured",
    backgroundChecked: "Background-checked",
    supplies: "Supplies included",
    guarantee: "24-hour re-clean guarantee",
  },

  services: {
    eyebrow: "What we do",
    title: "Cleaning built around how you actually live",
    subtitle:
      "Four services, priced flat and quoted before we start. Most clients begin with a deep clean and switch to a recurring visit after that.",
    items: {
      "recurring-cleaning": {
        name: "Recurring Cleaning",
        blurb:
          "Weekly, bi-weekly or monthly upkeep, always with the same person, who learns what matters in your home.",
      },
      "deep-cleaning": {
        name: "Deep Cleaning",
        blurb:
          "A full reset. Baseboards, grout, inside the oven and fridge, and every surface routine cleaning skips.",
      },
      "move-in-move-out": {
        name: "Move-In / Move-Out",
        blurb:
          "Empty-home detail cleaning that helps you get the deposit back, or start day one in a place that's truly clean.",
      },
      "post-construction": {
        name: "Post-Construction",
        blurb:
          "Fine remodel dust removed properly, from vents and light fixtures down to the last pass on the floors.",
      },
    },
    allServices: "See all services",
    startingNote: "Not sure which one you need? Text us and we'll tell you honestly.",
  },

  how: {
    eyebrow: "How it works",
    title: "Three steps, no phone tag",
    subtitle: "Most people go from first message to a booked date in under ten minutes.",
    steps: {
      one: {
        title: "Text us",
        body: "Send your ZIP code and roughly how big your home is. That's genuinely all we need to price it.",
      },
      two: {
        title: "Get a price and pick a day",
        body: "We reply with a flat price and the openings we have that week. You confirm the one that works.",
      },
      three: {
        title: "Come home to clean",
        body: "We arrive on time with our own supplies. Anything not right? Tell us within 24 hours and we come back.",
      },
    },
  },

  why: {
    eyebrow: "Why Sabrina",
    title: "The difference is who shows up",
    subtitle:
      "Bigger companies rotate whoever is available that day. We don't work that way, and it's the reason clients stay for years.",
    items: {
      sameCleaner: {
        title: "The same cleaner, every visit",
        body: "No rotating crews. Recurring clients keep the same person, who already knows which shelf you don't want touched.",
      },
      flatPrice: {
        title: "Flat pricing, agreed upfront",
        body: "The price we text you is the price you pay. No hourly meter, no extras added at the door.",
      },
      safeProducts: {
        title: "Safe around kids and pets",
        body: "Low-tox, fragrance-free products by default. Tell us about allergies or a favourite brand and we adapt.",
      },
      onTime: {
        title: "On time, or you hear from us first",
        body: "If the 101 turns against us, you get a text before we're late, not an apology after.",
      },
      details: {
        title: "The details nobody asks for",
        body: "Baseboards, switch plates, the base of the faucet, the track in the shower door. That's where a clean home is decided.",
      },
      guarantee: {
        title: "24-hour re-clean guarantee",
        body: "Point at anything you're not happy with within a day of the visit and we come back and redo it, free.",
      },
    },
  },

  areas: {
    eyebrow: "Where we clean",
    title: "San Francisco and down the Peninsula",
    subtitle:
      "From the Sunset and Noe Valley through Daly City and South San Francisco, all the way to San Mateo and Burlingame.",
    note: "Not sure if your street is in range? Text us your ZIP code and we'll answer straight away.",
    viewCity: "House cleaning in",
    allAreas: "See all areas",
    countyLabel: "County",
  },

  testimonials: {
    eyebrow: "Clients",
    title: "What people say",
    subtitle: "Reviews from homes across San Francisco and the Peninsula.",
    empty: {
      title: "We're collecting reviews right now",
      body: "Rather than publish something invented, we've left this space empty until real clients fill it. If you'd like to hear from someone we already clean for in your neighborhood, just ask and we'll put you in touch.",
      cta: "Ask for a reference",
      smsBody:
        "Hi Sabrina! Could you put me in touch with a client near me before I book? My ZIP code is ",
    },
  },

  pricing: {
    eyebrow: "Pricing",
    title: "Free estimates, flat prices",
    subtitle:
      "A price table would be wrong for your home the moment you read it, because size, condition and frequency change everything. So we quote you properly, by text, in a few minutes.",
    points: {
      flat: "One flat price per visit, agreed before we start",
      recurring: "Recurring visits cost less per clean than one-offs",
      cancel: "No cancellation fee with 24 hours' notice",
      supplies: "Supplies, equipment and travel included",
    },
    cta: "Get your free estimate",
    note: "No walkthrough needed. No obligation.",
  },

  faq: {
    eyebrow: "Questions",
    title: "Everything people ask before booking",
    subtitle: "Still unsure about something? Text us. You'll get a real answer, not a script.",
    more: "Read all questions",
    items: {
      booking: {
        q: "How do I book a cleaning?",
        a: "Send us a text with your ZIP code and roughly how big your home is. We reply with a flat price and the days we have open. Once you confirm a day, you're booked. There's no account to create and no deposit to pay.",
      },
      price: {
        q: "How much does a cleaning cost?",
        a: "It depends on the size and condition of your home and how often we come. A first deep clean costs more than the recurring visits that follow it. We give you a flat price by text before anything is booked, and that price doesn't change afterwards.",
      },
      areas: {
        q: "Which areas do you cover?",
        a: "San Francisco and the Peninsula, including Daly City, South San Francisco, Pacifica, Millbrae, Burlingame and San Mateo. If you're just outside that, text us anyway; we can often make it work.",
      },
      home: {
        q: "Do I need to be home during the cleaning?",
        a: "No. Most of our recurring clients are at work. You can leave a key, a lockbox code or building instructions, and we'll text you when we arrive and when we finish.",
      },
      supplies: {
        q: "Do you bring your own supplies?",
        a: "Yes. Products, cloths and vacuum, all included in the price. We use low-tox, fragrance-free products by default. If you'd rather we use your own products, that's completely fine, just leave them out.",
      },
      frequency: {
        q: "How often should I book?",
        a: "Bi-weekly suits most households and is the best value per clean. Weekly makes sense with pets, small children or a busy home. Monthly works for smaller places or homes that are already tidy between visits.",
      },
      pets: {
        q: "Are your products safe for pets and kids?",
        a: "Yes. We use low-tox, fragrance-free products as our default, precisely because of pets and small children. Tell us about allergies or sensitivities before the first visit and we'll adjust what we bring.",
      },
      guarantee: {
        q: "What if I'm not happy with something?",
        a: "Text us within 24 hours of the visit and point at what's wrong. We come back and redo it at no cost. No forms, no argument.",
      },
      access: {
        q: "What happens if I need to reschedule?",
        a: "Just text us. With 24 hours' notice there's no fee at all. We'd much rather move a visit than clean a home at a bad moment.",
      },
    },
  },

  finalCta: {
    title: "Let's get your home on the calendar",
    body: "Text us your ZIP code and we'll send a flat price back, usually within the hour and always free.",
    imageAlt:
      "Sabrina House Cleaning illustrated mascot: a smiling cleaner in a black and white uniform holding a feather duster",
  },

  quoteForm: {
    eyebrow: "Free quote",
    title: "Tell us about your home",
    subtitle:
      "Fill this in and we'll turn it into a text message for you. Nothing is sent to a server; your phone just opens with the message already written.",
    fields: {
      name: "Your name",
      phone: "Phone number",
      email: "Email (optional)",
      zip: "ZIP code",
      service: "Which service?",
      frequency: "How often?",
      bedrooms: "Bedrooms",
      bathrooms: "Bathrooms",
      notes: "Anything we should know?",
      notesPlaceholder: "Pets, allergies, parking, areas to skip, preferred days…",
    },
    frequencies: {
      weekly: "Weekly",
      biweekly: "Bi-weekly",
      monthly: "Monthly",
      once: "One-time",
      unsure: "Not sure yet",
    },
    select: "Select an option",
    submit: "Open my text message",
    required: "Required",
    zipPattern: "Enter a 5-digit ZIP code, e.g. 94080",
    ready: {
      title: "Your message is ready",
      body: "Your messaging app should have opened. If it didn't, which happens on desktop, copy the message below and send it to us however you prefer.",
      copy: "Copy message",
      copied: "Copied",
      orCall: "Or call",
      orEmail: "Or email",
      restart: "Start over",
    },
    /** Rótulos usados dentro do corpo do SMS. Mantidos curtos de propósito. */
    smsLabels: {
      intro: "Hi Sabrina! I'd like a free quote for house cleaning.",
      name: "Name",
      phone: "Phone",
      email: "Email",
      zip: "ZIP",
      service: "Service",
      frequency: "Frequency",
      size: "Home",
      bedrooms: "bed",
      bathrooms: "bath",
      notes: "Notes",
    },
  },

  footer: {
    blurb:
      "House cleaning for San Francisco and the Peninsula. Recurring, deep, move-in/move-out and post-construction.",
    servicesTitle: "Services",
    companyTitle: "Company",
    contactTitle: "Contact",
    hoursTitle: "Hours",
    hoursValue: "Monday to Saturday, 8am – 6pm",
    followTitle: "Follow",
    rights: "All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
    languageTitle: "Language",
  },

  mobileBar: {
    label: "Quick contact",
  },

  breadcrumbs: {
    home: "Home",
    label: "Breadcrumb",
  },

  notFound: {
    title: "This page doesn't exist",
    body: "The link may be old, or the page may only be available in English. Try the home page, or just text us. That's faster.",
    cta: "Back to home",
  },

  legal: {
    updated: "Last updated",
    privacy: {
      intro:
        "This is a short policy because there is very little to explain: this website does not run a database and does not store anything you type into it.",
      sections: {
        form: {
          title: "The quote form",
          body: "The quote form on this site never sends your answers to a server. It assembles them into a text message and hands that message to your phone, exactly as if you had typed it yourself. Nothing is stored here, and nothing is sent anywhere until you press send in your own messaging app.",
        },
        contact: {
          title: "When you contact us",
          body: "If you text, call or email us, we keep your message and contact details for as long as we're working together, so we can schedule visits and quote you accurately. We do not sell or share them with anyone.",
        },
        analytics: {
          title: "Analytics and cookies",
          body: "This site sets no advertising cookies and does no cross-site tracking. If we add basic, privacy-friendly traffic analytics later, this page will say so.",
        },
        rights: {
          title: "Your choices",
          body: "You can ask us at any time to delete the contact details we hold for you. Text or email us and we'll confirm once it's done.",
        },
      },
    },
    terms: {
      intro:
        "These terms apply to cleaning services booked with us. They're written plainly on purpose.",
      sections: {
        quotes: {
          title: "Quotes and pricing",
          body: "Quotes are given as a flat price per visit, based on the information you provide about your home. If the home turns out to be substantially different from what was described, we'll tell you before starting and agree a new price with you. We never adjust the price after the fact.",
        },
        scheduling: {
          title: "Scheduling and cancellations",
          body: "You can reschedule or cancel at no cost with at least 24 hours' notice. If we can't get access to the home at the agreed time and can't reach you, we may charge for the visit.",
        },
        guarantee: {
          title: "Re-clean guarantee",
          body: "If you're not satisfied with part of a cleaning, tell us within 24 hours of the visit and we'll return and redo that area at no cost. The guarantee covers re-cleaning; it isn't a refund policy.",
        },
        liability: {
          title: "Damage and valuables",
          body: "We take real care in your home. If something is damaged during a visit, tell us right away and we'll make it right. Please put away cash, jewellery and irreplaceable items before we arrive.",
        },
        payment: {
          title: "Payment",
          body: "Payment is due on the day of the visit unless we've agreed otherwise in writing.",
        },
      },
    },
  },
} as const;

export default en;
