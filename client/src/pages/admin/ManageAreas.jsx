import { useEffect, useMemo, useState } from "react";

import PageHeader from "../../components/admin/PageHeader";
import PlantSelector from "../../components/admin/areas/PlantSelector";
import AreaStats from "../../components/admin/areas/AreaStats";
import AreaTable from "../../components/admin/areas/AreaTable";
import AreaFormModal from "../../components/admin/areas/AreaFormModal";
import DeleteAreaDialog from "../../components/admin/areas/DeleteAreaDialog";
import SearchBar from "../../components/admin/SearchBar";

import usePlants from "../../hooks/usePlants";
import useAreas from "../../hooks/useAreas";

export default function ManageAreas() {
  //----------------------------------------
  // Load Plants
  //----------------------------------------

  const { data: response, isLoading: plantsLoading } = usePlants();
  const plants = useMemo(() => response?.data || [], [response?.data]);
  // const plantMeta = response?.meta || {};

  //----------------------------------------
  // Selected Plant
  //----------------------------------------

  const [selectedPlant, setSelectedPlant] = useState("");

  //----------------------------------------
  // Search
  //----------------------------------------

  const [search, setSearch] = useState("");

  //----------------------------------------
  // Load Areas
  //----------------------------------------

  const {
    data: areas = [],
    isLoading: areasLoading,
    isError,
    error,
  } = useAreas(selectedPlant);

  //----------------------------------------
  // Modal State
  //----------------------------------------

  const [openModal, setOpenModal] = useState(false);

  const [selectedArea, setSelectedArea] = useState(null);

  //----------------------------------------
  // Delete Dialog
  //----------------------------------------

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [deleteArea, setDeleteArea] = useState(null);

  //----------------------------------------
  // Auto Select First Plant
  //----------------------------------------

  useEffect(() => {
    if (plants.length && !selectedPlant) {
      setSelectedPlant(plants[0]._id);
    }
  }, [plants]);

  useEffect(() => {
    console.log("Selected Plant:", selectedPlant);
  }, [selectedPlant]);

  //----------------------------------------
  // Current Plant
  //----------------------------------------

  const currentPlant = useMemo(() => {
    return plants.find((plant) => plant._id === selectedPlant);
  }, [plants, selectedPlant]);

  //----------------------------------------
  // Search Filter
  //----------------------------------------

  const filteredAreas = useMemo(() => {
    return areas.filter((area) =>
      area.name

        .toLowerCase()

        .includes(search.toLowerCase()),
    );
  }, [areas, search]);

  //----------------------------------------
  // Loading
  //----------------------------------------

  if (plantsLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Loading Plants...
      </div>
    );
  }

  //----------------------------------------
  // Error
  //----------------------------------------

  if (isError) {
    return (
      <div className="rounded-xl border border-red-300 bg-red-50 p-6">
        <h2 className="text-xl font-semibold text-red-600">
          Failed to load Areas
        </h2>

        <p className="mt-2">{error?.message}</p>
      </div>
    );
  }
  //----------------------------------------
  // JSX
  //----------------------------------------

  return (
    <div className="space-y-8">
      <PageHeader
        title="Manage Areas"
        subtitle="Create and manage plant areas."
        buttonText="Add Area"
        onButtonClick={() => {
          if (!selectedPlant) return;

          setSelectedArea(null);

          setOpenModal(true);
        }}
      />

      {/* Plant Selection */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Select Plant
        </label>

        <PlantSelector
          plants={plants}
          value={selectedPlant}
          onChange={setSelectedPlant}
        />
      </div>

      {/* Plant Information */}

      {currentPlant && (
        <AreaStats plant={currentPlant} totalAreas={filteredAreas.length} />
      )}

      {/* Search */}

      <SearchBar value={search} onChange={setSearch} />

      {/* Area Table */}

      <AreaTable
        loading={areasLoading}
        areas={filteredAreas}
        onAddArea={() => {
          setSelectedArea(null);

          setOpenModal(true);
        }}
        onEdit={(area) => {
          setSelectedArea(area);

          setOpenModal(true);
        }}
        onDelete={(area) => {
          setDeleteArea(area);

          setDeleteOpen(true);
        }}
      />

      {/* Create / Edit Area */}

      <AreaFormModal
        open={openModal}
        area={selectedArea}
        plantId={selectedPlant}
        plants={plants}
        onClose={() => {
          setOpenModal(false);

          setSelectedArea(null);
        }}
      />

      {/* Delete Dialog */}

      <DeleteAreaDialog
        open={deleteOpen}
        area={deleteArea}
        onClose={() => {
          setDeleteOpen(false);

          setDeleteArea(null);
        }}
      />
    </div>
  );
}
