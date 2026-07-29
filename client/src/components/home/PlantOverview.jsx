import { Factory } from "lucide-react";

export default function PlantOverview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-steel-600/10 text-steel-600">
            <Factory className="h-5 w-5" />
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-graphite-900">
            About the plant
          </h2>
        </div>
        <div className="space-y-4 text-graphite-700 lg:col-span-3">
          <p>
            The Barbil facility is Jindal Steel&rsquo;s iron ore beneficiation
            and pelletization complex in Odisha&rsquo;s Keonjhar district,
            chosen for its proximity to high-grade iron ore reserves. Commercial
            pellet production began here in December 2009, and a second
            processing line was added in 2014, bringing the site&rsquo;s
            combined installed capacity to roughly 9 million tonnes of pellets a
            year across several grades.
          </p>
          <p>
            Pellets produced at Barbil feed directly into Jindal Steel&rsquo;s
            downstream steelmaking operations elsewhere in India, making this
            plant a foundational link in the group&rsquo;s integrated supply
            chain. This portal exists to keep the equipment running here — from
            grinding and additive mixing through to induration — properly
            documented and easy to look up on the floor.
          </p>
        </div>
      </div>
    </section>
  );
}
