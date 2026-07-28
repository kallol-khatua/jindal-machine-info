import api from "./api";

export function getPlants() {

    return api.get("/plants");

}

export function getPlant(identifier) {

    return api.get(

        `/plants/${identifier}`

    );

}

export function createPlant(data) {

    return api.post(

        "/plants",

        data

    );

}

export function updatePlant(

    id,

    data

) {

    return api.put(

        `/plants/${id}`,

        data

    );

}

export function deletePlant(id) {

    return api.delete(

        `/plants/${id}`

    );

}