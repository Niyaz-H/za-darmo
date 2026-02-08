import Link from 'next/link';
import { SocialIcons } from '@/components/ui';
import { socialLinks, siteInfo, mainNavigation } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-footer text-white mt-auto">
      {/* Top border accent */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary-light to-primary" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">{siteInfo.name}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {siteInfo.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Nawigacja
            </h4>
            <ul className="space-y-2">
              {mainNavigation.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Znajdź nas
            </h4>
            <SocialIcons 
              links={socialLinks} 
              size="md" 
              className="[&_a]:text-gray-400 [&_a:hover]:text-white"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-sm text-gray-500 text-center">
            {siteInfo.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
