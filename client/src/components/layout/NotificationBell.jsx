import {
    Bell,
} from "lucide-react";

export default function NotificationBell() {

    return (

        <button
            className="relative rounded-lg p-2 hover:bg-slate-100"
        >

            <Bell size={20} />

            <span
                className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"
            />

        </button>

    );

}