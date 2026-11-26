export const personalInfo = {
  name: "Luckiraj Sisodiya",
  brand: "LUCKIRAJ",
  shortIntro: "Backend Java Developer | Java 17 | Spring Boot | Microservices",
  phone: "+91 93402 60293",
  email: "luckiraj.sisodiya@gmail.com",
  location: "Indore, Madhya Pradesh, India",
  github: "https://github.com/Lrssrrb",
  linkedin: "https://www.linkedin.com/in/luckiraj-sisodiya-4783a520b/",
  portfolio: "https://lrssrrb.github.io/",
  resumePath: "/assets/download/Luckiraj_Sisodiya_Java_Backend_Resume.pdf",
  profileImage: "/assets/images/about/profile_image.jpg",
  aboutHeadline:
    "Backend Java Developer with 3+ years of experience architecting scalable microservices, middleware platforms, and high-throughput event-driven systems.",
  aboutDescription:
    "Progressed from QA & unit testing at IndusNet Technologies to owning core backend middleware services at Hyperface Technologies—integrating 9+ third-party APIs via Apache Kafka, async batching, and idempotent webhooks serving 300K+ (3L+) users per API call. Experienced in Redis caching, scheduler locking, correlation-ID tracing, and solo-building internal React 19 UIs for end-to-end team verification.",
};

export const skillCategories = [
  {
    title: "Languages",
    type: "technical",
    colClass: "col-md-4",
    skills: ["Java 17", "Groovy (4-5)", "React 19", "SQL", "HTML5 / CSS3", "Python 3"],
  },
  {
    title: "Frameworks & Testing",
    type: "technical",
    colClass: "col-md-4",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "JUnit & Mockito",
      "Django",
    ],
  },
  {
    title: "Messaging & Databases",
    type: "technical",
    colClass: "col-md-4",
    skills: ["Apache Kafka", "Redis", "MySQL", "Indexed Lookups"],
  },
  {
    title: "System Design & APIs",
    type: "technical",
    colClass: "col-md-6",
    skills: [
      "Microservices Architecture",
      "Middleware Architecture",
      "Event-Driven Systems",
      "Idempotent Webhooks",
      "REST / OpenAPI / Swagger",
      "Distributed Tracing (X-Correlation-Id)",
      "Scheduler Locking",
    ],
  },
  {
    title: "Soft Skills & Collaboration",
    type: "soft",
    colClass: "col-md-6",
    skills: [
      "Cross-Functional Team Collaboration",
      "Technical Documentation & Runbooks",
      "End-to-End Module Ownership",
      "Peer Code Review & Defect Triage",
      "QA & DevOps Release Coordination",
      "Problem Solving & Adaptability",
    ],
  },
];

export const experiences = [
  {
    period: "Oct 2024 - Nov 2026",
    role: "Software Developer (SDE-1)",
    company: "Hyperface Technologies Private Limited",
    location: "Indore, Madhya Pradesh, India",
    image: "/assets/images/project/hyperface.jpg",
    bullets: [
      "Architected a communication middleware platform integrating 9+ third-party APIs (payment, credit, notifications) via Apache Kafka, async batching, and idempotent webhooks serving 300K+ users per API call.",
      "Cut redundant API calls by 40% via caching and retry/fallback mechanisms, and reduced external API call volume by 90% using MySQL sync, indexed lookups, and scheduler locking.",
      "Owned core backend modules in a 3-person backend team and solo-built an internal React 19 UI integrated with Java 17 / Spring Boot APIs to accelerate end-to-end team testing.",
      "Authored OpenAPI/Swagger specs, implemented distributed tracing (X-Correlation-Id) and audit logging, and coordinated releases across QA and DevOps teams.",
    ],
  },
  {
    period: "Sep 2022 - Oct 2023",
    role: "Associate Software Developer",
    company: "IndusNet Technologies (INT.)",
    location: "Kolkata, West Bengal, India",
    image: "/assets/images/project/download.jpg",
    bullets: [
      "Built and maintained Spring Boot microservices and REST APIs following clean layered and SOLID architecture across enterprise modules.",
      "Started with 2 months in QA and unit testing before collaborating with backend and frontend developers on API contracts and JUnit/Mockito suites that raised module test coverage to 90%+.",
      "Reduced production incidents by refactoring legacy Java codebases, optimizing slow SQL queries, and resolving critical production defects.",
    ],
  },
  {
    period: "Feb 2019 - Feb 2020",
    role: "Backend Development Intern",
    company: "Avalanche Infotech Pvt. Ltd.",
    location: "Indore, Madhya Pradesh, India",
    image: "/assets/images/project/avalanche.jpg",
    bullets: [
      "Developed live web application APIs using Python and the Django framework with relational database integration.",
      "Collaborated with engineering teams to connect backend endpoints with frontend interfaces.",
    ],
  },
];

