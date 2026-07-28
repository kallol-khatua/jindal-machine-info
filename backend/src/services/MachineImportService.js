import XLSX from "xlsx";

import plantRepository from "../repositories/PlantRepository.js";
import areaRepository from "../repositories/AreaRepository.js";
import machineRepository from "../repositories/MachineRepository.js";
import Machine from "../models/Machine.js";

import { createSlug } from "../utils/slug.js";

class MachineImportService {

    async importExcel(buffer) {

        //---------------------------------------
        // Read Workbook
        //---------------------------------------

        const workbook = XLSX.read(buffer, {

            type: "buffer"

        });

        //---------------------------------------
        // First Sheet
        //---------------------------------------

        const sheet = workbook.Sheets[

            workbook.SheetNames[0]

        ];

        //---------------------------------------
        // Convert to Array
        //---------------------------------------

        const rows = XLSX.utils.sheet_to_json(

            sheet,

            {

                header: 1,

                defval: ""

            }

        );

        //---------------------------------------
        // Header Row
        //---------------------------------------

        const headers = rows[0];

        const requiredHeaders = [

            "Plant",

            "Area",

            "Machine Name",

            "Tag Number"

        ];

        for (let i = 0; i < requiredHeaders.length; i++) {

            if (headers[i] !== requiredHeaders[i]) {

                throw new Error(

                    `Column ${i + 1} should be '${requiredHeaders[i]}'`

                );

            }

        }

        //---------------------------------------
        // Remaining Rows
        //---------------------------------------

        const dataRows = rows.slice(1);

        let imported = 0;

        let failed = 0;

        const errors = [];

        for (

            let rowNumber = 0;

            rowNumber < dataRows.length;

            rowNumber++

        ) {

            const row = dataRows[rowNumber];

            try {

                const plantName = row[0]?.toString().trim();

                const areaName = row[1]?.toString().trim();

                const machineName = row[2]?.toString().trim();

                const tagNumber = row[3]?.toString().trim();

                const plant = await plantRepository.findByName(

                    plantName

                );

                if (!plant) {

                    throw new Error(

                        `Plant '${plantName}' not found.`

                    );

                }

                let area =

                    await areaRepository.findByPlantAndName(

                        plant._id,

                        areaName

                    );

                if (!area) {

                    area = await areaRepository.create({

                        plantId: plant._id,

                        name: areaName,

                        slug: createSlug(areaName)

                    });

                }

                const machine = {

                    plantId: plant._id,

                    areaId: area._id,

                    name: machineName,

                    slug: createSlug(

                        `${machineName} ${tagNumber}`

                    ),

                    tagNumber,

                    qrCodeUrl: "",

                    thumbnail: "",

                    specifications: {}

                };

                machine.specifications = {};

                for (let col = 4; col < headers.length; col++) {
                    const originalKey = headers[col]?.toString().trim();

                    if (!originalKey) continue;

                    const key = originalKey
                        .trim()
                        .replace(/\./g, "")
                        .replace(/\$/g, "")
                        .replace(/\//g, "_");
                        // .replace(/\s+/g, "_")
                        // .replace(/[()]/g, "");

                    if (!key) continue;

                    let value = row[col];

                    if (value === "" || value === null || value === undefined) {
                        continue;
                    }

                    if (value instanceof Date) {
                        value = value.toISOString();
                    } else if (typeof value === "object") {
                        value = JSON.stringify(value);
                    }

                    machine.specifications[key] = value;
                }

                const existingMachine =

                    await machineRepository.findByPlantAreaTagNumber(

                        plant._id,

                        area._id,

                        tagNumber

                    );

                if (existingMachine) {

                    throw new Error(

                        `Machine '${tagNumber}' already exists.`

                    );

                }

                // console.log(machine.specifications);
                // console.log(typeof machine.specifications);
                // console.log(machine);
                // console.log(machine.specifications instanceof Map);
                // await machineRepository.create(machine);
                const doc = new Machine(machine);

                // console.log(doc);
                // console.log(doc.specifications);

                await doc.save();

                imported++;

            } catch (err) {

                failed++;

                errors.push({

                    row: rowNumber + 2,

                    error: err.message

                });

            }

        }

        return {

            success: true,

            totalRows: dataRows.length,

            imported,

            failed,

            errors

        };

    }

}

export default new MachineImportService();








// async importExcel(buffer) {

//     //---------------------------------------
//     // Read Workbook
//     //---------------------------------------

//     const workbook = XLSX.read(buffer, {

//         type: "buffer"

//     });

//     //---------------------------------------
//     // First Sheet
//     //---------------------------------------

//     const sheet = workbook.Sheets[

//         workbook.SheetNames[0]

//     ];

//     //---------------------------------------
//     // Convert to Array
//     //---------------------------------------

//     const rows = XLSX.utils.sheet_to_json(

//         sheet,

//         {

//             header: 1,

//             defval: ""

//         }

//     );

//     //---------------------------------------
//     // Header Row
//     //---------------------------------------

//     const headers = rows[0];

//     //---------------------------------------
//     // Remaining Rows
//     //---------------------------------------

//     const dataRows = rows.slice(1);

//     console.log(headers);

//     console.log(dataRows.length);

//     return {

//         headers,

//         totalRows: dataRows.length

//     };

// }