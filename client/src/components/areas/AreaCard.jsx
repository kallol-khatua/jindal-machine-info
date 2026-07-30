import { Link } from "react-router-dom";
import { MapPinned, ArrowRight, Cpu } from "lucide-react";

export default function AreaCard({ area, plantID }) {
  console.log(area?.plantId?._id);
  return (
    // <>

    <div
      className="
                    h-full
                    rounded-2xl
                    border
                    bg-white
                    p-6
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500
                    hover:shadow-xl
                "
    >
      {/* Icon */}

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
        <MapPinned size={30} className="text-blue-600 group-hover:text-white" />
      </div>

      {/* Area Name */}

      <h3 className="mt-6 text-xl font-bold text-slate-800">{area.name}</h3>

      {/* Slug */}

      <p className="mt-1 text-sm text-slate-500">{area.slug}</p>

      {/* Machine Count */}

      {/* <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
          <div className="flex items-center gap-2">
            <Cpu size={18} className="text-blue-600" />

            <span className="text-sm text-slate-600">Machines</span>
          </div>

          <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
            {area.machineCount ?? 0}
          </span>
        </div> */}

      {/* Footer */}

      {/* <Link to={`/plants/${area?.plantId?._id}/${area._id}`} className="group block"></Link> */}
      {/* <div className="mt-6 flex items-center justify-between border-t pt-5">
        <span className="font-medium text-blue-600">View Machines</span>

        <ArrowRight
          size={18}
          className="
                            text-blue-600
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
        />
      </div> */}
      {/* </Link> */}
    </div>
  );
}
