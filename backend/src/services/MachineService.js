import slugify from "slugify";

import BaseService from "./BaseService.js";

import machineRepository from "../repositories/MachineRepository.js";
import plantRepository from "../repositories/PlantRepository.js";
import areaRepository from "../repositories/AreaRepository.js";

class MachineService extends BaseService {

    constructor() {

        super(machineRepository);

    }

    //---------------------------------------
    // List Machines
    //---------------------------------------

    async list(query = {}) {

        const filter = {};

        if (query.plantId) {

            filter.plantId = query.plantId;

        }

        if (query.areaId) {

            filter.areaId = query.areaId;

        }

        return this.repository.findMachines(

            filter,

            query

        );

    }

    //---------------------------------------
    // Create Machine
    //---------------------------------------

    async create(data) {

        //---------------------------------------
        // Validate Plant
        //---------------------------------------

        const plant = await plantRepository.findById(

            data.plantId

        );

        if (!plant) {

            throw new Error(

                "Plant not found"

            );

        }

        //---------------------------------------
        // Validate Area
        //---------------------------------------

        const area = await areaRepository.findById(

            data.areaId

        );

        if (!area) {

            throw new Error(

                "Area not found"

            );

        }

        //---------------------------------------
        // Area belongs to Plant
        //---------------------------------------

        if (

            area.plantId.toString() !==

            plant._id.toString()

        ) {

            throw new Error(

                "Selected area does not belong to selected plant."

            );

        }

        //---------------------------------------
        // Generate Slug
        //---------------------------------------

        data.slug = slugify(

            data.name,

            {

                lower: true,

                strict: true,

            }

        );

        //---------------------------------------
        // Unique Machine Code
        //---------------------------------------

        const existingMachine =

            await this.repository.findByMachineCode(

                data.machineCode

            );

        if (existingMachine) {

            throw new Error(

                "Machine Code already exists."

            );

        }

        //---------------------------------------
        // QR Placeholder
        //---------------------------------------

        data.qrCodeUrl = "";

        //---------------------------------------
        // Save
        //---------------------------------------

        const machine = await super.create(data);

        //---------------------------------------
        // QR Generation
        //---------------------------------------

        /**
         * Later we will:
         *
         * 1. Generate QR
         * 2. Upload to AWS S3
         * 3. Update machine.qrCodeUrl
         */

        return machine;

    }

    //---------------------------------------
    // Update Machine
    //---------------------------------------

    async update(id, data) {

        const machine =

            await this.repository.findById(id);

        if (!machine) {

            throw new Error(

                "Machine not found."

            );

        }

        //---------------------------------------
        // Validate Plant
        //---------------------------------------

        if (data.plantId) {

            const plant =

                await plantRepository.findById(

                    data.plantId

                );

            if (!plant) {

                throw new Error(

                    "Plant not found."

                );

            }

        }

        //---------------------------------------
        // Validate Area
        //---------------------------------------

        if (data.areaId) {

            const area =

                await areaRepository.findById(

                    data.areaId

                );

            if (!area) {

                throw new Error(

                    "Area not found."

                );

            }

        }

        //---------------------------------------
        // Update Slug
        //---------------------------------------

        if (data.name) {

            data.slug = slugify(

                data.name,

                {

                    lower: true,

                    strict: true,

                }

            );

        }

        //---------------------------------------
        // Unique Machine Code
        //---------------------------------------

        if (data.machineCode) {

            const existing =

                await this.repository.findByMachineCode(

                    data.machineCode

                );

            if (

                existing &&

                existing._id.toString() !== id

            ) {

                throw new Error(

                    "Machine Code already exists."

                );

            }

        }

        return this.repository.updateMachine(

            id,

            data

        );

    }

    //---------------------------------------
    // Delete Machine
    //---------------------------------------

    async delete(id) {

        const machine = await this.repository.findById(id);

        if (!machine) {

            throw new Error("Machine not found.");

        }

        return this.repository.delete(id);

    }

    //---------------------------------------
    // Get One
    //---------------------------------------

    async getOne(identifier) {

        return this.repository.findOne({

            $or: [

                {

                    slug: identifier,

                },

                {

                    _id: identifier,

                },

            ],

        })

            .populate(

                "plantId",

                "name slug"

            )

            .populate(

                "areaId",

                "name slug"

            );

    }

}

export default new MachineService();