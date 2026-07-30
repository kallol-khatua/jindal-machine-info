import { useQuery } from "@tanstack/react-query";

import { getAreas } from "../services/areaApi";

export function useAreas2(plantId, search = "") {
    console.log(plantId)

    return useQuery({

        queryKey: [
            "areas",
            plantId,
            search,
        ],

        queryFn: async () => {

            const response = await getAreas(plantId);
            console.log("usearea", response)

            return {

                areas: response || [],

                meta: response.meta || {},

            };

        },

        enabled: !!plantId,

        staleTime: 1000 * 60 * 5,

        retry: 1,

        refetchOnWindowFocus: false,

    });

}

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