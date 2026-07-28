import { useParams } from "react-router-dom";

import useAreas from "../../hooks/useAreas";

export default function Areas() {

    const { plant } = useParams();

    const {

        data,

        isLoading,

    } = useAreas(plant);

    console.log(data);

    return (

        <div>

            Areas Page

        </div>

    );

}