import { motion } from "framer-motion";

export default function FeatureCard({
    feature,
}) {

    const Icon = feature.icon;

    return (

        <motion.div

            whileHover={{
                scale: 1.04,
            }}

            className="rounded-2xl bg-white p-8 shadow-lg"

        >

            <Icon
                className="mb-5 text-blue-700"
                size={38}
            />

            <h3 className="mb-3 text-2xl font-semibold">

                {feature.title}

            </h3>

            <p className="text-slate-600">

                {feature.description}

            </p>

        </motion.div>

    );

}