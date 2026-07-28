import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function PasswordInput({

    register,

    error

}) {

    const [show, setShow] = useState(false);

    return (

        <div>

            <label className="block mb-2 text-sm font-medium">

                Password

            </label>

            <div className="relative">

                <input

                    type={show ? "text" : "password"}

                    placeholder="Enter password"

                    {...register("password", {

                        required: "Password is required",

                    })}

                    className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 focus:border-blue-600 focus:outline-none"

                />

                <button

                    type="button"

                    onClick={() => setShow(!show)}

                    className="absolute right-3 top-3"

                >

                    {show ? <EyeOff size={20}/> : <Eye size={20}/>}

                </button>

            </div>

            {error && (

                <p className="mt-1 text-sm text-red-600">

                    {error.message}

                </p>

            )}

        </div>

    );

}