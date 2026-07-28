import bcrypt from "bcryptjs";

import ApiError from "../utils/ApiError.js";

import repo from "../repositories/user.repository.js";

import {

    generateToken

} from "../utils/jwt.js";

export async function login(

    email,

    password

) {

    const user =

        await repo.findByEmail(

            email

        );

    if (!user)

        throw new ApiError(

            401,

            "Invalid Credentials"

        );

    const ok =

        await bcrypt.compare(

            password,

            user.password

        );

    if (!ok)

        throw new ApiError(

            401,

            "Invalid Credentials"

        );

    const token =

        generateToken(user);

    return {

        token,

        user

    };

}