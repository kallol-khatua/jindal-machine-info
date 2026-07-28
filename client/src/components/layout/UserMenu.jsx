import {
    useState,
} from "react";

import {
    ChevronDown,
    LogOut,
    User,
} from "lucide-react";

import {
    useAuth,
} from "../../context/AuthContext";

export default function UserMenu() {

    const [open, setOpen] = useState(false);

    const {
        user,
        logout,
    } = useAuth();

    return (

        <div className="relative">

            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-slate-100"
            >

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white">

                    <User size={18} />

                </div>

                <div className="hidden text-left md:block">

                    <p className="font-medium">

                        {user?.name}

                    </p>

                    <p className="text-xs text-slate-500">

                        {user?.role}

                    </p>

                </div>

                <ChevronDown size={16} />

            </button>

            {open && (

                <div
                    className="absolute right-0 mt-2 w-56 rounded-xl border bg-white shadow-lg"
                >

                    <button
                        onClick={logout}
                        className="flex w-full items-center gap-3 px-4 py-3 hover:bg-slate-100"
                    >

                        <LogOut size={18} />

                        Logout

                    </button>

                </div>

            )}

        </div>

    );

}