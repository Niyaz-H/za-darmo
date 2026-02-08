# Technical Specification
## Za-Darmo.pl Next.js Website

### 1. Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 16.0.7 |
| React | React | 19.2.1 |
| React DOM | React DOM | 19.2.1 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x (@tailwindcss/postcss) |
| Runtime | Node.js | 20+ |
| Package Manager | npm/pnpm | Latest |
| Deployment | Vercel | - |
| Linting | ESLint | 9.x |

### 2. Project Structure

```
za-darmo/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero-sky.jpeg
│   │   ├── sidebar-book.jpg
│   │   ├── sidebar-library.jpg
│   │   └── ...
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Homepage
│   │   ├── globals.css             # Global styles
│   │   ├── spis-pytan/
│   │   │   └── page.tsx            # Question list
│   │   ├── o-stronie/
│   │   │   └── page.tsx            # About page
│   │   ├── kontakt/
│   │   │   └── page.tsx            # Contact page
│   │   ├── jak-czytac-pismo-swiete/
│   │   │   └── page.tsx            # How to read Bible
│   │   └── pytania/
│   │       └── [slug]/
│   │           └── page.tsx        # Dynamic question page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── PageWithSidebar.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── SocialIcons.tsx
│   │   │   ├── SearchIcon.tsx
│   │   │   └── ExpandableSection.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── GospelMessage.tsx
│   │   │   └── QuestionCallout.tsx
│   │   ├── questions/
│   │   │   ├── QuestionCard.tsx
│   │   │   ├── QuestionList.tsx
│   │   │   └── QuestionNavigation.tsx
│   │   ├── sidebar/
│   │   │   ├── RecommendedCard.tsx
│   │   │   ├── RecentQuestions.tsx
│   │   │   └── FacebookWidget.tsx
│   │   └── contact/
│   │       └── ContactForm.tsx
│   ├── content/
│   │   ├── questions/
│   │   │   ├── index.ts            # Question list data
│   │   │   ├── pytanie-3.ts
│   │   │   ├── pytanie-4.ts
│   │   │   ├── pytanie-5.ts
│   │   │   ├── pytanie-7.ts
│   │   │   └── pytanie-8.ts
│   │   └── pages/
│   │       ├── homepage.ts
│   │       ├── about.ts
│   │       └── how-to-read.ts
│   ├── lib/
│   │   ├── utils.ts                # Utility functions
│   │   └── constants.ts            # Site constants
│   └── types/
│       └── index.ts                # TypeScript types
├── docs/
│   ├── PRD.md
│   └── technical_spec.md
├── some_images/                    # Original images
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

### 3. Component Specifications

#### 3.1 Layout Components

##### Header.tsx
```typescript
interface HeaderProps {
  className?: string;
}

// Features:
// - Logo on left
// - Navigation links in center
// - Social icons on right (desktop)
// - Search icon
// - Mobile hamburger menu
// - Sticky on scroll (optional)
```

##### Footer.tsx
```typescript
interface FooterProps {
  className?: string;
}

// Features:
// - Copyright text
// - Social media icons
// - Dark background
```

##### Sidebar.tsx
```typescript
interface SidebarProps {
  className?: string;
}

// Features:
// - "Polecamy" section with cards
// - "Najnowsze pytania" list
// - "Nasz facebook" section
```

##### PageWithSidebar.tsx
```typescript
interface PageWithSidebarProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

// Features:
// - Two-column layout on desktop
// - Single column on mobile
// - Main content area + sidebar
```

#### 3.2 UI Components

##### Navigation.tsx
```typescript
interface NavItem {
  label: string;
  href: string;
  isAnchor?: boolean;
}

interface NavigationProps {
  items: NavItem[];
  className?: string;
}
```

##### SocialIcons.tsx
```typescript
interface SocialLink {
  platform: 'twitter' | 'facebook' | 'youtube' | 'instagram';
  url: string;
}

interface SocialIconsProps {
  links: SocialLink[];
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

##### ExpandableSection.tsx
```typescript
interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

// Features:
// - Click to expand/collapse
// - Animated height transition
// - Arrow indicator
```

##### Button.tsx
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}
```

#### 3.3 Content Components

##### BibleVerse.tsx
```typescript
interface BibleVerseProps {
  text: string;
  reference: string;
  translation?: 'BW' | 'BT';  // Biblia Warszawska or Tysiąclecia
}

// Renders italic text with bold reference
```

##### QuestionCard.tsx
```typescript
interface QuestionCardProps {
  number: number;
  question: string;
  slug: string;
  isAvailable: boolean;
}
```

##### RecentQuestions.tsx
```typescript
interface RecentQuestion {
  number: number;
  title: string;
  slug: string;
  date: string;
}

interface RecentQuestionsProps {
  questions: RecentQuestion[];
  limit?: number;
}
```

### 4. Data Models

#### 4.1 Question Type
```typescript
interface Question {
  id: number;
  slug: string;
  title: string;
  shortAnswer: string;
  fullAnswer?: string;
  verses: BibleVerse[];
  datePublished: string;
  isAvailable: boolean;
  previousQuestion?: { slug: string; title: string };
  nextQuestion?: { slug: string; title: string };
}

