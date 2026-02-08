# Product Requirements Document (PRD)
## Za-Darmo.pl Website Recreation

### 1. Project Overview

**Project Name:** Za-Darmo.pl Website Recreation  
**Project Type:** Static/SSG Website with Next.js  
**Primary Language:** Polish  
**Domain:** za-darmo.pl  
**Deployment Target:** Vercel  

### 2. Project Background

Za-darmo.pl was a Polish Christian website focused on sharing the Gospel message about free salvation through faith in Jesus Christ. The original site was lost, but an archived version is available on the Wayback Machine from April 2019. This project aims to recreate the website using modern technologies while preserving the original content and design spirit.

### 3. Goals & Objectives

1. **Recreate** the original za-darmo.pl website with all existing content
2. **Modernize** the tech stack using Next.js 15 and Tailwind CSS v4
3. **Maintain** the original design aesthetic and user experience
4. **Enable** easy content management for future expansion of questions
5. **Optimize** for SEO and performance
6. **Deploy** on Vercel with custom domain support

### 4. Target Audience

- Polish-speaking individuals seeking information about Christianity and the Bible
- People with questions about salvation, faith, and biblical teachings
- New believers looking for guidance on reading Scripture

### 5. Website Structure

#### 5.1 Main Navigation Pages

| Page | Polish Title | URL Path | Description |
|------|-------------|----------|-------------|
| Homepage | Strona główna | `/` | Hero section + Good News Gospel message |
| Good News | Dobra nowina | `/#scroll1` | Anchor on homepage - Gospel presentation |
| Question List | Spis pytań | `/spis-pytan` | List of all Bible questions with links |
| About | O stronie | `/o-stronie` | Information about the website and team |
| Contact | Kontakt z nami | `/kontakt` | Contact form for inquiries |

#### 5.2 Sidebar Pages (Polecamy - Recommended)

| Page | Polish Title | URL Path | Description |
|------|-------------|----------|-------------|
| How to Read Bible | Jak czytać Pismo Święte? | `/jak-czytac-pismo-swiete` | Guide on studying the Bible |
| Resources | Książki, filmy, strony | `#` (placeholder) | Coming soon - books, films, websites |

#### 5.3 Question Subpages

| # | Question (Polish) | URL Path | Status |
|---|-------------------|----------|--------|
| 1 | Jak trafić do nieba? | `/#scroll1` | Links to homepage anchor |
| 2 | Czy zbawienie naprawdę jest całkowicie za darmo? | `/pytania/czy-zbawienie-naprawde-jest-calkowicie-za-darmo` | Not archived |
| 3 | Czy można utracić życie wieczne? | `/pytania/czy-mozna-utracic-zycie-wieczne` | Available |
| 4 | Jak rozpoznać czy trafiłem na prawdziwe nauczanie odnośnie zbawienia? | `/pytania/jak-rozpoznac-czy-trafilem-na-prawdziwe-nauczanie-odnosnie-zbawienia` | Available |
| 5 | Czy Nowy Testament jest wiarygodnym źródłem historycznym, a nie jakąś legendą? | `/pytania/5-czy-nowy-testament-jest-wiarygodnym-zrodlem-historycznym-a-nie-jakas-legenda` | Available |
| 6 | Czy Jezus rzeczywiście istniał...? | - | Not completed |
| 7 | Czy to sprawiedliwe aby przestępcy otrzymali darmowe zbawienie? | `/pytania/czy-to-sprawiedliwe-aby-przestepcy-np-mordercy-otrzymali-darmowe-zbawienie-tak-samo-latwo-jak-dobrzy-ludzie` | Available |
| 8 | Czy nauka o darmowym życiu wiecznym jest zgodna z nauczaniem KRK? | `/pytania/8-czy-nauka-o-darmowym-zyciu-wiecznym-dzieki-wierze-w-jezusa-chrystusa-jest-zgodna-z-krk` | Available |

### 6. Page Layouts

#### 6.1 Homepage Layout
```
┌─────────────────────────────────────────────────────┐
│                    HEADER                           │
│  [Logo]  [Nav Links]  [Social Icons]  [Search]     │
├─────────────────────────────────────────────────────┤
│                                                     │
│              HERO SECTION                           │
│   "Czy wiesz, że najcenniejszą rzecz..."           │
│   [Call to action buttons]                         │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│              MAIN IMAGE                             │
│         [pexels-photo-355312.jpeg]                 │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│     MAIN CONTENT              │    SIDEBAR         │
│   "Dobra nowina"             │  - Polecamy        │
│   Gospel message             │  - Najnowsze       │
│   with scripture             │    pytania         │
│   quotes                     │  - Nasz facebook   │
│                              │                    │
├─────────────────────────────────────────────────────┤
│                    FOOTER                           │
│  © Copyright + Social Icons                        │
└─────────────────────────────────────────────────────┘
```

