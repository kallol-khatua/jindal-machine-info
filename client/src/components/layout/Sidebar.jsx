import { NavLink } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Factory,
  Map,
  Cog,
  Upload,
  LogOut,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import BrandLogo from "./BrandLogo";

import sidebarMenu from "../../utils/sidebarMenu";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ collapsed, setCollapsed }) {
  const { logout } = useAuth();
  const { user } = useAuth();

  return (
    <aside
      className={`min-h-screen border-r bg-white transition-all duration-300
            ${collapsed ? "w-20" : "w-64"}`}
    >
      <div className="flex h-20 items-center justify-between border-b px-4">
        <BrandLogo showText={!collapsed} />

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-lg p-2 hover:bg-slate-100"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="mt-5 flex flex-col gap-2 px-3">
        {/* {sidebarMenu.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))} */}

        {sidebarMenu

          .filter((item) => item.roles.includes(user?.role))

          .map((item) => (
            <SidebarItem key={item.path} item={item} collapsed={collapsed} />
          ))}
      </nav>

      <div className="absolute bottom-6 px-3">
        <button
          onClick={logout}
          className="flex w-full items-center rounded-lg px-4 py-3 text-red-600 hover:bg-red-50"
        >
          <LogOut size={20} />

          {!collapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </aside>
  );
}
