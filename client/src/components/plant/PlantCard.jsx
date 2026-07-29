import { Link } from "react-router-dom";

import Card from "../common/Card";
import Button from "../common/Button";

export default function PlantCard({ plant }) {
//   console.log(plant);
  return (
    <Card className="p-8">
      <h2 className="text-3xl font-bold">{plant.name}</h2>

      <p className="mt-2 text-slate-500">{plant.description}</p>

      <div className="mt-8 flex justify-between">
        <div>
          <p className="text-sm">Areas</p>

          <p className="text-xl font-bold">{plant.areaCount}</p>
        </div>

        <div>
          <p className="text-sm">Machines</p>

          <p className="text-xl font-bold">{plant.machineCount}</p>
        </div>
      </div>

      <Link to={`/plants/${plant._id}`}>
        <Button className="mt-8 w-full">Explore</Button>
      </Link>
    </Card>
  );
}
