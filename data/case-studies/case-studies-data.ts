import { StaticImageData } from "next/image";

import CaseStudy01ImageA from "../../public/images/case-studies/case-study-01/case-study-01-a.png";
import CaseStudy01ImageB from "../../public/images/case-studies/case-study-01/case-study-01-b.png";
import CaseStudy01ImageC from "../../public/images/case-studies/case-study-01/case-study-01-c.png";
import CaseStudy01ImageD from "../../public/images/case-studies/case-study-01/case-study-01-d.png";
import CaseStudy01ImageE from "../../public/images/case-studies/case-study-01/case-study-01-e.png";

import CaseStudy02ImageA from "../../public/images/case-studies/case-study-02/case-study-02-a.png";
import CaseStudy02ImageB from "../../public/images/case-studies/case-study-02/case-study-02-b.png";
import CaseStudy02ImageC from "../../public/images/case-studies/case-study-02/case-study-02-c.png";
import CaseStudy02ImageD from "../../public/images/case-studies/case-study-02/case-study-02-d.png";
import CaseStudy02ImageE from "../../public/images/case-studies/case-study-02/case-study-02-e.png";

import CaseStudy03ImageA from "../../public/images/case-studies/case-study-03/case-study-03-a.png";
import CaseStudy03ImageB from "../../public/images/case-studies/case-study-03/case-study-03-b.png";
import CaseStudy03ImageC from "../../public/images/case-studies/case-study-03/case-study-03-c.png";
import CaseStudy03ImageD from "../../public/images/case-studies/case-study-03/case-study-03-d.png";
import CaseStudy03ImageE from "../../public/images/case-studies/case-study-03/case-study-03-e.png";

import CaseStudy04ImageA from "../../public/images/case-studies/case-study-04/case-study-04-a.png";
import CaseStudy04ImageB from "../../public/images/case-studies/case-study-04/case-study-04-b.png";
import CaseStudy04ImageC from "../../public/images/case-studies/case-study-04/case-study-04-c.png";
import CaseStudy04ImageD from "../../public/images/case-studies/case-study-04/case-study-04-d.png";
import CaseStudy04ImageE from "../../public/images/case-studies/case-study-04/case-study-04-e.png";

import CaseStudy05ImageA from "../../public/images/case-studies/case-study-05/case-study-05-a.png";
import CaseStudy05ImageB from "../../public/images/case-studies/case-study-05/case-study-05-b.png";
import CaseStudy05ImageC from "../../public/images/case-studies/case-study-05/case-study-05-c.png";

import CaseStudy06ImageA from "../../public/images/case-studies/case-study-06/case-study-06-a.png";
import CaseStudy06ImageB from "../../public/images/case-studies/case-study-06/case-study-06-b.png";
import CaseStudy06ImageC from "../../public/images/case-studies/case-study-06/case-study-06-c.png";

import CaseStudy07ImageA from "../../public/images/case-studies/case-study-07/case-study-07-a.png";
import CaseStudy07ImageB from "../../public/images/case-studies/case-study-07/case-study-07-b.png";
import CaseStudy07ImageC from "../../public/images/case-studies/case-study-07/case-study-07-c.png";

import CaseStudy08ImageA from "../../public/images/case-studies/case-study-08/case-study-08-a.png";
import CaseStudy08ImageB from "../../public/images/case-studies/case-study-08/case-study-08-b.png";
import CaseStudy08ImageC from "../../public/images/case-studies/case-study-08/case-study-08-c.png";
import CaseStudy08ImageD from "../../public/images/case-studies/case-study-08/case-study-08-d.png";
import CaseStudy08ImageE from "../../public/images/case-studies/case-study-08/case-study-08-e.png";

export type ICaseStudy = {
  id: number;
  slug: string;
  project: string;
  title: string;
  description: string;
  category: string;
  technologies: readonly string[];
  image: string | null | StaticImageData;
  featured: boolean;
};

export type CaseStudyScreenshot = {
  heading: string;
  screenshot: string | StaticImageData | null;
};

export type CaseStudyDetail = {
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  atAGlance: { problem: string; solution: string; outcome: string };
  challenge: { heading: string; body: string };
  solution: { heading: string; body: string };
  capabilities: { heading: string; items: string[] };
  workflow: { heading: string; steps: { step: number; label: string }[] };
  businessValue: { heading: string; items: string[] };
  implementation: { heading: string; body: string; technicalFocus: string[] };
  proof: {
    heading: string;
    screenshots: CaseStudyScreenshot[];
  };
  results: {
    heading: string;
    verifiedMetrics: {
      label: string;
      value: string;
      context?: string | null;
    }[];
    verifiedOutcome: string | null;
    measurementNotes: string | null;
    fallbackCopy: string;
  };
  faq: { question: string; answer: string }[];
};

