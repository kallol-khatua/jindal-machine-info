import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { X } from "lucide-react";

import useCreateMachine from "../../../hooks/useCreateMachine";
import useUpdateMachine from "../../../hooks/useUpdateMachine";

export default function MachineFormModal({
  open,

  onClose,

  machine,

  plantId,

  areaId,
}) {
  //----------------------------------------------------
  // React Query Mutations
  //----------------------------------------------------

  const createMachineMutation = useCreateMachine();

  const updateMachineMutation = useUpdateMachine();

  //----------------------------------------------------
  // Default Values
  //----------------------------------------------------

  const defaultValues = {
    plantId: plantId || "",

    areaId: areaId || "",

    name: "",

    machineCode: "",

    machineType: "",

    manufacturer: "",

    model: "",

    serialNumber: "",

    installationDate: "",

    location: "",

    status: "Running",

    description: "",

    specifications: {
      diameter: "",

      length: "",

      motorPower: "",

      rpm: "",
    },
  };

  //----------------------------------------------------
  // React Hook Form
  //----------------------------------------------------

  const {
    register,

    handleSubmit,

    reset,

    formState: {
      errors,

      isSubmitting,
    },
  } = useForm({
    defaultValues,
  });

  //----------------------------------------------------
  // Reset Form
  //----------------------------------------------------

  useEffect(() => {
    if (machine) {
      reset({
        plantId: machine.plantId?._id || plantId,

        areaId: machine.areaId?._id || areaId,

        name: machine.name || "",

        machineCode: machine.machineCode || "",

        machineType: machine.machineType || "",

        manufacturer: machine.manufacturer || "",

        model: machine.model || "",

        serialNumber: machine.serialNumber || "",

        installationDate: machine.installationDate
          ? machine.installationDate.substring(0, 10)
          : "",

        location: machine.location || "",

        status: machine.status || "Running",

        description: machine.description || "",

        specifications: {
          diameter: machine.specifications?.diameter || "",

          length: machine.specifications?.length || "",

          motorPower: machine.specifications?.motorPower || "",

          rpm: machine.specifications?.rpm || "",
        },
      });
    } else {
      reset({
        ...defaultValues,

        plantId,

        areaId,
      });
    }
  }, [machine, plantId, areaId, reset]);

  //----------------------------------------------------
  // Submit
  //----------------------------------------------------

  const onSubmit = async (data) => {
    try {
      if (machine) {
        await updateMachineMutation.mutateAsync({
          id: machine._id,

          data,
        });
      } else {
        await createMachineMutation.mutateAsync(data);
      }

      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  //----------------------------------------------------
  // Don't Render
  //----------------------------------------------------

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {machine ? "Edit Machine" : "Add Machine"}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Fill in the machine information.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Machine Name */}

            <div>
              <label className="block mb-2 font-medium">Machine Name</label>

              <input
                {...register("name", {
                  required: "Machine name is required",
                })}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Ball Mill 1"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Machine Code */}

            <div>
              <label className="block mb-2 font-medium">Machine Code</label>

              <input
                {...register("machineCode", {
                  required: "Machine code is required",
                })}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="BM-001"
              />

              {errors.machineCode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.machineCode.message}
                </p>
              )}
            </div>

            {/* Machine Type */}

            <div>
              <label className="block mb-2 font-medium">Machine Type</label>

              <input
                {...register("machineType", {
                  required: "Machine type is required",
                })}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Ball Mill"
              />

              {errors.machineType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.machineType.message}
                </p>
              )}
            </div>

            {/* Manufacturer */}

            <div>
              <label className="block mb-2 font-medium">Manufacturer</label>

              <input
                {...register("manufacturer")}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Metso"
              />
            </div>

            {/* Model */}

            <div>
              <label className="block mb-2 font-medium">Model</label>

              <input
                {...register("model")}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="BM450"
              />
            </div>

            {/* Serial Number */}

            <div>
              <label className="block mb-2 font-medium">Serial Number</label>

              <input
                {...register("serialNumber")}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="SN-10245"
              />
            </div>

            {/* Installation Date */}

            <div>
              <label className="block mb-2 font-medium">
                Installation Date
              </label>

              <input
                type="date"
                {...register("installationDate")}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            {/* Location */}

            <div>
              <label className="block mb-2 font-medium">Location</label>

              <input
                {...register("location")}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Grinding Section"
              />
            </div>

            {/* Status */}

            <div>
              <label className="block mb-2 font-medium">Status</label>

              <select
                {...register("status")}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="Running">Running</option>

                <option value="Standby">Standby</option>

                <option value="Maintenance">Maintenance</option>

                <option value="Breakdown">Breakdown</option>

                <option value="Retired">Retired</option>
              </select>
            </div>
          </div>

          {/* Description */}

          <div className="mt-6">
            <label className="block mb-2 font-medium">Description</label>

            <textarea
              rows={4}
              {...register("description")}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Machine description..."
            />
          </div>

          {/* Specifications */}

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Specifications</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block mb-2">Diameter</label>

                <input
                  {...register("specifications.diameter")}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="4.2"
                />
              </div>

              <div>
                <label className="block mb-2">Length</label>

                <input
                  {...register("specifications.length")}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="12"
                />
              </div>

              <div>
                <label className="block mb-2">Motor Power</label>

                <input
                  {...register("specifications.motorPower")}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="650"
                />
              </div>

              <div>
                <label className="block mb-2">RPM</label>

                <input
                  {...register("specifications.rpm")}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="18"
                />
              </div>
            </div>
          </div>
          {/* Footer */}

          <div className="mt-8 flex items-center justify-end gap-3 border-t pt-6">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={
                isSubmitting ||
                createMachineMutation.isPending ||
                updateMachineMutation.isPending
              }
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {createMachineMutation.isPending ||
              updateMachineMutation.isPending
                ? "Saving..."
                : machine
                  ? "Update Machine"
                  : "Create Machine"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
