import {
    LayoutDashboard,
    Factory,
    Map,
    Cog,
    Upload,
    Users,
    Settings,
} from "lucide-react";

const sidebarMenu = [
    {
        title: "Dashboard",
        path: "/admin/dashboard",
        icon: LayoutDashboard,
        roles: ["admin"],
    },

    {
        title: "Plants",
        path: "/admin/plants",
        icon: Factory,
        roles: ["admin"],
    },

    {
        title: "Areas",
        path: "/admin/areas",
        icon: Map,
        roles: ["admin"],
    },

    {
        title: "Machines",
        path: "/admin/machines",
        icon: Cog,
        roles: ["admin"],
    },

    {
        title: "Upload Excel",
        path: "/admin/upload",
        icon: Upload,
        roles: ["admin"],
    },

    {
        title: "Users",
        path: "/admin/users",
        icon: Users,
        roles: ["superadmin"],
    },

    {
        title: "Settings",
        path: "/admin/settings",
        icon: Settings,
        roles: ["admin"],
    },
];

export default sidebarMenu;