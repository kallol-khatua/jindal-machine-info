import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";

import { createMachine } from "../services/machineApi";

export default function useCreateMachine() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: createMachine,

        onSuccess: (_, variables) => {

            queryClient.invalidateQueries({

                queryKey: [

                    "machines",

                    variables.plantId,

                    variables.areaId,

                ],

            });

            toast.success("Machine created successfully.");

        },

        onError: (error) => {

            toast.error(

                error?.response?.data?.message ||

                "Failed to create machine."

            );

        },

    });

}