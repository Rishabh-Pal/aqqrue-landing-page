# Development Guide - Aqqrue Landing Page

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server will be available at [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
Demo-project/
├── app/
│   ├── components/          # React components
│   │   ├── DashboardAnimation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── PromiseSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── Footer.tsx
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page
├── public/                 # Static assets
├── node_modules/           # Dependencies
├── package.json            # Project config
├── tsconfig.json          # TypeScript config
├── README.md              # Project overview
├── FEATURES.md            # Detailed features
└── DEVELOPMENT.md         # This file
```

## 🎨 Customization

### Changing Colors

Edit `app/globals.css`:

```css
:root {
  --background: #0a0a0a;      /* Main background */
  --foreground: #ededed;       /* Main text color */
  --accent: #10b981;           /* Primary accent (emerald) */
  --accent-hover: #059669;     /* Hover state */
}
```

### Updating Content

#### Hero Section
File: `app/components/HeroSection.tsx`

```tsx
// Change headline
<h1>Your New Headline</h1>

// Change sub-headline
<p>Your new sub-headline</p>

// Change CTA text
<button>Your CTA Text</button>
```

#### Feature Cards
File: `app/components/PromiseSection.tsx`

```tsx
const features = [
  {
    icon: YourIcon,
    title: 'Your Feature Title',
    subtitle: 'Your subtitle',
    description: 'Your description',
    gradient: 'from-color-500 to-color-600',
  },
  // Add more features...
];
```

#### Problem Points
File: `app/components/ProblemSection.tsx`

```tsx
const problems = [
  {
    icon: YourIcon,
    text: 'Your problem statement',
  },
  // Add more problems...
];
```

#### Dashboard Data
File: `app/components/DashboardAnimation.tsx`

```tsx
const tableData = {
  'Location Name': [
    { 
      category: 'Revenue', 
      amount: '$XX,XXX', 
      lastWeek: '$XX,XXX', 
      vsLastWeek: '+X.X%', 
      vsLastMonth: '+X.X%', 
      trend: 'up' 
    },
    // Add more rows...
  ],
};
```

### Adjusting Animations

#### Animation Duration
```tsx
// In any component
transition={{ duration: 0.6, delay: 0.2 }}
```

#### Hover Effects
```tsx
whileHover={{ scale: 1.05, y: -8 }}
```

#### Scroll Trigger
```tsx
const isInView = useInView(ref, { 
  once: true,        // Animate only once
  margin: '-100px'   // Trigger offset
});
```

## 🎯 Adding New Sections

1. Create a new component in `app/components/`:

```tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function YourSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Your content */}
      </motion.div>
    </section>
  );
}
```

2. Import and add to `app/page.tsx`:

```tsx
import { YourSection } from './components/YourSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* ... other sections ... */}
      <YourSection />
    </main>
  );
}
```

## 🔧 Common Tasks

### Adding Icons

Using Lucide React:

```tsx
import { IconName } from 'lucide-react';

<IconName className="w-6 h-6 text-emerald-400" />
```

Browse icons: [lucide.dev](https://lucide.dev)

### Adding Gradients

```tsx
// Text gradient
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
  Gradient Text
</span>

// Background gradient
<div className="bg-gradient-to-r from-emerald-500 to-green-600">
  Content
</div>

// Border gradient (requires wrapper)
<div className="bg-gradient-to-r from-emerald-500 to-green-500 p-[1px] rounded-lg">
  <div className="bg-black rounded-lg p-4">
    Content
  </div>
</div>
```

### Adding Hover Effects

```tsx
// Scale on hover
<motion.div whileHover={{ scale: 1.05 }}>
  Content
</motion.div>

// Multiple effects
<motion.div 
  whileHover={{ scale: 1.05, y: -8 }}
  whileTap={{ scale: 0.95 }}
>
  Content
</motion.div>

// CSS hover
<div className="hover:bg-zinc-800 transition-colors duration-300">
  Content
</div>
```

## 📱 Responsive Design

### Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Usage

```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

## 🐛 Debugging

### Check Console
Open browser DevTools (F12) and check Console for errors

### Check Network
Monitor API calls and asset loading in Network tab

### React DevTools
Install React DevTools extension for component inspection

### Framer Motion DevTools
```tsx
// Add to any component for debugging
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  onAnimationStart={() => console.log('Animation started')}
  onAnimationComplete={() => console.log('Animation completed')}
>
  Content
</motion.div>
```

## 🚀 Performance Tips

1. **Use `useInView` for scroll animations**
   - Only animates when element is visible
   - Set `once: true` to prevent re-animations

2. **Optimize images**
   - Use Next.js Image component
   - Provide width and height
   - Use WebP format

3. **Lazy load components**
   ```tsx
   import dynamic from 'next/dynamic';
   
   const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
     loading: () => <p>Loading...</p>
   });
   ```

4. **Minimize re-renders**
   - Use `React.memo` for expensive components
   - Use `useMemo` and `useCallback` hooks

## 📦 Building for Production

```bash
# Build the application
npm run build

# Test production build locally
npm start
```

### Optimization Checklist

- [ ] Remove console.logs
- [ ] Optimize images
- [ ] Check bundle size
- [ ] Test on mobile devices
- [ ] Test in different browsers
- [ ] Check accessibility
- [ ] Verify SEO meta tags

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Connect GitHub repo
- **AWS Amplify**: Use AWS console
- **Custom Server**: Build and serve `npm start`

## 🔍 SEO

Current meta tags in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Aqqrue - Grow Your Restaurants Without Losing Financial Control",
  description: "The finance team that runs at the speed of your operations...",
};
```

Add more in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "...",
  description: "...",
  keywords: ["restaurant", "finance", "accounting"],
  openGraph: {
    title: "...",
    description: "...",
    images: ["/og-image.jpg"],
  },
};
```

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🆘 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Check TypeScript errors
npm run build

# Fix and rebuild
```

### Animations not working
- Check if component has `'use client'` directive
- Verify Framer Motion is installed
- Check browser console for errors

---

For questions or issues, refer to the documentation or check the component files for examples.

