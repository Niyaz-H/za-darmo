export function GospelMessage() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Dobra nowina
      </h2>

      <p>
        Każdy z nas ma świadomość, że na co dzień nie potrafimy być idealni. 
        Nie potrafimy być zawsze w pełni dobrzy, uczciwi, cierpliwi... 
        Gdy złamiemy przepisy drogowe dostajemy mandat. Gdy popełnimy 
        przestępstwo – idziemy do więzienia.
      </p>

      <p>
        Co jednak z naszą wiecznością? Jak myślisz? Czy po śmierci trafisz do nieba?
      </p>

      <p>
        Biblia mówi nam, że Bóg jest sprawiedliwy. W związku z tym będzie rozliczać 
        nas z naszego życia. Może myślisz, że jesteś dobrym człowiekiem. 
        Ale jak wypadniesz, gdy Bóg osądzi Cię według 10 przykazań?
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
        Sprawdźmy się razem...
      </h3>

      <p>
        Czy kiedykolwiek skłamałeś? Ukradłeś coś? Patrzyłeś pożądliwie na 
        drugą osobę? Używałeś imienia Bożego jako przekleństwa? 
        Większość z nas musi przyznać, że złamała te przykazania. 
        W takim razie jak możemy trafić do nieba?
      </p>

      <BibleVerse 
        text="Wszyscy bowiem zgrzeszyli i pozbawieni są chwały Bożej."
        reference="List do Rzymian 3:23 (BT)"
      />

      <BibleVerse 
        text="Zapłatą za grzech jest śmierć."
        reference="List do Rzymian 6:23 (BT)"
      />

      <p>
        Śmierć, o której tu mowa, to wieczne oddzielenie od Boga. 
        Wieczne cierpienie w miejscu zwanym piekłem. 
        Brzmi to okropnie, ale czy wyobrażasz sobie, że ktoś kto popełnił 
        okropne zbrodnie nie ponosi za to żadnej kary? Bóg nie mógłby być 
        sprawiedliwy, gdyby przymykał oko na zło.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
        Ale jest dobra nowina!
      </h3>

      <BibleVerse 
        text="Bóg zaś okazuje nam swoją miłość przez to, że Chrystus umarł za nas, gdyśmy byli jeszcze grzesznikami."
        reference="List do Rzymian 5:8 (BT)"
      />

      <p>
        Bóg nas kocha! Wiedział, że sami nie jesteśmy w stanie zasłużyć na 
        zbawienie. Dlatego posłał swojego Syna – Jezusa Chrystusa – który 
        żył bezgrzesznym życiem i poniósł karę za nasze grzechy na krzyżu. 
        Trzeciego dnia zmartwychwstał, pokonując śmierć!
      </p>

      <BibleVerse 
        text="Tak bowiem Bóg umiłował świat, że Syna swego Jednorodzonego dał, aby każdy, kto w Niego wierzy, nie zginął, ale miał życie wieczne."
        reference="Ewangelia wg św. Jana 3:16 (BT)"
      />

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
        Jak otrzymać zbawienie?
      </h3>

      <p>
        Zbawienie to dar, który otrzymujemy przez wiarę, nie przez uczynki.
      </p>

      <BibleVerse 
        text="Łaską bowiem jesteście zbawieni przez wiarę. A to pochodzi nie od was, lecz jest darem Boga: nie z uczynków, aby się nikt nie chlubił."
        reference="List do Efezjan 2:8-9 (BT)"
      />

      <p>
        Aby otrzymać zbawienie, musisz uwierzyć w Jezusa Chrystusa – 
        uwierzyć, że jest On Synem Bożym, który umarł za Twoje grzechy 
        i zmartwychwstał. To wszystko!
      </p>

      <BibleVerse 
        text="Jeżeli więc ustami swoimi wyznasz, że JEZUS JEST PANEM, i w sercu swoim uwierzysz, że Bóg Go wskrzesił z martwych - osiągniesz zbawienie."
        reference="List do Rzymian 10:9 (BT)"
      />

      <BibleVerse 
        text="Kto wierzy w Syna, ma życie wieczne."
        reference="Ewangelia wg św. Jana 3:36 (BT)"
      />

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
        Co teraz?
      </h3>

      <p>
        Jeśli uwierzyłeś w Jezusa Chrystusa, to właśnie otrzymałeś życie wieczne! 
        To nie jest coś, co musisz wypracować – to dar! Twoje grzechy zostały 
        wybaczone, a Twoja wieczność jest zabezpieczona.
      </p>

      <p>
        Warto teraz:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>Czytać Biblię, aby lepiej poznać Boga (zacznij od Ewangelii Jana)</li>
        <li>Rozmawiać z Bogiem w modlitwie</li>
        <li>Znaleźć społeczność wierzących ludzi (kościół)</li>
        <li>Dzielić się dobrą nowiną z innymi</li>
      </ul>

      <BibleVerse 
        text="Kto ma Syna, ma życie, kto nie ma Syna Bożego, nie ma też i życia. O tym napisałem do was, którzy wierzycie w imię Syna Bożego, abyście wiedzieli, że macie życie wieczne."
        reference="1 List św. Jana 5:12-13 (BT)"
      />
    </article>
  );
}

interface BibleVerseProps {
  text: string;
  reference: string;
}

function BibleVerse({ text, reference }: BibleVerseProps) {
  return (
    <blockquote className="border-l-4 border-primary/50 pl-4 my-6 bg-blue-50/50 py-3 pr-4 rounded-r-lg">
      <p className="italic text-gray-700 mb-2">&ldquo;{text}&rdquo;</p>
      <cite className="text-sm text-gray-500 not-italic">— {reference}</cite>
    </blockquote>
  );
}