import { Factory, MapPinned, Cpu } from "lucide-react";

function StatCard({ title, value, icon, color }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">{value}</h2>
        </div>

        <div className={`rounded-xl p-3 ${color}`}>{icon}</div>
      </div>
    </div>
  );
}

export default function PlantStats({
  totalPlants = 0,
  totalAreas = 0,
  totalMachines = 0,
}) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <StatCard
        title="Total Plants"
        value={totalPlants}
        icon={<Factory size={28} className="text-blue-700" />}
        color="bg-blue-100"
      />

      <StatCard
        title="Total Areas"
        value={totalAreas}
        icon={<MapPinned size={28} className="text-green-700" />}
        color="bg-green-100"
      />

      <StatCard
        title="Total Machines"
        value={totalMachines}
        icon={<Cpu size={28} className="text-purple-700" />}
        color="bg-purple-100"
      />
    </div>
  );
}
