import PlantCard from "./PlantCard";

export default function PlantGrid({

    plants,

}) {

    // console.log(plants)
    // console.log(plants?.data)

    return (

        <div

            className="grid gap-8 md:grid-cols-2"

        >

            {plants?.data.map(

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