#### 6.2 Standard Page Layout (About, Contact, Questions)
```
┌─────────────────────────────────────────────────────┐
│                    HEADER                           │
├─────────────────────────────────────────────────────┤
│                                                     │
│     MAIN CONTENT              │    SIDEBAR         │
│   Page-specific content       │  - Polecamy        │
│                              │  - Najnowsze       │
│                              │    pytania         │
│                              │  - Nasz facebook   │
│                                                     │
├─────────────────────────────────────────────────────┤
│                    FOOTER                           │
└─────────────────────────────────────────────────────┘
```

### 7. Components Required

#### 7.1 Layout Components
- `Header` - Logo, navigation, social icons, search
- `Footer` - Copyright, social icons
- `Sidebar` - Recommended links, recent questions, Facebook embed
- `MainLayout` - Wraps all pages
- `PageWithSidebar` - Two-column layout

#### 7.2 UI Components
- `Logo` - Site logo image
- `Navigation` - Main menu with mobile hamburger
- `SocialIcons` - Twitter, Facebook, YouTube, Instagram
- `SearchIcon` - Search functionality trigger
- `Button` - Reusable button component
- `Card` - For sidebar items
- `QuestionCard` - For question list items
- `ExpandableSection` - For question page accordions
- `ContactForm` - Form with validation
- `BibleVerse` - Styled scripture quotes
- `QuestionNavigation` - Previous/Next question links

#### 7.3 Page Components
- `HeroSection` - Homepage hero
- `GospelMessage` - Main content on homepage
- `QuestionListItem` - Individual question link
- `RecentQuestions` - Sidebar widget
- `RecommendedSection` - Sidebar cards

### 8. Design Specifications

#### 8.1 Color Palette (from original site)
- **Primary Blue:** #3498db (links, buttons)
- **Dark Text:** #333333
- **Light Gray Background:** #f5f5f5
- **White:** #ffffff
- **Footer Dark:** #2c3e50

#### 8.2 Typography
- **Headings:** Sans-serif (system fonts or Google Fonts)
- **Body:** Sans-serif, readable
- **Bible Quotes:** Italic styling

#### 8.3 Responsive Breakpoints
- Mobile: < 768px (single column, hamburger menu)
- Tablet: 768px - 1024px (adjusted spacing)
- Desktop: > 1024px (full two-column layout)

### 9. Technical Requirements

#### 9.1 Technology Stack
- **Framework:** Next.js 15 (App Router, canary version)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** Vercel
- **Content:** Markdown files or JSON for questions

#### 9.2 Performance Requirements
- Lighthouse Performance Score: > 90
- First Contentful Paint: < 1.5s
- Static Site Generation (SSG) for all pages

#### 9.3 SEO Requirements
- Proper meta tags for each page
- Open Graph tags for social sharing
- Structured data for articles
- Polish language declaration
- Sitemap generation

### 10. Content to Preserve

All original Polish content from the archived pages must be preserved exactly, including:
- Gospel message on homepage
- All Bible verse citations (with BT/Warszawska annotations)
- About page text
- How to Read Bible guide
- All available question answers

### 11. Social Media Integration

Current social links (to be confirmed if still active):
- Twitter: https://twitter.com/wwwzadarmopl
- Facebook: https://www.facebook.com/wwwzadarmopl/
- YouTube: https://www.youtube.com/channel/UCou-30BfBQlFnXhpqUSs2kA/
- Instagram: https://www.instagram.com/wwwzadarmopl/

**Note:** Social icons may be removed or updated based on user preference.

### 12. Available Assets

Images in `/some_images/`:
- `a_book2.jpg` - Book image (likely for sidebar)
- `a_library2.jpg` - Library image
- `a_man2.jpg` - Man reading image
- `air-atmosphere-blue-216599.jpg` - Sky/atmosphere background
- `FB1.png`, `FB2.png` - Facebook related images
- `pexels-photo-355312.jpeg` - Main hero image (sky/clouds)
- `wiz1.CDR` - CorelDRAW file (logo source?)

### 13. Future Enhancements

- Add more questions to the list
- Implement search functionality
- Add contact form backend (email service)
- Consider CMS integration for easier content updates
- Add analytics tracking