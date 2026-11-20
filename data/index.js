export const siteConfig = {
  name: 'Techo Labs',
  tagline: 'Digital Engineering, AI Search Growth & Market Intelligence',
  url: 'https://labs.techotraders.com.lk',
  parentName: 'Techo Traders (Pvt) Ltd',
  parentShortName: 'Techo Traders',
  parentUrl: 'https://www.techotraders.com.lk/',
  email: 'labs@techotraders.com.lk',
  phone: '+94 76 665 6007',
  phoneRaw: '+94766656007',
  whatsappUrl:
    'https://wa.me/94766656007?text=Hi%20Techo%20Labs%2C%20I%27d%20like%20to%20discuss%20a%20digital%20project.',
  foundedYear: 2021,
  location: {
    city: 'Batticaloa',
    region: 'Eastern Province',
    country: 'Sri Lanka',
    countryCode: 'LK',
    coordinates: '7.7170° N, 81.7000° E',
    lat: 7.717,
    lng: 81.7,
    hours: 'Mon–Sat · 08:00 – 19:00 (GMT+5:30)',
  },
  countriesServed: [
    'Canada',
    'Netherlands',
    'United Kingdom',
    'France',
    'United Arab Emirates',
    'Australia',
    'Sri Lanka',
    'United States',
  ],
}

export const ecosystemLinks = [
  {
    id: 'traders',
    name: 'Techo Traders (Pvt) Ltd',
    shortName: 'Techo Traders',
    role: 'Parent Company · Corporate Group',
    badge: 'Parent Company',
    domain: 'techotraders.com.lk',
    url: 'https://www.techotraders.com.lk/',
    isCurrent: false,
    accent: '#2563EB',
    description:
      'The incorporated parent company uniting digital intelligence, telecom hardware manufacturing, and express courier logistics under one vision.',
    synergy: 'Group corporate platform and digital brand architecture engineered by Techo Labs.',
  },
  {
    id: 'labs',
    name: 'Techo Labs',
    shortName: 'Techo Labs',
    role: 'Digital Division · Engineering, AI Search & Research',
    badge: 'You Are Here',
    domain: 'labs.techotraders.com.lk',
    url: '/',
    isCurrent: true,
    accent: '#0A4FD4',
    description:
      'The technology and growth division of Techo Traders (Pvt) Ltd — building sub-second web platforms, AI search visibility, and market intelligence across 8+ countries.',
    synergy: 'Architects the software, web platforms, analytics, and growth engines across the group and global clients.',
  },
  {
    id: 'connect',
    name: 'Techo Connect',
    shortName: 'Techo Connect',
    role: 'Hardware Division · Antenna & Telecom Infrastructure',
    badge: 'Hardware & Telecom',
    domain: 'connect.techotraders.com.lk',
    url: 'https://www.connect.techotraders.com.lk/',
    isCurrent: false,
    accent: '#059669',
    description:
      'A division of Techo Traders (Pvt) Ltd specialising in antenna manufacturing, RF connectivity solutions, and telecommunications hardware.',
    synergy: 'Digital product catalog, B2B positioning, and search marketing powered by Techo Labs.',
  },
  {
    id: 'xpress',
    name: 'Techo Xpress',
    shortName: 'Techo Xpress',
    role: 'Logistics Division · Courier & Smart Fulfillment',
    badge: 'Courier & Logistics',
    domain: 'express.techotraders.com.lk',
    url: 'https://www.express.techotraders.com.lk/',
    isCurrent: false,
    accent: '#EA580C',
    description:
      'A division of Techo Traders (Pvt) Ltd delivering island-wide express courier, parcel fulfillment, and last-mile logistics operations.',
    synergy: 'Real-time shipment tracking software and booking experience engineered by Techo Labs.',
  },
]

export const sisterEcosystemLinks = ecosystemLinks.filter((item) => !item.isCurrent)

export const stats = [
  { value: '24', suffix: '+', label: 'Live Platforms Shipped', detail: 'Production web, SaaS & commerce' },
  { value: '8', suffix: '+', label: 'Global Markets', detail: 'North America, Europe, MENA & Asia' },
  { value: '98', suffix: '%', label: 'Client Retention', detail: 'Long-term engineering partnerships' },
  { value: '<0.8', suffix: 's', label: 'Target LCP Velocity', detail: 'Server-first Core Web Vitals' },
]

