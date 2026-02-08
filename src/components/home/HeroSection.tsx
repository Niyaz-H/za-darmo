import Link from 'next/link';
import { Button } from '@/components/ui';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
          Czy wiesz, że najcenniejszą rzecz na świecie możesz otrzymać{' '}
          <span className="text-primary">za darmo</span>?
        </h1>
        
        <div className="prose prose-lg mx-auto text-gray-700 space-y-4">
          <p>
            Za darmo, bo Ktoś już za nią zapłacił zamiast Ciebie. I chce Ci ją podarować. 
            Tą rzeczą jest <strong>zbawienie</strong>.
          </p>
          
          <p>
            Zbawienie, czyli ratunek przed oddzieleniem od prawdziwego Boga. 
            Zbawienie, czyli bilet do Nieba. Wieczne życie.
          </p>
          
          <p className="italic text-gray-600">
            Pismo Święte mówi: &ldquo;Łaską bowiem jesteście zbawieni przez wiarę. 
            A to pochodzi nie od was, lecz jest darem Boga. Nie z uczynków, 
            aby się nikt nie chlubił.&rdquo; (List Ap. Pawła do Efezjan, 2:8-9)
          </p>
          
          <p>
            Łaska to coś, co otrzymujemy, chociaż na to nie zasłużyliśmy. <strong>Za darmo.</strong>
          </p>
          
          <p>
            Chciałbyś dowiedzieć się, jak przyjąć{' '}
            <Link href="#scroll1" className="text-primary font-semibold hover:underline">
              darmowe zbawienie
            </Link>
            ?
          </p>
        </div>
      </div>
    </section>
  );
}