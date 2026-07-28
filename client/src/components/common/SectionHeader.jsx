export default function SectionHeader({

    badge,

    title,

    subtitle,

    center = true,

}) {

    return (

        <div

            className={`
                mb-16
                ${center ? "text-center" : ""}
            `}

        >

            {badge && (

                <span

                    className="
                        mb-4
                        inline-flex
                        rounded-full
                        bg-blue-100
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-blue-700
                    "

                >

                    {badge}

                </span>

            )}

            <h2

                className="
                    mb-4
                    text-4xl
                    font-bold
                    text-slate-900
                "

            >

                {title}

            </h2>

            {subtitle && (

                <p

                    className="
                        mx-auto
                        max-w-3xl
                        text-lg
                        text-slate-500
                    "

                >

                    {subtitle}

                </p>

            )}

        </div>

    );

}