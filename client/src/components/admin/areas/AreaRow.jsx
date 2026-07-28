import { MapPinned, Pencil, Trash2 } from "lucide-react";

export default function AreaRow({ area, onEdit, onDelete }) {
  return (
    <tr className="border-t transition hover:bg-slate-50">
      {/* Area */}

      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-green-100 p-2">
            <MapPinned size={18} className="text-green-700" />
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">{area.name}</h3>

            <p className="text-xs text-slate-500">ID: {area._id}</p>
          </div>
        </div>
      </td>

      {/* Description */}

      <td className="px-6 py-4 text-slate-600">{area.description || "-"}</td>

      {/* Slug */}

      <td className="px-6 py-4">
        <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-medium">
          {area.slug}
        </span>
      </td>

      {/* Created */}

      <td className="px-6 py-4 text-slate-500">
        {area.createdAt ? new Date(area.createdAt).toLocaleDateString() : "-"}
      </td>

      {/* Actions */}

      <td className="px-6 py-4">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => onEdit(area)}
            className="rounded-lg border border-slate-200 p-2 transition hover:bg-blue-100"
            title="Edit Area"
          >
            <Pencil size={18} className="text-blue-600" />
          </button>

          <button
            onClick={() => onDelete(area)}
            className="rounded-lg border border-slate-200 p-2 transition hover:bg-red-100"
            title="Delete Area"
          >
            <Trash2 size={18} className="text-red-600" />
          </button>
        </div>
      </td>
    </tr>
  );
}
