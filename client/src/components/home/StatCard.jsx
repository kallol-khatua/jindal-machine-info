import CountUp from "react-countup";

export default function StatCard({
    title,
    value,
}) {

    return (

        <div className="rounded-2xl bg-blue-700 p-10 text-center text-white">

            <h2 className="mb-3 text-5xl font-bold">

                <CountUp

                    end={value}

                    duration={2}

                />

            </h2>

            <p className="text-lg">

                {title}

            </p>

        </div>

    );

}