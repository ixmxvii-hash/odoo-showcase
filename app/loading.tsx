export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" aria-label="Loading" />
        <p className="text-sm text-slate-300">Loading your experience...</p>
      </div>
    </div>
  );
}
