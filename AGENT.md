# Sourcegraph Interview Resources - Agent Guide

This document contains essential information for AI agents working on this codebase.

## Project Overview

A Next.js 15 application built for Sourcegraph interview candidates, featuring comprehensive interview preparation resources, company culture information, product demos, and benefits details.

## Key Commands

```bash
# Development
npm run dev --turbopack    # Start development server with Turbo
npm run build             # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Git
git add . && git commit -m "message" && git push
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles with Sourcegraph brand system
│   ├── layout.tsx      # Root layout with Header/Footer
│   ├── page.tsx        # Home page
│   ├── interview-prep/ # Interview preparation dashboard
│   ├── culture/        # Culture & values page
│   ├── products/       # Products showcase with Amp demo
│   ├── benefits/       # Benefits & equity information
│   └── resources/      # Resource library with search/filter
├── components/
│   ├── ui/            # Base UI components (Button, Card)
│   ├── layout/        # Layout components (Header, Footer)
│   ├── interview/     # Interview-specific components
│   └── resources/     # Resource library components
```

## Design System

### Color Scheme (CSS Variables)
- `--primary: #3b30ff` (Sourcegraph blue)
- `--accent: #ff5c5c` (Call-to-action orange)
- `--background: #ffffff / #0f111a` (light/dark)
- `--foreground: #1e1e20 / #ffffff` (text)

### Typography
- Font: Inter (Google Fonts)
- Hierarchy: h1 (4xl-6xl), h2 (3xl-4xl), h3 (2xl), body (base)

### Components
- Button variants: primary, secondary, accent, ghost, link
- Card with header, content, footer sections
- Responsive grid system with container class

## Key Features

### Pages Built
1. **Home** - Hero, value props, testimonials, CTAs
2. **Interview Prep** - Role-based interview timelines with accordions
3. **Culture** - Interactive values explorer with employee stories
4. **Products** - Amp demo, product showcase, developer testimonials
5. **Benefits** - Benefits cards, equity calculator, global differences
6. **Resources** - Searchable library with filtering and pagination

### Interactive Elements
- Role selector tabs (Engineering, Sales, G&A, Executive)
- Expandable accordions for interview stages
- Values cards with detailed explanations
- Interactive Amp demo simulation
- Equity calculator with real-time updates
- Search and filter functionality for resources

## Content Strategy

### Resource URLs Referenced
- Sourcegraph culture Notion pages
- Blog posts (Deep Search, Brute Squad, Enterprise AI)
- Amp podcast content
- Carta equity education
- Benefits and hiring process documentation

### Mock Data Created
- Interview stage details for all role types
- Employee testimonials and stories
- Product feature comparisons
- Resource library with realistic content
- Benefits information with global variations

## Development Patterns

### State Management
- React hooks (useState, useMemo) for client-side interactions
- No external state management library needed
- Form state managed locally

### Styling Approach
- Tailwind CSS with custom CSS variables
- Component-based styling with CVA (class-variance-authority)
- Mobile-first responsive design
- Dark/light mode support via CSS variables

### Performance Considerations
- Static generation for all pages
- Optimized images with next/image
- Lazy loading for heavy components
- Client-side filtering for resource library

## Build & Deployment

### Current Build Status
- ✅ All pages compile successfully
- ✅ TypeScript strict mode enabled
- ✅ ESLint passing
- ✅ Production build optimized
- Build size: ~100-115kB per page

### Deployment Ready
- Static export compatible
- Vercel optimized
- Environment variables not required (all public content)

## Future Enhancements

### Potential Additions
- [ ] PostHog analytics integration
- [ ] Real Amp demo iframe integration
- [ ] CMS integration for content management
- [ ] Internationalization (i18n)
- [ ] Enhanced search with full-text capabilities
- [ ] User feedback collection system

### Content Updates
- Replace mock employee stories with real testimonials
- Add actual CEO introduction video
- Integrate real Amp demo environment
- Connect to live benefits data

## Brand Guidelines

### Visual Identity
- Follows Sourcegraph.com design patterns
- Dark hero sections with light content areas
- Generous whitespace and clean typography
- Consistent button and card styling
- Professional developer-focused aesthetic

### Tone & Voice
- Technical but accessible
- Encouraging and supportive for candidates
- Transparent about company culture
- Product-focused with clear value propositions
