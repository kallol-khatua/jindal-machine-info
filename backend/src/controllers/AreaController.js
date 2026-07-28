import BaseCrudController from "./BaseCrudController.js";

import areaService from "../services/AreaService.js";

class AreaController extends BaseCrudController {

    constructor() {

        super(

            areaService,

            "Area"

        );

    }

}

export default new AreaController();