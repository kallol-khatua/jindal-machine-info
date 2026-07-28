import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";

import { deleteMachine } from "../services/machineApi";

export default function useDeleteMachine() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id }) => deleteMachine(id),

        onSuccess: (_, variables) => {

            queryClient.invalidateQueries({

                queryKey: [

                    "machines",

                    variables.plantId,

                    variables.areaId,

                ],

            });

            toast.success("Machine deleted successfully.");

        },

        onError: (error) => {

            toast.error(

                error?.response?.data?.message ||

                "Failed to delete machine."

            );

        },

    });

}