export const shiftCards = [
  {
    tag: 'SHIFT 01 · ZERO-PATIENCE UX',
    title: 'Slow Templates Kill Trust in 800 Milliseconds',
    body: 'Modern buyers judge technical credibility instantly. Heavy page-builder themes with 4-second load times bleed up to 53% of mobile intent before your headline even paints.',
    stat: '3.4×',
    statLabel: 'Higher conversion velocity on sub-second builds',
  },
  {
    tag: 'SHIFT 02 · AI ANSWER DISCOVERY',
    title: 'Buyers Ask AI Engines Before Clicking Ten Links',
    body: 'Decision-makers shortlist vendors inside ChatGPT, Perplexity, Claude, and Google AI Overviews. Without structured entity graphs, comparison data, and llms.txt indexing, your brand is invisible.',
    stat: '5-Layer',
    statLabel: 'SEO + AEO + GEO + AIO + SXO architecture',
  },
  {
    tag: 'SHIFT 03 · EVIDENCE OVER GUESSWORK',
    title: 'Code Without Market Intelligence Is Expensive Gambling',
    body: 'Beautiful interfaces fail when positioned against the wrong buyer pain. Pairing competitor teardowns and search-intent data directly with engineering turns websites into revenue machines.',
    stat: '100%',
    statLabel: 'Research-backed information architecture',
  },
]

export const optimizationPillars = [
  {
    code: 'SEO',
    name: 'Search Engine Optimization',
    summary:
      'Server-rendered Next.js markup, Core Web Vitals mastery, clean canonicals, and high-intent topic authority for Google & Bing.',
    metric: 'Compounding organic search rankings',
  },
  {
    code: 'AEO',
    name: 'Answer Engine Optimization',
    summary:
      'Direct-answer callouts, FAQPage & Speakable JSON-LD schemas, and crisp Q&A formatting engineered for featured snippets & voice.',
    metric: 'Zero-click & featured answer capture',
  },
  {
    code: 'GEO',
    name: 'Generative Engine Optimization',
    summary:
      'Entity-linked knowledge graphs, benchmark matrices, and citation-ready proof points synthesised by ChatGPT, Perplexity & AI Overviews.',
    metric: 'High AI citation & recommendation share',
  },
  {
    code: 'AIO',
    name: 'AI Optimization & Agent Readiness',
    summary:
      'Dedicated machine-readable llms.txt endpoints, unambiguous schema relationships, and open crawler access for AI search agents.',
    metric: '100% LLM & autonomous agent parseable',
  },
  {
    code: 'SXO',
    name: 'Search Experience Optimization',
    summary:
      'Instant visual hierarchy, zero layout shift, interactive proof explorers, and frictionless conversion flows that turn traffic into pipeline.',
    metric: 'Superior on-page engagement & leads',
  },
]

