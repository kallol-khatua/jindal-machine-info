import mongoose from "mongoose";

const { Schema } = mongoose;

const machineSchema = new Schema({

    //---------------------------------------
    // Relationships
    //---------------------------------------

    plantId: {

        type: Schema.Types.ObjectId,

        ref: "Plant",

        required: true,

        index: true,

    },

    areaId: {

        type: Schema.Types.ObjectId,

        ref: "Area",

        required: true,

        index: true,

    },

    //---------------------------------------
    // Basic Information
    //---------------------------------------

    name: {

        type: String,

        required: true,

        trim: true,

    },

    slug: {

        type: String,

        required: true,

        lowercase: true,

        trim: true,

    },

    tagNumber: {

        type: String,

        required: true,

        trim: true,

    },

    //---------------------------------------
    // QR
    //---------------------------------------

    qrCodeUrl: {

        type: String,

        default: "",

    },

    //---------------------------------------
    // Thumbnail
    //---------------------------------------

    thumbnail: {

        type: String,

        default: "",

    },

    //---------------------------------------
    // Dynamic Specifications
    //---------------------------------------

    specifications: {

        type: Map,

        of: Schema.Types.Mixed,

        default: {},

    }

}, {

    timestamps: true

});

machineSchema.index({

    plantId: 1,

    areaId: 1,

    tagNumber: 1

});

export default mongoose.model("Machine", machineSchema);