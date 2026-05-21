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

export const projects: Project[] = [
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
