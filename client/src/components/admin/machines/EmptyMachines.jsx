import { Cpu } from "lucide-react";

export default function EmptyMachines({ onCreate }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6">
      {/* Icon */}

      <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
        <Cpu size={40} className="text-blue-600" />
      </div>

      {/* Title */}

      <h2 className="mt-6 text-2xl font-bold text-gray-800">
        No Machines Found
      </h2>

      {/* Description */}

      <p className="mt-3 max-w-md text-center text-gray-500">
        There are no machines available for the selected plant and area. Click
        the button below to add your first machine.
      </p>

      {/* Button */}

      <button
        onClick={onCreate}
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
      >
        Add First Machine
      </button>
    </div>
  );
}
