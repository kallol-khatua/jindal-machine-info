import BaseRepository from "./BaseRepository.js";

import Plant from "../models/Plant.js";

class PlantRepository extends BaseRepository{

    constructor(){

        super(Plant);

    }

    findBySlug(slug){

        return this.findOne({

            slug

        });

    }

    findByName(name){

        return this.findOne({

            name

        });

    }

}

export default new PlantRepository();