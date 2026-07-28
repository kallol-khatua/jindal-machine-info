import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({

    storage,

    fileFilter(req, file, cb) {

        if (

            file.mimetype ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

            ||

            file.originalname.endsWith(".xlsx")

        ) {

            return cb(null, true);

        }

        cb(

            new Error(

                "Only Excel (.xlsx) files are allowed."

            )

        );

    }

});

export default upload;