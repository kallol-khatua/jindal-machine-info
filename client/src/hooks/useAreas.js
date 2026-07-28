import { useQuery } from "@tanstack/react-query";

import { getAreas } from "../services/areaApi";

export default function useAreas(

    plantId

) {

    return useQuery({

        queryKey: [

            "areas",

            plantId,

        ],

        queryFn: () =>

            getAreas(

                plantId

            ),

        enabled: !!plantId,

        staleTime: 1000 * 60 * 5,

        refetchOnWindowFocus: false,

    });

}