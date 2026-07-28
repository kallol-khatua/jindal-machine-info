import { Factory } from "lucide-react";

export default function PlantSelector({
  plants = [],

  value,

  onChange,
}) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
        <Factory size={16} />
        Plant
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      >
        <option value="">Select Plant</option>

        {plants.map((plant) => (
          <option key={plant._id} value={plant._id}>
            {plant.name}

            {plant.description ? ` — ${plant.description}` : ""}
          </option>
        ))}
      </select>
    </div>
  );
}
