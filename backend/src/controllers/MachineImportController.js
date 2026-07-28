import MachineImportService from "../services/MachineImportService.js";
import ApiResponse from "../utils/ApiResponse.js";

class MachineImportController {

    async importExcel(req, res, next) {

        try {

            if (!req.file) {

                return res.status(400).json({

                    success: false,

                    message: "Excel file is required."

                });

            }

            const result = await MachineImportService.importExcel(

                req.file.buffer

            );

            return res.status(200).json(

                new ApiResponse({

                    success: true,

                    message: "Excel imported successfully.",

                    data: result
                })


            );

        }

        catch (error) {

            next(error);

        }

    }

}

export default new MachineImportController();