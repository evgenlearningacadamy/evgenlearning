/**
 * Central content source for EVGEN Learning Academy.
 * Everything that changes often (courses, batches, testimonials, placements,
 * trainers, insights, FAQs, events) lives here so it can be swapped for a CMS
 * or database without touching the page components.
 */

export const site = {
  name: "EVGEN Learning Academy",
  shortName: "EVGEN",
  domain: "evgenlearningacademy.com",
  phone: "+91 9400797914",
  phoneHref: "tel:+919400797914",
  email: "evgenlearningacadamy@gmail.com",
  whatsappNumber: "919400797914",
  whatsappMessage:
    "Hi EVGEN Academy, I'm interested in your EV programs. I would like to know more about the next batch and demo class.",
  address: {
    line1: "2nd Floor, Beach Complex",
    line2: "Silk Street",
    city: "Calicut",
    state: "Kerala",
    pin: "673032",
    country: "India",
  },
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
  tagline: "Build your future in the EV industry.",
} as const;

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Placements", to: "/placements" },
  { label: "Student Stories", to: "/student-stories" },
  { label: "EV Insights", to: "/ev-insights" },
  { label: "Contact", to: "/contact" },
] as const;

export const trustBar = [
  "Industry Expert Trainers",
  "Live Learning",
  "Practical EV Training",
  "Career Support",
  "Placement Support",
  "Certification",
];

export const careerPaths = [
  {
    title: "EV Service Technician",
    text: "Service and maintain electric vehicles at workshops and service centres.",
  },
  {
    title: "EV Diagnostic Technician",
    text: "Identify faults using diagnostic tools and structured troubleshooting.",
  },
  {
    title: "Battery Technician",
    text: "Work with battery packs, checking, testing and diagnosis.",
  },
  {
    title: "EV Maintenance Professional",
    text: "Handle routine maintenance across electric vehicle systems.",
  },
  {
    title: "EV Technical Support",
    text: "Support customers and teams with technical understanding of EV systems.",
  },
  {
    title: "Charging Infrastructure Roles",
    text: "Roles connected to charging equipment and the charging ecosystem.",
  },
  {
    title: "EV Industry Technical Roles",
    text: "Technical positions across the wider electric mobility ecosystem.",
  },
  {
    title: "Future EV Technology Careers",
    text: "Emerging roles as EV technology and the industry continue to develop.",
  },
];

export const audiences = [
  { title: "+2 Students", text: "Explore a future-focused technical career." },
  { title: "ITI Students", text: "Add EV technology to your existing technical skills." },
  { title: "Diploma Students", text: "Build specialized EV knowledge." },
  { title: "BTech Students", text: "Explore deeper and advanced EV technology." },
  { title: "Freshers", text: "Develop industry-focused technical skills." },
  { title: "Career Switchers", text: "Build a new career direction through EV technology." },
];

export type Course = {
  slug: string;
  stage: "START" | "BUILD" | "ADVANCE" | "FLEXIBLE";
  index: string;
  title: string;
  badge?: string;
  duration: string;
  format: string;
  summary: string;
  description: string;
  audience: string;
  vehicles: string;
  highlights: string[];
  meta: { label: string; value: string }[];
  /** Editable batch info — update without touching layout. */
  batch: { label: string; value: string }[];
};

