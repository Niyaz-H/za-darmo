import Link from 'next/link';
import { Button } from '@/components/ui';

export function QuestionCallout() {
  return (
    <div className="bg-primary/10 rounded-lg p-6 text-center">
      <p className="text-gray-700 mb-4">
        Jeżeli masz pytanie dotyczące pisma świętego,{' '}
        <Link href="/spis-pytan" className="text-primary font-semibold hover:underline">
          wybierz je z listy
        </Link>
      </p>
      <Button href="/spis-pytan" variant="primary">
        Zobacz wszystkie pytania
      </Button>
    </div>
  );
}