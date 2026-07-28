import { NavLink } from "react-router-dom";

export default function SidebarItem({
    item,
    collapsed,
}) {

    const Icon = item.icon;

    return (

        <NavLink
            to={item.path}
            className={({ isActive }) =>
                `
                flex items-center
                rounded-lg
                px-4
                py-3
                transition

                ${
                    isActive
                        ? "bg-blue-700 text-white"
                        : "text-slate-700 hover:bg-slate-100"
                }
            `
            }
        >

            <Icon size={20} />

            {!collapsed && (

                <span className="ml-3">

                    {item.title}

                </span>

            )}

        </NavLink>

    );

}