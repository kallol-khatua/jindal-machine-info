import { processSteps } from "../../data/homeData";
import ProcessStep from "./ProcessStep";

export default function ProcessSection() {

    return (

        <section className="bg-white py-24">

            <div className="mx-auto max-w-7xl px-6">

                <h2 className="mb-4 text-center text-4xl font-bold">

                    Pellet Manufacturing Process

                </h2>

                <p className="mb-16 text-center text-slate-500">

                    A simplified overview of the production process.

                </p>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

                    {processSteps.map((step) => (

                        <ProcessStep
                            key={step.id}
                            step={step}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}