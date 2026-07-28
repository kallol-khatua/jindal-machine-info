import { Trash2, X } from "lucide-react";

import useDeleteMachine from "../../../hooks/useDeleteMachine";

export default function DeleteMachineDialog({
  open,

  machine,

  onClose,
}) {
  const deleteMachineMutation = useDeleteMachine();

  if (!open || !machine) {
    return null;
  }

  //---------------------------------------
  // Delete Handler
  //---------------------------------------

  const handleDelete = async () => {
    try {
      await deleteMachineMutation.mutateAsync({
        id: machine._id,

        plantId: machine.plantId?._id || machine.plantId,

        areaId: machine.areaId?._id || machine.areaId,
      });

      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-red-100 p-2">
              <Trash2 size={22} className="text-red-600" />
            </div>

            <div>
              <h2 className="text-xl font-semibold">Delete Machine</h2>

              <p className="text-sm text-gray-500">
                This action cannot be undone.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div className="px-6 py-5">
          <p className="text-gray-700">
            Are you sure you want to delete
            <span className="font-semibold"> {machine.name}</span>?
          </p>

          <div className="mt-5 rounded-lg border bg-gray-50 p-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Machine Code</p>

                <p className="font-medium">{machine.machineCode}</p>
              </div>

              <div>
                <p className="text-gray-500">Type</p>

                <p className="font-medium">{machine.machineType}</p>
              </div>

              <div>
                <p className="text-gray-500">Manufacturer</p>

                <p className="font-medium">{machine.manufacturer || "--"}</p>
              </div>

              <div>
                <p className="text-gray-500">Status</p>

                <p className="font-medium">{machine.status}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            disabled={deleteMachineMutation.isPending}
            className="rounded-lg border px-5 py-2 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleDelete}
            disabled={deleteMachineMutation.isPending}
            className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700 disabled:opacity-50"
          >
            {deleteMachineMutation.isPending ? "Deleting..." : "Delete Machine"}
          </button>
        </div>
      </div>
    </div>
  );
}
