import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deletePlant } from "../services/plantApi";

export default function useDeletePlant() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deletePlant,

        onSuccess: () => {
            toast.success("Plant deleted successfully");

            queryClient.invalidateQueries({
                queryKey: ["plants"],
            });
        },

        onError: (error) => {
            toast.error(
                error?.response?.data?.message ||
                "Failed to delete plant"
            );
        },
    });
}