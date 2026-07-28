import { CheckCircle2, AlertCircle, XCircle, ListChecks } from "lucide-react";

export default function UploadResult({ result }) {
  if (!result) return null;

  const successRate =
    result.totalRows === 0
      ? 0
      : Math.round((result.imported / result.totalRows) * 100);

  return (
    <div className="bg-white rounded-xl shadow border p-6 mt-8">
      {/* Header */}

      <div className="flex items-center gap-3 mb-6">
        <CheckCircle2 className="text-green-600" size={26} />

        <div>
          <h2 className="text-xl font-semibold">Import Completed</h2>

          <p className="text-sm text-gray-500">Excel import summary</p>
        </div>
      </div>

      {/* Summary */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="border rounded-lg p-4">
          <p className="text-gray-500 text-sm">Total Rows</p>

          <h3 className="text-3xl font-bold mt-2">{result.totalRows}</h3>
        </div>

        <div className="border rounded-lg p-4">
          <p className="text-gray-500 text-sm">Imported</p>

          <h3 className="text-3xl font-bold text-green-600 mt-2">
            {result.imported}
          </h3>
        </div>

        <div className="border rounded-lg p-4">
          <p className="text-gray-500 text-sm">Failed</p>

          <h3 className="text-3xl font-bold text-red-600 mt-2">
            {result.failed}
          </h3>
        </div>

        <div className="border rounded-lg p-4">
          <p className="text-gray-500 text-sm">Success Rate</p>

          <h3 className="text-3xl font-bold text-blue-600 mt-2">
            {successRate}%
          </h3>
        </div>
      </div>

      {/* Errors */}

      {result.errors?.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="text-red-500" size={22} />

            <h3 className="text-lg font-semibold">Failed Rows</h3>
          </div>

          <div className="overflow-x-auto rounded-lg border">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">Row</th>

                  <th className="px-4 py-3 text-left">Error</th>
                </tr>
              </thead>

              <tbody>
                {result.errors.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-3 font-medium">{item.row}</td>

                    <td className="px-4 py-3 text-red-600">{item.error}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Success Message */}

      {result.failed === 0 && (
        <div className="mt-8 flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
          <CheckCircle2 className="text-green-600" size={22} />

          <div>
            <p className="font-semibold text-green-700">Import Successful</p>

            <p className="text-sm text-green-600">
              All machines were imported successfully.
            </p>
          </div>
        </div>
      )}

      {/* Failed Message */}

      {result.failed > 0 && (
        <div className="mt-8 flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
          <XCircle className="text-red-600" size={22} />

          <div>
            <p className="font-semibold text-red-700">
              Some Rows Could Not Be Imported
            </p>

            <p className="text-sm text-red-600">
              Please correct the errors in the Excel file and upload it again.
            </p>
          </div>
        </div>
      )}

      {/* Footer */}

      <div className="mt-8 flex items-center gap-2 text-gray-500 text-sm">
        <ListChecks size={16} />
        Imported machines are immediately available in the Machine Management
        page.
      </div>
    </div>
  );
}
