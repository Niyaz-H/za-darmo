import Link from 'next/link';
import { PageWithSidebar } from '@/components/layout';

export default function NotFound() {
  return (
    <PageWithSidebar>
      <div className="text-center py-16">
        {/* 404 Icon */}
        <div className="mb-8">
          <span className="text-8xl font-bold text-primary/30">404</span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl font-bold text-text mb-4">
          Strona nie znaleziona
        </h1>

        {/* Friendly message */}
        <p className="text-text-light text-lg mb-8 max-w-md mx-auto">
          Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
          Sprawdź czy adres jest poprawny lub wróć na stronę główną.
        </p>

        {/* Back to homepage link */}
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Wróć na stronę główną
        </Link>

        {/* Additional helpful links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-text-light mb-4">Może zainteresują Cię te strony:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/spis-pytan"
              className="text-primary hover:text-primary-dark hover:underline"
            >
              Spis pytań
            </Link>
            <span className="text-border">•</span>
            <Link
              href="/jak-czytac-pismo-swiete"
              className="text-primary hover:text-primary-dark hover:underline"
            >
              Jak czytać Pismo Święte
            </Link>
            <span className="text-border">•</span>
            <Link
              href="/kontakt"
              className="text-primary hover:text-primary-dark hover:underline"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </PageWithSidebar>
  );
}
