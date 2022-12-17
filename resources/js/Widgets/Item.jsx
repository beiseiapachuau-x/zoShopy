import { useState } from "react";

import { MdFavorite } from "react-icons/md";

export default function Item({ product, setPopup, setItemData }) {
    const [alert, setAlert] = useState(false);

    const handlePopup = () => {
        setItemData({
            category: product.category,
            image: product.image,
            name: product.name,
            brand: product.brand,
            price: product.price,
            description: product.description,
        });
        setPopup("isCard");
    };

    const loginAlert = () => {
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 800);
    };

    return (
        <div className="inline-block relative bg-white rounded-md shadow-i">
            <div
                onClick={loginAlert}
                className="absolute -top-2 -left-2 p-2 text-white bg-green-800 rounded-full cursor-pointer delay-75 duration-300 ease-out hover:shadow-nb"
            >
                <MdFavorite size={20} />
            </div>

            {alert ? (
                <div className="inline-block absolute top-8 -left-2 p-2 bg-orange-600 rounded-md text-lg font-bold text-white">
                    Login first!!
                </div>
            ) : null}

            <div
                onClick={handlePopup}
                className="inline-flex m-2 w-48 h-60 bg-white rounded-md cursor-pointer"
            >
                <img
                    className="object-scale-down m-auto rounded-xl"
                    src={product.image}
                    alt=""
                />
            </div>
            <div className="m-2 mt-1 mb-3 text-center">
                <h3 className="text-xl uppercase font-kan font-semibold">
                    {product.name}
                </h3>
                <span>
                    <span className="text-xl font-semibold">₹</span>
                    {product.price}
                </span>

                <button
                    onClick={loginAlert}
                    className="block px-2 py-0 m-auto text-md font-comf bg-yellow-400 ring-1 rounded-xl"
                >
                    BUY NOW
                </button>
            </div>
        </div>
    );
}
