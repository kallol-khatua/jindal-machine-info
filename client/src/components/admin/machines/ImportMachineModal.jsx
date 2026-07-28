import { useState } from "react";

import { Upload, X } from "lucide-react";

import useImportMachines from "../../../hooks/useImportMachines";

export default function ImportMachineModal({
  open,

  onClose,
}) {
  const [file, setFile] = useState(null);

  const importMutation = useImportMachines();

  if (!open) return null;

  const handleSubmit = async () => {
    if (!file) return;

    await importMutation.mutateAsync(file);

    setFile(null);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-lg w-[500px] p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Import Machines</h2>

          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <input
          type="file"
          accept=".xlsx"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full border rounded-lg p-3"
        />

        {file && <p className="mt-3 text-sm text-gray-600">{file.name}</p>}

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={!file || importMutation.isPending}
            className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2"
          >
            <Upload size={18} />

            {importMutation.isPending ? "Importing..." : "Import"}
          </button>
        </div>
      </div>
    </div>
  );
}
