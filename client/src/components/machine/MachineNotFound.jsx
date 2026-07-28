import { Link } from "react-router-dom";

import { AlertTriangle, ArrowLeft, Home } from "lucide-react";

export default function MachineNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg border p-10 text-center">
        <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mx-auto">
          <AlertTriangle size={48} className="text-red-600" />
        </div>

        <h1 className="mt-8 text-3xl font-bold text-gray-900">
          Machine Not Found
        </h1>

        <p className="mt-4 text-gray-600 leading-relaxed">
          The machine you are trying to access doesn't exist or may have been
          removed from the system.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <Home size={18} />
            Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 transition"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
