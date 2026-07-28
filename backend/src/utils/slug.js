import slugify from "slugify";

export function createSlug(name) {

    return slugify(name, {

        lower: true,

        strict: true,

        trim: true,

    });

}