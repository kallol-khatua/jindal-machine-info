<div

className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"

>

{

filteredAreas.map(

area=>

<AreaCard

key={area._id}

plant={plant}

area={area}

/>

)

}

</div>