import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { login } from "../services/auth.service.js";

export const loginAdmin =

    asyncHandler(

        async (

            req,

            res

        ) => {
            const { email, password } = req.body;

            const data =

                await login(

                    email,

                    password

                );

            res.json(
                new ApiResponse({
                    success: true,
                    message: "Login Success",
                    data,
                })
            );

        }

    );