import { Link } from "react-router-dom";

export default function PlantCards() {
  return (
    <section className="mx-auto bg-gray-200 px-4 py-16 text-center sm:px-6 sm:py-20">
      <h2 className="text-3xl font-semibold text-gray-900">
        Start with a plant section
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-gray-600">
        Choose PP1 or PP2 to see the process areas set up under it, then drill
        down to any machine or instrument.
      </p>
      <div className="mt-15">
        <Link
          to="/plants"
          className="btn-primary bg-amber-500 hover:bg-amber-600 rounded-md px-6 py-3 text-black"
        >
          Browse Plant Areas
        </Link>
      </div>
    </section>
  );
}
