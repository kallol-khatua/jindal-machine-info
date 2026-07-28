import jwt from "jsonwebtoken";

import ApiError from "../utils/ApiError.js";

export default function (

    req,

    res,

    next

) {

    const header =

        req.headers.authorization;

    if (!header)

        return next(

            new ApiError(

                401,

                "Unauthorized"

            )

        );

    const token =

        header.split(" ")[1];

    try {

        const decoded =

            jwt.verify(

                token,

                process.env.JWT_SECRET

            );

        req.user = decoded;

        next();

    }

    catch {

        next(

            new ApiError(

                401,

                "Invalid Token"

            )

        );

    }

}