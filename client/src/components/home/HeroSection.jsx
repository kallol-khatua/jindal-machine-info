import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {

    return (

        <section
            className="relative h-[88vh] overflow-hidden"
        >

            {/* Background */}

            <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80"
                alt="Plant"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}

            <div
                className="relative mx-auto flex h-full max-w-7xl items-center px-6"
            >

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}

                    className="max-w-3xl text-white"
                >

                    <p
                        className="mb-4 text-lg text-blue-300"
                    >
                        Digital Machine Information Portal
                    </p>

                    <h1
                        className="mb-6 text-6xl font-bold leading-tight"
                    >
                        Jindal Steel

                        <br />

                        Pellet Plant

                        <span className="text-orange-400">

                            {" "}Barbil

                        </span>

                    </h1>

                    <p
                        className="mb-10 text-xl leading-9 text-slate-200"
                    >
                        Browse machines,
                        instrumentation,
                        plant areas,
                        and equipment
                        information using
                        QR codes or
                        intuitive navigation.
                    </p>

                    <div
                        className="flex flex-wrap gap-4"
                    >

                        <Link
                            to="/plants/pp1"
                            className="flex items-center gap-2 rounded-lg bg-blue-700 px-7 py-4 text-lg font-semibold hover:bg-blue-800"
                        >

                            Explore PP1

                            <ArrowRight size={20} />

                        </Link>

                        <Link
                            to="/plants/pp2"
                            className="rounded-lg border border-white px-7 py-4 text-lg hover:bg-white hover:text-black"
                        >

                            Explore PP2

                        </Link>

                    </div>

                </motion.div>

            </div>

        </section>

    );

}