import { Pencil, Trash2, Factory } from "lucide-react";

export default function PlantRow({ plant, onEdit, onDelete }) {
  return (
    <tr className="border-t transition hover:bg-slate-50">
      {/* Plant Name */}

      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-2">
            <Factory size={18} className="text-blue-700" />
          </div>

          <div>
            <p className="font-semibold text-slate-800">{plant.name}</p>
          </div>
        </div>
      </td>

      {/* Description */}

      <td className="px-6 py-4 text-slate-600">{plant.description || "-"}</td>

      {/* Slug */}

      <td className="px-6 py-4">
        <span className="rounded bg-slate-100 px-3 py-1 text-sm font-medium">
          {plant.slug}
        </span>
      </td>

      {/* Created Date */}

      <td className="px-6 py-4 text-slate-500">
        {plant.createdAt ? new Date(plant.createdAt).toLocaleDateString() : "-"}
      </td>

      {/* Actions */}

      <td className="px-6 py-4">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => onEdit(plant)}
            className="rounded-lg border border-slate-200 p-2 transition hover:bg-blue-100"
            title="Edit Plant"
          >
            <Pencil size={18} className="text-blue-600" />
          </button>

          <button
            onClick={() => onDelete(plant)}
            className="rounded-lg border border-slate-200 p-2 transition hover:bg-red-100"
            title="Delete Plant"
          >
            <Trash2 size={18} className="text-red-600" />
          </button>
        </div>
      </td>
    </tr>
  );
}
