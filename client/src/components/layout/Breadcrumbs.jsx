import {
    Link,
    useLocation,
} from "react-router-dom";

import {
    ChevronRight,
} from "lucide-react";

export default function Breadcrumbs() {

    const location = useLocation();

    const paths = location.pathname
        .split("/")
        .filter(Boolean);

    return (

        <div className="flex items-center text-sm">

            <Link
                to="/admin/dashboard"
                className="font-medium text-slate-600"
            >
                Dashboard
            </Link>

            {paths.slice(1).map((path, index) => {

                const url =
                    "/" +
                    paths
                        .slice(0, index + 2)
                        .join("/");

                return (

                    <div
                        key={url}
                        className="flex items-center"
                    >

                        <ChevronRight
                            size={16}
                            className="mx-2"
                        />

                        <Link
                            to={url}
                            className="capitalize text-slate-500"
                        >
                            {path.replaceAll("-", " ")}
                        </Link>

                    </div>

                );

            })}

        </div>

    );

}