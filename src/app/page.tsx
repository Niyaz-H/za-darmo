import Image from 'next/image';
import { HeroSection, QuestionCallout, GospelMessage } from '@/components/home';
import { PageWithSidebar } from '@/components/layout';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/images/hero-sky.jpg"
          alt="Niebo - Za darmo"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Gospel Message with Sidebar */}
      <PageWithSidebar>
        <div className="space-y-8">
          {/* Anchor for "Dobra nowina" navigation */}
          <div id="scroll1" className="scroll-mt-20" />
          
          <GospelMessage />

          {/* Question Callout */}
          <QuestionCallout />
        </div>
      </PageWithSidebar>
    </>
  );
}