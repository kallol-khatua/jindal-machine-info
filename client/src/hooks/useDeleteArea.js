import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteArea } from "../services/areaApi";

export default function useDeleteArea() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: deleteArea,

        onSuccess: () => {

            toast.success("Area deleted successfully");

            queryClient.invalidateQueries({

                queryKey: ["areas"],

            });

        },

        onError: (error) => {

            toast.error(

                error?.response?.data?.message ||

                "Failed to delete area"

            );

        },

    });

}