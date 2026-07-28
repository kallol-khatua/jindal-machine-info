import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { importMachines } from "../services/machineApi";

export default function useImportMachines() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: importMachines,

        onSuccess: () => {

            toast.success(

                "Machines imported successfully."

            );

            queryClient.invalidateQueries({

                queryKey: ["machines"]

            });

            queryClient.invalidateQueries({

                queryKey: ["areas"]

            });

        },

        onError: (error) => {

            toast.error(

                error.response?.data?.message ||

                "Import failed."

            );

        }

    });

}