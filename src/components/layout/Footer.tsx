import { SocialIcons } from '@/components/ui';
import { socialLinks, siteInfo } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-footer text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300">
            {siteInfo.copyright}
          </p>
          <SocialIcons 
            links={socialLinks} 
            size="md" 
            className="[&_a]:text-gray-300 [&_a:hover]:text-white"
          />
        </div>
      </div>
    </footer>
  );
}