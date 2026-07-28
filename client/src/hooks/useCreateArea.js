import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createArea } from "../services/areaApi";

export default function useCreateArea() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: createArea,

        onSuccess: (_, variables) => {

            toast.success("Area created successfully");

            queryClient.invalidateQueries({

                queryKey: [

                    "areas",

                    variables.plantId,

                ],

            });

        },

        onError: (error) => {

            toast.error(

                error?.response?.data?.message ||

                "Failed to create area"

            );

        },

    });

}