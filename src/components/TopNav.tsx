import { cn } from '../utils/cn';
import { NavigationItem } from '../types/app';

interface TopNavProps {
  items: readonly NavigationItem[];
  activePage: string;
  onPageChange: (page: string) => void;
}

export function TopNav({ items, activePage, onPageChange }: TopNavProps) {
  return (
    <nav className="flex flex-wrap gap-2 rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm backdrop-blur-sm">
      {items.map((item) => {
        const isActive = activePage === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onPageChange(item.id)}
            className={cn(
              'flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition',
              isActive
                ? 'bg-brand-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
            )}
          >
            <span aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
