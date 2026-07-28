import { Cpu, Factory, MapPin } from "lucide-react";

export default function MachineStats({
  totalMachines,

  selectedPlant,

  selectedArea,
}) {
  const stats = [
    {
      title: "Total Machines",

      value: totalMachines,

      icon: Cpu,

      color: "text-blue-600",

      bg: "bg-blue-100",
    },

    {
      title: "Selected Plant",

      value: selectedPlant?.name || "--",

      icon: Factory,

      color: "text-green-600",

      bg: "bg-green-100",
    },

    {
      title: "Selected Area",

      value: selectedArea?.name || "--",

      icon: MapPin,

      color: "text-purple-600",

      bg: "bg-purple-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white rounded-xl shadow-sm border p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>

                <h2 className="mt-2 text-2xl font-bold text-gray-800 break-words">
                  {item.value}
                </h2>
              </div>

              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.bg}`}
              >
                <Icon className={`w-6 h-6 ${item.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
