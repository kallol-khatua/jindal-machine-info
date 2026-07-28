import api from "./api";

//-------------------------------------
// Get Machines
//-------------------------------------

export const getMachines = async (filters = {}) => {

    const response = await api.get(

        "/machines",

        {

            params: filters,

        }

    );

    return response.data.data;

};

//---------------------------------------
// Get Machine by ID
//---------------------------------------

export const getMachine = async (id) => {

    const response = await api.get(

        `/machines/${id}`

    );

    return response.data.data;

};

//-------------------------------------
// Create
//-------------------------------------

export const createMachine = async (data) => {

    const response = await api.post(

        "/machines",

        data

    );

    return response.data.data;

};

//-------------------------------------
// Update
//-------------------------------------

export const updateMachine = async (

    id,

    data

) => {

    const response = await api.put(

        `/machines/${id}`,

        data

    );

    return response.data.data;

};

//-------------------------------------
// Delete
//-------------------------------------

export const deleteMachine = async (id) => {

    const response = await api.delete(

        `/machines/${id}`

    );

    return response.data.data;

};

//-------------------------------------
// Import from excel sheet
//-------------------------------------

export const importMachines = async (file) => {

    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(

        "/machines/import",

        formData,

        {

            headers: {

                "Content-Type": "multipart/form-data",

            },

        }

    );

    return response.data;

};