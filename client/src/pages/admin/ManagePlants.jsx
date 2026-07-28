import { useMemo, useState } from "react";

import usePlants from "../../hooks/usePlants";

import PageHeader from "../../components/admin/PageHeader";
import SearchBar from "../../components/admin/SearchBar";
import PlantStats from "../../components/admin/plants/PlantStats";
import PlantTable from "../../components/admin/plants/PlantTable";
import PlantFormModal from "../../components/admin/plants/PlantFormModal";
import DeletePlantDialog from "../../components/admin/plants/DeletePlantDialog";

export default function ManagePlants() {
  // ============================================
  // Fetch Plants
  // ============================================

  const { data, isLoading, isError, error } = usePlants();
  const meta = data?.meta || {};

  // ============================================
  // Search State
  // ============================================

  const [search, setSearch] = useState("");

  // ============================================
  // Add / Edit Modal
  // ============================================

  const [openModal, setOpenModal] = useState(false);

  const [selectedPlant, setSelectedPlant] = useState(null);

  // ============================================
  // Delete Dialog
  // ============================================

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [deletePlant, setDeletePlant] = useState(null);

  // ============================================
  // Filter Plants
  // ============================================

  const plants = useMemo(() => {
    if (!data?.data) return [];

    return data?.data.filter((plant) =>
      plant.name?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [data?.data, search]);

  // ============================================
  // Loading
  // ============================================

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="text-lg font-semibold text-slate-500">
          Loading Plants...
        </div>
      </div>
    );
  }

  // ============================================
  // Error
  // ============================================

  if (isError) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-8">
        <h2 className="text-xl font-bold text-red-600">
          Unable to Load Plants
        </h2>

        <p className="mt-2 text-red-500">
          {error?.message || "Something went wrong."}
        </p>
      </div>
    );
  }

  // ============================================
  // Render
  // ============================================

  return (
    <div className="space-y-8">
      {/* ================================= */}
      {/* Header */}
      {/* ================================= */}

      <PageHeader
        title="Manage Plants"
        subtitle="Create, update and manage Pellet Plants."
        buttonText="Add Plant"
        onButtonClick={() => {
          setSelectedPlant(null);
          setOpenModal(true);
        }}
      />

      {/* ================================= */}
      {/* Statistics */}
      {/* ================================= */}

      <PlantStats
        totalPlants={plants.length}
        totalAreas={meta?.totalAreas}
        totalMachines={meta?.totalMachines}
      />

      {/* ================================= */}
      {/* Search */}
      {/* ================================= */}

      <SearchBar value={search} onChange={setSearch} />

      {/* ================================= */}
      {/* Table */}
      {/* ================================= */}

      <PlantTable
        plants={plants}
        onAddPlant={() => {
          setSelectedPlant(null);
          setOpenModal(true);
        }}
        onEdit={(plant) => {
          setSelectedPlant(plant);
          setOpenModal(true);
        }}
        onDelete={(plant) => {
          setDeletePlant(plant);
          setDeleteOpen(true);
        }}
      />

      {/* ================================= */}
      {/* Create / Edit Modal */}
      {/* ================================= */}

      <PlantFormModal
        open={openModal}
        plant={selectedPlant}
        onClose={() => {
          setOpenModal(false);
          setSelectedPlant(null);
        }}
      />

      {/* ================================= */}
      {/* Delete Dialog */}
      {/* ================================= */}

      <DeletePlantDialog
        open={deleteOpen}
        plant={deletePlant}
        onClose={() => {
          setDeleteOpen(false);
          setDeletePlant(null);
        }}
      />
    </div>
  );
}