export const services = [
  {
    id: 'web',
    number: '01',
    title: 'Next-Gen Web & Product Engineering',
    shortTitle: 'Web Engineering',
    subtitle: 'Sub-Second Platforms, SaaS Apps & Digital Commerce',
    accent: '#0A4FD4',
    timeline: '2–8 Weeks',
    summary:
      'Bespoke Next.js and React platforms, headless CMS ecosystems, luxury e-commerce, and custom operational software engineered for instant speed and 3-year maintainability.',
    description: [
      'Legacy themes cap your growth. Techo Labs engineers digital platforms from first principles — combining React Server Components, edge delivery, and bespoke 2027 design systems to hit 98–100 Lighthouse performance out of the box.',
      'From AI MedTech platforms in Canada and luxury e-commerce in the Netherlands to real-time parcel tracking software for Techo Xpress, every build ships with WCAG 2.2 accessibility, clean JSON-LD schemas, and rock-solid scalability.',
    ],
    features: [
      'Next.js & React Server Component Architecture',
      'Bespoke 2027 UI/UX Design Systems & Interactive Prototypes',
      'Headless & Hybrid CMS (Sanity, Strapi, WordPress)',
      'High-Conversion E-Commerce (Shopify, WooCommerce, Custom)',
      'Custom SaaS Portals, APIs & Logistics Tracking Software',
      'Core Web Vitals & Sub-Second LCP Optimization',
      'WCAG 2.2 AA Accessibility & Security Hardening',
      'Built-In Technical SEO, Entity Schema & Edge Hosting',
    ],
    ideal: [
      'Brands replacing outdated, slow corporate websites',
      'SaaS, AI & MedTech startups launching flagship products',
      'E-commerce companies scaling global conversion rates',
      'Organisations needing custom portals or tracking tools',
    ],
    deliverables:
      'Figma UI System · Production Codebase · 98+ CWV Verification · JSON-LD Schema & Analytics',
  },
  {
    id: 'marketing',
    number: '02',
    title: 'Omnichannel Growth & AI Search',
    shortTitle: 'AI Search & Growth',
    subtitle: 'SEO · AEO · GEO · AIO · SXO & Performance Media',
    accent: '#0891B2',
    timeline: '90-Day Sprints',
    summary:
      'Capture high-intent demand across Google, ChatGPT, Perplexity, and paid social through unified search engineering, Google Ads, Meta campaigns, and CRO.',
    description: [
      'Discovery is now fragmented across search engines, generative AI assistants, and paid social feeds. We align your technical site structure, authority content, and entity citations across SEO, AEO, GEO, AIO, and SXO so buyers find you everywhere.',
      'When immediate pipeline velocity matters, our performance desk pairs search authority with precision Google Search, Performance Max, and Meta ad funnels — tracking every dollar through GA4 and server-side conversion attribution.',
    ],
    features: [
      'Full-Spectrum SEO, AEO, GEO & AIO Execution',
      'Search Experience Optimization (SXO) & CRO Experiments',
      'JSON-LD Knowledge Graphs, llms.txt & AI Citation Building',
      'Google Search, Performance Max & Display Campaigns',
      'Meta (Facebook & Instagram) Full-Funnel Paid Social',
      'Authority Copywriting & Editorial Content Engines',
      'GA4, Google Tag Manager & Pipeline Attribution',
      'Automated Email Lifecycle & Lead Nurture Systems',
    ],
    ideal: [
      'Companies targeting rankings in Google + AI Answer Engines',
      'B2B & service firms scaling predictable inbound pipeline',
      'E-commerce brands lowering customer acquisition cost (CAC)',
      'Regional leaders expanding into North American or EU markets',
    ],
    deliverables:
      'Search & AI Audit · 90-Day Growth Roadmap · Paid Funnel Creatives · Live ROI Dashboard',
  },
  {
    id: 'research',
    number: '03',
    title: 'Market & Competitive Intelligence',
    shortTitle: 'Market Intelligence',
    subtitle: 'Decision-Grade Clarity Before You Commit Capital',
    accent: '#059669',
    timeline: '2–4 Weeks',
    summary:
      'Deep competitor teardowns, demand sizing, buyer psychology, and positioning playbooks that eliminate guesswork before you build or scale.',
    description: [
      'Most digital budgets are wasted before launch day — spent building features buyers don’t value or bidding on saturated keywords. Techo Labs equips leadership teams with rigorous market intelligence prior to execution.',
      'We combine quantitative search and demand telemetry with qualitative user research and competitor teardowns, delivering a crystal-clear Go-To-Market roadmap you can hand straight to product, design, and growth teams.',
    ],
    features: [
      'Competitor Product, UX & SEO Moat Teardowns',
      'Total Addressable Market (TAM) & Regional Demand Sizing',
      'Buyer Persona Architecture & Decision-Trigger Mapping',
      'Global Keyword, Topic & AI Prompt Opportunity Audits',
      'Brand Positioning & Value Proposition Engineering',
      'UX Heuristic Audits & Funnel Drop-Off Diagnostics',
      'Pricing & Packaging Benchmark Analysis',
      'Actionable 12-Month Go-To-Market (GTM) Playbooks',
    ],
    ideal: [
      'Founders validating product-market fit prior to build',
      'Businesses entering Canada, Europe, UK, or MENA markets',
      'Established companies repositioning upmarket',
      'Executives & investors conducting digital due diligence',
    ],
    deliverables:
      'Market Intelligence Dossier · Competitor Matrix · Positioning Playbook · 12-Month GTM Plan',
  },
]

