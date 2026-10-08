export function ErrorState({ message }: { message: string }) {
  return (
    <div className="flex min-h-[260px] items-center justify-center rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
      <div className="max-w-md space-y-2">
        <p className="text-lg font-semibold text-red-700">Something went wrong</p>
        <p className="text-sm text-red-600">{message}</p>
      </div>
    </div>
  );
}
