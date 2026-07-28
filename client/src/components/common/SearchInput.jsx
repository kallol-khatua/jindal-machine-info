import {

    Search

} from "lucide-react";

export default function SearchInput({

    value,

    onChange,

    placeholder,

}) {

    return (

        <div className="relative">

            <Search

                size={18}

                className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                "

            />

            <input

                value={value}

                onChange={onChange}

                placeholder={placeholder}

                className="
                    w-full
                    rounded-lg
                    border
                    py-3
                    pl-11
                    pr-4
                    outline-none

                    focus:border-blue-700
                "

            />

        </div>

    );

}