export const engagementModels = [
  {
    code: 'MODEL 01',
    name: 'Flagship Platform Sprint',
    cadence: '3 – 6 Weeks · Fixed Scope',
    summary:
      'Ideal for redesigning an outdated website or launching a brand-new Next.js/CMS platform with full SEO, AEO, GEO, and SXO baked in from day one.',
    highlights: [
      'Research-backed UX & bespoke 2027 UI system',
      'Sub-second server-first engineering & CMS',
      'Complete JSON-LD schema, sitemap & llms.txt setup',
      '30-day post-launch hypercare & CWV verification',
    ],
  },
  {
    code: 'MODEL 02',
    name: 'Compounding Search & AI Retainer',
    cadence: '90-Day Rolling Sprints',
    summary:
      'Continuous organic, generative AI, and paid acquisition growth for brands ready to dominate category visibility and inbound lead flow.',
    highlights: [
      'Monthly technical SEO, AEO & GEO content velocity',
      'Google Ads & Meta full-funnel campaign management',
      'Landing page SXO / CRO split-testing',
      'Transparent GA4 & pipeline attribution reporting',
    ],
  },
  {
    code: 'MODEL 03',
    name: 'Embedded Digital Intelligence Pod',
    cadence: 'Dedicated Monthly Partner',
    summary:
      'Your on-demand product engineering, market research, and growth department — built for scaling startups and multi-brand groups.',
    highlights: [
      'Senior full-stack engineers + UX + strategist access',
      'Rapid feature shipping, APIs & custom dashboards',
      'Ongoing competitor & new-market intelligence',
      'Priority 4-hour SLA across global time zones',
    ],
  },
]

export const comparisonRows = [
  {
    dimension: 'Speed & Architecture',
    legacy: 'Heavy page-builder themes, 3.5s–6s load times, render-blocking scripts',
    techo: 'Server-first Next.js architecture, <0.8s target LCP, sub-100 kB route bundles',
  },
  {
    dimension: 'Search & AI Discovery',
    legacy: 'Basic title tags only; invisible inside ChatGPT, Perplexity & AI Overviews',
    techo: 'Unified SEO + AEO + GEO + AIO + SXO with entity JSON-LD & llms.txt',
  },
  {
    dimension: 'Visual & UX Craft',
    legacy: 'Cookie-cutter templates that look indistinguishable from competitors',
    techo: 'Bespoke 2027 editorial & bento design systems built for authority & conversion',
  },
  {
    dimension: 'Commercial Strategy',
    legacy: 'Jumps straight into pixels without studying competitors or buyer intent',
    techo: 'Grounded in dedicated market intelligence, competitor teardowns & SXO data',
  },
  {
    dimension: 'Ecosystem & Ownership',
    legacy: 'Short-term freelancers who vanish once the final invoice clears',
    techo: 'Backed by Techo Traders (Pvt) Ltd — operational discipline & 98% retention',
  },
]

