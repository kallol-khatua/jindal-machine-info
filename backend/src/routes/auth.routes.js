import { Router } from "express";

import { loginAdmin } from "../controllers/auth.controller.js";

import validator from "../validators/auth.validator.js";
import validate from "../middleware/validate.middleware.js";

const router = Router();

router.post(

    "/login",

    validator,
    validate,

    loginAdmin

);

export default router;