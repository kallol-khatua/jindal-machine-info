import PlantCard from "./PlantCard";

export default function PlantGrid({

    plants,

}) {

    return (

        <div

            className="grid gap-8 md:grid-cols-2"

        >

            {plants.map(

                plant => (

                    <PlantCard

                        key={plant._id}

                        plant={plant}

                    />

                )

            )}

        </div>

    );

}