export const portfolioItems = [
  {
    id: 21,
    index: '01',
    title: 'Ophtascan',
    url: 'https://ophtascan.ai/',
    category: 'MedTech / AI',
    region: 'North America',
    countryCode: 'CA',
    location: 'Canada',
    motif: 'ai',
    spotlight: true,
    metric: 'Clinical AI Positioning',
    tags: ['AI Diagnostics', 'MedTech UX', 'Next-Gen Web'],
    description:
      'AI-powered ophthalmic diagnostics platform engineered with clinical precision, structured product narratives, and investor-grade credibility.',
  },
  {
    id: 19,
    index: '02',
    title: 'Tirisi',
    url: 'https://tirisi.com/',
    category: 'Jewellery & Luxury',
    region: 'Europe',
    countryCode: 'NL',
    location: 'Netherlands',
    motif: 'luxury',
    spotlight: true,
    metric: 'Global Luxury Commerce',
    tags: ['Fine Jewellery', 'Editorial E-Commerce', 'Brand Experience'],
    description:
      'Haute-couture Dutch fine jewellery house featuring tactile editorial lookbooks, collection storytelling, and international boutique discovery.',
  },
  {
    id: 20,
    index: '03',
    title: 'WeTrAQ',
    url: 'https://www.wetraq.ca/',
    category: 'Technology / SaaS',
    region: 'North America',
    countryCode: 'CA',
    location: 'Canada',
    motif: 'saas',
    spotlight: true,
    metric: 'IoT SaaS Onboarding',
    tags: ['SaaS Product', 'Smart Tracking', 'Conversion Funnel'],
    description:
      'Canadian connected-tracking SaaS platform built around real-time telemetry clarity, interactive feature architecture, and frictionless onboarding.',
  },
  {
    id: 1,
    index: '04',
    title: 'Palmyra Homes',
    url: 'https://palmyrahomes.ca/',
    category: 'Real Estate',
    region: 'North America',
    countryCode: 'CA',
    location: 'Canada',
    motif: 'architecture',
    spotlight: true,
    metric: 'High-Intent Buyer Leads',
    tags: ['Residential Communities', 'Architectural UI', 'SEO'],
    description:
      'Flagship property showcase for a premier Canadian home developer featuring interactive neighbourhood portfolios and buyer registration flows.',
  },
  {
    id: 16,
    index: '05',
    title: 'Vooruit',
    url: 'https://vooruit.nl/',
    category: 'Corporate',
    region: 'Europe',
    countryCode: 'NL',
    location: 'Netherlands',
    motif: 'cloud',
    spotlight: true,
    metric: 'Enterprise B2B Authority',
    tags: ['Managed IT', 'Multilingual UX', 'Enterprise'],
    description:
      'Dutch enterprise IT and cloud transformation partner platform structured for rapid executive comprehension and B2B pipeline conversion.',
  },
  {
    id: 22,
    index: '06',
    title: 'Techo Traders',
    url: 'https://www.techotraders.com.lk/',
    category: 'Corporate',
    region: 'South Asia',
    countryCode: 'LK',
    location: 'Sri Lanka',
    motif: 'ecosystem',
    ecosystem: true,
    spotlight: true,
    metric: 'Parent Group Hub',
    tags: ['Parent Company', 'Group Ecosystem', 'Corporate Identity'],
    description:
      'Official corporate digital hub of Techo Traders (Pvt) Ltd — uniting Techo Labs, Techo Connect, and Techo Xpress under one cohesive architecture.',
  },
  {
    id: 23,
    index: '07',
    title: 'Techo Connect',
    url: 'https://www.connect.techotraders.com.lk/',
    category: 'Hardware & Telecom',
    region: 'South Asia',
    countryCode: 'LK',
    location: 'Sri Lanka',
    motif: 'signal',
    ecosystem: true,
    metric: 'Telecom Hardware Division',
    tags: ['Antenna Manufacturing', 'RF Hardware', 'Techo Division'],
    description:
      'Product engineering showcase and specification hub for Techo Connect, the antenna and telecom infrastructure division of Techo Traders (Pvt) Ltd.',
  },
  {
    id: 24,
    index: '08',
    title: 'Techo Xpress',
    url: 'https://www.express.techotraders.com.lk/',
    category: 'Logistics',
    region: 'South Asia',
    countryCode: 'LK',
    location: 'Sri Lanka',
    motif: 'logistics',
    ecosystem: true,
    metric: 'Live Parcel Telemetry',
    tags: ['Tracking Software', 'Express Courier', 'Techo Division'],
    description:
      'Island-wide courier platform for Techo Xpress featuring live shipment tracking and booking workflows custom-engineered by Techo Labs.',
  },
  {
    id: 3,
    index: '09',
    title: 'Koenig Developments',
    url: 'https://www.koenigdevelopments.com/',
    category: 'Real Estate',
    region: 'North America',
    countryCode: 'CA',
    location: 'Canada',
    motif: 'architecture',
    metric: 'Development Portfolio',
    tags: ['Property Development', 'Portfolio', 'Web Design'],
    description:
      'Modern Canadian commercial and residential property developer showcase highlighting landmark builds and investment enquiries.',
  },
  {
    id: 4,
    index: '10',
    title: 'Shamal Digitals',
    url: 'https://shamaldigitals.com/',
    category: 'Digital Agency',
    region: 'Middle East',
    countryCode: 'AE',
    location: 'UAE',
    motif: 'growth',
    metric: 'MENA Brand Presence',
    tags: ['Creative Studio', 'Case Studies', 'UAE'],
    description:
      'High-impact UAE digital agency platform presenting regional brand transformations, service verticals, and lead capture funnels.',
  },
  {
    id: 5,
    index: '11',
    title: 'Diapearl Group',
    url: 'https://www.diapearlgroup.com/',
    category: 'Corporate',
    region: 'North America',
    countryCode: 'CA',
    location: 'Canada',
    motif: 'ecosystem',
    metric: 'Multi-Vertical Group',
    tags: ['Conglomerate', 'Executive Trust', 'Canada'],
    description:
      'Diversified Canadian business conglomerate portal communicating corporate governance, global subsidiaries, and partner confidence.',
  },
  {
    id: 6,
    index: '12',
    title: 'Libertas Immigration',
    url: 'https://libertasimmigration.ca/',
    category: 'Legal & Immigration',
    region: 'North America',
    countryCode: 'CA',
    location: 'Canada',
    motif: 'editorial',
    metric: 'Consultation SXO Funnel',
    tags: ['Immigration Advisory', 'Pathway Guides', 'Booking'],
    description:
      'Canadian immigration consultancy engineered with clear visa pathway architecture, eligibility clarity, and high-trust consultation booking.',
  },
  {
    id: 7,
    index: '13',
    title: 'Landeal Group',
    url: 'https://landealgroup.com/',
    category: 'Real Estate',
    region: 'North America',
    countryCode: 'CA',
    location: 'Canada',
    motif: 'architecture',
    metric: 'Land Investment Portal',
    tags: ['Land Acquisition', 'Property Listings', 'Investor UX'],
    description:
      'Canadian land acquisition and real estate investment platform with structured parcel listings and direct investor inquiry workflows.',
  },
  {
    id: 8,
    index: '14',
    title: 'Highgate Hill Murugan',
    url: 'https://highgatehillmurugan.org/',
    category: 'Religious / Non-profit',
    region: 'Europe',
    countryCode: 'UK',
    location: 'United Kingdom',
    motif: 'editorial',
    metric: 'Community Engagement',
    tags: ['London Institution', 'Events Calendar', 'Non-Profit'],
    description:
      'Historic London cultural and religious institution portal featuring festival schedules, community announcements, and patron engagement.',
  },
  {
    id: 9,
    index: '15',
    title: 'Ideal Entertainment',
    url: 'https://idealentertainment.com/',
    category: 'Entertainment',
    region: 'North America',
    countryCode: 'CA',
    location: 'Canada',
    motif: 'luxury',
    metric: 'Live Event Production',
    tags: ['Concerts & Touring', 'Artist Roster', 'Booking'],
    description:
      'Vibrant Canadian live-entertainment platform showcasing international tours, artist rosters, and production booking.',
  },
  {
    id: 10,
    index: '16',
    title: 'Tamil Golfers Association',
    url: 'https://www.tamilgolfersassociation.com/',
    category: 'Sports & Community',
    region: 'North America',
    countryCode: 'CA',
    location: 'Canada',
    motif: 'growth',
    metric: 'Member & Tour Portal',
    tags: ['Sports Association', 'Tournaments', 'Membership'],
    description:
      'Canadian sporting association hub delivering tournament schedules, member onboarding, and sponsor visibility.',
  },
  {
    id: 11,
    index: '17',
    title: 'Le Roi Indien',
    url: 'https://leroiindien.fr/',
    category: 'Restaurant',
    region: 'Europe',
    countryCode: 'FR',
    location: 'France',
    motif: 'luxury',
    metric: 'French Local SEO & Dining',
    tags: ['Gastronomy', 'French UX', 'Table Reservations'],
    description:
      'Refined French-language culinary destination featuring interactive tasting menus, local search schema, and instant table reservations.',
  },
  {
    id: 12,
    index: '18',
    title: 'SITPI Academy',
    url: 'https://sitpi.academy/',
    category: 'Education',
    region: 'North America',
    countryCode: 'CA',
    location: 'Canada',
    motif: 'editorial',
    metric: 'Digital Course Enrolment',
    tags: ['EdTech', 'Curriculum UX', 'Student Portal'],
    description:
      'Modern Canadian training academy structured around clear learning tracks, cohort schedules, and seamless student enrolment.',
  },
  {
    id: 2,
    index: '19',
    title: 'Mattakalappu',
    url: 'https://mattakalappu.com/',
    category: 'Community',
    region: 'South Asia',
    countryCode: 'LK',
    location: 'Sri Lanka',
    motif: 'editorial',
    metric: 'Cultural Digital Archive',
    tags: ['Heritage Archive', 'Digital Publishing', 'Community'],
    description:
      'Editorial heritage and documentation platform preserving regional history, literature, and cultural narratives in Sri Lanka.',
  },
  {
    id: 13,
    index: '20',
    title: 'Oorkuruvi',
    url: 'https://mattakalappu.com/oorkuruvi/',
    category: 'Media',
    region: 'South Asia',
    countryCode: 'LK',
    location: 'Sri Lanka',
    motif: 'logistics',
    metric: 'Eco-Tourism Discovery',
    tags: ['Sustainable Travel', 'Regional Trails', 'Storytelling'],
    description:
      'Eco-friendly travel and regional storytelling platform inspiring authentic, low-impact cultural exploration across Sri Lanka.',
  },
  {
    id: 14,
    index: '21',
    title: 'Sevendale',
    url: 'https://sevendale.ca/',
    category: 'Corporate',
    region: 'North America',
    countryCode: 'CA',
    location: 'Canada',
    motif: 'cloud',
    metric: 'Clean Corporate Identity',
    tags: ['B2B Positioning', 'Brand Architecture', 'Canada'],
    description:
      'Crisp Canadian corporate platform built with disciplined typography, rapid page transitions, and clear service articulation.',
  },
  {
    id: 15,
    index: '22',
    title: 'Blaze ITM',
    url: 'https://blazeitm.com/',
    category: 'Technology',
    region: 'North America',
    countryCode: 'CA',
    location: 'Canada',
    motif: 'saas',
    metric: 'IT Solutions Showcase',
    tags: ['IT Consulting', 'Digital Products', 'Enterprise'],
    description:
      'Canadian technology consultancy website highlighting managed solutions, digital product engineering, and enterprise outcomes.',
  },
  {
    id: 17,
    index: '23',
    title: 'Energy at the Office',
    url: 'https://energyattheoffice.nl/',
    category: 'Wellness & HR',
    region: 'Europe',
    countryCode: 'NL',
    location: 'Netherlands',
    motif: 'growth',
    metric: 'Corporate Vitality UX',
    tags: ['Workplace Wellness', 'HR Programmes', 'Netherlands'],
    description:
      'Dutch corporate vitality consultancy featuring interactive HR wellness programmes and frictionless workshop booking.',
  },
  {
    id: 18,
    index: '24',
    title: 'FF Administraties',
    url: 'https://www.ffadministraties.nl/',
    category: 'Finance & Admin',
    region: 'Europe',
    countryCode: 'NL',
    location: 'Netherlands',
    motif: 'cloud',
    metric: 'Financial Advisory Trust',
    tags: ['Tax & Accounting', 'Advisory UX', 'Local SEO'],
    description:
      'Dutch financial administration and tax advisory platform engineered around regulatory clarity, client trust, and inbound consultations.',
  },
]

