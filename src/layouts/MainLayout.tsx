import { ReactNode } from 'react';
import { TopNav } from '../components/TopNav';
import { NavigationItem } from '../types/app';

interface MainLayoutProps {
  children: ReactNode;
  navigationItems: readonly NavigationItem[];
  activePage: string;
  onPageChange: (page: string) => void;
  title: string;
  subtitle: string;
}

export function MainLayout({
  children,
  navigationItems,
  activePage,
  onPageChange,
  title,
  subtitle,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="content-container flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">{title}</p>
            <h1 className="mt-1 text-xl font-bold text-slate-900 md:text-2xl">{subtitle}</h1>
          </div>
          <TopNav items={navigationItems} activePage={activePage} onPageChange={onPageChange} />
        </div>
      </header>

      <main className="content-container py-6 md:py-8">
        {children}
      </main>
    </div>
  );
}
