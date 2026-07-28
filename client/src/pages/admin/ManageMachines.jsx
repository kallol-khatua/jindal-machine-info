import { useEffect, useMemo, useState } from "react";

import PageHeader from "../../components/admin/PageHeader";
import SearchBar from "../../components/admin/SearchBar";

import MachineStats from "../../components/admin/machines/MachineStats";
import MachineTable from "../../components/admin/machines/MachineTable";
import MachineFormModal from "../../components/admin/machines/MachineFormModal";
import DeleteMachineDialog from "../../components/admin/machines/DeleteMachineDialog";
import MachineQrModal from "../../components/admin/machines/MachineQrModal";
import EmptyMachines from "../../components/admin/machines/EmptyMachines";

import usePlants from "../../hooks/usePlants";
import useAreas from "../../hooks/useAreas";
import useMachines from "../../hooks/useMachines";

export default function ManageMachines() {
  //---------------------------------------------
  // States
  //---------------------------------------------

  const [selectedPlant, setSelectedPlant] = useState("");

  const [selectedArea, setSelectedArea] = useState("");

  const [search, setSearch] = useState("");

  const [selectedMachine, setSelectedMachine] = useState(null);

  const [openForm, setOpenForm] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [qrOpen, setQrOpen] = useState(false);
  

  //---------------------------------------------
  // Load Plants
  //---------------------------------------------

  const { data: response, isLoading: plantsLoading } = usePlants();
  const plants = useMemo(() => response?.data || [], [response?.data]);

  //---------------------------------------------
  // Load Areas
  //---------------------------------------------

  const { data: areas = [], isLoading: areasLoading } = useAreas(selectedPlant);

  //---------------------------------------------
  // Load Machines
  //---------------------------------------------

  const { data: machines = [], isLoading: machinesLoading } = useMachines({
    plantId: selectedPlant,
    areaId: selectedArea,
    search,
  });

  //---------------------------------------------
  // Auto Select First Plant
  //---------------------------------------------

  useEffect(() => {
    if (plants.length && !selectedPlant) {
      setSelectedPlant(plants[0]._id);
    }
  }, [plants, selectedPlant]);

  //---------------------------------------------
  // Auto Select First Area
  //---------------------------------------------

  useEffect(() => {
    if (areas.length) {
      setSelectedArea(areas[0]._id);
    } else {
      setSelectedArea("");
    }
  }, [areas]);

  //---------------------------------------------
  // Filter Machines
  //---------------------------------------------

  const filteredMachines = useMemo(() => {
    if (!search) return machines;

    return machines.filter(
      (machine) =>
        machine.name?.toLowerCase().includes(search.toLowerCase()) ||
        machine.machineCode?.toLowerCase().includes(search.toLowerCase()) ||
        machine.machineType?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [machines, search]);

  //---------------------------------------------
  // Handlers
  //---------------------------------------------

  const handleCreate = () => {
    setSelectedMachine(null);

    setOpenForm(true);
  };

  const handleEdit = (machine) => {
    setSelectedMachine(machine);

    setOpenForm(true);
  };

  const handleDelete = (machine) => {
    setSelectedMachine(machine);

    setDeleteOpen(true);
  };

  const handleQr = (machine) => {
    setSelectedMachine(machine);

    setQrOpen(true);
  };

  const handleCloseForm = () => {
    setSelectedMachine(null);

    setOpenForm(false);
  };

  const handleCloseDelete = () => {
    setSelectedMachine(null);

    setDeleteOpen(false);
  };

  const handleCloseQr = () => {
    setSelectedMachine(null);

    setQrOpen(false);
  };

  //---------------------------------------------
  // Loading
  //---------------------------------------------

  const loading = plantsLoading || areasLoading || machinesLoading;

  //---------------------------------------------
  // Selected Objects
  //---------------------------------------------

  const selectedPlantObject = plants.find(
    (plant) => plant._id === selectedPlant,
  );

  const selectedAreaObject = areas.find((area) => area._id === selectedArea);

  //---------------------------------------------
  // Render
  //---------------------------------------------

  return (
    <div className="space-y-6">
      <PageHeader
        title="Manage Machines"
        description="Create, update and manage plant machines."
        actionLabel="Add Machine"
        onAction={handleCreate}
      />

      {/* Filters */}

      <div className="bg-white rounded-xl shadow p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Plant</label>

            <select
              value={selectedPlant}
              onChange={(e) => setSelectedPlant(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              {plants.map((plant) => (
                <option key={plant._id} value={plant._id}>
                  {plant.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Area</label>

            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              {areas.map((area) => (
                <option key={area._id} value={area._id}>
                  {area.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Search</label>

            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search machines..."
            />
          </div>
        </div>
      </div>

      {/* Statistics */}

      <MachineStats
        totalMachines={filteredMachines.length}
        selectedPlant={selectedPlantObject}
        selectedArea={selectedAreaObject}
      />

      {/* Table */}

      <div className="bg-white rounded-xl shadow">
        {loading ? (
          <div className="p-10 text-center text-gray-500">
            Loading machines...
          </div>
        ) : filteredMachines.length === 0 ? (
          <EmptyMachines onCreate={handleCreate} />
        ) : (
          <MachineTable
            machines={filteredMachines}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onQr={handleQr}
          />
        )}
      </div>

      {/* Create / Edit */}

      {openForm && (
        <MachineFormModal
          open={openForm}
          onClose={handleCloseForm}
          machine={selectedMachine}
          plantId={selectedPlant}
          areaId={selectedArea}
        />
      )}

      {/* Delete */}

      {deleteOpen && selectedMachine && (
        <DeleteMachineDialog
          open={deleteOpen}
          machine={selectedMachine}
          onClose={handleCloseDelete}
        />
      )}

      {/* QR Code */}

      {qrOpen && selectedMachine && (
        <MachineQrModal
          open={qrOpen}
          machine={selectedMachine}
          onClose={handleCloseQr}
        />
      )}
    </div>
  );
}
