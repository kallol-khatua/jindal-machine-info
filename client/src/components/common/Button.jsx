import clsx from "clsx";

export default function Button({

    children,

    variant = "primary",

    className,

    ...props

}) {

    return (

        <button

            {...props}

            className={clsx(

                "rounded-lg px-6 py-3 font-medium transition",

                {

                    "bg-blue-700 text-white hover:bg-blue-800":

                        variant === "primary",

                    "border border-slate-300 bg-white hover:bg-slate-100":

                        variant === "secondary",

                    "bg-red-600 text-white hover:bg-red-700":

                        variant === "danger",

                },

                className

            )}

        >

            {children}

        </button>

    );

}