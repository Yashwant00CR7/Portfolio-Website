# Portfolio Website | Yashwant K

![Banner](https://github.com/user-attachments/assets/0aa67016-6e af-458a-adb2-6e31a0763ed6)

A high-performance, interactive portfolio website for **Yashwant K**, an AI Engineer specializing in Agentic AI and Computer Vision.

**[Live Demo →](https://yashwantk.vercel.app/)**

---

## 🛠️ Tech Stack

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: EmailJS

---

## ✨ Features

- Dark/Light mode with glassmorphism effects
- Interactive project gallery with video previews and deep-dive modals
- Functional contact form via EmailJS
- Dual resume download (1-page summary + 4-page CV)
- Fully responsive — mobile, tablet, desktop
- Data-driven components for easy content updates

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or pnpm

### Installation

```bash
git clone https://github.com/Yashwant00CR7/Portfolio-Website.git
cd Portfolio-Website
npm install
```

### Configure EmailJS

In `components/Contact.tsx`, replace the placeholders:
```typescript
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
```
Get your keys at [emailjs.com](https://www.emailjs.com/).

### Run

```bash
npm run dev
```

---

## 📂 Project Structure

```
├── components/
│   ├── Navbar.tsx      # Responsive nav with theme toggle
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # Profile + resume download
│   ├── Skills.tsx      # Tech stack grid
│   ├── Projects.tsx    # Interactive project gallery
│   ├── Experience.tsx  # Timeline
│   ├── Contact.tsx     # EmailJS form
│   └── Footer.tsx
├── public/             # Static assets, resume PDFs
└── index.html
```

---

## 📄 License

MIT License

---

**Made with ❤️ in India by Yashwant K**
