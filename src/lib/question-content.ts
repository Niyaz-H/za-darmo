import type { BibleVerse } from '@/types';

interface QuestionSection {
  title: string;
  content: string;
}

interface QuestionContent {
  slug: string;
  title: string;
  shortAnswer: string;
  sections: QuestionSection[];
  verses: BibleVerse[];
  relatedQuestions: string[];
}

export const questionContent: Record<number, QuestionContent> = {
  // Question 2: Czy zbawienie naprawdę jest całkowicie za darmo?
  2: {
    slug: 'czy-zbawienie-naprawde-jest-calkowicie-za-darmo',
    title: 'Czy zbawienie naprawdę jest całkowicie za darmo?',
    shortAnswer: 'Tak, zbawienie jest całkowicie darmowym darem od Boga. Nie wymaga żadnych uczynków, wysiłku ani zasług z naszej strony – tylko wiary w Jezusa Chrystusa.',
    sections: [
      {
        title: 'Zbawienie jako dar łaski',
        content: `
          <p>Biblia konsekwentnie przedstawia zbawienie jako <strong>absolutnie darmowy dar</strong>
          od Boga. Apostoł Paweł napisał w Liście do Efezjan 2:8-9: <em>"Albowiem łaską zbawieni
          jesteście przez wiarę, i to nie z was: Boży to dar; nie z uczynków, aby się kto nie chlubił."</em></p>
          
          <p>Słowo "dar" (gr. <em>dōrea</em>) w Nowym Testamencie oznacza coś, co jest
          <strong>całkowicie darmowe i niezasłużone</strong>. Nie można go kupić, wypracować
          ani na niego zasłużyć. Bóg daje zbawienie z czystej łaski, nie dlatego, że jesteśmy
          tego godni, ale dlatego, że On jest miłosierny.</p>
          
          <p>Życie wieczne jest <strong>obecnym posiadaniem</strong> otrzymywanym w momencie
          wiary, bez żadnych warunków ani przed, ani po tej transakcji. To nie jest nagroda
          za nasze zasługi, ale dar Bożej miłości.</p>
        `,
      },
      {
        title: 'Wiara nie jest uczynkiem',
        content: `
          <p>Niektórzy mogą zapytać: "Czy wiara nie jest formą uczynku?" Biblia jasno
          odpowiada, że <strong>wiara jest przeciwieństwem uczynków</strong>. Apostoł Paweł
          wyjaśnia w Liście do Rzymian 4:5:</p>
          
          <p><em>"Temu zaś, który nie spełnia uczynków, ale wierzy w tego, który usprawiedliwia
          bezbożnego, wiarę jego poczytuje mu się za sprawiedliwość."</em></p>
          
          <p>Wiara jest <strong>pasywnym przyjęciem</strong> daru Bożego, nie aktywnym
          działaniem zasługującym na nagrodę. To jak wyciągnięcie ręki, aby przyjąć prezent –
          sam gest przyjęcia nie czyni nas godnymi prezentu.</p>
          
          <p>Wiara jest "naczyniem", przez które przyjmujemy darmową ofertę Boga.
          Nie dodaje ona nic do wartości zbawienia – cała wartość pochodzi z ofiary Chrystusa.</p>
        `,
      },
      {
        title: 'Cena została zapłacona przez Chrystusa',
        content: `
          <p>Zbawienie jest darmowe dla nas, ale <strong>nie było darmowe dla Boga</strong>.
          Jezus Chrystus zapłacił najwyższą cenę – oddał swoje życie na krzyżu jako
          <strong>doskonałą ofiarę za nasze grzechy</strong>.</p>
          
          <p>W Liście do Rzymian 6:23 czytamy: <em>"Albowiem zapłatą za grzech jest śmierć,
          lecz darem łaski Bożej jest żywot wieczny w Chrystusie Jezusie, Panu naszym."</em></p>
          
          <p>Krew Jezusa była <strong>jednorazową, kompletną płatnością</strong> za dług
          grzechu, którego ludzie byli całkowicie niezdolni spłacić sami. Gdy Jezus na krzyżu
          powiedział "Wykonało się" (Jan 19:30), oznaczało to, że dzieło zbawienia zostało
          <strong>w pełni ukończone</strong>.</p>
          
          <p>Nie możemy nic dodać do tego, co Chrystus już uczynił. Próba dodania naszych
          uczynków do Jego ofiary byłaby obrazą dla doskonałości Jego dzieła.</p>
        `,
      },
      {
        title: 'Łaska wyklucza ludzkie zasługi',
        content: `
          <p>Biblia wyraźnie rozróżnia między systemem łaski a systemem uczynków.
          Apostoł Paweł pisze w Liście do Rzymian 11:6:</p>
          
          <p><em>"A jeśli z łaski, to już nie z uczynków, gdyż inaczej łaska nie byłaby
          już łaską."</em></p>
          
          <p>Te dwa systemy są <strong>wzajemnie wykluczające się</strong>. Jeśli zbawienie
          zależy choćby w najmniejszym stopniu od naszych uczynków, to nie jest już darem
          łaski. Jeśli jest darem łaski, to nie może zależeć od uczynków.</p>
          
          <p>Bóg działa w systemie łaski, który <strong>udziela błogosławieństw zanim
          pozwoli człowiekowi cokolwiek dla Niego zrobić</strong>. To całkowicie odwraca
          ludzki system zasług i nagród.</p>
        `,
      },
      {
        title: 'Dobre uczynki są rezultatem, nie warunkiem zbawienia',
        content: `
          <p>Ważne jest zrozumienie różnicy między <strong>usprawiedliwieniem</strong>
          (otrzymaniem zbawienia) a <strong>uświęceniem</strong> (wzrostem duchowym).
          Usprawiedliwienie następuje przez samą wiarę, natomiast uświęcenie to proces
          moralnego wzrostu, który następuje po zbawieniu.</p>
          
          <p>Apostoł Paweł kontynuuje w Efezjan 2:10: <em>"Jesteśmy bowiem dziełem jego,
          stworzeni w Chrystusie Jezusie do dobrych uczynków, które Bóg przedtem przygotował,
          abyśmy w nich chodzili."</em></p>
          
          <p>Dobre uczynki są <strong>owocem zbawienia, nie korzeniem</strong>. Robimy
          dobre uczynki nie po to, aby być zbawionymi, ale dlatego, że już jesteśmy zbawieni.
          Są one naturalną odpowiedzią wdzięczności za otrzymany dar, nie warunkiem jego
          otrzymania.</p>
          
          <p>Wysiłek jest potrzebny do uczniowstwa i zdobywania przyszłych nagród,
          ale <strong>nigdy nie jest warunkiem otrzymania życia wiecznego</strong>.</p>
        `,
      },
    ],
    verses: [
      {
        reference: 'Efezjan 2:8-9',
        text: 'Albowiem łaską zbawieni jesteście przez wiarę, i to nie z was: Boży to dar; nie z uczynków, aby się kto nie chlubił.',
        translation: 'BW',
      },
      {
        reference: 'Rzymian 6:23',
        text: 'Albowiem zapłatą za grzech jest śmierć, lecz darem łaski Bożej jest żywot wieczny w Chrystusie Jezusie, Panu naszym.',
        translation: 'BW',
      },
      {
        reference: 'Rzymian 3:24',
        text: 'I są usprawiedliwieni darmo, z łaski jego, przez odkupienie w Chrystusie Jezusie.',
        translation: 'BW',
      },
      {
        reference: 'Rzymian 4:5',
        text: 'Temu zaś, który nie spełnia uczynków, ale wierzy w tego, który usprawiedliwia bezbożnego, wiarę jego poczytuje mu się za sprawiedliwość.',
        translation: 'BW',
      },
      {
        reference: 'Tytusa 3:5',
        text: 'Zbawił nas nie dla uczynków sprawiedliwości, które my czyniliśmy, lecz według miłosierdzia swego przez kąpiel odrodzenia i odnowienie Ducha Świętego.',
        translation: 'BW',
      },
      {
        reference: 'Jan 4:10',
        text: 'Odpowiedział Jezus i rzekł jej: Gdybyś znała dar Boży i wiedziała, kto to jest, który ci mówi: Daj mi pić, ty byś go prosiła, a dałby ci wody żywej.',
        translation: 'BW',
      },
      {
        reference: 'Objawienie 22:17',
        text: 'A Duch i oblubienica mówią: Przyjdź! A kto słyszy, niech powie: Przyjdź! A kto pragnie, niech przyjdzie, a kto chce, niech bierze wodę żywota darmo.',
        translation: 'BW',
      },
    ],
    relatedQuestions: [
      'czy-mozna-utracic-zycie-wieczne',
      'jak-rozpoznac-czy-trafilem-na-prawdziwe-nauczanie-odnosnie-zbawienia',
    ],
  },

  // Question 3: Czy można utracić życie wieczne?
  3: {
    slug: 'czy-mozna-utracic-zycie-wieczne',
    title: 'Czy można utracić życie wieczne?',
    shortAnswer: 'Nie, życie wieczne jest darem Bożym, którego nie można utracić. Jezus obiecał, że ci, którzy w Niego wierzą, nigdy nie zginą.',
    sections: [
      {
        title: 'Co mówi Biblia o życiu wiecznym?',
        content: `
          <p>Biblia jasno uczy, że życie wieczne otrzymujemy jako dar od Boga przez wiarę w Jezusa Chrystusa. 
          Jest to nieprzerwane życie w obecności Boga, które zaczyna się w momencie przyjęcia zbawienia 
          i trwa bez końca.</p>
          
          <p>Kluczowe jest zrozumienie, że mówiąc "życie wieczne", Biblia nie ma na myśli jedynie 
          długości życia, ale przede wszystkim jego jakość – życie w relacji z Bogiem, wolne od 
          grzechu i śmierci. Słowo "wieczne" (gr. <em>aionios</em>) oznacza coś, co nie ma końca.</p>
        `,
      },
      {
        title: 'Obietnice Jezusa dotyczące bezpieczeństwa wierzących',
        content: `
          <p>Jezus wielokrotnie zapewniał swoich uczniów o bezpieczeństwie ich zbawienia. 
          W Ewangelii Jana 10:28-29 powiedział: <em>"Ja daję im życie wieczne i nie zginą na wieki, 
          i nikt nie wyrwie ich z ręki mojej."</em></p>
          
          <p>Te słowa są niezwykle mocne i jednoznaczne:</p>
          <ul>
            <li><strong>"Ja daję"</strong> – zbawienie jest darem od Jezusa, nie naszą zasługą</li>
            <li><strong>"życie wieczne"</strong> – nie tymczasowe, ale wieczne</li>
            <li><strong>"nie zginą na wieki"</strong> – absolutna pewność</li>
            <li><strong>"nikt nie wyrwie"</strong> – żadna siła nie może nas odłączyć od Chrystusa</li>
          </ul>
        `,
      },
      {
        title: 'Zbawienie opiera się na dziele Jezusa, nie na naszych uczynkach',
        content: `
          <p>Jeśli zbawienie zależy od tego, co zrobił Jezus na krzyżu, a nie od naszych zasług, 
          to logicznie nie możemy go stracić przez nasze przewinienia. Apostoł Paweł napisał 
          w Liście do Efezjan 2:8-9: <em>"Albowiem łaską zbawieni jesteście przez wiarę, 
          i to nie z was: Boży to dar; nie z uczynków, aby się kto nie chlubił."</em></p>
          
          <p>Gdyby utrzymanie zbawienia zależało od naszych uczynków lub wytrwałości, 
          to w rzeczywistości zbawienie byłoby nagrodą za nasze zasługi, a nie darem łaski. 
          Ale Biblia konsekwentnie uczy, że zbawienie jest całkowicie darem Bożej łaski.</p>
        `,
      },
      {
        title: 'Duch Święty jako gwarant zbawienia',
        content: `
          <p>Biblia uczy, że w momencie uwierzenia w Jezusa Chrystusa, Duch Święty zamieszkuje 
          w wierzącym i jest "pieczęcią" oraz "zadatkiem" naszego dziedzictwa. 
          Apostoł Paweł pisze w Liście do Efezjan 1:13-14:</p>
          
          <p><em>"W nim i wy, usłyszawszy słowo prawdy, ewangelię zbawienia waszego, 
          i uwierzywszy w niego, zostaliście zapieczętowani obiecanym Duchem Świętym, 
          który jest rękojmią dziedzictwa naszego."</em></p>
          
          <p>Pieczęć w starożytności oznaczała własność i ochronę. Bóg "zapieczętował" nas 
          Duchem Świętym jako znak, że należymy do Niego i jesteśmy bezpieczni w Jego rękach.</p>
        `,
      },
      {
        title: 'Nic nie może nas odłączyć od miłości Bożej',
        content: `
          <p>Apostoł Paweł w Liście do Rzymian 8:38-39 daje nam jedno z najpotężniejszych 
          zapewnień w całej Biblii:</p>
          
          <p><em>"Albowiem jestem tego pewien, że ani śmierć, ani życie, ani aniołowie, 
          ani potęgi niebieskie, ani teraźniejszość, ani przyszłość, ani moce, ani wysokość, 
          ani głębokość, ani żadne inne stworzenie nie zdoła nas odłączyć od miłości Bożej, 
          która jest w Chrystusie Jezusie, Panu naszym."</em></p>
          
          <p>Ta lista obejmuje dosłownie wszystko – żadna siła we wszechświecie nie może 
          odłączyć wierzącego od miłości Bożej w Chrystusie.</p>
        `,
      },
    ],
    verses: [
      {
        reference: 'Jan 10:28-29',
        text: 'Ja daję im życie wieczne i nie zginą na wieki, i nikt nie wyrwie ich z ręki mojej. Ojciec mój, który mi je dał, jest większy nad wszystkich i nikt nie może wydrzeć ich z ręki Ojca.',
        translation: 'BW',
      },
      {
        reference: 'Efezjan 2:8-9',
        text: 'Albowiem łaską zbawieni jesteście przez wiarę, i to nie z was: Boży to dar; nie z uczynków, aby się kto nie chlubił.',
        translation: 'BW',
      },
      {
        reference: 'Efezjan 1:13-14',
        text: 'W nim i wy, usłyszawszy słowo prawdy, ewangelię zbawienia waszego, i uwierzywszy w niego, zostaliście zapieczętowani obiecanym Duchem Świętym, który jest rękojmią dziedzictwa naszego, aż nastąpi odkupienie własności Bożej, ku uwielbieniu chwały jego.',
        translation: 'BW',
      },
      {
        reference: 'Rzymian 8:38-39',
        text: 'Albowiem jestem tego pewien, że ani śmierć, ani życie, ani aniołowie, ani potęgi niebieskie, ani teraźniejszość, ani przyszłość, ani moce, ani wysokość, ani głębokość, ani żadne inne stworzenie nie zdoła nas odłączyć od miłości Bożej, która jest w Chrystusie Jezusie, Panu naszym.',
        translation: 'BW',
      },
      {
        reference: 'Jan 6:37-40',
        text: 'Wszystko, co mi daje Ojciec, przyjdzie do mnie, a tego, który do mnie przychodzi, nie wyrzucę precz; zstąpiłem bowiem z nieba, nie aby wypełniać wolę swoją, lecz wolę tego, który mnie posłał. A to jest wola tego, który mnie posłał, abym z tego wszystkiego, co mi dał, nic nie stracił, lecz wskrzesił to w dniu ostatecznym.',
        translation: 'BW',
      },
      {
        reference: 'Filipian 1:6',
        text: 'Mając tę pewność, że Ten, który rozpoczął w was dobre dzieło, będzie je też pełnił aż do dnia Chrystusa Jezusa.',
        translation: 'BW',
      },
    ],
    relatedQuestions: [
      'jak-rozpoznac-czy-trafilem-na-prawdziwe-nauczanie-odnosnie-zbawienia',
      'czy-to-sprawiedliwe-aby-przestepcy-np-mordercy-otrzymali-darmowe-zbawienie-tak-samo-latwo-jak-dobrzy-ludzie',
    ],
  },

  // Question 4: Jak rozpoznać prawdziwe nauczanie?
  4: {
    slug: 'jak-rozpoznac-czy-trafilem-na-prawdziwe-nauczanie-odnosnie-zbawienia',
    title: 'Jak rozpoznać czy trafiłem na prawdziwe nauczanie odnośnie zbawienia?',
    shortAnswer: 'Prawdziwe nauczanie o zbawieniu musi być zgodne z Pismem Świętym. Kluczowe jest porównywanie każdego nauczania z Biblią.',
    sections: [
      {
        title: 'Pismo Święte jako ostateczny autorytet',
        content: `
          <p>Biblia jest jedynym nieomylnym źródłem prawdy o Bogu i zbawieniu. Apostoł Paweł
          napisał do Tymoteusza: <em>"Całe Pismo przez Boga jest natchnione i pożyteczne
          do nauki, do wykrywania błędów, do poprawy, do wychowywania w sprawiedliwości"</em>
          (2 Tymoteusza 3:16).</p>
          
          <p>Każde nauczanie, tradycja czy objawienie musi być weryfikowane przez Pismo Święte.
          Jeśli coś jest sprzeczne z Biblią, należy to odrzucić, niezależnie od tego,
          kto to głosi.</p>
        `,
      },
      {
        title: 'Przykład Berejczyków',
        content: `
          <p>W Dziejach Apostolskich 17:11 czytamy o mieszkańcach Berei, którzy są dla nas
          wzorem właściwego podejścia do nauczania:</p>
          
          <p><em>"Ci byli szlachetniejsi od Tesaloniczan; przyjęli słowo z całą gotowością
          i codziennie badali Pisma, czy tak się rzeczy mają."</em></p>
          
          <p>Berejczycy nie przyjmowali ślepo nawet nauczania apostoła Pawła – sprawdzali
          wszystko w Pismach. Tak samo powinniśmy postępować my, badając każde nauczanie
          w świetle Biblii.</p>
        `,
      },
      {
        title: 'Kluczowe pytania do weryfikacji nauczania',
        content: `
          <p>Sprawdzając jakiekolwiek nauczanie o zbawieniu, zadaj sobie następujące pytania:</p>
          
          <ul>
            <li><strong>Czy zbawienie jest przedstawiane jako dar łaski, czy jako nagroda za uczynki?</strong>
            Biblia uczy, że zbawienie jest darem (Efezjan 2:8-9).</li>
            
            <li><strong>Czy Jezus Chrystus jest jedyną drogą do zbawienia?</strong>
            Jezus powiedział: "Ja jestem drogą, prawdą i życiem" (Jan 14:6).</li>
            
            <li><strong>Czy wiara jest jedynym warunkiem zbawienia?</strong>
            "Uwierz w Pana Jezusa, a będziesz zbawiony" (Dzieje 16:31).</li>
            
            <li><strong>Czy nauczanie dodaje coś do dzieła Chrystusa?</strong>
            Jezus na krzyżu powiedział "Wykonało się" (Jan 19:30).</li>
          </ul>
        `,
      },
      {
        title: 'Ostrzeżenia przed fałszywymi nauczycielami',
        content: `
          <p>Biblia wielokrotnie ostrzega przed fałszywymi nauczycielami. Apostoł Paweł
          pisał do Galacjan:</p>
          
          <p><em>"Ale choćbyśmy nawet my albo anioł z nieba zwiastował wam ewangelię
          odmienną od tej, którą wam zwiastowaliśmy, niech będzie przeklęty!"</em>
          (Galacjan 1:8)</p>
          
          <p>To bardzo mocne słowa pokazujące, jak ważne jest trzymanie się prawdziwej
          Ewangelii. Nawet jeśli ktoś wydaje się być autorytetem duchowym, jego nauczanie
          musi być zgodne z Pismem Świętym.</p>
        `,
      },
      {
        title: 'Prostota prawdziwej Ewangelii',
        content: `
          <p>Prawdziwa Ewangelia jest prosta i zrozumiała. Apostoł Paweł podsumował ją
          w 1 Liście do Koryntian 15:3-4:</p>
          
          <p><em>"Chrystus umarł za grzechy nasze według Pism i został pogrzebany,
          i dnia trzeciego został z martwych wzbudzony według Pism."</em></p>
          
          <p>Zbawienie polega na uwierzeniu w tę prostą prawdę – że Jezus umarł za nasze
          grzechy i zmartwychwstał. Każde nauczanie, które komplikuje tę prostą wiadomość
          lub dodaje do niej dodatkowe wymagania, powinno być traktowane z ostrożnością.</p>
        `,
      },
    ],
    verses: [
      {
        reference: '2 Tymoteusza 3:16-17',
        text: 'Całe Pismo przez Boga jest natchnione i pożyteczne do nauki, do wykrywania błędów, do poprawy, do wychowywania w sprawiedliwości, aby człowiek Boży był doskonały, do wszelkiego dobrego dzieła przygotowany.',
        translation: 'BW',
      },
      {
        reference: 'Dzieje Apostolskie 17:11',
        text: 'Ci byli szlachetniejsi od Tesaloniczan; przyjęli słowo z całą gotowością i codziennie badali Pisma, czy tak się rzeczy mają.',
        translation: 'BW',
      },
      {
        reference: 'Galacjan 1:8-9',
        text: 'Ale choćbyśmy nawet my albo anioł z nieba zwiastował wam ewangelię odmienną od tej, którą wam zwiastowaliśmy, niech będzie przeklęty! Jak powiedzieliśmy przedtem, tak i teraz znowu mówię: Jeśli wam ktoś zwiastuje ewangelię odmienną od tej, którą przyjęliście, niech będzie przeklęty!',
        translation: 'BW',
      },
      {
        reference: 'Jan 14:6',
        text: 'Odpowiedział mu Jezus: Ja jestem droga i prawda, i żywot, nikt nie przychodzi do Ojca, tylko przeze mnie.',
        translation: 'BW',
      },
      {
        reference: '1 Koryntian 15:3-4',
        text: 'Przekazałem wam bowiem na początku to, co i ja przejąłem, że Chrystus umarł za grzechy nasze według Pism i że został pogrzebany, i że dnia trzeciego został z martwych wzbudzony według Pism.',
        translation: 'BW',
      },
      {
        reference: 'Dzieje Apostolskie 16:31',
        text: 'A oni rzekli: Uwierz w Pana Jezusa, a będziesz zbawiony, ty i twój dom.',
        translation: 'BW',
      },
    ],
    relatedQuestions: [
      'czy-mozna-utracic-zycie-wieczne',
      '5-czy-nowy-testament-jest-wiarygodnym-zrodlem-historycznym-a-nie-jakas-legenda',
    ],
  },

  // Question 5: Czy Nowy Testament jest wiarygodny historycznie?
  5: {
    slug: '5-czy-nowy-testament-jest-wiarygodnym-zrodlem-historycznym-a-nie-jakas-legenda',
    title: 'Czy Nowy Testament jest wiarygodnym źródłem historycznym, a nie jakąś legendą?',
    shortAnswer: 'Tak, Nowy Testament jest najlepiej udokumentowanym tekstem starożytnym. Mamy tysiące rękopisów potwierdzających jego wiarygodność.',
    sections: [
      {
        title: 'Liczba zachowanych rękopisów',
        content: `
          <p>Nowy Testament jest zdecydowanie najlepiej zachowanym dokumentem starożytności.
          Posiadamy ponad <strong>5,800 greckich rękopisów</strong> Nowego Testamentu,
          a także tysiące kopii w innych językach (łacina, syryjski, koptyjski).</p>
          
          <p>Dla porównania, inne starożytne teksty, których autentyczności nikt nie kwestionuje:</p>
          <ul>
            <li>Iliada Homera – około 1,800 kopii</li>
            <li>Dzieła Platona – około 250 kopii</li>
            <li>Dzieła Tacyta – około 20 kopii</li>
            <li>Dzieła Juliusza Cezara – około 10 kopii</li>
          </ul>
          
          <p>Jeśli odrzucamy wiarygodność Nowego Testamentu, musielibyśmy odrzucić
          praktycznie całą wiedzę o starożytności.</p>
        `,
      },
      {
        title: 'Bliskość czasowa do wydarzeń',
        content: `
          <p>Najstarsze fragmenty Nowego Testamentu pochodzą z bardzo bliskiego okresu
          do opisywanych wydarzeń. Papirus P52 (fragment Ewangelii Jana) datowany jest
          na około 125 r. n.e., czyli zaledwie 30-40 lat po napisaniu oryginału.</p>
          
          <p>Dla porównania:</p>
          <ul>
            <li>Najstarsze kopie dzieł Platona pochodzą z około 900 lat po jego śmierci</li>
            <li>Najstarsze kopie dzieł Arystotelesa – około 1,400 lat po oryginale</li>
            <li>Najstarsze kopie "Wojny galijskiej" Cezara – około 1,000 lat po oryginale</li>
          </ul>
          
          <p>Nowy Testament ma znacznie lepsze poświadczenie czasowe niż jakikolwiek
          inny dokument starożytny.</p>
        `,
      },
      {
        title: 'Świadectwa pozabiblijne',
        content: `
          <p>Istnienie Jezusa i wczesnego chrześcijaństwa potwierdzają także źródła
          pozabiblijne, w tym autorzy niechrześcijańscy:</p>
          
          <ul>
            <li><strong>Józef Flawiusz</strong> (37-100 n.e.) – żydowski historyk,
            wspomina o Jezusie i Jakubie, bracie Jezusa</li>
            <li><strong>Tacyt</strong> (56-120 n.e.) – rzymski historyk, pisze o Chrystusie
            i prześladowaniach chrześcijan za Nerona</li>
            <li><strong>Pliniusz Młodszy</strong> (61-113 n.e.) – rzymski urzędnik,
            opisuje praktyki wczesnych chrześcijan</li>
            <li><strong>Swetoniusz</strong> (69-140 n.e.) – rzymski historyk,
            wspomina o "Chrestusie" i zamieszaniach wśród Żydów</li>
          </ul>
        `,
      },
      {
        title: 'Spójność przekazu',
        content: `
          <p>Pomimo tysięcy rękopisów, różnice między nimi są minimalne i dotyczą
          głównie drobnych kwestii ortograficznych lub stylistycznych. Żadna
          istotna doktryna chrześcijańska nie jest zagrożona przez warianty tekstowe.</p>
          
          <p>Uczeni szacują, że tekst Nowego Testamentu jest w <strong>99,5% pewny</strong>.
          Pozostałe 0,5% to drobne różnice, które nie wpływają na żadne nauczanie.</p>
          
          <p>Ta niezwykła spójność świadczy o staranności, z jaką kopiści przepisywali
          tekst przez wieki.</p>
        `,
      },
      {
        title: 'Świadkowie naoczni',
        content: `
          <p>Autorzy Nowego Testamentu wielokrotnie podkreślają, że są świadkami naocznymi
          lub opierają się na relacjach naocznych świadków:</p>
          
          <p>Apostoł Jan pisze: <em>"Co było od początku, co słyszeliśmy, co oczami
          naszymi widzieliśmy, na co patrzyliśmy i czego ręce nasze dotykały"</em>
          (1 Jana 1:1).</p>
          
          <p>Apostoł Piotr stwierdza: <em>"Gdyż nie za wymyślonymi baśniami postępując,
          oznajmiliśmy wam moc i przyjście Pana naszego Jezusa Chrystusa, lecz jako
          naoczni świadkowie jego wielkości"</em> (2 Piotra 1:16).</p>
          
          <p>Łukasz na początku swojej Ewangelii wyjaśnia swoją metodologię badawczą,
          powołując się na relacje naocznych świadków (Łukasza 1:1-4).</p>
        `,
      },
    ],
    verses: [
      {
        reference: '1 Jana 1:1-3',
        text: 'Co było od początku, co słyszeliśmy, co oczami naszymi widzieliśmy, na co patrzyliśmy i czego ręce nasze dotykały, o Słowie żywota - a żywot objawiony został, i widzieliśmy, i świadczymy, i zwiastujemy wam ów żywot wieczny, który był u Ojca, a nam objawiony został.',
        translation: 'BW',
      },
      {
        reference: '2 Piotra 1:16',
        text: 'Gdyż nie za wymyślonymi baśniami postępując, oznajmiliśmy wam moc i przyjście Pana naszego Jezusa Chrystusa, lecz jako naoczni świadkowie jego wielkości.',
        translation: 'BW',
      },
      {
        reference: 'Łukasza 1:1-4',
        text: 'Skoro już wielu podjęło się sporządzenia opisu wydarzeń, które wśród nas się dokonały, jak nam to przekazali naoczni od samego początku świadkowie i słudzy Słowa, postanowiłem i ja, który wszystko od początku przebadałem, dokładnie kolejno ci to opisać, dostojny Teofilu, abyś upewnił się w prawdziwości nauki, jaką odebrałeś.',
        translation: 'BW',
      },
      {
        reference: '1 Koryntian 15:6',
        text: 'Potem ukazał się więcej niż pięciuset braciom naraz, z których większość dotychczas żyje, niektórzy zaś zasnęli.',
        translation: 'BW',
      },
      {
        reference: 'Jan 21:24',
        text: 'Ten właśnie uczeń świadczy o tych rzeczach i to napisał; a wiemy, że świadectwo jego jest prawdziwe.',
        translation: 'BW',
      },
    ],
    relatedQuestions: [
      'jak-rozpoznac-czy-trafilem-na-prawdziwe-nauczanie-odnosnie-zbawienia',
      'czy-mozna-utracic-zycie-wieczne',
    ],
  },

  // Question 6: Czy Jezus rzeczywiście istniał?
  6: {
    slug: 'czy-jezus-rzeczywiscie-istnial',
    title: 'Czy Jezus rzeczywiście istniał...?',
    shortAnswer: 'Tak, historyczne istnienie Jezusa z Nazaretu jest faktem potwierdzonym przez liczne źródła – zarówno chrześcijańskie, jak i niechrześcijańskie.',
    sections: [
      {
        title: 'Konsensus historyków',
        content: `
          <p>Historyczne istnienie Jezusa z Nazaretu jest <strong>powszechnie akceptowanym
          faktem</strong> wśród współczesnych historyków. Jeden z uczonych stwierdził, że
          historyczność Jezusa jest "tak samo aksjomatyczna dla bezstronnego historyka,
          jak historyczność Juliusza Cezara".</p>
          
          <p>Poglądy zaprzeczające istnieniu Jezusa są marginalizowane w środowisku
          akademickim i często charakteryzowane jako wymagające większej "łatwowierności"
          niż tradycyjne stanowisko. Zdecydowana większość badaczy – zarówno wierzących,
          jak i niewierzących – zgadza się, że Jezus był <strong>rzeczywistą postacią
          historyczną</strong>.</p>
          
          <p>Nie chodzi tu o wiarę religijną, ale o <strong>rzetelną analizę historyczną</strong>
          dostępnych źródeł i dowodów.</p>
        `,
      },
      {
        title: 'Źródła niechrześcijańskie',
        content: `
          <p>Istnienie Jezusa potwierdzają <strong>niezależne źródła pozabiblijne</strong>,
          w tym autorzy żydowscy i rzymscy, którzy nie mieli powodu, by promować
          chrześcijaństwo:</p>
          
          <ul>
            <li><strong>Józef Flawiusz</strong> (37-100 n.e.) – żydowski historyk,
            w swoim dziele "Dawne dzieje Izraela" wspomina o Jezusie jako "mądrym człowieku"
            i "czyńcy zdumiewających czynów", który został skazany na krzyż przez Piłata.
            Wspomina także o Jakubie jako "bracie Jezusa, zwanego Chrystusem".</li>
            
            <li><strong>Tacyt</strong> (56-120 n.e.) – rzymski historyk, pisząc około
            70 lat po śmierci Jezusa, odnotowuje prześladowania chrześcijan przez Nerona
            i stwierdza, że ich nazwa pochodzi od "Chrystusa", który "poniósł najwyższą
            karę za panowania Tyberiusza z rąk jednego z naszych prokuratorów, Poncjusza
            Piłata".</li>
            
            <li><strong>Pliniusz Młodszy</strong> (61-113 n.e.) – rzymski urzędnik,
            w listach do cesarza Trajana opisuje praktyki wczesnych chrześcijan.</li>
            
            <li><strong>Swetoniusz</strong> (69-140 n.e.) – rzymski historyk, wspomina
            o "Chrestusie" i zamieszaniach wśród Żydów.</li>
          </ul>
          
          <p>Co istotne, <strong>starożytni przeciwnicy chrześcijaństwa</strong> – tacy
          jak Celsus, Porfiriusz czy rabini talmudyczni – nigdy nie zaprzeczali, że Jezus
          istniał lub że czynił "cuda" (choć przypisywali je czarom). Ich ataki były
          skierowane przeciwko Jego boskości i zmartwychwstaniu, nie przeciwko Jego
          istnieniu.</p>
        `,
      },
      {
        title: 'Dokumentacja Nowego Testamentu',
        content: `
          <p>Chociaż Nowy Testament jest tekstem religijnym, historycy traktują jego
          różne księgi (Ewangelie, Dzieje Apostolskie, listy Pawła) jako <strong>odrębne
          dokumenty pierwotne</strong> z pierwszego wieku.</p>
          
          <p>Te źródła zostały napisane <strong>w ciągu pierwszego pokolenia</strong>
          po wydarzeniach, gdy <strong>naoczni świadkowie</strong> wciąż żyli i mogli
          służyć jako kontrola przed legendarnymi upiększeniami. Apostoł Paweł w
          1 Liście do Koryntian 15:6 wspomina, że zmartwychwstały Jezus ukazał się
          "więcej niż pięciuset braciom naraz, z których większość dotychczas żyje" –
          co było zaproszeniem do weryfikacji jego twierdzeń.</p>
          
          <p>Profesjonalni historycy grecko-rzymscy zauważają, że zazwyczaj potrzeba
          <strong>więcej niż dwóch pokoleń</strong>, aby legendy wymazały "twardy rdzeń
          faktów historycznych". Ewangelie zostały napisane zbyt wcześnie, aby
          historyczny Jezus mógł zostać zastąpiony przez czysto mityczną postać.</p>
        `,
      },
      {
        title: 'Kryteria autentyczności historycznej',
        content: `
          <p>Historycy używają specyficznych narzędzi do identyfikacji faktów
          historycznych w tekstach:</p>
          
          <ul>
            <li><strong>Kryterium zakłopotania</strong> – Historie, które byłyby
            niewygodne dla wczesnego Kościoła, są prawdopodobnie prawdziwe. Na przykład,
            fakt, że <strong>kobiety</strong> – których świadectwo było prawnie bezwartościowe
            w tamtej kulturze – były głównymi świadkami pustego grobu, jest silnym znakiem
            historyczności.</li>
            
            <li><strong>Kryterium odmienności</strong> – Wypowiedzi lub wydarzenia,
            które nie pasują do wcześniejszego kontekstu żydowskiego ani późniejszej
            teologii chrześcijańskiej, są często autentyczne. Napis "Król Żydów" przybity
            do krzyża jest "historycznym fundamentem", ponieważ nie był to tytuł używany
            przez wczesny Kościół dla Jezusa.</li>
            
            <li><strong>Wielokrotne niezależne poświadczenie</strong> – Gdy wydarzenie
            jest relacjonowane przez dwa lub więcej niezależnych źródeł (takich jak
            Marek i Paweł), jego wiarygodność wzrasta.</li>
          </ul>
          
          <p>Stosując te kryteria, większość współczesnych uczonych zgadza się na
          <strong>"minimalne fakty"</strong>: Jezus był żydowskim nauczycielem, który
          został ukrzyżowany pod Poncjuszem Piłatem, został pochowany, a wkrótce potem
          Jego uczniowie mieli doświadczenia, które uważali za zjawienia zmartwychwstałego
          Jezusa, co doprowadziło do szybkiego i niewytłumaczalnego powstania Kościoła
          chrześcijańskiego w Jerozolimie.</p>
        `,
      },
      {
        title: 'Świadectwo naocznych świadków',
        content: `
          <p>Autorzy Nowego Testamentu wielokrotnie podkreślają, że są <strong>naocznymi
          świadkami</strong> lub opierają się na relacjach naocznych świadków:</p>
          
          <p>Apostoł Jan pisze: <em>"Co było od początku, co słyszeliśmy, co oczami
          naszymi widzieliśmy, na co patrzyliśmy i czego ręce nasze dotykały, o Słowie
          żywota"</em> (1 Jana 1:1).</p>
          
          <p>Apostoł Piotr stwierdza: <em>"Gdyż nie za wymyślonymi baśniami postępując,
          oznajmiliśmy wam moc i przyjście Pana naszego Jezusa Chrystusa, lecz jako
          naoczni świadkowie jego wielkości"</em> (2 Piotra 1:16).</p>
          
          <p>Łukasz na początku swojej Ewangelii wyjaśnia swoją <strong>metodologię
          badawczą</strong>, powołując się na relacje naocznych świadków: <em>"Skoro
          już wielu podjęło się sporządzenia opisu wydarzeń, które wśród nas się dokonały,
          jak nam to przekazali naoczni od samego początku świadkowie"</em> (Łukasza 1:1-2).</p>
          
          <p>Te świadectwa nie są anonimowymi legendami, ale <strong>konkretnymi
          twierdzeniami</strong> ludzi, którzy byli gotowi umrzeć za to, co widzieli
          i słyszeli.</p>
        `,
      },
    ],
    verses: [
      {
        reference: '1 Jana 1:1-3',
        text: 'Co było od początku, co słyszeliśmy, co oczami naszymi widzieliśmy, na co patrzyliśmy i czego ręce nasze dotykały, o Słowie żywota - a żywot objawiony został, i widzieliśmy, i świadczymy, i zwiastujemy wam ów żywot wieczny, który był u Ojca, a nam objawiony został.',
        translation: 'BW',
      },
      {
        reference: '2 Piotra 1:16',
        text: 'Gdyż nie za wymyślonymi baśniami postępując, oznajmiliśmy wam moc i przyjście Pana naszego Jezusa Chrystusa, lecz jako naoczni świadkowie jego wielkości.',
        translation: 'BW',
      },
      {
        reference: 'Łukasza 1:1-4',
        text: 'Skoro już wielu podjęło się sporządzenia opisu wydarzeń, które wśród nas się dokonały, jak nam to przekazali naoczni od samego początku świadkowie i słudzy Słowa, postanowiłem i ja, który wszystko od początku przebadałem, dokładnie kolejno ci to opisać, dostojny Teofilu, abyś upewnił się w prawdziwości nauki, jaką odebrałeś.',
        translation: 'BW',
      },
      {
        reference: '1 Koryntian 15:3-6',
        text: 'Przekazałem wam bowiem na początku to, co i ja przejąłem, że Chrystus umarł za grzechy nasze według Pism i że został pogrzebany, i że dnia trzeciego został z martwych wzbudzony według Pism. I że ukazał się Kefasowi, potem Dwunastu. Potem ukazał się więcej niż pięciuset braciom naraz, z których większość dotychczas żyje, niektórzy zaś zasnęli.',
        translation: 'BW',
      },
      {
        reference: 'Jan 21:24',
        text: 'Ten właśnie uczeń świadczy o tych rzeczach i to napisał; a wiemy, że świadectwo jego jest prawdziwe.',
        translation: 'BW',
      },
      {
        reference: 'Dzieje Apostolskie 1:3',
        text: 'Którym też po swojej męce dał wiele dowodów, że żyje, ukazując się im przez czterdzieści dni i mówiąc o tym, co dotyczy Królestwa Bożego.',
        translation: 'BW',
      },
      {
        reference: 'Jan 20:30-31',
        text: 'Wiele innych znaków uczynił Jezus wobec uczniów swoich, które nie są zapisane w tej księdze. Te zaś są zapisane, abyście wierzyli, że Jezus jest Chrystusem, Synem Bożym, i abyście wierząc, mieli żywot w imieniu jego.',
        translation: 'BW',
      },
    ],
    relatedQuestions: [
      '5-czy-nowy-testament-jest-wiarygodnym-zrodlem-historycznym-a-nie-jakas-legenda',
      'jak-rozpoznac-czy-trafilem-na-prawdziwe-nauczanie-odnosnie-zbawienia',
    ],
  },

  // Question 7: Czy to sprawiedliwe dla przestępców?
  7: {
    slug: 'czy-to-sprawiedliwe-aby-przestepcy-np-mordercy-otrzymali-darmowe-zbawienie-tak-samo-latwo-jak-dobrzy-ludzie',
    title: 'Czy to sprawiedliwe aby przestępcy, np. mordercy otrzymali darmowe zbawienie tak samo łatwo, jak dobrzy ludzie?',
    shortAnswer: 'Tak, ponieważ wszyscy zgrzeszyli i wszyscy potrzebują tej samej łaski Bożej. Nikt nie jest "wystarczająco dobry" by zasłużyć na zbawienie.',
    sections: [
      {
        title: 'Wszyscy zgrzeszyli',
        content: `
          <p>Biblia jasno uczy, że <strong>wszyscy ludzie są grzesznikami</strong> przed Bogiem.
          Apostoł Paweł napisał: <em>"Wszyscy bowiem zgrzeszyli i brak im chwały Bożej"</em>
          (Rzymian 3:23).</p>
          
          <p>Z perspektywy Bożej świętości, różnica między "dobrym człowiekiem" a mordercą
          jest jak różnica między osobą stojącą na szczycie góry a osobą stojącą w dolinie,
          gdy obie próbują doskoczyć do księżyca. Żadna z nich nie jest nawet blisko celu.</p>
          
          <p>Bóg jest nieskończenie święty, a każdy grzech – czy to "mały" czy "duży"
          w naszych oczach – jest obrazą Jego świętości.</p>
        `,
      },
      {
        title: 'Łaska nie jest sprawiedliwością – jest miłosierdziem',
        content: `
          <p>Ważne jest zrozumienie różnicy między sprawiedliwością a łaską:</p>
          
          <ul>
            <li><strong>Sprawiedliwość</strong> – dostajemy to, na co zasłużyliśmy</li>
            <li><strong>Miłosierdzie</strong> – nie dostajemy kary, na którą zasłużyliśmy</li>
            <li><strong>Łaska</strong> – dostajemy błogosławieństwo, na które NIE zasłużyliśmy</li>
          </ul>
          
          <p>Gdyby Bóg był tylko sprawiedliwy, wszyscy bylibyśmy potępieni. Ale Bóg jest
          także miłosierny i łaskawy. Zbawienie jest aktem łaski, nie sprawiedliwości.</p>
          
          <p><em>"Albowiem łaską zbawieni jesteście przez wiarę, i to nie z was:
          Boży to dar"</em> (Efezjan 2:8).</p>
        `,
      },
      {
        title: 'Przykład łotra na krzyżu',
        content: `
          <p>Jednym z najbardziej wymownych przykładów Bożej łaski jest historia łotra
          ukrzyżowanego obok Jezusa. Ten człowiek był przestępcą skazanym na śmierć,
          a mimo to Jezus powiedział mu:</p>
          
          <p><em>"Zaprawdę powiadam ci, dziś będziesz ze mną w raju"</em> (Łukasza 23:43).</p>
          
          <p>Ten łotr nie miał czasu na:</p>
          <ul>
            <li>Dobre uczynki</li>
            <li>Chrzest</li>
            <li>Uczęszczanie do kościoła</li>
            <li>Naprawienie wyrządzonych krzywd</li>
          </ul>
          
          <p>Miał tylko wiarę – i to wystarczyło. Jezus przyjął go do raju na podstawie
          samej wiary.</p>
        `,
      },
      {
        title: 'Cena została zapłacona',
        content: `
          <p>Zbawienie jest darmowe dla nas, ale nie było darmowe dla Boga. Jezus zapłacił
          najwyższą cenę – oddał swoje życie na krzyżu. Jego ofiara była wystarczająca,
          by pokryć grzechy całego świata.</p>
          
          <p><em>"On ci jest ubłaganiem za grzechy nasze, a nie tylko za nasze,
          lecz i za grzechy całego świata"</em> (1 Jana 2:2).</p>
          
          <p>Krew Jezusa jest wystarczająca, by oczyścić każdy grzech – od "małego"
          kłamstwa po morderstwo. Nie ma grzechu zbyt wielkiego dla Bożej łaski.</p>
        `,
      },
      {
        title: 'Bóg pragnie zbawienia wszystkich',
        content: `
          <p>Biblia wyraźnie mówi, że Bóg pragnie zbawienia wszystkich ludzi,
          nie tylko "dobrych":</p>
          
          <p><em>"Który chce, aby wszyscy ludzie byli zbawieni i doszli do poznania
          prawdy"</em> (1 Tymoteusza 2:4).</p>
          
          <p><em>"Pan nie zwleka z dotrzymaniem obietnicy, chociaż niektórzy uważają,
          że zwleka, lecz okazuje cierpliwość względem was, bo nie chce, aby ktokolwiek
          zginął, lecz chce, aby wszyscy przyszli do upamiętania"</em> (2 Piotra 3:9).</p>
          
          <p>Bóg nie dzieli ludzi na "zasługujących" i "niezasługujących" na zbawienie.
          Wszyscy jesteśmy grzesznikami potrzebującymi łaski.</p>
        `,
      },
    ],
    verses: [
      {
        reference: 'Rzymian 3:23-24',
        text: 'Wszyscy bowiem zgrzeszyli i brak im chwały Bożej, i są usprawiedliwieni darmo, z łaski jego, przez odkupienie w Chrystusie Jezusie.',
        translation: 'BW',
      },
      {
        reference: 'Łukasza 23:42-43',
        text: 'I rzekł: Jezu, wspomnij na mnie, gdy wejdziesz do Królestwa swego. I rzekł mu: Zaprawdę powiadam ci, dziś będziesz ze mną w raju.',
        translation: 'BW',
      },
      {
        reference: '1 Jana 2:2',
        text: 'On ci jest ubłaganiem za grzechy nasze, a nie tylko za nasze, lecz i za grzechy całego świata.',
        translation: 'BW',
      },
      {
        reference: '1 Tymoteusza 2:3-4',
        text: 'Jest to rzecz dobra i miła przed Bogiem, Zbawicielem naszym, który chce, aby wszyscy ludzie byli zbawieni i doszli do poznania prawdy.',
        translation: 'BW',
      },
      {
        reference: '2 Piotra 3:9',
        text: 'Pan nie zwleka z dotrzymaniem obietnicy, chociaż niektórzy uważają, że zwleka, lecz okazuje cierpliwość względem was, bo nie chce, aby ktokolwiek zginął, lecz chce, aby wszyscy przyszli do upamiętania.',
        translation: 'BW',
      },
      {
        reference: 'Efezjan 2:8-9',
        text: 'Albowiem łaską zbawieni jesteście przez wiarę, i to nie z was: Boży to dar; nie z uczynków, aby się kto nie chlubił.',
        translation: 'BW',
      },
      {
        reference: 'Rzymian 5:8',
        text: 'Bóg zaś daje dowód swojej miłości ku nam przez to, że kiedy byliśmy jeszcze grzesznikami, Chrystus za nas umarł.',
        translation: 'BW',
      },
    ],
    relatedQuestions: [
      'czy-mozna-utracic-zycie-wieczne',
      '8-czy-nauka-o-darmowym-zyciu-wiecznym-dzieki-wierze-w-jezusa-chrystusa-jest-zgodna-z-krk',
    ],
  },

  // Question 8: Czy to zgodne z nauczaniem Kościoła Rzymskokatolickiego?
  8: {
    slug: '8-czy-nauka-o-darmowym-zyciu-wiecznym-dzieki-wierze-w-jezusa-chrystusa-jest-zgodna-z-krk',
    title: 'Czy nauka o darmowym życiu wiecznym dzięki wierze w Jezusa Chrystusa, jest zgodna z nauczaniem Kościoła Rzymskokatolickiego?',
    shortAnswer: 'Oficjalne nauczanie Kościoła Katolickiego różni się w niektórych punktach od nauki o zbawieniu wyłącznie przez wiarę, choć istnieją też punkty wspólne.',
    sections: [
      {
        title: 'Punkty wspólne',
        content: `
          <p>Zarówno nauczanie prezentowane na tej stronie, jak i oficjalne nauczanie
          Kościoła Katolickiego zgadzają się w kilku fundamentalnych kwestiach:</p>
          
          <ul>
            <li>Jezus Chrystus jest Synem Bożym i jedynym Zbawicielem</li>
            <li>Zbawienie jest możliwe tylko dzięki ofierze Jezusa na krzyżu</li>
            <li>Łaska Boża jest niezbędna do zbawienia</li>
            <li>Wiara w Jezusa Chrystusa jest konieczna</li>
            <li>Biblia jest Słowem Bożym</li>
          </ul>
          
          <p>Te fundamentalne prawdy łączą wszystkich chrześcijan, niezależnie od
          denominacji.</p>
        `,
      },
      {
        title: 'Różnice w rozumieniu zbawienia',
        content: `
          <p>Główna różnica dotyczy pytania: <strong>czy sama wiara wystarcza do zbawienia?</strong></p>
          
          <p>Nauczanie prezentowane na tej stronie (oparte na Biblii) głosi, że zbawienie
          jest darem otrzymywanym wyłącznie przez wiarę, bez uczynków:</p>
          
          <p><em>"Albowiem łaską zbawieni jesteście przez wiarę, i to nie z was:
          Boży to dar; nie z uczynków, aby się kto nie chlubił"</em> (Efezjan 2:8-9).</p>
          
          <p>Oficjalne nauczanie Kościoła Katolickiego (według Katechizmu) podkreśla,
          że oprócz wiary potrzebne są także sakramenty i dobre uczynki jako część
          procesu zbawienia.</p>
        `,
      },
      {
        title: 'Co mówi Biblia?',
        content: `
          <p>Zachęcamy każdego czytelnika do samodzielnego zbadania, co Biblia mówi
          na temat zbawienia. Oto kluczowe wersety:</p>
          
          <p><em>"Kto wierzy w Syna, ma żywot wieczny"</em> (Jan 3:36)</p>
          
          <p><em>"Zaprawdę, zaprawdę, powiadam wam, kto słucha słowa mego i wierzy temu,
          który mnie posłał, ma żywot wieczny i nie stanie przed sądem, lecz przeszedł
          ze śmierci do żywota"</em> (Jan 5:24)</p>
          
          <p><em>"A oni rzekli: Uwierz w Pana Jezusa, a będziesz zbawiony"</em>
          (Dzieje 16:31)</p>
          
          <p>Te wersety konsekwentnie wskazują na wiarę jako jedyny warunek zbawienia.</p>
        `,
      },
      {
        title: 'Szacunek dla różnych tradycji',
        content: `
          <p>Celem tej strony nie jest krytykowanie Kościoła Katolickiego ani żadnej
          innej denominacji. Wielu katolików szczerze kocha Boga i pragnie Go poznać.</p>
          
          <p>Naszym celem jest przedstawienie tego, co Biblia mówi o zbawieniu,
          i zachęcenie każdego do osobistego zbadania Pisma Świętego.</p>
          
          <p>Jak napisano w Dziejach Apostolskich 17:11, Berejczycy <em>"przyjęli słowo
          z całą gotowością i codziennie badali Pisma, czy tak się rzeczy mają"</em>.
          Zachęcamy do takiego samego podejścia.</p>
        `,
      },
      {
        title: 'Zaproszenie do osobistej relacji z Bogiem',
        content: `
          <p>Niezależnie od tradycji religijnej, w której się wychowałeś, Bóg zaprasza
          Cię do osobistej relacji z Nim przez wiarę w Jezusa Chrystusa.</p>
          
          <p>Jezus powiedział: <em>"Oto stoję u drzwi i kołaczę; jeśli ktoś usłyszy
          głos mój i otworzy drzwi, wejdę do niego i będę z nim wieczerzał, a on ze mną"</em>
          (Objawienie 3:20).</p>
          
          <p>To zaproszenie jest skierowane do każdego – katolika, protestanta,
          prawosławnego, czy osoby bez wyznania. Bóg patrzy na serce i na wiarę,
          nie na etykietę denominacyjną.</p>
        `,
      },
    ],
    verses: [
      {
        reference: 'Efezjan 2:8-9',
        text: 'Albowiem łaską zbawieni jesteście przez wiarę, i to nie z was: Boży to dar; nie z uczynków, aby się kto nie chlubił.',
        translation: 'BW',
      },
      {
        reference: 'Jan 3:36',
        text: 'Kto wierzy w Syna, ma żywot wieczny; kto zaś nie słucha Syna, nie ujrzy żywota, lecz gniew Boży ciąży na nim.',
        translation: 'BW',
      },
      {
        reference: 'Jan 5:24',
        text: 'Zaprawdę, zaprawdę, powiadam wam, kto słucha słowa mego i wierzy temu, który mnie posłał, ma żywot wieczny i nie stanie przed sądem, lecz przeszedł ze śmierci do żywota.',
        translation: 'BW',
      },
      {
        reference: 'Dzieje Apostolskie 16:31',
        text: 'A oni rzekli: Uwierz w Pana Jezusa, a będziesz zbawiony, ty i twój dom.',
        translation: 'BW',
      },
      {
        reference: 'Rzymian 4:5',
        text: 'Temu zaś, który nie spełnia uczynków, ale wierzy w tego, który usprawiedliwia bezbożnego, wiarę jego poczytuje mu się za sprawiedliwość.',
        translation: 'BW',
      },
      {
        reference: 'Objawienie 3:20',
        text: 'Oto stoję u drzwi i kołaczę; jeśli ktoś usłyszy głos mój i otworzy drzwi, wejdę do niego i będę z nim wieczerzał, a on ze mną.',
        translation: 'BW',
      },
      {
        reference: 'Dzieje Apostolskie 17:11',
        text: 'Ci byli szlachetniejsi od Tesaloniczan; przyjęli słowo z całą gotowością i codziennie badali Pisma, czy tak się rzeczy mają.',
        translation: 'BW',
      },
    ],
    relatedQuestions: [
      'jak-rozpoznac-czy-trafilem-na-prawdziwe-nauczanie-odnosnie-zbawienia',
      'czy-to-sprawiedliwe-aby-przestepcy-np-mordercy-otrzymali-darmowe-zbawienie-tak-samo-latwo-jak-dobrzy-ludzie',
    ],
  },
};
