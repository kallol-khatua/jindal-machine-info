import api from "./api";

/**
 * Get all areas
 * Optional:
 * /areas?plantId=<id>
 */
export const getAreas = async (plantId) => {

    const params = {};
    console.log("Area")

    if (plantId) {

        params.plantId = plantId;

    }

    const response = await api.get(

        "/areas",

        { params }

    );

    console.log(response)
    return response.data.data;

};


/**
 * Get single area
 */
export const getArea = async (identifier) => {

    const response = await api.get(

        `/areas/${identifier}`

    );

    return response.data.data;

};

/**
 * Create Area
 */
export const createArea = async (data) => {

    const response = await api.post(

        "/areas",

        data

    );

    return response.data.data;

};

/**
 * Update Area
 */
export const updateArea = async (

    id,

    data

) => {

    const response = await api.put(

        `/areas/${id}`,

        data

    );

    return response.data.data;

};

/**
 * Delete Area
 */
export const deleteArea = async (id) => {

    const response = await api.delete(

        `/areas/${id}`

    );

    return response.data.data;

};