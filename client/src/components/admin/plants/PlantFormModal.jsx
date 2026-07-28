import { useEffect } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

import useCreatePlant from "../../../hooks/useCreatePlant";
import useUpdatePlant from "../../../hooks/useUpdatePlant";

export default function PlantFormModal({ open, onClose, plant }) {
  const isEdit = Boolean(plant);

  const { mutate: createPlant, isPending: isCreating } = useCreatePlant();

  const { mutate: updatePlant, isPending: isUpdating } = useUpdatePlant();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    if (open) {
      if (plant) {
        reset({
          name: plant.name || "",
          description: plant.description || "",
        });
      } else {
        reset({
          name: "",
          description: "",
        });
      }
    }
  }, [open, plant, reset]);

  const onSubmit = (formData) => {
    if (isEdit) {
      updatePlant(
        {
          id: plant._id,
          data: formData,
        },
        {
          onSuccess: () => {
            reset();
            onClose();
          },
        },
      );
    } else {
      createPlant(formData, {
        onSuccess: () => {
          reset();
          onClose();
        },
      });
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-xl rounded-xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-4">
          <div>
            <h2 className="text-xl font-semibold">
              {isEdit ? "Edit Plant" : "Add Plant"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {isEdit
                ? "Update plant information."
                : "Create a new pellet plant."}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6">
          {/* Plant Name */}

          <div>
            <label className="mb-2 block font-medium">Plant Name</label>

            <input
              type="text"
              placeholder="Example: PP1"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              {...register("name", {
                required: "Plant name is required",
                minLength: {
                  value: 2,
                  message: "Plant name must contain at least 2 characters",
                },
              })}
            />

            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Description */}

          <div>
            <label className="mb-2 block font-medium">Description</label>

            <textarea
              rows={4}
              placeholder="Enter plant description..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              {...register("description")}
            />
          </div>

          {/* Footer */}

          <div className="flex justify-end gap-3 border-t pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 px-5 py-2.5 transition hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isCreating || isUpdating}
              className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isCreating || isUpdating
                ? "Saving..."
                : isEdit
                  ? "Update Plant"
                  : "Create Plant"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
