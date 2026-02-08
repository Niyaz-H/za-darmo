import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageWithSidebar } from '@/components/layout';
import { ExpandableSection } from '@/components/ui';
import { allQuestions } from '@/lib/constants';
import { getQuestionUrl } from '@/lib/utils';
import { questionContent } from '@/lib/question-content';

interface QuestionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: QuestionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const question = allQuestions.find(q => q.slug === slug);
  
  if (!question) {
    return { title: 'Pytanie nie znalezione' };
  }
  
  return {
    title: question.title,
    description: question.shortAnswer,
  };
}

export async function generateStaticParams() {
  return allQuestions
    .filter(q => q.isAvailable && q.slug)
    .map(q => ({ slug: q.slug }));
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const { slug } = await params;
  const question = allQuestions.find(q => q.slug === slug);
  
  if (!question || !question.isAvailable) {
    notFound();
  }

  const content = questionContent[question.id];
  
  // Find previous and next questions
  const availableQuestions = allQuestions.filter(q => q.isAvailable && q.slug);
  const currentIndex = availableQuestions.findIndex(q => q.id === question.id);
  const prevQuestion = currentIndex > 0 ? availableQuestions[currentIndex - 1] : null;
  const nextQuestion = currentIndex < availableQuestions.length - 1 ? availableQuestions[currentIndex + 1] : null;

  return (
    <PageWithSidebar>
      <article className="space-y-6">
        {/* Question Title */}
        <header>
          <p className="text-sm text-gray-500 mb-2">Pytanie {question.id}</p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            {question.title}
          </h1>
          <p className="text-sm text-gray-500 mt-3">
            Opublikowano: {new Date(question.datePublished).toLocaleDateString('pl-PL', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </header>

        {/* Short Answer */}
        <div className="bg-primary/10 rounded-lg p-6">
          <h2 className="font-semibold text-gray-900 mb-2">Krótka odpowiedź:</h2>
          <p className="text-gray-700">{question.shortAnswer}</p>
        </div>

        {/* Full Content with Expandable Sections */}
        {content && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Rozwinięcie odpowiedzi</h2>
            
            {content.sections.map((section, index) => (
              <ExpandableSection
                key={index}
                title={section.title}
                defaultOpen={index === 0}
              >
                <div
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </ExpandableSection>
            ))}
          </div>
        )}

        {/* Bible Verses */}
        {content?.verses && content.verses.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Kluczowe wersety</h2>
            {content.verses.map((verse, index) => (
              <blockquote 
                key={index}
                className="border-l-4 border-primary/50 pl-4 py-3 pr-4 bg-blue-50/50 rounded-r-lg"
              >
                <p className="italic text-gray-700 mb-2">&ldquo;{verse.text}&rdquo;</p>
                <cite className="text-sm text-gray-500 not-italic">
                  — {verse.reference} ({verse.translation})
                </cite>
              </blockquote>
            ))}
          </div>
        )}

        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-gray-200">
          {prevQuestion ? (
            <Link 
              href={getQuestionUrl(prevQuestion.slug)}
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Poprzednie pytanie</span>
            </Link>
          ) : <div />}
          
          {nextQuestion ? (
            <Link 
              href={getQuestionUrl(nextQuestion.slug)}
              className="flex items-center gap-2 text-primary hover:underline sm:text-right"
            >
              <span className="text-sm">Następne pytanie</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : <div />}
        </nav>

        {/* Back to Questions */}
        <div className="text-center pt-4">
          <Link 
            href="/spis-pytan"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            ← Wróć do spisu pytań
          </Link>
        </div>
      </article>
    </PageWithSidebar>
  );
}