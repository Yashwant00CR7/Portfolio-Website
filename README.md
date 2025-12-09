# Portfolio Website | Yashwant K

![Banner](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

A high-performance, interactive portfolio website built for **Yashwant K**, an AI Engineer specializing in Autonomous Agents and Computer Vision. 

This project showcases advanced React patterns, Framer Motion animations, and a polished UI design to demonstrate full-stack engineering capabilities.

## 🚀 Live Demo
*(Add your Vercel/Netlify link here)*

## 🛠️ Tech Stack

- **Core**: [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## ✨ Key Features

- **🎨 Modern Aesthetic**: Dark/Light mode support, glassmorphism effects, and smooth page transitions.
- **⚡ Performance First**: Optimized assets, lazy loading, and fast TTI using Vite.
- **📱 Responsive**: Fully adaptive design for Mobile, Tablet, and Desktop.
- **💼 Project Showcase**: 
    - Interactive video previews on hover.
    - Deep-dive modals with gallery support.
    - Intelligent image resizing (`object-contain`) for perfect screenshots.
- **📩 Functional Contact Form**: Integrated with **EmailJS** for real-time email delivery directly from the browser.
- **📄 Dual Resume System**: Custom popup menu to download either a 1-page summary or a detailed 4-page CV.
- **🧩 Dynamic Content**: Data-driven components for easy updates to Experience, Skills, and Projects.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Yashwant00CR7/Portfolio-Website.git
   cd Portfolio-Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. **Configure EmailJS (Important)**:
   - Create an account at [EmailJS](https://www.emailjs.com/).
   - Create a **Service** and **Template**.
   - Open `components/Contact.tsx` and replace the following placeholders with your actual keys:
     ```typescript
     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```
├── components/       # Reusable UI components
│   ├── Navbar.tsx    # Responsive navigation with Theme Toggle
│   ├── Hero.tsx      # Landing section with animations
│   ├── About.tsx     # Profile section with Resume Download
│   ├── Skills.tsx    # Tech stack grid
│   ├── Projects.tsx  # Interactive project gallery
│   ├── Experience.tsx# Timeline of work history
│   ├── Contact.tsx   # EmailJS integration
│   └── Footer.tsx    # Multi-column footer
├── public/           # Static assets (images, resume PDFs)
├── dist/             # Production build output
└── index.html        # Entry point
```

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
**Made with ❤️ in India by Yashwant K**