export const faqs = [
  {
    question: 'What is Techo Labs and how does it relate to Techo Traders (Pvt) Ltd?',
    answer:
      'Techo Labs is the digital engineering, AI search growth, and market intelligence division of Techo Traders (Pvt) Ltd. Alongside serving international clients across 8+ countries, Techo Labs builds and powers the digital platforms and software for parent company Techo Traders (Pvt) Ltd and sister divisions Techo Connect and Techo Xpress.',
  },
  {
    question: 'How does Techo Labs optimise websites for SEO, AEO, GEO, AIO, and SXO simultaneously?',
    answer:
      'Every platform is engineered on five layers: Server-Side Next.js speed and semantic HTML for Google & Bing (SEO); concise Q&A callouts and FAQ/Speakable schemas for direct voice and snippet answers (AEO); verifiable benchmarks, comparison tables, and entity graphs cited by ChatGPT, Perplexity, and AI Overviews (GEO); machine-readable llms.txt files and AI crawler rules (AIO); and high-converting user journeys (SXO).',
  },
  {
    question: 'How fast can Techo Labs design and ship a modern 2027 website or SaaS platform?',
    answer:
      'Focused flagship websites launch in 2 to 4 weeks. Custom Next.js web applications, SaaS platforms, and multi-region e-commerce stores typically ship in 5 to 8 weeks, with interactive staging previews delivered every week from sprint one.',
  },
  {
    question: 'Do you work seamlessly with teams in Canada, Europe, the UK, and the Middle East?',
    answer:
      'Yes. Over 75% of our 24+ live deployments serve clients in Canada, the Netherlands, the United Kingdom, France, and the UAE. We operate with a 4-hour response SLA and collaborate smoothly via Slack, WhatsApp, video sprints, and asynchronous staging reviews.',
  },
  {
    question: 'Can you replace our outdated website without losing our existing Google rankings?',
    answer:
      'Yes. Every migration includes full URL mapping, 301 redirect verification, canonical parity, upgraded JSON-LD entity schemas, and dramatic Core Web Vitals speed gains — safeguarding existing rankings while expanding visibility across both search and AI answer engines.',
  },
  {
    question: 'What happens after launch — do you handle ongoing growth and engineering?',
    answer:
      'Absolutely. Most partners transition from an initial Flagship Platform Sprint into either our 90-Day Search & AI Growth Retainer or an Embedded Digital Intelligence Pod covering continuous feature shipping, Core Web Vitals monitoring, and campaign optimisation.',
  },
]

