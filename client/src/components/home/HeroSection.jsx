import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

const stats = [
  { label: "Installed Pellet Capacity", value: "9", unit: "MTPA" },
  { label: "Production Since", value: "2009", unit: "Commercial start-up" },
  { label: "Process Areas", value: "PP-1 / PP-2", unit: "Plant sections" },
];

export default function HeroSection() {
  return (
    <section className="blueprint-bg relative overflow-hidden bg-gray-200 border-b border-white/5">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-steel-400">
          <Flame className="h-3.5 w-3.5 text-amber-500" />
          Keonjhar District &middot; Odisha, India
        </div>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-black sm:text-6xl">
          Jindal Steel <span className="text-amber-500">Pellet Plant</span>,
          Barbil
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
          A digital asset register for every machine and instrument across our
          plant sections. Built for the people who run the floor — scan a QR tag
          on any equipment and get its full record in seconds.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            to="/plants"
            className="btn-primary rounded-md hover:bg-amber-600 bg-amber-500 px-6 py-2 text-base"
          >
            <div>Browse the Plant</div>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-black/10 bg-black/15 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-graphite-950 px-6 py-6">
              <div className="font-display text-3xl font-semibold text-black">
                {s.value}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-amber-500">
                {s.unit}
              </div>
              <div className="mt-2 text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
