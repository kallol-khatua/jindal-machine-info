import { Cpu, Factory, MapPin, Hash } from "lucide-react";

export default function LoadingMachine() {
  return (
    <div className="max-w-7xl mx-auto p-6 animate-pulse">
      {/* Header */}

      <div className="bg-white rounded-2xl shadow border p-8">
        <div className="h-10 w-80 bg-gray-200 rounded mb-4"></div>

        <div className="flex flex-wrap gap-3">
          <div className="h-6 w-28 bg-gray-200 rounded-full"></div>

          <div className="h-6 w-32 bg-gray-200 rounded-full"></div>

          <div className="h-6 w-40 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* Info Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {/* Plant */}

        <div className="bg-white rounded-xl shadow border p-6">
          <Factory size={32} className="text-gray-300 mb-4" />

          <div className="h-4 w-20 bg-gray-200 rounded mb-3"></div>

          <div className="h-6 w-32 bg-gray-200 rounded"></div>
        </div>

        {/* Area */}

        <div className="bg-white rounded-xl shadow border p-6">
          <MapPin size={32} className="text-gray-300 mb-4" />

          <div className="h-4 w-20 bg-gray-200 rounded mb-3"></div>

          <div className="h-6 w-32 bg-gray-200 rounded"></div>
        </div>

        {/* Tag */}

        <div className="bg-white rounded-xl shadow border p-6">
          <Hash size={32} className="text-gray-300 mb-4" />

          <div className="h-4 w-24 bg-gray-200 rounded mb-3"></div>

          <div className="h-6 w-28 bg-gray-200 rounded"></div>
        </div>

        {/* Machine */}

        <div className="bg-white rounded-xl shadow border p-6">
          <Cpu size={32} className="text-gray-300 mb-4" />

          <div className="h-4 w-24 bg-gray-200 rounded mb-3"></div>

          <div className="h-6 w-36 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Specifications */}

      <div className="bg-white rounded-2xl shadow border mt-8">
        <div className="p-6 border-b">
          <div className="h-8 w-56 bg-gray-200 rounded"></div>
        </div>

        <div className="p-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-6 py-4 border-b last:border-b-0"
            >
              <div className="h-5 bg-gray-200 rounded w-52"></div>

              <div className="h-5 bg-gray-200 rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
