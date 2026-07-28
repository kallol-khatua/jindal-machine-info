import { Factory, Plus } from "lucide-react";

export default function EmptyPlants({ onAddPlant }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-slate-300 bg-white px-6 py-16">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <div className="mb-6 rounded-full bg-blue-100 p-5">
          <Factory size={48} className="text-blue-600" />
        </div>

        <h2 className="text-2xl font-bold text-slate-800">
          No Plants Available
        </h2>

        <p className="mt-3 text-slate-500">
          There are no plants in the system yet. Create your first pellet plant
          to start managing areas and machines.
        </p>

        <button
          onClick={onAddPlant}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add First Plant
        </button>
      </div>
    </div>
  );
}
