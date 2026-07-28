import BaseCrudController from "./BaseCrudController.js";
import asyncHandler from "../utils/asyncHandler.js";
import plantService from "../services/PlantService.js";
import ApiResponse from "../utils/ApiResponse.js";

class PlantController extends BaseCrudController {

    constructor() {

        super(

            plantService,

            "Plant"

        );

    }

    getBySlug = asyncHandler(

        async (req, res) => {

            const plant = await

                plantService.getBySlug(

                    req.params.slug

                );

            return res.json(

                new ApiResponse({

                    message:

                        "Plant fetched",

                    data: plant

                })

            );

        }

    );

}

export default new PlantController();