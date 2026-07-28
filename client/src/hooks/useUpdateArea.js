import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateArea } from "../services/areaApi";

export default function useUpdateArea() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id, data }) =>

            updateArea(id, data),

        onSuccess: (_, variables) => {

            toast.success("Area updated successfully");

            queryClient.invalidateQueries({

                queryKey: [

                    "areas",

                    variables.data.plantId,

                ],

            });

        },

        onError: (error) => {

            toast.error(

                error?.response?.data?.message ||

                "Failed to update area"

            );

        },

    });

}