import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Search, MapPinned } from "lucide-react";

import usePlant from "../../hooks/usePlants";
import { useAreas2 } from "../../hooks/useAreas";

import LoadingAreas from "../../components/areas/LoadingAreas";
import EmptyAreas from "../../components/areas/EmptyAreas";
import AreaGrid from "../../components/areas/AreaGrid";

export default function Areas() {
  const { plant } = useParams();

  const [search, setSearch] = useState("");
  const [plantId, setPlantId] = useState(plant);

  // useEffect(() => {
  //   setPlantId()
  // }, [plant])

  console.log(plantId);

  // Get Plant Details
  const {
    data: plantData,
    isLoading: plantLoading,
    isError: plantError,
  } = usePlant(plant);

  console.log("areas.jsx plant", plant);
  console.log("areas.jsx plantData", plantData);
  // Get Areas
  const {
    data: areaData,
    isLoading: areaLoading,
    isError: areaError,
  } = useAreas2(plant, search);
  console.log("area data", areaData);
  const areas = areaData?.areas || [];

  const filteredAreas = useMemo(() => {
    if (!search) return areas;

    return areas.filter((area) => {
      const value = `${area.name} ${area.slug}`.toLowerCase();

      return value.includes(search.toLowerCase());
    });
  }, [areas, search]);

  if (plantLoading || areaLoading) {
    return <LoadingAreas />;
  }

  if (plantError || areaError || !plantData) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="rounded-xl bg-white p-10 shadow">
          <h2 className="text-2xl font-bold">Plant Not Found</h2>

          <p className="mt-3 text-slate-500">
            Unable to load plant information.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Back */}

        <Link
          to="/plants"
          className="mb-6 inline-flex items-center gap-2 text-blue-600 hover:underline"
        >
          <ArrowLeft size={18} />
          Back to Plants
        </Link>

        {/* Header */}

        <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 p-8 text-white shadow-lg">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white/20 p-4">
              <MapPinned size={34} />
            </div>

            <div>
              <h1 className="text-4xl font-bold">{plantData.name}</h1>

              <p className="mt-2 text-blue-100">
                Select an area to view machine information.
              </p>
            </div>
          </div>
        </div>

        {/* Search */}

        <div className="mt-8">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search Area..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border bg-white py-3 pl-12 pr-4 outline-none transition focus:border-blue-500"
            />
          </div>
        </div>

        {/* Stats */}

        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800">Available Areas</h2>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {filteredAreas.length} Areas
          </span>
        </div>

        {/* Content */}

        <div className="mt-8">
          {filteredAreas.length === 0 ? (
            <EmptyAreas />
          ) : (
            <AreaGrid areas={filteredAreas} plantId={plantId} />
          )}
        </div>
      </div>
    </div>
  );
}
