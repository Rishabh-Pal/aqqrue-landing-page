# Aqqrue Landing Page - Features & Components

## 🎯 Overview

This landing page showcases Aqqrue's finance platform for multi-location restaurants with a modern, dark-themed design and advanced animations.

## 🎨 Design Features

### Color Scheme
- **Primary Colors**: Emerald (#10b981) to Green (#059669) gradient
- **Background**: Deep black (#0a0a0a) with zinc accents
- **Text**: White (#ffffff) with gray variations for hierarchy
- **Accents**: Red for problem section, Purple/Pink for features

### Typography
- **Headings**: Bold, large-scale typography (5xl-7xl)
- **Body**: Clean, readable sans-serif fonts
- **Hierarchy**: Clear visual hierarchy with size and color variations

## 🎬 Animations

### Scroll Animations
- **Scroll Progress Bar**: Green gradient bar at top showing page scroll progress
- **Section Reveals**: Sections fade in and slide up when scrolled into view
- **Staggered Animations**: Cards and items animate in sequence for visual interest

### Hover Effects
- **Button Hover**: Scale up (1.05x) with gradient overlay
- **Card Hover**: Lift effect (-8px) with glow and border color change
- **Icon Hover**: Rotate and scale with spring physics

### Interactive Elements
- **Dashboard Tabs**: Clickable location tabs with smooth transitions
- **AI Overlay**: Timed overlay showing AI query and results
- **Navigation**: Backdrop blur and border appear on scroll

## 📱 Components

### 1. Navigation (`Navigation.tsx`)
- Fixed position with scroll-based styling
- Logo with hover animation
- CTA button with gradient
- Backdrop blur effect when scrolled

### 2. Scroll Progress (`ScrollProgress.tsx`)
- Fixed top bar showing scroll progress
- Smooth spring animation
- Emerald to green gradient

### 3. Hero Section (`HeroSection.tsx`)
**Content:**
- Main headline with gradient text
- Sub-headline and description
- Two CTA buttons (primary and secondary)
- Microcopy for trust building

**Visual:**
- Grid background pattern with radial mask
- Animated dashboard on the right
- Gradient overlays for depth

### 4. Dashboard Animation (`DashboardAnimation.tsx`)
**Features:**
- Location tabs (Downtown Austin, South Congress, Domain Northside)
- AI insight banner with sparkle icon
- Financial data table with:
  - Revenue, Food Cost, Labor Cost, Operating Expenses, Net Profit
  - Comparison columns (Last Week, Δ vs Last Week, Δ vs Last Month)
  - Trend indicators (up/down arrows)
- Timed AI query overlay showing performance comparison

**Animations:**
- Auto-cycling through locations every 4 seconds
- AI overlay appears every 8 seconds
- Smooth table data transitions
- Hover effects on tabs

### 5. Promise Section (`PromiseSection.tsx`)
**Features:**
- Three feature cards:
  1. **Weekly Location P&Ls** (Blue gradient, Calendar icon)
  2. **Day 2 Month-End Close** (Green gradient, Zap icon)
  3. **5 Minute Response Time** (Purple gradient, Clock icon)
- Money-back guarantee badge
- Radial gradient background

**Animations:**
- Cards fade in with stagger effect
- Hover: lift, glow, and gradient effects
- Icon rotation on hover
- Corner accent appears on hover

### 6. Problem Section (`ProblemSection.tsx`)
**Features:**
- Five pain points with icons:
  1. Weekly cost changes vs monthly reporting
  2. Deposit mismatches from delivery platforms
  3. CPA focus on taxes, not operations
  4. Fragmented receipt management
  5. Cash leakage visibility issues
- Bottom CTA with gradient text
- Alert badge at top

**Animations:**
- Items slide in from left with stagger
- Hover: slide right, border color change
- Decorative dot appears on hover

### 7. Footer (`Footer.tsx`)
**Content:**
- Brand logo
- Quick links section
- Contact information
- Copyright and legal links

**Layout:**
- Three-column grid on desktop
- Responsive stack on mobile
- Border separator for bottom bar

## 🎯 Key Interactions

### Dashboard Interaction Flow
1. Page loads → First location (Downtown Austin) shown
2. After 4s → Switches to South Congress
3. After 8s → AI overlay appears with performance comparison
4. After 12s → Switches to Domain Northside
5. Cycle repeats

### User Can:
- Click location tabs to manually switch
- Hover over cards for interactive effects
- Scroll to trigger section animations
- Click CTAs (ready for integration)

## 📊 Data Structure

### Location Data
Each location has:
- Revenue
- Food Cost (30% of revenue)
- Labor Cost (35% of revenue)
- Operating Expenses (17% of revenue)
- Net Profit (calculated)

### Metrics Shown
- Current week amount
- Last week amount
- Week-over-week change (%)
- Month-over-month change (%)
- Trend direction (up/down)

## 🎨 Visual Effects

### Gradients
- **Emerald/Green**: Primary CTAs, progress bar
- **Blue/Cyan**: Weekly P&L feature
- **Purple/Pink**: Response time feature
- **Red/Orange**: Problem section highlights

### Shadows
- Colored shadows matching gradients
- Intensity increases on hover
- Blur effects for depth

### Borders
- Subtle zinc borders (#27272a)
- Colored borders on hover
- Gradient borders for special elements

## 🚀 Performance Optimizations

- **Framer Motion**: Hardware-accelerated animations
- **Next.js 16**: Turbopack for fast builds
- **Lazy Loading**: Components load as needed
- **Optimized Images**: Next.js Image component ready
- **CSS-in-JS**: Tailwind for minimal CSS bundle

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

### Responsive Features
- Grid layouts collapse to single column
- Text sizes scale down
- Padding/spacing adjusts
- Dashboard table scrolls horizontally on mobile

## 🎯 Conversion Optimization

### CTAs
- **Primary**: "Book a consultation" (emerald gradient, prominent)
- **Secondary**: "View sample weekly location P&L" (outlined)
- **Navigation**: Quick access to booking

### Trust Signals
- "Scale Your Restaurants with Confidence"
- "If we miss the mark - the month is free. No fine print."
- "5 minute average response time"
- "Day 2 month-end close. Always."

### Social Proof Elements
- Specific metrics (5 minutes, Day 2, weekly)
- Guarantee with no fine print
- Professional dashboard visualization

## 🔧 Customization Guide

### Changing Colors
Edit `app/globals.css`:
```css
--accent: #10b981;  /* Primary color */
--accent-hover: #059669;  /* Hover state */
```

### Adjusting Animation Speed
In component files, modify `transition` props:
```tsx
transition={{ duration: 0.6, delay: 0.2 }}
```

### Updating Content
- Hero text: `HeroSection.tsx`
- Features: `PromiseSection.tsx` (features array)
- Problems: `ProblemSection.tsx` (problems array)
- Dashboard data: `DashboardAnimation.tsx` (tableData object)

## 🎬 Animation Timeline

**Page Load (0-2s):**
- Navigation slides down
- Hero content fades in (staggered)
- Dashboard appears and starts cycling

**Scroll to Promise Section:**
- Section header fades in
- Cards appear with stagger (0.2s delay each)

**Scroll to Problem Section:**
- Alert badge appears
- Problem items slide in from left (0.1s stagger)

**Continuous:**
- Dashboard cycles locations every 4s
- AI overlay toggles every 8s
- Scroll progress bar updates in real-time

---

This landing page is designed to convert visitors by clearly communicating value, demonstrating the product, and addressing pain points with a modern, trustworthy design.

