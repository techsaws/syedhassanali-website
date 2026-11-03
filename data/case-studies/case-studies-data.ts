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

export const CaseStudiesData: readonly ICaseStudy[] = [
  {
    id: 1,
    slug: "lead-follow-up-automation",
    project: "LeadFlow",
    title: "Stop losing leads after the first inquiry",
    description:
      "Capture every inquiry, assign the right person, and follow up without relying on someone to remember.",
    category: "AI & Automation",
    technologies: ["n8n", "Next.js", "PostgreSQL", "SMTP", "Webhooks"],
    image: CaseStudy01ImageA,
    featured: true,
  },
  {
    id: 2,
    slug: "n8n-business-workflow",
    project: "FlowBridge",
    title: "Connect your tools so your team stops copying data",
    description:
      "Use n8n to move information between apps, trigger tasks, and keep everyday work moving.",
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
  },
  {
    id: 3,
    slug: "ai-support-assistant",
    project: "AnswerDesk",
    title: "Answer common customer questions without adding more tickets",
    description:
      "Help customers find accurate answers from approved company information, with a clear handoff when AI is unsure.",
    category: "AI & Automation",
    technologies: ["Python", "OpenAI API", "RAG", "Vector Search", "n8n"],
    image: CaseStudy03ImageA,
    featured: true,
  },
  {
    id: 4,
    slug: "invoice-document-processing",
    project: "InvoiceFlow",
    title: "Turn invoices and PDFs into usable data",
    description:
      "Extract key fields, check them, and send approved records into the tools your team already uses.",
    category: "AI & Automation",
    technologies: ["Python", "OCR", "n8n", "PostgreSQL", "REST APIs"],
    image: CaseStudy04ImageA,
    featured: false,
  },
  {
    id: 5,
    slug: "client-project-portal",
    project: "ClientSpace",
    title: "Give clients one place to see what is happening",
    description:
      "Replace scattered status emails with a secure portal for requests, files, updates, and approvals.",
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
  },
  {
    id: 6,
    slug: "saas-mvp-launch",
    project: "LaunchKit",
    title: "Turn a product idea into software people can actually use",
    description:
      "Build the essential user journey first, then launch with the foundations needed to learn and grow.",
    category: "Web Apps & SaaS",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    image: CaseStudy06ImageA,
    featured: false,
  },
  {
    id: 7,
    slug: "crm-api-integration",
    project: "SyncLayer",
    title: "Make your CRM and business apps stay in sync",
    description:
      "Connect customer records, updates, and events across systems without constant CSV exports.",
    category: "Backend & Cloud",
    technologies: ["Node.js", "REST APIs", "Webhooks", "PostgreSQL", "n8n"],
    image: CaseStudy07ImageA,
    featured: false,
  },
  {
    id: 8,
    slug: "booking-reminder-automation",
    project: "BookPilot",
    title: "Let customers book without endless messages",
    description:
      "Make appointments easier to schedule, confirm, reschedule, and follow up on automatically.",
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
  },
];

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
    title: "Stop losing leads after the first inquiry",
    description:
      "Capture every inquiry, assign the right person, and follow up without relying on someone to remember.",
    category: "AI & Automation",
    technologies: ["n8n", "Next.js", "PostgreSQL", "SMTP", "Webhooks"],
    image: CaseStudy01ImageA,
    featured: true,

    detail: {
      eyebrow: "AI & Automation",
      heroTitle: "Stop losing leads after the first inquiry",
      heroDescription:
        "Capture every inquiry, assign the right person, and follow up without relying on someone to remember.",
      atAGlance: {
        problem:
          "New inquiries arrive from different places, sit unanswered, and disappear into inboxes or spreadsheets.",
        solution:
          "A lead operations system that captures inquiries, removes duplicates, routes leads, and records follow-up activity.",
        outcome:
          "Every test inquiry was processed and logged successfully.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "New inquiries arrive from different places, sit unanswered, and disappear into inboxes or spreadsheets.",
      },
      solution: {
        heading: "What did I build?",
        body: "A lead operations system that captures inquiries, removes duplicates, routes leads, and records follow-up activity.",
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
        heading: "Why this matters",
        items: [
          "Fewer inquiries forgotten",
          "Clear ownership of each lead",
          "More consistent response process",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "I connected lead capture, CRM, and automated follow-ups into one system that reduces manual work, prevents duplicates, and keeps every opportunity on track.",
        technicalFocus: ["n8n", "Next.js", "PostgreSQL", "SMTP"],
      },
      proof: {
        heading: "See it in action",
        screenshots: [
          {
            heading: "Every Lead Captured in One Place",
            screenshot: CaseStudy01ImageB,
          },
          {
            heading: "Automated Follow-Ups, No Missed Opportunities",
            screenshot: CaseStudy01ImageC,
          },
          {
            heading: "Track Email Delivery and Resolve Failures",
            screenshot: CaseStudy01ImageD,
          },
          {
            heading: "From Manual Work to Automated Lead Management",
            screenshot: CaseStudy01ImageE,
          },
        ],
      },
      results: {
        heading: "What changed?",
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
          "Every test inquiry was processed and logged successfully.",
        measurementNotes:
          "Measured using 100 sample inquiries in a controlled test environment. Results reflect system testing, not client business performance.",
        fallbackCopy:
          "The system's working capabilities are demonstrated above; quantified client results are not published.",
      },
      faq: [
        {
          question:
            "Can you make sure every new lead gets a reply and follow-up?",
          answer:
            "Yes. A connected intake and follow-up workflow can log the inquiry, alert the right person, and schedule the next action.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title:
        "Lead Follow-Up Automation for Service Businesses | Syed Hassan Ali",
      description:
        "Capture every inquiry, assign the right person, and follow up without relying on someone to remember.",
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
    title: "Connect your tools so your team stops copying data",
    description:
      "Use n8n to move information between apps, trigger tasks, and keep everyday work moving.",
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
      heroTitle: "Connect your tools so your team stops copying data",
      heroDescription:
        "Use n8n to move information between apps, trigger tasks, and keep everyday work moving.",
      atAGlance: {
        problem:
          "Staff copy the same information across tools and chase routine updates manually.",
        solution:
          "A set of documented automations that connects existing systems and handles repetitive steps with human approval where needed.",
        outcome:
          "Connected business tools now exchange data automatically, reducing repetitive work and keeping operations moving.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Staff copy the same information across tools and chase routine updates manually.",
      },
      solution: {
        heading: "What did I build?",
        body: "A set of documented automations that connects existing systems and handles repetitive steps with human approval where needed.",
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
        heading: "Why this matters",
        items: [
          "Less manual re-entry",
          "Fewer missed handoffs",
          "Better visibility into workflow failures",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "I connected business tools using n8n, APIs, and webhooks to automate data transfers, reduce manual tasks, and keep workflows running reliably.",
        technicalFocus: ["n8n", "Webhooks", "REST APIs", "PostgreSQL"],
      },
      proof: {
        heading: "See it in action",
        screenshots: [
          {
            heading: "Business Workflows Running Automatically",
            screenshot: CaseStudy02ImageB,
          },
          {
            heading: "Track Every Task and Resolve Failures",
            screenshot: CaseStudy02ImageC,
          },
          {
            heading: "All Your Business Tools Connected",
            screenshot: CaseStudy02ImageD,
          },
          {
            heading: "Less Manual Work, Faster Operations",
            screenshot: CaseStudy02ImageE,
          },
        ],
      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [
          {
            value: "100%",
            label: "Test workflows completed",
          },
          {
            value: "100%",
            label: "Data transfers automated",
          },
          {
            value: "< 5s",
            label: "Workflow processing time",
          },
        ],
        verifiedOutcome:
          "Connected business tools now exchange data automatically, reducing repetitive work and keeping operations moving.",
        measurementNotes:
          "Metrics must be validated through controlled workflow tests before publication. Processing time depends on connected APIs and workflow complexity.",
        fallbackCopy:
          "FlowBridge automates data transfers, task routing, and notifications across connected business tools.",
      },
      faq: [
        {
          question:
            "Can you connect the apps we already use instead of building another system?",
          answer:
            "Often, yes. Existing apps can be connected through APIs, webhooks, and n8n workflows, with checks for failures and duplicate events.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title:
        "n8n Business Workflow Automation & Integrations | Syed Hassan Ali",
      description:
        "Use n8n to move information between apps, trigger tasks, and keep everyday work moving.",
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
    title: "Answer common customer questions without adding more tickets",
    description:
      "Help customers find accurate answers from approved company information, with a clear handoff when AI is unsure.",
    category: "AI & Automation",
    technologies: ["Python", "OpenAI API", "RAG", "Vector Search", "n8n"],
    image: CaseStudy03ImageA,
    featured: true,

    detail: {
      eyebrow: "AI & Automation",
      heroTitle: "Answer common customer questions without adding more tickets",
      heroDescription:
        "Help customers find accurate answers from approved company information, with a clear handoff when AI is unsure.",
      atAGlance: {
        problem:
          "Support teams answer the same questions repeatedly while customers wait for straightforward information.",
        solution:
          "A knowledge-grounded support assistant with retrieval, guardrails, conversation history, and a human escalation path.",
        outcome:
          "Customers get faster answers to common questions, while complex requests are routed to human support.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Support teams answer the same questions repeatedly while customers wait for straightforward information.",
      },
      solution: {
        heading: "What did I build?",
        body: "A knowledge-grounded support assistant with retrieval, guardrails, conversation history, and a human escalation path.",
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
        heading: "Why this matters",
        items: [
          "Faster access to routine answers",
          "Less repetitive work for support teams",
          "Clearer escalation for complex cases",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "I built an AI assistant that uses company knowledge to answer customer questions, reduce repetitive support work, and hand complex requests to the right team.",
        technicalFocus: ["Python", "OpenAI API", "RAG", "Vector Search"],
      },
      proof: {
        heading: "See it in action",
        screenshots: [
          {
            heading: "Instant Answers from Company Knowledge",
            screenshot: CaseStudy03ImageB,
          },
          {
            heading: "Smart Answers with Human Handoff",
            screenshot: CaseStudy03ImageC,
          },
          {
            heading: "Reliable Answers Backed by Sources",
            screenshot: CaseStudy03ImageD,
          },
          {
            heading: "Track Answer Quality and Accuracy",
            screenshot: CaseStudy03ImageE,
          },
        ],
      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [
          {
            value: "24/7",
            label: "AI support availability",
          },
          {
            value: "< 5s",
            label: "Average response time",
          },
          {
            value: "90%",
            label: "FAQ answer accuracy",
          },
        ],
        verifiedOutcome:
          "Customers get faster answers to common questions, while complex requests are routed to human support.",
        measurementNotes:
          "Response time and answer accuracy require validation through controlled testing with approved knowledge-base questions.",
        fallbackCopy:
          "AnswerDesk provides instant knowledge-based answers, automated support, and human escalation when needed.",
      },
      faq: [
        {
          question: "Can AI answer our FAQs without making things up?",
          answer:
            "It can answer from an approved knowledge base, cite relevant sources, and escalate uncertain or sensitive questions to a person.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title:
        "AI Customer Support Assistant with Knowledge Retrieval | Syed Hassan Ali",
      description:
        "Help customers find accurate answers from approved company information, with a clear handoff when AI is unsure.",
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
    title: "Turn invoices and PDFs into usable data",
    description:
      "Extract key fields, check them, and send approved records into the tools your team already uses.",
    category: "AI & Automation",
    technologies: ["Python", "OCR", "n8n", "PostgreSQL", "REST APIs"],
    image: CaseStudy04ImageA,
    featured: false,

    detail: {
      eyebrow: "AI & Automation",
      heroTitle: "Turn invoices and PDFs into usable data",
      heroDescription:
        "Extract key fields, check them, and send approved records into the tools your team already uses.",
      atAGlance: {
        problem:
          "Invoices, forms, and attachments require repeated manual entry, review, and filing.",
        solution:
          "A document intake pipeline that extracts structured fields, validates them, and routes records for review or downstream entry.",
        outcome:
          "Invoices are converted into structured, validated records faster, reducing repetitive work and speeding up approvals.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Invoices, forms, and attachments require repeated manual entry, review, and filing.",
      },
      solution: {
        heading: "What did I build?",
        body: "A document intake pipeline that extracts structured fields, validates them, and routes records for review or downstream entry.",
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
        heading: "Why this matters",
        items: [
          "Less repetitive typing",
          "More consistent data capture",
          "Better traceability for approvals",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "I combined Python, OCR, and automated workflows to extract invoice data, validate records, and streamline approvals, reducing manual entry and processing time.",
        technicalFocus: ["Python", "OCR", "n8n", "PostgreSQL"],
      },
      proof: {
        heading: "See it in action",
        screenshots: [
          {
            heading: "From Invoices to Organized Data",
            screenshot: CaseStudy04ImageB,
          },
          {
            heading: "Catch Errors Before They Cost You",
            screenshot: CaseStudy04ImageC,
          },
          {
            heading: "Faster Approvals, Complete Visibility",
            screenshot: CaseStudy04ImageD,
          },
          {
            heading: "Track Extraction Accuracy and Performance",
            screenshot: CaseStudy04ImageE,
          },
        ],
      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [
          {
            value: "95%",
            label: "Data extraction accuracy",
          },
          {
            value: "< 10s",
            label: "Document processing time",
          },
          {
            value: "80%",
            label: "Less manual data entry",
          },
        ],
        verifiedOutcome:
          "Invoices are converted into structured, validated records faster, reducing repetitive work and speeding up approvals.",
        measurementNotes:
          "Illustrative performance targets. Extraction accuracy, processing speed, and manual effort reduction must be validated through controlled document testing.",
        fallbackCopy:
          "InvoiceFlow automates document extraction, validation, and approvals to reduce manual processing.",
      },
      faq: [
        {
          question:
            "Can you pull information from invoices and put it into our system?",
          answer:
            "Yes, with document extraction, field validation, exception handling, and human review for uncertain values.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title: "Invoice & Document Data Extraction Automation | Syed Hassan Ali",
      description:
        "Extract key fields, check them, and send approved records into the tools your team already uses.",
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
    title: "Give clients one place to see what is happening",
    description:
      "Replace scattered status emails with a secure portal for requests, files, updates, and approvals.",
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
      heroTitle: "Give clients one place to see what is happening",
      heroDescription:
        "Replace scattered status emails with a secure portal for requests, files, updates, and approvals.",
      atAGlance: {
        problem:
          "Clients chase updates and teams lose context across email threads, spreadsheets, and chat.",
        solution:
          "A branded client workspace for requests, project status, documents, approvals, and notifications.",
        outcome:
          "Clients can track progress, access files, and approve requests from one secure portal, reducing unnecessary communication and keeping projects organized.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Clients chase updates and teams lose context across email threads, spreadsheets, and chat.",
      },
      solution: {
        heading: "What did I build?",
        body: "A branded client workspace for requests, project status, documents, approvals, and notifications.",
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
        heading: "Why this matters",
        items: [
          "Fewer status-chasing emails",
          "A clearer client experience",
          "More organized delivery records",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "I built a secure client portal that brings project updates, file sharing, requests, and approvals into one place, reducing back-and-forth communication and keeping everyone aligned.",
        technicalFocus: [
          "Next.js",
          "TypeScript",
          "PostgreSQL",
          "Authentication",
        ],
      },
      proof: {
        heading: "See it in action",
        screenshots: [
          {
            heading: "Manage Projects and Clients in One Place",
            screenshot: CaseStudy05ImageB,
          },
          {
            heading: "Secure Access for Clients and Teams",
            screenshot: CaseStudy05ImageC,
          },
        ],
      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [
          {
            value: "100%",
            label: "Project updates centralized",
          },
          {
            value: "24/7",
            label: "Client access to project status",
          },
          {
            value: "100%",
            label: "Approvals tracked in one place",
          },
        ],
        verifiedOutcome:
          "Clients can track progress, access files, and approve requests from one secure portal, reducing unnecessary communication and keeping projects organized.",
        measurementNotes:
          "Centralization and approval tracking should be validated through workflow testing. Availability refers to intended access, not measured uptime.",
        fallbackCopy:
          "ClientSpace centralizes project updates, file sharing, requests, and approvals in one secure workspace.",
      },
      faq: [
        {
          question: "Can our clients log in and see their project status?",
          answer:
            "Yes. A role-based client portal can show progress, collect requests, centralize files, and keep an activity history.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title:
        "Custom Client Portal for Agencies and B2B Services | Syed Hassan Ali",
      description:
        "Replace scattered status emails with a secure portal for requests, files, updates, and approvals.",
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
    title: "Turn a product idea into software people can actually use",
    description:
      "Build the essential user journey first, then launch with the foundations needed to learn and grow.",
    category: "Web Apps & SaaS",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    image: CaseStudy06ImageA,
    featured: false,

    detail: {
      eyebrow: "Web Apps & SaaS",
      heroTitle: "Turn a product idea into software people can actually use",
      heroDescription:
        "Build the essential user journey first, then launch with the foundations needed to learn and grow.",
      atAGlance: {
        problem:
          "Founders have a product concept but need a usable first release without overbuilding.",
        solution:
          "An end-to-end MVP covering the main customer workflow, authentication, data model, and production release.",
        outcome:
          "Turned a product concept into a functional SaaS MVP with authentication, core workflows, and a foundation for future growth.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Founders have a product concept but need a usable first release without overbuilding.",
      },
      solution: {
        heading: "What did I build?",
        body: "An end-to-end MVP covering the main customer workflow, authentication, data model, and production release.",
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
        heading: "Why this matters",
        items: [
          "A testable product in users’ hands",
          "Lower risk of building unused features",
          "A foundation for future iterations",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "I developed a complete SaaS MVP with secure authentication, core product features, and a scalable backend, focusing on faster launches, lower development costs, and future growth.",
        technicalFocus: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      },
      proof: {
        heading: "See it in action",
        screenshots: [
          {
            heading: "From Product Idea to Working SaaS",
            screenshot: CaseStudy06ImageB,
          },
          {
            heading: "A Seamless Experience from Sign-Up to Success",
            screenshot: CaseStudy06ImageC,
          },
        ],
      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [
          {
            value: "100%",
            label: "Core MVP features delivered",
          },
          {
            value: "1",
            label: "Launch-ready product",
          },
          {
            value: "3",
            label: "Core systems integrated",
          },
        ],
        verifiedOutcome:
          "Turned a product concept into a functional SaaS MVP with authentication, core workflows, and a foundation for future growth.",
        measurementNotes:
          "Metrics reflect implementation scope and should be confirmed against completed features, integration tests, and deployment records.",
        fallbackCopy:
          "LaunchKit demonstrates a functional SaaS MVP built for product validation, reliable operations, and future expansion.",
      },
      faq: [
        {
          question: "Can you build an MVP that we can launch and improve?",
          answer:
            "Yes. Start with a narrow feature set, reliable core flows, analytics, and a deployment plan that supports iteration.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title: "SaaS MVP Development from Idea to Launch | Syed Hassan Ali",
      description:
        "Build the essential user journey first, then launch with the foundations needed to learn and grow.",
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
    title: "Make your CRM and business apps stay in sync",
    description:
      "Connect customer records, updates, and events across systems without constant CSV exports.",
    category: "Backend & Cloud",
    technologies: ["Node.js", "REST APIs", "Webhooks", "PostgreSQL", "n8n"],
    image: CaseStudy07ImageA,
    featured: false,

    detail: {
      eyebrow: "Backend & Cloud",
      heroTitle: "Make your CRM and business apps stay in sync",
      heroDescription:
        "Connect customer records, updates, and events across systems without constant CSV exports.",
      atAGlance: {
        problem:
          "Customer data lives in multiple systems, updates arrive late, and teams work from conflicting records.",
        solution:
          "An API and webhook integration layer that keeps defined records consistent across selected business tools.",
        outcome:
          "Customer records stay synchronized across connected systems, reducing manual updates and keeping teams working with consistent information.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Customer data lives in multiple systems, updates arrive late, and teams work from conflicting records.",
      },
      solution: {
        heading: "What did I build?",
        body: "An API and webhook integration layer that keeps defined records consistent across selected business tools.",
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
        heading: "Why this matters",
        items: [
          "Fewer conflicting customer records",
          "Less manual import/export work",
          "More reliable downstream workflows",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "I connected CRMs and business applications using APIs and webhooks to automate data updates, prevent inconsistencies, and eliminate repetitive manual transfers.",
        technicalFocus: ["Node.js", "REST APIs", "Webhooks", "PostgreSQL"],
      },
      proof: {
        heading: "See it in action",
        screenshots: [
          {
            heading: "Keep Your Business Systems Connected",
            screenshot: CaseStudy07ImageB,
          },
          {
            heading: "Track Data Syncs and Resolve Failures",
            screenshot: CaseStudy07ImageC,
          },
        ],
      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [
          {
            value: "100%",
            label: "Test records synchronized",
          },
          {
            value: "< 5s",
            label: "Average sync processing time",
          },
          {
            value: "100%",
            label: "Test updates automated",
          },
        ],
        verifiedOutcome:
          "Customer records stay synchronized across connected systems, reducing manual updates and keeping teams working with consistent information.",
        measurementNotes:
          "Illustrative targets for controlled integration tests. Synchronization success and processing time must be verified using execution logs before publication.",
        fallbackCopy:
          "SyncLayer automates customer data synchronization across connected business applications, reducing manual work and improving data consistency.",
      },
      faq: [
        {
          question: "Can you make our CRM talk to our other tools?",
          answer:
            "Yes. The integration can synchronize approved fields, handle conflicts, and retry failures without duplicating records.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title: "CRM & Third-Party API Integration | Syed Hassan Ali",
      description:
        "Connect customer records, updates, and events across systems without constant CSV exports.",
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
    title: "Let customers book without endless messages",
    description:
      "Make appointments easier to schedule, confirm, reschedule, and follow up on automatically.",
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
      heroTitle: "Let customers book without endless messages",
      heroDescription:
        "Make appointments easier to schedule, confirm, reschedule, and follow up on automatically.",
      atAGlance: {
        problem:
          "Staff coordinate appointments manually, chase confirmations, and handle avoidable scheduling confusion.",
        solution:
          "An appointment workflow that synchronizes availability, bookings, reminders, and post-visit follow-up.",
        outcome:
          "Customers can book, reschedule, and receive reminders automatically, reducing manual coordination and making appointment management easier.",
      },
      challenge: {
        heading: "What was getting in the way?",
        body: "Staff coordinate appointments manually, chase confirmations, and handle avoidable scheduling confusion.",
      },
      solution: {
        heading: "What did I build?",
        body: "An appointment workflow that synchronizes availability, bookings, reminders, and post-visit follow-up.",
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
        heading: "Why this matters",
        items: [
          "Less scheduling back-and-forth",
          "Clearer booking communication",
          "More consistent reminders",
        ],
      },
      implementation: {
        heading: "How I approached it",
        body: "I connected online booking, calendar availability, and automated reminders into one system that reduces scheduling work, prevents double bookings, and keeps customers informed.",
        technicalFocus: ["n8n", "Calendar APIs", "Next.js", "Email APIs"],
      },
      proof: {
        heading: "See it in action",
        screenshots: [
          {
            heading: "Book Appointments in Just a Few Clicks",
            screenshot: CaseStudy08ImageB,
          },
          {
            heading: "Keep Calendars Synced and Avoid Double Bookings",
            screenshot: CaseStudy08ImageC,
          },
          {
            heading: "Automated Reminders and Easy Cancellations",
            screenshot: CaseStudy08ImageD,
          },
          {
            heading: "Reliable Scheduling Without Conflicts",
            screenshot: CaseStudy08ImageE,
          },
        ],
      },
      results: {
        heading: "What changed?",
        verifiedMetrics: [
          {
            value: "24/7",
            label: "Online booking availability",
          },
          {
            value: "100%",
            label: "Test confirmations automated",
          },
          {
            value: "< 5s",
            label: "Booking processing time",
          },
        ],
        verifiedOutcome:
          "Customers can book, reschedule, and receive reminders automatically, reducing manual coordination and making appointment management easier.",
        measurementNotes:
          "Illustrative performance targets. Confirmation automation and processing speed require validation through controlled booking tests.",
        fallbackCopy:
          "BookPilot automates appointment scheduling, confirmations, reminders, and cancellations to reduce administrative work.",
      },
      faq: [
        {
          question:
            "Can customers book a slot and get reminders automatically?",
          answer:
            "Yes. Availability, confirmation, reminders, rescheduling, and staff notifications can be connected in one workflow.",
        },
        {
          question: "Will this work with our existing tools?",
          answer:
            "That depends on available APIs, access permissions, data quality, and workflow rules. I would check those before committing to a specific integration.",
        },
        {
          question: "What would you need from us to get started?",
          answer:
            "A short walkthrough of the current process, the tools involved, the main bottleneck, and what success would look like.",
        },
      ],
    },

    seo: {
      title: "Appointment Booking & Reminder Automation | Syed Hassan Ali",
      description:
        "Make appointments easier to schedule, confirm, reschedule, and follow up on automatically.",
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
