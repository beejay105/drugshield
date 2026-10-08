import { ReactNode } from 'react';

export function LoadingState({ message }: { message: string }) {
  return (
    <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
      <div className="space-y-3">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
        <p className="text-sm font-medium text-slate-600">{message}</p>
      </div>
    </div>
  );
}
