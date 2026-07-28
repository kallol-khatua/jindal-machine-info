import { motion } from "framer-motion";

export default function ProcessStep({
    step,
}) {

    const Icon = step.icon;

    return (

        <motion.div

            whileHover={{
                y: -8,
            }}

            className="rounded-2xl bg-white p-8 shadow-lg"

        >

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">

                <Icon
                    className="text-blue-700"
                    size={28}
                />

            </div>

            <h3 className="mb-3 text-xl font-bold">

                {step.title}

            </h3>

            <p className="text-slate-600">

                {step.description}

            </p>

        </motion.div>

    );

}