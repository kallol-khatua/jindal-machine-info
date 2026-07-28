import asyncHandler from "../utils/asyncHandler.js";

import ApiResponse from "../utils/ApiResponse.js";

import BaseCrudController from "./BaseCrudController.js";

import machineService from "../services/MachineService.js";

class MachineController extends BaseCrudController {

    constructor() {

        super(machineService);

    }

    //---------------------------------------
    // List Machines
    //---------------------------------------

    list = asyncHandler(async (req, res) => {

        const result = await this.service.list(req.query);

        return res.status(200).json(

            new ApiResponse({

                success: true,

                message: "Machines fetched successfully.",

                data: result.items,

                meta: result.meta,

            })

        );

    });

    //---------------------------------------
    // Get One Machine
    //---------------------------------------

    getOne = asyncHandler(async (req, res) => {

        const machine = await this.service.getOne(

            req.params.identifier

        );

        if (!machine) {

            return res.status(404).json(

                new ApiResponse({

                    success: false,

                    message: "Machine not found.",

                })

            );

        }

        return res.status(200).json(

            new ApiResponse({

                success: true,

                message: "Machine fetched successfully.",

                data: machine,

            })

        );

    });

    //---------------------------------------
    // Create Machine
    //---------------------------------------

    create = asyncHandler(async (req, res) => {

        const machine = await this.service.create(

            req.body

        );

        return res.status(201).json(

            new ApiResponse({

                success: true,

                message: "Machine created successfully.",

                data: machine,

            })

        );

    });

    //---------------------------------------
    // Update Machine
    //---------------------------------------

    update = asyncHandler(async (req, res) => {

        const machine = await this.service.update(

            req.params.id,

            req.body

        );

        return res.status(200).json(

            new ApiResponse({

                success: true,

                message: "Machine updated successfully.",

                data: machine,

            })

        );

    });

    //---------------------------------------
    // Delete Machine
    //---------------------------------------

    delete = asyncHandler(async (req, res) => {

        await this.service.delete(

            req.params.id

        );

        return res.status(200).json(

            new ApiResponse({

                success: true,

                message: "Machine deleted successfully.",

            })

        );

    });

}

export default new MachineController();