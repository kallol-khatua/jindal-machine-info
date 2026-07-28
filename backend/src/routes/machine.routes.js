import { Router } from "express";

import machineController from "../controllers/MachineController.js";
import machineValidator from "../validators/machine.validator.js";
import validate from "../middleware/validate.middleware.js";
import authMiddleware from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";
import MachineImportController from "../controllers/MachineImportController.js";

const router = Router();

//----------------------------------------------------
// Public Routes
//----------------------------------------------------

router.get(

    "/",

    machineController.list

);

router.get(

    "/:identifier",

    machineController.getOne

);

//----------------------------------------------------
// Protected Routes
//----------------------------------------------------

router.post(

    "/import",

    upload.single("file"),

    MachineImportController.importExcel

);

router.post(

    "/",

    authMiddleware,

    machineValidator,

    validate,

    machineController.create

);

router.put(

    "/:id",

    authMiddleware,

    machineValidator,

    validate,

    machineController.update

);

router.delete(

    "/:id",

    authMiddleware,

    machineController.delete

);

export default router;