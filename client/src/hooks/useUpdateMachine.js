import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";

import { updateMachine } from "../services/machineApi";

export default function useUpdateMachine() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id, data }) =>

            updateMachine(id, data),

        onSuccess: (_, variables) => {

            queryClient.invalidateQueries({

                queryKey: [

                    "machines",

                    variables.data.plantId,

                    variables.data.areaId,

                ],

            });

            toast.success("Machine updated successfully.");

        },

        onError: (error) => {

            toast.error(

                error?.response?.data?.message ||

                "Failed to update machine."

            );

        },

    });

}