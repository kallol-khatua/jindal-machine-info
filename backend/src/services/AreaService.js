import BaseService from "./BaseService.js";
import areaRepository from "../repositories/AreaRepository.js";
import plantRepository from "../repositories/PlantRepository.js";
import machineRepository from "../repositories/MachineRepository.js";
import slugify from "slugify";

class AreaService extends BaseService {

    constructor() {

        super(areaRepository);

    }

    async create(data) {

        const plant = await plantRepository.findById(data.plantId);

        if (!plant) {

            throw new Error("Plant not found");

        }

        data.slug = slugify(data.name, {
            lower: true,
            strict: true,
        });

        return super.create(data);

    }

    // async list(query) {

    //     if (!query.plant) {

    //         return super.list(query);

    //     }

    //     const plant = await plantRepository.findBySlug(query.plant);

    //     if (!plant) {

    //         return {
    //             items: [],
    //             meta: {
    //                 page: 1,
    //                 limit: 10,
    //                 total: 0,
    //                 totalPages: 0,
    //             },
    //         };

    //     }

    //     return areaRepository.findByPlantSlug(

    //         plant._id,

    //         query

    //     );

    // }

    async list(query = {}) {

        if (!query.plantId) {

            return super.list(query);

        }

        const items = await this.repository.findByPlantId(query.plantId);

        return {
            items,
            meta: {
                total: items.length,
            },
        };

    }

    async getOne(identifier) {

        return this.repository.findOne({

            $or: [

                { slug: identifier },

                { _id: identifier }

            ]

        }).populate("plantId");

    }

    async delete(id) {

        const area = await areaRepository.findById(id);

        if (!area) {

            throw new Error(

                "Area not found"

            );

        }

        await machineRepository.deleteByAreaId(id);

        return areaRepository.delete(id);

    }

}

export default new AreaService();