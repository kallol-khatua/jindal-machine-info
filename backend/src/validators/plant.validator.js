import { body } from "express-validator";

export const createPlantValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Plant name is required"),
];

export const updatePlantValidator = [
  body("name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Plant name cannot be empty"),

  body("description")
    .optional()
    .trim(),
];