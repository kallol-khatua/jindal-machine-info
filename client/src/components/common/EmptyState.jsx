import {

    Inbox

} from "lucide-react";

export default function EmptyState({

    title,

    description,

}) {

    return (

        <div className="py-20 text-center">

            <Inbox

                size={70}

                className="mx-auto text-slate-400"

            />

            <h3

                className="
                    mt-6
                    text-2xl
                    font-semibold
                "

            >

                {title}

            </h3>

            <p

                className="
                    mt-2
                    text-slate-500
                "

            >

                {description}

            </p>

        </div>

    );

}