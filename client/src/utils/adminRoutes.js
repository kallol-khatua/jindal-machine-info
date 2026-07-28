import Dashboard from "../pages/admin/Dashboard";
import ManagePlants from "../pages/admin/ManagePlants";
import ManageAreas from "../pages/admin/ManageAreas";
import Machines from "../pages/admin/ManageMachines";
import UploadExcel from "../pages/admin/UploadExcel";

const adminRoutes = [
    {
        path: "/admin/dashboard",
        element: Dashboard,
    },

    {
        path: "/admin/plants",
        element: ManagePlants,
    },

    {
        path: "/admin/areas",
        element: ManageAreas,
    },

    {
        path: "/admin/machines",
        element: Machines,
    },

    {
        path: "/admin/upload",
        element: UploadExcel,
    },
];

export default adminRoutes;