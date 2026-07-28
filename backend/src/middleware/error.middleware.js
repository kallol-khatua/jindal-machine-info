import ApiResponse from "../utils/ApiResponse.js";

// export default function(

//     err,

//     req,

//     res,

//     next

// ){

//     const status=

//     err.status || 500;

//     return res

//     .status(status)

//     .json(

//         new ApiResponse(

//             false,

//             err.message

//         )

//     );

// }

export default function (err, req, res, next) {

    // console.error("ERROR:");
    // console.error(err);

    return res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });

}