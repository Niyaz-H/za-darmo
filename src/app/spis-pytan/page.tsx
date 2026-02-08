import type { Metadata } from 'next';
import Link from 'next/link';
import { PageWithSidebar } from '@/components/layout';
import { allQuestions } from '@/lib/constants';
import { getQuestionUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Spis pytań',
  description: 'Lista pytań dotyczących Biblii, chrześcijaństwa i zbawienia z odpowiedziami opartymi na Piśmie Świętym.',
};

export default function QuestionListPage() {
  return (
    <PageWithSidebar>
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Spis pytań
          </h1>
          <p className="text-gray-600">
            Poniżej znajduje się lista pytań dotyczących Biblii i chrześcijaństwa. 
            Kliknij na pytanie, aby przeczytać odpowiedź.
          </p>
        </header>

        <div className="space-y-4">
          {allQuestions.map((question) => (
            <QuestionListItem
              key={question.id}
              id={question.id}
              title={question.title}
              slug={question.slug}
              isAvailable={question.isAvailable}
            />
          ))}
        </div>
      </div>
    </PageWithSidebar>
  );
}

interface QuestionListItemProps {
  id: number;
  title: string;
  slug: string;
  isAvailable: boolean;
}

function QuestionListItem({ id, title, slug, isAvailable }: QuestionListItemProps) {
  // Question 1 links to homepage anchor
  const href = id === 1 ? '/#scroll1' : getQuestionUrl(slug);
  
  if (!isAvailable) {
    return (
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <div className="flex items-start gap-3">
          <span className="text-gray-400 font-bold text-lg">{id}.</span>
          <div className="flex-1">
            <h2 className="text-gray-400 font-medium">
              {title}
            </h2>
            <span className="text-sm text-gray-400 italic mt-1 inline-block">
              (Odpowiedź wkrótce)
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="block bg-white rounded-lg p-4 border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all group"
    >
      <div className="flex items-start gap-3">
        <span className="text-primary font-bold text-lg">{id}.</span>
        <h2 className="text-gray-900 font-medium group-hover:text-primary transition-colors">
          {title}
        </h2>
      </div>
    </Link>
  );
}