import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createPlant } from "../services/plantApi";

export default function useCreatePlant() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: createPlant,

        onSuccess: () => {

            toast.success("Plant created successfully");

            queryClient.invalidateQueries({

                queryKey: ["plants"]

            });

        }

    });

}