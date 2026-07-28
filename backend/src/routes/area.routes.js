import { Router } from "express";

import controller from "../controllers/AreaController.js";
import auth from "../middleware/auth.middleware.js";
import role from "../middleware/role.middleware.js";
import validate from "../middleware/validate.middleware.js";

import { createAreaValidator, updateAreaValidator, } from "../validators/area.validator.js";

const router = Router();

router.get(

    "/",

    controller.list

);

router.get(

    "/:identifier",

    controller.getOne

);

router.post(

    "/",

    auth,

    role("admin"),

    createAreaValidator,

    validate,

    controller.create

);

router.put(

    "/:id",

    auth,

    role("admin"),

    updateAreaValidator,

    validate,

    controller.update

);

router.delete(

    "/:id",

    auth,

    role("admin"),

    controller.delete

);

export default router;