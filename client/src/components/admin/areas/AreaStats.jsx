import { Factory, MapPinned, CalendarDays } from "lucide-react";

export default function AreaStats({
  plant,

  totalAreas = 0,
}) {
  const cards = [
    {
      title: "Selected Plant",

      value: plant?.name || "-",

      subtitle: plant?.description || "No description",

      icon: Factory,

      color: "bg-blue-100 text-blue-700",
    },

    {
      title: "Total Areas",

      value: totalAreas,

      subtitle: "Areas in this plant",

      icon: MapPinned,

      color: "bg-green-100 text-green-700",
    },

    {
      title: "Created",

      value: plant?.createdAt
        ? new Date(plant.createdAt).toLocaleDateString()
        : "-",

      subtitle: "Plant creation date",

      icon: CalendarDays,

      color: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">{card.title}</p>

                <h3 className="mt-2 text-2xl font-bold text-slate-800">
                  {card.value}
                </h3>

                <p className="mt-2 text-sm text-slate-500">{card.subtitle}</p>
              </div>

              <div className={`rounded-xl p-3 ${card.color}`}>
                <Icon size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
