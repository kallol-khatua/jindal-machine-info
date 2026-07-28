import { AlertTriangle } from "lucide-react";

import useDeleteArea from "../../../hooks/useDeleteArea";

export default function DeleteAreaDialog({
  open,

  onClose,

  area,
}) {
  //----------------------------------------
  // Mutation
  //----------------------------------------

  const deleteMutation = useDeleteArea();

  //----------------------------------------
  // Delete Handler
  //----------------------------------------

  const handleDelete = async () => {
    if (!area) return;

    try {
      await deleteMutation.mutateAsync(area._id);

      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  //----------------------------------------
  // Hidden
  //----------------------------------------

  if (!open || !area) {
    return null;
  }

  //----------------------------------------
  // JSX
  //----------------------------------------

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white shadow-2xl">
        {/* Header */}

        <div className="border-b px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-red-100 p-3">
              <AlertTriangle size={28} className="text-red-600" />
            </div>

            <div>
              <h2 className="text-xl font-semibold">Delete Area</h2>

              <p className="text-sm text-slate-500">
                This action cannot be undone.
              </p>
            </div>
          </div>
        </div>

        {/* Body */}

        <div className="space-y-4 px-6 py-6">
          <p className="text-slate-600">
            Are you sure you want to delete
            <span className="mx-1 font-semibold text-slate-900">
              "{area.name}"
            </span>
            ?
          </p>

          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-700">
              Deleting this area may also affect machines, documents, or other
              data linked to it.
            </p>
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            disabled={deleteMutation.isPending}
            className="rounded-lg border border-slate-300 px-5 py-2 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleDelete}
            disabled={deleteMutation.isPending}
            className="rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {deleteMutation.isPending ? "Deleting..." : "Delete Area"}
          </button>
        </div>
      </div>
    </div>
  );
}
