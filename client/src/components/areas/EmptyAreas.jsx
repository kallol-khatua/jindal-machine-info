import { MapPinOff } from "lucide-react";

export default function EmptyAreas() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-20 px-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
        <MapPinOff size={40} className="text-slate-400" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-800">No Areas Found</h2>

      <p className="mt-3 max-w-md text-slate-500">
        There are currently no areas available for this plant. Please check back
        later or contact the administrator if you believe this is incorrect.
      </p>
    </div>
  );
}
