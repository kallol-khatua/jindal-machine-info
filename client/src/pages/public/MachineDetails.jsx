import { useParams } from "react-router-dom";

import {useMachine} from "../../hooks/useMachines";

import LoadingMachine from "../../components/machine/LoadingMachine";
import MachineNotFound from "../../components/machine/MachineNotFound";
import MachineHeader from "../../components/machine/MachineHeader";
import MachineInfoCards from "../../components/machine/MachineInfoCard";
import MachineSpecificationTable from "../../components/machine/MachineSpecificationTable";

export default function MachineDetails() {
  const { id } = useParams();

  const {
    data: machine,

    isLoading,

    isError,
  } = useMachine(id);

  if (isLoading) {
    return <LoadingMachine />;
  }

  if (isError || !machine) {
    return <MachineNotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}

        <MachineHeader machine={machine} />

        {/* Information Cards */}

        <div className="mt-8">
          <MachineInfoCards machine={machine} />
        </div>

        {/* Specifications */}

        <div className="mt-8">
          <MachineSpecificationTable machine={machine} />
        </div>
      </div>
    </div>
  );
}