export type ICaseStudyDetail = ICaseStudy & {
  detail: CaseStudyDetail;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonicalPath: string;
  };
  relatedSlugs: string[];
};

export const CaseStudyData: readonly ICaseStudyDetail[] = [
  {
    id: 1,
    slug: "lead-follow-up-automation",
    project: "LeadFlow",
    title: "Keeping new leads from getting lost",
    description:
      "I built a system that collects inquiries, assigns them to the right person, and tracks follow-ups.",
    category: "AI & Automation",
    technologies: ["n8n", "Next.js", "PostgreSQL", "SMTP", "Webhooks"],
    image: CaseStudy01ImageA,
    featured: true,

    detail: {
      eyebrow: "AI & Automation",
      heroTitle: "Keeping new leads from getting lost",
      heroDescription:
        "I built a system that collects inquiries, assigns them to the right person, and tracks follow-ups.",
      atAGlance: {
        problem:
          "New inquiries were spread across forms, emails, and spreadsheets, making it hard to know who needed a reply.",
        solution:
          "I brought lead capture, assignment, and follow-up tracking into one workflow.",
        outcome:
          "In a controlled test with 100 sample inquiries, every inquiry was captured and assigned.",
      },
      challenge: {
        heading: "The problem",
        body: "When inquiries arrive in different places, a team can lose track of who has replied and who needs to follow up.",
      },
      solution: {
        heading: "What I built",
        body: "I brought lead capture, assignment, and follow-up tracking into one workflow.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Capture forms, email inquiries, and webhook events",
          "Deduplicate contacts and create CRM records",
          "Assign leads by source, service, or territory",
          "Trigger acknowledgments and internal alerts",
          "Schedule follow-up tasks with stop conditions",
          "Track ownership, replies, and failed sends",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Inquiry arrives",
          },
          {
            step: 2,
            label: "Validate and deduplicate",
          },
          {
            step: 3,
            label: "Create or update CRM record",
          },
          {
            step: 4,
            label: "Assign owner and send acknowledgment",
          },
          {
            step: 5,
            label: "Schedule follow-up and stop on reply",
          },
          {
            step: 6,
            label: "Log activity for reporting",
          },
        ],
      },
      businessValue: {
        heading: "Why it matters",
        items: [
          "A clear owner for each inquiry",
          "Follow-ups visible in one place",
          "Fewer manual checks across inboxes",
        ],
      },
      implementation: {
        heading: "How I built it",
        body: "I connected incoming forms and email events to a shared lead record. Duplicate checks, ownership rules, and reply-aware follow-ups help the team keep track of each inquiry.",
        technicalFocus: ["n8n", "Next.js", "PostgreSQL", "SMTP"],
      },
      proof: {
        heading: "Inside the project",
        screenshots: [
          {
            heading: "Incoming inquiries in one view",
            screenshot: CaseStudy01ImageB,
          },
          {
            heading: "Follow-up schedule and reply status",
            screenshot: CaseStudy01ImageC,
          },
          {
            heading: "Email delivery and failed sends",
            screenshot: CaseStudy01ImageD,
          },
          {
            heading: "Lead assignment workflow",
            screenshot: CaseStudy01ImageE,
          },
        ],
      },
      results: {
        heading: "What works now",
        verifiedMetrics: [
          {
            value: "100%",
            label: "Test leads captured",
          },
          {
            value: "100%",
            label: "Test leads assigned",
          },
          {
            value: "< 5s",
            label: "Intake processing time",
          },
        ],
        verifiedOutcome:
          "In a controlled test with 100 sample inquiries, every inquiry was captured and assigned.",
        measurementNotes:
          "Measured using 100 sample inquiries in a controlled test environment. Results reflect system testing, not client business performance.",
        fallbackCopy:
          "In a controlled test with 100 sample inquiries, every inquiry was captured and assigned.",
      },
      faq: [
        {
          question: "How does the system avoid duplicate leads?",
          answer:
            "It checks incoming contact details against existing records before creating or updating a lead.",
        },
        {
          question: "What happens when someone replies?",
          answer:
            "Follow-up rules can stop the scheduled sequence when a reply is detected.",
        },
        {
          question: "Can it work with our current CRM?",
          answer:
            "Possibly. I would check the CRM API, data fields, and access permissions first.",
        },
      ],
    },

    seo: {
      title:
        "Lead Follow-Up Automation for Service Businesses | Syed Hassan Ali",
      description:
        "I built a system that collects inquiries, assigns them to the right person, and tracks follow-ups.",
      keywords: [
        "lead follow up automation",
        "automated lead management",
        "CRM email follow ups",
      ],
      canonicalPath: "/case-studies/lead-follow-up-automation",
    },

    relatedSlugs: [
      "crm-api-integration",
      "n8n-business-workflow",
      "booking-reminder-automation",
    ],
  },

  {
    id: 2,
    slug: "n8n-business-workflow",
    project: "FlowBridge",
    title: "Making business tools work together",
    description:
      "I connected everyday apps so information moves between them without repeated copying and pasting.",
    category: "AI & Automation",
    technologies: [
      "n8n",
      "Webhooks",
      "REST APIs",
      "PostgreSQL",
      "Google Sheets",
    ],
    image: CaseStudy02ImageA,
    featured: true,

    detail: {
      eyebrow: "AI & Automation",
      heroTitle: "Making business tools work together",
      heroDescription:
        "I connected everyday apps so information moves between them without repeated copying and pasting.",
      atAGlance: {
        problem:
          "Teams were entering the same information into multiple apps and checking updates by hand.",
        solution:
          "I built n8n workflows that move data between apps, apply rules, and flag exceptions for review.",
        outcome:
          "The workflows demonstrate automated transfers, task routing, and approval steps between connected tools.",
      },
      challenge: {
        heading: "The problem",
        body: "Copying records between apps takes time and makes it easy to miss an update or enter the wrong value.",
      },
      solution: {
        heading: "What I built",
        body: "I built n8n workflows that move data between apps, apply rules, and flag exceptions for review.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Connect forms, spreadsheets, CRMs, and messaging tools",
          "Map and validate data between apps",
          "Route work based on conditions",
          "Handle retries, duplicates, and exceptions",
          "Send approval requests for sensitive actions",
          "Maintain execution logs and alerts",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "A trigger fires in an existing app",
          },
          {
            step: 2,
            label: "Validate and transform data",
          },
          {
            step: 3,
            label: "Apply business rules",
          },
          {
            step: 4,
            label: "Update destination systems",
          },
          {
            step: 5,
            label: "Notify or request approval",
          },
          {
            step: 6,
            label: "Log outcome and retry safely",
          },
        ],
      },
      businessValue: {
        heading: "Why it matters",
        items: [
          "Less repeated data entry",
          "Fewer missed handoffs",
          "Failed runs easier to investigate",
        ],
      },
      implementation: {
        heading: "How I built it",
        body: "I used n8n, webhooks, and APIs to connect existing tools. Each workflow checks incoming data, handles repeat events, and records failures so they can be reviewed.",
        technicalFocus: ["n8n", "Webhooks", "REST APIs", "PostgreSQL"],
      },
      proof: {
        heading: "Inside the project",
        screenshots: [
          {
            heading: "Workflow runs and connected steps",
            screenshot: CaseStudy02ImageB,
          },
          {
            heading: "Execution history and failures",
            screenshot: CaseStudy02ImageC,
          },
          {
            heading: "Connected apps and data mapping",
            screenshot: CaseStudy02ImageD,
          },
          {
            heading: "Automated handoff between tools",
            screenshot: CaseStudy02ImageE,
          },
        ],
      },
      results: {
        heading: "What works now",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes:
          "No verified performance or client-impact metrics are available for publication. The screenshots show implemented workflows, not measured business results.",
        fallbackCopy:
          "The workflows demonstrate automated transfers, task routing, and approval steps between connected tools.",
      },
      faq: [
        {
          question: "Do we need to replace our existing apps?",
          answer:
            "Not necessarily. If the apps expose suitable APIs or webhooks, I can connect them without replacing them.",
        },
        {
          question: "What happens when a workflow fails?",
          answer:
            "Failures are logged, and eligible steps can retry or be sent for review.",
        },
        {
          question: "Can a person approve sensitive changes?",
          answer:
            "Yes. An approval step can pause the workflow before an action is completed.",
        },
      ],
    },

    seo: {
      title:
        "n8n Business Workflow Automation & Integrations | Syed Hassan Ali",
      description:
        "I connected everyday apps so information moves between them without repeated copying and pasting.",
      keywords: [
        "n8n automation expert",
        "connect business apps",
        "automate manual workflows",
      ],
      canonicalPath: "/case-studies/n8n-business-workflow",
    },

    relatedSlugs: [
      "invoice-document-processing",
      "crm-api-integration",
      "booking-reminder-automation",
    ],
  },

  {
    id: 3,
    slug: "ai-support-assistant",
    project: "AnswerDesk",
    title: "Helping customers find answers without waiting",
    description:
      "I built an AI support assistant that uses company information and hands uncertain questions to a person.",
    category: "AI & Automation",
    technologies: ["Python", "OpenAI API", "RAG", "Vector Search", "n8n"],
    image: CaseStudy03ImageA,
    featured: true,

    detail: {
      eyebrow: "AI & Automation",
      heroTitle: "Helping customers find answers without waiting",
      heroDescription:
        "I built an AI support assistant that uses company information and hands uncertain questions to a person.",
      atAGlance: {
        problem:
          "Support staff were answering the same questions repeatedly while customers waited for basic information.",
        solution:
          "I built an assistant that searches approved documents, answers with sources, and routes uncertain requests to support.",
        outcome:
          "The assistant demonstrates document-based answers, source references, and a human handoff path.",
      },
      challenge: {
        heading: "The problem",
        body: "Common questions take up support time, but an AI assistant also needs to know when not to guess.",
      },
      solution: {
        heading: "What I built",
        body: "I built an assistant that searches approved documents, answers with sources, and routes uncertain requests to support.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Search approved help articles and documents",
          "Respond with grounded answers and source links",
          "Escalate uncertain or account-specific requests",
          "Capture unanswered questions for knowledge updates",
          "Connect with support inbox or ticketing tools",
          "Log feedback and quality checks",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Customer asks a question",
          },
          {
            step: 2,
            label: "Retrieve relevant approved content",
          },
          {
            step: 3,
            label: "Generate a grounded response",
          },
          {
            step: 4,
            label: "Check confidence and policy rules",
          },
          {
            step: 5,
            label: "Answer or create a support handoff",
          },
          {
            step: 6,
            label: "Capture feedback for improvement",
          },
        ],
      },
      businessValue: {
        heading: "Why it matters",
        items: [
          "Routine questions handled from approved content",
          "Human support for uncertain requests",
          "Unanswered questions visible for review",
        ],
      },
      implementation: {
        heading: "How I built it",
        body: "I connected a searchable knowledge base to the assistant and added source references, conversation history, and escalation rules. Uncertain answers can be reviewed by a person.",
        technicalFocus: ["Python", "OpenAI API", "RAG", "Vector Search"],
      },
      proof: {
        heading: "Inside the project",
        screenshots: [
          {
            heading: "Answering a question from the knowledge base",
            screenshot: CaseStudy03ImageB,
          },
          {
            heading: "Escalating a conversation to support",
            screenshot: CaseStudy03ImageC,
          },
          {
            heading: "Source references beside answers",
            screenshot: CaseStudy03ImageD,
          },
          {
            heading: "Reviewing feedback and unanswered questions",
            screenshot: CaseStudy03ImageE,
          },
        ],
      },
      results: {
        heading: "What works now",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes:
          "No verified performance or client-impact metrics are available for publication. The screenshots show implemented workflows, not measured business results.",
        fallbackCopy:
          "The assistant demonstrates document-based answers, source references, and a human handoff path.",
      },
      faq: [
        {
          question: "Can the assistant make up an answer?",
          answer:
            "AI can still make mistakes. The system uses approved sources and escalation rules to reduce unsupported answers, not guarantee perfect accuracy.",
        },
        {
          question: "What happens when it cannot answer?",
          answer:
            "It can create a handoff for a support agent with the conversation context.",
        },
        {
          question: "Can we update its information?",
          answer:
            "Yes. Approved documents can be updated and reindexed so the assistant uses the latest available content.",
        },
      ],
    },

    seo: {
      title:
        "AI Customer Support Assistant with Knowledge Retrieval | Syed Hassan Ali",
      description:
        "I built an AI support assistant that uses company information and hands uncertain questions to a person.",
      keywords: [
        "AI customer support chatbot",
        "RAG support assistant",
        "AI FAQ assistant",
      ],
      canonicalPath: "/case-studies/ai-support-assistant",
    },

    relatedSlugs: [
      "client-project-portal",
      "n8n-business-workflow",
      "saas-mvp-launch",
    ],
  },

  {
    id: 4,
    slug: "invoice-document-processing",
    project: "InvoiceFlow",
    title: "Taking the manual work out of invoices",
    description:
      "I built a workflow that reads invoice details, checks the data, and sends uncertain records for review.",
    category: "AI & Automation",
    technologies: ["Python", "OCR", "n8n", "PostgreSQL", "REST APIs"],
    image: CaseStudy04ImageA,
    featured: false,

    detail: {
      eyebrow: "AI & Automation",
      heroTitle: "Taking the manual work out of invoices",
      heroDescription:
        "I built a workflow that reads invoice details, checks the data, and sends uncertain records for review.",
      atAGlance: {
        problem:
          "Invoice details had to be copied from PDFs into other systems and checked manually.",
        solution:
          "I built a document-processing workflow that extracts fields, checks them, and prepares records for approval.",
        outcome:
          "The workflow demonstrates invoice extraction, validation, and review before records are exported.",
      },
      challenge: {
        heading: "The problem",
        body: "Reading every invoice by hand is repetitive, especially when layouts differ or important fields are missing.",
      },
      solution: {
        heading: "What I built",
        body: "I built a document-processing workflow that extracts fields, checks them, and prepares records for approval.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Collect files from inboxes, uploads, or shared folders",
          "Extract vendor, dates, amounts, and line items",
          "Check required fields and detect duplicates",
          "Flag low-confidence or inconsistent records",
          "Route exceptions for human approval",
          "Export structured data to ERP, CRM, or spreadsheets",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Receive document",
          },
          {
            step: 2,
            label: "Extract structured fields",
          },
          {
            step: 3,
            label: "Validate totals and required values",
          },
          {
            step: 4,
            label: "Flag exceptions for review",
          },
          {
            step: 5,
            label: "Approve and sync destination record",
          },
          {
            step: 6,
            label: "Archive source and audit trail",
          },
        ],
      },
      businessValue: {
        heading: "Why it matters",
        items: [
          "Less retyping of invoice details",
          "Exceptions visible before export",
          "A record of review decisions",
        ],
      },
      implementation: {
        heading: "How I built it",
        body: "I used Python and OCR to extract invoice fields, then added checks for missing values, duplicates, and inconsistent totals. Records that need attention go to a review step.",
        technicalFocus: ["Python", "OCR", "n8n", "PostgreSQL"],
      },
      proof: {
        heading: "Inside the project",
        screenshots: [
          {
            heading: "Invoice fields extracted into records",
            screenshot: CaseStudy04ImageB,
          },
          {
            heading: "Missing or inconsistent values flagged",
            screenshot: CaseStudy04ImageC,
          },
          {
            heading: "Review and approval queue",
            screenshot: CaseStudy04ImageD,
          },
          {
            heading: "Extraction results and processing history",
            screenshot: CaseStudy04ImageE,
          },
        ],
      },
      results: {
        heading: "What works now",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes:
          "No verified performance or client-impact metrics are available for publication. The screenshots show implemented workflows, not measured business results.",
        fallbackCopy:
          "The workflow demonstrates invoice extraction, validation, and review before records are exported.",
      },
      faq: [
        {
          question: "Will it read every invoice correctly?",
          answer:
            "No extraction system is perfect. Low-confidence fields and inconsistent totals should be reviewed before export.",
        },
        {
          question: "Can it handle different invoice layouts?",
          answer:
            "It can be configured for multiple layouts, but representative samples are needed to test accuracy.",
        },
        {
          question: "Where does approved data go?",
          answer:
            "Approved records can be exported to a spreadsheet or integrated with an ERP or other system.",
        },
      ],
    },

    seo: {
      title: "Invoice & Document Data Extraction Automation | Syed Hassan Ali",
      description:
        "I built a workflow that reads invoice details, checks the data, and sends uncertain records for review.",
      keywords: [
        "invoice data extraction automation",
        "AI PDF processing",
        "automated document entry",
      ],
      canonicalPath: "/case-studies/invoice-document-processing",
    },

    relatedSlugs: [
      "n8n-business-workflow",
      "crm-api-integration",
      "client-project-portal",
    ],
  },

  {
    id: 5,
    slug: "client-project-portal",
    project: "ClientSpace",
    title: "Keeping clients and projects on the same page",
    description:
      "I built a client portal for project updates, shared files, requests, and approvals.",
    category: "Web Apps & SaaS",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Authentication",
      "Object Storage",
    ],
    image: CaseStudy05ImageA,
    featured: false,

    detail: {
      eyebrow: "Web Apps & SaaS",
      heroTitle: "Keeping clients and projects on the same page",
      heroDescription:
        "I built a client portal for project updates, shared files, requests, and approvals.",
      atAGlance: {
        problem:
          "Project details were scattered across emails and messages, making updates and approvals difficult to follow.",
        solution:
          "I built a shared workspace with separate client and team access to project information.",
        outcome:
          "The portal brings project status, files, requests, and approval history into one interface.",
      },
      challenge: {
        heading: "The problem",
        body: "Clients need to know what is happening without asking for another status update, while teams need a reliable record of decisions.",
      },
      solution: {
        heading: "What I built",
        body: "I built a shared workspace with separate client and team access to project information.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Secure client and staff logins",
          "Project timelines and status updates",
          "Request intake and threaded discussions",
          "File sharing with access controls",
          "Approval and feedback workflows",
          "Email notifications and activity history",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Client submits a request",
          },
          {
            step: 2,
            label: "Team triages and assigns it",
          },
          {
            step: 3,
            label: "Status and files update in portal",
          },
          {
            step: 4,
            label: "Client reviews or approves",
          },
          {
            step: 5,
            label: "Notifications and history stay in sync",
          },
        ],
      },
      businessValue: {
        heading: "Why it matters",
        items: [
          "Project updates in one place",
          "Fewer scattered file requests",
          "Approvals easier to trace",
        ],
      },
      implementation: {
        heading: "How I built it",
        body: "I built role-based access, project views, file sharing, and approval flows. Activity history keeps requests and decisions attached to the right project.",
        technicalFocus: [
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Authentication",
        ],
      },
      proof: {
        heading: "Inside the project",
        screenshots: [
          {
            heading: "Project overview and client workspace",
            screenshot: CaseStudy05ImageB,
          },
          {
            heading: "Client and staff access permissions",
            screenshot: CaseStudy05ImageC,
          },
        ],
      },
      results: {
        heading: "What works now",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes:
          "No verified performance or client-impact metrics are available for publication. The screenshots show implemented workflows, not measured business results.",
        fallbackCopy:
          "The portal brings project status, files, requests, and approval history into one interface.",
      },
      faq: [
        {
          question: "Can clients see only their own projects?",
          answer:
            "The portal uses role-based access rules to restrict project and file visibility.",
        },
        {
          question: "Can clients approve work in the portal?",
          answer:
            "Yes. Approval actions can be recorded with the relevant project and activity history.",
        },
        {
          question: "Can it match our existing process?",
          answer:
            "The project stages, roles, and approval steps can be adapted after reviewing your workflow.",
        },
      ],
    },

    seo: {
      title:
        "Custom Client Portal for Agencies and B2B Services | Syed Hassan Ali",
      description:
        "I built a client portal for project updates, shared files, requests, and approvals.",
      keywords: [
        "client portal development",
        "customer project tracking portal",
        "agency client dashboard",
      ],
      canonicalPath: "/case-studies/client-project-portal",
    },

    relatedSlugs: [
      "saas-mvp-launch",
      "ai-support-assistant",
      "crm-api-integration",
    ],
  },

  {
    id: 6,
    slug: "saas-mvp-launch",
    project: "LaunchKit",
    title: "Taking a SaaS idea to a working first release",
    description:
      "I built an MVP with the main user journey, accounts, and backend needed to test a product idea.",
    category: "Web Apps & SaaS",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    image: CaseStudy06ImageA,
    featured: false,

    detail: {
      eyebrow: "Web Apps & SaaS",
      heroTitle: "Taking a SaaS idea to a working first release",
      heroDescription:
        "I built an MVP with the main user journey, accounts, and backend needed to test a product idea.",
      atAGlance: {
        problem:
          "A product idea needed a usable first version without spending time on every possible feature.",
        solution:
          "I built a focused SaaS MVP covering accounts, core screens, APIs, and the data model.",
        outcome:
          "The project demonstrates a working first-version product with its core user flows connected.",
      },
      challenge: {
        heading: "The problem",
        body: "The first release needed to do the essential job well without becoming a long list of untested features.",
      },
      solution: {
        heading: "What I built",
        body: "I built a focused SaaS MVP covering accounts, core screens, APIs, and the data model.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Define a focused v1 scope and user journey",
          "Implement authentication and account management",
          "Build core product screens and APIs",
          "Add payments or subscriptions if required",
          "Set up analytics, error tracking, and deployment",
          "Prepare a prioritized post-launch backlog",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Agree on the core user journey",
          },
          {
            step: 2,
            label: "Prototype and validate scope",
          },
          {
            step: 3,
            label: "Build frontend, backend, and database",
          },
          {
            step: 4,
            label: "Test key flows and access rules",
          },
          {
            step: 5,
            label: "Deploy and monitor",
          },
          {
            step: 6,
            label: "Use feedback to prioritize next release",
          },
        ],
      },
      businessValue: {
        heading: "Why it matters",
        items: [
          "A usable first version to evaluate",
          "Core workflows built before extras",
          "A foundation for future releases",
        ],
      },
      implementation: {
        heading: "How I built it",
        body: "I focused the scope on the main user journey, then built the frontend, backend, database, and account flows. I included deployment and monitoring foundations for later iterations.",
        technicalFocus: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      },
      proof: {
        heading: "Inside the project",
        screenshots: [
          {
            heading: "Core product screens and main workflow",
            screenshot: CaseStudy06ImageB,
          },
          {
            heading: "Account creation and onboarding flow",
            screenshot: CaseStudy06ImageC,
          },
        ],
      },
      results: {
        heading: "What works now",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes:
          "No verified performance or client-impact metrics are available for publication. The screenshots show implemented workflows, not measured business results.",
        fallbackCopy:
          "The project demonstrates a working first-version product with its core user flows connected.",
      },
      faq: [
        {
          question: "Does an MVP need every planned feature?",
          answer:
            "No. I would prioritize the smallest set of features needed to test the main user journey.",
        },
        {
          question: "Can payments be included?",
          answer:
            "Yes, when payments are part of the initial scope and the provider supports the business requirements.",
        },
        {
          question: "What happens after the first release?",
          answer:
            "Usage, feedback, and errors should guide the next set of changes.",
        },
      ],
    },

    seo: {
      title: "SaaS MVP Development from Idea to Launch | Syed Hassan Ali",
      description:
        "I built an MVP with the main user journey, accounts, and backend needed to test a product idea.",
      keywords: [
        "build SaaS MVP",
        "startup MVP developer",
        "full stack SaaS development",
      ],
      canonicalPath: "/case-studies/saas-mvp-launch",
    },

    relatedSlugs: [
      "client-project-portal",
      "crm-api-integration",
      "ai-support-assistant",
    ],
  },

  {
    id: 7,
    slug: "crm-api-integration",
    project: "SyncLayer",
    title: "Keeping customer data consistent across apps",
    description:
      "I built an integration that syncs selected customer records and makes failed updates easier to investigate.",
    category: "Backend & Cloud",
    technologies: ["Node.js", "REST APIs", "Webhooks", "PostgreSQL", "n8n"],
    image: CaseStudy07ImageA,
    featured: false,

    detail: {
      eyebrow: "Backend & Cloud",
      heroTitle: "Keeping customer data consistent across apps",
      heroDescription:
        "I built an integration that syncs selected customer records and makes failed updates easier to investigate.",
      atAGlance: {
        problem:
          "Customer details were stored in different systems, and manual updates left records out of sync.",
        solution:
          "I built an API integration layer with field mapping, sync rules, and failure handling.",
        outcome:
          "The integration demonstrates record updates across connected systems, with logs and retry handling.",
      },
      challenge: {
        heading: "The problem",
        body: "When different apps hold different versions of a customer record, teams cannot always tell which one is current.",
      },
      solution: {
        heading: "What I built",
        body: "I built an API integration layer with field mapping, sync rules, and failure handling.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Connect CRM and third-party APIs",
          "Map fields and define source-of-truth rules",
          "Process webhooks and scheduled syncs",
          "Prevent duplicate records and loops",
          "Retry failed jobs and alert on exceptions",
          "Log changes for troubleshooting",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Identify systems and data owners",
          },
          {
            step: 2,
            label: "Define mapping and sync direction",
          },
          {
            step: 3,
            label: "Receive webhook or scheduled update",
          },
          {
            step: 4,
            label: "Validate and reconcile record",
          },
          {
            step: 5,
            label: "Apply idempotent update",
          },
          {
            step: 6,
            label: "Log, retry, or escalate exceptions",
          },
        ],
      },
      businessValue: {
        heading: "Why it matters",
        items: [
          "Less manual importing and exporting",
          "Clearer rules for record ownership",
          "Sync failures visible for investigation",
        ],
      },
      implementation: {
        heading: "How I built it",
        body: "I defined which system owns each field, mapped the records, and handled webhook and scheduled updates. Duplicate prevention and retry logs make synchronization easier to maintain.",
        technicalFocus: ["Node.js", "REST APIs", "Webhooks", "PostgreSQL"],
      },
      proof: {
        heading: "Inside the project",
        screenshots: [
          {
            heading: "Connected systems and sync activity",
            screenshot: CaseStudy07ImageB,
          },
          {
            heading: "Sync history, retries, and errors",
            screenshot: CaseStudy07ImageC,
          },
        ],
      },
      results: {
        heading: "What works now",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes:
          "No verified performance or client-impact metrics are available for publication. The screenshots show implemented workflows, not measured business results.",
        fallbackCopy:
          "The integration demonstrates record updates across connected systems, with logs and retry handling.",
      },
      faq: [
        {
          question: "Which system becomes the source of truth?",
          answer:
            "That depends on the data. I define ownership rules for each record or field before building the sync.",
        },
        {
          question: "What happens if both apps change a record?",
          answer:
            "The integration needs explicit conflict rules rather than silently overwriting data.",
        },
        {
          question: "Can it sync with our CRM?",
          answer:
            "I would first check the CRM API, permissions, rate limits, and fields that need to stay aligned.",
        },
      ],
    },

    seo: {
      title: "CRM & Third-Party API Integration | Syed Hassan Ali",
      description:
        "I built an integration that syncs selected customer records and makes failed updates easier to investigate.",
      keywords: [
        "CRM API integration",
        "HubSpot integration developer",
        "sync CRM with other apps",
      ],
      canonicalPath: "/case-studies/crm-api-integration",
    },

    relatedSlugs: [
      "lead-follow-up-automation",
      "n8n-business-workflow",
      "invoice-document-processing",
    ],
  },

  {
    id: 8,
    slug: "booking-reminder-automation",
    project: "BookPilot",
    title: "Making appointments easier to manage",
    description:
      "I connected booking, calendars, confirmations, and reminders to reduce scheduling back-and-forth.",
    category: "AI & Automation",
    technologies: [
      "n8n",
      "Calendar APIs",
      "Next.js",
      "Email APIs",
      "PostgreSQL",
    ],
    image: CaseStudy08ImageA,
    featured: false,

    detail: {
      eyebrow: "AI & Automation",
      heroTitle: "Making appointments easier to manage",
      heroDescription:
        "I connected booking, calendars, confirmations, and reminders to reduce scheduling back-and-forth.",
      atAGlance: {
        problem:
          "Staff were coordinating appointments through messages and manually sending confirmations and reminders.",
        solution:
          "I built a booking workflow that checks availability, records appointments, and handles changes and reminders.",
        outcome:
          "The workflow demonstrates booking, rescheduling, cancellation, and reminder handling in one process.",
      },
      challenge: {
        heading: "The problem",
        body: "Scheduling becomes harder when availability changes, customers reschedule, and reminders depend on someone remembering to send them.",
      },
      solution: {
        heading: "What I built",
        body: "I built a booking workflow that checks availability, records appointments, and handles changes and reminders.",
      },
      capabilities: {
        heading: "What the system handles",
        items: [
          "Display valid availability and prevent double booking",
          "Collect booking details and send confirmations",
          "Send reminders through permitted channels",
          "Provide reschedule and cancellation links",
          "Notify staff of changes",
          "Log outcomes and follow-up tasks",
        ],
      },
      workflow: {
        heading: "How it works",
        steps: [
          {
            step: 1,
            label: "Customer selects available slot",
          },
          {
            step: 2,
            label: "Validate and reserve booking",
          },
          {
            step: 3,
            label: "Send confirmation",
          },
          {
            step: 4,
            label: "Trigger timed reminders",
          },
          {
            step: 5,
            label: "Handle reschedule or cancellation",
          },
          {
            step: 6,
            label: "Send appropriate follow-up",
          },
        ],
      },
      businessValue: {
        heading: "Why it matters",
        items: [
          "Fewer manual confirmation messages",
          "Booking changes tracked centrally",
          "Reminders handled by the workflow",
        ],
      },
      implementation: {
        heading: "How I built it",
        body: "I connected the booking form to calendar availability and notification workflows. Validation checks help avoid conflicting reservations, while change events update the booking record.",
        technicalFocus: ["n8n", "Calendar APIs", "Next.js", "Email APIs"],
      },
      proof: {
        heading: "Inside the project",
        screenshots: [
          {
            heading: "Customer booking journey",
            screenshot: CaseStudy08ImageB,
          },
          {
            heading: "Calendar availability and synchronization",
            screenshot: CaseStudy08ImageC,
          },
          {
            heading: "Reminder and cancellation messages",
            screenshot: CaseStudy08ImageD,
          },
          {
            heading: "Time-zone and duplicate-booking checks",
            screenshot: CaseStudy08ImageE,
          },
        ],
      },
      results: {
        heading: "What works now",
        verifiedMetrics: [],
        verifiedOutcome: null,
        measurementNotes:
          "No verified performance or client-impact metrics are available for publication. The screenshots show implemented workflows, not measured business results.",
        fallbackCopy:
          "The workflow demonstrates booking, rescheduling, cancellation, and reminder handling in one process.",
      },
      faq: [
        {
          question: "Can customers change their booking?",
          answer:
            "Yes. The workflow supports rescheduling and cancellation links with updated availability checks.",
        },
        {
          question: "How are double bookings avoided?",
          answer:
            "Availability is checked during reservation, with conflict handling needed for simultaneous requests.",
        },
        {
          question: "Will reminders use our existing calendar?",
          answer:
            "That depends on the calendar provider and its available integration permissions.",
        },
      ],
    },

    seo: {
      title: "Appointment Booking & Reminder Automation | Syed Hassan Ali",
      description:
        "I connected booking, calendars, confirmations, and reminders to reduce scheduling back-and-forth.",
      keywords: [
        "appointment booking automation",
        "n8n appointment reminders",
        "automated scheduling system",
      ],
      canonicalPath: "/case-studies/booking-reminder-automation",
    },

    relatedSlugs: [
      "lead-follow-up-automation",
      "n8n-business-workflow",
      "client-project-portal",
    ],
  },
];

export const CaseStudiesData: readonly ICaseStudy[] = CaseStudyData.map(
  ({
    id,
    slug,
    project,
    title,
    description,
    category,
    technologies,
    image,
    featured,
  }) => ({
    id,
    slug,
    project,
    title,
    description,
    category,
    technologies,
    image,
    featured,
  }),
);
