import { Sidebar } from './Sidebar';

interface PageWithSidebarProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export function PageWithSidebar({ children, showSidebar = true }: PageWithSidebarProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className={`flex flex-col ${showSidebar ? 'lg:flex-row lg:gap-8' : ''}`}>
        {/* Main content */}
        <main className={`${showSidebar ? 'lg:flex-1 lg:max-w-3xl' : 'w-full'}`}>
          {children}
        </main>

        {/* Sidebar */}
        {showSidebar && (
          <div className="mt-8 lg:mt-0 lg:w-80 lg:flex-shrink-0">
            <Sidebar />
          </div>
        )}
      </div>
    </div>
  );
}