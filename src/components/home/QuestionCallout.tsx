import Link from 'next/link';
import { Button, AnimateOnScroll } from '@/components/ui';

export function QuestionCallout() {
  return (
    <AnimateOnScroll animation="scale-in">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-blue-50 rounded-2xl p-8 md:p-10 text-center border border-primary/10">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" aria-hidden="true" />
        
        <div className="relative z-10">
          <p className="text-gray-700 text-lg mb-6">
            Jeżeli masz pytanie dotyczące pisma świętego,{' '}
            <Link href="/spis-pytan" className="text-primary font-semibold hover:underline">
              wybierz je z listy
            </Link>
          </p>
          <Button href="/spis-pytan" variant="primary" size="lg" className="hover:scale-105 transition-transform !text-white">
            Zobacz wszystkie pytania
          </Button>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
