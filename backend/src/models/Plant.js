import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({

    name: {

        type: String,

        required: true,

        unique: true,

        trim: true,

    },

    slug: {

        type: String,

        unique: true,

        index: true,

    },

    description: {

        type: String,

        default: "",

    },

    image: {

        url: String,

        key: String,

    }

}, {

    timestamps: true,

});

export default mongoose.model(
    "Plant",
    plantSchema
);