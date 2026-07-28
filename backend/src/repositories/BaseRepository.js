export default class BaseRepository {

    constructor(model) {

        this.model = model;

    }

    create(data) {

        return this.model.create(data);

    }

    update(id, data) {

        return this.model.findByIdAndUpdate(

            id,

            data,

            {

                new: true,

                runValidators: true

            }

        );

    }

    delete(id) {

        return this.model.findByIdAndDelete(id);

    }

    deleteMany(filter) {

        return this.model.deleteMany(filter);

    }

    findById(id) {

        return this.model.findById(id);

    }

    findOne(filter) {

        return this.model.findOne(filter);

    }

    findAll(filter, pagination) {

        return this.model

            .find(filter)

            .sort(pagination.sort)

            .skip(pagination.skip)

            .limit(pagination.limit);

    }

    count(filter) {

        return this.model.countDocuments(filter);

    }

}