export const servicesFaqs = [
  {
    question: 'Should we choose custom Next.js engineering or a headless CMS?',
    answer:
      'We combine both when needed. Next.js provides sub-second server-rendered performance and full UI control, while a headless CMS such as Sanity, Strapi, or WordPress lets your marketing team publish pages and articles effortlessly without touching code.',
  },
  {
    question: 'What is included in your SEO, AEO, GEO, AIO, and SXO growth sprints?',
    answer:
      'Each 90-day sprint covers technical Core Web Vitals tuning, semantic HTML and JSON-LD entity schemas, answer-first content blocks, comparison matrices for ChatGPT and Perplexity citations, llms.txt indexing, and ongoing conversion rate experiments.',
  },
  {
    question: 'Can we start with Market Intelligence before committing to a full web build?',
    answer:
      'Yes. Many founders and executives begin with a 2-to-4-week Market & Competitive Intelligence sprint to validate demand, dissect competitors, and lock in positioning before investing in full-scale engineering or paid media.',
  },
  {
    question: 'How do you measure ROI across web engineering and digital marketing?',
    answer:
      'Every project ships with GA4, Google Tag Manager, Search Console, and pipeline conversion tracking so leadership can trace load-time gains, search rankings, AI referrals, and ad spend directly to qualified leads and revenue.',
  },
]

