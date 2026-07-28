import { Building2 } from "lucide-react";

export default function PlantOverview() {

    return (

        <section className="bg-white py-24">

            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    <div>

                        <img
                            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80"
                            className="rounded-2xl shadow-xl"
                            alt=""
                        />

                    </div>

                    <div>

                        <div
                            className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-blue-700"
                        >

                            <Building2 size={18} />

                            <span className="ml-2">

                                Plant Overview

                            </span>

                        </div>

                        <h2
                            className="mb-6 text-4xl font-bold"
                        >

                            Modern Pellet Manufacturing

                        </h2>

                        <p
                            className="leading-9 text-slate-600"
                        >

                            This portal centralises
                            equipment information,
                            helping operators,
                            maintenance engineers,
                            and visitors access
                            machine details instantly
                            using QR codes or
                            structured navigation
                            across PP1 and PP2.

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}