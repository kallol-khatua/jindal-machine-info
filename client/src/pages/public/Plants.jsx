import usePlants from "../../hooks/usePlants";

import Container from "../../components/common/Container";

import SectionHeader from "../../components/common/SectionHeader";

import PageLoader from "../../components/common/PageLoader";

import PlantGrid from "../../components/plant/PlantGrid";

export default function Plants() {

    const {

        data,

        isLoading,

    } = usePlants();

    if (isLoading)

        return <PageLoader />;

    return (

        <Container className="py-20">

            <SectionHeader

                title="Production Plants"

                subtitle="Choose a plant to browse equipment."

            />

            <PlantGrid

                plants={data}

            />

        </Container>

    );

}