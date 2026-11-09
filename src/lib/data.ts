export type QuestionStatus = "answered" | "partial" | "unanswered";
export type QuestionSource = "human" | "ai";

export interface DemoQuestion {
  id: string;
  question: string;
  source: QuestionSource;
  sourceLabel: string;
  status: QuestionStatus;
  answer: string;
  sourceContent: string;
  quality: number;
  useful: boolean | null;
}

export const DEMO_QUESTIONS: DemoQuestion[] = [
  {
    id: "1",
    question: "What does your product cost?",
    source: "human",
    sourceLabel: "Human",
    status: "answered",
    answer:
      "We offer Starter at $49/mo, Growth at $149/mo, and custom Enterprise pricing. Annual plans include two months free.",
    sourceContent: "Pricing page · /pricing",
    quality: 92,
    useful: true,
  },
  {
    id: "2",
    question: "Do you integrate with HubSpot?",
    source: "ai",
    sourceLabel: "Claude",
    status: "answered",
    answer:
      "Yes. Native HubSpot CRM sync is available on Growth and Enterprise plans, including contacts, deals, and activity logging.",
    sourceContent: "Integrations · /integrations/hubspot",
    quality: 88,
    useful: true,
  },
  {
    id: "3",
    question: "Do you offer enterprise plans?",
    source: "human",
    sourceLabel: "Human",
    status: "unanswered",
    answer: "No matching content found on the indexed website.",
    sourceContent: "—",
    quality: 12,
    useful: false,
  },
  {
    id: "4",
    question: "Where are your services available?",
    source: "ai",
    sourceLabel: "Perplexity",
    status: "partial",
    answer:
      "We currently serve customers in the US and UK. Expanded regional availability is mentioned but not fully documented.",
    sourceContent: "About · /company",
    quality: 54,
    useful: null,
  },
  {
    id: "5",
    question: "Can we arrange a demonstration?",
    source: "human",
    sourceLabel: "Human",
    status: "answered",
    answer:
      "Yes. Book a live demo from the contact page or email demo@example.com. Sessions typically run 30 minutes.",
    sourceContent: "Contact · /demo",
    quality: 95,
    useful: true,
  },
  {
    id: "6",
    question: "Do you offer an API?",
    source: "ai",
    sourceLabel: "AI agent",
    status: "answered",
    answer:
      "Yes. A REST Ask API and MCP endpoint are available for approved knowledge retrieval.",
    sourceContent: "Developers · /docs/api",
    quality: 90,
    useful: true,
  },
  {
    id: "7",
    question: "What is your cancellation policy?",
    source: "human",
    sourceLabel: "Human",
    status: "unanswered",
    answer: "No matching content found on the indexed website.",
    sourceContent: "—",
    quality: 8,
    useful: false,
  },
  {
    id: "8",
    question: "Do you support international customers?",
    source: "human",
    sourceLabel: "Human",
    status: "unanswered",
    answer: "No matching content found on the indexed website.",
    sourceContent: "—",
    quality: 10,
    useful: false,
  },
  {
    id: "9",
    question: "What security certifications do you hold?",
    source: "ai",
    sourceLabel: "AI agent",
    status: "unanswered",
    answer: "No matching content found on the indexed website.",
    sourceContent: "—",
    quality: 6,
    useful: false,
  },
  {
    id: "10",
    question: "How long does implementation take?",
    source: "human",
    sourceLabel: "Human",
    status: "answered",
    answer:
      "Most teams go live in under a day. Installation is a single script snippet; indexing typically completes within minutes.",
    sourceContent: "Docs · /docs/getting-started",
    quality: 86,
    useful: true,
  },
];

export const MOST_ASKED = [
  { rank: 1, question: "How much does the service cost?", count: 126 },
  { rank: 2, question: "Do you offer free trials?", count: 87 },
  { rank: 3, question: "What integrations are available?", count: 64 },
  { rank: 4, question: "How long does implementation take?", count: 51 },
  { rank: 5, question: "Do you provide support?", count: 38 },
];

export const UNANSWERED_GAPS = [
  "Do you support international customers?",
  "Do you offer charity discounts?",
  "Can we integrate with our existing ERP?",
  "What security certifications do you hold?",
];

export const KNOWLEDGE_OPPORTUNITIES = [
  {
    priority: "HIGH" as const,
    title: "Create an enterprise pricing page.",
  },
  {
    priority: "MEDIUM" as const,
    title: "Add information about international support.",
  },
  {
    priority: "HIGH" as const,
    title: "Publish security and compliance documentation.",
  },
];

export const FAQ_ITEMS = [
  {
    q: "What exactly does Fathom do?",
    a: "Fathom connects to your website, makes your company information searchable through natural-language questions and analyses what people and connected AI agents are asking. It also identifies missing information and recommends improvements.",
  },
  {
    q: "Do I need to replace my existing website or chatbot?",
    a: "No. The platform is designed to work alongside your existing website. You can add its lightweight integration without rebuilding your site. Existing chat tools can remain in place.",
  },
  {
    q: "How long does installation take?",
    a: "The initial connection and installation should take around two minutes for a typical website. Website indexing may take longer depending on the amount of content.",
  },
  {
    q: "Does it work with any website?",
    a: "The platform is designed to work with websites that support adding a script snippet. Native integrations can also be provided for supported platforms.",
  },
  {
    q: "Can AI agents ask questions about my company?",
    a: "Yes. The platform is designed to provide company knowledge through an Ask API and MCP integration. WebMCP tools can also support compatible browser agents. Compatibility depends on the connected agent and browser support.",
  },
  {
    q: "What is MCP?",
    a: "Model Context Protocol is a standard that allows compatible AI applications to connect to external tools and information sources. Fathom can expose approved company knowledge through an MCP interface.",
  },
  {
    q: "What is WebMCP?",
    a: "WebMCP enables compatible browser-based AI agents to discover and interact with structured website tools. It is an additional capability and depends on browser support.",
  },
  {
    q: "Can I see questions that weren't answered?",
    a: "Yes. The dashboard identifies unanswered and potentially incomplete questions, helping you understand where your website needs additional information.",
  },
  {
    q: "Can the platform improve my website automatically?",
    a: "It can identify knowledge gaps, recommend improvements and draft new content. Businesses can review and approve proposed content before it is published.",
  },
  {
    q: "Does it access questions asked privately inside ChatGPT or other AI applications?",
    a: "No. It records interactions made through the website widget and connected APIs or agent interfaces. It cannot see unrelated private conversations inside third-party AI applications.",
  },
  {
    q: "Is my company information secure?",
    a: "Fathom is designed to give businesses control over published information, access permissions and integrations. Review our privacy, security and data-retention documentation before connecting production systems.",
  },
];

export const INSTALL_SNIPPET = `<script
  src="https://cdn.example.com/widget.js"
  data-site-id="YOUR_SITE_ID"
  async
></script>`;

export const INSTALL_PROMPT = `Install the Fathom website integration on this website. Add the installation script to the appropriate global layout so it loads on all public website pages. Preserve the existing design and functionality. Once installed, verify that the script loads correctly.`;

export const PRODUCT_NAME = "Fathom";
