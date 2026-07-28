import { motion } from "framer-motion";
import LoginForm from "./LoginForm";
import { Factory, Cpu, ShieldCheck } from "lucide-react";

export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-slate-100">

            <div className="grid min-h-screen lg:grid-cols-2">

                {/* LEFT PANEL */}

                <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white px-16">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <Factory
                            size={60}
                            className="text-blue-400 mb-6"
                        />

                        <h1 className="text-5xl font-bold leading-tight">

                            Machine Information System

                        </h1>

                        <p className="mt-6 text-lg text-slate-300">

                            Pellet Plant, Barbil

                        </p>

                        <div className="mt-16 space-y-6">

                            <div className="flex items-center gap-4">

                                <Cpu className="text-blue-400"/>

                                <span>
                                    Digital Machine Records
                                </span>

                            </div>

                            <div className="flex items-center gap-4">

                                <ShieldCheck className="text-blue-400"/>

                                <span>
                                    Secure Admin Portal
                                </span>

                            </div>

                        </div>

                    </motion.div>

                </div>

                {/* RIGHT PANEL */}

                <div className="flex items-center justify-center p-8">

                    <LoginForm />

                </div>

            </div>

        </div>
    );
}