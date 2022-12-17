import { useState } from "react";

import { Link } from "@inertiajs/inertia-react";
import { MdFavorite } from "react-icons/md";

export default function CartButton({ cart, auth }) {
    const [alert, setAlert] = useState(false);

    const loginAlert = () => {
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 800);
    };

    return (
        <div className="inline-block  relative m-4 ml-0 align-middle  bg-green-700 rounded-full delay-75 duration-300 ease-out hover:shadow-nb ">
            {cart ? (
                <div className="inline-block absolute -top-[0.09rem] left-1 w-2 h-2 bg-red-700 rounded-full"></div>
            ) : null}

            {alert ? (
                <div className="inline-block absolute top-12 -left-2 p-2 bg-orange-600 rounded-md text-lg font-bold text-white">
                    Login first!!
                </div>
            ) : null}

            {auth ? (
                <Link
                    href={route("cart.index")}
                    className="block p-2 text-white opacity-60 hover:opacity-100"
                >
                    <MdFavorite size={24} />
                </Link>
            ) : (
                <div
                    onClick={loginAlert}
                    className="block p-2 text-white opacity-60 hover:opacity-100"
                >
                    <MdFavorite size={24} />
                </div>
            )}
        </div>
    );
}
