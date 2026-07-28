import { Menu } from "lucide-react";

import NotificationBell from "./NotificationBell";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";
import Breadcrumbs from "./Breadcrumbs";

export default function AdminHeader({
    toggleSidebar,
}) {

    return (

        <header className="sticky top-0 z-40 border-b bg-white">

            <div className="flex h-16 items-center justify-between px-6">

                <div className="flex items-center gap-4">

                    <button
                        onClick={toggleSidebar}
                        className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
                    >

                        <Menu size={22} />

                    </button>

                    <Breadcrumbs />

                </div>

                <div className="flex items-center gap-4">

                    <ThemeToggle />

                    <NotificationBell />

                    <UserMenu />

                </div>

            </div>

        </header>

    );

}