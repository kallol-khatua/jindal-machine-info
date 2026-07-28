import { Router } from "express";
import controller from "../controllers/PlantController.js";
import auth from "../middleware/auth.middleware.js";
import role from "../middleware/role.middleware.js";
import { createPlantValidator, updatePlantValidator } from "../validators/plant.validator.js";
import validate from "../middleware/validate.middleware.js"

const router = Router();

router.get(
    "/",
    controller.list
);

router.get(
    "/:identifier",
    controller.getOne
);

router.get(
    "/:id",
    controller.getById
);

router.post(
    "/",
    auth,
    role("admin"),
    createPlantValidator,
    validate,
    controller.create

);

router.put(
    "/:id",
    auth,
    role("admin"),
    updatePlantValidator,
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