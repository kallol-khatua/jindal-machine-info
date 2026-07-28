import { LoaderCircle } from "lucide-react";

export default function PageLoader() {

    return (

        <div

            className="
                flex
                h-screen
                items-center
                justify-center
            "

        >

            <div className="text-center">

                <LoaderCircle

                    size={60}

                    className="
                        mx-auto
                        animate-spin
                        text-blue-700
                    "

                />

                <p

                    className="
                        mt-4
                        text-lg
                        text-slate-500
                    "

                >

                    Loading...

                </p>

            </div>

        </div>

    );

}