export const courses: Course[] = [
  {
    slug: "4-week-online-ev-skill-upgrade",
    stage: "START",
    index: "01",
    title: "4 Week Online EV Skill Upgrade Program",
    badge: "Most Popular",
    duration: "4 Weeks",
    format: "Online + 2 Days Offline Practical",
    summary:
      "A focused short-term program for students, freshers and beginners who want to understand EV technology and build practical skills.",
    description:
      "A focused short-term program designed for students, freshers, beginners and career-focused learners who want to understand EV technology and build practical skills for the growing EV industry.",
    audience: "Students, freshers, beginners, career-focused learners",
    vehicles: "Strong focus on EV Two-Wheelers",
    meta: [
      { label: "Duration", value: "4 Weeks" },
      { label: "Mode", value: "Online" },
      { label: "Live Classes", value: "24 Days" },
      { label: "Offline Practical", value: "2 Days" },
      { label: "Class Timing", value: "8:00 PM – 10:00 PM" },
      { label: "Recorded Access", value: "Lifetime" },
    ],
    highlights: [
      "24 days live interactive classes",
      "Industry expert trainers",
      "Beginner-friendly learning",
      "EV technology learning",
      "EV two-wheeler focus",
      "2-day offline practical training",
      "Battery checking and diagnosis",
      "EV troubleshooting",
      "Career guidance",
      "Placement support",
      "Student support",
      "Lifetime recorded class access",
    ],
    batch: [
      { label: "Class timing", value: "8:00 PM – 10:00 PM" },
      { label: "Next batch", value: "Contact admissions for the current batch date" },
    ],
  },
  {
    slug: "3-month-ev-technology-program",
    stage: "BUILD",
    index: "02",
    title: "3 Month EV Technology Program",
    badge: "Deep Practical Learning",
    duration: "3 Months",
    format: "1 Month Live + 2 Months Offline Practical",
    summary:
      "Broader vehicle exposure and extended practical training across two, three and four wheelers.",
    description:
      "A deeper EV technology program for learners who want broader vehicle exposure and extended practical training.",
    audience: "Learners who want extended hands-on exposure",
    vehicles: "2-Wheeler + 3-Wheeler + 4-Wheeler",
    meta: [
      { label: "Duration", value: "3 Months" },
      { label: "Live Learning", value: "1 Month" },
      { label: "Offline Practical", value: "2 Months" },
      { label: "Vehicle Coverage", value: "2W + 3W + 4W" },
    ],
    highlights: [
      "1 month live learning",
      "2 months offline practical training",
      "2W, 3W and 4W exposure",
      "Extended hands-on practice",
      "Industry expert trainers",
      "Career guidance",
      "Placement support",
    ],
    batch: [{ label: "Next batch", value: "Contact admissions for the current batch date" }],
  },
  {
    slug: "6-month-advanced-ev-technology",
    stage: "ADVANCE",
    index: "03",
    title: "6 Month Advanced EV Technology Program",
    badge: "Advanced",
    duration: "6 Months",
    format: "Advanced technical pathway",
    summary:
      "Deeper-level EV technology, advanced battery systems and chip-level concepts for advanced learners.",
    description:
      "An advanced technical learning pathway for learners who want deeper-level knowledge of EV technology, battery systems and chip-level concepts.",
    audience: "BTech Students & Advanced Learners",
    vehicles: "Advanced EV systems",
    meta: [
      { label: "Duration", value: "6 Months" },
      { label: "Primary audience", value: "BTech students & advanced learners" },
      { label: "Depth", value: "Advanced / chip level" },
    ],
    highlights: [
      "Advanced EV technology",
      "Deep-level EV learning",
      "Advanced battery technology",
      "Battery-level learning",
      "Chip-level learning",
    ],
    batch: [{ label: "Next batch", value: "Contact admissions for the current batch date" }],
  },
  {
    slug: "recorded-ev-technology-program",
    stage: "FLEXIBLE",
    index: "04",
    title: "Recorded EV Technology Program",
    duration: "Self-paced",
    format: "Recorded",
    summary:
      "The same syllabus structure as the 4-week program, available for flexible self-paced study.",
    description:
      "A recorded learning program following the same syllabus structure as the 4-week EV Skill Upgrade Program, designed for learners who prefer flexible study.",
    audience:
      "Working professionals, busy learners, self-paced learners, learners who cannot attend live classes, revision-focused learners",
    vehicles: "Follows the 4-week program structure",
    meta: [
      { label: "Format", value: "Recorded" },
      { label: "Pace", value: "Self-paced" },
      { label: "Structure", value: "Same as 4-week program" },
    ],
    highlights: [
      "Working professionals",
      "Busy learners",
      "Self-paced learners",
      "Learners who cannot attend live classes",
      "Revision-focused learners",
    ],
    batch: [{ label: "Access", value: "Contact admissions for enrolment details" }],
  },
];

export const comparisonRows: { label: string; values: string[] }[] = [
  {
    label: "Duration",
    values: ["4 Weeks", "3 Months", "6 Months", "Self-paced"],
  },
  {
    label: "Learning format",
    values: [
      "Online live + offline practical",
      "Live + extended offline practical",
      "Advanced technical pathway",
      "Recorded",
    ],
  },
  {
    label: "Live classes",
    values: ["24 days", "1 month", "Included", "Not included"],
  },
  {
    label: "Practical training",
    values: ["2 days offline", "2 months offline", "Included", "Not included"],
  },
  {
    label: "Vehicle coverage",
    values: ["Strong two-wheeler focus", "2W + 3W + 4W", "Advanced EV systems", "As per 4-week structure"],
  },
  {
    label: "Learning depth",
    values: ["Foundation", "Extended practical", "Advanced / chip level", "Foundation"],
  },
  {
    label: "Recommended audience",
    values: [
      "Students, freshers, beginners",
      "Learners wanting broader exposure",
      "BTech students & advanced learners",
      "Working & self-paced learners",
    ],
  },
  {
    label: "Recorded access",
    values: ["Lifetime", "Contact admissions", "Contact admissions", "Yes"],
  },
  {
    label: "Career support",
    values: ["Career guidance & placement support", "Career guidance & placement support", "Career guidance & placement support", "Contact admissions"],
  },
];

