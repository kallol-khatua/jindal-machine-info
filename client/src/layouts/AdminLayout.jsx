import {
    useState,
} from "react";

import {
    Outlet,
} from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import AdminHeader from "../components/layout/AdminHeader";

export default function AdminLayout() {

    const [collapsed, setCollapsed] =
        useState(false);

    const [mobileOpen, setMobileOpen] =
        useState(false);

    return (

        <div className="flex min-h-screen bg-slate-100">

            {/* Desktop Sidebar */}

            <div className="hidden lg:block">

                <Sidebar
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                />

            </div>

            {/* Mobile Drawer */}

            {mobileOpen && (

                <div
                    className="fixed inset-0 z-50 flex lg:hidden"
                >

                    <div
                        className="w-64 bg-white"
                    >

                        <Sidebar
                            collapsed={false}
                            setCollapsed={() => {}}
                        />

                    </div>

                    <div
                        className="flex-1 bg-black/50"
                        onClick={() =>
                            setMobileOpen(false)
                        }
                    />

                </div>

            )}

            {/* Main */}

            <div className="flex flex-1 flex-col">

                <AdminHeader
                    toggleSidebar={() =>
                        setMobileOpen(true)
                    }
                />

                <main className="flex-1 p-6">

                    <Outlet />

                </main>

            </div>

        </div>

    );

}