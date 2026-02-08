import { HeroSection, QuestionCallout, GospelMessage } from '@/components/home';
import { PageWithSidebar } from '@/components/layout';

export default function HomePage() {
  return (
    <>
      {/* Hero Section with integrated parallax image */}
      <HeroSection />

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
