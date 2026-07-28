import BaseRepository from "./BaseRepository.js";
import Machine from "../models/Machine.js";

class MachineRepository extends BaseRepository {

    constructor() {

        super(Machine);

    }

    //---------------------------------------
    // Find by Slug
    //---------------------------------------

    async findBySlug(slug) {
        return this.model.findOne({ slug });

    }

    async findByPlantAreaTagNumber(
        plantId,
        areaId,
        tagNumber
    ) {

        return this.model.findOne({

            plantId,

            areaId,

            tagNumber

        });

    }

    //---------------------------------------
    // Get Machine by ID
    //---------------------------------------

    async findById(id) {

        return this.model

            .findOne({

                _id: id,

            })

            .populate("plantId", "name slug")

            .populate("areaId", "name slug");

    }

    //---------------------------------------
    // List Machines
    //---------------------------------------

    async findMachines(filter = {}, options = {}) {

        const page = Number(options.page) || 1;

        const limit = Number(options.limit) || 10;

        const skip = (page - 1) * limit;

        const query = {

            ...filter,

        };

        if (options.search) {

            query.$or = [

                {

                    name: {

                        $regex: options.search,

                        $options: "i",

                    },

                },

                {

                    machineCode: {

                        $regex: options.search,

                        $options: "i",

                    },

                },

                {

                    tagNumber: {

                        $regex: options.search,

                        $options: "i",

                    },

                },

            ];

        }

        const [items, total] = await Promise.all([

            this.model

                .find(query)

                .populate("plantId", "name slug")

                .populate("areaId", "name slug")

                .sort({

                    createdAt: -1,

                })

                .skip(skip)

                .limit(limit),

            this.model.countDocuments(query),

        ]);

        return {

            items,

            meta: {

                page,

                limit,

                total,

                totalPages: Math.ceil(total / limit),

            },

        };

    }

    //---------------------------------------
    // Update Machine
    //---------------------------------------

    async updateMachine(id, data) {

        return this.model.findByIdAndUpdate(

            id,

            data,

            {

                new: true,

                runValidators: true,

            }

        );

    }

    //---------------------------------------
    // Soft Delete
    //---------------------------------------

    async softDelete(id) {

        return this.model.findByIdAndUpdate(

            id,

            {

                new: true,

            }

        );

    }

    async deleteByPlantId(plantId) {

        return this.deleteMany({

            plantId

        });

    }

    async deleteByAreaId(areaId) {

        return this.deleteMany({

            areaId

        });

    }

}

export default new MachineRepository();