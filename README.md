# Aqqrue Landing Page

A modern, animated landing page for Aqqrue - a finance platform for multi-location restaurants. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Dark Theme**: Sleek, professional dark theme optimized for readability
- **Advanced Animations**: Smooth scroll animations, hover effects, and transitions using Framer Motion
- **Responsive Design**: Fully responsive across all device sizes
- **Interactive Dashboard**: Animated location-level P&L dashboard with AI insights
- **Performance Optimized**: Built with Next.js 16 and Turbopack for blazing-fast performance

## 📋 Sections

1. **Hero Section**
   - Compelling headline and value proposition
   - Animated dashboard showing location-level financial data
   - AI-powered insights overlay
   - Primary and secondary CTAs

2. **Aqqrue Promise Section**
   - Three feature cards with gradient icons
   - Weekly P&Ls, Day 2 close, and 5-minute response time
   - Money-back guarantee badge

3. **Problem Section**
   - Pain points for multi-location restaurant operators
   - Interactive problem cards with hover effects

4. **Navigation & Footer**
   - Sticky navigation with scroll effects
   - Scroll progress indicator
   - Comprehensive footer with links

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd Demo-project
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
app/
├── components/
│   ├── DashboardAnimation.tsx  # Animated P&L dashboard
│   ├── HeroSection.tsx         # Hero section with CTAs
│   ├── PromiseSection.tsx      # Feature cards section
│   ├── ProblemSection.tsx      # Pain points section
│   ├── Navigation.tsx          # Sticky navigation
│   ├── ScrollProgress.tsx      # Scroll progress bar
│   └── Footer.tsx              # Footer component
├── globals.css                 # Global styles
├── layout.tsx                  # Root layout
└── page.tsx                    # Main page
```

## 🎨 Customization

### Colors

The project uses a custom color palette defined in `globals.css`:
- Primary: Emerald/Green gradient
- Background: Black (#0a0a0a)
- Foreground: Light gray (#ededed)

### Animations

All animations are built with Framer Motion and can be customized in individual components:
- Scroll-triggered animations with `useInView`
- Hover effects with `whileHover`
- Smooth transitions with `motion` components

## 🚢 Deployment

### Deploy to Vercel

The easiest way to deploy is using Vercel:

```bash
npm run build
```

Then deploy to Vercel:
1. Push to GitHub
2. Import project in Vercel
3. Deploy

### Build for Production

```bash
npm run build
npm start
```

## 📝 License

This project is created for Aqqrue.

## 🤝 Contributing

This is a proprietary project. For any questions or suggestions, please contact the development team.

---

Built with ❤️ using Next.js and Framer Motion
