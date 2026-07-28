import { MapPinned, Pencil, Trash2, Plus } from "lucide-react";
import EmptyAreas from "./EmptyAreas";

export default function AreaTable({
  loading = false,
  areas = [],
  onEdit,
  onDelete,
  onAddArea,
}) {
  if (loading) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center">
        <p className="text-slate-500">Loading Areas...</p>
      </div>
    );
  }

  if (!areas.length) {
    return <EmptyAreas onAddArea={onAddArea} />;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left">Area</th>

              <th className="px-6 py-4 text-left">Description</th>

              <th className="px-6 py-4 text-left">Slug</th>

              <th className="px-6 py-4 text-left">Created</th>

              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {areas.map((area) => (
              <tr key={area._id} className="border-t hover:bg-slate-50">
                {/* Area */}

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-green-100 p-2">
                      <MapPinned size={18} className="text-green-700" />
                    </div>

                    <div>
                      <h3 className="font-semibold">{area.name}</h3>

                      <p className="text-xs text-slate-500">{area._id}</p>
                    </div>
                  </div>
                </td>

                {/* Description */}

                <td className="px-6 py-4 text-slate-600">
                  {area.description || "-"}
                </td>

                {/* Slug */}

                <td className="px-6 py-4">
                  <span className="rounded bg-slate-100 px-3 py-1 text-sm">
                    {area.slug}
                  </span>
                </td>

                {/* Created */}

                <td className="px-6 py-4 text-slate-500">
                  {area.createdAt
                    ? new Date(area.createdAt).toLocaleDateString()
                    : "-"}
                </td>

                {/* Actions */}

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEdit(area)}
                      className="rounded-lg border p-2 hover:bg-blue-100"
                      title="Edit"
                    >
                      <Pencil size={18} className="text-blue-600" />
                    </button>

                    <button
                      onClick={() => onDelete(area)}
                      className="rounded-lg border p-2 hover:bg-red-100"
                      title="Delete"
                    >
                      <Trash2 size={18} className="text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t bg-slate-50 px-6 py-4">
        <span className="text-sm text-slate-500">
          Total Areas :
          <span className="ml-1 font-semibold">{areas.length}</span>
        </span>

        <span className="text-sm text-slate-500">
          Showing
          <span className="mx-1 font-semibold">{areas.length}</span>
          records
        </span>
      </div>
    </div>
  );
}
