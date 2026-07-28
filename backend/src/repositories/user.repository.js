import User from "../models/User.js";

export default {

    findByEmail(email) {

        return User.findOne({

            email

        });

    }

}