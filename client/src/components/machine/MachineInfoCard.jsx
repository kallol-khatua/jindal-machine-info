import { Cpu, Factory, MapPin, Hash } from "lucide-react";

export default function MachineInfoCards({ machine }) {
  const cards = [
    {
      title: "Machine Name",
      value: machine?.name || "-",
      icon: Cpu,
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
    },

    {
      title: "Plant",
      value: machine?.plantId?.name || "-",
      icon: Factory,
      bg: "bg-green-50",
      iconColor: "text-green-600",
    },

    {
      title: "Area",
      value: machine?.areaId?.name || "-",
      icon: MapPin,
      bg: "bg-orange-50",
      iconColor: "text-orange-600",
    },

    {
      title: "Tag Number",
      value: machine?.tagNumber || "-",
      icon: Hash,
      bg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div
              className={`${card.bg} px-6 py-5 flex items-center justify-between`}
            >
              <div>
                <p className="text-sm text-gray-600">{card.title}</p>

                <h3 className="mt-2 text-xl font-bold text-gray-900 break-words">
                  {card.value}
                </h3>
              </div>

              <div
                className={`w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow ${card.iconColor}`}
              >
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
