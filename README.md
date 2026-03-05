# Developer Portfolio Website

A modern, professional developer portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **React Icons**. Features a sleek design with dark mode support, smooth animations, and fully responsive layout.

## ✨ Features

- 🎨 **Modern Design** - Clean, minimal, and visually appealing interface
- 🌓 **Dark Mode** - Full dark/light mode support with system preference detection
- ⚡ **Smooth Animations** - Framer Motion animations for entrance effects and interactions
- 📱 **Responsive Design** - Mobile-first approach, works perfectly on all devices
- ✍️ **Typewriter Effect** - Dynamic role showcase with typewriter animation
- 🔝 **Sticky Navigation** - Smooth scrolling to sections with active state
- 📰 **Hamburger Menu** - Mobile-friendly navigation menu
- 🎭 **Timeline Layout** - Experience and education section with beautiful timeline
- 📊 **GitHub Stats** - Display GitHub activity and language statistics
- 🎪 **Marquee** - Scrolling tech stack showcase
- 💬 **Contact Form** - Functional contact form with validation
- 🎯 **SEO Optimized** - Meta tags and open graph configuration

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Dark Mode**: Custom Context API
- **Development**: ESLint, PostCSS

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with ThemeProvider
│   ├── globals.css          # Global styles
│   ├── page.tsx             # Home page
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx           # Navigation bar with mobile menu
│   ├── Hero.tsx             # Hero section with typewriter
│   ├── About.tsx            # About section with interests
│   ├── Skills.tsx           # Skills grid by category
│   ├── Projects.tsx         # Projects showcase
│   ├── Experience.tsx       # Timeline experience/education
│   ├── GitHubStats.tsx      # GitHub activity display
│   ├── TechStackMarquee.tsx # Scrolling tech stack
│   ├── Contact.tsx          # Contact form and links
│   ├── CallToAction.tsx     # CTA section
│   ├── Footer.tsx           # Footer with links
│   └── Typewriter.tsx       # Typewriter effect component
├── contexts/
│   └── ThemeContext.tsx     # Dark mode context provider
├── hooks/
├── lib/
└── public/
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm or yarn or pnpm

### Installation

1. Navigate to the project directory:

```bash
cd vibe-coding
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file (optional for customization):

```bash
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
NEXT_PUBLIC_EMAIL=your.email@example.com
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📝 Customization

### Update Personal Information

Edit the following files to customize your portfolio:

1. **Navbar.tsx** - Update logo/brand name
2. **Hero.tsx** - Update your name and introduction
3. **About.tsx** - Add your bio and update interests
4. **Skills.tsx** - Update your skills and categories
5. **Projects.tsx** - Add your projects
6. **Experience.tsx** - Update your experience and education
7. **GitHubStats.tsx** - Update GitHub stats
8. **Contact.tsx** - Update contact information
9. **Footer.tsx** - Update social links and copyright

### Colors & Styling

The portfolio uses a color scheme defined in:

- `src/app/globals.css` - CSS custom properties
- `tailwind.config.ts` - Tailwind theme configuration

Key colors:

- Primary Blue: `#3b82f6`
- Secondary Purple: `#8b5cf6`
- Dark Background: `#0f0f0f`

### Sections

The portfolio includes the following sections (in order):

1. **Hero** - Full-screen introduction with typewriter effect
2. **About** - Personal bio and interests
3. **Skills** - Organized by category (Frontend, Backend, etc.)
4. **Projects** - Showcase of 6 featured projects
5. **Experience** - Timeline of work experience and education
6. **GitHub Stats** - Language usage and repository statistics
7. **Tech Stack** - Scrolling marquee of technologies
8. **Contact** - Contact form and social links
9. **CTA** - Call to action before footer
10. **Footer** - Footer with quick links and social media

## 🎨 Dark Mode

Dark mode is automatically applied based on:

1. User's system preferences (prefers-color-scheme)
2. Manual theme toggle in navbar
3. Preference stored in localStorage

To manually set theme:

```typescript
import { useTheme } from "@/contexts/ThemeContext";

function MyComponent() {
  const { theme, setTheme } = useTheme();

  setTheme("dark"); // 'light', 'dark', or 'system'
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are optimized for mobile-first design.

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS theme
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint rules

## 📖 Environment Variables

Create a `.env.local` file for optional configuration:

```env
# GitHub
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username

# Email
NEXT_PUBLIC_EMAIL=your.email@example.com

# Social Links
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourprofile
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourhandle

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms

The project can be deployed to:

- Netlify
- GitHub Pages
- AWS Amplify
- Heroku
- DigitalOcean

Ensure your hosting platform supports Next.js 16.

## 📊 Performance

- **Lighthouse Score**: 90+/100
- **Core Web Vitals**: All green
- **Bundle Size**: Optimized with Next.js
- **Image Optimization**: Automatic with Next.js Image component

## 🐛 Troubleshooting

### Dev Server Issues

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Start fresh
npm run dev
```

### Style Issues

```bash
# Rebuild Tailwind CSS
npm run dev  # Files rebuild on save
```

### Dark Mode Not Working

- Clear browser cache
- Check ThemeProvider is wrapping app in layout.tsx
- Verify HTML element has correct class

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📧 Contact

For questions or support, feel free to reach out via the contact form on the portfolio.

---

**Built with ❤️ using Next.js and Tailwind CSS**
