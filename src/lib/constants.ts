import type { NavItem, SocialLink, SidebarCard, RecentQuestion, Question } from '@/types';

// Main navigation items
export const mainNavigation: NavItem[] = [
  { id: 'home', label: 'Strona główna', href: '/' },
  { id: 'gospel', label: 'Dobra nowina', href: '/#scroll1', isAnchor: true },
  { id: 'questions', label: 'Spis pytań', href: '/spis-pytan' },
  { id: 'about', label: 'O stronie', href: '/o-stronie' },
  { id: 'contact', label: 'Kontakt z nami', href: '/kontakt' },
];

// Social media links (original URLs from the archived site)
export const socialLinks: SocialLink[] = [
  { 
    platform: 'twitter', 
    url: 'https://twitter.com/wwwzadarmopl', 
    label: 'Twitter' 
  },
  { 
    platform: 'facebook', 
    url: 'https://www.facebook.com/wwwzadarmopl/', 
    label: 'Facebook' 
  },
  { 
    platform: 'youtube', 
    url: 'https://www.youtube.com/channel/UCou-30BfBQlFnXhpqUSs2kA/', 
    label: 'YouTube' 
  },
  { 
    platform: 'instagram', 
    url: 'https://www.instagram.com/wwwzadarmopl/', 
    label: 'Instagram' 
  },
];

// Sidebar recommended cards
export const sidebarCards: SidebarCard[] = [
  {
    id: 'how-to-read',
    title: 'Jak czytać Pismo Święte ?',
    description: 'Przedstawiamy sprawdzone wskazówki, pomocne przy samodzielnym studiowaniu Pisma Świętego.',
    href: '/jak-czytac-pismo-swiete',
    imageSrc: '/images/sidebar-book.jpg',
    imageAlt: 'Książka - Jak czytać Pismo Święte',
  },
  {
    id: 'resources',
    title: 'Książki, filmy, strony internetowe',
    description: 'Już wkrótce znajdziesz tutaj ciekawe materiały związane z Pismem Świętym, oraz chrześcijaństwem. Zapraszamy niebawem.',
    href: '#',
    imageSrc: '/images/sidebar-library.jpg',
    imageAlt: 'Biblioteka',
  },
];

// Recent questions for sidebar (these are the available ones from the archive)
export const recentQuestions: RecentQuestion[] = [
  {
    id: 8,
    title: '8. Czy nauka o darmowym życiu wiecznym dzięki wierze w Jezusa Chrystusa, jest zgodna z nauczaniem Kościoła Rzymskokatolickiego?',
    slug: '8-czy-nauka-o-darmowym-zyciu-wiecznym-dzieki-wierze-w-jezusa-chrystusa-jest-zgodna-z-krk',
    date: 'Listopad 18, 2018',
  },
  {
    id: 5,
    title: '5. Czy Nowy Testament jest wiarygodnym źródłem historycznym, a nie jakąś legendą?',
    slug: '5-czy-nowy-testament-jest-wiarygodnym-zrodlem-historycznym-a-nie-jakas-legenda',
    date: 'Październik 22, 2018',
  },
  {
    id: 7,
    title: '7. Czy to sprawiedliwe aby przestępcy, np. mordercy otrzymali darmowe zbawienie tak samo łatwo, jak dobrzy ludzie?',
    slug: 'czy-to-sprawiedliwe-aby-przestepcy-np-mordercy-otrzymali-darmowe-zbawienie-tak-samo-latwo-jak-dobrzy-ludzie',
    date: 'Październik 8, 2018',
  },
  {
    id: 4,
    title: '4. Jak rozpoznać czy trafiłem na prawdziwe nauczanie odnośnie zbawienia?',
    slug: 'jak-rozpoznac-czy-trafilem-na-prawdziwe-nauczanie-odnosnie-zbawienia',
    date: 'Październik 8, 2018',
  },
  {
    id: 3,
    title: '3. Czy można utracić życie wieczne?',
    slug: 'czy-mozna-utracic-zycie-wieczne',
    date: 'Październik 8, 2018',
  },
];

