import { features } from "../../data/homeData";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {

    return (

        <section className="bg-slate-100 py-24">

            <div className="mx-auto max-w-7xl px-6">

                <h2 className="mb-14 text-center text-4xl font-bold">

                    Portal Features

                </h2>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {features.map((feature) => (

                        <FeatureCard
                            key={feature.title}
                            feature={feature}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}