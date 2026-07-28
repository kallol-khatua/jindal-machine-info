import { MapPinned, Plus } from "lucide-react";

export default function EmptyAreas({ onAddArea }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-slate-300 bg-white py-20">
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">
        {/* Icon */}

        <div className="mb-6 rounded-full bg-blue-100 p-6">
          <MapPinned size={50} className="text-blue-600" />
        </div>

        {/* Title */}

        <h2 className="text-2xl font-bold text-slate-800">
          No Areas Available
        </h2>

        {/* Description */}

        <p className="mt-3 max-w-md text-slate-500">
          There are currently no areas available for the selected plant.
          <br />
          Click the button below to create your first area.
        </p>

        {/* Button */}

        <button
          onClick={onAddArea}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add First Area
        </button>
      </div>
    </div>
  );
}