// All questions list for the question list page
export const allQuestions: Question[] = [
  {
    id: 1,
    slug: '', // Links to homepage anchor
    title: 'Jak trafić do nieba?',
    shortAnswer: 'Przez wiarę w Jezusa Chrystusa.',
    datePublished: '2018-09-01',
    isAvailable: true,
  },
  {
    id: 2,
    slug: 'czy-zbawienie-naprawde-jest-calkowicie-za-darmo',
    title: 'Czy zbawienie naprawdę jest całkowicie za darmo?',
    shortAnswer: 'Tak, zbawienie jest całkowicie darmowym darem od Boga.',
    datePublished: '2018-09-15',
    isAvailable: true,
  },
  {
    id: 3,
    slug: 'czy-mozna-utracic-zycie-wieczne',
    title: 'Czy można utracić życie wieczne?',
    shortAnswer: 'Nie, życie wieczne jest wieczne.',
    datePublished: '2018-10-08',
    isAvailable: true,
  },
  {
    id: 4,
    slug: 'jak-rozpoznac-czy-trafilem-na-prawdziwe-nauczanie-odnosnie-zbawienia',
    title: 'Jak rozpoznać czy trafiłem na prawdziwe nauczanie odnośnie zbawienia?',
    shortAnswer: 'Przez porównanie z Pismem Świętym.',
    datePublished: '2018-10-08',
    isAvailable: true,
  },
  {
    id: 5,
    slug: '5-czy-nowy-testament-jest-wiarygodnym-zrodlem-historycznym-a-nie-jakas-legenda',
    title: 'Czy Nowy Testament jest wiarygodnym źródłem historycznym, a nie jakąś legendą?',
    shortAnswer: 'Tak, Nowy Testament jest wiarygodny historycznie.',
    datePublished: '2018-10-22',
    isAvailable: true,
  },
  {
    id: 6,
    slug: 'czy-jezus-rzeczywiscie-istnial',
    title: 'Czy Jezus rzeczywiście istniał...?',
    shortAnswer: 'Tak, istnieją liczne dowody historyczne.',
    datePublished: '2018-11-01',
    isAvailable: true,
  },
  {
    id: 7,
    slug: 'czy-to-sprawiedliwe-aby-przestepcy-np-mordercy-otrzymali-darmowe-zbawienie-tak-samo-latwo-jak-dobrzy-ludzie',
    title: 'Czy to sprawiedliwe aby przestępcy, np. mordercy otrzymali darmowe zbawienie tak samo łatwo, jak dobrzy ludzie?',
    shortAnswer: 'Tak, bo wszyscy zgrzeszyli i potrzebują łaski.',
    datePublished: '2018-10-08',
    isAvailable: true,
  },
  {
    id: 8,
    slug: '8-czy-nauka-o-darmowym-zyciu-wiecznym-dzieki-wierze-w-jezusa-chrystusa-jest-zgodna-z-krk',
    title: 'Czy nauka o darmowym życiu wiecznym dzięki wierze w Jezusa Chrystusa, jest zgodna z nauczaniem Kościoła Rzymskokatolickiego?',
    shortAnswer: 'Odpowiedź wymaga głębszej analizy.',
    datePublished: '2018-11-18',
    isAvailable: true,
  },
];

// Contact email
export const contactEmail = 'kontakt@za-darmo.pl';
export const questionsEmail = 'pytania@za-darmo.pl';

// Site info
export const siteInfo = {
  name: 'Za-darmo.pl',
  tagline: 'Odpowiedzi na pytania dotyczące biblii i chrześcijaństwa',
  copyright: '© Copyright 2018 - za-darmo.pl / Wszelkie prawa zastrzeżone.',
};