interface BibleVerse {
  text: string;
  reference: string;
  translation: 'BW' | 'BT';
}
```

#### 4.2 Navigation Type
```typescript
interface NavItem {
  id: string;
  label: string;
  href: string;
  isAnchor?: boolean;
}

const mainNavigation: NavItem[] = [
  { id: 'home', label: 'Strona główna', href: '/' },
  { id: 'gospel', label: 'Dobra nowina', href: '/#scroll1', isAnchor: true },
  { id: 'questions', label: 'Spis pytań', href: '/spis-pytan' },
  { id: 'about', label: 'O stronie', href: '/o-stronie' },
  { id: 'contact', label: 'Kontakt z nami', href: '/kontakt' },
];
```

#### 4.3 Social Links Type
```typescript
interface SocialLink {
  platform: 'twitter' | 'facebook' | 'youtube' | 'instagram';
  url: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { platform: 'twitter', url: 'https://twitter.com/wwwzadarmopl', label: 'Twitter' },
  { platform: 'facebook', url: 'https://www.facebook.com/wwwzadarmopl/', label: 'Facebook' },
  { platform: 'youtube', url: 'https://www.youtube.com/channel/UCou-30BfBQlFnXhpqUSs2kA/', label: 'YouTube' },
  { platform: 'instagram', url: 'https://www.instagram.com/wwwzadarmopl/', label: 'Instagram' },
];
```

### 5. Page Implementations

#### 5.1 Homepage (`/`)
- Hero section with main message
- "Spis pytań" callout box
- Main hero image
- Gospel message content (id="scroll1")
- Second "Spis pytań" callout box
- Sidebar with recommendations

#### 5.2 Question List (`/spis-pytan`)
- Page title "Lista pytań"
- Numbered list of questions with links
- "Napisz" CTA for new questions
- Sidebar

#### 5.3 About (`/o-stronie`)
- Page title "O stronie ZA-DARMO.PL"
- About text paragraphs
- Sidebar

#### 5.4 Contact (`/kontakt`)
- Page title "Pozostańmy w kontakcie"
- Introduction text
- Contact form with fields:
  - Imię i nazwisko (Name)
  - Adres E-Mail (Email)
  - Temat (Subject)
  - Wiadomość (Message)
  - Wyślij wiadomość (Submit button)
- Sidebar

#### 5.5 How to Read Bible (`/jak-czytac-pismo-swiete`)
- Page title "JAK CZYTAĆ PISMO ŚWIĘTE?"
- Multiple paragraphs of guidance
- Numbered method sections
- Sidebar

#### 5.6 Question Detail (`/pytania/[slug]`)
- Question title as heading
- Short answer text
- Expandable "CZYTAJ PEŁNĄ ODPOWIEDŹ" section
- Expandable "CYTATY" section
- Previous/Next question navigation
- Sidebar

### 6. Styling Guidelines

#### 6.1 Tailwind CSS v4 Configuration
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3498db',
          dark: '#2980b9',
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
        },
        background: {
          DEFAULT: '#ffffff',
          gray: '#f5f5f5',
        },
        footer: {
          DEFAULT: '#2c3e50',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
};
```

#### 6.2 Component Styling Patterns
```css
/* Bible verses */
.bible-verse {
  @apply italic text-text;
}
.bible-verse-reference {
  @apply font-bold not-italic;
}

/* Headings */
.page-title {
  @apply text-2xl font-bold text-text mb-4;
}

/* Cards */
.sidebar-card {
  @apply bg-white rounded-lg shadow p-4;
}
```

### 7. SEO Configuration

#### 7.1 Metadata Template
```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  title: {
    template: '%s – Za-darmo.pl',
    default: 'Za-darmo.pl – Odpowiedzi na pytania dotyczące biblii i chrześcijaństwa',
  },
  description: 'Odpowiedzi na pytania dotyczące biblii i chrześcijaństwa. Zbawienie z łaski przez wiarę.',
  keywords: ['biblia', 'chrześcijaństwo', 'zbawienie', 'ewangelia', 'jezus chrystus'],
  authors: [{ name: 'Za-darmo.pl' }],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://za-darmo.pl',
    siteName: 'Za-darmo.pl',
  },
};
```

#### 7.2 Per-Page Metadata
Each page should export its own metadata:
```typescript
export const metadata: Metadata = {
  title: 'Spis pytań',
  description: 'Lista pytań i odpowiedzi dotyczących Pisma Świętego.',
};
```

### 8. Deployment Configuration

#### 8.1 Vercel Configuration
```json
// vercel.json
{
  "framework": "nextjs",
  "regions": ["fra1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

#### 8.2 Next.js Config
```typescript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Static export for simple hosting
  images: {
    unoptimized: true, // For static export
  },
  trailingSlash: true,
};

export default nextConfig;
```

### 9. Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint

# Type check
npm run type-check
```

### 10. Environment Variables

```env
# .env.local (if needed for contact form)
CONTACT_EMAIL=kontakt@za-darmo.pl
```

### 11. Image Optimization

Images should be:
1. Converted to WebP format where possible
2. Properly sized for their display context
3. Include width/height to prevent layout shift
4. Use Next.js Image component with proper alt text

### 12. Accessibility Requirements

- Proper heading hierarchy (h1 > h2 > h3)
- Alt text for all images
- Keyboard navigation support
- Focus indicators
- ARIA labels where needed
- Sufficient color contrast
- Polish language declared in HTML