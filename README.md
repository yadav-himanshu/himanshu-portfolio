# 🚀 Modern Developer Portfolio

A high-fidelity, interactive personal portfolio designed to showcase professional experience, technical skills, and key projects. Built with a focus on performance, aesthetics, and a premium user experience using **Next.js 16 (Turbopack)**, **TypeScript**, and **Tailwind CSS 4**.

> [!NOTE]
> This portfolio is a living demonstration of modern frontend architecture, featuring glassmorphism, smooth motion effects, and production-ready code standards.

---

## 🔗 Live Demo

✨ **Explore the site:** [himanshu-portfolio-pink.vercel.app](https://himanshu-portfolio-pink.vercel.app)

---

## 🛠 Tech Stack

### Core Frameworks
- **Next.js 16 (App Router)**: Utilizing Turbopack for lightning-fast builds and optimized rendering.
- **React 19**: Leveraging the latest React features for efficient state management and component lifecycle.
- **TypeScript**: Ensuring type safety and scalable architecture.

### UI & Styling
- **Tailwind CSS 4**: Modern utility-first styling with high-performance CSS processing.
- **Framer Motion**: Powering smooth, high-frame-rate animations and transitions.
- **Lucide React & React Icons**: Comprehensive, accessible iconography.
- **Swiper.js**: Responsive, touch-enabled sliders for skills and project showcases.

### Tools & Utilities
- **Nodemailer**: Handling server-side contact form submissions.
- **ESLint & Prettier**: Maintaining code quality and consistent formatting.
- **Vercel**: Optimized deployment and hosting.

---

## ✨ Key Features

- 🌓 **Dynamic Theming**: Custom dark and light mode toggle with persistent user preference via `localStorage`.
- 📱 **Fully Responsive**: Meticulously crafted for mobile, tablet, and desktop viewports.
- 🎭 **Glassmorphic Design**: High-fidelity UI with blurred backgrounds, subtle gradients, and premium look-and-feel.
- ⏱️ **Interactive Timeline**: Visual representation of experience and education using a custom vertical timeline.
- ✉️ **Contact System**: Fully functional contact form with real-time feedback and server-side email integration.
- 🚀 **Performance Optimized**: Leveraging Next.js image optimization, fonts, and streamlined component rendering.
- 🔍 **SEO Ready**: Semantic HTML5 structure with optimized metadata and search engine visibility.

---

## 📂 Project Structure

```text
├── src/
│   ├── app/            # Next.js App Router (pages, layout, globals)
│   ├── components/     # Reusable UI components (About, Header, Footer, etc.)
│   │   └── ui/         # Atomic UI elements (ThemeToggle, ScrollToTop)
│   ├── data/           # Structured data for projects, skills, and timeline
│   └── lib/            # Utility functions and shared logic
├── public/             # Static assets (images, favicons)
└── tailwind.config.ts  # Tailwind CSS configuration
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yadav-himanshu/himanshu-portfolio.git
   cd himanshu-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file for contact form (Nodemailer) settings:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

---

## 👨‍💻 Author

**Himanshu Yadav**
*Frontend-focused Developer | Building high-fidelity digital experiences*

- **GitHub:** [@yadav-himanshu](https://github.com/yadav-himanshu)
- **LinkedIn:** [Himanshu Yadav](https://www.linkedin.com/in/himanshu-yadav-0706a1137)
- **Twitter/X:** [@himanshu_y](https://twitter.com/yadav-himanshu) *(Update with your actual handle if different)*

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

*If you're a recruiter or developer reviewing this project — feedback is always welcome! 🙌*
