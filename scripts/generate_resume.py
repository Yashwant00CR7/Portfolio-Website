"""Generate resume PDFs (1-page and 4-page) for Yashwant K."""
from fpdf import FPDF
import os

OUTPUT_DIR = r"D:\Downloads\Projects\My College Projects\Portfolio-Website\public\resume"

def sanitize(text):
    """Replace Unicode chars not supported by Helvetica Latin-1."""
    replacements = {
        "\u2014": "-", "\u2013": "-", "\u2018": "'", "\u2019": "'",
        "\u201c": '"', "\u201d": '"', "\u2022": "-",
        "\u2192": "->", "\u00e9": "e", "\u2019": "'",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    return text


class ResumePDF(FPDF):
    def __init__(self, name, contact, summary, skills, projects, achievements, education, certs, detailed=False):
        super().__init__()
        self.name = name
        self.contact = contact
        self.summary = summary
        self.skills = skills
        self.projects = projects
        self.achievements = achievements
        self.education = education
        self.certs = certs
        self.detailed = detailed
        self.set_auto_page_break(auto=True, margin=20)

    def header(self):
        if self.page_no() > 1:
            self.set_font("Helvetica", "I", 8)
            self.set_text_color(120, 120, 120)
            self.cell(0, 5, sanitize("Yashwant K - Resume"), align="R")
            self.ln(8)

    def footer(self):
        self.set_y(-15)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(150, 150, 150)
        self.cell(0, 10, f"Page {self.page_no()}/{{nb}}", align="C")

    def section_title(self, title):
        self.set_font("Helvetica", "B", 11)
        self.set_text_color(30, 30, 30)
        self.cell(0, 7, sanitize(title.upper()))
        self.ln()
        self.set_draw_color(60, 60, 60)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(3)

    def bullet(self, text, indent=12):
        self.set_x(indent)
        self.set_font("Helvetica", "", 9)
        self.set_text_color(50, 50, 50)
        self.multi_cell(0, 4.5, sanitize(f"- {text}"))
        self.ln(1)

    def build(self):
        self.alias_nb_pages()
        self.add_page()
        self._build_header()
        self._build_summary()
        self._build_skills()
        self._build_projects()
        if self.detailed:
            self._build_education()
            self._build_achievements()
            self._build_certs()
        else:
            self._build_education_compact()
            self._build_achievements_compact()

    def _build_header(self):
        self.set_font("Helvetica", "B", 20)
        self.set_text_color(20, 20, 20)
        self.cell(0, 8, sanitize(self.name))
        self.ln(7)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(80, 80, 80)
        self.cell(0, 4, sanitize(self.contact))
        self.ln(6)
        self.set_draw_color(40, 40, 40)
        self.set_line_width(0.5)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(4)

    def _build_summary(self):
        self.section_title("Summary")
        self.set_font("Helvetica", "", 9)
        self.set_text_color(60, 60, 60)
        self.multi_cell(0, 4.5, sanitize(self.summary))
        self.ln(4)

    def _build_skills(self):
        self.section_title("Technical Skills")
        self.set_font("Helvetica", "", 9)
        self.set_text_color(60, 60, 60)
        for cat, items in self.skills.items():
            txt = f"{cat}: {', '.join(items)}"
            self.multi_cell(0, 4.5, sanitize(txt))
            self.ln(1)

    def _build_projects(self):
        self.section_title("Projects")
        for p in self.projects:
            self.set_font("Helvetica", "B", 9.5)
            self.set_text_color(30, 60, 120)
            self.cell(0, 5, sanitize(p["title"]))
            self.ln(4)
            self.set_font("Helvetica", "", 8.5)
            self.set_text_color(50, 50, 50)
            for line in p["content"]:
                self.multi_cell(0, 4.2, sanitize(line))
                self.ln(1)
            self.ln(2)

    def _build_education(self):
        self.section_title("Education")
        for e in self.education:
            self.set_font("Helvetica", "B", 9)
            self.set_text_color(30, 30, 30)
            self.cell(0, 5, sanitize(e["school"]))
            self.ln(4)
            self.set_font("Helvetica", "", 8.5)
            self.set_text_color(60, 60, 60)
            self.multi_cell(0, 4.2, sanitize(f"{e['degree']}  |  {e['period']}  |  {e['gpa']}"))
            self.ln(3)

    def _build_education_compact(self):
        self.section_title("Education")
        for e in self.education:
            self.set_font("Helvetica", "", 8.5)
            self.set_text_color(60, 60, 60)
            self.multi_cell(0, 4.2, sanitize(f"{e['school']} — {e['degree']} ({e['period']}) — {e['gpa']}"))
            self.ln(2)

    def _build_achievements(self):
        self.section_title("Achievements & Hackathons")
        for a in self.achievements:
            self.bullet(a)

    def _build_achievements_compact(self):
        self.section_title("Achievements")
        for a in self.achievements[:3]:
            self.bullet(a)

    def _build_certs(self):
        self.section_title("Certifications")
        for c in self.certs:
            self.bullet(c)


common = {
    "name": "Yashwant K",
    "contact": "yashwantk0305@gmail.com  |  +91 93428 77060  |  github.com/Yashwant00CR7  |  linkedin.com/in/yashwant-k-935aa0292",
    "summary": "AI/ML Engineer specializing in Agentic AI, MCP servers, multi-agent orchestration, and privacy-first mobile apps. Architecting production-grade RAG pipelines, serverless agentic workflows, and deployed MCP servers. Finalist at CalHacks 12.0 (UC Berkeley), SIH, and KPR National Hackathon.",
    "skills": {
        "Agentic AI & MCP": ["LangGraph", "LangChain", "Multi-Agent Swarms", "MCP Servers", "Google ADK", "DSPy", "GraphRAG"],
        "AI/ML": ["PyTorch", "LoRA Fine-Tuning", "HuggingFace Transformers", "YOLO", "Sentence Embeddings"],
        "Backend & APIs": ["Python (AsyncIO)", "FastAPI", "SSE Streaming", "REST APIs", "Flask"],
        "Data & Storage": ["Pinecone", "SQLite VSS", "MongoDB", "PostgreSQL", "Pandas", "NumPy"],
        "Infrastructure": ["Docker", "GCP", "Vercel", "HF Spaces", "GitHub Actions"],
        "Mobile": ["Flutter (Dart)", "Kotlin", "Android SDK", "SMS/Telephony APIs"]
    },
    "projects_1page": [
        {
            "title": "ArchMind - AI Architecture MCP Server",
            "content": [
                "MCP server that generates cloud architecture diagrams from text prompts or GitHub repos.",
                "Uses Gemini 3 Flash + Mermaid.js with recursive Git tree scanning for full context.",
                "Tiered subgraph output: Frontend > API > Logic > Data > External. Reduces diagram creation from hours to seconds.",
                "Stack: React, Gemini API, Mermaid.js, MCP Protocol, TypeScript, Vercel",
            ]
        },
        {
            "title": "Claude Code Proxy - Free NVIDIA NIM Proxy",
            "content": [
                "FastAPI proxy routing Claude Code API calls to 8 free NVIDIA NIM models.",
                "Auto-failover on rate limits, real-time SSE streaming, Whisper transcription integration.",
                "Deployed on HuggingFace Spaces with zero infrastructure cost.",
                "Stack: FastAPI, Python, NVIDIA NIM, Docker, HF Spaces, AsyncIO, SSE",
            ]
        },
        {
            "title": "Sleep Protection - Privacy-First Android DND App",
            "content": [
                "Offline-only Android app that silences calls/SMS during sleep with EMERGENCY bypass.",
                "Isolates STREAM_RING audio only. Auto-replies to whitelisted contacts; reply 'EMERGENCY' within 1h = 2-min ringer restoration.",
                "Zero network permissions. No servers, no cloud, no tracking. Android 5.0+.",
                "Stack: Flutter, Dart, Kotlin, Android SDK, SMS/Telephony APIs",
            ]
        },
        {
            "title": "Package Conflict Resolver - Multi-Agent ADK",
            "content": [
                "Stateful multi-agent swarm using Google ADK and Crawl4AI for dependency hell resolution.",
                "45% reduction in debugging time, 95% resolution rate via agentic reasoning loop.",
                "Stack: Python, Google ADK, LangSmith, Crawl4AI, Pinecone, Gemini, FastAPI",
            ]
        }
    ],
    "projects_detailed": [
        {
            "title": "ArchMind - AI-Powered Architecture MCP Server",
            "content": [
                "Challenge: Cloud architecture diagrams take hours to create manually and become outdated as code evolves. Existing tools require dragging boxes and lines.",
                "Solution: Built an MCP server with recursive Git tree scanning that extracts full repo context and generates Mermaid.js diagrams organized into Frontend/API/Logic/Data/External tiers.",
                "Impact: Reduces diagram creation from hours to seconds. Accessible to any AI agent via MCP protocol.",
                "Stack: React, Gemini API, Mermaid.js, MCP Protocol, Vercel, TypeScript"
            ]
        },
        {
            "title": "Claude Code Proxy - Free NVIDIA NIM API Proxy",
            "content": [
                "Challenge: Claude Code requires $100+/month API access - prohibitive for independent developers.",
                "Solution: FastAPI proxy intercepting Anthropic API calls and routing to 8 free NVIDIA NIM models with auto-failover.",
                "Impact: Full Claude Code functionality at zero API cost. Graceful rate-limit handling.",
                "Stack: FastAPI, Python, NVIDIA NIM, Docker, HuggingFace Spaces, AsyncIO"
            ]
        },
        {
            "title": "Sleep Protection - Privacy-First Android DND",
            "content": [
                "Challenge: Android DND mutes all audio, doesn't inform callers, and has no trusted emergency bypass.",
                "Solution: Flutter + Kotlin app using INTERRUPTION_FILTER_PRIORITY for ringtone-only silence. SMS auto-reply with EMERGENCY override (1h window, 2-min ringer).",
                "Impact: Zero network permissions. Works on all Android 5.0+. No tracking or cloud dependency.",
                "Stack: Flutter, Dart, Kotlin, Android SDK, SMS/Telephony APIs"
            ]
        },
        {
            "title": "Package Conflict Resolver - Multi-Agent ADK System",
            "content": [
                "Challenge: Python dependency conflicts require cross-referencing PyPI, GitHub issues - tedious and error-prone.",
                "Solution: Three-agent swarm (Triage, Researcher, CodeSurgeon) using Crawl4AI + ADK. PyPI API validation prevents hallucinated versions.",
                "Impact: 45% reduction in debugging time, 95% resolution rate, traced via LangSmith.",
                "Stack: Python, Google ADK, LangSmith, Crawl4AI, Pinecone, Gemini, FastAPI"
            ]
        },
        {
            "title": "AI-Powered Career Development Assistant",
            "content": [
                "Challenge: Students lack data-driven guidance for company-specific role matching and skill gap analysis.",
                "Solution: LangChain + Gemini RAG pipeline analyzing resumes against company role dataset via Pinecone.",
                "Impact: Generates personalized learning paths and career to-do lists in Streamlit.",
                "Stack: Python, LangChain, Google Gemini, Pinecone, Sentence Transformers, Streamlit"
            ]
        }
    ],
    "achievements": [
        "CalHacks 12.0 Finalist (UC Berkeley) - top collegiate hackathon globally",
        "KPR National Hackathon - 24-hour sprint, 50+ inter-state teams",
        "SIH Finalist - top 5 out of 15 teams in internal selection",
        "Google Tunix Hackathon - GRPO RL pipeline on Cloud TPUs",
        "Tech Fest Lead - managed 'Kalam' for 500+ attendees, 30 teams",
        "Vercel AI Gateway Hackathon - gamified model evaluation platform"
    ],
    "education": [
        {"school": "Sri Shakthi Institute of Engineering and Technology", "degree": "B.E. CSE (AI/ML)", "period": "2023-2027", "gpa": "CGPA: 8.11"},
        {"school": "Amrita Vidyalayam, Nallampalayam", "degree": "Higher Secondary (CBSE)", "period": "2022-2023", "gpa": "84.3%"},
        {"school": "Amrita Vidyalayam, Nallampalayam", "degree": "Primary Education (CBSE)", "period": "2020-2021", "gpa": "92.1%"}
    ],
    "certs": [
        "Building Agentic RAG with LlamaIndex - DeepLearning.AI (2026)",
        "LangGraph Fundamentals - LangChain (2026)",
        "Multi AI Agent Systems - DeepLearning.AI (2026)",
        "Computer Vision using Azure - Coursera (2025)",
        "HashGraph Developer Course - Hedera (2024)",
        "Intro to Machine Learning (2024)",
        "Intro to Deep Learning - Coursera (2024)"
    ]
}


# --- 1 Page ---
pdf1 = ResumePDF(
    name=common["name"],
    contact=common["contact"],
    summary=common["summary"],
    skills=common["skills"],
    projects=common["projects_1page"],
    achievements=common["achievements"],
    education=common["education"],
    certs=common["certs"],
    detailed=False
)
pdf1.build()
pdf1.output(os.path.join(OUTPUT_DIR, "Yashwant_Resume.pdf"))
print("1-page resume generated successfully")

# --- 4 Page ---
pdf4 = ResumePDF(
    name=common["name"],
    contact=common["contact"],
    summary=common["summary"],
    skills=common["skills"],
    projects=common["projects_detailed"],
    achievements=common["achievements"],
    education=common["education"],
    certs=common["certs"],
    detailed=True
)
pdf4.build()
pdf4.output(os.path.join(OUTPUT_DIR, "Yashwant_4_Page_Resume.pdf"))
print("4-page resume generated successfully")