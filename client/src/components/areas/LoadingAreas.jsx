import { MapPin } from "lucide-react";

export default function LoadingAreas() {
  return (
    <div className="space-y-8">
      {/* Page Header */}

      <div className="animate-pulse">
        <div className="h-10 w-64 rounded bg-slate-200"></div>

        <div className="mt-4 h-5 w-96 rounded bg-slate-200"></div>
      </div>

      {/* Search */}

      <div className="animate-pulse">
        <div className="h-12 w-full rounded-xl bg-slate-200"></div>
      </div>

      {/* Area Cards */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <div className="animate-pulse">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-200">
                <MapPin className="text-slate-300" />
              </div>

              <div className="h-6 w-40 rounded bg-slate-200"></div>

              <div className="mt-3 h-4 w-24 rounded bg-slate-200"></div>

              <div className="mt-6 h-10 rounded-xl bg-slate-200"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
