import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";

import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/public/Home";
import Team from "../pages/public/Team"
import About from "../pages/public/About";
import Plants from "../pages/public/Plants";
import Areas from "../pages/public/Areas";
import MachineList from "../pages/public/MachineList";
import MachineDetails from "../pages/public/MachineDetails";

import Login from "../pages/admin/LoginPage";
// import Dashboard from "../pages/admin/Dashboard";

import adminRoutes from "../utils/adminRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Layout */}

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/plants/:plant" element={<Areas />} />
        <Route path="/plants/:plant/:area" element={<MachineList />} />
        <Route path="/machine/:id" element={<MachineDetails />} />
      </Route>

      {/* Admin Login */}

      <Route path="/admin/login" element={<Login />} />

      {/* Protected */}

      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          {/* <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/plants" element={<ManagePlants />} />
          <Route path="/admin/areas" element={<ManageAreas />} />
          <Route path="/admin/machines" element={<Machines />} />
          <Route path="/admin/upload" element={<UploadExcel />} /> 
          <Route path="/admin/machines/add" element={<AddMachine />} />
          <Route path="/admin/machines/edit/:id" element={<EditMachine />} />
          */}

          {adminRoutes.map((route) => {
            const Component = route.element;

            return (
              <Route
                key={route.path}
                path={route.path}
                element={<Component />}
              />
            );
          })}
        </Route>
      </Route>
    </Routes>
  );
}
