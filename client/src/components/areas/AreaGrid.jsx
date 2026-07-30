import AreaCard from "./AreaCard";

export default function AreaGrid({ areas, plantID }) {
  console.log("areagrid",areas, plantID)
  return (
    <div
      className="
                grid
                gap-6
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
            "
    >
      {areas.map((area) => (
        <AreaCard key={area._id} area={area} plantID={area?.plantID?._id} />
      ))}
    </div>
  );
}
