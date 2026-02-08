import type { Metadata } from 'next';
import Image from 'next/image';
import { PageWithSidebar } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Jak czytać Pismo Święte?',
  description: 'Sprawdzone wskazówki pomocne przy samodzielnym studiowaniu Pisma Świętego.',
};

export default function HowToReadBiblePage() {
  return (
    <PageWithSidebar>
      <article className="prose prose-lg max-w-none">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Jak czytać Pismo Święte?
        </h1>

        {/* Hero image */}
        <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mb-8 not-prose">
          <Image
            src="/images/sidebar-book.jpg"
            alt="Jak czytać Pismo Święte"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>

        <p className="lead">
          Przedstawiamy sprawdzone wskazówki, pomocne przy samodzielnym 
          studiowaniu Pisma Świętego. Zachęcamy do regularnego czytania Biblii!
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
          1. Zacznij od modlitwy
        </h2>

        <p>
          Przed rozpoczęciem czytania Biblii, poproś Boga o mądrość i zrozumienie. 
          Duch Święty pomoże Ci zrozumieć to, co czytasz.
        </p>

        <blockquote className="border-l-4 border-primary/50 pl-4 my-6 bg-blue-50/50 py-3 pr-4 rounded-r-lg">
          <p className="italic text-gray-700 mb-2">
            &ldquo;Jeśli zaś komuś z was brakuje mądrości, niech prosi o nią Boga, 
            który daje wszystkim chętnie i nie wymawiając; a będzie mu dana.&rdquo;
          </p>
          <cite className="text-sm text-gray-500 not-italic">
            — List Jakuba 1:5 (BT)
          </cite>
        </blockquote>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
          2. Wybierz odpowiednie miejsce do rozpoczęcia
        </h2>

        <p>
          Jeśli jesteś nowy w czytaniu Biblii, zalecamy zacząć od:
        </p>

        <ul className="list-disc list-inside space-y-2 my-4">
          <li><strong>Ewangelia według św. Jana</strong> - opisuje życie i nauczanie Jezusa</li>
          <li><strong>List do Rzymian</strong> - wyjaśnia doktrynę zbawienia</li>
          <li><strong>Ewangelia według św. Marka</strong> - krótki, dynamiczny opis życia Jezusa</li>
          <li><strong>Psalmy</strong> - modlitwy i pieśni uwielbienia</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
          3. Czytaj systematycznie
        </h2>

        <p>
          Lepiej czytać codziennie po jednym rozdziale niż raz w tygodniu całą księgę. 
          Systematyczność pomoże Ci lepiej zapamiętać i zrozumieć treść.
        </p>

        <p>
          Ustal sobie konkretny czas na czytanie - np. rano przed pracą lub wieczorem 
          przed snem. Regularność jest kluczem do sukcesu.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
          4. Zadawaj pytania podczas czytania
        </h2>

        <p>
          Przy każdym fragmencie zastanów się:
        </p>

        <ul className="list-disc list-inside space-y-2 my-4">
          <li><strong>Co</strong> ten fragment mówi o Bogu?</li>
          <li><strong>Co</strong> mówi o człowieku?</li>
          <li><strong>Jak</strong> mogę zastosować to w swoim życiu?</li>
          <li><strong>Czy jest</strong> tutaj jakieś przykazanie do wypełnienia?</li>
          <li><strong>Czy jest</strong> tutaj jakaś obietnica do przyjęcia?</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
          5. Rób notatki
        </h2>

        <p>
          Prowadź dziennik biblijny. Zapisuj:
        </p>

        <ul className="list-disc list-inside space-y-2 my-4">
          <li>Fragmenty, które szczególnie do Ciebie przemówiły</li>
          <li>Pytania, które się pojawiły</li>
          <li>Wnioski i zastosowania</li>
          <li>Modlitwy wynikające z czytania</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
          6. Porównuj przekłady
        </h2>

        <p>
          Pomocne jest czytanie tego samego fragmentu w różnych przekładach. 
          W Polsce dostępne są m.in.:
        </p>

        <ul className="list-disc list-inside space-y-2 my-4">
          <li><strong>Biblia Tysiąclecia (BT)</strong> - najpopularniejszy przekład katolicki</li>
          <li><strong>Biblia Warszawska (BW)</strong> - przekład protestancki</li>
          <li><strong>Biblia Paulistów</strong> - nowoczesny przekład katolicki</li>
          <li><strong>Uwspółcześniona Biblia Gdańska (UBG)</strong> - uwspółcześniony przekład</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
          7. Studiuj kontekst
        </h2>

        <p>
          Zawsze czytaj fragment w szerszym kontekście. Nie wyrywaj pojedynczych 
          wersetów z kontekstu - zobacz, co jest napisane przed i po danym fragmencie.
        </p>

        <p>
          Zastanów się również:
        </p>

        <ul className="list-disc list-inside space-y-2 my-4">
          <li>Kto jest autorem księgi?</li>
          <li>Do kogo była adresowana?</li>
          <li>W jakich okolicznościach została napisana?</li>
          <li>Jaki był cel napisania?</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
          8. Szukaj pomocy
        </h2>

        <p>
          Nie bój się korzystać z pomocy:
        </p>

        <ul className="list-disc list-inside space-y-2 my-4">
          <li>Komentarze biblijne</li>
          <li>Słowniki biblijne</li>
          <li>Konkordancje</li>
          <li>Mapy biblijne</li>
          <li>Rozmowy z innymi wierzącymi</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
          9. Stosuj to, czego się uczysz
        </h2>

        <p>
          Celem czytania Biblii nie jest tylko zdobycie wiedzy, ale przemiana życia. 
          Staraj się stosować to, czego się uczysz.
        </p>

        <blockquote className="border-l-4 border-primary/50 pl-4 my-6 bg-blue-50/50 py-3 pr-4 rounded-r-lg">
          <p className="italic text-gray-700 mb-2">
            &ldquo;Wprowadzajcie zaś słowo w czyn, a nie bądźcie tylko słuchaczami 
            oszukującymi samych siebie.&rdquo;
          </p>
          <cite className="text-sm text-gray-500 not-italic">
            — List Jakuba 1:22 (BT)
          </cite>
        </blockquote>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
          10. Bądź cierpliwy
        </h2>

        <p>
          Zrozumienie Biblii wymaga czasu. Nie zniechęcaj się, jeśli na początku 
          nie wszystko jest jasne. Z czasem, wraz z regularnym czytaniem i modlitwą, 
          będziesz rozumiał coraz więcej.
        </p>

        <blockquote className="border-l-4 border-primary/50 pl-4 my-6 bg-blue-50/50 py-3 pr-4 rounded-r-lg">
          <p className="italic text-gray-700 mb-2">
            &ldquo;Słowo Twoje jest lampą dla moich stóp i światłem na mojej ścieżce.&rdquo;
          </p>
          <cite className="text-sm text-gray-500 not-italic">
            — Psalm 119:105 (BW)
          </cite>
        </blockquote>

        <div className="bg-primary/10 rounded-lg p-6 mt-8 not-prose">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Życzymy błogosławionego czytania!
          </h3>
          <p className="text-gray-700">
            Pamiętaj, że Biblia to nie zwykła książka - to żywe Słowo Boże, 
            które ma moc zmieniać życie. Niech Bóg błogosławi Twoje studiowanie 
            Pisma Świętego!
          </p>
        </div>
      </article>
    </PageWithSidebar>
  );
}