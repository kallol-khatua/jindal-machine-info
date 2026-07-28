import { Link } from "react-router-dom";

import Card from "../common/Card";

export default function AreaCard({

    plant,

    area,

}) {

    return (

        <Link

            to={`/plants/${plant}/${area.name}`}

        >

            <Card

                className="p-8"

            >

                <h2

                    className="text-2xl font-bold"

                >

                    {area.name}

                </h2>

                <p

                    className="mt-5"

                >

                    {

                        area.machineCount

                    } Machines

                </p>

            </Card>

        </Link>

    );

}