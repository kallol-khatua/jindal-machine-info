import { getPagination } from "../utils/pagination.js";

export default class BaseService {

    constructor(repository) {

        this.repository = repository;

    }

    async list(query = {}) {

        const pagination = getPagination(query);

        const filter = {};

        const items = await this.repository.findAll(
            filter,
            pagination
        );

        const total = await this.repository.count(filter);

        return {

            items,

            meta: {

                page: pagination.page,

                limit: pagination.limit,

                total,

                totalPages: Math.ceil(
                    total / pagination.limit
                ),

            }

        };

    }

    create(data) {

        return this.repository.create(data);

    }

    getById(id) {

        return this.repository.findById(id);

    }

    getOne(identifier) {

        return this.repository.findById(

            identifier

        );

    }

    update(id, data) {

        return this.repository.update(id, data);

    }

    delete(id) {

        return this.repository.delete(id);

    }

}