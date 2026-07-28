import { FileText, Search } from "lucide-react";

import { useMemo, useState } from "react";

export default function MachineSpecificationTable({ machine }) {
  const [search, setSearch] = useState("");

  const specifications = machine?.specifications || {};

  const filteredSpecifications = useMemo(() => {
    return Object.entries(specifications).filter(([key, value]) => {
      const text = `${key} ${value}`.toLowerCase();

      return text.includes(search.toLowerCase());
    });
  }, [specifications, search]);

  return (
    <div className="bg-white rounded-2xl shadow border overflow-hidden">
      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 p-6 border-b">
        <div className="flex items-center gap-3">
          <FileText size={26} className="text-blue-600" />

          <div>
            <h2 className="text-2xl font-bold">Machine Specifications</h2>

            <p className="text-sm text-gray-500">
              Total Specifications : {Object.keys(specifications).length}
            </p>
          </div>
        </div>

        <div className="relative w-full lg:w-80">
          <Search size={18} className="absolute left-3 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Search specification..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-4 font-semibold text-gray-700">
                Specification
              </th>

              <th className="text-left px-6 py-4 font-semibold text-gray-700">
                Value
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredSpecifications.length > 0 ? (
              filteredSpecifications.map(([key, value], index) => (
                <tr
                  key={key}
                  className={`

                                                border-t

                                                ${
                                                  index % 2 === 0
                                                    ? "bg-white"
                                                    : "bg-gray-50"
                                                }

                                                hover:bg-blue-50

                                                transition

                                            `}
                >
                  <td className="px-6 py-4 font-medium text-gray-800">{key}</td>

                  <td className="px-6 py-4 text-gray-700 break-words">
                    {value !== null && value !== undefined && value !== ""
                      ? String(value)
                      : "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="text-center py-12">
                  <div className="flex flex-col items-center gap-3">
                    <Search size={48} className="text-gray-300" />

                    <p className="text-gray-500">No specifications found.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