export const projects = [
  {
    title: "Blog Microservices Architecture (blog-micro)",
    subtitle: "Distributed 6-Service Spring Cloud Platform",
    description:
      "Decoupled microservices blogging system using service discovery, centralized API routing, and independent domain services communicating over REST.",
    highlights: [
      "Eureka Discovery Server (blog-app-server) for dynamic service registration",
      "Spring Cloud API Gateway (blog-app-api-gateway) for unified routing",
      "4 Domain Microservices: User, Post, Category & Comment services",
      "Isolated relational persistence & inter-service REST communication",
    ],
    techStack: ["Java 17", "Spring Boot", "Spring Cloud", "API Gateway", "Eureka", "MySQL"],
    githubUrl: "https://github.com/Lrssrrb/blog-micro",
  },
  {
    title: "Secure Blogging Platform REST API (blogApp)",
    subtitle: "Spring Boot + JWT & Role-Based Security API",
    description:
      "Full-featured RESTful blogging backend secured with Spring Security and JWT token authentication, role-based admin controls, DTO validation, and file handling.",
    highlights: [
      "Stateless JWT authentication filter, token helper & custom UserDetailsService",
      "6 REST Controllers: Auth, Admin, User, Post, Category & Comment",
      "DTO payload separation, pagination responses & FileService image handling",
      "Centralized GlobalExceptionHandler for validation & resource errors",
    ],
    techStack: ["Java 17", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "MySQL"],
    githubUrl: "https://github.com/Lrssrrb/blogApp",
  },
  {
    title: "Banking & Account Microservices System",
    subtitle: "Multi-Module Spring Boot Service Mesh",
    description:
      "Distributed banking backend splitting Account, Bank, and User domains into independent Spring Boot microservices coordinated via Service Registry and Connection modules.",
    highlights: [
      "5 Independent Services: Server, Connection, Account, Bank & User",
      "Dedicated Controller, ServiceImpl, Repository & NotFoundException per domain",
      "Centralized service registration & inter-service connection configuration",
      "Modular Maven builds with isolated application configurations",
    ],
    techStack: ["Java 17", "Spring Boot", "Microservices", "Spring Data JPA", "Maven", "MySQL"],
    githubUrl: "https://github.com/Lrssrrb/BankAccountUserNoSecurity",
  },
  {
    title: "Online Shopping Application (REST API)",
    subtitle: "Layered Spring Boot E-Commerce Backend",
    description:
      "End-to-end e-commerce REST backend built with clean Controller-Service-DAO layering, session-based authentication, and relational persistence in MySQL.",
    highlights: [
      "7 REST Controllers: User, Customer, Product, Cart, Order, Address & Bank",
      "Session-based authentication & role-separated workflows",
      "Centralized GlobalExceptionHandler with standardized MyError payloads",
      "Spring Data JPA & Hibernate entity mapping across 9 domain models",
    ],
    techStack: ["Java 17", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "REST API"],
    githubUrl: "https://github.com/Lrssrrb/Online-shopping-application",
  },
];

export const educationList = [
  {
    period: "Dec 2021 - Jul 2022",
    institution: "MASAI SCHOOL, BENGALURU",
    degree: "Back-End Web Development in Java, Spring Boot & Spring Data JPA",
  },
  {
    period: "Jul 2017 - Jul 2021",
    institution: "PATEL COLLEGE OF SCIENCE & TECHNOLOGY, INDORE",
    degree: "Bachelor of Technology - Computer Science",
  },
];
