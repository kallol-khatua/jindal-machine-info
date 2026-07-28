import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
    Menu,
    X,
    LogIn,
} from "lucide-react";

import BrandLogo from "./BrandLogo";

const navLinks = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "PP1",
        path: "/plants/PP1",
    },
    {
        name: "PP2",
        path: "/plants/PP2",
    },
    {
        name: "About",
        path: "/about",
    },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] =
        useState(false);

    return (
        <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
                <BrandLogo />

                {/* Desktop Navigation */}

                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `font-medium transition ${
                                    isActive
                                        ? "text-blue-700"
                                        : "text-slate-700 hover:text-blue-700"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}

                    <Link
                        to="/admin/login"
                        className="flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 font-medium text-white transition hover:bg-blue-800"
                    >
                        <LogIn size={18} />

                        Admin Login
                    </Link>
                </nav>

                {/* Mobile Button */}

                <button
                    className="md:hidden"
                    onClick={() =>
                        setMobileOpen(!mobileOpen)
                    }
                >
                    {mobileOpen ? (
                        <X size={28} />
                    ) : (
                        <Menu size={28} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}

            {mobileOpen && (
                <div className="border-t bg-white md:hidden">
                    <div className="flex flex-col px-5 py-4">
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() =>
                                    setMobileOpen(false)
                                }
                                className={({ isActive }) =>
                                    `rounded-lg px-3 py-3 transition ${
                                        isActive
                                            ? "bg-blue-50 font-semibold text-blue-700"
                                            : "text-slate-700 hover:bg-slate-100"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}

                        <Link
                            to="/admin/login"
                            onClick={() =>
                                setMobileOpen(false)
                            }
                            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 font-medium text-white hover:bg-blue-800"
                        >
                            <LogIn size={18} />

                            Admin Login
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}