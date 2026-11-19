export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  clientRepoUrl: string;
  features: string[];
  challenges: string[];
  improvements: string[];
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    slug: "freshstock-ai",
    name: "FreshStock AI — Enterprise Inventory & Supply Chain",
    shortDescription:
      "A production client AI-powered inventory, stock management, and automated supply chain intelligence platform.",
    description:
      "FreshStock AI is an enterprise-grade stock and inventory management platform developed for a client (360DMMC). It provides real-time multi-warehouse inventory tracking, AI-driven demand forecasting, automated reorder triggers, and comprehensive executive analytics dashboards.",
    image:
      "https://i.ibb.co.com/N2R179DF/Screenshot-784.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Firebase",
      "REST APIs",
    ],
    liveUrl: "https://freshstockai.com/",
    clientRepoUrl: "https://freshstockai.com/",
    features: [
      "Real-time multi-warehouse inventory tracking and stock level auditing",
      "AI-driven predictive demand forecasting and depletion alerts",
      "Automated procurement and supplier purchase order generation",
      "Executive analytics dashboard tracking turnover rates and supply efficiency",
      "Role-based authorization for managers, auditors, and warehouse staff",
    ],
    challenges: [
      "Handling atomic stock state mutations across high-frequency concurrent orders without race conditions.",
      "Optimizing complex analytical aggregations for enterprise dashboards with sub-second response times.",
    ],
    improvements: [
      "Mobile scanner support with instant QR and barcode inventory auditing.",
      "Direct integration with third-party courier APIs for automated shipment dispatch.",
      "Predictive supplier delivery lead-time analysis.",
    ],
    highlight: true,
  },
  {
    slug: "pub-gradpath",
    name: "PUB GradPath — Higher-Study Workspace",
    shortDescription:
      "An end-to-end higher-study discovery & application workspace featuring automated profile-to-opportunity fit matching, document vault (SOP/CV), and 1-on-1 mentorship consultation booking.",
    description:
      "PUB GradPath is a comprehensive higher-study discovery and application workspace (awarded Hackathon 🥈 Runner-Up). It empowers prospective graduate students to discover tailored international programs, evaluate eligibility with transparent gap analysis, manage application tasks, collaborate on SOP/CV documents with mentor feedback, and book 1-on-1 mentorship sessions with Google Meet.",
    image: "https://i.ibb.co.com/jkKkmhfZ/Screenshot-780.png",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "PostgreSQL",
      "TanStack Query",
      "Zod",
    ],
    liveUrl: "https://shimanaperiye-frontend.vercel.app/",
    clientRepoUrl: "https://github.com/ZisanUlHaque/shimana-periye-frontend",
    features: [
      "Deterministic profile-to-opportunity fit matching with transparent gap breakdown",
      "Side-by-side program comparison matrix covering tuition, living costs, and deadlines",
      "Collaborative document studio with version-controlled SOP/CV vault and mentor review annotations",
      "1-on-1 mentor consultation booking system with calendar scheduling and Google Meet integration",
      "Interactive application checklist, milestone tracker, and RFC 5545 iCal calendar export",
    ],
    challenges: [
      "Architecting deterministic multi-criteria scoring algorithms that provide transparent, explainable fit percentages without black-box logic.",
      "Designing a dual-role workspace supporting seamless, authenticated collaboration and review loops between applicants and mentors.",
    ],
    improvements: [
      "AI-powered personalized SOP and essay review suggestions.",
      "Automated university admissions deadline tracking via official academic APIs.",
      "In-app peer applicant networking and real-time discussion channels.",
    ],
    highlight: true,
  },
  {
    slug: "haqex",
    name: "HAQEX — Courier & Logistics Platform Frontend",
    shortDescription:
      "A modern courier and logistics management platform with customer shipping workflows, courier operations, and role-based admin analytics.",
    description:
      "HAQEX is a modern courier and logistics management platform built with Next.js 16 and React 19. It provides a customer-facing shipping experience, courier operations workflows, and comprehensive admin dashboards for monitoring logistics activity, payments, analytics, hubs, and user operations.",
    image:
      "https://i.ibb.co.com/S7vppfHG/Screenshot-782.png",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Recharts",
      "Google OAuth",
      "Zod",
    ],
    liveUrl:
      "https://haqex-three.vercel.app/",
    clientRepoUrl: "https://github.com/ZisanUlHaque/HAQEX",
    features: [
      "Public marketing pages with real-time shipment tracking and live status management",
      "Customer shipment creation, address validation, and payment processing flow",
      "Courier operational dashboard with shipment history and delivery status updates",
      "Admin analytics dashboard for monitoring logistics volume, revenue, hubs, and users",
      "Authentication with Google OAuth integration and role-based access control",
    ],
    challenges: [
      "Designing clean route groups and role-based layout architectures in Next.js App Router for customers, couriers, and administrators.",
      "Managing reactive shipment lifecycle updates and synchronizing analytics visualizations using Recharts and TanStack Query.",
    ],
    improvements: [
      "Real-time courier GPS location tracking with interactive map routes.",
      "Automated SMS and push notifications for delivery milestones.",
      "Barcode and QR code scanning for warehouse hub intake.",
    ],
    highlight: true,
  },
  {
    slug: "rentnest",
    name: "RentNest — Rental Property Marketplace",
    shortDescription:
      "A modern rental property marketplace connecting tenants and landlords with advanced search, Stripe payments, role-based dashboards, and analytics.",
    description:
      "RentNest is a full-stack rental property marketplace built with Next.js 16, Express, TypeScript, Prisma, and PostgreSQL. It streamlines property renting with advanced multi-parameter search, instant cost calculation, secure Stripe Checkout payments, and dedicated dashboards for Tenants, Landlords (with revenue charts), and Admins.",
    image:
      "https://i.ibb.co.com/tT8XvKBh/Screenshot-783.png",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Recharts",
    ],
    liveUrl: "https://rent-nest-frontend-psi.vercel.app",
    clientRepoUrl: "https://github.com/ZisanUlHaque/RentNest",
    features: [
      "Dynamic property search and multi-filtering by location, price, type, and amenities",
      "Interactive rental request modal with instant cost calculation and Stripe Checkout",
      "Role-based dashboards for Tenants, Landlords, and Platform Administrators",
      "Landlord analytics with revenue charts, occupancy rate gauges, and earnings tracking",
      "Property listing CRUD, real-time availability toggle, and verified tenant review system",
    ],
    challenges: [
      "Designing complex relational database schemas in Prisma with cascading constraints across properties, rentals, and payments.",
      "Integrating Stripe webhooks and managing state synchronization across tenant booking and landlord approval lifecycles.",
    ],
    improvements: [
      "Interactive map view with geolocation search for nearby rental listings.",
      "In-app direct messaging and real-time chat between tenants and landlords.",
      "Automated monthly rent invoicing and automated receipt generation.",
    ],
    highlight: true,
  },
  {
    slug: "zap-shift",
    name: "ZapShift — Logistics & Parcel Delivery Platform",
    shortDescription:
      "A full-stack parcel delivery platform with shipment tracking, role-based dashboards, maps, and Stripe-powered payments.",
    description:
      "ZapShift is a modern logistics and parcel delivery management platform that enables users to send, track, and manage deliveries seamlessly. It features secure authentication, interactive maps, payment integration with Stripe, and role-based dashboards for customers and administrators, delivering a smooth and responsive experience.",
    image: "https://i.ibb.co.com/7JJPHQCd/Screenshot-659.png",
    tech: [
      "React",
      "React Router",
      "React Query",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase Auth",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Leaflet",
    ],
    liveUrl: "https://zap-shift-3c4fc.web.app/",
    clientRepoUrl: "https://github.com/ZisanUlHaque/Zap-zoo-client",
    features: [
      "Parcel booking and shipment tracking with interactive maps",
      "Role-based dashboards for users and administrators",
      "Secure online payments with Stripe integration",
      "Analytics dashboard with real-time delivery insights and reports",
    ],
    challenges: [
      "Implementing real-time parcel status management while maintaining data consistency.",
      "Integrating maps, authentication, and payment workflows into a seamless user experience.",
    ],
    improvements: [
      "Live courier location tracking.",
      "Email and SMS delivery notifications.",
      "Route optimization and delivery performance analytics.",
    ],
    highlight: true,
  },
  {
    slug: "beebite",
    name: "BeeBite — Real-Time Food Ordering & Tracking",
    shortDescription:
      "A real-time restaurant ordering platform with live order tracking, admin dashboard, and Socket.IO-powered updates.",
    description:
      "BeeBite is a full-stack restaurant ordering platform that enables customers to place food orders, track them in real time, and view order history. It includes a powerful admin dashboard for managing the complete order lifecycle with live updates using Socket.IO, alongside a modern React and Tailwind CSS interface.",
    image: "https://i.ibb.co.com/FbtNp1hS/Screenshot-661.png",
    tech: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Socket.IO",
      "MongoDB",
    ],
    liveUrl: "https://beebite.vercel.app/",
    clientRepoUrl: "https://github.com/ZisanUlHaque/Socket.io",
    features: [
      "Real-time order tracking with Socket.IO",
      "Interactive admin dashboard with live order management",
      "Shopping cart with localStorage persistence",
      "Order history with phone number lookup and status filtering",
    ],
    challenges: [
      "Synchronizing real-time order status updates across customers and admins.",
      "Managing Socket.IO rooms efficiently while maintaining a responsive user experience.",
    ],
    improvements: [
      "Online payment gateway integration.",
      "Push notifications for order updates.",
      "Restaurant analytics dashboard with sales reports.",
    ],
  },
  {
    slug: "travelio",
    name: "Travelio — Tour Booking Platform",
    shortDescription:
      "A full-stack travel booking platform with Stripe payments, admin management, and real-time booking analytics.",
    description:
      "Travelio is a modern tour booking platform that allows users to discover destinations, book trips, complete secure payments with Stripe, and manage their travel history. It features role-based dashboards, booking management, analytics, Firebase authentication, and an intuitive user experience built with React and Tailwind CSS.",
    image: "https://i.ibb.co.com/gZG1bj8W/Screenshot-660.png",
    tech: [
      "React",
      "React Router",
      "React Query",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase Auth",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    liveUrl: "https://travelio-03.web.app/",
    clientRepoUrl:
      "https://github.com/ZisanUlHaque/Hotel-Booking-Management-System-Client",
    features: [
      "Destination exploration with advanced filtering and sorting",
      "Secure booking workflow with Stripe Checkout integration",
      "Role-based dashboards for users and administrators",
      "Interactive destination pages with itinerary, map, guest selector, and live pricing",
    ],
    challenges: [
      "Building a multi-step booking workflow with secure payment and booking status synchronization.",
      "Managing role-based authorization while keeping dashboard data fast and consistent using React Query.",
    ],
    improvements: [
      "Wishlist and favorite destinations.",
      "Email notifications and booking reminders.",
      "Reviews, ratings, and personalized travel recommendations.",
    ],
  },
{
  slug: "bloodhope",
  name: "BloodHope — Blood Donation Platform",
  shortDescription:
    "A full-stack blood donation platform that connects donors with recipients through location-based search and request management.",

  description:
    "BloodHope is a modern blood donation platform designed to make finding blood donors fast and reliable. Users can register as donors, search for nearby donors by blood group and location, send blood requests, and manage their profiles. The platform also includes an admin dashboard for managing users, donors, and blood requests, ensuring an efficient and life-saving donation process.",

  image: "https://i.ibb.co.com/zVX3T8PP/Screenshot-672.png", 

  tech: [
    "React",
    "React Router",
    "Tailwind CSS",
    "Firebase Auth",
    "Firebase Firestore",
    "Node.js",
    "Express.js",
    "Vercel",
  ],

  liveUrl: "https://redhope-2c7c0.web.app/",
  clientRepoUrl: "https://github.com/ZisanUlHaque/RedHope-Client",

  features: [
    "User registration as donor or recipient with Firebase Authentication",
    "Search blood donors by blood group and location",
    "Send and manage blood donation requests",
    "Role-based admin dashboard for managing users, donors, and requests",
  ],

  challenges: [
    "Implementing efficient donor filtering based on blood group and location while maintaining a smooth user experience.",
    "Managing authentication, authorization, and real-time Firestore data synchronization across the application.",
  ],

  improvements: [
    "Real-time donor availability status.",
    "Email and SMS notifications for blood requests.",
    "Google Maps integration for locating nearby donors.",
    "Blood request history and donor achievement badges.",
  ],
}
];
