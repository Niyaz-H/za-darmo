import type { Metadata } from 'next';
import Image from 'next/image';
import { PageWithSidebar } from '@/components/layout';
import { contactEmail, questionsEmail } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'O stronie',
  description: 'Informacje o stronie Za-darmo.pl - serwis poświęcony odpowiedziom na pytania dotyczące Biblii i chrześcijaństwa.',
};

export default function AboutPage() {
  return (
    <PageWithSidebar>
      <article className="prose prose-lg max-w-none">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          O stronie
        </h1>

        {/* Hero image */}
        <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mb-8 not-prose">
          <Image
            src="/images/sidebar-man.jpg"
            alt="O stronie Za-darmo.pl"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
          Kim jesteśmy?
        </h2>

        <p>
          Jesteśmy grupą ludzi, którzy uwierzyli w Jezusa Chrystusa i doświadczyli 
          pewności zbawienia. Zależy nam na tym, żeby jak najwięcej osób mogło 
          poznać prawdę o darmowym zbawieniu, które Bóg oferuje każdemu człowiekowi.
        </p>

        <p>
          Nie reprezentujemy żadnego konkretnego kościoła czy denominacji. 
          Naszym celem jest po prostu przekazywanie dobrej nowiny Ewangelii 
          w sposób jasny i zrozumiały.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
          Dlaczego ta strona?
        </h2>

        <p>
          Wielu ludzi ma pytania dotyczące Biblii, wiary i zbawienia. 
          Niestety, często trudno jest znaleźć proste i jasne odpowiedzi 
          oparte na Piśmie Świętym.
        </p>

        <p>
          Stworzyliśmy tę stronę, aby pomóc ludziom znaleźć odpowiedzi na 
          najważniejsze pytania dotyczące życia wiecznego i relacji z Bogiem. 
          Wszystkie nasze odpowiedzi opieramy na Biblii, cytując odpowiednie 
          fragmenty Pisma Świętego.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
          Nasze przekonania
        </h2>

        <p>
          Wierzymy, że:
        </p>

        <ul className="list-disc list-inside space-y-2 my-4">
          <li>Biblia jest nieomylnym Słowem Bożym</li>
          <li>Jezus Chrystus jest jedyną drogą do zbawienia</li>
          <li>Zbawienie jest darem Bożej łaski, otrzymywanym przez wiarę</li>
          <li>Każdy, kto uwierzy w Jezusa, ma życie wieczne</li>
          <li>Zbawienia nie można utracić</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
          Kontakt
        </h2>

        <p>
          Jeśli masz pytania dotyczące treści na naszej stronie lub chciałbyś 
          się z nami skontaktować, napisz do nas:
        </p>

        <ul className="list-none space-y-2 my-4 not-prose">
          <li>
            <span className="font-medium">Ogólny kontakt: </span>
            <a 
              href={`mailto:${contactEmail}`} 
              className="text-primary hover:underline"
            >
              {contactEmail}
            </a>
          </li>
          <li>
            <span className="font-medium">Pytania biblijne: </span>
            <a 
              href={`mailto:${questionsEmail}`} 
              className="text-primary hover:underline"
            >
              {questionsEmail}
            </a>
          </li>
        </ul>

        <p>
          Możesz również skorzystać z naszego{' '}
          <a href="/kontakt" className="text-primary hover:underline">
            formularza kontaktowego
          </a>.
        </p>
      </article>
    </PageWithSidebar>
  );
}