export const learningJourney = [
  { step: "01", title: "Learn", text: "Understand EV technology." },
  { step: "02", title: "Understand", text: "See how systems work together." },
  { step: "03", title: "Practice", text: "Apply concepts through practical learning." },
  { step: "04", title: "Diagnose", text: "Develop troubleshooting awareness." },
  { step: "05", title: "Prepare", text: "Build confidence for future opportunities." },
];

export const whyEvgen = [
  { title: "Industry Expert Trainers", text: "Learn from professionals with relevant industry experience." },
  { title: "Beginner Friendly", text: "Start with the fundamentals." },
  { title: "Live Interactive Classes", text: "Learn directly with trainers." },
  { title: "Practical Training", text: "Apply knowledge to real EV systems." },
  { title: "Lifetime Recorded Access", text: "Revisit lessons after completing live classes." },
  { title: "Career Guidance", text: "Understand possible EV career pathways." },
  { title: "Placement Support", text: "Receive support toward relevant opportunities." },
  { title: "Student Community", text: "Stay connected with other EV learners." },
];

/** Companies whose technologies shape the EV ecosystem. Not partners or recruiters. */
export const ecosystemBrands = [
  "Ather Energy",
  "OLA Electric",
  "Montra Electric",
  "Tata.ev",
  "Go EC",
  "ChargeMOD",
  "Mahindra Electric",
  "Bajaj Auto",
  "TVS Motor Company",
  "SUN Mobility",
  "MG Motor",
  "Zeon Charging",
  "Hero Electric",
  "Ampere Electric",
  "Revolt Motors",
  "Simple Energy",
];

/** Placement posters supplied by EVGEN. Replace `image` with the poster asset. */
export const placementPosters = [
  { id: "p1", title: "Placement Update", caption: "EV service role", image: null },
  { id: "p2", title: "Placement Update", caption: "EV technician role", image: null },
  { id: "p3", title: "Placement Update", caption: "Battery technician role", image: null },
  { id: "p4", title: "Placement Update", caption: "EV diagnostics role", image: null },
  { id: "p5", title: "Placement Update", caption: "EV workshop role", image: null },
  { id: "p6", title: "Placement Update", caption: "EV maintenance role", image: null },
  { id: "p7", title: "Placement Update", caption: "EV technical support role", image: null },
];

export type Story = {
  id: string;
  name: string;
  background: string;
  problem: string;
  decision: string;
  learning: string;
  result: string;
};

/** Only verified learner information should be published here. */
export const studentStories: Story[] = [
  {
    id: "gulf-technician",
    name: "Gulf Lift Technician → EV Entrepreneur",
    background: "Gulf Lift Technician",
    problem: "Wanted a career direction back home with long-term relevance.",
    decision: "Recognized the EV opportunity and joined EVGEN.",
    learning: "Built EV knowledge and practical confidence through the program.",
    result: "Started his own EV service centre.",
  },
  {
    id: "iti-to-ev-service",
    name: "ITI Graduate → EV Service Technician",
    background: "ITI mechanical background",
    problem: "Technical skills were limited to conventional vehicles.",
    decision: "Chose the 4 week EV skill upgrade program.",
    learning: "Learned EV systems, battery checking and troubleshooting.",
    result: "Moved into an EV service technician role.",
  },
  {
    id: "fresher-to-diagnostics",
    name: "Fresher → EV Diagnostics Learner",
    background: "Recent graduate, no EV exposure",
    problem: "Interested in EV but unsure where to begin.",
    decision: "Started with beginner-friendly live classes.",
    learning: "Practised diagnostics during the offline practical days.",
    result: "Progressed with placement support toward EV opportunities.",
  },
];

export type Trainer = {
  name: string;
  designation: string;
  experience: string;
  expertise: string;
};

/** Placeholders until EVGEN supplies verified trainer profiles and photographs. */
export const trainers: Trainer[] = [
  {
    name: "Trainer profile to be updated",
    designation: "EV Technology Trainer",
    experience: "Experience details to be provided by EVGEN",
    expertise: "EV systems & practical training",
  },
  {
    name: "Trainer profile to be updated",
    designation: "Battery & Diagnostics Trainer",
    experience: "Experience details to be provided by EVGEN",
    expertise: "Battery checking, diagnosis & troubleshooting",
  },
  {
    name: "Trainer profile to be updated",
    designation: "Advanced EV Technology Trainer",
    experience: "Experience details to be provided by EVGEN",
    expertise: "Advanced battery and chip-level concepts",
  },
];

