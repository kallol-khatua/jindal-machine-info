import { Factory } from "lucide-react";
import { Link } from "react-router-dom";

const plants = [

    {
        name: "pp1",
        description: "Production Plant 1",
    },

    {
        name: "pp2",
        description: "Production Plant 2",
    }

];

export default function PlantCards() {

    return (

        <section className="bg-slate-100 py-24">

            <div className="mx-auto max-w-7xl px-6">

                <h2
                    className="mb-14 text-center text-4xl font-bold"
                >

                    Explore Plant Areas

                </h2>

                <div
                    className="grid gap-10 md:grid-cols-2"
                >

                    {plants.map((plant) => (

                        <Link
                            key={plant.name}
                            to={`/plants/${plant.name}`}
                            className="rounded-2xl bg-white p-10 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
                        >

                            <Factory
                                size={42}
                                className="mb-6 text-blue-700"
                            />

                            <h3
                                className="mb-2 text-3xl font-bold"
                            >

                                {plant.name}

                            </h3>

                            <p
                                className="text-slate-500"
                            >

                                {plant.description}

                            </p>

                        </Link>

                    ))}

                </div>

            </div>

        </section>

    );

}