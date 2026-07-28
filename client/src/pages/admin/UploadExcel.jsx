import { useState } from "react";
import {
  Upload,
  FileSpreadsheet,
  Download,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import useImportMachines from "../../hooks/useImportMachines";

export default function UploadExcel() {
  const [file, setFile] = useState(null);

  const [result, setResult] = useState(null);

  const [dragging, setDragging] = useState(false);

  const importMutation = useImportMachines();

  //---------------------------------------
  // Browse File
  //---------------------------------------

  const handleFileChange = (e) => {
    if (!e.target.files.length) return;

    setFile(e.target.files[0]);

    setResult(null);
  };

  //---------------------------------------
  // Drag Drop
  //---------------------------------------

  const handleDrop = (e) => {
    e.preventDefault();

    setDragging(false);

    if (!e.dataTransfer.files.length) return;

    setFile(e.dataTransfer.files[0]);

    setResult(null);
  };

  //---------------------------------------
  // Upload
  //---------------------------------------

  const handleUpload = async () => {
    if (!file) return;

    try {
      const response = await importMutation.mutateAsync(file);

      setResult(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold">Upload Equipment Excel</h1>

        <p className="text-gray-500 mt-2">
          Import all equipment into the system using an Excel file.
        </p>
      </div>

      {/* Upload Card */}

      <div className="bg-white rounded-xl shadow border p-8">
        <div
          onDragOver={(e) => {
            e.preventDefault();

            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`

                        border-2

                        border-dashed

                        rounded-xl

                        p-12

                        text-center

                        transition-all

                        ${
                          dragging
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-300"
                        }

                    `}
        >
          <Upload className="mx-auto mb-4" size={48} />

          <h2 className="text-xl font-semibold">Drag & Drop Excel File</h2>

          <p className="text-gray-500 mt-2">or</p>

          <label className="inline-block mt-5">
            <input
              type="file"
              accept=".xlsx"
              className="hidden"
              onChange={handleFileChange}
            />

            <span className="px-5 py-2 bg-blue-600 text-white rounded-lg cursor-pointer">
              Browse File
            </span>
          </label>
        </div>

        {/* Selected File */}

        {file && (
          <div className="mt-6 flex items-center gap-3 p-4 rounded-lg border bg-gray-50">
            <FileSpreadsheet className="text-green-600" />

            <div>
              <div className="font-medium">{file.name}</div>

              <div className="text-sm text-gray-500">
                {(file.size / 1024).toFixed(2)} KB
              </div>
            </div>
          </div>
        )}

        {/* Buttons */}

        <div className="flex justify-end gap-4 mt-8">
          <button className="flex items-center gap-2 px-5 py-2 border rounded-lg">
            <Download size={18} />
            Download Template
          </button>

          <button
            disabled={!file || importMutation.isPending}
            onClick={handleUpload}
            className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400"
          >
            <Upload size={18} />

            {importMutation.isPending ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>

      {/* Instructions */}

      <div className="bg-white rounded-xl shadow border p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">Excel Format</h2>

        <ul className="space-y-2 text-gray-700 list-disc ml-5">
          <li>First row should contain column names.</li>

          <li>Column A : Plant</li>

          <li>Column B : Area</li>

          <li>Column C : Machine Name</li>

          <li>Column D : Tag Number</li>

          <li>Column E onwards : Machine Specifications</li>

          <li>Plant must already exist.</li>

          <li>Area will be created automatically if not found.</li>
        </ul>
      </div>

      {/* Result */}

      {result && (
        <div className="bg-white rounded-xl shadow border p-6 mt-8">
          <div className="flex items-center gap-3 mb-5">
            <CheckCircle className="text-green-600" />

            <h2 className="text-xl font-semibold">Import Summary</h2>
          </div>

          <div className="grid grid-cols-4 gap-6">
            <div className="border rounded-lg p-4">
              <div className="text-gray-500">Total Rows</div>

              <div className="text-2xl font-bold">{result.totalRows}</div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="text-gray-500">Imported</div>

              <div className="text-2xl font-bold text-green-600">
                {result.imported}
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="text-gray-500">Failed</div>

              <div className="text-2xl font-bold text-red-600">
                {result.failed}
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="text-gray-500">Success Rate</div>

              <div className="text-2xl font-bold">
                {result.totalRows === 0
                  ? "0%"
                  : `${Math.round((result.imported / result.totalRows) * 100)}%`}
              </div>
            </div>
          </div>

          {result.errors?.length > 0 && (
            <>
              <div className="flex items-center gap-2 mt-8 mb-3">
                <AlertCircle className="text-red-500" />

                <h3 className="text-lg font-semibold">Errors</h3>
              </div>

              <div className="overflow-auto border rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left px-4 py-3">Row</th>

                      <th className="text-left px-4 py-3">Error</th>
                    </tr>
                  </thead>

                  <tbody>
                    {result.errors.map((item, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-4 py-3">{item.row}</td>

                        <td className="px-4 py-3 text-red-600">{item.error}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
