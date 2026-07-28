import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

export default class BaseCrudController {

    constructor(service, entityName) {

        this.service = service;
        this.entityName = entityName;

    }

    create = asyncHandler(async (req, res) => {

        const data = await this.service.create(req.body);
        // console.log(data)

        return res.status(201).json(
            new ApiResponse({
                message: `${this.entityName} created successfully`,
                data,
            })
        );

    });

    getById = asyncHandler(async (req, res) => {

        const data = await this.service.getById(req.params.id);

        if (!data) {
            throw new ApiError(
                404,
                `${this.entityName} not found`
            );
        }

        return res.json(
            new ApiResponse({
                message: `${this.entityName} fetched successfully`,
                data,
            })
        );

    });

    getOne = asyncHandler(

        async (

            req,

            res

        ) => {

            const item =

                await this.service.getOne(

                    req.params.identifier

                );

            if (!item) {

                throw new ApiError(

                    404,

                    `${this.entityName} not found`

                );

            }

            res.json(

                new ApiResponse({

                    message:

                        `${this.entityName} fetched`,

                    data: item

                })

            );

        }

    );

    update = asyncHandler(async (req, res) => {

        const data = await this.service.update(
            req.params.id,
            req.body
        );

        if (!data) {
            throw new ApiError(
                404,
                `${this.entityName} not found`
            );
        }

        return res.json(
            new ApiResponse({
                message: `${this.entityName} updated successfully`,
                data,
            })
        );

    });

    delete = asyncHandler(async (req, res) => {

        const data = await this.service.delete(req.params.id);

        if (!data) {
            throw new ApiError(
                404,
                `${this.entityName} not found`
            );
        }

        return res.json(
            new ApiResponse({
                message: `${this.entityName} deleted successfully`,
                data,
            })
        );

    });

    list = asyncHandler(async (req, res) => {

        // console.log(req.query)
        const result = await this.service.list(req.query);
        // console.log(result)

        return res.json(

            new ApiResponse({

                message: `${this.entityName} list fetched successfully`,

                data: result.items,

                meta: result.meta,

            })

        );

    });

}