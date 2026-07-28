import { Factory, Pencil, Trash2 } from "lucide-react";

import EmptyPlants from "./EmptyPlants";

export default function PlantTable({
  plants = [],
  onEdit,
  onDelete,
  onAddPlant,
}) {
  if (plants.length === 0) {
    return <EmptyPlants onAddPlant={onAddPlant} />;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Plant
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Description
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Slug
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Created
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {plants.map((plant) => (
              <tr
                key={plant._id}
                className="border-t transition hover:bg-slate-50"
              >
                {/* Plant */}

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-blue-100 p-2">
                      <Factory size={18} className="text-blue-700" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {plant.name}
                      </h3>

                      <p className="text-xs text-slate-500">ID: {plant._id}</p>
                    </div>
                  </div>
                </td>

                {/* Description */}

                <td className="px-6 py-4 text-slate-600">
                  {plant.description || "-"}
                </td>

                {/* Slug */}

                <td className="px-6 py-4">
                  <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                    {plant.slug}
                  </span>
                </td>

                {/* Created */}

                <td className="px-6 py-4 text-slate-500">
                  {plant.createdAt
                    ? new Date(plant.createdAt).toLocaleDateString()
                    : "-"}
                </td>

                {/* Actions */}

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEdit(plant)}
                      className="rounded-lg border border-slate-200 p-2 transition hover:border-blue-300 hover:bg-blue-100"
                      title="Edit Plant"
                    >
                      <Pencil size={18} className="text-blue-600" />
                    </button>

                    <button
                      onClick={() => onDelete(plant)}
                      className="rounded-lg border border-slate-200 p-2 transition hover:border-red-300 hover:bg-red-100"
                      title="Delete Plant"
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

      {/* Footer */}

      <div className="flex items-center justify-between border-t bg-slate-50 px-6 py-4">
        <p className="text-sm text-slate-500">
          Total Plants:
          <span className="ml-1 font-semibold text-slate-700">
            {plants.length}
          </span>
        </p>

        <p className="text-sm text-slate-500">
          Showing
          <span className="mx-1 font-semibold">{plants.length}</span>
          records
        </p>
      </div>
    </div>
  );
}
