import { body } from "express-validator";

export const createAreaValidator = [

    body("plantId")
        .notEmpty()
        .withMessage("Plant is required"),

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Area name is required"),

];

export const updateAreaValidator = [

    body("name")
        .optional()
        .trim(),

    body("description")
        .optional()
        .trim(),

];