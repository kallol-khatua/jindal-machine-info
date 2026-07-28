import StatCard from "./StatCard";

export default function StatisticsSection() {

    return (

        <section className="py-24">

            <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    title="Machines"
                    value={250}
                />

                <StatCard
                    title="Instruments"
                    value={600}
                />

                <StatCard
                    title="Areas"
                    value={18}
                />

                <StatCard
                    title="Plants"
                    value={2}
                />

            </div>

        </section>

    );

}