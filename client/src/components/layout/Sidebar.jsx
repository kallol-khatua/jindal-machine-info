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
  const { logout, user } = useAuth();

  return (
    <aside
      className={`relative flex h-screen flex-col border-r bg-white transition-all duration-300
            ${collapsed ? "w-20" : "w-64"}`}
    >
      <div className="flex h-20 shrink-0 items-center justify-between border-b px-4">
        <BrandLogo showText={!collapsed} />
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-lg p-2 hover:bg-slate-100"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="mt-5 flex flex-1 flex-col gap-2 overflow-y-auto px-3 pb-20">
        {sidebarMenu
          .filter((item) => item.roles.includes(user?.role))
          .map((item) => (
            <SidebarItem key={item.path} item={item} collapsed={collapsed} />
          ))}
      </nav>

      <div className="absolute bottom-6 left-0 w-full px-3">
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