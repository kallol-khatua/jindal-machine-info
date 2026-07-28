import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updatePlant } from "../services/plantApi";

export default function useUpdatePlant() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id, data }) =>

            updatePlant(id, data),

        onSuccess: () => {

            toast.success("Plant updated");

            queryClient.invalidateQueries({

                queryKey: ["plants"]

            });

        }

    });

}