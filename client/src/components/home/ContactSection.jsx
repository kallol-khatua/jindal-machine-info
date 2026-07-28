export default function ContactSection() {

    return (

        <section className="bg-slate-900 py-24 text-white">

            <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

                <div>

                    <h2 className="mb-6 text-4xl font-bold">

                        Contact

                    </h2>

                    <p className="mb-3">

                        Jindal Steel Pellet Plant

                    </p>

                    <p className="mb-3">

                        Barbil, Odisha

                    </p>

                    <p>

                        Digital Machine Information Portal

                    </p>

                </div>

                <iframe
                    title="Plant Location"
                    src="https://www.google.com/maps?q=Barbil%20Odisha&output=embed"
                    className="h-96 w-full rounded-2xl"
                    loading="lazy"
                />

            </div>

        </section>

    );

}