export default class ApiResponse {

    constructor({

        success = true,

        message = "",

        data = null,

        meta = null,

    }) {

        this.success = success;
        this.message = message;
        this.data = data;

        if (meta) {
            this.meta = meta;
        }

    }

}