export const portfolioFaqs = [
  {
    question: 'Are all 24 platforms in the Techo Labs showcase live in production?',
    answer:
      'Yes. Every entry in our directory links directly to an active production website or web application engineered for clients across Canada, the Netherlands, the United Kingdom, France, the UAE, and Sri Lanka.',
  },
  {
    question: 'Which industries does Techo Labs have proven production experience in?',
    answer:
      'Our live deployments span 15+ sectors including clinical MedTech and AI diagnostics, IoT SaaS, residential and commercial real estate, fine jewellery luxury e-commerce, enterprise IT, legal and immigration advisory, hospitality, telecom hardware, and express courier logistics.',
  },
  {
    question: 'What software has Techo Labs built for the Techo Traders (Pvt) Ltd group?',
    answer:
      'Beyond external client work, Techo Labs engineered the corporate group hub for Techo Traders (Pvt) Ltd, the B2B hardware showcase for Techo Connect, and the custom parcel tracking and booking software powering Techo Xpress.',
  },
  {
    question: 'Do you take on confidential or white-label engineering projects under NDA?',
    answer:
      'Yes. In addition to our 24 public showcase launches, we partner with international agencies and funded startups under strict non-disclosure agreements for proprietary web applications and research studies.',
  },
]

export const aboutFaqs = [
  {
    question: 'What is the legal relationship between Techo Labs and Techo Traders (Pvt) Ltd?',
    answer:
      'Techo Traders (Pvt) Ltd is the incorporated parent company. Techo Labs operates as its dedicated digital engineering, AI search growth, and market intelligence division alongside sister divisions Techo Connect and Techo Xpress.',
  },
  {
    question: 'Where is the Techo Labs team located and how do you collaborate globally?',
    answer:
      'Our engineering and research base is in Batticaloa, Sri Lanka. Over 75% of our projects serve clients across North America, Europe, and the Middle East via structured Slack channels, video sprints, live staging previews, and a 4-hour response SLA.',
  },
  {
    question: 'Why does Techo Labs combine engineering, search marketing, and research in one team?',
    answer:
      'When design, code, SEO/GEO, and market research are split across disconnected vendors, speed and positioning suffer. Uniting all three disciplines under one roof ensures every platform launches fast, ranks across search and AI engines, and converts buyers.',
  },
  {
    question: 'How long do clients typically stay partnered with Techo Labs?',
    answer:
      'We maintain a 98% client satisfaction and retention rate, with many international partners working with us across multiple product launches, regional expansions, and multi-year growth retainers since 2021.',
  },
]
