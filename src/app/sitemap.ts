import type { MetadataRoute } from 'next';
import { allQuestions } from '@/lib/constants';

const BASE_URL = 'https://za-darmo.pl';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/spis-pytan`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/o-stronie`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/jak-czytac-pismo-swiete`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic question pages - only include available questions with slugs
  const questionPages: MetadataRoute.Sitemap = allQuestions
    .filter((question) => question.isAvailable && question.slug)
    .map((question) => ({
      url: `${BASE_URL}/pytania/${question.slug}`,
      lastModified: new Date(question.datePublished),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  return [...staticPages, ...questionPages];
}
