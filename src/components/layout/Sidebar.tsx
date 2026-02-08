import Image from 'next/image';
import Link from 'next/link';
import { sidebarCards, recentQuestions } from '@/lib/constants';
import { getQuestionUrl } from '@/lib/utils';

export function Sidebar() {
  return (
    <aside className="space-y-8">
      {/* Polecamy section */}
      <section>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Polecamy</h3>
        <div className="space-y-4">
          {sidebarCards.map((card) => (
            <SidebarCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* Najnowsze pytania section */}
      <section>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Najnowsze pytania</h3>
        <RecentQuestionsList questions={recentQuestions} />
      </section>

      {/* Nasz Facebook section */}
      <section>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Nasz facebook</h3>
        <div className="bg-gray-100 rounded-lg p-4 text-center text-gray-500 text-sm">
          <p>Odwiedź nas na Facebooku</p>
          <Link 
            href="https://www.facebook.com/wwwzadarmopl/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline mt-2 inline-block"
          >
            facebook.com/wwwzadarmopl
          </Link>
        </div>
      </section>
    </aside>
  );
}

interface SidebarCardProps {
  id: string;
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
}

function SidebarCard({ title, description, href, imageSrc, imageAlt }: SidebarCardProps) {
  const isDisabled = href === '#';
  
  const cardContent = (
    <>
      {imageSrc && (
        <div className="relative h-32 bg-gray-200">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
      )}
      <div className="p-4">
        <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
          {title}
        </h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </>
  );
  
  if (isDisabled) {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {cardContent}
      </div>
    );
  }
  
  return (
    <Link href={href} className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
      {cardContent}
    </Link>
  );
}

interface RecentQuestionsListProps {
  questions: typeof recentQuestions;
}

function RecentQuestionsList({ questions }: RecentQuestionsListProps) {
  return (
    <ul className="space-y-3">
      {questions.map((question) => (
        <li key={question.id}>
          <Link 
            href={getQuestionUrl(question.slug)}
            className="group block"
          >
            <span className="font-medium text-gray-900 group-hover:text-primary transition-colors text-sm leading-tight block">
              {question.title}
            </span>
            <span className="text-xs text-gray-500 mt-1 block">
              {question.date}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}