export const academyExperiences = [
  { title: "Practical Sessions", text: "Hands-on time with EV two-wheelers and battery systems." },
  { title: "Workshops", text: "Focused sessions on specific EV systems and tools." },
  { title: "Student Interactions", text: "Learn alongside a community of EV learners." },
  { title: "Trainer Interactions", text: "Direct discussion with industry-focused trainers." },
  { title: "Certification Moments", text: "Recognition on successful completion of the program." },
  { title: "Industry Sessions", text: "Conversations about how the EV ecosystem is developing." },
];

export type Insight = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readingTime: string;
};

/** EV Insights entries — CMS-ready list. */
export const insights: Insight[] = [
  {
    slug: "understanding-ev-battery-basics",
    title: "Understanding EV Battery Basics",
    category: "Battery Technology",
    excerpt:
      "How lithium-ion packs are structured, what a BMS actually does, and why battery health matters for service work.",
    date: "2026-07-28",
    readingTime: "5 min read",
  },
  {
    slug: "why-ev-skills-matter-in-kerala",
    title: "Why EV Skills Matter in Kerala Right Now",
    category: "Career Opportunities",
    excerpt:
      "Electric two-wheelers are becoming common on Kerala roads. Here is what that means for technical careers.",
    date: "2026-07-14",
    readingTime: "4 min read",
  },
  {
    slug: "how-ev-diagnostics-differ",
    title: "How EV Diagnostics Differ From Conventional Servicing",
    category: "EV Technology",
    excerpt:
      "Fewer moving parts, more electronics. A practical look at how troubleshooting changes with electric drivetrains.",
    date: "2026-06-30",
    readingTime: "6 min read",
  },
  {
    slug: "charging-ecosystem-explained",
    title: "The Charging Ecosystem, Explained Simply",
    category: "EV Trends",
    excerpt: "Chargers, connectors, networks and the roles emerging around charging infrastructure.",
    date: "2026-06-12",
    readingTime: "5 min read",
  },
  {
    slug: "first-steps-into-ev-without-engineering",
    title: "First Steps Into EV Without an Engineering Degree",
    category: "Career Guidance",
    excerpt: "You do not need to be an engineer to begin. A realistic starting path for beginners.",
    date: "2026-05-29",
    readingTime: "4 min read",
  },
  {
    slug: "ev-industry-news-roundup",
    title: "EV Industry Roundup: What Changed This Quarter",
    category: "EV News",
    excerpt: "A short summary of movements across manufacturing, charging and adoption in India.",
    date: "2026-05-08",
    readingTime: "3 min read",
  },
];

export const insightCategories = [
  "EV News",
  "EV Technology",
  "Battery Technology",
  "EV Trends",
  "Career Opportunities",
  "Career Guidance",
];

export const faqs = [
  {
    q: "Who can join EVGEN?",
    a: "Eligibility depends on the specific program. Beginner programs are designed for learners interested in EV technology.",
  },
  {
    q: "Is the 4-week program suitable for beginners?",
    a: "Yes. It is designed to help beginners build a foundation in EV technology.",
  },
  { q: "How long is the online program?", a: "4 weeks." },
  { q: "How many live classes are included?", a: "24 days of live classes." },
  { q: "What are the class timings?", a: "8:00 PM – 10:00 PM." },
  {
    q: "Is practical training included?",
    a: "Yes. The 4-week online program includes a 2-day offline practical section.",
  },
  {
    q: "Is the practical section focused on two-wheelers?",
    a: "The 4-week program has a strong focus on EV two-wheelers.",
  },
  { q: "Do I get recorded classes?", a: "Yes. Lifetime recorded class access is included." },
  {
    q: "What is the 3-month program?",
    a: "1 month live learning + 2 months offline practical training covering 2W, 3W and 4W.",
  },
  {
    q: "Who is the 6-month advanced program for?",
    a: "Primarily BTech students and advanced learners.",
  },
  {
    q: "What does the advanced program focus on?",
    a: "Deep-level EV technology, advanced battery learning and chip-level concepts.",
  },
  {
    q: "Do you offer a recorded program?",
    a: "Yes. It follows the same syllabus structure as the 4-week program.",
  },
  {
    q: "Does EVGEN provide placement support?",
    a: "Yes. EVGEN provides career guidance and placement support.",
  },
  {
    q: "Can working professionals join?",
    a: "Yes, depending on the specific program and schedule.",
  },
  { q: "Can I attend a demo?", a: "Yes." },
];

export const programOptions = [
  "4 Week Online EV Skill Upgrade",
  "3 Month EV Technology Program",
  "6 Month Advanced EV Technology",
  "Recorded EV Technology Program",
  "Not Sure",
];

export const backgroundOptions = [
  "+2",
  "ITI",
  "Diploma",
  "BTech",
  "Graduate",
  "Working Professional",
  "Fresher",
  "Other",
];
