import { useEffect } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

import useCreateArea from "../../../hooks/useCreateArea";
import useUpdateArea from "../../../hooks/useUpdateArea";

export default function AreaFormModal({
  open,

  onClose,

  area,

  plantId,

  plants = [],
}) {
  //----------------------------------------
  // Mutations
  //----------------------------------------

  const createMutation = useCreateArea();

  const updateMutation = useUpdateArea();

  //----------------------------------------
  // React Hook Form
  //----------------------------------------

  const {
    register,

    handleSubmit,

    reset,

    setValue,

    formState: { errors },
  } = useForm({
    defaultValues: {
      plantId: "",

      name: "",

      description: "",

      image: "",
    },
  });

  //----------------------------------------
  // Populate Form
  //----------------------------------------

  useEffect(() => {
    if (!open) return;

    if (area) {
      setValue(
        "plantId",

        area.plantId?._id || area.plantId || plantId,
      );

      setValue(
        "name",

        area.name || "",
      );

      setValue(
        "description",

        area.description || "",
      );

      setValue(
        "image",

        area.image || "",
      );
    } else {
      reset({
        plantId,

        name: "",

        description: "",

        image: "",
      });
    }
  }, [open, area, plantId, reset, setValue]);

  //----------------------------------------
  // Submit
  //----------------------------------------

  const onSubmit = async (data) => {
    try {
      if (area) {
        await updateMutation.mutateAsync({
          id: area._id,

          data,
        });
      } else {
        await createMutation.mutateAsync(data);
      }

      reset();

      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  //----------------------------------------
  // Loading
  //----------------------------------------

  const loading = createMutation.isPending || updateMutation.isPending;

  //----------------------------------------
  // Close if Hidden
  //----------------------------------------

  if (!open) {
    return null;
  }

  //----------------------------------------
  // JSX
  //----------------------------------------

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-semibold">
            {area ? "Edit Area" : "Create Area"}
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6">
          {/* Plant */}

          <div>
            <label className="mb-2 block text-sm font-medium">Plant</label>

            <select
              {...register("plantId", {
                required: "Plant is required",
              })}
              className="w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
            >
              <option value="">Select Plant</option>

              {plants.map((plant) => (
                <option key={plant._id} value={plant._id}>
                  {plant.name}
                </option>
              ))}
            </select>

            {errors.plantId && (
              <p className="mt-1 text-sm text-red-500">
                {errors.plantId.message}
              </p>
            )}
          </div>

          {/* Area Name */}

          <div>
            <label className="mb-2 block text-sm font-medium">Area Name</label>

            <input
              type="text"
              placeholder="Enter Area Name"
              {...register("name", {
                required: "Area name is required",
              })}
              className="w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Description */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <textarea
              rows={4}
              placeholder="Area Description"
              {...register("description")}
              className="w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
            />
          </div>

          {/* Image */}

          <div>
            <label className="mb-2 block text-sm font-medium">Image URL</label>

            <input
              type="url"
              placeholder="https://example.com/image.png"
              {...register("image")}
              className="w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
            />
          </div>

          {/* Footer */}

          <div className="flex justify-end gap-3 border-t pt-5">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="rounded-lg border px-5 py-2 hover:bg-slate-100 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Saving..." : area ? "Update Area" : "Create Area"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
