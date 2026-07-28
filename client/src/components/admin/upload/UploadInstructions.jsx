import {
    FileSpreadsheet,
    CheckCircle,
    AlertTriangle,
} from "lucide-react";

export default function UploadInstructions() {

    return (

        <div className="bg-white rounded-xl shadow border p-6">

            <div className="flex items-center gap-3 mb-5">

                <FileSpreadsheet
                    className="text-blue-600"
                    size={24}
                />

                <h2 className="text-xl font-semibold">

                    Excel File Instructions

                </h2>

            </div>

            {/* Required Columns */}

            <div className="mb-6">

                <h3 className="font-semibold text-gray-800 mb-3">

                    Required Columns

                </h3>

                <div className="overflow-x-auto">

                    <table className="min-w-full border rounded-lg">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="border px-4 py-2 text-left">

                                    Column

                                </th>

                                <th className="border px-4 py-2 text-left">

                                    Value

                                </th>

                                <th className="border px-4 py-2 text-left">

                                    Description

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td className="border px-4 py-2 font-medium">

                                    A

                                </td>

                                <td className="border px-4 py-2">

                                    Plant

                                </td>

                                <td className="border px-4 py-2">

                                    Plant must already exist.

                                </td>

                            </tr>

                            <tr>

                                <td className="border px-4 py-2 font-medium">

                                    B

                                </td>

                                <td className="border px-4 py-2">

                                    Area

                                </td>

                                <td className="border px-4 py-2">

                                    Existing area will be used. If not found, a new area will be created automatically.

                                </td>

                            </tr>

                            <tr>

                                <td className="border px-4 py-2 font-medium">

                                    C

                                </td>

                                <td className="border px-4 py-2">

                                    Machine Name

                                </td>

                                <td className="border px-4 py-2">

                                    Equipment name.

                                </td>

                            </tr>

                            <tr>

                                <td className="border px-4 py-2 font-medium">

                                    D

                                </td>

                                <td className="border px-4 py-2">

                                    Tag Number

                                </td>

                                <td className="border px-4 py-2">

                                    Unique tag number.

                                </td>

                            </tr>

                            <tr>

                                <td className="border px-4 py-2 font-medium">

                                    E →

                                </td>

                                <td className="border px-4 py-2">

                                    Specifications

                                </td>

                                <td className="border px-4 py-2">

                                    Dynamic specification columns (Motor Power, RPM, Capacity, Voltage, etc.).

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

            {/* Notes */}

            <div className="space-y-3">

                <div className="flex items-start gap-3">

                    <CheckCircle
                        className="text-green-600 mt-1"
                        size={18}
                    />

                    <p>

                        The first row must always contain column names.

                    </p>

                </div>

                <div className="flex items-start gap-3">

                    <CheckCircle
                        className="text-green-600 mt-1"
                        size={18}
                    />

                    <p>

                        Specification column names are automatically stored as keys in the database.

                    </p>

                </div>

                <div className="flex items-start gap-3">

                    <CheckCircle
                        className="text-green-600 mt-1"
                        size={18}
                    />

                    <p>

                        Blank specification values are allowed.

                    </p>

                </div>

                <div className="flex items-start gap-3">

                    <AlertTriangle
                        className="text-yellow-500 mt-1"
                        size={18}
                    />

                    <p>

                        Do not rename the first four column headers. The importer expects:
                        <strong> Plant</strong>,
                        <strong> Area</strong>,
                        <strong> Machine Name</strong>,
                        <strong> Tag Number</strong>.

                    </p>

                </div>

            </div>

        </div>

    );

}