import { Pencil, Trash2, QrCode } from "lucide-react";

export default function MachineRow({
  machine,

  onEdit,

  onDelete,

  onQr,
}) {
  //---------------------------------------
  // Status Badge Style
  //---------------------------------------

  const statusClasses = {
    Running: "bg-green-100 text-green-700",

    Standby: "bg-yellow-100 text-yellow-700",

    Maintenance: "bg-blue-100 text-blue-700",

    Breakdown: "bg-red-100 text-red-700",

    Retired: "bg-gray-100 text-gray-700",
  };

  return (
    <tr className="hover:bg-gray-50 transition">
      {/* Machine */}

      <td className="px-6 py-4">
        <div>
          <h3 className="font-semibold text-gray-800">{machine.name}</h3>

          {machine.description && (
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {machine.description}
            </p>
          )}
        </div>
      </td>

      {/* Machine Code */}

      <td className="px-6 py-4 whitespace-nowrap">
        <span className="font-medium text-gray-700">{machine.machineCode}</span>
      </td>

      {/* Machine Type */}

      <td className="px-6 py-4 whitespace-nowrap">
        {machine.machineType || "--"}
      </td>

      {/* Manufacturer */}

      <td className="px-6 py-4 whitespace-nowrap">
        {machine.manufacturer || "--"}
      </td>

      {/* Status */}

      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            statusClasses[machine.status] || "bg-gray-100 text-gray-700"
          }`}
        >
          {machine.status || "Unknown"}
        </span>
      </td>

      {/* Actions */}

      <td className="px-6 py-4">
        <div className="flex justify-end items-center gap-2">
          {/* Edit */}

          <button
            onClick={() => onEdit(machine)}
            className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition"
            title="Edit"
          >
            <Pencil size={18} />
          </button>

          {/* Delete */}

          <button
            onClick={() => onDelete(machine)}
            className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>

          {/* QR Code */}

          {onQr && (
            <button
              onClick={() => onQr(machine)}
              className="p-2 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 transition"
              title="QR Code"
            >
              <QrCode size={18} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}
