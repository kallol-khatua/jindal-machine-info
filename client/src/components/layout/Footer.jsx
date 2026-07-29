import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";

export default function Footer() {

    return (

        <footer className="border-t bg-slate-900 text-white">

            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">

                <div>

                    <BrandLogo />

                    <p className="mt-4 text-sm text-slate-300">

                        Digital Machine Information Portal

                        for Jindal Steel Pellet Plant,

                        Barbil, Odisha.

                    </p>

                </div>

                <div>

                    <h3 className="mb-4 text-lg font-semibold">

                        Quick Links

                    </h3>

                    <div className="space-y-2">

                        <Link to="/">Home</Link>

                        <br />

                        

                        <Link to="/about">About</Link>

                    </div>

                </div>

                <div>

                    <h3 className="mb-4 text-lg font-semibold">

                        Plant Information

                    </h3>

                    <p className="text-sm text-slate-300">

                        Jindal Steel Pellet Plant

                    </p>

                    <p className="text-sm text-slate-300">

                        Barbil, Odisha

                    </p>

                    <p className="text-sm text-slate-300">

                        Digital Equipment Management System

                    </p>

                </div>

            </div>

            <div className="border-t border-slate-700 py-5 text-center text-sm text-slate-400">

                © {new Date().getFullYear()} Jindal Steel Pellet Plant

                • All Rights Reserved

            </div>

        </footer>

    );

}