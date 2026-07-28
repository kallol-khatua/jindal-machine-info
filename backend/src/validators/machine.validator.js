import { body } from "express-validator";

const machineValidator = [

    //---------------------------------------
    // Plant
    //---------------------------------------

    body("plantId")

        .trim()

        .notEmpty()

        .withMessage("Plant is required."),

    //---------------------------------------
    // Area
    //---------------------------------------

    body("areaId")

        .trim()

        .notEmpty()

        .withMessage("Area is required."),

    //---------------------------------------
    // Machine Name
    //---------------------------------------

    body("name")

        .trim()

        .notEmpty()

        .withMessage("Machine name is required.")

        .isLength({

            min: 2,

            max: 100,

        })

        .withMessage(

            "Machine name must be between 2 and 100 characters."

        ),

    //---------------------------------------
    // Machine Code
    //---------------------------------------

    body("machineCode")

        .trim()

        .notEmpty()

        .withMessage("Machine code is required.")

        .isLength({

            min: 2,

            max: 50,

        })

        .withMessage(

            "Machine code must be between 2 and 50 characters."

        ),

    //---------------------------------------
    // Tag Number
    //---------------------------------------

    body("tagNumber")

        .optional()

        .trim()

        .isLength({

            max: 50,

        })

        .withMessage(

            "Tag number cannot exceed 50 characters."

        ),

    //---------------------------------------
    // Machine Type
    //---------------------------------------

    body("machineType")

        .trim()

        .notEmpty()

        .withMessage("Machine type is required.")

        .isLength({

            max: 50,

        })

        .withMessage(

            "Machine type cannot exceed 50 characters."

        ),

    //---------------------------------------
    // Description
    //---------------------------------------

    body("description")

        .optional()

        .trim()

        .isLength({

            max: 1000,

        })

        .withMessage(

            "Description cannot exceed 1000 characters."

        ),

    //---------------------------------------
    // Manufacturer
    //---------------------------------------

    body("manufacturer")

        .optional()

        .trim()

        .isLength({

            max: 100,

        })

        .withMessage(

            "Manufacturer cannot exceed 100 characters."

        ),

    //---------------------------------------
    // Model
    //---------------------------------------

    body("model")

        .optional()

        .trim()

        .isLength({

            max: 100,

        })

        .withMessage(

            "Model cannot exceed 100 characters."

        ),

    //---------------------------------------
    // Serial Number
    //---------------------------------------

    body("serialNumber")

        .optional()

        .trim()

        .isLength({

            max: 100,

        })

        .withMessage(

            "Serial number cannot exceed 100 characters."

        ),

    //---------------------------------------
    // Installation Date
    //---------------------------------------

    body("installationDate")

        .optional()

        .isISO8601()

        .withMessage(

            "Installation date must be a valid date."

        ),

    //---------------------------------------
    // Location
    //---------------------------------------

    body("location")

        .optional()

        .trim()

        .isLength({

            max: 150,

        })

        .withMessage(

            "Location cannot exceed 150 characters."

        ),

    //---------------------------------------
    // Status
    //---------------------------------------

    body("status")

        .optional()

        .isIn([

            "Running",

            "Standby",

            "Maintenance",

            "Breakdown",

            "Retired",

        ])

        .withMessage(

            "Invalid machine status."

        ),

    //---------------------------------------
    // QR Code URL
    //---------------------------------------

    body("qrCodeUrl")

        .optional()

        .isURL()

        .withMessage(

            "QR Code URL must be valid."

        ),

    //---------------------------------------
    // Thumbnail
    //---------------------------------------

    body("thumbnail")

        .optional()

        .isURL()

        .withMessage(

            "Thumbnail URL must be valid."

        ),

    //---------------------------------------
    // Specifications
    //---------------------------------------

    body("specifications")

        .optional()

        .isObject()

        .withMessage(

            "Specifications must be an object."

        ),

];

export default machineValidator;