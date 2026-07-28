import BaseService from "./BaseService.js";
import repo from "../repositories/PlantRepository.js";
import ApiError from "../utils/ApiError.js";
import { createSlug } from "../utils/slug.js";
import areaRepository from "../repositories/AreaRepository.js";
import machineRepository from "../repositories/MachineRepository.js";

class PlantService extends BaseService {

    constructor() {

        super(repo);

    }

    getOne(slug) {

        return repo.findBySlug(

            slug

        );

    }

    async list(query = {}) {

        const result = await super.list(query);

        const totalAreas = await areaRepository.count({});

        const totalMachines = await machineRepository.count({});

        result.meta.totalAreas = totalAreas;

        result.meta.totalMachines = totalMachines;

        return result;

    }

    async create(data) {

        const exists =

            await repo.findByName(

                data.name

            );

        if (exists) {

            throw new ApiError(

                409,

                "Plant already exists"

            );

        }

        data.slug =

            createSlug(

                data.name

            );

        return repo.create(data);

    }

    async delete(id) {

        const plant = await repo.findById(id);

        if (!plant) {

            throw new ApiError(

                404,

                "Plant not found"

            );

        }

        await machineRepository.deleteByPlantId(id);

        await areaRepository.deleteByPlantId(id);

        return repo.delete(id);

    }

}

export default new PlantService();