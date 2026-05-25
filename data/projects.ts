export interface Project {
    title: string;
    description: string;
    longDescription: string;
    features: string[];
    tags: string[];
    image: string;
    gallery?: string[];
    links: {
        demo: string;
        repo: string;
    };
    caseStudy?: {
        problem: string;
        solution: string;
        process: string;
        challenges: string;
        learnings: string;
        role: string;
        timeline: string;
    }
}

/*
 * IMAGE PLACEHOLDER GUIDE
 * ──────────────────────
 * To add real images for the projects below:
 * 1. Save your image to public/projects/<project-name>/cover.png
 * 2. Update the `image` field below to point to that path
 * 3. For gallery images, save them to public/projects/<project-name>/ and add to `gallery` array
 *
 * Projects marked with IMAGE_PLACEHOLDER use existing images as temporary stand-ins.
 * Replace them whenever you have the real screenshots ready.
 * Supported formats: PNG, JPG, WebP
 * Recommended size: 1200x800 for cover images
 */

export const projects: Project[] = [
    // ── Featured Projects ──────────────────────────────────────────

    {
        title: "ArchMind",
        description: "AI-powered MCP server that generates cloud architecture diagrams from text prompts or GitHub repo URLs using Gemini and Mermaid.js.",
        longDescription: "ArchMind transforms the way teams design and document cloud infrastructure. Instead of drawing diagrams manually, engineers describe what they need in natural language or point the tool at a repository, and ArchMind produces a production-quality architecture diagram. It's distributed as an MCP server, allowing it to integrate directly into any AI agent workflow. The engine uses recursive Git tree scanning for full context extraction and organizes outputs into tiered subgraphs (Frontend, API, Logic, Data, External) for clarity.",
        features: [
            "Text-to-Diagram via Gemini 3 Flash & Mermaid.js",
            "Recursive Git Tree Scanning for full repo context",
            "Deployed as an MCP Server (archmind-mcp-server)",
            "Tiered Subgraph Layout (Frontend/API/Logic/Data/External)",
            "PNG Export via Mermaid.ink API"
        ],
        tags: ["React", "Gemini API", "Mermaid.js", "MCP", "Vercel", "TypeScript", "Agentic AI"],
        // IMAGE_PLACEHOLDER — replace with /projects/archmind/cover.png
        image: "/projects/package_doctor1.jpg",
        gallery: [
            "/projects/package_doctor1.jpg"
        ],
        links: {
            demo: "https://youtu.be/Hpi4CEw1DBs",
            repo: "https://github.com/Yashwant00CR7/Archy"
        },
        caseStudy: {
            role: "AI Engineer & Architect",
            timeline: "May 2026 - Present",
            problem: "Cloud architecture diagrams are essential for system design reviews, onboarding, and documentation, but they're tedious to create manually. Existing tools like Draw.io and Lucidchart require dragging boxes and lines. For large repositories with dozens of services, keeping diagrams in sync with actual code is nearly impossible. Engineers spend hours on diagrams that are outdated by the next deploy.",
            solution: "I built ArchMind as an MCP server that automates the entire diagram generation process. Engineers describe their stack in natural language (e.g., 'show me the microservice architecture for this Next.js app with PostgreSQL') or point ArchMind at a GitHub repo. The system scans the repository recursively, identifies service boundaries and dependencies, and generates a Mermaid.js diagram organized into logical tiers. The result is a production-quality architecture diagram in seconds, not hours.",
            process: "The architecture is split into three layers:\n1. **Context Extraction**: Uses recursive Git tree scanning to map the entire repository structure, identifying frameworks, database connections, API routes, and external service calls.\n2. **Orchestration Layer**: A Gemini 3 Flash model analyzes the extracted context and generates Mermaid.js syntax organized into tiered subgraphs (Frontend \u2192 API \u2192 Logic \u2192 Data \u2192 External).\n3. **Rendering Pipeline**: The Mermaid.js output is passed to the Mermaid.ink API for PNG rendering and also stored as raw Mermaid source for embedding in documentation.\n\nThe entire system is wrapped in an MCP (Model Context Protocol) server with three tools: `generate_architecture` (text-to-diagram), `analyze_repo` (deep scan), and `save_diagram` (render to PNG).",
            challenges: "The biggest challenge was preventing the diagram from becoming a chaotic 'spaghetti graph' when scanning large monorepos. I solved this with the tiered subgraph system that forces logical grouping. Another issue was rate-limiting on the Gemini API during deep scans \u2014 mitigated by batching context extraction into chunks.",
            learnings: "This project validated that LLMs are excellent at understanding system architecture patterns from code structure alone. The MCP integration pattern is powerful \u2014 it means any AI agent (Claude, Gemini, etc.) can use ArchMind as a drop-in tool. I'd like to extend this to support multiple diagram formats (PlantUML, Diagrams.net XML) and real-time collaborative editing."
        }
    },
    {
        title: "Phone Control MCP",
        description: "Android automation agent via MCP \u2014 controls a physical Android device through AI using AccessibilityService, UI tree parsing, and wireless ADB.",
        longDescription: "A robust, remotely controllable Android automation agent using the Model Context Protocol (MCP). This project allows an AI agent (Claude, Gemini, etc.) to interact with a physical or emulated Android device through a local HTTP server and the Android Accessibility API. Features semantic UI element search, screenshot-based verification, wireless pairing, and real-time device health monitoring. The Android app is a Kotlin-based AccessibilityService running a NanoHTTPD server.",
        features: [
            "UI Element Interaction via Semantic Node IDs",
            "Semantic Search by Visible Text",
            "Visual Verification via Screenshot Chaining",
            "Wireless ADB Support for Remote Control",
            "Device Health Monitoring (Battery, Activity, System Info)"
        ],
        tags: ["Python", "MCP", "Kotlin", "Android", "AccessibilityService", "NanoHTTPD", "Wireless ADB"],
        // IMAGE_PLACEHOLDER — replace with /projects/phone-control-mcp/cover.png
        image: "/projects/auto-retail2.png",
        gallery: [
            "/projects/auto-retail2.png"
        ],
        links: {
            demo: "#",
            repo: "https://github.com/Yashwant00CR7"
        }
    },
    {
        title: "Claude Code Proxy",
        description: "FastAPI proxy that routes Claude Code's Anthropic API calls to free NVIDIA NIM models \u2014 8 model providers with auto-failover and SSE streaming.",
        longDescription: "Claude Code costs $100+/month for API access. This project provides a free alternative by proxying Claude Code's Anthropic API calls through a FastAPI server that routes them to NVIDIA NIM's free tier. The proxy supports automatic model routing, failover on rate limits, real-time SSE streaming, and Whisper voice transcription. Deployed on HuggingFace Spaces with zero infrastructure cost.",
        features: [
            "Drop-in replacement for Claude Code's Anthropic API",
            "8 Free NVIDIA NIM Models with Auto-Routing",
            "Automatic Failover on Rate Limits & Timeouts",
            "Real-Time SSE Streaming",
            "Whisper Voice Transcription Integration"
        ],
        tags: ["FastAPI", "Python", "NVIDIA NIM", "Docker", "HF Spaces", "AsyncIO", "SSE"],
        // IMAGE_PLACEHOLDER — replace with /projects/claude-code-proxy/cover.png
        image: "/projects/auto-retail1.png",
        gallery: [
            "/projects/auto-retail1.png"
        ],
        links: {
            demo: "https://huggingface.co/spaces/Yash030/claude-code-proxy",
            repo: "https://github.com/Yashwant00CR7/claude-code-nvidia"
        }
    },
    {
        title: "Package Conflict Agent",
        description: "A multi-agent system designed to resolve dependency hell. Engineered 'Researcher' and 'CodeSurgeon' agents using Google ADK and Crawl4AI to automate requirements fixing.",
        longDescription: "Dependency management in Python often leads to 'dependency hell', where conflicting version requirements break builds. This project introduces a multi-agent system to solve this autonomously. The 'Researcher' agent actively crawls the web using Crawl4AI to find compatible version combinations, while the 'CodeSurgeon' agent modifies requirements files automatically. The system utilizes Gemini 2.0 for reasoning and SQLite to maintain a graph of dependency relationships.",
        features: [
            "Multi-Agent Orchestration via Google ADK",
            "Automated Dependency Resolution",
            "Web Crawling for Compatibility Data",
            "Graph-based Conflict Detection"
        ],
        tags: ["Python", "Google ADK", "Gemini 2.0", "SQLite", "Crawl4AI", "Multi-Agent Systems", "Graph Algorithms"],
        image: "/projects/package_doctor1.jpg",
        gallery: [
            "/projects/package_doctor1.jpg"
        ],
        links: {
            demo: "https://youtu.be/Hpi4CEw1DBs",
            repo: "https://github.com/Yashwant00CR7/AI-Powered-Package-Conflict-Resolver"
        },
        caseStudy: {
            role: "AI Engineer & Architect",
            timeline: "Nov 2024 - Dec 2024",
            problem: "Python developers spend nearly 20% of their time debugging dependency conflicts ('Dependency Hell'). Manual resolution requires cross-referencing PyPI, GitHub issues, and compatiblity matrices, which is tedious and error-prone. In large monorepos, a single upgrade can cascade into hours of broken builds.",
            solution: "I built an autonomous agentic workflow that mimics a human senior engineer. The system doesn't just look at version numbers; it actively 'researches' compatibility by scraping documentation and changelogs. It then creates a 'Dependency Graph' to visualize conflicts and uses a 'Genetic Algorithm' approach to propose the optimal set of versions that satisfy all constraints.",
            process: "The architecture consists of three main agents: \n1. **Triage Agent**: Analyze the error logs (pip/poetry output) to identify the root cause.\n2. **Researcher Agent**: Uses `Crawl4AI` to search the web for 'Version X compatibility with Version Y'. It parses StackOverflow and GitHub Issues to find proven working combinations.\n3. **CodeSurgeon**: Safely parses `requirements.txt` or `pyproject.toml`, applies the fix, and triggers a text build.\n\nTechnically, I used **Google's Agent Development Kit (ADK)** for the orchestration layer, leveraging its event-driven architecture to handle the asynchronous nature of web searching and code patching.",
            challenges: "The biggest challenge was key hallucination where the LLM would invent version numbers that didn't exist. I mitigated this by forcing the 'Researcher' tool to validate every version against the PyPI JSON API before proposing it.",
            learnings: "This project validated that LLMs are excellent at 'reasoning' about dependency graphs but poor at 'remembering' exact version histories. The hybrid approach of LLM reasoning + Deterministic API verification is the holy grail for reliable coding agents."
        }
    },

    // ── College & Hackathon Projects ───────────────────────────────

    {
        title: "AI-Powered Auto Retail",
        description: "Smart checkout solution achieving 90% mAP in product detection using YOLOv8. Features a mobile 'scan-and-bill' Flask API and AR navigation integration.",
        longDescription: "Transforming the retail checkout experience, this computer vision system detects products in-time with high accuracy. By deploying YOLOv8 models optimized for edge inference, it allows shoppers to simply place items on a counter for instant billing. The accompanying mobile app provides AR navigation to help users find products in-store, creating a seamless 'Grab and Go' experience.",
        features: [
            "Real-time Object Detection (YOLOv8)",
            "90% Mean Average Precision",
            "AR Indoor Navigation",
            "Instant Bill Generation API"
        ],
        tags: ["YOLOv8", "PyTorch", "Flask", "Flutter", "Computer Vision", "AR/VR", "Edge Computing"],
        image: "/projects/auto-retail1.png",
        gallery: [
            "/projects/auto-retail1.png",
            "/projects/auto-retail2.png",
            "/projects/auto-retail3.png",
            "/projects/auto-retail4.png"
        ],
        links: {
            demo: "#",
            repo: "https://github.com/Yashwant00CR7/Low-Budget-Automated-Stores"
        }
    },
    {
        title: "Hydroflow Assistant",
        description: "Flutter-based expert system for monitoring hydraulic hose pressure. Implements intelligent leakage detection algorithms and real-time flow rate visualization.",
        longDescription: "Designed for industrial safety and efficiency, Hydroflow Assistant monitors hydraulic systems in real-time. It connects with IoT sensors to track pressure and flow rates, using an expert system to predict potential hose failures before they occur. The Flutter dashboard provides intuitive visualizations for field technicians, historical analytics, and critical alerts.",
        features: [
            "Predictive Maintenance Algorithms",
            "Real-time Sensor Data Visualization",
            "Leakage Detection Alert System",
            "Cross-platform Mobile App"
        ],
        tags: ["Flutter", "Dart", "Firebase", "Analytics", "IoT Integration", "Predictive Maintenance", "Expert Systems"],
        image: "/projects/hydroflow2.jpg",
        gallery: [
            "/projects/hydroflow1.jpg",
            "/projects/hydroflow2.jpg",
            "/projects/hydrflow3.jpg"
        ],
        links: {
            demo: "#",
            repo: "https://github.com/Yashwant00CR7/hydroflow"
        }
    },
    {
        title: "Currency Detection App",
        description: "Accessibility app for visually impaired users. Uses a two-stage YOLO + CNN pipeline to detect Indian currency and announces denominations via Text-to-Speech.",
        longDescription: "Financial independence is crucial for everyone. This accessibility tool empowers visually impaired users to identify Indian currency notes instantly. It employs a two-stage pipeline: first detecting the note's presence, then classifying its denomination using a custom CNN, providing immediate audio feedback. The app is designed to work offline and in low-light conditions.",
        features: [
            "Two-stage Deep Learning Pipeline",
            "Real-time Audio Feedback",
            "Offline Functionality",
            "High Accuracy in Low Light"
        ],
        tags: ["YOLO", "CNN", "Deep Learning", "Accessibility", "Text-to-Speech", "Android", "TensorFlow"],
        image: "/projects/currency-detection1.png",
        gallery: [
            "/projects/currency-detection1.png",
            "/projects/currency-detection2.png"
        ],
        links: {
            demo: "https://www.youtube.com/watch?v=JGuE3-4H2q8",
            repo: "https://github.com/Yashwant00CR7/Currency-Detection-App"
        }
    }
];