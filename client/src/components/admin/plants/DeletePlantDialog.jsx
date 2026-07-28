import { AlertTriangle, Trash2, X } from "lucide-react";
import useDeletePlant from "../../../hooks/useDeletePlant";

export default function DeletePlantDialog({ open, plant, onClose }) {
  const { mutate: deletePlant, isPending } = useDeletePlant();

  if (!open || !plant) return null;

  const handleDelete = () => {
    deletePlant(plant._id, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-red-100 p-2">
              <AlertTriangle size={22} className="text-red-600" />
            </div>

            <div>
              <h2 className="text-lg font-semibold">Delete Plant</h2>

              <p className="text-sm text-slate-500">
                This action cannot be undone.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div className="space-y-4 p-6">
          <p className="text-slate-700">
            Are you sure you want to delete the following plant?
          </p>

          <div className="rounded-lg border bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-800">{plant.name}</h3>

            <p className="mt-1 text-sm text-slate-500">
              {plant.description || "No description"}
            </p>
          </div>

          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-700">
              Deleting this plant may also affect all related areas and machines
              linked to it.
            </p>
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            disabled={isPending}
            className="rounded-lg border border-slate-300 px-5 py-2.5 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleDelete}
            disabled={isPending}
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Trash2 size={18} />

            {isPending ? "Deleting..." : "Delete Plant"}
          </button>
        </div>
      </div>
    </div>
  );
}
