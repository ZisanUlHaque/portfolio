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
