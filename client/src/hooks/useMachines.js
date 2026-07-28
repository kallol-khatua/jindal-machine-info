import { useQuery } from "@tanstack/react-query";

import {

    getMachines, getMachine

} from "../services/machineApi";

export default function useMachines({

    plantId,

    areaId,

    search,

}) {

    return useQuery({

        queryKey: [

            "machines",

            plantId,

            areaId,

            search,

        ],

        queryFn: () =>

            getMachines({

                plantId,

                areaId,

                search,

            }),

        enabled:

            !!plantId &&

            !!areaId,

    });

}

export function useMachine(id) {

    return useQuery({

        queryKey: ["machine", id],

        queryFn: () => getMachine(id),

        enabled: !!id,

        staleTime: 1000 * 60 * 5,

        retry: 1,

        refetchOnWindowFocus: false,

    });

}