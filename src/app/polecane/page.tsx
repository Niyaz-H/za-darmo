import { Metadata } from 'next';
import { PageWithSidebar } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Polecane książki, filmy i strony internetowe | Za-darmo.pl',
  description: 'Polecane materiały chrześcijańskie: książki, filmy, dokumenty i strony internetowe pomocne w studiowaniu Pisma Świętego.',
};

export default function PolecamePage() {
  return (
    <PageWithSidebar>
      <article className="prose-content">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Książki, filmy, strony internetowe
        </h1>

        <p className="text-gray-700 mb-8">
          Poniżej znajdziesz polecane materiały, które mogą pomóc w pogłębieniu wiedzy o Piśmie Świętym i chrześcijaństwie.
        </p>

        {/* Książki */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Książki</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Biblia Warszawska</h3>
              <p className="text-sm text-gray-700">
                Wierny przekład Pisma Świętego z języków oryginalnych, ceniony za dokładność i klarowność.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Biblia Gdańska</h3>
              <p className="text-sm text-gray-700">
                Klasyczny polski przekład Biblii, znany z pięknego języka i wierności tekstom oryginalnym.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">&quot;Życie wieczne za darmo&quot; - Bob Wilkin</h3>
              <p className="text-sm text-gray-700">
                Książka wyjaśniająca biblijną naukę o darmowym zbawieniu przez wiarę w Jezusa Chrystusa.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">&quot;Pewność zbawienia&quot; - John MacArthur</h3>
              <p className="text-sm text-gray-700">
                Studium biblijne na temat pewności życia wiecznego i fundamentów wiary chrześcijańskiej.
              </p>
            </div>
          </div>
        </section>

        {/* Filmy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎬 Filmy i dokumenty</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">&quot;Męka Pańska&quot; (The Passion of the Christ)</h3>
              <p className="text-sm text-gray-700">
                Film Mela Gibsona przedstawiający ostatnie godziny życia Jezusa Chrystusa.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">&quot;Jezus&quot; (Jesus Film)</h3>
              <p className="text-sm text-gray-700">
                Klasyczny film o życiu Jezusa oparty na Ewangelii według św. Łukasza.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">&quot;Przypadek Chrystusa&quot; (The Case for Christ)</h3>
              <p className="text-sm text-gray-700">
                Film dokumentalny o dziennikarzu śledczym badającym historyczną wiarygodność Jezusa.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">&quot;Bóg nie umarł&quot; (God&apos;s Not Dead)</h3>
              <p className="text-sm text-gray-700">
                Film o obronie wiary chrześcijańskiej w świecie współczesnym.
              </p>
            </div>
          </div>
        </section>

        {/* Strony internetowe */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🌐 Strony internetowe</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                <a 
                  href="https://www.biblia.info.pl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Biblia.info.pl
                </a>
              </h3>
              <p className="text-sm text-gray-700">
                Pismo Święte online w różnych przekładach z narzędziami do studiowania.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                <a 
                  href="https://www.biblehub.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  BibleHub.com
                </a>
              </h3>
              <p className="text-sm text-gray-700">
                Kompleksowe narzędzie do studiowania Biblii z komentarzami i tekstami w językach oryginalnych.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                <a 
                  href="https://www.gotquestions.org/Polski/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GotQuestions.org (Polski)
                </a>
              </h3>
              <p className="text-sm text-gray-700">
                Odpowiedzi na pytania biblijne i teologiczne w języku polskim.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                <a 
                  href="https://www.youtube.com/channel/UCou-30BfBQlFnXhpqUSs2kA/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Za-darmo.pl na YouTube
                </a>
              </h3>
              <p className="text-sm text-gray-700">
                Nasz kanał YouTube z nauczaniem biblijnym i odpowiedziami na pytania.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-primary/10 rounded-lg p-6 mt-8">
          <p className="text-sm text-gray-700">
            <strong>Uwaga:</strong> Polecane materiały mają charakter pomocniczy. Zawsze sprawdzaj wszystko z Pismem Świętym, 
            które jest ostatecznym autorytetem w sprawach wiary i życia chrześcijańskiego.
          </p>
        </div>
      </article>
    </PageWithSidebar>
  );
}
