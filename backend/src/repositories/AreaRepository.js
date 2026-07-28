import BaseRepository from "./BaseRepository.js";
import Area from "../models/Area.js";

class AreaRepository extends BaseRepository {

    constructor() {
        super(Area);
    }

    async findByPlantSlug(plantId, options) {

        return this.paginate(
            {
                plantId,
            },
            options
        );

    }

    async findBySlug(plantId, slug) {

        return this.model.findOne({
            plantId,
            slug,
        });

    }

    async findByPlantId(plantId) {

        return this.model
            .find({ plantId })
            .populate("plantId")
            .sort({ createdAt: -1 });

    }

    async deleteByPlantId(plantId) {

        return this.deleteMany({

            plantId

        });

    }

    async findByPlantAndName(

        plantId,

        name

    ) {

        return this.findOne({

            plantId,

            name

        });

    }

}

export default new AreaRepository();