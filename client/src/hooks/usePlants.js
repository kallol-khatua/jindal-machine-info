import { useQuery } from "@tanstack/react-query";
import { getPlants } from "../services/plantApi";

export default function usePlants() {
    return useQuery({
        queryKey: ["plants"],

        queryFn: async () => {
            const res = await getPlants();

            console.log("Plant API Response");
            console.log(res.data);

            return { data: res.data.data, meta: res.data.meta };
        },
    });
}